// Module ID: 3978
// Function ID: 3979
// Dependencies: [17, 500, 3979, 2]

// Module 3978
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/links/native/LinkingModule.tsx");

export default {
  tryOpenUrlAsUniversalLink(closure_0) {
    if (obj.isAndroid()) {
      let result = importDefault(3979).tryOpenUrlAsUniversalLink(closure_0);
      const obj2 = importDefault(3979);
    } else {
      const DCDLinkingManager = NativeModules.DCDLinkingManager;
      result = DCDLinkingManager.tryOpenUrlAsUniversalLink(closure_0);
    }
    return result;
  },
  tryOpenScheme(closure_0) {
    if (obj.isAndroid()) {
      let tryOpenSchemeResult = importDefault(3979).tryOpenScheme(closure_0);
      const obj2 = importDefault(3979);
    } else {
      const DCDLinkingManager = NativeModules.DCDLinkingManager;
      tryOpenSchemeResult = DCDLinkingManager.tryOpenScheme(closure_0);
    }
    return tryOpenSchemeResult;
  }
};
