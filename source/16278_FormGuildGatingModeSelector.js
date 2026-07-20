// Module ID: 16278
// Function ID: 125648
// Name: FormGuildGatingModeSelector
// Dependencies: []
// Exports: default

// Module 16278 (FormGuildGatingModeSelector)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let closure_8 = arg1(dependencyMap[3]).createStyles({ container: { padding: 16 }, space: { height: 8 }, alertHeader: { paddingBottom: 16 } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormGuildGatingModeSelector.tsx");

export default function FormGuildGatingModeSelector(isFullServerGating) {
  isFullServerGating = isFullServerGating.isFullServerGating;
  const arg1 = isFullServerGating;
  const onChange = isFullServerGating.onChange;
  const importDefault = onChange;
  const tmp = callback3();
  const dependencyMap = tmp;
  let obj = arg1(dependencyMap[4]);
  const roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
  const items = [onChange];
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
      obj.confirmText = intl.string(isFullServerGating(onChange[6]).t.NX+WJN);
      obj = {};
      const obj1 = { Promise: "text-sm/normal", marginTop: "text-link", flags: true, style: onChange.alertHeader };
      const intl2 = isFullServerGating(tmp[6]).intl;
      obj1.children = intl2.string(isFullServerGating(onChange[6]).t.dmVoOz);
      const items = [callback(isFullServerGating(onChange[7]).Text, obj1), ];
      const obj2 = { variant: "text-md/normal" };
      const intl3 = isFullServerGating(tmp[6]).intl;
      obj2.children = intl3.string(isFullServerGating(onChange[6]).t.mtwzdD);
      items[1] = callback(isFullServerGating(onChange[7]).Text, obj2);
      obj.children = items;
      obj.children = callback2(closure_6, obj);
      obj.show(obj);
    }
    onChange(true);
  }, items1);
  obj = { icon: importDefault(dependencyMap[9]) };
  const intl = arg1(dependencyMap[6]).intl;
  obj.title = intl.string(arg1(dependencyMap[6]).t.rXqxhF);
  const intl2 = arg1(dependencyMap[6]).intl;
  obj.description = intl2.string(arg1(dependencyMap[6]).t.yQiJne);
  obj.selected = !isFullServerGating;
  obj.onPress = callback;
  obj.disabled = roleSubscriptionSettingsDisabled;
  const items2 = [callback(importDefault(dependencyMap[8]), obj), callback(View, { style: tmp.space }), ];
  const obj2 = {};
  const obj1 = { style: tmp.space };
  const tmp5 = importDefault(dependencyMap[8]);
  obj2.icon = importDefault(dependencyMap[10]);
  const intl3 = arg1(dependencyMap[6]).intl;
  obj2.title = intl3.string(arg1(dependencyMap[6]).t.WzC9s6);
  const intl4 = arg1(dependencyMap[6]).intl;
  obj2.description = intl4.string(arg1(dependencyMap[6]).t.WmagiB);
  obj2.selected = isFullServerGating;
  obj2.onPress = callback1;
  obj2.disabled = roleSubscriptionSettingsDisabled;
  items2[2] = callback(importDefault(dependencyMap[8]), obj2);
  obj.children = items2;
  return callback2(View, obj);
};
