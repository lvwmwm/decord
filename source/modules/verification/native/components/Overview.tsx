// Module ID: 16085
// Function ID: 123577
// Name: Overview
// Dependencies: []
// Exports: default

// Module 16085 (Overview)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[4]);
({ Endpoints: closure_7, VerificationModalScenes: closure_8, VerificationTypes: closure_9 } = tmp2);
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.containerInner = {};
const obj1 = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, color: importDefault(dependencyMap[7]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.title = obj1;
const obj2 = { <string:3488468717>: null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, color: importDefault(dependencyMap[7]).unsafe_rawColors.PRIMARY_400 };
obj.body = obj2;
obj.blocks = { ref: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004789945341679744, accessibilityRole: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000362298761508198 };
obj.verificationType = { marginBottom: 20 };
obj.button = { "Null": null, "Null": null, "Null": null };
let closure_13 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[5]);
const articleURL = importDefault(dependencyMap[8]).getArticleURL(tmp2.HelpdeskArticles.VERIFICATION_FAQ);
const importDefaultResult = importDefault(dependencyMap[8]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/verification/native/components/Overview.tsx");

export default function Overview() {
  const tmp = callback3();
  const arg1 = tmp;
  let obj = arg1(dependencyMap[9]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const action = action.getAction();
    return stateFromStores(navigation[10]).getVerificationTypes(action);
  }, [], importDefault(dependencyMap[10]).areVerificationTypesEqual);
  const importDefault = stateFromStores;
  let obj1 = arg1(dependencyMap[11]);
  const navigation = obj1.useNavigation();
  const dependencyMap = navigation;
  importDefault(dependencyMap[12])(arg1(dependencyMap[12]).BackPressHandler.minimize);
  const items1 = [navigation, stateFromStores, tmp.verificationType];
  obj = { style: tmp.container };
  obj = { style: tmp.containerInner };
  const callback = React.useCallback(() => callback(closure_11, {
    children: stateFromStores.map((arg0) => {
      if (arg0 === constants.CAPTCHA) {
        let obj = {};
        const intl = arg0(closure_2[14]).intl;
        obj.text = intl.string(arg0(closure_2[14]).t.3413d0);
        obj.onPress = function onPress() {
          const obj = callback(closure_2[15]);
          callback(closure_2[15]).showCaptcha().then((captcha_key) => {
            const HTTP = callback(closure_2[16]).HTTP;
            let obj = { url: constants.CAPTCHA, body: obj, oldFormErrors: true, rejectWithError: true };
            obj = { captcha_key };
            HTTP.post(obj);
          });
        };
        obj.grow = true;
        let tmp4 = callback2(arg0(closure_2[13]).Button, obj);
      } else {
        obj = { style: arg0.verificationType };
        obj = {
          text: callback(closure_2[10]).getButtonTitle(arg0),
          onPress() {
              let tmp = arg0 !== constants2.EMAIL_OR_PHONE;
              if (tmp) {
                tmp = arg0 !== constants2.EMAIL;
              }
              if (tmp) {
                tmp = arg0 !== constants2.REVERIFY_EMAIL;
              }
              if (tmp) {
                const arr = arr.push(constants.ADD_PHONE);
              } else {
                let email;
                arg0(arr[17]).accountDetailsInit();
                const currentUser = currentUser.getCurrentUser();
                if (null != currentUser) {
                  email = currentUser.email;
                }
                if (null != email) {
                  let ENTER_EMAIL = constants.RESEND_EMAIL;
                } else {
                  ENTER_EMAIL = constants.ENTER_EMAIL;
                }
                const obj = arg0(arr[17]);
              }
            },
          grow: true
        };
        obj.children = callback2(arg0(closure_2[13]).Button, obj);
        tmp4 = callback2(closure_4, obj, arg0);
        const obj4 = callback(closure_2[10]);
      }
      return tmp4;
    })
  }), items1);
  obj1 = { <string:3339517956>: "<string:810680321>", <string:3335454724>: "<string:300807721>", <string:2271412228>: "<string:36311617>", style: tmp.title };
  const intl = arg1(dependencyMap[14]).intl;
  obj1.children = intl.string(arg1(dependencyMap[14]).t.Iz0kDg);
  const items2 = [callback(arg1(dependencyMap[18]).Text, obj1), , ];
  const obj2 = { variant: "text-sm/medium", style: tmp.body };
  const intl2 = arg1(dependencyMap[14]).intl;
  obj2.children = intl2.format(arg1(dependencyMap[14]).t.0rqMV5, { helpCenterURL: closure_14 });
  items2[1] = callback(arg1(dependencyMap[19]).TextWithIOSLinkWorkaround, obj2);
  const obj3 = { helpCenterURL: closure_14 };
  const tmp4 = importDefault(dependencyMap[12]);
  items2[2] = callback(View, { style: tmp.blocks, children: callback() });
  obj.children = items2;
  const items3 = [callback2(View, obj), ];
  const obj5 = { style: tmp.button, accessibilityRole: "link" };
  const obj6 = { variant: "secondary" };
  const intl3 = arg1(dependencyMap[14]).intl;
  obj6.text = intl3.string(arg1(dependencyMap[14]).t.Yl/Riu);
  obj6.onPress = arg1(dependencyMap[20]).emailSupport;
  obj5.children = callback(arg1(dependencyMap[13]).Button, obj6);
  items3[1] = callback(View, obj5);
  obj.children = items3;
  return callback2(View, obj);
};
