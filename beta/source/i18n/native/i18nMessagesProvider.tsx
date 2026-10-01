// Module ID: 17729
// Function ID: 17730
// Name: i18nMessagesProvider
// Dependencies: [17, 1364, 17730, 1154, 1115, 2]
// Exports: default

// Module 17729 (i18nMessagesProvider)
import react_native from "react-native" /* 17 */;
import react_nativeDefault from "react-native" /* 17730 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

const NativeModules = react_native.NativeModules;
if (PlatformUtils.isAndroid()) {
  let tmp2 = importDefault;
  let i18nManager = react_nativeDefault;
} else {
  i18nManager = NativeModules.i18nManager;
}
let result = size.fileFinishedImporting("i18n/native/i18nMessagesProvider.tsx");

export default function newIntlMessagesProvider() {
  const promise = new Promise((arg0) => {
    let closure_0 = arg0;
    closure_2.keysRequest((arr) => {
      i18nManager.valuesResult(arr.map((item) => {
        const obj = closure_1_0(closure_1_1[3]);
        const result = obj.runtimeHashMessageKey(item);
        const tmp4 = closure_1_0(closure_1_1[4]).t[result];
        let str = "";
        const tmp = closure_1_0;
        const tmp2 = closure_1_1;
        if (null != tmp4) {
          const intl = tmp(tmp2[4]).intl;
          str = intl.reserialize(tmp4);
        }
        return str;
      }));
      let tmp2 = closure_0(true);
    });
  });
  return promise;
};
