// Module ID: 19506
// Function ID: 19507
// Name: AppComponents
// Dependencies: [21, 12596, 1377, 5346, 18986, 19408, 5361, 19427, 11170, 16200, 6128, 19507, 5180, 19515, 19525, 19534, 19562, 19571, 19789, 2]

// Module 19506 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 5180 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5346 */;
import PortalKeyboard from "PortalKeyboard" /* 5361 */;
import AlertModal from "AlertModal" /* 6128 */;
import NotificationsDefault from "Notifications" /* 11170 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 12596 */;
import ContextMenuContainer from "ContextMenuContainer" /* 16200 */;
import MainShared from "MainShared" /* 19408 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19427 */;
import FramePoolDefault from "FramePool" /* 19507 */;
import ExternalPipViewDefault from "ExternalPipView" /* 19515 */;
import ConjureAppPictureInPicturesDefault from "ConjureAppPictureInPictures" /* 19525 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 19534 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 19562 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 19571 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 19789 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1377 */;
import AppFreezer_mod from "AppFreezer" /* 18986 */;
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
