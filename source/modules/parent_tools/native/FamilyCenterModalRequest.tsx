// Module ID: 11059
// Function ID: 86041
// Name: FamilyCenterModalRequestConfirm
// Dependencies: [5, 31, 27, 1849, 6770, 33, 4130, 689, 1456, 624, 6771, 11060, 6828, 11061, 7572, 7573, 1273, 1392, 1212, 2198, 4126, 11062, 11063, 11071, 4965, 4543, 4337, 5807, 7124, 44, 9985, 7607, 5586, 8284, 1881, 7536, 7538, 4347, 5087, 11072, 11073, 2]
// Exports: default

// Module 11059 (FamilyCenterModalRequestConfirm)
import closure_3 from "jsxProd";
import registerAsset from "registerAsset";
import get_ActivityIndicator from "AccountAgeTier10LargeBadge";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import items from "items";
import jsxProd from "usePrevious";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import HeaderBackImage from "HeaderBackImage";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
class FamilyCenterModalRequestConfirm {
  constructor(arg0) {
    userId = global.userId;
    linkCode = global.linkCode;
    teenIdentity = global.teenIdentity;
    tmp = jsxs();
    obj = require("useNavigation");
    navigation = obj.useNavigation();
    useNavigation = navigation;
    obj2 = require("defaultAreStatesEqual");
    items = [];
    items[0] = c7;
    stateFromStores = obj2.useStateFromStores(items, () => outer1_7.getCurrentUser());
    items1 = [];
    items1[0] = navigation;
    items2 = [];
    items2[0] = navigation;
    callback = registerAsset.useCallback(() => {
      const result = linkCode(navigation[10]).clearPendingConnection();
      navigation.push(userId(navigation[11]).FamilyCenterModalRequestSections.SENT);
    }, items1);
    callback1 = registerAsset.useCallback((arg0) => {
      const failureCodeForAPIError = userId(navigation[12]).getFailureCodeForAPIError(arg0);
      navigation.push(userId(navigation[11]).FamilyCenterModalRequestSections.ERROR, { failureCode: failureCodeForAPIError });
    }, items2);
    obj3 = require("useFamilyCenterActions");
    familyCenterActions = obj3.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
    requestLink = familyCenterActions.requestLink;
    isRequestingLink = familyCenterActions.isRequestingLink;
    items3 = [, , ];
    items3[0] = requestLink;
    items3[1] = userId;
    items3[2] = linkCode;
    callback2 = registerAsset.useCallback(() => {
      requestLink(userId, linkCode);
    }, items3);
    tmp8 = jsxs;
    obj = {};
    tmp9 = jsxs;
    obj1 = {};
    if (null != teenIdentity) {
      obj2 = {};
      obj2.style = tmp.connectionHeader;
      obj3 = {};
      obj3.style = tmp.headerIcons;
      tmp15 = userId;
      tmp16 = useNavigation;
      num = 16;
      tmp10 = jsxs;
      tmp11 = View;
      tmp12 = jsxs;
      tmp13 = View;
      tmp14 = jsx;
      obj4 = {};
      userAvatarSource = undefined;
      if (null != stateFromStores) {
        tmp18 = linkCode;
        tmp19 = useNavigation;
        num2 = 17;
        obj9 = require("getAvatarURL");
        userAvatarSource = obj9.getUserAvatarSource(stateFromStores);
      }
      obj4.source = userAvatarSource;
      tmp20 = userId;
      tmp21 = useNavigation;
      obj4.size = require("Button").AvatarSizes.LARGE;
      num3 = 18;
      intl = require("getSystemLocale").intl;
      tmp22 = linkCode;
      num4 = 19;
      obj5 = {};
      globalName = undefined;
      if (null != stateFromStores) {
        globalName = stateFromStores.globalName;
      }
      if (null == globalName) {
        username = undefined;
        if (null != stateFromStores) {
          username = stateFromStores.username;
        }
        globalName = username;
      }
      str = "";
      if (null != globalName) {
        str = globalName;
      }
      obj5.name = str;
      obj4.accessibilityLabel = intl.formatToPlainString(require("messagesProxy").kFj4h1, obj5);
      items4 = [, , ];
      items4[0] = tmp14(require("Button").Avatar, obj4);
      tmp25 = jsxs;
      tmp26 = View;
      obj6 = {};
      obj6.style = tmp.ellipseGroup;
      tmp27 = jsx;
      tmp28 = View;
      obj7 = {};
      obj7.style = tmp.ellipse;
      items5 = [, , ];
      items5[0] = jsx(View, obj7);
      tmp29 = jsx;
      tmp30 = View;
      obj8 = {};
      obj8.style = tmp.ellipse;
      items5[1] = jsx(View, obj8);
      tmp31 = jsx;
      tmp32 = View;
      obj9 = {};
      obj9.style = tmp.ellipse;
      items5[2] = jsx(View, obj9);
      obj6.children = items5;
      items4[1] = jsxs(View, obj6);
      tmp34 = userId;
      tmp35 = useNavigation;
      tmp33 = jsx;
      obj10 = {};
      tmp36 = linkCode;
      num5 = 17;
      obj16 = require("getAvatarURL");
      obj11 = {};
      ({ id: obj17.id, avatar: obj17.avatar } = teenIdentity);
      str2 = "0";
      obj11.discriminator = "0";
      obj10.source = obj16.getUserAvatarSource(obj11);
      obj10.size = require("Button").AvatarSizes.LARGE;
      intl2 = require("getSystemLocale").intl;
      obj12 = {};
      username = teenIdentity.global_name;
      if (null == username) {
        username = teenIdentity.username;
      }
      obj12.name = username;
      obj10.accessibilityLabel = intl2.formatToPlainString(require("messagesProxy").kFj4h1, obj12);
      items4[2] = tmp33(require("Button").Avatar, obj10);
      obj3.children = items4;
      items6 = [, , , ];
      items6[0] = tmp12(tmp13, obj3);
      tmp37 = jsx;
      tmp38 = userId;
      tmp39 = useNavigation;
      num6 = 20;
      obj13 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary" };
      obj13.style = tmp.title;
      intl3 = require("getSystemLocale").intl;
      tmp40 = linkCode;
      obj13.children = intl3.string(require("messagesProxy").sMmIbm);
      items6[1] = jsx(require("Text").Text, obj13);
      tmp41 = jsx;
      obj14 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary" };
      obj14.style = tmp.teenName;
      username2 = teenIdentity.global_name;
      if (null == username2) {
        username2 = teenIdentity.username;
      }
      obj14.children = username2;
      items6[2] = tmp41(require("Text").Text, obj14);
      tmp43 = userId;
      tmp44 = useNavigation;
      tmp42 = jsx;
      obj15 = { variant: "text-sm/medium", color: "text-muted" };
      obj15.style = tmp.consent;
      intl4 = require("getSystemLocale").intl;
      tmp45 = linkCode;
      obj16 = {};
      username3 = teenIdentity.global_name;
      if (null == username3) {
        username3 = teenIdentity.username;
      }
      obj16.username = username3;
      obj15.children = intl4.format(require("messagesProxy").yiUJNU, obj16);
      items6[3] = tmp42(require("Text").Text, obj15);
      obj2.children = items6;
      tmp10Result = tmp10(tmp11, obj2);
    } else {
      tmp47 = jsxs;
      tmp48 = Fragment;
      obj17 = {};
      tmp49 = jsx;
      tmp50 = Image;
      obj18 = {};
      obj18.style = tmp.art;
      tmp51 = linkCode;
      tmp52 = useNavigation;
      num7 = 21;
      obj18.source = require("registerAsset");
      items7 = [, ];
      items7[0] = jsx(Image, obj18);
      tmp53 = jsx;
      tmp54 = userId;
      num8 = 20;
      obj19 = {};
      obj19.style = tmp.headerText;
      str3 = "text-lg/bold";
      obj19.variant = "text-lg/bold";
      num9 = 18;
      intl7 = require("getSystemLocale").intl;
      num10 = 19;
      obj19.children = intl7.string(require("messagesProxy").GH11eI);
      items7[1] = jsx(require("Text").Text, obj19);
      obj17.children = items7;
      tmp10Result = jsxs(Fragment, obj17);
    }
    items8 = [, ];
    items8[0] = tmp10Result;
    items8[1] = jsx(require("RowGroup"), {});
    obj1.children = items8;
    items9 = [, ];
    items9[0] = tmp9(require("ModalContent").ModalContent, obj1);
    obj20 = {};
    obj21 = {};
    obj22 = { variant: "primary", size: "lg" };
    obj22.disabled = isRequestingLink;
    obj22.loading = isRequestingLink;
    intl5 = require("getSystemLocale").intl;
    obj22.text = intl5.string(require("messagesProxy").ISg34l);
    obj22.onPress = callback2;
    items10 = [, ];
    items10[0] = jsx(require("Button").Button, obj22);
    obj23 = { variant: "secondary", size: "lg" };
    intl6 = require("getSystemLocale").intl;
    obj23.text = intl6.string(require("getSystemLocale").t["ETE/oC"]);
    obj23.onPress = require("module_4337").pop;
    items10[1] = jsx(require("Button").Button, obj23);
    obj21.children = items10;
    obj20.children = jsxs(require("ButtonGroup").ButtonGroup, obj21);
    items9[1] = jsx(require("ModalFooter").ModalFooter, obj20);
    obj.children = items9;
    return tmp8(require("ModalScreen").ModalScreen, obj);
  }
}
class FamilyCenterModalRequestSuccess {
  constructor() {
    tmp = jsxs();
    obj = require("defaultAreStatesEqual");
    items = [];
    items[0] = c7;
    stateFromStores = obj.useStateFromStores(items, () => outer1_7.getCurrentUser());
    callback = registerAsset.useCallback(() => {
      let arr = outer1_1(outer1_2[26]);
      arr = arr.pop();
    }, []);
    if (null === stateFromStores) {
      tmp4 = closure_1;
      tmp5 = closure_2;
      num = 26;
      arr2 = require("module_4337");
      arr = arr2.pop();
    }
    tmp7 = jsxs;
    obj = {};
    tmp8 = jsx;
    obj1 = {};
    obj2 = { style: tmp.content };
    obj3 = { style: tmp.textWrapper };
    obj4 = { style: tmp.illustration };
    tmp9 = jsx;
    tmp10 = View;
    tmp11 = jsxs;
    tmp12 = View;
    obj4.children = jsx(require("AccountAgeTier10LargeBadge").EnvelopeSpotIllustration, { scale: 0.7 });
    items1 = [, , ];
    items1[0] = jsx(View, obj4);
    obj5 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary" };
    obj5.style = tmp.header;
    intl = require("getSystemLocale").intl;
    obj5.children = intl.string(require("messagesProxy").EpwfZl);
    items1[1] = jsx(require("Text").Text, obj5);
    tmp13 = jsx;
    obj6 = { variant: "text-sm/medium", color: "text-muted" };
    obj6.style = tmp.description;
    intl2 = require("getSystemLocale").intl;
    obj7 = {};
    email = undefined;
    if (null != stateFromStores) {
      email = stateFromStores.email;
    }
    obj7.email = email;
    obj6.children = intl2.format(require("messagesProxy").dVtWId, obj7);
    items1[2] = tmp13(require("Text").Text, obj6);
    obj3.children = items1;
    obj2.children = tmp11(tmp12, obj3);
    obj1.children = tmp9(tmp10, obj2);
    items2 = [, ];
    items2[0] = tmp8(require("ModalContent").ModalContent, obj1);
    obj8 = {};
    obj9 = { size: "lg" };
    intl3 = require("getSystemLocale").intl;
    obj9.text = intl3.string(require("getSystemLocale").t.cpT0Cq);
    obj9.onPress = callback;
    obj8.children = jsx(require("Button").Button, obj9);
    items2[1] = jsx(require("ModalFooter").ModalFooter, obj8);
    obj.children = items2;
    return tmp7(require("ModalScreen").ModalScreen, obj);
  }
}
class FamilyCenterModalRequestError {
  constructor(arg0) {
    tmp = jsxs();
    obj = require("defaultAreStatesEqual");
    items = [];
    items[0] = c7;
    stateFromStores = obj.useStateFromStores(items, () => outer1_7.getCurrentUser());
    tmp3 = require("useIsInAdultAgeGroup")();
    obj2 = require("Button");
    boxShadowStyle = obj2.generateBoxShadowStyle(require("Button").FOUR_DP_ELEVATION_SHADOW_PARAMS);
    callback = registerAsset.useCallback(() => {
      let arr = outer1_1(outer1_2[26]);
      arr = arr.pop();
    }, []);
    tmp6 = require("invariant")(null != stateFromStores, "User must be logged in to see this modal.");
    obj3 = Image[global.failureCode];
    obj = {};
    tmp7 = undefined;
    if (null != tmp3) {
      tmp7 = tmp3;
    }
    obj.isAdult = tmp7;
    email = stateFromStores.email;
    tmp8 = undefined;
    if (null != email) {
      tmp8 = email;
    }
    obj.email = tmp8;
    headerResult = obj3.header(obj);
    icon = obj3.icon;
    descriptionResult = obj3.description(obj);
    tmp11 = jsxs;
    obj1 = {};
    tmp12 = jsxs;
    obj2 = {};
    obj3 = { style: items1 };
    items1 = [, ];
    items1[0] = tmp.ring;
    items1[1] = boxShadowStyle;
    obj4 = { style: items2 };
    items2 = [, ];
    items2[0] = tmp.iconContainer;
    items2[1] = icon === FamilyCenterIconType.CHECK ? tmp.positive : tmp.negative;
    tmp13 = jsx;
    tmp14 = View;
    tmp15 = jsx;
    tmp16 = View;
    if (icon === FamilyCenterIconType.CHECK) {
      tmp22 = jsx;
      tmp23 = closure_0;
      tmp24 = closure_2;
      obj5 = {};
      tmp25 = closure_1;
      num2 = 30;
      obj5.source = require("registerAsset");
      str2 = "#FFF";
      obj5.color = "#FFF";
      tmp21 = jsx(require("Button").Icon, obj5);
    } else {
      tmp17 = jsx;
      tmp18 = closure_0;
      tmp19 = closure_2;
      obj6 = {};
      tmp20 = closure_1;
      num = 31;
      obj6.source = require("registerAsset");
      str = "#FFF";
      obj6.color = "#FFF";
      tmp21 = jsx(require("Button").Icon, obj6);
    }
    obj4.children = tmp21;
    obj3.children = tmp15(tmp16, obj4);
    items3 = [, , ];
    items3[0] = tmp13(tmp14, obj3);
    obj7 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary" };
    obj7.style = tmp.header;
    obj7.children = headerResult;
    items3[1] = jsx(require("Text").Text, obj7);
    obj8 = { variant: "text-sm/medium", color: "text-muted" };
    obj8.style = tmp.description;
    obj8.children = descriptionResult;
    items3[2] = jsx(require("Text").Text, obj8);
    obj2.children = items3;
    items4 = [, ];
    items4[0] = tmp12(require("ModalContent").ModalContent, obj2);
    obj9 = {};
    obj10 = {};
    intl = require("getSystemLocale").intl;
    obj10.text = intl.string(require("getSystemLocale").t.cpT0Cq);
    obj10.onPress = callback;
    obj9.children = jsx(require("Button").Button, obj10);
    items4[1] = jsx(require("ModalFooter").ModalFooter, obj9);
    obj1.children = items4;
    return tmp11(require("ModalScreen").ModalScreen, obj1);
  }
}
function FamilyCenterPrereqLoading(arg0) {
  let importDefault;
  let require;
  ({ userId: require, linkCode: importDefault } = arg0);
  let obj = require(1456) /* useNavigation */;
  const dependencyMap = obj.useNavigation();
  const effect = React.useEffect(() => {
    function _runPrereq() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = outer2_3(tmp);
      return obj(...arguments);
    }
    let c0 = false;
    (function runPrereq() {
      return _runPrereq(...arguments);
    })();
    return () => {
      let c0 = true;
    };
  }, []);
  obj = {};
  obj = { style: callback5().container, children: callback(require(5586) /* ActivityIndicator */.ActivityIndicator, {}) };
  obj.children = callback(closure_6, obj);
  return callback(require(7572) /* ModalScreen */.ModalScreen, obj);
}
function FamilyCenterPrereqScreen(primaryButton) {
  let description;
  let title;
  primaryButton = primaryButton.primaryButton;
  ({ title, description } = primaryButton);
  const tmp = callback6();
  let obj = {};
  obj = { style: tmp.content };
  obj = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: title };
  const items = [callback(require(4126) /* Text */.Text, obj), ];
  const obj1 = { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: description };
  items[1] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items;
  const items1 = [callback2(closure_6, obj), ];
  const obj2 = { children: callback(require(4543) /* Button */.Button, { text: primaryButton.text, onPress: primaryButton.onPress }) };
  items1[1] = callback(require(11071) /* ModalFooter */.ModalFooter, obj2);
  obj.children = items1;
  return callback2(require(7572) /* ModalScreen */.ModalScreen, obj);
}
function useNavigateToVerifyingOnPending() {
  navigation = navigation(1456).useNavigation();
  const obj = navigation(1456);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = navigation(624).useStateFromStores(items, () => {
    const currentUser = outer1_7.getCurrentUser();
    let prop;
    if (null != currentUser) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop;
  });
  const tmp3 = stateFromStores(8284)(stateFromStores);
  const dependencyMap = tmp3;
  const items1 = [stateFromStores, tmp3, navigation];
  const effect = React.useEffect(() => {
    let tmp = null != tmp3;
    if (tmp) {
      tmp = tmp3 !== stateFromStores;
    }
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      tmp = stateFromStores !== navigation(tmp3[34]).AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
    }
    if (tmp) {
      const replaced = navigation.replace(navigation(tmp3[11]).FamilyCenterModalRequestSections.VERIFYING);
    }
  }, items1);
}
function FamilyCenterConfirmAgeScreen(teenIdentity) {
  teenIdentity = teenIdentity.teenIdentity;
  const tmp = callback7();
  useNavigateToVerifyingOnPending();
  const callback = React.useCallback(() => {
    let obj = outer1_1(outer1_2[35]);
    obj = { entryPoint: outer1_0(outer1_2[36]).AgeVerificationModalEntryPoint.FAMILY_CENTER_CONNECTION };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  }, []);
  let obj = {};
  obj = { style: tmp.content };
  obj = { style: tmp.art, children: callback(require(5807) /* AccountAgeTier10LargeBadge */.FamilyShieldSpotIllustration, {}) };
  const items = [callback(closure_6, obj), , ];
  const obj1 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title };
  const intl = require(1212) /* getSystemLocale */.intl;
  const obj2 = {};
  let global_name;
  if (null != teenIdentity) {
    global_name = teenIdentity.global_name;
  }
  if (null == global_name) {
    let username;
    if (null != teenIdentity) {
      username = teenIdentity.username;
    }
    global_name = username;
  }
  let str = "";
  if (null != global_name) {
    str = global_name;
  }
  obj2.username = str;
  obj1.children = intl.formatToPlainString(importDefault(2198).pQQMJ7, obj2);
  items[1] = callback(require(4126) /* Text */.Text, obj1);
  const obj3 = { variant: "text-sm/medium", color: "text-muted", style: tmp.description };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj3.children = intl2.format(importDefault(2198)["0o3yg8"], { link: "https://support.discord.com/hc/articles/14155060633623" });
  items[2] = callback(require(4126) /* Text */.Text, obj3);
  obj.children = items;
  const items1 = [callback2(closure_6, obj), ];
  const obj4 = {};
  const obj5 = {};
  const obj6 = { variant: "primary" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj6.text = intl3.string(importDefault(2198)["3oUE4o"]);
  obj6.onPress = callback;
  const items2 = [callback(require(4543) /* Button */.Button, obj6), ];
  const obj7 = { variant: "tertiary" };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj7.text = intl4.string(require(1212) /* getSystemLocale */.t.oEAioF);
  obj7.onPress = function onPress() {
    return outer1_1(outer1_2[26]).pop();
  };
  items2[1] = callback(require(4543) /* Button */.Button, obj7);
  obj5.children = items2;
  obj4.children = callback2(require(4965) /* ButtonGroup */.ButtonGroup, obj5);
  items1[1] = callback(require(11071) /* ModalFooter */.ModalFooter, obj4);
  obj.children = items1;
  return callback2(require(7572) /* ModalScreen */.ModalScreen, obj);
}
function FamilyCenterVerifyingScreen() {
  let obj = navigation(stateFromStores[8]);
  navigation = obj.useNavigation();
  const tmp = callback5();
  const isAgeVerified = navigation(stateFromStores[37]).useIsAgeVerified();
  const obj2 = navigation(stateFromStores[37]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = navigation(stateFromStores[9]).useStateFromStores(items, () => {
    const currentUser = outer1_7.getCurrentUser();
    let prop;
    if (null != currentUser) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop;
  });
  let closure_3 = React.useRef(false);
  const items1 = [isAgeVerified, stateFromStores, navigation];
  const effect = React.useEffect(() => {
    if (isAgeVerified) {
      if (!ref.current) {
        ref.current = true;
        const replaced = navigation.replace(navigation(stateFromStores[11]).FamilyCenterModalRequestSections.PREREQ_LOADING);
      }
    } else if (stateFromStores === navigation(stateFromStores[34]).AgeVerificationStatusUkAndAusOnly.UNVERIFIED) {
      const obj = { failureCode: outer1_10.GENERIC_ERROR };
      const replaced1 = navigation.replace(navigation(stateFromStores[11]).FamilyCenterModalRequestSections.ERROR, obj);
    }
  }, items1);
  const items2 = [navigation];
  const effect1 = React.useEffect(() => {
    const timeout = setTimeout(() => {
      const replaced = closure_0.replace(navigation(stateFromStores[11]).FamilyCenterModalRequestSections.ERROR, { failureCode: outer2_10.GENERIC_ERROR });
    }, outer1_8);
    return () => clearTimeout(closure_0);
  }, items2);
  obj = {};
  obj = { style: tmp.container, children: callback(navigation(stateFromStores[32]).ActivityIndicator, {}) };
  obj.children = callback(closure_6, obj);
  return callback(navigation(stateFromStores[14]).ModalScreen, obj);
}
function FamilyCenterPrereqInvalidCodeScreen() {
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(importDefault(2198).ewSb6o);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl2.string(importDefault(2198).jcUN2F);
  obj = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.text = intl3.string(require(1212) /* getSystemLocale */.t.WAI6xu);
  obj.onPress = importDefault(4337).pop;
  obj.primaryButton = obj;
  return callback(FamilyCenterPrereqScreen, obj);
}
function FamilyCenterPrereqMustBeAdultScreen() {
  useNavigateToVerifyingOnPending();
  let obj = {};
  const callback = React.useCallback(() => {
    let obj = outer1_1(outer1_2[35]);
    obj = { entryPoint: outer1_0(outer1_2[36]).AgeVerificationModalEntryPoint.FAMILY_CENTER_CONNECTION };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  }, []);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(importDefault(2198).BQFHXW);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl2.format(importDefault(2198).WDjaKn, { link: { onClick: callback } });
  obj = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.text = intl3.string(require(1212) /* getSystemLocale */.t["NX+WJN"]);
  obj.onPress = importDefault(4337).pop;
  obj.primaryButton = obj;
  return callback(FamilyCenterPrereqScreen, obj);
}
({ Image: closure_5, View: closure_6 } = get_ActivityIndicator);
({ FAMILY_CENTER_AGE_VERIFICATION_RESUME_TIMEOUT: closure_8, FAMILY_CENTER_LINK_REQUEST_ERROR_EXPERIENCES: closure_9, FamilyCenterFailureCode: closure_10, FamilyCenterIconType: closure_11 } = items);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.headerText = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.art = { width: 165, height: 119 };
_createForOfIteratorHelperLoose.connectionHeader = { alignItems: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "center", alignSelf: "center", padding: require("_createForOfIteratorHelperLoose").space.PX_8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.headerIcons = obj2;
let obj1 = { alignItems: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.ellipseGroup = { flexDirection: "row", marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
let obj4 = { width: 4, height: 4, marginHorizontal: 2, backgroundColor: require("_createForOfIteratorHelperLoose").colors.ICON_MUTED, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.ellipse = obj4;
_createForOfIteratorHelperLoose.title = { textAlign: "center" };
let obj3 = { flexDirection: "row", marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.teenName = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_4, textAlign: "center" };
let obj5 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_4, textAlign: "center" };
_createForOfIteratorHelperLoose.consent = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, textAlign: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj7 = {};
let obj8 = { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj7.content = obj8;
obj7.textWrapper = { alignItems: "center" };
_createForOfIteratorHelperLoose = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj7.header = _createForOfIteratorHelperLoose;
obj7.description = { textAlign: "center" };
let obj10 = { position: "absolute", bottom: "100%", left: 0, right: 0, alignItems: "center", paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
obj7.illustration = obj10;
let closure_16 = _createForOfIteratorHelperLoose.createStyles(obj7);
let obj11 = { header: { marginBottom: 8, textAlign: "center" }, description: { textAlign: "center" } };
let obj12 = { display: "flex", justifyContent: "center", alignItems: "center", height: 64, width: 64, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, marginBottom: 24 };
obj11.ring = obj12;
let obj13 = { display: "flex", justifyContent: "center", alignItems: "center", height: 48, width: 48, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.STATUS_POSITIVE };
obj11.iconContainer = obj13;
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.STATUS_POSITIVE };
obj11.positive = _createForOfIteratorHelperLoose;
let obj6 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, textAlign: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj11.negative = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_CRITICAL };
let closure_17 = _createForOfIteratorHelperLoose.createStyles(obj11);
let closure_18 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
let obj16 = { content: { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: 32 } };
let obj15 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_CRITICAL };
obj16.title = { textAlign: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj16.description = { textAlign: "center" };
let closure_19 = _createForOfIteratorHelperLoose.createStyles(obj16);
let obj18 = { content: { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: 32 } };
let obj17 = { textAlign: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj18.art = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose = { textAlign: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj18.title = _createForOfIteratorHelperLoose;
obj18.description = { textAlign: "center" };
let closure_20 = _createForOfIteratorHelperLoose.createStyles(obj18);
_createForOfIteratorHelperLoose = { headerShown: true };
_createForOfIteratorHelperLoose.headerLeft = HeaderBackImage.getHeaderCloseButton(require("module_4337").pop);
_createForOfIteratorHelperLoose.headerTitle = function headerTitle() {
  return null;
};
let obj19 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalRequest.tsx");

export default function FamilyCenterRequestModal(userId) {
  userId = userId.userId;
  const linkCode = userId.linkCode;
  const FamilyCenterConnectionPrereqExperiment = userId(11072).FamilyCenterConnectionPrereqExperiment;
  const items = [linkCode, userId];
  const memo = React.useMemo(() => (function getScreens(userId, linkCode) {
    let closure_0 = userId;
    let closure_1 = linkCode;
    let obj = {};
    obj = {};
    const merged = Object.assign(outer2_21);
    obj["render"] = function render() {
      return outer3_12(outer3_25, { userId: closure_0, linkCode: closure_1 });
    };
    obj[userId(outer2_2[11]).FamilyCenterModalRequestSections.PREREQ_LOADING] = obj;
    obj = {};
    const merged1 = Object.assign(outer2_21);
    obj["render"] = function render(teenIdentity) {
      const obj = {};
      teenIdentity = undefined;
      if (null != teenIdentity) {
        teenIdentity = teenIdentity.teenIdentity;
      }
      obj.teenIdentity = teenIdentity;
      return outer3_12(outer3_28, obj);
    };
    obj[userId(outer2_2[11]).FamilyCenterModalRequestSections.CONFIRM_AGE] = obj;
    const obj1 = {};
    const merged2 = Object.assign(outer2_21);
    obj1["render"] = function render() {
      return outer3_12(outer3_29, {});
    };
    obj[userId(outer2_2[11]).FamilyCenterModalRequestSections.VERIFYING] = obj1;
    const obj2 = {};
    let obj5 = userId(outer2_2[38]);
    obj2.headerLeft = obj5.getHeaderCloseButton(linkCode(outer2_2[26]).pop);
    obj2.headerShown = true;
    obj2.headerTitle = function headerTitle() {
      return null;
    };
    obj2.render = function render(teenIdentity) {
      const obj = { userId: closure_0, linkCode: closure_1 };
      teenIdentity = undefined;
      if (null != teenIdentity) {
        teenIdentity = teenIdentity.teenIdentity;
      }
      obj.teenIdentity = teenIdentity;
      return outer3_12(outer3_22, obj);
    };
    obj[userId(outer2_2[11]).FamilyCenterModalRequestSections.REQUEST] = obj2;
    const obj3 = {};
    const merged3 = Object.assign(outer2_21);
    obj3["render"] = function render() {
      return outer3_12(outer3_30, {});
    };
    obj[userId(outer2_2[11]).FamilyCenterModalRequestSections.INVALID_CODE] = obj3;
    const obj4 = {};
    const merged4 = Object.assign(outer2_21);
    obj4["render"] = function render() {
      return outer3_12(outer3_31, {});
    };
    obj[userId(outer2_2[11]).FamilyCenterModalRequestSections.MUST_BE_ADULT] = obj4;
    obj5 = {
      headerShown: true,
      headerLeft: userId(outer2_2[38]).getHeaderCloseButton(linkCode(outer2_2[26]).pop),
      headerTitle() {
        return null;
      },
      render() {
        return outer3_12(outer3_23, {});
      }
    };
    obj[userId(outer2_2[11]).FamilyCenterModalRequestSections.SENT] = obj5;
    const obj6 = { headerShown: true };
    const obj10 = userId(outer2_2[38]);
    obj6.headerLeft = userId(outer2_2[38]).getHeaderCloseButton(linkCode(outer2_2[26]).pop);
    obj6.headerTitle = function headerTitle() {
      return null;
    };
    obj6.render = function render(failureCode) {
      return outer3_12(outer3_24, { failureCode: failureCode.failureCode });
    };
    obj[userId(outer2_2[11]).FamilyCenterModalRequestSections.ERROR] = obj6;
    const obj7 = { fullscreen: true };
    const obj12 = userId(outer2_2[38]);
    obj7.headerLeft = userId(outer2_2[38]).getHeaderCloseButton(linkCode(outer2_2[26]).pop);
    obj7.render = function render() {
      return outer3_12(outer3_24, { failureCode: outer3_10.INELIGIBLE_FOR_FAMILY_CENTER });
    };
    obj[userId(outer2_2[11]).FamilyCenterModalRequestSections.TEEN_SCAN] = obj7;
    return obj;
  })(userId, linkCode), items);
  const FamilyCenterModalRequestSections = userId(11060).FamilyCenterModalRequestSections;
  if (FamilyCenterConnectionPrereqExperiment.useConfig({ location: "FamilyCenterRequestModal" }).enabled) {
    let PREREQ_LOADING = FamilyCenterModalRequestSections.PREREQ_LOADING;
  } else {
    PREREQ_LOADING = tmp ? FamilyCenterModalRequestSections.REQUEST : FamilyCenterModalRequestSections.TEEN_SCAN;
  }
  let obj = { initialRouteName: PREREQ_LOADING, screens: memo };
  const intl = userId(1212).intl;
  obj.headerBackTitle = intl.string(userId(1212).t["13/7kX"]);
  return callback(userId(11073).Modal, obj);
};
export { FamilyCenterModalRequestConfirm };
export { FamilyCenterModalRequestSuccess };
export { FamilyCenterModalRequestError };
