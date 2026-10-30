// Module ID: 20060
// Function ID: 20061
// Name: intlMessagesProvider
// Dependencies: [20061, 1153, 1114, 2]
// Exports: default

// Module 20060 (intlMessagesProvider)
import intl2 from "intl" /* 1114 */;
import _mod1153 from "module_1153" /* 1153 */;
import react_nativeDefault from "react-native" /* 20061 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("intl/native/intlMessagesProvider.tsx");

export default function intlMessagesProvider() {
  let obj = react_nativeDefault;
  const keys = obj.getKeys();
  const mapped = keys.map((item) => {
    const obj = _mod1153;
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
