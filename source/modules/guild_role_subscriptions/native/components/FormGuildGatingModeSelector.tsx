// Module ID: 16418
// Function ID: 127956
// Name: FormGuildGatingModeSelector
// Dependencies: [31, 27, 33, 4130, 16419, 4471, 1212, 4126, 16421, 10949, 16422, 2]
// Exports: default

// Module 16418 (FormGuildGatingModeSelector)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ container: { padding: 16 }, space: { height: 8 }, alertHeader: { paddingBottom: 16 } });
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormGuildGatingModeSelector.tsx");

export default function FormGuildGatingModeSelector(isFullServerGating) {
  isFullServerGating = isFullServerGating.isFullServerGating;
  const onChange = isFullServerGating.onChange;
  const tmp = callback3();
  const dependencyMap = tmp;
  let obj = isFullServerGating(16419);
  const roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
  let items = [onChange];
  const items1 = [onChange, isFullServerGating, tmp];
  const callback = React.useCallback(() => {
    onChange(false);
  }, items);
  obj = { style: tmp.container, accessibilityRole: "radiogroup", accessibilityState: { disabled: roleSubscriptionSettingsDisabled } };
  const callback1 = React.useCallback(() => {
    if (!isFullServerGating) {
      let obj = onChange(tmp[5]);
      obj = {};
      const intl = isFullServerGating(tmp[6]).intl;
      obj.confirmText = intl.string(isFullServerGating(onChange[6]).t["NX+WJN"]);
      obj = {};
      const obj1 = { style: onChange.alertHeader, variant: "heading-lg/bold", color: "mobile-text-heading-primary" };
      const intl2 = isFullServerGating(tmp[6]).intl;
      obj1.children = intl2.string(isFullServerGating(onChange[6]).t.dmVoOz);
      const items = [outer1_5(isFullServerGating(onChange[7]).Text, obj1), ];
      const obj2 = { variant: "text-md/normal" };
      const intl3 = isFullServerGating(tmp[6]).intl;
      obj2.children = intl3.string(isFullServerGating(onChange[6]).t.mtwzdD);
      items[1] = outer1_5(isFullServerGating(onChange[7]).Text, obj2);
      obj.children = items;
      obj.children = outer1_7(outer1_6, obj);
      obj.show(obj);
    }
    onChange(true);
  }, items1);
  obj = { icon: onChange(10949) };
  let intl = isFullServerGating(1212).intl;
  obj.title = intl.string(isFullServerGating(1212).t.rXqxhF);
  let intl2 = isFullServerGating(1212).intl;
  obj.description = intl2.string(isFullServerGating(1212).t.yQiJne);
  obj.selected = !isFullServerGating;
  obj.onPress = callback;
  obj.disabled = roleSubscriptionSettingsDisabled;
  const items2 = [callback(onChange(16421), obj), callback(View, { style: tmp.space }), ];
  let obj2 = {};
  let obj1 = { style: tmp.space };
  const tmp5 = onChange(16421);
  obj2.icon = onChange(16422);
  let intl3 = isFullServerGating(1212).intl;
  obj2.title = intl3.string(isFullServerGating(1212).t.WzC9s6);
  const intl4 = isFullServerGating(1212).intl;
  obj2.description = intl4.string(isFullServerGating(1212).t.WmagiB);
  obj2.selected = isFullServerGating;
  obj2.onPress = callback1;
  obj2.disabled = roleSubscriptionSettingsDisabled;
  items2[2] = callback(onChange(16421), obj2);
  obj.children = items2;
  return callback2(View, obj);
};
