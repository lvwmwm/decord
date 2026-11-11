// Module ID: 19686
// Function ID: 19687
// Name: AppComponents
// Dependencies: [21, 13266, 1377, 5429, 19166, 19593, 5444, 19612, 10948, 16360, 6211, 19687, 5253, 19695, 19705, 19714, 19742, 19751, 19969, 2]

// Module 19686 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 5253 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5429 */;
import PortalKeyboard from "PortalKeyboard" /* 5444 */;
import AlertModal from "AlertModal" /* 6211 */;
import NotificationsDefault from "Notifications" /* 10948 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 13266 */;
import ContextMenuContainer from "ContextMenuContainer" /* 16360 */;
import MainShared from "MainShared" /* 19593 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19612 */;
import FramePoolDefault from "FramePool" /* 19687 */;
import ExternalPipViewDefault from "ExternalPipView" /* 19695 */;
import ConjureAppPictureInPicturesDefault from "ConjureAppPictureInPictures" /* 19705 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 19714 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 19742 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 19751 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 19969 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1377 */;
import AppFreezer_mod from "AppFreezer" /* 19166 */;
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
