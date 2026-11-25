// Module ID: 17201
// Function ID: 17202
// Name: ExperimentOverrideActiveSetting
// Dependencies: [5530, 1245, 21, 15831, 504, 17202, 16152, 11942, 17012, 2]

// Module 17201 (ExperimentOverrideActiveSetting)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import DevToolsNavigator from "DevToolsNavigator" /* 15831 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16152 */;
import BeakerIcon from "BeakerIcon" /* 17012 */;
import DevToolsContent from "DevToolsContent" /* 17202 */;
import ExperimentStore from "ExperimentStore" /* 5530 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1245 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

const f111540 = () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length;
const f111541 = () => Object.keys(clientOverrides.getClientOverrides()).length;
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
    const stateFromStores = obj.useStateFromStores(items, f111540);
    const items1 = [ApexExperimentStore];
    const obj2 = get_initialized;
    const str = stateFromStores + obj2.useStateFromStores(items1, f111541);
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
    const stateFromStores = obj2.useStateFromStores(items, f111540);
    const items1 = [ApexExperimentStore];
    const obj3 = get_initialized;
    const tmp3 = stateFromStores + obj3.useStateFromStores(items1, f111541) > 0 && staffOrDeveloperSettingPredicate;
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
