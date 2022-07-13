let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {} // a function with a infinite loop never returns as well
}

generateError("An error occurred !", 500);
