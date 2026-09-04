// Module ID: 8164
// Function ID: 8165
// Name: getIllustrationSource
// Dependencies: [4205, 2]
// Exports: getIllustrationSource, useIllustrationSource

// Module 8164 (getIllustrationSource)
import set from "set" /* 2 */;
import ManaContext from "ManaContext" /* 4205 */;

const result = set.fileFinishedImporting("design/components/Illustration/native/index.tsx");

export const getIllustrationSource = function getIllustrationSource(theme, light) {
  if ("light" === theme) {
    light = light.light;
  } else if ("darker" === theme) {
    let midnight = light.darker;
    if (midnight == null) {
      midnight = light.midnight;
    }
    light = midnight;
  } else if ("midnight" === theme) {
    let darker = light.midnight;
    if (darker == null) {
      darker = light.darker;
    }
    light = darker;
  }
  if (null != light) {
    let lightResult = light();
  } else {
    lightResult = light.dark();
  }
  return lightResult;
};
export const useIllustrationSource = function useIllustrationSource(arg0) {
  return arg0(ManaContext.useThemeContext().theme);
};
