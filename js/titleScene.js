/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lucas Osmond
// Created on: April 2023
//This is the Splash Scene

/**
 * This class is the splash scene.
 */
class TitleScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor() {
    super({ key: 'TitleScene' })

    this.titleSceneBackroundImage = null
    this.titleSceneText = null
    this.titleSceneTextStyle = { 
      font: '200px Times',
      fill: '#fde4b9',
      qalign: 'center'
    }
  }
  
  /**
   * Can be defined on your own Scenes.
   * This method is called when the Scene is started by the SceneManager.
   *before preload() and create().
    */
  init() {
    this.cameras.main.setBackgroundColor('#ffffff')
  }
  
  /**
   * Can be defined on your own Scenes.
   * Use it to load assets
    */
  preload() {
    console.log('Title Scene')
    this.load.image('titleSceneBackroundImage', './assets/aliens_screen_image.jpg')
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to create your game objects
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
   */
  create(data) {
    this.titleSceneBackroundImage = this.add
    .sprite(0, 0, 'titleSceneBackroundImage').setScale(2.75)
    this.titleSceneBackroundImage.x = 1920 / 2
    this.titleSceneBackroundImage.y = 1080 / 2

    this.titleSceneText = this.add
    .text(
      1920 / 2, 1080 / 2 + 350, 'Space Aliens', this.titleSceneTextStyle)
    .setOrigin(0.5)
  }
  
  /**
   * Should be overridden on your own Scenes.
   * This method is called once per game step while the scene is running.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms since the last frame.
   */
  update(time, delta) {
    if (time > 6000) {
    this.scene.switch ('menuScene')
    }
  }
}

export default TitleScene
