// Module ID: 827
// Function ID: 9232
// Name: addHandler
// Dependencies: [800, 801, 810]

// Module 827 (addHandler)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let closure_2 = {};
let closure_3 = {};
arg5.addHandler = function addHandler(arg0, arg1) {
  let items = dependencyMap[arg0];
  if (!items) {
    items = [];
  }
  dependencyMap[arg0] = items;
  dependencyMap[arg0].push(arg1);
};
arg5.maybeInstrument = function maybeInstrument(arg0, arg1) {
  if (!table[arg0]) {
    table[tmp] = true;
    arg1();
  }
};
arg5.resetInstrumentationHandlers = function resetInstrumentationHandlers() {
  const keys = Object.keys(closure_2);
  const item = keys.forEach((arg0) => {
    outer1_2[arg0] = undefined;
  });
};
arg5.triggerHandlers = function triggerHandlers(arg0, arg1) {
  if (arg0) {
    const iter = tmp[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp9 = nextResult;
      let tmp10 = nextResult;
      let tmp11 = arg1;
      let nextResultResult = nextResult(arg1);
      continue;
    }
  }
};
