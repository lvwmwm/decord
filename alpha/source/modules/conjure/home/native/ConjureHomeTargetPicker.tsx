// Module ID: 12944
// Function ID: 12945
// Name: ConjureHomeTargetPicker
// Dependencies: [19, 21, 1114, 3865, 12938, 12431, 9738, 9853, 5629, 11377, 2]
// Exports: default

// Module 12944 (ConjureHomeTargetPicker)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import UserIcon from "UserIcon" /* 12431 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let react = react_mod;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/conjure/home/native/ConjureHomeTargetPicker.tsx");

export default function ConjureHomeTargetPicker(target) {
  let intl2;
  target = target.target;
  const guilds = target.guilds;
  const onChange = target.onChange;
  let name;
  let intl = target(onChange[2]).intl;
  const stringResult = intl.string(guilds(onChange[3]).UPLaGM);
  react = stringResult;
  let tmp5 = null;
  const tmp3 = guilds;
  if (target !== target(onChange[4]).CONJURE_TARGET_USER) {
    let found = guilds.find((id) => id.id === target);
    if (found == null) {
      found = null;
    }
    tmp5 = found;
  }
  name = undefined;
  if (tmp5 != null) {
    name = tmp5.name;
  }
  if (name == null) {
    name = stringResult;
  }
  let items = [guilds, onChange, stringResult];
  const memo = react.useMemo(() => {
    let obj = {
      label,
      IconComponent: UserIcon.UserIcon,
      action() {
        return closure_1_2(target(onChange[4]).CONJURE_TARGET_USER);
      }
    };
    const items = [
      obj,
      ...guilds.map((label) => {
        const obj = {
          label: label.name,
          IconComponent: target(onChange[6]).ServerIcon,
          action() {
            return onChange(label.id);
          }
        };
        return obj;
      })
    ];
    return items;
  }, items);
  let obj = {
    items: memo,
    align: "above",
    title: intl2.string(tmp3(onChange[3]).NyVn6T),
    children(arg0) {
      let accessibilityActions;
      let onAccessibilityAction;
      let onPress;
      let ref;
      ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
      const Button = components_Button_Button.Button;
      const intl = intl3.intl;
      const obj2 = { name };
      return <Button ref={ref} variant="tertiary" size="sm" shrink text={name} icon={null} iconPosition="end" onPress={onPress} accessibilityLabel={intl.formatToPlainString(_modDef3865.Lyx6pW, obj2)} accessibilityActions={accessibilityActions} onAccessibilityAction={onAccessibilityAction} />;
    }
  };
  const ContextMenu = tmp(tmp2[7]).ContextMenu;
  intl2 = tmp(tmp2[2]).intl;
  return name(ContextMenu, obj);
};
