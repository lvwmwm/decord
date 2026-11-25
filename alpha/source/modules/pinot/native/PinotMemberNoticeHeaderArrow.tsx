// Module ID: 11850
// Function ID: 11851
// Name: PinotMemberNoticeHeaderArrow
// Dependencies: [32, 19, 17, 4861, 21, 11849, 5012, 575, 5576, 504, 11851, 11830, 11839, 7912, 2]
// Exports: PinotMemberNoticeHeaderArrow

// Module 11850 (PinotMemberNoticeHeaderArrow)
import nativeDefault from "native" /* 575 */;
import PinotMemberNoticeCaret from "PinotMemberNoticeCaret" /* 11849 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5012 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
({ PixelRatio: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = 10 + PinotMemberNoticeCaret.PINOT_MEMBER_NOTICE_BORDER_WIDTH / 2;
let closure_11 = createStyles.createStyles((height) => {
  let rect;
  let rect1;
  const obj = { anchor: { position: "absolute", top: 0, right: 0, bottom: 0, left: 0, zIndex: 1, overflow: "visible" }, dividerUnderlay: rect, outline: rect1 };
  rect = { position: "absolute", bottom: 0, left: 0, right: 0, height: PinotMemberNoticeCaret.PINOT_MEMBER_NOTICE_BORDER_WIDTH, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
  rect1 = { position: "absolute", bottom: 0, left: 0, right: 0, height, overflow: "hidden" };
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/pinot/native/PinotMemberNoticeHeaderArrow.tsx");

export function PinotMemberNoticeHeaderArrow(channelId) {
  let G;
  let _undefined;
  let c1;
  let center;
  let items2;
  let items3;
  let obj12;
  let onContainerLayout;
  let tmp11;
  let tmp5Result;
  channelId = channelId.channelId;
  importDefault = undefined;
  onContainerLayout = undefined;
  const roundToNearestPixelResult = closure_5.roundToNearestPixel(10 + channelId(onContainerLayout[5]).PINOT_MEMBER_NOTICE_BORDER_WIDTH);
  const tmp4 = closure_11(roundToNearestPixelResult);
  const obj2 = channelId(onContainerLayout[8]);
  const token = obj2.useToken(require("native").colors.BACKGROUND_BASE_LOWER);
  const obj3 = channelId(onContainerLayout[8]);
  const token1 = obj3.useToken(require("native").colors.BACKGROUND_FEEDBACK_MOD_INFO);
  const obj4 = channelId(onContainerLayout[8]);
  const token2 = obj4.useToken(require("native").colors.INLINENOTICE_BORDER_INFO);
  const ref = react.useRef(null);
  [tmp11, c1] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  const items = [ChannelStore];
  const items1 = [channelId];
  const obj5 = channelId(onContainerLayout[9]);
  const stateFromStores = obj5.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const obj6 = channelId(onContainerLayout[10]);
  const isForumChannelSearchActive = obj6.useIsForumChannelSearchActive(channelId);
  const obj7 = channelId(onContainerLayout[11]);
  const visible = obj7.usePinotMemberNotice(stateFromStores, "mobile_channel_header").visible;
  const obj8 = channelId(onContainerLayout[12]);
  const pinotChannelLabelCenter = obj8.usePinotChannelLabelCenter(channelId, ref);
  ({ center, onContainerLayout } = pinotChannelLabelCenter);
  [][0] = onContainerLayout;
  const obj = closure_5;
  const tmp5 = importDefault;
  if (visible) {
    if (!isForumChannelSearchActive) {
      let combined;
      let num = 0;
      if (null != center) {
        num = obj.roundToNearestPixel(center - 8);
      }
      if (null != center) {
        const _HermesInternal2 = HermesInternal;
        const str2 = channelId(onContainerLayout[5]).PINOT_MEMBER_NOTICE_CARET_BORDER;
        combined = "M" + tmp18 + " 10" + str2.replace(/^M/, "L") + "H" + tmp11 - num;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "M0 10H" + tmp11;
      }
      const _HermesInternal3 = HermesInternal;
      const combined1 = "" + combined + "V" + closure_10 + "H" + -num + "Z";
      const obj10 = { style: tmp4.dividerUnderlay };
      const obj9 = { ref, collapsable: false, style: tmp4.anchor, pointerEvents: "none", onLayout: tmp15, children: items2 };
      items2 = [closure_8(closure_6, obj10), ];
      const obj11 = { style: tmp4.outline, children: closure_8(tmp5Result, size) };
      size = { width: tmp11, height: roundToNearestPixelResult, fill: "none", accessible: false, children: closure_9(G, obj12) };
      obj12 = { translateX: num, translateY: roundToNearestPixelResult - closure_10, children: items3 };
      tmp5Result = tmp5(onContainerLayout[13]);
      G = tmp(tmp2[13]).G;
      const obj13 = { d: combined1, fill: token };
      items3 = [closure_8(tmp(tmp2[13]).Path, obj13), , ];
      const obj14 = { d: combined1, fill: token1 };
      items3[1] = closure_8(channelId(onContainerLayout[13]).Path, obj14);
      const obj15 = { d: combined, fill: "none", stroke: token2, strokeWidth: channelId(onContainerLayout[5]).PINOT_MEMBER_NOTICE_BORDER_WIDTH };
      const Path = tmp(tmp2[13]).Path;
      items3[2] = closure_8(Path, obj15);
      items2[1] = closure_8(closure_6, obj11);
      return closure_9(closure_6, obj9);
    }
  }
  return null;
}
