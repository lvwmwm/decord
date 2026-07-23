// Module ID: 3827
// Function ID: 31805
// Dependencies: [27, 3822, 2]

// Module 3827
import { Linking } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("lib/native/Linking.tsx");

export default {
  openURL(defaultResult1, defaultResult2) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    const obj = { allowExternal: flag };
    require(3822) /* _createForOfIteratorHelperLoose */.default(defaultResult1, defaultResult2, obj);
  },
  openURLExternally(href, SAFARI) {
    require(3822) /* _createForOfIteratorHelperLoose */.default(href, SAFARI, { forceExternalBrowser: true });
  },
  performURLNavigation(href) {
    Linking.openURL(href).catch(() => {

    });
  }
};
