<template>
  <div>
        Contact's ID: {{contact.id }}<br>
        First name: {{ contact.first_name }}<br>
        Last name: {{ contact.last_name }}<br>
        Email adress: {{ contact.email }}<br><br>
        <button @click="edit(contact.id)">Edit</button> 
        <button @click="deleteContact(contact.id)">Delete</button>
  </div>
</template>

<script>
import { contactService } from "../services/Contact";
export default {
  name: "SingleContact",
  data() {
    return {
      contact: {},
      id: ""
    };
  },
  methods: {
    deleteContact(id) {
        contactService.delete(id).then(() => {
        this.$router.push('/contacts');
      });
    },
    edit(id) {
      this.$router.push("/edit/" + id);
    },
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
