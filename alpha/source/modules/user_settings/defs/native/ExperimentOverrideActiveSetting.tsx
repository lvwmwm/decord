// Module ID: 18007
// Function ID: 18008
// Name: ExperimentOverrideActiveSetting
// Dependencies: [5362, 1246, 21, 16682, 504, 18008, 16993, 11729, 17835, 2]

// Module 18007 (ExperimentOverrideActiveSetting)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import DevToolsNavigator from "DevToolsNavigator" /* 16682 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16993 */;
import BeakerIcon from "BeakerIcon" /* 17835 */;
import DevToolsContent from "DevToolsContent" /* 18008 */;
import ExperimentStore from "ExperimentStore" /* 5362 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
import size from "module_2" /* 2 */;

const f113892 = () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length;
const f113893 = () => Object.keys(clientOverrides.getClientOverrides()).length;
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
    const stateFromStores = obj.useStateFromStores(items, f113892);
    const items1 = [ApexExperimentStore];
    const obj2 = get_initialized;
    const str = stateFromStores + obj2.useStateFromStores(items1, f113893);
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
    const stateFromStores = obj2.useStateFromStores(items, f113892);
    const items1 = [ApexExperimentStore];
    const obj3 = get_initialized;
    const tmp3 = stateFromStores + obj3.useStateFromStores(items1, f113893) > 0 && staffOrDeveloperSettingPredicate;
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
