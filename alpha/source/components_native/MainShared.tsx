// Module ID: 19099
// Function ID: 19100
// Name: MainShared
// Dependencies: [19, 4672, 5564, 21, 504, 10611, 4999, 10814, 19100, 1380, 5833, 1113, 19102, 15571, 2, 19103, 19104, 19105, 19106, 19114, 19118, 19172]
// Exports: PictureInPictureGlobalContainer, useAppKeyCommands, useScreenReaderEnabled

// Module 19099 (MainShared)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4999 */;
import KeyCommands from "KeyCommands" /* 5833 */;
import usePipVideoOrStream from "usePipVideoOrStream" /* 10611 */;
import VoicePanelUtils from "VoicePanelUtils" /* 10814 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 15571 */;
import PictureInPictureGlobalDefault from "PictureInPictureGlobal" /* 19100 */;
import BurstReactionAnimationContainerDefault from "BurstReactionAnimationContainer" /* 19103 */;
import NativeMenuPresenterDefault from "NativeMenuPresenter" /* 19104 */;
import components_ActionSheetPresenterDefault from "components/ActionSheetPresenter" /* 19105 */;
import AlertsDefault from "Alerts" /* 19106 */;
import SoundPlayerDefault from "SoundPlayer" /* 19114 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19118 */;
import AppToastContainerDefault from "AppToastContainer" /* 19172 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4672 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5564 */;
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
