// Module ID: 19373
// Function ID: 19374
// Name: AppComponents
// Dependencies: [21, 12579, 1377, 5322, 18869, 19278, 5337, 19297, 11189, 16105, 6099, 19374, 5151, 19382, 19392, 19401, 19429, 19438, 19625, 2]

// Module 19373 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 5151 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5322 */;
import PortalKeyboard from "PortalKeyboard" /* 5337 */;
import AlertModal from "AlertModal" /* 6099 */;
import NotificationsDefault from "Notifications" /* 11189 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 12579 */;
import ContextMenuContainer from "ContextMenuContainer" /* 16105 */;
import MainShared from "MainShared" /* 19278 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19297 */;
import FramePoolDefault from "FramePool" /* 19374 */;
import ExternalPipViewDefault from "ExternalPipView" /* 19382 */;
import ConjureAppPictureInPicturesDefault from "ConjureAppPictureInPictures" /* 19392 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 19401 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 19429 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 19438 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 19625 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1377 */;
import AppFreezer_mod from "AppFreezer" /* 18869 */;
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
