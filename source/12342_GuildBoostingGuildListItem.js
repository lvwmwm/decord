// Module ID: 12342
// Function ID: 94425
// Name: GuildBoostingGuildListItem
// Dependencies: []
// Exports: default

// Module 12342 (GuildBoostingGuildListItem)
function GuildBoostingGuildListItem(guildId) {
  const arg1 = guildId.guildId;
  const tmp = callback3();
  let obj = arg1(dependencyMap[9]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId));
  importDefault(dependencyMap[10]);
  if (null != stateFromStores) {
    const id = stateFromStores.id;
  }
  let tmp6 = null;
  if (null != stateFromStores) {
    obj = {
      style: tmp.guildCard,
      activeOpacity: 0.5,
      onPress() {
          guildId(closure_2[12]).transitionToGuild(guildId, { state: { shouldShowSubscribeTooltip: true } });
          const obj = guildId(closure_2[12]);
          callback(closure_2[13]).close();
        }
    };
    obj = { guild: stateFromStores };
    const tmp10 = importDefault(dependencyMap[11]);
    obj.size = arg1(dependencyMap[14]).GuildIconSizes.LARGE;
    obj.style = tmp.guildIcon;
    obj.selected = false;
    const items1 = [callback(importDefault(dependencyMap[14]), obj), , ];
    const obj1 = { style: tmp.guildCardDescription };
    const obj2 = { variant: "text-md/bold", children: stateFromStores.name };
    const items2 = [callback(arg1(dependencyMap[15]).Text, obj2), ];
    const obj3 = { style: tmp.subscriptionInfo };
    const obj4 = { source: importDefault(dependencyMap[16]), style: tmp.premiumGuildImage, resizeMode: "contain", resizeMethod: "resize" };
    const items3 = [callback(closure_4, obj4), ];
    const obj5 = { variant: "text-xs/medium" };
    const intl = arg1(dependencyMap[17]).intl;
    const obj6 = { subscriberCount: tmp5 };
    obj5.children = intl.format(arg1(dependencyMap[17]).t.If4iTS, obj6);
    items3[1] = callback(arg1(dependencyMap[15]).Text, obj5);
    obj3.children = items3;
    items2[1] = callback2(closure_3, obj3);
    obj1.children = items2;
    items1[1] = callback2(closure_3, obj1);
    const obj7 = { guild: stateFromStores, theme: tmp2 };
    items1[2] = callback(importDefault(dependencyMap[18]), obj7);
    obj.children = items1;
    tmp6 = callback2(tmp10, obj);
    const tmp12 = importDefault(dependencyMap[14]);
  }
  return tmp6;
}
importAll(dependencyMap[0]);
({ View: closure_3, Image: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[4]).NUMBER_OF_GUILDS_TO_RECOMMEND_BOOSTING;
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, borderRadius: importDefault(dependencyMap[7]).radii.xs, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWEST };
obj.guildCard = obj;
obj.guildIcon = { marginRight: 16 };
obj.guildCardDescription = { flex: 1 };
obj.subscriptionInfo = { -9223372036854775808: true, filter: true };
obj.premiumGuildImage = {};
let closure_10 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("components_native/premium/GuildBoostingGuildList.tsx");

export default function GuildBoostingGuildList(guildCount) {
  guildCount = guildCount.guildCount;
  if (guildCount === undefined) {
    guildCount = closure_7;
  }
  let obj = arg1(dependencyMap[9]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds());
  obj = { style: guildCount.style };
  const substr = stateFromStores.slice(0, guildCount);
  obj.children = substr.map((guildId) => callback(closure_11, { guildId }, guildId));
  return callback(closure_3, obj);
};
