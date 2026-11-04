// Module ID: 13136
// Function ID: 13137
// Dependencies: [13137, 13144, 13150, 13095]

// Module 13136
import _mod13095 from "module_13095" /* 13095 */;
import _mod13137 from "module_13137" /* 13137 */;
import _mod13144 from "module_13144" /* 13144 */;
import _mod13150 from "module_13150" /* 13150 */;

let obj2;
const obj = { parseContext: obj2, scope: _mod13137, atrule: _mod13144, pseudo: _mod13150, node: _mod13095 };
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
