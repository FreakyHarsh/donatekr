import classes from "*.module.css";
import { Layout } from "antd";
import React from "react";
import { createUseStyles } from "react-jss";
import logo from "../assets/images/logo.png";
export const HomeScreen = () => {
  const { Header, Footer, Content } = Layout;
  const classes = useStyles();
  return (
    <Layout>
      {/* <div className={classes.logo}>
        <img src={logo} />
      </div> */}
      <nav className={classes.navbar}>
        <ul>
          <li>Home</li>
          <li>SignUp</li>
          <li>Login</li>
        </ul>
      </nav>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

const useStyles = createUseStyles(({ colors }: Theme) => ({
  // logo: {
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   transform: "translate(-20%,-33%)",
  //   "& img": {
  //     objectFit: "contain",
  //     width: "9rem",
  //   },
  // },
  navbar: {
    backgroundColor: colors.primary,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    "& ul": {
      listStyleType: "none",
      margin: 0,
      padding: 0,
      "& li": {
        cursor: "pointer",
        color: "#FFF",
        padding: "1rem",
        display: "inline-block",
      },
    },
  },
}));
