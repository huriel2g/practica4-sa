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
                sh 'sudo ansible-playbook pruebas.yaml'
                sh 'sudo ansible-playbook produccion.yaml'
            }
		}
	}

}