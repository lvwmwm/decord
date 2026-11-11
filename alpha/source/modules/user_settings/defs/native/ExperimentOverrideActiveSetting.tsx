// Module ID: 18281
// Function ID: 18282
// Name: ExperimentOverrideActiveSetting
// Dependencies: [5469, 1246, 21, 16939, 504, 18282, 17254, 12317, 13219, 2]

// Module 18281 (ExperimentOverrideActiveSetting)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import BeakerIcon from "BeakerIcon" /* 13219 */;
import DevToolsNavigator from "DevToolsNavigator" /* 16939 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 17254 */;
import DevToolsContent from "DevToolsContent" /* 18282 */;
import ExperimentStore from "ExperimentStore" /* 5469 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
import size from "module_2" /* 2 */;

const f116147 = () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length;
const f116148 = () => Object.keys(clientOverrides.getClientOverrides()).length;
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
    const stateFromStores = obj.useStateFromStores(items, f116147);
    const items1 = [ApexExperimentStore];
    const obj2 = get_initialized;
    const str = stateFromStores + obj2.useStateFromStores(items1, f116148);
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
    const stateFromStores = obj2.useStateFromStores(items, f116147);
    const items1 = [ApexExperimentStore];
    const obj3 = get_initialized;
    const tmp3 = stateFromStores + obj3.useStateFromStores(items1, f116148) > 0 && staffOrDeveloperSettingPredicate;
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
