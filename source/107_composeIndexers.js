// Module ID: 107
// Function ID: 1599
// Name: composeIndexers
// Dependencies: []

// Module 107 (composeIndexers)
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
  return { uiViewClassName: closure_2.uiViewClassName, Commands: {}, bubblingEventTypes: composeIndexers(arg2(arg6[0]).bubblingEventTypes, closure_2.bubblingEventTypes), directEventTypes: composeIndexers(arg2(arg6[0]).directEventTypes, closure_2.directEventTypes), validAttributes: composeIndexers(arg2(arg6[0]).validAttributes, closure_2.validAttributes) };
};
