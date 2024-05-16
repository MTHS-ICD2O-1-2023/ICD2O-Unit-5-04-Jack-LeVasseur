// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  // input
  const age = parseInt(document.getElementById('age-entered').value)
  const dayTuesdayChecked = document.getElementById('option-tuesday').checked
  const dayThursdayChecked = document.getElementById('option-thursday').checked

  // process
  if ((dayTuesdayChecked == true || dayThursdayChecked == true) || (age > 12 && age < 21)) {
    document.getElementById('answer').innerHTML = "You get the student discount"
  } else {
    document.getElementById('answer').innerHTML = "You must pay regular price"
  }
}
