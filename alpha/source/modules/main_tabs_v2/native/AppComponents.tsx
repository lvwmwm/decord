// Module ID: 19381
// Function ID: 19382
// Name: AppComponents
// Dependencies: [21, 18634, 1379, 5219, 18379, 19271, 5234, 19290, 10594, 15470, 6052, 19382, 5053, 19390, 19400, 19409, 19436, 19450, 19620, 2]

// Module 19381 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 5053 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5219 */;
import PortalKeyboard from "PortalKeyboard" /* 5234 */;
import AlertModal from "AlertModal" /* 6052 */;
import NotificationsDefault from "Notifications" /* 10594 */;
import ContextMenuContainer from "ContextMenuContainer" /* 15470 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 18634 */;
import MainShared from "MainShared" /* 19271 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19290 */;
import FramePoolDefault from "FramePool" /* 19382 */;
import ExternalPipViewDefault from "ExternalPipView" /* 19390 */;
import ConjureAppPictureInPicturesDefault from "ConjureAppPictureInPictures" /* 19400 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 19409 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 19436 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 19450 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 19620 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1379 */;
import AppFreezer_mod from "AppFreezer" /* 18379 */;
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
