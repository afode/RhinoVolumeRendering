///<reference path="babylon.d.ts" />
// /<reference path="dat.gui.min.js" />
var Rhinov3 = /** @class */ (function () {
    function Rhinov3(canvasElement) {
        this.lastFrameTimeMs = 0;
        this.delta = 0;
        this.lastFpsUpdate = 0;
        this.timestep = 0;
        this.maxFPS = 0;
        this.fps = 0;
        this.framesThisSecond = 0;
        this._canvas = document.getElementById(canvasElement);
        this._engine = new BABYLON.Engine(this._canvas, true);
    }
    Rhinov3.prototype.textureLayers = function (list) {
        for (var i = 0; i < list.length; i++) {
            var material = new BABYLON.StandardMaterial(list[i], this._scene);
            var heightmap = BABYLON.Mesh.CreateGroundFromHeightMap(list[i], list[i], 150, 150, 250, 0, 5, this._scene, false);
            material.diffuseTexture = new BABYLON.Texture(list[i], this._scene);
            heightmap.material = material;
            heightmap.position.y = 0 - (i + 1);
            material.alpha = 0.1;
            material.backFaceCulling = false;
            material.emissiveColor = new BABYLON.Color3(1, 1, 0);
        }
    };
    // += operator -> equivalent to heightmap.position.y = heighmap.position.y + i
    Rhinov3.prototype.createScene = function () {
        this._scene = new BABYLON.Scene(this._engine);
        this._camera = new BABYLON.ArcRotateCamera("camera", 0, 0.8, 150, new BABYLON.Vector3(0, -10, 0), this._scene);
        //this._camera = new BABYLON.ArcRotateCamera("camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), this._scene);
        this._camera.setTarget(BABYLON.Vector3.Zero());
        this._camera.attachControl(this._canvas, true);
        this._scene.clearColor = new BABYLON.Color4(0.02, 0.02, 0.02, 1.0);
        this._scene.imageProcessingConfiguration.contrast = 1.6;
        this._scene.imageProcessingConfiguration.exposure = 0.7;
        this._light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 20, 0), this._scene);
        this._light.diffuse = new BABYLON.Color3(3, 0, 0);
        this._light.specular = new BABYLON.Color3(0, 1, 1);
        this._light2 = new BABYLON.HemisphericLight("light2", new BABYLON.Vector3(1, 50, 0), this._scene);
        this._light3 = new BABYLON.PointLight("pointLight", this._camera.position, this._scene);
        this._light3.intensity = 1.5;
        // Layers for top+bottom view of wrist
        var list1 = ["images/wrist/frame00.jpg", "images/wrist/frame0.jpg", "images/wrist/frame1.jpg", "images/wrist/frame2.jpg", "images/wrist/frame3.jpg", "images/wrist/frame4.jpg", "images/wrist/frame5.jpg", "images/wrist/frame6.jpg", "images/wrist/frame7.jpg", "images/wrist/frame8.jpg", "images/wrist/frame9.jpg", "images/wrist/frame10.jpg", "images/wrist/frame11.jpg", "images/wrist/frame12.jpg", "images/wrist/frame13.jpg", "images/wrist/frame14.jpg", "images/wrist/frame15.jpg", "images/wrist/frame16.jpg", "images/wrist/frame17.jpg", "images/wrist/frame18.jpg", "images/wrist/frame19.jpg", "images/wrist/frame20.jpg", "images/wrist/frame21.jpg", "images/wrist/frame22.jpg", "images/wrist/frame23.jpg", "images/wrist/frame24.jpg", "images/wrist/frame25.jpg", "images/wrist/frame26.jpg", "images/wrist/frame27.jpg", "images/wrist/frame28.jpg", "images/wrist/frame29.jpg", "images/wrist/frame30.jpg", "images/wrist/frame31.jpg", "images/wrist/frame32.jpg", "images/wrist/frame33.jpg", "images/wrist/frame34.jpg", "images/wrist/frame35.jpg", "images/wrist/frame36.jpg", "images/wrist/frame37.jpg"];
        // Layers for front+back view of wrist
        var list2 = ["images/wrist2/Frame26.jpg", "images/wrist2/Frame27.jpg", "images/wrist2/Frame28.jpg", 'images/wrist2/Frame29.jpg', 'images/wrist2/Frame30.jpg', 'images/wrist2/Frame31.jpg', 'images/wrist2/Frame32.jpg', 'images/wrist2/Frame33.jpg', 'images/wrist2/Frame34.jpg', 'images/wrist2/Frame35.jpg', 'images/wrist2/Frame36.jpg', 'images/wrist2/Frame37.jpg', 'images/wrist2/Frame38.jpg', 'images/wrist2/Frame39.jpg', 'images/wrist2/Frame40.jpg', 'images/wrist2/Frame41.jpg'];
        // Layers for Side View of wrist
        var list3 = ["images/wrist3/Frame107.jpg", "images/wrist3/Frame108.jpg", "images/wrist3/Frame109.jpg", 'images/wrist3/Frame110.jpg', 'images/wrist3/Frame111.jpg', 'images/wrist3/Frame112.jpg', 'images/wrist3/Frame113.jpg', 'images/wrist3/Frame114.jpg', 'images/wrist3/Frame115.jpg', 'images/wrist3/Frame116.jpg', 'images/wrist3/Frame117.jpg'];
        // Texture Layers, create materials, create height maps
        this.textureLayers(list1);
        // Environment
        // let helper = this._scene.createDefaultEnvironment({
        // 	skyboxSize: 1000,
        // 	groundShadowLevel: 0.6,
        // });
        // helper.setMainColor(BABYLON.Color3.Red());
        // let gui = new dat.GUI();
        // gui.add(particleSystem, 'Layer', 0.1, 5);
        // gui.add(particleSystem, 'Transparency', 0.1, 5);
        // gui.add(particleSystem, 'Color', 1, 500);
        // gui.add(particleSystem, 'Brightness', 0, 0.02);
        // for (var i = 0; i < list1.length; i++) {
        // 	let material = new BABYLON.StandardMaterial(list1[i], this._scene);
        // 	let heightmap = BABYLON.Mesh.CreateGroundFromHeightMap(list1[i], list1[i], 150, 150, 200, 0, 5, this._scene, false);
        // 	material.diffuseTexture = new BABYLON.Texture(list1[i], this._scene);
        // 	heightmap.material = material;
        // 	heightmap.position.y = 0 - (i+1); 
        // 	material.alpha = 0.2;
        // 	material.backFaceCulling = false;
        // 	//material.wireframe = true;
        // }
        // let myFiles : File[] = [];
        // document.getElementById("file-input").onchange = function(e?: HTMLInputEvent) {
        //     let files: any = e.target.files[0];
        //     for (var i = 0; i < files.length; i++) {
        //       console.log(files[i].name);
        //       myFiles.push(files[i].name);
        //     }
        // }
        // for (var i = 0; i <= this.fileInput; i++) {
        // 	var fileInput = document.getElementById('file-input');
        // 	let material = new BABYLON.StandardMaterial(this.myFiles[i].name, this._scene);
        // 	let heightmap = BABYLON.Mesh.CreateGroundFromHeightMap(this.myFiles[i].name, this.myFiles[i].name, 150, 150, 250, 0, 5, this._scene, false);
        // 	material.diffuseTexture = new BABYLON.Texture(this.myFiles[i].name, this._scene);
        // 	heightmap.material = material;
        // 	material.alpha = 0.2;
        // 	heightmap.position.y += i;  // += operator -> equivalent to heightmap.position.y = heighmap.position.y + i
        // }
        return this._scene;
    };
    Rhinov3.prototype.doRender = function () {
        var _this = this;
        this._engine.runRenderLoop(function () {
            _this._scene.render();
        });
        window.addEventListener('resize', function () {
            _this._engine.resize();
        });
    };
    return Rhinov3;
}());
window.addEventListener('DOMContentLoaded', function () {
    var rhinov3 = new Rhinov3('renderCanvas');
    rhinov3.createScene();
    rhinov3.doRender();
});
