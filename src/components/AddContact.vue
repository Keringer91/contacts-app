<template>
  <div>
      <h5 v-if="$route.name === 'edit'">Edit contact with ID:{{contact.id}}</h5>
      <h5 v-else>Add a new contact</h5>
   <form @submit.prevent>
            <label>First name:</label>
            <input v-model = "contact.first_name" type="text" id="first_name"><br><br>
            <label>Last name:</label>
            <input v-model = "contact.last_name" type="text" id="last_name"><br><br>
            <label>Email adress:</label>
            <input v-model = "contact.email" type="text" id="email"><br><br>
            <button v-if="$route.name === 'edit'" @click="editContact();" type="submit" value="Submit">Edit</button>
            <button v-else @click="addNewContact();" type="submit" value="Submit">Submit</button>
   </form> 
  </div>
</template>


<script>
import { contactService } from "../services/Contact";
export default {
  name: "AddContact",
  data() {
    return {
      contact: {},
      id: ''
    };
  },
  methods: {
    addNewContact() {
        contactService.addContact(this.contact).then(() => {
            this.$router.push('/contacts');
            this.contact = {};
        });
    },
    editContact() {
        contactService.edit(this.contact.id, this.contact).then(() => {
          this.$router.push("/contacts");
          this.contact = {};
        });
    }
  },
  created() {
    this.id = this.$route.params.id;
    contactService.getId(this.id).then(response => {
      this.contact = response.data;
    });
  }
};
</script>

<style scoped>
</style>