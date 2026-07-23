// Module ID: 3835
// Function ID: 31998
// Name: getSemanticColorContextFromThemeContext
// Dependencies: [665, 666, 3836, 3841, 3941, 2]
// Exports: getSemanticColorContextFromThemeContext

// Module 3835 (getSemanticColorContextFromThemeContext)
const result = require("getNodeText").fileFinishedImporting("design/tokens/native/SemanticColorContext.native.tsx");

export const getSemanticColorContextFromThemeContext = function getSemanticColorContextFromThemeContext(themeContext) {
  let contrast;
  let enabledExperiments;
  let primaryColor2;
  let saturation;
  let secondaryColor;
  let obj = require(3841) /* getGradientThemeFromFlags */;
  const primaryColor = themeContext.primaryColor;
  const gradientThemeFromFlags = obj.getGradientThemeFromFlags(themeContext);
  ({ contrast, saturation, enabledExperiments } = themeContext);
  let obj1 = require(3941) /* colorToHex */;
  let gradientThemeMetadata = obj1.getGradientThemeMetadata(gradientThemeFromFlags, themeContext.gradient);
  if (null != primaryColor) {
    ({ primaryColor: primaryColor2, secondaryColor } = themeContext);
    let tmp11 = null;
    if (null != primaryColor2) {
      const int2hexResult = require(665) /* pad2 */.int2hex(primaryColor2);
      const obj3 = require(665) /* pad2 */;
      if (null != secondaryColor) {
        primaryColor2 = secondaryColor;
      }
      const int2hexResult1 = require(665) /* pad2 */.int2hex(primaryColor2);
      const obj4 = require(665) /* pad2 */;
      const obj5 = importDefault(666)(int2hexResult);
      obj = {};
      const mixResult = importDefault(666)(int2hexResult).mix(int2hexResult1, 0.5);
      const hexResult = importDefault(666)(int2hexResult).mix(int2hexResult1, 0.5).hex();
      let str = "dark";
      if (obj8.isThemeLight(tmp12)) {
        str = "light";
      }
      obj.theme = str;
      obj = { "gradient.start": int2hexResult, "gradient.mid": hexResult, "gradient.end": int2hexResult1, "gradient.top": int2hexResult, "gradient.bottom": int2hexResult1, "gradient.primary": int2hexResult, "gradient.secondary": int2hexResult1 };
      obj.colors = obj;
      tmp11 = obj;
      obj8 = require(3836) /* getNodeText */;
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
