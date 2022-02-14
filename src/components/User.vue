<template lang="html">
	<div class="users">
		<h1>Componente de Usuarios</h1>
		<h3>Listado de Usuarios</h3>
		<ul>
			<li v-for="user in users" >{{ user.name }} - {{ user.email }}</li>
		</ul>

		<h3>Crear Usuario</h3>
		<form v-on:submit="addUser">
			<input type="text" v-model="newUser.name" name="name" placeholder="Ingrese su Nombre">
			<input type="text" v-model="newUser.email" name="email" placeholder="Ingrese su Email">
			<button type="submit"> Agregar Usuario</button>
		</form>
	</div>
</template>

<script type="text/javascript">
export	default {
	data(){
		return {
			users: [
				{
					name:'Jorge',
					email: 'jor@gmail.com',
					contacted: false
				},
				{
					name:'Genesis',
					email: 'gen@gmail.com',
					contacted: false
				},
				{
					name:'Vane',
					email: 'van@gmail.com',
					contacted: false
				}
			],
			newUser:{}
		}
	},
	methods: {
		addUser(e){
			e.preventDefault();
			console.log('Agregando Usuario')
		}
	}
}
</script>

<style lang="css">
	.users{
		background: #333;
		padding: 10px;
		color: white;
	}
</style>