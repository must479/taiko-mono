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
  --miner.etherbase 0xD575856610bD93A9f1AD89bE4a17E90A7bB331C5 \
  --unlock 0xD575856610bD93A9f1AD89bE4a17E90A7bB331C5 \
  --mine
