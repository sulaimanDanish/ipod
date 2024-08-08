import React, { Component } from 'react';
import styled from 'styled-components';
import styles from './App.module.css';

const BackCover = styled.div`
  width: 300px;
  height: 500px;
  background: #cccccc;
  margin: 40px auto;
  border-radius: 30px;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.4);
  z-index: -9;
`;

const Main = styled.div`
  width: 300px;
  height: 500px;
  background: #f0f0f0;
  margin: auto;
  overflow: hidden;
  border-radius: 30px;
  position: relative;
  top: -8px;
  left: 8px;
`;

const Screen = styled.div`
  width: 260px;
  height: 200px;
  background: #2e2e2e;
  margin: 20px auto;
  border: 4px solid #555555;
  border-radius: 5px;

`;

const Music = styled.div`
display: ${(props) => props.show ? 'block' : 'none'};
  width: 260px;
  height: 200px;
  position:absolute;
  background: #5DADE2;
  margin: 0;
  border-radius: 5px;
  z-index:20;
`;

const Game = styled.div`
display: ${(props) => props.show ? 'block' : 'none'};
   width: 260px;
  height: 200px;
  position:absolute;
  background: #5DADE2;
  margin: 0;
  border-radius: 5px;
  z-index:20;
`;

const Setting = styled.div`
display: ${(props) => props.show ? 'block' : 'none'};
  width: 260px;
  height: 200px;
  position:absolute;
  background: #5DADE2;
  margin: 0;
  border-radius: 5px;
  z-index:20;
`;

const Navigator = styled.div`
  width: 260px;
  height: 230px;
  margin: auto;
  overflow: hidden;
  position: relative;
`;

const Keys = styled.div`
  width: 210px;
  height: 210px;
  background: white;
  margin: 10px auto;
  overflow: hidden;
  border-radius: 100%;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.2);

  &:hover {
    box-shadow: 0px 0px 22px 3px rgba(0,166,255,0.32);
  }
`;

const MenuBtn = styled.span`
  display: block;
  position: absolute;
  top: 32px;
  left: 107px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: gray;

  &:hover {
    color: #00a6ff;
    transition: all 0.2s;
  }
`;

const ImgButton = styled.img`
  width: ${(props) => props.size || '22px'};
  position: absolute;
  top: ${(props) => props.top || '108px'};
  left: ${(props) => props.left};

  filter: grayscale(1);
  transition: all 0.2s;

  &:hover {
    filter: grayscale(0);
  }
`;

const Play = styled.div`
  width: 100px;
  height: 100px;
  background: #f0f0f0;
  margin: 54px auto;
  border-radius: 100%;
  box-shadow: inset 0px -2px 14px -1px rgba(0,0,0,0.3);
`;

const MenuContent = styled.div`
  display: ${(props) => props.isvisible ? 'block' : 'none'};
  position: absolute;
  width:40%;
  height:175px;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 10;
`;

const MenuItem = styled.a`
  color: black;
  padding: 4px 12px;
  text-decoration: none;
  display: block;
  background-color: ${(props) => props.active ? '#ddd' : '#fff'};

  &:hover {
    background-color: #ddd;
  }
`;

export default class App extends Component {

  state = {
    showMenu: false,
    isMusicActive: false,
    isGamesActive: false,
    isSettingsActive: false,
    showMusic: false,
    showGames: false,
    showSettings: false
  };

  handleMenuPointerIn = () => {
    this.setState({
      showMenu: true, isMusicActive: true, isGamesActive: false, isSettingsActive: false, showMusic: false,
      showGames: false,
      showSettings: false
    });
  }

  handleNextPointerIn = () => {
    if (this.state.isSettingsActive) {
      this.setState({ isSettingsActive: true, isGamesActive: true, isMusicActive: false });
    }
    this.setState({ isGamesActive: true, isMusicActive: false, isSettingsActive: false });
  }

  handlePlayPointerIn = () => {
    if (this.state.isGamesActive) {
      this.setState({ isSettingsActive: true, isGamesActive: false, isMusicActive: false });
    } else if (this.state.isSettingsActive) {
      this.setState({ isSettingsActive: false, isGamesActive: true, isMusicActive: false });
    }
  }

  handlePrevPointerIn = () => {
    if (this.state.isMusicActive) {
      this.setState({ isSettingsActive: true, isGamesActive: false, isMusicActive: false });
    } else if (this.state.isSettingsActive) {
      this.setState({ isSettingsActive: false, isGamesActive: false, isMusicActive: true });
    }
  }

  handleOpen = () => {
    if (this.state.isMusicActive) {
      this.setState({ showMusic: true })
    } else if (this.state.isGamesActive) {
      this.setState({ showGames: true })
    } else if (this.state.isSettingsActive) {
      this.setState({ showSettings: true })
    }
  }

  render() {
    return (
      <BackCover>
        <Main>
          <Screen>
            <Music show={this.state.showMusic}><h1>Music</h1></Music>
            <Game show={this.state.showGames}><h1>Game</h1></Game>
            <Setting show={this.state.showSettings}><h1>Setting</h1></Setting>
            <>
              <MenuContent isvisible={this.state.showMenu}>
                <h1>MENU</h1>
                <MenuItem href="#music" active={this.state.isMusicActive}>Music</MenuItem>
                <MenuItem href="#games" active={this.state.isGamesActive}>Games</MenuItem>
                <MenuItem href="#settings" active={this.state.isSettingsActive}>Settings</MenuItem>
              </MenuContent>
              <div id="player02" className={`${styles.player} ${styles.horizontal}`}>
                <div className={styles.wrapper}>
                  <div className={styles['info-wrapper']}>
                    <img
                      src="https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_1280.jpg"
                      alt="LogoMusicImage"
                    />
                    <div className={styles.info}>
                      <p>Banda OneBitMusic</p>
                    </div>
                  </div>

                  <div className={styles.controls}>
                    <div className={styles.prev}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.33917 13.7397L12.9664 7.38149C13.2293 7.22152 13.5303 7.13509 13.8381 7.13123C14.1458 7.12737 14.4489 7.20622 14.7157 7.35955C15.0053 7.52815 15.245 7.77036 15.4107 8.0616C15.5763 8.35284 15.6619 8.68272 15.6588 9.01775V13.4657L25.8274 7.3798C26.0903 7.21983 26.3914 7.13341 26.6991 7.12955C27.0068 7.12568 27.3099 7.20454 27.5768 7.35786C27.8663 7.52646 28.1061 7.76867 28.2717 8.05991C28.4373 8.35115 28.5229 8.68103 28.5198 9.01606V21.4512C28.5231 21.7863 28.4376 22.1163 28.2719 22.4077C28.1063 22.699 27.8664 22.9413 27.5768 23.1099C27.3099 23.2632 27.0068 23.3421 26.6991 23.3382C26.3914 23.3344 26.0903 23.2479 25.8274 23.088L15.6588 16.9993V21.4489C15.6625 21.7844 15.5771 22.1149 15.4114 22.4067C15.2458 22.6985 15.0057 22.9411 14.7157 23.1099C14.4489 23.2632 14.1458 23.3421 13.8381 23.3382C13.5303 23.3344 13.2293 23.2479 12.9664 23.088L2.33917 16.7298C2.08653 16.5715 1.87825 16.3516 1.73386 16.0908C1.58948 15.83 1.51373 15.5368 1.51373 15.2387C1.51373 14.9406 1.58948 14.6473 1.73386 14.3865C1.87825 14.1257 2.08653 13.9058 2.33917 13.7476V13.7397Z"
                          fill="#E1E1E6"
                        />
                      </svg>
                    </div>
                    <div className={styles.play}>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.32137 25.586C7.9759 25.5853 7.63655 25.4948 7.33669 25.3232C6.66148 24.9406 6.24173 24.1978 6.24173 23.3915V7.07398C6.24173 6.26542 6.66148 5.52494 7.33669 5.14232C7.64369 4.96589 7.99244 4.87516 8.3465 4.87961C8.70056 4.88407 9.04692 4.98354 9.34938 5.16764L23.2952 13.5155C23.5859 13.6977 23.8255 13.9508 23.9916 14.251C24.1577 14.5511 24.2448 14.8886 24.2448 15.2316C24.2448 15.5747 24.1577 15.9121 23.9916 16.2123C23.8255 16.5125 23.5859 16.7655 23.2952 16.9478L9.34713 25.2979C9.0376 25.485 8.68307 25.5846 8.32137 25.586V25.586Z"
                          fill="#E1E1E6"
                        />
                      </svg>
                    </div>
                    <div className={styles.next}>
                      <svg
                        width="29"
                        height="30"
                        viewBox="0 0 29 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_42_51)">
                          <path
                            d="M27.1426 13.7397L16.5154 7.38149C16.2525 7.22152 15.9514 7.13509 15.6437 7.13123C15.336 7.12737 15.0329 7.20622 14.766 7.35955C14.4765 7.52815 14.2368 7.77036 14.0711 8.0616C13.9055 8.35284 13.8199 8.68272 13.823 9.01775V13.4657L3.65435 7.3798C3.39144 7.21983 3.0904 7.13341 2.78268 7.12955C2.47495 7.12568 2.17183 7.20454 1.905 7.35786C1.61547 7.52646 1.37571 7.76867 1.21008 8.05991C1.04445 8.35115 0.958845 8.68103 0.961955 9.01606V21.4512C0.958745 21.7863 1.0443 22.1163 1.20994 22.4076C1.37558 22.699 1.61538 22.9413 1.905 23.1099C2.17183 23.2632 2.47495 23.3421 2.78268 23.3382C3.0904 23.3344 3.39144 23.2479 3.65435 23.088L13.823 16.9993V21.4489C13.8194 21.7844 13.9048 22.1149 14.0704 22.4066C14.2361 22.6984 14.4761 22.9411 14.766 23.1099C15.0329 23.2632 15.336 23.3421 15.6437 23.3382C15.9514 23.3344 16.2525 23.2479 16.5154 23.088L27.1426 16.7298C27.3953 16.5715 27.6035 16.3516 27.7479 16.0908C27.8923 15.83 27.968 15.5368 27.968 15.2387C27.968 14.9406 27.8923 14.6473 27.7479 14.3865C27.6035 14.1257 27.3953 13.9058 27.1426 13.7476V13.7397Z"
                            fill="#E1E1E6"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_42_51">
                            <rect
                              width="28.8089"
                              height="28.8089"
                              fill="white"
                              transform="translate(0.0612183 0.828369)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  <div className={styles['track-time']}>
                    <div className={styles.track}></div>
                    <div className={styles.time}>
                      <div className={styles['total-time']}>03:20</div>
                      <div className={styles['last-time']}>00:12</div>
                    </div>
                  </div>
                </div>
              </div></>


          </Screen>
          <Navigator>
            <Keys>
              <MenuBtn onPointerEnter={this.handleMenuPointerIn}>MENU</MenuBtn>

              <ImgButton onPointerEnter={this.handleNextPointerIn}
                src="https://cdn2.iconfinder.com/data/icons/snipicons/5000/fast-forward-256.png"
                top="108px"
                left="195px"
              />
              <ImgButton onPointerEnter={this.handlePrevPointerIn}
                src="https://cdn2.iconfinder.com/data/icons/snipicons/5000/fast-backward-128.png"
                top="108px"
                left="41px"
              />
              <ImgButton onPointerEnter={this.handlePlayPointerIn}
                src="https://cdn2.iconfinder.com/data/icons/snipicons/5000/play-128.png"
                size="28px"
                top="182px"
                left="120px"
              />
              <Play onClick={this.handleOpen} />
            </Keys>
          </Navigator>
        </Main>
      </BackCover>
    )
  }
}