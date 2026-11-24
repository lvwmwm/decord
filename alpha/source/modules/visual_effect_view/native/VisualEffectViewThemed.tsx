// Module ID: 10337
// Function ID: 10338
// Name: VisualEffectViewThemed
// Dependencies: [19, 21, 5126, 4924, 5485, 2]
// Exports: default

// Module 10337 (VisualEffectViewThemed)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 4924 */;
import useThemeDefault from "useTheme" /* 5126 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp2;
const VisualEffectViewDefault = tmp2(5485);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewThemed.tsx");

export default function VisualEffectViewThemed(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  let str = "dark";
  const tmp4 = useThemeDefault();
  const obj = shared;
  if (obj.isThemeLight(tmp4)) {
    str = "light";
  }
  VisualEffectViewDefault;
  const merged1 = Object.assign(merged);
  return <tmp2Result ref={ref} blurTheme={str} />;
};
