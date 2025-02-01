import * as THREE from "three";

//1. Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#F0F0F0");

//2. Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

//3. Objects - Cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({
  color: "#468585",
  emissive: "#468585",
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//4. Lighting
const light = new THREE.DirectionalLight(0x9cdba6, 10);
light.position.set(1, 1, 1);
scene.add(light);

//5. Renderer
const rendere = new THREE.WebGLRenderer();
rendere.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(rendere.domElement);

//6. Animation
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  rendere.render(scene, camera);
}

animate();
