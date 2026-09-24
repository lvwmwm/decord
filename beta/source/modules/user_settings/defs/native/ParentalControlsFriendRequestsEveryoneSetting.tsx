// Module ID: 16220
// Function ID: 16221
// Name: ParentalControlsFriendRequestsEveryoneSetting
// Dependencies: [19, 7816, 8270, 1078, 558, 568, 8955, 15095, 7273, 11630, 1119, 2]

// Module 16220 (ParentalControlsFriendRequestsEveryoneSetting)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7273 */;
import useSelectedTeen from "useSelectedTeen" /* 8955 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 15095 */;
import noop from "module_19" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7816 */;

require = fn;
const Constants = fn(1078);
({ AllFriendSourceFlags: closure_4, FriendSourceFlags: hasOwnProperty } = Constants);
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11630);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const selectedTeenId = useSelectedTeen.useSelectedTeenId();
  const ParentalControlledFriendSourceFlags = tmp(15095).ParentalControlledFriendSourceFlags;
  const controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
  if (cResult[0] !== controlledSetting) {
    const flags = tmp(7273).computeFlags(controlledSetting);
    cResult[0] = controlledSetting;
    cResult[1] = flags;
    let tmp6 = flags;
    const tmpResult = tmp(7273);
  } else {
    tmp6 = cResult[1];
  }
  return tmp6.all;
}) : (() => {
  const selectedTeenId = controlledSetting(8955).useSelectedTeenId();
  const ParentalControlledFriendSourceFlags = controlledSetting(15095).ParentalControlledFriendSourceFlags;
  controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
  const items = [controlledSetting];
  return noop.useMemo(() => UserSettingsUtils.computeFlags(controlledSetting), items).all;
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.mGr3CX);
  },
  parent: fn(8270).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(2);
    const selectedTeenId = useSelectedTeen.useSelectedTeenId();
    const ParentalControlledFriendSourceFlags = tmp(15095).ParentalControlledFriendSourceFlags;
    const controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
    if (cResult[0] !== controlledSetting) {
      const flags = tmp(7273).computeFlags(controlledSetting);
      cResult[0] = controlledSetting;
      cResult[1] = flags;
      let tmp6 = flags;
      const tmpResult = tmp(7273);
    } else {
      tmp6 = cResult[1];
    }
    return tmp6.all;
  }) : (() => {
    const selectedTeenId = controlledSetting(8955).useSelectedTeenId();
    const ParentalControlledFriendSourceFlags = controlledSetting(15095).ParentalControlledFriendSourceFlags;
    controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
    const items = [controlledSetting];
    return noop.useMemo(() => UserSettingsUtils.computeFlags(controlledSetting), items).all;
  }),
  onValueChange: function onFriendRequestsEveryoneSettingValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      const ParentalControlledFriendSourceFlags = ParentalControlledUserSettings.ParentalControlledFriendSourceFlags;
      if (arg0) {
        let tmp7 = tmp5;
      } else {
        tmp7 = tmp5 & ~constants.NO_RELATION;
      }
      const result = ParentalControlledFriendSourceFlags.updateControlledSetting(selectedTeenId, tmp7);
    }
  },
  unsearchable: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsFriendRequestsEveryoneSetting.tsx");

export default toggle;
