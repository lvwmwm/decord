// Module ID: 13639
// Function ID: 104752
// Name: GummyStripes
// Dependencies: [31, 27, 33, 4130, 665, 2]
// Exports: default

// Module 13639 (GummyStripes)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, Fragment: closure_4 } = jsxProd);
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ stripe: { flex: 1 }, stripeOverlap: { marginLeft: -1 } });
const result = require("jsxProd").fileFinishedImporting("modules/display_name_styles/native/effects/GummyStripes.tsx");

export default function GummyStripes(colors) {
  colors = colors.colors;
  let closure_0 = callback2();
  return callback(closure_4, {
    children: colors.map((color) => {
      let obj = {};
      const items = [lib.stripe, , ];
      let stripeOverlap = arg1 > 0;
      if (stripeOverlap) {
        stripeOverlap = lib.stripeOverlap;
      }
      items[1] = stripeOverlap;
      obj = { backgroundColor: lib(outer1_1[4]).int2hex(color) };
      items[2] = obj;
      obj.style = items;
      return outer1_3(outer1_2, obj, arg1);
    })
  });
};
