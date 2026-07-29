// Module ID: 3886
// Function ID: 3887
// Dependencies: [17, 3881, 2]

// Module 3886
import { Linking } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("lib/native/Linking.tsx");

export default {
  openURL(arg0, arg1) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    require(3881) /* sanitizeURLPart */.default(arg0, arg1, { allowExternal: flag });
  },
  openURLExternally(href, SAFARI) {
    require(3881) /* sanitizeURLPart */.default(href, SAFARI, { forceExternalBrowser: true });
  },
  performURLNavigation(href) {
    Linking.openURL(href).catch(() => {

    });
  }
};
