// Module ID: 16635
// Function ID: 129746
// Dependencies: [27, 4470, 1212, 2]

// Module 16635
import { NativeModules } from "get ActivityIndicator";

let c4 = false;
const result = require("getSystemLocale").fileFinishedImporting("actions/native/BundleUpdaterActionCreators.tsx");

export default {
  prepareUpdate(versionRequired) {
    if (versionRequired) {
      let obj = importDefault(4470);
      obj = {};
      const intl = require(1212) /* getSystemLocale */.intl;
      obj.title = intl.string(require(1212) /* getSystemLocale */.t.GQZdmI);
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj.body = intl2.string(require(1212) /* getSystemLocale */.t.Fizu9y);
      const intl3 = require(1212) /* getSystemLocale */.intl;
      obj.confirmText = intl3.string(require(1212) /* getSystemLocale */.t.UefCDS);
      const intl4 = require(1212) /* getSystemLocale */.intl;
      obj.cancelText = intl4.string(require(1212) /* getSystemLocale */.t["1SzcG6"]);
      obj.onConfirm = function onConfirm() {
        const BundleUpdaterManager = outer1_3.BundleUpdaterManager;
        return BundleUpdaterManager.reload();
      };
      obj.show(obj);
      let c4 = true;
    }
  },
  deferUpdate() {
    if (c4) {
      c4 = false;
      const BundleUpdaterManager = NativeModules.BundleUpdaterManager;
      BundleUpdaterManager.reload();
    }
  }
};
