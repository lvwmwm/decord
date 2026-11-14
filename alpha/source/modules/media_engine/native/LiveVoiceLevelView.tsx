// Module ID: 14856
// Function ID: 14857
// Name: LiveVoiceLevelView
// Dependencies: [19, 21, 14857, 2]
// Exports: default

// Module 14856 (LiveVoiceLevelView)
import Fragment from "Fragment" /* 21 */;
import LiveVoiceLevelViewNativeComponentDefault from "LiveVoiceLevelViewNativeComponent" /* 14857 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/media_engine/native/LiveVoiceLevelView.tsx");

export default function LiveVoiceLevelView(staticLevel) {
  let num;
  staticLevel = staticLevel.staticLevel;
  const merged = Object.assign(staticLevel, Object.assign({ staticLevel: 0 }));
  const obj = { staticLevel: num };
  const tmp3 = LiveVoiceLevelViewNativeComponentDefault;
  const merged1 = Object.assign(merged);
  num = -1;
  const tmp2 = jsx;
  if (null != staticLevel) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(Math.max(staticLevel, 0), 1);
  }
  return tmp2(tmp3, obj);
};
