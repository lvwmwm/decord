// Module ID: 15713
// Function ID: 120083
// Name: ParticipantsSummary
// Dependencies: []
// Exports: default

// Module 15713 (ParticipantsSummary)
function ParticipantsSummary(arg0) {
  let applicationId;
  let channelId;
  ({ applicationId, channelId } = arg0);
  const obj = { users: importDefault(dependencyMap[7])(applicationId, channelId), max: 5 };
  const tmp = importDefault(dependencyMap[7])(applicationId, channelId);
  obj.avatarSize = arg1(dependencyMap[9]).AvatarSizes.REFRESH_MEDIUM_32;
  obj.withPlusCount = true;
  obj.style = { marginBottom: 8 };
  obj.cutout = { inset: -8 };
  return callback2(importDefault(dependencyMap[8]), obj);
}
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { ongoingActivityContainer: { <string:1382275249>: "<string:1959478507>", <string:2899594842>: "<string:3942907907>", <string:2985086053>: "<string:1959460866>", <string:1515299067>: "<string:3942907907>", <string:3972817998>: null, <string:3562103379>: null } };
obj = { MAX_GROUP_DM_STAFF_PARTICIPANTS: true, Uuqbcm: true, 	: true, ReverseOrderedTiers: true, embed: true, borderRadius: importDefault(dependencyMap[5]).radii.round };
const tmp3 = arg1(dependencyMap[3]);
obj.backgroundColor = arg1(dependencyMap[6]).hexWithOpacity(importDefault(dependencyMap[5]).unsafe_rawColors.BLACK, 0.64);
obj.overlayActivityName = obj;
const obj4 = arg1(dependencyMap[6]);
obj.overlayActivityNameText = { color: importDefault(dependencyMap[5]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.loadingTextColor = { color: "transparent" };
obj.ellipsis = {};
let closure_7 = obj.createStyles(obj);
const obj1 = { color: importDefault(dependencyMap[5]).colors.MOBILE_TEXT_HEADING_PRIMARY };
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityShelfItemSummary.tsx");

export default function ActivityShelfItemSummary(submitting) {
  let applicationId;
  let applicationName;
  let channelId;
  let flag = submitting.submitting;
  ({ channelId, applicationId, applicationName } = submitting);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback3();
  let obj = arg1(dependencyMap[10]);
  obj = { style: tmp.ongoingActivityContainer };
  obj = { style: tmp.overlayActivityName };
  const items = [callback2(arg1(dependencyMap[11]).Text, { style: flag ? tmp.loadingTextColor : tmp.overlayActivityNameText, children: applicationName }), ];
  const obj2 = { style: items1 };
  const items1 = [tmp.ellipsis, callback(obj.useLoadingStyles(flag, "md"), 2)[1]];
  if (flag) {
    flag = callback2(arg1(dependencyMap[13]).Ellipsis, {});
  }
  obj2.children = flag;
  items[1] = callback2(importDefault(dependencyMap[12]).View, obj2);
  obj.children = items;
  const items2 = [closure_6(View, obj), callback2(ParticipantsSummary, { channelId, applicationId })];
  obj.children = items2;
  return closure_6(View, obj);
};
