// Module ID: 11101
// Function ID: 11102
// Name: ChannelCallMicButton
// Dependencies: [19, 5111, 21, 558, 576, 7056, 504, 11102, 11103, 1126, 11106, 11107, 587, 10841, 2]

// Module 11101 (ChannelCallMicButton)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import useMuteStatesDefault from "useMuteStates" /* 7056 */;
import CallBarActionAll from "CallBarAction" /* 10841 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11102 */;
import VoicePanelRiveMicButton from "VoicePanelRiveMicButton" /* 11103 */;
import react from "react" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 5111 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelCallMicButton(channel) {
  let awaitingRemoteSessionInfo;
  let disableTint;
  let isSmallSize;
  let mute;
  let onPress;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(16);
  ({ isSmallSize, disableTint } = channel);
  let tmp4 = undefined !== disableTint;
  channel = channel.channel;
  if (tmp4) {
    tmp4 = disableTint;
  }
  const tmp6 = useMuteStatesDefault(channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameConsoleStore];
    const fn = function s() {
      return null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  if (cResult[2] === stateFromStores) {
    let tmp11;
    let tmp13;
    let tmp16;
    if (cResult[3] === tmp6) {
      tmp11 = cResult[4];
    }
    ({ mute, onPress } = tmp11);
    if (cResult[5] !== mute) {
      const tmp15 = jsx(VoicePanelRiveMicButton.VoicePanelRiveMicButton, { muted: mute });
      cResult[5] = mute;
      cResult[6] = tmp15;
      tmp13 = tmp15;
    } else {
      tmp13 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(intl2.t.B3zz0G);
      cResult[7] = stringResult;
      tmp16 = stringResult;
    } else {
      tmp16 = cResult[7];
    }
    const tmp5Result = importDefault(mute ? 11106 : 11107);
    if (!tmp4) {
      tmp4 = mute;
    }
    let RED_400;
    if (mute) {
      RED_400 = tmp5(587).unsafe_rawColors.RED_400;
    }
    if (cResult[8] === stateFromStores) {
      if (cResult[9] === isSmallSize) {
        if (cResult[10] === tmp13) {
          if (cResult[11] === onPress) {
            if (cResult[12] === tmp5Result) {
              if (cResult[13] === tmp4) {
                let tmp20;
                if (cResult[14] === RED_400) {
                  tmp20 = cResult[15];
                }
                return tmp20;
              }
            }
          }
        }
      }
    }
    const tmp23 = jsx(CallBarActionAll.ToggledActionButton, { appearsDisabled: stateFromStores, accessibilityLabel: tmp16, onPress, source: tmp5Result, isActive: tmp4, isSmallSize, lottieComponent: tmp13, tintColor: RED_400 });
    cResult[8] = stateFromStores;
    cResult[9] = isSmallSize;
    cResult[10] = tmp13;
    cResult[11] = onPress;
    cResult[12] = tmp5Result;
    cResult[13] = tmp4;
    cResult[14] = RED_400;
    cResult[15] = tmp23;
    tmp20 = tmp23;
  }
  const tmpResult2 = VoiceActionUtils;
  const muteHandler = tmpResult2.createMuteHandler(tmp6, stateFromStores);
  cResult[2] = stateFromStores;
  cResult[3] = tmp6;
  cResult[4] = muteHandler;
  tmp11 = muteHandler;
}) : (function ChannelCallMicButton(disableTint) {
  let RED_400;
  let awaitingRemoteSessionInfo;
  let channel;
  let intl;
  let isSmallSize;
  let flag = disableTint.disableTint;
  ({ channel, isSmallSize } = disableTint);
  if (flag === undefined) {
    flag = false;
  }
  let mute;
  const tmp3 = useMuteStatesDefault(channel);
  const items = [GameConsoleStore];
  const obj = mute(504);
  const stateFromStores = obj.useStateFromStores(items, () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const obj2 = mute(11102);
  const muteHandler = obj2.createMuteHandler(tmp3, stateFromStores);
  mute = muteHandler.mute;
  const items1 = [mute];
  const onPress = muteHandler.onPress;
  const memo = react.useMemo(() => jsx(VoicePanelRiveMicButton.VoicePanelRiveMicButton, { muted: mute }), items1);
  const obj3 = { appearsDisabled: stateFromStores, accessibilityLabel: intl.string(mute(1126).t.B3zz0G), onPress, source: importDefault(mute ? 11106 : 11107), isActive: flag, isSmallSize, lottieComponent: memo, tintColor: RED_400 };
  const ToggledActionButton = CallBarActionAll.ToggledActionButton;
  intl = mute(1126).intl;
  const tmp7 = jsx;
  if (!flag) {
    flag = mute;
  }
  RED_400 = undefined;
  if (mute) {
    RED_400 = tmp(587).unsafe_rawColors.RED_400;
  }
  return tmp7(ToggledActionButton, obj3);
});
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallMicButton.tsx");

export const ChannelCallMicButton = tmp2;
