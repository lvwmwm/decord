// Module ID: 18667
// Function ID: 18668
// Name: i18nMessagesProvider
// Dependencies: [18668, 1165, 1126, 2]
// Exports: default

// Module 18667 (i18nMessagesProvider)
import intl2 from "intl" /* 1126 */;
import _mod1165 from "module_1165" /* 1165 */;
import react_nativeDefault from "react-native" /* 18668 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("i18n/native/i18nMessagesProvider.tsx");

export default function newIntlMessagesProvider() {
  let obj = react_nativeDefault;
  const keys = obj.getKeys();
  const mapped = keys.map((item) => {
    const obj = _mod1165;
    const result = obj.runtimeHashMessageKey(item);
    const tmp4 = intl2.t[result];
    let str = "";
    const tmp = require;
    const tmp2 = dependencyMap;
    if (null != tmp4) {
      const intl = tmp(tmp2[2]).intl;
      str = intl.reserialize(tmp4);
    }
    return str;
  });
  const obj2 = react_nativeDefault;
  obj2.valuesResult(mapped);
};
