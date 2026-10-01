// Module ID: 16806
// Function ID: 16807
// Name: LaunchPadSearchResults
// Dependencies: [19, 17, 2112, 7050, 2067, 5018, 21, 4836, 576, 16479, 6760, 504, 5288, 16807, 5435, 16480, 16808, 5896, 16482, 16809, 9290, 16810, 16815, 16816, 16818, 15738, 4832, 1115, 1479, 16481, 6493, 2]

// Module 16806 (LaunchPadSearchResults)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import ReadStateConstants from "ReadStateConstants" /* 5018 */;
import GuildIconDefault from "GuildIcon" /* 5896 */;
import transitionToGuild from "transitionToGuild" /* 6760 */;
import _mod9290 from "module_9290" /* 9290 */;
import RedesignCategory from "RedesignCategory" /* 15738 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 16479 */;
import renderChannelWrapperDefault from "renderChannelWrapper" /* 16480 */;
import getScaledChannelRowHeightDefault from "getScaledChannelRowHeight" /* 16481 */;
import renderChannelContentDefault from "renderChannelContent" /* 16482 */;
import renderChannelPressableWrapperDefault from "renderChannelPressableWrapper" /* 16807 */;
import UnreadBadgeDefault from "UnreadBadge" /* 16808 */;
import renderChannelBadgeDefault from "renderChannelBadge" /* 16809 */;
import shared_TextChannelDefault from "shared/TextChannel" /* 16810 */;
import shared_DMChannelDefault from "shared/DMChannel" /* 16815 */;
import VoiceOrStageChannelDefault from "VoiceOrStageChannel" /* 16816 */;
import LaunchPadSearchResultUserDefault from "LaunchPadSearchResultUser" /* 16818 */;
import react_mod from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7050 */;
import GuildStore from "GuildStore" /* 2067 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
function renderItemJSX(result) {
  result = result.result;
  if (null == result) {
    return null;
  } else {
    const type = result.type;
    if (_mod9290.AutocompleterResultTypes.GUILD === type) {
      const obj2 = { guild: result.record };
      return React4(closure_14, obj2);
    } else if (_mod9290.AutocompleterResultTypes.TEXT_CHANNEL === type) {
      const obj3 = { channel: result.record, navigationReplace: true, showGuildBadgeIcon: true };
      return React4(shared_TextChannelDefault, obj3);
    } else if (_mod9290.AutocompleterResultTypes.GROUP_DM === type) {
      const obj5 = { channel: result.record, navigationReplace: true };
      return React4(shared_DMChannelDefault, obj5);
    } else if (_mod9290.AutocompleterResultTypes.VOICE_CHANNEL === type) {
      const obj6 = { channel: result.record };
      return React4(VoiceOrStageChannelDefault, obj6);
    } else if (_mod9290.AutocompleterResultTypes.USER === type) {
      const obj7 = { user: null, comparator: null };
      ({ record: obj4.user, comparator: obj4.comparator } = result);
      return React4(LaunchPadSearchResultUserDefault, obj7);
    } else if (_mod9290.AutocompleterResultTypes.HEADER === type) {
      const obj8 = { name: result.record.text, styles: tmp };
      const tmp13Result = RedesignCategory;
      return tmp13Result.renderCategoryItem(obj8);
    } else {
      const obj = { variant: "text-sm/semibold", children: result.type };
      return React4(Text_Text.Text, obj);
    }
  }
}
function renderSearchResultsSection() {
  let intl;
  const obj = { name: intl.string(intl5.t["zkoeq/"]) };
  intl = intl5.intl;
  return React4(closure_16, obj);
}
let react = react_mod;
const View = react_native.View;
const UnreadSetting = ReadStateConstants.UnreadSetting;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
const scrollIndicatorInsets = { bottom: 24 };
let createStyles = createStyles_mod;
let obj = { listContainer: { minHeight: 16 }, list: { flex: -1, marginTop: 8 }, guildIcon: obj2, categoryWrapper: obj3, pressable: { flex: 1 }, pressableUnderlayColor: obj4 };
obj2 = { borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj4 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
let closure_13 = createStyles(obj);
let closure_14 = react.memo((guild) => {
  let isMentionLowImportance;
  let items3;
  let items4;
  let items5;
  let locale;
  let mentionCount;
  let obj5;
  let tmp8;
  let unread;
  guild = guild.guild;
  const tmp = closure_13();
  const tmp2 = getLayoutStylesDefault();
  const items = [guild.id];
  const callback = react.useCallback(() => {
    const obj = transitionToGuild;
    obj.transitionToGuild(guild.id);
  }, items);
  let obj = guild(504);
  const items1 = [GuildReadStateStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items1, () => {
    const obj = { unread: GuildReadStateStore.hasUnread(guild.id), mentionCount: GuildReadStateStore.getMentionCount(guild.id), isMentionLowImportance: GuildReadStateStore.getIsMentionLowImportance(guild.id) };
    return obj;
  });
  ({ unread, mentionCount, isMentionLowImportance } = stateFromStoresObject);
  const obj2 = guild(5288);
  const fontScale = obj2.useFontScale();
  const items2 = [LocaleStore];
  const obj3 = guild(504);
  const stateFromStores = obj3.useStateFromStores(items2, () => locale.locale);
  const obj4 = { onPress: callback, underlayColor: tmp.pressableUnderlayColor.backgroundColor, style: items3, children: tmp8(closure_11(closure_10, obj5), { fontScale }) };
  items3 = [tmp.pressable, { borderRadius: tmp2.container.borderRadius }];
  const tmp7 = renderChannelPressableWrapperDefault;
  const PressableHighlight = guild(5435).PressableHighlight;
  obj5 = { children: items4 };
  items4 = [, , ];
  const obj6 = { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES };
  tmp8 = renderChannelWrapperDefault;
  items4[0] = closure_9(UnreadBadgeDefault, obj6);
  const obj7 = { size: tmp2.icon.guildIconSize, guild, style: items5 };
  items5 = [tmp.guildIcon, tmp2.icon.margin];
  items4[1] = closure_9(GuildIconDefault, obj7);
  const obj8 = { name: guild.name, mentionBadge: renderChannelBadgeDefault({ mentionCount, locale: stateFromStores, isMentionLowImportance }) };
  const tmp9 = renderChannelContentDefault;
  items4[2] = tmp9(obj8);
  return tmp7(closure_9(PressableHighlight, obj4));
});
let closure_16 = react.memo((arg0) => {
  let name;
  let note;
  let onPress;
  ({ name, onPress, note } = arg0);
  const tmp = closure_13();
  const obj = RedesignCategory;
  const categoryStyles = obj.useCategoryStyles();
  const obj2 = RedesignCategory;
  const obj3 = { style: tmp.categoryWrapper, children: obj2.renderCategoryItem({ name, onPress, note, noteAlignment: "end", styles: categoryStyles }) };
  return React4(View, obj3);
});
const memoResult = react.memo(function InitialResultsInner(history) {
  let items4;
  let tmp13Result;
  history = history.history;
  const unreads = history.unreads;
  const toggleExpandedHistory = history.toggleExpandedHistory;
  const expandedHistory = history.expandedHistory;
  let str = history.selectedGuildId;
  let c7;
  let tmp = closure_13();
  let tmp2 = toggleExpandedHistory;
  let obj = history(toggleExpandedHistory[25]);
  const categoryStyles = obj.useCategoryStyles();
  let obj2 = history(toggleExpandedHistory[11]);
  const items = [c7];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    if (null != str) {
      const guild = GuildStore.getGuild(tmp);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      return name;
    }
  });
  const items1 = [history, unreads, categoryStyles];
  const height = unreads(toggleExpandedHistory[28])().height;
  const callback = expandedHistory.useCallback((arg0, arg1) => {
    let tmp3;
    const tmp = renderItemJSX;
    if (0 === arg0) {
      tmp3 = history[arg1];
    } else {
      tmp3 = unreads[arg1];
    }
    const obj = { result: tmp3, categoryStyles };
    return tmp(obj);
  }, items1);
  const someResult = unreads.some((type) => type.type === history(toggleExpandedHistory[20]).AutocompleterResultTypes.VOICE_CHANNEL);
  c7 = someResult;
  const items2 = [toggleExpandedHistory, expandedHistory, stateFromStores, someResult];
  const callback1 = expandedHistory.useCallback((arg0) => {
    let Text;
    let intl3;
    let obj4;
    let tmp13;
    const tmp2 = closure_16;
    if (0 === arg0) {
      const obj2 = { name: intl3.string(intl5.t["Xmh+5e"]), note: React4(Text, tmp13), onPress: toggleExpandedHistory };
      intl3 = intl5.intl;
      const obj3 = { variant: "text-xs/semibold", color: "text-brand", children: null };
      Text = Text_Text.Text;
      const intl4 = intl5.intl;
      const string2 = intl4.string;
      const t3 = intl5.t;
      if (expandedHistory) {
        obj3.children = string2(t3["3BdvgI"]);
        tmp13 = obj3;
      } else {
        obj3.children = string2(t3["/XSoJ+"]);
        tmp13 = obj3;
      }
      obj4 = obj2;
    } else {
      let formatToPlainStringResult;
      if (null != stateFromStores) {
        const intl2 = intl5.intl;
        const formatToPlainString = intl2.formatToPlainString;
        const t2 = intl5.t;
        const obj = { guildName: tmp15 };
        formatToPlainStringResult = formatToPlainString(c7 ? t2["+DrQVp"] : t2["+lFj35"], obj);
      } else {
        const intl = intl5.intl;
        const string = intl.string;
        const t = intl5.t;
        formatToPlainStringResult = string(c7 ? t.C5viSQ : t.ieCAhD);
      }
      obj4 = { name: formatToPlainStringResult };
    }
    return React4(tmp2, obj4);
  }, items2);
  const tmp9 = unreads(toggleExpandedHistory[9])();
  const voiceUsers = tmp9;
  let obj3 = history(toggleExpandedHistory[12]);
  const fontScale = obj3.useFontScale();
  const items3 = [fontScale, history, unreads, tmp9];
  const callback2 = expandedHistory.useCallback((arg0, arg1) => {
    let num = 0;
    if (null != arg1) {
      let tmp3;
      let diff;
      if (0 === arg0) {
        tmp3 = history[arg1];
      } else {
        tmp3 = unreads[arg1];
      }
      if (tmp3.type === _mod9290.AutocompleterResultTypes.VOICE_CHANNEL) {
        diff = getScaledChannelRowHeightDefault(fontScale) + voiceUsers.voiceUsers.height - 2;
      } else {
        diff = getScaledChannelRowHeightDefault(fontScale);
      }
      num = diff;
    }
    return num;
  }, items3);
  const tmp5 = unreads;
  if (!expandedHistory) {
    const _Math = Math;
    let num = 5;
    Math.max(5 - unreads.length, 2);
  }
  let tmp13 = fontScale;
  let obj4 = { style: tmp.listContainer, children: tmp13Result };
  const tmp14 = str;
  if (history.length > 0) {
    const obj5 = { optimizeListItemRender: true, batchesToRender: 6, style: tmp.list, sectionSize: tmp9.category.height, itemSize: callback2, renderItem: callback, renderSection: callback1, sections: items4, sectionFooterSize: 8, footerSize: 8, scrollIndicatorInsets, chunkBase: height, keyboardShouldPersistTaps: "always" };
    items4 = [tmp12, unreads.length];
    const tmp5Result = tmp5(tmp2[30]);
    if (str == null) {
      str = "default";
    }
    tmp13Result = tmp13(tmp5Result, obj5, str);
  } else {
    tmp13Result = null;
  }
  return tmp13(tmp14, obj4);
});
const memoResult1 = react.memo(function SearchResultsInner(results) {
  let items3;
  let tmp11Result;
  let voiceUsers;
  results = results.results;
  let ref;
  react = undefined;
  const query = results.query;
  const tmp = closure_13();
  let obj = results(ref[25]);
  const categoryStyles = obj.useCategoryStyles();
  const items = [results, categoryStyles];
  const height = categoryStyles(ref[28])().height;
  const callback = react.useCallback((arg0, arg1) => {
    const obj = { result: results[arg1], categoryStyles };
    return renderItemJSX(obj);
  }, items);
  const tmp2 = ref;
  ref = react.useRef(null);
  const items1 = [query];
  const effect = react.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      const scrollToTop = current.scrollToTop;
      if (scrollToTop != null) {
        scrollToTop(false);
      }
    }
  }, items1);
  const tmp8 = categoryStyles(ref[9])();
  react = tmp8;
  const obj2 = results(ref[12]);
  const fontScale = obj2.useFontScale();
  const items2 = [fontScale, results, tmp8];
  const obj3 = { style: tmp.listContainer, children: tmp11Result };
  tmp11Result = null;
  const tmp12 = fontScale;
  const tmp4 = categoryStyles;
  if (results.length > 0) {
    const obj4 = { ref, optimizeListItemRender: true, batchesToRender: 6, style: tmp.list, sectionSize: tmp8.category.height, itemSize: tmp10, renderSection: renderSearchResultsSection, renderItem: callback, sections: items3, footerSize: 16, scrollIndicatorInsets, chunkBase: height, keyboardShouldPersistTaps: "always" };
    items3 = [results.length];
    tmp11Result = tmp11(tmp4(tmp2[30]), obj4);
  }
  return closure_9(tmp12, obj3);
});
let result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadSearchResults.tsx");

export const InitialResults = memoResult;
export const SearchResults = memoResult1;
