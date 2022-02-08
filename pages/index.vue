<template>
  <main>
    <h1>Index Page</h1>

    <table border="1 px solid">
      <thead>
      <tr>
        <th>Name</th>
        <th>Symbol</th>
        <th>Rank</th>
        <th>ID</th>
      </tr>
      <tr v-for="currency in data.data" :key="data.id">
        <td>{{ currency.name }}</td>
        <td>{{ currency.symbol }}</td>
        <td>{{ currency.rank }}</td>
        <td>
          <NuxtLink :to="'/currency/' + currency.id">{{ currency.id }}</NuxtLink>
        </td>
      </tr>
      </thead>
    </table>
  </main>
</template>

<script setup lang="ts">
const { data } = await useFetch('http://localhost:3000/api/tickers/')
</script>