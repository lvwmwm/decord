// Module ID: 15556
// Function ID: 118700
// Name: jsx
// Dependencies: []

// Module 15556 (jsx)
let jsx;
let jsxs;
const _module = require(dependencyMap[0]);
({ jsx, jsxs } = _module);
let closure_2 = jsx(require(dependencyMap[1]).PortalKeyboardRenderer, {});
const _module1 = require(dependencyMap[2]);
let obj = { lockKeys: ["bfk"] };
const tmp3 = _module1.isIOS() ? () => {
  let tmp = null;
  if (!obj.useIsModalOpen()) {
    tmp = closure_2;
  }
  return tmp;
} : () => closure_2;
const items = [jsx(require(dependencyMap[5]).PictureInPictureGlobalContainer, {}), jsx(require(dependencyMap[5]).BurstReactionAnimationContainer, {}), jsx(require(dependencyMap[5]).MenuContainer, {}), jsx(require(dependencyMap[6]).PortalKeyboardHost, {}), <tmp3 />, jsx(require(dependencyMap[5]).ActionSheetContainer, { appEntryKey: "main" }), jsx(require(dependencyMap[5]).Alerts, {}), jsx(require(dependencyMap[5]).SoundPlayer, {}), jsx(importDefault(dependencyMap[7]), {}), jsx(importDefault(dependencyMap[8]), {}), jsx(require(dependencyMap[9]).ContextMenuContainer, {}), jsx(require(dependencyMap[10]).AlertModalContainer, {}), jsx(require(dependencyMap[5]).ToastContainer, {})];
obj.children = items;
const importDefaultResult = importDefault(dependencyMap[4]);
const _module2 = require(dependencyMap[2]);
let jsxResult = null;
if (_module2.isAndroid()) {
  jsxResult = jsx(require(dependencyMap[11]).AccessibilityAnnouncerLiveRegion, {});
}
const jsxsResult = jsxs(importDefault(dependencyMap[4]), obj);
obj = { lockKeys: ["bfk"] };
const jsxResult1 = jsx(importDefault(dependencyMap[12]), {});
const items1 = [jsx(importDefault(dependencyMap[13]), {}), jsx(importDefault(dependencyMap[14]), {}), jsx(importDefault(dependencyMap[15]), {}), jsx(importDefault(dependencyMap[16]), {})];
obj.children = items1;
const importDefaultResult1 = importDefault(dependencyMap[4]);
const _module3 = require(dependencyMap[17]);
const result = _module3.fileFinishedImporting("modules/main_tabs_v2/native/AppComponents.tsx");

export const APP_EXTRA_COMPONENTS = jsxsResult;
export const APP_EXTRA_COMPONENTS_NEVER_FREEZE = jsxResult;
export const APP_EXTRA_COMPONENTS_EXTERNAL_PIP = jsxResult1;
export const APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO = jsxs(importDefault(dependencyMap[4]), obj);
