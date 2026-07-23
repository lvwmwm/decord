// Module ID: 15658
// Function ID: 120792
// Name: renderItemJSX
// Dependencies: [31, 27, 1921, 6879, 1838, 4326, 33, 4130, 689, 15659, 5737, 566, 4549, 15660, 4660, 15661, 15663, 5515, 15664, 15666, 7094, 15667, 15673, 15674, 15676, 14965, 4126, 1324, 1212, 1450, 15662, 7588, 2]

// Module 15658 (renderItemJSX)
import importAllResult from "_isNativeReflectConstruct";
import { View } from "useIsMobileVisualRefreshExperimentEnabled";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_createForOfIteratorHelperLoose";
import { UnreadSetting } from "ReadStateTypes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_9;
const require = arg1;
function renderItemJSX(result) {
  result = result.result;
  if (null == result) {
    return null;
  } else {
    const type = result.type;
    if (require(7094) /* sortByMatchScore */.AutocompleterResultTypes.GUILD === type) {
      let obj = { guild: result.record };
      return callback(closure_14, obj);
    } else if (require(7094) /* sortByMatchScore */.AutocompleterResultTypes.TEXT_CHANNEL === type) {
      obj = { channel: result.record, navigationReplace: true, showGuildBadgeIcon: true };
      return callback(importDefault(15667), obj);
    } else if (require(7094) /* sortByMatchScore */.AutocompleterResultTypes.GROUP_DM === type) {
      let obj1 = { channel: result.record, navigationReplace: true };
      return callback(importDefault(15673), obj1);
    } else if (require(7094) /* sortByMatchScore */.AutocompleterResultTypes.VOICE_CHANNEL === type) {
      const obj2 = { channel: result.record };
      return callback(importDefault(15674), obj2);
    } else if (require(7094) /* sortByMatchScore */.AutocompleterResultTypes.USER === type) {
      ({ record: obj4.user, comparator: obj4.comparator } = result);
      return callback(importDefault(15676), {});
    } else if (require(7094) /* sortByMatchScore */.AutocompleterResultTypes.HEADER === type) {
      obj1 = require(14965) /* renderCategoryItem */;
      const obj4 = { name: result.record.text, styles: tmp, isRefreshEnabled: tmp2 };
      return obj1.renderCategoryItem(obj4);
    } else {
      obj = { variant: "text-sm/semibold", children: result.type };
      return callback(require(4126) /* Text */.Text, obj);
    }
  }
}
function renderSearchResultsSection() {
  const obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.name = intl.string(require(1212) /* getSystemLocale */.t["zkoeq/"]);
  return callback(closure_15, obj);
}
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = jsxProd);
let closure_12 = { bottom: 24 };
let obj = { listContainer: { minHeight: 16 }, list: { flex: -1, marginTop: 8 } };
obj = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.guildIcon = obj;
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.categoryWrapper = _createForOfIteratorHelperLoose;
obj.pressable = { flex: 1 };
obj.pressableUnderlayColor = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_ACTIVE };
let closure_13 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_14 = importAllResult.memo((guild) => {
  let isMentionLowImportance;
  let mentionCount;
  let unread;
  guild = guild.guild;
  const tmp = callback3();
  const tmp2 = importDefault(15659)();
  const items = [guild.id];
  const callback = importAllResult.useCallback(() => {
    guild(outer1_2[10]).transitionToGuild(guild.id);
  }, items);
  let obj = guild(566);
  const items1 = [closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items1, () => ({ unread: outer1_6.hasUnread(guild.id), mentionCount: outer1_6.getMentionCount(guild.id), isMentionLowImportance: outer1_6.getIsMentionLowImportance(guild.id) }));
  ({ unread, mentionCount, isMentionLowImportance } = stateFromStoresObject);
  let obj1 = guild(4549);
  const fontScale = obj1.useFontScale();
  let obj2 = guild(566);
  const items2 = [_isNativeReflectConstruct];
  const stateFromStores = obj2.useStateFromStores(items2, () => outer1_5.locale);
  obj = { onPress: callback, underlayColor: tmp.pressableUnderlayColor.backgroundColor, style: items3 };
  items3 = [tmp.pressable, { borderRadius: tmp2.container.borderRadius }];
  obj = {};
  const tmp7 = importDefault(15660);
  obj1 = { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES };
  const items4 = [callback(importDefault(15663), obj1), , ];
  obj2 = { size: tmp2.icon.guildIconSize, guild, style: items5 };
  items5 = [tmp.guildIcon, tmp2.icon.margin];
  items4[1] = callback(importDefault(5515), obj2);
  const obj3 = { name: guild.name };
  const tmp8 = importDefault(15661);
  obj3.mentionBadge = importDefault(15666)({ mentionCount, locale: stateFromStores, isMentionLowImportance });
  items4[2] = importDefault(15664)(obj3);
  obj.children = items4;
  obj.children = tmp8(callback2(closure_10, obj), { fontScale });
  return tmp7(callback(guild(4660).PressableHighlight, obj));
});
let closure_15 = importAllResult.memo((arg0) => {
  let name;
  let note;
  let onPress;
  ({ name, onPress, note } = arg0);
  let obj = require(14965) /* renderCategoryItem */;
  const categoryStyles = obj.useCategoryStyles();
  const tmp = callback3();
  const tmp3 = importDefault(1324)("WrappedCategoryItem");
  obj = { style: tmp.categoryWrapper, children: require(14965) /* renderCategoryItem */.renderCategoryItem({ name, onPress, note, styles: categoryStyles, isRefreshEnabled: tmp3 }) };
  return callback(View, obj);
});
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_ACTIVE };
const memoResult = importAllResult.memo(function InitialResultsInner(history) {
  history = history.history;
  const unreads = history.unreads;
  const toggleExpandedHistory = history.toggleExpandedHistory;
  const expandedHistory = history.expandedHistory;
  const selectedGuildId = history.selectedGuildId;
  const tmp = callback3();
  let obj = history(toggleExpandedHistory[25]);
  const categoryStyles = obj.useCategoryStyles();
  let tmp3 = unreads(toggleExpandedHistory[27])("InitialResults");
  let closure_6 = tmp3;
  const items = [stateFromStores];
  stateFromStores = history(toggleExpandedHistory[11]).useStateFromStores(items, () => {
    if (null != selectedGuildId) {
      const guild = stateFromStores.getGuild(selectedGuildId);
      let name;
      if (null != guild) {
        name = guild.name;
      }
      return name;
    }
  });
  const items1 = [history, unreads, categoryStyles, tmp3];
  const callback = expandedHistory.useCallback((arg0, arg1) => {
    const obj = {};
    if (0 === arg0) {
      let tmp3 = history[arg1];
    } else {
      tmp3 = unreads[arg1];
    }
    obj.result = tmp3;
    obj.categoryStyles = categoryStyles;
    obj.isRefreshEnabled = closure_6;
    return outer1_16(obj);
  }, items1);
  const someResult = unreads.some((type) => type.type === history(toggleExpandedHistory[20]).AutocompleterResultTypes.VOICE_CHANNEL);
  const UnreadSetting = someResult;
  const items2 = [toggleExpandedHistory, expandedHistory, stateFromStores, someResult];
  const callback1 = expandedHistory.useCallback((arg0) => {
    if (0 === arg0) {
      let obj = {};
      const intl3 = history(toggleExpandedHistory[28]).intl;
      obj.name = intl3.string(history(toggleExpandedHistory[28]).t["Xmh+5e"]);
      obj = { variant: "text-xs/semibold", color: "text-brand" };
      const intl4 = history(toggleExpandedHistory[28]).intl;
      const string = intl4.string;
      let t2 = history(toggleExpandedHistory[28]).t;
      if (expandedHistory) {
        t2 = string(t2["3BdvgI"]);
        obj.children = t2;
        let tmp22 = obj;
      } else {
        obj.children = string(t2["/XSoJ+"]);
        tmp22 = obj;
      }
      obj.note = closure_9(history(toggleExpandedHistory[26]).Text, tmp22);
      obj.onPress = toggleExpandedHistory;
      const tmp19 = closure_9;
    } else {
      const obj1 = {};
      if (null != stateFromStores) {
        const intl2 = history(toggleExpandedHistory[28]).intl;
        let t = history(toggleExpandedHistory[28]).t;
        t = { guildName: stateFromStores };
        intl2.formatToPlainString(closure_8 ? t["+DrQVp"] : t["+lFj35"], t);
        const tmp13 = closure_8 ? t["+DrQVp"] : t["+lFj35"];
      } else {
        const intl = history(toggleExpandedHistory[28]).intl;
        t = history(toggleExpandedHistory[28]).t;
        obj1.name = intl.string(closure_8 ? t.C5viSQ : t.ieCAhD);
        return tmp(tmp2, obj1);
      }
    }
  }, items2);
  const tmp8 = unreads(toggleExpandedHistory[9])();
  let closure_9 = tmp8;
  const obj2 = history(toggleExpandedHistory[11]);
  const fontScale = history(toggleExpandedHistory[12]).useFontScale();
  const items3 = [fontScale, history, unreads, tmp8];
  const callback2 = expandedHistory.useCallback((arg0, arg1) => {
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
    obj = { optimizeListItemRender: true, batchesToRender: 6, style: tmp.list, sectionSize: tmp8.category.height, itemSize: callback2, renderItem: callback, renderSection: callback1 };
    const items4 = [tmp11, unreads.length];
    obj.sections = items4;
    obj.sectionFooterSize = 8;
    obj.footerSize = 8;
    obj.scrollIndicatorInsets = closure_12;
    obj.chunkBase = unreads(toggleExpandedHistory[29])().height;
    obj.keyboardShouldPersistTaps = "always";
    let str2 = "default";
    if (null != selectedGuildId) {
      str2 = selectedGuildId;
    }
    let tmp15Result = closure_9(unreads(toggleExpandedHistory[31]), obj, str2);
    const tmp15 = closure_9;
    const tmp18 = unreads(toggleExpandedHistory[31]);
  } else {
    tmp15Result = null;
  }
  obj.children = tmp15Result;
  return closure_9(selectedGuildId, obj);
});
const memoResult1 = importAllResult.memo(function SearchResultsInner(results) {
  results = results.results;
  const tmp = callback3();
  let obj = results(14965);
  const categoryStyles = obj.useCategoryStyles();
  const tmp3 = categoryStyles(1324)("SearchResults");
  const dependencyMap = tmp3;
  const items = [results, categoryStyles, tmp3];
  let tmp5 = null;
  const callback = ref.useCallback((arg0, arg1) => outer1_16({ result: results[arg1], categoryStyles, isRefreshEnabled: closure_2 }), items);
  ref = ref.useRef(null);
  const items1 = [results.query];
  const effect = ref.useEffect(() => {
    const current = ref.current;
    if (!tmp) {
      current.scrollToTop(false);
    }
  }, items1);
  const tmp8 = categoryStyles(15659)();
  const View = tmp8;
  const fontScale = results(4549).useFontScale();
  const items2 = [fontScale, results, tmp8];
  obj = { style: tmp.listContainer };
  if (results.length > 0) {
    obj = { ref, optimizeListItemRender: true, batchesToRender: 6, style: tmp.list, sectionSize: tmp8.category.height, itemSize: tmp10, renderSection: renderSearchResultsSection, renderItem: callback };
    const items3 = [results.length];
    obj.sections = items3;
    obj.footerSize = 16;
    obj.scrollIndicatorInsets = closure_12;
    obj.chunkBase = categoryStyles(1450)().height;
    obj.keyboardShouldPersistTaps = "always";
    tmp5 = callback(categoryStyles(7588), obj);
  }
  obj.children = tmp5;
  return callback(View, obj);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/launchpad/native/LaunchPadSearchResults.tsx");

export const InitialResults = memoResult;
export const SearchResults = memoResult1;
