// Module ID: 11459
// Function ID: 89279
// Dependencies: []

// Module 11459
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const TextAreaCta = arg1(dependencyMap[3]).TextAreaCta;
({ AnalyticEvents: closure_7, JoinGuildSources: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj1 = arg1(dependencyMap[6]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGHEST, borderRadius: importDefault(dependencyMap[7]).modules.mobile.TABLE_ROW_BORDER_RADIUS, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_12, paddingVertical: importDefault(dependencyMap[7]).space.PX_12, gap: importDefault(dependencyMap[7]).space.PX_12, borderColor: importDefault(dependencyMap[7]).colors.BORDER_SUBTLE, borderWidth: 1 };
const merged = Object.assign(importDefault(dependencyMap[7]).shadows.SHADOW_HIGH);
obj.cardContainer = obj;
obj1 = { "Null": 7, "Null": 370, gap: importDefault(dependencyMap[7]).space.PX_12 };
obj.headerRow = obj1;
const tmp3 = arg1(dependencyMap[5]);
obj.guildIcon = { borderRadius: importDefault(dependencyMap[7]).radii.md };
obj.textColumn = {};
const obj3 = { "Null": 7, "Null": 370, gap: importDefault(dependencyMap[7]).space.PX_4 };
obj.nameRow = obj3;
obj.chevron = { marginLeft: -2 };
obj.badge = { flexShrink: 0 };
let closure_11 = obj1.createStyles(obj);
const obj2 = { borderRadius: importDefault(dependencyMap[7]).radii.md };
const memoResult = importAllResult.memo(function ChatInputGuardLurkingPreviewBar(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const tmp = callback3();
  let obj = arg1(dependencyMap[8]);
  const items = [closure_5];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId), items1);
  const items2 = [guildId];
  const callback = importAllResult.useCallback(() => {
    let obj = callback(paths[9]);
    obj = { guildId };
    obj.openLazy(guildId(paths[11])(paths[10], paths.paths), "GuildProfileActionSheet:" + guildId, obj);
  }, items2);
  let tmp5 = null;
  if (null != stateFromStores) {
    obj = { style: tmp.cardContainer };
    obj = { style: tmp.headerRow, onPress: callback, accessibilityRole: "button", accessibilityLabel: stateFromStores.name };
    const obj1 = { guild: stateFromStores, size: arg1(dependencyMap[14]).GuildIconSizes.LARGE, style: tmp.guildIcon };
    const items3 = [callback(importDefault(dependencyMap[14]), obj1), ];
    const obj2 = { style: tmp.textColumn };
    const obj3 = { style: tmp.nameRow };
    const obj4 = { children: stateFromStores.name };
    const items4 = [callback(arg1(dependencyMap[15]).Text, obj4), , ];
    const obj5 = {};
    const tmp12 = importDefault(dependencyMap[14]);
    obj5.size = arg1(dependencyMap[17]).Icon.Sizes.SMALL;
    obj5.guild = stateFromStores;
    obj5.style = tmp.badge;
    items4[1] = callback(importDefault(dependencyMap[16]), obj5);
    const obj6 = { size: "xs", color: importDefault(dependencyMap[7]).colors.TEXT_MUTED, style: tmp.chevron };
    items4[2] = callback(arg1(dependencyMap[18]).ChevronSmallRightIcon, obj6);
    obj3.children = items4;
    const items5 = [callback2(View, obj3), ];
    const obj7 = {};
    const intl = arg1(dependencyMap[19]).intl;
    obj7.children = intl.string(arg1(dependencyMap[19]).t.BRSnEj);
    items5[1] = callback(arg1(dependencyMap[15]).Text, obj7);
    obj2.children = items5;
    items3[1] = callback2(View, obj2);
    obj.children = items3;
    const items6 = [callback2(arg1(dependencyMap[13]).PressableOpacity, obj), ];
    const obj8 = { guildId, joinSource: constants.CHAT_INPUT_BLOCKER, onBeforeJoin: tmp4 };
    items6[1] = callback(importDefault(dependencyMap[20]), obj8);
    obj.children = items6;
    tmp5 = callback2(View, obj);
    const tmp13 = importDefault(dependencyMap[16]);
  }
  return tmp5;
});
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardLurkingPreviewBar.tsx");

export default memoResult;
