// Module ID: 19244
// Function ID: 19245
// Name: VoicePanelIconButton
// Dependencies: [19, 21, 1653, 7811, 2]

// Module 19244 (VoicePanelIconButton)
import Fragment from "Fragment" /* 21 */;
import _modDef1653 from "module_1653" /* 1653 */;
import IconButton2 from "IconButton" /* 7811 */;
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
  const View = _modDef1653.View;
  const IconButton = IconButton2.IconButton;
  const merged1 = Object.assign(merged);
  if (str == null) {
    str = "secondary-overlay";
  }
  return <View ref={ref} style={style} layout={layout}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelIconButton.tsx");

export default memoResult;
