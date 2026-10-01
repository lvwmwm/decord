// Module ID: 17725
// Function ID: 17726
// Name: BundleUpdaterActionCreators
// Dependencies: [17, 5203, 1115, 2]

// Module 17725 (BundleUpdaterActionCreators)
import react_native from "react-native" /* 17 */;
import intl5 from "intl" /* 1115 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5203 */;
import size from "module_2" /* 2 */;

const NativeModules = react_native.NativeModules;
let c4 = false;
let obj = {
  prepareUpdate(versionRequired) {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    const tmp = versionRequired;
    if (tmp) {
      const obj = {
        title: intl.string(intl5.t.GQZdmI),
        body: intl2.string(intl5.t.Fizu9y),
        confirmText: intl3.string(intl5.t.UefCDS),
        cancelText: intl4.string(intl5.t["1SzcG6"]),
        onConfirm() {
            BundleUpdaterManager = BundleUpdaterManager.BundleUpdaterManager;
            return BundleUpdaterManager.reload();
          }
      };
      const show = AlertActionCreatorsDefault.show;
      AlertActionCreatorsDefault;
      intl = intl5.intl;
      intl2 = intl5.intl;
      intl3 = intl5.intl;
      intl4 = intl5.intl;
      show(obj);
      c4 = true;
    }
  },
  deferUpdate() {
    const tmp = c4;
    if (tmp) {
      c4 = false;
      const BundleUpdaterManager = NativeModules.BundleUpdaterManager;
      BundleUpdaterManager.reload();
    }
  }
};
const result = size.fileFinishedImporting("actions/native/BundleUpdaterActionCreators.tsx");

export default obj;
