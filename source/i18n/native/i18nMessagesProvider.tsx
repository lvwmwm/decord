// Module ID: 17903
// Function ID: 17904
// Name: i18nManager
// Dependencies: [17, 1115, 17904, 1155, 1114, 2]
// Exports: default

// Module 17903 (i18nManager)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import enforcingDefault from "enforcing" /* 17904 */;
import set from "set" /* 1115 */;

if (set.isAndroid()) {
  let i18nManager = enforcingDefault;
} else {
  i18nManager = get_ActivityIndicator.NativeModules.i18nManager;
}
let result = set.fileFinishedImporting("i18n/native/i18nMessagesProvider.tsx");

export default function newIntlMessagesProvider() {
  return new Promise((arg0) => {
    closure_0 = arg0;
    closure_2.keysRequest((arr) => {
      closure_1_2.valuesResult(arr.map((code) => {
        const result = callback(1155).runtimeHashMessageKey(code);
        const tmp4 = callback(1114).t[result];
        let str = "";
        if (null != tmp4) {
          const intl = callback(1114).intl;
          str = intl.reserialize(tmp4);
        }
        return str;
      }));
      callback(true);
    });
  });
};
