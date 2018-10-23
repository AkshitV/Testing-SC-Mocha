
//0xb61e0fedec42ad205f1af4ad5fc9e75e408f4e10: Contract Address
module.exports = {

  solc: {
        optimizer: {
          enabled: true,
          runs: 200
        }
  },
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
      //gas: 8000000,   // <--- Twice as much
      
    }
    

  }
}
