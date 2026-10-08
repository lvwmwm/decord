// Module ID: 17455
// Function ID: 17456
// Name: AppComponents
// Dependencies: [21, 16905, 1381, 4936, 16764, 17396, 4951, 17415, 12575, 14100, 5303, 17456, 4789, 17463, 17469, 17502, 17511, 17683, 2]

// Module 17455 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 4789 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4936 */;
import PortalKeyboard from "PortalKeyboard" /* 4951 */;
import AlertModal from "AlertModal" /* 5303 */;
import common_NotificationsDefault from "common/Notifications" /* 12575 */;
import ContextMenuContainer from "ContextMenuContainer" /* 14100 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 16905 */;
import MainShared from "MainShared" /* 17396 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 17415 */;
import FramePoolDefault from "FramePool" /* 17456 */;
import ExternalPipViewDefault from "ExternalPipView" /* 17463 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 17469 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 17502 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 17511 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 17683 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1381 */;
import AppFreezer_mod from "AppFreezer" /* 16764 */;
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
