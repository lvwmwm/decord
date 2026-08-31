// Module ID: 4160
// Function ID: 4161
// Dependencies: [17, 4155, 2]

// Module 4160
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import sanitizeURLPart from "sanitizeURLPart" /* 4155 */;

const Linking = get_ActivityIndicator.Linking;
const result = set.fileFinishedImporting("lib/native/Linking.tsx");

export default {
  openURL(arg0, arg1) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    sanitizeURLPart.default(arg0, arg1, { allowExternal: flag });
  },
  openURLExternally(href, SAFARI) {
    sanitizeURLPart.default(href, SAFARI, { forceExternalBrowser: true });
  },
  performURLNavigation(href) {
    Linking.openURL(href).catch(() => {

    });
  }
};
