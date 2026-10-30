// Module ID: 12880
// Function ID: 12881
// Dependencies: [12881, 12888, 12894, 12839]

// Module 12880
import _mod12839 from "module_12839" /* 12839 */;
import _mod12881 from "module_12881" /* 12881 */;
import _mod12888 from "module_12888" /* 12888 */;
import _mod12894 from "module_12894" /* 12894 */;

let obj2;
const obj = { parseContext: obj2, scope: _mod12881, atrule: _mod12888, pseudo: _mod12894, node: _mod12839 };
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
