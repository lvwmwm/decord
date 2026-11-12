// Module ID: 19481
// Function ID: 19482
// Name: LaunchPad
// Dependencies: [32, 19, 17, 5407, 7814, 6962, 6929, 5023, 502, 5019, 7974, 6974, 5041, 15986, 6930, 6860, 6863, 5835, 1072, 21, 575, 5170, 7076, 5783, 504, 1652, 5355, 1705, 7315, 1113, 15128, 9321, 17941, 1377, 16783, 14662, 9260, 5346, 9261, 9248, 1493, 1627, 9249, 12262, 1252, 19482, 19489, 18122, 19502, 19503, 2]

// Module 19481 (LaunchPad)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import ChatInputUtils from "ChatInputUtils" /* 5355 */;
import Text_Text from "Text/Text" /* 5783 */;
import Pressables from "Pressables" /* 7076 */;
import _mod9248 from "module_9248" /* 9248 */;
import createAutocompleterResultForChannelIdDefault from "createAutocompleterResultForChannelId" /* 9260 */;
import hideLaunchPadDefault from "hideLaunchPad" /* 14662 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 5407 */;
import ChannelListStore from "ChannelListStore" /* 7814 */;
import NavigationHistoryStore_mod from "NavigationHistoryStore" /* 6962 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 6929 */;
import ChannelRecord from "ChannelRecord" /* 5023 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7974 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6974 */;
import GuildStore from "GuildStore" /* 5041 */;
import PrivateChannelReadStateStore from "PrivateChannelReadStateStore" /* 15986 */;
import ReadStateStore from "ReadStateStore" /* 6930 */;
import SortedGuildStore from "SortedGuildStore" /* 6860 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6863 */;
import VoiceStateStore from "VoiceStateStore" /* 5835 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, basicChannel, channel, flattenedGuildIds, guild, set;

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
const DevToolsNavigator = tmp(16783);
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
  const obj = { style: closure_29().subheader, variant: "heading-sm/semibold", maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: text };
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
let closure_33 = { code: "(function LaunchPadTsx1(){let[sharedState]=this.__closure;return sharedState.get();})" };
let closure_34 = { code: "(function LaunchPadTsx2(sharedState){let[keyboardShown,scheduleOnRN,setFocused]=this.__closure;if(!keyboardShown.get()&&sharedState>0.75){scheduleOnRN(setFocused,true);}else if(keyboardShown.get()&&sharedState<=0){scheduleOnRN(setFocused,false);}})" };
let closure_35 = react.memo(function LaunchPadHeader(tab) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let isDeveloper;
  let items10;
  let items9;
  let ref;
  let sharedState;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp24;
  let tmp25;
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
  const obj2 = tab(sharedState[25]);
  const sharedValue = obj2.useSharedValue(false);
  const ref2 = react.useRef(tab);
  const effect = react.useEffect(() => {
    ref2.current = tab;
  });
  const items1 = [sharedValue, searchRef];
  const callback = react.useCallback((arg0, arg1) => {
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
  const items3 = [stateFromStores1, callback];
  const effect1 = react.useEffect(() => {
    callback(!stateFromStores1, stateFromStores1);
  }, items3);
  const items4 = [tab, sharedState, callback];
  const effect2 = react.useEffect(() => {
    const tmp = tab === constants.SEARCH && 1 === sharedState.get();
    if (tmp) {
      callback(true);
    }
  }, items4);
  const items5 = [closure_33, sharedState];
  let c0;
  [tmp12, tmp13] = items5;
  const tmp11 = tab(sharedState[25]);
  class LaunchPadTsx1 {
    constructor() {
      return _undefined.get();
    }
  }
  const items6 = [tmp13];
  LaunchPadTsx1.__closure = items6;
  LaunchPadTsx1.__workletHash = 5288317841417;
  LaunchPadTsx1.__initData = tmp12;
  const items7 = [closure_34, sharedValue, , ];
  const useAnimatedReaction = tmp11.useAnimatedReaction;
  items7[2] = tab(sharedState[27]).scheduleOnRN;
  items7[3] = callback;
  c0 = undefined;
  let c1;
  let c2;
  [tmp14, tmp15, tmp16, tmp17] = items7;
  class LaunchPadTsx2 {
    constructor(arg0) {
      const obj = _undefined;
      if (!_undefined.get()) {
        if (arg0 > 0.75) {
          _undefined2(c2, true);
        }
      }
      const value = obj.get() && arg0 <= 0;
      if (value) {
        _undefined2(c2, false);
      }
    }
  }
  const items8 = [tmp15, tmp16, tmp17];
  LaunchPadTsx2.__closure = items8;
  LaunchPadTsx2.__workletHash = 4752313458637;
  LaunchPadTsx2.__initData = tmp14;
  const animatedReaction = useAnimatedReaction(LaunchPadTsx1, LaunchPadTsx2);
  const tmp20 = sharedValue;
  const obj4 = { style: tmp.header, children: items9 };
  if (tab === constants2.SEARCH) {
    const obj5 = { size: "md", returnKeyType: "done", ref: searchRef, onChange: updateQuery, autoComplete: "off", spellCheck: false, autoFocus: false };
    tmp25 = closure_27(tmp2(tmp3[28]).SearchBar, obj5);
    tmp24 = closure_27;
  } else if (tab === constants2.MEMBERS) {
    const obj6 = { text: intl2.string(tab(sharedState[29]).t["9Oq93m"]) };
    intl2 = tmp2(tmp3[29]).intl;
    tmp25 = closure_27(TabHeader, obj6);
    tmp24 = closure_27;
  } else if (tab === constants2.NOTIFICATIONS) {
    const obj7 = { text: intl.string(tab(sharedState[29]).t.HcoRu0) };
    intl = tmp2(tmp3[29]).intl;
    tmp25 = closure_27(TabHeader, obj7);
    tmp24 = closure_27;
  } else {
    tmp24 = closure_27;
    tmp25 = closure_27(TabHeader, { text: "Dev Tools" });
  }
  items9 = [tmp25, ];
  const obj8 = { style: tmp.tabs, children: items10 };
  const obj9 = {
    icon(color) {
      const obj = { size: "sm", color };
      return closure_1_27(tab(sharedState[30]).FlashIcon, obj);
    },
    accessibilityLabel: intl3.string(tab(sharedState[29]).t.JqV7IC),
    onPress() {
      importDefault(constants.SEARCH);
      const current = searchRef.current;
      if (current != null) {
        current.focus();
      }
    },
    selected: tab === constants2.SEARCH
  };
  intl3 = tmp2(tmp3[29]).intl;
  items10 = [tmp24(TabButton, obj9), , ];
  const obj10 = {
    icon(color) {
      const obj = { size: "sm", color };
      return closure_1_27(tab(sharedState[31]).BellIcon, obj);
    },
    accessibilityLabel: intl4.string(tab(sharedState[29]).t.HcoRu0),
    onPress() {
      importDefault(constants.NOTIFICATIONS);
      const current = searchRef.current;
      if (current != null) {
        current.blur();
      }
    },
    selected: tab === constants2.NOTIFICATIONS
  };
  intl4 = tmp2(tmp3[29]).intl;
  items10[1] = tmp24(TabButton, obj10);
  let tmp24Result = null;
  const tmp31 = TabButton;
  if (stateFromStores) {
    const obj11 = {
      icon(color) {
          const obj = { size: "sm", color };
          return closure_1_27(tab(sharedState[32]).StaffBadgeIcon, obj);
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
    tmp24Result = tmp24(tmp31, obj11);
  }
  items10[2] = tmp24Result;
  items9[1] = closure_28(tmp20, obj8);
  return closure_28(tmp20, obj4);
});
let closure_37 = [];
let items = [_mod9248.AutocompleterResultTypes.GUILD, _mod9248.AutocompleterResultTypes.TEXT_CHANNEL, _mod9248.AutocompleterResultTypes.GROUP_DM, _mod9248.AutocompleterResultTypes.VOICE_CHANNEL, _mod9248.AutocompleterResultTypes.USER];
let closure_39 = { code: "(function LaunchPadTsx3(){let[sharedState]=this.__closure;return sharedState.get()===0;})" };
let closure_40 = { code: "(function LaunchPadTsx4(hidden,prevHidden){let[scheduleOnRN,clearQuery,cancelTimeout]=this.__closure;if(hidden===prevHidden)return;if(hidden&&hidden!==prevHidden){scheduleOnRN(clearQuery);}else if(!hidden&&hidden!==prevHidden){scheduleOnRN(cancelTimeout);}})" };
const memoResult = react.memo(function LaunchPad(arg0) {
  let _undefined;
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
  let tmp51;
  let tmp52;
  let tmp53;
  let tmp54;
  let tmp55;
  let tmp56;
  let tmp61Result2;
  let tmp9;
  let unreadPrivateChannelIds;
  let unreads;
  let visible;
  ({ visible, sharedState } = arg0);
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
    const tmp = new str(first2[42])((arg0, str) => {
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
    const obj = str(first2[43]);
    return obj.addRouteChangeListener(() => {
      items = ["user:" + id.getId()];
      set = new Set(items);
      const obj2 = visible(c2[37]);
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
  _require = tmp15;
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
                      const obj3 = closure_2_0(selectedGuildFromRoute[38]);
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
  _slicedToArray = tmp38;
  [first3, tmp42] = react.useState(constants2.SEARCH);
  const tmp43 = closure_29();
  _require = tmp43;
  const height = str(first2[40])().height;
  const rect = str(first2[41])();
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
  let closure_2 = react.useRef(-1);
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
  const items16 = [closure_39, sharedState];
  const tmp50 = require("module_1652");
  _require = undefined;
  [tmp51, tmp52] = items16;
  class LaunchPadTsx3 {
    constructor() {
      return 0 === _undefined.get();
    }
  }
  const items17 = [tmp52];
  LaunchPadTsx3.__closure = items17;
  LaunchPadTsx3.__workletHash = 375435467238;
  LaunchPadTsx3.__initData = tmp51;
  const items18 = [closure_40, , , ];
  const useAnimatedReaction = tmp50.useAnimatedReaction;
  items18[1] = tmp16(first2[27]).scheduleOnRN;
  items18[2] = callback2;
  items18[3] = callback3;
  _require = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp53, tmp54, tmp55, tmp56] = items18;
  class LaunchPadTsx4 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        if (arg0) {
          if (arg0 !== arg1) {
            _undefined(c1);
          }
        }
        const tmp2 = arg0 || arg0 === arg1;
        if (!tmp2) {
          _undefined(c2);
        }
      }
    }
  }
  const items19 = [tmp54, tmp55, tmp56];
  LaunchPadTsx4.__closure = items19;
  LaunchPadTsx4.__workletHash = 5415003155916;
  LaunchPadTsx4.__initData = tmp53;
  const animatedReaction = useAnimatedReaction(LaunchPadTsx3, LaunchPadTsx4);
  const obj7 = { style: memo2, children: null };
  const items20 = [, , ];
  const tmp58 = str.trim().length > 0;
  items20[0] = closure_27(closure_35, { tab: first3, setTab: tmp42, updateQuery: callback1, searchRef: ref, sharedState });
  let tmp61Result = 0 === str.trim().length && first3 === tmp39.SEARCH;
  const tmp59 = closure_28;
  if (tmp61Result) {
    const obj8 = { selectedGuildId: first1, setSelectedGuild: tmp22, unreadPrivateChannelIds: stateFromStores, unreadGuilds: stateFromStoresArray, guildHistory: memo, visible };
    tmp61Result = tmp61(tmp44(tmp17[45]), obj8);
  }
  items20[1] = tmp61Result;
  const obj9 = { style: tmp.launchPadContent, children: null };
  if (first3 === constants2.SEARCH) {
    if (tmp58) {
      const SearchResults = tmp16(first2[46]).SearchResults;
      if (tmp9 == null) {
        tmp9 = tmp7;
      }
      const obj10 = { results: tmp9, query: str };
      tmp61Result2 = tmp61(SearchResults, obj10);
    }
    obj9.children = tmp61Result2;
    items20[2] = closure_27(View, obj9);
    obj7.children = items20;
    return tmp59(View, obj7);
  }
  if (first3 === constants2.SEARCH) {
    const obj11 = { selectedGuildId: first1, unreads, history: channelHistory, expandedHistory: tmp3, toggleExpandedHistory: callback };
    unreads = undefined;
    const InitialResults = tmp16(first2[46]).InitialResults;
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
    tmp61Result2 = tmp61(InitialResults, obj11);
  } else if (first3 === constants2.DEV_TOOLS) {
    tmp61Result2 = tmp61(tmp44(tmp17[47]), {});
  } else if (first3 === constants2.MEMBERS) {
    tmp61Result2 = tmp61(tmp44(tmp17[48]), {});
  } else {
    tmp61Result2 = tmp61(tmp44(tmp17[49]), {});
  }
});
size = size_mod;
let result = size.fileFinishedImporting("modules/launchpad/native/LaunchPad.tsx");

export default memoResult;
