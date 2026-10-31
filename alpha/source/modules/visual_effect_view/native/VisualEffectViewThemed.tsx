// Module ID: 8818
// Function ID: 8819
// Name: VisualEffectViewThemed
// Dependencies: [19, 21, 5253, 5021, 5600, 2]
// Exports: default

// Module 8818 (VisualEffectViewThemed)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 5021 */;
import useThemeDefault from "useTheme" /* 5253 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp2;
const VisualEffectViewDefault = tmp2(5600);
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
