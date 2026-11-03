// Module ID: 11467
// Function ID: 11468
// Name: PinotChannelLabel
// Dependencies: [19, 17, 21, 1113, 3287, 11468, 11469, 11474, 2]
// Exports: PinotChannelLabel, getPinotChannelLabelText

// Module 11467 (PinotChannelLabel)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef3287 from "module_3287" /* 3287 */;
import PinotChannelLabelAnchor from "PinotChannelLabelAnchor" /* 11468 */;
import useAttachPinotMemberCoachmark from "useAttachPinotMemberCoachmark" /* 11469 */;
import ChannelHeaderShared from "ChannelHeaderShared" /* 11474 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/pinot/native/PinotChannelLabel.tsx");

export function getPinotChannelLabelText() {
  const intl = intl2.intl;
  return intl.string(_modDef3287.uneDIi);
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
  ({ children: intl.string(_modDef3287.uneDIi) });
  const SubtitleText = ChannelHeaderShared.SubtitleText;
  intl = intl2.intl;
  return <View ref={react.useCallback((current) => {
    ref1.current = current;
    ref(current);
  }, items)} onLayout={onLayout} collapsable={false}>{null}</View>;
}
