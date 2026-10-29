// Module ID: 11077
// Function ID: 11078
// Name: PinotChannelLabel
// Dependencies: [19, 17, 21, 1125, 3156, 558, 576, 11078, 11079, 2]
// Exports: getPinotChannelLabelText

// Module 11077 (PinotChannelLabel)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1125 */;
import _modDef3156 from "module_3156" /* 3156 */;
import PinotChannelLabelAnchor from "PinotChannelLabelAnchor" /* 11078 */;
import ChannelHeaderShared from "ChannelHeaderShared" /* 11079 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
function getPinotChannelLabelText() {
  const intl = intl2.intl;
  return intl.string(_modDef3156.uneDIi);
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function PinotChannelLabel(channelId) {
  let first;
  let onLayout;
  let ref;
  const obj = react2;
  const cResult = obj.c(4);
  channelId = channelId.channelId;
  const obj2 = PinotChannelLabelAnchor;
  const pinotChannelLabelAnchor = obj2.usePinotChannelLabelAnchor(channelId);
  ({ ref, onLayout } = pinotChannelLabelAnchor);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const SubtitleText = tmp(11079).SubtitleText;
    const intl = tmp(1125).intl;
    const tmp8 = <SubtitleText>{intl.string(_modDef3156.uneDIi)}</SubtitleText>;
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === onLayout) {
    let tmp9;
    if (cResult[2] === ref) {
      tmp9 = cResult[3];
    }
    return tmp9;
  }
  const tmp10 = <View ref={ref} onLayout={onLayout} collapsable={false}>{first}</View>;
  cResult[1] = onLayout;
  cResult[2] = ref;
  cResult[3] = tmp10;
  tmp9 = tmp10;
}) : (function PinotChannelLabel(channelId) {
  let intl;
  channelId = channelId.channelId;
  const obj = PinotChannelLabelAnchor;
  const pinotChannelLabelAnchor = obj.usePinotChannelLabelAnchor(channelId);
  ({ children: intl.string(_modDef3156.uneDIi) });
  const SubtitleText = ChannelHeaderShared.SubtitleText;
  intl = intl2.intl;
  return <View ref={pinotChannelLabelAnchor.ref} onLayout={pinotChannelLabelAnchor.onLayout} collapsable={false}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/pinot/native/PinotChannelLabel.tsx");

export { getPinotChannelLabelText };
export const PinotChannelLabel = tmp3;
