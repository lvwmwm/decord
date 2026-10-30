// Module ID: 19666
// Function ID: 19667
// Name: GuildSettingsModalEmoji
// Dependencies: [32, 19, 17, 4880, 19667, 21, 12, 10036, 5009, 575, 1114, 4963, 8455, 504, 9011, 5619, 19669, 19673, 1188, 19674, 6947, 5601, 7288, 1498, 6992, 2]
// Exports: computeSectionItem, default

// Module 19666 (GuildSettingsModalEmoji)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1114 */;
import native from "native" /* 1188 */;
import RoleSubscriptionEmojiUtils from "RoleSubscriptionEmojiUtils" /* 4963 */;
import Text_Text from "Text/Text" /* 5619 */;
import EmojiActionCreators from "EmojiActionCreators" /* 10036 */;
import EmojiRow2 from "EmojiRow" /* 19669 */;
import HeaderRow from "HeaderRow" /* 19673 */;
import EmptyServerSettingsEmoji from "EmptyServerSettingsEmoji" /* 19674 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4880 */;
import GuildSettingsEmojiStore from "GuildSettingsEmojiStore" /* 19667 */;
import Fragment from "Fragment" /* 21 */;
import module_12_mod from "module_12" /* 12 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, navigation;

let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
function computeEmojiItem(id) {
  return { type: "EMOJI", key: id.id, emoji: id };
}
class ManageEmojisModal {
  constructor(disabled) {
    let contentContainerStyle;
    let items7;
    let items8;
    let tmp12;
    let tmp14;
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
    const items = [emojiItems];
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
    const tmp5 = closure_12();
    closure_8 = tmp5;
    ref = emojis.useRef(revision);
    const items2 = [guild.id];
    const effect = emojis.useEffect(() => {
      closure_11(guild.id);
    }, items2);
    const items3 = [guild.id, revision];
    const effect1 = emojis.useEffect(() => {
      const tmp = ref;
      const tmp2 = revision;
      if (ref.current < revision) {
        closure_11(guild.id);
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
        const obj2 = { style: metroImportAll.section, variant: "text-xs/bold", color: "text-default", children: item.section };
        return metroImportAll(Text_Text.Text, obj2);
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
        const tmp8 = metroImportAll;
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
      const tmp = metroImportAll;
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
      const obj = { Illustration: EmptyServerSettingsEmoji.EmptyServerSettingsEmoji, style: metroImportAll.emptyState, title: intl.string(intl5.t.lxsmBd), body: intl2.string(intl5.t.RBbtMy) };
      const EmptyState = native.EmptyState;
      intl = intl5.intl;
      intl2 = intl5.intl;
      return metroImportAll(EmptyState, obj);
    }, items6);
    if (null == emojis) {
      const obj4 = { style: tmp5.loadingContainer, children: items7 };
      items7 = [closure_8(tmp(tmp2[20]).ActivityIndicator, {}), closure_8(tmp(tmp2[21]).NavScrim, {})];
      tmp14 = ref(revision, obj4);
    } else {
      const obj5 = {
        ListHeaderComponent: callback1,
        ListEmptyComponent: callback2,
        data: emojiItems,
        keyExtractor: tmp12,
        getItemType(type) {
            return type.type;
          },
        renderItem: callback,
        maintainVisibleContentPosition: { disabled: true },
        contentContainerStyle: items8
      };
      items8 = [contentContainerStyle, tmp5.list];
      tmp14 = closure_8(tmp(tmp2[22]).FlashList, obj5);
    }
    return tmp14;
  }
}
let react = react_mod;
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let module_12 = module_12_mod;
let closure_11 = module_12.throttle(EmojiActionCreators.fetchEmoji, 1000);
let createStyles = createStyles_mod;
let obj = { loadingContainer: { flex: 1, paddingTop: 40 }, emptyState: { paddingTop: 30 }, list: obj2, section: obj3, titleContainer: { paddingLeft: 16, paddingRight: 16 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_16 };
const authStore2 = createStyles(obj);
module_12 = module_12_mod;
const computeEmojiItems = module_12.memoize((arr, stateFromStores) => {
  let arr2;
  let arr3;
  let items1;
  let items4;
  const f118145 = (emoji) => !emoji.emoji.animated;
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
  [arr2, arr3] = obj3.partition(reversed, f118145);
  _slicedToArray(obj3.partition(reversed, f118145), 2);
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
  const tmp5 = closure_12();
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
            const obj = { style: titleContainer.titleContainer, children: closure_2_8(require("NavigatorHeader").NavigatorHeader, obj2) };
            obj2 = { title: name.name };
            return closure_2_8(View, obj);
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
    items2 = [closure_8(ManageEmojisModal, obj5), closure_8(tmp(tmp2[21]).NavScrim, {})];
    return closure_9(closure_10, obj4);
  }
};
export function computeSectionItem(intl, length, arg2) {
  const bound = Math.max(arg2 - length, 0);
  intl = intl5.intl;
  const str = "" + intl + " - " + intl.formatToPlainString(intl5.t.sgL8sI, { count: bound });
  const key = str.toUpperCase();
  return { type: "SECTION", key, section: key };
}
export { computeEmojiItem };
export { ManageEmojisModal };
