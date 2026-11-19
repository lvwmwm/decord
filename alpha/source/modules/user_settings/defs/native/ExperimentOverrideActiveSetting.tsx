// Module ID: 17240
// Function ID: 17241
// Name: ExperimentOverrideActiveSetting
// Dependencies: [5409, 1246, 21, 15736, 504, 17241, 16057, 11875, 17057, 2]

// Module 17240 (ExperimentOverrideActiveSetting)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import DevToolsNavigator from "DevToolsNavigator" /* 15736 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16057 */;
import BeakerIcon from "BeakerIcon" /* 17057 */;
import DevToolsContent from "DevToolsContent" /* 17241 */;
import ExperimentStore from "ExperimentStore" /* 5409 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
import size from "module_2" /* 2 */;

const f112966 = () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length;
const f112967 = () => Object.keys(clientOverrides.getClientOverrides()).length;
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
    const stateFromStores = obj.useStateFromStores(items, f112966);
    const items1 = [ApexExperimentStore];
    const obj2 = get_initialized;
    const str = stateFromStores + obj2.useStateFromStores(items1, f112967);
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
    const stateFromStores = obj2.useStateFromStores(items, f112966);
    const items1 = [ApexExperimentStore];
    const obj3 = get_initialized;
    const tmp3 = stateFromStores + obj3.useStateFromStores(items1, f112967) > 0 && staffOrDeveloperSettingPredicate;
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
