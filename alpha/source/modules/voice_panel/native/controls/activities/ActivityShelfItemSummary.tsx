// Module ID: 19206
// Function ID: 19207
// Name: ActivityShelfItemSummary
// Dependencies: [32, 19, 17, 21, 5009, 575, 5006, 19207, 11565, 1188, 5640, 5619, 5090, 5642, 2]
// Exports: default

// Module 19206 (ActivityShelfItemSummary)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1188 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 5090 */;
import Text_Text from "Text/Text" /* 5619 */;
import ButtonPill from "ButtonPill" /* 5640 */;
import UserSummaryItemDefault from "UserSummaryItem" /* 11565 */;
import useActivityUsersDefault from "useActivityUsers" /* 19207 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import ColorUtils_mod from "ColorUtils" /* 5006 */;
import size from "module_2" /* 2 */;

let ColorUtils;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let tmp2;
const ButtonEllipsis = tmp2(5642);
function ParticipantsSummary(arg0) {
  let applicationId;
  let channelId;
  ({ applicationId, channelId } = arg0);
  const obj = { users: useActivityUsersDefault(applicationId, channelId), max: 5, avatarSize: native.AvatarSizes.REFRESH_MEDIUM_32, withPlusCount: true, style: { marginBottom: 8 }, cutout: { inset: -8 } };
  const tmp2 = UserSummaryItemDefault;
  return hasOwnProperty(tmp2, obj);
}
let View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { ongoingActivityContainer: { position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.4)", alignItems: "center", justifyContent: "center" }, overlayActivityName: obj2, overlayActivityNameText: obj3, loadingTextColor: { color: "transparent" }, ellipsis: { flex: 1, flexShrink: 1, flexGrow: 0, justifyContent: "center", alignItems: "center", top: -12 } };
obj2 = { paddingHorizontal: 12, paddingVertical: 4, borderRadius: nativeDefault.radii.round, backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.64), marginBottom: 8 };
createStyles = createStyles.createStyles;
ColorUtils = ColorUtils_mod;
obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityShelfItemSummary.tsx");

export default function ActivityShelfItemSummary(submitting) {
  let applicationId;
  let applicationName;
  let channelId;
  let items;
  let items1;
  let items2;
  let flag = submitting.submitting;
  ({ channelId, applicationId, applicationName } = submitting);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_7();
  let tmp8Result = flag;
  const obj3 = { style: tmp.overlayActivityName, children: items };
  items = [, ];
  const obj = ButtonPill;
  const obj2 = { style: tmp.ongoingActivityContainer, children: items2 };
  const obj4 = { variant: "text-md/semibold", style: flag ? tmp.loadingTextColor : tmp.overlayActivityNameText, lineClamp: 2, children: applicationName };
  const tmp5 = _slicedToArray(obj.useLoadingStyles(flag, "md"), 2)[1];
  items[0] = hasOwnProperty(Text_Text.Text, obj4);
  const obj5 = { style: items1, children: tmp8Result };
  items1 = [tmp.ellipsis, tmp5];
  View = ReanimatedRexportDefault.View;
  if (tmp8Result) {
    tmp8Result = tmp8(ButtonEllipsis.Ellipsis, { variant: "active", size: "md" });
  }
  items[1] = hasOwnProperty(View, obj5);
  items2 = [metroRequire(View, obj3), hasOwnProperty(ParticipantsSummary, { channelId, applicationId })];
  return metroRequire(View, obj2);
};
