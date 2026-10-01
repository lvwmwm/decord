// Module ID: 14174
// Function ID: 14175
// Name: GummyStripes
// Dependencies: [19, 17, 21, 4836, 1092, 2]
// Exports: default

// Module 14174 (GummyStripes)
import react_native from "react-native" /* 17 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const View = react_native.View;
({ jsx: c3, Fragment: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ stripe: { flex: 1 }, stripeOverlap: { marginLeft: -1 } });
const result = size.fileFinishedImporting("modules/display_name_styles/native/effects/GummyStripes.tsx");

export default function GummyStripes(colors) {
  colors = colors.colors;
  let closure_0 = closure_5();
  let obj = {
    children: colors.map((item, index) => {
      let obj3;
      const items = [closure_0.stripe, , ];
      let stripeOverlap = index > 0;
      const tmp = _false;
      const tmp2 = View;
      if (stripeOverlap) {
        stripeOverlap = closure_0.stripeOverlap;
      }
      const obj = { style: items };
      items[1] = stripeOverlap;
      const obj2 = { backgroundColor: obj3.int2hex(item) };
      items[2] = obj2;
      obj3 = utils_ColorUtils;
      return tmp(tmp2, obj, index);
    })
  };
  return closure_3(closure_4, obj);
};
