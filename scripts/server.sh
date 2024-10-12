#!/bin/bash

if [ ! -d "node_modules" ]; then
  echo "Installing npm dependencies..."
  npm install
else
  echo "The node_modules directory already exists, no installation needed."
fi

npm run build

npm run serve &

iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 3000

echo "Docusaurus is running on http://localhost:80"