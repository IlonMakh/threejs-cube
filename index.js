const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 ); // width(x) height(y) depth(z)
const material = new THREE.MeshPhongMaterial({ color: 0xca336d } );
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const spotLight = new THREE.SpotLight(0xeeeece);
spotLight.position.set(4000, 5000, 10000);
scene.add(spotLight);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animation );
document.body.appendChild( renderer.domElement );
// animation

function animation( time ) {
	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;
	renderer.render( scene, camera );
}