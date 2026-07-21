// Module ID: 15494
// Function ID: 118241
// Name: DisplayNameStylesFlywheelMobileActionSheet
// Dependencies: []
// Exports: default

// Module 15494 (DisplayNameStylesFlywheelMobileActionSheet)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ UserSettingsSections: closure_6, Fonts: closure_7 } = arg1(dependencyMap[3]));
const ContentDismissActionType = arg1(dependencyMap[4]).ContentDismissActionType;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
let closure_11 = arg1(dependencyMap[28]).createStyles(() => {
  let obj = {};
  obj = { alignItems: "center", paddingHorizontal: importDefault(dependencyMap[29]).space.PX_16 };
  obj.content = obj;
  obj = { marginVertical: importDefault(dependencyMap[29]).space.PX_24 };
  obj.imageContainer = obj;
  obj.image = {};
  obj.betaTag = { marginLeft: 0 };
  const obj1 = { "Null": "press", "Null": "toggle_existing_reaction_button", "Null": "react", fontFamily: constants.GINTO_NORD_EXTRA_BOLD, marginTop: importDefault(dependencyMap[29]).space.PX_12, marginBottom: importDefault(dependencyMap[29]).space.PX_16, paddingTop: importDefault(dependencyMap[29]).space.PX_12 };
  obj.title = obj1;
  obj.subtitle = { textAlign: "center", marginTop: importDefault(dependencyMap[29]).space.PX_12, marginBottom: importDefault(dependencyMap[29]).space.PX_32 };
  const obj2 = { textAlign: "center", marginTop: importDefault(dependencyMap[29]).space.PX_12, marginBottom: importDefault(dependencyMap[29]).space.PX_32 };
  obj.actions = { gap: importDefault(dependencyMap[29]).space.PX_12, width: "100%" };
  return obj;
});
const obj = arg1(dependencyMap[28]);
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesFlywheelMobileActionSheet.tsx");

export default function DisplayNameStylesFlywheelMobileActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const arg1 = markAsDismissed;
  const ref = React.useRef(null);
  const importDefault = ref;
  let enabled = React.useContext(arg1(dependencyMap[6]).AccessibilityPreferencesContext).reducedMotion.enabled;
  let obj = arg1(dependencyMap[7]);
  const isThemeDarkResult = obj.isThemeDark(importDefault(dependencyMap[8])());
  const tmp3 = callback3();
  let obj1 = arg1(dependencyMap[9]);
  const items = [closure_5];
  const stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = importDefault(dependencyMap[10]);
  const result = obj2.canUsePremiumProfileCustomization(stateFromStores);
  const dependencyMap = result;
  const intl = arg1(dependencyMap[11]).intl;
  const string = intl.string;
  const tmp6 = importDefault(dependencyMap[12]);
  if (result) {
    let stringResult = string(tmp6.TyUdka);
  } else {
    stringResult = string(tmp6.dluV0R);
  }
  const items1 = [result, markAsDismissed];
  const items2 = [markAsDismissed];
  const callback = React.useCallback(() => {
    markAsDismissed(result[13]).openUserSettings({ screen: result ? closure_6.PROFILE_CUSTOMIZATION : closure_6.PROFILE_CUSTOMIZATION_TRY_IT_OUT }, () => {
      callback(closure_2[14]).runAfterInteractions(() => {
        let obj = callback(closure_2[13]);
        obj = { screen: constants.DISPLAY_NAME_STYLES };
        obj.openUserSettings(obj, () => {
          callback(constants.TAKE_ACTION);
          let obj = callback(closure_2[15]);
          obj = { dismissAction: constants.INDIRECT_ACTION };
          const result = obj.UNSAFE_markDismissibleContentAsDismissed(callback(closure_2[16]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, obj);
        });
      });
    });
  }, items1);
  const items3 = [markAsDismissed];
  const callback1 = React.useCallback(() => {
    markAsDismissed(constants.USER_DISMISS);
  }, items2);
  const callback2 = React.useCallback(() => {
    markAsDismissed(constants.USER_DISMISS);
  }, items3);
  obj = { ref, onDismiss: callback2, startExpanded: true, handleDisabled: true };
  obj = { bottom: true };
  obj1 = { style: tmp3.content };
  obj2 = {
    onPress() {
      const current = ref.current;
      if (null != current) {
        current.closeActionSheet();
      }
      markAsDismissed(constants.USER_DISMISS);
    }
  };
  const items4 = [callback(arg1(dependencyMap[19]).ActionSheetHeaderBar, obj2), , , , , ];
  const obj3 = { style: tmp3.imageContainer };
  let tmp14 = enabled;
  if (enabled) {
    const obj4 = { resizeMode: "contain" };
    tmp14 = callback(arg1(dependencyMap[20]).DisplayNameStylesV2AbstractUI, obj4);
  }
  const items5 = [tmp14, ];
  if (!!enabled) {
    items5[1] = tmp18;
    obj3.children = items5;
    items4[1] = tmp12(tmp13, obj3);
    const obj5 = { style: tmp3.betaTag };
    items4[2] = callback(arg1(dependencyMap[25]).BetaTag, obj5);
    const obj6 = { variant: "display-md", style: tmp3.title };
    let str4 = "text-overlay-dark";
    let str5 = "text-overlay-dark";
    if (isThemeDarkResult) {
      str5 = "text-overlay-light";
    }
    obj6.color = str5;
    const intl2 = arg1(dependencyMap[11]).intl;
    obj6.children = intl2.string(importDefault(dependencyMap[12]).Uzms61);
    items4[3] = callback(arg1(dependencyMap[26]).Text, obj6);
    const obj7 = { variant: "text-lg/medium", style: tmp3.subtitle };
    if (isThemeDarkResult) {
      str4 = "text-overlay-light";
    }
    obj7.color = str4;
    obj7.children = stringResult;
    items4[4] = callback(arg1(dependencyMap[26]).Text, obj7);
    const obj8 = { style: tmp3.actions };
    let obj9 = { _monthsRegex: true, overflow: "/assets/.cache/intl/bW9kdWxlcy9jb2xsZWN0aWJsZXMvd2Vi", messageHasObscurableMedia: null };
    const intl3 = arg1(dependencyMap[11]).intl;
    obj9.text = intl3.string(arg1(dependencyMap[11]).t.4P5I8V);
    obj9.onPress = callback;
    const items6 = [callback(arg1(dependencyMap[27]).Button, obj9), ];
    const obj10 = { _monthsRegex: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012882297944488606, overflow: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000076436369851344, messageHasObscurableMedia: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002134690713675183 };
    const intl4 = arg1(dependencyMap[11]).intl;
    obj10.text = intl4.string(arg1(dependencyMap[11]).t.TulDPl);
    obj10.onPress = callback1;
    items6[1] = callback(arg1(dependencyMap[27]).Button, obj10);
    obj8.children = items6;
    items4[5] = callback2(View, obj8);
    obj1.children = items4;
    obj.children = tmp12(tmp13, obj1);
    obj.children = tmp11(arg1(dependencyMap[18]).SafeAreaPaddingView, obj);
    return tmp11(arg1(dependencyMap[17]).BottomSheet, obj);
  } else {
    obj9 = arg1(dependencyMap[21]);
    if (obj9.isIOS()) {
      const obj11 = {};
      const obj12 = { uri: importDefault(dependencyMap[23]) };
      obj11.source = obj12;
      obj11.style = tmp3.image;
      obj11.resizeMode = "contain";
      enabled = !enabled;
      obj11.enableAnimation = enabled;
      let tmp21Result = tmp21(importDefault(dependencyMap[22]), obj11);
      const tmp28 = importDefault(dependencyMap[22]);
    } else {
      const obj13 = { url: importDefault(dependencyMap[23]), style: tmp3.image, autoplay: true };
      tmp21Result = tmp21(arg1(dependencyMap[24]).APNGPlayer, obj13);
    }
  }
};
