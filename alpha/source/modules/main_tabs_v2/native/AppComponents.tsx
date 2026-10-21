// Module ID: 18259
// Function ID: 18260
// Name: AppComponents
// Dependencies: [21, 11930, 1384, 5132, 17795, 18198, 5147, 18217, 13629, 15172, 5894, 18260, 4976, 18267, 18277, 18308, 18317, 18491, 2]

// Module 18259 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 4976 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5132 */;
import PortalKeyboard from "PortalKeyboard" /* 5147 */;
import AlertModal from "AlertModal" /* 5894 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 11930 */;
import common_NotificationsDefault from "common/Notifications" /* 13629 */;
import ContextMenuContainer from "ContextMenuContainer" /* 15172 */;
import MainShared from "MainShared" /* 18198 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 18217 */;
import FramePoolDefault from "FramePool" /* 18260 */;
import ExternalPipViewDefault from "ExternalPipView" /* 18267 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 18277 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 18308 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 18317 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 18491 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1384 */;
import AppFreezer_mod from "AppFreezer" /* 17795 */;
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
const items = [jsx(MainShared.PictureInPictureGlobalContainer, {}), jsx(MainShared.BurstReactionAnimationContainer, {}), jsx(MainShared.MenuContainer, {}), jsx(PortalKeyboard.PortalKeyboardHost, {}), <tmp3 />, jsx(MainShared.ActionSheetContainer, { appEntryKey: "main" }), jsx(MainShared.Alerts, {}), jsx(MainShared.SoundPlayer, {}), jsx(MainViewTooltipActionSheetsV2Default, {}), jsx(common_NotificationsDefault, {}), jsx(ContextMenuContainer.ContextMenuContainer, {}), jsx(AlertModal.AlertModalContainer, {}), jsx(MainShared.ToastContainer, {})];
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
const items2 = [jsx(ActivityPanelContainerDefault, {}), jsx(FramePanelContainerDefault, {}), jsx(VoicePanelContainerDefault, {}), jsx(MediaPlaybackPanelContainerDefault, {})];
const jsxsResult2 = <AppFreezer lockKeys={["external-pip"]}>{items2}</AppFreezer>;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/AppComponents.tsx");

export const APP_EXTRA_COMPONENTS = jsxsResult;
export const APP_EXTRA_COMPONENTS_NEVER_FREEZE = jsxsResult1;
export const APP_EXTRA_COMPONENTS_EXTERNAL_PIP = jsxResult1;
export const APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO = jsxsResult2;
