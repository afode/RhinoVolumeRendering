///<reference path="babylon.d.ts" />

class Rhinov2 {

	private _canvas: HTMLCanvasElement;
	private _engine: BABYLON.Engine;
	private _scene: BABYLON.Scene;
	private _camera: BABYLON.ArcRotateCamera;
	private _light: BABYLON.Light; 

	private fpsDisplay;
	private lastFrameTimeMs = 0;
	private delta = 0;
	private lastFpsUpdate = 0;
	private timestep = 0;
	private maxFPS = 0;
	private fps = 0;
	private framesThisSecond = 0;

	// can i load a users zip file into function createLayers. load folder.

	constructor(canvasElement : string) {
		this._canvas = document.getElementById(canvasElement) as HTMLCanvasElement;
		this._engine = new BABYLON.Engine(this._canvas, true);
		this.fpsDisplay = document.getElementById('fpsDisplay')

	}
	

	createScene() : BABYLON.Scene {
		this._scene = new BABYLON.Scene(this._engine);
		this._camera = new BABYLON.ArcRotateCamera("camera", 0, 0.8, 150, new BABYLON.Vector3(0,-10,0), this._scene);
		// this._camera.lowerBetaLimit = 0.1;
		// this._camera.upperBetaLimit = (Math.PI/2) * 0.9;
		// this._camera.lowerRadiusLimit = 150;
		// this._camera.upperRadiusLimit = 150;
		this._camera.attachControl(this._canvas, true);

		this._light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0,2,0), this._scene);

		//**************************LAYERS***************************//

		// let material02 = new BABYLON.StandardMaterial("layer02", this._scene);
		// let material02_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer02", "images/wrist/frame02.jpg", 150, 150, 250, 0, 5, this._scene, false);
		// material02.diffuseTexture = new BABYLON.Texture("images/wrist/frame02.jpg", this._scene);
		// material02_heightmap.material = material02;
		// material02_heightmap.position.y = 3;
		// material02.alpha = 0.2;

		// let material01 = new BABYLON.StandardMaterial("layer01", this._scene);
		// let material01_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer01", "images/wrist/frame01.jpg", 150, 150, 250, 0, 5, this._scene, false);
		// material01.diffuseTexture = new BABYLON.Texture("images/wrist/frame01.jpg", this._scene);
		// material01_heightmap.material = material01;
		// material01_heightmap.position.y = 2;
		// material01.alpha = 0.2;

		
		
		  

		let material00 = new BABYLON.StandardMaterial("layer00", this._scene);
		let material00_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer00", "images/wrist/frame00.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material00.diffuseTexture = new BABYLON.Texture("images/wrist/frame00.jpg", this._scene);
		material00_heightmap.material = material00;
		material00_heightmap.position.y = 1;
		material00.alpha = 0.2;

		let material0 = new BABYLON.StandardMaterial("layer0", this._scene);
		let material0_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer0", "images/wrist/frame0.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material0.diffuseTexture = new BABYLON.Texture("images/wrist/frame0.jpg", this._scene);
		material0_heightmap.material = material0;
		material0.alpha = 0.2;
		material0.freeze();
		
		let material1 = new BABYLON.StandardMaterial("layer1", this._scene);
		let material1_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer1", "images/wrist/frame1.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material1.diffuseTexture = new BABYLON.Texture("images/wrist/frame1.jpg", this._scene);
		material1_heightmap.material = material1;
		material1_heightmap.position.y = -1;
		material1.alpha = 0.2;
		material1.freeze();
		
		let material2 = new BABYLON.StandardMaterial("layer2", this._scene);
		let material2_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer2", "images/wrist/frame2.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material2.diffuseTexture = new BABYLON.Texture("images/wrist/frame2.jpg", this._scene);
		material2_heightmap.material = material2;
		material2_heightmap.position.y = -2;
		material2.alpha = 0.2;
		material2.freeze();
		
		let material3 = new BABYLON.StandardMaterial("layer3", this._scene);
		let material3_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer3", "images/wrist/frame3.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material3.diffuseTexture = new BABYLON.Texture("images/wrist/frame3.jpg", this._scene);
		material3_heightmap.material = material3;
		material3_heightmap.position.y = -3;
		material3.alpha = 0.2;
		material3.freeze();
		
		let material4 = new BABYLON.StandardMaterial("layer4", this._scene);
		let material4_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer4", "images/wrist/frame4.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material4.diffuseTexture = new BABYLON.Texture("images/wrist/frame4.jpg", this._scene);
		material4_heightmap.material = material4;
		material4_heightmap.position.y = -4;
		material4.alpha = 0.2;
		material4.freeze();
		
		let material5 = new BABYLON.StandardMaterial("layer5", this._scene);
		let material5_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer5", "images/wrist/frame5.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material5.diffuseTexture = new BABYLON.Texture("images/wrist/frame5.jpg", this._scene);
		material5_heightmap.material = material5;
		material5_heightmap.position.y = -5;
		material5.alpha = 0.2;
		material5.freeze();
		
		let material6 = new BABYLON.StandardMaterial("layer6", this._scene);
		let material6_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer6", "images/wrist/frame6.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material6.diffuseTexture = new BABYLON.Texture("images/wrist/frame6.jpg", this._scene);
		material6_heightmap.material = material6;
		material6_heightmap.position.y = -6;
		material6.alpha = 0.2;
		material6.freeze();
		
		let material7 = new BABYLON.StandardMaterial("layer7", this._scene);
		material7.diffuseTexture = new BABYLON.Texture("images/wrist/frame7.jpg", this._scene);
		let material7_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer7", "images/wrist/frame7.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material7_heightmap.material = material7;
		material7_heightmap.position.y = -7;
		material7.alpha = 0.2;
		material7.freeze();
		
		let material8 = new BABYLON.StandardMaterial("layer8", this._scene);
		material8.diffuseTexture = new BABYLON.Texture("images/wrist/frame8.jpg", this._scene);
		let material8_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer8", "images/wrist/frame8.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material8_heightmap.material = material8;
		material8_heightmap.position.y = -8;
		material8.alpha = 0.2;
		material8.freeze();
		
		let material9 = new BABYLON.StandardMaterial("layer9", this._scene);
		material9.diffuseTexture = new BABYLON.Texture("images/wrist/frame9.jpg", this._scene);
		let material9_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer9", "images/wrist/frame9.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material9_heightmap.material = material9;
		material9_heightmap.position.y = -9;
		material9.alpha = 0.2;
		material9.freeze();
		
		let material10 = new BABYLON.StandardMaterial("layer10", this._scene);
		material10.diffuseTexture = new BABYLON.Texture("images/wrist/frame10.jpg", this._scene);
		let material10_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer10", "images/wrist/frame10.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material10_heightmap.material = material10;
		material10_heightmap.position.y = -10;
		material10.alpha = 0.2;
		material10.freeze();

		let material11 = new BABYLON.StandardMaterial("layer11", this._scene);
		material11.diffuseTexture = new BABYLON.Texture("images/wrist/frame11.jpg", this._scene);
		let material11_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer11", "images/wrist/frame11.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material11_heightmap.material = material11;
		material11_heightmap.position.y = -11;
		material11.alpha = 0.3;
		material11.freeze();
		
		let material12 = new BABYLON.StandardMaterial("layer12", this._scene);
		material12.diffuseTexture = new BABYLON.Texture("images/wrist/frame12.jpg", this._scene);
		let material12_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer12", "images/wrist/frame12.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material12_heightmap.material = material12;
		material12_heightmap.position.y = -12;
		material12.alpha = 0.2;
		material12.freeze();
		
		let material13 = new BABYLON.StandardMaterial("layer13", this._scene);
		material13.diffuseTexture = new BABYLON.Texture("images/wrist/frame13.jpg", this._scene);
		let material13_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer13", "images/wrist/frame13.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material13_heightmap.material = material13;
		material13_heightmap.position.y = -13;
		material13.alpha = 0.2;
		material13.freeze();

		let material14 = new BABYLON.StandardMaterial("layer14", this._scene);
		material14.diffuseTexture = new BABYLON.Texture("images/wrist/frame14.jpg", this._scene);
		let material14_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer14", "images/wrist/frame14.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material14_heightmap.material = material14;
		material14_heightmap.position.y = -14;
		material14.alpha = 0.2;
		material14.freeze();
		
		let material15 = new BABYLON.StandardMaterial("layer15", this._scene);
		material15.diffuseTexture = new BABYLON.Texture("images/wrist/frame15.jpg", this._scene);
		let material15_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer15", "images/wrist/frame15.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material15_heightmap.material = material15;
		material15_heightmap.position.y = -15;
		material15.alpha = 0.2;
		material15.freeze();

		let material16 = new BABYLON.StandardMaterial("layer16", this._scene);
		material16.diffuseTexture = new BABYLON.Texture("images/wrist/frame16.jpg", this._scene);
		let material16_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer16", "images/wrist/frame16.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material16_heightmap.material = material16;
		material16_heightmap.position.y = -16;
		material16.alpha = 0.2;
		material16.freeze();
		
		let material17 = new BABYLON.StandardMaterial("layer17", this._scene);
		material17.diffuseTexture = new BABYLON.Texture("images/wrist/frame17.jpg", this._scene);
		let material17_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer17", "images/wrist/frame17.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material17_heightmap.material = material17;
		material17_heightmap.position.y = -17;
		material17.alpha = 0.2;
		material17.freeze();
		
		let material18 = new BABYLON.StandardMaterial("layer18", this._scene);
		material18.diffuseTexture = new BABYLON.Texture("images/wrist/frame18.jpg", this._scene);
		let material18_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer18", "images/wrist/frame18.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material18_heightmap.material = material18;
		material18_heightmap.position.y = -18;
		material18.alpha = 0.2;
		material18.freeze();
		
		let material19 = new BABYLON.StandardMaterial("layer19", this._scene);
		material19.diffuseTexture = new BABYLON.Texture("images/wrist/frame19.jpg", this._scene);
		let material19_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer19", "images/wrist/frame19.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material19_heightmap.material = material19;
		material19_heightmap.position.y = -19;
		material19.alpha = 0.2;
		material19.freeze();
		
		let material20 = new BABYLON.StandardMaterial("layer20", this._scene);
		material20.diffuseTexture = new BABYLON.Texture("images/wrist/frame20.jpg", this._scene);
		let material20_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer20", "images/wrist/frame20.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material20_heightmap.material = material20;
		material20_heightmap.position.y = -20;
		material20.alpha = 0.2;
		material20.freeze();

		let material21 = new BABYLON.StandardMaterial("layer21", this._scene);
		material21.diffuseTexture = new BABYLON.Texture("images/wrist/frame21.jpg", this._scene);
		let material21_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer21", "images/wrist/frame21.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material21_heightmap.material = material21;
		material21_heightmap.position.y = -21;
		material21.alpha = 0.2;
		material21.freeze();

		let material22 = new BABYLON.StandardMaterial("layer22", this._scene);
		material22.diffuseTexture = new BABYLON.Texture("images/wrist/frame22.jpg", this._scene);
		let material22_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer22", "images/wrist/frame22.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material22_heightmap.material = material22;
		material22_heightmap.position.y = -22;
		material22.alpha = 0.2;
		material22.freeze();
		
		let material23 = new BABYLON.StandardMaterial("layer23", this._scene);
		material23.diffuseTexture = new BABYLON.Texture("images/wrist/frame23.jpg", this._scene);
		let material23_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer23", "images/wrist/frame23.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material23_heightmap.material = material23;
		material23_heightmap.position.y = -23;
		material23.alpha = 0.2;
		material23.freeze();
		
		let material24 = new BABYLON.StandardMaterial("layer24", this._scene);
		material24.diffuseTexture = new BABYLON.Texture("images/wrist/frame24.jpg", this._scene);
		let material24_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer24", "images/wrist/frame23.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material24_heightmap.material = material24;
		material24_heightmap.position.y = -24;
		material24.alpha = 0.2;
		material24.freeze();
		
		let material25 = new BABYLON.StandardMaterial("layer25", this._scene);
		material25.diffuseTexture = new BABYLON.Texture("images/wrist/frame25.jpg", this._scene);
		let material25_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer25", "images/wrist/frame25.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material25_heightmap.material = material25;
		material25_heightmap.position.y = -25;
		material25.alpha = 0.2;
		material25.freeze();
		
		let material26 = new BABYLON.StandardMaterial("layer26", this._scene);
		material26.diffuseTexture = new BABYLON.Texture("images/wrist/frame26.jpg", this._scene);
		let material26_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer26", "images/wrist/frame26.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material26_heightmap.material = material26;
		material26_heightmap.position.y = -26;
		material26.alpha = 0.2;
		

		let material27 = new BABYLON.StandardMaterial("layer27", this._scene);
		material27.diffuseTexture = new BABYLON.Texture("images/wrist/frame27.jpg", this._scene);
		let material27_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer27", "images/wrist/frame27.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material27_heightmap.material = material27;
		material27_heightmap.position.y = -27;
		material27.alpha = 0.2;
		
		
		let material28 = new BABYLON.StandardMaterial("layer28", this._scene);
		material28.diffuseTexture = new BABYLON.Texture("images/wrist/frame28.jpg", this._scene);
		let material28_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer28", "images/wrist/frame28.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material28_heightmap.material = material28;
		material28_heightmap.position.y = -28;
		material28.alpha = 0.2;
		
		
		let material29 = new BABYLON.StandardMaterial("layer29", this._scene);
		material29.diffuseTexture = new BABYLON.Texture("images/wrist/frame29.jpg", this._scene);
		let material29_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer29", "images/wrist/frame29.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material29_heightmap.material = material29;
		material29_heightmap.position.y = -29;
		material29.alpha = 0.2;
		
		
		let material30 = new BABYLON.StandardMaterial("layer30", this._scene);
		material30.diffuseTexture = new BABYLON.Texture("images/wrist/frame30.jpg", this._scene);
		let material30_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer30", "images/wrist/frame30.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material30_heightmap.material = material30;
		material30_heightmap.position.y = -30;
		material30.alpha = 0.2;
		
		
		let material31 = new BABYLON.StandardMaterial("layer31", this._scene);
		material31.diffuseTexture = new BABYLON.Texture("images/wrist/frame31.jpg", this._scene);
		let material31_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer31", "images/wrist/frame31.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material31_heightmap.material = material31;
		material31_heightmap.position.y = -31;
		material31.alpha = 0.2;
		
		
		let material32 = new BABYLON.StandardMaterial("layer32", this._scene);
		material32.diffuseTexture = new BABYLON.Texture("images/wrist/frame32.jpg", this._scene);
		let material32_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer32", "images/wrist/frame32.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material32_heightmap.material = material32;
		material32_heightmap.position.y = -32;
		material32.alpha = 0.2;
		
		
		let material33 = new BABYLON.StandardMaterial("layer33", this._scene);
		material33.diffuseTexture = new BABYLON.Texture("images/wrist/frame33.jpg", this._scene);
		let material33_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer33", "images/wrist/frame33.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material33_heightmap.material = material33;
		material33_heightmap.position.y = -33;
		material33.alpha = 0.2;
		
		
		let material34 = new BABYLON.StandardMaterial("layer34", this._scene);
		material34.diffuseTexture = new BABYLON.Texture("images/wrist/frame34.jpg", this._scene);
		let material34_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer34", "images/wrist/frame34.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material34_heightmap.material = material34;
		material34_heightmap.position.y = -34;
		material34.alpha = 0.2;
		
		
		let material35 = new BABYLON.StandardMaterial("layer35", this._scene);
		material35.diffuseTexture = new BABYLON.Texture("images/wrist/frame35.jpg", this._scene);
		let material35_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer35", "images/wrist/frame35.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material35_heightmap.material = material35;
		material35_heightmap.position.y = -35;
		material35.alpha = 0.2;

		
		let material36 = new BABYLON.StandardMaterial("layer36", this._scene);
		material36.diffuseTexture = new BABYLON.Texture("images/wrist/frame36.jpg", this._scene);
		let material36_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer36", "images/wrist/frame36.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material36_heightmap.material = material36;
		material36_heightmap.position.y = -36;
		material36.alpha = 0.2;
		
		
		let material37 = new BABYLON.StandardMaterial("layer37", this._scene);
		material37.diffuseTexture = new BABYLON.Texture("images/wrist/frame37.jpg", this._scene);
		let material37_heightmap = BABYLON.Mesh.CreateGroundFromHeightMap("layer37", "images/wrist/frame37.jpg", 150, 150, 250, 0, 5, this._scene, false);
		material37_heightmap.material = material30;
		material37_heightmap.position.y = -37;
		material37.alpha = 0.2;
		
		//**************************LAYERS***************************//
		



		return this._scene;

	}


	doRender() : void {
		this._engine.runRenderLoop(() => {
			this._scene.render();

		})

		window.addEventListener('resize', () => {
			this._engine.resize();
		})

	}



}


window.addEventListener('DOMContentLoaded', () => {
	let rhinov2 = new Rhinov2('renderCanvas');
	rhinov2.createScene();
	rhinov2.doRender();
})


//**************************************************************************************************//
// var box = document.getElementById('box'),
//     fpsDisplay = document.getElementById('fpsDisplay'), 
//     boxPos = 10,
//     boxVelocity = 0.08,
//     limit = 300,
//     lastFrameTimeMs = 0,	OK
//     maxFPS = 60,	OK
//     delta = 0,	OK
//     timestep = 1000 / 60,	OK
//     fps = 60,	OK
//     framesThisSecond = 0,	OK
//     lastFpsUpdate = 0;	OK

// function update(delta) {
//     boxPos += boxVelocity * delta;
//     // Switch directions if we go too far
//     if (boxPos >= limit || boxPos <= 0) boxVelocity = -boxVelocity;
// }

// function draw() {
//     box.style.left = boxPos + 'px';
//     fpsDisplay.textContent = Math.round(fps) + ' FPS';
// }

// function panic() {
//     delta = 0;
// }

// function mainLoop(timestamp) {
//     // Throttle the frame rate.    
//     if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
//         requestAnimationFrame(mainLoop);
//         return;
//     }
//     delta += timestamp - lastFrameTimeMs;
//     lastFrameTimeMs = timestamp;

//     if (timestamp > lastFpsUpdate + 1000) {
//         fps = 0.25 * framesThisSecond + 0.75 * fps;

//         lastFpsUpdate = timestamp;
//         framesThisSecond = 0;
//     }
//     framesThisSecond++;

//     var numUpdateSteps = 0;
//     while (delta >= timestep) {
//         update(timestep);
//         delta -= timestep;
//         if (++numUpdateSteps >= 240) {
//             panic();
//             break;
//         }
//     }
//     draw();
//     requestAnimationFrame(mainLoop);
// }

// requestAnimationFrame(mainLoop);

// this._scene











