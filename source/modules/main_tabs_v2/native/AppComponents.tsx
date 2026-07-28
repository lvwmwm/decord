// Module ID: 15790
// Function ID: 121610
// Name: jsx
// Dependencies: [33, 15553, 477, 4016, 15359, 15700, 4035, 15717, 10221, 13187, 4510, 3879, 15791, 15797, 15830, 15842, 16005, 2]

// Module 15790 (jsx)
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
const items1 = [jsx(require("module_15797"), {}), jsx(require("module_15830"), {}), jsx(require("VoicePanel"), {}), jsx(require("module_16005"), {})];
obj.children = items1;
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/AppComponents.tsx");

export const APP_EXTRA_COMPONENTS = jsxsResult;
export const APP_EXTRA_COMPONENTS_NEVER_FREEZE = jsxResult;
export const APP_EXTRA_COMPONENTS_EXTERNAL_PIP = jsxResult1;
export const APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO = jsxs(require("jsx"), { lockKeys: ["external-pip"] });
