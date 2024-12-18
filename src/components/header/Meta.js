import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = () => (
  <Helmet>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Personal Website | Haris Prananditya</title>
    <meta property="og:title" content="Personal Website | Haris Prananditya" />
    <meta property="og:locale" content="en_US" />
    <link rel="canonical" href="//" />
    <meta property="og:url" content="//" />
    <meta
      name="description"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
    <link rel="icon" type="image/png" href="/assets/img/haris-logo.png" />
    <meta name="theme-color" content="#5540af" />
    <meta property="og:site_name" content="Personal Website | Haris Prananditya" />
    <meta property="og:image" content="//assets/img/social.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@tailwindmade" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link
      as="style"
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
      rel="preload"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />
    <link crossorigin="anonymous" href="/assets/styles/main.min.css" media="screen" rel="stylesheet" />
    <script defer src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"></script>
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
  </Helmet>
);

export default Meta;
