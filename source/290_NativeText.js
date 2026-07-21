// Module ID: 290
// Function ID: 4483
// Name: NativeText
// Dependencies: []

// Module 290 (NativeText)
let closure_2 = { validAttributes: {}, directEventTypes: { topTextLayout: { registrationName: "onTextLayout" } }, uiViewClassName: "RCTText" };
let closure_3 = { validAttributes: { "Bool(true)": null, "Bool(true)": null, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": null, "Bool(true)": null }, uiViewClassName: "RCTVirtualText" };
const tmp2 = importDefault(dependencyMap[0])("RCTText", () => arg1(dependencyMap[1]).createViewConfig(closure_2));
if (global.RN$Bridgeless) {
  let tmp3 = importDefault(dependencyMap[0])("RCTVirtualText", () => arg1(dependencyMap[1]).createViewConfig(closure_3));
} else {
  tmp3 = tmp2;
  const importDefaultResult = importDefault(dependencyMap[2]);
}

export const NativeText = tmp2;
export const NativeVirtualText = tmp3;
