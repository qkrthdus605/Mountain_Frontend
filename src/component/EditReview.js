import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Div = styled.div`
  /* 전체 Div 스타일 */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 78vh;
  text-align: center;
  font-family: 'Segoe UI';
`;

const IntroDiv = styled.div`
  /* 소개글 Block Div 스타일 */
  width: 650px;
  height: 450px;
  position: absolute;
  padding: 20px 50px;
  background: white;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 5px 10px;
  text-align: left;
  font-weight: bold;
`;

const P = styled.p`
  font-size: 1rem;
  font-weight: lighter;
  float: left;
  margin-right: 25px;
`;

const Text = styled.input`
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Segoe UI';
  color: #554646;
  margin-top: 10px;
`;

const Save = styled.button`
  width: 50px;
  background-color: #4c8969;
  color: white;
  border-radius: 10px;
  padding: 6px;
  opacity: 1;
  border: 0;
  outline: 0;
  margin-top: 10px;
  float: right;
`;

const Textarea = styled.textarea`
  height: 250px;
  width: 300px;
  border-radius: 20px;
  resize: none;
`;
const Radio = styled.input`
  display: none;
`;

const Label = styled.label`
  padding: 5px;
  border: 1px solid #707070;
  font-size: 0.8rem;
  border-radius: 10px;
  margin-bottom: 5px;
`;

function WriteReview(props) {
  return (
    <div>
      <Header />
      <Div>
        <IntroDiv>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div>
              <Text type="text" placeholder="yyyy.mm.dd 방문한 산" />
              <Save>수정</Save>
            </div>
            <hr width="100%" />
            <br />
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ float: 'left' }}>총점</h3>
              <h3 style={{ textAlign: 'center' }}>코멘트</h3>
            </div>
            <div>
              <Textarea style={{ float: 'right' }}></Textarea>
              <h3 style={{ marginBottom: '1px' }}>
                <br />
                시설 여부
              </h3>
              <br />
              <P>
                화장실
                <br />
                <br />
                <br />
                주차공간
                <br />
                <br />
                <br />
                음수대
                <br />
                <br />
                <br />
                먹거리시설
                <br />
                <br />
                <br />
                물, 음료 파는 곳
              </P>
              <P>
                <Radio type="radio" name="radio" id="opt1" />
                <Label style={{ backgroundColor: '#DEFBEC' }}>
                  <span>YES</span>
                </Label>
                <br />
                <br />
                <Radio type="radio" name="radio" id="opt2" />
                <Label style={{}}>
                  <span>NO</span>
                </Label>
                <br />
                <br />
                <Radio type="radio" name="radio" id="opt1" />
                <Label style={{ backgroundColor: '#DEFBEC' }}>
                  <span>YES</span>
                </Label>
                <br />
                <br />
                <Radio type="radio" name="radio" id="opt2" />
                <Label style={{}}>
                  <span>NO</span>
                </Label>
                <br />
                <br />
                <Radio type="radio" name="radio" id="opt1" />
                <Label style={{ backgroundColor: '#DEFBEC' }}>
                  <span>YES</span>
                </Label>
              </P>
            </div>
          </form>
        </IntroDiv>
      </Div>
      <Footer />
    </div>
  );
}

export default WriteReview;
