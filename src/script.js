import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'

/**
 * Base
 */
// Debug
// const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color('teal')


/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
// const matcapTexture = textureLoader.load('/textures/matcaps/8.png');
const htmlTexture = textureLoader.load('/textures/portfolio/html.png')
const cssTexture = textureLoader.load('/textures/portfolio/css.png')
const jsTexture = textureLoader.load('/textures/portfolio/js.png')
const angularTexture = textureLoader.load('/textures/portfolio/angular.png')




// const doorColorTexture  = textureLoader.load('/textures/door/color.jpg');



//font loader;

const fontLoader = new THREE.FontLoader();

fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json',
    (font) => {
        const textGeometry = new THREE.TextBufferGeometry(
            'I am Dare Lawal,',
            {
                font: font,
                size: 0.4,
                height:0.2,
                curveSegments: 6,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5
            }
        )

        textGeometry.center();
        const material = new THREE.MeshNormalMaterial();
        // material.map = doorColorTexture;
        const text = new THREE.Mesh(textGeometry, material);
        text.position.y = 0.75
        scene.add(text);        
    }
)
fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json',
    (font) => {
        const textGeometry = new THREE.TextBufferGeometry(
            'a frontend developer,',
            {
                font: font,
                size: 0.4,
                height:0.2,
                curveSegments: 6,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5
            }
        )

        textGeometry.center();
        const material = new THREE.MeshNormalMaterial();
        const text = new THREE.Mesh(textGeometry, material);
        // text.position.y = -0.75
        scene.add(text);

    }
)
fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json',
    (font) => {
        const textGeometry = new THREE.TextBufferGeometry(
            'a wordpress developer',
            {
                font: font,
                size: 0.4,
                height:0.2,
                curveSegments: 6,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5
            }
        )
        textGeometry.center();
        const material = new THREE.MeshNormalMaterial();
        const text = new THREE.Mesh(textGeometry, material);
        text.position.y = -0.75;
        scene.add(text);
    }
)

//HTML CUBES;
const htmlGeometry = new THREE.BoxGeometry(1, 1, 1);
    const htmlMaterial = new THREE.MeshBasicMaterial();
    htmlMaterial.map = htmlTexture;

    for(let i = 0; i < 20; i++){

        const donut = new THREE.Mesh(htmlGeometry, htmlMaterial);

        donut.position.x = (Math.random() - 0.5) * 10;
        donut.position.y = (Math.random() - 0.5) * 10;
        donut.position.z = (Math.random() - 0.5) * 10;

        donut.rotation.x = Math.random() * Math.PI;
        donut.rotation.y = Math.random() * Math.PI;

        const scale = Math.random() * 0.5;
        donut.scale.set(scale, scale, scale);

        scene.add(donut);

    }

//CSS CUBES;

const cssGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cssMaterial = new THREE.MeshBasicMaterial();
    cssMaterial.map = cssTexture;

    for(let i = 0; i < 20; i++){

        const donut = new THREE.Mesh(cssGeometry, cssMaterial);

        donut.position.x = (Math.random() - 0.5) * 10;
        donut.position.y = (Math.random() - 0.5) * 10;
        donut.position.z = (Math.random() - 0.5) * 10;

        donut.rotation.x = Math.random() * Math.PI;
        donut.rotation.y = Math.random() * Math.PI;

        const scale = Math.random() * 0.5;
        donut.scale.set(scale, scale, scale);

        scene.add(donut);

    }

//JS CUBES;

const jsGeometry = new THREE.BoxGeometry(1, 1, 1);
    const jsMaterial = new THREE.MeshBasicMaterial();
    jsMaterial.map = jsTexture;

    for(let i = 0; i < 20; i++){

        const donut = new THREE.Mesh(jsGeometry, jsMaterial);

        donut.position.x = (Math.random() - 0.5) * 10;
        donut.position.y = (Math.random() - 0.5) * 10;
        donut.position.z = (Math.random() - 0.5) * 10;

        donut.rotation.x = Math.random() * Math.PI;
        donut.rotation.y = Math.random() * Math.PI;

        const scale = Math.random() * 0.5;
        donut.scale.set(scale, scale, scale);

        scene.add(donut);

    }

//Angular cubes;

const angularGeometry = new THREE.BoxGeometry(1, 1, 1);
    const angularMaterial = new THREE.MeshBasicMaterial();
    angularMaterial.map = angularTexture;

    for(let i = 0; i < 20; i++){

        const donut = new THREE.Mesh(angularGeometry, angularMaterial);

        donut.position.x = (Math.random() - 0.5) * 10;
        donut.position.y = (Math.random() - 0.5) * 10;
        donut.position.z = (Math.random() - 0.5) * 10;

        donut.rotation.x = Math.random() * Math.PI;
        donut.rotation.y = Math.random() * Math.PI;

        const scale = Math.random() * 0.5;
        donut.scale.set(scale, scale, scale);

        scene.add(donut);

    }
        


/**
 * Object
 */
// const cube = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial()
// )

// scene.add(cube)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

const cursor = {
    x:0,
    y:0
}

// window.addEventListener('mousemove', event => {
//     cursor.x = event.clientX / sizes.width - 0.5;
//     cursor.y = - (event.clientY / sizes.height - 0.5);
// })


/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 5
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
// controls.start();
controls.enableDamping = true
controls.autoRotate = true;


//Light;
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight)


const pointLight = new THREE.PointLight(0xffffff, 0.5);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

console.log(clock)

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // window.addEventListener('mousemove', event => {
    //     cursor.x = event.clientX / sizes.width - 0.5;
    //     cursor.y = - (event.clientY / sizes.height - 0.5);
    // })


    //Update objects;
    // h.rotation.y = 0.1 * elapsedTime;
    // h.rotation.x = 0.15 * elapsedTime;

    // e.rotation.y = 0.1 * elapsedTime;
    // e.rotation.x = 0.15 * elapsedTime;

    // camera.rotation.x = 0.1 * elapsedTime
    // camera.rotation.y = 0.1 * elapsedTime
    // camera.rotation.z = 0.1 * elapsedTime

    // camera.rotation.x = Math.cos(cursor.x * elapsedTime) * 2;
    // camera.rotation.y = Math.sin(cursor.y * elapsedTime) * 2;
    // camera.position.x = Math.sin(elapsedTime * Math.PI);
    // camera.position.z = Math.cos(elapsedTime * Math.PI);
    camera.position.x = Math.sin(elapsedTime * 0.7);
    camera.position.y = Math.cos(elapsedTime * 0.7);

    


    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()