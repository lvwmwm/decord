// Module ID: 11049
// Function ID: 85991
// Name: FamilyCenterModalRequestConfirm
// Dependencies: []
// Exports: default

// Module 11049 (FamilyCenterModalRequestConfirm)
class FamilyCenterModalRequestConfirm {
  constructor(arg0) {
    userId = global.userId;
    arg1 = userId;
    linkCode = global.linkCode;
    importDefault = linkCode;
    teenIdentity = global.teenIdentity;
    tmp = jsxs();
    obj = arg1(dependencyMap[8]);
    navigation = obj.useNavigation();
    dependencyMap = navigation;
    obj2 = arg1(dependencyMap[9]);
    items = [];
    items[0] = closure_7;
    stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
    items1 = [];
    items1[0] = navigation;
    items2 = [];
    items2[0] = navigation;
    callback = importAll.useCallback(() => {
      const result = linkCode(navigation[10]).clearPendingConnection();
      navigation.push(userId(navigation[11]).FamilyCenterModalRequestSections.SENT);
    }, items1);
    callback1 = importAll.useCallback((arg0) => {
      const failureCodeForAPIError = userId(navigation[12]).getFailureCodeForAPIError(arg0);
      navigation.push(userId(navigation[11]).FamilyCenterModalRequestSections.ERROR, { failureCode: failureCodeForAPIError });
    }, items2);
    obj3 = arg1(dependencyMap[13]);
    familyCenterActions = obj3.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
    requestLink = familyCenterActions.requestLink;
    isRequestingLink = familyCenterActions.isRequestingLink;
    items3 = [, , ];
    items3[0] = requestLink;
    items3[1] = userId;
    items3[2] = linkCode;
    callback2 = importAll.useCallback(() => {
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
      tmp15 = arg1;
      tmp16 = dependencyMap;
      num = 16;
      tmp10 = jsxs;
      tmp11 = View;
      tmp12 = jsxs;
      tmp13 = View;
      tmp14 = jsx;
      obj4 = {};
      userAvatarSource = undefined;
      if (null != stateFromStores) {
        tmp18 = importDefault;
        tmp19 = dependencyMap;
        num2 = 17;
        obj9 = importDefault(dependencyMap[17]);
        userAvatarSource = obj9.getUserAvatarSource(stateFromStores);
      }
      obj4.source = userAvatarSource;
      tmp20 = arg1;
      tmp21 = dependencyMap;
      obj4.size = arg1(dependencyMap[16]).AvatarSizes.LARGE;
      num3 = 18;
      intl = arg1(dependencyMap[18]).intl;
      tmp22 = importDefault;
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
      obj4.accessibilityLabel = intl.formatToPlainString(importDefault(dependencyMap[19]).kFj4h1, obj5);
      items4 = [, , ];
      items4[0] = tmp14(arg1(dependencyMap[16]).Avatar, obj4);
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
      tmp34 = arg1;
      tmp35 = dependencyMap;
      tmp33 = jsx;
      obj10 = {};
      tmp36 = importDefault;
      num5 = 17;
      obj16 = importDefault(dependencyMap[17]);
      obj11 = {};
      ({ id: obj17.id, avatar: obj17.avatar } = teenIdentity);
      str2 = "0";
      obj11.discriminator = "0";
      obj10.source = obj16.getUserAvatarSource(obj11);
      obj10.size = arg1(dependencyMap[16]).AvatarSizes.LARGE;
      intl2 = arg1(dependencyMap[18]).intl;
      obj12 = {};
      username = teenIdentity.global_name;
      if (null == username) {
        username = teenIdentity.username;
      }
      obj12.name = username;
      obj10.accessibilityLabel = intl2.formatToPlainString(importDefault(dependencyMap[19]).kFj4h1, obj12);
      items4[2] = tmp33(arg1(dependencyMap[16]).Avatar, obj10);
      obj3.children = items4;
      items6 = [, , , ];
      items6[0] = tmp12(tmp13, obj3);
      tmp37 = jsx;
      tmp38 = arg1;
      tmp39 = dependencyMap;
      num6 = 20;
      obj13 = { cachedAt: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011454504407100313, edpbxy: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004026493667951817 };
      obj13.style = tmp.title;
      intl3 = arg1(dependencyMap[18]).intl;
      tmp40 = importDefault;
      obj13.children = intl3.string(importDefault(dependencyMap[19]).sMmIbm);
      items6[1] = jsx(arg1(dependencyMap[20]).Text, obj13);
      tmp41 = jsx;
      obj14 = { cachedAt: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011454504407100313, edpbxy: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004026493667951817 };
      obj14.style = tmp.teenName;
      username2 = teenIdentity.global_name;
      if (null == username2) {
        username2 = teenIdentity.username;
      }
      obj14.children = username2;
      items6[2] = tmp41(arg1(dependencyMap[20]).Text, obj14);
      tmp43 = arg1;
      tmp44 = dependencyMap;
      tmp42 = jsx;
      obj15 = { cachedAt: "y", edpbxy: "isArray" };
      obj15.style = tmp.consent;
      intl4 = arg1(dependencyMap[18]).intl;
      tmp45 = importDefault;
      obj16 = {};
      username3 = teenIdentity.global_name;
      if (null == username3) {
        username3 = teenIdentity.username;
      }
      obj16.username = username3;
      obj15.children = intl4.format(importDefault(dependencyMap[19]).yiUJNU, obj16);
      items6[3] = tmp42(arg1(dependencyMap[20]).Text, obj15);
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
      tmp51 = importDefault;
      tmp52 = dependencyMap;
      num7 = 21;
      obj18.source = importDefault(dependencyMap[21]);
      items7 = [, ];
      items7[0] = jsx(Image, obj18);
      tmp53 = jsx;
      tmp54 = arg1;
      num8 = 20;
      obj19 = {};
      obj19.style = tmp.headerText;
      str3 = "text-lg/bold";
      obj19.variant = "text-lg/bold";
      num9 = 18;
      intl7 = arg1(dependencyMap[18]).intl;
      num10 = 19;
      obj19.children = intl7.string(importDefault(dependencyMap[19]).GH11eI);
      items7[1] = jsx(arg1(dependencyMap[20]).Text, obj19);
      obj17.children = items7;
      tmp10Result = jsxs(Fragment, obj17);
    }
    items8 = [, ];
    items8[0] = tmp10Result;
    items8[1] = jsx(importDefault(dependencyMap[22]), {});
    obj1.children = items8;
    items9 = [, ];
    items9[0] = tmp9(arg1(dependencyMap[15]).ModalContent, obj1);
    obj20 = {};
    obj21 = {};
    obj22 = { disabled: isRequestingLink, loading: isRequestingLink };
    intl5 = arg1(dependencyMap[18]).intl;
    obj22.text = intl5.string(importDefault(dependencyMap[19]).ISg34l);
    obj22.onPress = callback2;
    items10 = [, ];
    items10[0] = jsx(arg1(dependencyMap[25]).Button, obj22);
    obj23 = {};
    intl6 = arg1(dependencyMap[18]).intl;
    obj23.text = intl6.string(arg1(dependencyMap[18]).t.ETE/oC);
    obj23.onPress = importDefault(dependencyMap[26]).pop;
    items10[1] = jsx(arg1(dependencyMap[25]).Button, obj23);
    obj21.children = items10;
    obj20.children = jsxs(arg1(dependencyMap[24]).ButtonGroup, obj21);
    items9[1] = jsx(arg1(dependencyMap[23]).ModalFooter, obj20);
    obj.children = items9;
    return tmp8(arg1(dependencyMap[14]).ModalScreen, obj);
  }
}
class FamilyCenterModalRequestSuccess {
  constructor() {
    tmp = jsxs();
    obj = arg1(dependencyMap[9]);
    items = [];
    items[0] = closure_7;
    stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
    callback = importAll.useCallback(() => {
      let arr = callback(closure_2[26]);
      arr = arr.pop();
    }, []);
    if (null === stateFromStores) {
      tmp4 = importDefault;
      tmp5 = dependencyMap;
      num = 26;
      arr2 = importDefault(dependencyMap[26]);
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
    obj4.children = jsx(arg1(dependencyMap[27]).EnvelopeSpotIllustration, { scale: 0.7 });
    items1 = [, , ];
    items1[0] = jsx(View, obj4);
    obj5 = { cachedAt: true, edpbxy: true };
    obj5.style = tmp.header;
    intl = arg1(dependencyMap[18]).intl;
    obj5.children = intl.string(importDefault(dependencyMap[19]).EpwfZl);
    items1[1] = jsx(arg1(dependencyMap[20]).Text, obj5);
    tmp13 = jsx;
    obj6 = { cachedAt: "y", edpbxy: "isArray" };
    obj6.style = tmp.description;
    intl2 = arg1(dependencyMap[18]).intl;
    obj7 = {};
    email = undefined;
    if (null != stateFromStores) {
      email = stateFromStores.email;
    }
    obj7.email = email;
    obj6.children = intl2.format(importDefault(dependencyMap[19]).dVtWId, obj7);
    items1[2] = tmp13(arg1(dependencyMap[20]).Text, obj6);
    obj3.children = items1;
    obj2.children = tmp11(tmp12, obj3);
    obj1.children = tmp9(tmp10, obj2);
    items2 = [, ];
    items2[0] = tmp8(arg1(dependencyMap[15]).ModalContent, obj1);
    obj8 = {};
    obj9 = { size: "lg" };
    intl3 = arg1(dependencyMap[18]).intl;
    obj9.text = intl3.string(arg1(dependencyMap[18]).t.cpT0Cq);
    obj9.onPress = callback;
    obj8.children = jsx(arg1(dependencyMap[25]).Button, obj9);
    items2[1] = jsx(arg1(dependencyMap[23]).ModalFooter, obj8);
    obj.children = items2;
    return tmp7(arg1(dependencyMap[14]).ModalScreen, obj);
  }
}
class FamilyCenterModalRequestError {
  constructor(arg0) {
    tmp = jsxs();
    obj = arg1(dependencyMap[9]);
    items = [];
    items[0] = closure_7;
    stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
    tmp3 = importDefault(dependencyMap[28])();
    obj2 = arg1(dependencyMap[16]);
    boxShadowStyle = obj2.generateBoxShadowStyle(arg1(dependencyMap[16]).FOUR_DP_ELEVATION_SHADOW_PARAMS);
    callback = importAll.useCallback(() => {
      let arr = callback(closure_2[26]);
      arr = arr.pop();
    }, []);
    tmp6 = importDefault(dependencyMap[29])(null != stateFromStores, "User must be logged in to see this modal.");
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
      tmp23 = arg1;
      tmp24 = dependencyMap;
      obj5 = {};
      tmp25 = importDefault;
      num2 = 30;
      obj5.source = importDefault(dependencyMap[30]);
      str2 = "#FFF";
      obj5.color = "#FFF";
      tmp21 = jsx(arg1(dependencyMap[16]).Icon, obj5);
    } else {
      tmp17 = jsx;
      tmp18 = arg1;
      tmp19 = dependencyMap;
      obj6 = {};
      tmp20 = importDefault;
      num = 31;
      obj6.source = importDefault(dependencyMap[31]);
      str = "#FFF";
      obj6.color = "#FFF";
      tmp21 = jsx(arg1(dependencyMap[16]).Icon, obj6);
    }
    obj4.children = tmp21;
    obj3.children = tmp15(tmp16, obj4);
    items3 = [, , ];
    items3[0] = tmp13(tmp14, obj3);
    obj7 = { cachedAt: true, edpbxy: true };
    obj7.style = tmp.header;
    obj7.children = headerResult;
    items3[1] = jsx(arg1(dependencyMap[20]).Text, obj7);
    obj8 = { cachedAt: "y", edpbxy: "isArray" };
    obj8.style = tmp.description;
    obj8.children = descriptionResult;
    items3[2] = jsx(arg1(dependencyMap[20]).Text, obj8);
    obj2.children = items3;
    items4 = [, ];
    items4[0] = tmp12(arg1(dependencyMap[15]).ModalContent, obj2);
    obj9 = {};
    obj10 = {};
    intl = arg1(dependencyMap[18]).intl;
    obj10.text = intl.string(arg1(dependencyMap[18]).t.cpT0Cq);
    obj10.onPress = callback;
    obj9.children = jsx(arg1(dependencyMap[25]).Button, obj10);
    items4[1] = jsx(arg1(dependencyMap[23]).ModalFooter, obj9);
    obj1.children = items4;
    return tmp11(arg1(dependencyMap[14]).ModalScreen, obj1);
  }
}
function FamilyCenterPrereqLoading(arg0) {
  ({ userId: closure_0, linkCode: closure_1 } = arg0);
  let obj = arg1(closure_2[8]);
  closure_2 = obj.useNavigation();
  const effect = React.useEffect(() => {
    function _runPrereq() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      const _runPrereq = obj;
      return obj(...arguments);
    }
    let closure_0 = false;
    function runPrereq() {
      return _runPrereq(...arguments);
    }();
    return () => {
      let closure_0 = true;
    };
  }, []);
  obj = {};
  obj = { style: callback6().container, children: callback(arg1(closure_2[32]).ActivityIndicator, {}) };
  obj.children = callback(closure_6, obj);
  return callback(arg1(closure_2[14]).ModalScreen, obj);
}
function FamilyCenterPrereqScreen(primaryButton) {
  let description;
  let title;
  primaryButton = primaryButton.primaryButton;
  ({ title, description } = primaryButton);
  const tmp = callback7();
  let obj = {};
  obj = { style: tmp.content };
  obj = { cachedAt: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011454504407100313, edpbxy: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004026493667951817, style: tmp.title, children: title };
  const items = [callback(arg1(dependencyMap[20]).Text, obj), ];
  const obj1 = { cachedAt: "y", edpbxy: "isArray", style: tmp.description, children: description };
  items[1] = callback(arg1(dependencyMap[20]).Text, obj1);
  obj.children = items;
  const items1 = [callback2(closure_6, obj), ];
  const obj2 = { children: callback(arg1(dependencyMap[25]).Button, { text: primaryButton.text, onPress: primaryButton.onPress }) };
  items1[1] = callback(arg1(dependencyMap[23]).ModalFooter, obj2);
  obj.children = items1;
  return callback2(arg1(dependencyMap[14]).ModalScreen, obj);
}
function useNavigateToVerifyingOnPending() {
  const navigation = arg1(dependencyMap[8]).useNavigation();
  const arg1 = navigation;
  const obj = arg1(dependencyMap[8]);
  const items = [closure_7];
  const stateFromStores = arg1(dependencyMap[9]).useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    let prop;
    if (null != currentUser) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop;
  });
  const importDefault = stateFromStores;
  const tmp3 = importDefault(dependencyMap[33])(stateFromStores);
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
  const tmp = callback8();
  useNavigateToVerifyingOnPending();
  const callback = React.useCallback(() => {
    let obj = callback2(closure_2[35]);
    obj = { entryPoint: callback(closure_2[36]).AgeVerificationModalEntryPoint.FAMILY_CENTER_CONNECTION };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  }, []);
  let obj = {};
  obj = { style: tmp.content };
  obj = { style: tmp.art, children: callback(arg1(dependencyMap[27]).FamilyShieldSpotIllustration, {}) };
  const items = [callback(closure_6, obj), , ];
  const obj1 = { cachedAt: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011454504407100313, edpbxy: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004026493667951817, style: tmp.title };
  const intl = arg1(dependencyMap[18]).intl;
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
  obj1.children = intl.formatToPlainString(importDefault(dependencyMap[19]).pQQMJ7, obj2);
  items[1] = callback(arg1(dependencyMap[20]).Text, obj1);
  const obj3 = { cachedAt: "y", edpbxy: "isArray", style: tmp.description };
  const intl2 = arg1(dependencyMap[18]).intl;
  obj3.children = intl2.format(importDefault(dependencyMap[19]).0o3yg8, { link: "https://support.discord.com/hc/articles/14155060633623" });
  items[2] = callback(arg1(dependencyMap[20]).Text, obj3);
  obj.children = items;
  const items1 = [callback2(closure_6, obj), ];
  const obj4 = {};
  const obj5 = {};
  const obj6 = { variant: "primary" };
  const intl3 = arg1(dependencyMap[18]).intl;
  obj6.text = intl3.string(importDefault(dependencyMap[19]).3oUE4o);
  obj6.onPress = callback;
  const items2 = [callback(arg1(dependencyMap[25]).Button, obj6), ];
  const obj7 = { variant: "tertiary" };
  const intl4 = arg1(dependencyMap[18]).intl;
  obj7.text = intl4.string(arg1(dependencyMap[18]).t.oEAioF);
  obj7.onPress = function onPress() {
    return callback2(closure_2[26]).pop();
  };
  items2[1] = callback(arg1(dependencyMap[25]).Button, obj7);
  obj5.children = items2;
  obj4.children = callback2(arg1(dependencyMap[24]).ButtonGroup, obj5);
  items1[1] = callback(arg1(dependencyMap[23]).ModalFooter, obj4);
  obj.children = items1;
  return callback2(arg1(dependencyMap[14]).ModalScreen, obj);
}
function FamilyCenterVerifyingScreen() {
  let obj = arg1(dependencyMap[8]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  const tmp = callback6();
  const isAgeVerified = arg1(dependencyMap[37]).useIsAgeVerified();
  const importDefault = isAgeVerified;
  const obj2 = arg1(dependencyMap[37]);
  const items = [closure_7];
  const stateFromStores = arg1(dependencyMap[9]).useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    let prop;
    if (null != currentUser) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop;
  });
  const dependencyMap = stateFromStores;
  let closure_3 = React.useRef(false);
  const items1 = [isAgeVerified, stateFromStores, navigation];
  const effect = React.useEffect(() => {
    if (isAgeVerified) {
      if (!ref.current) {
        ref.current = true;
        const replaced = navigation.replace(navigation(stateFromStores[11]).FamilyCenterModalRequestSections.PREREQ_LOADING);
      }
    } else if (stateFromStores === navigation(stateFromStores[34]).AgeVerificationStatusUkAndAusOnly.UNVERIFIED) {
      const obj = { failureCode: constants.GENERIC_ERROR };
      const replaced1 = navigation.replace(navigation(stateFromStores[11]).FamilyCenterModalRequestSections.ERROR, obj);
    }
  }, items1);
  const items2 = [navigation];
  const effect1 = React.useEffect(() => {
    const timeout = setTimeout(() => {
      const replaced = lib.replace(lib(closure_2[11]).FamilyCenterModalRequestSections.ERROR, { failureCode: constants.GENERIC_ERROR });
    }, closure_8);
    return () => clearTimeout(closure_0);
  }, items2);
  obj = {};
  obj = { style: tmp.container, children: callback(arg1(dependencyMap[32]).ActivityIndicator, {}) };
  obj.children = callback(closure_6, obj);
  return callback(arg1(dependencyMap[14]).ModalScreen, obj);
}
function FamilyCenterPrereqInvalidCodeScreen() {
  let obj = {};
  const intl = arg1(dependencyMap[18]).intl;
  obj.title = intl.string(importDefault(dependencyMap[19]).ewSb6o);
  const intl2 = arg1(dependencyMap[18]).intl;
  obj.description = intl2.string(importDefault(dependencyMap[19]).jcUN2F);
  obj = {};
  const intl3 = arg1(dependencyMap[18]).intl;
  obj.text = intl3.string(arg1(dependencyMap[18]).t.WAI6xu);
  obj.onPress = importDefault(dependencyMap[26]).pop;
  obj.primaryButton = obj;
  return callback(FamilyCenterPrereqScreen, obj);
}
function FamilyCenterPrereqMustBeAdultScreen() {
  useNavigateToVerifyingOnPending();
  let obj = {};
  const callback = React.useCallback(() => {
    let obj = callback2(closure_2[35]);
    obj = { entryPoint: callback(closure_2[36]).AgeVerificationModalEntryPoint.FAMILY_CENTER_CONNECTION };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  }, []);
  const intl = arg1(dependencyMap[18]).intl;
  obj.title = intl.string(importDefault(dependencyMap[19]).BQFHXW);
  const intl2 = arg1(dependencyMap[18]).intl;
  obj.description = intl2.format(importDefault(dependencyMap[19]).WDjaKn, { link: { onClick: callback } });
  obj = {};
  const intl3 = arg1(dependencyMap[18]).intl;
  obj.text = intl3.string(arg1(dependencyMap[18]).t.NX+WJN);
  obj.onPress = importDefault(dependencyMap[26]).pop;
  obj.primaryButton = obj;
  return callback(FamilyCenterPrereqScreen, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ Image: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[2]);
({ FAMILY_CENTER_AGE_VERIFICATION_RESUME_TIMEOUT: closure_8, FAMILY_CENTER_LINK_REQUEST_ERROR_EXPERIENCES: closure_9, FamilyCenterFailureCode: closure_10, FamilyCenterIconType: closure_11 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { marginTop: importDefault(dependencyMap[7]).space.PX_16, marginBottom: importDefault(dependencyMap[7]).space.PX_16 };
obj.headerText = obj;
obj.art = {};
const tmp4 = arg1(dependencyMap[5]);
obj.connectionHeader = { alignItems: "center", marginBottom: importDefault(dependencyMap[7]).space.PX_16 };
const obj1 = { alignItems: "center", marginBottom: importDefault(dependencyMap[7]).space.PX_16 };
obj.headerIcons = { padding: importDefault(dependencyMap[7]).space.PX_8, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[7]).radii.round, marginBottom: importDefault(dependencyMap[7]).space.PX_24 };
const obj2 = { padding: importDefault(dependencyMap[7]).space.PX_8, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[7]).radii.round, marginBottom: importDefault(dependencyMap[7]).space.PX_24 };
obj.ellipseGroup = { flexDirection: "row", marginHorizontal: importDefault(dependencyMap[7]).space.PX_12 };
const obj3 = { flexDirection: "row", marginHorizontal: importDefault(dependencyMap[7]).space.PX_12 };
obj.ellipse = { backgroundColor: importDefault(dependencyMap[7]).colors.ICON_MUTED, borderRadius: importDefault(dependencyMap[7]).radii.round };
obj.title = { textAlign: "center" };
const obj4 = { backgroundColor: importDefault(dependencyMap[7]).colors.ICON_MUTED, borderRadius: importDefault(dependencyMap[7]).radii.round };
obj.teenName = { marginTop: importDefault(dependencyMap[7]).space.PX_4, textAlign: "center" };
const obj5 = { marginTop: importDefault(dependencyMap[7]).space.PX_4, textAlign: "center" };
obj.consent = { marginTop: importDefault(dependencyMap[7]).space.PX_8, textAlign: "center", paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16 };
let closure_15 = obj.createStyles(obj);
let obj9 = arg1(dependencyMap[6]);
const obj7 = {};
const obj8 = { position: "text-xs/medium", location: "text-muted", index: null, sa: 1.75, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16 };
obj7.content = obj8;
obj7.textWrapper = { alignItems: "center" };
obj9 = { marginBottom: importDefault(dependencyMap[7]).space.PX_8 };
obj7.header = obj9;
obj7.description = { textAlign: "center" };
const obj6 = { marginTop: importDefault(dependencyMap[7]).space.PX_8, textAlign: "center", paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16 };
obj7.illustration = { paddingBottom: importDefault(dependencyMap[7]).space.PX_24 };
let closure_16 = obj9.createStyles(obj7);
let obj14 = arg1(dependencyMap[6]);
const obj11 = { header: { value: null, on: null }, description: { textAlign: "center" } };
const obj12 = { -1398297388: true, -1398362964: true, -42583723: true, -1649410897: true, 1707739513: true, -1311966266: true, 1382179308: true, -1397969708: true, borderRadius: importDefault(dependencyMap[7]).radii.round, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH };
obj11.ring = obj12;
const obj10 = { paddingBottom: importDefault(dependencyMap[7]).space.PX_24 };
obj11.iconContainer = { borderRadius: importDefault(dependencyMap[7]).radii.round, backgroundColor: importDefault(dependencyMap[7]).colors.STATUS_POSITIVE };
obj14 = { backgroundColor: importDefault(dependencyMap[7]).colors.STATUS_POSITIVE };
obj11.positive = obj14;
const obj13 = { borderRadius: importDefault(dependencyMap[7]).radii.round, backgroundColor: importDefault(dependencyMap[7]).colors.STATUS_POSITIVE };
obj11.negative = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_FEEDBACK_CRITICAL };
let closure_17 = obj14.createStyles(obj11);
let obj20 = arg1(dependencyMap[6]);
let closure_18 = obj20.createStyles({ container: {} });
let obj21 = arg1(dependencyMap[6]);
const obj16 = { content: { responseUrl: "text-xs/medium", Shards_All_Nitro: "text-muted", _sentRequests: null, KIDS: 1.75, textInputRef: 138 } };
const obj15 = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_FEEDBACK_CRITICAL };
obj16.title = { textAlign: "center", marginBottom: importDefault(dependencyMap[7]).space.PX_8 };
obj16.description = { textAlign: "center" };
let closure_19 = obj21.createStyles(obj16);
const obj17 = { textAlign: "center", marginBottom: importDefault(dependencyMap[7]).space.PX_8 };
const obj18 = { content: { responseUrl: "text-xs/medium", Shards_All_Nitro: "text-muted", _sentRequests: null, KIDS: 1.75, textInputRef: 138 } };
const obj25 = arg1(dependencyMap[6]);
obj18.art = { marginBottom: importDefault(dependencyMap[7]).space.PX_24 };
obj20 = { textAlign: "center", marginBottom: importDefault(dependencyMap[7]).space.PX_8 };
obj18.title = obj20;
obj18.description = { textAlign: "center" };
let closure_20 = obj25.createStyles(obj18);
obj21 = { headerShown: true };
const obj19 = { marginBottom: importDefault(dependencyMap[7]).space.PX_24 };
obj21.headerLeft = arg1(dependencyMap[38]).getHeaderCloseButton(importDefault(dependencyMap[26]).pop);
obj21.headerTitle = function headerTitle() {
  return null;
};
const obj30 = arg1(dependencyMap[38]);
const result = arg1(dependencyMap[41]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalRequest.tsx");

export default function FamilyCenterRequestModal(userId) {
  userId = userId.userId;
  const arg1 = userId;
  const linkCode = userId.linkCode;
  const importDefault = linkCode;
  const FamilyCenterConnectionPrereqExperiment = arg1(dependencyMap[39]).FamilyCenterConnectionPrereqExperiment;
  const items = [linkCode, userId];
  const memo = React.useMemo(() => function getScreens(userId, linkCode) {
    let obj = {};
    obj = {};
    const merged = Object.assign(closure_21);
    obj["render"] = function render() {
      return callback(closure_25, { userId: arg0, linkCode: arg1 });
    };
    obj[userId(closure_2[11]).FamilyCenterModalRequestSections.PREREQ_LOADING] = obj;
    obj = {};
    const merged1 = Object.assign(closure_21);
    obj["render"] = function render(teenIdentity) {
      const obj = {};
      teenIdentity = undefined;
      if (null != teenIdentity) {
        teenIdentity = teenIdentity.teenIdentity;
      }
      obj.teenIdentity = teenIdentity;
      return closure_12(closure_28, obj);
    };
    obj[userId(closure_2[11]).FamilyCenterModalRequestSections.CONFIRM_AGE] = obj;
    const obj1 = {};
    const merged2 = Object.assign(closure_21);
    obj1["render"] = function render() {
      return callback(closure_29, {});
    };
    obj[userId(closure_2[11]).FamilyCenterModalRequestSections.VERIFYING] = obj1;
    const obj2 = {};
    let obj5 = userId(closure_2[38]);
    obj2.headerLeft = obj5.getHeaderCloseButton(linkCode(closure_2[26]).pop);
    obj2.headerShown = true;
    obj2.headerTitle = function headerTitle() {
      return null;
    };
    obj2.render = function render(teenIdentity) {
      const obj = { userId: teenIdentity, linkCode: arg1 };
      teenIdentity = undefined;
      if (null != teenIdentity) {
        teenIdentity = teenIdentity.teenIdentity;
      }
      obj.teenIdentity = teenIdentity;
      return closure_12(closure_22, obj);
    };
    obj[userId(closure_2[11]).FamilyCenterModalRequestSections.REQUEST] = obj2;
    const obj3 = {};
    const merged3 = Object.assign(closure_21);
    obj3["render"] = function render() {
      return callback(closure_30, {});
    };
    obj[userId(closure_2[11]).FamilyCenterModalRequestSections.INVALID_CODE] = obj3;
    const obj4 = {};
    const merged4 = Object.assign(closure_21);
    obj4["render"] = function render() {
      return callback(closure_31, {});
    };
    obj[userId(closure_2[11]).FamilyCenterModalRequestSections.MUST_BE_ADULT] = obj4;
    obj5 = {
      headerShown: true,
      headerLeft: userId(closure_2[38]).getHeaderCloseButton(linkCode(closure_2[26]).pop),
      headerTitle() {
        return null;
      },
      render() {
        return callback(closure_23, {});
      }
    };
    obj[userId(closure_2[11]).FamilyCenterModalRequestSections.SENT] = obj5;
    const obj6 = { headerShown: true };
    const obj10 = userId(closure_2[38]);
    obj6.headerLeft = userId(closure_2[38]).getHeaderCloseButton(linkCode(closure_2[26]).pop);
    obj6.headerTitle = function headerTitle() {
      return null;
    };
    obj6.render = function render(failureCode) {
      return callback(closure_24, { failureCode: failureCode.failureCode });
    };
    obj[userId(closure_2[11]).FamilyCenterModalRequestSections.ERROR] = obj6;
    const obj7 = { fullscreen: true };
    const obj12 = userId(closure_2[38]);
    obj7.headerLeft = userId(closure_2[38]).getHeaderCloseButton(linkCode(closure_2[26]).pop);
    obj7.render = function render() {
      return callback(closure_24, { failureCode: constants.INELIGIBLE_FOR_FAMILY_CENTER });
    };
    obj[userId(closure_2[11]).FamilyCenterModalRequestSections.TEEN_SCAN] = obj7;
    return obj;
  }(userId, linkCode), items);
  const FamilyCenterModalRequestSections = arg1(dependencyMap[11]).FamilyCenterModalRequestSections;
  if (FamilyCenterConnectionPrereqExperiment.useConfig({ location: "FamilyCenterRequestModal" }).enabled) {
    let PREREQ_LOADING = FamilyCenterModalRequestSections.PREREQ_LOADING;
  } else {
    PREREQ_LOADING = tmp ? FamilyCenterModalRequestSections.REQUEST : FamilyCenterModalRequestSections.TEEN_SCAN;
  }
  const obj = { initialRouteName: PREREQ_LOADING, screens: memo };
  const intl = arg1(dependencyMap[18]).intl;
  obj.headerBackTitle = intl.string(arg1(dependencyMap[18]).t.13/7kX);
  return callback(arg1(dependencyMap[40]).Modal, obj);
};
export { FamilyCenterModalRequestConfirm };
export { FamilyCenterModalRequestSuccess };
export { FamilyCenterModalRequestError };
