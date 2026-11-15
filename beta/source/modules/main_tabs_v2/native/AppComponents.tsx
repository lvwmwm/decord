// Module ID: 19564
// Function ID: 19565
// Name: AppComponents
// Dependencies: [21, 12595, 1377, 5346, 19044, 19466, 5361, 19485, 11170, 16201, 6128, 19565, 5180, 19573, 19583, 19592, 19619, 19628, 19794, 2]

// Module 19564 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 5180 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5346 */;
import PortalKeyboard from "PortalKeyboard" /* 5361 */;
import AlertModal from "AlertModal" /* 6128 */;
import NotificationsDefault from "Notifications" /* 11170 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 12595 */;
import ContextMenuContainer from "ContextMenuContainer" /* 16201 */;
import MainShared from "MainShared" /* 19466 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19485 */;
import FramePoolDefault from "FramePool" /* 19565 */;
import ExternalPipViewDefault from "ExternalPipView" /* 19573 */;
import ConjureAppPictureInPicturesDefault from "ConjureAppPictureInPictures" /* 19583 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 19592 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 19619 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 19628 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 19794 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1377 */;
import AppFreezer_mod from "AppFreezer" /* 19044 */;
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
