// Module ID: 18393
// Function ID: 18394
// Name: AppComponents
// Dependencies: [21, 11984, 1384, 5148, 17931, 18332, 5163, 18351, 13702, 15254, 5912, 18394, 4979, 18401, 18411, 18442, 18451, 18625, 2]

// Module 18393 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 4979 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5148 */;
import PortalKeyboard from "PortalKeyboard" /* 5163 */;
import AlertModal from "AlertModal" /* 5912 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 11984 */;
import common_NotificationsDefault from "common/Notifications" /* 13702 */;
import ContextMenuContainer from "ContextMenuContainer" /* 15254 */;
import MainShared from "MainShared" /* 18332 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 18351 */;
import FramePoolDefault from "FramePool" /* 18394 */;
import ExternalPipViewDefault from "ExternalPipView" /* 18401 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 18411 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 18442 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 18451 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 18625 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1384 */;
import AppFreezer_mod from "AppFreezer" /* 17931 */;
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
