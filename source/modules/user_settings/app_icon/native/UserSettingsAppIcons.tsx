// Module ID: 14237
// Function ID: 107601
// Name: NitroUpsellButton
// Dependencies: []

// Module 14237 (NitroUpsellButton)
function NitroUpsellButton() {
  const tmp = callback2();
  const arg1 = tmp;
  const importDefault = importDefault(dependencyMap[10])().analyticsLocations;
  let obj = { page: constants.APP_ICONS };
  const dependencyMap = obj;
  obj = {
    onPress() {
      let obj = analyticsLocations(obj[12]);
      obj = { analyticsLocation: obj, analyticsLocations };
      const tmp = tmp(obj[14])(obj[13], obj.paths);
      obj.premiumFeatureCardOrder = tmp(obj[15]).PremiumFeatureCardOrder.TIER_2_LEADING;
      obj.pushLazy(tmp, obj);
    }
  };
  const intl = arg1(dependencyMap[16]).intl;
  obj.text = intl.string(arg1(dependencyMap[16]).t.M0rDSO);
  obj.textStyle = tmp.buttonText;
  obj.renderRightIcon = function renderRightIcon() {
    const obj = { style: tmp.nitroWheel };
    return callback(tmp(obj[11]).NitroWheel, obj);
  };
  obj.color = arg1(dependencyMap[11]).Button.Colors.TRANSPARENT;
  obj.renderLinearGradient = function renderLinearGradient() {
    const obj = { style: tmp.linearGradient };
    const tmp = analyticsLocations(obj[17]);
    obj.start = tmp(obj[18]).HorizontalGradient.START;
    obj.end = tmp(obj[18]).HorizontalGradient.END;
    obj.colors = obj.PREMIUM_TIER_2_TRI_COLOR;
    return callback(tmp, obj);
  };
  return callback(arg1(dependencyMap[11]).Button, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const View = arg1(dependencyMap[2]).View;
let closure_5 = importDefault(dependencyMap[3]);
const importAllResult = importAll(dependencyMap[1]);
({ UpsellTypes: closure_6, AnalyticsPages: closure_7 } = arg1(dependencyMap[4]));
const getIconById = arg1(dependencyMap[5]).getIconById;
const Gradients = arg1(dependencyMap[6]).Gradients;
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = arg1(dependencyMap[7]));
let obj1 = arg1(dependencyMap[8]);
let obj = { nitroWheel: {}, upsellButtonContainer: {} };
obj = { borderRadius: importDefault(dependencyMap[9]).radii.xl };
obj.linearGradient = obj;
obj1 = { color: importDefault(dependencyMap[9]).colors.WHITE };
obj.buttonText = obj1;
let closure_13 = obj1.createStyles(obj);
const tmp3 = arg1(dependencyMap[7]);
const memoResult = importAllResult.memo(() => {
  function _onSelect(arg0) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = _onSelect(tmp);
    const _onSelect = obj;
    return obj(...arguments);
  }
  let obj = arg1(dependencyMap[19]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const arg1 = stateFromStores;
  let obj1 = arg1(dependencyMap[20]);
  const importDefault = obj1.useCurrentAppIcon();
  let obj2 = arg1(dependencyMap[21]);
  const isPremiumResult = obj2.isPremium(stateFromStores);
  const dependencyMap = isPremiumResult;
  obj = {};
  obj = {};
  obj1 = { accessibilityRole: "radiogroup" };
  obj2 = {
    onSelect(arg0) {
      return _onSelect(...arguments);
    }
  };
  obj1.children = callback(importDefault(dependencyMap[25]), obj2);
  obj.children = callback(View, obj1);
  const items1 = [callback(arg1(dependencyMap[24]).Form, obj), ];
  let tmp6 = !isPremiumResult;
  if (tmp6) {
    const obj3 = { style: tmp.upsellButtonContainer, children: callback(NitroUpsellButton, {}) };
    tmp6 = callback(View, obj3);
  }
  items1[1] = tmp6;
  obj.children = items1;
  return closure_12(closure_11, obj);
});
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/user_settings/app_icon/native/UserSettingsAppIcons.tsx");

export default memoResult;
