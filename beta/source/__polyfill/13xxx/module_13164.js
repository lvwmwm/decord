// Module ID: 13164
// Function ID: 13165
// Dependencies: [13165, 13172, 13178, 13123]

// Module 13164
import _mod13123 from "module_13123" /* 13123 */;
import _mod13165 from "module_13165" /* 13165 */;
import _mod13172 from "module_13172" /* 13172 */;
import _mod13178 from "module_13178" /* 13178 */;

let obj2;
const obj = { parseContext: obj2, scope: _mod13165, atrule: _mod13172, pseudo: _mod13178, node: _mod13123 };
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
