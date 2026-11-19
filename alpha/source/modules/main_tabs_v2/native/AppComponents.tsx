// Module ID: 19201
// Function ID: 19202
// Name: AppComponents
// Dependencies: [21, 18454, 1380, 4968, 18207, 19091, 4983, 19110, 11037, 15183, 5745, 19202, 4802, 19210, 19220, 19229, 19256, 19270, 19439, 2]

// Module 19201 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 4802 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4968 */;
import PortalKeyboard from "PortalKeyboard" /* 4983 */;
import AlertModal from "AlertModal" /* 5745 */;
import NotificationsDefault from "Notifications" /* 11037 */;
import ContextMenuContainer from "ContextMenuContainer" /* 15183 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 18454 */;
import MainShared from "MainShared" /* 19091 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19110 */;
import FramePoolDefault from "FramePool" /* 19202 */;
import ExternalPipViewDefault from "ExternalPipView" /* 19210 */;
import ConjureAppPictureInPicturesDefault from "ConjureAppPictureInPictures" /* 19220 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 19229 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 19256 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 19270 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 19439 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1380 */;
import AppFreezer_mod from "AppFreezer" /* 18207 */;
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
const items = [jsx(MainShared.PictureInPictureGlobalContainer, {}), jsx(MainShared.BurstReactionAnimationContainer, {}), jsx(MainShared.MenuContainer, {}), jsx(PortalKeyboard.PortalKeyboardHost, {}), <tmp3 />, jsx(MainShared.ActionSheetContainer, { appEntryKey: "main" }), jsx(MainShared.Alerts, {}), jsx(MainShared.SoundPlayer, {}), jsx(MainViewTooltipActionSheetsV2Default, {}), jsx(NotificationsDefault, {}), jsx(ContextMenuContainer.ContextMenuContainer, {}), jsx(AlertModal.AlertModalContainer, {}), jsx(MainShared.ToastContainer, {})];
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
const items2 = [jsx(ConjureAppPictureInPicturesDefault, {}), jsx(ActivityPanelContainerDefault, {}), jsx(FramePanelContainerDefault, {}), jsx(VoicePanelContainerDefault, {}), jsx(MediaPlaybackPanelContainerDefault, {})];
const jsxsResult2 = <AppFreezer lockKeys={["external-pip"]}>{items2}</AppFreezer>;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/AppComponents.tsx");

export const APP_EXTRA_COMPONENTS = jsxsResult;
export const APP_EXTRA_COMPONENTS_NEVER_FREEZE = jsxsResult1;
export const APP_EXTRA_COMPONENTS_EXTERNAL_PIP = jsxResult1;
export const APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO = jsxsResult2;
