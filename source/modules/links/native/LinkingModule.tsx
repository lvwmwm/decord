// Module ID: 3822
// Function ID: 31795
// Dependencies: []

// Module 3822
const NativeModules = require(dependencyMap[0]).NativeModules;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/links/native/LinkingModule.tsx");

export default {
  tryOpenUrlAsUniversalLink(arg0) {
    if (obj.isAndroid()) {
      let result = importDefault(dependencyMap[2]).tryOpenUrlAsUniversalLink(arg0);
      const obj2 = importDefault(dependencyMap[2]);
    } else {
      const DCDLinkingManager = NativeModules.DCDLinkingManager;
      result = DCDLinkingManager.tryOpenUrlAsUniversalLink(arg0);
    }
    return result;
  },
  tryOpenScheme(arg0) {
    if (obj.isAndroid()) {
      let tryOpenSchemeResult = importDefault(dependencyMap[2]).tryOpenScheme(arg0);
      const obj2 = importDefault(dependencyMap[2]);
    } else {
      const DCDLinkingManager = NativeModules.DCDLinkingManager;
      tryOpenSchemeResult = DCDLinkingManager.tryOpenScheme(arg0);
    }
    return tryOpenSchemeResult;
  }
};
