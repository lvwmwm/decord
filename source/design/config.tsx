// Module ID: 5859
// Function ID: 5860
// Name: designConfig
// Dependencies: [2]
// Exports: setDesignConfig

// Module 5859 (designConfig)
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
