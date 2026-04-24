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
stage('Docker Login') {
    steps {
        withCredentials([usernamePassword(
            credentialsId: 'dockerhub-creds',
            usernameVariable: 'DOCKER_USER',
            passwordVariable: 'DOCKER_PASS'
        )]) {
            sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
        }
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