// Module ID: 17108
// Function ID: 17109
// Name: ChannelDetails
// Dependencies: [19, 17, 12523, 2045, 8157, 11257, 21, 580, 4790, 558, 568, 504, 12483, 17109, 7441, 7461, 1488, 17105, 5205, 7218, 1616, 1368, 4769, 7754, 12545, 12522, 4529, 4791, 4794, 5219, 12531, 4657, 17110, 17120, 17217, 17219, 17220, 17221, 5173, 6923, 2]

// Module 17108 (ChannelDetails)
import nativeDefault from "native" /* 580 */;
import timing from "timing" /* 4791 */;
import timingPresets from "timingPresets" /* 4794 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 12522 */;
import SearchActionCreatorsDefault from "SearchActionCreators" /* 12531 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 12545 */;
import noop from "module_19" /* 19 */;
import SearchQueryStore from "SearchQueryStore" /* 12523 */;
import ChannelStore from "ChannelStore" /* 2045 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const ChannelDetailsStore = fn(8157);
({ deleteChannelDetailsSearchState: closure_7, useChannelDetailsSearchActiveSource: closure_8, useIsChannelDetailsSearchActive: closure_9 } = ChannelDetailsStore);
const ChannelDetailsConstants = fn(11257);
({ SPRING_CHANNEL_HEADER: c10, CHANNEL_DETAILS_TOP_MARGIN } = ChannelDetailsConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const createStyles = fn(4790);
let obj = { detailsContainer: null, information: null, linkedLobby: null, search: null, searchLocked: null, autocompleteSuggestions: null, newHeader: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND;
obj3.flex = 1;
obj.detailsContainer = obj3;
obj.information = { marginHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, paddingTop: PX_8 };
let obj4 = { marginHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, paddingTop: PX_8 };
obj.linkedLobby = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4 };
obj.search = { flex: 1, flexGrow: 1 };
let obj5 = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4 };
obj.searchLocked = { marginTop: CHANNEL_DETAILS_TOP_MARGIN, marginBottom: nativeDefault.space.PX_16 };
obj.autocompleteSuggestions = { zIndex: 10 };
let obj6 = { marginTop: CHANNEL_DETAILS_TOP_MARGIN, marginBottom: nativeDefault.space.PX_16 };
obj.newHeader = { paddingBottom: nativeDefault.space.PX_12, zIndex: 10 };
let closure_14 = createStyles.createStyles(obj);
const __initData = { code: "function ChannelDetailsTsx1(){const{headerHeight,isSearchActive,withTiming,timingFast,withSpring,SPRING_CHANNEL_HEADER}=this.__closure;const height_0=headerHeight.get();return{position:\"relative\",pointerEvents:isSearchActive?\"none\":\"auto\",opacity:withTiming(isSearchActive?0:1,timingFast,\"animate-always\"),height:height_0!=null&&height_0>=0?withSpring(isSearchActive?0:height_0,{...SPRING_CHANNEL_HEADER,clamp:{min:0,max:height_0}}):undefined};}" };
const __initData2 = { code: "function ChannelDetailsTsx2(){const{headerHeight,isSearchActive,withTiming,timingFast,withSpring,SPRING_CHANNEL_HEADER}=this.__closure;const height_0=headerHeight.get();return{position:'relative',pointerEvents:isSearchActive?'none':'auto',opacity:withTiming(isSearchActive?0:1,timingFast,'animate-always'),height:height_0!=null&&height_0>=0?withSpring(isSearchActive?0:height_0,{...SPRING_CHANNEL_HEADER,clamp:{min:0,max:height_0}}):undefined};}" };
const ReactCompilerGating = fn(558);
let obj7 = { paddingBottom: nativeDefault.space.PX_12, zIndex: 10 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetails.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let AnalyticsLocationProvider = channelId;
  let tmp = onChannelDeleted;
  const cResult = channelId(onChannelDeleted[10]).c(66);
  channelId = channelId.channelId;
  const isSearchLocked = channelId.isSearchLocked;
  ({ onBackPress, componentWidth, isShowing, onChannelDeleted } = channelId);
  const expandTopic = channelId.expandTopic;
  noop = tmp3;
  let searchLocked = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [closure_6];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function c() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let result = AnalyticsLocationProvider(tmp[11]);
  const stateFromStores = result.useStateFromStores(first, tmp7);
  if (stateFromStores != null) {
    const guild_id = stateFromStores.guild_id;
  }
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === onChannelDeleted) {
      let tmp8 = cResult[5];
      let tmp9 = cResult[6];
    }
    const effect = noop.useEffect(tmp8, tmp9);
    let result1 = AnalyticsLocationProvider(tmp[12]);
    const channelDetailsSearchContext = result1.useChannelDetailsSearchContext(channelId, guild_id);
    const result2 = AnalyticsLocationProvider(tmp[13]);
    const searchSuggestionsGesture = result2.useSearchSuggestionsGesture(channelDetailsSearchContext);
    ({ gesture, dismissed, setDismissed: search, onLayoutMeasure } = searchSuggestionsGesture);
    let tmp13 = isSearchLocked;
    const analyticsLocations = isSearchLocked(tmp[14])(isSearchLocked(tmp[15]).CHANNEL_DETAILS).analyticsLocations;
    const tmp16 = nativeStackNavigation(channelId);
    closure_6 = tmp16;
    const tmp18 = ref(channelId);
    closure_7 = tmp18;
    ref = noop.useRef(null);
    const result3 = AnalyticsLocationProvider(tmp[16]);
    nativeStackNavigation = result3.useNativeStackNavigation();
    const context = noop.useContext(AnalyticsLocationProvider(tmp[17]).SwipeForMemberListContext);
    const result4 = AnalyticsLocationProvider(tmp[18]);
    const isScreenReaderEnabled = result4.useIsScreenReaderEnabled();
    const tmp23 = isSearchLocked(tmp[19])();
    const top = isSearchLocked(tmp[20])().top;
    if (cResult[7] === context) {
      if (cResult[8] === top) {
        let tmp24 = cResult[9];
      }
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function $() {
          return channelId(onChannelDeleted[23]).trackAppUIViewed();
        };
        const items1 = [];
        cResult[10] = fn2;
        cResult[11] = items1;
        let tmp28 = items1;
        let tmp27 = fn2;
      } else {
        tmp27 = cResult[10];
        tmp28 = cResult[11];
      }
      const layoutEffect = obj4.useLayoutEffect(tmp27, tmp28);
      if (cResult[12] === tmp16) {
        if (cResult[13] === isSearchLocked) {
          if (cResult[14] === tmp18) {
            if (cResult[15] === channelDetailsSearchContext) {
              let tmp30 = cResult[16];
              let tmp31 = cResult[17];
            }
            const effect1 = obj4.useEffect(tmp30, tmp31);
            const result5 = AnalyticsLocationProvider(tmp[26]);
            const sharedValue = result5.useSharedValue(undefined);
            if (cResult[18] !== sharedValue) {
              function se(nativeEvent) {
                const height = nativeEvent.nativeEvent.layout.height;
                if (height > PX_8) {
                  value = sharedValue.get();
                  let tmp3 = null != value;
                  if (tmp3) {
                    const _Math = Math;
                    tmp3 = Math.abs(height - value) < 0.001;
                  }
                  if (!tmp3) {
                    const result = obj.set(height);
                  }
                  obj = sharedValue;
                }
              }
              cResult[18] = sharedValue;
              cResult[19] = se;
              let tmp34 = se;
            } else {
              tmp34 = cResult[19];
            }
            const result6 = AnalyticsLocationProvider(tmp[26]);
            function re() {
              value = sharedValue.get();
              let str = "auto";
              if (closure_6) {
                str = "none";
              }
              const obj = { position: "relative", pointerEvents: str, opacity: null, height: null };
              let num = 1;
              if (closure_6) {
                num = 0;
              }
              obj.opacity = timing.withTiming(num, timingPresets.timingFast, "animate-always");
              let withSpringResult;
              if (null != value) {
                if (value >= 0) {
                  let num3 = 0;
                  if (!tmp2) {
                    num3 = value;
                  }
                  const obj3 = {};
                  const merged = Object.assign(v65535);
                  const range = { min: 0, max: value };
                  obj3.clamp = range;
                  withSpringResult = tmp3(5219).withSpring(num3, obj3);
                  const tmp3Result = tmp3(5219);
                }
              }
              obj.height = withSpringResult;
              return obj;
            }
            let obj2 = { headerHeight: sharedValue, isSearchActive: tmp16, withTiming: AnalyticsLocationProvider(tmp[27]).withTiming, timingFast: AnalyticsLocationProvider(tmp[28]).timingFast, withSpring: AnalyticsLocationProvider(tmp[29]).withSpring, SPRING_CHANNEL_HEADER: sharedValue };
            re.__closure = obj2;
            re.__workletHash = 2552459668795;
            re.__initData = __initData;
            const animatedStyle = result6.useAnimatedStyle(re);
            if (cResult[20] !== channelDetailsSearchContext) {
              function le() {
                const result = SearchActionCreatorsDefault.initializeAutocomplete(channelDetailsSearchContext);
                const result1 = SearchPlatformActionCreatorsDefault.initializeSearchQuery(channelDetailsSearchContext);
              }
              const items2 = [channelDetailsSearchContext];
              cResult[20] = channelDetailsSearchContext;
              cResult[21] = le;
              cResult[22] = items2;
              let tmp39 = items2;
              let tmp38 = le;
            } else {
              tmp38 = cResult[21];
              tmp39 = cResult[22];
            }
            const effect2 = obj4.useEffect(tmp38, tmp39);
            if (cResult[23] === tmp3) {
              if (cResult[24] === channelDetailsSearchContext) {
                let tmp41 = cResult[25];
                let tmp42 = cResult[26];
              }
              const effect3 = obj4.useEffect(tmp41, tmp42);
              if (cResult[27] === channelId) {
                if (cResult[28] === channelDetailsSearchContext) {
                  let tmp44 = cResult[29];
                  let tmp45 = cResult[30];
                }
                const effect4 = obj4.useEffect(tmp44, tmp45);
                if (cResult[31] === channelId) {
                  if (cResult[32] === nativeStackNavigation) {
                    let tmp47 = cResult[33];
                    let tmp48 = cResult[34];
                  }
                  const effect5 = obj4.useEffect(tmp47, tmp48);
                  if (null == stateFromStores) {
                    return null;
                  } else {
                    if (cResult[35] === animatedStyle) {
                      if (cResult[36] === stateFromStores) {
                        if (cResult[37] === channelId) {
                          if (cResult[38] === componentWidth) {
                            if (cResult[39] === dismissed) {
                              if (cResult[40] === tmp4) {
                                if (cResult[41] === guild_id) {
                                  if (cResult[42] === isScreenReaderEnabled) {
                                    if (cResult[43] === isSearchLocked) {
                                      if (cResult[44] === tmp3) {
                                        if (cResult[45] === tmp23) {
                                          if (cResult[46] === onBackPress) {
                                            if (cResult[47] === tmp34) {
                                              if (cResult[48] === onLayoutMeasure) {
                                                if (cResult[49] === tmp24) {
                                                  if (cResult[50] === channelDetailsSearchContext) {
                                                    if (cResult[51] === search) {
                                                      if (cResult[52] === searchLocked.autocompleteSuggestions) {
                                                        if (cResult[53] === searchLocked.detailsContainer) {
                                                          if (cResult[54] === searchLocked.information) {
                                                            if (cResult[55] === searchLocked.linkedLobby) {
                                                              if (cResult[56] === searchLocked.newHeader) {
                                                                if (cResult[57] === searchLocked.search) {
                                                                  if (cResult[58] === searchLocked.searchLocked) {
                                                                    if (cResult[60] === gesture) {
                                                                      if (cResult[61] === tmp51) {
                                                                        let tmp62 = cResult[62];
                                                                      }
                                                                      if (cResult[63] === analyticsLocations) {
                                                                      }
                                                                      AnalyticsLocationProvider = AnalyticsLocationProvider(tmp[14]).AnalyticsLocationProvider;
                                                                      let obj3 = { value: analyticsLocations, children: tmp62 };
                                                                      tmp = closure_11(AnalyticsLocationProvider, obj3);
                                                                      cResult[63] = analyticsLocations;
                                                                      cResult[64] = tmp62;
                                                                      cResult[65] = tmp;
                                                                    }
                                                                    const obj5 = { gesture, children: cResult[59] };
                                                                    const tmp64 = closure_11(AnalyticsLocationProvider(tmp[39]).GestureDetector, obj5);
                                                                    cResult[60] = gesture;
                                                                    cResult[61] = cResult[59];
                                                                    cResult[62] = tmp64;
                                                                    tmp62 = tmp64;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    const obj6 = { style: null, accessibilityViewIsModal: true, onAccessibilityEscape: null, children: null };
                    const items3 = [searchLocked.detailsContainer, tmp24];
                    obj6.style = items3;
                    obj6.onAccessibilityEscape = onBackPress;
                    let obj7 = { style: null, children: null };
                    if (isSearchLocked) {
                      const items4 = [, ];
                      ({ searchLocked: arr14[0], autocompleteSuggestions: arr14[1] } = searchLocked);
                      obj7.style = items4;
                      const obj8 = { ref, channelId, guildId: guild_id, onSuggestionsLayoutMesure: onLayoutMeasure, onBackPress, suggestionsDismissed: dismissed, setSuggestionsDismissed: search, showBackButton: null };
                      ref = tmp23;
                      if (!tmp23) {
                        ref = isScreenReaderEnabled;
                      }
                      if (!ref) {
                        const result7 = AnalyticsLocationProvider(tmp[21]);
                        ref = result7.isAndroid();
                      }
                      if (ref) {
                        ref = null != onBackPress;
                      }
                      obj8.showBackButton = ref;
                      obj7.children = closure_11(tmp13(tmp[32]), obj8);
                      const tmp13Result = tmp13(tmp[32]);
                      obj7 = [, ];
                      obj7[0] = closure_11(tmp53, obj7);
                      tmp13 = tmp13(tmp[33]);
                      const obj9 = { searchContext: channelDetailsSearchContext, width: componentWidth };
                      obj7[1] = closure_11(tmp13, obj9);
                      obj6.children = obj7;
                      let tmp56 = obj6;
                      const tmp57Result = closure_11(tmp53, obj7);
                    } else {
                      obj7[0] = searchLocked.newHeader;
                      const obj10 = { ref, channel: stateFromStores, onBackPress, onSuggestionsLayoutMeasure: onLayoutMeasure, suggestionsDismissed: dismissed, setSuggestionsDismissed: search, componentWidth };
                      const items5 = [closure_11(tmp13(tmp[34]), obj10), ];
                      const obj11 = { style: animatedStyle, children: null };
                      const obj12 = { style: searchLocked.information, onLayout: tmp34, children: null };
                      const obj13 = { channel: stateFromStores };
                      const items6 = [closure_11(tmp13(tmp[35]), obj13), , ];
                      const obj14 = { channel: stateFromStores, containerStyle: searchLocked.linkedLobby };
                      items6[1] = closure_11(tmp13(tmp[36]), obj14);
                      let tmp54Result = null;
                      if (!stateFromStores.isPrivate()) {
                        const obj15 = { channel: stateFromStores, textAlign: "left", initialExpanded: tmp4 };
                        tmp54Result = tmp54(tmp13(tmp[37]), obj15);
                      }
                      items6[2] = tmp54Result;
                      obj12.children = items6;
                      obj11.children = tmp52(tmp13(tmp[26]).View, obj12);
                      items5[1] = closure_11(tmp13(tmp[26]).View, obj11);
                      obj7[1] = items5;
                      const items7 = [, ];
                      class P {
                        constructor() {
                          if (null == closure_4) {
                            if (onChannelDeleted != null) {
                              tmpResult = tmp();
                            }
                          }
                          return;
                        }
                      }
                      const obj16 = { freeze: !tmp3, children: null };
                      const obj17 = { style: searchLocked.search, collapsable: false, children: null };
                      const obj18 = { searchContext: channelDetailsSearchContext, width: componentWidth };
                      obj17.children = closure_11(tmp13(tmp[33]), obj18);
                      obj16.children = closure_11(tmp53, obj17);
                      items7[1] = closure_11(AnalyticsLocationProvider(tmp[38]).Freeze, obj16);
                      obj6.children = items7;
                      tmp56 = obj6;
                    }
                    const tmp52Result = closure_12(stateFromStores, tmp56);
                    cResult[35] = animatedStyle;
                    cResult[36] = stateFromStores;
                    cResult[37] = channelId;
                    cResult[38] = componentWidth;
                    cResult[39] = dismissed;
                    cResult[40] = tmp4;
                    cResult[41] = guild_id;
                    cResult[42] = isScreenReaderEnabled;
                    cResult[43] = isSearchLocked;
                    cResult[44] = tmp3;
                    cResult[45] = tmp23;
                    class P {
                      constructor() {
                        if (null == closure_4) {
                          if (onChannelDeleted != null) {
                            tmpResult = tmp();
                          }
                        }
                        return;
                      }
                    }
                    cResult[47] = tmp34;
                    cResult[48] = onLayoutMeasure;
                    cResult[49] = tmp24;
                    cResult[50] = channelDetailsSearchContext;
                    cResult[51] = search;
                    cResult[52] = searchLocked.autocompleteSuggestions;
                    cResult[53] = searchLocked.detailsContainer;
                    cResult[54] = searchLocked.information;
                    cResult[55] = searchLocked.linkedLobby;
                    ({ newHeader: tmp2[56], search } = searchLocked);
                    cResult[57] = search;
                    searchLocked = searchLocked.searchLocked;
                    cResult[58] = searchLocked;
                    cResult[59] = tmp52Result;
                  }
                }
                function ge() {
                  if ("channel-details-navigator" === nativeStackNavigation.getId()) {
                    return obj.addListener("transitionEnd", (data) => {
                      if (!data.data.closing) {
                        const bestActiveInputForChannelId = channelId(onChannelDeleted[31]).getBestActiveInputForChannelId(closure_1_0);
                        if (bestActiveInputForChannelId != null) {
                          bestActiveInputForChannelId.closeCustomKeyboard();
                        }
                        const obj = channelId(onChannelDeleted[31]);
                      }
                    });
                  }
                  obj = nativeStackNavigation;
                }
                const items8 = [channelId, nativeStackNavigation];
                cResult[31] = channelId;
                cResult[32] = nativeStackNavigation;
                cResult[33] = ge;
                cResult[34] = items8;
                tmp48 = items8;
                tmp47 = ge;
              }
              function ue() {
                return () => {
                  const result = isSearchLocked(onChannelDeleted[30]).clearAllSearchMesssages();
                  closure_7(channelId);
                  const obj = isSearchLocked(onChannelDeleted[30]);
                  isSearchLocked(onChannelDeleted[24]).deleteSearchQuery(channelDetailsSearchContext);
                };
              }
              const items9 = [channelId, channelDetailsSearchContext];
              cResult[27] = channelId;
              cResult[28] = channelDetailsSearchContext;
              cResult[29] = ue;
              cResult[30] = items9;
              tmp45 = items9;
              tmp44 = ue;
            }
            function ce() {
              if (closure_3) {
                const result = SearchActionCreatorsDefault.clearAllSearchMesssages();
                SearchPlatformActionCreatorsDefault.updateSearchQuery(channelDetailsSearchContext, (reset) => reset.reset());
              }
            }
            const items10 = [channelDetailsSearchContext, tmp3];
            cResult[23] = tmp3;
            cResult[24] = channelDetailsSearchContext;
            class P {
              constructor() {
                if (null == closure_4) {
                  if (onChannelDeleted != null) {
                    tmpResult = tmp();
                  }
                }
                return;
              }
            }
            cResult[26] = items10;
            tmp42 = items10;
            tmp41 = ce;
          }
        }
      }
      function ie() {
        if (!isSearchLocked) {
          if ("initial" !== closure_7) {
            const current = ref.current;
            if (closure_6) {
              if (current != null) {
                current.focus();
              }
            } else {
              if (current != null) {
                current.blur();
              }
              if (!SearchQueryStore.isInitialSearchQuery(channelDetailsSearchContext)) {
                SearchPlatformActionCreatorsDefault.updateSearchQuery(tmp4, (reset) => reset.reset());
                const initialMessages = SearchPlatformUtilsDefault.fetchInitialMessages(tmp4);
              }
            }
          }
        }
      }
      const items11 = [tmp16, isSearchLocked, tmp18, channelDetailsSearchContext];
      cResult[12] = tmp16;
      cResult[13] = isSearchLocked;
      cResult[14] = tmp18;
      cResult[15] = channelDetailsSearchContext;
      cResult[16] = ie;
      cResult[17] = items11;
      tmp31 = items11;
      tmp30 = ie;
    }
    const result8 = AnalyticsLocationProvider(tmp[21]);
    if (!result8.isAndroid()) {
      const result9 = AnalyticsLocationProvider(tmp[22]);
      if (!result9.isIpadOS()) {
        let tmp25 = null;
      }
      cResult[7] = context;
      cResult[8] = top;
      cResult[9] = tmp25;
      tmp24 = tmp25;
    }
    class P {
      constructor() {
        if (null == closure_4) {
          if (onChannelDeleted != null) {
            tmpResult = tmp();
          }
        }
        return;
      }
    }
    tmp26[0] = top;
    tmp25 = tmp26;
    const tmp14 = isSearchLocked(tmp[14]);
  }
  class P {
    constructor() {
      if (null == closure_4) {
        if (onChannelDeleted != null) {
          tmpResult = tmp();
        }
      }
      return;
    }
  }
  const items12 = [stateFromStores, onChannelDeleted];
  cResult[3] = stateFromStores;
  cResult[4] = onChannelDeleted;
  cResult[5] = P;
  cResult[6] = items12;
  tmp9 = items12;
  tmp8 = P;
}) : ((channelId) => {
  channelId = channelId.channelId;
  const isSearchLocked = channelId.isSearchLocked;
  ({ onBackPress, componentWidth, isShowing } = channelId);
  if (isShowing === undefined) {
    isShowing = true;
  }
  const onChannelDeleted = channelId.onChannelDeleted;
  let flag = channelId.expandTopic;
  if (flag === undefined) {
    flag = false;
  }
  let channelDetailsSearchContext;
  closure_6 = undefined;
  closure_7 = undefined;
  let ref;
  let nativeStackNavigation;
  let context;
  let top;
  let sharedValue;
  let tmp = closure_14();
  let obj = channelId;
  let tmp2 = isShowing;
  const items = [closure_6];
  const stateFromStores = channelId(isShowing[11]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  const items1 = [stateFromStores, onChannelDeleted];
  const effect = onChannelDeleted.useEffect(() => {
    if (null == stateFromStores) {
      if (onChannelDeleted != null) {
        tmp();
      }
    }
  }, items1);
  let obj2 = channelId(isShowing[11]);
  channelDetailsSearchContext = obj(tmp2[12]).useChannelDetailsSearchContext(channelId, guild_id);
  const objResult = obj(tmp2[12]);
  const searchSuggestionsGesture = obj(tmp2[13]).useSearchSuggestionsGesture(channelDetailsSearchContext);
  ({ dismissed, setDismissed, onLayoutMeasure } = searchSuggestionsGesture);
  let tmp7 = isSearchLocked;
  const objResult6 = obj(tmp2[13]);
  const tmp9 = nativeStackNavigation(channelId);
  closure_6 = tmp9;
  const tmp10 = ref(channelId);
  closure_7 = tmp10;
  ref = onChannelDeleted.useRef(null);
  const tmp8 = isSearchLocked(tmp2[14]);
  nativeStackNavigation = obj(tmp2[16]).useNativeStackNavigation();
  context = onChannelDeleted.useContext(obj(tmp2[17]).SwipeForMemberListContext);
  const objResult7 = obj(tmp2[16]);
  const isScreenReaderEnabled = obj(tmp2[18]).useIsScreenReaderEnabled();
  let isAndroidResult = isSearchLocked(tmp2[19])();
  top = isSearchLocked(tmp2[20])().top;
  const items2 = [top, context];
  const memo = onChannelDeleted.useMemo(() => {
    if (!obj.isAndroid()) {
      if (!tmpResult.isIpadOS()) {
        let tmp4 = null;
      }
      return tmp4;
    }
    tmp4 = { paddingTop: top };
  }, items2);
  const layoutEffect = onChannelDeleted.useLayoutEffect(() => channelId(isShowing[23]).trackAppUIViewed(), []);
  const items3 = [tmp9, isSearchLocked, tmp10, channelDetailsSearchContext];
  const effect1 = onChannelDeleted.useEffect(() => {
    if (!isSearchLocked) {
      if ("initial" !== closure_7) {
        const current = ref.current;
        if (closure_6) {
          if (current != null) {
            current.focus();
          }
        } else {
          if (current != null) {
            current.blur();
          }
          if (!SearchQueryStore.isInitialSearchQuery(channelDetailsSearchContext)) {
            SearchPlatformActionCreatorsDefault.updateSearchQuery(tmp4, (reset) => reset.reset());
            const initialMessages = SearchPlatformUtilsDefault.fetchInitialMessages(tmp4);
          }
        }
      }
    }
  }, items3);
  const objResult8 = obj(tmp2[18]);
  sharedValue = obj(tmp2[26]).useSharedValue(undefined);
  const items4 = [sharedValue];
  const callback = onChannelDeleted.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    if (height > PX_8) {
      value = sharedValue.get();
      let tmp3 = null != value;
      if (tmp3) {
        const _Math = Math;
        tmp3 = Math.abs(height - value) < 0.001;
      }
      if (!tmp3) {
        const result = obj.set(height);
      }
      obj = sharedValue;
    }
  }, items4);
  const objResult9 = obj(tmp2[26]);
  const fn = function j() {
    value = sharedValue.get();
    let str = "auto";
    if (closure_6) {
      str = "none";
    }
    const obj = { position: "relative", pointerEvents: str, opacity: null, height: null };
    let num = 1;
    if (closure_6) {
      num = 0;
    }
    obj.opacity = timing.withTiming(num, timingPresets.timingFast, "animate-always");
    let withSpringResult;
    if (null != value) {
      if (value >= 0) {
        let num3 = 0;
        if (!tmp2) {
          num3 = value;
        }
        const obj3 = {};
        const merged = Object.assign(v65535);
        const range = { min: 0, max: value };
        obj3.clamp = range;
        withSpringResult = tmp3(5219).withSpring(num3, obj3);
        const tmp3Result = tmp3(5219);
      }
    }
    obj.height = withSpringResult;
    return obj;
  };
  const objResult10 = obj(tmp2[26]);
  fn.__closure = { headerHeight: sharedValue, isSearchActive: tmp9, withTiming: obj(tmp2[27]).withTiming, timingFast: obj(tmp2[28]).timingFast, withSpring: obj(tmp2[29]).withSpring, SPRING_CHANNEL_HEADER: context };
  fn.__workletHash = 1831044277368;
  fn.__initData = __initData2;
  const items5 = [channelDetailsSearchContext];
  const animatedStyle = objResult10.useAnimatedStyle(fn);
  const effect2 = onChannelDeleted.useEffect(() => {
    const result = SearchActionCreatorsDefault.initializeAutocomplete(channelDetailsSearchContext);
    const result1 = SearchPlatformActionCreatorsDefault.initializeSearchQuery(channelDetailsSearchContext);
  }, items5);
  const items6 = [channelDetailsSearchContext, isShowing];
  const effect3 = onChannelDeleted.useEffect(() => {
    if (isShowing) {
      const result = SearchActionCreatorsDefault.clearAllSearchMesssages();
      SearchPlatformActionCreatorsDefault.updateSearchQuery(channelDetailsSearchContext, (reset) => reset.reset());
    }
  }, items6);
  const items7 = [channelId, channelDetailsSearchContext];
  const effect4 = onChannelDeleted.useEffect(() => () => {
    const result = isSearchLocked(isShowing[30]).clearAllSearchMesssages();
    closure_7(channelId);
    const obj = isSearchLocked(isShowing[30]);
    isSearchLocked(isShowing[24]).deleteSearchQuery(channelDetailsSearchContext);
  }, items7);
  const items8 = [channelId, nativeStackNavigation];
  const effect5 = onChannelDeleted.useEffect(() => {
    if ("channel-details-navigator" === nativeStackNavigation.getId()) {
      return obj.addListener("transitionEnd", (data) => {
        if (!data.data.closing) {
          const bestActiveInputForChannelId = channelId(isShowing[31]).getBestActiveInputForChannelId(closure_1_0);
          if (bestActiveInputForChannelId != null) {
            bestActiveInputForChannelId.closeCustomKeyboard();
          }
          const obj = channelId(isShowing[31]);
        }
      });
    }
    obj = nativeStackNavigation;
  }, items8);
  if (null == stateFromStores) {
    return null;
  } else {
    const obj4 = { value: tmp8(isSearchLocked(tmp2[15]).CHANNEL_DETAILS).analyticsLocations, children: null };
    let obj5 = { gesture: searchSuggestionsGesture.gesture, children: null };
    const obj6 = { style: null, accessibilityViewIsModal: true, onAccessibilityEscape: null, children: null };
    const items9 = [tmp.detailsContainer, memo];
    obj6.style = items9;
    obj6.onAccessibilityEscape = onBackPress;
    let obj7 = { style: null, children: null };
    if (isSearchLocked) {
      const items10 = [, ];
      ({ searchLocked: arr15[0], autocompleteSuggestions: arr15[1] } = tmp);
      obj7.style = items10;
      tmp = tmp7(tmp2[32]);
      const obj8 = { ref, channelId, guildId: guild_id, onSuggestionsLayoutMesure: onLayoutMeasure, onBackPress, suggestionsDismissed: dismissed, setSuggestionsDismissed: setDismissed, showBackButton: null };
      if (!isAndroidResult) {
        isAndroidResult = isScreenReaderEnabled;
      }
      if (!isAndroidResult) {
        obj = obj(tmp2[21]);
        isAndroidResult = obj.isAndroid();
      }
      if (isAndroidResult) {
        isAndroidResult = null != onBackPress;
      }
      obj8.showBackButton = isAndroidResult;
      obj7.children = tmp26(tmp, obj8);
      obj7 = [, ];
      obj7[0] = tmp26(tmp28, obj7);
      tmp7 = tmp7(tmp2[33]);
      const obj9 = { searchContext: channelDetailsSearchContext, width: componentWidth };
      tmp2 = tmp26(tmp7, obj9);
      obj7[1] = tmp2;
      obj6.children = obj7;
      let tmp30 = obj6;
      const tmp26Result = tmp26(tmp28, obj7);
    } else {
      obj7[0] = tmp.newHeader;
      const obj10 = { ref, channel: stateFromStores, onBackPress, onSuggestionsLayoutMeasure: onLayoutMeasure, suggestionsDismissed: dismissed, setSuggestionsDismissed: setDismissed, componentWidth };
      const items11 = [tmp26(tmp7(tmp2[34]), obj10), ];
      const obj11 = { style: animatedStyle, children: null };
      const obj12 = { style: tmp.information, onLayout: callback, children: null };
      const obj13 = { channel: stateFromStores };
      const items12 = [tmp26(tmp7(tmp2[35]), obj13), , ];
      const obj14 = { channel: stateFromStores, containerStyle: tmp.linkedLobby };
      items12[1] = tmp26(tmp7(tmp2[36]), obj14);
      let tmp26Result3 = null;
      if (!stateFromStores.isPrivate()) {
        const obj15 = { channel: stateFromStores, textAlign: "left", initialExpanded: flag };
        tmp26Result3 = tmp26(tmp7(tmp2[37]), obj15);
      }
      items12[2] = tmp26Result3;
      obj12.children = items12;
      obj11.children = tmp27(tmp7(tmp2[26]).View, obj12);
      items11[1] = tmp26(tmp7(tmp2[26]).View, obj11);
      obj7[1] = items11;
      const items13 = [tmp27(tmp28, obj7), ];
      const obj16 = { freeze: !isShowing, children: null };
      const obj17 = { style: tmp.search, collapsable: false, children: null };
      const obj18 = { searchContext: channelDetailsSearchContext, width: componentWidth };
      obj17.children = tmp26(tmp7(tmp2[33]), obj18);
      obj16.children = tmp26(tmp28, obj17);
      items13[1] = tmp26(obj(tmp2[38]).Freeze, obj16);
      obj6.children = items13;
      tmp30 = obj6;
    }
    obj5.children = sharedValue(stateFromStores, tmp30);
    obj5 = tmp26(obj(tmp2[39]).GestureDetector, obj5);
    obj4.children = obj5;
    top(obj(tmp2[14]).AnalyticsLocationProvider, obj4);
  }
}));
