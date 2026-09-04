// Module ID: 16921
// Function ID: 16922
// Name: jsx
// Dependencies: [21, 16678, 1234, 4335, 16446, 16830, 4349, 16846, 10007, 14081, 4871, 1351, 16922, 16928, 16961, 16970, 17141, 2]

// Module 16921 (jsx)
import updateAccessibilityAnnouncerLiveRegionMessage from "updateAccessibilityAnnouncerLiveRegionMessage" /* 1351 */;
import PortalKeyboardState from "PortalKeyboardState" /* 4349 */;
import getAlertModalItemKey from "getAlertModalItemKey" /* 4871 */;
import NotificationsDefault from "Notifications" /* 10007 */;
import getItemKey from "getItemKey" /* 14081 */;
import transitionGroupGetItemKey from "transitionGroupGetItemKey" /* 16678 */;
import BurstReactionAnimationContainer from "BurstReactionAnimationContainer" /* 16830 */;
import trackActionSheetImpressionDefault from "trackActionSheetImpression" /* 16846 */;
import FreezeAfterLayoutPipViewDefault from "FreezeAfterLayoutPipView" /* 16922 */;
import _modDef16928 from "module_16928" /* 16928 */;
import _modDef16961 from "module_16961" /* 16961 */;
import VoicePanelDefault from "VoicePanel" /* 16970 */;
import _modDef17141 from "module_17141" /* 17141 */;
import jsxProd from "jsxProd" /* 21 */;
import set from "set" /* 1234 */;
import importDefaultResult from "jsx" /* 16446 */;

({ jsx, jsxs } = jsxProd);
let closure_2 = jsx(transitionGroupGetItemKey.PortalKeyboardRenderer, {});
let obj = { lockKeys: ["external-pip"], children: null };
const tmp3 = set.isIOS() ? (() => {
  let tmp = null;
  if (!obj.useIsModalOpen()) {
    tmp = closure_2;
  }
  return tmp;
}) : (() => closure_2);
const items = [jsx(BurstReactionAnimationContainer.PictureInPictureGlobalContainer, {}), jsx(BurstReactionAnimationContainer.BurstReactionAnimationContainer, {}), jsx(BurstReactionAnimationContainer.MenuContainer, {}), jsx(PortalKeyboardState.PortalKeyboardHost, {}), <tmp3 />, jsx(BurstReactionAnimationContainer.ActionSheetContainer, { appEntryKey: "main" }), jsx(BurstReactionAnimationContainer.Alerts, {}), jsx(BurstReactionAnimationContainer.SoundPlayer, {}), jsx(trackActionSheetImpressionDefault, {}), jsx(NotificationsDefault, {}), jsx(getItemKey.ContextMenuContainer, {}), jsx(getAlertModalItemKey.AlertModalContainer, {}), jsx(BurstReactionAnimationContainer.ToastContainer, {})];
obj[1] = items;
let jsxResult = null;
if (set.isAndroid()) {
  jsxResult = jsx(updateAccessibilityAnnouncerLiveRegionMessage.AccessibilityAnnouncerLiveRegion, {});
}
const jsxsResult = jsxs(importDefaultResult, { lockKeys: ["external-pip"], children: null });
obj = { lockKeys: ["external-pip"], children: null };
const jsxResult1 = jsx(FreezeAfterLayoutPipViewDefault, {});
const items1 = [jsx(_modDef16928, {}), jsx(_modDef16961, {}), jsx(VoicePanelDefault, {}), jsx(_modDef17141, {})];
obj[1] = items1;
const importDefaultResult1 = importDefaultResult;
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/AppComponents.tsx");

export const APP_EXTRA_COMPONENTS = jsxsResult;
export const APP_EXTRA_COMPONENTS_NEVER_FREEZE = jsxResult;
export const APP_EXTRA_COMPONENTS_EXTERNAL_PIP = jsxResult1;
export const APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO = jsxs(importDefaultResult, { lockKeys: ["external-pip"], children: null });
