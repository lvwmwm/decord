// Module ID: 7907
// Function ID: 7908
// Name: getIllustrationSource
// Dependencies: [4104, 2]
// Exports: getIllustrationSource, useIllustrationSource

// Module 7907 (getIllustrationSource)
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
  return arg0(require(4104) /* ManaContext */.useThemeContext().theme);
};
