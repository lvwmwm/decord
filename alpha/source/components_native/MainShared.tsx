// Module ID: 18947
// Function ID: 18948
// Name: MainShared
// Dependencies: [19, 4858, 5759, 21, 504, 11671, 5193, 11822, 18948, 1376, 6018, 1114, 18950, 16222, 2, 18951, 18952, 18953, 18954, 18962, 18966, 19004]
// Exports: PictureInPictureGlobalContainer, useAppKeyCommands, useScreenReaderEnabled

// Module 18947 (MainShared)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5193 */;
import KeyCommands from "KeyCommands" /* 6018 */;
import usePipVideoOrStream from "usePipVideoOrStream" /* 11671 */;
import VoicePanelUtils from "VoicePanelUtils" /* 11822 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 16222 */;
import PictureInPictureGlobalDefault from "PictureInPictureGlobal" /* 18948 */;
import BurstReactionAnimationContainerDefault from "BurstReactionAnimationContainer" /* 18951 */;
import NativeMenuPresenterDefault from "NativeMenuPresenter" /* 18952 */;
import components_ActionSheetPresenterDefault from "components/ActionSheetPresenter" /* 18953 */;
import AlertsDefault from "Alerts" /* 18954 */;
import SoundPlayerDefault from "SoundPlayer" /* 18962 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 18966 */;
import AppToastContainerDefault from "AppToastContainer" /* 19004 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5759 */;
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
