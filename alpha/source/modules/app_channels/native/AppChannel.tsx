// Module ID: 18051
// Function ID: 18052
// Name: AppChannel
// Dependencies: [19, 17, 21, 4971, 587, 558, 576, 1899, 5593, 11777, 18052, 18055, 11774, 11778, 7345, 5707, 11779, 11783, 18059, 18062, 1128, 6809, 5669, 1417, 5244, 5626, 9716, 18063, 6807, 18064, 10893, 2]

// Module 18051 (AppChannel)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1128 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1417 */;
import useSystemKeyboardHeightDefault from "useSystemKeyboardHeight" /* 1899 */;
import components_Button_Button from "components/Button/Button" /* 5244 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5593 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5626 */;
import FastImageDefault from "FastImage" /* 5669 */;
import transitionToChannel from "transitionToChannel" /* 5707 */;
import conjureDMAppChannel from "conjureDMAppChannel" /* 6807 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6809 */;
import openChannelSecondaryViewChat from "openChannelSecondaryViewChat" /* 9716 */;
import useChannelContentGate from "useChannelContentGate" /* 10893 */;
import useEdgeOnlySwipeExitDefault from "useEdgeOnlySwipeExit" /* 11774 */;
import getInlineFramePresentationDefault from "getInlineFramePresentation" /* 11777 */;
import useInlineFrameOAuthNavigationDefault from "useInlineFrameOAuthNavigation" /* 11778 */;
import FrameRenderTargetDefault from "FrameRenderTarget" /* 11779 */;
import useFrameLifecycleDefault from "useFrameLifecycle" /* 18052 */;
import conjureBackgroundFramesDefault from "conjureBackgroundFrames" /* 18055 */;
import FrameSurfaceState from "FrameSurfaceState" /* 18062 */;
import useAppChannelClosedDefault from "useAppChannelClosed" /* 18063 */;
import useChannelAppFrameTeardownDefault from "useChannelAppFrameTeardown" /* 18064 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let transitionToMessageResult;

let hasOwnProperty;
let metroRequire;
let size;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { icon: size };
size = { width: 64, height: 64, borderRadius: nativeDefault.radii.lg };
let closure_7 = createStyles.createStyles(obj);
createStyles = createStyles_mod;
let closure_8 = createStyles.createStyles((paddingBottom) => {
  const obj = { container: obj2 };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function OpenAppChannel(arg0) {
  let applicationId;
  let bottom;
  let channel;
  let frame;
  let headerVisible;
  let id;
  let left;
  let right;
  let state;
  let surface;
  let top;
  let obj = id(576);
  const cResult = obj.c(27);
  ({ applicationId, channel, surface, headerVisible } = arg0);
  closure_8(useSystemKeyboardHeightDefault());
  ({ top, bottom, left, right } = useSafeAreaInsetsKeyboardAwareDefault().insets);
  if (cResult[0] === bottom) {
    if (cResult[1] === (undefined === headerVisible || headerVisible)) {
      if (cResult[2] === left) {
        if (cResult[3] === right) {
          let tmp7;
          if (cResult[4] === top) {
            tmp7 = cResult[5];
          }
          if (cResult[6] === applicationId) {
            let tmp9;
            if (cResult[7] === surface) {
              tmp9 = cResult[8];
            }
            ({ frame, state } = useFrameLifecycleDefault(tmp9));
            useFrameLifecycleDefault(tmp9);
            conjureBackgroundFramesDefault(applicationId, surface);
            const tmp5Result = useEdgeOnlySwipeExitDefault;
            tmp5Result(state === id(18052).FrameLifecycleState.Launched);
            let tmp15 = null;
            const tmp5Result3 = useInlineFrameOAuthNavigationDefault;
            if (state === id(18052).FrameLifecycleState.Launched) {
              tmp15 = applicationId;
            }
            tmp5Result3(tmp15);
            const tmpResult = id(7345);
            const isConjureChannelCandidate = tmpResult.useIsConjureChannelCandidate(channel, "AppChannel");
            id = channel.id;
            if (cResult[9] !== id) {
              class M {
                constructor(arg0) {
                  obj = closure_0(closure_2[15]);
                  transitionToMessageResult = obj.transitionToMessage(id, arg0.id);
                  return;
                }
              }
              cResult[9] = id;
              cResult[10] = M;
            } else {
              class M {
                constructor(arg0) {
                  obj = closure_0(closure_2[15]);
                  transitionToMessageResult = obj.transitionToMessage(id, arg0.id);
                  return;
                }
              }
            }
            if (id(18052).FrameLifecycleState.Launched === state) {
              class M {
                constructor(arg0) {
                  obj = closure_0(closure_2[15]);
                  transitionToMessageResult = obj.transitionToMessage(id, arg0.id);
                  return;
                }
              }
              const obj2 = { frameId: frame.id, level: id(11783).FrameStackLevel.WithinAppContent, presentation: tmp7 };
              const tmp5Result4 = FrameRenderTargetDefault;
              cResult[11] = frame.id;
              cResult[12] = tmp7;
              cResult[13] = closure_5(tmp5Result4, obj2);
              const tmp22 = closure_5(tmp5Result4, obj2);
            } else {
              class M {
                constructor(arg0) {
                  obj = closure_0(closure_2[15]);
                  transitionToMessageResult = obj.transitionToMessage(id, arg0.id);
                  return;
                }
              }
            }
          }
          const obj3 = { applicationId, surface };
          cResult[6] = applicationId;
          cResult[7] = surface;
          cResult[8] = obj3;
          tmp9 = obj3;
        }
      }
    }
  }
  const tmp8 = getInlineFramePresentationDefault({ top, bottom, left, right }, undefined === headerVisible || headerVisible);
  cResult[0] = bottom;
  cResult[1] = undefined === headerVisible || headerVisible;
  cResult[2] = left;
  cResult[3] = right;
  cResult[4] = top;
  cResult[5] = tmp8;
  tmp7 = tmp8;
}) : (function OpenAppChannel(arg0) {
  let applicationId;
  let channel;
  let frame;
  let headerVisible;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items2;
  let state;
  let surface;
  ({ applicationId, channel, surface, headerVisible } = arg0);
  if (headerVisible === undefined) {
    headerVisible = true;
  }
  let top;
  let bottom;
  let id;
  const tmp3 = closure_8(top(bottom[7])());
  const insets = top(bottom[8])().insets;
  top = insets.top;
  bottom = insets.bottom;
  const left = insets.left;
  const right = insets.right;
  let obj = left;
  const items = [top, bottom, left, right, headerVisible];
  const memo = left.useMemo(() => {
    const rect = { top, bottom, left, right };
    return getInlineFramePresentationDefault(rect, headerVisible);
  }, items);
  ({ state, frame } = top(bottom[10])({ applicationId, surface }));
  top(bottom[10])({ applicationId, surface });
  top(bottom[11])(applicationId, surface);
  const tmp7 = top(bottom[12]);
  tmp7(state === headerVisible(bottom[10]).FrameLifecycleState.Launched);
  let tmp11 = null;
  const tmp10 = top(bottom[13]);
  if (state === headerVisible(bottom[10]).FrameLifecycleState.Launched) {
    tmp11 = applicationId;
  }
  tmp10(tmp11);
  id = channel.id;
  const items1 = [id];
  const tmp8Result = headerVisible(bottom[14]);
  const isConjureChannelCandidate = tmp8Result.useIsConjureChannelCandidate(channel, "AppChannel");
  const callback = obj.useCallback((id) => {
    const obj = transitionToChannel;
    obj.transitionToMessage(id, id.id);
  }, items1);
  if (headerVisible(bottom[10]).FrameLifecycleState.Launched === state) {
    const obj2 = { style: tmp3.container, children: items2 };
    const obj3 = { frameId: frame.id, level: headerVisible(bottom[17]).FrameStackLevel.WithinAppContent, presentation: memo };
    const tmpResult = top(bottom[16]);
    items2 = [id(tmpResult, obj3), ];
    let tmp22Result = null;
    const tmp20 = closure_6;
    const tmp21 = right;
    const tmp22 = id;
    if (isConjureChannelCandidate) {
      const obj4 = { channelId: id, onOpenChat: callback };
      tmp22Result = tmp22(tmp(tmp2[18]), obj4);
    }
    items2[1] = tmp22Result;
    return tmp20(tmp21, obj2);
  } else if (headerVisible(bottom[10]).FrameLifecycleState.RenderingElsewhere === state) {
    const obj5 = { description: intl5.string(headerVisible(bottom[20]).t["2KIDX+"]) };
    const FrameSurfaceExplanation4 = tmp8(tmp2[19]).FrameSurfaceExplanation;
    intl5 = tmp8(tmp2[20]).intl;
    return id(FrameSurfaceExplanation4, obj5);
  } else if (headerVisible(bottom[10]).FrameLifecycleState.NoApplication === state) {
    const obj6 = { description: intl4.string(headerVisible(bottom[20]).t.izggZO) };
    const FrameSurfaceExplanation3 = tmp8(tmp2[19]).FrameSurfaceExplanation;
    intl4 = tmp8(tmp2[20]).intl;
    return id(FrameSurfaceExplanation3, obj6);
  } else if (headerVisible(bottom[10]).FrameLifecycleState.DoesNotSupportSurface === state) {
    const obj7 = { description: intl3.string(headerVisible(bottom[20]).t["iUWcU/"]) };
    const FrameSurfaceExplanation2 = tmp8(tmp2[19]).FrameSurfaceExplanation;
    intl3 = tmp8(tmp2[20]).intl;
    return id(FrameSurfaceExplanation2, obj7);
  } else if (headerVisible(bottom[10]).FrameLifecycleState.Error === state) {
    const obj8 = { heading: intl.string(headerVisible(bottom[20]).t.VquUff), error: intl2.string(headerVisible(bottom[20]).t["Sd9D/R"]) };
    const FrameSurfaceExplanation = tmp8(tmp2[19]).FrameSurfaceExplanation;
    intl = tmp8(tmp2[20]).intl;
    intl2 = tmp8(tmp2[20]).intl;
    return id(FrameSurfaceExplanation, obj8);
  } else {
    return id(headerVisible(bottom[19]).FrameSurfaceLoading, {});
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function ClosedAppChannel(onLaunch) {
  let obj11;
  let obj4;
  const obj = react2;
  const cResult = obj.c(10);
  onLaunch = onLaunch.onLaunch;
  const applicationId = onLaunch.applicationId;
  const tmp4 = closure_7();
  const obj2 = ApplicationActionCreators;
  const data = obj2.useApplication(applicationId).data;
  if (cResult[0] === data) {
    let tmp5;
    let tmp14;
    let tmp16;
    if (cResult[1] === tmp4) {
      tmp5 = cResult[2];
    }
    let name;
    if (data != null) {
      name = data.name;
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1128).intl;
      const stringResult = intl.string(intl6.t.PPYvuv);
      cResult[3] = stringResult;
      tmp14 = stringResult;
    } else {
      tmp14 = cResult[3];
    }
    if (cResult[4] !== onLaunch) {
      const obj3 = { text: tmp14, onPress: onLaunch };
      const tmp18 = hasOwnProperty(components_Button_Button.Button, obj3);
      cResult[4] = onLaunch;
      cResult[5] = tmp18;
      tmp16 = tmp18;
    } else {
      tmp16 = cResult[5];
    }
    if (cResult[6] === tmp5) {
      if (cResult[7] === name) {
        let tmp19;
        if (cResult[8] === tmp16) {
          tmp19 = cResult[9];
        }
        return tmp19;
      }
    }
    const obj6 = { icon: tmp5, heading: name, action: tmp16 };
    const tmp21 = hasOwnProperty(FrameSurfaceState.FrameSurfaceExplanation, obj6);
    cResult[6] = tmp5;
    cResult[7] = name;
    cResult[8] = tmp16;
    cResult[9] = tmp21;
    tmp19 = tmp21;
  }
  let icon;
  if (data != null) {
    icon = data.icon;
  }
  let tmp7 = null;
  if (null != icon) {
    const obj7 = { source: obj4.getApplicationIconSource(obj11), style: tmp4.icon };
    obj11 = { id: null, icon: null, size: 64 };
    ({ id: obj5.id, icon: obj5.icon } = data);
    const tmp10 = FastImageDefault;
    obj4 = AvatarUtilsDefault;
    tmp7 = hasOwnProperty(tmp10, obj7);
  }
  cResult[0] = data;
  cResult[1] = tmp4;
  cResult[2] = tmp7;
  tmp5 = tmp7;
}) : (function ClosedAppChannel(arg0) {
  let Button;
  let applicationId;
  let intl;
  let name;
  let obj10;
  let obj3;
  let obj5;
  let onLaunch;
  ({ applicationId, onLaunch } = arg0);
  const tmp = closure_7();
  const obj = ApplicationActionCreators;
  const data = obj.useApplication(applicationId).data;
  let icon;
  const FrameSurfaceExplanation = FrameSurfaceState.FrameSurfaceExplanation;
  if (data != null) {
    icon = data.icon;
  }
  let tmp4Result = null;
  if (null != icon) {
    const obj2 = { source: obj3.getApplicationIconSource(obj5), style: tmp.icon };
    obj5 = { id: null, icon: null, size: 64 };
    ({ id: obj4.id, icon: obj4.icon } = data);
    const tmp8 = FastImageDefault;
    obj3 = AvatarUtilsDefault;
    tmp4Result = tmp4(tmp8, obj2);
  }
  const obj6 = { icon: tmp4Result, heading: name, action: hasOwnProperty(Button, obj10) };
  name = undefined;
  if (data != null) {
    name = data.name;
  }
  obj10 = { text: intl.string(intl6.t.PPYvuv), onPress: onLaunch };
  Button = tmp2(5244).Button;
  intl = tmp2(1128).intl;
  return hasOwnProperty(FrameSurfaceExplanation, obj6);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppChannel(arg0) {
  let applicationId;
  let channel;
  let obj = channel(576);
  const cResult = obj.c(15);
  const tmp = channel;
  ({ applicationId, channel } = arg0);
  if (cResult[0] === channel.guild_id) {
    let tmp4;
    let tmp5;
    if (cResult[1] === channel.id) {
      tmp4 = cResult[2];
    }
    if (cResult[3] !== channel.id) {
      const fn = function p() {
        const obj = openChannelSecondaryViewChat;
        return -1 !== obj.getChannelSecondaryViewChatIndex(channel.id);
      };
      cResult[3] = channel.id;
      cResult[4] = fn;
      tmp5 = fn;
    } else {
      tmp5 = cResult[4];
    }
    if (cResult[5] === applicationId) {
      if (cResult[6] === tmp4) {
        let tmp6;
        let tmp9;
        if (cResult[7] === tmp5) {
          tmp6 = cResult[8];
        }
        const tmp8 = useAppChannelClosedDefault(tmp6);
        const launch = tmp8.launch;
        if (tmp8.isClosed) {
          if (cResult[9] === applicationId) {
            let tmp16;
            if (cResult[10] === launch) {
              tmp16 = cResult[11];
            }
            tmp9 = tmp16;
          }
          const obj2 = { applicationId, onLaunch: launch };
          const tmp19 = closure_5(closure_10, obj2);
          cResult[9] = applicationId;
          cResult[10] = launch;
          cResult[11] = tmp19;
          tmp16 = tmp19;
        } else {
          if (cResult[12] === arg0) {
            if (cResult[13] === tmp4) {
              tmp9 = cResult[14];
            }
          }
          const obj3 = { surface: tmp4 };
          const merged = Object.assign(arg0);
          const tmp15 = closure_5(closure_9, obj3);
          cResult[12] = arg0;
          cResult[13] = tmp4;
          cResult[14] = tmp15;
          tmp9 = tmp15;
        }
        return tmp9;
      }
    }
    const obj4 = { applicationId, surface: tmp4, shouldStartClosed: tmp5 };
    cResult[5] = applicationId;
    cResult[6] = tmp4;
    cResult[7] = tmp5;
    cResult[8] = obj4;
    tmp6 = obj4;
  }
  const obj5 = { type: tmp(5626).EmbeddedSurfaceType.APP_CHANNEL, channelId: channel.id, guildId: channel.guild_id };
  cResult[0] = channel.guild_id;
  cResult[1] = channel.id;
  cResult[2] = obj5;
  tmp4 = obj5;
}) : (function AppChannel(arg0) {
  let applicationId;
  let channel;
  let tmp4Result;
  ({ applicationId, channel } = arg0);
  const items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  const memo = react.useMemo(() => {
    const obj = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, channelId: channel.id, guildId: channel.guild_id };
    return obj;
  }, items);
  let obj = {
    applicationId,
    surface: memo,
    shouldStartClosed() {
      const obj = openChannelSecondaryViewChat;
      return -1 !== obj.getChannelSecondaryViewChatIndex(channel.id);
    }
  };
  const tmp2 = useAppChannelClosedDefault(obj);
  if (tmp2.isClosed) {
    const obj2 = { applicationId, onLaunch: tmp3 };
    tmp4Result = tmp4(closure_10, obj2);
  } else {
    const obj3 = { surface: memo };
    const merged = Object.assign(arg0);
    tmp4Result = tmp4(closure_9, obj3);
  }
  return tmp4Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectedAppChannel(channel) {
  let intl;
  let intl2;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(6);
  channel = channel.channel;
  let application_id = channel.application_id;
  const obj2 = conjureDMAppChannel;
  if (application_id == null) {
    application_id = obj2.useDMAppChannelApplicationId(channel);
  }
  useChannelAppFrameTeardownDefault(channel);
  const tmpResult = useChannelContentGate;
  const channelContentGate = tmpResult.useChannelContentGate(channel.guild_id, channel);
  if (null != channelContentGate) {
    let tmp14;
    if (cResult[0] !== channelContentGate) {
      const tmpResult2 = useChannelContentGate;
      const result = tmpResult2.renderChannelContentGate(channelContentGate);
      cResult[0] = channelContentGate;
      cResult[1] = result;
      tmp14 = result;
    } else {
      tmp14 = cResult[1];
    }
    tmp6 = tmp14;
  } else if (null == application_id) {
    let tmp11;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { heading: intl.string(intl6.t.tU5fiM), description: intl2.string(intl6.t.E94mJf) };
      const FrameSurfaceExplanation = tmp(18062).FrameSurfaceExplanation;
      intl = tmp(1128).intl;
      intl2 = tmp(1128).intl;
      const tmp13 = hasOwnProperty(FrameSurfaceExplanation, obj3);
      cResult[2] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[2];
    }
    tmp6 = tmp11;
  } else {
    if (cResult[3] === application_id) {
      if (cResult[4] === channel) {
        tmp6 = cResult[5];
      }
    }
    const obj4 = { applicationId: application_id, channel };
    const tmp9 = hasOwnProperty(closure_11, obj4);
    cResult[3] = application_id;
    cResult[4] = channel;
    cResult[5] = tmp9;
    tmp6 = tmp9;
  }
  return tmp6;
}) : (function ConnectedAppChannel(channel) {
  let intl;
  let intl2;
  let result;
  channel = channel.channel;
  let application_id = channel.application_id;
  const obj = conjureDMAppChannel;
  if (application_id == null) {
    application_id = obj.useDMAppChannelApplicationId(channel);
  }
  useChannelAppFrameTeardownDefault(channel);
  const tmpResult = useChannelContentGate;
  const channelContentGate = tmpResult.useChannelContentGate(channel.guild_id, channel);
  if (null != channelContentGate) {
    const tmpResult2 = useChannelContentGate;
    result = tmpResult2.renderChannelContentGate(channelContentGate);
  } else if (null == application_id) {
    const obj2 = { heading: intl.string(intl6.t.tU5fiM), description: intl2.string(intl6.t.E94mJf) };
    const FrameSurfaceExplanation = tmp(18062).FrameSurfaceExplanation;
    intl = tmp(1128).intl;
    intl2 = tmp(1128).intl;
    result = hasOwnProperty(FrameSurfaceExplanation, obj2);
  } else {
    const obj3 = { applicationId: application_id, channel };
    result = hasOwnProperty(closure_11, obj3);
  }
  return result;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/app_channels/native/AppChannel.tsx");

export default tmp3;
