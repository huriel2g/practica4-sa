pipeline {
    agent any
    tools { nodejs "node" }

    stages {
		stage ('Dependencias'){
			steps {
				sh 'npm install'
			}
		}
		stage('Pruebas'){
			steps {
				sh 'npm test'
			}
		}
		stage ('Deploy'){
			steps {
				sh 'npm start'
            }
		}
        stage ('Fin'){
			steps {
				sh 'forever stopall'
                sh 'sleep 3'
            }
		}
	}

}