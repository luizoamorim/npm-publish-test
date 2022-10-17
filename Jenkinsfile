pipeline {
    agent any
    environment {
        GH_TOKEN  = credentials('GH_TOKEN')
    }
    stages {
        stage('Checkout scm') {
            steps {
                checkout([$class: 'GitSCM',
                    branches: [[name: 'develop']],
                    userRemoteConfigs: [[credentialsId: 'jenkins-github',
                                        url: 'git@github.com:luizoamorim/npm-publish-test.git']]])
            }
        }
        stage('Test') {
            steps {
                sh '''
                # Configure your test steps here (checkout, npm install, tests etc)
                npm install
                npm test
                '''
            }
        }
        stage('Release') {
            tools {
                nodejs "node16"
            }
            steps {
                sh '''
                # Run optional required steps before releasing
                GH_TOKEN=$GH_TOKEN npx semantic-release --branches origin/develop
                '''
            }
        }
    }
}