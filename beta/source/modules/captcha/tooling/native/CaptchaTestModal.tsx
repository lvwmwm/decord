// Module ID: 15283
// Function ID: 15284
// Name: CaptchaTestModal
// Dependencies: [5, 32, 19, 17, 21, 4836, 576, 15284, 15285, 4528, 4832, 1177, 6544, 5281, 5039, 5936, 6421, 1115, 2]
// Exports: default

// Module 15283 (CaptchaTestModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import CaptchaTestUtils from "CaptchaTestUtils" /* 15284 */;
import CaptchaTestActionCreators from "CaptchaTestActionCreators" /* 15285 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c5, c6;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj8;
function CaptchaTestScreen(arg0) {
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj10;
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    let obj = function _sendCaptchaRequest() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let difficulty;
        if (c6 === 2) {
          c6 = 3;
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
          let c4;
          try {
            let closure_2;
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_2 = tmp;
                closure_1 = tmp4;
                if (null != _require) {
                  c4 = 1;
                  const tmp19 = difficulty(closure_2[8]);
                  difficulty = first1;
                  const testCaptcha = tmp19.testCaptcha;
                  if (first1 == null) {
                    difficulty = undefined;
                  }
                  const obj5 = { difficulty };
                  c5 = 2;
                  c6 = 1;
                  const obj6 = { value: testCaptcha(tmp29, obj5), done: false };
                  return obj6;
                }
              }
            } else if (1 === c5) {
              c4 = 0;
              difficulty = closure_3;
              const obj7 = { key: "captcha-test-modal-error", content: difficulty.message };
              const obj3 = closure_1(closure_2[9]);
              obj3.open(obj7);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              obj = closure_1(closure_2[9]);
              obj.open({ key: "captcha-test-modal-success", content: "Captcha completed!" });
              c4 = 0;
            }
            c6 = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp22) {
            closure_3 = tmp22;
            if (0 === c4) {
              c6 = 3;
              throw tmp22;
            } else {
              c5 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    const tmp3 = closure_9;
    const tmp4 = closure_9();
    const tmp7 = obj(react.useState(null), 2);
    let value = tmp7[0];
    let closure_1 = tmp7[1];
    const tmp9 = obj(react.useState(null), 2);
    const first1 = tmp9[0];
    let closure_3 = tmp9[1];
    let obj2 = { style: tmp4.container, children: items3 };
    let obj3 = { style: tmp4.content, children: items1 };
    let obj4 = { children: items };
    items = [closure_7(value(first1[10]).Text, { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: "Decider" }), ];
    let obj5 = {
      withSpacing: true,
      value,
      options: options2,
      onChange(value) {
          value = value.value;
          if (value !== CaptchaTestActionCreators.CaptchaDeciderType.HCAPTCHA_RQDATA) {
            closure_3(null);
          }
          closure_1(value);
        }
    };
    items[1] = closure_7(value(first1[11]).RadioGroup, obj5);
    items1 = [closure_8(View, obj4), ];
    let tmp11Result = value === value(first1[8]).CaptchaDeciderType.HCAPTCHA_RQDATA;
    if (tmp11Result) {
      obj = { children: items2 };
      items2 = [tmp13(tmp14(tmp15[10]).Text, { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: "Difficulty" }), ];
      let obj6 = {
        withSpacing: true,
        value: first1,
        options,
        onChange(value) {
              value = value.value;
              if (first === CaptchaTestActionCreators.CaptchaDeciderType.HCAPTCHA_RQDATA) {
                closure_3(value);
              }
            }
      };
      const tmp = options;
      items2[1] = closure_7(value(first1[11]).RadioGroup, obj6);
      tmp11Result = tmp11(tmp12, obj);
    }
    items1[1] = tmp11Result;
    items3 = [tmp11(tmp12, obj3), ];
    let obj7 = { style: tmp4.footerContainer, children: items4 };
    let obj8 = { style: tmp4.separator };
    items4 = [tmp13(tmp12, obj8), ];
    const obj9 = { bottom: true, style: tmp4.footerButton, children: closure_7(value(first1[13]).Button, obj10) };
    const SafeAreaPaddingView = tmp14(tmp15[12]).SafeAreaPaddingView;
    obj10 = {
      onPress: function sendCaptchaRequest() {
          return obj(...arguments);
        },
      text: "Submit"
    };
    items4[1] = closure_7(SafeAreaPaddingView, obj9);
    items3[1] = closure_8(View, obj7);
    return closure_8(View, obj2);
  }
}
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, separator: obj3, footerContainer: obj4, footerButton: obj5, content: obj6 };
obj2 = { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: nativeDefault.space.PX_24 };
obj4 = { marginBottom: nativeDefault.space.PX_16 };
obj5 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj6 = { margin: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
let closure_9 = createStyles(obj);
const prop = CaptchaTestUtils.HCAPTCHA_DIFFICULTY_OPTIONS;
const options = prop.map((label) => ({ name: label.label, value: label.value }));
let items = [CaptchaTestActionCreators.CaptchaDeciderType.HCAPTCHA_RQDATA, CaptchaTestActionCreators.CaptchaDeciderType.SMITE_RQDATA];
const set = new Set(items);
const prop1 = CaptchaTestUtils.CAPTCHA_DECIDER_TYPE_OPTIONS;
const mapped = prop1.map((label) => ({ name: label.label, value: label.value }));
const options2 = mapped.filter((value) => set.has(value.value));
const constants = { TEST_CAPTCHA: "TEST_CAPTCHA" };
createStyles = createStyles_mod;
let obj7 = { headerStyle: obj8 };
obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_15 = createStyles.createStyles(obj7);
const result = size.fileFinishedImporting("modules/captcha/tooling/native/CaptchaTestModal.tsx");

export default function CaptchaTestModal() {
  let headerStyle;
  let intl;
  const tmp = closure_15();
  _require = tmp;
  const items = [tmp];
  const memo = react.useMemo(() => {
    let obj3;
    const obj = {};
    const TEST_CAPTCHA = constants.TEST_CAPTCHA;
    const obj2 = {
      headerStyle: headerStyle.headerStyle,
      headerTitle: "Captcha Test Tool",
      headerLeft: obj3.getHeaderCloseButton(function closeModal() {
        const arr = closure_1_1(closure_1_2[14]);
        return arr.pop();
      }),
      render() {
        return closure_1_7(closure_1_14, {});
      }
    };
    obj[TEST_CAPTCHA] = obj2;
    obj3 = NavigatorHeader;
    return obj;
  }, items);
  let obj = { screens: memo, initialRouteName: constants.TEST_CAPTCHA, headerBackTitle: intl.string(require("intl").t["13/7kX"]) };
  const Navigator = require("Navigator").Navigator;
  intl = require("intl").intl;
  return closure_7(Navigator, obj);
};
