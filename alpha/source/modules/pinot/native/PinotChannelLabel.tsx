// Module ID: 12244
// Function ID: 12245
// Name: PinotChannelLabel
// Dependencies: [19, 17, 21, 1113, 3337, 12245, 12246, 12251, 2]
// Exports: PinotChannelLabel, getPinotChannelLabelText

// Module 12244 (PinotChannelLabel)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef3337 from "module_3337" /* 3337 */;
import PinotChannelLabelAnchor from "PinotChannelLabelAnchor" /* 12245 */;
import useAttachPinotMemberCoachmark from "useAttachPinotMemberCoachmark" /* 12246 */;
import ChannelHeaderShared from "ChannelHeaderShared" /* 12251 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/pinot/native/PinotChannelLabel.tsx");

export function getPinotChannelLabelText() {
  const intl = intl2.intl;
  return intl.string(_modDef3337.uneDIi);
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
  ({ children: intl.string(_modDef3337.uneDIi) });
  const SubtitleText = ChannelHeaderShared.SubtitleText;
  intl = intl2.intl;
  return <View ref={react.useCallback((current) => {
    ref1.current = current;
    ref(current);
  }, items)} onLayout={onLayout} collapsable={false}>{null}</View>;
}
