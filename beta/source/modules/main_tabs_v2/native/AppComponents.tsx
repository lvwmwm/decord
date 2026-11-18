// Module ID: 19894
// Function ID: 19895
// Name: AppComponents
// Dependencies: [21, 13365, 1380, 5482, 19356, 19784, 5497, 19803, 11011, 16478, 6264, 19895, 5316, 19903, 19913, 19922, 19949, 19958, 20127, 2]

// Module 19894 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 5316 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5482 */;
import PortalKeyboard from "PortalKeyboard" /* 5497 */;
import AlertModal from "AlertModal" /* 6264 */;
import NotificationsDefault from "Notifications" /* 11011 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 13365 */;
import ContextMenuContainer from "ContextMenuContainer" /* 16478 */;
import MainShared from "MainShared" /* 19784 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19803 */;
import FramePoolDefault from "FramePool" /* 19895 */;
import ExternalPipViewDefault from "ExternalPipView" /* 19903 */;
import ConjureAppPictureInPicturesDefault from "ConjureAppPictureInPictures" /* 19913 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 19922 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 19949 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 19958 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 20127 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1380 */;
import AppFreezer_mod from "AppFreezer" /* 19356 */;
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
