import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeDScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating shapes with random geometry and material
    const geometries = [
      new THREE.SphereGeometry(1, 32, 32),
      new THREE.BoxGeometry(1.5, 1.5, 1.5),
      new THREE.ConeGeometry(1, 2, 32),
      new THREE.TorusGeometry(1, 0.4, 16, 100)
    ];

    const materials = [
      new THREE.MeshPhongMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.1 }),
      new THREE.MeshPhongMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.08 }),
      new THREE.MeshPhongMaterial({ color: 0x93c5fd, transparent: true, opacity: 0.06 })
    ];

    const shapes = [];
    const count = 8;

    for (let i = 0; i < count; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);
      
      mesh.position.x = (Math.random() - 0.5) * 20;
      mesh.position.y = (Math.random() - 0.5) * 20;
      mesh.position.z = (Math.random() - 0.5) * 10;
      
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      
      shapes.push({
        mesh,
        speed: Math.random() * 0.02 + 0.005,
        amplitude: Math.random() * 0.5 + 0.1
      });
      
      scene.add(mesh);
    }

    // Add ambient and directional lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    camera.position.z = 15;

    // Animation loop to rotate and float shapes
    const animate = () => {
      requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;
      
      shapes.forEach((shape, index) => {
        shape.mesh.rotation.x += shape.speed * 0.5;
        shape.mesh.rotation.y += shape.speed * 0.3;
        
        shape.mesh.position.y += Math.sin(time + index) * shape.amplitude * 0.01;
        shape.mesh.position.x += Math.cos(time + index) * shape.amplitude * 0.005;
      });
      
      renderer.render(scene, camera);
    };

    animate();

    // Adjust canvas on window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.3 }}
    />
  );
};

export default ThreeDScene;
