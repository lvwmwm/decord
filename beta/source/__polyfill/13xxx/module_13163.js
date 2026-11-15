// Module ID: 13163
// Function ID: 13164
// Dependencies: [13164, 13171, 13177, 13122]

// Module 13163
import _mod13122 from "module_13122" /* 13122 */;
import _mod13164 from "module_13164" /* 13164 */;
import _mod13171 from "module_13171" /* 13171 */;
import _mod13177 from "module_13177" /* 13177 */;

let obj2;
const obj = { parseContext: obj2, scope: _mod13164, atrule: _mod13171, pseudo: _mod13177, node: _mod13122 };
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
