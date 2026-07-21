// Module ID: 14091
// Function ID: 107000
// Name: toggle
// Dependencies: []

// Module 14091 (toggle)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const name = arg1(dependencyMap[3]).MobileVisualRefreshExperiment.definition.name;
let obj = arg1(dependencyMap[6]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.s3amTp);
  },
  useDescription() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.6e1ir2);
  },
  parent: arg1(dependencyMap[2]).MobileSetting.APPEARANCE,
  usePredicate: function useIsInDTesterExperimentVariant() {
    const items = [closure_3, closure_4];
    return arg1(dependencyMap[4]).useStateFromStores(items, () => {
      const serverAssignment = serverAssignment.getServerAssignment("user", id.getId(), closure_5);
      let tmp2 = null != serverAssignment;
      if (tmp2) {
        tmp2 = 3 === serverAssignment.variantId;
      }
      return tmp2;
    });
  },
  useValue: function useIsRefreshEnabled() {
    const MobileVisualRefreshExperiment = arg1(dependencyMap[3]).MobileVisualRefreshExperiment;
    return MobileVisualRefreshExperiment.useConfig({ location: "SettingsAppearance" }).enabled;
  },
  onValueChange: function onToggleRefresh(arg0) {
    const dispatch = importDefault(dependencyMap[5]).dispatch;
    if (arg0) {
      let obj = { type: "APEX_EXPERIMENT_OVERRIDE_DELETE", experimentName: name };
      dispatch(obj);
    } else {
      obj = { <string:1348643829>: 1359151103, <string:2734253049>: -46034905, <string:1231311278>: 16777473, experimentName: name };
      dispatch(obj);
    }
  }
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/user_settings/defs/native/MobileVisualRefreshSetting.tsx");

export default toggle;
