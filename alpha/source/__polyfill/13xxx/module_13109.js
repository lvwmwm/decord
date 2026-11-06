// Module ID: 13109
// Function ID: 13110
// Dependencies: [13110, 13117, 13123, 13068]

// Module 13109
import _mod13068 from "module_13068" /* 13068 */;
import _mod13110 from "module_13110" /* 13110 */;
import _mod13117 from "module_13117" /* 13117 */;
import _mod13123 from "module_13123" /* 13123 */;

let obj2;
const obj = { parseContext: obj2, scope: _mod13110, atrule: _mod13117, pseudo: _mod13123, node: _mod13068 };
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
