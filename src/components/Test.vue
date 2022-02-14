<template>
	<fieldset class="car">
		<legend>Componente Test</legend>
		<p> {{ msg }} </p>
	</fieldset>
</template>

<script type="text/javascript">
export	default {
	data(){
		return{

		}
	},
	props:{
		msg: {
			type:String,
			default: 'Mensaje por defecto'
		}
	}
}
</script>

<style type="text/css">
.car{
  display: inline-block;
  padding: 10px;
  width: 30%;
}
</style>