// Module ID: 14533
// Function ID: 109444
// Name: CaptchaTestScreen
// Dependencies: []
// Exports: default

// Module 14533 (CaptchaTestScreen)
function CaptchaTestScreen(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
    throw undefined;
  } else {
    let arg1;
    let closure_1;
    let dependencyMap;
    let closure_3;
    function _sendCaptchaRequest(closure_5, arg1) {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback2(tmp);
      const _sendCaptchaRequest = obj;
      return obj(...arguments);
    }
    const tmp20 = callback3();
    const tmp23 = _sendCaptchaRequest(React.useState(null), 2);
    const first = tmp23[0];
    arg1 = first;
    closure_1 = tmp23[1];
    const tmp27 = _sendCaptchaRequest(React.useState(null), 2);
    const first1 = tmp27[0];
    dependencyMap = first1;
    closure_3 = tmp27[1];
    let obj = { style: tmp20.container };
    obj = { style: tmp20.content };
    const obj1 = {};
    const items = [callback(arg1(dependencyMap[10]).Text, {}), ];
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
    items[1] = callback(arg1(dependencyMap[11]).RadioGroup, obj2);
    obj1.children = items;
    const items1 = [callback2(View, obj1), ];
    let tmp8 = first === arg1(dependencyMap[8]).CaptchaDeciderType.HCAPTCHA_RQDATA;
    if (tmp8) {
      obj = {};
      const items2 = [callback(arg1(dependencyMap[10]).Text, {}), ];
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
      items2[1] = callback(arg1(dependencyMap[11]).RadioGroup, obj3);
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
    obj6.children = callback(arg1(dependencyMap[13]).Button, obj7);
    items4[1] = callback(arg1(dependencyMap[12]).SafeAreaPaddingView, obj6);
    obj4.children = items4;
    items3[1] = callback2(View, obj4);
    obj.children = items3;
    return callback2(View, obj);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { "Bool(true)": 0.129, "Bool(true)": 1, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
const tmp2 = arg1(dependencyMap[4]);
obj.separator = { height: 1, backgroundColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE, marginVertical: importDefault(dependencyMap[6]).space.PX_24 };
const obj1 = { height: 1, backgroundColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE, marginVertical: importDefault(dependencyMap[6]).space.PX_24 };
obj.footerContainer = { marginBottom: importDefault(dependencyMap[6]).space.PX_16 };
const obj2 = { marginBottom: importDefault(dependencyMap[6]).space.PX_16 };
obj.footerButton = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
const obj3 = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
obj.content = { margin: importDefault(dependencyMap[6]).space.PX_16, gap: importDefault(dependencyMap[6]).space.PX_24 };
let closure_9 = obj.createStyles(obj);
const prop = arg1(dependencyMap[7]).HCAPTCHA_DIFFICULTY_OPTIONS;
let closure_10 = prop.map((label) => ({ name: label.label, value: label.value }));
const items = [arg1(dependencyMap[8]).CaptchaDeciderType.HCAPTCHA_RQDATA, arg1(dependencyMap[8]).CaptchaDeciderType.SMITE_RQDATA];
const set = new Set(items);
const prop1 = arg1(dependencyMap[7]).CAPTCHA_DECIDER_TYPE_OPTIONS;
const mapped = prop1.map((label) => ({ name: label.label, value: label.value }));
let closure_12 = mapped.filter((value) => set.has(value.value));
let closure_13 = { TEST_CAPTCHA: "TEST_CAPTCHA" };
const obj4 = { margin: importDefault(dependencyMap[6]).space.PX_16, gap: importDefault(dependencyMap[6]).space.PX_24 };
const obj5 = {};
const obj8 = arg1(dependencyMap[5]);
obj5.headerStyle = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOWER };
let closure_14 = obj8.createStyles(obj5);
const obj6 = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOWER };
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/captcha/tooling/native/CaptchaTestModal.tsx");

export default function CaptchaTestModal() {
  const tmp = callback4();
  const arg1 = tmp;
  const items = [tmp];
  const memo = React.useMemo(() => function getScreens(headerStyle) {
    let obj = {};
    obj = {
      headerStyle: headerStyle.headerStyle,
      headerTitle: "Captcha Test Tool",
      headerLeft: callback(closure_2[15]).getHeaderCloseButton(function closeModal() {
        return callback(closure_2[14]).pop();
      }),
      render() {
        return callback2(closure_15, {});
      }
    };
    obj[constants.TEST_CAPTCHA] = obj;
    return obj;
  }(tmp), items);
  const obj = { screens: memo, initialRouteName: constants.TEST_CAPTCHA };
  const intl = arg1(dependencyMap[17]).intl;
  obj.headerBackTitle = intl.string(arg1(dependencyMap[17]).t.13/7kX);
  return callback(arg1(dependencyMap[16]).Navigator, obj);
};
