// Module ID: 10449
// Function ID: 10450
// Name: useIsSocialLayerParentApplication
// Dependencies: [19, 676, 7529, 2]
// Exports: default, getIsSocialLayerParentApplication

// Module 10449 (useIsSocialLayerParentApplication)
import noop from "noop";
import { ApplicationFlags } from "ME";

const require = arg1;
const result = require("getApplicationFlags").fileFinishedImporting("modules/applications/useIsSocialLayerParentApplication.tsx");

export default function useIsSocialLayerParentApplication(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  return React.useMemo(() => callback(outer1_1[2]).hasApplicationFlag(callback, outer1_3.PARENT), items);
};
export const getIsSocialLayerParentApplication = function getIsSocialLayerParentApplication(application) {
  return require(7529) /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.PARENT);
};
