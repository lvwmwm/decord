// Module ID: 14687
// Function ID: 14688
// Name: pressable
// Dependencies: [7906, 11400, 14682, 2]

// Module 14687 (pressable)
import set from "set" /* 2 */;
import MobileUserSettings from "MobileUserSettings" /* 7906 */;
import AGE_GROUP_CONFIRM_ROW_PROPS from "AGE_GROUP_CONFIRM_ROW_PROPS" /* 14682 */;
import createToggle from "createToggle" /* 11400 */;

const obj = {};
const merged = Object.assign(AGE_GROUP_CONFIRM_ROW_PROPS.AGE_GROUP_CONFIRM_ROW_PROPS);
obj.parent = MobileUserSettings.MobileUserSettings.ACCOUNT_AGE_GROUP;
obj.usePredicate = AGE_GROUP_CONFIRM_ROW_PROPS.useShowAccountStatusAgeGroupRow;
const pressable = createToggle.createPressable(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmAccountStatusSetting.tsx");

export default pressable;
