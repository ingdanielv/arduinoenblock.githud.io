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

goog.provide('Blockly.Blocks.serial');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */

Blockly.Blocks['serial_printfor'] = {
  helpUrl: 'http://arduino.cc/en/Serial/Println',
  init: function() {
    this.setColour(20);
	this.setInputsInline(true);
    this.appendValueInput("CONTENT", 'Number')
        .setCheck('Number')
        .appendTitle(Blockly.Msg.Serial_Print_Format)
     	.appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.Serial_Print_ForDecimal, "DEC"],[Blockly.Msg.Serial_Print_ForHexa, "HEX"],[Blockly.Msg.Serial_Print_ForBin, "BIN"],[Blockly.Msg.Serial_Print_ForOct, "OCT"]]), "TYPE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Muestras de datos al puerto de consola / en serie con un formato específico..');
  }
};

Blockly.Blocks['serial_read'] = {
	helpUrl: 'http://arduino.cc/en/Serial/read',
  init: function() {
    this.setColour(20);
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.Serial_read);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Lee los datos de entrada en serie. ');
  }
};

Blockly.Blocks['serial_available'] = {
	helpUrl: 'http://arduino.cc/en/Serial/available',
  init: function() {
    this.setColour(20);
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.Serial_avai);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Obtener el número de bytes (caracteres) disponibles para su lectura desde el puerto serie. Se trata de datos que ya se llegaran y se almacenan en la memoria intermedia de recepción serie (que tiene 64 bytes). ');
  }
};

Blockly.Blocks['serial_print'] = {
  helpUrl: 'http://www.arduino.cc/en/Serial/Print',
  init: function() {
    this.setColour(20);
    this.appendValueInput("CONTENT", 'String')
        .appendField(Blockly.Msg.Serial_Print);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('muestras de datos al puerto de consola / serie como texto ASCII legible por humanos.');
  }
};

Blockly.Blocks['serial_write'] = {
  helpUrl: '',
  init: function() {
    this.setColour(20);
    this.appendValueInput("CONTENT", String)
        .appendTitle(Blockly.Msg.Serial_Write);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Escribe los datos binarios al puerto serie. Estos datos se envían como un byte o una serie de bytes que enviarán los caracteres que representan los dígitos de un número use la función de impresión () en su lugar. ');
  }
};


Blockly.Blocks['serial_write_out'] = {
  helpUrl: '',
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Serial/write');
    this.setColour(20);
    this.appendValueInput("valeur")
        .appendField(Blockly.Msg.Serial_write_out);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Escribe los datos binarios al puerto serie. Estos datos se envían como un byte o una serie de bytes; para enviar los caracteres que representan los dígitos de un número de utilizar la función de impresión () en su lugar.');
  }
};

Blockly.Blocks['serial_flush'] = {
	helpUrl: 'http://arduino.cc/en/Serial/Flush',
  init: function() {
    this.setColour(20);
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.Serial_flush);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Espera a que la transmisión de datos en serie para completar.');
  }
};

Blockly.Blocks['serial_printL'] = {
  helpUrl: 'http://www.arduino.cc/en/Serial/Print',
  init: function() {
    this.setColour(20);
    this.appendValueInput("CONTENT", 'String')
        .appendField(Blockly.Msg.Serial_PrintL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Muestra datos al puerto de consola / serie como texto ASCII legible por humanos.');
  }
};
