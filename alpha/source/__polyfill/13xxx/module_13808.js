// Module ID: 13808
// Function ID: 13809
// Dependencies: [13809, 13816, 13822, 13767]

// Module 13808
import _mod13767 from "module_13767" /* 13767 */;
import _mod13809 from "module_13809" /* 13809 */;
import _mod13816 from "module_13816" /* 13816 */;
import _mod13822 from "module_13822" /* 13822 */;

let obj2;
const obj = { parseContext: obj2, scope: _mod13809, atrule: _mod13816, pseudo: _mod13822, node: _mod13767 };
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
