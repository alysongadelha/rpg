import React from "react";
import styles from "./FeedCardItem.module.css";
import styled from "styled-components";

const CardInfoContainer = styled.div`
  z-index: 1;
  position: relative;
  box-shadow: rgba(
      ${(props) => props.color[0]},
      ${(props) => props.color[1]},
      ${(props) => props.color[2]},
      0.5
    )
    0px 6px 16px 0px;
  border-radius: 1rem;
  padding: 16px;
  &::before {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    content: "";
    display: block;
    z-index: 0;
    position: absolute;
    clip-path: polygon(
      0% 100%,
      0% 35%,
      0.3% 33%,
      1% 31%,
      1.5% 30%,
      2% 29%,
      2.5% 28.4%,
      3% 27.9%,
      3.3% 27.6%,
      5% 27%,
      95% 0%,
      100% 0%,
      100% 100%
    );
    background: url("../../Assets/img/button-base.png") no-repeat 50%,
      linear-gradient(
        to top,
        ${(props) => props.theme},
        rgb(
          ${(props) => props.colorRandom[0]},
          ${(props) => props.colorRandom[1]},
          ${(props) => props.colorRandom[2]}
        )
      );
    border-radius: 1rem;
  }
`;

const Logo = styled.div`
  width: 100px;
  height: 100px;
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 24%);
  border-radius: 1rem;
  display: flex;
  overflow: hidden;
  position: relative;
  font-size: 1.25rem;
  align-items: center;
  flex-shrink: 0;
  line-height: 1;
  user-select: none;
  justify-content: center;
  &:hover {
    &::before {
      bottom: -6;
    }
    & img {
      transition: 0.3s;
      transform: scale(1.1);
      box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.38);
    }
  }
`;

const FeedCardItem = ({ info, name, img, tribe, theme, brand }) => {
  const color = theme
    .split("(")[1]
    .split(")")[0]
    .split(" ")
    .map((i) => Number.parseInt(i));

  const colorRandom = [
    Math.floor(Math.random() * 255 + 1),
    Math.floor(Math.random() * 255 + 86),
    Math.floor(Math.random() * 255 + 166),
  ];

  return (
    <li>
      <div className={styles.container}>
        <div className={styles.card}>
          <div
            className={styles.media}
            style={{
              backgroundImage: `url('${img}')`,
            }}
          ></div>
          <CardInfoContainer color={color} colorRandom={colorRandom} theme={theme} >
            <div className={styles.cardInfoBox}>
              <div className={styles.cardInfoCore}>
                <div className={styles.logoBox}>
                  <Logo>
                    <img className={styles.img} src={brand} alt="" />
                  </Logo>
                </div>
                <div className={styles.nameBox}>
                  <h2>{name}</h2>
                  <h2>{tribe}</h2>
                </div>
              </div>
              <div className={styles.cardInfoComplements}>
                <div className={styles.infoLeft}>
                  {info.map((i, f) => (
                    <div key={f} className={styles.infoLeftContent}>
                      {Object.keys(i)[0].toUpperCase()}
                    </div>
                  ))}
                </div>
                <div className={styles.infoRight}>
                  {info.map((i, f) => (
                    <div key={f} className={styles.infoRightContent}>
                      {i[Object.keys(i)[0]]}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardInfoContainer>
        </div>
      </div>
    </li>
  );
};

export default FeedCardItem;
