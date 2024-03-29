import { get_input, set_message, set_output } from "../lib/utils.js";

/** ======= PROBLEM 2 =========
 * In this problem you will create a simple converter that converts from degrees CELSISU
 * to degrees FAHRENHEIT, using the formula F = 9/5 * C + 32
 * The temperature in degrees Fahrenheit should appear in the output area.
 * 
 * One function that may be helpful here is the `parseFloat(*string*)` function,
 * which converts from a string to a decimal value you can use in calculations.
 * 
 * Another thing that might be helpful is the "toString()" method which converts
 * a number variable to a string. 
 */

set_message(2, "How many degrees Celsius?");

export function go():void { 
  // start by making a variable that will hold the INPUT value...
  set_output(2, "You pushed the problem 2 button! But your code doesn't work yet.");
} 
