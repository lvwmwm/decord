// Module ID: 19938
// Function ID: 19939
// Name: AppComponents
// Dependencies: [21, 14605, 1380, 5486, 19400, 19828, 5501, 19847, 11777, 16514, 6272, 19939, 5320, 19947, 19957, 19966, 19993, 20003, 20172, 2]

// Module 19938 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 5320 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5486 */;
import PortalKeyboard from "PortalKeyboard" /* 5501 */;
import AlertModal from "AlertModal" /* 6272 */;
import NotificationsDefault from "Notifications" /* 11777 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 14605 */;
import ContextMenuContainer from "ContextMenuContainer" /* 16514 */;
import MainShared from "MainShared" /* 19828 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19847 */;
import FramePoolDefault from "FramePool" /* 19939 */;
import ExternalPipViewDefault from "ExternalPipView" /* 19947 */;
import ConjureAppPictureInPicturesDefault from "ConjureAppPictureInPictures" /* 19957 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 19966 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 19993 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 20003 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 20172 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1380 */;
import AppFreezer_mod from "AppFreezer" /* 19400 */;
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
