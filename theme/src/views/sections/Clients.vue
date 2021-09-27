<template>
  <v-theme-provider dark>
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/light.jpg')"
      class="white--text"
      gradient="to bottom, rgba(11, 28, 61, .9), rgba(0,0,0,.4)"
    >
  <base-section id="clients">
  <v-container>
    <v-row no-gutters>
      <v-col>
        <div :style="{ backgroundColor: backgroundcolor }" id="wrapper">
          <base-section-heading title="Clients"></base-section-heading>
          <v-row>
            <v-col
              md="12"
            >
                  <v-card-title>BlackHealthMatters.com </v-card-title>
                  <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          <v-card-text>
                              <p><a href="blackhealthmatters.com" target="_blank">BlackHealthMatters.com</a></p>
                              <p class="text--primary"><a href="https://blackhealthmatters.com/lauren-lee-talks-kidney-disease-breakthroughs/" target="_blank">Lauren Lee talks kidne disease breakthroughs</a></p>
                              <p class="text--primary"><a href="https://blackhealthmatters.com/is-there-a-light-at-the-end-of-the-dark-tunnel-of-kidney-disease-in-children/" target="_blank">Is There a Light at the End of the Dark Tunnel of Kidney Disease in Children?" - An Interview with Dr. Gbadegesin</a></p>
                              <p class="text--primary"><a href="https://blackhealthmatters.com/working-with-your-doctor-when-you-have-kidney-disease-empowering-yourself-to-be-an-advocate-for-you"     target="_blank">Working with your doctor when you have kidney disease empowering yourself to be an advocate for you/</a></p>  
                              <p class="text--primary"><a href="https://blackhealthmatters.com/kidney-disease/what-is-fsgs/" target="_blank"> What is FSGS?</a></p>
                              <p class="text--primary"><a href="The Truth About Chronic Kidney Disease" target="_blank">The Truth About Chronic Kidney Disease</a></p>
                              <p class="text--primary"><a href="How Can I Be In A Clinical Trial?" target="_blank">How Can I Be In A Clinical Trial?</a></p>
                          </v-card-text>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-card-title>PartyDash</v-card-title>
                    <v-list-item>  
                        <v-list-item-content>
                          <v-list-item-title>
                            <v-card-text>
                              <p><a href="https://partydash.com/" target="_blank"></a></p>
                              <p>Front End Design</p>
                              <p>We built Party Dash with a simple goal in mind: to help party hosts plan parties more easily</p>
                              <p>Responsibilities: Follow design specs handed down from site owner. Used CSS and HTML to create inviting website</p>
                              <p>Technologies used: HTML, CSS, Bootstrap</p>
                            </v-card-text>
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    <v-card-title>Mayapple Center for the Arts and Humanities </v-card-title>
                    <v-list-item>  
                       <v-list-item-content>
                          <v-list-item-title>
                            <v-card-text>
                                <p><a href="mayapplecenter.org" target="_blank"></a></p>
                                <p>Updated and maintained website (Drupal platform), creating links between Mayapple’s homepage and their yearly summer program at Sarah Lawrence    College.    Added, removed, and refined content for Events, Faculty, Executive Staff, Executive Board, and Advisory Board pages.      	
                                Key Accomplishments:</p>
                                <p> Updated homepage to include crucial information about and links to Mayapple’s program at Sarah Lawrence College</p>
                                <p> Removed departed Advisory Board members from Advisory Board page and added new Advisory Board Members </p>  
                                <p> Input new faculty on Faculty page and Executive Board listing and names.</p>
                                <p>	Communicated foundation’s message through updates on homepage about mission, events, enrollment opportunities and scholarships</p>
                            </v-card-text>
                          </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
          </v-row>
          <v-row>
            <v-col
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
  </v-theme-provider>
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
  a{
    color: goldenrod;
  }
</style>
