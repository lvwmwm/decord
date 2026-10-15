// Module ID: 18016
// Function ID: 18017
// Name: AppComponents
// Dependencies: [21, 11745, 1382, 5032, 17559, 17951, 5047, 17970, 13405, 14931, 5365, 18017, 4885, 18024, 18030, 18063, 18072, 18244, 2]

// Module 18016 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 4885 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5032 */;
import PortalKeyboard from "PortalKeyboard" /* 5047 */;
import AlertModal from "AlertModal" /* 5365 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 11745 */;
import common_NotificationsDefault from "common/Notifications" /* 13405 */;
import ContextMenuContainer from "ContextMenuContainer" /* 14931 */;
import MainShared from "MainShared" /* 17951 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 17970 */;
import FramePoolDefault from "FramePool" /* 18017 */;
import ExternalPipViewDefault from "ExternalPipView" /* 18024 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 18030 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 18063 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 18072 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 18244 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1382 */;
import AppFreezer_mod from "AppFreezer" /* 17559 */;
import size from "module_2" /* 2 */;

let Fragment;
let jsx;
let jsxs;
Fragment = Fragment_mod;
({ jsx, jsxs, Fragment } = Fragment);
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
const items1 = [, ];
const jsxsResult = <AppFreezer lockKeys={["external-pip"]}>{items}</AppFreezer>;
items1[0] = jsx(FramePoolDefault, {});
PlatformUtils = PlatformUtils_mod;
let jsxResult = null;
if (PlatformUtils.isAndroid()) {
  jsxResult = jsx(AccessibilityAnnouncerLiveRegion.AccessibilityAnnouncerLiveRegion, {});
}
items1[1] = jsxResult;
const jsxsResult1 = <>{items1}</>;
const jsxResult1 = jsx(ExternalPipViewDefault, {});
AppFreezer = AppFreezer_mod;
const items2 = [jsx(ActivityPanelContainerDefault, {}), jsx(FramePanelContainerDefault, {}), jsx(VoicePanelContainerDefault, {}), jsx(MediaPlaybackPanelContainerDefault, {})];
const jsxsResult2 = <AppFreezer lockKeys={["external-pip"]}>{items2}</AppFreezer>;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/AppComponents.tsx");

export const APP_EXTRA_COMPONENTS = jsxsResult;
export const APP_EXTRA_COMPONENTS_NEVER_FREEZE = jsxsResult1;
export const APP_EXTRA_COMPONENTS_EXTERNAL_PIP = jsxResult1;
export const APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO = jsxsResult2;
