// Module ID: 19681
// Function ID: 19682
// Name: AppComponents
// Dependencies: [21, 13260, 1377, 5429, 19161, 19588, 5444, 19607, 10942, 16355, 6211, 19682, 5253, 19690, 19700, 19709, 19737, 19746, 19964, 2]

// Module 19681 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 5253 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5429 */;
import PortalKeyboard from "PortalKeyboard" /* 5444 */;
import AlertModal from "AlertModal" /* 6211 */;
import NotificationsDefault from "Notifications" /* 10942 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 13260 */;
import ContextMenuContainer from "ContextMenuContainer" /* 16355 */;
import MainShared from "MainShared" /* 19588 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19607 */;
import FramePoolDefault from "FramePool" /* 19682 */;
import ExternalPipViewDefault from "ExternalPipView" /* 19690 */;
import ConjureAppPictureInPicturesDefault from "ConjureAppPictureInPictures" /* 19700 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 19709 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 19737 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 19746 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 19964 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1377 */;
import AppFreezer_mod from "AppFreezer" /* 19161 */;
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
