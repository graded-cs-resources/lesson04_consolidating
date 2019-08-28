import { get_input, set_message, set_output } from "./utils.js";

/* Further down this page, you will be given a problem to solve.
 * I have provided three utility functions to help you solve it.
 * Hover over the function names above to see how they work.
 */

/** ======= PROBLEM 1 =========
 * In this problem you will create a word-doubler.
 * When the user presses the button (running the `go` function below),
 * two things should happen:
 *
 * 1) Whatever value is
 *      in the textbox should appear in the Output Area twice, separated by a space.
 *      So if the input is "bob" the output will be "bob bob". If the input is "oh boy"
 *      then the output will be "oh boy oh boy"
 *
 * 2) The message will change to say
 *      "You have pressed the button ___ times. What would you like to double now?"
 */

// this line gets run when the program first starts. Think of it as your starter value.
set_message(1, "What do you want to see double?");

/** A global variable to keep track of the button count */
let button_count = 0;

/** Edit this function to make the correct things happen as described above */
export function go() {
  // the line below is probably helpful. The other one should be changed or replaced!
  let input:string = get_input(1); 
  
  set_output(1, input + "??. This isn't the right output, fix problem 1!");
} 
