This repository contains environment for comparison testing of simple Next.js application running using Bun and Node.js

### Prerequisites
You need to have installed
* Minikube
* K6

## Steps to configure environment
```bash
minikube start

minikube image build -t bun-nestjs-testing -f ./docker/BunDockerfile . 
minikube image build -t node-nestjs-testing -f ./docker/NodeDockerfile . 

kubectl apply -f ./deployments/bun-nestjs-testing.yaml 
kubectl apply -f ./deployments/node-nestjs-testing.yaml
```

## Tests execution
```bash
k6 run --log-output=none ./test/bun-nestjs-testing.js 
k6 run --log-output=none ./test/node-nestjs-testing.js 
```