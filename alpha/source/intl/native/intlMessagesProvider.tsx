// Module ID: 20121
// Function ID: 20122
// Name: intlMessagesProvider
// Dependencies: [20122, 1152, 1113, 2]
// Exports: default

// Module 20121 (intlMessagesProvider)
import intl2 from "intl" /* 1113 */;
import _mod1152 from "module_1152" /* 1152 */;
import react_nativeDefault from "react-native" /* 20122 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("intl/native/intlMessagesProvider.tsx");

export default function intlMessagesProvider() {
  let obj = react_nativeDefault;
  const keys = obj.getKeys();
  const mapped = keys.map((item) => {
    const obj = _mod1152;
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
