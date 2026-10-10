// Module ID: 17679
// Function ID: 17680
// Name: AppComponents
// Dependencies: [21, 17101, 1382, 4976, 16958, 17616, 4991, 17635, 12562, 14252, 5305, 17680, 4829, 17687, 17693, 17726, 17735, 17907, 2]

// Module 17679 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 4829 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4976 */;
import PortalKeyboard from "PortalKeyboard" /* 4991 */;
import AlertModal from "AlertModal" /* 5305 */;
import common_NotificationsDefault from "common/Notifications" /* 12562 */;
import ContextMenuContainer from "ContextMenuContainer" /* 14252 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 17101 */;
import MainShared from "MainShared" /* 17616 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 17635 */;
import FramePoolDefault from "FramePool" /* 17680 */;
import ExternalPipViewDefault from "ExternalPipView" /* 17687 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 17693 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 17726 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 17735 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 17907 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1382 */;
import AppFreezer_mod from "AppFreezer" /* 16958 */;
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
