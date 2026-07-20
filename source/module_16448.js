// Module ID: 16448
// Function ID: 127111
// Dependencies: []

// Module 16448
const NativeModules = require(dependencyMap[0]).NativeModules;
let closure_4 = false;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("actions/native/BundleUpdaterActionCreators.tsx");

export default {
  prepareUpdate(versionRequired) {
    if (versionRequired) {
      let obj = importDefault(dependencyMap[1]);
      obj = {};
      const intl = require(dependencyMap[2]).intl;
      obj.title = intl.string(require(dependencyMap[2]).t.GQZdmI);
      const intl2 = require(dependencyMap[2]).intl;
      obj.body = intl2.string(require(dependencyMap[2]).t.Fizu9y);
      const intl3 = require(dependencyMap[2]).intl;
      obj.confirmText = intl3.string(require(dependencyMap[2]).t.UefCDS);
      const intl4 = require(dependencyMap[2]).intl;
      obj.cancelText = intl4.string(require(dependencyMap[2]).t.1SzcG6);
      obj.onConfirm = function onConfirm() {
        const BundleUpdaterManager = BundleUpdaterManager.BundleUpdaterManager;
        return BundleUpdaterManager.reload();
      };
      obj.show(obj);
      let closure_4 = true;
    }
  },
  deferUpdate() {
    if (closure_4) {
      closure_4 = false;
      const BundleUpdaterManager = NativeModules.BundleUpdaterManager;
      BundleUpdaterManager.reload();
    }
  }
};
