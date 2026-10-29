// Module ID: 19379
// Function ID: 19380
// Name: openInteractionIframeModal
// Dependencies: [5, 19380, 6731, 19381, 2000, 2]
// Exports: default

// Module 19379 (openInteractionIframeModal)
import InteractionIframeConstants from "InteractionIframeConstants" /* 19380 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c1;

let obj = function _openInteractionIframeModal() {
  let paths;
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        c1 = 2;
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          obj = require("ModalActionCreators");
          obj.pushLazy(require("asyncRequire")(paths[3], paths.paths), closure_0, closure_2_4);
          c1 = 3;
          return { value: "IconComponent", done: "IconComponent" };
        }
      } catch (tmp9) {
        c1 = 3;
        throw tmp9;
      }
    }
  });
  return obj(...arguments);
};
let closure_4 = InteractionIframeConstants.INTERACTION_IFRAME_MODAL_KEY;
const result = size.fileFinishedImporting("modules/interaction_components/openInteractionIframeModal.native.tsx");

export default function openInteractionIframeModal() {
  return obj(...arguments);
};
