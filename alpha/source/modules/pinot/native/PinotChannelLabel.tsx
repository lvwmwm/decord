// Module ID: 11470
// Function ID: 11471
// Name: PinotChannelLabel
// Dependencies: [19, 17, 21, 1113, 3316, 11471, 11472, 11477, 2]
// Exports: PinotChannelLabel, getPinotChannelLabelText

// Module 11470 (PinotChannelLabel)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef3316 from "module_3316" /* 3316 */;
import PinotChannelLabelAnchor from "PinotChannelLabelAnchor" /* 11471 */;
import useAttachPinotMemberCoachmark from "useAttachPinotMemberCoachmark" /* 11472 */;
import ChannelHeaderShared from "ChannelHeaderShared" /* 11477 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/pinot/native/PinotChannelLabel.tsx");

export function getPinotChannelLabelText() {
  const intl = intl2.intl;
  return intl.string(_modDef3316.uneDIi);
}
export function PinotChannelLabel(channel) {
  let intl;
  channel = channel.channel;
  const obj = PinotChannelLabelAnchor;
  const pinotChannelLabelAnchor = obj.usePinotChannelLabelAnchor(channel.id);
  const ref = pinotChannelLabelAnchor.ref;
  const onLayout = pinotChannelLabelAnchor.onLayout;
  const ref1 = react.useRef(null);
  const obj2 = useAttachPinotMemberCoachmark;
  const attachPinotMemberCoachmark = obj2.useAttachPinotMemberCoachmark(ref1, channel, "bottom");
  const items = [ref];
  ({ children: intl.string(_modDef3316.uneDIi) });
  const SubtitleText = ChannelHeaderShared.SubtitleText;
  intl = intl2.intl;
  return <View ref={react.useCallback((current) => {
    ref1.current = current;
    ref(current);
  }, items)} onLayout={onLayout} collapsable={false}>{null}</View>;
}
