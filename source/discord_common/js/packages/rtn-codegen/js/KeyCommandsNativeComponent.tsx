// Module ID: 13710
// Function ID: 13711
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [106, 65, 2]

// Module 13710 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

let obj = { uiViewClassName: "KeyCommandsView", directEventTypes: { topKeyCommand: { registrationName: "onKeyCommand" } }, validAttributes: null };
obj = { keyCommands: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onKeyCommand: true }));
obj[2] = obj;
const value = setRuntimeConfigProvider.get("KeyCommandsView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/KeyCommandsNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
