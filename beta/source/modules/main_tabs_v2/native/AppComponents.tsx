// Module ID: 16823
// Function ID: 16824
// Name: AppComponents
// Dependencies: [21, 16292, 1364, 4692, 16161, 16731, 4707, 16747, 9538, 13984, 5209, 4542, 16824, 16830, 16863, 16872, 17044, 2]

// Module 16823 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 4542 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4692 */;
import PortalKeyboard from "PortalKeyboard" /* 4707 */;
import AlertModal from "AlertModal" /* 5209 */;
import NotificationsDefault from "Notifications" /* 9538 */;
import ContextMenuContainer from "ContextMenuContainer" /* 13984 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 16292 */;
import MainShared from "MainShared" /* 16731 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 16747 */;
import ExternalPipViewDefault from "ExternalPipView" /* 16824 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 16830 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 16863 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 16872 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 17044 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1364 */;
import AppFreezer_mod from "AppFreezer" /* 16161 */;
import size from "module_2" /* 2 */;

let jsx;
let jsxs;
({ jsx, jsxs } = Fragment);
let closure_2 = jsx(PortalKeyboardRenderer.PortalKeyboardRenderer, {});
let PlatformUtils = PlatformUtils_mod;
PlatformUtils.isIOS() ? (() => {
  let tmp = null;
  const obj = NavigationRouteUtils;
  if (!obj.useIsModalOpen()) {
    tmp = closure_2;
  }
  return tmp;
}) : (() => closure_2);
let AppFreezer = AppFreezer_mod;
const items = [jsx(MainShared.PictureInPictureGlobalContainer, {}), jsx(MainShared.BurstReactionAnimationContainer, {}), jsx(MainShared.MenuContainer, {}), jsx(PortalKeyboard.PortalKeyboardHost, {}), <tmp3 />, jsx(MainShared.ActionSheetContainer, { appEntryKey: "main" }), jsx(MainShared.Alerts, {}), jsx(MainShared.SoundPlayer, {}), jsx(MainViewTooltipActionSheetsV2Default, {}), jsx(NotificationsDefault, {}), jsx(ContextMenuContainer.ContextMenuContainer, {}), jsx(AlertModal.AlertModalContainer, {}), jsx(MainShared.ToastContainer, {})];
const jsxsResult = <AppFreezer lockKeys={["external-pip"]}>{items}</AppFreezer>;
PlatformUtils = PlatformUtils_mod;
let jsxResult = null;
if (PlatformUtils.isAndroid()) {
  jsxResult = jsx(AccessibilityAnnouncerLiveRegion.AccessibilityAnnouncerLiveRegion, {});
}
const jsxResult1 = jsx(ExternalPipViewDefault, {});
AppFreezer = AppFreezer_mod;
const items1 = [jsx(ActivityPanelContainerDefault, {}), jsx(FramePanelContainerDefault, {}), jsx(VoicePanelContainerDefault, {}), jsx(MediaPlaybackPanelContainerDefault, {})];
const jsxsResult1 = <AppFreezer lockKeys={["external-pip"]}>{items1}</AppFreezer>;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/AppComponents.tsx");

export const APP_EXTRA_COMPONENTS = jsxsResult;
export const APP_EXTRA_COMPONENTS_NEVER_FREEZE = jsxResult;
export const APP_EXTRA_COMPONENTS_EXTERNAL_PIP = jsxResult1;
export const APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO = jsxsResult1;
