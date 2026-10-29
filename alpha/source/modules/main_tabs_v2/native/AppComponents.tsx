// Module ID: 18948
// Function ID: 18949
// Name: AppComponents
// Dependencies: [21, 11997, 1381, 5187, 18481, 18887, 5202, 18906, 14210, 15777, 5952, 18949, 5015, 18956, 18966, 18975, 19003, 19012, 19191, 2]

// Module 18948 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 5015 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5187 */;
import PortalKeyboard from "PortalKeyboard" /* 5202 */;
import AlertModal from "AlertModal" /* 5952 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 11997 */;
import common_NotificationsDefault from "common/Notifications" /* 14210 */;
import ContextMenuContainer from "ContextMenuContainer" /* 15777 */;
import MainShared from "MainShared" /* 18887 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 18906 */;
import FramePoolDefault from "FramePool" /* 18949 */;
import ExternalPipViewDefault from "ExternalPipView" /* 18956 */;
import ConjureAppPictureInPicturesDefault from "ConjureAppPictureInPictures" /* 18966 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 18975 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 19003 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 19012 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 19191 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1381 */;
import AppFreezer_mod from "AppFreezer" /* 18481 */;
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
const items2 = [jsx(ConjureAppPictureInPicturesDefault, {}), jsx(ActivityPanelContainerDefault, {}), jsx(FramePanelContainerDefault, {}), jsx(VoicePanelContainerDefault, {}), jsx(MediaPlaybackPanelContainerDefault, {})];
const jsxsResult2 = <AppFreezer lockKeys={["external-pip"]}>{items2}</AppFreezer>;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/AppComponents.tsx");

export const APP_EXTRA_COMPONENTS = jsxsResult;
export const APP_EXTRA_COMPONENTS_NEVER_FREEZE = jsxsResult1;
export const APP_EXTRA_COMPONENTS_EXTERNAL_PIP = jsxResult1;
export const APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO = jsxsResult2;
