// Module ID: 14473
// Function ID: 110596
// Name: useExperimentOverrideActiveCount
// Dependencies: [4045, 1188, 33, 13567, 566, 13568, 13807, 10059, 13578, 2]

// Module 14473 (useExperimentOverrideActiveCount)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
function useExperimentOverrideActiveCount() {
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => Object.keys(outer1_2.getAllExperimentOverrideDescriptors()).length);
  const obj = require(566) /* initialize */;
  const items1 = [closure_3];
  return stateFromStores + require(566) /* initialize */.useStateFromStores(items1, () => Object.keys(outer1_3.getClientOverrides()).length);
}
createToggle = {
  useTitle() {
    return "Experiments Overrides Active";
  },
  parent: null,
  IconComponent: require("BeakerIcon").BeakerIcon,
  useDescription: function useExperimentOverrideActiveDescription() {
    const obj = { label: "Experiments overridden: ", value: useExperimentOverrideActiveCount().toString() };
    return jsx(require(13568) /* DevToolsContentSortButtons */.DevToolsContentSubLabel, { label: "Experiments overridden: ", value: useExperimentOverrideActiveCount().toString() });
  },
  usePredicate: function useHasExperimentOverrideActive() {
    const staffOrDeveloperSettingPredicate = require(13807) /* useStaffOrDeveloperSettingPredicate */.useStaffOrDeveloperSettingPredicate();
    const obj = require(13807) /* useStaffOrDeveloperSettingPredicate */;
    return useExperimentOverrideActiveCount() > 0 && staffOrDeveloperSettingPredicate;
  },
  onPress: function handleExperimentOverrideActivePress() {
    require(13567) /* navigateToDevTools */.navigateToDevTools({ screenKey: "experiments" });
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/defs/native/ExperimentOverrideActiveSetting.tsx");

export default createToggle;
