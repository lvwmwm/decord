// Module ID: 1175
// Function ID: 13377
// Name: getTheme
// Dependencies: []
// Exports: getTheme

// Module 1175 (getTheme)
const Appearance = require(dependencyMap[0]).Appearance;
let obj = {};
obj = { "Null": null, "Null": null, "Null": null, alignItems: 1, justifyContent: 8, marginHorizontal: "row", borderRadius: 16 };

export const getTheme = function getTheme() {
  const obj = require(dependencyMap[1]);
  let colorScheme = obj.getColorScheme();
  if ("system" === colorScheme) {
    colorScheme = Appearance.getColorScheme();
  }
  const merged = Object.assign({}, obj);
  let merged1 = Object.assign(merged, require(dependencyMap[1]).getFeedbackLightTheme());
  const merged2 = Object.assign({}, obj);
  const obj2 = require(dependencyMap[1]);
  if ("dark" === colorScheme) {
    merged1 = Object.assign(merged2, obj3.getFeedbackDarkTheme());
  }
  return merged1;
};
export const LightTheme = obj;
export const DarkTheme = obj;
