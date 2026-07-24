// Module ID: 15935
// Function ID: 123075
// Name: useHideSelfVideo
// Dependencies: [1194, 4177, 653, 4191, 566, 8882, 2]
// Exports: default

// Module 15935 (useHideSelfVideo)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { VideoToggleState } from "ME";
import DesktopSources from "DesktopSources";

let closure_6;
let closure_7;
const require = arg1;
({ MediaEngineContextTypes: closure_6, Features: closure_7 } = DesktopSources);
const result = require("ME").fileFinishedImporting("modules/calls/useHideSelfVideo.tsx");

export default function useHideSelfVideo(arg0) {
  let DEFAULT = arg1;
  if (arg1 === undefined) {
    DEFAULT = constants.DEFAULT;
  }
  let stateFromStores;
  const items = [_isNativeReflectConstruct];
  stateFromStores = DEFAULT(566).useStateFromStores(items, () => outer1_3.getId());
  const obj = DEFAULT(566);
  const items1 = [closure_4];
  const stateFromStores1 = DEFAULT(566).useStateFromStores(items1, () => outer1_4.supports(outer1_7.DISABLE_VIDEO));
  const obj2 = DEFAULT(566);
  const items2 = [closure_4];
  const items3 = [stateFromStores, DEFAULT];
  let tmp5 = null == arg0;
  const stateFromStores2 = DEFAULT(566).useStateFromStores(items2, () => outer1_4.isLocalVideoDisabled(stateFromStores, DEFAULT), items3);
  if (!tmp5) {
    tmp5 = arg0 === stateFromStores;
  }
  if (tmp5) {
    tmp5 = stateFromStores1;
  }
  const items4 = [
    tmp5,
    stateFromStores2,
    (arg0) => {
      stateFromStores(outer1_2[5]).setDisableLocalVideo(stateFromStores, arg0 ? outer1_5.DISABLED : outer1_5.MANUAL_ENABLED, DEFAULT);
    }
  ];
  return items4;
};
