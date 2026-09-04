// Module ID: 15666
// Function ID: 15667
// Name: pressable
// Dependencies: [4394, 1209, 21, 14506, 586, 15667, 14767, 11400, 15507, 2]

// Module 15666 (pressable)
import initialize from "initialize" /* 586 */;
import navigateToDevTools from "navigateToDevTools" /* 14506 */;
import useStaffOrDeveloperSettingPredicate from "useStaffOrDeveloperSettingPredicate" /* 14767 */;
import DevToolsContentSortButtons from "DevToolsContentSortButtons" /* 15667 */;
import closure_2 from "getHash" /* 4394 */;
import closure_3 from "initialize" /* 1209 */;
import { jsx } from "jsxProd" /* 21 */;
import createToggle from "createToggle" /* 11400 */;

require = arg1;
createToggle = {
  useTitle() {
    return "Experiments Overrides Active";
  },
  parent: null,
  IconComponent: require("BeakerIcon").BeakerIcon,
  useDescription: function useExperimentOverrideActiveDescription() {
    let obj = initialize;
    const items = [closure_2];
    const stateFromStores = obj.useStateFromStores(items, () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length);
    const items1 = [closure_3];
    const obj2 = initialize;
    obj = { label: "Experiments overridden: ", value: stateFromStores + initialize.useStateFromStores(items1, () => Object.keys(clientOverrides.getClientOverrides()).length).toString() };
    return jsx(DevToolsContentSortButtons.DevToolsContentSubLabel, { label: "Experiments overridden: ", value: stateFromStores + initialize.useStateFromStores(items1, () => Object.keys(clientOverrides.getClientOverrides()).length).toString() });
  },
  usePredicate: function useHasExperimentOverrideActive() {
    const staffOrDeveloperSettingPredicate = useStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
    const obj = useStaffOrDeveloperSettingPredicate;
    const items = [closure_2];
    const stateFromStores = initialize.useStateFromStores(items, () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length);
    const obj2 = initialize;
    const items1 = [closure_3];
    const obj3 = initialize;
    return stateFromStores + initialize.useStateFromStores(items1, () => Object.keys(clientOverrides.getClientOverrides()).length) > 0 && staffOrDeveloperSettingPredicate;
  },
  onPress: function handleExperimentOverrideActivePress() {
    navigateToDevTools.navigateToDevTools({ screenKey: "experiments" });
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ExperimentOverrideActiveSetting.tsx");

export default createToggle;
