// Module ID: 18050
// Function ID: 18051
// Name: AppComponents
// Dependencies: [21, 11769, 1384, 5035, 17593, 17985, 5050, 18004, 13431, 14964, 5367, 18051, 4888, 18058, 18065, 18098, 18107, 18286, 2]

// Module 18050 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 4888 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5035 */;
import PortalKeyboard from "PortalKeyboard" /* 5050 */;
import AlertModal from "AlertModal" /* 5367 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 11769 */;
import common_NotificationsDefault from "common/Notifications" /* 13431 */;
import ContextMenuContainer from "ContextMenuContainer" /* 14964 */;
import MainShared from "MainShared" /* 17985 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 18004 */;
import FramePoolDefault from "FramePool" /* 18051 */;
import ExternalPipViewDefault from "ExternalPipView" /* 18058 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 18065 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 18098 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 18107 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 18286 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1384 */;
import AppFreezer_mod from "AppFreezer" /* 17593 */;
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
