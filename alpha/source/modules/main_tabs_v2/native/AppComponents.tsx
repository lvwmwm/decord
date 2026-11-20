// Module ID: 19020
// Function ID: 19021
// Name: AppComponents
// Dependencies: [21, 18279, 1378, 4970, 18034, 18910, 4985, 18929, 10979, 15147, 5747, 19021, 4804, 19029, 19039, 19048, 19075, 19089, 19259, 2]

// Module 19020 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 4804 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4970 */;
import PortalKeyboard from "PortalKeyboard" /* 4985 */;
import AlertModal from "AlertModal" /* 5747 */;
import NotificationsDefault from "Notifications" /* 10979 */;
import ContextMenuContainer from "ContextMenuContainer" /* 15147 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 18279 */;
import MainShared from "MainShared" /* 18910 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 18929 */;
import FramePoolDefault from "FramePool" /* 19021 */;
import ExternalPipViewDefault from "ExternalPipView" /* 19029 */;
import ConjureAppPictureInPicturesDefault from "ConjureAppPictureInPictures" /* 19039 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 19048 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 19075 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 19089 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 19259 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1378 */;
import AppFreezer_mod from "AppFreezer" /* 18034 */;
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
