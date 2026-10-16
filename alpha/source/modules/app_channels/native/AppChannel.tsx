// Module ID: 17664
// Function ID: 17665
// Name: AppChannel
// Dependencies: [19, 17, 21, 5153, 558, 576, 1899, 6887, 11639, 7261, 17665, 11636, 11640, 7167, 9551, 11641, 11646, 17668, 17671, 1128, 6284, 17672, 2]

// Module 17664 (AppChannel)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl6 from "intl" /* 1128 */;
import conjureDMAppChannel from "conjureDMAppChannel" /* 6284 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 7261 */;
import AppChannelChat from "AppChannelChat" /* 9551 */;
import getInlineFramePresentationDefault from "getInlineFramePresentation" /* 11639 */;
import useChannelAppFrameTeardownDefault from "useChannelAppFrameTeardown" /* 17672 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5153 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles((paddingBottom) => {
  const obj = { container: obj2 };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppChannel(arg0) {
  let applicationId;
  let bottom;
  let channel;
  let frame;
  let guild_id;
  let headerVisible;
  let id;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let left;
  let right;
  let state;
  let top;
  let obj = id(576);
  const cResult = obj.c(31);
  ({ applicationId, channel, headerVisible } = arg0);
  const tmp6 = closure_7(guild_id(1899)());
  ({ top, bottom, left, right } = guild_id(6887)().insets);
  if (cResult[0] === bottom) {
    if (cResult[1] === (undefined === headerVisible || headerVisible)) {
      if (cResult[2] === left) {
        if (cResult[3] === right) {
          let tmp7;
          if (cResult[4] === top) {
            tmp7 = cResult[5];
          }
          if (cResult[6] === channel.guild_id) {
            let tmp9;
            if (cResult[7] === channel.id) {
              tmp9 = cResult[8];
            }
            if (cResult[9] === applicationId) {
              let tmp10;
              if (cResult[10] === tmp9) {
                tmp10 = cResult[11];
              }
              ({ frame, state } = guild_id(17665)(tmp10));
              guild_id(17665)(tmp10);
              const tmp5Result = guild_id(11636);
              tmp5Result(state === id(17665).FrameLifecycleState.Launched);
              let tmp15 = null;
              const tmp5Result3 = guild_id(11640);
              if (state === id(17665).FrameLifecycleState.Launched) {
                tmp15 = applicationId;
              }
              tmp5Result3(tmp15);
              const tmpResult = id(7167);
              const isConjureChannelCandidate = tmpResult.useIsConjureChannelCandidate(channel, "AppChannel");
              id = channel.id;
              guild_id = channel.guild_id;
              if (cResult[12] === id) {
                let tmp18;
                if (cResult[13] === guild_id) {
                  tmp18 = cResult[14];
                }
                if (id(17665).FrameLifecycleState.Launched === state) {
                  if (cResult[15] === frame.id) {
                    let tmp39;
                    if (cResult[16] === tmp7) {
                      tmp39 = cResult[17];
                    }
                    if (cResult[18] === id) {
                      if (cResult[19] === tmp18) {
                        let tmp43;
                        if (cResult[20] === isConjureChannelCandidate) {
                          tmp43 = cResult[21];
                        }
                        if (cResult[22] === tmp6.container) {
                          if (cResult[23] === tmp39) {
                            let tmp46;
                            if (cResult[24] === tmp43) {
                              tmp46 = cResult[25];
                            }
                            return tmp46;
                          }
                        }
                        const obj3 = { style: tmp6.container, children: items };
                        items = [tmp39, tmp43];
                        const tmp49 = closure_6(View, obj3);
                        cResult[22] = tmp6.container;
                        cResult[23] = tmp39;
                        cResult[24] = tmp43;
                        cResult[25] = tmp49;
                        tmp46 = tmp49;
                      }
                    }
                    let tmp44 = null;
                    if (isConjureChannelCandidate) {
                      const obj4 = { channelId: id, onOpenChat: tmp18 };
                      tmp44 = closure_5(tmp5(17668), obj4);
                    }
                    cResult[18] = id;
                    cResult[19] = tmp18;
                    cResult[20] = isConjureChannelCandidate;
                    cResult[21] = tmp44;
                    tmp43 = tmp44;
                  }
                  const obj5 = { frameId: frame.id, level: id(11646).FrameStackLevel.WithinAppContent, presentation: tmp7 };
                  const tmp5Result4 = guild_id(11641);
                  const tmp42 = closure_5(tmp5Result4, obj5);
                  cResult[15] = frame.id;
                  cResult[16] = tmp7;
                  cResult[17] = tmp42;
                  tmp39 = tmp42;
                } else if (id(17665).FrameLifecycleState.RenderingElsewhere === state) {
                  let tmp36;
                  const _Symbol5 = Symbol;
                  if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj6 = { description: intl5.string(id(1128).t["2KIDX+"]) };
                    const FrameSurfaceExplanation4 = tmp(17671).FrameSurfaceExplanation;
                    intl5 = tmp(1128).intl;
                    const tmp38 = closure_5(FrameSurfaceExplanation4, obj6);
                    cResult[26] = tmp38;
                    tmp36 = tmp38;
                  } else {
                    tmp36 = cResult[26];
                  }
                  return tmp36;
                } else if (id(17665).FrameLifecycleState.NoApplication === state) {
                  let tmp32;
                  const _Symbol4 = Symbol;
                  if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj7 = { description: intl4.string(id(1128).t.izggZO) };
                    const FrameSurfaceExplanation3 = tmp(17671).FrameSurfaceExplanation;
                    intl4 = tmp(1128).intl;
                    const tmp34 = closure_5(FrameSurfaceExplanation3, obj7);
                    cResult[27] = tmp34;
                    tmp32 = tmp34;
                  } else {
                    tmp32 = cResult[27];
                  }
                  return tmp32;
                } else if (id(17665).FrameLifecycleState.DoesNotSupportSurface === state) {
                  let tmp28;
                  const _Symbol3 = Symbol;
                  if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj8 = { description: intl3.string(id(1128).t["iUWcU/"]) };
                    const FrameSurfaceExplanation2 = tmp(17671).FrameSurfaceExplanation;
                    intl3 = tmp(1128).intl;
                    const tmp30 = closure_5(FrameSurfaceExplanation2, obj8);
                    cResult[28] = tmp30;
                    tmp28 = tmp30;
                  } else {
                    tmp28 = cResult[28];
                  }
                  return tmp28;
                } else if (id(17665).FrameLifecycleState.Error === state) {
                  let tmp24;
                  const _Symbol2 = Symbol;
                  if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj9 = { heading: intl.string(id(1128).t.VquUff), error: intl2.string(id(1128).t["Sd9D/R"]) };
                    const FrameSurfaceExplanation = tmp(17671).FrameSurfaceExplanation;
                    intl = tmp(1128).intl;
                    intl2 = tmp(1128).intl;
                    const tmp26 = closure_5(FrameSurfaceExplanation, obj9);
                    cResult[29] = tmp26;
                    tmp24 = tmp26;
                  } else {
                    tmp24 = cResult[29];
                  }
                  return tmp24;
                } else {
                  let tmp20;
                  const _Symbol = Symbol;
                  if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp22 = closure_5(id(17671).FrameSurfaceLoading, {});
                    cResult[30] = tmp22;
                    tmp20 = tmp22;
                  } else {
                    tmp20 = cResult[30];
                  }
                  return tmp20;
                }
              }
              const fn = function w(id) {
                const obj = AppChannelChat;
                obj.openAppChannelChat(guild_id, id, id.id);
              };
              cResult[12] = id;
              cResult[13] = guild_id;
              cResult[14] = fn;
              tmp18 = fn;
            }
            const obj10 = { applicationId, surface: tmp9 };
            cResult[9] = applicationId;
            cResult[10] = tmp9;
            cResult[11] = obj10;
            tmp10 = obj10;
          }
          const obj11 = { type: id(7261).EmbeddedSurfaceType.APP_CHANNEL, channelId: null, guildId: null };
          ({ id: obj2.channelId, guild_id: obj2.guildId } = channel);
          cResult[6] = channel.guild_id;
          cResult[7] = channel.id;
          cResult[8] = obj11;
          tmp9 = obj11;
        }
      }
    }
  }
  const tmp8 = guild_id(11639)({ top, bottom, left, right }, undefined === headerVisible || headerVisible);
  cResult[0] = bottom;
  cResult[1] = undefined === headerVisible || headerVisible;
  cResult[2] = left;
  cResult[3] = right;
  cResult[4] = top;
  cResult[5] = tmp8;
  tmp7 = tmp8;
}) : (function AppChannel(headerVisible) {
  let applicationId;
  let channel;
  let frame;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items3;
  let state;
  ({ applicationId, channel } = headerVisible);
  let flag = headerVisible.headerVisible;
  if (flag === undefined) {
    flag = true;
  }
  let top;
  let id;
  let guild_id;
  const tmp3 = guild_id(flag(top[6])());
  const insets = flag(top[7])().insets;
  top = insets.top;
  const bottom = insets.bottom;
  const left = insets.left;
  const right = insets.right;
  let obj = bottom;
  const items = [top, bottom, left, right, flag];
  const items1 = [, ];
  ({ id: arr2[0], guild_id: arr2[1] } = channel);
  const memo = bottom.useMemo(() => {
    const rect = { top, bottom, left, right };
    return getInlineFramePresentationDefault(rect, flag);
  }, items);
  const memo1 = bottom.useMemo(() => {
    const obj = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, channelId: channel.id, guildId: channel.guild_id };
    return obj;
  }, items1);
  ({ state, frame } = flag(top[10])({ applicationId, surface: memo1 }));
  flag(top[10])({ applicationId, surface: memo1 });
  const tmp7 = flag(top[11]);
  tmp7(state === channel(top[10]).FrameLifecycleState.Launched);
  let tmp11 = null;
  const tmp10 = flag(top[12]);
  if (state === channel(top[10]).FrameLifecycleState.Launched) {
    tmp11 = applicationId;
  }
  tmp10(tmp11);
  id = channel.id;
  guild_id = channel.guild_id;
  const items2 = [guild_id, id];
  const tmp8Result = channel(top[13]);
  const isConjureChannelCandidate = tmp8Result.useIsConjureChannelCandidate(channel, "AppChannel");
  const callback = obj.useCallback((id) => {
    const obj = AppChannelChat;
    obj.openAppChannelChat(guild_id, id, id.id);
  }, items2);
  if (channel(top[10]).FrameLifecycleState.Launched === state) {
    const obj2 = { style: tmp3.container, children: items3 };
    const obj3 = { frameId: frame.id, level: channel(top[16]).FrameStackLevel.WithinAppContent, presentation: memo };
    const tmpResult = flag(top[15]);
    items3 = [right(tmpResult, obj3), ];
    let tmp22Result = null;
    const tmp20 = id;
    const tmp21 = left;
    const tmp22 = right;
    if (isConjureChannelCandidate) {
      const obj4 = { channelId: id, onOpenChat: callback };
      tmp22Result = tmp22(tmp(tmp2[17]), obj4);
    }
    items3[1] = tmp22Result;
    return tmp20(tmp21, obj2);
  } else if (channel(top[10]).FrameLifecycleState.RenderingElsewhere === state) {
    const obj5 = { description: intl5.string(channel(top[19]).t["2KIDX+"]) };
    const FrameSurfaceExplanation4 = tmp8(tmp2[18]).FrameSurfaceExplanation;
    intl5 = tmp8(tmp2[19]).intl;
    return right(FrameSurfaceExplanation4, obj5);
  } else if (channel(top[10]).FrameLifecycleState.NoApplication === state) {
    const obj6 = { description: intl4.string(channel(top[19]).t.izggZO) };
    const FrameSurfaceExplanation3 = tmp8(tmp2[18]).FrameSurfaceExplanation;
    intl4 = tmp8(tmp2[19]).intl;
    return right(FrameSurfaceExplanation3, obj6);
  } else if (channel(top[10]).FrameLifecycleState.DoesNotSupportSurface === state) {
    const obj7 = { description: intl3.string(channel(top[19]).t["iUWcU/"]) };
    const FrameSurfaceExplanation2 = tmp8(tmp2[18]).FrameSurfaceExplanation;
    intl3 = tmp8(tmp2[19]).intl;
    return right(FrameSurfaceExplanation2, obj7);
  } else if (channel(top[10]).FrameLifecycleState.Error === state) {
    const obj8 = { heading: intl.string(channel(top[19]).t.VquUff), error: intl2.string(channel(top[19]).t["Sd9D/R"]) };
    const FrameSurfaceExplanation = tmp8(tmp2[18]).FrameSurfaceExplanation;
    intl = tmp8(tmp2[19]).intl;
    intl2 = tmp8(tmp2[19]).intl;
    return right(FrameSurfaceExplanation, obj8);
  } else {
    return right(channel(top[18]).FrameSurfaceLoading, {});
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectedAppChannel(channel) {
  let intl;
  let intl2;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(4);
  channel = channel.channel;
  let application_id = channel.application_id;
  const obj2 = conjureDMAppChannel;
  if (application_id == null) {
    application_id = obj2.useDMAppChannelApplicationId(channel);
  }
  useChannelAppFrameTeardownDefault(channel);
  if (null == application_id) {
    let first;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { heading: intl.string(intl6.t.tU5fiM), description: intl2.string(intl6.t.E94mJf) };
      const FrameSurfaceExplanation = tmp(17671).FrameSurfaceExplanation;
      intl = tmp(1128).intl;
      intl2 = tmp(1128).intl;
      const tmp12 = hasOwnProperty(FrameSurfaceExplanation, obj3);
      cResult[0] = tmp12;
      first = tmp12;
    } else {
      first = cResult[0];
    }
    tmp5 = first;
  } else {
    if (cResult[1] === application_id) {
      if (cResult[2] === channel) {
        tmp5 = cResult[3];
      }
    }
    const obj4 = { applicationId: application_id, channel };
    const tmp8 = hasOwnProperty(closure_8, obj4);
    cResult[1] = application_id;
    cResult[2] = channel;
    cResult[3] = tmp8;
    tmp5 = tmp8;
  }
  return tmp5;
}) : (function ConnectedAppChannel(channel) {
  let intl;
  let intl2;
  let tmp6;
  channel = channel.channel;
  let application_id = channel.application_id;
  const obj = conjureDMAppChannel;
  if (application_id == null) {
    application_id = obj.useDMAppChannelApplicationId(channel);
  }
  useChannelAppFrameTeardownDefault(channel);
  if (null == application_id) {
    const obj2 = { heading: intl.string(intl6.t.tU5fiM), description: intl2.string(intl6.t.E94mJf) };
    const FrameSurfaceExplanation = tmp(17671).FrameSurfaceExplanation;
    intl = tmp(1128).intl;
    intl2 = tmp(1128).intl;
    tmp6 = hasOwnProperty(FrameSurfaceExplanation, obj2);
  } else {
    const obj3 = { applicationId: application_id, channel };
    tmp6 = hasOwnProperty(closure_8, obj3);
  }
  return tmp6;
});
const result = size.fileFinishedImporting("modules/app_channels/native/AppChannel.tsx");

export default tmp3;
