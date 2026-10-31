// Module ID: 19143
// Function ID: 19144
// Name: VoicePanelIconButton
// Dependencies: [19, 21, 7241, 8028, 2]

// Module 19143 (VoicePanelIconButton)
import Fragment from "Fragment" /* 21 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 7241 */;
import IconButton2 from "IconButton" /* 8028 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(function VoicePanelIconButton(overrideVariant) {
  let layout;
  let ref;
  let style;
  let str = overrideVariant.overrideVariant;
  ({ style, layout, ref } = overrideVariant);
  const merged = Object.assign(overrideVariant, Object.assign({ style: 0, overrideVariant: 0, layout: 0, ref: 0 }));
  ReanimatedNativeViewDefault;
  const IconButton = IconButton2.IconButton;
  const merged1 = Object.assign(merged);
  if (str == null) {
    str = "secondary-overlay";
  }
  return <tmp3 ref={ref} style={style} layout={layout}>{null}</tmp3>;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelIconButton.tsx");

export default memoResult;
