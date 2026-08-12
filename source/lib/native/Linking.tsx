// Module ID: 4058
// Function ID: 4059
// Dependencies: [17, 4053, 2]

// Module 4058
import { Linking } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("lib/native/Linking.tsx");

export default {
  openURL(arg0, arg1) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    require(4053) /* sanitizeURLPart */.default(arg0, arg1, { allowExternal: flag });
  },
  openURLExternally(href, SAFARI) {
    require(4053) /* sanitizeURLPart */.default(href, SAFARI, { forceExternalBrowser: true });
  },
  performURLNavigation(href) {
    Linking.openURL(href).catch(() => {

    });
  }
};
