// Module ID: 4449
// Function ID: 4450
// Name: LinkingModule
// Dependencies: [17, 1364, 4450, 2]

// Module 4449 (LinkingModule)
import _mod17 from "module_17" /* 17 */;
import NativeLinkingModuleDefault from "NativeLinkingModule" /* 4450 */;
import size from "module_2" /* 2 */;

const NativeModules = _mod17.NativeModules;
let result = size.fileFinishedImporting("modules/links/native/LinkingModule.tsx");

export default {
  tryOpenUrlAsUniversalLink(arg0) {
    if (obj.isAndroid()) {
      let result = NativeLinkingModuleDefault.tryOpenUrlAsUniversalLink(arg0);
    } else {
      const DCDLinkingManager = NativeModules.DCDLinkingManager;
      result = DCDLinkingManager.tryOpenUrlAsUniversalLink(arg0);
    }
    return result;
  },
  tryOpenScheme(arg0) {
    if (obj.isAndroid()) {
      let tryOpenSchemeResult = NativeLinkingModuleDefault.tryOpenScheme(arg0);
    } else {
      const DCDLinkingManager = NativeModules.DCDLinkingManager;
      tryOpenSchemeResult = DCDLinkingManager.tryOpenScheme(arg0);
    }
    return tryOpenSchemeResult;
  }
};
