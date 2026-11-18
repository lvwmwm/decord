// Module ID: 16326
// Function ID: 16327
// Dependencies: [16327, 16334, 16340, 16285]

// Module 16326
import _mod16285 from "module_16285" /* 16285 */;
import _mod16327 from "module_16327" /* 16327 */;
import _mod16334 from "module_16334" /* 16334 */;
import _mod16340 from "module_16340" /* 16340 */;

let obj2;
const obj = { parseContext: obj2, scope: _mod16327, atrule: _mod16334, pseudo: _mod16340, node: _mod16285 };
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
