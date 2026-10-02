// Module ID: 16429
// Function ID: 16430
// Name: VibegrationsAppChannelView
// Dependencies: [32, 19, 17, 8496, 12829, 8497, 21, 4837, 588, 558, 576, 1885, 5371, 8498, 16279, 8746, 8755, 16280, 12833, 6880, 16281, 16430, 4833, 1127, 3718, 5282, 2]

// Module 16429 (VibegrationsAppChannelView)
import nativeDefault from "native" /* 588 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6880 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8498 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 8746 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 8755 */;
import VibegrationsAppChannelActionCreators from "VibegrationsAppChannelActionCreators" /* 12833 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import FramesStore_mod from "FramesStore" /* 8496 */;
import VibegrationsAppChannelsStore from "VibegrationsAppChannelsStore" /* 12829 */;
import FramesConstants from "FramesConstants" /* 8497 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let catchPromise, channel, importDefault, jumpToMessageResult, leaveFrameResult, obj1, surface, tmp2, tmp4, tmp7, tmp8, user;

let c10;
let c9;
let closure_12;
let hasOwnProperty;
let metroRequire;
let unpackModuleId;
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
let FramesStore = FramesStore_mod;
({ FrameLayoutModes: c9, isLaunched: c10 } = FramesConstants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles((paddingBottom) => {
  let obj2;
  const obj = { container: obj2, centered: { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_12 }, copy: { alignItems: "center", gap: nativeDefault.space.PX_4 } };
  obj2 = { flex: 1, paddingBottom };
  ({ flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_12 });
  ({ alignItems: "center", gap: nativeDefault.space.PX_4 });
  return obj;
});
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let closure_1;
  let closure_3;
  let closure_7;
  let first;
  let tmp6;
  let tmp = channel;
  let obj = channel(first[10]);
  const cResult = obj.c(46);
  channel = channel.channel;
  closure_13(require("useSystemKeyboardHeight")());
  if (cResult[0] !== channel.topic) {
    const tmpResult = tmp(first[12]);
    let result = tmpResult.vibegrationsAppIdFromTopic(channel.topic);
    cResult[0] = channel.topic;
    cResult[1] = result;
    tmp6 = result;
  } else {
    tmp6 = cResult[1];
  }
  importDefault = tmp6;
  const guild_id = channel.guild_id;
  let obj3 = surface;
  [first, _slicedToArray] = surface.useState(false);
  if (cResult[2] === channel.id) {
    let tmp10;
    let tmp13;
    if (cResult[3] === guild_id) {
      tmp10 = cResult[4];
    }
    surface = tmp10;
    const tmp11 = require("useFrameBySurface")(tmp6, tmp10);
    user = tmp11;
    if (cResult[5] !== tmp11) {
      let tmp14 = null;
      if (null != tmp11) {
        tmp14 = null;
        if (closure_10(tmp11)) {
          tmp14 = tmp11;
        }
      }
      cResult[5] = tmp11;
      cResult[6] = tmp14;
      tmp13 = tmp14;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] === tmp6) {
      if (cResult[8] === first) {
        if (cResult[9] === tmp11) {
          let tmp16;
          let tmp17;
          if (cResult[10] === tmp10) {
            tmp16 = cResult[11];
            tmp17 = cResult[12];
          }
          const effect = obj3.useEffect(tmp16, tmp17);
          let closure_6 = obj3.useRef(null);
          FramesStore = obj3.useRef(channel.id);
          if (cResult[13] === channel.id) {
            let tmp21;
            let id1;
            const tmp19 = cResult[14];
            if (tmp11 != null) {
              id1 = tmp11.id;
            }
            if (tmp19 === id1) {
              tmp21 = cResult[15];
            }
            if (cResult[16] === channel.id) {
              let tmp23;
              if (cResult[17] === tmp11) {
                tmp23 = cResult[18];
              }
              const effect1 = obj3.useEffect(tmp21, tmp23);
              const _Symbol = Symbol;
              if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                class B {
                  constructor() {
                    return () => { /* body not rendered: F144801 */ };
                  }
                }
                const items = [];
                cResult[19] = B;
                cResult[20] = items;
                class L {
                  constructor() {
                    if (null != closure_1) {
                      tmp10 = closure_2;
                      if (!tmp10) {
                        tmp2 = closure_5;
                        if (null == closure_5) {
                          tmp11 = closure_7;
                          mainFrame = closure_7.getMainFrame();
                          if (null != mainFrame) {
                            tmp3 = closure_1;
                            tmp4 = closure_2;
                            obj = closure_1(closure_2[15]);
                            leaveFrameResult = obj.leaveFrame(mainFrame.id);
                          }
                          tmp6 = closure_1;
                          tmp7 = closure_2;
                          obj2 = closure_1(closure_2[16]);
                          obj1 = { applicationId: null, surface: null };
                          obj1.applicationId = tmp;
                          tmp8 = closure_4;
                          obj1.surface = closure_4;
                          launchFrameResult = obj2.launchFrame(obj1);
                          catchPromise = launchFrameResult.catch(() => { /* body not rendered: F144800 */ });
                        }
                      }
                    }
                    return;
                  }
                }
              } else {
                class B {
                  constructor() {
                    return () => { /* body not rendered: F144801 */ };
                  }
                }
              }
              class L {
                constructor() {
                  if (null != closure_1) {
                    tmp10 = closure_2;
                    if (!tmp10) {
                      tmp2 = closure_5;
                      if (null == closure_5) {
                        tmp11 = closure_7;
                        mainFrame = closure_7.getMainFrame();
                        if (null != mainFrame) {
                          tmp3 = closure_1;
                          tmp4 = closure_2;
                          obj = closure_1(closure_2[15]);
                          leaveFrameResult = obj.leaveFrame(mainFrame.id);
                        }
                        tmp6 = closure_1;
                        tmp7 = closure_2;
                        obj2 = closure_1(closure_2[16]);
                        obj1 = { applicationId: null, surface: null };
                        obj1.applicationId = tmp;
                        tmp8 = closure_4;
                        obj1.surface = closure_4;
                        launchFrameResult = obj2.launchFrame(obj1);
                        catchPromise = launchFrameResult.catch(() => { /* body not rendered: F144800 */ });
                      }
                    }
                  }
                  return;
                }
              }
              require("useVibegrationsDisallowSwipeExit")(null != tmp13);
              class N {
                constructor() {
                  id = undefined;
                  tmp = closure_6;
                  if (closure_5 != null) {
                    id = closure_5.id;
                  }
                  if (id == null) {
                    id = null;
                  }
                  tmp.current = id;
                  closure_7.current = channel.id;
                  return;
                }
              }
              if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                class B {
                  constructor() {
                    return () => { /* body not rendered: F144801 */ };
                  }
                }
                cResult[21] = tmp29;
              } else {
                class B {
                  constructor() {
                    return () => { /* body not rendered: F144801 */ };
                  }
                }
              }
              let id = channel.id;
              if (cResult[22] !== id) {
                class Q {
                  constructor(arg0) {
                    obj = closure_0(closure_2[18]);
                    result = obj.setAppChannelChatOpen(id, true);
                    obj2 = closure_1(closure_2[19]);
                    obj1 = { channelId: channel.channel_id, messageId: channel.id, flash: true };
                    jumpToMessageResult = obj2.jumpToMessage(obj1);
                    return;
                  }
                }
                cResult[22] = id;
                cResult[23] = Q;
              } else {
                class Q {
                  constructor(arg0) {
                    obj = closure_0(closure_2[18]);
                    result = obj.setAppChannelChatOpen(id, true);
                    obj2 = closure_1(closure_2[19]);
                    obj1 = { channelId: channel.channel_id, messageId: channel.id, flash: true };
                    jumpToMessageResult = obj2.jumpToMessage(obj1);
                    return;
                  }
                }
              }
              let tmp31 = null;
              if (null != tmp6) {
                class Q {
                  constructor(arg0) {
                    obj = closure_0(closure_2[18]);
                    result = obj.setAppChannelChatOpen(id, true);
                    obj2 = closure_1(closure_2[19]);
                    obj1 = { channelId: channel.channel_id, messageId: channel.id, flash: true };
                    jumpToMessageResult = obj2.jumpToMessage(obj1);
                    return;
                  }
                }
                tmp31 = tmp32;
              }
              return tmp31;
            }
            const items1 = [tmp11, ];
            class L {
              constructor() {
                if (null != closure_1) {
                  tmp10 = closure_2;
                  if (!tmp10) {
                    tmp2 = closure_5;
                    if (null == closure_5) {
                      tmp11 = closure_7;
                      mainFrame = closure_7.getMainFrame();
                      if (null != mainFrame) {
                        tmp3 = closure_1;
                        tmp4 = closure_2;
                        obj = closure_1(closure_2[15]);
                        leaveFrameResult = obj.leaveFrame(mainFrame.id);
                      }
                      tmp6 = closure_1;
                      tmp7 = closure_2;
                      obj2 = closure_1(closure_2[16]);
                      obj1 = { applicationId: null, surface: null };
                      obj1.applicationId = tmp;
                      tmp8 = closure_4;
                      obj1.surface = closure_4;
                      launchFrameResult = obj2.launchFrame(obj1);
                      catchPromise = launchFrameResult.catch(() => { /* body not rendered: F144800 */ });
                    }
                  }
                }
                return;
              }
            }
            class N {
              constructor() {
                id = undefined;
                tmp = closure_6;
                if (closure_5 != null) {
                  id = closure_5.id;
                }
                if (id == null) {
                  id = null;
                }
                tmp.current = id;
                closure_7.current = channel.id;
                return;
              }
            }
            cResult[17] = tmp11;
            cResult[18] = items1;
            tmp23 = items1;
          }
          cResult[13] = channel.id;
          class L {
            constructor() {
              if (null != closure_1) {
                tmp10 = closure_2;
                if (!tmp10) {
                  tmp2 = closure_5;
                  if (null == closure_5) {
                    tmp11 = closure_7;
                    mainFrame = closure_7.getMainFrame();
                    if (null != mainFrame) {
                      tmp3 = closure_1;
                      tmp4 = closure_2;
                      obj = closure_1(closure_2[15]);
                      leaveFrameResult = obj.leaveFrame(mainFrame.id);
                    }
                    tmp6 = closure_1;
                    tmp7 = closure_2;
                    obj2 = closure_1(closure_2[16]);
                    obj1 = { applicationId: null, surface: null };
                    obj1.applicationId = tmp;
                    tmp8 = closure_4;
                    obj1.surface = closure_4;
                    launchFrameResult = obj2.launchFrame(obj1);
                    catchPromise = launchFrameResult.catch(() => { /* body not rendered: F144800 */ });
                  }
                }
              }
              return;
            }
          }
          if (tmp11 != null) {
            class Q {
              constructor(arg0) {
                obj = closure_0(closure_2[18]);
                result = obj.setAppChannelChatOpen(id, true);
                obj2 = closure_1(closure_2[19]);
                obj1 = { channelId: channel.channel_id, messageId: channel.id, flash: true };
                jumpToMessageResult = obj2.jumpToMessage(obj1);
                return;
              }
            }
          }
          class N {
            constructor() {
              id = undefined;
              tmp = closure_6;
              if (closure_5 != null) {
                id = closure_5.id;
              }
              if (id == null) {
                id = null;
              }
              tmp.current = id;
              closure_7.current = channel.id;
              return;
            }
          }
          cResult[14] = tmp22;
          cResult[15] = N;
          tmp21 = N;
        }
      }
    }
    class L {
      constructor() {
        if (null != closure_1) {
          tmp10 = closure_2;
          if (!tmp10) {
            tmp2 = closure_5;
            if (null == closure_5) {
              tmp11 = closure_7;
              mainFrame = closure_7.getMainFrame();
              if (null != mainFrame) {
                tmp3 = closure_1;
                tmp4 = closure_2;
                obj = closure_1(closure_2[15]);
                leaveFrameResult = obj.leaveFrame(mainFrame.id);
              }
              tmp6 = closure_1;
              tmp7 = closure_2;
              obj2 = closure_1(closure_2[16]);
              obj1 = { applicationId: null, surface: null };
              obj1.applicationId = tmp;
              tmp8 = closure_4;
              obj1.surface = closure_4;
              launchFrameResult = obj2.launchFrame(obj1);
              catchPromise = launchFrameResult.catch(() => { /* body not rendered: F144800 */ });
            }
          }
        }
        return;
      }
    }
    const items2 = [, first, tmp11, tmp10];
    cResult[7] = tmp6;
    cResult[8] = first;
    cResult[9] = tmp11;
    cResult[10] = tmp10;
    cResult[11] = L;
    cResult[12] = items2;
    tmp17 = items2;
    tmp16 = L;
  }
  let obj2 = { type: tmp(tmp2[13]).EmbeddedSurfaceType.APP_CHANNEL, channelId: channel.id, guildId: guild_id };
  cResult[2] = channel.id;
  cResult[3] = guild_id;
  cResult[4] = obj2;
  tmp10 = obj2;
}) : ((channel) => {
  let c1;
  let closure_4;
  let intl;
  let intl2;
  let items3;
  let items4;
  let items5;
  channel = channel.channel;
  importDefault = undefined;
  let guild_id;
  let first;
  surface = undefined;
  let closure_7;
  let closure_8;
  let tmp = importDefault;
  const tmp3 = closure_13(require("useSystemKeyboardHeight")());
  let obj = channel(guild_id[12]);
  let result = obj.vibegrationsAppIdFromTopic(channel.topic);
  importDefault = result;
  guild_id = channel.guild_id;
  let obj2 = surface;
  const tmp6 = first(surface.useState(false), 2);
  first = tmp6[0];
  surface = tmp6[1];
  const items = [channel.id, guild_id];
  const memo = surface.useMemo(() => {
    const obj = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, channelId: channel.id, guildId: guild_id };
    return obj;
  }, items);
  const tmp9 = tmp(guild_id[14])(result, memo);
  let id = tmp9;
  let tmp10 = null;
  if (null != tmp9) {
    tmp10 = null;
    if (closure_10(tmp9)) {
      tmp10 = tmp9;
    }
  }
  const items1 = [result, first, tmp9, memo];
  const effect = obj2.useEffect(() => {
    if (null != c1) {
      const tmp10 = first;
      if (!tmp10) {
        if (null == id) {
          const mainFrame = FramesStore.getMainFrame();
          if (null != mainFrame) {
            const obj = FramesNativeManagerDefault;
            obj.leaveFrame(mainFrame.id);
          }
          const obj3 = { applicationId: tmp, surface: memo };
          const obj2 = FramesActionCreatorsDefault;
          const launchFrameResult = obj2.launchFrame(obj3);
          launchFrameResult.catch(() => closure_1_4(true));
        }
      }
    }
  }, items1);
  closure_7 = obj2.useRef(null);
  closure_8 = obj2.useRef(channel.id);
  const items2 = [tmp9, channel.id];
  const effect1 = obj2.useEffect(() => {
    id = undefined;
    const tmp = closure_7;
    if (id != null) {
      id = id.id;
    }
    if (id == null) {
      id = null;
    }
    tmp.current = id;
    closure_8.current = channel.id;
  }, items2);
  const effect2 = obj2.useEffect(() => {
    let ref;
    let ref2;
    return () => {
      let isChatOpenResult = null == ref.current;
      const tmp = ref;
      if (!isChatOpenResult) {
        isChatOpenResult = ref2.isChatOpen(ref2.current);
      }
      if (!isChatOpenResult) {
        const obj = c1(guild_id[15]);
        obj.leaveFrame(tmp.current);
      }
    };
  }, []);
  tmp(guild_id[17])(null != tmp10);
  id = channel.id;
  [][0] = id;
  const callback = obj2.useCallback(() => closure_4(false), []);
  let tmp18 = null;
  if (null != result) {
    let tmp22;
    if (null != tmp10) {
      let obj3 = { style: tmp3.container, children: items3 };
      const obj4 = { frameId: tmp10.id, layoutMode: id.FOCUSED };
      items3 = [closure_11(tmp4(tmp2[20]).InlineFrameView, obj4), ];
      const obj5 = { channelId: channel.id, onOpenChat: tmp17 };
      items3[1] = closure_11(tmp(guild_id[21]), obj5);
      tmp22 = closure_12(id, obj3);
    } else if (first) {
      const obj6 = { style: tmp3.centered, children: items5 };
      const obj7 = { style: tmp3.copy, children: items4 };
      const obj8 = { variant: "heading-lg/bold", color: "text-default", children: channel.name };
      items4 = [closure_11(tmp4(tmp2[22]).Text, obj8), ];
      const obj9 = { variant: "text-md/normal", color: "text-muted", children: intl.string(tmp(guild_id[24]).QM4w4h) };
      const Text = tmp4(tmp2[22]).Text;
      intl = tmp4(tmp2[23]).intl;
      items4[1] = closure_11(Text, obj9);
      items5 = [closure_12(id, obj7), ];
      const obj10 = { variant: "primary", text: intl2.string(tmp(guild_id[24]).jLMpUv), onPress: callback };
      const Button = tmp4(tmp2[25]).Button;
      intl2 = tmp4(tmp2[23]).intl;
      items5[1] = closure_11(Button, obj10);
      tmp22 = closure_12(id, obj6);
    } else {
      const obj11 = { style: tmp3.centered, children: closure_11(memo, {}) };
      tmp22 = closure_11(id, obj11);
    }
    tmp18 = tmp22;
  }
  return tmp18;
});
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsAppChannelView.tsx");

export default tmp5;
