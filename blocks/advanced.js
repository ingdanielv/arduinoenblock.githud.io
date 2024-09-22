/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Colour blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.advanced');

goog.require('Blockly.Blocks');

Blockly.Blocks['advanced_tone'] = {
  helpUrl: 'http://www.arduino.cc/en/Reference/Tone',
  init: function() {
    this.setColour(150);
    this.appendDummyInput()
        .appendField(Blockly.Msg.TonePin)
        .appendField(new Blockly.FieldDropdown([["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"]]), "PIN");
    this.appendValueInput("NUM", "Number")
        .appendField(Blockly.Msg.Frequence)
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Genera tonos en un pin");
  }
};

Blockly.Blocks['advanced_tonedure'] = {
  helpUrl: 'http://www.arduino.cc/en/Reference/Tone',
  init: function() {
    this.setColour(150);
    this.appendDummyInput()
        .appendField(Blockly.Msg.TonePin)
        .appendField(new Blockly.FieldDropdown([["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"]]), "PIN");
    this.appendValueInput("NUM", "Number")
        .appendField(Blockly.Msg.Frequence)
        .setCheck("Number");
    this.appendValueInput("DUR", "Number")
        .appendField(Blockly.Msg.Duration)
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Genera tonos en un pin con duracion");
  }
};

Blockly.Blocks['advanced_notone'] = {
  helpUrl: 'http://www.arduino.cc/en/Reference/NoTone',
  init: function() {
    this.setColour(150);
    this.appendDummyInput()
        .appendField(Blockly.Msg.NoTonePin)
        .appendField(new Blockly.FieldDropdown([["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"]]), "PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Detiene la generación de una onda provocada por el tono ( ) . No tiene ningún efecto si no se está generando el tono  ");
  }
};

Blockly.Blocks['advanced_pulsein'] = {
  helpUrl: 'http://arduino.cc/en/Reference/pulseIn',
  init: function() {
    this.setColour(150);
    this.appendDummyInput()
                .appendField(Blockly.Msg.PulseIn)
                .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
            	.appendField(Blockly.Msg.INOUT_STAT)
                .appendField(new Blockly.FieldDropdown([[Blockly.Msg.INOUT_HIGH_LEVEL, "HIGH"], [Blockly.Msg.INOUT_LOW_LEVEL, "LOW"]]), "STAT");
    this.setOutput(true, 'Number');
    this.setTooltip('Lee un pulso (alto o bajo) en un pin. Por ejemplo, si el valor es alto, pulseIn () espera a que el pin este alto, se inicia el tiempo, espera a que el pin vaya a bajo y para el cronómetro. Devuelve la longitud del impulso en microsegundos. Se da por vencido y devuelve 0 si no hay pulso se inicia en un plazo determinado.');
  }
};


Blockly.Blocks['clpegs_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.Setup);
    this.appendStatementInput("MySetup");
    this.appendDummyInput()
        .appendField(Blockly.Msg.Loop);
    this.appendStatementInput("MyLoop");
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/HomePage');
    this.setDeletable(false);
  }
};