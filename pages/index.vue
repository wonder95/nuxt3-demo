<template>
  <main>
    <h1>Index Page</h1>

    <table border="1 px solid">
      <thead>
      <tr>
        <th>Name</th>
        <th>Symbol</th>
        <th>Price</th>
        <th>Details</th>
      </tr>
      <tr v-for="currency in data.data" :key="data.id">
        <td>{{ currency.name }}</td>
        <td>{{ currency.symbol }}</td>
        <td>{{ currency.price_usd }}</td>
        <td>
          <NuxtLink :to="'/currency/' + currency.id">{{ currency.id }}</NuxtLink>
        </td>
      </tr>
      </thead>
    </table>
  </main>
</template>

<script>
export default {
  async setup() {
    const {data} = await useFetch('/api/coinlore/tickers');

    return {
      data
    };
  }
}
</script>