// Module ID: 17362
// Function ID: 17363
// Name: GuildSettingsModalEmoji
// Dependencies: [32, 19, 17, 2067, 17363, 21, 12, 9797, 4836, 576, 1115, 5776, 4728, 504, 8952, 4832, 17365, 17369, 1177, 17370, 5889, 6461, 1485, 5936, 2]
// Exports: computeSectionItem, default

// Module 17362 (GuildSettingsModalEmoji)
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import RoleSubscriptionEmojiUtils from "RoleSubscriptionEmojiUtils" /* 5776 */;
import EmojiActionCreators from "EmojiActionCreators" /* 9797 */;
import EmojiRow2 from "EmojiRow" /* 17365 */;
import HeaderRow from "HeaderRow" /* 17369 */;
import EmptyServerSettingsEmoji from "EmptyServerSettingsEmoji" /* 17370 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildSettingsEmojiStore from "GuildSettingsEmojiStore" /* 17363 */;
import Fragment from "Fragment" /* 21 */;
import module_12_mod from "module_12" /* 12 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, navigation;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
function computeEmojiItem(id) {
  return { type: "EMOJI", key: id.id, emoji: id };
}
class ManageEmojisModal {
  constructor(disabled) {
    let contentContainerStyle;
    let items7;
    let items8;
    let tmp12;
    let tmp15;
    let flag = disabled.disabled;
    ({ computeEmojiItems, contentContainerStyle } = disabled);
    if (flag === undefined) {
      flag = false;
    }
    const guild = disabled.guild;
    const headerDescription = disabled.headerDescription;
    const onSelectRolesForEmoji = disabled.onSelectRolesForEmoji;
    let emojiItems;
    let closure_8;
    let ref;
    let tmp = flag;
    let tmp2 = headerDescription;
    let obj = flag(headerDescription[13]);
    const items = [closure_8];
    const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
      const obj = { emojis: GuildSettingsEmojiStore.getEmojis(guild.id), revision: GuildSettingsEmojiStore.getEmojiRevision(guild.id) };
      return obj;
    });
    const emojis = stateFromStoresObject.emojis;
    const revision = stateFromStoresObject.revision;
    let obj2 = flag(headerDescription[14]);
    const canManageGuildExpression = obj2.useManageResourcePermissions(guild).canManageGuildExpression;
    let items1 = emojis;
    if (emojis == null) {
      items1 = [];
    }
    emojiItems = computeEmojiItems(items1, guild);
    const tmp5 = closure_13();
    closure_8 = tmp5;
    ref = emojis.useRef(revision);
    const items2 = [guild.id];
    const effect = emojis.useEffect(() => {
      closure_12(guild.id);
    }, items2);
    const items3 = [guild.id, revision];
    const effect1 = emojis.useEffect(() => {
      const tmp = ref;
      const tmp2 = revision;
      if (ref.current < revision) {
        closure_12(guild.id);
      }
      tmp.current = tmp2;
    }, items3);
    const items4 = [guild.id, flag, emojiItems, tmp5, onSelectRolesForEmoji, canManageGuildExpression];
    const items5 = [guild, , , , ];
    let length;
    const callback = emojis.useCallback((arg0) => {
      let index;
      let item;
      let tmp12;
      let tmp7;
      ({ item, index } = arg0);
      const type = item.type;
      if ("SECTION" === type) {
        const obj2 = { style: closure_8.section, variant: "text-xs/bold", color: "text-default", children: item.section };
        return React4(Text_Text.Text, obj2);
      } else if ("EMOJI" === type) {
        let type1;
        if (emojiItems[index - 1] != null) {
          type1 = tmp2.type;
        }
        let type2;
        if (emojiItems[index + 1] != null) {
          type2 = tmp5.type;
        }
        const obj = { emoji: item.emoji, guildId: guild.id, disabled: tmp12, onSelectRolesForEmoji, start: "SECTION" === type1, end: tmp7 };
        tmp12 = flag;
        tmp7 = "SECTION" === type2 || index === emojiItems.length - 1;
        const EmojiRow = EmojiRow2.EmojiRow;
        const tmp8 = React4;
        if (!flag) {
          tmp12 = !item.emoji.available;
        }
        if (!tmp12) {
          tmp12 = !canManageGuildExpression(item.emoji);
        }
        return tmp8(EmojiRow, obj);
      } else {
        return null;
      }
    }, items4);
    const obj3 = emojis;
    const useCallback = emojis.useCallback;
    if (emojis != null) {
      length = emojis.length;
    }
    items5[1] = length;
    items5[2] = headerDescription;
    items5[3] = onSelectRolesForEmoji;
    items5[4] = flag;
    const items6 = [tmp5];
    const callback1 = useCallback(() => {
      let num;
      const obj = { guild, emojisLength: num, description: headerDescription, onSelectRolesForEmoji, uploadDisabled: flag };
      num = undefined;
      const ConnectedHeaderRow = HeaderRow.ConnectedHeaderRow;
      const tmp = React4;
      if (emojis != null) {
        num = emojis.length;
      }
      if (num == null) {
        num = 0;
      }
      return tmp(ConnectedHeaderRow, obj);
    }, items5);
    const callback2 = obj3.useCallback(() => {
      let intl;
      let intl2;
      const obj = { Illustration: EmptyServerSettingsEmoji.EmptyServerSettingsEmoji, style: closure_8.emptyState, title: intl.string(intl5.t.lxsmBd), body: intl2.string(intl5.t.RBbtMy) };
      const EmptyState = native.EmptyState;
      intl = intl5.intl;
      intl2 = intl5.intl;
      return React4(EmptyState, obj);
    }, items6);
    if (null == emojis) {
      const obj4 = { style: tmp5.loadingContainer, children: items7 };
      items7 = [ref(tmp(tmp2[20]).ActivityIndicator, {}), ref(tmp(tmp2[21]).NavScrim, {})];
      tmp15 = closure_10(revision, obj4);
    } else {
      const obj5 = { initialNumToRender: 12, ListHeaderComponent: callback1, ListEmptyComponent: callback2, windowSize: 4, data: emojiItems, keyExtractor: tmp12, renderItem: callback, contentContainerStyle: items8 };
      items8 = [contentContainerStyle, tmp5.list];
      tmp15 = ref(canManageGuildExpression, obj5);
    }
    return tmp15;
  }
}
let react = react_mod;
({ View: hasOwnProperty, FlatList: metroRequire } = react_native);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let module_12 = module_12_mod;
let closure_12 = module_12.throttle(EmojiActionCreators.fetchEmoji, 1000);
let createStyles = createStyles_mod;
let obj = { loadingContainer: { flex: 1, paddingTop: 40 }, emptyState: { paddingTop: 30 }, list: obj2, section: obj3, titleContainer: { paddingLeft: 16, paddingRight: 16 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_16 };
createStyles(obj);
module_12 = module_12_mod;
const computeEmojiItems = module_12.memoize((arr, stateFromStores) => {
  let arr2;
  let arr3;
  let items1;
  let items4;
  const f107837 = (emoji) => !emoji.emoji.animated;
  _require = stateFromStores;
  const found = arr.filter((item) => {
    const obj = RoleSubscriptionEmojiUtils;
    return !obj.isRoleSubscriptionEmoji(item, stateFromStores.id);
  });
  const mapped = found.map(computeEmojiItem);
  const reversed = mapped.reverse();
  const obj2 = require("GuildBoostingUtils");
  const maxEmojiSlots = obj2.getMaxEmojiSlots(stateFromStores);
  const obj3 = module_12;
  [arr2, arr3] = obj3.partition(reversed, f107837);
  _slicedToArray(obj3.partition(reversed, f107837), 2);
  const intl = require("intl").intl;
  const stringResult = intl.string(require("intl").t.sMOuuS);
  const bound = Math.max(maxEmojiSlots - arr2.length, 0);
  const intl2 = require("intl").intl;
  const str = "" + stringResult + " - " + intl2.formatToPlainString(require("intl").t.sgL8sI, { count: bound });
  const formatted = str.toUpperCase();
  const intl3 = require("intl").intl;
  const stringResult1 = intl3.string(require("intl").t.wWjQye);
  const bound1 = Math.max(maxEmojiSlots - arr3.length, 0);
  const intl4 = require("intl").intl;
  const str2 = "" + stringResult1 + " - " + intl4.formatToPlainString(require("intl").t.sgL8sI, { count: bound1 });
  const formatted1 = str2.toUpperCase();
  if (arr2.length > 0) {
    const items = [{ type: "SECTION", key: formatted, section: formatted }];
    HermesBuiltin.arraySpread(items, arr2, 1);
    items1 = items;
  } else {
    items1 = [];
  }
  const items2 = [...items1];
  if (arr3.length > 0) {
    const items3 = [{ type: "SECTION", key: formatted1, section: formatted1 }];
    HermesBuiltin.arraySpread(items3, arr3, 1);
    items4 = items3;
  } else {
    items4 = [];
  }
  HermesBuiltin.arraySpread(items2, items4, tmp14);
  return items2;
});
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalEmoji.tsx");

export default function GuildSettingsModalEmoji(contentContainerStyle) {
  let closure_4;
  let isLandingScreen;
  let items2;
  let require;
  ({ guildId: require, isLandingScreen } = contentContainerStyle);
  let stateFromStores;
  let tmp = require;
  contentContainerStyle = contentContainerStyle.contentContainerStyle;
  let obj = require("get initialized");
  const items = [GuildStore];
  stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(_require));
  let obj2 = require("useNavigation");
  navigation = obj2.useNavigation();
  const tmp5 = closure_13();
  react = tmp5;
  const items1 = [navigation, stateFromStores, isLandingScreen, tmp5];
  const layoutEffect = react.useLayoutEffect(() => {
    let name;
    let titleContainer;
    const tmp = isLandingScreen && undefined !== stateFromStores;
    if (tmp) {
      let obj = {
        headerTitle() {
            let obj2;
            const obj = { style: titleContainer.titleContainer, children: closure_2_9(require("NavigatorHeader").NavigatorHeader, obj2) };
            obj2 = { title: name.name };
            return closure_2_9(closure_2_5, obj);
          }
      };
      navigation.setOptions(obj);
    }
  }, items1);
  if (null == stateFromStores) {
    return null;
  } else {
    const tmpResult = tmp(stateFromStores[12]);
    const maxEmojiSlots = tmpResult.getMaxEmojiSlots(stateFromStores);
    const intl = tmp(tmp2[10]).intl;
    const obj3 = { count: maxEmojiSlots };
    const obj4 = { children: items2 };
    const obj5 = { guild: stateFromStores, headerDescription: intl.formatToPlainString(tmp(stateFromStores[10]).t.TA1BR0, obj3), computeEmojiItems, contentContainerStyle };
    items2 = [closure_9(ManageEmojisModal, obj5), closure_9(tmp(tmp2[21]).NavScrim, {})];
    return closure_10(closure_11, obj4);
  }
};
export const computeSectionItem = function computeSectionItem(intl, length, arg2) {
  const bound = Math.max(arg2 - length, 0);
  intl = intl5.intl;
  const str = "" + intl + " - " + intl.formatToPlainString(intl5.t.sgL8sI, { count: bound });
  const key = str.toUpperCase();
  return { type: "SECTION", key, section: key };
};
export { computeEmojiItem };
export { ManageEmojisModal };
