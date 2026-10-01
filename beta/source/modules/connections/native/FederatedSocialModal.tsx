// Module ID: 8584
// Function ID: 8585
// Name: FederatedSocialModal
// Dependencies: [5, 32, 19, 1074, 21, 4836, 5595, 1115, 5718, 4525, 8585, 6544, 4832, 6023, 1177, 5281, 5936, 6421, 2]
// Exports: default

// Module 8584 (FederatedSocialModal)
import Constants from "Constants" /* 1074 */;
import intl5 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import PlatformsDefault from "Platforms" /* 5595 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6544 */;
import FederatedSocialUtils from "FederatedSocialUtils" /* 8585 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _location, _require, c4, c5, closure_2;

let metroImportAll;
let metroImportDefault;
let tmp9;
const FreeFormInputGroupDefault = tmp9(6023);
const WebBrowserType = Constants.WebBrowserType;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ container: { padding: 16 }, description: { textAlign: "center" }, input: { paddingHorizontal: 0, paddingVertical: 0, marginVertical: 16 } });
const result = size.fileFinishedImporting("modules/connections/native/FederatedSocialModal.tsx");

export default function FederatedSocialModal(platformType) {
  let intl2;
  let obj3;
  let obj4;
  _require = platformType;
  let tmp = dependencyMap;
  let obj = PlatformsDefault;
  let value = obj.get(platformType.platformType);
  let name;
  if (value != null) {
    name = value.name;
  }
  if (name == null) {
    const tmp4 = _require;
    let intl = require("intl").intl;
    name = intl.string(require("intl").t["bU/GZm"]);
  }
  let obj2 = { root: obj3 };
  obj3 = {
    headerTitle: intl2.formatToPlainString(require("intl").t["ImMhq+"], { serviceName: name }),
    headerLeft: obj4.getHeaderBackButton(platformType.onClose),
    render() {
      let closure_129_0;
      let closure_129_1;
      let closure_5;
      let closure_6;
      let first;
      let first1;
      let first2;
      let intl2;
      let intl3;
      let intl4;
      let items;
      let tmp4;
      ({ location: closure_129_0, successRedirect: closure_129_1, platformType } = platformType);
      const onClose = platformType.onClose;
      first = undefined;
      closure_5 = undefined;
      closure_6 = undefined;
      let obj = function _tryHandle() {
        let handle;
        let successRedirect;
        obj = closure_2_3(function*(arg0, value) {
          let closure_0;
          let closure_1;
          let obj6;
          if (c5 === 2) {
            c5 = 3;
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
              let body;
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  _location = tmp4;
                  body = undefined;
                  closure_2_6(true);
                  closure_2_5(null);
                  c3 = 1;
                  const obj4 = { location: _location, successRedirect, handle };
                  c4 = 2;
                  c5 = 1;
                  const obj5 = { value: obj6.authorize(platformType, obj4), done: false };
                  obj6 = tmp(closure_2[8]);
                  return obj5;
                }
              } else {
                if (1 === c4) {
                  c3 = 0;
                  const intl = _location(closure_2[7]).intl;
                  closure_129_5(intl.string(_location(closure_2[7]).t["7wbPNl"]));
                  closure_129_6(false);
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  const obj7 = { value, done: true };
                  return obj7;
                } else {
                  body = value.body;
                  let url;
                  if (body != null) {
                    url = body.url;
                  }
                  if (null == url) {
                    const _Error = Error;
                    const self = this;
                    const self2 = this;
                    const error = new Error();
                    throw error;
                  } else {
                    obj = tmp(closure_2[9]);
                    obj.openURLExternally(body.url, constants.SAFARI);
                    closure_129_3();
                    c3 = 0;
                  }
                }
                c5 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp26) {
              closure_2 = tmp26;
              if (0 === c3) {
                c5 = 3;
                throw tmp26;
              } else {
                c4 = 1;
              }
            }
          }
        });
        return obj(...arguments);
      };
      const tmp = closure_9();
      [first, tmp4] = react.useState("");
      [first1, closure_5] = react.useState(null);
      [first2, closure_6] = react.useState(false);
      obj = PlatformsDefault;
      const value = obj.get(platformType);
      let name;
      if (value != null) {
        name = value.name;
      }
      if (name == null) {
        let intl = intl5.intl;
        name = intl.string(intl5.t["bU/GZm"]);
      }
      function tryHandle() {
        return obj(...arguments);
      }
      let obj2 = FederatedSocialUtils;
      const exampleHandle = obj2.getExampleHandle(platformType);
      let obj3 = FederatedSocialUtils;
      let obj4 = { bottom: true, style: tmp.container, children: items };
      const validateHandleResult = obj3.validateHandle(first, platformType);
      const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
      let obj5 = { variant: "text-md/normal", color: "text-default", style: tmp.description, children: intl2.formatToPlainString(intl5.t["7TByKh"], { serviceName: name }) };
      const Text = Text_Text.Text;
      intl2 = intl5.intl;
      items = [metroImportDefault(Text, obj5), , ];
      let obj6 = { autoFocus: true, style: tmp.input, label: intl3.string(intl5.t.tZ9QFR), placeholder: exampleHandle, error: first1, returnKeyType: "done", onChangeText: tmp4, onSubmitEditing: tryHandle, clearButtonVisibility: native.ClearButtonVisibility.WITH_CONTENT, autoCapitalize: "none", autoComplete: "off", autoCorrect: false };
      const tmp9Result = FreeFormInputGroupDefault;
      intl3 = intl5.intl;
      items[1] = metroImportDefault(tmp9Result, obj6);
      let obj7 = { loading: first2, disabled: !validateHandleResult, text: intl4.string(intl5.t.PDTjLN), onPress: tryHandle };
      const Button = components_Button_Button.Button;
      intl4 = intl5.intl;
      items[2] = metroImportDefault(Button, obj7);
      return metroImportAll(SafeAreaPaddingView, obj4);
    }
  };
  intl2 = require("intl").intl;
  obj4 = require("NavigatorHeader");
  return closure_7(require("Navigator").Navigator, { initialRouteName: "root", screens: obj2 });
};
