// Module ID: 7403
// Function ID: 59548
// Name: getIllustrationSource
// Dependencies: [3842, 2]
// Exports: getIllustrationSource, useIllustrationSource

// Module 7403 (getIllustrationSource)
const result = require("set").fileFinishedImporting("design/components/Illustration/native/index.tsx");

export const getIllustrationSource = function getIllustrationSource(theme, light) {
  if ("light" === theme) {
    light = light.light;
  } else if ("darker" === theme) {
    let midnight = light.darker;
    if (null == midnight) {
      midnight = light.midnight;
    }
    light = midnight;
  } else if ("midnight" === theme) {
    let darker = light.midnight;
    if (null == darker) {
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
  return arg0(require(3842) /* ManaContext */.useThemeContext().theme);
};
