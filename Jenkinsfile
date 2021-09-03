pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                git 'https://github.com/a-kumar9168/unit-testing.git'
//                 sh './mvnw clean compile'
                bat '.\\mvnw clean compile'
            }
        }
        stage('Test') {
            steps {
//                 sh './mvnw test'
                bat '.\\mvnw test'
            }

            post {
                always {
                    junit '**output\code-coverage\lcov-report\index.html'
                }
            }
        }
    }
}
