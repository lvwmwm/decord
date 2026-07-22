// Module ID: 3833
// Function ID: 31993
// Name: getSemanticColorContextFromThemeContext
// Dependencies: []
// Exports: getSemanticColorContextFromThemeContext

// Module 3833 (getSemanticColorContextFromThemeContext)
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("design/tokens/native/SemanticColorContext.native.tsx");

export const getSemanticColorContextFromThemeContext = function getSemanticColorContextFromThemeContext(themeContext) {
  let contrast;
  let enabledExperiments;
  let primaryColor2;
  let saturation;
  let secondaryColor;
  let obj = require(dependencyMap[3]);
  const primaryColor = themeContext.primaryColor;
  const gradientThemeFromFlags = obj.getGradientThemeFromFlags(themeContext);
  ({ contrast, saturation, enabledExperiments } = themeContext);
  let obj1 = require(dependencyMap[4]);
  let gradientThemeMetadata = obj1.getGradientThemeMetadata(gradientThemeFromFlags, themeContext.gradient);
  if (null != primaryColor) {
    ({ primaryColor: primaryColor2, secondaryColor } = themeContext);
    let tmp11 = null;
    if (null != primaryColor2) {
      const int2hexResult = require(dependencyMap[0]).int2hex(primaryColor2);
      const obj3 = require(dependencyMap[0]);
      if (null != secondaryColor) {
        primaryColor2 = secondaryColor;
      }
      const int2hexResult1 = require(dependencyMap[0]).int2hex(primaryColor2);
      const obj4 = require(dependencyMap[0]);
      const obj5 = importDefault(dependencyMap[1])(int2hexResult);
      obj = {};
      const mixResult = importDefault(dependencyMap[1])(int2hexResult).mix(int2hexResult1, 0.5);
      const hexResult = importDefault(dependencyMap[1])(int2hexResult).mix(int2hexResult1, 0.5).hex();
      let str = "dark";
      if (obj8.isThemeLight(tmp12)) {
        str = "light";
      }
      obj.theme = str;
      obj = { gradient.start: int2hexResult, gradient.mid: hexResult, gradient.end: int2hexResult1, gradient.top: int2hexResult, gradient.bottom: int2hexResult1, gradient.primary: int2hexResult, gradient.secondary: int2hexResult1 };
      obj.colors = obj;
      tmp11 = obj;
      const obj8 = require(dependencyMap[2]);
    }
    gradientThemeMetadata = tmp11;
  }
  obj1 = {};
  let num5 = 1;
  let num6 = 1;
  if (null == primaryColor) {
    num6 = contrast;
  }
  obj1.contrast = num6;
  if (null == primaryColor) {
    num5 = saturation;
  }
  obj1.saturation = num5;
  obj1.gradient = gradientThemeMetadata;
  obj1.isProfileTheme = null != primaryColor;
  obj1.enabledExperiments = enabledExperiments;
  return obj1;
};
