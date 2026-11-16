// Module ID: 19783
// Function ID: 19784
// Name: MainShared
// Dependencies: [19, 5155, 6061, 21, 504, 12723, 5482, 11950, 19784, 1380, 6323, 1113, 19786, 16886, 2, 19787, 19788, 19789, 19790, 19798, 19802, 19856]
// Exports: PictureInPictureGlobalContainer, useAppKeyCommands, useScreenReaderEnabled

// Module 19783 (MainShared)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5482 */;
import KeyCommands from "KeyCommands" /* 6323 */;
import VoicePanelUtils from "VoicePanelUtils" /* 11950 */;
import usePipVideoOrStream from "usePipVideoOrStream" /* 12723 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 16886 */;
import PictureInPictureGlobalDefault from "PictureInPictureGlobal" /* 19784 */;
import BurstReactionAnimationContainerDefault from "BurstReactionAnimationContainer" /* 19787 */;
import NativeMenuPresenterDefault from "NativeMenuPresenter" /* 19788 */;
import components_ActionSheetPresenterDefault from "components/ActionSheetPresenter" /* 19789 */;
import AlertsDefault from "Alerts" /* 19790 */;
import SoundPlayerDefault from "SoundPlayer" /* 19798 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19802 */;
import AppToastContainerDefault from "AppToastContainer" /* 19856 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import RTCConnectionStore from "RTCConnectionStore" /* 6061 */;
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
