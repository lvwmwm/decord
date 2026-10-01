// Module ID: 17284
// Function ID: 17285
// Name: Overview
// Dependencies: [19, 17, 2037, 1372, 1074, 21, 4836, 576, 2111, 504, 6007, 1485, 5276, 5281, 1115, 17069, 1271, 6405, 1486, 4832, 15088, 2]
// Exports: default

// Module 17284 (Overview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import react from "react" /* 19 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2037 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import HelpdeskUtils from "HelpdeskUtils" /* 2111 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, action, currentUser, navigation;

let HelpdeskArticles;
let c10;
let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
const View = react_native.View;
({ Endpoints: metroImportDefault, VerificationModalScenes: metroImportAll, VerificationTypes: c9, HelpdeskArticles } = Constants);
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, containerInner: { flex: 1, padding: 20, justifyContent: "center", alignItems: "center" }, title: obj3, body: obj4, blocks: { width: "60%", justifyContent: "center" }, verificationType: { marginBottom: 20 }, button: { marginBottom: 20, marginHorizontal: 20, alignSelf: "center" } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { marginTop: 20, fontSize: 17, textAlign: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj4 = { marginTop: 4, marginBottom: 20, fontSize: 14, textAlign: "center", color: nativeDefault.unsafe_rawColors.PRIMARY_400 };
let closure_13 = createStyles(obj);
const helpCenterURL = HelpdeskUtils.getArticleURL(HelpdeskArticles.VERIFICATION_FAQ);
const result = size.fileFinishedImporting("modules/verification/native/components/Overview.tsx");

export default function Overview() {
  let Button;
  let closure_0;
  let constants2;
  let intl;
  let intl2;
  let intl3;
  let items2;
  let items3;
  let obj10;
  let obj7;
  let stateFromStores;
  let tmp = closure_13();
  _require = tmp;
  let obj = require("get initialized");
  const items = [UserRequiredActionStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    action = action.getAction();
    const obj = stateFromStores(navigation[10]);
    return obj.getVerificationTypes(action);
  }, [], stateFromStores(navigation[10]).areVerificationTypesEqual);
  let obj2 = require("useNavigation");
  navigation = obj2.useNavigation();
  let tmp4 = stateFromStores(navigation[12]);
  tmp4(require("useBackPressHandler").BackPressHandler.minimize);
  const items1 = [navigation, stateFromStores, tmp.verificationType];
  let obj3 = { style: tmp.container, children: items3 };
  let obj4 = { style: tmp.containerInner, children: items2 };
  const callback = react.useCallback(() => {
    let obj = {
      children: stateFromStores.map((item) => {
        let Button2;
        let intl;
        let obj3;
        let obj4;
        let tmp4;
        if (item === constants.CAPTCHA) {
          const tmp = closure_1_10;
          let obj = {
            text: intl.string(closure_1_0(navigation[14]).t["3413d0"]),
            onPress() {
                let obj = closure_1_1(closure_1_2[15]);
                const showCaptchaResult = obj.showCaptcha();
                showCaptchaResult.then((captcha_key) => {
                  let obj;
                  const HTTP = item(closure_1_2[16]).HTTP;
                  const request = { url: constants.CAPTCHA, body: obj, oldFormErrors: true, rejectWithError: true };
                  obj = { captcha_key };
                  HTTP.post(request);
                });
              },
            grow: true
          };
          const Button = closure_1_0(navigation[13]).Button;
          intl = closure_1_0(navigation[14]).intl;
          tmp4 = closure_1_10(Button, obj, item);
        } else {
          const obj2 = { style: item.verificationType, children: closure_1_10(Button2, obj3) };
          obj3 = {
            text: obj4.getButtonTitle(item),
            onPress() {
                let ADD_PHONE = constants.ADD_PHONE;
                const tmp4 = item !== constants2.EMAIL_OR_PHONE && item !== constants2.EMAIL && item !== constants2.REVERIFY_EMAIL;
                if (!tmp4) {
                  const obj = item(navigation[17]);
                  obj.accountDetailsInit();
                  currentUser = currentUser.getCurrentUser();
                  let email;
                  if (currentUser != null) {
                    email = currentUser.email;
                  }
                  ADD_PHONE = null != email ? tmp.RESEND_EMAIL : tmp.ENTER_EMAIL;
                }
                const dispatch = closure_2_2.dispatch;
                const StackActions = item(navigation[18]).StackActions;
                dispatch(StackActions.push(ADD_PHONE));
              },
            grow: true
          };
          Button2 = closure_1_0(navigation[13]).Button;
          obj4 = stateFromStores(navigation[10]);
          tmp4 = closure_1_10(closure_1_4, obj2, item);
        }
        return tmp4;
      })
    };
    return authStore(unpackModuleId, obj);
  }, items1);
  const obj5 = { variant: "heading-lg/semibold", style: tmp.title, accessibilityRole: "header", children: intl.string(require("intl").t.Iz0kDg) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items2 = [closure_10(Text, obj5), , ];
  const obj6 = { variant: "text-sm/medium", style: tmp.body, children: intl2.format(require("intl").t["0rqMV5"], obj7) };
  const Text2 = require("Text/Text").Text;
  intl2 = require("intl").intl;
  obj7 = { helpCenterURL };
  items2[1] = closure_10(Text2, obj6);
  const obj8 = { style: tmp.blocks, children: callback() };
  items2[2] = closure_10(View, obj8);
  items3 = [closure_12(View, obj4), ];
  const obj9 = { style: tmp.button, accessibilityRole: "link", children: closure_10(Button, obj10) };
  obj10 = { variant: "secondary", text: intl3.string(require("intl").t["Yl/Riu"]), onPress: require("SupportUtils").emailSupport };
  Button = require("components/Button/Button").Button;
  intl3 = require("intl").intl;
  items3[1] = closure_10(View, obj9);
  return closure_12(View, obj3);
};
