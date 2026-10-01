// Module ID: 7691
// Function ID: 7692
// Name: VisualEffectViewThemed
// Dependencies: [19, 21, 4767, 4685, 5269, 2]

// Module 7691 (VisualEffectViewThemed)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 4685 */;
import useThemeDefault from "useTheme" /* 4767 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const VisualEffectViewDefault = tmp(5269);
const jsx = Fragment.jsx;
const forwardRefResult = react.forwardRef(function VisualEffectViewThemed(arg0, ref) {
  let str = "dark";
  const tmp3 = useThemeDefault();
  const obj = shared;
  if (obj.isThemeLight(tmp3)) {
    str = "light";
  }
  VisualEffectViewDefault;
  const merged = Object.assign(arg0);
  return <tmpResult ref={arg1} blurTheme={str} />;
});
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewThemed.tsx");

export default forwardRefResult;
