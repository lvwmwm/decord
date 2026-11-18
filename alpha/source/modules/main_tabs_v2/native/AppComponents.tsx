// Module ID: 19209
// Function ID: 19210
// Name: AppComponents
// Dependencies: [21, 18461, 1380, 4999, 18214, 19099, 5014, 19118, 11059, 15197, 5774, 19210, 4833, 19218, 19228, 19237, 19264, 19274, 19443, 2]

// Module 19209 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 4833 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4999 */;
import PortalKeyboard from "PortalKeyboard" /* 5014 */;
import AlertModal from "AlertModal" /* 5774 */;
import NotificationsDefault from "Notifications" /* 11059 */;
import ContextMenuContainer from "ContextMenuContainer" /* 15197 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 18461 */;
import MainShared from "MainShared" /* 19099 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19118 */;
import FramePoolDefault from "FramePool" /* 19210 */;
import ExternalPipViewDefault from "ExternalPipView" /* 19218 */;
import ConjureAppPictureInPicturesDefault from "ConjureAppPictureInPictures" /* 19228 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 19237 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 19264 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 19274 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 19443 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1380 */;
import AppFreezer_mod from "AppFreezer" /* 18214 */;
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
