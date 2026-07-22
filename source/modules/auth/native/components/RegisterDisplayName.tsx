// Module ID: 14637
// Function ID: 110357
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 14637 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importDefault(dependencyMap[4]);
({ updateRegistrationOptions: closure_8, useRegistrationUIStore: closure_9 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
({ RegisterTransitionSteps: closure_10, RegistrationTransitionActionTypes: closure_11 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { marginTop: importDefault(dependencyMap[9]).space.PX_24 };
obj.globalName = obj;
const tmp4 = arg1(dependencyMap[7]);
obj.button = { marginTop: importDefault(dependencyMap[9]).space.PX_24 };
obj.page = { flex: 1 };
let closure_14 = obj.createStyles(obj);
let closure_15 = [];
let closure_16 = [];
const obj1 = { marginTop: importDefault(dependencyMap[9]).space.PX_24 };
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/auth/native/components/RegisterDisplayName.tsx");

export default function RegisterDisplayName() {
  const tmp = callback4();
  let obj = arg1(dependencyMap[12]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  let obj1 = React;
  const tmp7 = callback(React.useState(false), 2);
  const importDefault = tmp7[1];
  const tmp4 = importDefault(dependencyMap[11])();
  const tmp9 = callback(React.useState(() => {
    const globalName = state.getState().registrationOptions.globalName;
    let str = "";
    if (null != globalName) {
      str = globalName;
    }
    return str;
  }), 2);
  const dependencyMap = str;
  let closure_3 = tmp9[1];
  if (closure_16.includes(tmp9[0])) {
    const intl2 = arg1(dependencyMap[10]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[10]).t.WeJZyy);
  } else {
    const tmp12 = _createForOfIteratorHelperLoose(closure_15);
    let iter = tmp12();
    if (!iter.done) {
      const formatted = str.toLowerCase();
      while (!formatted.includes(tmp14)) {
        let iter2 = tmp12();
        iter = iter2;
      }
      const intl = arg1(dependencyMap[10]).intl;
      stringResult = intl.string(arg1(dependencyMap[10]).t.WeJZyy);
    }
  }
  const context = obj1.useContext(tmp5(tmp3[13]).TrackRegistrationContext);
  let callback = context;
  let tmp2Result = tmp2(tmp3[14]);
  const tmp8 = callback2((errors) => errors.errors);
  tmp2Result(arg1(dependencyMap[15]).getPreviousRegistrationTransitionStep(arg1(dependencyMap[16]).AuthStates.REGISTER_DISPLAY_NAME));
  tmp2Result = tmp2(tmp3[17]);
  tmp2Result(arg1(dependencyMap[16]).AuthStates.REGISTER_DISPLAY_NAME);
  const items = [context];
  const effect = obj1.useEffect(() => {
    context({ step: constants.ACCOUNT_DISPLAY_NAME, actionType: constants2.VIEWED });
  }, items);
  const ref = obj1.useRef(null);
  importDefault(dependencyMap[18])({ inputRef: ref });
  const items1 = [navigation, context];
  callback = obj1.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items1);
  const React = callback;
  const items2 = [callback, navigation];
  const layoutEffect = obj1.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight() {
        const obj = {};
        const intl = callback(closure_2[10]).intl;
        obj.text = intl.string(callback(closure_2[10]).t.5Wxrcd);
        obj.onPress = function onPress() {
          return callback(null);
        };
        return callback2(callback(closure_2[20]).HeaderActionButton, obj);
      }
    });
  }, items2);
  const tmp29 = importDefault(dependencyMap[21])("global_name", tmp8);
  let tmp30 = stringResult;
  if (null != tmp29) {
    tmp30 = tmp29;
  }
  obj = {};
  const tmp31 = closure_13;
  const tmp5Result = arg1(dependencyMap[15]);
  const intl3 = arg1(dependencyMap[10]).intl;
  obj.headerText = intl3.string(arg1(dependencyMap[10]).t.LYIh7j);
  obj = { style: tmp.globalName };
  obj1 = {
    ref,
    value: str,
    onChange(str) {
      str = "";
      closure_3(str);
    },
    returnKeyType: "next",
    onSubmitEditing() {
      return callback(str);
    },
    textContentType: "nickname",
    errorMessage: tmp30
  };
  const intl4 = arg1(dependencyMap[10]).intl;
  obj1.label = intl4.string(arg1(dependencyMap[10]).t.9AjdkD);
  let stringResult1;
  if (null == tmp30) {
    const intl5 = arg1(dependencyMap[10]).intl;
    stringResult1 = intl5.string(arg1(dependencyMap[10]).t.fbKwSs);
  }
  obj1.description = stringResult1;
  obj1.isClearable = true;
  obj.children = callback3(arg1(dependencyMap[23]).TextInput, obj1);
  const items3 = [callback3(View, obj), ];
  const obj2 = { style: tmp.button };
  const obj3 = { size: "lg", loading: tmp7[0] };
  const intl6 = arg1(dependencyMap[10]).intl;
  obj3.text = intl6.string(arg1(dependencyMap[10]).t.PDTjLN);
  obj3.onPress = function onPress() {
    return callback(str);
  };
  let tmp40 = null != stringResult;
  if (!tmp40) {
    tmp40 = "" === str.trim();
  }
  obj3.disabled = tmp40;
  obj2.children = callback3(arg1(dependencyMap[24]).Button, obj3);
  items3[1] = callback3(View, obj2);
  obj.children = items3;
  const tmp31Result = tmp31(importDefault(dependencyMap[22]), obj);
  let tmp42 = tmp31Result;
  if (!tmp4) {
    const obj4 = { style: tmp.page, children: tmp31Result };
    tmp42 = callback3(importDefault(dependencyMap[25]), obj4);
  }
  return tmp42;
};
