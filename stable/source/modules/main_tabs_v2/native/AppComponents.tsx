// Module ID: 19092
// Function ID: 19093
// Name: AppComponents
// Dependencies: [21, 12361, 1375, 5198, 18591, 18998, 5213, 19017, 11008, 15854, 5964, 19093, 5024, 19101, 19111, 19120, 19148, 19157, 19344, 2]

// Module 19092 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 5024 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5198 */;
import PortalKeyboard from "PortalKeyboard" /* 5213 */;
import AlertModal from "AlertModal" /* 5964 */;
import NotificationsDefault from "Notifications" /* 11008 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 12361 */;
import ContextMenuContainer from "ContextMenuContainer" /* 15854 */;
import MainShared from "MainShared" /* 18998 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19017 */;
import FramePoolDefault from "FramePool" /* 19093 */;
import ExternalPipViewDefault from "ExternalPipView" /* 19101 */;
import ConjureAppPictureInPicturesDefault from "ConjureAppPictureInPictures" /* 19111 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 19120 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 19148 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 19157 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 19344 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1375 */;
import AppFreezer_mod from "AppFreezer" /* 18591 */;
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
