/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lucas Osmond
// Created on: April 2023
//This is the Splash Scene

/**
 * This class is the splash scene.
 */
class SplashScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor() {
    super({ key: 'SplashScene' })

    this.splashSceneBackroundImage = null
  }
  
  /**
   * Can be defined on your own Scenes.
   * This method is called when the Scene is started by the SceneManager.
   *before preload() and create().
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
    */
  init() {
    this.cameras.main.setBackgroundColor('#ffffff')
  }
  
  /**
   * Can be defined on your own Scenes.
   * Use it to load assets
    */
  preload() {
    console.log('Splash Scene')
    this.load.image('splashSceneBackroundImage', './assets/splashSceneImage.png')
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to create your game objects
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
   */
  create(data) {
    this.splashSceneBackroundImage = this.add.sprite(
      0, 
      0, 
      'splashSceneBackroundImage')
    this.splashSceneBackroundImage.x = 1920 / 2
    this.splashSceneBackroundImage.y = 1080 / 2
  }
  
  /**
   * Should be overridden on your own Scenes.
   * This method is called once per game step while the scene is running.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms since the last frame.
   */
  update(time, delta) {
    if (time > 2000) {
    this.scene.switch ('TitleScene')
    }
  }
}

export default SplashScene
