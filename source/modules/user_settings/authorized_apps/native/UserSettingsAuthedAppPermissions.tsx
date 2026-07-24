// Module ID: 13898
// Function ID: 106367
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 27, 33, 4130, 8994, 8354, 1212, 4126, 4091, 689, 8996, 13892, 2]
// Exports: default

// Module 13898 (_createForOfIteratorHelperLoose)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
let require = arg1;
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
({ ScrollView: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ container: { paddingHorizontal: 16, paddingVertical: 24 }, permissionContainer: { flexDirection: "row", marginTop: 8 }, permissionIcon: { marginTop: 1 }, permissionText: { flexShrink: 1, marginLeft: 12 } });
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedAppPermissions.tsx");

export default function UserSettingsAuthedAppPermissions(oauth2Token) {
  let closure_3;
  let dependencyMap;
  let importDefault;
  let tmp = callback2();
  const require = tmp;
  ({ application: importDefault, scopes: dependencyMap, disclosures: closure_3 } = oauth2Token.oauth2Token);
  return callback(closure_3, {
    contentContainerStyle: tmp.container,
    children: (() => {
      let iter2;
      let items = [];
      const tmp = outer1_8(closure_2);
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          let push = items.push;
          let tmp2 = tmp;
          let tmp3 = outer1_2;
          let obj = tmp(outer1_2[4]);
          let tmp4 = closure_2;
          let items1 = [];
          let tmp5 = items1;
          let num = 0;
          let arraySpreadResult = HermesBuiltin.arraySpread(obj.getScopeNames(value, closure_2), 0);
          let tmp7 = push;
          let tmp8 = items1;
          let tmp9 = items;
          let applyResult = HermesBuiltin.apply(items1, items);
          if (value === tmp(outer1_2[5]).OAuth2Scopes.APPLICATIONS_COMMANDS) {
            let tmp11 = tmp;
            let tmp12 = outer1_2;
            let intl = tmp(outer1_2[6]).intl;
            let arr = items.push(intl.string(tmp(outer1_2[6]).t.Ls2XRq));
          }
          iter2 = tmp();
          iter = iter2;
        } while (!iter2.done);
      }
      obj = {};
      obj = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: name.name };
      const items2 = [outer1_5(tmp(outer1_2[7]).Text, obj), , , ];
      let obj1 = { variant: "heading-sm/semibold", color: "text-default" };
      const intl2 = tmp(outer1_2[6]).intl;
      obj1.children = intl2.string(tmp(outer1_2[6]).t.xrmhRX);
      items2[1] = outer1_5(tmp(outer1_2[7]).Text, obj1);
      items2[2] = items.map((children) => {
        let obj = { style: items.permissionContainer };
        obj = { style: items.permissionIcon, size: "xs", color: outer2_1(outer2_2[9]).colors.STATUS_POSITIVE };
        items = [, ];
        items[0] = outer2_5(items(outer2_2[8]).CircleCheckIcon, obj);
        obj = { style: items.permissionText, variant: "text-sm/normal", color: "text-default", children };
        items[1] = outer2_5(items(outer2_2[7]).Text, obj);
        obj.children = items;
        return outer2_6(outer2_4, obj, arg1);
      });
      let mapped;
      if (null != closure_3) {
        mapped = closure_3.map((disclosure) => {
          let obj = items(outer2_2[10]);
          const textForDisclosure = obj.getTextForDisclosure(disclosure);
          let tmp2 = null;
          if (null != textForDisclosure) {
            obj = { style: items.permissionContainer };
            obj = { style: items.permissionIcon, disclosure };
            items = [, ];
            items[0] = outer2_5(items(outer2_2[11]).DisclosureIcon, obj);
            const obj1 = { style: items.permissionText, variant: "text-sm/normal", children: textForDisclosure };
            items[1] = outer2_5(items(outer2_2[7]).Text, obj1);
            obj.children = items;
            tmp2 = outer2_6(outer2_4, obj, arg1 + items.length);
          }
          return tmp2;
        });
      }
      items2[3] = mapped;
      obj.children = items2;
      return outer1_6(outer1_4, obj);
    })()
  });
};
