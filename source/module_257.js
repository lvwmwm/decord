// Module ID: 257
// Function ID: 3325
// Dependencies: []

// Module 257
let closure_0 = [];
let closure_1 = { name: "default" };
arg5.default = {
  setActiveScene(arg0) {
    let closure_1 = arg0;
    const item = arr.forEach((arg0) => arg0(arg0));
  },
  getActiveScene() {
    return closure_1;
  },
  addActiveSceneChangedListener(arg0) {
    let arr = arg0;
    arr = arr.push(arg0);
    return {
      remove() {
        closure_0 = closure_0.filter((arg0) => closure_0 !== arg0);
      }
    };
  }
};
