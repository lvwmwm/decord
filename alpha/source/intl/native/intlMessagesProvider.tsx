// Module ID: 19775
// Function ID: 19776
// Name: intlMessagesProvider
// Dependencies: [19776, 1164, 1125, 2]
// Exports: default

// Module 19775 (intlMessagesProvider)
import intl2 from "intl" /* 1125 */;
import _mod1164 from "module_1164" /* 1164 */;
import react_nativeDefault from "react-native" /* 19776 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("intl/native/intlMessagesProvider.tsx");

export default function intlMessagesProvider() {
  let obj = react_nativeDefault;
  const keys = obj.getKeys();
  const mapped = keys.map((item) => {
    const obj = _mod1164;
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
