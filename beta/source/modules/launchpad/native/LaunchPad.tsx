// Module ID: 16798
// Function ID: 16799
// Name: LaunchPad
// Dependencies: [32, 19, 17, 4521, 6945, 6746, 5818, 2049, 502, 2045, 7133, 7050, 2067, 13297, 4851, 5750, 5017, 4855, 1074, 21, 576, 4836, 5435, 4832, 504, 4566, 4701, 6471, 1115, 12585, 9067, 15131, 1364, 14139, 10429, 9299, 4692, 9300, 9290, 1479, 1613, 9291, 12305, 1241, 16799, 16806, 15346, 16819, 16820, 2]

// Module 16798 (LaunchPad)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import ChatInputUtils from "ChatInputUtils" /* 4701 */;
import Text_Text from "Text/Text" /* 4832 */;
import Pressables from "Pressables" /* 5435 */;
import _mod9290 from "module_9290" /* 9290 */;
import createAutocompleterResultForChannelIdDefault from "createAutocompleterResultForChannelId" /* 9299 */;
import hideLaunchPadDefault from "hideLaunchPad" /* 10429 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4521 */;
import ChannelListStore from "ChannelListStore" /* 6945 */;
import NavigationHistoryStore_mod from "NavigationHistoryStore" /* 6746 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 5818 */;
import ChannelRecord from "ChannelRecord" /* 2049 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7133 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7050 */;
import GuildStore from "GuildStore" /* 2067 */;
import PrivateChannelReadStateStore from "PrivateChannelReadStateStore" /* 13297 */;
import ReadStateStore from "ReadStateStore" /* 4851 */;
import SortedGuildStore from "SortedGuildStore" /* 5750 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, basicChannel, channel, flattenedGuildIds, guild, set, tab;

let c10;
let c9;
let closure_14;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let size;
let tmp;
const DevToolsNavigator = tmp(14139);
function TabButton(selected) {
  let accessibilityLabel;
  let colors;
  let icon;
  let onPress;
  let style;
  selected = selected.selected;
  ({ onPress, icon, accessibilityLabel, style } = selected);
  const tmp = closure_29();
  const obj = { onPress, style: items, accessibilityLabel, accessibilityRole: "tab", accessibilityState: { selected }, children: icon(selected ? colors.INTERACTIVE_TEXT_ACTIVE : colors.INTERACTIVE_TEXT_DEFAULT) };
  items = [tmp.tab, style, ];
  let tabSelected;
  const PressableHighlight = Pressables.PressableHighlight;
  const tmp2 = closure_27;
  if (selected) {
    tabSelected = tmp.tabSelected;
  }
  items[2] = tabSelected;
  colors = nativeDefault.colors;
  return tmp2(PressableHighlight, obj);
}
function TabHeader(text) {
  text = text.text;
  const obj = { style: closure_29().subheader, variant: "heading-md/extrabold", maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: text };
  return closure_27(Text_Text.Text, obj);
}
function createAndAppendChannel(arg0, has, arr) {
  if (!has.has(arg0)) {
    const tmp3 = createAutocompleterResultForChannelIdDefault(arg0);
    if (null != tmp3) {
      arr.push(tmp3);
      has.add(arg0);
    }
  }
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
let NavigationHistoryStore = NavigationHistoryStore_mod;
({ CHANNEL_PREFIX: metroImportAll, getIdFromHistoryItem: c9, GUILD_PREFIX: c10 } = NavigationHistoryStore);
NavigationHistoryStore = NavigationHistoryStore_mod;
({ isGuildSelectableChannelType: map1, isGuildVocalChannelType: closure_14 } = ChannelRecord);
({ AnalyticEvents: closure_25, GuildFeatures: closure_26 } = Constants);
({ jsx: closure_27, jsxs: closure_28 } = Fragment);
const md = nativeDefault.radii.md;
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, launchPadContent: { flex: -1, overflow: "hidden", borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }, header: { paddingHorizontal: 16, paddingTop: 16, flexDirection: "row", flexShrink: 0, flexGrow: 0 }, subheader: { flexGrow: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", alignSelf: "center", paddingStart: 8 }, tabs: obj3, tab: size, tabSelected: obj4 };
obj2 = { flexGrow: 0, marginHorizontal: 16, marginBottom: 16, flexShrink: 1, borderRadius: 24, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", justifyContent: "flex-start", alignItems: "stretch", overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { marginStart: 8, flexDirection: "row", flexShrink: 0, backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderRadius: md, padding: 5, alignItems: "stretch", justifyContent: "center", gap: 5, borderWidth: 1, borderColor: nativeDefault.colors.INPUT_BORDER_DEFAULT };
size = { width: 32, height: 32, borderRadius: md - 5, alignItems: "center", justifyContent: "center" };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_29 = createStyles(obj);
const constants2 = { SEARCH: 0, [0]: "SEARCH", MEMBERS: 1, [1]: "MEMBERS", NOTIFICATIONS: 2, [2]: "NOTIFICATIONS", DEV_TOOLS: 3, [3]: "DEV_TOOLS" };
const __initData = { code: "function LaunchPadTsx1(){const{sharedState}=this.__closure;return sharedState.get();}" };
const __initData2 = { code: "function LaunchPadTsx2(sharedState){const{keyboardShown,runOnJS,setFocused}=this.__closure;if(!keyboardShown.get()&&sharedState>0.75){runOnJS(setFocused)(true);}else if(keyboardShown.get()&&sharedState<=0){runOnJS(setFocused)(false);}}" };
let closure_35 = react.memo((tab) => {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let isDeveloper;
  let items5;
  let items6;
  let ref;
  let sharedState;
  let tmp17;
  let tmp18;
  tab = tab.tab;
  ({ setTab: importDefault, sharedState } = tab);
  const searchRef = tab.searchRef;
  react = undefined;
  const updateQuery = tab.updateQuery;
  let tmp = closure_29();
  let obj = tab(sharedState[24]);
  items = [DeveloperExperimentStore];
  const stateFromStores = obj.useStateFromStores(items, () => isDeveloper.isDeveloper);
  react = react.useRef(false);
  let obj2 = tab(sharedState[25]);
  const sharedValue = obj2.useSharedValue(false);
  const ref2 = react.useRef(tab);
  const effect = react.useEffect(() => {
    ref2.current = tab;
  });
  const items1 = [sharedValue, searchRef];
  const setFocused = react.useCallback((arg0, arg1) => {
    const tmp = arg0;
    if (tmp) {
      if (ref2.current === constants.SEARCH) {
        const obj3 = ChatInputUtils;
        const bestActiveInput = obj3.getBestActiveInput();
        let isFocusedResult;
        const tmp15 = ref;
        if (bestActiveInput != null) {
          isFocusedResult = bestActiveInput.isFocused();
        }
        tmp15.current = true === isFocusedResult;
        if (null != searchRef.current) {
          const result = sharedValue.set(true);
          const current3 = tmp20.current;
          if (current3 != null) {
            current3.focus();
          }
        }
      }
    }
    if (!arg0) {
      let current = ref.current;
      const tmp4 = ref;
      if (current) {
        current = !arg1;
      }
      if (current) {
        const obj = ChatInputUtils;
        const bestActiveInput1 = obj.getBestActiveInput();
        if (bestActiveInput1 != null) {
          bestActiveInput1.focus();
        }
      }
      const current2 = searchRef.current;
      if (current2 != null) {
        current2.blur();
      }
      tmp4.current = false;
      const result1 = sharedValue.set(false);
    }
  }, items1);
  let obj3 = tab(sharedState[24]);
  const items2 = [ref2];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => ref2.isOpen());
  const items3 = [stateFromStores1, setFocused];
  const effect1 = react.useEffect(() => {
    callback(!stateFromStores1, stateFromStores1);
  }, items3);
  const items4 = [tab, sharedState, setFocused];
  const effect2 = react.useEffect(() => {
    const tmp = tab === constants.SEARCH && 1 === sharedState.get();
    if (tmp) {
      callback(true);
    }
  }, items4);
  const obj4 = tab(sharedState[25]);
  class T {
    constructor() {
      return sharedState.get();
    }
  }
  T.__closure = { sharedState };
  T.__workletHash = 17067823098320;
  T.__initData = __initData;
  const fn = function p(arg0) {
    const obj = sharedValue;
    if (!sharedValue.get()) {
      if (arg0 > 0.75) {
        const obj2 = ReanimatedRexport;
        obj2.runOnJS(callback)(true);
      }
    }
    const value = obj.get() && arg0 <= 0;
    if (value) {
      const obj3 = ReanimatedRexport;
      obj3.runOnJS(callback)(false);
    }
  };
  fn.__closure = { keyboardShown: sharedValue, runOnJS: tab(sharedState[25]).runOnJS, setFocused };
  fn.__workletHash = 3784684686013;
  fn.__initData = __initData2;
  ({ keyboardShown: sharedValue, runOnJS: tab(sharedState[25]).runOnJS, setFocused });
  const animatedReaction = obj4.useAnimatedReaction(T, fn);
  const obj6 = { style: tmp.header, children: items5 };
  if (tab === constants2.SEARCH) {
    const obj7 = { size: "md", returnKeyType: "done", ref: searchRef, onChange: updateQuery, autoComplete: "off", spellCheck: false, autoFocus: false };
    tmp18 = closure_27(tmp2(tmp3[27]).SearchField, obj7);
    tmp17 = closure_27;
  } else if (tab === constants2.MEMBERS) {
    const obj8 = { text: intl2.string(tab(sharedState[28]).t["9Oq93m"]) };
    intl2 = tmp2(tmp3[28]).intl;
    tmp18 = closure_27(TabHeader, obj8);
    tmp17 = closure_27;
  } else if (tab === constants2.NOTIFICATIONS) {
    const tmp20 = TabHeader;
    const obj9 = { text: intl.string(tab(sharedState[28]).t.HcoRu0) };
    intl = tmp2(tmp3[28]).intl;
    tmp18 = closure_27(TabHeader, obj9);
    tmp17 = closure_27;
  } else {
    let tmp15 = closure_27;
    tmp17 = closure_27;
    tmp18 = closure_27(TabHeader, { text: "Dev Tools" });
  }
  items5 = [tmp18, ];
  const obj10 = { style: tmp.tabs, children: items6 };
  const obj11 = {
    icon(color) {
      const obj = { size: "sm", color };
      return closure_1_27(tab(sharedState[29]).FlashIcon, obj);
    },
    accessibilityLabel: intl3.string(tab(sharedState[28]).t.JqV7IC),
    onPress() {
      importDefault(constants.SEARCH);
      const current = searchRef.current;
      if (current != null) {
        current.focus();
      }
    },
    selected: tab === constants2.SEARCH
  };
  intl3 = tmp2(tmp3[28]).intl;
  items6 = [tmp17(TabButton, obj11), , ];
  const obj12 = {
    icon(color) {
      const obj = { size: "sm", color };
      return closure_1_27(tab(sharedState[30]).BellIcon, obj);
    },
    accessibilityLabel: intl4.string(tab(sharedState[28]).t.HcoRu0),
    onPress() {
      importDefault(constants.NOTIFICATIONS);
      const current = searchRef.current;
      if (current != null) {
        current.blur();
      }
    },
    selected: tab === constants2.NOTIFICATIONS
  };
  intl4 = tmp2(tmp3[28]).intl;
  items6[1] = tmp17(TabButton, obj12);
  let tmp17Result = null;
  const tmp24 = TabButton;
  if (stateFromStores) {
    const obj13 = {
      icon(color) {
          const obj = { size: "sm", color };
          return closure_1_27(tab(sharedState[31]).StaffBadgeIcon, obj);
        },
      accessibilityLabel: "Dev Tools",
      selected: tab === constants2.DEV_TOOLS,
      onPress() {
          const obj = PlatformUtils;
          if (obj.isAndroid()) {
            const tmpResult = DevToolsNavigator;
            tmpResult.navigateToDevTools();
            hideLaunchPadDefault();
          } else {
            importDefault(constants.DEV_TOOLS);
          }
          const current = searchRef.current;
          if (current != null) {
            current.blur();
          }
        }
    };
    tmp17Result = tmp17(tmp24, obj13);
  }
  items6[2] = tmp17Result;
  items5[1] = closure_28(sharedValue, obj10);
  return closure_28(sharedValue, obj6);
});
let closure_37 = [];
let items = [_mod9290.AutocompleterResultTypes.GUILD, _mod9290.AutocompleterResultTypes.TEXT_CHANNEL, _mod9290.AutocompleterResultTypes.GROUP_DM, _mod9290.AutocompleterResultTypes.VOICE_CHANNEL, _mod9290.AutocompleterResultTypes.USER];
const __initData3 = { code: "function LaunchPadTsx3(){const{sharedState}=this.__closure;return sharedState.get()===0;}" };
const __initData4 = { code: "function LaunchPadTsx4(hidden,prevHidden){const{runOnJS,clearQuery,cancelTimeout}=this.__closure;if(hidden===prevHidden)return;if(hidden&&hidden!==prevHidden){runOnJS(clearQuery)();}else if(!hidden&&hidden!==prevHidden){runOnJS(cancelTimeout)();}}" };
const memoResult = react.memo(function LaunchPad(arg0) {
  let activeJoinedUnreadThreadsForGuild;
  let c0;
  let c1;
  let c2;
  let channelHistory;
  let closure_3;
  let first1;
  let first3;
  let mentionCount;
  let sharedState;
  let state;
  let str;
  let tmp22;
  let tmp3;
  let tmp42;
  let tmp54Result2;
  let tmp9;
  let unreadPrivateChannelIds;
  let unreads;
  let visible;
  ({ visible, sharedState } = arg0);
  _require = undefined;
  str = undefined;
  let first2;
  _slicedToArray = undefined;
  let tmp = closure_29();
  let tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp3, c0] = tmp2;
  const callback = react.useCallback(() => _undefined((arg0) => !arg0), []);
  const ref = react.useRef(null);
  c1 = undefined;
  c2 = undefined;
  let tmp6 = _slicedToArray(react.useState(""), 2);
  [str, c1] = tmp6;
  let tmp7 = closure_37;
  let tmp8 = _slicedToArray(react.useState(closure_37), 2);
  [tmp9, c2] = tmp8;
  const first = _slicedToArray(react.useState(() => {
    const tmp = new str(first2[41])((arg0, str) => {
      str = str.trim();
      if ("" === str.trim()) {
        closure_1_2(closure_2_37);
      } else {
        closure_1_2(arg0);
      }
    }, items, undefined, { frecencyBoosters: true });
    return tmp;
  }), 1)[0];
  items = [first];
  const effect = react.useEffect(() => () => first.clean(), items);
  let items1 = [first];
  const effect1 = react.useEffect(() => {
    let options;
    const obj = str(first2[42]);
    return obj.addRouteChangeListener(() => {
      items = ["user:" + id.getId()];
      set = new Set(items);
      const obj2 = visible(c2[36]);
      const selectedGuildFromRoute = obj2.getSelectedGuildFromRoute();
      if (null != selectedGuildFromRoute) {
        const _HermesInternal = HermesInternal;
        set.add("guild:" + selectedGuildFromRoute);
      }
      options.setOptions({ blacklist: set }, true);
    });
  }, items1);
  let items2 = [visible, first];
  const effect2 = react.useEffect(() => {
    if (visible) {
      first.resume();
    } else {
      first.pause();
    }
  }, items2);
  let items3 = [first];
  const callback1 = react.useCallback((arg0) => {
    _undefined(arg0);
    first.search(arg0);
  }, items3);
  let tmp15 = str.trim().length > 0;
  first1 = undefined;
  let tmp16 = _require;
  let obj = require("NavigationRouteUtils");
  let selectedGuildFromRoute = obj.getSelectedGuildFromRoute();
  let obj2 = require("NavigationRouteUtils");
  const selectedChannelFromRoute = obj2.getSelectedChannelFromRoute();
  [first1, tmp22] = react.useState(undefined);
  let closure_5 = tmp22;
  let items4 = [visible];
  const effect3 = react.useEffect(() => {
    const tmp = visible;
    if (!tmp) {
      closure_5(undefined);
    }
  }, items4);
  let closure_6 = react.useRef([]);
  let obj3 = require("get initialized");
  let items5 = [PrivateChannelReadStateStore];
  const stateFromStores = obj3.useStateFromStores(items5, () => {
    let current;
    const tmp = visible;
    if (tmp) {
      current = unreadPrivateChannelIds.getUnreadPrivateChannelIds();
    } else {
      current = ref.current;
    }
    return current;
  });
  const effect4 = react.useEffect(() => {
    ref.current = stateFromStores;
  });
  let closure_8 = react.useRef([]);
  let items6 = [SortedGuildStore, GuildReadStateStore, GuildStore];
  const items7 = [visible, selectedGuildFromRoute];
  const obj4 = require("get initialized");
  const stateFromStoresArray = obj4.useStateFromStoresArray(items6, () => {
    const tmp2 = visible;
    if (tmp2) {
      items = [];
      const items1 = [];
      flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
      const iter = flattenedGuildIds[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp11 = nextResult;
        if (nextResult !== selectedGuildFromRoute) {
          let obj = mentionCount;
          let hasUnreadResult = mentionCount.getMentionCount(tmp11) > 0;
          let tmp33 = hasUnreadResult;
          if (!tmp33) {
            hasUnreadResult = obj.hasUnread(tmp11);
          }
          if (hasUnreadResult) {
            guild = GuildStore.getGuild(tmp11);
            let hasItem;
            if (guild != null) {
              let features = guild.features;
              hasItem = features.has(constants.HUB);
            }
            if (!hasItem) {
              let tmp20 = tmp33;
              if (tmp20) {
                let arr = items.push(tmp11);
              } else {
                let arr2 = items1.push(tmp11);
              }
            }
          }
        }
        continue;
      }
      const push = items.push;
      const items2 = [];
      HermesBuiltin.arraySpread(items2, items1, 0);
      HermesBuiltin.apply(push, items2, items);
      return items;
    } else {
      return ref2.current;
    }
  }, items7);
  const effect5 = react.useEffect(() => {
    ref2.current = stateFromStoresArray;
  });
  let closure_10 = react.useRef([]);
  const items8 = [ChannelListStore, VoiceStateStore, ReadStateStore, UserGuildSettingsStore, ActiveJoinedThreadsStore];
  const items9 = [tmp15, selectedGuildFromRoute, visible, first1];
  const obj5 = require("get initialized");
  const stateFromStoresArray1 = obj5.useStateFromStoresArray(items8, () => {
    let channelMuted;
    let voiceStatesForChannel;
    let tmp2 = first1;
    if (first1 == null) {
      tmp2 = selectedGuildFromRoute;
    }
    const tmp3 = closure_0;
    if (!tmp3) {
      if (null != tmp2) {
        const tmp34 = visible;
        if (tmp34) {
          items = [];
          const items1 = [];
          const items2 = [];
          const items3 = [];
          const _Object = Object;
          const values = Object.values(activeJoinedUnreadThreadsForGuild.getActiveJoinedUnreadThreadsForGuild(tmp2));
          for (const item10020 of values) {
            for (const key10024 in item10020) {
              let arr = items1.push(key10024);
              continue;
            }
            continue;
          }
          const guildChannels = guild.getGuild(tmp2).guildChannels;
          guildChannels.forEachChannel((type) => {
            const tmp2 = memo(type.type);
            if (tmp2) {
              if (!channelMuted.isChannelMuted(type.guild_id, type.id)) {
                if (null == type.parent_id) {
                  const obj2 = mentionCount;
                  if (mentionCount.getMentionCount(type.id) > 0) {
                    items.push(type.id);
                  } else {
                    if (!tmp2) {
                      const obj3 = closure_2_0(selectedGuildFromRoute[37]);
                      if (obj3.getHasImportantUnread(type)) {
                        items1.push(type.id);
                      }
                    }
                    if (tmp2) {
                      const keys = Object.keys();
                      if (keys !== undefined) {
                        if (keys[tmp] !== undefined) {
                          items3.push(type.id);
                        }
                      }
                    } else if (obj2.hasUnread(type.id)) {
                      items2.push(type.id);
                    }
                  }
                }
              }
            }
          }, { ignoreRecents: true, withThreads: true });
          const push = items.push;
          const items4 = [];
          HermesBuiltin.arraySpread(items4, items1, 0);
          HermesBuiltin.apply(push, items4, items);
          const push2 = items.push;
          const items5 = [];
          HermesBuiltin.arraySpread(items5, items3, 0);
          HermesBuiltin.apply(push2, items5, items);
          const push3 = items.push;
          const items6 = [];
          HermesBuiltin.arraySpread(items6, items2, 0);
          HermesBuiltin.apply(push3, items6, items);
          return items;
        } else {
          return ref3.current;
        }
      }
    }
    return [];
  }, items9);
  const effect6 = react.useEffect(() => {
    ref3.current = stateFromStoresArray1;
  });
  const items10 = [NavigationHistoryStore];
  const obj6 = require("get initialized");
  const stateFromStores1 = obj6.useStateFromStores(items10, () => state.getState().history);
  let closure_13 = react.useRef([]);
  const items11 = [tmp15, visible, selectedGuildFromRoute, stateFromStoresArray, stateFromStores1];
  const memo = react.useMemo(function() {
    const tmp = closure_0;
    if (!tmp) {
      const tmp2 = visible;
      if (tmp2) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set(stateFromStoresArray);
        if (null != selectedGuildFromRoute) {
          set.add(tmp6);
        }
        items = [];
        const _Set2 = Set;
        const self3 = this;
        const self4 = this;
        const set1 = new Set();
        let diff = stateFromStores1.length - 1;
        const tmp9 = stateFromStores1;
        if (0 <= diff) {
          while (null != tmp9[diff]) {
            let tmp14;
            if (obj3.startsWith(closure_2_8)) {
              channel = channel.getChannel(closure_2_9(obj3));
              let guild_id;
              if (channel != null) {
                guild_id = channel.guild_id;
              }
              tmp14 = guild_id;
            } else {
              tmp14 = closure_2_9(obj3);
            }
            guild = GuildStore.getGuild(tmp14);
            let hasItem = null == tmp14 || set.has(tmp14) || set1.has(tmp14) || null == guild;
            if (!hasItem) {
              let features = guild.features;
              hasItem = features.has(constants.HUB);
            }
            if (!hasItem) {
              let addResult1 = set1.add(tmp14);
              let arr = items.push(tmp14);
            }
            if (items.length >= 20) {
              break;
            } else {
              diff = diff - 1;
              if (0 > diff) {
                break;
              }
            }
          }
        }
        return items;
      }
    }
    return ref4.current;
  }, items11);
  const effect7 = react.useEffect(() => {
    ref4.current = memo;
  });
  let closure_15 = react.useRef(undefined);
  const items12 = [tmp15, visible, stateFromStoresArray1, selectedChannelFromRoute, first1, stateFromStores1];
  const memo1 = react.useMemo(function() {
    function getChannelHistory(stateFromStores1, selectedChannelFromRoute) {
      let combined;
      if (null != selectedChannelFromRoute) {
        const _HermesInternal = HermesInternal;
        combined = "" + ref2 + selectedChannelFromRoute;
      }
      items = [];
      let diff = stateFromStores1.length - 1;
      if (0 <= diff) {
        while (null != stateFromStores1[diff]) {
          if (!obj.startsWith(ref3)) {
            if (obj !== combined) {
              let tmp8 = stateFromStoresArray(obj);
              basicChannel = basicChannel.getBasicChannel(tmp8);
              if (null != basicChannel) {
                if (null == basicChannel.guild_id) {
                  let arr = items.push(tmp8);
                  if (items.length >= 20) {
                    break;
                  }
                }
              }
              break;
            }
          }
          diff = diff - 1;
          if (0 > diff) {
            break;
          }
        }
      }
      return items;
    }
    const tmp = closure_0;
    if (!tmp) {
      const tmp2 = visible;
      if (tmp2) {
        let tmp24;
        let tmp6 = getChannelHistory(stateFromStores1, selectedChannelFromRoute);
        items = [];
        let tmp7 = first1;
        let tmp8 = null;
        if (null == first1) {
          let tmp9 = globalThis;
          const _Set = Set;
          const self = this;
          const self2 = this;
          set = new Set();
          let tmp11 = set;
          for (const item10022 of tmp6) {
            let tmp15 = createAndAppendChannel(item10022, set, items);
            continue;
          }
        }
        const items1 = [];
        const _Set2 = Set;
        const self3 = this;
        const self4 = this;
        const set1 = new Set();
        if (stateFromStoresArray1.length > 0) {
          for (const item10040 of tmp19) {
            let tmp23 = createAndAppendChannel(item10040, set1, items1);
            continue;
          }
        }
        if (items.length > 0) {
          const obj = { channelHistory: items, unreads: items1 };
          tmp24 = obj;
        }
        return tmp24;
      } else {
        return ref5.current;
      }
    }
  }, items12);
  const effect8 = react.useEffect(() => {
    ref5.current = memo1;
  });
  const deferredValue = react.useDeferredValue(memo1);
  const tmp36 = _slicedToArray(react.useState(false), 2);
  first2 = tmp36[0];
  [first3, tmp42] = react.useState(constants2.SEARCH);
  const tmp43 = closure_29();
  const _undefined = tmp43;
  const height = str(first2[39])().height;
  const rect = str(first2[40])();
  const top = rect.top;
  const bottom = rect.bottom;
  const items13 = [height, top, bottom, tmp43];
  const items14 = [str, tmp36[1], first2];
  const memo2 = react.useMemo(() => {
    items = [wrapper.wrapper, ];
    const obj = { maxHeight: height - top - bottom - 16 };
    items[1] = obj;
    return items;
  }, items13);
  const effect9 = react.useEffect(() => {
    const arr = str;
    if (str.length > 0) {
      const tmp = first2;
      if (!tmp) {
        const obj = AnalyticsUtilsDefault;
        obj.track(constants.LAUNCHPAD_SEARCHED);
        closure_3(true);
      }
    }
    if (0 === arr.length) {
      closure_3(false);
    }
  }, items14);
  _slicedToArray = react.useRef(-1);
  const items15 = [callback1, ref];
  const callback2 = react.useCallback(() => {
    let ref2;
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      clearTimeout(ref2.current);
      callback1("");
      const current = ref.current;
      if (current != null) {
        current.setText("");
      }
    }, 100);
  }, items15);
  const callback3 = react.useCallback(() => {
    clearTimeout(ref.current);
  }, []);
  const effect10 = react.useEffect(() => () => clearTimeout(ref.current), []);
  const fn = function l() {
    return 0 === sharedState.get();
  };
  fn.__closure = { sharedState };
  fn.__workletHash = 7315121230879;
  fn.__initData = __initData3;
  const fn2 = function i(arg0, arg1) {
    if (arg0 !== arg1) {
      if (arg0) {
        if (arg0 !== arg1) {
          const obj2 = callback1(first2[25]);
          obj2.runOnJS(callback2)();
        }
      }
      const tmp2 = arg0 || arg0 === arg1;
      if (!tmp2) {
        const obj = callback1(first2[25]);
        obj.runOnJS(callback3)();
      }
    }
  };
  const obj7 = require("ReanimatedRexport");
  fn2.__closure = { runOnJS: require("ReanimatedRexport").runOnJS, clearQuery: callback2, cancelTimeout: callback3 };
  fn2.__workletHash = 6379173436444;
  fn2.__initData = __initData4;
  ({ runOnJS: require("ReanimatedRexport").runOnJS, clearQuery: callback2, cancelTimeout: callback3 });
  const animatedReaction = obj7.useAnimatedReaction(fn, fn2);
  const obj9 = { style: memo2, children: null };
  const items16 = [, , ];
  const tmp51 = str.trim().length > 0;
  items16[0] = closure_27(closure_35, { tab: first3, setTab: tmp42, updateQuery: callback1, searchRef: ref, sharedState });
  let tmp54Result = 0 === str.trim().length && first3 === tmp39.SEARCH;
  const tmp52 = closure_28;
  if (tmp54Result) {
    const obj10 = { selectedGuildId: first1, setSelectedGuild: tmp22, unreadPrivateChannelIds: stateFromStores, unreadGuilds: stateFromStoresArray, guildHistory: memo, visible };
    tmp54Result = tmp54(tmp44(tmp17[44]), obj10);
  }
  items16[1] = tmp54Result;
  const obj11 = { style: tmp.launchPadContent, children: null };
  if (first3 === constants2.SEARCH) {
    if (tmp51) {
      const SearchResults = tmp16(first2[45]).SearchResults;
      if (tmp9 == null) {
        tmp9 = tmp7;
      }
      const obj12 = { results: tmp9, query: str };
      tmp54Result2 = tmp54(SearchResults, obj12);
    }
    obj11.children = tmp54Result2;
    items16[2] = closure_27(View, obj11);
    obj9.children = items16;
    return tmp52(View, obj9);
  }
  if (first3 === constants2.SEARCH) {
    const obj13 = { selectedGuildId: first1, unreads, history: channelHistory, expandedHistory: tmp3, toggleExpandedHistory: callback };
    unreads = undefined;
    const InitialResults = tmp16(first2[45]).InitialResults;
    if (deferredValue != null) {
      unreads = deferredValue.unreads;
    }
    if (unreads == null) {
      unreads = tmp7;
    }
    channelHistory = undefined;
    if (deferredValue != null) {
      channelHistory = deferredValue.channelHistory;
    }
    if (channelHistory == null) {
      channelHistory = tmp7;
    }
    tmp54Result2 = tmp54(InitialResults, obj13);
  } else if (first3 === constants2.DEV_TOOLS) {
    tmp54Result2 = tmp54(tmp44(tmp17[46]), {});
  } else if (first3 === constants2.MEMBERS) {
    tmp54Result2 = tmp54(tmp44(tmp17[47]), {});
  } else {
    tmp54Result2 = tmp54(tmp44(tmp17[48]), {});
  }
});
size = size_mod;
let result = size.fileFinishedImporting("modules/launchpad/native/LaunchPad.tsx");

export default memoResult;
