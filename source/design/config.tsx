// Module ID: 5728
// Function ID: 5729
// Name: designConfig
// Dependencies: [2]
// Exports: setDesignConfig

// Module 5728 (designConfig)
const obj = {
  getDefaultLinkInterceptor() {

  },
  useTrackNavigatorScreenImpression() {

  }
};
const result = require("set").fileFinishedImporting("design/config.tsx");

export const designConfig = obj;
export const setDesignConfig = function setDesignConfig(arg0) {
  const merged = Object.assign(obj, arg0);
};
