// Module ID: 7228
// Function ID: 58193
// Name: addHandler
// Dependencies: []

// Module 7228 (addHandler)
let closure_2 = {};
let closure_3 = {};
arg5.addHandler = function addHandler(arg0, arg1) {
  let items = closure_2[arg0];
  if (!items) {
    items = [];
  }
  closure_2[arg0] = items;
  closure_2[arg0].push(arg1);
};
arg5.maybeInstrument = function maybeInstrument(arg0, arg1) {
  if (!closure_3[arg0]) {
    closure_3[tmp] = true;
    arg1();
  }
};
arg5.resetInstrumentationHandlers = function resetInstrumentationHandlers() {
  const keys = Object.keys(closure_2);
  const item = keys.forEach((arg0) => {
    closure_2[arg0] = undefined;
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
