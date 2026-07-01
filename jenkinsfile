pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t jenkins-demo .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat '''
                docker stop jenkins-demo
                docker rm jenkins-demo
                exit /b 0
                '''
            }
        }

        stage('Deploy') {
            steps {
                bat 'docker run -d --name jenkins-demo -p 3000:3000 jenkins-demo'
            }
        }
    }
}