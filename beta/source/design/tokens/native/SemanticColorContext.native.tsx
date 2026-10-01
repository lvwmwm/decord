// Module ID: 4532
// Function ID: 4533
// Name: SemanticColorContext
// Dependencies: [1092, 672, 4533, 4539, 4652, 2]
// Exports: getSemanticColorContextFromThemeContext

// Module 4532 (SemanticColorContext)
import _modDef672 from "module_672" /* 672 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import native from "native" /* 4533 */;
import getGradientThemeFromFlags from "getGradientThemeFromFlags" /* 4539 */;
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 4652 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/tokens/native/SemanticColorContext.native.tsx");

export const getSemanticColorContextFromThemeContext = function getSemanticColorContextFromThemeContext(themeContext) {
  let contrast;
  let enabledExperiments;
  let obj5;
  let primaryColor2;
  let saturation;
  let secondaryColor;
  const primaryColor = themeContext.primaryColor;
  const obj = getGradientThemeFromFlags;
  const gradientThemeFromFlags = obj.getGradientThemeFromFlags(themeContext);
  ({ contrast, saturation, enabledExperiments } = themeContext);
  const obj2 = client_themes_ClientThemesUtils;
  let gradientThemeMetadata = obj2.getGradientThemeMetadata(gradientThemeFromFlags, themeContext.gradient);
  if (null != primaryColor) {
    ({ primaryColor: primaryColor2, secondaryColor } = themeContext);
    let tmp10 = null;
    if (null != primaryColor2) {
      const tmpResult = utils_ColorUtils;
      const int2hexResult = tmpResult.int2hex(primaryColor2);
      const int2hex = utils_ColorUtils.int2hex;
      utils_ColorUtils;
      if (secondaryColor == null) {
        secondaryColor = primaryColor2;
      }
      const int2hexResult1 = int2hex(secondaryColor);
      const obj4 = _modDef672(int2hexResult);
      const mixResult = obj4.mix(int2hexResult1, 0.5);
      let str = "dark";
      const hexResult = mixResult.hex();
      const tmpResult4 = native;
      if (tmpResult4.isThemeLight(tmp11)) {
        str = "light";
      }
      const obj3 = { theme: str, colors: obj5 };
      tmp10 = obj3;
      obj5 = { "gradient.start": int2hexResult, "gradient.mid": hexResult, "gradient.end": int2hexResult1, "gradient.top": int2hexResult, "gradient.bottom": int2hexResult1, "gradient.primary": int2hexResult, "gradient.secondary": int2hexResult1 };
    }
    gradientThemeMetadata = tmp10;
  }
  let num2 = 1;
  let num3 = 1;
  if (null == primaryColor) {
    num3 = contrast;
  }
  const obj6 = { contrast: num3, saturation: num2, gradient: gradientThemeMetadata, isProfileTheme: null != primaryColor, enabledExperiments };
  if (null == primaryColor) {
    num2 = saturation;
  }
  return obj6;
};
