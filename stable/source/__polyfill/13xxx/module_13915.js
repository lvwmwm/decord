// Module ID: 13915
// Function ID: 13916
// Dependencies: [13916, 13923, 13929, 13874]

// Module 13915
import _mod13874 from "module_13874" /* 13874 */;
import _mod13916 from "module_13916" /* 13916 */;
import _mod13923 from "module_13923" /* 13923 */;
import _mod13929 from "module_13929" /* 13929 */;

let obj2;
const obj = { parseContext: obj2, scope: _mod13916, atrule: _mod13923, pseudo: _mod13929, node: _mod13874 };
obj2 = {
  default: "StyleSheet",
  stylesheet: "StyleSheet",
  atrule: "Atrule",
  atrulePrelude(atrule) {
    let StringResult = null;
    const AtrulePrelude = this.AtrulePrelude;
    if (atrule.atrule) {
      const _String = String;
      StringResult = String(atrule.atrule);
    }
    return AtrulePrelude(StringResult);
  },
  mediaQueryList: "MediaQueryList",
  mediaQuery: "MediaQuery",
  rule: "Rule",
  selectorList: "SelectorList",
  selector: "Selector",
  block() {
    return this.Block(true);
  },
  declarationList: "DeclarationList",
  declaration: "Declaration",
  value: "Value"
};

export default obj;
