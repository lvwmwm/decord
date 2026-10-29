// Module ID: 12795
// Function ID: 12796
// Name: ConjureHomeTargetPicker
// Dependencies: [19, 21, 558, 576, 1125, 3864, 12789, 12268, 9712, 5281, 11172, 9827, 2]

// Module 12795 (ConjureHomeTargetPicker)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1125 */;
import _modDef3864 from "module_3864" /* 3864 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import UserIcon from "UserIcon" /* 12268 */;
import conjureTarget from "conjureTarget" /* 12789 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let react = react_mod;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureHomeTargetPicker(target) {
  let first;
  let guilds;
  let name;
  let onChange;
  let tmp23;
  let obj = target(name[3]);
  const cResult = obj.c(18);
  target = target.target;
  ({ guilds, onChange } = target);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = tmp2(tmp3[4]).intl;
    const stringResult = intl.string(onChange(name[5]).UPLaGM);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guilds) {
    let tmp8;
    let tmp13;
    let tmp15;
    if (cResult[2] === target) {
      tmp8 = cResult[3];
    }
    name = undefined;
    if (tmp8 != null) {
      name = tmp8.name;
    }
    if (name == null) {
      name = first;
    }
    if (cResult[4] !== onChange) {
      let obj2 = {
        label: first,
        IconComponent: target(name[7]).UserIcon,
        action() {
              return onChange(conjureTarget.CONJURE_TARGET_USER);
            }
      };
      cResult[4] = onChange;
      cResult[5] = obj2;
      tmp13 = obj2;
    } else {
      tmp13 = cResult[5];
    }
    if (cResult[6] === guilds) {
      if (cResult[7] === onChange) {
        let tmp14;
        let tmp19;
        if (cResult[8] === tmp13) {
          tmp14 = cResult[9];
        }
        const _Symbol = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp2(tmp3[4]).intl;
          const stringResult1 = intl2.string(onChange(name[5]).NyVn6T);
          cResult[12] = stringResult1;
          tmp19 = stringResult1;
        } else {
          tmp19 = cResult[12];
        }
        if (cResult[13] !== name) {
          class P {
            constructor(arg0) {
              let accessibilityActions;
              let onAccessibilityAction;
              let onPress;
              let ref;
              ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
              const Button = components_Button_Button.Button;
              const intl = intl3.intl;
              const obj2 = { name };
              return <Button ref={ref} variant="tertiary" size="sm" shrink text={name} icon={null} iconPosition="end" onPress={onPress} accessibilityLabel={intl.formatToPlainString(_modDef3864.Lyx6pW, obj2)} accessibilityActions={accessibilityActions} onAccessibilityAction={onAccessibilityAction} />;
            }
          }
          cResult[13] = name;
          cResult[14] = P;
        } else {
          class P {
            constructor(arg0) {
              let accessibilityActions;
              let onAccessibilityAction;
              let onPress;
              let ref;
              ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
              const Button = components_Button_Button.Button;
              const intl = intl3.intl;
              const obj2 = { name };
              return <Button ref={ref} variant="tertiary" size="sm" shrink text={name} icon={null} iconPosition="end" onPress={onPress} accessibilityLabel={intl.formatToPlainString(_modDef3864.Lyx6pW, obj2)} accessibilityActions={accessibilityActions} onAccessibilityAction={onAccessibilityAction} />;
            }
          }
        }
        if (cResult[15] === tmp14) {
          class P {
            constructor(arg0) {
              let accessibilityActions;
              let onAccessibilityAction;
              let onPress;
              let ref;
              ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
              const Button = components_Button_Button.Button;
              const intl = intl3.intl;
              const obj2 = { name };
              return <Button ref={ref} variant="tertiary" size="sm" shrink text={name} icon={null} iconPosition="end" onPress={onPress} accessibilityLabel={intl.formatToPlainString(_modDef3864.Lyx6pW, obj2)} accessibilityActions={accessibilityActions} onAccessibilityAction={onAccessibilityAction} />;
            }
          }
          return tmp23;
        }
        const tmp25 = jsx(target(name[11]).ContextMenu, { items: tmp14, align: "above", title: tmp19, children: tmp22 });
        cResult[15] = tmp14;
        cResult[16] = tmp22;
        cResult[17] = tmp25;
        tmp23 = tmp25;
      }
    }
    if (cResult[10] !== onChange) {
      class P {
        constructor(arg0) {
          let accessibilityActions;
          let onAccessibilityAction;
          let onPress;
          let ref;
          ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
          const Button = components_Button_Button.Button;
          const intl = intl3.intl;
          const obj2 = { name };
          return <Button ref={ref} variant="tertiary" size="sm" shrink text={name} icon={null} iconPosition="end" onPress={onPress} accessibilityLabel={intl.formatToPlainString(_modDef3864.Lyx6pW, obj2)} accessibilityActions={accessibilityActions} onAccessibilityAction={onAccessibilityAction} />;
        }
      }
      cResult[10] = onChange;
      cResult[11] = tmp16;
      tmp15 = tmp16;
    } else {
      class P {
        constructor(arg0) {
          let accessibilityActions;
          let onAccessibilityAction;
          let onPress;
          let ref;
          ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
          const Button = components_Button_Button.Button;
          const intl = intl3.intl;
          const obj2 = { name };
          return <Button ref={ref} variant="tertiary" size="sm" shrink text={name} icon={null} iconPosition="end" onPress={onPress} accessibilityLabel={intl.formatToPlainString(_modDef3864.Lyx6pW, obj2)} accessibilityActions={accessibilityActions} onAccessibilityAction={onAccessibilityAction} />;
        }
      }
    }
    const items = [tmp13];
    HermesBuiltin.arraySpread(items, guilds.map(tmp15), 1);
    cResult[6] = guilds;
    cResult[7] = onChange;
    cResult[8] = tmp13;
    cResult[9] = items;
    tmp14 = items;
  }
  let tmp9 = null;
  if (target !== target(name[6]).CONJURE_TARGET_USER) {
    class P {
      constructor(arg0) {
        let accessibilityActions;
        let onAccessibilityAction;
        let onPress;
        let ref;
        ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
        const Button = components_Button_Button.Button;
        const intl = intl3.intl;
        const obj2 = { name };
        return <Button ref={ref} variant="tertiary" size="sm" shrink text={name} icon={null} iconPosition="end" onPress={onPress} accessibilityLabel={intl.formatToPlainString(_modDef3864.Lyx6pW, obj2)} accessibilityActions={accessibilityActions} onAccessibilityAction={onAccessibilityAction} />;
      }
    }
    if (tmp10 == null) {
      class P {
        constructor(arg0) {
          let accessibilityActions;
          let onAccessibilityAction;
          let onPress;
          let ref;
          ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
          const Button = components_Button_Button.Button;
          const intl = intl3.intl;
          const obj2 = { name };
          return <Button ref={ref} variant="tertiary" size="sm" shrink text={name} icon={null} iconPosition="end" onPress={onPress} accessibilityLabel={intl.formatToPlainString(_modDef3864.Lyx6pW, obj2)} accessibilityActions={accessibilityActions} onAccessibilityAction={onAccessibilityAction} />;
        }
      }
    }
    tmp9 = tmp10;
  }
  cResult[1] = guilds;
  cResult[2] = target;
  cResult[3] = tmp9;
  tmp8 = tmp9;
}) : (function ConjureHomeTargetPicker(target) {
  let intl2;
  target = target.target;
  const guilds = target.guilds;
  const onChange = target.onChange;
  let name;
  let intl = target(onChange[4]).intl;
  const stringResult = intl.string(guilds(onChange[5]).UPLaGM);
  react = stringResult;
  let tmp5 = null;
  const tmp3 = guilds;
  if (target !== target(onChange[6]).CONJURE_TARGET_USER) {
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
        return closure_1_2(target(onChange[6]).CONJURE_TARGET_USER);
      }
    };
    const items = [
      obj,
      ...guilds.map((label) => {
        const obj = {
          label: label.name,
          IconComponent: target(onChange[8]).ServerIcon,
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
    title: intl2.string(tmp3(onChange[5]).NyVn6T),
    children(arg0) {
      let accessibilityActions;
      let onAccessibilityAction;
      let onPress;
      let ref;
      ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
      const Button = components_Button_Button.Button;
      const intl = intl3.intl;
      const obj2 = { name };
      return <Button ref={ref} variant="tertiary" size="sm" shrink text={name} icon={null} iconPosition="end" onPress={onPress} accessibilityLabel={intl.formatToPlainString(_modDef3864.Lyx6pW, obj2)} accessibilityActions={accessibilityActions} onAccessibilityAction={onAccessibilityAction} />;
    }
  };
  const ContextMenu = tmp(tmp2[11]).ContextMenu;
  intl2 = tmp(tmp2[4]).intl;
  return name(ContextMenu, obj);
});
const result = size.fileFinishedImporting("modules/conjure/home/native/ConjureHomeTargetPicker.tsx");

export default tmp2;
