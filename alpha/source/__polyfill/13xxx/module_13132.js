// Module ID: 13132
// Function ID: 13133
// Dependencies: [13133, 13140, 13146, 13091]

// Module 13132
import _mod13091 from "module_13091" /* 13091 */;
import _mod13133 from "module_13133" /* 13133 */;
import _mod13140 from "module_13140" /* 13140 */;
import _mod13146 from "module_13146" /* 13146 */;

let obj2;
const obj = { parseContext: obj2, scope: _mod13133, atrule: _mod13140, pseudo: _mod13146, node: _mod13091 };
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
