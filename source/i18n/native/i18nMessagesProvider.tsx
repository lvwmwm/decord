// Module ID: 16639
// Function ID: 129816
// Name: i18nManager
// Dependencies: [27, 477, 16640, 1250, 1212, 2]
// Exports: default

// Module 16639 (i18nManager)
import set from "set";
import set from "enforcing";

if (set.isAndroid()) {
  let i18nManager = require("enforcing");
} else {
  i18nManager = require("get ActivityIndicator").NativeModules.i18nManager;
}
let result = set.fileFinishedImporting("i18n/native/i18nMessagesProvider.tsx");

export default function newIntlMessagesProvider() {
  return new Promise((arg0) => {
    let closure_0 = arg0;
    outer1_2.keysRequest((arr) => {
      outer2_2.valuesResult(arr.map((code) => {
        const result = outer3_0(outer3_1[3]).runtimeHashMessageKey(code);
        const tmp2 = outer3_0(outer3_1[4]).t[result];
        let str = "";
        if (null != tmp2) {
          const intl = outer3_0(outer3_1[4]).intl;
          str = intl.reserialize(tmp2);
        }
        return str;
      }));
      callback(true);
    });
  });
};
