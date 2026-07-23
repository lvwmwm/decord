// Module ID: 4969
// Function ID: 42692
// Name: SubscribeModalGuildSelect
// Dependencies: [57, 31, 27, 1838, 4970, 4968, 33, 4130, 689, 4973, 1456, 566, 4974, 5121, 5771, 1212, 4966, 4660, 5515, 1273, 2]
// Exports: default

// Module 4969 (SubscribeModalGuildSelect)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { ScrollView } from "get ActivityIndicator";
import closure_7 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { PremiumGuildSubscribeModalScenes as closure_9 } from "PremiumGuildSubscribeModalScenes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
const require = arg1;
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flexGrow: 1, flexShrink: 1 };
_createForOfIteratorHelperLoose.safeArea = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.guildList = { padding: 16 };
_createForOfIteratorHelperLoose.guildOption = { flexDirection: "row", alignItems: "center", paddingVertical: 10 };
let obj1 = { marginLeft: 32, fontSize: 16, lineHeight: 20, color: require("result").DARK_WHITE_500_LIGHT_PRIMARY_660 };
_createForOfIteratorHelperLoose.guildName = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/SubscribeModalGuildSelect.tsx");

export default function SubscribeModalGuildSelect(guildBoostSlots) {
  let importAll;
  let importDefault;
  guildBoostSlots = guildBoostSlots.guildBoostSlots;
  ({ intent: importDefault, onResult: importAll } = guildBoostSlots);
  let tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  let obj = guildBoostSlots(1456);
  const callback = obj.useNavigation();
  const tmp2 = callback(first.useState(""), 2);
  first = tmp2[0];
  let items = [guildBoostSlots];
  const memo = first.useMemo(() => {
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
  let obj1 = guildBoostSlots(566);
  const items1 = [closure_7, _isNativeReflectConstruct];
  const items2 = [first, memo];
  const stateFromStoresArray = obj1.useStateFromStoresArray(items1, () => {
    if (0 === first.length) {
      const flattenedGuildIds = outer1_8.getFlattenedGuildIds();
      const _Array2 = Array;
      let array = new Array();
      let reduced = flattenedGuildIds.reduce((arr, guildId) => {
        const guild = outer2_7.getGuild(guildId);
        let hasItem = null == guild;
        if (!hasItem) {
          hasItem = outer1_6.has(guild.id);
        }
        if (!hasItem) {
          arr.push(guild);
        }
        return arr;
      }, array);
    } else {
      let obj = outer1_1(tmp[12]);
      obj = { query: first };
      const _Array = Array;
      array = new Array();
      reduced = obj.queryGuilds(obj).reduce((arr, record) => {
        record = record.record;
        if (!outer1_6.has(record.id)) {
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
  const intl = guildBoostSlots(1212).intl;
  obj.placeholder = intl.string(guildBoostSlots(1212).t.vf3ZTa);
  obj.onChange = tmp2[1];
  obj.onClose = importAll(4966).closeApplyBoostModal;
  const items3 = [callback2(importDefault(5771), obj), ];
  obj1 = { style: tmp.guildList, keyboardShouldPersistTaps: "always" };
  const obj2 = {
    bottom: true,
    children: stateFromStoresArray.map((children) => {
      let closure_0 = children;
      let obj = {
        accessibilityRole: "button",
        style: tmp.guildOption,
        onPress() {
          const replaced = outer1_4.replace(outer2_9.CONFIRMATION, { guildId: id.id, guildBoostSlots: id, intent: outer1_1, onResult: outer1_2 });
        }
      };
      obj = { guild: children };
      tmp = outer1_1(tmp[18]);
      obj.size = guildBoostSlots(tmp[18]).GuildIconSizes.SMALL;
      obj.selected = false;
      const items = [outer1_10(tmp, obj), ];
      obj = { style: tmp.guildName, children: children.name };
      items[1] = outer1_10(guildBoostSlots(tmp[19]).LegacyText, obj);
      obj.children = items;
      return outer1_11(guildBoostSlots(tmp[17]).PressableOpacity, obj, children.id);
    })
  };
  obj1.children = callback2(guildBoostSlots(5121).SafeAreaPaddingView, obj2);
  items3[1] = callback2(memo, obj1);
  obj.children = items3;
  return callback3(guildBoostSlots(5121).SafeAreaPaddingView, obj);
};
