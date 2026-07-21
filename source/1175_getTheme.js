// Module ID: 1175
// Function ID: 13377
// Name: getTheme
// Dependencies: []
// Exports: getTheme

// Module 1175 (getTheme)
const Appearance = require(dependencyMap[0]).Appearance;
let obj = {};
obj = { 1365402028: 1, 1398910105: 5, 1671023953: 10, 1365418235: 15, -1235146963: 16, 1644366417: null, 1548855894: "\u{1F9D1}\u200D\u{1F393}" };

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
