// Module ID: 19097
// Function ID: 19098
// Name: AppComponents
// Dependencies: [21, 12361, 1375, 5198, 18596, 19003, 5213, 19022, 11008, 15859, 5964, 19098, 5024, 19106, 19116, 19125, 19153, 19162, 19349, 2]

// Module 19097 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 5024 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5198 */;
import PortalKeyboard from "PortalKeyboard" /* 5213 */;
import AlertModal from "AlertModal" /* 5964 */;
import NotificationsDefault from "Notifications" /* 11008 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 12361 */;
import ContextMenuContainer from "ContextMenuContainer" /* 15859 */;
import MainShared from "MainShared" /* 19003 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19022 */;
import FramePoolDefault from "FramePool" /* 19098 */;
import ExternalPipViewDefault from "ExternalPipView" /* 19106 */;
import ConjureAppPictureInPicturesDefault from "ConjureAppPictureInPictures" /* 19116 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 19125 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 19153 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 19162 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 19349 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1375 */;
import AppFreezer_mod from "AppFreezer" /* 18596 */;
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
