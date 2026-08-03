// Module ID: 3949
// Function ID: 3950
// Dependencies: [17, 500, 3950, 2]

// Module 3949
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/links/native/LinkingModule.tsx");

export default {
  tryOpenUrlAsUniversalLink(closure_0) {
    if (obj.isAndroid()) {
      let result = importDefault(3950).tryOpenUrlAsUniversalLink(closure_0);
      const obj2 = importDefault(3950);
    } else {
      const DCDLinkingManager = NativeModules.DCDLinkingManager;
      result = DCDLinkingManager.tryOpenUrlAsUniversalLink(closure_0);
    }
    return result;
  },
  tryOpenScheme(closure_0) {
    if (obj.isAndroid()) {
      let tryOpenSchemeResult = importDefault(3950).tryOpenScheme(closure_0);
      const obj2 = importDefault(3950);
    } else {
      const DCDLinkingManager = NativeModules.DCDLinkingManager;
      tryOpenSchemeResult = DCDLinkingManager.tryOpenScheme(closure_0);
    }
    return tryOpenSchemeResult;
  }
};
