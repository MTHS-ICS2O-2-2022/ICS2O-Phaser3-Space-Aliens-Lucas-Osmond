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
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to create your game objects
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
   */
  create(data) {
    //pass
  }
  
  /**
   * Should be overridden on your own Scenes.
   * This method is called once per game step while the scene is running.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms since the last frame.
   */
  update(time, delta) {
    this.scene.switch ('TitleScene')
  }
}

export default TitleScene
