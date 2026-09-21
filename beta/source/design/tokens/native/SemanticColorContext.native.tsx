// Module ID: 4463
// Function ID: 4464
// Name: SemanticColorContext
// Dependencies: [1096, 676, 4464, 4470, 4577, 2]
// Exports: getSemanticColorContextFromThemeContext

// Module 4463 (SemanticColorContext)
import _modDef676 from "module_676" /* 676 */;
import getGradientThemeFromFlags from "getGradientThemeFromFlags" /* 4470 */;
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 4577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/tokens/native/SemanticColorContext.native.tsx");

export const getSemanticColorContextFromThemeContext = function getSemanticColorContextFromThemeContext(primaryColor) {
  primaryColor = primaryColor.primaryColor;
  const gradientThemeFromFlags = getGradientThemeFromFlags.getGradientThemeFromFlags(primaryColor);
  ({ contrast, saturation, enabledExperiments } = primaryColor);
  let gradientThemeMetadata = client_themes_ClientThemesUtils.getGradientThemeMetadata(gradientThemeFromFlags, primaryColor.gradient);
  if (null != primaryColor) {
    ({ primaryColor: primaryColor2, secondaryColor } = primaryColor);
    let tmp9 = null;
    if (null != primaryColor2) {
      const int2hexResult = tmp(1096).int2hex(primaryColor2);
      const tmpResult = tmp(1096);
      if (secondaryColor == null) {
        secondaryColor = primaryColor2;
      }
      const int2hexResult1 = tmp(1096).int2hex(secondaryColor);
      const tmpResult3 = tmp(1096);
      const obj5 = _modDef676(int2hexResult);
      const mixResult = _modDef676(int2hexResult).mix(int2hexResult1, 0.5);
      const hexResult = _modDef676(int2hexResult).mix(int2hexResult1, 0.5).hex();
      let str = "dark";
      if (tmpResult4.isThemeLight(tmp10)) {
        str = "light";
      }
      const obj3 = { theme: str, colors: null };
      const obj4 = { "gradient.start": int2hexResult, "gradient.mid": hexResult, "gradient.end": int2hexResult1, "gradient.top": int2hexResult, "gradient.bottom": int2hexResult1, "gradient.primary": int2hexResult, "gradient.secondary": int2hexResult1 };
      obj3.colors = obj4;
      tmp9 = obj3;
      tmpResult4 = tmp(4464);
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
