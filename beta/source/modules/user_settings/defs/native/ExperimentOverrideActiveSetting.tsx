// Module ID: 18118
// Function ID: 18119
// Name: ExperimentOverrideActiveSetting
// Dependencies: [5386, 1246, 21, 16780, 504, 18119, 17095, 11717, 12440, 2]

// Module 18118 (ExperimentOverrideActiveSetting)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import BeakerIcon from "BeakerIcon" /* 12440 */;
import DevToolsNavigator from "DevToolsNavigator" /* 16780 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 17095 */;
import DevToolsContent from "DevToolsContent" /* 18119 */;
import ExperimentStore from "ExperimentStore" /* 5386 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
import size from "module_2" /* 2 */;

const f114929 = () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length;
const f114930 = () => Object.keys(clientOverrides.getClientOverrides()).length;
const jsx = Fragment.jsx;
let obj = {
  useTitle() {
    return "Experiments Overrides Active";
  },
  parent: null,
  IconComponent: BeakerIcon.BeakerIcon,
  useDescription: function useExperimentOverrideActiveDescription() {
    const items = [ExperimentStore];
    const obj = get_initialized;
    const stateFromStores = obj.useStateFromStores(items, f114929);
    const items1 = [ApexExperimentStore];
    const obj2 = get_initialized;
    const str = stateFromStores + obj2.useStateFromStores(items1, f114930);
    const DevToolsContentSubLabel = DevToolsContent.DevToolsContentSubLabel;
    return <DevToolsContentSubLabel label="Experiments overridden: " value={str.toString()} />;
  },
  usePredicate: function useHasExperimentOverrideActive() {
    let allExperimentOverrideDescriptors;
    let clientOverrides;
    const obj = useIsStaffOrDeveloperSettingPredicate;
    const staffOrDeveloperSettingPredicate = obj.useStaffOrDeveloperSettingPredicate();
    const items = [ExperimentStore];
    const obj2 = get_initialized;
    const stateFromStores = obj2.useStateFromStores(items, f114929);
    const items1 = [ApexExperimentStore];
    const obj3 = get_initialized;
    const tmp3 = stateFromStores + obj3.useStateFromStores(items1, f114930) > 0 && staffOrDeveloperSettingPredicate;
    return tmp3;
  },
  onPress: function handleExperimentOverrideActivePress() {
    const obj = DevToolsNavigator;
    obj.navigateToDevTools({ screenKey: "experiments" });
  },
  withArrow: true
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ExperimentOverrideActiveSetting.tsx");

export default pressable;
