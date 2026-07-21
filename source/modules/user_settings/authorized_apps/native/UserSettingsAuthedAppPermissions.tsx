// Module ID: 13724
// Function ID: 103832
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 13724 (_createForOfIteratorHelperLoose)
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
importAll(dependencyMap[0]);
({ ScrollView: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp4 = arg1(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).createStyles({ container: {}, permissionContainer: {}, permissionIcon: { marginTop: 1 }, permissionText: { v: false, replace: false } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedAppPermissions.tsx");

export default function UserSettingsAuthedAppPermissions(oauth2Token) {
  const tmp = callback2();
  const arg1 = tmp;
  ({ application: closure_1, scopes: closure_2, disclosures: closure_3 } = oauth2Token.oauth2Token);
  return callback(closure_3, {
    contentContainerStyle: tmp.container,
    children: () => {
      let iter2;
      const items = [];
      let tmp = items;
      tmp = callback2(closure_2);
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          let push = items.push;
          let tmp2 = closure_0;
          let tmp3 = closure_2;
          let obj = closure_0(closure_2[4]);
          let tmp4 = closure_2;
          let items1 = [];
          let tmp5 = items1;
          let num = 0;
          let arraySpreadResult = HermesBuiltin.arraySpread(obj.getScopeNames(value, closure_2), 0);
          let tmp7 = push;
          let tmp8 = items1;
          let tmp9 = items;
          let applyResult = HermesBuiltin.apply(items1, items);
          if (value === closure_0(closure_2[5]).OAuth2Scopes.APPLICATIONS_COMMANDS) {
            let tmp11 = closure_0;
            let tmp12 = closure_2;
            let intl = closure_0(closure_2[6]).intl;
            let arr = items.push(intl.string(closure_0(closure_2[6]).t.Ls2XRq));
          }
          iter2 = tmp();
          iter = iter2;
        } while (!iter2.done);
      }
      obj = {};
      obj = { children: name.name };
      const items2 = [callback(tmp(closure_2[7]).Text, obj), , , ];
      const obj1 = {};
      const intl2 = tmp(closure_2[6]).intl;
      obj1.children = intl2.string(tmp(closure_2[6]).t.xrmhRX);
      items2[1] = callback(tmp(closure_2[7]).Text, obj1);
      items2[2] = items.map((children) => {
        let obj = { style: items.permissionContainer };
        obj = { style: items.permissionIcon, size: "xs", color: callback(closure_2[9]).colors.STATUS_POSITIVE };
        const items = [, ];
        items[0] = callback2(items(closure_2[8]).CircleCheckIcon, obj);
        obj = { "Null": "xs", "Null": "interactive-text-default", "Null": "md", style: items.permissionText, children };
        items[1] = callback2(items(closure_2[7]).Text, obj);
        obj.children = items;
        return callback3(closure_4, obj, arg1);
      });
      let mapped;
      if (null != closure_3) {
        mapped = closure_3.map((disclosure) => {
          let obj = items(closure_2[10]);
          const textForDisclosure = obj.getTextForDisclosure(disclosure);
          let tmp2 = null;
          if (null != textForDisclosure) {
            obj = { style: items.permissionContainer };
            obj = { style: items.permissionIcon, disclosure };
            const items = [, ];
            items[0] = callback2(items(closure_2[11]).DisclosureIcon, obj);
            const obj1 = { style: items.permissionText, variant: "text-sm/normal", children: textForDisclosure };
            items[1] = callback2(items(closure_2[7]).Text, obj1);
            obj.children = items;
            tmp2 = callback3(closure_4, obj, arg1 + items.length);
          }
          return tmp2;
        });
      }
      items2[3] = mapped;
      obj.children = items2;
      return closure_6(closure_4, obj);
    }()
  });
};
