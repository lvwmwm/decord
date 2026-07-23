// Module ID: 15830
// Function ID: 122256
// Name: ParticipantsSummary
// Dependencies: [57, 31, 27, 33, 4130, 689, 3974, 15831, 9994, 1273, 4552, 4126, 3991, 4558, 2]
// Exports: default

// Module 15830 (ParticipantsSummary)
import _slicedToArray from "_slicedToArray";
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import hexToRgb from "hexToRgb";

let closure_5;
let closure_6;
const require = arg1;
function ParticipantsSummary(arg0) {
  let applicationId;
  let channelId;
  ({ applicationId, channelId } = arg0);
  const obj = { users: importDefault(15831)(applicationId, channelId), max: 5 };
  const tmp = importDefault(15831)(applicationId, channelId);
  obj.avatarSize = require(1273) /* Button */.AvatarSizes.REFRESH_MEDIUM_32;
  obj.withPlusCount = true;
  obj.style = { marginBottom: 8 };
  obj.cutout = { inset: -8 };
  return callback2(importDefault(9994), obj);
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { ongoingActivityContainer: { position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.4)", alignItems: "center", justifyContent: "center" } };
_createForOfIteratorHelperLoose = { paddingHorizontal: 12, paddingVertical: 4, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: null, marginBottom: 8 };
_createForOfIteratorHelperLoose.backgroundColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK, 0.64);
_createForOfIteratorHelperLoose.overlayActivityName = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.overlayActivityNameText = { color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose.loadingTextColor = { color: "transparent" };
_createForOfIteratorHelperLoose.ellipsis = { flex: 1, flexShrink: 1, flexGrow: 0, justifyContent: "center", alignItems: "center", top: -12 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityShelfItemSummary.tsx");

export default function ActivityShelfItemSummary(submitting) {
  let applicationId;
  let applicationName;
  let channelId;
  let flag = submitting.submitting;
  ({ channelId, applicationId, applicationName } = submitting);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(4552) /* PillWrapper */;
  obj = { style: tmp.ongoingActivityContainer };
  obj = { style: tmp.overlayActivityName };
  const obj1 = { variant: "text-md/semibold", style: flag ? tmp.loadingTextColor : tmp.overlayActivityNameText, lineClamp: 2, children: applicationName };
  const items = [callback2(require(4126) /* Text */.Text, obj1), ];
  const obj2 = { style: items1 };
  items1 = [tmp.ellipsis, callback(obj.useLoadingStyles(flag, "md"), 2)[1]];
  if (flag) {
    flag = callback2(require(4558) /* EllipsisCircle */.Ellipsis, { variant: "active", size: "md" });
  }
  obj2.children = flag;
  items[1] = callback2(importDefault(3991).View, obj2);
  obj.children = items;
  const items2 = [closure_6(View, obj), callback2(ParticipantsSummary, { channelId, applicationId })];
  obj.children = items2;
  return closure_6(View, obj);
};
