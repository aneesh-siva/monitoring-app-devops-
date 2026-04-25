# 🚀 Monitoring App - End-to-End DevOps CI/CD Pipeline

This project demonstrates a **complete DevOps workflow** by automating the build, containerization, and deployment of a full-stack application using industry-standard tools.

The goal of this project is to simulate how modern applications are deployed in real-world production environments using **CI/CD pipelines, containers, and Kubernetes orchestration**.

---

## 📌 Project Overview

This project implements a fully automated pipeline:

👉 Developer pushes code → CI/CD pipeline triggers → Docker images are built → Images pushed to registry → Application deployed on Kubernetes

---

## 🧱 Tech Stack

| Category              | Tools Used                          |
|----------------------|------------------------------------|
| Frontend             | React                              |
| Backend              | Node.js, Express                   |
| CI/CD                | Jenkins                            |
| Containerization     | Docker                             |
| Container Registry   | DockerHub                          |
| Orchestration        | Kubernetes (Minikube)              |
| Infrastructure (IaC) | Terraform                          |

---

## 🏗️ Architecture

Pipeline Flow:

Developer → GitHub → Jenkins → Docker → DockerHub → Kubernetes → Application



### Key Components:

- **GitHub**: Source code repository  
- **Jenkins**: Automates CI/CD pipeline  
- **Docker**: Builds container images  
- **DockerHub**: Stores container images  
- **Kubernetes (Minikube)**: Deploys and manages containers  
- **Terraform**: Demonstrates Infrastructure as Code
- 

---

## ⚙️ CI/CD Pipeline Workflow

The Jenkins pipeline performs the following steps:


### 1️⃣ Code Checkout
- Pulls latest code from GitHub repository
  

### 2️⃣ Build Stage
- Builds Docker images for:
  - Frontend
  - Backend
    

### 3️⃣ Docker Push
- Authenticates with DockerHub
- Pushes images:
  - `ane21/monitoring-backend`
  - `ane21/monitoring-frontend`
  - 

### 4️⃣ Deployment Stage
- Applies Kubernetes manifests:
```bash
kubectl apply -f k8s/


🐳 Docker Setup

docker build -t ane21/monitoring-backend ./backend
docker build -t ane21/monitoring-frontend ./frontend

Push to DockerHub

docker push ane21/monitoring-backend
docker push ane21/monitoring-frontend

☸️ Kubernetes Deployment

kubectl apply -f k8s/

Verify deployment

kubectl get pods
kubectl get svc

🌐 Access Application

minikube service frontend-service


🛠️ Terraform (Infrastructure as Code)

Terraform is used here to simulate infrastructure provisioning.

cd terraform
terraform init

terraform apply -auto-approve


