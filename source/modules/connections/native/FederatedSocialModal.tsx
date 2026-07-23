// Module ID: 9006
// Function ID: 70892
// Name: FederatedSocialModal
// Dependencies: [5, 57, 31, 653, 33, 4130, 4814, 1212, 4938, 3827, 9007, 5121, 4126, 9000, 1273, 4543, 5087, 5519, 2]
// Exports: default

// Module 9006 (FederatedSocialModal)
import closure_3 from "_createForOfIteratorHelperLoose";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { WebBrowserType } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ container: { padding: 16 }, description: { textAlign: "center" }, input: { paddingHorizontal: 0, paddingVertical: 0, marginVertical: 16 } });
const result = require("result").fileFinishedImporting("modules/connections/native/FederatedSocialModal.tsx");

export default function FederatedSocialModal(platformType) {
  const _require = platformType;
  let screens = importDefault(4814);
  let value = screens.get(platformType.platformType);
  let name;
  if (null != value) {
    name = value.name;
  }
  if (null == name) {
    let intl = _require(1212).intl;
    name = intl.string(_require(1212).t["bU/GZm"]);
  }
  screens = {};
  let obj = {};
  let intl2 = _require(1212).intl;
  let obj1 = { serviceName: name };
  obj.headerTitle = intl2.formatToPlainString(_require(1212).t["ImMhq+"], obj1);
  obj.headerLeft = _require(5087).getHeaderBackButton(platformType.onClose);
  obj.render = function render() {
    return (function FederatedSocialModalScreen(closure_0) {
      let closure_1;
      let platformType;
      ({ location: closure_0, successRedirect: closure_1, platformType } = closure_0);
      const onClose = closure_0.onClose;
      let first;
      let result;
      let closure_6;
      function tryHandle() {
        return _tryHandle(...arguments);
      }
      function _tryHandle() {
        // CreateGeneratorClosureLongIndex (0x67)
        const obj = outer3_3(tmp);
        return obj(...arguments);
      }
      const tmp = outer2_9();
      const tmp2 = outer2_4(outer2_5.useState(""), 2);
      first = tmp2[0];
      const tmp4 = outer2_4(outer2_5.useState(null), 2);
      result = tmp4[1];
      const tmp5 = outer2_4(outer2_5.useState(false), 2);
      closure_6 = tmp5[1];
      let obj = outer2_1(outer2_2[6]);
      const value = obj.get(platformType);
      let name;
      if (null != value) {
        name = value.name;
      }
      if (null == name) {
        const intl = callback(outer2_2[7]).intl;
        name = intl.string(callback(outer2_2[7]).t["bU/GZm"]);
      }
      let obj1 = callback(outer2_2[10]);
      const exampleHandle = obj1.getExampleHandle(platformType);
      let obj2 = callback(outer2_2[10]);
      obj = { bottom: true, style: tmp.container };
      obj = { variant: "text-md/normal", color: "text-default", style: tmp.description };
      const intl2 = callback(outer2_2[7]).intl;
      obj1 = { serviceName: name };
      obj.children = intl2.formatToPlainString(callback(outer2_2[7]).t["7TByKh"], obj1);
      const items = [outer2_7(callback(outer2_2[12]).Text, obj), , ];
      obj2 = { autoFocus: true, style: tmp.input };
      const validateHandleResult = obj2.validateHandle(first, platformType);
      const intl3 = callback(outer2_2[7]).intl;
      obj2.label = intl3.string(callback(outer2_2[7]).t.tZ9QFR);
      obj2.placeholder = exampleHandle;
      obj2.error = tmp4[0];
      obj2.returnKeyType = "done";
      obj2.onChangeText = tmp2[1];
      obj2.onSubmitEditing = tryHandle;
      obj2.clearButtonVisibility = callback(outer2_2[14]).ClearButtonVisibility.WITH_CONTENT;
      obj2.autoCapitalize = "none";
      obj2.autoComplete = "off";
      obj2.autoCorrect = false;
      items[1] = outer2_7(outer2_1(outer2_2[13]), obj2);
      const obj3 = { loading: tmp5[0], disabled: !validateHandleResult };
      const intl4 = callback(outer2_2[7]).intl;
      obj3.text = intl4.string(callback(outer2_2[7]).t.PDTjLN);
      obj3.onPress = tryHandle;
      items[2] = outer2_7(callback(outer2_2[15]).Button, obj3);
      obj.children = items;
      return outer2_8(callback(outer2_2[11]).SafeAreaPaddingView, obj);
    })(closure_0);
  };
  screens.root = obj;
  return callback(_require(5519).Navigator, { initialRouteName: "root", screens });
};
