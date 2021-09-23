<template>
  <base-section id="applications">
    <base-section-heading title="Applications">
      </base-section-heading>

    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <base-avatar-card
            v-bind="feature"
            align="left"
            horizontal
          >
          <v-card-title>Project 1. </v-card-title>
            <p><a href="partydash.com">Party Dash App</a></p>
           <p>We built Party Dash with a simple goal in mind, to help party hosts plan parties more easily.</p>
            <p>Followed design specs handed down from site owner.</p> 
            <p>Used CSS and HTML to create inviting website</p>
            <p>Technologies used: HTML, CSS, Bootstrap </p>
            <p><a href="https://partydash.com/pages/about-us" target="_blank">Read More</a></p>
            </base-avatar-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <base-avatar-card
            v-bind="feature"
            align="left"
            horizontal
          >
            <v-card-title>Project 2.</v-card-title>
            <p>RuneSkype</p>
            <p>RuneSkype is our final project for the Columbia Coding Bootcamp. It is the newest and best way for you and your friends to interact while playing your favorite Role Playing Game (RPG). Getting Started Playing RuneSkype is easy, just download a copy from our homepage or our repo:</p>
            <p>Responsibilities:</p> 
            <p>Getting Started:</p>
            <p>RuneSkype is the newest and best way for you and your friends to interact while playing your favorite Role Playing Game (RPG). In our case that is RuneSkype.
              Playing RuneSkype is easy, just download a copy from our homepage or our repo: https://runeskype.herokuapp.com/play https://github.com/Jroze88/RuneSkype</p>
            <p>From there you'l want to intstall React, Node, Express, Firebase, Twilio-Video, Twilio, WebRTC, Axios, and React-Drag. These dependencies will allow you to set up the RuneSkype environment. These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.</p>
            <p>Prerequisites and Dependencies: </p>
            <p>Reactjs, Nodejs, Express, Firebase, Twilio-Video, Twilio, WebRTC, Axios, React-Drag, material-ui</p>
            </base-avatar-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <base-avatar-card
            v-bind="feature"
            align="left"
            horizontal
          >
            <v-card-title>Project 3.</v-card-title>
            <p>The G.O.A.T. Voter App</p>
            <p><a href="http://www.goatvoter.org" target="_blank">http://www.goatvoter.org/</a></p>
            <p>Responsibilities:</p> 
            <p>Front-End Design, created the CSS color scheme and front-end components.</p>
            <p>The GOAT Voter App is a one-stop platform where voters can access information about candidates running for political offices anywhere in the United States. The GOAT Voter
               App streamlines information and increases voter participation. repo: By entering their zip code in a search field, users will be able to search and access detailed information about all candidates running for election in their district. In addition, users can enter their address to find out where their polling site is located and request transportation on election day.</p>
            <p>For a full description of the GOAT Voter App, please visit the project page:
               www.goatvoter.org | <a href="https://github.com/naz585/Project-2">https://github.com/naz585/Project-2</a> </p>
            <p>Prerequisites and Dependencies: </p>
            <p>JavaScript, Handlebars, Bootstrap, CSS Parallax, Node.js, Express, Sequelize, Google Civic Information API, Heroku,
            </p>
            </base-avatar-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionThemeFeatures',

    data: () => ({
      features: [
        {
          title: 'Pixel Perfect Design',
          icon: 'mdi-fountain-pen-tip',
        },
      ],
    }),
  }
</script>
