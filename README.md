# Story-Hardhat - Build & Deploy

This repository is a small Hardhat project containing an `Example` contract, a deploy script at `scripts/deploy.js`, and test scaffolding.

Below are concise, copy-paste friendly commands (for Windows PowerShell) to install dependencies, compile, run tests, and deploy the contract to different networks.

## Prerequisites
- Node.js (LTS recommended)
- npm (comes with Node)
- A configured RPC provider for the network you want to deploy to (Infura/Alchemy/custom node)
- A funded account private key (for testnets/mainnet)

Create a `.env` file to store secrets (recommended). Example `.env`:

```
PRIVATE_KEY=0xyourprivatekeyhere
RPC_URL=https://rpc.yourprovider.io/v3/PROJECT_ID
ETHERSCAN_API_KEY=your_etherscan_api_key
```

Install dependencies:

```powershell
# from project root
npm install
```

## Compile

Compile contracts (this creates `artifacts/` and `cache/`):

```powershell
npx hardhat compile
```
## Deploy contract (your provided script)

The repository includes `scripts/deploy.js`. Use Hardhat to run it. Replace `<network>` with a network configured in `hardhat.config.js` (for example `localhost`, `goerli`, `mainnet`).

```powershell
# Deploy to a testnet (example: goerli)
npx hardhat run scripts/deploy.js --network story

# Deploy to the configured local Hardhat network
npx hardhat run scripts/deploy.js --network localhost
```


## Run a local node

Run a local Hardhat node (useful for rapid deploys and debugging):

```powershell
npx hardhat node
```

While `npx hardhat node` runs, you can deploy to it using the `--network localhost` option.


Notes about the deploy script:
- `scripts/deploy.js` calls `Example.deploy(overrides)` and passes explicit EIP-1559 fields (`maxFeePerGas` and `maxPriorityFeePerGas`). Some RPC providers/networks may ignore these or require `gasPrice` instead.
- If the contract has constructor arguments, they must be passed before the overrides object: `Example.deploy(arg1, arg2, overrides)`.


## Example quick workflow (PowerShell)

```powershell
npm install
npx hardhat compile
npx hardhat node    # in a separate terminal
# in another terminal
npx hardhat run scripts/deploy.js --network localhost
```

If you'd like, I can also update `scripts/deploy.js` to print the deployer address & balance and to use `getFeeData()` fallbacks — tell me and I will implement it.

````
