describe("Clase GameBoardSpec", function(){
	var canvas, ctx;

    beforeEach(function(){
	loadFixtures('index.html');

	canvas = $('#game')[0];
	expect(canvas).toExist();

	ctx = canvas.getContext('2d');
	expect(ctx).toBeDefined();

    });

	it("add", function(){
		var objeto = "hola";
		var miobjeto = new GameBoard();
		miobjeto.add(objeto);
		expect(miobjeto.objects).toEqual(["hola"]);
	});
/*
	it ("add", function(){
	spyOn(GameBoard, "add");
	var miobjeto = new GameBoard;
	miobjeto.add();
	expect(GameBoard.add()).toHaveBeenCalled;
	});
*/
	it("remove", function(){
		var pos1 = "pos1";
		var myremove = new GameBoard();
		
		myremove.add(pos1);
		
		myremove.resetRemoved();
		myremove.remove(pos1);
		myremove.finalizeRemoved();		
		
		expect(myremove.objects[0]).toEqual(undefined); 
		//Preguntar porque no se puede hacer con un:
		// spyOn(myremove, "resetRemoved");)		
		// expect(myremove.resetRemoved()).toHaveBeenCalled();
		// expect(myremove.finalizeRemoved()).toHaveBeenCalled();
	});
	
	it ("iterate", function(){
		var myiterate = new GameBoard();
		spyOn(myiterate, "iterate"); // ¿porqué aquí se puede llamar?

		myiterate.iterate("remove", ctx);

		expect(myiterate.iterate).toHaveBeenCalled();		
	});

	it ("detect", function(){
		var mydetect = new GameBoard();
		var p1 = "p1"
		var tdetect = function(){
			return true;
		}
		mydetect.add(p1);	
		spyOn(mydetect, "detect");
		mydetect.detect(tdetect);
	
		expect(mydetect.detect).toHaveBeenCalledWith(tdetect);
		expect(mydetect.detect).not.toBeFalsy(); //Preguntarselo a Quan		
	});

/*	it ("step", function(){
	});*/

/*	it ("draw", function(){
	});*/

/*	it ("overlap", function(){
	});*/

/*	it ("collide", function(){
	});*/
});














