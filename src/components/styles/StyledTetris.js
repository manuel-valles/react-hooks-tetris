import styled, { keyframes } from 'styled-components';

const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  background-size: cover;
  overflow: hidden;
`;

const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 30px;
  margin: 0 auto;
  max-width: 700px;

  aside {
    width: 100%;
    max-width: 100px;
    display: block;
    padding: 0 10px;
  }
`;

const animStar = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(500px);
  }
`;

const StyledStar = styled.div`
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 236px 1043px #fff, 784px 298px #fff, 594px 611px #fff,
    1790px 363px #fff, 1099px 831px #fff, 1619px 474px #fff, 903px 652px #fff,
    1472px 978px #fff, 1620px 1445px #fff, 1533px 1396px #fff, 303px 994px #fff,
    318px 1761px #fff, 1755px 263px #fff, 783px 482px #fff, 1224px 216px #fff,
    1625px 1456px #fff, 813px 1703px #fff, 1918px 1212px #fff, 1872px 799px #fff,
    280px 793px #fff, 1932px 99px #fff, 1925px 1863px #fff, 1444px 809px #fff,
    879px 484px #fff, 1283px 1275px #fff, 154px 1516px #fff, 1986px 404px #fff,
    526px 774px #fff, 540px 664px #fff, 953px 1818px #fff, 1931px 1100px #fff,
    1105px 92px #fff, 1290px 210px #fff, 1739px 33px #fff, 466px 1203px #fff,
    1821px 139px #fff, 1524px 269px #fff, 777px 1345px #fff, 116px 29px #fff,
    692px 10px #fff, 1165px 1444px #fff, 230px 1666px #fff, 1293px 811px #fff,
    1349px 414px #fff, 1598px 785px #fff, 1058px 1829px #fff, 1995px 1740px #fff,
    947px 614px #fff, 141px 1062px #fff, 1167px 248px #fff, 1366px 1098px #fff,
    811px 1344px #fff, 1723px 872px #fff, 1450px 1137px #fff, 1225px 1762px #fff,
    1766px 144px #fff, 1160px 1662px #fff, 931px 589px #fff, 937px 579px #fff,
    941px 592px #fff, 864px 681px #fff, 41px 995px #fff, 761px 1239px #fff,
    1890px 1598px #fff, 1262px 1800px #fff, 1990px 990px #fff, 1259px 880px #fff,
    1151px 1318px #fff, 352px 1485px #fff, 1345px 876px #fff, 1446px 945px #fff,
    1259px 1789px #fff, 1290px 374px #fff, 1388px 717px #fff, 32px 1673px #fff,
    1204px 862px #fff, 1184px 1186px #fff, 514px 574px #fff, 1625px 279px #fff,
    1491px 1821px #fff, 990px 398px #fff, 1552px 1243px #fff, 1427px 1528px #fff,
    222px 808px #fff, 732px 190px #fff, 12px 1378px #fff, 964px 444px #fff,
    317px 267px #fff, 1193px 161px #fff, 401px 716px #fff, 1399px 901px #fff,
    547px 318px #fff, 1365px 1943px #fff, 1083px 1137px #fff, 689px 251px #fff,
    833px 1431px #fff, 236px 177px #fff, 103px 1987px #fff, 320px 1421px #fff,
    1938px 1277px #fff, 1738px 1755px #fff, 777px 1942px #fff, 480px 1451px #fff,
    905px 1958px #fff, 993px 1429px #fff, 1748px 1796px #fff, 1596px 79px #fff,
    1355px 140px #fff, 1914px 261px #fff, 1027px 1239px #fff, 242px 534px #fff,
    1557px 192px #fff, 1884px 88px #fff, 1602px 296px #fff, 872px 307px #fff,
    998px 1373px #fff, 38px 1192px #fff, 763px 516px #fff, 1463px 925px #fff,
    1554px 147px #fff, 1322px 2000px #fff, 1885px 555px #fff, 1092px 1729px #fff,
    259px 735px #fff, 1852px 295px #fff, 49px 1307px #fff, 1111px 1808px #fff,
    1939px 643px #fff, 440px 1370px #fff, 1386px 657px #fff, 968px 611px #fff,
    1270px 1739px #fff, 870px 392px #fff, 1257px 765px #fff, 1106px 1530px #fff,
    1232px 1910px #fff, 1901px 1368px #fff, 1027px 1105px #fff,
    1787px 368px #fff, 735px 375px #fff, 1475px 825px #fff, 1836px 518px #fff,
    349px 1667px #fff, 1260px 495px #fff, 1799px 1574px #fff, 1018px 682px #fff,
    648px 995px #fff, 935px 577px #fff, 156px 1690px #fff, 602px 1920px #fff,
    1876px 384px #fff, 1561px 1362px #fff, 1446px 632px #fff, 1923px 209px #fff,
    1076px 1611px #fff, 738px 722px #fff, 1484px 1655px #fff, 137px 1339px #fff,
    1721px 541px #fff, 1544px 1082px #fff, 1083px 1601px #fff,
    1475px 1526px #fff, 1653px 1500px #fff, 451px 1136px #fff, 288px 372px #fff,
    290px 810px #fff, 1492px 814px #fff, 1508px 1379px #fff, 730px 1116px #fff,
    505px 929px #fff, 1775px 1887px #fff, 1942px 1091px #fff, 927px 1676px #fff,
    406px 992px #fff, 983px 626px #fff, 1356px 741px #fff, 1609px 936px #fff,
    313px 1244px #fff, 616px 984px #fff, 713px 1281px #fff, 1050px 844px #fff,
    1010px 104px #fff, 1858px 547px #fff, 429px 1678px #fff, 916px 763px #fff,
    418px 378px #fff, 7px 631px #fff, 1702px 1288px #fff, 799px 987px #fff,
    1661px 1081px #fff, 1655px 1846px #fff, 361px 1676px #fff,
    1979px 1521px #fff, 415px 418px #fff, 1641px 1999px #fff, 955px 882px #fff,
    1290px 324px #fff, 930px 1826px #fff, 989px 807px #fff, 461px 917px #fff;
  animation: ${animStar} 100s linear infinite;

  :after {
    content: ' ';
    position: absolute;
    top: -1000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: 236px 1043px #fff, 784px 298px #fff, 594px 611px #fff,
      1790px 363px #fff, 1099px 831px #fff, 1619px 474px #fff, 903px 652px #fff,
      1472px 978px #fff, 1620px 1445px #fff, 1533px 1396px #fff,
      303px 994px #fff, 318px 1761px #fff, 1755px 263px #fff, 783px 482px #fff,
      1224px 216px #fff, 1625px 1456px #fff, 813px 1703px #fff,
      1918px 1212px #fff, 1872px 799px #fff, 280px 793px #fff, 1932px 99px #fff,
      1925px 1863px #fff, 1444px 809px #fff, 879px 484px #fff,
      1283px 1275px #fff, 154px 1516px #fff, 1986px 404px #fff, 526px 774px #fff,
      540px 664px #fff, 953px 1818px #fff, 1931px 1100px #fff, 1105px 92px #fff,
      1290px 210px #fff, 1739px 33px #fff, 466px 1203px #fff, 1821px 139px #fff,
      1524px 269px #fff, 777px 1345px #fff, 116px 29px #fff, 692px 10px #fff,
      1165px 1444px #fff, 230px 1666px #fff, 1293px 811px #fff,
      1349px 414px #fff, 1598px 785px #fff, 1058px 1829px #fff,
      1995px 1740px #fff, 947px 614px #fff, 141px 1062px #fff, 1167px 248px #fff,
      1366px 1098px #fff, 811px 1344px #fff, 1723px 872px #fff,
      1450px 1137px #fff, 1225px 1762px #fff, 1766px 144px #fff,
      1160px 1662px #fff, 931px 589px #fff, 937px 579px #fff, 941px 592px #fff,
      864px 681px #fff, 41px 995px #fff, 761px 1239px #fff, 1890px 1598px #fff,
      1262px 1800px #fff, 1990px 990px #fff, 1259px 880px #fff,
      1151px 1318px #fff, 352px 1485px #fff, 1345px 876px #fff,
      1446px 945px #fff, 1259px 1789px #fff, 1290px 374px #fff,
      1388px 717px #fff, 32px 1673px #fff, 1204px 862px #fff, 1184px 1186px #fff,
      514px 574px #fff, 1625px 279px #fff, 1491px 1821px #fff, 990px 398px #fff,
      1552px 1243px #fff, 1427px 1528px #fff, 222px 808px #fff, 732px 190px #fff,
      12px 1378px #fff, 964px 444px #fff, 317px 267px #fff, 1193px 161px #fff,
      401px 716px #fff, 1399px 901px #fff, 547px 318px #fff, 1365px 1943px #fff,
      1083px 1137px #fff, 689px 251px #fff, 833px 1431px #fff, 236px 177px #fff,
      103px 1987px #fff, 320px 1421px #fff, 1938px 1277px #fff,
      1738px 1755px #fff, 777px 1942px #fff, 480px 1451px #fff,
      905px 1958px #fff, 993px 1429px #fff, 1748px 1796px #fff, 1596px 79px #fff,
      1355px 140px #fff, 1914px 261px #fff, 1027px 1239px #fff, 242px 534px #fff,
      1557px 192px #fff, 1884px 88px #fff, 1602px 296px #fff, 872px 307px #fff,
      998px 1373px #fff, 38px 1192px #fff, 763px 516px #fff, 1463px 925px #fff,
      1554px 147px #fff, 1322px 2000px #fff, 1885px 555px #fff,
      1092px 1729px #fff, 259px 735px #fff, 1852px 295px #fff, 49px 1307px #fff,
      1111px 1808px #fff, 1939px 643px #fff, 440px 1370px #fff,
      1386px 657px #fff, 968px 611px #fff, 1270px 1739px #fff, 870px 392px #fff,
      1257px 765px #fff, 1106px 1530px #fff, 1232px 1910px #fff,
      1901px 1368px #fff, 1027px 1105px #fff, 1787px 368px #fff,
      735px 375px #fff, 1475px 825px #fff, 1836px 518px #fff, 349px 1667px #fff,
      1260px 495px #fff, 1799px 1574px #fff, 1018px 682px #fff, 648px 995px #fff,
      935px 577px #fff, 156px 1690px #fff, 602px 1920px #fff, 1876px 384px #fff,
      1561px 1362px #fff, 1446px 632px #fff, 1923px 209px #fff,
      1076px 1611px #fff, 738px 722px #fff, 1484px 1655px #fff,
      137px 1339px #fff, 1721px 541px #fff, 1544px 1082px #fff,
      1083px 1601px #fff, 1475px 1526px #fff, 1653px 1500px #fff,
      451px 1136px #fff, 288px 372px #fff, 290px 810px #fff, 1492px 814px #fff,
      1508px 1379px #fff, 730px 1116px #fff, 505px 929px #fff,
      1775px 1887px #fff, 1942px 1091px #fff, 927px 1676px #fff,
      406px 992px #fff, 983px 626px #fff, 1356px 741px #fff, 1609px 936px #fff,
      313px 1244px #fff, 616px 984px #fff, 713px 1281px #fff, 1050px 844px #fff,
      1010px 104px #fff, 1858px 547px #fff, 429px 1678px #fff, 916px 763px #fff,
      418px 378px #fff, 7px 631px #fff, 1702px 1288px #fff, 799px 987px #fff,
      1661px 1081px #fff, 1655px 1846px #fff, 361px 1676px #fff,
      1979px 1521px #fff, 415px 418px #fff, 1641px 1999px #fff, 955px 882px #fff,
      1290px 324px #fff, 930px 1826px #fff, 989px 807px #fff, 461px 917px #fff;
  }
`;

export { StyledTetrisWrapper, StyledTetris, StyledStar };
