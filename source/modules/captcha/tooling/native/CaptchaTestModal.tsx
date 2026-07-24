// Module ID: 14702
// Function ID: 111968
// Name: CaptchaTestScreen
// Dependencies: [5, 57, 31, 27, 33, 4130, 689, 14703, 14704, 3831, 4126, 1273, 5121, 4543, 4337, 5087, 5517, 1212, 2]
// Exports: default

// Module 14702 (CaptchaTestScreen)
import closure_3 from "_createForOfIteratorHelperLoose";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { HCAPTCHA_DIFFICULTY_OPTIONS as prop } from "found";
import { CAPTCHA_DECIDER_TYPE_OPTIONS as prop1 } from "found";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "result";

let closure_7;
let closure_8;
let require = arg1;
function CaptchaTestScreen(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
    throw undefined;
  } else {
    let first;
    let closure_1;
    let first1;
    let closure_3;
    function _sendCaptchaRequest(result, arg1) {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback2(tmp);
      return obj(...arguments);
    }
    const tmp20 = _createForOfIteratorHelperLoose();
    const tmp23 = _sendCaptchaRequest(React.useState(null), 2);
    first = tmp23[0];
    closure_1 = tmp23[1];
    const tmp27 = _sendCaptchaRequest(React.useState(null), 2);
    first1 = tmp27[0];
    closure_3 = tmp27[1];
    let obj = { style: tmp20.container };
    obj = { style: tmp20.content };
    const obj1 = {};
    const items = [callback(first(first1[10]).Text, { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: "Decider" }), ];
    const obj2 = {
      withSpacing: true,
      value: first,
      options: closure_12,
      onChange(value) {
          value = value.value;
          if (value !== first(first1[8]).CaptchaDeciderType.HCAPTCHA_RQDATA) {
            callback2(null);
          }
          callback(value);
        }
    };
    items[1] = callback(first(first1[11]).RadioGroup, obj2);
    obj1.children = items;
    const items1 = [callback2(View, obj1), ];
    let tmp8 = first === first(first1[8]).CaptchaDeciderType.HCAPTCHA_RQDATA;
    if (tmp8) {
      obj = {};
      const items2 = [callback(first(first1[10]).Text, { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: "Difficulty" }), ];
      const obj3 = {
        withSpacing: true,
        value: first1,
        options: closure_10,
        onChange(value) {
              if (first === first(first1[8]).CaptchaDeciderType.HCAPTCHA_RQDATA) {
                callback2(value.value);
              }
            }
      };
      items2[1] = callback(first(first1[11]).RadioGroup, obj3);
      obj.children = items2;
      tmp8 = callback2(View, obj);
    }
    items1[1] = tmp8;
    obj.children = items1;
    const items3 = [callback2(View, obj), ];
    const obj4 = { style: tmp20.footerContainer };
    const obj5 = { style: tmp20.separator };
    const items4 = [callback(View, obj5), ];
    const obj6 = { bottom: true, style: tmp20.footerButton };
    const obj7 = {
      onPress: function sendCaptchaRequest() {
          return _sendCaptchaRequest(...arguments);
        },
      text: "Submit"
    };
    obj6.children = callback(first(first1[13]).Button, obj7);
    items4[1] = callback(first(first1[12]).SafeAreaPaddingView, obj6);
    obj4.children = items4;
    items3[1] = callback2(View, obj4);
    obj.children = items3;
    return callback2(View, obj);
  }
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, justifyContent: "space-between", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.separator = { height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginVertical: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj1 = { height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginVertical: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.footerContainer = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj2 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.footerButton = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj3 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.content = { margin: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_10 = prop.map((label) => ({ name: label.label, value: label.value }));
let items = [require("_testCaptcha").CaptchaDeciderType.HCAPTCHA_RQDATA, require("_testCaptcha").CaptchaDeciderType.SMITE_RQDATA];
let set = new Set(items);
const mapped = prop1.map((label) => ({ name: label.label, value: label.value }));
let closure_12 = mapped.filter((value) => set.has(value.value));
let closure_13 = { TEST_CAPTCHA: "TEST_CAPTCHA" };
let obj5 = {};
let obj4 = { margin: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_24 };
obj5.headerStyle = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
let closure_14 = _createForOfIteratorHelperLoose.createStyles(obj5);
const result = set.fileFinishedImporting("modules/captcha/tooling/native/CaptchaTestModal.tsx");

export default function CaptchaTestModal() {
  const tmp = callback3();
  const require = tmp;
  const items = [tmp];
  const memo = React.useMemo(() => (function getScreens(closure_0) {
    let obj = {};
    obj = {
      headerStyle: closure_0.headerStyle,
      headerTitle: "Captcha Test Tool",
      headerLeft: callback(outer2_2[15]).getHeaderCloseButton(function closeModal() {
        return outer3_1(outer3_2[14]).pop();
      }),
      render() {
        return outer3_7(outer3_15, {});
      }
    };
    obj[outer2_13.TEST_CAPTCHA] = obj;
    return obj;
  })(closure_0), items);
  let obj = { screens: memo, initialRouteName: constants.TEST_CAPTCHA };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.headerBackTitle = intl.string(require(1212) /* getSystemLocale */.t["13/7kX"]);
  return callback(require(5517) /* NavigationStack */.Navigator, obj);
};
