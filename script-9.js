<!DOCTYPE html>
<HTML>
<HEAD>
  
	<meta charset="utf-8">

<TITLE> Магічна куля </TITLE>


<style>
	
	.cart{
		transform: rotateY(180deg);
	}

	.leftCol7{
	
	
	
	 
     background-color:rgb(35, 8, 70);
	}
	.player1{
		margin-top: 5%;
		margin-left: 5%;
		width: 20%;
	}
	.player2{
		margin-top: 5%;
		margin-right: 5%;
		width: 20%;
		float:right;
	}

	.text{
		font-size:7vh;
		color:rgb(151, 29, 12);
	}
	.tex{
		margin-left: 20%;
		font-size:7vh;
	
		color:rgb(151, 29, 12);
	}
	.texx{
	float:left;
	
	margin-left: 14%;
	position:relative;
		font-size:7vh;
	
		color:rgb(151, 29, 12);
	}
	.texx1{
	float:right;
	
	margin-right: 14%;
	position:relative;
		font-size:7vh;
	
		color:rgb(151, 29, 12);
	}

	.tex1{
		font-size:7vh;
	margin-left: 35%;
		color:rgb(151, 29, 12);
	}
	.button1{
		width:23%;
		height:7%;
		background-color: rgb(6, 122, 51);
		border: 0.7vh ridge rgb(230, 134, 9);
		border-radius: 1vh 1vh 1vh 1vh;
		margin-left:38%;
		margin-top:30%;
		font-size:5vh;
		color:rgb(13, 13, 134);
	 }
	 .button2{
	
		margin-left:20%;
	
	 }
	


.front, .back {
  position: absolute;
  width: 13%;
	margin-top:10%;
  left: 15%;
  top: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s;
  backface-visibility: hidden;
  background-color: #fff;
 }
 .fr{
	left: 70%;
  top: 20;
  

 }
.front img {
  max-width: 100%;
  min-width: 100%;
  height: auto;
}
.back img {
  max-width: 100%;
  min-width: 100%;
  height: auto;
}
.back {
  transform: rotateY(180deg);
}
 .front1 {
  transform: rotateY(180deg);}
.back1 {
  transform: rotateY(360deg);}
</style>
</HEAD>
<body class="leftCol7 vsp1"  >

	

		

		<img src="Player1.png" class="player1"/>
		
			<span class="tex"id="pl3">0</span>
			<span class="text"id="p77">:</span>
			<span class="text"id="pl4">0</span>
		
		<img src="Player2.png" class="player2"/>
		<div>
		<span class="tex"id="pl8">0</span>
		<span class="texx1"id="pl7">Комп'ютер</span>
		</div>
	


		<div class="wrapper">
			<div class="card">
			  <div class="front" id='f1'><img src="Red_Back.png" /></div>
			  <div class="back" id='f2'><img src="Red_Back.png" id="image"/></div>
			</div>
		  </div>	
			



	<div class="wrapper ">
			<div class="card ">
			  <div class="front fr"><img src="Red_Back.png" /></div>
			  <div class="back fr"><img src="Red_Back.png" id="image1"/></div>
			</div>
		  </div>	


			
			
		</div>
		<input class=" button1 " type="button"  value="Почати Гру" onclick="timme()">
	
		<div>	
				<span class="tex1">Залишилося спроб:</span>
				<span class="text"id="aa">3</span>
		</div>
    

</body><script src="script-8.js">
 
</script>
</HTML>
