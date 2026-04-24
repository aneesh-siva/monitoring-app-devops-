pipeline {
    agent any

    environment {
        DOCKER_USER = "ane21"
    }

    stages {

        stage('Build Images') {
            steps {
                sh 'docker build -t $DOCKER_USER/monitoring-backend ./backend'
                sh 'docker build -t $DOCKER_USER/monitoring-frontend ./frontend'
            }
        }

        stage('Push to DockerHub') {
            steps {
                sh 'docker push $DOCKER_USER/monitoring-backend'
                sh 'docker push $DOCKER_USER/monitoring-frontend'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/'
            }
        }
    }
}