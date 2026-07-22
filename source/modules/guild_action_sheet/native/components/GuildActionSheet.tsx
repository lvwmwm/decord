// Module ID: 12865
// Function ID: 98321
// Dependencies: []

// Module 12865
const View = arg1(dependencyMap[1]).View;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[4]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.container = obj;
obj.actions = {};
let closure_6 = arg1(dependencyMap[3]).createStyles(obj);
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(function GuildActionSheet(arg0) {
  let bottomSheetClose;
  let bottomSheetRef;
  let expanded;
  let guild;
  ({ guild, expanded } = arg0);
  if (expanded === undefined) {
    expanded = false;
  }
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  bottomSheetRef = obj.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
  obj = { ref: bottomSheetRef, startExpanded: expanded };
  obj = { scrollsToTop: false, style: tmp.container };
  const obj1 = {};
  let num = 0;
  if (obj5.isAndroid()) {
    num = 16;
  }
  obj1.paddingBottom = importDefault(dependencyMap[5])().bottom + num;
  obj.contentContainerStyle = obj1;
  const items = [callback(importDefault(dependencyMap[10]), { guild }), callback(importDefault(dependencyMap[11]), { guild }), , ];
  const obj2 = { style: tmp.actions };
  const items1 = [callback(arg1(dependencyMap[12]).GuildUnreadAction, { guild }), callback(importDefault(dependencyMap[13]), { guild }), callback(arg1(dependencyMap[12]).GuildActionSheetPrimaryActions, { guild }), callback(arg1(dependencyMap[12]).GuildActionSheetSecondaryActions, { guild }), callback(arg1(dependencyMap[12]).GuildDeveloperOptionAction, { guild }), callback(importDefault(dependencyMap[14]), { guildId: guild.id })];
  obj2.children = items1;
  items[2] = callback2(View, obj2);
  items[3] = callback(arg1(dependencyMap[15]).ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetClose });
  obj.children = items;
  obj.children = callback2(arg1(dependencyMap[8]).BottomSheetScrollView, obj);
  return callback(arg1(dependencyMap[7]).BottomSheet, obj);
});
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheet.tsx");

export default memoResult;
