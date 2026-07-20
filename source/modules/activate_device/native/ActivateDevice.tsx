// Module ID: 12752
// Function ID: 97801
// Name: ActivateDevice
// Dependencies: []
// Exports: ActivateDevice

// Module 12752 (ActivateDevice)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, ImageBackground: closure_6, ActivityIndicator: closure_7, ScrollView: closure_8 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = { background: { flex: 1 } };
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.TEXT_BRAND };
obj.imageStyle = obj;
obj.safeArea = {};
const obj1 = { paddingRight: "%ArrayProto_keys%", flexDirection: "containerLandscape", flexWrap: "isArray", alignItems: "ad", overflow: "isArray", flex: "MUR", flexDirection: "secondary", alignItems: "GET_ENTITLEMENTS", marginTop: "sm", marginTop: "canExpand", backgroundColor: importDefault(dependencyMap[5]).colors.PANEL_BG, borderRadius: importDefault(dependencyMap[5]).radii.lg, shadowColor: importDefault(dependencyMap[5]).colors.BLACK, shadowOffset: { aze: false, azj: false }, shadowRadius: 4 };
obj.content = obj1;
obj.scroller = {};
obj.scrollerContent = {};
let closure_10 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/activate_device/native/ActivateDevice.tsx");

export const ActivateDevice = (onClose) => {
  onClose = onClose.onClose;
  const tmp = callback2();
  const tmp2 = callback(React.useState({ "Bool(true)": null, "Bool(true)": null }), 2);
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
    obj = { <string:1453996644>: 1174405870, <string:626807124>: -117439765, <string:3130342485>: 1207960298, <string:3348140680>: -2063596810, <string:1637401752>: 335545070, <string:2221429479>: "a" };
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
  const obj4 = { "Bool(false)": null, "Bool(false)": null, style: tmp.safeArea };
  const obj5 = { style: tmp.content };
  obj6 = { bounces: false, style: tmp.scroller, contentContainerStyle: tmp.scrollerContent, children: tmp21Result };
  obj5.children = <closure_8 {...obj6} />;
  obj4.children = <closure_5 {...obj5} />;
  obj3.children = jsx(arg1(dependencyMap[19]).SafeAreaPaddingView, obj4);
  return <closure_6 {...obj3} />;
};
