
/** Given a problem number (1-4) and a message as a string, this sets the *message* area
 * for that problem to the given message.
 * 
 * So `set_message(1,"What do you want to see double?")`  will change the instructions
 * for problem 1 to that string.
 */
export function set_message(prob:number, message:string) {
    let msgArea = <HTMLParagraphElement>document.getElementById("p"+prob+"_message");
    msgArea.innerText = message;
}

/** Given a problem number (1-4), this function returns the string
 * currently in that particular input box.
 */
export function get_input(prob:number) {
    let inArea = <HTMLInputElement>document.getElementById("p"+prob+"_input");
    return inArea.value;
}

/** Given a problem number and string, this sets the value of the OUTPUT area. */
export function set_output(prob:number,output:string) {
    let msgArea = <HTMLDivElement>document.getElementById("p"+prob+"_output");
    msgArea.innerText = output;
}