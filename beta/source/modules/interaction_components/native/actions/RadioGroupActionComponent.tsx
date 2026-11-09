// Module ID: 19903
// Function ID: 19904
// Name: RadioGroupActionComponent
// Dependencies: [19, 21, 8767, 1652, 5761, 5762, 7124, 7127, 7038, 7120, 1113, 2]

// Module 19903 (RadioGroupActionComponent)
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = { code: "(function RadioGroupActionComponentTsx1(){let[withSpring,hasValue,SUBTLE_SPRING]=this.__closure;return{maxHeight:withSpring(hasValue?60:0,SUBTLE_SPRING),marginTop:withSpring(hasValue?8:0,SUBTLE_SPRING),opacity:withSpring(hasValue?1:0,SUBTLE_SPRING)};})" };
const memoResult = react.memo(function RadioGroupActionComponent(type) {
  let Icon;
  let TableRow;
  let intl;
  let obj5;
  let obj6;
  let ref;
  let str2;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  type = type.type;
  const options = type.options;
  const required = type.required;
  let obj = ref;
  ref = ref.useRef(null);
  const items = [options];
  const memo = ref.useMemo(() => {
    let value;
    const iter = options.find((item) => item.default);
    if (iter != null) {
      value = iter.value;
    }
    return value;
  }, items);
  const tmp3 = type;
  let tmp6;
  const useComponentState = type(required[2]).useComponentState;
  const tmp5 = type(required[2]);
  if (null != memo) {
    let obj2 = { type, value: memo };
    tmp6 = obj2;
  }
  const componentState = useComponentState(type, tmp6);
  const state = componentState.state;
  const executeStateUpdate = componentState.executeStateUpdate;
  const items1 = [state, type];
  const memo1 = obj.useMemo(() => {
    type = undefined;
    if (state != null) {
      type = iter.type;
    }
    let value = null;
    if (type === type) {
      value = iter.value;
    }
    return value;
  }, items1);
  const items2 = [closure_7, , , ];
  const useAnimatedStyle = tmp3(tmp4[3]).useAnimatedStyle;
  tmp3(required[3]);
  items2[1] = tmp3(required[4]).withSpring;
  items2[2] = null != memo1;
  items2[3] = tmp3(required[5]).SUBTLE_SPRING;
  let c0;
  let c1;
  let c2;
  [tmp11, tmp12, tmp13, tmp14] = items2;
  class RadioGroupActionComponentTsx1 {
    constructor() {
      let num2;
      let num3;
      let num = 0;
      if (c1) {
        num = 60;
      }
      const obj = { maxHeight: _undefined(num, c2), marginTop: _undefined(num2, c2), opacity: _undefined(num3, c2) };
      num2 = 0;
      if (c1) {
        num2 = 8;
      }
      num3 = 0;
      if (c1) {
        num3 = 1;
      }
      return obj;
    }
  }
  const items3 = [tmp12, tmp13, tmp14];
  RadioGroupActionComponentTsx1.__closure = items3;
  RadioGroupActionComponentTsx1.__workletHash = 382181795595;
  RadioGroupActionComponentTsx1.__initData = tmp11;
  const animatedStyle = useAnimatedStyle(RadioGroupActionComponentTsx1);
  let str = memo1;
  const TableRadioGroup = tmp3(tmp4[6]).TableRadioGroup;
  const tmp16 = memo1;
  const tmp17 = executeStateUpdate;
  if (memo1 == null) {
    str = "";
  }
  const children = [, ];
  const obj3 = {
    hasIcons: false,
    defaultValue: str,
    onChange(value) {
      if ("" !== value) {
        if (null == value) {
          const obj2 = { type, value: null };
          executeStateUpdate(obj2);
          const current = ref.current;
          if (current != null) {
            current.setValue("");
          }
        } else {
          const obj = { type, value };
          executeStateUpdate(obj);
        }
      }
    },
    groupRef: ref,
    children: options.map((label) => {
      const obj = { label: label.label, subLabel: label.description, value: label.value };
      return state(type(required[7]).TableRadioRow, obj, label.value);
    })
  };
  children[0] = state(TableRadioGroup, obj3);
  let tmp18Result = !required;
  if (tmp18Result) {
    const obj4 = { style: animatedStyle, accessibilityElementsHidden: null == memo1, importantForAccessibility: str2, children: state(TableRow, obj5) };
    str2 = "no-hide-descendants";
    const View = options(tmp4[3]).View;
    if (null != memo1) {
      str2 = "auto";
    }
    obj5 = {
      icon: state(Icon, obj6),
      label: intl.string(tmp3(required[10]).t["5uAtZN"]),
      onPress() {
          const obj = { type, value: null };
          executeStateUpdate(obj);
          const current = ref.current;
          if (current != null) {
            current.setValue("");
          }
        },
      start: true,
      end: true
    };
    TableRow = tmp3(tmp4[8]).TableRow;
    obj6 = { IconComponent: tmp3(required[9]).XSmallIcon };
    Icon = tmp3(tmp4[8]).TableRow.Icon;
    intl = tmp3(tmp4[10]).intl;
    tmp18Result = tmp18(View, obj4);
  }
  children[1] = tmp18Result;
  return tmp16(tmp17, { children });
});
const result = size.fileFinishedImporting("modules/interaction_components/native/actions/RadioGroupActionComponent.tsx");

export default memoResult;
