// Module ID: 16249
// Function ID: 126074
// Name: Overview
// Dependencies: [31, 27, 1342, 1849, 653, 33, 4130, 689, 1920, 566, 9225, 1456, 4540, 4543, 1212, 16011, 507, 9266, 4126, 14420, 2]
// Exports: default

// Module 16249 (Overview)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "wrapURL";

let closure_10;
let closure_11;
let closure_12;
let closure_7;
let closure_8;
let closure_9;
let require = arg1;
({ Endpoints: closure_7, VerificationModalScenes: closure_8, VerificationTypes: closure_9 } = ME);
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.containerInner = { flex: 1, padding: 20, justifyContent: "center", alignItems: "center" };
let obj1 = { marginTop: 20, fontSize: 17, textAlign: "center", color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose.title = obj1;
let obj2 = { marginTop: 4, marginBottom: 20, fontSize: 14, textAlign: "center", color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_400 };
_createForOfIteratorHelperLoose.body = obj2;
_createForOfIteratorHelperLoose.blocks = { width: "60%", justifyContent: "center" };
_createForOfIteratorHelperLoose.verificationType = { marginBottom: 20 };
_createForOfIteratorHelperLoose.button = { marginBottom: 20, marginHorizontal: 20, alignSelf: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const articleURL = require("wrapURL").getArticleURL(ME.HelpdeskArticles.VERIFICATION_FAQ);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/verification/native/components/Overview.tsx");

export default function Overview() {
  let tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  let obj = require(navigation[9]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => {
    const action = outer1_5.getAction();
    return stateFromStores(navigation[10]).getVerificationTypes(action);
  }, [], stateFromStores(navigation[10]).areVerificationTypesEqual);
  let obj1 = require(navigation[11]);
  navigation = obj1.useNavigation();
  stateFromStores(navigation[12])(require(navigation[12]).BackPressHandler.minimize);
  const items1 = [navigation, stateFromStores, tmp.verificationType];
  obj = { style: tmp.container };
  obj = { style: tmp.containerInner };
  let callback = React.useCallback(() => outer1_10(outer1_11, {
    children: stateFromStores.map((arg0) => {
      const callback = arg0;
      if (arg0 === outer2_9.CAPTCHA) {
        let obj = {};
        const intl = callback(navigation[14]).intl;
        obj.text = intl.string(callback(navigation[14]).t["3413d0"]);
        obj.onPress = function onPress() {
          let obj = stateFromStores(navigation[15]);
          stateFromStores(navigation[15]).showCaptcha().then((captcha_key) => {
            const HTTP = callback(navigation[16]).HTTP;
            obj = { url: outer4_7.CAPTCHA, body: obj, oldFormErrors: true, rejectWithError: true };
            obj = { captcha_key };
            HTTP.post(obj);
          });
        };
        obj.grow = true;
        let tmp4 = outer2_10(callback(navigation[13]).Button, obj);
      } else {
        obj = { style: outer1_0.verificationType };
        obj = {
          text: stateFromStores(navigation[10]).getButtonTitle(arg0),
          onPress() {
              let tmp = callback !== outer3_9.EMAIL_OR_PHONE;
              if (tmp) {
                tmp = callback !== outer3_9.EMAIL;
              }
              if (tmp) {
                tmp = callback !== outer3_9.REVERIFY_EMAIL;
              }
              if (tmp) {
                outer2_2.push(outer3_8.ADD_PHONE);
              } else {
                let email;
                callback(navigation[17]).accountDetailsInit();
                const currentUser = outer3_6.getCurrentUser();
                if (null != currentUser) {
                  email = currentUser.email;
                }
                if (null != email) {
                  let ENTER_EMAIL = outer3_8.RESEND_EMAIL;
                } else {
                  ENTER_EMAIL = outer3_8.ENTER_EMAIL;
                }
                const obj = callback(navigation[17]);
              }
            },
          grow: true
        };
        obj.children = outer2_10(callback(navigation[13]).Button, obj);
        tmp4 = outer2_10(outer2_4, obj, arg0);
        const obj4 = stateFromStores(navigation[10]);
      }
      return tmp4;
    })
  }), items1);
  obj1 = { variant: "heading-lg/semibold", style: tmp.title, accessibilityRole: "header" };
  let intl = require(navigation[14]).intl;
  obj1.children = intl.string(require(navigation[14]).t.Iz0kDg);
  const items2 = [callback(require(navigation[18]).Text, obj1), , ];
  const obj2 = { variant: "text-sm/medium", style: tmp.body };
  const intl2 = require(navigation[14]).intl;
  obj2.children = intl2.format(require(navigation[14]).t["0rqMV5"], { helpCenterURL: closure_14 });
  items2[1] = callback(require(navigation[18]).Text, obj2);
  const obj3 = { helpCenterURL: closure_14 };
  let tmp4 = stateFromStores(navigation[12]);
  items2[2] = callback(View, { style: tmp.blocks, children: callback() });
  obj.children = items2;
  const items3 = [callback2(View, obj), ];
  const obj5 = { style: tmp.button, accessibilityRole: "link" };
  const obj6 = { variant: "secondary" };
  const intl3 = require(navigation[14]).intl;
  obj6.text = intl3.string(require(navigation[14]).t["Yl/Riu"]);
  obj6.onPress = require(navigation[19]).emailSupport;
  obj5.children = callback(require(navigation[13]).Button, obj6);
  items3[1] = callback(View, obj5);
  obj.children = items3;
  return callback2(View, obj);
};
