/*
//funcionalidad por default de este script
describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
        cy.visit('https://losestudiantes.co')
	cy.contains('Cerrar').click()
	//Lineas nuevas  
      	cy.contains('Ingresar').click()
      	cy.get('.cajaLogIn').find('input[name="correo"]').click().type("wrongemail@example.com")
      	cy.get('.cajaLogIn').find('input[name="password"]').click().type("1234")
      	cy.get('.cajaLogIn').contains('Ingresar').click()
      	cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
    
    })
})

//1.5.1  creacion de un nuevo usuario
describe('Crea cuenta en los estudiantes',function(){
	it('Va a los estudiantes y crea un nuevo usuario', function(){
		
		//vamos a la pagina de losestudiantes.co
		cy.visit('https://losestudiantes.co')

		//cerramos el popup inicial
		cy.contains('Cerrar').click()

		//vamos a crear el nuevo usuario
		cy.get('.botonIngresar').click()

		cy.get('.jsx-527058112').find('input[name="nombre"]').click().type("Max2")
		cy.get('.jsx-527058112').find('input[name="apellido"]').click().type("Powe2")
		cy.get('.jsx-527058112').find('input[name="correo"]').click().type("MaxPower2@server.com")
		cy.get('.jsx-527058112').find('select[name="idUniversidad"]').select('universidad-de-los-andes')
		
		//click en checkbox de estudio una maestria 
		cy.get('.jsx-527058112').find('input[type="checkbox"][class="jsx-527058112"]').click()
		
		//escojo MISO
		cy.get('.jsx-527058112').find('select[name="idPrograma"]').select('16')

		//password
		cy.get('.jsx-527058112').find('input[name="password"]').click().type("MaxPowerPwd123")

		//checkbox de acepto condiciones
		cy.get('.jsx-527058112').find('input[type="checkbox"][name="acepta"]').click()

		//click en submit
		cy.get('.jsx-527058112').find('button[type="submit"]').click()



	})
})

//logueo  con e usuario anterior...
describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        //Lineas nuevas  
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("MaxPower2@server.com")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("MaxPowerPwd123")
        cy.get('.cajaLogIn').contains('Ingresar').click()
        //cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
    
    })
})
*/

//busqueda de profesores
describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        //Lineas nuevas  
        
	cy.wait(1000)

	//cy.get('.Select-multi-value-wrapper').find('input[aria-activedescendant="react-select-required_error_checksum--value"]').click().type('mario')



	//cy.get('.Select-multi-value-wrapper').find('.Select-input').click({force: true}).type('mario')
	cy.get('.Select-multi-value-wrapper').find('.Select-input').find('input').click({force: true}).type('mario linares')

	cy.wait(1500)


	cy.get('.Select-menu-outer').find('div[id="react-select-required_error_checksum--option-0"]').click()
	//.find('div[id="react-select-required_error_checksum--list"]').find('div[id="react-select-required_error_checksum--option-0"]').click()

      
    })
})

