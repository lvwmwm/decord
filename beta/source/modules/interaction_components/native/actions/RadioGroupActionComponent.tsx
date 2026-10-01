// Module ID: 17165
// Function ID: 17166
// Name: RadioGroupActionComponent
// Dependencies: [19, 21, 7569, 4566, 5280, 5284, 5997, 6000, 5917, 5992, 1115, 2]

// Module 17165 (RadioGroupActionComponent)
import spring from "spring" /* 5280 */;
import springPresets from "springPresets" /* 5284 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let type;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let __initData = { code: "function RadioGroupActionComponentTsx1(){const{withSpring,hasValue,SUBTLE_SPRING}=this.__closure;return{maxHeight:withSpring(hasValue?60:0,SUBTLE_SPRING),marginTop:withSpring(hasValue?8:0,SUBTLE_SPRING),opacity:withSpring(hasValue?1:0,SUBTLE_SPRING)};}" };
const memoResult = react.memo((type) => {
  let Icon;
  let TableRow;
  let closure_7;
  let intl;
  let obj6;
  let obj7;
  let ref;
  let str2;
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
  __initData = tmp9;
  const fn = function p() {
    let num2;
    let num3;
    let withSpring2;
    let withSpring3;
    let num = 0;
    const withSpring = spring.withSpring;
    spring;
    if (closure_7) {
      num = 60;
    }
    const obj = { maxHeight: withSpring(num, springPresets.SUBTLE_SPRING), marginTop: withSpring2(num2, springPresets.SUBTLE_SPRING), opacity: withSpring3(num3, springPresets.SUBTLE_SPRING) };
    num2 = 0;
    withSpring2 = spring.withSpring;
    spring;
    if (closure_7) {
      num2 = 8;
    }
    num3 = 0;
    withSpring3 = spring.withSpring;
    spring;
    if (closure_7) {
      num3 = 1;
    }
    return obj;
  };
  const tmp3Result = tmp3(required[3]);
  fn.__closure = { withSpring: tmp3(required[4]).withSpring, hasValue: null != memo1, SUBTLE_SPRING: tmp3(required[5]).SUBTLE_SPRING };
  fn.__workletHash = 1287549755250;
  fn.__initData = __initData;
  ({ withSpring: tmp3(required[4]).withSpring, hasValue: null != memo1, SUBTLE_SPRING: tmp3(required[5]).SUBTLE_SPRING });
  const animatedStyle = tmp3Result.useAnimatedStyle(fn);
  let str = memo1;
  const TableRadioGroup = tmp3(tmp4[6]).TableRadioGroup;
  const tmp11 = memo1;
  const tmp12 = executeStateUpdate;
  if (memo1 == null) {
    str = "";
  }
  const children = [, ];
  const obj4 = {
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
  children[0] = state(TableRadioGroup, obj4);
  let tmp13Result = !required;
  if (tmp13Result) {
    const obj5 = { style: animatedStyle, accessibilityElementsHidden: null == memo1, importantForAccessibility: str2, children: state(TableRow, obj6) };
    str2 = "no-hide-descendants";
    const View = options(tmp4[3]).View;
    if (null != memo1) {
      str2 = "auto";
    }
    obj6 = {
      icon: state(Icon, obj7),
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
    obj7 = { IconComponent: tmp3(required[9]).XSmallIcon };
    Icon = tmp3(tmp4[8]).TableRow.Icon;
    intl = tmp3(tmp4[10]).intl;
    tmp13Result = tmp13(View, obj5);
  }
  children[1] = tmp13Result;
  return tmp11(tmp12, { children });
});
const result = size.fileFinishedImporting("modules/interaction_components/native/actions/RadioGroupActionComponent.tsx");

export default memoResult;
