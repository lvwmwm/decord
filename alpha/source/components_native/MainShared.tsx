// Module ID: 19192
// Function ID: 19193
// Name: MainShared
// Dependencies: [19, 4861, 5820, 21, 504, 9984, 5188, 10228, 19193, 1378, 6080, 1112, 19195, 15786, 2, 19196, 19197, 19198, 19199, 19207, 19211, 19265]
// Exports: PictureInPictureGlobalContainer, useAppKeyCommands, useScreenReaderEnabled

// Module 19192 (MainShared)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1112 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5188 */;
import KeyCommands from "KeyCommands" /* 6080 */;
import usePipVideoOrStream from "usePipVideoOrStream" /* 9984 */;
import VoicePanelUtils from "VoicePanelUtils" /* 10228 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 15786 */;
import PictureInPictureGlobalDefault from "PictureInPictureGlobal" /* 19193 */;
import BurstReactionAnimationContainerDefault from "BurstReactionAnimationContainer" /* 19196 */;
import NativeMenuPresenterDefault from "NativeMenuPresenter" /* 19197 */;
import components_ActionSheetPresenterDefault from "components/ActionSheetPresenter" /* 19198 */;
import AlertsDefault from "Alerts" /* 19199 */;
import SoundPlayerDefault from "SoundPlayer" /* 19207 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19211 */;
import AppToastContainerDefault from "AppToastContainer" /* 19265 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5820 */;
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
