// Module ID: 12255
// Function ID: 12256
// Name: PinotMemberNoticeHeaderArrow
// Dependencies: [19, 17, 5092, 21, 5243, 5839, 575, 504, 12256, 12236, 12245, 8197, 12258, 2]
// Exports: PinotMemberNoticeHeaderArrow

// Module 12255 (PinotMemberNoticeHeaderArrow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let tmp4;
const inlineStylesDefault = tmp4(8197);
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ anchor: { position: "absolute", top: 0, right: 0, bottom: 0, left: 0, zIndex: 1, overflow: "visible" }, arrow: { position: "absolute", bottom: -1, width: 16, height: 10, overflow: "hidden" } });
let size = size_mod;
const result = size.fileFinishedImporting("modules/pinot/native/PinotMemberNoticeHeaderArrow.tsx");

export function PinotMemberNoticeHeaderArrow(channelId) {
  let items2;
  let items3;
  let tmp15Result;
  let tmp4Result;
  channelId = channelId.channelId;
  const tmp = closure_8();
  const obj = channelId(5839);
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
  const obj2 = channelId(5839);
  const token1 = obj2.useToken(nativeDefault.colors.BACKGROUND_FEEDBACK_MOD_INFO);
  const obj3 = channelId(5839);
  const token2 = obj3.useToken(nativeDefault.colors.BORDER_SUBTLE);
  const ref = react.useRef(null);
  const items = [ChannelStore];
  const items1 = [channelId];
  const obj4 = channelId(504);
  const stateFromStores = obj4.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const obj5 = channelId(12256);
  const isForumChannelSearchActive = obj5.useIsForumChannelSearchActive(channelId);
  const obj6 = channelId(12236);
  const visible = obj6.usePinotMemberNotice(stateFromStores, "mobile_channel_header").visible;
  const obj7 = channelId(12245);
  const pinotChannelLabelCenter = obj7.usePinotChannelLabelCenter(channelId, ref);
  const center = pinotChannelLabelCenter.center;
  let tmp15Result2 = null;
  if (visible) {
    tmp15Result2 = null;
    if (!isForumChannelSearchActive) {
      tmp15Result2 = null;
      if (tmp12) {
        const obj8 = { ref, collapsable: false, style: tmp.anchor, pointerEvents: "none", onLayout: tmp13, children: tmp15Result };
        tmp15Result = null;
        if (null != center) {
          const obj9 = { style: items2, children: closure_7(tmp4Result, size) };
          items2 = [tmp.arrow, ];
          const obj10 = { left: center - 8 };
          items2[1] = obj10;
          size = { width: 16, height: 10, viewBox: "0 0 16 10", fill: "none", accessible: false, children: items3 };
          const obj11 = { d: channelId(12258).PINOT_MEMBER_NOTICE_CARET_FILL, fill: token };
          tmp4Result = inlineStylesDefault;
          const Path = tmp2(8197).Path;
          items3 = [closure_6(Path, obj11), , ];
          const obj12 = { d: channelId(12258).PINOT_MEMBER_NOTICE_CARET_FILL, fill: token1 };
          const Path2 = tmp2(8197).Path;
          items3[1] = closure_6(Path2, obj12);
          const obj13 = { d: channelId(12258).PINOT_MEMBER_NOTICE_CARET_BORDER, fill: "none", stroke: token2 };
          const Path3 = tmp2(8197).Path;
          items3[2] = closure_6(Path3, obj13);
          tmp15Result = tmp15(tmp16, obj9);
        }
        tmp15Result2 = tmp15(tmp16, obj8);
      }
    }
  }
  return tmp15Result2;
}
