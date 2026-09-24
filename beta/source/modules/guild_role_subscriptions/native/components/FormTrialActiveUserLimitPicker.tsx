// Module ID: 18220
// Function ID: 18221
// Name: FormTrialActiveUserLimitPicker
// Dependencies: [19, 21, 18221, 14204, 1119, 4757, 9568, 1984, 2]
// Exports: default

// Module 18220 (FormTrialActiveUserLimitPicker)
import util from "util" /* 1119 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let c4 = "GuildRoleSubscriptionTrialActiveUserLimitSelect";
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormTrialActiveUserLimitPicker.tsx");

export default function FormTrialActiveUserLimitPicker(activeTrialUserlimit) {
  const str = activeTrialUserlimit.activeTrialUserlimit;
  const onChange = activeTrialUserlimit.onChange;
  dependencyMap = onChange(18221)();
  if (null == str) {
    let intl = str(1119).intl;
    let stringResult = intl.string(str(1119).t.zHfL6o);
  } else {
    stringResult = str.toString();
  }
  return jsx(onChange(14204), {
    label: stringResult,
    onPress() {
      const obj2 = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
      const obj = ActionSheetActionCreatorsDefault;
      const intl = util.intl;
      obj2.title = intl.string(util.t["/JD9oe"]);
      obj2.items = items;
      obj2.onItemSelect = function onItemSelect(arg0) {
        closure_1_1(arg0);
        onChange(closure_2[5]).hideActionSheet(closure_2_4);
      };
      obj2.selectedItem = str;
      obj.openLazy(asyncRequireImpl(9568, dependencyMap.paths), c4, obj2);
    },
    disabled: activeTrialUserlimit.disabled
  });
};
