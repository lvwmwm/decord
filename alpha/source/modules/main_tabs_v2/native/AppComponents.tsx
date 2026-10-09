// Module ID: 17607
// Function ID: 17608
// Name: AppComponents
// Dependencies: [21, 17033, 1382, 4937, 16890, 17544, 4952, 17563, 12515, 14197, 5304, 17608, 4790, 17615, 17621, 17654, 17663, 17835, 2]

// Module 17607 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 4790 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4937 */;
import PortalKeyboard from "PortalKeyboard" /* 4952 */;
import AlertModal from "AlertModal" /* 5304 */;
import common_NotificationsDefault from "common/Notifications" /* 12515 */;
import ContextMenuContainer from "ContextMenuContainer" /* 14197 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 17033 */;
import MainShared from "MainShared" /* 17544 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 17563 */;
import FramePoolDefault from "FramePool" /* 17608 */;
import ExternalPipViewDefault from "ExternalPipView" /* 17615 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 17621 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 17654 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 17663 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 17835 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1382 */;
import AppFreezer_mod from "AppFreezer" /* 16890 */;
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
