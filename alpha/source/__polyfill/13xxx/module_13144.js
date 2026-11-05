// Module ID: 13144
// Function ID: 13145
// Dependencies: [13145, 13152, 13158, 13103]

// Module 13144
import _mod13103 from "module_13103" /* 13103 */;
import _mod13145 from "module_13145" /* 13145 */;
import _mod13152 from "module_13152" /* 13152 */;
import _mod13158 from "module_13158" /* 13158 */;

let obj2;
const obj = { parseContext: obj2, scope: _mod13145, atrule: _mod13152, pseudo: _mod13158, node: _mod13103 };
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
