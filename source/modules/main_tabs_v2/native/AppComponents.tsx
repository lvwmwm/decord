// Module ID: 15728
// Function ID: 121238
// Name: jsx
// Dependencies: [33, 15491, 477, 3981, 15296, 15639, 4000, 15655, 10247, 13131, 4475, 3844, 15729, 15735, 15768, 15780, 15943, 2]

// Module 15728 (jsx)
import jsxProd from "jsxProd";
import set from "set";
import importDefaultResult from "jsx";
import set from "set";
import jsxsResult from "jsx";
import jsxResult1 from "requestFreezeLock";
import importDefaultResult1 from "jsx";
import set from "set";

let jsx;
let jsxs;
({ jsx, jsxs } = jsxProd);
let closure_2 = jsx(require("transitionGroupGetItemKey").PortalKeyboardRenderer, {});
let obj = { lockKeys: ["external-pip"] };
const tmp3 = set.isIOS() ? (() => {
  let tmp = null;
  if (!obj.useIsModalOpen()) {
    tmp = closure_2;
  }
  return tmp;
}) : (() => closure_2);
const items = [jsx(require("BurstReactionAnimationContainer").PictureInPictureGlobalContainer, {}), jsx(require("BurstReactionAnimationContainer").BurstReactionAnimationContainer, {}), jsx(require("BurstReactionAnimationContainer").MenuContainer, {}), jsx(require("PortalKeyboardState").PortalKeyboardHost, {}), <tmp3 />, jsx(require("BurstReactionAnimationContainer").ActionSheetContainer, { appEntryKey: "main" }), jsx(require("BurstReactionAnimationContainer").Alerts, {}), jsx(require("BurstReactionAnimationContainer").SoundPlayer, {}), jsx(require("getActionSheetType"), {}), jsx(require("Notifications"), {}), jsx(require("getItemKey").ContextMenuContainer, {}), jsx(require("getAlertModalItemKey").AlertModalContainer, {}), jsx(require("BurstReactionAnimationContainer").ToastContainer, {})];
obj.children = items;
let jsxResult = null;
if (set.isAndroid()) {
  jsxResult = jsx(require("updateAccessibilityAnnouncerLiveRegionMessage").AccessibilityAnnouncerLiveRegion, {});
}
obj = { lockKeys: ["external-pip"] };
const items1 = [jsx(require("module_15735"), {}), jsx(require("module_15768"), {}), jsx(require("VoicePanel"), {}), jsx(require("module_15943"), {})];
obj.children = items1;
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/AppComponents.tsx");

export const APP_EXTRA_COMPONENTS = jsxsResult;
export const APP_EXTRA_COMPONENTS_NEVER_FREEZE = jsxResult;
export const APP_EXTRA_COMPONENTS_EXTERNAL_PIP = jsxResult1;
export const APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO = jsxs(require("jsx"), { lockKeys: ["external-pip"] });
