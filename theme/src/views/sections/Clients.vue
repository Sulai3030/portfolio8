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
                </base-avatar-card>    
            </v-col>
        </v-row>
  </v-container> 
  </v-theme-provider>
</template>
        
<script>
  export default {
    name: 'SectionClients',
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
