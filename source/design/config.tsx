// Module ID: 5759
// Function ID: 5760
// Name: designConfig
// Dependencies: [2]
// Exports: setDesignConfig

// Module 5759 (designConfig)
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
