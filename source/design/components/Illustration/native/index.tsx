// Module ID: 6535
// Function ID: 6536
// Name: getIllustrationSource
// Dependencies: [3901, 2]
// Exports: getIllustrationSource, useIllustrationSource

// Module 6535 (getIllustrationSource)
const result = require("set").fileFinishedImporting("design/components/Illustration/native/index.tsx");

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
  return arg0(require(3901) /* ManaContext */.useThemeContext().theme);
};
