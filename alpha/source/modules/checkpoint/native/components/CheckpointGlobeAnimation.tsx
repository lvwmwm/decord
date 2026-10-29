// Module ID: 13441
// Function ID: 13442
// Name: CheckpointGlobeAnimation
// Dependencies: [21, 558, 576, 13442, 13443, 13444, 2]

// Module 13441 (CheckpointGlobeAnimation)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import CheckpointApngPlayerDefault from "CheckpointApngPlayer" /* 13442 */;
import _modDef13443 from "module_13443" /* 13443 */;
import _modDef13444 from "module_13444" /* 13444 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointGlobeAnimation(style) {
  let tmp3;
  const obj = react;
  const cResult = obj.c(2);
  style = style.style;
  if (cResult[0] !== style) {
    CheckpointApngPlayerDefault;
    const tmp7 = <tmp6 animatedUri={_modDef13443} staticUri={_modDef13444} style={style} />;
    cResult[0] = style;
    cResult[1] = tmp7;
    tmp3 = tmp7;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function CheckpointGlobeAnimation(style) {
  style = style.style;
  CheckpointApngPlayerDefault;
  return <tmp animatedUri={_modDef13443} staticUri={_modDef13444} style={style} />;
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointGlobeAnimation.tsx");

export default tmp2;
