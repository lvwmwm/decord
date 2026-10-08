// Module ID: 17288
// Function ID: 17289
// Name: ChannelDetailsNavigator
// Dependencies: [32, 19, 17, 2063, 9581, 1085, 17113, 21, 9279, 558, 576, 573, 6958, 12174, 1126, 9232, 12553, 1264, 9648, 17289, 6679, 4937, 6209, 1630, 17345, 1381, 17346, 17347, 9290, 9291, 17348, 17349, 17350, 17195, 2]

// Module 17288 (ChannelDetailsNavigator)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import HeaderShared from "HeaderShared" /* 9232 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 9581 */;
import navigateToThreadCreation from "navigateToThreadCreation" /* 12174 */;
import AssetRegistryDefault from "AssetRegistry" /* 12553 */;
import SearchNavigatorConstants from "SearchNavigatorConstants" /* 17113 */;
import ChannelSettingsModal from "ChannelSettingsModal" /* 17289 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 9279 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c10;
let unpackModuleId;
const View = react_native.View;
const constants = ChannelDetailsConstants.ChannelDetailsNavigatorScreens;
const AnalyticEvents = Constants.AnalyticEvents;
const SearchNavigatorScreens = SearchNavigatorConstants.SearchNavigatorScreens;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = Object.freeze({});
let closure_13 = NativeStackView.createNativeStackNavigator();
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectedCreateThreadHeaderButton(channelId) {
  let first;
  let tmp6;
  const obj = channelId(576);
  const cResult = obj.c(5);
  const tmp = channelId;
  channelId = channelId.channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function o() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(573);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  let tmp8 = null;
  if (null != stateFromStores) {
    let tmp9;
    if (cResult[3] !== stateFromStores) {
      const obj2 = { channel: stateFromStores };
      const tmp12 = closure_10(closure_15, obj2);
      cResult[3] = stateFromStores;
      cResult[4] = tmp12;
      tmp9 = tmp12;
    } else {
      tmp9 = cResult[4];
    }
    tmp8 = tmp9;
  }
  return tmp8;
}) : (function ConnectedCreateThreadHeaderButton(channelId) {
  channelId = channelId.channelId;
  const items = [ChannelStore];
  const obj = channelId(573);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { channel: stateFromStores };
    tmp2 = closure_10(closure_15, obj2);
  }
  return tmp2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function CreateThreadHeaderButton(channel) {
  let tmp5;
  let obj = channel(576);
  const cResult = obj.c(5);
  channel = channel.channel;
  const obj2 = channel(6958);
  const canStartThread = obj2.useCanStartThread(channel);
  if (cResult[0] !== channel) {
    const fn = function t() {
      const obj = navigateToThreadCreation;
      const result = obj.navigateToThreadCreation(channel, "Thread Browser Toolbar");
    };
    cResult[0] = channel;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  let tmp6 = null;
  if (canStartThread) {
    let tmp8;
    let tmp10;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(channel(1126).t.rBIGBL);
      cResult[2] = stringResult;
      tmp8 = stringResult;
    } else {
      tmp8 = cResult[2];
    }
    if (cResult[3] !== tmp5) {
      const obj3 = { accessibilityLabel: tmp8, onPress: tmp5, source: AssetRegistryDefault };
      const HeaderIconButton = tmp(9232).HeaderIconButton;
      const tmp13 = closure_10(HeaderIconButton, obj3);
      cResult[3] = tmp5;
      cResult[4] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[4];
    }
    tmp6 = tmp10;
  }
  return tmp6;
}) : (function CreateThreadHeaderButton(channel) {
  let intl;
  channel = channel.channel;
  let obj = channel(6958);
  [][0] = channel;
  const canStartThread = obj.useCanStartThread(channel);
  let tmp5 = null;
  if (canStartThread) {
    const obj2 = { accessibilityLabel: intl.string(channel(1126).t.rBIGBL), onPress: tmp4, source: AssetRegistryDefault };
    const HeaderIconButton = tmp(9232).HeaderIconButton;
    intl = tmp(1126).intl;
    tmp5 = closure_10(HeaderIconButton, obj2);
  }
  return tmp5;
});
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelDetailsNavigator(navigation) {
  let Screen;
  let applicationId;
  let expandTopic;
  let left;
  let obj4;
  let right;
  let search;
  let source;
  let tmp = navigation;
  let tmp2 = source;
  let obj = navigation(source[10]);
  const cResult = obj.c(74);
  navigation = navigation.navigation;
  let params = navigation.route.params;
  const channelId = params.channelId;
  ({ applicationId, search, expandTopic, source } = params);
  let DETAILS = params.initialRouteName;
  if (undefined === DETAILS) {
    DETAILS = constants.DETAILS;
  }
  if (cResult[0] === channelId) {
    if (cResult[1] === DETAILS) {
      let tmp5;
      let tmp6;
      let tmp9;
      let tmp8;
      let tmp14;
      if (cResult[2] === source) {
        tmp5 = cResult[3];
        tmp6 = cResult[4];
      }
      let obj2 = react;
      const effect = react.useEffect(tmp5, tmp6);
      if (cResult[5] !== navigation) {
        const fn = function _() {
          return navigation.addListener("beforeRemove", () => {
            const obj = channelId(source[18]);
            return obj.close();
          });
        };
        const items = [navigation];
        cResult[5] = navigation;
        cResult[6] = fn;
        cResult[7] = items;
        tmp9 = items;
        tmp8 = fn;
      } else {
        tmp8 = cResult[6];
        tmp9 = cResult[7];
      }
      const effect1 = obj2.useEffect(tmp8, tmp9);
      let tmpResult = tmp(tmp2[19]);
      const channelSettingsScreensStyles = tmpResult.useChannelSettingsScreensStyles();
      if (cResult[8] !== channelId) {
        let obj3 = { initialParams: obj4 };
        obj4 = { channelId };
        cResult[8] = channelId;
        cResult[9] = obj3;
      }
      const tmpResult4 = tmp(tmp2[20]);
      const accessibilityNativeStackOptions = tmpResult4.useAccessibilityNativeStackOptions();
      if (cResult[10] !== channelId) {
        let channel = ChannelStore.getChannel(channelId);
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        cResult[10] = channelId;
        cResult[11] = guildId;
        tmp14 = guildId;
      } else {
        tmp14 = cResult[11];
      }
      if (cResult[12] === channelId) {
        if (cResult[13] === tmp14) {
          let tmp22;
          const _Symbol = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const fn2 = function j() {
              const obj = navigation(source[21]);
              const rootNavigationRef = obj.getRootNavigationRef();
              let tmp2 = !(null == rootNavigationRef || !rootNavigationRef.isReady());
              null == rootNavigationRef || !rootNavigationRef.isReady();
              if (tmp2) {
                let flag = rootNavigationRef.canGoBack();
                if (flag) {
                  rootNavigationRef.goBack();
                  flag = true;
                }
                tmp2 = flag;
              }
              return tmp2;
            };
            cResult[16] = fn2;
            tmp22 = fn2;
          } else {
            tmp22 = cResult[16];
          }
          const tmpResult5 = tmp(tmp2[22]);
          tmpResult5.useNavigatorBackPressHandler(tmp22);
          ({ left, right } = channelId(tmp2[23])());
          channelId(tmp2[23])();
          if (cResult[17] === left) {
            let tmp26;
            if (cResult[18] === right) {
              tmp26 = cResult[19];
            }
            if (cResult[20] === channelSettingsScreensStyles.container) {
              if (cResult[23] !== accessibilityNativeStackOptions) {
                const obj5 = { headerTitle: tmp(tmp2[15]).renderGenericTitle, headerTitleAlign: "center" };
                let merged = Object.assign(accessibilityNativeStackOptions);
                cResult[23] = accessibilityNativeStackOptions;
                cResult[24] = obj5;
              }
              if (cResult[25] === channelId) {
                if (cResult[26] === expandTopic) {
                  let tmp32;
                  let tmp33;
                  let tmp34;
                  let tmp46;
                  let tmp47;
                  let tmp48;
                  if (cResult[27] === search) {
                    tmp32 = cResult[28];
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj6 = { headerShown: false };
                    class K {
                      constructor() {
                        return navigation(source[24]).default;
                      }
                    }
                    cResult[29] = obj6;
                    cResult[30] = K;
                    tmp33 = obj6;
                    tmp34 = K;
                  } else {
                    tmp33 = cResult[29];
                    class K {
                      constructor() {
                        return navigation(source[24]).default;
                      }
                    }
                  }
                  if (cResult[31] !== tmp32) {
                    class K {
                      constructor() {
                        return navigation(source[24]).default;
                      }
                    }
                    const obj7 = { initialParams: tmp32, name: constants.DETAILS, options: tmp33, getComponent: tmp34 };
                    cResult[31] = tmp32;
                    cResult[32] = closure_10(Screen.Screen, obj7);
                    const tmp38 = closure_10(Screen.Screen, obj7);
                  }
                  const _Symbol3 = Symbol;
                  if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                    class K {
                      constructor() {
                        return navigation(source[24]).default;
                      }
                    }
                    const obj8 = {
                      name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
                      options(route) {
                                          let obj2;
                                          route = route.route;
                                          let obj = {
                                            header(arg0) {
                                              let obj2;
                                              const obj = { shouldHandleSafeArea: obj2.isAndroid() };
                                              const renderHeader = route(source[15]).renderHeader;
                                              route(source[15]);
                                              const merged = Object.assign(arg0);
                                              obj2 = route(source[25]);
                                              return renderHeader(obj);
                                            },
                                            headerTitle() {
                                              const obj = { channelId: route.params.channelId };
                                              return closure_2_10(channelId(source[26]), obj);
                                            },
                                            headerLeft: obj2.getRenderBackImage(navigation)
                                          };
                                          navigation = route.navigation;
                                          obj2 = route(source[15]);
                                          return obj;
                                        },
                      getComponent() {
                                          return navigation(source[27]).default;
                                        }
                    };
                    cResult[33] = closure_10(Screen.Screen, obj8);
                    const tmp42 = closure_10(Screen.Screen, obj8);
                  }
                  const _Symbol4 = Symbol;
                  if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                    class K {
                      constructor() {
                        return navigation(source[24]).default;
                      }
                    }
                    Screen = Screen.Screen;
                    const obj9 = {
                      name: tmp(tmp2[28]).ConversationNavigatorScreens.FOCUS,
                      options(arg0) {
                                          let route;
                                          ({ route, navigation } = arg0);
                                          const obj = navigation(source[29]);
                                          return obj.conversationNavigatorFocusHeaderOptions(route, navigation);
                                        },
                      getComponent() {
                                          return navigation(source[30]).default;
                                        }
                    };
                    cResult[34] = closure_10(Screen, obj9);
                    const tmp45 = closure_10(Screen, obj9);
                  }
                  if (cResult[35] !== channelId) {
                    const obj10 = { channelId: null };
                    class K {
                      constructor() {
                        return navigation(source[24]).default;
                      }
                    }
                    cResult[35] = channelId;
                    cResult[36] = obj10;
                    tmp46 = obj10;
                  } else {
                    tmp46 = cResult[36];
                  }
                  if (cResult[37] !== DETAILS) {
                    const fn3 = function $(navigation) {
                      let intl;
                      let renderModalCloseImage;
                      navigation = navigation.navigation;
                      const route = navigation.route;
                      const obj = { title: intl.string(intl2.t["mp1N/2"]), headerLeft: renderModalCloseImage };
                      intl = intl2.intl;
                      if (DETAILS === route.name) {
                        const tmpResult = HeaderShared;
                        renderModalCloseImage = tmpResult.getRenderModalCloseImage(navigation);
                      } else {
                        const tmpResult2 = HeaderShared;
                        renderModalCloseImage = tmpResult2.getRenderModalBackImage(navigation);
                      }
                      return obj;
                    };
                    class K {
                      constructor() {
                        return navigation(source[24]).default;
                      }
                    }
                    cResult[37] = DETAILS;
                    cResult[38] = fn3;
                    tmp47 = fn3;
                  } else {
                    tmp47 = cResult[38];
                  }
                  const _Symbol5 = Symbol;
                  if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                    function ee() {
                      return navigation(source[31]).default;
                    }
                    class K {
                      constructor() {
                        return navigation(source[24]).default;
                      }
                    }
                    cResult[39] = ee;
                    tmp48 = ee;
                  } else {
                    tmp48 = cResult[39];
                  }
                  if (cResult[40] === tmp46) {
                    class K {
                      constructor() {
                        return navigation(source[24]).default;
                      }
                    }
                    const obj11 = { channelId, applicationId };
                    cResult[43] = applicationId;
                    cResult[44] = channelId;
                    cResult[45] = obj11;
                  }
                  const obj12 = { name: null, initialParams: tmp46, options: tmp47, getComponent: tmp48 };
                  class I {
                    constructor() {
                      const channel = ChannelStore.getChannel(channelId);
                      if (null != channel) {
                        const obj = { channel_id: channel.id, guild_id: channel.getGuildId(), channel_type: channel.type, initial_route_name: DETAILS, source };
                        const track = AnalyticsUtilsDefault.track;
                        const CHANNEL_SIDEBAR_VIEWED = AnalyticEvents.CHANNEL_SIDEBAR_VIEWED;
                        AnalyticsUtilsDefault;
                        track(CHANNEL_SIDEBAR_VIEWED, obj);
                      }
                    }
                  }
                  cResult[40] = tmp46;
                  cResult[41] = tmp47;
                  cResult[42] = closure_10(Screen.Screen, obj12);
                  const tmp53 = closure_10(Screen.Screen, obj12);
                }
              }
              const obj13 = { channelId, search, expandTopic };
              cResult[25] = channelId;
              cResult[26] = expandTopic;
              cResult[27] = search;
              cResult[28] = obj13;
              tmp32 = obj13;
            }
            const items1 = [channelSettingsScreensStyles.container, tmp26];
            cResult[20] = channelSettingsScreensStyles.container;
            cResult[21] = tmp26;
            cResult[22] = items1;
          }
          const obj14 = { paddingLeft: left, paddingRight: right };
          cResult[17] = left;
          cResult[18] = right;
          class I {
            constructor() {
              const channel = ChannelStore.getChannel(channelId);
              if (null != channel) {
                const obj = { channel_id: channel.id, guild_id: channel.getGuildId(), channel_type: channel.type, initial_route_name: DETAILS, source };
                const track = AnalyticsUtilsDefault.track;
                const CHANNEL_SIDEBAR_VIEWED = AnalyticEvents.CHANNEL_SIDEBAR_VIEWED;
                AnalyticsUtilsDefault;
                track(CHANNEL_SIDEBAR_VIEWED, obj);
              }
            }
          }
          tmp26 = obj14;
        }
      }
      if (null != tmp14) {
        tmp(tmp2[19]);
        class K {
          constructor() {
            return navigation(source[24]).default;
          }
        }
      }
      cResult[12] = channelId;
      cResult[13] = tmp14;
      cResult[14] = channelSettingsScreensStyles;
      class I {
        constructor() {
          const channel = ChannelStore.getChannel(channelId);
          if (null != channel) {
            const obj = { channel_id: channel.id, guild_id: channel.getGuildId(), channel_type: channel.type, initial_route_name: DETAILS, source };
            const track = AnalyticsUtilsDefault.track;
            const CHANNEL_SIDEBAR_VIEWED = AnalyticEvents.CHANNEL_SIDEBAR_VIEWED;
            AnalyticsUtilsDefault;
            track(CHANNEL_SIDEBAR_VIEWED, obj);
          }
        }
      }
    }
  }
  class I {
    constructor() {
      const channel = ChannelStore.getChannel(channelId);
      if (null != channel) {
        const obj = { channel_id: channel.id, guild_id: channel.getGuildId(), channel_type: channel.type, initial_route_name: DETAILS, source };
        const track = AnalyticsUtilsDefault.track;
        const CHANNEL_SIDEBAR_VIEWED = AnalyticEvents.CHANNEL_SIDEBAR_VIEWED;
        AnalyticsUtilsDefault;
        track(CHANNEL_SIDEBAR_VIEWED, obj);
      }
    }
  }
  const items2 = [channelId, DETAILS, source];
  cResult[0] = channelId;
  cResult[1] = DETAILS;
  cResult[2] = source;
  cResult[3] = I;
  cResult[4] = items2;
  tmp6 = items2;
  tmp5 = I;
}) : (function ChannelDetailsNavigator(navigation) {
  let Navigator;
  let Screen;
  let applicationId;
  let expandTopic;
  let items4;
  let items5;
  let obj5;
  let obj6;
  let search;
  navigation = navigation.navigation;
  let params = navigation.route.params;
  const channelId = params.channelId;
  const source = params.source;
  let DETAILS = params.initialRouteName;
  ({ applicationId, search, expandTopic } = params);
  if (DETAILS === undefined) {
    const tmp = constants;
    DETAILS = constants.DETAILS;
  }
  let channelSettingsScreensStyles;
  let obj = channelSettingsScreensStyles;
  const items = [channelId, DETAILS, source];
  const effect = channelSettingsScreensStyles.useEffect(() => {
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      const obj = { channel_id: channel.id, guild_id: channel.getGuildId(), channel_type: channel.type, initial_route_name: DETAILS, source };
      const track = AnalyticsUtilsDefault.track;
      const CHANNEL_SIDEBAR_VIEWED = AnalyticEvents.CHANNEL_SIDEBAR_VIEWED;
      AnalyticsUtilsDefault;
      track(CHANNEL_SIDEBAR_VIEWED, obj);
    }
  }, items);
  const items1 = [navigation];
  const effect1 = channelSettingsScreensStyles.useEffect(() => navigation.addListener("beforeRemove", () => {
    const obj = channelId(source[18]);
    return obj.close();
  }), items1);
  let obj2 = navigation(source[19]);
  channelSettingsScreensStyles = obj2.useChannelSettingsScreensStyles();
  const items2 = [channelId];
  const memo = channelSettingsScreensStyles.useMemo(() => {
    const obj = { initialParams: obj2 };
    return obj;
  }, items2);
  let obj3 = navigation(source[20]);
  const accessibilityNativeStackOptions = obj3.useAccessibilityNativeStackOptions();
  let channel = ChannelStore.getChannel(channelId);
  let guildId;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  const items3 = [channelId, guildId, channelSettingsScreensStyles];
  const memo1 = obj.useMemo(() => {
    let channelSettingsScreens;
    if (null != guildId) {
      const obj2 = ChannelSettingsModal;
      channelSettingsScreens = obj2.getChannelSettingsScreens(channelId, tmp, channelSettingsScreensStyles);
    } else {
      channelSettingsScreens = {};
    }
    return channelSettingsScreens;
  }, items3);
  const tmp4Result = navigation(source[22]);
  tmp4Result.useNavigatorBackPressHandler(() => {
    const obj = navigation(source[21]);
    const rootNavigationRef = obj.getRootNavigationRef();
    let tmp2 = !(null == rootNavigationRef || !rootNavigationRef.isReady());
    null == rootNavigationRef || !rootNavigationRef.isReady();
    if (tmp2) {
      let flag = rootNavigationRef.canGoBack();
      if (flag) {
        rootNavigationRef.goBack();
        flag = true;
      }
      tmp2 = flag;
    }
    return tmp2;
  });
  const rect = channelId(tmp5[23])();
  const obj4 = { style: items4, children: closure_11(Navigator, obj5) };
  items4 = [channelSettingsScreensStyles.container, { paddingLeft: rect.left, paddingRight: rect.right }];
  Navigator = Screen.Navigator;
  obj5 = { id: "channel-details-navigator", screenOptions: obj6, initialRouteName: DETAILS, children: items5 };
  obj6 = { headerTitle: navigation(source[15]).renderGenericTitle, headerTitleAlign: "center" };
  let merged = Object.assign(accessibilityNativeStackOptions);
  items5 = [, , , , , , ];
  const obj7 = {
    initialParams: { channelId, search, expandTopic },
    name: constants.DETAILS,
    options: { headerShown: false },
    getComponent() {
      return navigation(source[24]).default;
    }
  };
  items5[0] = closure_10(Screen.Screen, obj7);
  const obj8 = {
    name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
    options(route) {
      let obj2;
      route = route.route;
      let obj = {
        header(arg0) {
          let obj2;
          const obj = { shouldHandleSafeArea: obj2.isAndroid() };
          const renderHeader = route(source[15]).renderHeader;
          route(source[15]);
          const merged = Object.assign(arg0);
          obj2 = route(source[25]);
          return renderHeader(obj);
        },
        headerTitle() {
          const obj = { channelId: route.params.channelId };
          return closure_2_10(channelId(source[26]), obj);
        },
        headerLeft: obj2.getRenderBackImage(navigation)
      };
      navigation = route.navigation;
      obj2 = route(source[15]);
      return obj;
    },
    getComponent() {
      return navigation(source[27]).default;
    }
  };
  items5[1] = closure_10(Screen.Screen, obj8);
  const obj9 = {
    name: navigation(source[28]).ConversationNavigatorScreens.FOCUS,
    options(arg0) {
      let route;
      ({ route, navigation } = arg0);
      const obj = navigation(source[29]);
      return obj.conversationNavigatorFocusHeaderOptions(route, navigation);
    },
    getComponent() {
      return navigation(source[30]).default;
    }
  };
  items5[2] = closure_10(Screen.Screen, obj9);
  const obj10 = {
    name: constants.PINNED_MESSAGES,
    initialParams: { channelId },
    options(navigation) {
      let intl;
      let renderModalCloseImage;
      navigation = navigation.navigation;
      const route = navigation.route;
      const obj = { title: intl.string(intl2.t["mp1N/2"]), headerLeft: renderModalCloseImage };
      intl = intl2.intl;
      if (DETAILS === route.name) {
        const tmpResult = HeaderShared;
        renderModalCloseImage = tmpResult.getRenderModalCloseImage(navigation);
      } else {
        const tmpResult2 = HeaderShared;
        renderModalCloseImage = tmpResult2.getRenderModalBackImage(navigation);
      }
      return obj;
    },
    getComponent() {
      return navigation(source[31]).default;
    }
  };
  items5[3] = closure_10(Screen.Screen, obj10);
  const obj11 = {
    initialParams: { channelId, applicationId },
    name: constants.MUTE,
    options(navigation) {
      let intl;
      let renderModalCloseImage;
      navigation = navigation.navigation;
      const route = navigation.route;
      const obj = { title: intl.string(intl2.t.w4m945), headerLeft: renderModalCloseImage };
      intl = intl2.intl;
      if (DETAILS === route.name) {
        const tmpResult = HeaderShared;
        renderModalCloseImage = tmpResult.getRenderModalCloseImage(navigation);
      } else {
        const tmpResult2 = HeaderShared;
        renderModalCloseImage = tmpResult2.getRenderModalBackImage(navigation);
      }
      return obj;
    },
    getComponent() {
      return navigation(source[32]).default;
    }
  };
  items5[4] = closure_10(Screen.Screen, obj11);
  Screen = Screen.Screen;
  const obj12 = {
    name: constants.THREADS,
    options(arg0) {
      let intl;
      let renderModalCloseImage;
      let route;
      ({ navigation, route } = arg0);
      let obj = {
        title: intl.string(intl2.t.B2panI),
        headerLeft: renderModalCloseImage,
        headerRight() {
          const obj = { channelId: route.params.channelId };
          return closure_2_10(closure_2_14, obj);
        }
      };
      intl = intl2.intl;
      if (DETAILS === route.name) {
        const tmpResult = HeaderShared;
        renderModalCloseImage = tmpResult.getRenderModalCloseImage(navigation);
      } else {
        const tmpResult2 = HeaderShared;
        renderModalCloseImage = tmpResult2.getRenderModalBackImage(navigation);
      }
      return obj;
    },
    getComponent() {
      return navigation(source[33]).default;
    }
  };
  const merged1 = Object.assign(memo);
  items5[5] = closure_10(Screen, obj12);
  const entries = Object.entries(memo1);
  items5[6] = entries.map((item) => {
    let tmp;
    [tmp, ] = item;
    let obj = {
      name: tmp,
      options(navigation) {
        let renderModalCloseImage;
        navigation = navigation.navigation;
        const obj = { title: channelId.title, headerLeft: renderModalCloseImage };
        if (DETAILS === closure_1_0) {
          const obj3 = HeaderShared;
          renderModalCloseImage = obj3.getRenderModalCloseImage(navigation);
        } else {
          const obj2 = HeaderShared;
          renderModalCloseImage = obj2.getRenderModalBackImage(navigation);
        }
        return obj;
      },
      children(route) {
        let params = route.route.params;
        navigation = route.navigation;
        if (params == null) {
          params = closure_12;
        }
        return channelId.render(params, navigation);
      }
    };
    return closure_1_10(Screen.Screen, obj, tmp);
  });
  return closure_10(guildId, obj4);
}));
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsNavigator.tsx");

export default memoResult;
