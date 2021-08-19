#!/bin/groovy
pipeline {
  agent none
  tools {
    nodejs 'default-nodejs'
  }
  stages {
    stage('Startup') {
      steps {
        script {
          sh 'npm install'
        }
      }
    }
    stages{
        stage ("Build"){
            milestone(1)
            sleep getTime()
            echo "finishing build"
        }
        stage ("Test"){
            milestone (10)
            sleep getTime()
            echo "finishing Test"
        }
        stage ("Deploy"){
            milestone (20)
            sleep getTime()
            echo "finishing Deploy"
        }
    }
      }
      steps {
        script {
          def server = Artifactory.server 'My_Artifactory'
          uploadArtifact(server)
        }
          script {
        mydict = [:]
        mydict["My_KNL"] = {
            build job: 'My_KNL', parameters: [[$class: 'BooleanParameterValue', name: 'TAG_BUILD', value: true]]
        }
        // and so on.. for all of your jobs.
        parallel mydict
       }
      }
    }
}
def uploadArtifact(server) {
  def uploadSpec = """{
            "files": [
              {
                "pattern": "continuous-test-code-coverage-guide*.tgz",
                "target": "npm-stable/"
              }
           ]
          }"""
  server.upload(uploadSpec)

  def buildInfo = Artifactory.newBuildInfo()
  server.upload spec: uploadSpec, buildInfo: buildInfo
  server.publishBuildInfo buildInfo
}
@NonCPS
def getTime() {
    if (currentBuild.number % 2 != 0){
        return 10
    }
    else{
        return 5
    }
}