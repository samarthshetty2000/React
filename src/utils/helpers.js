let regExp = /^[A-Z]+$/i

export function validateInput(string){
  return regExp.test(string);
}