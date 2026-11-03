// Module ID: 13054
// Function ID: 13055
// Dependencies: [13055, 13062, 13068, 13013]

// Module 13054
import _mod13013 from "module_13013" /* 13013 */;
import _mod13055 from "module_13055" /* 13055 */;
import _mod13062 from "module_13062" /* 13062 */;
import _mod13068 from "module_13068" /* 13068 */;

let obj2;
const obj = { parseContext: obj2, scope: _mod13055, atrule: _mod13062, pseudo: _mod13068, node: _mod13013 };
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
