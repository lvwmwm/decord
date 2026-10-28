// Module ID: 18714
// Function ID: 18715
// Name: AppComponents
// Dependencies: [21, 11943, 1381, 5186, 18247, 18653, 5201, 18672, 13977, 15541, 5950, 18715, 5014, 18722, 18732, 18742, 18770, 18779, 18958, 2]

// Module 18714 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 5014 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5186 */;
import PortalKeyboard from "PortalKeyboard" /* 5201 */;
import AlertModal from "AlertModal" /* 5950 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 11943 */;
import common_NotificationsDefault from "common/Notifications" /* 13977 */;
import ContextMenuContainer from "ContextMenuContainer" /* 15541 */;
import MainShared from "MainShared" /* 18653 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 18672 */;
import FramePoolDefault from "FramePool" /* 18715 */;
import ExternalPipViewDefault from "ExternalPipView" /* 18722 */;
import ConjureAppPictureInPicturesDefault from "ConjureAppPictureInPictures" /* 18732 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 18742 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 18770 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 18779 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 18958 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1381 */;
import AppFreezer_mod from "AppFreezer" /* 18247 */;
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
