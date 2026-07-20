// Module ID: 16291
// Function ID: 125744
// Name: GuildRoleSubscriptionTierArchiveOrDeleteActionSheet
// Dependencies: []
// Exports: default

// Module 16291 (GuildRoleSubscriptionTierArchiveOrDeleteActionSheet)
importAll(dependencyMap[0]);
({ TouchableOpacity: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH, padding: 24 };
obj.container = obj;
obj.cancel = { alignSelf: "center" };
let closure_7 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionTierArchiveOrDeleteActionSheet.tsx");

export default function GuildRoleSubscriptionTierArchiveOrDeleteActionSheet(groupListingId) {
  let archiving;
  let buttonText;
  let descriptionText;
  let editStateId;
  let guildId;
  let handleArchiveOrDelete;
  let headerText;
  groupListingId = groupListingId.groupListingId;
  ({ editStateId, guildId } = groupListingId);
  const tmp = callback2();
  importDefault(dependencyMap[6])(null != groupListingId, "group listing id cannot be null");
  const tmp3 = importDefault(dependencyMap[7])(guildId, groupListingId, editStateId);
  let deleting = tmp3.deleting;
  ({ headerText, buttonText, descriptionText, handleArchiveOrDelete, archiving } = tmp3);
  let obj = { backdropOpacity: 0.8 };
  obj = { style: tmp.container };
  obj = { contentContainerStyle: { paddingBottom: importDefault(dependencyMap[5])().bottom } };
  const items = [callback(arg1(dependencyMap[10]).Text, { children: headerText }), callback(arg1(dependencyMap[11]).Spacer, { size: 12 }), , , , , ];
  const obj1 = { INTEGRATION_CREATE: "AutomodMentionRaidLimit", ConstraintReasonCode: "%URIError%", children: descriptionText };
  items[2] = callback(arg1(dependencyMap[10]).Text, obj1);
  items[3] = callback(arg1(dependencyMap[11]).Spacer, { size: 24 });
  const obj2 = { text: buttonText, onPress: handleArchiveOrDelete };
  if (!deleting) {
    deleting = archiving;
  }
  obj2.disabled = deleting;
  items[4] = callback(arg1(dependencyMap[12]).Button, obj2);
  items[5] = callback(arg1(dependencyMap[11]).Spacer, { size: 24 });
  const obj3 = {
    onPress() {
      return callback(closure_2[13]).hideActionSheet();
    },
    style: tmp.cancel,
    activeOpacity: 0.5
  };
  const obj4 = { INTEGRATION_CREATE: "r", ConstraintReasonCode: "timings" };
  const intl = arg1(dependencyMap[14]).intl;
  obj4.children = intl.string(arg1(dependencyMap[14]).t.ETE/oC);
  obj3.children = callback(arg1(dependencyMap[10]).Text, obj4);
  items[6] = callback(closure_3, obj3);
  obj.children = items;
  obj.children = closure_6(arg1(dependencyMap[9]).BottomSheetScrollView, obj);
  obj.children = callback(closure_4, obj);
  return callback(arg1(dependencyMap[8]).BottomSheet, obj);
};
