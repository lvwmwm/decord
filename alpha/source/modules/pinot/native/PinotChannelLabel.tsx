// Module ID: 11894
// Function ID: 11895
// Name: PinotChannelLabel
// Dependencies: [19, 17, 21, 5043, 1112, 3563, 11895, 11896, 11901, 2]
// Exports: PinotChannelLabel, getPinotChannelLabelText

// Module 11894 (PinotChannelLabel)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import _modDef3563 from "module_3563" /* 3563 */;
import PinotChannelLabelAnchor from "PinotChannelLabelAnchor" /* 11895 */;
import useAttachPinotMemberCoachmark from "useAttachPinotMemberCoachmark" /* 11896 */;
import ChannelHeaderShared from "ChannelHeaderShared" /* 11901 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((marginStart) => {
  const obj = { label: obj2 };
  return obj;
});
const result = size.fileFinishedImporting("modules/pinot/native/PinotChannelLabel.tsx");

export function getPinotChannelLabelText() {
  const intl = intl2.intl;
  return intl.string(_modDef3563.uneDIi);
}
export function PinotChannelLabel(arg0) {
  let channel;
  let insetStart;
  let intl;
  ({ channel, insetStart } = arg0);
  if (insetStart === undefined) {
    insetStart = 0;
  }
  const tmp = closure_6(insetStart);
  const obj = PinotChannelLabelAnchor;
  const pinotChannelLabelAnchor = obj.usePinotChannelLabelAnchor(channel.id);
  const ref = pinotChannelLabelAnchor.ref;
  const onLayout = pinotChannelLabelAnchor.onLayout;
  const ref1 = react.useRef(null);
  const obj2 = useAttachPinotMemberCoachmark;
  const attachPinotMemberCoachmark = obj2.useAttachPinotMemberCoachmark(ref1, channel, "bottom");
  const items = [ref];
  ({ children: intl.string(_modDef3563.uneDIi) });
  const SubtitleText = ChannelHeaderShared.SubtitleText;
  intl = intl2.intl;
  return <View ref={react.useCallback((current) => {
    ref1.current = current;
    ref(current);
  }, items)} onLayout={onLayout} collapsable={false} style={tmp.label}>{null}</View>;
}
