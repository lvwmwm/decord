// Module ID: 16859
// Function ID: 16860
// Name: VoicePanelIconButton
// Dependencies: [19, 21, 6494, 7363, 2]

// Module 16859 (VoicePanelIconButton)
import Fragment from "Fragment" /* 21 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 6494 */;
import IconButton2 from "IconButton" /* 7363 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(react.forwardRef((overrideVariant, ref) => {
  let layout;
  let style;
  let str = overrideVariant.overrideVariant;
  ({ style, layout } = overrideVariant);
  const merged = Object.assign(overrideVariant, Object.assign({ style: 0, overrideVariant: 0, layout: 0 }));
  ReanimatedNativeViewDefault;
  const IconButton = IconButton2.IconButton;
  const merged1 = Object.assign(merged);
  if (str == null) {
    str = "secondary-overlay";
  }
  return <tmp3 ref={arg1} style={style} layout={layout}>{null}</tmp3>;
}));
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelIconButton.tsx");

export default memoResult;
