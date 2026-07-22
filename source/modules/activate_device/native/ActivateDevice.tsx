// Module ID: 12768
// Function ID: 97879
// Name: ActivateDevice
// Dependencies: [333053952, 91226112, 837353472, 270270464, 297467904, 131072, 528089088, 452984832, 553648128, 503316480, 318767120, 3909091363, 469762097, 3154116624, 3137339396, 33554449, 1946157056, 4096, 12782, 1934, 2]
// Exports: ActivateDevice

// Module 12768 (ActivateDevice)
import result2 from "result2";

let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, ImageBackground: closure_6, ActivityIndicator: closure_7, ScrollView: closure_8 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = { background: { flex: 1 } };
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.TEXT_BRAND };
obj.imageStyle = obj;
obj.safeArea = {};
const tmp2 = arg1(dependencyMap[2]);
obj.content = { backgroundColor: importDefault(dependencyMap[5]).colors.PANEL_BG, borderRadius: importDefault(dependencyMap[5]).radii.lg, shadowColor: importDefault(dependencyMap[5]).colors.BLACK, shadowOffset: {}, shadowRadius: 4 };
obj.scroller = {};
obj.scrollerContent = { 9223372036854775807: "safety_state", 9223372036854775807: "message" };
let closure_10 = obj.createStyles(obj);
const result = result2.fileFinishedImporting("modules/activate_device/native/ActivateDevice.tsx");

export const ActivateDevice = (onClose) => {
  onClose = onClose.onClose;
  const tmp = callback2();
  const tmp2 = callback(React.useState({ paddingBottom: "/assets/.cache/intl/bW9kdWxlcy9jb2xsZWN0aWJsZXMvd2Vi", mass: null }), 2);
  const first = tmp2[0];
  const arg1 = first;
  const importDefault = tmp4;
  const tmp5 = callback(React.useState(null), 2);
  const first1 = tmp5[0];
  const dependencyMap = first1;
  let callback = tmp5[1];
  let obj = arg1(dependencyMap[6]);
  const activateDeviceStepTracking = obj.useActivateDeviceStepTracking(first);
  const items = [tmp2[1]];
  callback = React.useCallback(() => {
    tmp4({ type: "user-code-input" });
  }, items);
  const items1 = [tmp2[1]];
  const items2 = [tmp2[1]];
  const callback1 = React.useCallback((userCodeData) => {
    tmp4({ type: "success", userCodeData });
  }, items1);
  const callback2 = React.useCallback((userCodeData) => {
    tmp4({ type: "error", userCodeData });
  }, items2);
  let obj1 = arg1(dependencyMap[7]);
  const deviceCodeAuthorizeCallback = obj1.useDeviceCodeAuthorizeCallback(callback, callback2, callback1);
  const React = deviceCodeAuthorizeCallback;
  const items3 = [deviceCodeAuthorizeCallback];
  const items4 = [first];
  const callback3 = React.useCallback((userCodeData) => {
    const first = userCodeData;
    let obj = { type: "authorization", userCodeData };
    tmp4(obj);
    obj = { "Bool(true)": "r", "Bool(true)": "isArray", "Bool(true)": "WireType", "Bool(true)": "op", "Bool(true)": "top", "Bool(true)": "r" };
    ({ clientId: obj3.clientId, scopes: obj3.scopes } = userCodeData);
    obj.callbackWithoutPost = function callbackWithoutPost(arg0) {
      return callback(arg0, arg0);
    };
    first(first1[8]).openOAuth2Modal(obj);
  }, items3);
  const effect = React.useEffect(() => {
    if ("userCodeData" in first) {
      const userCodeData = first.userCodeData;
      const items = [first(first1[9]).ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID, first(first1[9]).ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID];
      if (items.includes(userCodeData.clientId)) {
        callback(tmp4(first1[10]));
      } else {
        const scopes = userCodeData.scopes;
        if (scopes.some((arg0) => callback(closure_2[11]).isSocialLayerUmbrellaScope(arg0))) {
          callback(callback(first1[12]));
        }
      }
    }
  }, items4);
  const items5 = [first1];
  const effect1 = React.useEffect(() => {
    if (null != first1) {
      tmp4(first1[13]).preload(first1);
      const obj = tmp4(first1[13]);
    }
  }, items5);
  const type = first.type;
  if ("user-code-input" === type) {
    obj = {};
    let prefilledUserCode;
    if (first.usePrefilledCode) {
      prefilledUserCode = onClose.prefilledUserCode;
    }
    obj.prefilledUserCode = prefilledUserCode;
    obj.onUserCodeAccepted = callback3;
    obj.onClose = onClose;
    let tmp21Result = jsx(arg1(dependencyMap[14]).UserCodeInput, obj);
    const tmp21 = jsx;
  } else if ("authorization" === type) {
    obj = { animating: true };
    tmp21Result = <closure_7 {...obj} />;
  } else if ("success" === type) {
    obj1 = { onComplete: onClose, data: first.userCodeData, successImage: first1 };
    tmp21Result = jsx(arg1(dependencyMap[15]).ActivateDeviceSuccess, obj1);
  } else {
    tmp21Result = null;
    if ("error" === type) {
      const obj2 = { onRetry: callback };
      tmp21Result = jsx(arg1(dependencyMap[16]).ActivateDeviceError, obj2);
    }
  }
  const obj3 = {};
  let obj6 = arg1(dependencyMap[17]);
  obj3.source = obj6.makeSource(importDefault(dependencyMap[18]));
  obj3.imageStyle = tmp.imageStyle;
  const items6 = [tmp.background];
  obj3.style = items6;
  const obj4 = { "Bool(true)": null, "Bool(true)": null, style: tmp.safeArea };
  const obj5 = { style: tmp.content };
  obj6 = { bounces: false, style: tmp.scroller, contentContainerStyle: tmp.scrollerContent, children: tmp21Result };
  obj5.children = <closure_8 {...obj6} />;
  obj4.children = <closure_5 {...obj5} />;
  obj3.children = jsx(arg1(dependencyMap[19]).SafeAreaPaddingView, obj4);
  return <closure_6 {...obj3} />;
};
