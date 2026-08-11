// Module ID: 14778
// Function ID: 14779
// Name: pressable
// Dependencies: [4217, 1212, 21, 13850, 589, 13851, 14097, 10452, 13861, 2]

// Module 14778 (pressable)
import getHash from "getHash";
import initialize from "initialize";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    return "Experiments Overrides Active";
  },
  parent: null,
  IconComponent: require("BeakerIcon").BeakerIcon,
  useDescription: function useExperimentOverrideActiveDescription() {
    let obj = require(589) /* initialize */;
    const items = [getHash];
    const stateFromStores = obj.useStateFromStores(items, () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length);
    const items1 = [initialize];
    const obj2 = require(589) /* initialize */;
    obj = { label: "Experiments overridden: ", value: null };
    obj[1] = stateFromStores + require(589) /* initialize */.useStateFromStores(items1, () => Object.keys(clientOverrides.getClientOverrides()).length).toString();
    return jsx(require(13851) /* DevToolsContentSortButtons */.DevToolsContentSubLabel, { label: "Experiments overridden: ", value: null });
  },
  usePredicate: function useHasExperimentOverrideActive() {
    const staffOrDeveloperSettingPredicate = require(14097) /* useStaffOrDeveloperSettingPredicate */.useStaffOrDeveloperSettingPredicate();
    const obj = require(14097) /* useStaffOrDeveloperSettingPredicate */;
    const items = [getHash];
    const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length);
    const obj2 = require(589) /* initialize */;
    const items1 = [initialize];
    const obj3 = require(589) /* initialize */;
    return stateFromStores + require(589) /* initialize */.useStateFromStores(items1, () => Object.keys(clientOverrides.getClientOverrides()).length) > 0 && staffOrDeveloperSettingPredicate;
  },
  onPress: function handleExperimentOverrideActivePress() {
    require(13850) /* navigateToDevTools */.navigateToDevTools({ screenKey: "experiments" });
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/defs/native/ExperimentOverrideActiveSetting.tsx");

export default createToggle;
