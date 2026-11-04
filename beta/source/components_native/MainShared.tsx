// Module ID: 19003
// Function ID: 19004
// Name: MainShared
// Dependencies: [19, 4863, 5764, 21, 504, 11709, 5198, 11861, 19004, 1375, 6023, 1113, 19006, 16267, 2, 19007, 19008, 19009, 19010, 19018, 19022, 19060]
// Exports: PictureInPictureGlobalContainer, useAppKeyCommands, useScreenReaderEnabled

// Module 19003 (MainShared)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5198 */;
import KeyCommands from "KeyCommands" /* 6023 */;
import usePipVideoOrStream from "usePipVideoOrStream" /* 11709 */;
import VoicePanelUtils from "VoicePanelUtils" /* 11861 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 16267 */;
import PictureInPictureGlobalDefault from "PictureInPictureGlobal" /* 19004 */;
import BurstReactionAnimationContainerDefault from "BurstReactionAnimationContainer" /* 19007 */;
import NativeMenuPresenterDefault from "NativeMenuPresenter" /* 19008 */;
import components_ActionSheetPresenterDefault from "components/ActionSheetPresenter" /* 19009 */;
import AlertsDefault from "Alerts" /* 19010 */;
import SoundPlayerDefault from "SoundPlayer" /* 19018 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19022 */;
import AppToastContainerDefault from "AppToastContainer" /* 19060 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5764 */;
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
