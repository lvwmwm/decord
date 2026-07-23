// Module ID: 125
// Function ID: 2099
// Name: setUpDOM
// Dependencies: [126, 127, 128, 130, 132, 133, 134, 141, 148, 149, 139, 142]

// Module 125 (setUpDOM)
const require = arg1;
const dependencyMap = arg6;
let c2 = false;
arg5.default = function setUpDOM() {
  if (!c2) {
    c2 = true;
    require(126) /* polyfillObjectProperty */.polyfillGlobal("DOMRect", () => outer1_0(outer1_1[1]).default);
    const obj = require(126) /* polyfillObjectProperty */;
    require(126) /* polyfillObjectProperty */.polyfillGlobal("DOMRectReadOnly", () => outer1_0(outer1_1[2]).default);
    const obj2 = require(126) /* polyfillObjectProperty */;
    require(126) /* polyfillObjectProperty */.polyfillGlobal("DOMRectList", () => outer1_0(outer1_1[3]).default);
    const obj3 = require(126) /* polyfillObjectProperty */;
    require(126) /* polyfillObjectProperty */.polyfillGlobal("HTMLCollection", () => outer1_0(outer1_1[4]).default);
    const obj4 = require(126) /* polyfillObjectProperty */;
    require(126) /* polyfillObjectProperty */.polyfillGlobal("NodeList", () => outer1_0(outer1_1[5]).default);
    const obj5 = require(126) /* polyfillObjectProperty */;
    require(126) /* polyfillObjectProperty */.polyfillGlobal("Node", () => outer1_0(outer1_1[6]).default);
    const obj6 = require(126) /* polyfillObjectProperty */;
    require(126) /* polyfillObjectProperty */.polyfillGlobal("Document", () => outer1_0(outer1_1[7]).default);
    const obj7 = require(126) /* polyfillObjectProperty */;
    require(126) /* polyfillObjectProperty */.polyfillGlobal("CharacterData", () => outer1_0(outer1_1[8]).default);
    const obj8 = require(126) /* polyfillObjectProperty */;
    require(126) /* polyfillObjectProperty */.polyfillGlobal("Text", () => outer1_0(outer1_1[9]).default);
    const obj9 = require(126) /* polyfillObjectProperty */;
    require(126) /* polyfillObjectProperty */.polyfillGlobal("Element", () => outer1_0(outer1_1[10]).default);
    const obj10 = require(126) /* polyfillObjectProperty */;
    require(126) /* polyfillObjectProperty */.polyfillGlobal("HTMLElement", () => outer1_0(outer1_1[11]).default);
    const obj11 = require(126) /* polyfillObjectProperty */;
  }
};
