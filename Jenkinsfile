pipeline {
    tools{
        nodejs 'nodejs'
    }
    agent any
    stages{
        stage('clone-repo'){
            steps{
                git branch:'master', url: 'https://github.com/whitearodi/gallery2.git'
            }
        }
        stage('build-project'){
            steps{
               sh 'npm install'
            }
        }
        stage('test-project'){
            steps{
                sh 'npm test'
            } 
            post{
                failure{
                echo "Send email"
                }
            }
        }
    }
}