// Module ID: 7873
// Function ID: 7874
// Name: VisualEffectViewThemed
// Dependencies: [19, 21, 4776, 4714, 5453, 2]

// Module 7873 (VisualEffectViewThemed)
import shared from "shared" /* 4714 */;
import useThemeDefault from "useTheme" /* 4776 */;
import noop from "module_19" /* 19 */;

const VisualEffectViewDefault = tmp(5453);
require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewThemed.tsx");

export default noop.forwardRef(function VisualEffectViewThemed(arg0, ref) {
  const tmp3 = useThemeDefault();
  let str = "dark";
  if (obj.isThemeLight(tmp3)) {
    str = "light";
  }
  obj = shared;
  const obj2 = { ref, blurTheme: str };
  const merged = Object.assign(arg0);
  return jsx(VisualEffectViewDefault, { ref, blurTheme: str });
});
