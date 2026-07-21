// Module ID: 5580
// Function ID: 47361
// Name: designConfig
// Dependencies: [284214097]
// Exports: setDesignConfig

// Module 5580 (designConfig)
const obj = {
  getDefaultLinkInterceptor() {

  },
  useTrackNavigatorScreenImpression() {

  }
};
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("design/config.tsx");

export const designConfig = obj;
export const setDesignConfig = function setDesignConfig(arg0) {
  const merged = Object.assign(obj, arg0);
};
