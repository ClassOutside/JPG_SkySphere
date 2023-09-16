import * as THREE from 'three';

export const SetAmbientLighting = (scene) => {
    const ambientLight = new THREE.AmbientLight(0xffffff, 4); // Color: white, Intensity: 0.5
      scene.add(ambientLight);
  }