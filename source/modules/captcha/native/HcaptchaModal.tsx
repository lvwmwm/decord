// Module ID: 15841
// Function ID: 121103
// Name: HcaptchaModal
// Dependencies: []

// Module 15841 (HcaptchaModal)
class HcaptchaModal {
  constructor(arg0) {
    onMessage = global.onMessage;
    arg1 = onMessage;
    tmp = closure_4(global, closure_3);
    tmp2 = closure_13();
    obj = arg1(dependencyMap[8]);
    items = [];
    items[0] = closure_10;
    stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
    obj2 = arg1(dependencyMap[9]);
    navigation = obj2.useNavigation();
    routes = navigation.getState().routes;
    tmp4 = routes.length > 0;
    if (tmp4) {
      str = "auth";
      tmp4 = "auth" === routes[0].name;
    }
    if (!tmp4) {
      tmp5 = null;
      prop = undefined;
      if (null != stateFromStores) {
        prop = stateFromStores.ageVerificationStatus;
      }
      tmp7 = arg1;
      tmp8 = dependencyMap;
      num = 10;
      tmp4 = prop === arg1(dependencyMap[10]).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
    }
    tmp9 = importDefault(dependencyMap[11])();
    intl = arg1(dependencyMap[12]).intl;
    items1 = [];
    items1[0] = onMessage;
    stringResult = intl.string(arg1(dependencyMap[12]).t.wsoPhr);
    callback = importAll.useCallback(() => {
      if (null != onMessage) {
        let obj = {};
        obj = { data: onMessage(closure_2[13]).CaptchaError.CANCEL };
        obj.nativeEvent = obj;
        onMessage(obj);
      }
    }, items1);
    importDefault = callback;
    tmp12 = importDefault(dependencyMap[14])(() => {
      callback();
      return true;
    });
    obj = { style: tmp2.container };
    tmp16Result = !tmp4;
    tmp13 = jsxs;
    tmp14 = View;
    if (!tmp4) {
      tmp17 = arg1;
      tmp18 = dependencyMap;
      num2 = 15;
      tmp16 = jsxs;
      obj1 = {};
      tmp19 = importDefault;
      num3 = 16;
      obj1.spacing = importDefault(dependencyMap[16]).space.PX_16;
      str2 = "center";
      obj1.align = "center";
      tmp20 = jsx;
      num4 = 17;
      obj2 = {};
      obj2.style = tmp2.title;
      obj2.children = stringResult;
      items2 = [, ];
      items2[0] = jsx(arg1(dependencyMap[17]).Text, obj2);
      obj3 = {};
      str3 = "small";
      obj3.size = "small";
      num5 = 18;
      tmp21 = jsx;
      tmp22 = ActivityIndicator;
      obj8 = arg1(dependencyMap[18]);
      WHITE = undefined;
      if (obj8.isAndroid()) {
        tmp24 = importDefault;
        tmp25 = dependencyMap;
        WHITE = importDefault(dependencyMap[16]).unsafe_rawColors.WHITE;
      }
      obj3.color = WHITE;
      items2[1] = tmp21(tmp22, obj3);
      obj1.children = items2;
      tmp16Result = tmp16(arg1(dependencyMap[15]).Stack, obj1);
    }
    items3 = [, , ];
    items3[0] = tmp16Result;
    obj4 = { style: StyleSheet.absoluteFillObject };
    obj5 = {};
    tmp26 = importDefault(dependencyMap[19]);
    merged = Object.assign(tmp);
    obj5["languageCode"] = closure_9.locale;
    obj5["onMessage"] = onMessage;
    obj4.children = jsx(tmp26, obj5);
    items3[1] = jsx(View, obj4);
    obj6 = {};
    items4 = [, ];
    items4[0] = tmp2.closeButtonContainer;
    obj7 = { paddingTop: top + importDefault(dependencyMap[16]).space.PX_8, paddingLeft: left + importDefault(dependencyMap[16]).space.PX_16 };
    ({ top, left } = tmp9);
    items4[1] = obj7;
    obj6.style = items4;
    obj6.pointerEvents = "box-none";
    obj8 = { accessibilityRole: "button" };
    intl2 = arg1(dependencyMap[12]).intl;
    obj8.accessibilityLabel = intl2.string(arg1(dependencyMap[12]).t.cpT0Cq);
    obj8.onPress = callback;
    obj8.style = tmp2.closeButtonHitArea;
    obj9 = {};
    obj9.color = importDefault(dependencyMap[16]).colors.INTERACTIVE_ICON_DEFAULT;
    obj8.children = jsx(arg1(dependencyMap[21]).XLargeIcon, obj9);
    obj6.children = jsx(arg1(dependencyMap[20]).PressableOpacity, obj8);
    items3[2] = jsx(View, obj6);
    obj.children = items3;
    return tmp13(tmp14, obj);
  }
}
let closure_3 = [null, null];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
({ ActivityIndicator: closure_6, View: closure_7, StyleSheet: closure_8 } = arg1(dependencyMap[2]));
let closure_9 = importDefault(dependencyMap[3]);
let closure_10 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
let closure_13 = arg1(dependencyMap[7]).createStyles({ container: {}, title: { textAlign: "center" }, closeButtonContainer: {}, closeButtonHitArea: {} });
HcaptchaModal.modalConfig = { animation: arg1(dependencyMap[5]).ModalAnimation.FADE };
const obj = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/captcha/native/HcaptchaModal.tsx");

export default HcaptchaModal;
