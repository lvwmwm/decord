// Module ID: 19162
// Function ID: 19163
// Name: AppComponents
// Dependencies: [21, 18421, 1378, 5089, 18175, 19052, 5104, 19071, 11104, 15281, 5866, 19163, 4923, 19171, 19181, 19190, 19217, 19231, 19401, 2]

// Module 19162 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 4923 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5089 */;
import PortalKeyboard from "PortalKeyboard" /* 5104 */;
import AlertModal from "AlertModal" /* 5866 */;
import NotificationsDefault from "Notifications" /* 11104 */;
import ContextMenuContainer from "ContextMenuContainer" /* 15281 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 18421 */;
import MainShared from "MainShared" /* 19052 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19071 */;
import FramePoolDefault from "FramePool" /* 19163 */;
import ExternalPipViewDefault from "ExternalPipView" /* 19171 */;
import ConjureAppPictureInPicturesDefault from "ConjureAppPictureInPictures" /* 19181 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 19190 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 19217 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 19231 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 19401 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1378 */;
import AppFreezer_mod from "AppFreezer" /* 18175 */;
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
