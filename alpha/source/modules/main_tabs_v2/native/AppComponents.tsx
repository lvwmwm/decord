// Module ID: 19404
// Function ID: 19405
// Name: AppComponents
// Dependencies: [21, 12586, 1377, 5324, 18900, 19309, 5339, 19328, 11197, 16118, 6102, 19405, 5153, 19413, 19423, 19432, 19460, 19469, 19660, 2]

// Module 19404 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 5153 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5324 */;
import PortalKeyboard from "PortalKeyboard" /* 5339 */;
import AlertModal from "AlertModal" /* 6102 */;
import NotificationsDefault from "Notifications" /* 11197 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 12586 */;
import ContextMenuContainer from "ContextMenuContainer" /* 16118 */;
import MainShared from "MainShared" /* 19309 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19328 */;
import FramePoolDefault from "FramePool" /* 19405 */;
import ExternalPipViewDefault from "ExternalPipView" /* 19413 */;
import ConjureAppPictureInPicturesDefault from "ConjureAppPictureInPictures" /* 19423 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 19432 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 19460 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 19469 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 19660 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1377 */;
import AppFreezer_mod from "AppFreezer" /* 18900 */;
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
