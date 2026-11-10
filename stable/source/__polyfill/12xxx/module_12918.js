// Module ID: 12918
// Function ID: 12919
// Dependencies: [12919, 12926, 12932, 12877]

// Module 12918
import _mod12877 from "module_12877" /* 12877 */;
import _mod12919 from "module_12919" /* 12919 */;
import _mod12926 from "module_12926" /* 12926 */;
import _mod12932 from "module_12932" /* 12932 */;

let obj2;
const obj = { parseContext: obj2, scope: _mod12919, atrule: _mod12926, pseudo: _mod12932, node: _mod12877 };
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
