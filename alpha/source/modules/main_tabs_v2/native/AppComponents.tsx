// Module ID: 17121
// Function ID: 17122
// Name: AppComponents
// Dependencies: [21, 16599, 1369, 4736, 16460, 17065, 4751, 17081, 12464, 14256, 5713, 17122, 4591, 17129, 17135, 17168, 17177, 17348, 2]

// Module 17121 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 4591 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4736 */;
import PortalKeyboard from "PortalKeyboard" /* 4751 */;
import AlertModal from "AlertModal" /* 5713 */;
import common_NotificationsDefault from "common/Notifications" /* 12464 */;
import ContextMenuContainer from "ContextMenuContainer" /* 14256 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 16599 */;
import MainShared from "MainShared" /* 17065 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 17081 */;
import FramePoolDefault from "FramePool" /* 17122 */;
import ExternalPipViewDefault from "ExternalPipView" /* 17129 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 17135 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 17168 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 17177 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 17348 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1369 */;
import AppFreezer_mod from "AppFreezer" /* 16460 */;
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
