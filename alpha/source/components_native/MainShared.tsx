// Module ID: 17616
// Function ID: 17617
// Name: MainShared
// Dependencies: [19, 2065, 5110, 21, 558, 576, 504, 10835, 4976, 11026, 17617, 1382, 5373, 1126, 17619, 14667, 2, 17620, 17621, 17622, 17623, 17631, 17635, 17675]

// Module 17616 (MainShared)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4976 */;
import KeyCommands from "KeyCommands" /* 5373 */;
import usePipVideoOrStream from "usePipVideoOrStream" /* 10835 */;
import VoicePanelUtils from "VoicePanelUtils" /* 11026 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14667 */;
import PictureInPictureGlobalDefault from "PictureInPictureGlobal" /* 17617 */;
import showLaunchPadDefault from "showLaunchPad" /* 17619 */;
import BurstReactionAnimationContainerDefault from "BurstReactionAnimationContainer" /* 17620 */;
import NativeMenuPresenterDefault from "NativeMenuPresenter" /* 17621 */;
import components_ActionSheetPresenterDefault from "components/ActionSheetPresenter" /* 17622 */;
import AlertsDefault from "Alerts" /* 17623 */;
import SoundPlayerDefault from "SoundPlayer" /* 17631 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 17635 */;
import AppToastContainerDefault from "AppToastContainer" /* 17675 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5110 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function PictureInPictureGlobalContainer() {
  let channel;
  let channelId;
  let tmp4;
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, RTCConnectionStore];
    const fn = function l() {
      return channel.getChannel(channelId.getChannelId());
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { isActivityViewFocused: false };
    cResult[2] = obj2;
    tmp9 = obj2;
  } else {
    tmp9 = cResult[2];
  }
  const tmpResult4 = usePipVideoOrStream;
  const hasPipParticipant = tmpResult4.useHasPipParticipant(tmp9);
  const tmpResult5 = NavigationRouteUtils;
  const isModalOpen = tmpResult5.useIsModalOpen();
  VoicePanelUtils;
  let tmp14 = null;
  if (null != stateFromStores) {
    tmp14 = null;
    if (hasPipParticipant) {
      tmp14 = null;
      if (!isModalOpen) {
        tmp14 = null;
        if (!tmp13) {
          let tmp15;
          if (cResult[3] !== stateFromStores) {
            const tmp18 = jsx(PictureInPictureGlobalDefault, { channel: stateFromStores });
            cResult[3] = stateFromStores;
            cResult[4] = tmp18;
            tmp15 = tmp18;
          } else {
            tmp15 = cResult[4];
          }
          tmp14 = tmp15;
        }
      }
    }
  }
  return tmp14;
}) : (function PictureInPictureGlobalContainer() {
  let channel;
  let channelId;
  const items = [ChannelStore, RTCConnectionStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId.getChannelId()));
  const obj2 = usePipVideoOrStream;
  const hasPipParticipant = obj2.useHasPipParticipant({ isActivityViewFocused: false });
  const obj3 = NavigationRouteUtils;
  const isModalOpen = obj3.useIsModalOpen();
  VoicePanelUtils;
  let tmp7 = null;
  if (null != stateFromStores) {
    tmp7 = null;
    if (hasPipParticipant) {
      tmp7 = null;
      if (!isModalOpen) {
        tmp7 = null;
        if (!tmp6) {
          tmp7 = jsx(PictureInPictureGlobalDefault, { channel: stateFromStores });
        }
      }
    }
  }
  return tmp7;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAppKeyCommands() {
  let first;
  let intl;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = PlatformUtils;
    const isAndroidResult = tmpResult.isAndroid();
    const KeyModifierFlags = tmp(5373).KeyModifierFlags;
    const obj2 = {
      input: "k",
      modifierFlags: isAndroidResult ? KeyModifierFlags.keyModifierControl : KeyModifierFlags.keyModifierCommand,
      eventName: "keyCommandShowQuickSwitcher",
      discoverabilityTitle: intl.string(intl2.t.yYsRlD),
      onKeyCommand() {
          showLaunchPadDefault();
          return true;
        }
    };
    intl = tmp(1126).intl;
    const items = [obj2];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  const tmpResult2 = KeyCommands;
  const keyCommands = tmpResult2.useKeyCommands(first);
}) : (function useAppKeyCommands() {
  const memo = react.useMemo(() => {
    let intl;
    const obj = PlatformUtils;
    const isAndroidResult = obj.isAndroid();
    const KeyModifierFlags = KeyCommands.KeyModifierFlags;
    const obj2 = {
      input: "k",
      modifierFlags: isAndroidResult ? KeyModifierFlags.keyModifierControl : KeyModifierFlags.keyModifierCommand,
      eventName: "keyCommandShowQuickSwitcher",
      discoverabilityTitle: intl.string(intl2.t.yYsRlD),
      onKeyCommand() {
        closure_1_1(closure_1_2[14])();
        return true;
      }
    };
    intl = tmp(tmp2[13]).intl;
    const items = [obj2];
    return items;
  }, []);
  let obj = KeyCommands;
  const keyCommands = obj.useKeyCommands(memo);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useScreenReaderEnabled() {
  let tmp2;
  let tmp3;
  let obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      const obj = AccessibilityManagerDefault;
      const result = obj.checkScreenreaderEnabled();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp2 = fn;
    tmp3 = items;
  } else {
    [tmp2, tmp3] = cResult;
  }
  const effect = react.useEffect(tmp2, tmp3);
}) : (function useScreenReaderEnabled() {
  const effect = react.useEffect(() => {
    const obj = AccessibilityManagerDefault;
    const result = obj.checkScreenreaderEnabled();
  }, []);
});
let result = size.fileFinishedImporting("components_native/MainShared.tsx");

export const BurstReactionAnimationContainer = BurstReactionAnimationContainerDefault;
export const MenuContainer = NativeMenuPresenterDefault;
export const ActionSheetContainer = components_ActionSheetPresenterDefault;
export const Alerts = AlertsDefault;
export const SoundPlayer = SoundPlayerDefault;
export const MainViewTooltipActionSheetsV2 = MainViewTooltipActionSheetsV2Default;
export const ToastContainer = AppToastContainerDefault;
export const PictureInPictureGlobalContainer = tmp2;
export const useAppKeyCommands = tmp3;
export const useScreenReaderEnabled = tmp4;
