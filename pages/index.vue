<template>
  <main>
    <h1>Index Page</h1>

    <table border="1 px solid">
      <thead>
      <tr>
        <th>Name</th>
        <th>Symbol</th>
        <th>Slug</th>
        <th>Price</th>
        <th>Details</th>
      </tr>
      <tr v-for="currency in data" :key="id">
        <td>{{ currency.name }}</td>
        <td>{{ currency.symbol }}</td>
        <td>{{ currency.slug }}</td>
        <td>{{ currency.quote.USD.price }}</td>
        <td>
          <NuxtLink :to="'/currency/' + currency.id">{{ currency.id }}</NuxtLink>
        </td>
      </tr>
      </thead>
    </table>
  </main>
</template>

<script>
import {ref} from 'vue';
import { onMounted } from "vue";
export default {
  name: 'CurrencyList',
  props: {},
  setup() {
    const data = ref(null);
    const loading = ref(true);
    const error = ref(null);

    function fetchData() {
        return fetch('api/tickers', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
              return res.json()
            })
            .then((json) => {
                data.value = json.data;
            })
            .catch(err => {
              error.value = err;
              // In case a custom JSON error response was provided
              if (err.json) {
                return err.json.then(json => {
                  // set the JSON response message
                  error.value.message = json.message;
                });
              }
            })
            .then(() => {
              loading.value = false;
            });
    }

    onMounted(() => {
      fetchData();
    })

    return {
      data,
      loading,
      error
    };
  },
}
</script>

<style scoped>

</style>