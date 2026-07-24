// Module ID: 14799
// Function ID: 112842
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 57, 31, 27, 13716, 14778, 14779, 33, 4130, 689, 1212, 9233, 1456, 14776, 14794, 14777, 668, 14793, 14796, 13717, 5788, 9245, 9255, 7574, 4543, 5585, 2]
// Exports: default

// Module 14799 (_createForOfIteratorHelperLoose)
import closure_3 from "useRegistrationUIStore";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import useRegistrationUIStore from "useRegistrationUIStore";
import RegistrationTransitionActionTypes from "RegistrationTransitionActionTypes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_8;
let closure_9;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
({ updateRegistrationOptions: closure_8, useRegistrationUIStore: closure_9 } = useRegistrationUIStore);
({ RegisterTransitionSteps: closure_10, RegistrationTransitionActionTypes: closure_11 } = RegistrationTransitionActionTypes);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.globalName = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.button = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.page = { flex: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_15 = ["discord", "hypesquad", "snowsgiving", "system message", "system mesage", "sustem mesage", "sustem message"];
let closure_16 = ["everyone", "here"];
let obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
const result = require("result").fileFinishedImporting("modules/auth/native/components/RegisterDisplayName.tsx");

export default function RegisterDisplayName() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = navigation(str[12]);
  navigation = obj.useNavigation();
  let obj1 = callback;
  const tmp7 = context(callback.useState(false), 2);
  const importDefault = tmp7[1];
  const tmp4 = importDefault(str[11])();
  const tmp9 = context(callback.useState(() => {
    const globalName = outer1_9.getState().registrationOptions.globalName;
    let str = "";
    if (null != globalName) {
      str = globalName;
    }
    return str;
  }), 2);
  str = tmp9[0];
  let closure_3 = tmp9[1];
  if (closure_16.includes(str)) {
    const intl2 = navigation(str[10]).intl;
    let stringResult = intl2.string(navigation(str[10]).t.WeJZyy);
  } else {
    const tmp12 = _createForOfIteratorHelperLoose(closure_15);
    let iter = tmp12();
    if (!iter.done) {
      const formatted = str.toLowerCase();
      while (!formatted.includes(tmp14)) {
        let iter2 = tmp12();
        iter = iter2;
      }
      let intl = navigation(str[10]).intl;
      stringResult = intl.string(navigation(str[10]).t.WeJZyy);
    }
  }
  context = obj1.useContext(tmp5(tmp3[13]).TrackRegistrationContext);
  let tmp2Result = tmp2(tmp3[14]);
  const tmp8 = callback((errors) => errors.errors);
  tmp2Result(navigation(str[15]).getPreviousRegistrationTransitionStep(navigation(str[16]).AuthStates.REGISTER_DISPLAY_NAME));
  tmp2Result = tmp2(tmp3[17]);
  tmp2Result(navigation(str[16]).AuthStates.REGISTER_DISPLAY_NAME);
  const items = [context];
  const effect = obj1.useEffect(() => {
    context({ step: outer1_10.ACCOUNT_DISPLAY_NAME, actionType: outer1_11.VIEWED });
  }, items);
  const ref = obj1.useRef(null);
  importDefault(str[18])({ inputRef: ref });
  const items1 = [navigation, context];
  callback = obj1.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items1);
  const items2 = [callback, navigation];
  const layoutEffect = obj1.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight() {
        const obj = {};
        const intl = navigation(str[10]).intl;
        obj.text = intl.string(navigation(str[10]).t["5Wxrcd"]);
        obj.onPress = function onPress() {
          return outer2_5(null);
        };
        return outer2_12(navigation(str[20]).HeaderActionButton, obj);
      }
    });
  }, items2);
  const tmp29 = importDefault(str[21])("global_name", tmp8);
  let tmp30 = stringResult;
  if (null != tmp29) {
    tmp30 = tmp29;
  }
  obj = {};
  const tmp31 = closure_13;
  const tmp5Result = navigation(str[15]);
  const intl3 = navigation(str[10]).intl;
  obj.headerText = intl3.string(navigation(str[10]).t.LYIh7j);
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
  const intl4 = navigation(str[10]).intl;
  obj1.label = intl4.string(navigation(str[10]).t["9AjdkD"]);
  let stringResult1;
  if (null == tmp30) {
    const intl5 = navigation(str[10]).intl;
    stringResult1 = intl5.string(navigation(str[10]).t.fbKwSs);
  }
  obj1.description = stringResult1;
  obj1.isClearable = true;
  obj.children = callback2(navigation(str[23]).TextInput, obj1);
  const items3 = [callback2(View, obj), ];
  const obj2 = { style: tmp.button };
  const obj3 = { size: "lg", loading: tmp7[0] };
  const intl6 = navigation(str[10]).intl;
  obj3.text = intl6.string(navigation(str[10]).t.PDTjLN);
  obj3.onPress = function onPress() {
    return callback(str);
  };
  let tmp40 = null != stringResult;
  if (!tmp40) {
    tmp40 = "" === str.trim();
  }
  obj3.disabled = tmp40;
  obj2.children = callback2(navigation(str[24]).Button, obj3);
  items3[1] = callback2(View, obj2);
  obj.children = items3;
  const tmp31Result = tmp31(importDefault(str[22]), obj);
  let tmp42 = tmp31Result;
  if (!tmp4) {
    const obj4 = { style: tmp.page, children: tmp31Result };
    tmp42 = callback2(importDefault(str[25]), obj4);
  }
  return tmp42;
};
