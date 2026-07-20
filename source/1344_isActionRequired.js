// Module ID: 1344
// Function ID: 15819
// Name: isActionRequired
// Dependencies: []
// Exports: default

// Module 1344 (isActionRequired)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/core/isActionRequired.tsx");

export default function isActionRequired() {
  let obj = arg0;
  let obj2 = arg1;
  if (arg0 === undefined) {
    obj = closure_0;
  }
  if (obj2 === undefined) {
    obj2 = closure_1;
  }
  let tmp = null != obj2.getAction();
  if (!tmp) {
    const _Object = Object;
    tmp = Object.keys(obj.getState()).length > 0;
  }
  return tmp;
};
