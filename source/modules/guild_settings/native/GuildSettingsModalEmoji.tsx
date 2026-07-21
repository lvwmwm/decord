// Module ID: 16126
// Function ID: 124317
// Name: computeSectionItem
// Dependencies: []
// Exports: default

// Module 16126 (computeSectionItem)
function computeSectionItem(intl, length, maxEmojiSlots) {
  const bound = Math.max(maxEmojiSlots - length, 0);
  intl = length(dependencyMap[10]).intl;
  const key = "" + intl + " - " + intl.formatToPlainString(length(dependencyMap[10]).t.sgL8sI, { count: bound }).toUpperCase();
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
    closure_0 = flag;
    guild = global.guild;
    importDefault = guild;
    headerDescription = global.headerDescription;
    dependencyMap = headerDescription;
    onSelectRolesForEmoji = global.onSelectRolesForEmoji;
    importAll = undefined;
    View = undefined;
    FlatList = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    jsx = undefined;
    obj = closure_0(dependencyMap[13]);
    items = [];
    items[0] = closure_8;
    stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ emojis: tmp3.getEmojis(guild.id), revision: tmp3.getEmojiRevision(guild.id) }));
    emojis = stateFromStoresObject.emojis;
    importAll = emojis;
    revision = stateFromStoresObject.revision;
    View = revision;
    obj2 = closure_0(dependencyMap[14]);
    canManageGuildExpression = obj2.useManageResourcePermissions(guild).canManageGuildExpression;
    FlatList = canManageGuildExpression;
    items1 = emojis;
    if (null == emojis) {
      items1 = [];
    }
    emojiItems = computeEmojiItems(items1, guild);
    closure_7 = emojiItems;
    tmp3 = closure_13();
    closure_8 = tmp3;
    jsx = importAll.useRef(revision);
    items2 = [];
    items2[0] = guild.id;
    effect = importAll.useEffect(() => {
      callback(guild.id);
    }, items2);
    items3 = [, ];
    items3[0] = guild.id;
    items3[1] = revision;
    effect1 = importAll.useEffect(() => {
      if (ref.current < revision) {
        callback(guild.id);
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
    callback = importAll.useCallback((arg0) => {
      let index;
      let item;
      ({ item, index } = arg0);
      let type = item.type;
      if ("SECTION" === type) {
        let obj = { delete: true, dispatch: true, raw: true, style: tmp3.section, children: item.section };
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
    tmp7 = importAll;
    if (null != emojis) {
      length = emojis.length;
    }
    items5[1] = length;
    items5[2] = headerDescription;
    items5[3] = onSelectRolesForEmoji;
    items5[4] = flag;
    items6 = [];
    items6[0] = tmp3;
    callback1 = importAll.useCallback(() => {
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
    callback2 = importAll.useCallback(() => {
      const obj = { Illustration: flag(headerDescription[19]).EmptyServerSettingsEmoji, style: tmp3.emptyState };
      const intl = flag(headerDescription[10]).intl;
      obj.title = intl.string(flag(headerDescription[10]).t.lxsmBd);
      const intl2 = flag(headerDescription[10]).intl;
      obj.body = intl2.string(flag(headerDescription[10]).t.RBbtMy);
      return ref(flag(headerDescription[18]).EmptyState, obj);
    }, items6);
    if (null == emojis) {
      tmp15 = jsxs;
      tmp16 = View;
      obj = {};
      obj.style = tmp3.loadingContainer;
      tmp17 = jsx;
      tmp18 = closure_0;
      tmp19 = dependencyMap;
      num3 = 20;
      items7 = [, ];
      items7[0] = jsx(closure_0(dependencyMap[20]).ActivityIndicator, {});
      tmp20 = jsx;
      num4 = 21;
      items7[1] = jsx(closure_0(dependencyMap[21]).NavScrim, {});
      obj.children = items7;
      tmp14 = jsxs(View, obj);
    } else {
      tmp12 = jsx;
      tmp13 = FlatList;
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
      tmp14 = jsx(FlatList, obj1);
    }
    return tmp14;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, FlatList: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
let closure_12 = importDefault(dependencyMap[6]).throttle(arg1(dependencyMap[7]).fetchEmoji, 1000);
let obj1 = arg1(dependencyMap[8]);
let obj = { loadingContainer: { 314319: "+994", 315874: "Bahamas" }, emptyState: { paddingTop: 30 } };
obj = { paddingHorizontal: importDefault(dependencyMap[9]).space.PX_12 };
obj.list = obj;
obj1 = { paddingVertical: importDefault(dependencyMap[9]).space.PX_16 };
obj.section = obj1;
obj.titleContainer = {};
let closure_13 = obj1.createStyles(obj);
const importDefaultResult = importDefault(dependencyMap[6]);
let closure_14 = importDefault(dependencyMap[6]).memoize((arr, stateFromStores) => {
  const found = arr.filter((roles) => !arg1(closure_2[11]).isRoleSubscriptionEmoji(roles, arg1.id));
  const mapped = found.map(computeEmojiItem);
  const reversed = mapped.reverse();
  const maxEmojiSlots = stateFromStores(dependencyMap[12]).getMaxEmojiSlots(stateFromStores);
  const obj2 = stateFromStores(dependencyMap[12]);
  const tmp3 = callback(importDefault(dependencyMap[6]).partition(reversed, (emoji) => !emoji.emoji.animated), 2);
  const first = tmp3[0];
  const intl = stateFromStores(dependencyMap[10]).intl;
  const obj3 = importDefault(dependencyMap[6]);
  const intl2 = stateFromStores(dependencyMap[10]).intl;
  const tmp4 = computeSectionItem(intl.string(stateFromStores(dependencyMap[10]).t.sMOuuS), first.length, maxEmojiSlots);
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
const importDefaultResult1 = importDefault(dependencyMap[6]);
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalEmoji.tsx");

export default function GuildSettingsModalEmoji(contentContainerStyle) {
  let isLandingScreen;
  ({ guildId: closure_0, isLandingScreen } = contentContainerStyle);
  const importDefault = isLandingScreen;
  let obj = arg1(dependencyMap[13]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(closure_0));
  const dependencyMap = stateFromStores;
  let obj1 = arg1(dependencyMap[22]);
  const navigation = obj1.useNavigation();
  let closure_3 = navigation;
  const tmp3 = callback4();
  const React = tmp3;
  const items1 = [navigation, stateFromStores, isLandingScreen, tmp3];
  const layoutEffect = React.useLayoutEffect(() => {
    let tmp = isLandingScreen;
    if (isLandingScreen) {
      tmp = undefined !== stateFromStores;
    }
    if (tmp) {
      const obj = {
        headerTitle() {
            let obj = { style: titleContainer.titleContainer, children: callback2(callback(name[23]).NavigatorHeader, obj) };
            obj = { title: name.name };
            return callback2(closure_5, obj);
          }
      };
      navigation.setOptions(obj);
    }
  }, items1);
  if (null == stateFromStores) {
    return null;
  } else {
    const maxEmojiSlots = arg1(dependencyMap[12]).getMaxEmojiSlots(stateFromStores);
    const intl = arg1(dependencyMap[10]).intl;
    obj = { count: maxEmojiSlots };
    obj = {};
    obj1 = { guild: stateFromStores, headerDescription: intl.formatToPlainString(arg1(dependencyMap[10]).t.TA1BR0, obj), computeEmojiItems: closure_14, contentContainerStyle: contentContainerStyle.contentContainerStyle };
    const items2 = [callback2(ManageEmojisModal, obj1), callback2(arg1(dependencyMap[21]).NavScrim, {})];
    obj.children = items2;
    return callback3(closure_11, obj);
  }
};
export { computeSectionItem };
export { computeEmojiItem };
export { ManageEmojisModal };
