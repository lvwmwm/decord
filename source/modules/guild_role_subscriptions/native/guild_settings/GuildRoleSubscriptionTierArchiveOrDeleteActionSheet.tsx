// Module ID: 16306
// Function ID: 125836
// Name: GuildRoleSubscriptionTierArchiveOrDeleteActionSheet
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 16306 (GuildRoleSubscriptionTierArchiveOrDeleteActionSheet)
import "result";
import result from "result";
import result from "result";
import result from "result";
import result from "result";

({ TouchableOpacity: closure_3, View: closure_4 } = result);
({ jsx: closure_5, jsxs: closure_6 } = result);
result = {};
result = { backgroundColor: require("result").colors.BACKGROUND_SURFACE_HIGH, padding: 24 };
result.container = result;
result.cancel = { alignSelf: "center" };
result = result.createStyles(result);
result = result.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionTierArchiveOrDeleteActionSheet.tsx");

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
  const tmp = result();
  importDefault(dependencyMap[6])(null != groupListingId, "group listing id cannot be null");
  const tmp3 = importDefault(dependencyMap[7])(guildId, groupListingId, editStateId);
  let deleting = tmp3.deleting;
  ({ headerText, buttonText, descriptionText, handleArchiveOrDelete, archiving } = tmp3);
  let obj = { backdropOpacity: 0.8 };
  obj = { style: tmp.container };
  obj = { contentContainerStyle: { paddingBottom: importDefault(dependencyMap[5])().bottom } };
  const items = [callback(arg1(dependencyMap[10]).Text, { children: headerText }), callback(arg1(dependencyMap[11]).Spacer, { size: 12 }), , , , , ];
  const obj1 = { hasMaxConnections: "editingMessageId", isBoostOnlySubscription: "turquoise", children: descriptionText };
  items[2] = callback(arg1(dependencyMap[10]).Text, obj1);
  items[3] = callback(arg1(dependencyMap[11]).Spacer, { size: 24 });
  const obj2 = { ddd: "<string:1091633153>", ind: "/assets/.cache/intl/bW9kdWxlcy9jb2xsZWN0aWJsZXMvd2Vi", ty: "<string:1430864641>", text: buttonText, onPress: handleArchiveOrDelete };
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
  const obj4 = { hasMaxConnections: 1626341378, isBoostOnlySubscription: -1035927550 };
  const intl = arg1(dependencyMap[14]).intl;
  obj4.children = intl.string(arg1(dependencyMap[14]).t.ETE/oC);
  obj3.children = callback(arg1(dependencyMap[10]).Text, obj4);
  items[6] = callback(closure_3, obj3);
  obj.children = items;
  obj.children = closure_6(arg1(dependencyMap[9]).BottomSheetScrollView, obj);
  obj.children = callback(closure_4, obj);
  return callback(arg1(dependencyMap[8]).BottomSheet, obj);
};
