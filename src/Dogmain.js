import { faker } from '@faker-js/faker';
import logo from './black.jpg';

// JSX
// javascript

const testData = [
  {
    text: "누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다. ",
    imgUrl: "https://img.insight.co.kr/static/2020/09/22/700/97so3hz72p4nq982if5l.jpg"
  },
  {
    text: "국무총리는 국회의 동의를 얻어 대통령이 임명한다. ",
    imgUrl: "https://upload.wikimedia.org/wikipedia/ko/thumb/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png/230px-%EC%8B%A0%EC%A7%B1%EA%B5%AC.png"
  },
  {
    text: "재산권의 행사는 공공복리에 적합하도록 하여야 한다.",
    imgUrl: "http://image.auction.co.kr/itemimage/14/97/95/1497951b06.jpg"
  }
]

function Dogmain() {
  const h1Element = <h1>H1 제목 태그입니다.</h1>
  const imgElement = <img src={logo} className="App-logo" alt="logo" />
  
  return (
    <> 
        {h1Element}
        {imgElement}
        <p>
          짱구 귀여워 5가닥<code>src/App.js</code> and save to reload.
        </p>
        {testData.map((contents)=>{
            return <div>
              <img src={faker.image.avatar()} alt="fake 사진"/>
              {contents.text}
              <img src={faker.image.cats()} alt="fake 사진"/>
              </div>
        })}  
    </>
  );
}

export default Dogmain;