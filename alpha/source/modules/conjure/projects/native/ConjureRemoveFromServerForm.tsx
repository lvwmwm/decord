// Module ID: 14047
// Function ID: 14048
// Name: ConjureRemoveFromServerForm
// Dependencies: [5, 19, 21, 13205, 5952, 6274, 5866, 13206, 5873, 1113, 4079, 2]
// Exports: default

// Module 14047 (ConjureRemoveFromServerForm)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c2, c3, importDefault;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureRemoveFromServerForm.tsx");

export default function ConjureRemoveFromServerForm(onRemoved) {
  let _undefined;
  let c1;
  let error;
  let intl;
  let notes;
  let optionalItems;
  let pending;
  onRemoved = onRemoved.onRemoved;
  importDefault = undefined;
  let obj = function _remove() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_1;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let text;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              text = undefined;
              c2 = 1;
              c3 = 1;
              const obj4 = { value: _undefined(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            text = value;
            if (null != text) {
              const obj6 = { text, variant: "success" };
              obj = tmp4(c2[4]);
              obj.open("CONJURE_APP_REMOVED", obj6);
              closure_129_0();
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp17) {
          c3 = 3;
          throw tmp17;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = importDefault;
  const tmp3 = require("useConjureRemoveFromServer")(onRemoved.target);
  ({ optionalItems, notes, pending, error, submit: c1 } = tmp3);
  const body = tmp3.body;
  const tmp4 = closure_5;
  const Stack = onRemoved(obj[5]).Stack;
  const children = [closure_4(onRemoved(obj[6]).Text, { variant: "heading-sm/medium", color: "text-feedback-warning", children: body }), , , , ];
  let tmp6Result = null;
  if (optionalItems.length > 0) {
    obj = { items: [], optionalItems };
    tmp6Result = tmp6(tmp(tmp2[7]), obj);
  }
  children[1] = tmp6Result;
  children[2] = notes.map((children) => {
    obj = { variant: "body-sm/normal", color: "text-muted", children };
    return closure_1_4(onRemoved(obj[6]).Text, obj, children);
  });
  let obj2 = {
    variant: "destructive",
    text: intl.string(tmp(tmp2[10]).BGF8VT),
    onPress: function remove() {
      return obj(...arguments);
    },
    loading: pending,
    disabled: pending
  };
  const Button = tmp5(tmp2[8]).Button;
  intl = tmp5(tmp2[9]).intl;
  children[3] = closure_4(Button, obj2);
  let tmp6Result2 = null;
  if (null != error) {
    let obj3 = { variant: "body-md/semibold", color: "input-text-error-default", children: error };
    tmp6Result2 = tmp6(tmp5(tmp2[6]).Text, obj3);
  }
  children[4] = tmp6Result2;
  return tmp4(Stack, { spacing: 16, children });
};
