// Module ID: 12739
// Function ID: 12740
// Dependencies: [12740, 12747, 12753, 12698]

// Module 12739
import _mod12698 from "module_12698" /* 12698 */;
import _mod12740 from "module_12740" /* 12740 */;
import _mod12747 from "module_12747" /* 12747 */;
import _mod12753 from "module_12753" /* 12753 */;

let obj2;
const obj = { parseContext: obj2, scope: _mod12740, atrule: _mod12747, pseudo: _mod12753, node: _mod12698 };
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
