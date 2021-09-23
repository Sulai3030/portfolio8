<template>
  <base-section
    id="clients"
    class="secondary"
  >
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <v-row>
          <v-col
            cols="12"
            sm="4"
            md="3"
            >
            <base-info-card
              align="center"
              dark
              v-bind="card"
            />
            <v-card
              class="mx-auto"
              max-width="800"
              max-height="300"
              outlined
            >
            <a href="https://blackhealthmatters.com/lauren-lee-talks-kidney-disease-breakthroughs/" target="_blank">Lauren Lee talks kidney disease breakthroughs</a>
            </v-card>
          </v-col> 
        </v-row>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionFeatures',

    data: () => ({
      
    }),
  }
</script>
