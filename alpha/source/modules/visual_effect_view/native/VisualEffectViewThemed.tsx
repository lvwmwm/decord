// Module ID: 7691
// Function ID: 7692
// Name: VisualEffectViewThemed
// Dependencies: [19, 21, 4767, 4685, 5269, 2]

// Module 7691 (VisualEffectViewThemed)
import shared from "shared" /* 4685 */;
import useThemeDefault from "useTheme" /* 4767 */;
import noop from "module_19" /* 19 */;

const VisualEffectViewDefault = tmp(5269);
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
