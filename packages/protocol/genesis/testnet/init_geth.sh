#!/bin/sh

set -e

rm -rf /root/.ethereum

geth init --datadir /root/.ethereum /data/genesis.json

cp /host/keyfile.json /root/.ethereum/keystore

geth --datadir /root/.ethereum \
  --nodiscover \
  --http \
  --http.addr 0.0.0.0 \
  --http.api debug,eth,net,web3,txpool,miner \
  --allow-insecure-unlock \
  --password /host/password \
  --miner.etherbase 0x2D815240A61731c75Fa01b2793E1D3eD09F289d0 \
  --unlock 0x2D815240A61731c75Fa01b2793E1D3eD09F289d0 \
  --mine
