// Module ID: 12038
// Function ID: 12039
// Name: AutocompleteWrapper
// Dependencies: [32, 19, 17, 7419, 5645, 5443, 5694, 1085, 5795, 10085, 5796, 10166, 1380, 21, 5901, 6541, 10167, 4896, 1369, 587, 12039, 558, 576, 1484, 6478, 6075, 504, 4586, 10736, 12046, 12047, 2028, 6080, 10165, 12048, 6847, 10084, 5708, 9880, 12049, 7043, 11619, 1985, 7180, 1616, 5076, 8600, 8597, 12050, 12051, 8848, 5814, 11874, 4618, 12052, 7047, 12059, 4892, 1126, 8928, 12060, 12061, 2]

// Module 12038 (AutocompleteWrapper)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import EmojiConstants from "EmojiConstants" /* 1380 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import KeyboardTypes from "KeyboardTypes" /* 1616 */;
import Server from "Server" /* 1985 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5076 */;
import utils_AutocompleteUtilsDefault from "utils/AutocompleteUtils" /* 5708 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5795 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 5901 */;
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils" /* 6541 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7047 */;
import GameSearchSession from "GameSearchSession" /* 8600 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 8848 */;
import autocompleter_AutocompleteUtils from "autocompleter/AutocompleteUtils" /* 10084 */;
import AutocompleteOptions from "AutocompleteOptions" /* 10165 */;
import channel_text_area_ChannelAutocompleteConstants from "channel_text_area/ChannelAutocompleteConstants" /* 10166 */;
import TimestampSuggestionUtils from "TimestampSuggestionUtils" /* 10167 */;
import Autocomplete from "Autocomplete" /* 12039 */;
import ChannelAutocompleteAnalytics from "ChannelAutocompleteAnalytics" /* 12050 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationCommandStore from "ApplicationCommandStore" /* 7419 */;
import EmojiStore from "EmojiStore" /* 5645 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5443 */;
import StickersStore from "StickersStore" /* 5694 */;
import Constants from "Constants" /* 1085 */;
import ApplicationCommandsConstants from "ApplicationCommandsConstants" /* 10085 */;
import ChannelAutocompleteConstants from "ChannelAutocompleteConstants" /* 5796 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let analyticsLocations;

let StyleSheet;
let closure_12;
let closure_14;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_26;
let closure_27;
let closure_28;
let hasOwnProperty;
let map1;
let metroRequire;
let tmp;
let tmp5;
let unpackModuleId;
const NavigatorConstants = tmp(6075);
const useSafeAreaInsetsKeyboardAwareDefault = tmp5(6478);
const application_commands_ApplicationCommandUtils = tmp(11874);
function getStickersItemLayout(arg0, index) {
  let diff;
  let result;
  obj = { length: Autocomplete.AUTOCOMPLETE_STICKER_NODE_SIZE, offset: result + diff * Autocomplete.AUTOCOMPLETE_STICKER_NODE_MARGIN, index };
  result = index * (Autocomplete.AUTOCOMPLETE_STICKER_NODE_SIZE + Autocomplete.AUTOCOMPLETE_STICKER_NODE_MARGIN);
  diff = index - 1;
  return obj;
}
({ View: hasOwnProperty, FlatList: metroRequire, StyleSheet } = react_native);
({ AutoCompleteResultTypes: unpackModuleId, WHITESPACE_RE: closure_12, AnalyticEvents: map1, UpsellTypes: closure_14 } = Constants);
const BOOLEAN_CHOICES = ApplicationCommandConstants.BOOLEAN_CHOICES;
({ AUTOCOMPLETE_EMOJI_ROW_HEIGHT: closure_16, AUTOCOMPLETE_ROW_HEIGHT: closure_17 } = ApplicationCommandsConstants);
({ MENTION_SENTINEL: closure_18, CHANNEL_SENTINEL: closure_19, EMOJI_SENTINEL: closure_20, COMMAND_SENTINEL: closure_21, GAME_MENTION_INPUT_PREFIX: closure_22, TIMESTAMP_MENTION_INPUT_PREFIX: closure_23 } = ChannelAutocompleteConstants);
const AutocompleteTypes = channel_text_area_ChannelAutocompleteConstants.AutocompleteTypes;
const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
({ jsx: closure_26, Fragment: closure_27, jsxs: closure_28 } = Fragment);
let c29 = "text-sm/semibold";
const hairlineWidth = StyleSheet.hairlineWidth;
let c31 = 200;
let closure_32 = { allowSpaces: true, maxQueryLength: 64 };
let obj = { allowSpaces: true, maxQueryLength: GameAutocompleteUtils.GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH };
let closure_34 = createStyles.createStyles((borderRadius, borderWidth, borderTopWidth, marginHorizontal, marginBottom) => {
  let str;
  obj = { autocompletePositionRelative: { position: "relative" }, autocompleteWrapper: { position: str, marginHorizontal, marginBottom }, autocompleteContainer: { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, borderRadius, borderWidth, borderTopWidth, borderColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, overflow: "hidden" }, autocomplete: { flexGrow: 0, flexShrink: 1, backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND }, sectionDivider: { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, marginLeft: -16 }, sectionTitle: { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, paddingLeft: 12, marginVertical: 12, justifyContent: "center" }, stickersAutocompleteList: { paddingLeft: 12 - Autocomplete.AUTOCOMPLETE_STICKER_NODE_MARGIN, marginBottom: 12, height: Autocomplete.AUTOCOMPLETE_STICKER_NODE_SIZE, flexShrink: 0 } };
  str = "absolute";
  const obj2 = PlatformUtils;
  if (obj2.isAndroid()) {
    str = "relative";
  }
  ({ backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, borderRadius, borderWidth, borderTopWidth, borderColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, overflow: "hidden" });
  ({ flexGrow: 0, flexShrink: 1, backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND });
  ({ backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, marginLeft: -16 });
  ({ backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, paddingLeft: 12, marginVertical: 12, justifyContent: "center" });
  ({ paddingLeft: 12 - Autocomplete.AUTOCOMPLETE_STICKER_NODE_MARGIN, marginBottom: 12, height: Autocomplete.AUTOCOMPLETE_STICKER_NODE_SIZE, flexShrink: 0 });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_36 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let tmp7;
  obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { ignoreKeyboard: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp6 = useWindowDimensionsDefault(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    cResult[1] = obj3;
    tmp7 = obj3;
  } else {
    tmp7 = cResult[1];
  }
  const insets = useSafeAreaInsetsKeyboardAwareDefault(tmp7).insets;
  const diff = tmp6.height - insets.top - insets.bottom;
  return diff - NavigatorConstants.NAV_BAR_HEIGHT - arg0;
}) : ((arg0) => {
  const tmp = useWindowDimensionsDefault({ ignoreKeyboard: true });
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const diff = tmp.height - insets.top - insets.bottom;
  return diff - NavigatorConstants.NAV_BAR_HEIGHT - arg0;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_37 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let tmp3;
  let tmp4;
  let tmp9;
  obj = react2;
  const cResult = obj.c(3);
  [tmp3, tmp4] = _slicedToArray(react.useState(null), 2);
  let closure_0 = tmp4;
  const tmp2 = _slicedToArray(react.useState(null), 2);
  const tmp5 = _slicedToArray(react.useState(arg0), 2);
  if (tmp5[0] !== arg0) {
    tmp5[1](arg0);
    tmp4(null);
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(arg0) {
      if (arg0 > 0) {
        let tmp = globalThis;
        const _Math = Math;
        const tmp4 = Math.round(arg0);
        tmp4((arg0) => {
          let tmp = closure_0;
          if (arg0 === closure_0) {
            tmp = arg0;
          }
          return tmp;
        });
      }
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp3) {
    const items = [tmp3, first];
    cResult[1] = tmp3;
    cResult[2] = items;
    tmp9 = items;
  } else {
    tmp9 = cResult[2];
  }
  return tmp9;
}) : ((arg0) => {
  let first;
  let tmp3;
  [first, tmp3] = react.useState(null);
  let closure_0 = tmp3;
  const tmp4 = _slicedToArray(react.useState(arg0), 2);
  obj = react;
  if (tmp4[0] !== arg0) {
    tmp4[1](arg0);
    tmp3(null);
  }
  const items = [
    first,
    obj.useCallback((arg0) => {
      if (arg0 > 0) {
        let tmp = globalThis;
        const _Math = Math;
        closure_0 = Math.round(arg0);
        closure_0((arg0) => {
          let tmp = closure_0;
          if (arg0 === closure_0) {
            tmp = arg0;
          }
          return tmp;
        });
      }
    }, [])
  ];
  return items;
});
let closure_38 = { resultCount: 0, stickerResults: [], nonStickerResults: [], hasStickerResults: false, hasNonStickerResults: false };
const forwardRefResult = react.forwardRef((analyticsLocations, ref) => {
  let Text;
  let Text2;
  let _undefined;
  let _undefined2;
  let c25;
  let c40;
  let c41;
  let canOnlyUseTextCommands;
  let format;
  let intl;
  let items24;
  let items25;
  let items27;
  let items28;
  let items30;
  let items31;
  let ksAVYt;
  let num3;
  let obj15;
  let obj16;
  let obj18;
  let obj22;
  let obj23;
  let obj30;
  let screenIndex;
  let setChatInputHeight;
  let str;
  let tmp22;
  let tmp31;
  let tmp33;
  let tmp68Result4;
  analyticsLocations = analyticsLocations.analyticsLocations;
  const channel = analyticsLocations.channel;
  let canMentionEveryone = analyticsLocations.canMentionEveryone;
  const keyboardType = analyticsLocations.keyboardType;
  const onChangeAutoCompleteVisibility = analyticsLocations.onChangeAutoCompleteVisibility;
  const commandsDisabled = analyticsLocations.commandsDisabled;
  const chatInputRef = analyticsLocations.chatInputRef;
  let optionStates;
  c25 = undefined;
  let beginSearch;
  let beginSearch2;
  let closure_33;
  let autocompleteSelectionStart;
  c40 = undefined;
  c41 = undefined;
  let closure_44;
  let callback;
  let callback1;
  let memo2;
  ref = undefined;
  let ref2;
  let closure_51;
  let memo3;
  let first3;
  let closure_54;
  let closure_55;
  let token5;
  let callback2;
  let callback4;
  let first4;
  let closure_60;
  let tmp = analyticsLocations;
  let tmp2 = canMentionEveryone;
  ({ canOnlyUseTextCommands, screenIndex } = analyticsLocations);
  obj = analyticsLocations(canMentionEveryone[26]);
  let items = [optionStates];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    obj = { optionStates: ApplicationCommandStore.getOptionStates(channel.id), activeOption: ApplicationCommandStore.getActiveOption(channel.id), activeCommand: ApplicationCommandStore.getActiveCommand(channel.id), activeSection: ApplicationCommandStore.getActiveCommandSection(channel.id) };
    return obj;
  });
  optionStates = stateFromStoresObject.optionStates;
  const activeOption = stateFromStoresObject.activeOption;
  const activeCommand = stateFromStoresObject.activeCommand;
  const activeSection = stateFromStoresObject.activeSection;
  let obj2 = analyticsLocations(canMentionEveryone[27]);
  let tmp4 = channel;
  const token = obj2.useToken(channel(canMentionEveryone[19]).modules.mobile.TABLE_ROW_HEIGHT);
  let obj3 = analyticsLocations(canMentionEveryone[28]);
  let tmp6 = beginSearch;
  const scaledTextLineHeight = obj3.useScaledTextLineHeight(beginSearch);
  let tmp8 = channel(canMentionEveryone[29])();
  let obj4 = analyticsLocations(canMentionEveryone[30]);
  let timestampSearchHeaderHeight = obj4.useTimestampSearchHeaderHeight();
  const IncludeStickersInAutocomplete = analyticsLocations(canMentionEveryone[31]).IncludeStickersInAutocomplete;
  const setting = IncludeStickersInAutocomplete.getSetting();
  let obj5 = onChangeAutoCompleteVisibility;
  const tmp12 = keyboardType(onChangeAutoCompleteVisibility.useState(autocompleteSelectionStart), 2);
  const first = tmp12[0];
  const resultCount = first.resultCount;
  const stickerResults = first.stickerResults;
  const nonStickerResults = first.nonStickerResults;
  let hasStickerResults = first.hasStickerResults;
  let hasNonStickerResults = first.hasNonStickerResults;
  let closure_18 = tmp12[1];
  let obj6 = analyticsLocations(canMentionEveryone[26]);
  let items1 = [activeOption];
  const stateFromStores = obj6.useStateFromStores(items1, () => activeOption.loadState);
  let obj7 = analyticsLocations(canMentionEveryone[26]);
  const items2 = [token];
  const stateFromStores1 = obj7.useStateFromStores(items2, () => token.loadState);
  const context = onChangeAutoCompleteVisibility.useContext(analyticsLocations(canMentionEveryone[32]).RedesignCompatContext);
  const items3 = [channel, setting];
  const memo = onChangeAutoCompleteVisibility.useMemo(() => {
    obj = AutocompleteOptions;
    return obj.getAutocompleteOptions(channel, true, setting);
  }, items3);
  let tmp18 = keyboardType(onChangeAutoCompleteVisibility.useState({ focused: false, text: "", selectionStart: 0, selectionEnd: 0 }), 2);
  const first1 = tmp18[0];
  const focused = first1.focused;
  let text = first1.text;
  let c22 = text;
  const selectionStart = first1.selectionStart;
  let selectionEnd = first1.selectionEnd;
  const tmp20 = tmp18[1];
  [tmp22, c25] = keyboardType(onChangeAutoCompleteVisibility.useState(0), 2);
  const tmp21 = keyboardType(onChangeAutoCompleteVisibility.useState(0), 2);
  const IncludeGameMentionsInAutocomplete = analyticsLocations(canMentionEveryone[31]).IncludeGameMentionsInAutocomplete;
  const setting1 = IncludeGameMentionsInAutocomplete.getSetting();
  const tmp24 = channel(canMentionEveryone[34])(text, selectionEnd, setting1, c22, closure_33);
  const anchor = tmp24.anchor;
  beginSearch = tmp24.beginSearch;
  const TimestampAutocompleteMobileExperiment = analyticsLocations(canMentionEveryone[35]).TimestampAutocompleteMobileExperiment;
  const enabled = TimestampAutocompleteMobileExperiment.getConfig({ location: "AutocompleteWrapper timestamp search" }).enabled;
  const tmp25 = channel(canMentionEveryone[34])(text, selectionEnd, enabled, selectionStart, beginSearch2);
  const anchor2 = tmp25.anchor;
  beginSearch2 = tmp25.beginSearch;
  closure_33 = onChangeAutoCompleteVisibility.useRef({ text: "", selectionEnd: 0 });
  const items4 = [activeOption, beginSearch, beginSearch2, chatInputRef, setting1, anchor, enabled, anchor2, selectionEnd, selectionStart, text];
  const effect = onChangeAutoCompleteVisibility.useEffect(() => {
    text = closure_33.current.text;
    selectionEnd = closure_33.current.selectionEnd;
    closure_33.current.text = text;
    closure_33.current.selectionEnd = selectionEnd;
    if (text.length >= 6) {
      if (null == activeOption) {
        if (selectionStart === selectionEnd) {
          if (" " === text[selectionEnd - 1]) {
            const obj3 = autocompleter_AutocompleteUtils;
            const result = obj3.findAutoInsertOnSpaceToken(tmp, tmp2, authStore4);
            if (null != result) {
              const obj4 = utils_AutocompleteUtilsDefault;
              const result1 = obj4.findAutoInsertOnSpaceMentionInlineAutocompleteType(result.trigger);
              if ("gameMentionInput" === result1) {
                const tmp16 = setting1;
                if (tmp16) {
                  if (null == anchor) {
                    const tmp33Result = autocompleter_AutocompleteUtils;
                    if (tmp33Result.isSpaceJustTypedAtCaret(text, selectionEnd, text, selectionEnd)) {
                      const current2 = chatInputRef.current;
                      current2.insertText(afk, result.tokenStart, false, undefined, selectionEnd);
                      beginSearch(result.tokenStart);
                    }
                  }
                }
              } else if ("timestampMentionInput" === result1) {
                const tmp39 = enabled;
                if (tmp39) {
                  if (null == anchor2) {
                    const tmp33Result2 = autocompleter_AutocompleteUtils;
                    if (tmp33Result2.isSpaceJustTypedAtCaret(text, selectionEnd, text, selectionEnd)) {
                      const current = chatInputRef.current;
                      current.insertText(closure_23, result.tokenStart, false, undefined, selectionEnd);
                      beginSearch2(result.tokenStart);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }, items4);
  const effect1 = onChangeAutoCompleteVisibility.useEffect(() => {
    let c0 = false;
    let result = activeCommand.addConditionalChangeListener(() => {
      let tmp = !c0;
      if (tmp) {
        let flag;
        if (activeCommand.isConnected()) {
          obj = analyticsLocations(canMentionEveryone[38]);
          const result = obj.initiateEmojiInteraction(c25.AutocompleteWrapperShown);
          flag = false;
        }
        tmp = flag;
      }
      return tmp;
    });
    return () => {
      c0 = true;
    };
  }, []);
  const setData = channel(canMentionEveryone[39])(tmp20, 16).setData;
  const items5 = [setData];
  const imperativeHandle = onChangeAutoCompleteVisibility.useImperativeHandle(ref, () => ({ setChatInputHeight, setData }), items5);
  const items6 = [selectionStart, selectionEnd, text, activeCommand, optionStates, activeOption, canMentionEveryone, commandsDisabled, memo, stateFromStores, stateFromStores1, setting1, anchor, anchor2];
  const memo1 = onChangeAutoCompleteVisibility.useMemo(() => {
    let obj10;
    let obj12;
    let obj14;
    let obj8;
    let str6;
    let tmp50;
    let tmp51;
    let tmp52;
    let tmp = selectionStart;
    canMentionEveryone = selectionStart;
    if (null != text) {
      if (0 !== text.trim().length) {
        let applicationCommandOptionQueryOptions;
        let prefix;
        let tmp8;
        let tmp9;
        if (null != activeOption) {
          let tmp4 = canMentionEveryone;
          const obj2 = analyticsLocations(canMentionEveryone[40]);
          applicationCommandOptionQueryOptions = obj2.getApplicationCommandOptionQueryOptions(tmp82);
        } else {
          applicationCommandOptionQueryOptions = { canMentionEveryone, canMentionHere: canMentionEveryone, canMentionChannels: true, canMentionUsers: true, canMentionRoles: true, canMentionAnyGuildUser: false, canMentionNonMentionableRoles: false, canMentionOtherGlobals: true };
          const tmp2 = canMentionEveryone;
        }
        let tmp5;
        if (null != activeOption) {
          let tmp6 = optionStates;
          tmp5 = optionStates[tmp82.name];
        }
        if (null != activeCommand) {
          if (null != activeOption) {
            if (null != tmp5) {
              let num = tmp5.location;
              if (num == null) {
                num = 0;
              }
              let num2 = tmp5.length;
              if (num2 == null) {
                num2 = 0;
              }
              const sum = num + num2;
              let substr;
              if (tmp >= sum) {
                const substring = str.substring;
                const obj3 = analyticsLocations(canMentionEveryone[41]);
                substr = substring(sum, obj3.getCommandOptionValueEnd(str, sum, tmp7));
              }
              query = substr;
              if (null == activeOption.choices) {
                let CHOICES;
                let choices;
                let flag;
                let str2;
                let channelTypes;
                if (!activeOption.autocomplete) {
                  const type = tmp82.type;
                  if (analyticsLocations(canMentionEveryone[42]).ApplicationCommandOptionType.BOOLEAN === type) {
                    prefix = "";
                    CHOICES = selectionEnd.CHOICES;
                    choices = nonStickerResults;
                    flag = true;
                    str2 = "";
                  } else if (analyticsLocations(canMentionEveryone[42]).ApplicationCommandOptionType.CHANNEL === type) {
                    prefix = context;
                    CHOICES = selectionEnd.CHANNELS;
                    channelTypes = tmp82.channelTypes;
                    flag = true;
                    str2 = context;
                  } else {
                    if (analyticsLocations(canMentionEveryone[42]).ApplicationCommandOptionType.ROLE !== type) {
                      if (analyticsLocations(canMentionEveryone[42]).ApplicationCommandOptionType.USER !== type) {
                        flag = false;
                      }
                    }
                    prefix = closure_18;
                    CHOICES = selectionEnd.MENTIONS;
                    flag = true;
                    str2 = closure_18;
                  }
                }
                tmp8 = substr;
                tmp9 = CHOICES;
                if (flag) {
                  let tmp75 = substr;
                  const startsWithResult = null != str2 && "" !== str2 && null != substr && substr.startsWith(str2);
                  if (startsWithResult) {
                    let str8 = "";
                    if (substr.length > str2.length) {
                      str8 = substr.substring(str2.length);
                    }
                    query = str8;
                    tmp75 = str8;
                  }
                  const optionValues = {};
                  const _Object2 = Object;
                  const entries = Object.entries(optionStates);
                  const item = entries.forEach((item) => {
                    let tmp;
                    let tmp2;
                    [tmp, tmp2] = item;
                    if (null != tmp2.optionValue) {
                      obj[tmp] = tmp2.optionValue;
                    }
                  });
                  const obj7 = { query: tmp75, autocompleteType: CHOICES, autocompleteSelectionStart: num + num2, queryOptions: obj8, showOptionValuesPicker: flag };
                  obj8 = { activeCommand, optionValues, isActiveApplicationCommand: flag, option: activeOption, choices, channelTypes };
                  const merged = Object.assign(applicationCommandOptionQueryOptions);
                  return obj7;
                }
              }
              prefix = "";
              CHOICES = selectionEnd.CHOICES;
              choices = tmp82.choices;
              flag = true;
              str2 = "";
            }
          }
        }
        const tmp26 = setting1;
        if (tmp26) {
          if (null != anchor) {
            const obj9 = { query: str6.toLowerCase(), autocompleteType: selectionEnd.GAME_MENTIONS, autocompleteSelectionStart: anchor, queryOptions: obj10 };
            obj10 = {};
            str6 = text.slice(anchor + text.length, selectionEnd);
            const merged1 = Object.assign(applicationCommandOptionQueryOptions);
            return obj9;
          }
        }
        if (null != anchor2) {
          if (null == activeCommand) {
            const obj11 = { query: text.slice(anchor2 + selectionStart.length, selectionEnd), autocompleteType: selectionEnd.TIMESTAMPS, autocompleteSelectionStart: anchor2, queryOptions: obj12 };
            obj12 = {};
            const merged2 = Object.assign(applicationCommandOptionQueryOptions);
            return obj11;
          }
        }
        let sum1 = null;
        if (null != tmp5) {
          let num3 = tmp5.location;
          if (num3 == null) {
            num3 = 0;
          }
          let num4 = tmp5.length;
          if (num4 == null) {
            num4 = 0;
          }
          sum1 = num3 + num4;
        }
        while (true) {
          let found;
          let obj4 = analyticsLocations(canMentionEveryone[43]);
          let arr = text;
          let tmp36 = tmp8;
          let num5 = sum1;
          let result = obj4.isAutocompleteSeparatingBoundary(text, tmp);
          if (tmp31) {
            num5 = 0;
          }
          if (tmp === num5) {
            let substr1 = arr.slice(tmp, selectionEnd);
            let obj5 = analyticsLocations(canMentionEveryone[36]);
            prefix = obj5.getPrefix(substr1);
            let obj6 = analyticsLocations(canMentionEveryone[36]);
            query = obj6.getQuery(substr1);
            if (null != query) {
              if (prefix !== focused) {
                tmp36 = query;
                found = tmp9;
              }
            }
            let _Object = Object;
            let keys = Object.keys(memo);
            found = keys.find((item) => {
              let tmp = item !== AutocompleteTypes.SLASHES && item !== AutocompleteTypes.SLASHES_DISCOVERY;
              obj = memo[item];
              if (!tmp) {
                tmp = null == activeCommand && !commandsDisabled;
                const tmp4 = null == activeCommand && !commandsDisabled;
              }
              if (tmp) {
                let matchesResult = undefined !== prefix;
                const tmp6 = prefix;
                if (matchesResult) {
                  matchesResult = undefined !== query;
                }
                if (matchesResult) {
                  matchesResult = obj.matches(tmp6, query, canMentionEveryone);
                }
                tmp = matchesResult;
              }
              return tmp;
            });
            tmp36 = query;
            tmp50 = tmp;
            tmp51 = query;
            tmp52 = found;
            if (null != found) {
              break;
            }
          } else {
            found = tmp9;
          }
          let diff = tmp - 1;
          canMentionEveryone = diff;
          let num6 = sum1;
          if (tmp31) {
            num6 = 0;
          }
          tmp = diff;
          tmp8 = tmp36;
          tmp9 = found;
          tmp51 = tmp36;
          tmp52 = found;
          tmp50 = diff;
          if (diff < num6) {
            break;
          }
        }
        let tmp55 = tmp51;
        if (tmp52 === selectionEnd.SLASHES) {
          let str5 = tmp51;
          const getTextBeforeFirstOption = analyticsLocations(canMentionEveryone[41]).getTextBeforeFirstOption;
          analyticsLocations(canMentionEveryone[41]);
          if (tmp51 == null) {
            str5 = "";
          }
          text = getTextBeforeFirstOption(str5).text;
          query = text;
          tmp55 = text;
        }
        const obj13 = { query: tmp55, autocompleteType: tmp52, autocompleteSelectionStart: tmp50, queryOptions: obj14 };
        obj14 = {};
        const merged3 = Object.assign(applicationCommandOptionQueryOptions);
        return obj13;
      }
    }
    return { query: null, autocompleteType: null, autocompleteSelectionStart: null };
  }, items6);
  const autocompleteType = memo1.autocompleteType;
  let query = memo1.query;
  const queryOptions = memo1.queryOptions;
  autocompleteSelectionStart = memo1.autocompleteSelectionStart;
  const showOptionValuesPicker = memo1.showOptionValuesPicker;
  [tmp31, c40] = keyboardType(queryOptions(autocompleteType), 2);
  const tmp30 = keyboardType(queryOptions(autocompleteType), 2);
  let tmp32 = keyboardType(queryOptions(autocompleteType), 2);
  [tmp33, c41] = tmp32;
  const tmp34 = keyboardType(queryOptions(autocompleteType), 2);
  const first2 = tmp34[0];
  let closure_43 = tmp34[1];
  if (tmp31 == null) {
    tmp31 = tmp8;
  }
  closure_44 = tmp31;
  if (tmp33 == null) {
    tmp33 = timestampSearchHeaderHeight;
  }
  timestampSearchHeaderHeight = tmp33;
  const items7 = [anchor2];
  const effect2 = obj5.useEffect(() => {
    if (null != anchor2) {
      obj = RunAfterInteractionsUtils;
      obj.runAfterInteractions(TimestampSuggestionUtils.preloadTimestampParser);
    }
  }, items7);
  const items8 = [autocompleteType, query, queryOptions, memo];
  callback = obj5.useCallback((arg0) => {
    if (null != autocompleteType) {
      if (null != query) {
        obj = memo[tmp];
        const queryResultsResult = obj.queryResults(tmp2, queryOptions, arg0);
        const items = [];
        const items1 = [];
        const item = queryResultsResult.forEach((type) => {
          if (type.type === constants.STICKER) {
            items.push(type);
          } else {
            items1.push(type);
          }
        });
        const obj2 = { resultCount: queryResultsResult.length, stickerResults: items, nonStickerResults: items1, hasStickerResults: items.length > 0, hasNonStickerResults: items1.length > 0 };
        closure_18(obj2);
      }
    }
    closure_18(closure_38);
  }, items8);
  const items9 = [autocompleteType, callback, memo];
  const effect3 = obj5.useEffect(function() {
    let tmp2 = null;
    if (null != autocompleteType) {
      let stores;
      if (memo != null) {
        stores = memo[tmp].stores;
      }
      tmp2 = stores;
    }
    if (null != tmp2) {
      const self = this;
      const self2 = this;
      const batchedStoreListener = new analyticsLocations(canMentionEveryone[26]).BatchedStoreListener(tmp2, () => callback(false));
      batchedStoreListener.attach("AutocompleteWrapper");
      return () => batchedStoreListener.detach();
    }
  }, items9);
  const items10 = [callback];
  const effect4 = obj5.useEffect(() => {
    callback(true);
  }, items10);
  const items11 = [stickerResults, nonStickerResults];
  callback1 = obj5.useCallback(() => {
    obj = { numStickerResults: stickerResults.length, numEmojiResults: nonStickerResults.filter((type) => type.type === constants.EMOJI).length };
    return obj;
  }, items11);
  const items12 = [autocompleteType, focused, keyboardType, resultCount];
  memo2 = obj5.useMemo(() => {
    let tmp = resultCount > 0;
    if (!tmp) {
      tmp = autocompleteType === AutocompleteTypes.SLASHES || tmp2 === AutocompleteTypes.SLASHES_DISCOVERY;
    }
    if (!tmp) {
      tmp = autocompleteType === AutocompleteTypes.GAME_MENTIONS;
    }
    if (!tmp) {
      tmp = autocompleteType === AutocompleteTypes.TIMESTAMPS;
    }
    let tmp9 = focused;
    const SYSTEM = KeyboardTypes.KeyboardTypes.SYSTEM;
    const tmp8 = keyboardType;
    if (focused) {
      tmp9 = tmp;
    }
    if (tmp9) {
      tmp9 = tmp8 === SYSTEM;
    }
    return tmp9;
  }, items12);
  ref = obj5.useRef(false);
  const items13 = [autocompleteType, activeCommand];
  const effect5 = obj5.useEffect(() => {
    let tmp4 = autocompleteType === AutocompleteTypes.SLASHES;
    if (ref.current) {
      if (!tmp4) {
        tmp4 = tmp2 === tmp3.SLASHES_DISCOVERY;
      }
      if (!tmp4) {
        tmp4 = null != activeCommand;
      }
      ref.current = tmp4;
    } else {
      const tmp5 = tmp4 || tmp2 === tmp3.SLASHES_DISCOVERY || null != activeCommand;
      ref.current = tmp5;
      if (ref.current) {
        obj = AppAnalyticsUtils;
        obj.trackWithMetadata(map1.APPLICATION_COMMAND_TOP_OF_FUNNEL, { location: "slash_ui" });
      }
    }
  }, items13);
  const items14 = [autocompleteType];
  const effect6 = obj5.useEffect(() => autocompleteType === AutocompleteTypes.GAME_MENTIONS ? (() => {
    obj = analyticsLocations(canMentionEveryone[46]);
    const gameSearchSession = obj.getGameSearchSession(analyticsLocations(canMentionEveryone[47]).GameSearchSurface.CHAT_MENTION);
    return gameSearchSession.end();
  }) : undefined, items14);
  ref2 = obj5.useRef(null);
  const items15 = [onChangeAutoCompleteVisibility, activeCommand, memo2, autocompleteType, channel, callback1, setting1];
  const effect7 = obj5.useEffect(() => {
    let tmp18;
    if (onChangeAutoCompleteVisibility != null) {
      tmp4(memo2 || null != activeCommand);
    }
    if (memo2 || null != activeCommand) {
      let str = autocompleteType;
      const id = channel.id;
      const tmp7 = channel;
      if (autocompleteType == null) {
        str = "";
      }
      const _HermesInternal = HermesInternal;
      const combined = "" + id + ":" + str;
      if (ref2.current !== combined) {
        ref2.current = combined;
        obj = { gameMentionsAvailable: tmp18 };
        const iOSTrackAutocompleteOpen = ChannelAutocompleteAnalytics.iOSTrackAutocompleteOpen;
        ChannelAutocompleteAnalytics;
        const merged = Object.assign(callback1());
        tmp18 = undefined;
        if (autocompleteType === AutocompleteTypes.MENTIONS) {
          tmp18 = setting1;
        }
        const result = iOSTrackAutocompleteOpen(tmp8, tmp7, obj);
      }
    } else {
      ref2.current = null;
    }
  }, items15);
  let tmp45 = query(tmp22);
  closure_51 = tmp45;
  const items16 = [autocompleteType, stickerResults.length, tmp45, scaledTextLineHeight, tmp31, tmp33];
  memo3 = obj5.useMemo(() => {
    let sum2;
    const sum = scaledTextLineHeight + 24;
    const sum1 = c31 + sum;
    if (stickerResults.length > 0) {
      sum2 = sum1 + sum + Autocomplete.AUTOCOMPLETE_STICKER_NODE_SIZE + 12 + hairlineWidth;
    } else {
      sum2 = sum1;
      if (autocompleteType !== AutocompleteTypes.EMOJIS_AND_STICKERS) {
        let sum3;
        if (autocompleteType === AutocompleteTypes.GAME_MENTIONS) {
          sum3 = tmp2 + closure_44;
        } else if (autocompleteType === AutocompleteTypes.TIMESTAMPS) {
          sum3 = tmp2 + timestampSearchHeaderHeight;
        } else {
          sum3 = tmp2;
        }
        sum2 = sum3;
      }
    }
    return Math.min(closure_51, sum2);
  }, items16);
  const tmp11Result = keyboardType(obj5.useState(null), 2);
  first3 = tmp11Result[0];
  let tmp49 = tmp11Result[1];
  closure_54 = tmp49;
  const items17 = [resultCount, autocompleteType, memo2, hasStickerResults, hasNonStickerResults, nonStickerResults.length, memo3, first3, tmp33, context, token, scaledTextLineHeight, tmp31, first2];
  const memo4 = obj5.useMemo(() => {
    let num2;
    if (autocompleteType === AutocompleteTypes.EMOJIS_AND_STICKERS) {
      let tmp13 = token;
      let num7 = 0;
      if (0 !== nonStickerResults.length) {
        if (!context) {
          tmp13 = tmp === tmp2.EMOJIS_AND_STICKERS ? authStore3 : closure_17;
        }
        num7 = length * tmp13 + (length - 1) * hairlineWidth;
      }
      let sum = num7;
      if (hasNonStickerResults) {
        sum = num7 + (scaledTextLineHeight + 24);
      }
      let tmp18 = hasStickerResults;
      let sum2 = sum;
      if (hasStickerResults) {
        const sum1 = scaledTextLineHeight + 24;
        sum2 = sum + (sum1 + Autocomplete.AUTOCOMPLETE_STICKER_NODE_SIZE + 12);
      }
      if (tmp18) {
        tmp18 = tmp15;
      }
      let sum3 = sum2;
      if (tmp18) {
        sum3 = sum2 + hairlineWidth;
      }
      num2 = sum3;
    } else {
      const tmp3 = autocompleteType === AutocompleteTypes.SLASHES || autocompleteType === AutocompleteTypes.SLASHES_DISCOVERY;
      if (tmp3) {
        let num6 = first3;
        if (first3 == null) {
          num6 = 0;
        }
        num2 = num6;
      } else {
        num2 = 0;
        if (null != autocompleteType) {
          let sum4;
          let num3 = 0;
          if (resultCount > 0) {
            let tmp6 = first2;
            if (first2 == null) {
              let tmp7 = token;
              let num4 = 0;
              if (0 !== resultCount) {
                if (!context) {
                  tmp7 = tmp === tmp2.EMOJIS_AND_STICKERS ? authStore3 : closure_17;
                }
                num4 = tmp5 * tmp7 + (tmp5 - 1) * hairlineWidth;
              }
              tmp6 = num4;
            }
            num3 = tmp6;
          }
          if (autocompleteType === AutocompleteTypes.GAME_MENTIONS) {
            sum4 = num3 + closure_44;
          } else {
            sum4 = num3;
            if (autocompleteType === AutocompleteTypes.TIMESTAMPS) {
              sum4 = num3 + timestampSearchHeaderHeight;
            }
          }
          num2 = sum4;
        }
      }
    }
    let num12 = 0;
    const _Math = Math;
    if (memo2) {
      num12 = num2;
    }
    return min(num12, memo3);
  }, items17);
  let tmp51 = memo4 > 0;
  closure_55 = tmp51;
  let tmpResult = tmp(tmp2[27]);
  const token1 = tmpResult.useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS);
  const tmpResult6 = tmp(tmp2[27]);
  const token2 = tmpResult6.useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH);
  const tmpResult7 = tmp(tmp2[27]);
  const token3 = tmpResult7.useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_TOP_BORDER_WIDTH);
  const tmpResult8 = tmp(tmp2[27]);
  const token4 = tmpResult8.useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_HORIZONTAL);
  const tmpResult9 = tmp(tmp2[27]);
  token5 = tmpResult9.useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_BOTTOM);
  let num = 0;
  let tmp57 = setData;
  if (tmp51) {
    num = token2;
  }
  let num2 = 0;
  if (tmp51) {
    num2 = token3;
  }
  if (tmp51) {
    num3 = token5;
  } else {
    num3 = 0;
    if (null != activeCommand) {
      num3 = 0;
    }
  }
  const tmp57Result = tmp57(token1, num, num2, token4, num3);
  let prop = null;
  const tmpResult10 = tmp(tmp2[18]);
  if (tmpResult10.isIOS()) {
    prop = tmp57Result.autocompletePositionRelative;
  }
  const items18 = [tmp51, token5];
  const memo5 = obj5.useMemo(() => {
    let tmp;
    if (closure_55) {
      tmp = { marginTop: token5 };
      obj = { marginTop: token5 };
    }
    return tmp;
  }, items18);
  const items19 = [analyticsLocations, beginSearch, beginSearch2, channel, chatInputRef];
  const tmp61 = tmp4(tmp2[49])(memo4, screenIndex);
  callback2 = obj5.useCallback((type, tokenStart, arg2) => {
    if (type.type !== unpackModuleId.EMOJI_PREMIUM_UPSELL) {
      if (type.type === unpackModuleId.GLOBAL) {
        if ("gameMentionInput" === type.inlineAutocompleteType) {
          const current5 = chatInputRef.current;
          current5.insertText(afk, tokenStart, false);
          beginSearch(tokenStart);
        }
      }
      if (type.type === unpackModuleId.GLOBAL) {
        if ("timestampMentionInput" === type.inlineAutocompleteType) {
          const current4 = chatInputRef.current;
          current4.insertText(closure_23, tokenStart, false);
          beginSearch2(tokenStart);
        }
      }
      const obj3 = autocompleter_AutocompleteUtils;
      const autocompleteResultText = obj3.getAutocompleteResultText(type, channel);
      const current = chatInputRef.current;
      const applicationCommandManager = current.getApplicationCommandManager();
      let tmp13;
      const tmp10 = channel;
      const tmp8 = require;
      if (type.type === unpackModuleId.GAME_MENTION) {
        if (applicationCommandManager != null) {
          applicationCommandManager.addGameMention(type.game);
        }
        let gameMentionNode;
        if (applicationCommandManager != null) {
          gameMentionNode = applicationCommandManager.buildGameMentionNode(type.game);
        }
        let tmp17;
        if (null != gameMentionNode) {
          const items = [gameMentionNode];
          tmp17 = items;
        }
        tmp13 = tmp17;
      }
      let tmp18 = autocompleteResultText;
      let tmp19 = tmp13;
      if (type.type === unpackModuleId.TIMESTAMP_MENTION) {
        tmp18 = autocompleteResultText;
        tmp19 = tmp13;
        if (null != applicationCommandManager) {
          const tmp8Result = tmp8(5814);
          const result = tmp8Result.formatTimestampMention(type.mention);
          tmp18 = autocompleteResultText;
          tmp19 = tmp13;
          if (null != result) {
            const addTimestampMentionResult = applicationCommandManager.addTimestampMention(result.formatted, type.mention);
            const items1 = [applicationCommandManager.buildTimestampMentionNode(addTimestampMentionResult)];
            tmp18 = addTimestampMentionResult;
            tmp19 = items1;
          }
        }
      }
      let result1;
      if (applicationCommandManager != null) {
        result1 = applicationCommandManager.setAutoCompleteResult(tmp10.id, tmp18, arg2, type);
      }
      if (!result1) {
        const current2 = tmp12.current;
        current2.insertText(tmp18, tokenStart, type.type !== unpackModuleId.STICKER, tmp19);
        if (type.type === unpackModuleId.STICKER) {
          const current3 = tmp12.current;
          current3.handleSelectSticker(type.sticker, tokenStart);
        }
      }
    } else {
      const obj2 = { initialUpsellKey: stickerResults.EMOJI_AUTOCOMPLETE, analyticsLocations };
      obj = PremiumUpsellUtilsDefault;
      const result2 = obj.handleShowUpsellAlert(obj2);
    }
  }, items19);
  const items20 = [chatInputRef, optionStates, channel];
  const items21 = [autocompleteSelectionStart, autocompleteType, callback1, channel, callback2, showOptionValuesPicker];
  const callback3 = obj5.useCallback((type) => {
    const current = chatInputRef.current;
    const applicationCommandManager = current.getApplicationCommandManager();
    if (type.type === Server.ApplicationCommandOptionType.ATTACHMENT) {
      let success;
      const id = channel.id;
      if (optionStates[type.name].lastValidationResult != null) {
        success = lastValidationResult.success;
      }
      if (success) {
        const tmpResult = application_commands_ApplicationCommandUtils;
        const result = tmpResult.openCommandAttachmentPreview(applicationCommandManager, id, type.name);
      } else if (applicationCommandManager != null) {
        const result1 = applicationCommandManager.insertOrJumpCommandOption(type);
      }
    } else {
      let length;
      if (applicationCommandManager != null) {
        length = applicationCommandManager.props.text.length;
      }
      if (applicationCommandManager != null) {
        const result2 = applicationCommandManager.insertOrJumpCommandOption(type, length);
      }
    }
  }, items20);
  callback4 = obj5.useCallback((type) => {
    let id;
    let id1;
    if (type.type === unpackModuleId.GLOBAL) {
      if ("gameMentionInput" === type.inlineAutocompleteType) {
        type = tmp.GAME_MENTION;
      }
      obj = { selectionType: type, stickerId: id, gameId: id1 };
      id = null;
      const iOSTrackAutocompleteSelect = ChannelAutocompleteAnalytics.iOSTrackAutocompleteSelect;
      ChannelAutocompleteAnalytics;
      const tmp5 = autocompleteType;
      const tmp6 = channel;
      if (type.type === unpackModuleId.STICKER) {
        id = type.sticker.id;
      }
      id1 = null;
      if (type.type === unpackModuleId.GAME_MENTION) {
        id1 = type.game.id;
      }
      const merged = Object.assign(callback1());
      const result = iOSTrackAutocompleteSelect(tmp5, tmp6, obj);
      if (type.type === unpackModuleId.GAME_MENTION) {
        const tmp2Result = GameSearchSession;
        const gameSearchSession = tmp2Result.getGameSearchSession(tmp2(8597).GameSearchSurface.CHAT_MENTION);
        gameSearchSession.select(type.game.id);
      }
      let num = autocompleteSelectionStart;
      const tmp15 = callback2;
      if (autocompleteSelectionStart == null) {
        num = 0;
      }
      tmp15(type, num, showOptionValuesPicker);
    }
    if (type.type === unpackModuleId.GLOBAL) {
      if ("timestampMentionInput" === type.inlineAutocompleteType) {
        type = tmp.TIMESTAMP_MENTION;
      }
    }
    type = type.type;
  }, items21);
  const tmp11Result2 = keyboardType(obj5.useState(null), 2);
  first4 = tmp11Result2[0];
  closure_60 = tmp11Result2[1];
  const items22 = [autocompleteType, callback4, first4, channel, activeCommand];
  const callback5 = obj5.useCallback((item) => {
    let tmp65;
    item = item.item;
    const type = item.type;
    if (scaledTextLineHeight.USER === type) {
      const obj2 = {
        guildId: channel.guild_id,
        onPress() {
            return callback4(item);
          }
      };
      const User = channel(canMentionEveryone[20]).User;
      const merged = Object.assign(item);
      return setting1(User, obj2);
    } else if (scaledTextLineHeight.GLOBAL === type) {
      const obj3 = {
        onPress() {
            return callback4(item);
          }
      };
      const Global = channel(canMentionEveryone[20]).Global;
      const merged1 = Object.assign(item);
      return setting1(Global, obj3);
    } else if (scaledTextLineHeight.ROLE === type) {
      const obj4 = {
        onPress() {
            return callback4(item);
          },
        showDescription: tmp65
      };
      const Role = channel(canMentionEveryone[20]).Role;
      const merged2 = Object.assign(item);
      tmp65 = autocompleteType === selectionEnd.MENTIONS;
      const tmp57 = setting1;
      if (tmp65) {
        tmp65 = null == activeCommand;
      }
      return tmp57(Role, obj4);
    } else if (scaledTextLineHeight.CHANNEL === type) {
      const obj5 = {
        onPress() {
            return callback4(item);
          }
      };
      const Channel = channel(canMentionEveryone[20]).Channel;
      const merged3 = Object.assign(item);
      return setting1(Channel, obj5);
    } else if (scaledTextLineHeight.EMOJI === type) {
      const obj6 = {
        onPress() {
            return callback4(item);
          }
      };
      const Emoji = channel(canMentionEveryone[20]).Emoji;
      const merged4 = Object.assign(item);
      return setting1(Emoji, obj6);
    } else if (scaledTextLineHeight.EMOJI_PREMIUM_UPSELL === type) {
      const obj7 = {
        onPress() {
            return callback4(item);
          }
      };
      const EmojiPremiumUpsell = channel(canMentionEveryone[20]).EmojiPremiumUpsell;
      const merged5 = Object.assign(item);
      return setting1(EmojiPremiumUpsell, obj7);
    } else if (scaledTextLineHeight.CHOICE === type) {
      const obj8 = {
        onPress() {
            return callback4(item);
          }
      };
      const Choice = channel(canMentionEveryone[20]).Choice;
      const merged6 = Object.assign(item);
      return setting1(Choice, obj8);
    } else if (scaledTextLineHeight.CHOICE_LOADING === type) {
      return setting1(channel(canMentionEveryone[20]).ChoiceLoading, {});
    } else if (scaledTextLineHeight.STICKER === type) {
      const obj9 = {
        onPress() {
            return callback4(item);
          },
        onLongPress() {
            return closure_60(item.sticker.id);
          },
        isInteracting: first4 === item.sticker.id
      };
      const Sticker = channel(canMentionEveryone[20]).Sticker;
      const merged7 = Object.assign(item);
      const _HermesInternal = HermesInternal;
      return setting1(Sticker, obj9, "" + item.sticker.id + "-" + first4 === item.sticker.id);
    } else if (scaledTextLineHeight.GAME_MENTION === type) {
      const obj10 = {
        onPress() {
            return callback4(item);
          }
      };
      const Game = channel(canMentionEveryone[20]).Game;
      const merged8 = Object.assign(item);
      return setting1(Game, obj10);
    } else if (scaledTextLineHeight.TIMESTAMP_MENTION === type) {
      const obj11 = {
        onPress() {
            return callback4(item);
          }
      };
      const Timestamp = channel(canMentionEveryone[20]).Timestamp;
      const merged9 = Object.assign(item);
      return setting1(Timestamp, obj11);
    } else if (scaledTextLineHeight.LABEL === type) {
      obj = {};
      const Label = channel(canMentionEveryone[20]).Label;
      const merged10 = Object.assign(item);
      return setting1(Label, obj);
    } else {
      return null;
    }
  }, items22);
  const items23 = [tmp57Result.autocomplete, { maxHeight: memo3 }];
  let obj8 = { style: items24, children: items31 };
  items24 = [tmp57Result.autocompleteWrapper, prop];
  let obj9 = { style: items25, children: tmp68Result4 };
  items25 = [tmp57Result.autocompleteContainer, tmp61];
  tmp68Result4 = null != autocompleteType;
  const View = tmp4(tmp2[53]).View;
  if (tmp68Result4) {
    let tmp70Result = autocompleteType === selectionEnd.SLASHES_DISCOVERY;
    if (tmp70Result) {
      let obj10 = {
        channel,
        onPressSlashItem(command, section, visualSection) {
              let num = autocompleteSelectionStart;
              obj = { command, section, type: unpackModuleId.SLASH, visualSection, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.DISCOVERY };
              const tmp = callback2;
              if (autocompleteSelectionStart == null) {
                num = 0;
              }
              tmp(obj, num);
            },
        onHeightChange: tmp49,
        canOnlyUseTextCommands
      };
      tmp70Result = tmp70(tmp4(tmp2[54]), obj10);
    }
    const items26 = [tmp70Result, , , , , ];
    let tmp70Result5 = autocompleteType === tmp73.SLASHES;
    if (tmp70Result5) {
      let obj11 = {
        channel,
        query: str,
        onPressCommandItem(commands, found) {
              let num = autocompleteSelectionStart;
              obj = { command: commands, section: found, type: unpackModuleId.SLASH, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.DISCOVERY, query };
              const tmp = callback2;
              if (autocompleteSelectionStart == null) {
                num = 0;
              }
              tmp(obj, num);
            },
        style: items23,
        ItemSeparatorComponent: tmp(tmp2[36]).getItemSeparator,
        getItemLayout: tmp(tmp2[36]).getItemLayout,
        onCommandsChange(commands) {
              let tmp3 = token;
              let num = 0;
              const tmp = closure_54;
              if (0 !== commands) {
                if (!context) {
                  tmp3 = tmp2 === AutocompleteTypes.EMOJIS_AND_STICKERS ? authStore3 : closure_17;
                }
                num = commands * tmp3 + (commands - 1) * hairlineWidth;
              }
              tmp(num);
            }
      };
      str = query;
      const tmp4Result = tmp4(tmp2[56]);
      if (query == null) {
        str = "";
      }
      tmp70Result5 = tmp70(tmp4Result, obj11);
    }
    items26[1] = tmp70Result5;
    let tmp68Result3 = autocompleteType === tmp73.EMOJIS_AND_STICKERS;
    if (tmp68Result3) {
      let tmp68Result = hasStickerResults;
      if (tmp68Result) {
        let obj12 = { children: items28 };
        let obj13 = { style: items27, children: tmp70(Text, obj15) };
        items27 = [tmp57Result.sectionTitle, ];
        let obj14 = { height: scaledTextLineHeight };
        items27[1] = obj14;
        obj15 = { variant: tmp6, children: intl.format(tmp(tmp2[58]).t.uferGG, obj16) };
        Text = tmp(tmp2[57]).Text;
        intl = tmp(tmp2[58]).intl;
        obj16 = { prefix: query };
        items28 = [tmp70(tmp69, obj13), ];
        const obj17 = {
          horizontal: true,
          style: obj18,
          keyExtractor(sticker) {
                  return sticker.sticker.id;
                },
          data: stickerResults,
          renderItem: callback5,
          showsHorizontalScrollIndicator: false,
          getItemLayout: autocompleteType,
          contentInset: { right: 12 }
        };
        obj18 = {};
        let merged = Object.assign(items23);
        let merged1 = Object.assign(tmp57Result.stickersAutocompleteList);
        items28[1] = setting1(chatInputRef, obj17);
        tmp68Result = tmp68(tmp72, obj12);
      }
      const items29 = [tmp68Result, , ];
      if (hasStickerResults) {
        hasStickerResults = hasNonStickerResults;
      }
      if (hasStickerResults) {
        const obj19 = { style: tmp57Result.sectionDivider };
        hasStickerResults = tmp70(tmp4(tmp2[59]), obj19);
      }
      items29[1] = hasStickerResults;
      if (hasNonStickerResults) {
        const obj20 = { style: items30, children: setting1(Text2, obj22) };
        items30 = [tmp57Result.sectionTitle, ];
        const obj21 = { height: scaledTextLineHeight };
        items30[1] = obj21;
        obj22 = { variant: tmp6, children: format(ksAVYt, obj23) };
        Text2 = tmp(tmp2[57]).Text;
        const intl2 = tmp(tmp2[58]).intl;
        format = intl2.format;
        let _HermesInternal = HermesInternal;
        let str2 = "";
        obj23 = { prefix: "" + memo + query };
        ksAVYt = tmp(tmp2[58]).t.ksAVYt;
        hasNonStickerResults = tmp70(tmp69, obj20);
      }
      const obj24 = { children: items29 };
      items29[2] = hasNonStickerResults;
      tmp68Result3 = tmp68(tmp72, obj24);
    }
    items26[2] = tmp68Result3;
    let tmp70Result6 = autocompleteType === tmp73.GAME_MENTIONS;
    if (tmp70Result6) {
      const obj25 = {
        onLayout(nativeEvent) {
              return _undefined(nativeEvent.nativeEvent.layout.height);
            },
        children: setting1(tmp4(tmp2[60]), {})
      };
      tmp70Result6 = tmp70(tmp69, obj25);
    }
    items26[3] = tmp70Result6;
    let tmp70Result7 = autocompleteType === tmp73.TIMESTAMPS;
    if (tmp70Result7) {
      const obj26 = {
        onLayout(nativeEvent) {
              return _undefined2(nativeEvent.nativeEvent.layout.height);
            },
        children: setting1(tmp4(tmp2[30]), {})
      };
      tmp70Result7 = tmp70(tmp69, obj26);
    }
    const obj27 = { children: items26 };
    items26[4] = tmp70Result7;
    const obj28 = {
      style: items23,
      keyExtractor(arg0, arg1) {
          return String(arg1);
        },
      data: nonStickerResults,
      renderItem: callback5,
      ItemSeparatorComponent: tmp(tmp2[36]).getItemSeparator,
      getItemLayout: tmp(tmp2[36]).getItemLayout,
      onContentSizeChange(arg0, arg1) {
          return closure_43(arg1);
        }
    };
    items26[5] = setting1(chatInputRef, obj28);
    tmp68Result4 = tmp68(tmp72, obj27);
  }
  items31 = [tmp70(View, obj9), ];
  let tmp70Result8 = null != activeCommand && !commandsDisabled;
  if (tmp70Result8) {
    const obj29 = { style: memo5, children: setting1(tmp4(tmp2[61]), obj30) };
    obj30 = { command: activeCommand, section: activeSection, guildId: channel.guild_id, onPressOption: callback3, currentOption: activeOption, optionStates };
    tmp70Result8 = tmp70(tmp69, obj29);
  }
  items31[1] = tmp70Result8;
  const obj31 = { style: tmp57Result.autocompletePositionRelative, children: anchor(commandsDisabled, obj8) };
  return setting1(commandsDisabled, obj31);
});
forwardRefResult.displayName = "AutocompleteWrapper";
const memoResult = react.memo(forwardRefResult);
let result = size.fileFinishedImporting("modules/autocompleter/native/AutocompleteWrapper.tsx");

export default memoResult;
