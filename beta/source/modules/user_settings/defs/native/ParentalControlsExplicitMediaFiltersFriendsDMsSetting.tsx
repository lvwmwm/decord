// Module ID: 16213
// Function ID: 16214
// Name: ParentalControlsExplicitMediaFiltersFriendsDMsSetting
// Dependencies: [7784, 8238, 558, 568, 15091, 7847, 15095, 1119, 15088, 1190, 11594, 2]

// Module 16213 (ParentalControlsExplicitMediaFiltersFriendsDMsSetting)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15091 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 15095 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7784 */;

const ExplicitMediaRedactionUtils = obj(7847);
require = fn;
const ReactCompilerGating = fn(558);
function getTitle() {
  const intl = util.intl;
  return intl.string(util.t["+uI23H"]);
}
const SettingBuilders = fn(11594);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let obj = require;
  let tmp = dependencyMap;
  const cResult = c.c(2);
  const parentalControlledExplicitContentSettings = useParentalControlSettings.useParentalControlledExplicitContentSettings();
  let prop;
  if (parentalControlledExplicitContentSettings != null) {
    prop = parentalControlledExplicitContentSettings.explicitContentFriendDm;
  }
  if (null == prop) {
    return null;
  } else if (cResult[0] !== prop) {
    obj = ExplicitMediaRedactionUtils;
    tmp = obj.redactionSettingToRenderedString(prop)();
    cResult[0] = prop;
    cResult[1] = tmp;
  }
}) : (() => {
  const parentalControlledExplicitContentSettings = useParentalControlSettings.useParentalControlledExplicitContentSettings();
  let prop;
  if (parentalControlledExplicitContentSettings != null) {
    prop = parentalControlledExplicitContentSettings.explicitContentFriendDm;
  }
  let tmp5 = null;
  if (null != prop) {
    tmp5 = ExplicitMediaRedactionUtils.redactionSettingToRenderedString(prop)();
    const tmpResult = ExplicitMediaRedactionUtils;
  }
  return tmp5;
});
const pressable = SettingBuilders.createPressable({
  useTitle: getTitle,
  parent: fn(8238).MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    let obj = require;
    let tmp = dependencyMap;
    const cResult = c.c(2);
    const parentalControlledExplicitContentSettings = useParentalControlSettings.useParentalControlledExplicitContentSettings();
    let prop;
    if (parentalControlledExplicitContentSettings != null) {
      prop = parentalControlledExplicitContentSettings.explicitContentFriendDm;
    }
    if (null == prop) {
      return null;
    } else if (cResult[0] !== prop) {
      obj = ExplicitMediaRedactionUtils;
      tmp = obj.redactionSettingToRenderedString(prop)();
      cResult[0] = prop;
      cResult[1] = tmp;
    }
  }) : (() => {
    const parentalControlledExplicitContentSettings = useParentalControlSettings.useParentalControlledExplicitContentSettings();
    let prop;
    if (parentalControlledExplicitContentSettings != null) {
      prop = parentalControlledExplicitContentSettings.explicitContentFriendDm;
    }
    let tmp5 = null;
    if (null != prop) {
      tmp5 = ExplicitMediaRedactionUtils.redactionSettingToRenderedString(prop)();
      const tmpResult = ExplicitMediaRedactionUtils;
    }
    return tmp5;
  }),
  onPress: function onObscuredContentFriendsDmOnPress() {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      const intl = selectedTeenId(1119).intl;
      const obj = selectedTeenId(15095);
      const stringResult = intl.string(selectedTeenId(1119).t.GYpoAq);
      const obj3 = { title: stringResult, subtitle: null, handlePress: null, currentValue: null, excluded: null };
      const intl2 = selectedTeenId(1119).intl;
      obj3.subtitle = intl2.string(selectedTeenId(1119).t["+uI23H"]);
      obj3.handlePress = function handlePress(explicitContentFriendDm) {
        return FamilyCenterControlledSettingsUtils.updateExplicitContentSetting(selectedTeenId, { explicitContentFriendDm });
      };
      obj3.currentValue = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentFriendDm;
      const items = [selectedTeenId(1190).ExplicitContentRedaction.SHOW];
      obj3.excluded = items;
      const result = selectedTeenId(15088).handleSensitiveMediaFilterPress(obj3);
      const obj2 = selectedTeenId(15088);
    }
  },
  unsearchable: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersFriendsDMsSetting.tsx");

export default pressable;
