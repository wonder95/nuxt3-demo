<template>
  <h1>Index Page</h1>

  <table border="1 px solid">
    <thead>
        <tr>
          <th>Name</th>
          <th>Symbol</th>
          <th>Slug</th>
          <th>Price</th>
        </tr>
        <tr v-for="currency in data" :key="id">
          <td>{{ currency.name }}</td>
          <td>{{ currency.symbol }}</td>
          <td>{{ currency.slug }}</td>
          <td>{{ currency.quote.USD.price }}</td>
        </tr>
    </thead>
  </table>
</template>

<script>
export default {
  name: 'CurrencyList',
  props: {
  },
  setup() {
    const data = ref(
    [
      {
        "id": 1,
        "name": "Bitcoin",
        "symbol": "BTC",
        "slug": "bitcoin",
        "num_market_pairs": 9121,
        "date_added": "2013-04-28T00:00:00.000Z",
        "tags": [
          "mineable",
          "pow",
          "sha-256",
          "store-of-value",
          "state-channel",
          "coinbase-ventures-portfolio",
          "three-arrows-capital-portfolio",
          "polychain-capital-portfolio",
          "binance-labs-portfolio",
          "blockchain-capital-portfolio",
          "boostvc-portfolio",
          "cms-holdings-portfolio",
          "dcg-portfolio",
          "dragonfly-capital-portfolio",
          "electric-capital-portfolio",
          "fabric-ventures-portfolio",
          "framework-ventures-portfolio",
          "galaxy-digital-portfolio",
          "huobi-capital-portfolio",
          "alameda-research-portfolio",
          "a16z-portfolio",
          "1confirmation-portfolio",
          "winklevoss-capital-portfolio",
          "usv-portfolio",
          "placeholder-ventures-portfolio",
          "pantera-capital-portfolio",
          "multicoin-capital-portfolio",
          "paradigm-portfolio"
        ],
        "max_supply": 21000000,
        "circulating_supply": 18944612,
        "total_supply": 18944612,
        "platform": null,
        "cmc_rank": 1,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-01-31T04:13:00.000Z",
        "quote": {
          "USD": {
            "price": 36986.220640877036,
            "volume_24h": 16040978680.910198,
            "volume_change_24h": -5.5765,
            "percent_change_1h": -0.14449505,
            "percent_change_24h": -2.51928789,
            "percent_change_7d": 4.58364022,
            "percent_change_30d": -21.09234288,
            "percent_change_60d": -34.59544693,
            "percent_change_90d": -39.53199681,
            "market_cap": 700689599387.8068,
            "market_cap_dominance": 41.9342,
            "fully_diluted_market_cap": 776710633458.42,
            "last_updated": "2022-01-31T04:13:00.000Z"
          }
        }
      },
      {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "num_market_pairs": 5482,
        "date_added": "2015-08-07T00:00:00.000Z",
        "tags": [
          "mineable",
          "pow",
          "smart-contracts",
          "ethereum-ecosystem",
          "binance-smart-chain",
          "coinbase-ventures-portfolio",
          "three-arrows-capital-portfolio",
          "polychain-capital-portfolio",
          "binance-labs-portfolio",
          "blockchain-capital-portfolio",
          "boostvc-portfolio",
          "cms-holdings-portfolio",
          "dcg-portfolio",
          "dragonfly-capital-portfolio",
          "electric-capital-portfolio",
          "fabric-ventures-portfolio",
          "framework-ventures-portfolio",
          "hashkey-capital-portfolio",
          "kenetic-capital-portfolio",
          "huobi-capital-portfolio",
          "alameda-research-portfolio",
          "a16z-portfolio",
          "1confirmation-portfolio",
          "winklevoss-capital-portfolio",
          "usv-portfolio",
          "placeholder-ventures-portfolio",
          "pantera-capital-portfolio",
          "multicoin-capital-portfolio",
          "paradigm-portfolio"
        ],
        "max_supply": null,
        "circulating_supply": 119382171.624,
        "total_supply": 119382171.624,
        "platform": null,
        "cmc_rank": 2,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-01-31T04:13:00.000Z",
        "quote": {
          "USD": {
            "price": 2505.8978161927703,
            "volume_24h": 10418238006.08229,
            "volume_change_24h": -3.9452,
            "percent_change_1h": -0.46233395,
            "percent_change_24h": -2.5636538,
            "percent_change_7d": 1.83037173,
            "percent_change_30d": -32.78220425,
            "percent_change_60d": -44.58793191,
            "percent_change_90d": -42.10066182,
            "market_cap": 299159523164.9321,
            "market_cap_dominance": 17.9093,
            "fully_diluted_market_cap": 299159523164.93,
            "last_updated": "2022-01-31T04:13:00.000Z"
          }
        }
      },
      {
        "id": 825,
        "name": "Tether",
        "symbol": "USDT",
        "slug": "tether",
        "num_market_pairs": 27189,
        "date_added": "2015-02-25T00:00:00.000Z",
        "tags": [
          "payments",
          "stablecoin",
          "asset-backed-stablecoin",
          "binance-smart-chain",
          "avalanche-ecosystem",
          "solana-ecosystem",
          "moonriver-ecosystem"
        ],
        "max_supply": null,
        "circulating_supply": 78120427990.9358,
        "total_supply": 80074893058.70424,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0xdac17f958d2ee523a2206206994597c13d831ec7"
        },
        "cmc_rank": 3,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-01-31T04:13:00.000Z",
        "quote": {
          "USD": {
            "price": 1.000339345788664,
            "volume_24h": 37970287832.455215,
            "volume_change_24h": -0.8645,
            "percent_change_1h": -0.02212973,
            "percent_change_24h": 0.00216054,
            "percent_change_7d": -0.01811517,
            "percent_change_30d": 0.01665367,
            "percent_change_60d": -0.10763803,
            "percent_change_90d": 0.02274039,
            "market_cap": 78146937829.18317,
            "market_cap_dominance": 4.6803,
            "fully_diluted_market_cap": 80102066136.44,
            "last_updated": "2022-01-31T04:13:00.000Z"
          }
        }
      },
    ]
  );
    const loading = ref(true);
    const error = ref(null);

    // function fetchData() {

    // }
    //
    // onMounted(() => {
    //   fetchData();
    // });

    return {
      data,
      loading,
      error
    };
  }
}
</script>

<style scoped>

</style>