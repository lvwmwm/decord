// Module ID: 19302
// Function ID: 19303
// Name: AppComponents
// Dependencies: [21, 18560, 1378, 5188, 18313, 19192, 5203, 19211, 10548, 15413, 6021, 19303, 5022, 19311, 19321, 19330, 19357, 19371, 19541, 2]

// Module 19302 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 5022 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5188 */;
import PortalKeyboard from "PortalKeyboard" /* 5203 */;
import AlertModal from "AlertModal" /* 6021 */;
import NotificationsDefault from "Notifications" /* 10548 */;
import ContextMenuContainer from "ContextMenuContainer" /* 15413 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 18560 */;
import MainShared from "MainShared" /* 19192 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19211 */;
import FramePoolDefault from "FramePool" /* 19303 */;
import ExternalPipViewDefault from "ExternalPipView" /* 19311 */;
import ConjureAppPictureInPicturesDefault from "ConjureAppPictureInPictures" /* 19321 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 19330 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 19357 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 19371 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 19541 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1378 */;
import AppFreezer_mod from "AppFreezer" /* 18313 */;
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
