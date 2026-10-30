// Module ID: 19041
// Function ID: 19042
// Name: AppComponents
// Dependencies: [21, 12183, 1376, 5193, 18540, 18947, 5208, 18966, 10989, 15815, 5959, 19042, 5019, 19050, 19060, 19069, 19097, 19106, 19285, 2]

// Module 19041 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 5019 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5193 */;
import PortalKeyboard from "PortalKeyboard" /* 5208 */;
import AlertModal from "AlertModal" /* 5959 */;
import NotificationsDefault from "Notifications" /* 10989 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 12183 */;
import ContextMenuContainer from "ContextMenuContainer" /* 15815 */;
import MainShared from "MainShared" /* 18947 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 18966 */;
import FramePoolDefault from "FramePool" /* 19042 */;
import ExternalPipViewDefault from "ExternalPipView" /* 19050 */;
import ConjureAppPictureInPicturesDefault from "ConjureAppPictureInPictures" /* 19060 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 19069 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 19097 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 19106 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 19285 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1376 */;
import AppFreezer_mod from "AppFreezer" /* 18540 */;
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
