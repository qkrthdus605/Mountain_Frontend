import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';
import { Paging } from '../Paging/WritingPaging';
import { useNavigate } from 'react-router-dom';

const Div = styled.div`
    /* 전체 Div 스타일 */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center; 
    align-items: center;
    width: 100%;
    height: 77vh; 
    text-align: left;
    font-family: 'Segoe UI';
  `;
  const WritingDiv = styled.div`
  /* 내가 작성한 글 Block Div 스타일 */
  width: 900px; height: 600px;
  position: absolute;
  padding: 40px 30px; 
  background: white;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  box-shadow: 0px 5px 10px;
`
const H3 = styled.h3`
/* 제목 스타일 */
font-weight: bold;
margin-top:15px;
margin-bottom:15px;
font-size:25px;
`;

const Button = styled.button`
  /* 등록, 목록 버튼 스타일 */
  margin: 10px;
  width: 60px;
  border-radius:10px;
`;


function MyWriting(props) {
  const navigate = useNavigate();


  const [count, setCount] = React.useState(0);
  const [currentpage, setCurrentpage] = React.useState(1); //현재페이지
  const [postPerPage] = React.useState(3); //페이지당 콘텐츠 개수

  const [indexOfLastPost, setIndexOfLastPost] = React.useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = React.useState(0);
  const [currentPosts, setCurrentPosts] = React.useState(0);

  const [searchText, setSearchText] = React.useState('');
  const [items, setItems] = React.useState([]);

 
  React.useEffect(() => {
    fetch('http://54.208.255.25:8080/api/post/history', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         writer: localStorage.getItem('userId'),
      }),
    })
      .then((response) => {
        console.log('res', response);
        return response.json();
      })
      .then((data) => {
        console.log('data', data.list);
        setItems(data.list);
      });
  }, []);

  React.useEffect(() => {
    setCount(items.length);
 }, [items]);

  React.useEffect(() => {
    setCount(items.length);
    setIndexOfLastPost(currentpage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(items.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentpage, indexOfFirstPost, indexOfLastPost, items, postPerPage]);


  const handleClick = () => {
    navigate('/community/add');
  };

  const setPage = (e) => {
    setCurrentpage(e);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      fetch('http://54.208.255.25:8080/api/post/main/' + searchText, {
        method: 'GET',
        async: false,
      })
        .then((response) => {
          console.log('res', response);
          return response.json();
        })
        .then((data) => {
          console.log('data', data.list);
          setItems(data.list);
        });
    }
  };

  const onDetailClick = (id) => {
    navigate('/community/detail/' + id, { state: { id } });
  };


  return (
    <>
      <div>
      <Header />
      <Div>
          <WritingDiv> 
          <div className="row border-bottom border-success border-3" >
          <div className="col">
            <H3>내가 작성한 글</H3>
          </div>
          <div className="col-2">
            <Button
              className="btn btn-outline-success"
              type="button"
              onClick={handleClick}
              style={{ float: 'right' }}
            >  작성
            </Button>
          </div>
        </div>
          
        {currentPosts && items.length > 0 ? (
              currentPosts.map((item) => (

          <div
            className="row border border-2 mt-4"
            style={{ borderRadius: '15px' }}
            key={item.id}
            onClick={() => onDetailClick(item.count)}
          >
            <div className="row pt-2">
              <div className="col-10">
                <div className="fw-bold">{item.title}</div>
              </div>
              <div className="col text-end" style={{ color: '#808080' }}>
              {item.updatedAt.split('T')[0] +
                        ' ' +
                        item.updatedAt.split('T')[1].substr(0, 5) ||
                        item.createdAt.split('T')[0] +
                          ' ' +
                          item.createdAt.split('T')[1].substr(0, 5)}
              </div>
            </div>

            <div className="row pt-2 pb-2">
              <div className="col-10">
                <div
                  style={{
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    color: '#808080',
                  }}
                >
                   <div
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        ></div>
                </div>
                </div>
                <div className="col text-end" style={{ color: '#808080' }}>
                      {item.name}
                    </div>
              
            </div>
          </div>
              ))
              ) : (
                <div
                className="row border border-2 mt-4"
                style={{ borderRadius: '15px' }}
              >
                <div className="row pt-2">
                  <div className="col-10">
                    <div className="fw-bold">작성한 게시글이 존재하지 않습니다</div>
                  </div>
                </div>
                <div className="row pt-2 pb-2">
                  <div className="col-10">
                    <div
                      style={{
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        color: '#808080',
                      }}
                    ></div>
                  </div>
                  <div
                    className="col text-end"
                    style={{ color: '#808080' }}
                  ></div>
                </div>
              </div>
              )}
        <Paging page={currentpage} count={count} setPage={setPage} />
        </WritingDiv>
      </Div>
        <Footer />
      </div>
 
    </>
  );
}

export default MyWriting;
