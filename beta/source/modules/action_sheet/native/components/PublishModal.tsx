// Module ID: 11165
// Function ID: 11166
// Name: PublishModal
// Dependencies: [32, 19, 17, 21, 4836, 5753, 11166, 1177, 1115, 2]
// Exports: default

// Module 11165 (PublishModal)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import LegacyTokens from "LegacyTokens" /* 5753 */;
import useChannelFollowerStatsDefault from "useChannelFollowerStats" /* 11166 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
({ View: closure_4, ActivityIndicator: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
const obj = { alertContainer: { paddingTop: 16 }, alertLoading: { paddingTop: 62, paddingBottom: 46 }, alertBodyText: obj2 };
obj2 = { marginBottom: 16, fontSize: 16, lineHeight: 24, color: LegacyTokens.DARK_PRIMARY_300_LIGHT_PRIMARY_400 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/action_sheet/native/components/PublishModal.tsx");

export default function PublishModal(channelId) {
  channelId = channelId.channelId;
  const tmp = closure_7();
  const tmp3 = _slicedToArray(useChannelFollowerStatsDefault(channelId), 2);
  const first = tmp3[0];
  if (tmp3[1]) {
    return <React3 style={tmp.alertLoading}><hasOwnProperty animating /></React3>;
  } else {
    let guildsFollowing;
    if (first != null) {
      guildsFollowing = first.guildsFollowing;
    }
    let tmp7 = null != guildsFollowing;
    if (tmp7) {
      let guildsFollowing1;
      if (first != null) {
        guildsFollowing1 = first.guildsFollowing;
      }
      tmp7 = guildsFollowing1 > 0;
    }
    const obj3 = { style: tmp.alertBodyText, children: null };
    const LegacyText = native.LegacyText;
    const intl = intl2.intl;
    if (tmp7) {
      const format = intl.format;
      let num2;
      const GCGrNP = tmp11(1115).t.GCGrNP;
      if (first != null) {
        num2 = first.guildsFollowing;
      }
      if (num2 == null) {
        num2 = 0;
      }
      const obj4 = { numGuildsFollowing: num2 };
      obj3.children = format(GCGrNP, obj4);
    } else {
      obj3.children = intl.string(intl2.t["8FpqOs"]);
    }
    return <tmp10 style={tmp.alertContainer}>{null}</tmp10>;
  }
};
