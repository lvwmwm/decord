// Module ID: 19434
// Function ID: 19435
// Name: VoicePanelIconButton
// Dependencies: [19, 21, 1654, 7944, 2]

// Module 19434 (VoicePanelIconButton)
import Fragment from "Fragment" /* 21 */;
import _modDef1654 from "module_1654" /* 1654 */;
import IconButton2 from "IconButton" /* 7944 */;
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
  const View = _modDef1654.View;
  const IconButton = IconButton2.IconButton;
  const merged1 = Object.assign(merged);
  if (str == null) {
    str = "secondary-overlay";
  }
  return <View ref={ref} style={style} layout={layout}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelIconButton.tsx");

export default memoResult;
