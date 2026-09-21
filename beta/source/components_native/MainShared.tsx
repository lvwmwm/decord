// Module ID: 17380
// Function ID: 17381
// Name: MainShared
// Dependencies: [19, 2045, 4781, 21, 558, 568, 504, 9655, 4616, 10183, 17381, 1368, 5184, 1119, 17383, 14717, 2, 17384, 17385, 17386, 17387, 17395, 17396, 17426]

// Module 17380 (MainShared)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4616 */;
import KeyCommands from "KeyCommands" /* 5184 */;
import usePipVideoOrStream from "usePipVideoOrStream" /* 9655 */;
import VoicePanelUtils from "VoicePanelUtils" /* 10183 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14717 */;
import PictureInPictureGlobalDefault from "PictureInPictureGlobal" /* 17381 */;
import showLaunchPadDefault from "showLaunchPad" /* 17383 */;
import BurstReactionAnimationContainerDefault from "BurstReactionAnimationContainer" /* 17384 */;
import NativeMenuPresenterDefault from "NativeMenuPresenter" /* 17385 */;
import components_ActionSheetPresenterDefault from "components/ActionSheetPresenter" /* 17386 */;
import AlertsDefault from "Alerts" /* 17387 */;
import SoundPlayerDefault from "SoundPlayer" /* 17395 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 17396 */;
import ToastContainerDefault from "ToastContainer" /* 17426 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4781 */;

require = fn;
const jsx = fn(21).jsx;
fn(558);
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp2 = dependencyMap;
  const cResult = c.c(5);
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
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { isActivityViewFocused: false };
    cResult[2] = obj2;
    let tmp9 = obj2;
  } else {
    tmp9 = cResult[2];
  }
  const tmpResult = initialize;
  const hasPipParticipant = usePipVideoOrStream.useHasPipParticipant(tmp9);
  const tmpResult4 = usePipVideoOrStream;
  const isModalOpen = NavigationRouteUtils.useIsModalOpen();
  VoicePanelUtils;
  let tmp14 = null;
  if (null != stateFromStores) {
    tmp14 = null;
    if (hasPipParticipant) {
      tmp14 = null;
      if (!isModalOpen) {
        tmp14 = null;
        if (!tmp13) {
          if (cResult[3] !== stateFromStores) {
            const obj3 = { channel: stateFromStores };
            tmp2 = jsx(PictureInPictureGlobalDefault, { channel: stateFromStores });
            cResult[3] = stateFromStores;
            cResult[4] = tmp2;
          }
        }
      }
    }
  }
  return tmp14;
}) : (() => {
  const items = [ChannelStore, RTCConnectionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => channel.getChannel(channelId.getChannelId()));
  const hasPipParticipant = usePipVideoOrStream.useHasPipParticipant({ isActivityViewFocused: false });
  const isModalOpen = NavigationRouteUtils.useIsModalOpen();
  VoicePanelUtils;
  let tmp7 = null;
  if (null != stateFromStores) {
    tmp7 = null;
    if (hasPipParticipant) {
      tmp7 = null;
      if (!isModalOpen) {
        tmp7 = null;
        if (!tmp6) {
          const obj4 = { channel: stateFromStores };
          tmp7 = jsx(PictureInPictureGlobalDefault, { channel: stateFromStores });
        }
      }
    }
  }
  return tmp7;
});
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = tmp(1368);
    tmp(5184).KeyModifierFlags;
    const isAndroidResult = tmp(1368).isAndroid();
    const KeyModifierFlags = { input: "k", modifierFlags: null, eventName: "keyCommandShowQuickSwitcher", discoverabilityTitle: null, onKeyCommand: null };
    KeyModifierFlags.modifierFlags = tmp(1368).isAndroid() ? KeyModifierFlags.keyModifierControl : KeyModifierFlags.keyModifierCommand;
    const intl = tmp(1119).intl;
    KeyModifierFlags.discoverabilityTitle = intl.string(tmp(1119).t.yYsRlD);
    KeyModifierFlags.onKeyCommand = function onKeyCommand() {
      showLaunchPadDefault();
      return true;
    };
    const items = [KeyModifierFlags];
    cResult[0] = items;
    const tmp5 = tmp(1368).isAndroid() ? KeyModifierFlags.keyModifierControl : KeyModifierFlags.keyModifierCommand;
  } else {
    const keyCommands = tmp(5184).useKeyCommands(cResult[0]);
  }
}) : (() => {
  const memo = noop.useMemo(() => {
    const KeyModifierFlags = KeyCommands.KeyModifierFlags;
    const obj2 = { input: "k", modifierFlags: PlatformUtils.isAndroid() ? KeyModifierFlags.keyModifierControl : KeyModifierFlags.keyModifierCommand, eventName: "keyCommandShowQuickSwitcher", discoverabilityTitle: null, onKeyCommand: null };
    const intl = tmp(1119).intl;
    obj2.discoverabilityTitle = intl.string(util.t.yYsRlD);
    obj2.onKeyCommand = function onKeyCommand() {
      closure_1_1(dependencyMap[14])();
      return true;
    };
    const items = [obj2];
    return items;
  }, []);
  const keyCommands = KeyCommands.useKeyCommands(memo);
});
const size = fn(2);
let result = size.fileFinishedImporting("components_native/MainShared.tsx");

export const BurstReactionAnimationContainer = BurstReactionAnimationContainerDefault;
export const MenuContainer = NativeMenuPresenterDefault;
export const ActionSheetContainer = components_ActionSheetPresenterDefault;
export const Alerts = AlertsDefault;
export const SoundPlayer = SoundPlayerDefault;
export const MainViewTooltipActionSheetsV2 = MainViewTooltipActionSheetsV2Default;
export const ToastContainer = ToastContainerDefault;
export const PictureInPictureGlobalContainer = tmp2;
export const useAppKeyCommands = tmp3;
export const useScreenReaderEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      const result = AccessibilityManagerDefault.checkScreenreaderEnabled();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp2 = fn;
    tmp3 = items;
  } else {
    [tmp2, tmp3] = cResult;
  }
  const effect = noop.useEffect(tmp2, tmp3);
}) : (() => {
  const effect = noop.useEffect(() => {
    const result = AccessibilityManagerDefault.checkScreenreaderEnabled();
  }, []);
});
