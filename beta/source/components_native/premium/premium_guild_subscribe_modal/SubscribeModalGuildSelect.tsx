// Module ID: 5749
// Function ID: 5750
// Name: SubscribeModalGuildSelect
// Dependencies: [32, 19, 17, 2067, 5750, 5748, 21, 4836, 576, 5753, 1485, 504, 5754, 6544, 6794, 1115, 5746, 5435, 5896, 1177, 2]
// Exports: default

// Module 5749 (SubscribeModalGuildSelect)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import actions_BoostingActionCreatorsAll from "actions/BoostingActionCreators" /* 5746 */;
import PremiumGuildSubscribeConstants from "PremiumGuildSubscribeConstants" /* 5748 */;
import LegacyTokens from "LegacyTokens" /* 5753 */;
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 5754 */;
import SearchBarNavDefault from "SearchBarNav" /* 6794 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import SortedGuildStore from "SortedGuildStore" /* 5750 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, guild, premiumGuildSubscription, set;

let c10;
let obj2;
let obj3;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
const ScrollView = react_native.ScrollView;
let closure_9 = PremiumGuildSubscribeConstants.PremiumGuildSubscribeModalScenes;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { safeArea: obj2, guildList: { padding: 16 }, guildOption: { flexDirection: "row", alignItems: "center", paddingVertical: 10 }, guildName: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexGrow: 1, flexShrink: 1 };
createStyles = createStyles.createStyles;
obj3 = { marginLeft: 32, fontSize: 16, lineHeight: 20, color: LegacyTokens.DARK_WHITE_500_LIGHT_PRIMARY_660 };
let closure_12 = createStyles(obj);
const result = size.fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/SubscribeModalGuildSelect.tsx");

export default function SubscribeModalGuildSelect(guildBoostSlots) {
  let SafeAreaPaddingView2;
  let closure_3;
  let closure_4;
  let first;
  let intent;
  let intl;
  let items3;
  let obj6;
  let onResult;
  let tmp4;
  guildBoostSlots = guildBoostSlots.guildBoostSlots;
  ({ intent: importDefault, onResult: importAll } = guildBoostSlots);
  first = undefined;
  let tmp = closure_12();
  dependencyMap = tmp;
  let obj = guildBoostSlots(1485);
  _slicedToArray = obj.useNavigation();
  [first, tmp4] = first.useState("");
  let items = [guildBoostSlots];
  const memo = first.useMemo(function() {
    const arr = guildBoostSlots;
    if (null == guildBoostSlots) {
      const _Set2 = Set;
      const self3 = this;
      const self4 = this;
      set = new Set();
    } else {
      const _Set = Set;
      const found = arr.filter((premiumGuildSubscription) => {
        premiumGuildSubscription = premiumGuildSubscription.premiumGuildSubscription;
        let guildId;
        if (premiumGuildSubscription != null) {
          guildId = premiumGuildSubscription.guildId;
        }
        return null != guildId;
      });
      const self = this;
      const self2 = this;
      set = new Set(found.map((premiumGuildSubscription) => {
        premiumGuildSubscription = premiumGuildSubscription.premiumGuildSubscription;
        let guildId;
        if (premiumGuildSubscription != null) {
          guildId = premiumGuildSubscription.guildId;
        }
        return guildId;
      }));
    }
    return set;
  }, items);
  let obj2 = guildBoostSlots(504);
  const items1 = [GuildStore, SortedGuildStore];
  const items2 = [first, memo];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items1, function() {
    let reduce2Result;
    if (0 === first.length) {
      const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
      const _Array2 = Array;
      const self3 = this;
      const self4 = this;
      const reduce2 = flattenedGuildIds.reduce;
      const array = new Array();
      reduce2Result = reduce2((arr, arg1) => {
        guild = guild.getGuild(arg1);
        const hasItem = null == guild || set.has(guild.id);
        if (!hasItem) {
          arr.push(guild);
        }
        return arr;
      }, array);
    } else {
      const obj2 = { query: tmp };
      const obj = AutocompleteUtilsDefault;
      const _Array = Array;
      const self = this;
      const self2 = this;
      const reduce = obj.queryGuilds(obj2).reduce;
      obj.queryGuilds(obj2);
      const array2 = new Array();
      reduce2Result = reduce((arr, record) => {
        record = record.record;
        if (!set.has(record.id)) {
          arr.push(record);
        }
        return arr;
      }, array2);
    }
    return reduce2Result;
  }, items2);
  let obj3 = { top: true, style: tmp.safeArea, children: items3 };
  const SafeAreaPaddingView = guildBoostSlots(6544).SafeAreaPaddingView;
  const obj4 = { placeholder: intl.string(guildBoostSlots(1115).t.vf3ZTa), onChange: tmp4, onClose: actions_BoostingActionCreatorsAll.closeApplyBoostModal };
  const tmp6 = SearchBarNavDefault;
  intl = guildBoostSlots(1115).intl;
  items3 = [closure_10(tmp6, obj4), ];
  const obj5 = { style: tmp.guildList, keyboardShouldPersistTaps: "always", children: closure_10(SafeAreaPaddingView2, obj6) };
  obj6 = {
    bottom: true,
    children: stateFromStoresArray.map((guild) => {
      let items;
      let obj = {
        accessibilityRole: "button",
        style: closure_3.guildOption,
        onPress() {
          const obj = { guildId: guild.id, guildBoostSlots, intent: importDefault, onResult: importAll };
          const replaced = closure_4.replace(constants.CONFIRMATION, obj);
        },
        children: items
      };
      const PressableOpacity = guildBoostSlots(closure_3[17]).PressableOpacity;
      const obj2 = { guild, size: guildBoostSlots(closure_3[18]).GuildIconSizes.SMALL, selected: false };
      const tmp = require("GuildIcon");
      items = [closure_1_10(tmp, obj2), ];
      const obj3 = { style: closure_3.guildName, children: guild.name };
      items[1] = closure_1_10(guildBoostSlots(closure_3[19]).LegacyText, obj3);
      return closure_1_11(PressableOpacity, obj, guild.id);
    })
  };
  SafeAreaPaddingView2 = guildBoostSlots(6544).SafeAreaPaddingView;
  items3[1] = closure_10(memo, obj5);
  return closure_11(SafeAreaPaddingView, obj3);
};
