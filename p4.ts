import { get_input, set_message, set_output } from "./utils.js";

/** ======= PROBLEM 4 =========
 * In this problem you will create a function that can calculate how many seconds
 * have passed since midnight, by first asking for the hour, then the number
 * of minutes, and finally the second.
 * The final answer, in the form "It has been ___ seconds since midnight",
 * should go in the output area, while interim
 * instructions for what to input next go in the message area.
 *
 *
 * Note that for this to work you'll need to press the `Submit` button multiple times for
 * each problem. I have created a global variable that could help you keep track
 * of where you are in your calculation, but you may want to create more...
 */

set_message(4, "What HOUR is it? (24 hour clock!)");

let hourIsSet: boolean = false;
// ... you problably want more variables...

/** Your code goes in this function.*/
export function go() {
  // You may want an "if" statement here...
  set_output(4, "You pushed the button! But your code doesn't work yet.");
} 
