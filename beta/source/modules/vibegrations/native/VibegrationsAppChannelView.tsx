// Module ID: 17097
// Function ID: 17098
// Name: VibegrationsAppChannelView
// Dependencies: [32, 19, 17, 9343, 13597, 9344, 21, 4790, 580, 558, 568, 1882, 5308, 16979, 9590, 9599, 16980, 13601, 7735, 16981, 17098, 4786, 1119, 3714, 5220, 2]

// Module 17097 (VibegrationsAppChannelView)
import nativeDefault from "native" /* 580 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7735 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9590 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9599 */;
import VibegrationsAppChannelActionCreators from "VibegrationsAppChannelActionCreators" /* 13601 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9343 */;
import VibegrationsAppChannelsStore from "VibegrationsAppChannelsStore" /* 13597 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const FramesConstants = fn(9344);
({ EmbeddedSurfaceType: closure_9, FrameLayoutModes: c10, isLaunched: closure_11 } = FramesConstants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4790);
let closure_14 = createStyles.createStyles((paddingBottom) => {
  const obj = { container: { flex: 1, paddingBottom }, centered: { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_12 }, copy: null };
  const obj2 = { flex: 1, paddingBottom };
  const obj3 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_12 };
  obj.copy = { alignItems: "center", gap: nativeDefault.space.PX_4 };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsAppChannelView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(first[10]).c(46);
  channel = channel.channel;
  let container = closure_14(require("useSystemKeyboardHeight")());
  if (cResult[0] !== channel.topic) {
    let result = tmp(tmp2[12]).vibegrationsAppIdFromTopic(channel.topic);
    cResult[0] = channel.topic;
    cResult[1] = result;
    let tmp5 = result;
    const tmpResult = tmp(tmp2[12]);
  } else {
    tmp5 = cResult[1];
  }
  importDefault = tmp5;
  const guild_id = channel.guild_id;
  [first, _slicedToArray] = surface.useState(false);
  if (cResult[2] === channel.id) {
    if (cResult[3] === guild_id) {
      let tmp9 = cResult[4];
    }
    surface = tmp9;
    const tmp10 = tmp4(tmp2[13])(tmp5, tmp9);
    user = tmp10;
    if (cResult[5] !== tmp10) {
      let tmp13 = null;
      if (null != tmp10) {
        tmp13 = null;
        if (closure_11(tmp10)) {
          tmp13 = tmp10;
        }
      }
      cResult[5] = tmp10;
      cResult[6] = tmp13;
      let tmp12 = tmp13;
    } else {
      tmp12 = cResult[6];
    }
    if (cResult[7] === tmp5) {
      if (cResult[8] === first) {
        if (cResult[9] === tmp10) {
          if (cResult[10] === tmp9) {
            let tmp15 = cResult[11];
            let tmp16 = cResult[12];
          }
          const effect = obj3.useEffect(tmp15, tmp16);
          closure_6 = obj3.useRef(null);
          FramesStore = obj3.useRef(channel.id);
          if (cResult[13] === channel.id) {
            let id1;
            if (tmp10 != null) {
              id1 = tmp10.id;
            }
            if (cResult[14] === id1) {
              let tmp19 = cResult[15];
            }
            if (cResult[16] === channel.id) {
              if (cResult[17] === tmp10) {
                let tmp21 = cResult[18];
              }
              const effect1 = obj3.useEffect(tmp19, tmp21);
              const _Symbol = Symbol;
              if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                class X {
                  constructor() {
                    return () => { ... };
                  }
                }
                const items = [];
                cResult[19] = X;
                cResult[20] = items;
                class R {
                  constructor() {
                    if (null != closure_1) {
                      tmp10 = closure_2;
                      if (!closure_2) {
                        tmp2 = closure_5;
                        if (null == closure_5) {
                          tmp11 = closure_7;
                          mainFrame = closure_7.getMainFrame();
                          if (null != mainFrame) {
                            tmp3 = closure_1;
                            tmp4 = closure_2;
                            obj = closure_1(closure_2[14]);
                            leaveFrameResult = obj.leaveFrame(mainFrame.id);
                          }
                          tmp6 = closure_1;
                          tmp7 = closure_2;
                          obj2 = closure_1(closure_2[15]);
                          obj1 = { applicationId: null, surface: null };
                          obj1.applicationId = tmp;
                          tmp8 = closure_4;
                          obj1.surface = closure_4;
                          launchFrameResult = obj2.launchFrame(obj1);
                          catchPromise = launchFrameResult.catch(() => { ... });
                        }
                      }
                    }
                    return;
                  }
                }
              } else {
                class X {
                  constructor() {
                    return () => { ... };
                  }
                }
              }
              class R {
                constructor() {
                  if (null != closure_1) {
                    tmp10 = closure_2;
                    if (!closure_2) {
                      tmp2 = closure_5;
                      if (null == closure_5) {
                        tmp11 = closure_7;
                        mainFrame = closure_7.getMainFrame();
                        if (null != mainFrame) {
                          tmp3 = closure_1;
                          tmp4 = closure_2;
                          obj = closure_1(closure_2[14]);
                          leaveFrameResult = obj.leaveFrame(mainFrame.id);
                        }
                        tmp6 = closure_1;
                        tmp7 = closure_2;
                        obj2 = closure_1(closure_2[15]);
                        obj1 = { applicationId: null, surface: null };
                        obj1.applicationId = tmp;
                        tmp8 = closure_4;
                        obj1.surface = closure_4;
                        launchFrameResult = obj2.launchFrame(obj1);
                        catchPromise = launchFrameResult.catch(() => { ... });
                      }
                    }
                  }
                  return;
                }
              }
              tmp4(tmp2[16])(null != tmp12);
              class U {
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
                class D {
                  constructor() {
                    return closure_3(false);
                  }
                }
                cResult[21] = D;
              } else {
                class D {
                  constructor() {
                    return closure_3(false);
                  }
                }
              }
              let id = channel.id;
              if (cResult[22] !== id) {
                class D {
                  constructor() {
                    return closure_3(false);
                  }
                }
                cResult[22] = id;
                cResult[23] = tmp28;
              } else {
                class D {
                  constructor() {
                    return closure_3(false);
                  }
                }
              }
              if (null == tmp5) {
                class D {
                  constructor() {
                    return closure_3(false);
                  }
                }
              } else {
                class D {
                  constructor() {
                    return closure_3(false);
                  }
                }
                if (cResult[24] !== tmp12.id) {
                  class D {
                    constructor() {
                      return closure_3(false);
                    }
                  }
                  let obj2 = { frameId: tmp12.id, layoutMode: constants2.FOCUSED };
                  class R {
                    constructor() {
                      if (null != closure_1) {
                        tmp10 = closure_2;
                        if (!closure_2) {
                          tmp2 = closure_5;
                          if (null == closure_5) {
                            tmp11 = closure_7;
                            mainFrame = closure_7.getMainFrame();
                            if (null != mainFrame) {
                              tmp3 = closure_1;
                              tmp4 = closure_2;
                              obj = closure_1(closure_2[14]);
                              leaveFrameResult = obj.leaveFrame(mainFrame.id);
                            }
                            tmp6 = closure_1;
                            tmp7 = closure_2;
                            obj2 = closure_1(closure_2[15]);
                            obj1 = { applicationId: null, surface: null };
                            obj1.applicationId = tmp;
                            tmp8 = closure_4;
                            obj1.surface = closure_4;
                            launchFrameResult = obj2.launchFrame(obj1);
                            catchPromise = launchFrameResult.catch(() => { ... });
                          }
                        }
                      }
                      return;
                    }
                  }
                  class U {
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
                  const tmp32 = closure_12(tmp(tmp2[19]).InlineFrameView, obj2);
                  const tmp30 = closure_12(tmp(tmp2[19]).InlineFrameView, obj2);
                } else {
                  class D {
                    constructor() {
                      return closure_3(false);
                    }
                  }
                }
                if (cResult[26] === channel.id) {
                  class D {
                    constructor() {
                      return closure_3(false);
                    }
                  }
                  if (cResult[29] === container.container) {
                    class D {
                      constructor() {
                        return closure_3(false);
                      }
                    }
                  }
                  const obj4 = { style: container.container, children: null };
                  const items1 = [, ];
                  class R {
                    constructor() {
                      if (null != closure_1) {
                        tmp10 = closure_2;
                        if (!closure_2) {
                          tmp2 = closure_5;
                          if (null == closure_5) {
                            tmp11 = closure_7;
                            mainFrame = closure_7.getMainFrame();
                            if (null != mainFrame) {
                              tmp3 = closure_1;
                              tmp4 = closure_2;
                              obj = closure_1(closure_2[14]);
                              leaveFrameResult = obj.leaveFrame(mainFrame.id);
                            }
                            tmp6 = closure_1;
                            tmp7 = closure_2;
                            obj2 = closure_1(closure_2[15]);
                            obj1 = { applicationId: null, surface: null };
                            obj1.applicationId = tmp;
                            tmp8 = closure_4;
                            obj1.surface = closure_4;
                            launchFrameResult = obj2.launchFrame(obj1);
                            catchPromise = launchFrameResult.catch(() => { ... });
                          }
                        }
                      }
                      return;
                    }
                  }
                  items1[1] = tmp33;
                  class U {
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
                  const tmp39 = closure_13(closure_6, obj4);
                  container = container.container;
                  cResult[29] = container;
                  cResult[30] = tmp30;
                  cResult[31] = tmp33;
                  cResult[32] = tmp39;
                }
                const obj5 = { channelId: channel.id, onOpenChat: tmp27 };
                class R {
                  constructor() {
                    if (null != closure_1) {
                      tmp10 = closure_2;
                      if (!closure_2) {
                        tmp2 = closure_5;
                        if (null == closure_5) {
                          tmp11 = closure_7;
                          mainFrame = closure_7.getMainFrame();
                          if (null != mainFrame) {
                            tmp3 = closure_1;
                            tmp4 = closure_2;
                            obj = closure_1(closure_2[14]);
                            leaveFrameResult = obj.leaveFrame(mainFrame.id);
                          }
                          tmp6 = closure_1;
                          tmp7 = closure_2;
                          obj2 = closure_1(closure_2[15]);
                          obj1 = { applicationId: null, surface: null };
                          obj1.applicationId = tmp;
                          tmp8 = closure_4;
                          obj1.surface = closure_4;
                          launchFrameResult = obj2.launchFrame(obj1);
                          catchPromise = launchFrameResult.catch(() => { ... });
                        }
                      }
                    }
                    return;
                  }
                }
                class U {
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
                cResult[27] = tmp27;
                cResult[28] = tmp35;
              }
            }
            const items2 = [tmp10, ];
            class R {
              constructor() {
                if (null != closure_1) {
                  tmp10 = closure_2;
                  if (!closure_2) {
                    tmp2 = closure_5;
                    if (null == closure_5) {
                      tmp11 = closure_7;
                      mainFrame = closure_7.getMainFrame();
                      if (null != mainFrame) {
                        tmp3 = closure_1;
                        tmp4 = closure_2;
                        obj = closure_1(closure_2[14]);
                        leaveFrameResult = obj.leaveFrame(mainFrame.id);
                      }
                      tmp6 = closure_1;
                      tmp7 = closure_2;
                      obj2 = closure_1(closure_2[15]);
                      obj1 = { applicationId: null, surface: null };
                      obj1.applicationId = tmp;
                      tmp8 = closure_4;
                      obj1.surface = closure_4;
                      launchFrameResult = obj2.launchFrame(obj1);
                      catchPromise = launchFrameResult.catch(() => { ... });
                    }
                  }
                }
                return;
              }
            }
            class U {
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
            cResult[17] = tmp10;
            cResult[18] = items2;
            tmp21 = items2;
          }
          cResult[13] = channel.id;
          class R {
            constructor() {
              if (null != closure_1) {
                tmp10 = closure_2;
                if (!closure_2) {
                  tmp2 = closure_5;
                  if (null == closure_5) {
                    tmp11 = closure_7;
                    mainFrame = closure_7.getMainFrame();
                    if (null != mainFrame) {
                      tmp3 = closure_1;
                      tmp4 = closure_2;
                      obj = closure_1(closure_2[14]);
                      leaveFrameResult = obj.leaveFrame(mainFrame.id);
                    }
                    tmp6 = closure_1;
                    tmp7 = closure_2;
                    obj2 = closure_1(closure_2[15]);
                    obj1 = { applicationId: null, surface: null };
                    obj1.applicationId = tmp;
                    tmp8 = closure_4;
                    obj1.surface = closure_4;
                    launchFrameResult = obj2.launchFrame(obj1);
                    catchPromise = launchFrameResult.catch(() => { ... });
                  }
                }
              }
              return;
            }
          }
          if (tmp10 != null) {
            class D {
              constructor() {
                return closure_3(false);
              }
            }
          }
          class U {
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
          cResult[14] = tmp20;
          cResult[15] = U;
          tmp19 = U;
        }
      }
    }
    class R {
      constructor() {
        if (null != closure_1) {
          tmp10 = closure_2;
          if (!closure_2) {
            tmp2 = closure_5;
            if (null == closure_5) {
              tmp11 = closure_7;
              mainFrame = closure_7.getMainFrame();
              if (null != mainFrame) {
                tmp3 = closure_1;
                tmp4 = closure_2;
                obj = closure_1(closure_2[14]);
                leaveFrameResult = obj.leaveFrame(mainFrame.id);
              }
              tmp6 = closure_1;
              tmp7 = closure_2;
              obj2 = closure_1(closure_2[15]);
              obj1 = { applicationId: null, surface: null };
              obj1.applicationId = tmp;
              tmp8 = closure_4;
              obj1.surface = closure_4;
              launchFrameResult = obj2.launchFrame(obj1);
              catchPromise = launchFrameResult.catch(() => { ... });
            }
          }
        }
        return;
      }
    }
    const items3 = [, first, tmp10, tmp9];
    cResult[7] = tmp5;
    cResult[8] = first;
    cResult[9] = tmp10;
    cResult[10] = tmp9;
    cResult[11] = R;
    cResult[12] = items3;
    tmp16 = items3;
    tmp15 = R;
  }
  const obj6 = { type: constants.APP_CHANNEL, channelId: channel.id, guildId: guild_id };
  cResult[2] = channel.id;
  cResult[3] = guild_id;
  cResult[4] = obj6;
  tmp9 = obj6;
}) : ((channel) => {
  importDefault = undefined;
  let guild_id;
  let first;
  surface = undefined;
  let id;
  closure_7 = undefined;
  closure_8 = undefined;
  let id2;
  let tmp = importDefault;
  let tmp2 = guild_id;
  let items3 = closure_14(require("useSystemKeyboardHeight")());
  let tmp3 = id;
  let result = id(guild_id[12]).vibegrationsAppIdFromTopic(id.topic);
  importDefault = result;
  guild_id = id.guild_id;
  const tmp5 = first(surface.useState(false), 2);
  first = tmp5[0];
  surface = tmp5[1];
  const items = [id.id, guild_id];
  const memo = surface.useMemo(() => ({ type: constants.APP_CHANNEL, channelId: id.id, guildId: guild_id }), items);
  const tmp8 = tmp(tmp2[13])(result, memo);
  id = tmp8;
  let id1 = null;
  if (null != tmp8) {
    id1 = null;
    if (closure_11(tmp8)) {
      id1 = tmp8;
    }
  }
  const items1 = [result, first, tmp8, memo];
  const effect = obj2.useEffect(() => {
    if (null != c1) {
      if (!first) {
        if (null == closure_6) {
          const mainFrame = FramesStore.getMainFrame();
          if (null != mainFrame) {
            FramesNativeManagerDefault.leaveFrame(mainFrame.id);
          }
          const obj3 = { applicationId: tmp, surface: memo };
          FramesActionCreatorsDefault.launchFrame(obj3).catch(() => closure_1_4(true));
          const launchFrameResult = FramesActionCreatorsDefault.launchFrame(obj3);
        }
      }
    }
  }, items1);
  closure_7 = obj2.useRef(null);
  closure_8 = obj2.useRef(id.id);
  const items2 = [tmp8, id.id];
  const effect1 = obj2.useEffect(() => {
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    if (id == null) {
      id = null;
    }
    closure_7.current = id;
    closure_8.current = id.id;
  }, items2);
  const effect2 = obj2.useEffect(() => () => {
    let isChatOpenResult = null == ref.current;
    if (!isChatOpenResult) {
      isChatOpenResult = ref2.isChatOpen(ref2.current);
    }
    if (!isChatOpenResult) {
      c1(guild_id[14]).leaveFrame(ref.current);
      const obj = c1(guild_id[14]);
    }
  }, []);
  tmp(tmp2[16])(null != id1);
  id2 = id.id;
  [][0] = id2;
  const callback = obj2.useCallback(() => closure_4(false), []);
  if (null == result) {
    return null;
  } else if (null != id1) {
    let obj3 = { style: items3.container, children: null };
    const obj4 = { frameId: null, layoutMode: null };
    id1 = id1.id;
    obj4.frameId = id1;
    obj4.layoutMode = constants2.FOCUSED;
    tmp3 = closure_12(tmp3(tmp2[19]).InlineFrameView, obj4);
    items3 = [tmp3, ];
    tmp = tmp(tmp2[20]);
    const obj5 = { channelId: null, onOpenChat: null };
    id = id.id;
    obj5.channelId = id;
    obj5.onOpenChat = tmp16;
    tmp2 = closure_12(tmp, obj5);
    items3[1] = tmp2;
    obj3.children = items3;
    let tmp20 = closure_13(id, obj3);
  } else if (first) {
    const obj6 = { style: items3.centered, children: null };
    const obj7 = { style: items3.copy, children: null };
    const obj8 = { variant: "heading-lg/bold", color: "text-default", children: id.name };
    const items4 = [closure_12(tmp3(tmp2[21]).Text, obj8), ];
    const obj9 = { variant: "text-md/normal", color: "text-muted", children: null };
    const intl = tmp3(tmp2[22]).intl;
    obj9.children = intl.string(tmp(tmp2[23]).QM4w4h);
    items4[1] = closure_12(tmp3(tmp2[21]).Text, obj9);
    obj7.children = items4;
    const items5 = [closure_13(id, obj7), ];
    const obj10 = { variant: "primary", text: null, onPress: null };
    const intl2 = tmp3(tmp2[22]).intl;
    obj10.text = intl2.string(tmp(tmp2[23]).jLMpUv);
    obj10.onPress = callback;
    items5[1] = closure_12(tmp3(tmp2[24]).Button, obj10);
    obj6.children = items5;
    tmp20 = closure_13(id, obj6);
  } else {
    const obj11 = { style: items3.centered, children: closure_12(memo, {}) };
    tmp20 = closure_12(id, obj11);
  }
});
