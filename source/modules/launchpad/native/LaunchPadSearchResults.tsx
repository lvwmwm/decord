// Module ID: 15530
// Function ID: 118537
// Name: renderItemJSX
// Dependencies: []

// Module 15530 (renderItemJSX)
function renderItemJSX(result) {
  result = result.result;
  if (null == result) {
    return null;
  } else {
    const type = result.type;
    if (arg1(dependencyMap[20]).AutocompleterResultTypes.GUILD === type) {
      let obj = { guild: result.record };
      return callback(closure_14, obj);
    } else if (arg1(dependencyMap[20]).AutocompleterResultTypes.TEXT_CHANNEL === type) {
      obj = { "Null": null, "Null": null, "Null": null, channel: result.record };
      return callback(importDefault(dependencyMap[21]), obj);
    } else if (arg1(dependencyMap[20]).AutocompleterResultTypes.GROUP_DM === type) {
      let obj1 = { channel: result.record, navigationReplace: true };
      return callback(importDefault(dependencyMap[22]), obj1);
    } else if (arg1(dependencyMap[20]).AutocompleterResultTypes.VOICE_CHANNEL === type) {
      const obj2 = { channel: result.record };
      return callback(importDefault(dependencyMap[23]), obj2);
    } else if (arg1(dependencyMap[20]).AutocompleterResultTypes.USER === type) {
      ({ record: obj4.user, comparator: obj4.comparator } = result);
      return callback(importDefault(dependencyMap[24]), {});
    } else if (arg1(dependencyMap[20]).AutocompleterResultTypes.HEADER === type) {
      obj1 = arg1(dependencyMap[25]);
      const obj4 = { name: result.record.text, styles: tmp, isRefreshEnabled: tmp2 };
      return obj1.renderCategoryItem(obj4);
    } else {
      obj = { variant: "text-sm/semibold", children: result.type };
      return callback(arg1(dependencyMap[26]).Text, obj);
    }
  }
}
function renderSearchResultsSection() {
  const obj = {};
  const intl = arg1(dependencyMap[28]).intl;
  obj.name = intl.string(arg1(dependencyMap[28]).t.zkoeq/);
  return callback(closure_15, obj);
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const UnreadSetting = arg1(dependencyMap[5]).UnreadSetting;
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
let closure_12 = { bottom: 24 };
let obj1 = arg1(dependencyMap[7]);
let obj = { listContainer: { minHeight: 16 }, list: { <string:2823905889>: null, <string:2001293998>: null } };
obj = { borderRadius: importDefault(dependencyMap[8]).radii.sm };
obj.guildIcon = obj;
obj1 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW };
obj.categoryWrapper = obj1;
obj.pressable = { flex: 1 };
const tmp2 = arg1(dependencyMap[6]);
obj.pressableUnderlayColor = { backgroundColor: importDefault(dependencyMap[8]).colors.INTERACTIVE_BACKGROUND_ACTIVE };
let closure_13 = obj1.createStyles(obj);
let closure_14 = importAllResult.memo((guild) => {
  let isMentionLowImportance;
  let mentionCount;
  let unread;
  guild = guild.guild;
  const arg1 = guild;
  const tmp = callback3();
  const tmp2 = importDefault(dependencyMap[9])();
  const items = [guild.id];
  const callback = importAllResult.useCallback(() => {
    guild(closure_2[10]).transitionToGuild(guild.id);
  }, items);
  let obj = arg1(dependencyMap[11]);
  const items1 = [closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items1, () => ({ unread: store.hasUnread(guild.id), mentionCount: store.getMentionCount(guild.id), isMentionLowImportance: store.getIsMentionLowImportance(guild.id) }));
  ({ unread, mentionCount, isMentionLowImportance } = stateFromStoresObject);
  let obj1 = arg1(dependencyMap[12]);
  const fontScale = obj1.useFontScale();
  let obj2 = arg1(dependencyMap[11]);
  const items2 = [closure_5];
  const stateFromStores = obj2.useStateFromStores(items2, () => locale.locale);
  obj = { onPress: callback, underlayColor: tmp.pressableUnderlayColor.backgroundColor, style: items3 };
  const items3 = [tmp.pressable, { borderRadius: tmp2.container.borderRadius }];
  obj = {};
  const tmp7 = importDefault(dependencyMap[13]);
  obj1 = { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES };
  const items4 = [callback(importDefault(dependencyMap[16]), obj1), , ];
  obj2 = { size: tmp2.icon.guildIconSize, guild, style: items5 };
  const items5 = [tmp.guildIcon, tmp2.icon.margin];
  items4[1] = callback(importDefault(dependencyMap[17]), obj2);
  const obj3 = { name: guild.name };
  const tmp8 = importDefault(dependencyMap[15]);
  obj3.mentionBadge = importDefault(dependencyMap[19])({ mentionCount, locale: stateFromStores, isMentionLowImportance });
  items4[2] = importDefault(dependencyMap[18])(obj3);
  obj.children = items4;
  obj.children = tmp8(callback2(closure_10, obj), { fontScale });
  return tmp7(callback(arg1(dependencyMap[14]).PressableHighlight, obj));
});
let closure_15 = importAllResult.memo((arg0) => {
  let name;
  let note;
  let onPress;
  ({ name, onPress, note } = arg0);
  let obj = arg1(dependencyMap[25]);
  const categoryStyles = obj.useCategoryStyles();
  const tmp = callback3();
  const tmp3 = importDefault(dependencyMap[27])("WrappedCategoryItem");
  obj = { style: tmp.categoryWrapper, children: arg1(dependencyMap[25]).renderCategoryItem({ name, onPress, note, styles: categoryStyles, isRefreshEnabled: tmp3 }) };
  return callback(View, obj);
});
const obj2 = { backgroundColor: importDefault(dependencyMap[8]).colors.INTERACTIVE_BACKGROUND_ACTIVE };
const memoResult = importAllResult.memo(function InitialResultsInner(history) {
  history = history.history;
  const arg1 = history;
  const unreads = history.unreads;
  const importDefault = unreads;
  const toggleExpandedHistory = history.toggleExpandedHistory;
  const dependencyMap = toggleExpandedHistory;
  const expandedHistory = history.expandedHistory;
  const selectedGuildId = history.selectedGuildId;
  const View = selectedGuildId;
  const tmp = callback3();
  let obj = arg1(dependencyMap[25]);
  const categoryStyles = obj.useCategoryStyles();
  let closure_5 = categoryStyles;
  const tmp3 = importDefault(dependencyMap[27])("InitialResults");
  let closure_6 = tmp3;
  const items = [closure_7];
  const stateFromStores = arg1(dependencyMap[11]).useStateFromStores(items, () => {
    if (null != selectedGuildId) {
      const guild = stateFromStores.getGuild(selectedGuildId);
      let name;
      if (null != guild) {
        name = guild.name;
      }
      return name;
    }
  });
  closure_7 = stateFromStores;
  const items1 = [history, unreads, categoryStyles, tmp3];
  const callback = importAllResult.useCallback((arg0, arg1) => {
    const obj = {};
    if (0 === arg0) {
      let tmp3 = history[arg1];
    } else {
      tmp3 = unreads[arg1];
    }
    obj.result = tmp3;
    obj.categoryStyles = categoryStyles;
    obj.isRefreshEnabled = tmp3;
    return closure_16(obj);
  }, items1);
  const someResult = unreads.some((type) => type.type === history(toggleExpandedHistory[20]).AutocompleterResultTypes.VOICE_CHANNEL);
  const UnreadSetting = someResult;
  const items2 = [toggleExpandedHistory, expandedHistory, stateFromStores, someResult];
  const callback1 = importAllResult.useCallback((arg0) => {
    if (0 === arg0) {
      let obj = {};
      const intl3 = history(toggleExpandedHistory[28]).intl;
      obj.name = intl3.string(history(toggleExpandedHistory[28]).t.Xmh+5e);
      obj = {};
      const intl4 = history(toggleExpandedHistory[28]).intl;
      const string = intl4.string;
      let t2 = history(toggleExpandedHistory[28]).t;
      if (expandedHistory) {
        t2 = string(t2.3BdvgI);
        obj.children = t2;
        let tmp22 = obj;
      } else {
        obj.children = string(t2./XSoJ+);
        tmp22 = obj;
      }
      obj.note = tmp8(history(toggleExpandedHistory[26]).Text, tmp22);
      obj.onPress = toggleExpandedHistory;
      const tmp19 = tmp8;
    } else {
      const obj1 = {};
      if (null != stateFromStores) {
        const intl2 = history(toggleExpandedHistory[28]).intl;
        let t = history(toggleExpandedHistory[28]).t;
        t = { guildName: stateFromStores };
        intl2.formatToPlainString(someResult ? t.+DrQVp : t.+lFj35, t);
        const tmp13 = someResult ? t.+DrQVp : t.+lFj35;
        const tmp8 = history;
      } else {
        const intl = history(toggleExpandedHistory[28]).intl;
        t = history(toggleExpandedHistory[28]).t;
        obj1.name = intl.string(someResult ? t.C5viSQ : t.ieCAhD);
        return tmp(tmp2, obj1);
      }
    }
  }, items2);
  const tmp8 = importDefault(dependencyMap[9])();
  const obj2 = arg1(dependencyMap[11]);
  const fontScale = arg1(dependencyMap[12]).useFontScale();
  const items3 = [fontScale, history, unreads, tmp8];
  const callback2 = importAllResult.useCallback((arg0, arg1) => {
    if (null == arg1) {
      return 0;
    } else {
      if (0 === arg0) {
        let tmp3 = history[arg1];
      } else {
        tmp3 = unreads[arg1];
      }
      if (tmp3.type === history(toggleExpandedHistory[20]).AutocompleterResultTypes.VOICE_CHANNEL) {
        let diff = unreads(toggleExpandedHistory[30])(fontScale) + tmp8.voiceUsers.height - 2;
      } else {
        diff = unreads(toggleExpandedHistory[30])(fontScale);
      }
    }
  }, items3);
  if (!expandedHistory) {
    const _Math = Math;
    Math.max(5 - unreads.length, 2);
  }
  obj = { style: tmp.listContainer };
  if (history.length > 0) {
    obj = { style: tmp.list, sectionSize: tmp8.category.height, itemSize: callback2, renderItem: callback, renderSection: callback1 };
    const items4 = [tmp11, unreads.length];
    obj.sections = items4;
    obj.sectionFooterSize = 8;
    obj.footerSize = 8;
    obj.scrollIndicatorInsets = closure_12;
    obj.chunkBase = importDefault(dependencyMap[29])().height;
    obj.keyboardShouldPersistTaps = "always";
    let str2 = "default";
    if (null != selectedGuildId) {
      str2 = selectedGuildId;
    }
    let tmp15Result = tmp8(importDefault(dependencyMap[31]), obj, str2);
    const tmp15 = tmp8;
    const tmp18 = importDefault(dependencyMap[31]);
  } else {
    tmp15Result = null;
  }
  obj.children = tmp15Result;
  return tmp8(View, obj);
});
const memoResult1 = importAllResult.memo(function SearchResultsInner(results) {
  results = results.results;
  const arg1 = results;
  const tmp = callback3();
  let obj = arg1(dependencyMap[25]);
  const categoryStyles = obj.useCategoryStyles();
  const importDefault = categoryStyles;
  const tmp3 = importDefault(dependencyMap[27])("SearchResults");
  const dependencyMap = tmp3;
  const items = [results, categoryStyles, tmp3];
  let tmp5 = null;
  const callback = importAllResult.useCallback((arg0, arg1) => callback({ result: results[arg1], categoryStyles, isRefreshEnabled: tmp3 }), items);
  const ref = importAllResult.useRef(null);
  const items1 = [results.query];
  const effect = importAllResult.useEffect(() => {
    const current = ref.current;
    if (!tmp) {
      current.scrollToTop(false);
    }
  }, items1);
  const tmp8 = importDefault(dependencyMap[9])();
  const View = tmp8;
  const fontScale = arg1(dependencyMap[12]).useFontScale();
  let closure_5 = fontScale;
  const items2 = [fontScale, results, tmp8];
  obj = { style: tmp.listContainer };
  if (results.length > 0) {
    obj = { 9223372036854775807: false, 0: false, -9223372036854775808: false, ref, style: tmp.list, sectionSize: tmp8.category.height, itemSize: tmp10, renderSection: renderSearchResultsSection, renderItem: callback };
    const items3 = [results.length];
    obj.sections = items3;
    obj.footerSize = 16;
    obj.scrollIndicatorInsets = closure_12;
    obj.chunkBase = importDefault(dependencyMap[29])().height;
    obj.keyboardShouldPersistTaps = "always";
    tmp5 = callback(importDefault(dependencyMap[31]), obj);
  }
  obj.children = tmp5;
  return callback(View, obj);
});
const result = arg1(dependencyMap[32]).fileFinishedImporting("modules/launchpad/native/LaunchPadSearchResults.tsx");

export const InitialResults = memoResult;
export const SearchResults = memoResult1;
