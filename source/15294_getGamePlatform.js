// Module ID: 15294
// Function ID: 116352
// Name: getGamePlatform
// Dependencies: []
// Exports: default

// Module 15294 (getGamePlatform)
const _module = require(dependencyMap[0]);
({ ActivityTypes: closure_2, ActivityGamePlatforms: closure_3 } = _module);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/activities/utils/getGamePlatform.tsx");

export default function getGamePlatform(type) {
  let tmp = null;
  if (null != type) {
    tmp = null;
    if (null != type.type) {
      tmp = null;
      if (type.type === constants.PLAYING) {
        if (importDefault(dependencyMap[1])(type)) {
          let DESKTOP = constants2.XBOX;
        } else if (null != type.platform) {
          DESKTOP = type.platform;
        } else {
          DESKTOP = constants2.DESKTOP;
        }
      }
    }
  }
  return tmp;
};
