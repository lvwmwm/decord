// Module ID: 8524
// Function ID: 8525
// Dependencies: [1071, 5073, 2]
// Exports: getIllustrationSource, useIllustrationSource

// Module 8524
import Constants from "Constants" /* 1071 */;
import native from "native" /* 5073 */;
import size from "module_2" /* 2 */;

const ThemeTypes = Constants.ThemeTypes;
const result = size.fileFinishedImporting("design/components/Illustration/native/index.tsx");

export function getIllustrationSource(theme, light) {
  let lightResult;
  if (theme === ThemeTypes.LIGHT) {
    light = light.light;
  } else if (theme === ThemeTypes.DARK) {
    let midnight = light.darker;
    if (midnight == null) {
      midnight = light.midnight;
    }
    light = midnight;
  } else if (theme === ThemeTypes.ONYX) {
    let darker = light.midnight;
    if (darker == null) {
      darker = light.darker;
    }
    light = darker;
  }
  if (null != light) {
    lightResult = light();
  } else {
    lightResult = light.dark();
  }
  return lightResult;
}
export function useIllustrationSource(fn) {
  const obj = native;
  return fn(obj.useThemeContext().theme);
}
