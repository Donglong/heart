const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, k, 0.1, 1000);
camera.position.set(200, 300, 200); //设置相机位置
camera.lookAt(scene.position); //设置相机方向(指向的场景对象)

var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height); //设置渲染区域尺寸
renderer.setClearColor(0xff0000); //设置背景颜色
document.body.appendChild(renderer.domElement); //body元素中插入canvas对象

const beat = {r: 0};

const simplex = new SimplexNoise();



const loader = new THREE.OBJLoader();

let heart = null;
let sampler = null;
let originHeart = null;
function loadHeartCallback(obj) {
  heart = obj.children[0];
  heart.geometry.rotateX(-Math.PI * 0.5);
  heart.geometry.rotateY(-Math.PI * 0.75);
  // heart.geometry.rotateZ(-Math.PI * 0.2);
  heart.geometry.scale(20, 20, 20);
  heart.geometry.center();
  heart.material = new THREE.MeshBasicMaterial({
    color: 0xff5555
  });
  originHeart = Array.from(heart.geometry.attributes.position.array);
  sampler = new THREE.MeshSurfaceSampler(heart).build();
  init();
  scene.add(heart);
  renderer.setAnimationLoop(render);
}

function init() {

}

function render() {

}

