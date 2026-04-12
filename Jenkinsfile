pipeline {
    agent any

    stages {
        stage('Build Backend Image') {
            steps {
                sh 'docker build -t monitoring-backend ./backend'
            }
        }

        stage('Build Frontend Image') {
            steps {
                sh 'docker build -t monitoring-frontend ./frontend'
            }
        }

        stage('Stop Old Containers') {
            steps {
                sh 'docker rm -f backend || true'
                sh 'docker rm -f frontend || true'
            }
        }

        stage('Run Backend Container') {
            steps {
                sh 'docker run -d -p 5000:5000 --name backend monitoring-backend'
            }
        }

        stage('Run Frontend Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name frontend monitoring-frontend'
            }
        }
    }
}
}