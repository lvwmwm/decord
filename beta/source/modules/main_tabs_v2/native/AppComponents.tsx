// Module ID: 16792
// Function ID: 16793
// Name: AppComponents
// Dependencies: [21, 16294, 1370, 4694, 16163, 16733, 4709, 16749, 12208, 13986, 5210, 4546, 16793, 16799, 16832, 16841, 17013, 2]

// Module 16792 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 4546 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4694 */;
import PortalKeyboard from "PortalKeyboard" /* 4709 */;
import AlertModal from "AlertModal" /* 5210 */;
import common_NotificationsDefault from "common/Notifications" /* 12208 */;
import ContextMenuContainer from "ContextMenuContainer" /* 13986 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 16294 */;
import MainShared from "MainShared" /* 16733 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 16749 */;
import ExternalPipViewDefault from "ExternalPipView" /* 16793 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 16799 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 16832 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 16841 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 17013 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1370 */;
import AppFreezer_mod from "AppFreezer" /* 16163 */;
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
const items = [jsx(MainShared.PictureInPictureGlobalContainer, {}), jsx(MainShared.BurstReactionAnimationContainer, {}), jsx(MainShared.MenuContainer, {}), jsx(PortalKeyboard.PortalKeyboardHost, {}), <tmp3 />, jsx(MainShared.ActionSheetContainer, { appEntryKey: "main" }), jsx(MainShared.Alerts, {}), jsx(MainShared.SoundPlayer, {}), jsx(MainViewTooltipActionSheetsV2Default, {}), jsx(common_NotificationsDefault, {}), jsx(ContextMenuContainer.ContextMenuContainer, {}), jsx(AlertModal.AlertModalContainer, {}), jsx(MainShared.ToastContainer, {})];
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
