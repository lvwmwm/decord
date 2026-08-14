// Module ID: 5880
// Function ID: 5881
// Name: designConfig
// Dependencies: [2]
// Exports: setDesignConfig

// Module 5880 (designConfig)
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
