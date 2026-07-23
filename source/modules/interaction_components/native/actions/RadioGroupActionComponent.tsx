// Module ID: 16080
// Function ID: 124610
// Dependencies: [31, 33, 7794, 3991, 4542, 4546, 7519, 7518, 5165, 5119, 1212, 2]

// Module 16080
import importAllResult from "result";
import jsxProd from "jsxProd";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = { code: "function RadioGroupActionComponentTsx1(){const{withSpring,hasValue,SUBTLE_SPRING}=this.__closure;return{maxHeight:withSpring(hasValue?60:0,SUBTLE_SPRING),marginTop:withSpring(hasValue?8:0,SUBTLE_SPRING),opacity:withSpring(hasValue?1:0,SUBTLE_SPRING)};}" };
const memoResult = importAllResult.memo((type) => {
  function onChange(value) {
    if ("" !== value) {
      if (null == value) {
        let obj = { type, value: null };
        executeStateUpdate(obj);
        const current = ref.current;
        if (null != current) {
          current.setValue("");
        }
      } else {
        obj = { type, value };
        executeStateUpdate(obj);
      }
    }
  }
  type = type.type;
  const options = type.options;
  const required = type.required;
  ref = ref.useRef(null);
  const items = [options];
  const memo = ref.useMemo(() => {
    const iter = options.find((arg0) => arg0.default);
    let value;
    if (null != iter) {
      value = iter.value;
    }
    return value;
  }, items);
  let obj = type(required[2]);
  let tmp3;
  if (null != memo) {
    obj = { type, value: memo };
    tmp3 = obj;
  }
  const componentState = obj.useComponentState(type, tmp3);
  const state = componentState.state;
  const executeStateUpdate = componentState.executeStateUpdate;
  const items1 = [state, type];
  const memo1 = ref.useMemo(() => {
    let type;
    if (null != state) {
      type = state.type;
    }
    let value = null;
    if (type === type) {
      value = state.value;
    }
    return value;
  }, items1);
  let closure_7 = tmp6;
  let obj2 = type(required[3]);
  const fn = function p() {
    const obj = {};
    let num = 0;
    if (closure_7) {
      num = 60;
    }
    obj.maxHeight = type(required[4]).withSpring(num, type(required[5]).SUBTLE_SPRING);
    const obj2 = type(required[4]);
    let num2 = 0;
    if (closure_7) {
      num2 = 8;
    }
    obj.marginTop = type(required[4]).withSpring(num2, type(required[5]).SUBTLE_SPRING);
    const obj3 = type(required[4]);
    let num3 = 0;
    if (closure_7) {
      num3 = 1;
    }
    obj.opacity = type(required[4]).withSpring(num3, type(required[5]).SUBTLE_SPRING);
    return obj;
  };
  obj = { withSpring: type(required[4]).withSpring, hasValue: tmp6, SUBTLE_SPRING: type(required[5]).SUBTLE_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 1287549755250;
  fn.__initData = closure_7;
  const obj1 = {};
  const animatedStyle = obj2.useAnimatedStyle(fn);
  obj2 = { hasIcons: false };
  let str = "";
  if (null != memo1) {
    str = memo1;
  }
  obj2.defaultValue = str;
  obj2.onChange = onChange;
  obj2.groupRef = ref;
  obj2.children = options.map((label) => state(type(required[7]).TableRadioRow, { label: label.label, subLabel: label.description, value: label.value }, label.value));
  const items2 = [state(type(required[6]).TableRadioGroup, obj2), ];
  let tmp12Result = !required;
  if (tmp12Result) {
    let obj3 = { style: animatedStyle, accessibilityElementsHidden: !tmp6 };
    let str2 = "no-hide-descendants";
    if (tmp6) {
      str2 = "auto";
    }
    obj3.importantForAccessibility = str2;
    const obj4 = {};
    const obj5 = { IconComponent: type(required[9]).XSmallIcon };
    obj4.icon = state(type(required[8]).TableRow.Icon, obj5);
    const intl = type(required[10]).intl;
    obj4.label = intl.string(type(required[10]).t["5uAtZN"]);
    obj4.onPress = function onPress() {
      onChange(null);
    };
    obj4.start = true;
    obj4.end = true;
    obj3.children = state(type(required[8]).TableRow, obj4);
    tmp12Result = state(options(required[3]).View, obj3);
    const tmp12 = state;
  }
  items2[1] = tmp12Result;
  obj1.children = items2;
  return memo1(executeStateUpdate, obj1);
});
const result = require("isInteractionComponent").fileFinishedImporting("modules/interaction_components/native/actions/RadioGroupActionComponent.tsx");

export default memoResult;
