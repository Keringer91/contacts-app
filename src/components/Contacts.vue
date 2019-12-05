<template>
  <div>
   <h3>All contacts:</h3>
   <ul v-for="(contact, index) in contacts" :key="index">
        <li>
            Name: {{ contact.first_name }} {{ contact.last_name }}<br>
            Contact's ID: {{contact.id }}<br><br>
            <button @click="viewContact(contact.id)">View details</button><br><br>
        </li>
    </ul>
 
  <br>
  <form v-on:submit.prevent>
    <input type="email" v-model="email"/>
    <input type="password" v-model="password"/>
    <button @click="login">Login</button>
  </form>
  </div>
</template>


<script>
import { contactService } from "../services/Contact";
export default {
  name: "Contacts",
  data() {
    return {
      contacts: [],
      contact: {},
      email: '',
      password: ''
    };
  },
  methods: {
      viewContact(id) {
      this.$router.push("/contact/" + id);
      },

      login() {
        contactService.login({email: this.email, password: this.password}).then(response => {
          console.log('Login success', response)
          localStorage.setItem('token', response.data.token)
        })
      },

  },
  created() {
    contactService.getAll().then(response => {
      this.contacts = response.data;
    });
  }
};
</script>

<style scoped>
ul {
  list-style: none; /* Remove list bullets */
  padding: 0;
  margin: 0;
}
</style>