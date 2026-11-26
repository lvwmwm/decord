// Module ID: 19365
// Function ID: 19366
// Name: AppComponents
// Dependencies: [21, 18623, 1379, 5219, 18372, 19255, 5234, 19274, 10593, 15463, 6052, 19366, 5053, 19374, 19384, 19393, 19420, 19434, 19604, 2]

// Module 19365 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 5053 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5219 */;
import PortalKeyboard from "PortalKeyboard" /* 5234 */;
import AlertModal from "AlertModal" /* 6052 */;
import NotificationsDefault from "Notifications" /* 10593 */;
import ContextMenuContainer from "ContextMenuContainer" /* 15463 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 18623 */;
import MainShared from "MainShared" /* 19255 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19274 */;
import FramePoolDefault from "FramePool" /* 19366 */;
import ExternalPipViewDefault from "ExternalPipView" /* 19374 */;
import ConjureAppPictureInPicturesDefault from "ConjureAppPictureInPictures" /* 19384 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 19393 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 19420 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 19434 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 19604 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1379 */;
import AppFreezer_mod from "AppFreezer" /* 18372 */;
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
