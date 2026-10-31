// Module ID: 11345
// Function ID: 11346
// Name: PinotMemberNoticeHeaderArrow
// Dependencies: [19, 17, 4863, 21, 5014, 575, 504, 11346, 11322, 11331, 2]
// Exports: PinotMemberNoticeHeaderArrow

// Module 11345 (PinotMemberNoticeHeaderArrow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let StyleSheet;
let c3;
let items;
let obj2;
let size;
({ View: c3, StyleSheet } = react_native);
const jsx = Fragment.jsx;
const result = 8 * Math.SQRT2;
let createStyles = createStyles_mod;
let obj = { anchor: { position: "absolute", top: 0, right: 0, bottom: 0, left: 0, zIndex: 1, overflow: "visible" }, arrow: { position: "absolute", bottom: -1, width: 16, height: 9, overflow: "hidden" }, diamond: size, diamondFill: obj2 };
size = { position: "absolute", top: 9 - result / 2, left: (16 - result) / 2, width: result, height: result, transform: items, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_FEEDBACK_INFO, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
items = [{ rotate: "45deg" }];
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_6 = createStyles(obj);
size = size_mod;
const result1 = size.fileFinishedImporting("modules/pinot/native/PinotMemberNoticeHeaderArrow.tsx");

export function PinotMemberNoticeHeaderArrow(channelId) {
  let items2;
  let tmp9Result;
  channelId = channelId.channelId;
  const tmp = closure_6();
  const ref = react.useRef(null);
  const items = [ChannelStore];
  const items1 = [channelId];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const obj2 = channelId(11346);
  const isForumChannelSearchActive = obj2.useIsForumChannelSearchActive(channelId);
  const obj3 = channelId(11322);
  const visible = obj3.usePinotMemberNotice(stateFromStores, "mobile_channel_header").visible;
  const obj4 = channelId(11331);
  const pinotChannelLabelCenter = obj4.usePinotChannelLabelCenter(channelId, ref);
  const center = pinotChannelLabelCenter.center;
  let tmp9Result2 = null;
  if (visible) {
    tmp9Result2 = null;
    if (!isForumChannelSearchActive) {
      tmp9Result2 = null;
      if (tmp6) {
        const obj5 = { ref, collapsable: false, style: tmp.anchor, pointerEvents: "none", onLayout: tmp7, children: tmp9Result };
        tmp9Result = null;
        if (null != center) {
          const obj6 = { style: items2, children: null };
          items2 = [tmp.arrow, ];
          const obj7 = { left: center - 8 };
          items2[1] = obj7;
          tmp9Result = tmp9(tmp10, obj6);
        }
        tmp9Result2 = tmp9(tmp10, obj5);
      }
    }
  }
  return tmp9Result2;
}
