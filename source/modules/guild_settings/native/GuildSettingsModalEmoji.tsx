// Module ID: 16298
// Function ID: 126856
// Name: computeSectionItem
// Dependencies: [57, 31, 27, 1838, 16299, 33, 22, 9427, 4130, 689, 1212, 4996, 4022, 566, 8446, 4126, 16301, 16305, 1273, 16306, 5584, 5448, 1456, 5087, 2]
// Exports: default

// Module 16298 (computeSectionItem)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_7 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "useNavigation";
import importDefaultResult1 from "useNavigation";

let closure_10;
let closure_11;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
function computeSectionItem(intl, length, maxEmojiSlots) {
  const bound = Math.max(maxEmojiSlots - length, 0);
  intl = require(1212) /* getSystemLocale */.intl;
  const key = "" + intl + " - " + intl.formatToPlainString(require(1212) /* getSystemLocale */.t.sgL8sI, { count: bound }).toUpperCase();
  return { type: "SECTION", key, section: key };
}
function computeEmojiItem(id) {
  return { type: "EMOJI", key: id.id, emoji: id };
}
class ManageEmojisModal {
  constructor(arg0) {
    flag = global.disabled;
    ({ computeEmojiItems, contentContainerStyle } = global);
    if (flag === undefined) {
      flag = false;
    }
    c0 = flag;
    guild = global.guild;
    headerDescription = global.headerDescription;
    onSelectRolesForEmoji = global.onSelectRolesForEmoji;
    emojis = undefined;
    revision = undefined;
    canManageGuildExpression = undefined;
    computeEmojiItems = undefined;
    c8 = undefined;
    useRef = undefined;
    obj = require("initialize");
    items = [];
    items[0] = c8;
    stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ emojis: _undefined.getEmojis(guild.id), revision: _undefined.getEmojiRevision(guild.id) }));
    emojis = stateFromStoresObject.emojis;
    revision = stateFromStoresObject.revision;
    obj2 = require("canManageResource");
    canManageGuildExpression = obj2.useManageResourcePermissions(guild).canManageGuildExpression;
    items1 = emojis;
    if (null == emojis) {
      items1 = [];
    }
    emojiItems = computeEmojiItems(items1, guild);
    computeEmojiItems = emojiItems;
    tmp3 = c13();
    c8 = tmp3;
    useRef = emojis.useRef(revision);
    items2 = [];
    items2[0] = guild.id;
    effect = emojis.useEffect(() => {
      outer1_12(guild.id);
    }, items2);
    items3 = [, ];
    items3[0] = guild.id;
    items3[1] = revision;
    effect1 = emojis.useEffect(() => {
      if (ref.current < revision) {
        outer1_12(guild.id);
      }
      ref.current = revision;
    }, items3);
    items4 = [, , , , , ];
    items4[0] = guild.id;
    items4[1] = flag;
    items4[2] = emojiItems;
    items4[3] = tmp3;
    items4[4] = onSelectRolesForEmoji;
    items4[5] = canManageGuildExpression;
    items5 = [, , , , ];
    items5[0] = guild;
    length = undefined;
    callback = emojis.useCallback((arg0) => {
      let index;
      let item;
      ({ item, index } = arg0);
      let type = item.type;
      if ("SECTION" === type) {
        let obj = { style: _undefined.section, variant: "text-xs/bold", color: "text-default", children: item.section };
        return ref(flag(headerDescription[15]).Text, obj);
      } else if ("EMOJI" === type) {
        type = undefined;
        if (null != emojiItems[index - 1]) {
          type = tmp3.type;
        }
        let type1;
        if (null != emojiItems[index + 1]) {
          type1 = tmp7.type;
        }
        let tmp9 = "SECTION" === type1;
        if (!tmp9) {
          tmp9 = index === emojiItems.length - 1;
        }
        obj = { emoji: item.emoji, guildId: guild.id };
        let tmp15 = flag;
        if (!flag) {
          tmp15 = !item.emoji.available;
        }
        if (!tmp15) {
          tmp15 = !canManageGuildExpression(item.emoji);
        }
        obj.disabled = tmp15;
        obj.onSelectRolesForEmoji = onSelectRolesForEmoji;
        obj.start = "SECTION" === type;
        obj.end = tmp9;
        return ref(flag(headerDescription[16]).EmojiRow, obj);
      } else {
        return null;
      }
    }, items4);
    tmp7 = emojis;
    if (null != emojis) {
      length = emojis.length;
    }
    items5[1] = length;
    items5[2] = headerDescription;
    items5[3] = onSelectRolesForEmoji;
    items5[4] = flag;
    items6 = [];
    items6[0] = tmp3;
    callback1 = emojis.useCallback(() => {
      const obj = { guild };
      let length;
      if (null != emojis) {
        length = emojis.length;
      }
      let num = 0;
      if (null != length) {
        num = length;
      }
      obj.emojisLength = num;
      obj.description = headerDescription;
      obj.onSelectRolesForEmoji = onSelectRolesForEmoji;
      obj.uploadDisabled = flag;
      return closure_9(flag(headerDescription[17]).ConnectedHeaderRow, obj);
    }, items5);
    callback2 = emojis.useCallback(() => {
      const obj = { Illustration: flag(headerDescription[19]).EmptyServerSettingsEmoji, style: _undefined.emptyState };
      const intl = flag(headerDescription[10]).intl;
      obj.title = intl.string(flag(headerDescription[10]).t.lxsmBd);
      const intl2 = flag(headerDescription[10]).intl;
      obj.body = intl2.string(flag(headerDescription[10]).t.RBbtMy);
      return ref(flag(headerDescription[18]).EmptyState, obj);
    }, items6);
    if (null == emojis) {
      tmp15 = jsxs;
      tmp16 = revision;
      obj = {};
      obj.style = tmp3.loadingContainer;
      tmp17 = useRef;
      tmp18 = c0;
      tmp19 = headerDescription;
      num3 = 20;
      items7 = [, ];
      items7[0] = useRef(require("ActivityIndicator").ActivityIndicator, {});
      tmp20 = useRef;
      num4 = 21;
      items7[1] = useRef(require("NavScrim").NavScrim, {});
      obj.children = items7;
      tmp14 = jsxs(revision, obj);
    } else {
      tmp12 = useRef;
      tmp13 = canManageGuildExpression;
      obj1 = {};
      num = 12;
      obj1.initialNumToRender = 12;
      obj1.ListHeaderComponent = callback1;
      obj1.ListEmptyComponent = callback2;
      num2 = 4;
      obj1.windowSize = 4;
      obj1.data = emojiItems;
      obj1.keyExtractor = tmp11;
      obj1.renderItem = callback;
      items8 = [, ];
      items8[0] = contentContainerStyle;
      items8[1] = tmp3.list;
      obj1.contentContainerStyle = items8;
      tmp14 = useRef(canManageGuildExpression, obj1);
    }
    return tmp14;
  }
}
({ View: closure_5, FlatList: closure_6 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
let closure_12 = require("useNavigation").throttle(require("_updateEmoji").fetchEmoji, 1000);
let obj = { loadingContainer: { flex: 1, paddingTop: 40 }, emptyState: { paddingTop: 30 } };
obj = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.list = obj;
_createForOfIteratorHelperLoose = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.section = _createForOfIteratorHelperLoose;
obj.titleContainer = { paddingLeft: 16, paddingRight: 16 };
let closure_13 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_14 = require("useNavigation").memoize((arr, stateFromStores) => {
  const _require = stateFromStores;
  const found = arr.filter((roles) => !stateFromStores(outer1_2[11]).isRoleSubscriptionEmoji(roles, stateFromStores.id));
  const mapped = found.map(computeEmojiItem);
  const reversed = mapped.reverse();
  const maxEmojiSlots = _require(4022).getMaxEmojiSlots(stateFromStores);
  const obj2 = _require(4022);
  const tmp3 = callback(importDefault(22).partition(reversed, (emoji) => !emoji.emoji.animated), 2);
  const first = tmp3[0];
  const intl = _require(1212).intl;
  const obj3 = importDefault(22);
  const intl2 = _require(1212).intl;
  const tmp4 = computeSectionItem(intl.string(_require(1212).t.sMOuuS), first.length, maxEmojiSlots);
  if (first.length > 0) {
    const items = [tmp4];
    HermesBuiltin.arraySpread(first, 1);
    let items1 = items;
  } else {
    items1 = [];
  }
  const items2 = [...items1];
  if (tmp3[1].length > 0) {
    const items3 = [tmp5];
    HermesBuiltin.arraySpread(arr3, 1);
    let items4 = items3;
  } else {
    items4 = [];
  }
  HermesBuiltin.arraySpread(items4, tmp9);
  return items2;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalEmoji.tsx");

export default function GuildSettingsModalEmoji(contentContainerStyle) {
  let isLandingScreen;
  let require;
  ({ guildId: require, isLandingScreen } = contentContainerStyle);
  let obj = require(stateFromStores[13]);
  const items = [closure_7];
  stateFromStores = obj.useStateFromStores(items, () => outer1_7.getGuild(closure_0));
  let obj1 = require(stateFromStores[22]);
  const navigation = obj1.useNavigation();
  const tmp3 = callback4();
  const React = tmp3;
  const items1 = [navigation, stateFromStores, isLandingScreen, tmp3];
  const layoutEffect = React.useLayoutEffect(() => {
    let tmp = isLandingScreen;
    if (isLandingScreen) {
      tmp = undefined !== stateFromStores;
    }
    if (tmp) {
      let obj = {
        headerTitle() {
            obj = { style: outer1_4.titleContainer, children: outer2_9(outer2_0(stateFromStores[23]).NavigatorHeader, obj) };
            obj = { title: outer1_2.name };
            return outer2_9(outer2_5, obj);
          }
      };
      navigation.setOptions(obj);
    }
  }, items1);
  if (null == stateFromStores) {
    return null;
  } else {
    const maxEmojiSlots = require(stateFromStores[12]).getMaxEmojiSlots(stateFromStores);
    const intl = require(stateFromStores[10]).intl;
    obj = { count: maxEmojiSlots };
    obj = {};
    obj1 = { guild: stateFromStores, headerDescription: intl.formatToPlainString(require(stateFromStores[10]).t.TA1BR0, obj), computeEmojiItems: closure_14, contentContainerStyle: contentContainerStyle.contentContainerStyle };
    const items2 = [callback2(ManageEmojisModal, obj1), callback2(require(stateFromStores[21]).NavScrim, {})];
    obj.children = items2;
    return callback3(closure_11, obj);
  }
};
export { computeSectionItem };
export { computeEmojiItem };
export { ManageEmojisModal };
