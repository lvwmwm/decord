// Module ID: 11083
// Function ID: 11084
// Name: PinotMemberNoticeHeaderArrow
// Dependencies: [19, 17, 4857, 21, 5005, 587, 558, 576, 504, 11084, 11074, 11078, 2]

// Module 11083 (PinotMemberNoticeHeaderArrow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function PinotMemberNoticeHeaderArrow(channelId) {
  let center;
  let first;
  let onContainerLayout;
  let tmp8;
  let tmp9;
  const obj = channelId(576);
  const cResult = obj.c(13);
  channelId = channelId.channelId;
  const tmp4 = closure_6();
  const ref = react.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function h() {
      return ChannelStore.getChannel(channelId);
    };
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = channelId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
  const tmpResult4 = channelId(11084);
  const isForumChannelSearchActive = tmpResult4.useIsForumChannelSearchActive(channelId);
  const tmpResult5 = channelId(11074);
  const visible = tmpResult5.usePinotMemberNotice(stateFromStores, "mobile_channel_header").visible;
  const tmpResult6 = channelId(11078);
  const pinotChannelLabelCenter = tmpResult6.usePinotChannelLabelCenter(channelId, ref);
  ({ center, onContainerLayout } = pinotChannelLabelCenter);
  let tmp14 = null;
  if (visible) {
    tmp14 = null;
    if (!isForumChannelSearchActive) {
      tmp14 = null;
      if (tmp13) {
        if (cResult[4] === center) {
          if (cResult[5] === tmp4.arrow) {
            if (cResult[6] === tmp4.diamond) {
              let tmp15;
              if (cResult[7] === tmp4.diamondFill) {
                tmp15 = cResult[8];
              }
              if (cResult[9] === onContainerLayout) {
                if (cResult[10] === tmp4.anchor) {
                  let tmp19;
                  if (cResult[11] === tmp15) {
                    tmp19 = cResult[12];
                  }
                  tmp14 = tmp19;
                }
              }
              const tmp22 = <closure_3 ref={ref} collapsable={false} style={tmp4.anchor} pointerEvents="none" onLayout={onContainerLayout}>{tmp15}</closure_3>;
              cResult[9] = onContainerLayout;
              cResult[10] = tmp4.anchor;
              cResult[11] = tmp15;
              cResult[12] = tmp22;
              tmp19 = tmp22;
            }
          }
        }
        let tmp16 = null;
        if (null != center) {
          const items2 = [tmp4.arrow, ];
          const obj4 = { left: center - 8 };
          items2[1] = obj4;
          tmp16 = <closure_3 style={items2}>{null}</closure_3>;
        }
        cResult[4] = center;
        cResult[5] = tmp4.arrow;
        cResult[6] = tmp4.diamond;
        cResult[7] = tmp4.diamondFill;
        cResult[8] = tmp16;
        tmp15 = tmp16;
      }
    }
  }
  return tmp14;
}) : (function PinotMemberNoticeHeaderArrow(channelId) {
  let items2;
  let tmp9Result;
  channelId = channelId.channelId;
  const tmp = closure_6();
  const ref = react.useRef(null);
  const items = [ChannelStore];
  const items1 = [channelId];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const obj2 = channelId(11084);
  const isForumChannelSearchActive = obj2.useIsForumChannelSearchActive(channelId);
  const obj3 = channelId(11074);
  const visible = obj3.usePinotMemberNotice(stateFromStores, "mobile_channel_header").visible;
  const obj4 = channelId(11078);
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
});
size = size_mod;
const result1 = size.fileFinishedImporting("modules/pinot/native/PinotMemberNoticeHeaderArrow.tsx");

export const PinotMemberNoticeHeaderArrow = tmp6;
