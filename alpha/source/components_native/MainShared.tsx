// Module ID: 19278
// Function ID: 19279
// Name: MainShared
// Dependencies: [19, 4990, 5898, 21, 504, 11906, 5322, 12058, 19279, 1377, 6158, 1113, 19281, 16512, 2, 19282, 19283, 19284, 19285, 19293, 19297, 19336]
// Exports: PictureInPictureGlobalContainer, useAppKeyCommands, useScreenReaderEnabled

// Module 19278 (MainShared)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5322 */;
import KeyCommands from "KeyCommands" /* 6158 */;
import usePipVideoOrStream from "usePipVideoOrStream" /* 11906 */;
import VoicePanelUtils from "VoicePanelUtils" /* 12058 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 16512 */;
import PictureInPictureGlobalDefault from "PictureInPictureGlobal" /* 19279 */;
import BurstReactionAnimationContainerDefault from "BurstReactionAnimationContainer" /* 19282 */;
import NativeMenuPresenterDefault from "NativeMenuPresenter" /* 19283 */;
import components_ActionSheetPresenterDefault from "components/ActionSheetPresenter" /* 19284 */;
import AlertsDefault from "Alerts" /* 19285 */;
import SoundPlayerDefault from "SoundPlayer" /* 19293 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19297 */;
import AppToastContainerDefault from "AppToastContainer" /* 19336 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5898 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("components_native/MainShared.tsx");

export const BurstReactionAnimationContainer = BurstReactionAnimationContainerDefault;
export const MenuContainer = NativeMenuPresenterDefault;
export const ActionSheetContainer = components_ActionSheetPresenterDefault;
export const Alerts = AlertsDefault;
export const SoundPlayer = SoundPlayerDefault;
export const MainViewTooltipActionSheetsV2 = MainViewTooltipActionSheetsV2Default;
export const ToastContainer = AppToastContainerDefault;
export function PictureInPictureGlobalContainer() {
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
}
export function useAppKeyCommands() {
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
        closure_1_1(closure_1_2[12])();
        return true;
      }
    };
    intl = tmp(tmp2[11]).intl;
    const items = [obj2];
    return items;
  }, []);
  let obj = KeyCommands;
  const keyCommands = obj.useKeyCommands(memo);
}
export function useScreenReaderEnabled() {
  const effect = react.useEffect(() => {
    const obj = AccessibilityManagerDefault;
    const result = obj.checkScreenreaderEnabled();
  }, []);
}
