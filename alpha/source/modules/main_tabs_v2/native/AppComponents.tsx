// Module ID: 19468
// Function ID: 19469
// Name: AppComponents
// Dependencies: [21, 12564, 1377, 5314, 18951, 19373, 5329, 19392, 11138, 16171, 6096, 19469, 5150, 19477, 19487, 19496, 19524, 19533, 19748, 2]

// Module 19468 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 5150 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5314 */;
import PortalKeyboard from "PortalKeyboard" /* 5329 */;
import AlertModal from "AlertModal" /* 6096 */;
import NotificationsDefault from "Notifications" /* 11138 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 12564 */;
import ContextMenuContainer from "ContextMenuContainer" /* 16171 */;
import MainShared from "MainShared" /* 19373 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19392 */;
import FramePoolDefault from "FramePool" /* 19469 */;
import ExternalPipViewDefault from "ExternalPipView" /* 19477 */;
import ConjureAppPictureInPicturesDefault from "ConjureAppPictureInPictures" /* 19487 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 19496 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 19524 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 19533 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 19748 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1377 */;
import AppFreezer_mod from "AppFreezer" /* 18951 */;
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
