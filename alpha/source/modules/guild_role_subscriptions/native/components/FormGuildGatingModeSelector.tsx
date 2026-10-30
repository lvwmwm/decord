// Module ID: 19880
// Function ID: 19881
// Name: FormGuildGatingModeSelector
// Dependencies: [19, 17, 21, 5009, 19881, 5954, 1114, 5619, 19883, 8644, 7119, 2]
// Exports: default

// Module 19880 (FormGuildGatingModeSelector)
import react_native from "react-native" /* 17 */;
import intl5 from "intl" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5954 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ container: { padding: 16 }, space: { height: 8 }, alertHeader: { paddingBottom: 16 } });
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormGuildGatingModeSelector.tsx");

export default function FormGuildGatingModeSelector(isFullServerGating) {
  let alertHeader;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items2;
  isFullServerGating = isFullServerGating.isFullServerGating;
  const onChange = isFullServerGating.onChange;
  let tmp = closure_8();
  dependencyMap = tmp;
  let obj = isFullServerGating(19881);
  const roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
  let items = [onChange];
  const items1 = [onChange, isFullServerGating, tmp];
  const callback = react.useCallback(() => {
    onChange(false);
  }, items);
  let obj2 = { style: tmp.container, accessibilityRole: "radiogroup", accessibilityState: { disabled: roleSubscriptionSettingsDisabled }, children: items2 };
  const callback1 = react.useCallback(() => {
    let intl;
    let intl2;
    let intl3;
    let items;
    let obj2;
    const tmp = isFullServerGating;
    if (!tmp) {
      const obj = { confirmText: intl.string(intl5.t["NX+WJN"]), children: metroImportDefault(metroRequire, obj2) };
      const show = actions_AlertActionCreatorsDefault.show;
      actions_AlertActionCreatorsDefault;
      intl = intl5.intl;
      obj2 = { children: items };
      const obj3 = { style: alertHeader.alertHeader, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: intl2.string(intl5.t.dmVoOz) };
      const Text = Text_Text.Text;
      intl2 = intl5.intl;
      items = [hasOwnProperty(Text, obj3), ];
      const obj4 = { variant: "text-md/normal", children: intl3.string(intl5.t.mtwzdD) };
      const Text2 = Text_Text.Text;
      intl3 = intl5.intl;
      items[1] = hasOwnProperty(Text2, obj4);
      show(obj);
    }
    onChange(true);
  }, items1);
  let obj3 = { icon: isFullServerGating(8644).TextIcon, title: intl.string(isFullServerGating(1114).t.rXqxhF), description: intl2.string(isFullServerGating(1114).t.yQiJne), selected: !isFullServerGating, onPress: callback, disabled: roleSubscriptionSettingsDisabled };
  const tmp5 = onChange(19883);
  intl = isFullServerGating(1114).intl;
  intl2 = isFullServerGating(1114).intl;
  items2 = [closure_5(tmp5, obj3), , ];
  let obj4 = { style: tmp.space };
  items2[1] = closure_5(View, obj4);
  const obj5 = { icon: isFullServerGating(7119).KeyIcon, title: intl3.string(isFullServerGating(1114).t.WzC9s6), description: intl4.string(isFullServerGating(1114).t.WmagiB), selected: isFullServerGating, onPress: callback1, disabled: roleSubscriptionSettingsDisabled };
  const tmp6 = onChange(19883);
  intl3 = isFullServerGating(1114).intl;
  intl4 = isFullServerGating(1114).intl;
  items2[2] = closure_5(tmp6, obj5);
  return closure_7(View, obj2);
};
