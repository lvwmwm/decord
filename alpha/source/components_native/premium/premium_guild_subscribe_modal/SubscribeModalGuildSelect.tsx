// Module ID: 6771
// Function ID: 6772
// Name: SubscribeModalGuildSelect
// Dependencies: [32, 19, 17, 4885, 6772, 6770, 1072, 21, 5014, 575, 6778, 1497, 504, 6779, 7292, 7557, 1113, 6768, 6980, 6957, 1187, 2]
// Exports: default

// Module 6771 (SubscribeModalGuildSelect)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import BoostingActionCreatorsAll from "BoostingActionCreators" /* 6768 */;
import PremiumGuildSubscribeConstants from "PremiumGuildSubscribeConstants" /* 6770 */;
import LegacyTokens from "LegacyTokens" /* 6778 */;
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 6779 */;
import SearchBarNavDefault from "SearchBarNav" /* 7557 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4885 */;
import SortedGuildStore from "SortedGuildStore" /* 6772 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, guild, premiumGuildSubscription, set;

let closure_12;
let obj2;
let obj3;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
const ScrollView = react_native.ScrollView;
let closure_9 = PremiumGuildSubscribeConstants.PremiumGuildSubscribeModalScenes;
const GuildFeatures = Constants.GuildFeatures;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { safeArea: obj2, guildList: { padding: 16 }, guildOption: { flexDirection: "row", alignItems: "center", paddingVertical: 10 }, guildName: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexGrow: 1, flexShrink: 1 };
createStyles = createStyles.createStyles;
obj3 = { marginLeft: 32, fontSize: 16, lineHeight: 20, color: LegacyTokens.DARK_WHITE_500_LIGHT_PRIMARY_660 };
let closure_13 = createStyles(obj);
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
  let tmp = closure_13();
  dependencyMap = tmp;
  let obj = guildBoostSlots(1497);
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
        let hasItem = null == guild;
        if (!hasItem) {
          const features = guild.features;
          hasItem = features.has(constants.HUB);
        }
        if (!hasItem) {
          hasItem = set.has(guild.id);
        }
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
        const features = record.features;
        const hasItem = features.has(constants.HUB) || set.has(record.id);
        if (!hasItem) {
          arr.push(record);
        }
        return arr;
      }, array2);
    }
    return reduce2Result;
  }, items2);
  let obj3 = { top: true, style: tmp.safeArea, children: items3 };
  const SafeAreaPaddingView = guildBoostSlots(7292).SafeAreaPaddingView;
  const obj4 = { placeholder: intl.string(guildBoostSlots(1113).t.vf3ZTa), onChange: tmp4, onClose: BoostingActionCreatorsAll.closeApplyBoostModal };
  const tmp6 = SearchBarNavDefault;
  intl = guildBoostSlots(1113).intl;
  items3 = [closure_11(tmp6, obj4), ];
  const obj5 = { style: tmp.guildList, keyboardShouldPersistTaps: "always", children: closure_11(SafeAreaPaddingView2, obj6) };
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
      const PressableOpacity = guildBoostSlots(closure_3[18]).PressableOpacity;
      const obj2 = { guild, size: guildBoostSlots(closure_3[19]).GuildIconSizes.SMALL, selected: false };
      const tmp = require("GuildIcon");
      items = [closure_1_11(tmp, obj2), ];
      const obj3 = { style: closure_3.guildName, children: guild.name };
      items[1] = closure_1_11(guildBoostSlots(closure_3[20]).LegacyText, obj3);
      return closure_1_12(PressableOpacity, obj, guild.id);
    })
  };
  SafeAreaPaddingView2 = guildBoostSlots(7292).SafeAreaPaddingView;
  items3[1] = closure_11(memo, obj5);
  return closure_12(SafeAreaPaddingView, obj3);
};
