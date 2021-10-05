import React, { useEffect, useState } from "react";



import Head from "next/head";
import { AppBar, Container, Link, Toolbar, Typography } from "@mui/material";
import useStyles from '../utils/styles';
import NextLink  from "next/link";
import { getProducts } from "../utils/Routes";


import RecipeReviewCard from "./Products";
import { useRouter } from "next/dist/client/router";

export default function Layout(props) {

    const router = useRouter();

  const [productsList, setProductsList] = useState("");

    
  useEffect(() => {
    fetch(getProducts).then((resp) => {
      resp.json().then((res) => {
          setProductsList(res);
      });
    });
  }, []);

    const cardSection =  productsList
            ? productsList.map((a, i) => {
                return (
                  <NextLink key={i} href={`/productDetails?id=${a.id}`} passHref>
                    <Link >
                      <RecipeReviewCard data={a} />
                    </Link>
                  </NextLink>
                );
              })
            : "loading..."
    
    const classes = useStyles();
    return (
      <div>
        <Head>
          <title>Shrey</title>
        </Head>
        <AppBar className={classes.navbar}>
          <Toolbar>
            <Typography>Ecom</Typography>
          </Toolbar>
        </AppBar>
            <Container className={classes.mainContent}>
         {cardSection}
        </Container>
        <footer>all rights reserved Shrey.</footer>
      </div>
    );
}
