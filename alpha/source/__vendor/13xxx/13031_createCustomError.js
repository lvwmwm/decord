// Module ID: 13031
// Function ID: 13032
// Name: createCustomError
// Dependencies: []

// Module 13031 (createCustomError)

export default function createCustomError(name, message) {
  let closure_0 = name;
  let closure_1 = message;
  const obj2 = Object.create(SyntaxError.prototype);
  const error = new Error();
  obj2.name = name;
  obj2.message = message;
  const obj = {
    get() {
      const str = error.stack || "";
      return str.replace(/^(.+\n){1,3}/, name + ": " + message + "\n");
    }
  };
  Object.defineProperty(obj2, "stack", obj);
  return obj2;
};
