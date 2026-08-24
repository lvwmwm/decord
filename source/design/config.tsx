// Module ID: 6577
// Function ID: 6578
// Name: designConfig
// Dependencies: [2]
// Exports: setDesignConfig

// Module 6577 (designConfig)
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
