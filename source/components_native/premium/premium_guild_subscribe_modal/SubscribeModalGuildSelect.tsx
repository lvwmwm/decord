// Module ID: 5239
// Function ID: 44262
// Name: SubscribeModalGuildSelect
// Dependencies: []
// Exports: default

// Module 5239 (SubscribeModalGuildSelect)
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
const ScrollView = arg1(dependencyMap[2]).ScrollView;
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = arg1(dependencyMap[5]).PremiumGuildSubscribeModalScenes;
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW };
obj.safeArea = obj;
obj.guildList = { padding: 16 };
obj.guildOption = {};
const tmp2 = arg1(dependencyMap[6]);
obj.guildName = { color: arg1(dependencyMap[9]).DARK_WHITE_500_LIGHT_PRIMARY_660 };
let closure_12 = obj.createStyles(obj);
const obj1 = { color: arg1(dependencyMap[9]).DARK_WHITE_500_LIGHT_PRIMARY_660 };
const result = arg1(dependencyMap[20]).fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/SubscribeModalGuildSelect.tsx");

export default function SubscribeModalGuildSelect(guildBoostSlots) {
  guildBoostSlots = guildBoostSlots.guildBoostSlots;
  const arg1 = guildBoostSlots;
  ({ intent: closure_1, onResult: closure_2 } = guildBoostSlots);
  const tmp = callback4();
  const dependencyMap = tmp;
  let obj = arg1(dependencyMap[10]);
  const callback = obj.useNavigation();
  const tmp2 = callback(React.useState(""), 2);
  const first = tmp2[0];
  const React = first;
  const items = [guildBoostSlots];
  const memo = React.useMemo(() => {
    if (null == guildBoostSlots) {
      const _Set2 = Set;
      let set = new Set();
    } else {
      const _Set = Set;
      const found = guildBoostSlots.filter((premiumGuildSubscription) => {
        premiumGuildSubscription = premiumGuildSubscription.premiumGuildSubscription;
        let guildId;
        if (null != premiumGuildSubscription) {
          guildId = premiumGuildSubscription.guildId;
        }
        return null != guildId;
      });
      set = new Set(found.map((premiumGuildSubscription) => {
        premiumGuildSubscription = premiumGuildSubscription.premiumGuildSubscription;
        let guildId;
        if (null != premiumGuildSubscription) {
          guildId = premiumGuildSubscription.guildId;
        }
        return guildId;
      }));
    }
    return set;
  }, items);
  const ScrollView = memo;
  let obj1 = arg1(dependencyMap[11]);
  const items1 = [closure_7, closure_8];
  const items2 = [first, memo];
  const stateFromStoresArray = obj1.useStateFromStoresArray(items1, () => {
    if (0 === first.length) {
      const flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
      const _Array2 = Array;
      let array = new Array();
      let reduced = flattenedGuildIds.reduce((arr, guildId) => {
        const guild = guild.getGuild(guildId);
        let hasItem = null == guild;
        if (!hasItem) {
          hasItem = set.has(guild.id);
        }
        if (!hasItem) {
          arr.push(guild);
        }
        return arr;
      }, array);
    } else {
      let obj = callback(tmp[12]);
      obj = { query: first };
      const _Array = Array;
      array = new Array();
      reduced = obj.queryGuilds(obj).reduce((arr, record) => {
        record = record.record;
        if (!set.has(record.id)) {
          arr.push(record);
        }
        return arr;
      }, array);
      const queryGuildsResult = obj.queryGuilds(obj);
    }
    return reduced;
  }, items2);
  obj = { top: true, style: tmp.safeArea };
  obj = {};
  const intl = arg1(dependencyMap[15]).intl;
  obj.placeholder = intl.string(arg1(dependencyMap[15]).t.vf3ZTa);
  obj.onChange = tmp2[1];
  obj.onClose = importAll(dependencyMap[16]).closeApplyBoostModal;
  const items3 = [callback2(importDefault(dependencyMap[14]), obj), ];
  obj1 = { style: tmp.guildList, keyboardShouldPersistTaps: "always" };
  const obj2 = {
    bottom: true,
    children: stateFromStoresArray.map((children) => {
      const guildBoostSlots = children;
      let obj = {
        accessibilityRole: "button",
        style: tmp.guildOption,
        onPress() {
          const replaced = closure_4.replace(constants.CONFIRMATION, { guildId: arg0.id, guildBoostSlots: arg0, intent: closure_1, onResult: closure_2 });
        }
      };
      obj = { guild: children };
      const tmp = callback(tmp[18]);
      obj.size = guildBoostSlots(tmp[18]).GuildIconSizes.SMALL;
      obj.selected = false;
      const items = [callback2(tmp, obj), ];
      obj = { style: tmp.guildName, children: children.name };
      items[1] = callback2(guildBoostSlots(tmp[19]).LegacyText, obj);
      obj.children = items;
      return callback3(guildBoostSlots(tmp[17]).PressableOpacity, obj, children.id);
    })
  };
  obj1.children = callback2(arg1(dependencyMap[13]).SafeAreaPaddingView, obj2);
  items3[1] = callback2(ScrollView, obj1);
  obj.children = items3;
  return callback3(arg1(dependencyMap[13]).SafeAreaPaddingView, obj);
};
