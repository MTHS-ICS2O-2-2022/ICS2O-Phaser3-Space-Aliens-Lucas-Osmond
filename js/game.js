/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lucas Osmond
// Created on: April 2023
// This file contains the JS functions for index.html

// scene important statements
import SplashScene from "./splashScene.js"

// create the new scenes
const splashScene = new SplashScene()
/**
 *Start Phaser Game.
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  //set background colour
  backgroundColor: '0x5f6e7a',
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)
console.log(game)
