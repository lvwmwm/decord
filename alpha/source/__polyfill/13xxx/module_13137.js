// Module ID: 13137
// Function ID: 13138
// Dependencies: [13138, 13145, 13151, 13096]

// Module 13137
import _mod13096 from "module_13096" /* 13096 */;
import _mod13138 from "module_13138" /* 13138 */;
import _mod13145 from "module_13145" /* 13145 */;
import _mod13151 from "module_13151" /* 13151 */;

let obj2;
const obj = { parseContext: obj2, scope: _mod13138, atrule: _mod13145, pseudo: _mod13151, node: _mod13096 };
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
