// Module ID: 19464
// Function ID: 19465
// Name: intlMessagesProvider
// Dependencies: [19465, 1167, 1128, 2]
// Exports: default

// Module 19464 (intlMessagesProvider)
import intl2 from "intl" /* 1128 */;
import _mod1167 from "module_1167" /* 1167 */;
import react_nativeDefault from "react-native" /* 19465 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("intl/native/intlMessagesProvider.tsx");

export default function intlMessagesProvider() {
  let obj = react_nativeDefault;
  const keys = obj.getKeys();
  const mapped = keys.map((item) => {
    const obj = _mod1167;
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
