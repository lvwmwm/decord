// Module ID: 3828
// Function ID: 31817
// Dependencies: [27, 3823, 2]

// Module 3828
import { Linking } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("lib/native/Linking.tsx");

export default {
  openURL(defaultResult1, defaultResult2) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    const obj = { allowExternal: flag };
    require(3823) /* _createForOfIteratorHelperLoose */.default(defaultResult1, defaultResult2, obj);
  },
  openURLExternally(href, SAFARI) {
    require(3823) /* _createForOfIteratorHelperLoose */.default(href, SAFARI, { forceExternalBrowser: true });
  },
  performURLNavigation(href) {
    Linking.openURL(href).catch(() => {

    });
  }
};
