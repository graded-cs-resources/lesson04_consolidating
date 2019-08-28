import { get_input, set_message, set_output } from "../lib/utils.js";

/** ======= PROBLEM 3 =========
 * Program a "Guess My Number" game. 
 * - The message says "Guess A Number between 1 and 100"
 * - User guesses a number
 * - If the number is less than 1 or greater than 100, the output says 
 *      "That wasn't between 1 and 100, try again!"
 * - Otherwise, the output says something like "My number was 32. Your guess was
 *   70. You were off by 38."
 * - After a legal guess, (but not otherwise!) the computer should come up with a NEW number.
 * 
 * You will probably want to use the parseInt(*string*) function here at some point.
 */

// sets the initial values
set_message(3, "Guess a number between 1 and 100.");
let myNumber:number = randInt(1,100);

/** Your code goes in this function. */
export function go():void {
  // You may want an "if" statement here, based on the hourIsSet variable.
  set_output(3, "You pushed the p3 button! But your code doesn't work yet.");
}

/** Generates a random integer. No need to understand this right now.*/
function randInt(min:number, max:number) {
    return Math.floor(Math.random() * (max-min+1) + min);
}
 