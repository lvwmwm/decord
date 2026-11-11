// Module ID: 13812
// Function ID: 13813
// Dependencies: [13813, 13820, 13826, 13771]

// Module 13812
import _mod13771 from "module_13771" /* 13771 */;
import _mod13813 from "module_13813" /* 13813 */;
import _mod13820 from "module_13820" /* 13820 */;
import _mod13826 from "module_13826" /* 13826 */;

let obj2;
const obj = { parseContext: obj2, scope: _mod13813, atrule: _mod13820, pseudo: _mod13826, node: _mod13771 };
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
