export class All {
	
	constructor(){
		this.message = "";
	}
	
	activate(){
		this.message = "Hello from Aurelia!";
	}
	
	changeMessage(){
		this.message = "Goodbye!"
	}
}