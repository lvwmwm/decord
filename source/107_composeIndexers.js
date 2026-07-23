// Module ID: 107
// Function ID: 1599
// Name: composeIndexers
// Dependencies: [108]

// Module 107 (composeIndexers)
const module = arg2;
const dependencyMap = arg6;
function composeIndexers(bubblingEventTypes, bubblingEventTypes2) {
  let obj = bubblingEventTypes2;
  if (null != bubblingEventTypes) {
    if (null != obj) {
      const _Object = Object;
      let merged = Object.assign({}, bubblingEventTypes, obj);
    }
    return merged;
  }
  if (null != bubblingEventTypes) {
    obj = bubblingEventTypes;
  }
  if (null == obj) {
    obj = {};
  }
  merged = obj;
}
arg5.createViewConfig = function createViewConfig(closure_2) {
  return { uiViewClassName: closure_2.uiViewClassName, Commands: {}, bubblingEventTypes: composeIndexers(module(108).bubblingEventTypes, closure_2.bubblingEventTypes), directEventTypes: composeIndexers(module(108).directEventTypes, closure_2.directEventTypes), validAttributes: composeIndexers(module(108).validAttributes, closure_2.validAttributes) };
};
