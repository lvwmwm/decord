// Module ID: 11303
// Function ID: 11304
// Name: PinotChannelLabel
// Dependencies: [19, 17, 21, 1114, 3157, 11304, 11305, 2]
// Exports: PinotChannelLabel, getPinotChannelLabelText

// Module 11303 (PinotChannelLabel)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1114 */;
import _modDef3157 from "module_3157" /* 3157 */;
import PinotChannelLabelAnchor from "PinotChannelLabelAnchor" /* 11304 */;
import ChannelHeaderShared from "ChannelHeaderShared" /* 11305 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/pinot/native/PinotChannelLabel.tsx");

export function getPinotChannelLabelText() {
  const intl = intl2.intl;
  return intl.string(_modDef3157.uneDIi);
}
export function PinotChannelLabel(channelId) {
  let intl;
  channelId = channelId.channelId;
  const obj = PinotChannelLabelAnchor;
  const pinotChannelLabelAnchor = obj.usePinotChannelLabelAnchor(channelId);
  ({ children: intl.string(_modDef3157.uneDIi) });
  const SubtitleText = ChannelHeaderShared.SubtitleText;
  intl = intl2.intl;
  return <View ref={pinotChannelLabelAnchor.ref} onLayout={pinotChannelLabelAnchor.onLayout} collapsable={false}>{null}</View>;
}
