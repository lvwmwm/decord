// Module ID: 17736
// Function ID: 17737
// Name: AppComponents
// Dependencies: [21, 17141, 1382, 4976, 16982, 17673, 4991, 17692, 12564, 14275, 5305, 17737, 4829, 17744, 17750, 17783, 17792, 17964, 2]

// Module 17736 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 4829 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4976 */;
import PortalKeyboard from "PortalKeyboard" /* 4991 */;
import AlertModal from "AlertModal" /* 5305 */;
import common_NotificationsDefault from "common/Notifications" /* 12564 */;
import ContextMenuContainer from "ContextMenuContainer" /* 14275 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 17141 */;
import MainShared from "MainShared" /* 17673 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 17692 */;
import FramePoolDefault from "FramePool" /* 17737 */;
import ExternalPipViewDefault from "ExternalPipView" /* 17744 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 17750 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 17783 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 17792 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 17964 */;
import Fragment_mod from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1382 */;
import AppFreezer_mod from "AppFreezer" /* 16982 */;
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
