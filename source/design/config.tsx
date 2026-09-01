// Module ID: 6044
// Function ID: 6045
// Name: designConfig
// Dependencies: [2]
// Exports: setDesignConfig

// Module 6044 (designConfig)
import set from "set" /* 2 */;

const obj = {
  useTrackNavigatorScreenImpression() {

  }
};
const result = set.fileFinishedImporting("design/config.tsx");

export const designConfig = obj;
export const setDesignConfig = function setDesignConfig(arg0) {
  const merged = Object.assign(obj, arg0);
};
