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
/*	it("iterate", function(){
		spyOn(GameBoard, "iterate");
		var myiterate = new GameBoard();
		var funcName = [];
		myiterate.iterate(funcName);

		expect(GameBoard.iterate)
	});
*/
});
