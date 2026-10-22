// Module ID: 18349
// Function ID: 18350
// Name: AppComponents
// Dependencies: [21, 11965, 1384, 5136, 17887, 18288, 5151, 18307, 13679, 15229, 5900, 18350, 4979, 18357, 18367, 18398, 18407, 18581, 2]

// Module 18349 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 4979 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5136 */;
import PortalKeyboard from "PortalKeyboard" /* 5151 */;
import AlertModal from "AlertModal" /* 5900 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 11965 */;
import common_NotificationsDefault from "common/Notifications" /* 13679 */;
import ContextMenuContainer from "ContextMenuContainer" /* 15229 */;
import MainShared from "MainShared" /* 18288 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 18307 */;
import FramePoolDefault from "FramePool" /* 18350 */;
import ExternalPipViewDefault from "ExternalPipView" /* 18357 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 18367 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 18398 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 18407 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 18581 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1384 */;
import AppFreezer_mod from "AppFreezer" /* 17887 */;
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
