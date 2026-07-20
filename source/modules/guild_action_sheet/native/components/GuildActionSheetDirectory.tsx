// Module ID: 12843
// Function ID: 98184
// Name: GuildActionSheetDirectory
// Dependencies: []
// Exports: default

// Module 12843 (GuildActionSheetDirectory)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWER };
obj.container = obj;
obj.actions = {};
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetDirectory.tsx");

export default function GuildActionSheetDirectory(arg0) {
  let expanded;
  let guild;
  ({ guild, expanded } = arg0);
  if (expanded === undefined) {
    expanded = false;
  }
  const tmp = callback3();
  let obj = { scrollable: true, startExpanded: expanded };
  obj = { scrollsToTop: false, style: tmp.container, contentContainerStyle: { paddingBottom: importDefault(dependencyMap[5])().bottom } };
  const items = [callback(importDefault(dependencyMap[8]), { guild }), ];
  obj = { style: tmp.actions };
  const items1 = [callback(arg1(dependencyMap[9]).GuildActionSheetDirectoryActions, { guild }), callback(arg1(dependencyMap[9]).GuildDeveloperOptionAction, { guild })];
  obj.children = items1;
  items[1] = callback2(View, obj);
  obj.children = items;
  obj.children = callback2(arg1(dependencyMap[7]).BottomSheetScrollView, obj);
  return callback(arg1(dependencyMap[6]).BottomSheet, obj);
};
