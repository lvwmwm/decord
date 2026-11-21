// Module ID: 19037
// Function ID: 19038
// Name: MainShared
// Dependencies: [19, 4762, 5654, 21, 504, 10651, 5089, 10854, 19038, 1378, 5925, 1112, 19040, 15644, 2, 19041, 19042, 19043, 19044, 19052, 19056, 19110]
// Exports: PictureInPictureGlobalContainer, useAppKeyCommands, useScreenReaderEnabled

// Module 19037 (MainShared)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1112 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5089 */;
import KeyCommands from "KeyCommands" /* 5925 */;
import usePipVideoOrStream from "usePipVideoOrStream" /* 10651 */;
import VoicePanelUtils from "VoicePanelUtils" /* 10854 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 15644 */;
import PictureInPictureGlobalDefault from "PictureInPictureGlobal" /* 19038 */;
import BurstReactionAnimationContainerDefault from "BurstReactionAnimationContainer" /* 19041 */;
import NativeMenuPresenterDefault from "NativeMenuPresenter" /* 19042 */;
import components_ActionSheetPresenterDefault from "components/ActionSheetPresenter" /* 19043 */;
import AlertsDefault from "Alerts" /* 19044 */;
import SoundPlayerDefault from "SoundPlayer" /* 19052 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19056 */;
import AppToastContainerDefault from "AppToastContainer" /* 19110 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5654 */;
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
