// Module ID: 7397
// Function ID: 59491
// Name: getIllustrationSource
// Dependencies: []
// Exports: getIllustrationSource, useIllustrationSource

// Module 7397 (getIllustrationSource)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("design/components/Illustration/native/index.tsx");

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
  return arg0(require(dependencyMap[0]).useThemeContext().theme);
};
