// Module ID: 8998
// Function ID: 70838
// Name: FederatedSocialModal
// Dependencies: []
// Exports: default

// Module 8998 (FederatedSocialModal)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const WebBrowserType = arg1(dependencyMap[3]).WebBrowserType;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
let closure_9 = arg1(dependencyMap[5]).createStyles({ container: { padding: 16 }, description: { textAlign: "center" }, input: { "Bool(true)": 16, "Bool(true)": 20, "Bool(true)": null } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/connections/native/FederatedSocialModal.tsx");

export default function FederatedSocialModal(platformType) {
  const arg1 = platformType;
  let screens = importDefault(dependencyMap[6]);
  const value = screens.get(platformType.platformType);
  let name;
  if (null != value) {
    name = value.name;
  }
  if (null == name) {
    const intl = arg1(dependencyMap[7]).intl;
    name = intl.string(arg1(dependencyMap[7]).t.bU/GZm);
  }
  screens = {};
  const obj = {};
  const intl2 = arg1(dependencyMap[7]).intl;
  const obj1 = { serviceName: name };
  obj.headerTitle = intl2.formatToPlainString(arg1(dependencyMap[7]).t.ImMhq+, obj1);
  obj.headerLeft = arg1(dependencyMap[16]).getHeaderBackButton(platformType.onClose);
  obj.render = function render() {
    return function FederatedSocialModalScreen(onClose) {
      let platformType;
      ({ location: closure_0, successRedirect: closure_1, platformType } = onClose);
      onClose = onClose.onClose;
      let first;
      let React;
      let closure_6;
      function tryHandle() {
        return _tryHandle(...arguments);
      }
      function _tryHandle(Button, arg1) {
        // CreateGeneratorClosureLongIndex (0x67)
        const obj = onClose(tmp);
        const _tryHandle = obj;
        return obj(...arguments);
      }
      const tmp = callback4();
      const tmp2 = first(React.useState(""), 2);
      first = tmp2[0];
      const tmp4 = first(React.useState(null), 2);
      React = tmp4[1];
      const tmp5 = first(React.useState(false), 2);
      closure_6 = tmp5[1];
      let obj = callback2(platformType[6]);
      const value = obj.get(platformType);
      let name;
      if (null != value) {
        name = value.name;
      }
      if (null == name) {
        const intl = callback(platformType[7]).intl;
        name = intl.string(callback(platformType[7]).t.bU/GZm);
      }
      let obj1 = callback(platformType[10]);
      const exampleHandle = obj1.getExampleHandle(platformType);
      let obj2 = callback(platformType[10]);
      obj = { bottom: true, style: tmp.container };
      obj = { hasMaxConnections: 1, isBoostOnlySubscription: 1, style: tmp.description };
      const intl2 = callback(platformType[7]).intl;
      obj1 = { serviceName: name };
      obj.children = intl2.formatToPlainString(callback(platformType[7]).t.7TByKh, obj1);
      const items = [_tryHandle(callback(platformType[12]).Text, obj), , ];
      obj2 = { autoFocus: true, style: tmp.input };
      const validateHandleResult = obj2.validateHandle(first, platformType);
      const intl3 = callback(platformType[7]).intl;
      obj2.label = intl3.string(callback(platformType[7]).t.tZ9QFR);
      obj2.placeholder = exampleHandle;
      obj2.error = tmp4[0];
      obj2.returnKeyType = "done";
      obj2.onChangeText = tmp2[1];
      obj2.onSubmitEditing = tryHandle;
      obj2.clearButtonVisibility = callback(platformType[14]).ClearButtonVisibility.WITH_CONTENT;
      obj2.autoCapitalize = "none";
      obj2.autoComplete = "off";
      obj2.autoCorrect = false;
      items[1] = _tryHandle(callback2(platformType[13]), obj2);
      const obj3 = { loading: tmp5[0], disabled: !validateHandleResult };
      const intl4 = callback(platformType[7]).intl;
      obj3.text = intl4.string(callback(platformType[7]).t.PDTjLN);
      obj3.onPress = tryHandle;
      items[2] = _tryHandle(callback(platformType[15]).Button, obj3);
      obj.children = items;
      return callback3(callback(platformType[11]).SafeAreaPaddingView, obj);
    }(arg0);
  };
  screens.root = obj;
  return callback(arg1(dependencyMap[17]).Navigator, { initialRouteName: "root", screens });
};
