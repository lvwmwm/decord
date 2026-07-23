// Module ID: 14412
// Function ID: 110146
// Name: useExperimentOverrideActiveCount
// Dependencies: [4044, 1188, 33, 13503, 566, 13504, 13745, 10095, 13514, 2]

// Module 14412 (useExperimentOverrideActiveCount)
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
    return jsx(require(13504) /* DevToolsContentSortButtons */.DevToolsContentSubLabel, { label: "Experiments overridden: ", value: useExperimentOverrideActiveCount().toString() });
  },
  usePredicate: function useHasExperimentOverrideActive() {
    const staffOrDeveloperSettingPredicate = require(13745) /* useStaffOrDeveloperSettingPredicate */.useStaffOrDeveloperSettingPredicate();
    const obj = require(13745) /* useStaffOrDeveloperSettingPredicate */;
    return useExperimentOverrideActiveCount() > 0 && staffOrDeveloperSettingPredicate;
  },
  onPress: function handleExperimentOverrideActivePress() {
    require(13503) /* navigateToDevTools */.navigateToDevTools({ screenKey: "experiments" });
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/defs/native/ExperimentOverrideActiveSetting.tsx");

export default createToggle;
