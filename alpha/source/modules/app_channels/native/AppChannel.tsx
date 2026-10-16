// Module ID: 17674
// Function ID: 17675
// Name: AppChannel
// Dependencies: [19, 17, 21, 5154, 558, 576, 1899, 6889, 11636, 7263, 17675, 11633, 11637, 7169, 5165, 11638, 11643, 17678, 17681, 1128, 6297, 17682, 2]

// Module 17674 (AppChannel)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl6 from "intl" /* 1128 */;
import useSystemKeyboardHeightDefault from "useSystemKeyboardHeight" /* 1899 */;
import transitionToChannel from "transitionToChannel" /* 5165 */;
import conjureDMAppChannel from "conjureDMAppChannel" /* 6297 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6889 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 7263 */;
import useDisallowSwipeExitDefault from "useDisallowSwipeExit" /* 11633 */;
import getInlineFramePresentationDefault from "getInlineFramePresentation" /* 11636 */;
import useInlineFrameOAuthNavigationDefault from "useInlineFrameOAuthNavigation" /* 11637 */;
import FrameRenderTargetDefault from "FrameRenderTarget" /* 11638 */;
import useFrameLifecycleDefault from "useFrameLifecycle" /* 17675 */;
import useChannelAppFrameTeardownDefault from "useChannelAppFrameTeardown" /* 17682 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5154 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let transitionToMessageResult;

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
  let headerVisible;
  let id;
  let left;
  let right;
  let state;
  let top;
  let obj = id(576);
  const cResult = obj.c(30);
  ({ applicationId, channel, headerVisible } = arg0);
  closure_7(useSystemKeyboardHeightDefault());
  ({ top, bottom, left, right } = useSafeAreaInsetsKeyboardAwareDefault().insets);
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
              ({ frame, state } = useFrameLifecycleDefault(tmp10));
              useFrameLifecycleDefault(tmp10);
              const tmp5Result = useDisallowSwipeExitDefault;
              tmp5Result(state === id(17675).FrameLifecycleState.Launched);
              let tmp15 = null;
              const tmp5Result3 = useInlineFrameOAuthNavigationDefault;
              if (state === id(17675).FrameLifecycleState.Launched) {
                tmp15 = applicationId;
              }
              tmp5Result3(tmp15);
              const tmpResult = id(7169);
              const isConjureChannelCandidate = tmpResult.useIsConjureChannelCandidate(channel, "AppChannel");
              id = channel.id;
              if (cResult[12] !== id) {
                class U {
                  constructor(arg0) {
                    obj = closure_0(closure_2[14]);
                    transitionToMessageResult = obj.transitionToMessage(id, arg0.id);
                    return;
                  }
                }
                cResult[12] = id;
                cResult[13] = U;
              } else {
                class U {
                  constructor(arg0) {
                    obj = closure_0(closure_2[14]);
                    transitionToMessageResult = obj.transitionToMessage(id, arg0.id);
                    return;
                  }
                }
              }
              if (id(17675).FrameLifecycleState.Launched === state) {
                class U {
                  constructor(arg0) {
                    obj = closure_0(closure_2[14]);
                    transitionToMessageResult = obj.transitionToMessage(id, arg0.id);
                    return;
                  }
                }
                const obj3 = { frameId: frame.id, level: id(11643).FrameStackLevel.WithinAppContent, presentation: tmp7 };
                const tmp5Result4 = FrameRenderTargetDefault;
                cResult[14] = frame.id;
                cResult[15] = tmp7;
                cResult[16] = closure_5(tmp5Result4, obj3);
                const tmp22 = closure_5(tmp5Result4, obj3);
              } else {
                class U {
                  constructor(arg0) {
                    obj = closure_0(closure_2[14]);
                    transitionToMessageResult = obj.transitionToMessage(id, arg0.id);
                    return;
                  }
                }
              }
            }
            const obj4 = { applicationId, surface: tmp9 };
            cResult[9] = applicationId;
            cResult[10] = tmp9;
            cResult[11] = obj4;
            tmp10 = obj4;
          }
          const obj5 = { type: id(7263).EmbeddedSurfaceType.APP_CHANNEL, channelId: null, guildId: null };
          ({ id: obj2.channelId, guild_id: obj2.guildId } = channel);
          cResult[6] = channel.guild_id;
          cResult[7] = channel.id;
          cResult[8] = obj5;
          tmp9 = obj5;
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
  const tmp3 = closure_7(flag(top[6])());
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
  const items2 = [id];
  const tmp8Result = channel(top[13]);
  const isConjureChannelCandidate = tmp8Result.useIsConjureChannelCandidate(channel, "AppChannel");
  const callback = obj.useCallback((id) => {
    const obj = transitionToChannel;
    obj.transitionToMessage(id, id.id);
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
      const FrameSurfaceExplanation = tmp(17681).FrameSurfaceExplanation;
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
    const FrameSurfaceExplanation = tmp(17681).FrameSurfaceExplanation;
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
