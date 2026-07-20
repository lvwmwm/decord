// Module ID: 15747
// Function ID: 120348
// Name: useHideSelfVideo
// Dependencies: [0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 15747 (useHideSelfVideo)
import closure_3 from "result";
import closure_4 from "result";
import { VideoToggleState } from "result";
import result from "result";
import result from "result";

({ MediaEngineContextTypes: closure_6, Features: closure_7 } = result);
result = result.fileFinishedImporting("modules/calls/useHideSelfVideo.tsx");

export default function useHideSelfVideo(arg0) {
  let DEFAULT = arg1;
  if (arg1 === undefined) {
    DEFAULT = constants.DEFAULT;
  }
  const arg1 = DEFAULT;
  let importDefault;
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => id.getId());
  importDefault = stateFromStores;
  const obj = arg1(dependencyMap[4]);
  const items1 = [closure_4];
  const stateFromStores1 = arg1(dependencyMap[4]).useStateFromStores(items1, () => closure_4.supports(constants.DISABLE_VIDEO));
  const obj2 = arg1(dependencyMap[4]);
  const items2 = [closure_4];
  const items3 = [stateFromStores, DEFAULT];
  let tmp5 = null == arg0;
  const stateFromStores2 = arg1(dependencyMap[4]).useStateFromStores(items2, () => closure_4.isLocalVideoDisabled(stateFromStores, DEFAULT), items3);
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
      stateFromStores(closure_2[5]).setDisableLocalVideo(stateFromStores, arg0 ? closure_5.DISABLED : closure_5.MANUAL_ENABLED, DEFAULT);
    }
  ];
  return items4;
};
