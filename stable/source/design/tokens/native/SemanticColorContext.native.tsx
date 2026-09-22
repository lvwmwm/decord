// Module ID: 4339
// Function ID: 4340
// Name: SemanticColorContext
// Dependencies: [1091, 672, 4340, 4346, 4455, 2]
// Exports: getSemanticColorContextFromThemeContext

// Module 4339 (SemanticColorContext)
import _modDef672 from "module_672" /* 672 */;
import getGradientThemeFromFlags from "getGradientThemeFromFlags" /* 4346 */;
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 4455 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/tokens/native/SemanticColorContext.native.tsx");

export const getSemanticColorContextFromThemeContext = function getSemanticColorContextFromThemeContext(themeContext) {
  const primaryColor = themeContext.primaryColor;
  const gradientThemeFromFlags = getGradientThemeFromFlags.getGradientThemeFromFlags(themeContext);
  ({ contrast, saturation, enabledExperiments } = themeContext);
  let gradientThemeMetadata = client_themes_ClientThemesUtils.getGradientThemeMetadata(gradientThemeFromFlags, themeContext.gradient);
  if (null != primaryColor) {
    ({ primaryColor: primaryColor2, secondaryColor } = themeContext);
    let tmp9 = null;
    if (null != primaryColor2) {
      const int2hexResult = tmp(1091).int2hex(primaryColor2);
      const tmpResult = tmp(1091);
      if (secondaryColor == null) {
        secondaryColor = primaryColor2;
      }
      const int2hexResult1 = tmp(1091).int2hex(secondaryColor);
      const tmpResult3 = tmp(1091);
      const obj5 = _modDef672(int2hexResult);
      const mixResult = _modDef672(int2hexResult).mix(int2hexResult1, 0.5);
      const hexResult = _modDef672(int2hexResult).mix(int2hexResult1, 0.5).hex();
      let str = "dark";
      if (tmpResult4.isThemeLight(tmp10)) {
        str = "light";
      }
      const obj3 = { theme: str, colors: null };
      const obj4 = { "gradient.start": int2hexResult, "gradient.mid": hexResult, "gradient.end": int2hexResult1, "gradient.top": int2hexResult, "gradient.bottom": int2hexResult1, "gradient.primary": int2hexResult, "gradient.secondary": int2hexResult1 };
      obj3.colors = obj4;
      tmp9 = obj3;
      tmpResult4 = tmp(4340);
    }
    gradientThemeMetadata = tmp9;
  }
  let num2 = 1;
  let num3 = 1;
  if (null == primaryColor) {
    num3 = contrast;
  }
  const obj6 = { contrast: num3, saturation: null, gradient: null, isProfileTheme: null, enabledExperiments: null };
  if (null == primaryColor) {
    num2 = saturation;
  }
  obj6.saturation = num2;
  obj6.gradient = gradientThemeMetadata;
  obj6.isProfileTheme = null != primaryColor;
  obj6.enabledExperiments = enabledExperiments;
  return obj6;
};
