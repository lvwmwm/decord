// Module ID: 17090
// Function ID: 17091
// Name: ExistingUserAgeGateConfirm
// Dependencies: [5, 32, 19, 17, 1074, 21, 4836, 1485, 6544, 4832, 1115, 2111, 5281, 2]
// Exports: default

// Module 17090 (ExistingUserAgeGateConfirm)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c1, c4, dependencyMap, importDefault;

let c9;
let metroImportAll;
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ container: { padding: 16, flex: 1, alignItems: "center", justifyContent: "center" }, header: { textAlign: "center", marginBottom: 8 }, body: { textAlign: "center", lineHeight: 20, marginBottom: 16 }, buttonWrapper: { width: "100%" } });
const result = size.fileFinishedImporting("modules/age_gate/native/components/ExistingUserAgeGateConfirm.tsx");

export default function ExistingUserAgeGateConfirm(onConfirm) {
  let Button;
  let _undefined;
  let c2;
  let closure_1;
  let format;
  let intl;
  let intl3;
  let items;
  let n3QjDE;
  let obj5;
  let obj6;
  let obj8;
  let tmp3;
  onConfirm = onConfirm.onConfirm;
  dependencyMap = undefined;
  let obj = function _handleConfirm() {
    obj = _asyncToGenerator(async (arg0, value) => {
      if (c4 === 2) {
        c4 = 3;
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
        let c3;
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_0 = tmp;
              _undefined(true);
              c3 = 1;
              c1 = 2;
              c4 = 1;
              const obj4 = { value: onConfirm(), done: false };
              return obj4;
            }
          } else {
            if (1 === tmp4) {
              c3 = 0;
              closure_128_1.pop();
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              if (value.shouldShowError) {
                closure_128_1.pop();
              }
              c3 = 0;
            }
            closure_128_2(false);
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp18) {
          let closure_2 = tmp18;
          if (0 === c3) {
            c4 = 3;
            throw tmp18;
          } else {
            c1 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const age = onConfirm.age;
  const tmp = closure_10();
  obj = onConfirm(1485);
  importDefault = obj.useNavigation();
  [tmp3, c2] = _slicedToArray(react.useState(false), 2);
  let obj2 = { top: true, style: tmp.container, children: items };
  const tmp2 = _slicedToArray(react.useState(false), 2);
  const SafeAreaPaddingView = onConfirm(6544).SafeAreaPaddingView;
  let obj3 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.format(onConfirm(1115).t.wumolR, { age }) };
  const Text = onConfirm(4832).Text;
  intl = onConfirm(1115).intl;
  items = [closure_8(Text, obj3), , ];
  let obj4 = { style: tmp.body, variant: "text-md/medium", color: "interactive-text-default", children: format(n3QjDE, obj5) };
  const Text2 = onConfirm(4832).Text;
  const intl2 = onConfirm(1115).intl;
  format = intl2.format;
  obj5 = { helpURL: obj6.getArticleURL(HelpdeskArticles.AGE_GATE) };
  n3QjDE = onConfirm(1115).t.n3QjDE;
  obj6 = HelpdeskUtilsDefault;
  items[1] = closure_8(Text2, obj4);
  const obj7 = { style: tmp.buttonWrapper, children: closure_8(Button, obj8) };
  obj8 = {
    loading: tmp3,
    disabled: tmp3,
    text: intl3.string(onConfirm(1115).t["6tahin"]),
    onPress: function handleConfirm() {
      return obj(...arguments);
    },
    grow: true
  };
  Button = onConfirm(5281).Button;
  intl3 = onConfirm(1115).intl;
  items[2] = closure_8(View, obj7);
  return closure_9(SafeAreaPaddingView, obj2);
};
