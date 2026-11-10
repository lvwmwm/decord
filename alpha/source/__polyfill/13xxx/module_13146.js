// Module ID: 13146
// Function ID: 13147
// Dependencies: [13147, 13154, 13160, 13105]

// Module 13146
import _mod13105 from "module_13105" /* 13105 */;
import _mod13147 from "module_13147" /* 13147 */;
import _mod13154 from "module_13154" /* 13154 */;
import _mod13160 from "module_13160" /* 13160 */;

let obj2;
const obj = { parseContext: obj2, scope: _mod13147, atrule: _mod13154, pseudo: _mod13160, node: _mod13105 };
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
