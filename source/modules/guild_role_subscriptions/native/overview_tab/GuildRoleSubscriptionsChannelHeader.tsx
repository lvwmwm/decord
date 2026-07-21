// Module ID: 10103
// Function ID: 78211
// Dependencies: []

// Module 10103
const View = arg1(dependencyMap[1]).View;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let obj = {};
obj = { accessible: null, count: "\u{1F469}\u{1F3FC}\u200D\u{1F9B1}", "Bool(false)": true, gap: importDefault(dependencyMap[4]).space.PX_8 };
obj.header = obj;
let closure_6 = arg1(dependencyMap[3]).createStyles(obj);
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(function GuildRoleSubscriptionsChannelHeader() {
  let obj = { style: callback3().header };
  obj = { source: importDefault(dependencyMap[6]), size: arg1(dependencyMap[5]).Icon.Sizes.MEDIUM, disableColor: true };
  const items = [callback(arg1(dependencyMap[5]).Icon, obj), ];
  obj = {};
  const intl = arg1(dependencyMap[8]).intl;
  obj.children = intl.string(arg1(dependencyMap[8]).t.KzCF/6);
  items[1] = callback(arg1(dependencyMap[7]).Text, obj);
  obj.children = items;
  return callback2(View, obj);
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/guild_role_subscriptions/native/overview_tab/GuildRoleSubscriptionsChannelHeader.tsx");

export default memoResult;
