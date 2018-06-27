///<reference path="babylon.d.ts" />
var Rhino = /** @class */ (function () {
    function Rhino(canvasElement) {
        //create CanvasElement
        this._canvas = document.getElementById(canvasElement);
        this._engine = new BABYLON.Engine(this._canvas, true);
    }
    Rhino.prototype.createScene = function () {
        // Create a basic BJS Scene object.
        this._scene = new BABYLON.Scene(this._engine);
        // Create a FreeCamera, and set its position to (x:0, y:5, z:-10).
        //this._camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 20, -30), this._scene);
        this._camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), this._scene);
        this._camera.lowerBetaLimit = 0.1;
        this._camera.upperBetaLimit = (Math.PI / 2) * 0.9;
        this._camera.lowerRadiusLimit = 30;
        this._camera.upperRadiusLimit = 150;
        // // Target the camera to scene origin.
        // this._camera.setTarget(BABYLON.Vector3.Zero());
        // // Attach the camera to the canvas.
        // this._camera.attachControl(this._canvas, false);
        this._camera.attachControl(this._canvas, true);
        // Create a basic light, aiming 0,1,0 - meaning, to the sky.
        this._light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this._scene);
        // Create a new material
        var groundMaterial = new BABYLON.StandardMaterial("ground", this._scene);
        // Apply texture
        groundMaterial.diffuseTexture = new BABYLON.Texture("images/3.jpg", this._scene);
        // Create ground from Height Map
        var ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground", "images/3_bw.jpg", 170, 170, 250, 0, 15, this._scene, false);
        // Now that our mesh is ready, we apply our material
        ground.material = groundMaterial;
        return this._scene;
        // // Create a built-in "sphere" shape; with 16 segments and diameter of 2.
        // let sphere = BABYLON.MeshBuilder.CreateSphere('sphere',
        //                             {segments: 16, diameter: 2}, this._scene)
        // // Move the sphere upward 1/2 of its height.
        // sphere.position.y = 1;
        // Create a built-in "ground" shape.
        // let ground = BABYLON.MeshBuilder.CreateGround('ground',
        //                             {width: 6, height: 6, subdivisions: 2}, this._scene);
    };
    // Render function
    Rhino.prototype.doRender = function () {
        var _this = this;
        // Run the render loop.
        this._engine.runRenderLoop(function () {
            _this._scene.render();
        });
        // The canvas/window resize event handler.
        window.addEventListener('resize', function () {
            _this._engine.resize();
        });
    };
    return Rhino;
}());
window.addEventListener('DOMContentLoaded', function () {
    var rhino = new Rhino('renderCanvas');
    rhino.createScene();
    rhino.doRender();
});
