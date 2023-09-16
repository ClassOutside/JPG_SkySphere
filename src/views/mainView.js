import * as THREE from 'three';
import { setSkySphere_JPG } from '../helpers/SkysphereHelper.js'
import { setupRenderer } from '../helpers/RendererHelper.js'
import { updateCameraAspect } from '../helpers/CameraHelper.js'
import { SetAmbientLighting } from '../helpers/LightingHelper.js'

const imagePath = './src/textures/rural_asphalt_road.jpg'

export async function setupScene(canvas) {

	const scene = new THREE.Scene();
	const renderer = setupRenderer();
	let camera = new THREE.PerspectiveCamera(70, 16, 9, 1000);

	updateCameraAspect(camera);
	scene.add(camera);

	SetAmbientLighting(scene);
	setSkySphere_JPG(scene, imagePath);

	function animate() {
		requestAnimationFrame(animate);
				
		renderer.render(scene, camera);
	}
	animate();
};