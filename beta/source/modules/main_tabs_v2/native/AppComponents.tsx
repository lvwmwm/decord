// Module ID: 19896
// Function ID: 19897
// Name: AppComponents
// Dependencies: [21, 13367, 1380, 5482, 19358, 19786, 5497, 19805, 11011, 16480, 6264, 19897, 5316, 19905, 19915, 19924, 19951, 19960, 20129, 2]

// Module 19896 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 5316 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5482 */;
import PortalKeyboard from "PortalKeyboard" /* 5497 */;
import AlertModal from "AlertModal" /* 6264 */;
import NotificationsDefault from "Notifications" /* 11011 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 13367 */;
import ContextMenuContainer from "ContextMenuContainer" /* 16480 */;
import MainShared from "MainShared" /* 19786 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19805 */;
import FramePoolDefault from "FramePool" /* 19897 */;
import ExternalPipViewDefault from "ExternalPipView" /* 19905 */;
import ConjureAppPictureInPicturesDefault from "ConjureAppPictureInPictures" /* 19915 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 19924 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 19951 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 19960 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 20129 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1380 */;
import AppFreezer_mod from "AppFreezer" /* 19358 */;
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
