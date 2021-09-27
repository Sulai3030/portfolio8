<template>
  <base-section id="applications">
    <base-section-heading title="Applications Built">
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
            <p class="font-weight-black"><a href="partydash.com">Party Dash App</a></p>
            <p class="font-weight-black">We built Party Dash with a simple goal in mind, to help party hosts plan parties more easily.</p>
            <p class="font-weight-black">Followed design specs handed down from site owner.</p> 
            <p class="font-weight-black">Used CSS and HTML to create inviting website</p>
            <p class="font-weight-black">Technologies used: HTML, CSS, Bootstrap </p>
            <p class="font-weight-black"><a href="https://partydash.com/pages/about-us" target="_blank">Read More</a></p>
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
            <p class="font-weight-black">RuneSkype</p>
            <p class="font-weight-black">RuneSkype is our final project for the Columbia Coding Bootcamp. It is the newest and best way for you and your friends to interact while playing your favorite Role Playing Game (RPG). Getting Started Playing RuneSkype is easy, just download a copy from our homepage or our repo:</p>
            <p class="font-weight-black">Responsibilities:</p> 
            <p class="font-weight-black">Getting Started:</p>
            <p class="font-weight-black">RuneSkype is the newest and best way for you and your friends to interact while playing your favorite Role Playing Game (RPG). In our case that is RuneSkype.
              Playing RuneSkype is easy, just download a copy from our homepage or our repo: https://runeskype.herokuapp.com/play https://github.com/Jroze88/RuneSkype</p>
            <p class="font-weight-black">From there you'l want to intstall React, Node, Express, Firebase, Twilio-Video, Twilio, WebRTC, Axios, and React-Drag. These dependencies will allow you to set up the RuneSkype environment. These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.</p>
            <p class="font-weight-black">Prerequisites and Dependencies: </p>
            <p class="font-weight-black">Reactjs, Nodejs, Express, Firebase, Twilio-Video, Twilio, WebRTC, Axios, React-Drag, material-ui</p>
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
            <p class="font-weight-black"><a href="www.goatvoter.org">G.O.A.T. Voter App</a> </p>
            <p class="font-weight-black">The GOAT Voter App is a one-stop platform where voters can access information about candidates running for political offices anywhere in the United States. The GOAT Voter App streamlines information and increases voter participation.</p>
            <p class="font-weight-black">By entering their zip code in a search field, users will be able to search and access detailed information about all candidates running for election in their district. In addition, users can enter their address to find out where their nearest polling site is located and request transportation on election day.</p>
            <p class="font-weight-black">Responsibilities:</p> 
            <p class="font-weight-black">Front-End Design, created the color scheme and front-end components.</p>
            <p class="font-weight-black">By entering their zip code in a search field, users will be able to search and access detailed information about all candidates running for election in their district. In addition, users can enter their address to find out where their nearest polling site is located and request transportation on election day.</p>
            <p class="font-weight-black">Technologies used:</p>
            <p class="font-weight-black">JavaScript, Handlebars, Bootstrap, CSS Parallax, Node.js, Express, Sequelize, Google Civic Information API, Heroku </p>
            <p class="font-weight-black"></p>
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
            <v-card-title>Project 4.</v-card-title>
            <p class="font-weight-black"><a href="www.https://sulai3030.github.io/test-BeerNearHere/g">Beer Near Here</a> </p>
            <p class="font-weight-black">Beer Near Here</p>
            <p class="font-weight-black">By entering their zip code in a search field, users will be able to search and access detailed information about all candidates running for election in their district. In addition, users can enter their address to find out where their nearest polling site is located and request transportation on election day.</p>
            <p class="font-weight-black">Responsibilities:</p> 
            <p class="font-weight-black">Backend Design</p>
            <p class="font-weight-black">Beer Near Here is an app that services beer drinkers in and around the New York and New Jersey areas using user generated information via questionnaire about beer preferences returning locations that serve craft beers.</p>
            <p class="font-weight-black">Technologies used:</p>
            <p class="font-weight-black">HTML5, CSS, and JavaScript, Express, Bootstrap, GitHub Pages</p>
            <p class="font-weight-black"></p>
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
<style scoped>

</style>