// Module ID: 11347
// Function ID: 88219
// Name: PortalKeyboardPlaceholderInner
// Dependencies: []

// Module 11347 (PortalKeyboardPlaceholderInner)
function PortalKeyboardPlaceholderInner(keyboardType) {
  const rect = importDefault(dependencyMap[7])();
  const tmp = importDefault(dependencyMap[8])();
  const tmp2 = importDefault(dependencyMap[9])();
  let obj = arg1(dependencyMap[11]);
  obj = {};
  const items = [callback(keyboardType.keyboardType, importDefault(dependencyMap[9])().width - rect.left - rect.right, importDefault(dependencyMap[10])(), tmp).container, obj.useGradientBottom()];
  obj.style = items;
  return <closure_3 {...obj} />;
}
importAll(dependencyMap[0]);
({ View: closure_3, StyleSheet: closure_4 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const tmp3 = arg1(dependencyMap[1]);
const jsxResult = jsx(function PortalKeyboardPlaceholder() {
  const tmp = importDefault(dependencyMap[12])();
  let isAndroidResult = importDefault(dependencyMap[13])() > 0;
  if (isAndroidResult) {
    let obj = arg1(dependencyMap[4]);
    isAndroidResult = obj.isAndroid();
  }
  if (tmp !== arg1(dependencyMap[6]).KeyboardTypes.SYSTEM) {
    let tmp7 = null;
    if (!isAndroidResult) {
      obj = { keyboardType: tmp };
      tmp7 = <PortalKeyboardPlaceholderInner {...obj} />;
    }
  } else {
    tmp7 = null;
    const obj2 = arg1(dependencyMap[4]);
  }
  return tmp7;
}, {});
let closure_6 = arg1(dependencyMap[3]).createStyles((arg0, arg1, arg2, arg3) => {
  let obj = {};
  obj = {};
  let absoluteFillObject = null;
  if (obj3.isIOS()) {
    absoluteFillObject = closure_4.absoluteFillObject;
  }
  const merged = Object.assign(absoluteFillObject);
  obj["borderTopWidth"] = closure_4.hairlineWidth;
  obj["borderTopColor"] = importDefault(dependencyMap[5]).colors.BORDER_SUBTLE;
  let BORDER_SUBTLE;
  if (arg3) {
    BORDER_SUBTLE = importDefault(dependencyMap[5]).colors.BORDER_SUBTLE;
  }
  obj["borderRightColor"] = BORDER_SUBTLE;
  let hairlineWidth;
  if (arg3) {
    hairlineWidth = closure_4.hairlineWidth;
  }
  obj["borderRightWidth"] = hairlineWidth;
  let BORDER_SUBTLE1;
  if (arg3) {
    BORDER_SUBTLE1 = importDefault(dependencyMap[5]).colors.BORDER_SUBTLE;
  }
  obj["borderLeftColor"] = BORDER_SUBTLE1;
  let hairlineWidth1;
  if (arg3) {
    hairlineWidth1 = closure_4.hairlineWidth;
  }
  obj["borderLeftWidth"] = hairlineWidth1;
  const APP_LAUNCHER = arg1(dependencyMap[6]).KeyboardTypes.APP_LAUNCHER;
  obj["backgroundColor"] = importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW;
  const obj3 = arg1(dependencyMap[4]);
  if (obj4.isIOS()) {
    const tmp16 = arg1;
  }
  obj["width"] = tmp16;
  const obj4 = arg1(dependencyMap[4]);
  if (obj5.isIOS()) {
    const tmp19 = arg2;
  }
  obj["height"] = tmp19;
  obj.container = obj;
  return obj;
});
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/keyboard/native/PortalKeyboardPlaceholder.tsx");

export const PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE = jsxResult;
