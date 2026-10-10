// Module ID: 11636
// Function ID: 11637
// Name: TypingIndicator
// Dependencies: [19, 17, 9383, 5091, 5989, 7374, 11637, 1390, 1085, 21, 558, 576, 11638, 504, 5092, 587, 11639, 11640, 11641, 5409, 1265, 6851, 6878, 11642, 11643, 4850, 4818, 4827, 5378, 5382, 11653, 1200, 5088, 11657, 2]
// Exports: hasTypingIndicatorContent

// Module 11636 (TypingIndicator)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import spring from "spring" /* 5378 */;
import springPresets from "springPresets" /* 5382 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5409 */;
import SlowmodeStore from "SlowmodeStore" /* 7374 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 9383 */;
import useTypingUsersIds from "useTypingUsersIds" /* 11638 */;
import CustomTypingIndicatorUtils from "CustomTypingIndicatorUtils" /* 11641 */;
import CustomTypingIndicatorAnalytics from "CustomTypingIndicatorAnalytics" /* 11642 */;
import openCustomTypingIndicatorAnnounceActionSheet from "openCustomTypingIndicatorAnnounceActionSheet" /* 11643 */;
import react from "react" /* 19 */;
import DevSettingsStore from "DevSettingsStore" /* 5091 */;
import RawGuildEmojiStore_mod from "RawGuildEmojiStore" /* 5989 */;
import TypingStore from "TypingStore" /* 11637 */;
import UserStore from "UserStore" /* 1390 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import createStyles from "createStyles" /* 5092 */;
import size from "module_2" /* 2 */;

let currentUser, obj1, set, tmp12, tmp17, trackResult;

let closure_12;
let closure_14;
let map1;
let tmp;
const native = tmp(4827);
function renderTypingIndicator(arg0, arg1, transitionState, cleanUp) {
  const obj = { transitionState, cleanUp };
  const merged = Object.assign(arg1);
  return authStore2(closure_23, obj, arg0);
}
let View = react_native.View;
let style_owner_user_id = useChatBottomManagerUIStore.useChatShowingAutoComplete;
let RawGuildEmojiStore = RawGuildEmojiStore_mod;
const SlowmodeType = SlowmodeStore.SlowmodeType;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTypingUserIdsForDisplay(arg0, arg1) {
  let tmp10;
  let tmp5;
  let tmp6;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(8);
  const obj2 = useTypingUsersIds;
  const typingUserIds = obj2.useTypingUserIds(arg0, arg1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DevSettingsStore];
    const fn = function s() {
      return DevSettingsStore.get("preview_own_typing_indicator");
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    const fn2 = function _() {
      currentUser = currentUser.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      return id;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp10 = fn2;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult2 = get_initialized;
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp10);
  if (cResult[4] === stateFromStores1) {
    if (cResult[5] === stateFromStores) {
      let tmp13;
      if (cResult[6] === typingUserIds) {
        tmp13 = cResult[7];
      }
      return tmp13;
    }
  }
  let tmp14 = typingUserIds;
  if (stateFromStores) {
    tmp14 = typingUserIds;
    if (null != stateFromStores1) {
      const items2 = [stateFromStores1];
      tmp14 = items2;
    }
  }
  cResult[4] = stateFromStores1;
  cResult[5] = stateFromStores;
  cResult[6] = typingUserIds;
  cResult[7] = tmp14;
  tmp13 = tmp14;
}) : (function useTypingUserIdsForDisplay(arg0, arg1) {
  let stateFromStores1;
  let typingUserIds;
  const obj = typingUserIds(stateFromStores1[12]);
  typingUserIds = obj.useTypingUserIds(arg0, arg1);
  let items = [DevSettingsStore];
  const obj2 = typingUserIds(stateFromStores1[13]);
  const stateFromStores = obj2.useStateFromStores(items, () => DevSettingsStore.get("preview_own_typing_indicator"));
  const items1 = [UserStore];
  const obj3 = typingUserIds(stateFromStores1[13]);
  stateFromStores1 = obj3.useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const items2 = [stateFromStores, stateFromStores1, typingUserIds];
  return react.useMemo(() => {
    const tmp = stateFromStores;
    if (tmp) {
      let tmp4;
      if (null != stateFromStores1) {
        const items = [tmp2];
        tmp4 = items;
      }
      return tmp4;
    }
    tmp4 = typingUserIds;
  }, items2);
});
let closure_15 = tmp4;
let closure_16 = createStyles.createStyles((arg0) => {
  const obj = { typingWrapper: { paddingTop: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_PADDING_TOP, paddingBottom: 4, paddingHorizontal: 16, alignSelf: "stretch", backgroundColor: "transparent", paddingRight: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingLeft: 2 * arg0 }, wrapperHoriz: { justifyContent: "space-between", flexDirection: "row", alignItems: "center" }, horiz: { marginRight: nativeDefault.space.PX_8, alignItems: "center", flexDirection: "row", flex: 1 }, text: { flex: 1 } };
  ({ paddingTop: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_PADDING_TOP, paddingBottom: 4, paddingHorizontal: 16, alignSelf: "stretch", backgroundColor: "transparent", paddingRight: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingLeft: 2 * arg0 });
  ({ marginRight: nativeDefault.space.PX_8, alignItems: "center", flexDirection: "row", flex: 1 });
  return obj;
});
let closure_17 = { code: "function TypingIndicatorTsx1(){const{typingIndicatorLayout}=this.__closure;return typingIndicatorLayout.get();}" };
let closure_18 = { code: "function TypingIndicatorTsx2(current,prev){const{translateYValue,withSpring,springStandard}=this.__closure;if(current===prev){return;}if(current==null){return;}if(current.y.toFixed(2)!==current.height.toFixed(2)){return;}translateYValue.set(withSpring(-current.height,springStandard,\"respect-motion-settings\"));}" };
let closure_19 = { code: "function TypingIndicatorTsx3(){const{typingIndicatorLayout,translateYValue,transitionState,TransitionStates}=this.__closure;const layout=typingIndicatorLayout.get();return{opacity:translateYValue.get()===0||transitionState===TransitionStates.YEETED?0:1,top:layout===null||layout===void 0?void 0:layout.height,transform:[{translateY:translateYValue.get()}]};}" };
const __initData = { code: "function TypingIndicatorTsx4(){const{typingIndicatorLayout}=this.__closure;return typingIndicatorLayout.get();}" };
const __initData2 = { code: "function TypingIndicatorTsx5(current,prev){const{translateYValue,withSpring,springStandard}=this.__closure;if(current===prev)return;if(current==null)return;if(current.y.toFixed(2)!==current.height.toFixed(2))return;translateYValue.set(withSpring(-current.height,springStandard,'respect-motion-settings'));}" };
const __initData3 = { code: "function TypingIndicatorTsx6(){const{typingIndicatorLayout,translateYValue,transitionState,TransitionStates}=this.__closure;const layout=typingIndicatorLayout.get();return{opacity:translateYValue.get()===0||transitionState===TransitionStates.YEETED?0:1,top:layout===null||layout===void 0?void 0:layout.height,transform:[{translateY:translateYValue.get()}]};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function TypingIndicatorInner(channel) {
  let cleanUp;
  let closure_7;
  let tmp5;
  let tmp6;
  let tmp9;
  let transitionState;
  let typingUserIds;
  let tmp = channel;
  let obj = channel(cleanUp[11]);
  const cResult = obj.c(58);
  channel = channel.channel;
  ({ typingUserIds, transitionState } = channel);
  cleanUp = channel.cleanUp;
  let obj2 = channel(cleanUp[16]);
  let customTypingIndicatorConfig = obj2.useCustomTypingIndicatorConfig("TypingIndicatorInner");
  const canView = customTypingIndicatorConfig.canView;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp7 = DevSettingsStore;
    let items = [DevSettingsStore];
    class S {
      constructor() {
        return closure_6.get("preview_own_typing_indicator");
      }
    }
    let num = 0;
    cResult[0] = items;
    cResult[1] = S;
    tmp5 = items;
    tmp6 = S;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(cleanUp[13]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const id = channel.id;
  if (cResult[2] !== channel) {
    let guildId = channel.getGuildId();
    cResult[2] = channel;
    class S {
      constructor() {
        return closure_6.get("preview_own_typing_indicator");
      }
    }
    cResult[3] = guildId;
    tmp9 = guildId;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === channel.id) {
    if (cResult[5] === tmp9) {
      let tmp11;
      let tmp15;
      if (cResult[6] === typingUserIds) {
        tmp11 = cResult[7];
      }
      transitionState(cleanUp[17])(tmp11);
      class S {
        constructor() {
          return closure_6.get("preview_own_typing_indicator");
        }
      }
      style_owner_user_id = null;
      if (1 === typingUserIds.length) {
        style_owner_user_id = typingUserIds[0];
      }
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [TypingStore, , ];
        class S {
          constructor() {
            return closure_6.get("preview_own_typing_indicator");
          }
        }
        items1[1] = UserStore;
        items1[2] = RawGuildEmojiStore;
        cResult[8] = items1;
        tmp15 = items1;
      } else {
        tmp15 = cResult[8];
      }
      if (cResult[9] === channel) {
        if (cResult[10] === canView) {
          if (cResult[11] === stateFromStores) {
            let tmp18;
            let tmp19;
            if (cResult[12] === style_owner_user_id) {
              tmp18 = cResult[13];
              tmp19 = cResult[14];
            }
            const tmpResult5 = tmp(cleanUp[13]);
            const stateFromStoresObject = tmpResult5.useStateFromStoresObject(tmp15, tmp18, tmp19);
            class S {
              constructor() {
                return closure_6.get("preview_own_typing_indicator");
              }
            }
            RawGuildEmojiStore = tmp21;
            if (cResult[15] === channel.id) {
              if (cResult[16] === channel.type) {
                let tmp22;
                let tmp23;
                if (cResult[17] === null != stateFromStoresObject.config) {
                  tmp22 = cResult[18];
                  tmp23 = cResult[19];
                }
                const effect = canView.useEffect(tmp23, tmp22);
                class S {
                  constructor() {
                    return closure_6.get("preview_own_typing_indicator");
                  }
                }
                const analyticsLocations = tmp26(tmp12(tmp2[22]).CHAT_TYPING_INDICATOR).analyticsLocations;
                if (cResult[20] === analyticsLocations) {
                  if (cResult[21] === channel.id) {
                    if (cResult[22] === channel.type) {
                      if (cResult[23] === style_owner_user_id) {
                        const tmpResult6 = tmp(cleanUp[25]);
                        const sharedValue = tmpResult6.useSharedValue(undefined);
                        class S {
                          constructor() {
                            return closure_6.get("preview_own_typing_indicator");
                          }
                        }
                        if (cResult[26] !== sharedValue) {
                          class B {
                            constructor(arg0) {
                              result = closure_9.set(channel.nativeEvent.layout);
                              return;
                            }
                          }
                          cResult[26] = sharedValue;
                          class S {
                            constructor() {
                              return closure_6.get("preview_own_typing_indicator");
                            }
                          }
                          cResult[27] = B;
                        } else {
                          class B {
                            constructor(arg0) {
                              result = closure_9.set(channel.nativeEvent.layout);
                              return;
                            }
                          }
                        }
                        const useToken = tmp(tmp2[26]).useToken;
                        tmp(cleanUp[26]);
                        class Z {
                          constructor() {
                            config = closure_6.config;
                            tmp = null != config;
                            if (tmp) {
                              tmp2 = closure_5;
                              tmp = null != closure_5;
                            }
                            if (tmp) {
                              tmp3 = closure_1;
                              tmp4 = closure_2;
                              tmp5 = closure_1(closure_2[20]);
                              tmp6 = AnalyticEvents;
                              obj = { channel_id: null, channel_type: null, style_owner_user_id: null };
                              tmp7 = channel;
                              ({ id: obj.channel_id, type: obj.channel_type } = channel);
                              tmp8 = closure_5;
                              obj.style_owner_user_id = closure_5;
                              tmp9 = closure_0;
                              tmp10 = closure_2;
                              track = tmp5.track;
                              TYPING_INDICATOR_STYLE_CLICKED = AnalyticEvents.TYPING_INDICATOR_STYLE_CLICKED;
                              obj2 = closure_0(closure_2[23]);
                              tmp11 = obj;
                              merged = Object.assign(obj2.getTypingIndicatorStyleAnalytics(config));
                              trackResult = track(TYPING_INDICATOR_STYLE_CLICKED, obj);
                            }
                            obj3 = closure_0(closure_2[24]);
                            result = obj3.openCustomTypingIndicatorAnnounceActionSheet(analyticsLocations);
                            return;
                          }
                        }
                        closure_16(useToken(transitionState(cleanUp[15]).modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING));
                        const tmpResult8 = tmp(cleanUp[25]);
                        const sharedValue1 = tmpResult8.useSharedValue(0);
                        class O {
                          constructor() {
                            tmp = closure_5;
                            if (null != closure_5) {
                              tmp18 = canView;
                              if (tmp18) {
                                tmp2 = closure_10;
                                user = closure_10.getUser(tmp);
                                tmp4 = closure_4;
                                if (tmp4) {
                                  typingIndicatorStyle = undefined;
                                  if (user != null) {
                                    typingIndicatorStyle = user.typingIndicatorStyle;
                                  }
                                  if (typingIndicatorStyle == null) {
                                    typingIndicatorStyle = null;
                                  }
                                  customTypingIndicatorConfig = typingIndicatorStyle;
                                } else {
                                  tmp5 = closure_9;
                                  customTypingIndicatorConfig = closure_9.getCustomTypingIndicatorConfig(tmp);
                                }
                                if (null != customTypingIndicatorConfig) {
                                  if (null != user) {
                                    tmp19 = channel;
                                    guildId = channel.getGuildId();
                                    guildEmojis = null;
                                    if (null != guildId) {
                                      tmp8 = closure_7;
                                      guildEmojis = closure_7.getGuildEmojis(guildId);
                                    }
                                    obj = { config: null, name: null };
                                    tmp10 = closure_0;
                                    tmp11 = closure_2;
                                    obj2 = closure_0(closure_2[18]);
                                    tmp12 = obj2;
                                    tmp13 = customTypingIndicatorConfig;
                                    tmp14 = tmp19;
                                    tmp15 = tmp;
                                    tmp16 = guildEmojis;
                                    obj.config = obj2.getViewableCustomTypingIndicatorConfig(customTypingIndicatorConfig, tmp19, tmp, guildEmojis);
                                    tmp17 = closure_1;
                                    obj3 = closure_1(closure_2[19]);
                                    obj.name = obj3.getName(guildId, tmp19.id, user);
                                    return obj;
                                  }
                                }
                                return { config: null, name: null };
                              }
                            }
                            return { config: null, name: null };
                          }
                        }
                        if (cResult[28] === cleanUp) {
                          class B {
                            constructor(arg0) {
                              result = closure_9.set(channel.nativeEvent.layout);
                              return;
                            }
                          }
                        }
                        class J {
                          constructor() {
                            if (transitionState === closure_0(closure_2[27]).TransitionStates.YEETED) {
                              tmp = closure_10;
                              num = 0;
                              result = closure_10.set(0);
                              tmp3 = cleanUp;
                              tmp4 = cleanUp();
                            }
                            return;
                          }
                        }
                        const items2 = [cleanUp, transitionState, sharedValue1];
                        cResult[28] = cleanUp;
                        cResult[29] = transitionState;
                        cResult[30] = sharedValue1;
                        cResult[31] = J;
                        cResult[32] = items2;
                      }
                    }
                  }
                }
                class Z {
                  constructor() {
                    config = closure_6.config;
                    tmp = null != config;
                    if (tmp) {
                      tmp2 = closure_5;
                      tmp = null != closure_5;
                    }
                    if (tmp) {
                      tmp3 = closure_1;
                      tmp4 = closure_2;
                      tmp5 = closure_1(closure_2[20]);
                      tmp6 = AnalyticEvents;
                      obj = { channel_id: null, channel_type: null, style_owner_user_id: null };
                      tmp7 = channel;
                      ({ id: obj.channel_id, type: obj.channel_type } = channel);
                      tmp8 = closure_5;
                      obj.style_owner_user_id = closure_5;
                      tmp9 = closure_0;
                      tmp10 = closure_2;
                      track = tmp5.track;
                      TYPING_INDICATOR_STYLE_CLICKED = AnalyticEvents.TYPING_INDICATOR_STYLE_CLICKED;
                      obj2 = closure_0(closure_2[23]);
                      tmp11 = obj;
                      merged = Object.assign(obj2.getTypingIndicatorStyleAnalytics(config));
                      trackResult = track(TYPING_INDICATOR_STYLE_CLICKED, obj);
                    }
                    obj3 = closure_0(closure_2[24]);
                    result = obj3.openCustomTypingIndicatorAnnounceActionSheet(analyticsLocations);
                    return;
                  }
                }
                cResult[20] = analyticsLocations;
                cResult[21] = channel.id;
                class O {
                  constructor() {
                    tmp = closure_5;
                    if (null != closure_5) {
                      tmp18 = canView;
                      if (tmp18) {
                        tmp2 = closure_10;
                        user = closure_10.getUser(tmp);
                        tmp4 = closure_4;
                        if (tmp4) {
                          typingIndicatorStyle = undefined;
                          if (user != null) {
                            typingIndicatorStyle = user.typingIndicatorStyle;
                          }
                          if (typingIndicatorStyle == null) {
                            typingIndicatorStyle = null;
                          }
                          customTypingIndicatorConfig = typingIndicatorStyle;
                        } else {
                          tmp5 = closure_9;
                          customTypingIndicatorConfig = closure_9.getCustomTypingIndicatorConfig(tmp);
                        }
                        if (null != customTypingIndicatorConfig) {
                          if (null != user) {
                            tmp19 = channel;
                            guildId = channel.getGuildId();
                            guildEmojis = null;
                            if (null != guildId) {
                              tmp8 = closure_7;
                              guildEmojis = closure_7.getGuildEmojis(guildId);
                            }
                            obj = { config: null, name: null };
                            tmp10 = closure_0;
                            tmp11 = closure_2;
                            obj2 = closure_0(closure_2[18]);
                            tmp12 = obj2;
                            tmp13 = customTypingIndicatorConfig;
                            tmp14 = tmp19;
                            tmp15 = tmp;
                            tmp16 = guildEmojis;
                            obj.config = obj2.getViewableCustomTypingIndicatorConfig(customTypingIndicatorConfig, tmp19, tmp, guildEmojis);
                            tmp17 = closure_1;
                            obj3 = closure_1(closure_2[19]);
                            obj.name = obj3.getName(guildId, tmp19.id, user);
                            return obj;
                          }
                        }
                        return { config: null, name: null };
                      }
                    }
                    return { config: null, name: null };
                  }
                }
                cResult[22] = channel.type;
                cResult[23] = style_owner_user_id;
                cResult[24] = stateFromStoresObject;
                cResult[25] = Z;
              }
            }
            class M {
              constructor() {
                tmp = closure_7;
                if (tmp) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[20]);
                  tmp4 = AnalyticEvents;
                  obj1 = { channel_id: null, channel_type: null };
                  tmp5 = channel;
                  ({ id: obj2.channel_id, type: obj2.channel_type } = channel);
                  trackResult = obj.track(AnalyticEvents.TYPING_INDICATOR_STYLE_SEEN, obj1);
                }
                return;
              }
            }
            const items3 = [null != stateFromStoresObject.config, , ];
            ({ id: arr4[1], type: arr4[2] } = channel);
            class O {
              constructor() {
                tmp = closure_5;
                if (null != closure_5) {
                  tmp18 = canView;
                  if (tmp18) {
                    tmp2 = closure_10;
                    user = closure_10.getUser(tmp);
                    tmp4 = closure_4;
                    if (tmp4) {
                      typingIndicatorStyle = undefined;
                      if (user != null) {
                        typingIndicatorStyle = user.typingIndicatorStyle;
                      }
                      if (typingIndicatorStyle == null) {
                        typingIndicatorStyle = null;
                      }
                      customTypingIndicatorConfig = typingIndicatorStyle;
                    } else {
                      tmp5 = closure_9;
                      customTypingIndicatorConfig = closure_9.getCustomTypingIndicatorConfig(tmp);
                    }
                    if (null != customTypingIndicatorConfig) {
                      if (null != user) {
                        tmp19 = channel;
                        guildId = channel.getGuildId();
                        guildEmojis = null;
                        if (null != guildId) {
                          tmp8 = closure_7;
                          guildEmojis = closure_7.getGuildEmojis(guildId);
                        }
                        obj = { config: null, name: null };
                        tmp10 = closure_0;
                        tmp11 = closure_2;
                        obj2 = closure_0(closure_2[18]);
                        tmp12 = obj2;
                        tmp13 = customTypingIndicatorConfig;
                        tmp14 = tmp19;
                        tmp15 = tmp;
                        tmp16 = guildEmojis;
                        obj.config = obj2.getViewableCustomTypingIndicatorConfig(customTypingIndicatorConfig, tmp19, tmp, guildEmojis);
                        tmp17 = closure_1;
                        obj3 = closure_1(closure_2[19]);
                        obj.name = obj3.getName(guildId, tmp19.id, user);
                        return obj;
                      }
                    }
                    return { config: null, name: null };
                  }
                }
                return { config: null, name: null };
              }
            }
            ({ id: tmp3[15], type: tmp3[16] } = channel);
            cResult[17] = null != stateFromStoresObject.config;
            cResult[18] = items3;
            cResult[19] = M;
            tmp23 = M;
            tmp22 = items3;
          }
        }
      }
      class O {
        constructor() {
          tmp = closure_5;
          if (null != closure_5) {
            tmp18 = canView;
            if (tmp18) {
              tmp2 = closure_10;
              user = closure_10.getUser(tmp);
              tmp4 = closure_4;
              if (tmp4) {
                typingIndicatorStyle = undefined;
                if (user != null) {
                  typingIndicatorStyle = user.typingIndicatorStyle;
                }
                if (typingIndicatorStyle == null) {
                  typingIndicatorStyle = null;
                }
                customTypingIndicatorConfig = typingIndicatorStyle;
              } else {
                tmp5 = closure_9;
                customTypingIndicatorConfig = closure_9.getCustomTypingIndicatorConfig(tmp);
              }
              if (null != customTypingIndicatorConfig) {
                if (null != user) {
                  tmp19 = channel;
                  guildId = channel.getGuildId();
                  guildEmojis = null;
                  if (null != guildId) {
                    tmp8 = closure_7;
                    guildEmojis = closure_7.getGuildEmojis(guildId);
                  }
                  obj = { config: null, name: null };
                  tmp10 = closure_0;
                  tmp11 = closure_2;
                  obj2 = closure_0(closure_2[18]);
                  tmp12 = obj2;
                  tmp13 = customTypingIndicatorConfig;
                  tmp14 = tmp19;
                  tmp15 = tmp;
                  tmp16 = guildEmojis;
                  obj.config = obj2.getViewableCustomTypingIndicatorConfig(customTypingIndicatorConfig, tmp19, tmp, guildEmojis);
                  tmp17 = closure_1;
                  obj3 = closure_1(closure_2[19]);
                  obj.name = obj3.getName(guildId, tmp19.id, user);
                  return obj;
                }
              }
              return { config: null, name: null };
            }
          }
          return { config: null, name: null };
        }
      }
      const items4 = [, canView, stateFromStores, channel];
      cResult[9] = channel;
      cResult[10] = canView;
      cResult[11] = stateFromStores;
      cResult[12] = style_owner_user_id;
      cResult[13] = O;
      cResult[14] = items4;
      tmp19 = items4;
      tmp18 = O;
    }
  }
  let obj3 = { channelId: id, guildId: tmp9, typingUserIds };
  cResult[4] = channel.id;
  cResult[5] = tmp9;
  cResult[6] = typingUserIds;
  cResult[7] = obj3;
  tmp11 = obj3;
}) : (function TypingIndicatorInner(channel) {
  let items7;
  let items8;
  let items9;
  let obj7;
  let tmp22Result;
  let tmp28;
  let transitionState;
  let typingUserIds;
  channel = channel.channel;
  ({ typingUserIds, transitionState } = channel);
  const cleanUp = channel.cleanUp;
  let stateFromStoresObject;
  let closure_7;
  let analyticsLocations;
  let sharedValue;
  let sharedValue1;
  let tmp = channel;
  let obj = channel(cleanUp[16]);
  let customTypingIndicatorConfig = obj.useCustomTypingIndicatorConfig("TypingIndicatorInner");
  const canView = customTypingIndicatorConfig.canView;
  const canSet = customTypingIndicatorConfig.canSet;
  let obj2 = channel(cleanUp[13]);
  let items = [stateFromStoresObject];
  const stateFromStores = obj2.useStateFromStores(items, () => stateFromStoresObject.get("preview_own_typing_indicator"));
  const tmp5 = transitionState;
  let obj3 = { channelId: channel.id, guildId: channel.getGuildId(), typingUserIds };
  const tmp6 = transitionState(cleanUp[17]);
  const tmp6Result = tmp6(obj3);
  style_owner_user_id = null;
  if (1 === typingUserIds.length) {
    style_owner_user_id = typingUserIds[0];
  }
  const items1 = [sharedValue, sharedValue1, closure_7];
  const items2 = [style_owner_user_id, canView, stateFromStores, channel];
  const tmpResult = tmp(cleanUp[13]);
  stateFromStoresObject = tmpResult.useStateFromStoresObject(items1, () => {
    let obj2;
    let obj3;
    if (null != first) {
      const tmp18 = canView;
      if (tmp18) {
        let customTypingIndicatorConfig;
        const user = UserStore.getUser(tmp);
        const tmp4 = stateFromStores;
        if (tmp4) {
          let typingIndicatorStyle;
          if (user != null) {
            typingIndicatorStyle = user.typingIndicatorStyle;
          }
          if (typingIndicatorStyle == null) {
            typingIndicatorStyle = null;
          }
          customTypingIndicatorConfig = typingIndicatorStyle;
        } else {
          customTypingIndicatorConfig = TypingStore.getCustomTypingIndicatorConfig(tmp);
        }
        if (null != customTypingIndicatorConfig) {
          if (null != user) {
            const guildId = channel.getGuildId();
            let guildEmojis = null;
            if (null != guildId) {
              guildEmojis = RawGuildEmojiStore.getGuildEmojis(guildId);
            }
            const obj = { config: obj2.getViewableCustomTypingIndicatorConfig(customTypingIndicatorConfig, channel, first, guildEmojis), name: obj3.getName(guildId, channel.id, user) };
            obj2 = CustomTypingIndicatorUtils;
            obj3 = NicknameUtilsDefault;
            return obj;
          }
        }
        return { config: null, name: null };
      }
    }
    return { config: null, name: null };
  }, items2);
  closure_7 = tmp10;
  const items3 = [tmp10, , ];
  ({ id: arr4[1], type: arr4[2] } = channel);
  const effect = canView.useEffect(() => {
    const tmp = closure_7;
    if (tmp) {
      const obj3 = { channel_id: null, channel_type: null };
      ({ id: obj2.channel_id, type: obj2.channel_type } = channel);
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.TYPING_INDICATOR_STYLE_SEEN, obj3);
    }
  }, items3);
  const tmp5Result = tmp5(cleanUp[21]);
  analyticsLocations = tmp5Result(tmp5(tmp2[22]).CHAT_TYPING_INDICATOR).analyticsLocations;
  const items4 = [stateFromStoresObject, style_owner_user_id, , , ];
  ({ id: arr5[2], type: arr5[3] } = channel);
  items4[4] = analyticsLocations;
  const callback = canView.useCallback(() => {
    const config = stateFromStoresObject.config;
    const tmp = null != config && null != style_owner_user_id;
    if (tmp) {
      const obj = { channel_id: null, channel_type: null, style_owner_user_id };
      ({ id: obj.channel_id, type: obj.channel_type } = channel);
      const track = AnalyticsUtilsDefault.track;
      const TYPING_INDICATOR_STYLE_CLICKED = AnalyticEvents.TYPING_INDICATOR_STYLE_CLICKED;
      AnalyticsUtilsDefault;
      const obj2 = CustomTypingIndicatorAnalytics;
      const merged = Object.assign(obj2.getTypingIndicatorStyleAnalytics(config));
      track(TYPING_INDICATOR_STYLE_CLICKED, obj);
    }
    const obj3 = openCustomTypingIndicatorAnnounceActionSheet;
    const result = obj3.openCustomTypingIndicatorAnnounceActionSheet(analyticsLocations);
  }, items4);
  const tmpResult6 = tmp(cleanUp[25]);
  sharedValue = tmpResult6.useSharedValue(undefined);
  const items5 = [sharedValue];
  const callback1 = canView.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout);
  }, items5);
  const tmpResult7 = tmp(cleanUp[26]);
  const tmp16 = closure_16(tmpResult7.useToken(tmp5(cleanUp[15]).modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING));
  const tmpResult8 = tmp(cleanUp[25]);
  sharedValue1 = tmpResult8.useSharedValue(0);
  const items6 = [cleanUp, transitionState, sharedValue1];
  const effect1 = canView.useEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
      const result = sharedValue1.set(0);
      cleanUp();
    }
  }, items6);
  const fn = function b() {
    return sharedValue.get();
  };
  fn.__closure = { typingIndicatorLayout: sharedValue };
  fn.__workletHash = 13600672167329;
  fn.__initData = __initData;
  const tmpResult9 = tmp(cleanUp[25]);
  class V {
    constructor(arg0, arg1) {
      let tmp = arg0 !== arg1 && null != arg0;
      if (tmp) {
        const y = arg0.y;
        const height = arg0.height;
        const toFixedResult = y.toFixed(2);
        tmp = toFixedResult === height.toFixed(2);
      }
      if (tmp) {
        set = sharedValue1.set;
        const obj = spring;
        const tmp7 = -arg0.height;
        const result = set(obj.withSpring(tmp7, springPresets.springStandard, "respect-motion-settings"));
      }
    }
  }
  V.__closure = { translateYValue: sharedValue1, withSpring: tmp(cleanUp[28]).withSpring, springStandard: tmp(cleanUp[29]).springStandard };
  V.__workletHash = 16463416523660;
  V.__initData = __initData2;
  ({ translateYValue: sharedValue1, withSpring: tmp(cleanUp[28]).withSpring, springStandard: tmp(cleanUp[29]).springStandard });
  const animatedReaction = tmpResult9.useAnimatedReaction(fn, V);
  const tmpResult10 = tmp(cleanUp[25]);
  class M {
    constructor() {
      let height;
      let items;
      let num;
      const value = sharedValue.get();
      if (0 === sharedValue1.get()) {
        num = 0;
      } else {
        num = 1;
      }
      const obj2 = { opacity: num, top: height, transform: items };
      height = undefined;
      if (value != null) {
        height = value.height;
      }
      items = [{ translateY: obj.get() }];
      ({ translateY: sharedValue1.get() });
      return obj2;
    }
  }
  M.__closure = { typingIndicatorLayout: sharedValue, translateYValue: sharedValue1, transitionState, TransitionStates: tmp(cleanUp[27]).TransitionStates };
  M.__workletHash = 12928775581926;
  M.__initData = __initData3;
  ({ typingIndicatorLayout: sharedValue, translateYValue: sharedValue1, transitionState, TransitionStates: tmp(cleanUp[27]).TransitionStates });
  const animatedStyle = tmpResult10.useAnimatedStyle(M);
  const obj6 = { style: items7, onLayout: callback1, children: closure_14(stateFromStores, obj7) };
  items7 = [tmp16.typingWrapper, animatedStyle];
  obj7 = { style: tmp16.wrapperHoriz, children: items9 };
  const obj8 = { style: tmp16.horiz, children: tmp22Result };
  View = tmp5(tmp2[25]).View;
  if (null != stateFromStoresObject.config) {
    const obj9 = { config: null, username: null, onPress: tmp28 };
    ({ config: obj17.config, name: obj17.username } = stateFromStoresObject);
    tmp28 = undefined;
    const tmp5Result2 = tmp5(cleanUp[30]);
    if (canSet) {
      tmp28 = callback;
    }
    tmp22Result = tmp21(tmp5Result2, obj9);
  } else {
    let tmp21Result3 = null;
    const tmp24 = closure_13;
    if (null != tmp6Result) {
      tmp21Result3 = tmp21(tmp(tmp2[31]).Ellipsis, {});
    }
    const obj10 = { children: items8 };
    items8 = [tmp21Result3, ];
    const obj11 = { style: tmp16.text, lineClamp: 1, maxFontSizeMultiplier: 2, variant: "text-xs/medium", color: "interactive-text-default", includeFontPadding: true, ellipsizeMode: "tail", children: tmp6Result };
    items8[1] = closure_12(tmp(cleanUp[32]).Text, obj11);
    tmp22Result = tmp22(tmp24, obj10);
  }
  items9 = [closure_12(stateFromStores, obj8), ];
  let tmp21Result4 = null;
  if (channel.rateLimitPerUser > 0) {
    const obj12 = { channel, hasTypingText: null != tmp6Result, slowmodeType: analyticsLocations.SendMessage };
    tmp21Result4 = tmp21(tmp5(tmp2[33]), obj12);
  }
  items9[1] = tmp21Result4;
  return closure_12(View, obj6);
});
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
function hasTypingIndicatorContent(channel, typingUserIdsForDisplay, arg2) {
  return (channel.rateLimitPerUser > 0 || typingUserIdsForDisplay.length > 0) && !arg2;
}
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function TypingIndicator(channel) {
  const obj = react2;
  const cResult = obj.c(6);
  channel = channel.channel;
  const tmp4 = style_owner_user_id(channel.screenIndex);
  const arr = closure_15(channel.id, 4);
  if (cResult[0] === channel) {
    if (cResult[1] === tmp4) {
      let tmp5;
      let tmp8;
      if (cResult[2] === arr) {
        tmp5 = cResult[3];
      }
      if (cResult[4] !== tmp5) {
        const obj2 = { item: tmp5, renderItem: renderTypingIndicator };
        const tmp11 = authStore2(native.TransitionItem, obj2);
        cResult[4] = tmp5;
        cResult[5] = tmp11;
        tmp8 = tmp11;
      } else {
        tmp8 = cResult[5];
      }
      return tmp8;
    }
  }
  let tmp7;
  const tmp6 = (channel.rateLimitPerUser > 0 || arr.length > 0) && !tmp4;
  if (tmp6) {
    tmp7 = { channel, typingUserIds: arr };
    const obj3 = { channel, typingUserIds: arr };
  }
  cResult[0] = channel;
  cResult[1] = tmp4;
  cResult[2] = arr;
  cResult[3] = tmp7;
  tmp5 = tmp7;
}) : (function TypingIndicator(channel) {
  channel = channel.channel;
  let tmp = style_owner_user_id(channel.screenIndex);
  let closure_1 = tmp;
  let tmp2 = closure_15(channel.id, 4);
  let closure_2 = tmp2;
  const items = [channel, tmp2, tmp];
  const memo = react.useMemo(() => {
    let tmp3 = channel.rateLimitPerUser > 0;
    const tmp = channel;
    const tmp2 = closure_1;
    if (!tmp3) {
      tmp3 = arr.length > 0;
    }
    if (tmp3) {
      tmp3 = !tmp2;
    }
    let tmp4;
    if (tmp3) {
      tmp4 = { channel: tmp, typingUserIds };
      const obj = { channel: tmp, typingUserIds };
    }
    return tmp4;
  }, items);
  let obj = { item: memo, renderItem: renderTypingIndicator };
  return authStore2(native.TransitionItem, obj);
}));
let result = size.fileFinishedImporting("modules/chat/native/TypingIndicator.tsx");

export default memoResult;
export { hasTypingIndicatorContent };
export const useTypingUserIdsForDisplay = tmp4;
