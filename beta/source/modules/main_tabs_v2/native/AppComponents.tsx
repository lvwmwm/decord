// Module ID: 19158
// Function ID: 19159
// Name: AppComponents
// Dependencies: [21, 18417, 1378, 5089, 18171, 19048, 5104, 19067, 11104, 15278, 5866, 19159, 4923, 19167, 19177, 19186, 19213, 19227, 19397, 2]

// Module 19158 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 4923 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5089 */;
import PortalKeyboard from "PortalKeyboard" /* 5104 */;
import AlertModal from "AlertModal" /* 5866 */;
import NotificationsDefault from "Notifications" /* 11104 */;
import ContextMenuContainer from "ContextMenuContainer" /* 15278 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 18417 */;
import MainShared from "MainShared" /* 19048 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19067 */;
import FramePoolDefault from "FramePool" /* 19159 */;
import ExternalPipViewDefault from "ExternalPipView" /* 19167 */;
import ConjureAppPictureInPicturesDefault from "ConjureAppPictureInPictures" /* 19177 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 19186 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 19213 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 19227 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 19397 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1378 */;
import AppFreezer_mod from "AppFreezer" /* 18171 */;
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
