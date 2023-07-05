<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>List Users</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-list :inset="true">
        <div v-for="item in dataApi" :key="item.id">
          <ion-item>
            <ion-avatar>
              <ion-icon 
                style="color:green"
                :icon="personCircleOutline"
                size="Small"
              />
            </ion-avatar>
            <ion-label>
              <h2>{{ item.name }}</h2>
              <h3>{{ item.email }}</h3>
            </ion-label>
          </ion-item>
        </div>
      </ion-list>  
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, 
  IonToolbar, IonList, IonLabel, IonItem, IonAvatar, IonIcon } from '@ionic/vue';
import { defineComponent, onMounted, ref } from 'vue';
import{personCircleOutline} from "ionicons/icons"
import {User} from "@/interfaces/Users";
import {getUsers} from "@/services/UserServices";

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonLabel,
    IonItem,
    IonAvatar,
    IonIcon
},
  setup(){
    const dataApi = ref<User[]>([]);

    const getData = async() =>{
      try{
        const response = await getUsers();
        dataApi.value = response;
      }catch(e){
        console.log(e)
      }
    }

    onMounted(() => {
      getData();
    })

    return{
      dataApi,
      personCircleOutline
    }
  }
});
</script>

<style scoped>
</style>
