// ------------------UNKNOWN TYPE-------------------------------
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
// userName = userInput; ----------GIVE ERROR, this error won't have triggered for any type so unknown is more restricted than any
if (typeof userInput === "string") {
  userName = userInput;
}

// ------------------NEVER TYPE------------------------------------
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occurred!", 500);
