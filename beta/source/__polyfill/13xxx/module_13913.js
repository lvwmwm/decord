// Module ID: 13913
// Function ID: 13914
// Dependencies: [13914, 13921, 13927, 13872]

// Module 13913
import _mod13872 from "module_13872" /* 13872 */;
import _mod13914 from "module_13914" /* 13914 */;
import _mod13921 from "module_13921" /* 13921 */;
import _mod13927 from "module_13927" /* 13927 */;

let obj2;
const obj = { parseContext: obj2, scope: _mod13914, atrule: _mod13921, pseudo: _mod13927, node: _mod13872 };
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
