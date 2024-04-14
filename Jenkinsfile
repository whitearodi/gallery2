pipeline {
    tools{
        nodejs 'nodejs'
    }
    agent any

    environment {
        RENDER_EMAIL = credentials('josepharodi20@gmail.com')
        RENDER_PASSWORD = credentials('k1t1suru')
    }

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
        stage('Deploy-to-Render'){
            steps{
                //Deployment step
                script{
                     // Install renderctl
                    sh 'curl -O https://render.com/download/renderctl'
                    sh 'chmod +x renderctl'

                    // Authenticate with Render
                    sh "./renderctl auth login --email ${RENDER_EMAIL} --password ${RENDER_PASSWORD}"

                    // Deploy your application
                    sh './renderctl up --name gallery2 --dir https://github.com/whitearodi/gallery2'
                }
                //Assuming successfull deployment
            }
            post{
                success{
                    script{
                        def buildId = env.BUILD_ID
                        def renderLink = 'https://gallery2-u5iz.onrender.com/'

                        slackSend(channel: '#yourfirstnameip1', color: 'good',
                                  message: "Deployment successful! Build ID: ${buildId}\nRender Link: ${renderLink}")
                    }
                }
            }
        }
    }
}