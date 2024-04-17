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
               slackSend(channel: '#yourfirstnameip1', color: 'danger',
                                  message: "test failed")
                }
            }
        }
        stage('Deploy-to-Render'){  
            steps{
                //Deployment step
                script{
                     // Install render-cli
                    sh 'curl -O https://github.com/render-oss/render-cli/releases/download/v0.1.11/render-linux-x86_64'
                    // located within the home directory
                    sh 'chmod +x ~/bin/render'

                    // Deploy your application
                    // sh 'render blueprint launch'
                }
            }
            //Assuming successfull deployment
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