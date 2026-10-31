// Module ID: 19090
// Function ID: 19091
// Name: AppComponents
// Dependencies: [21, 12221, 1375, 5198, 18583, 18996, 5213, 19015, 11008, 15855, 5964, 19091, 5024, 19099, 19109, 19118, 19146, 19155, 19342, 2]

// Module 19090 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 5024 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5198 */;
import PortalKeyboard from "PortalKeyboard" /* 5213 */;
import AlertModal from "AlertModal" /* 5964 */;
import NotificationsDefault from "Notifications" /* 11008 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 12221 */;
import ContextMenuContainer from "ContextMenuContainer" /* 15855 */;
import MainShared from "MainShared" /* 18996 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19015 */;
import FramePoolDefault from "FramePool" /* 19091 */;
import ExternalPipViewDefault from "ExternalPipView" /* 19099 */;
import ConjureAppPictureInPicturesDefault from "ConjureAppPictureInPictures" /* 19109 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 19118 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 19146 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 19155 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 19342 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1375 */;
import AppFreezer_mod from "AppFreezer" /* 18583 */;
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
