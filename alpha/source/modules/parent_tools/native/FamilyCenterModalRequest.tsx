// Module ID: 13307
// Function ID: 13308
// Name: FamilyCenterModalRequest
// Dependencies: [5, 19, 17, 1384, 7709, 21, 5009, 575, 1498, 563, 7710, 13308, 8364, 13309, 7964, 7965, 1188, 1410, 1114, 2537, 5619, 5712, 13310, 13311, 13158, 6761, 5629, 6738, 13318, 8362, 38, 11555, 8351, 6947, 6726, 1993, 7947, 6723, 13322, 6720, 6992, 11447, 2]
// Exports: default

// Module 13307 (FamilyCenterModalRequest)
import react_native from "react-native" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 575 */;
import intl8 from "intl" /* 1114 */;
import native from "native" /* 1188 */;
import useNavigation from "useNavigation" /* 1498 */;
import Server from "Server" /* 1993 */;
import _modDef2537 from "module_2537" /* 2537 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 6947 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7710 */;
import ModalScreen2 from "ModalScreen" /* 7964 */;
import AssetRegistryDefault from "AssetRegistry" /* 8351 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8362 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8364 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11555 */;
import ModalFooter2 from "ModalFooter" /* 13158 */;
import FamilyCenterModalRequestRouting from "FamilyCenterModalRequestRouting" /* 13308 */;
import EnvelopeSpotIllustration from "EnvelopeSpotIllustration" /* 13318 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7709 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import NavigatorHeader_mod from "NavigatorHeader" /* 6992 */;
import size_mod from "module_2" /* 2 */;

let c2, c3, dependencyMap, navigation;

let NavigatorHeader;
let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let obj10;
let obj12;
let obj13;
let obj15;
let obj17;
let obj18;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj9;
let rect;
let size;
let size1;
let size2;
let unpackModuleId;
const f104114 = () => {
  currentUser = currentUser.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  return prop;
};
class FamilyCenterModalRequestConfirm {
  constructor(userId) {
    let ButtonGroup;
    let currentUser;
    let format;
    let formatToPlainString;
    let formatToPlainString2;
    let intl3;
    let intl5;
    let intl6;
    let intl7;
    let items10;
    let items4;
    let items5;
    let items6;
    let items7;
    let items8;
    let items9;
    let kFj4h1;
    let kFj4h12;
    let obj14;
    let obj16;
    let obj20;
    let obj27;
    let obj8;
    let tmp10Result;
    let tmp15Result;
    let tmp18;
    let tmp19;
    let username2;
    let yiUJNU;
    userId = userId.userId;
    const linkCode = userId.linkCode;
    const teenIdentity = userId.teenIdentity;
    navigation = undefined;
    const tmp = closure_14();
    let obj = userId(navigation[8]);
    navigation = obj.useNavigation();
    const items = [UserStore];
    const obj2 = userId(navigation[9]);
    const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
    const items1 = [navigation];
    const items2 = [navigation];
    const callback = react.useCallback(() => {
      const obj = FamilyCenterActionCreatorsDefault;
      const result = obj.clearPendingConnection();
      navigation.push(FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.SENT);
    }, items1);
    const callback1 = react.useCallback((arg0) => {
      const obj = FamilyCenterUtils;
      const failureCodeForAPIError = obj.getFailureCodeForAPIError(arg0);
      navigation.push(FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.ERROR, { failureCode: failureCodeForAPIError });
    }, items2);
    const obj3 = userId(navigation[13]);
    const familyCenterActions = obj3.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
    const requestLink = familyCenterActions.requestLink;
    const isRequestingLink = familyCenterActions.isRequestingLink;
    const items3 = [requestLink, userId, linkCode];
    const callback2 = react.useCallback(() => {
      requestLink(userId, linkCode);
    }, items3);
    const ModalScreen = userId(navigation[14]).ModalScreen;
    const ModalContent = userId(navigation[15]).ModalContent;
    if (null != teenIdentity) {
      let userAvatarSource;
      const obj4 = { style: tmp.connectionHeader, children: items6 };
      const obj5 = { style: tmp.headerIcons, children: items4 };
      const Avatar = tmp2(tmp3[16]).Avatar;
      if (null != stateFromStores) {
        const obj6 = linkCode(navigation[17]);
        userAvatarSource = obj6.getUserAvatarSource(stateFromStores);
      }
      const obj7 = { source: userAvatarSource, size: userId(navigation[16]).AvatarSizes.LARGE, accessibilityLabel: formatToPlainString(kFj4h1, obj8) };
      const intl = tmp2(tmp3[18]).intl;
      formatToPlainString = intl.formatToPlainString;
      let str;
      kFj4h1 = linkCode(tmp3[19]).kFj4h1;
      if (stateFromStores != null) {
        str = stateFromStores.globalName;
      }
      if (str == null) {
        let username1;
        if (stateFromStores != null) {
          username1 = stateFromStores.username;
        }
        str = username1;
      }
      if (str == null) {
        str = "";
      }
      obj8 = { name: str };
      items4 = [closure_11(Avatar, obj7), , ];
      const obj10 = { style: tmp.ellipse };
      const obj9 = { style: tmp.ellipseGroup, children: items5 };
      items5 = [closure_11(View, obj10), , ];
      const obj11 = { style: tmp.ellipse };
      items5[1] = closure_11(View, obj11);
      const obj12 = { style: tmp.ellipse };
      items5[2] = closure_11(View, obj12);
      items4[1] = closure_12(View, obj9);
      const obj13 = { source: tmp15Result.getUserAvatarSource(obj14), size: userId(navigation[16]).AvatarSizes.LARGE, accessibilityLabel: formatToPlainString2(kFj4h12, obj16) };
      const Avatar2 = tmp2(tmp3[16]).Avatar;
      obj14 = { id: null, avatar: null, discriminator: "0" };
      ({ id: obj15.id, avatar: obj15.avatar } = teenIdentity);
      tmp15Result = linkCode(navigation[17]);
      const intl2 = tmp2(tmp3[18]).intl;
      formatToPlainString2 = intl2.formatToPlainString;
      let username = teenIdentity.global_name;
      kFj4h12 = tmp15(tmp3[19]).kFj4h1;
      if (username == null) {
        username = teenIdentity.username;
      }
      obj16 = { name: username };
      items4[2] = closure_11(Avatar2, obj13);
      items6 = [closure_12(View, obj5), , , ];
      const obj17 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: intl3.string(linkCode(navigation[19]).sMmIbm) };
      const Text = tmp2(tmp3[20]).Text;
      intl3 = tmp2(tmp3[18]).intl;
      items6[1] = closure_11(Text, obj17);
      const obj18 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.teenName, children: username2 };
      username2 = teenIdentity.global_name;
      const Text2 = tmp2(tmp3[20]).Text;
      if (username2 == null) {
        username2 = teenIdentity.username;
      }
      items6[2] = closure_11(Text2, obj18);
      obj19 = { variant: "text-sm/medium", color: "text-muted", style: tmp.consent, children: format(yiUJNU, obj20) };
      const Text3 = tmp2(tmp3[20]).Text;
      const intl4 = tmp2(tmp3[18]).intl;
      format = intl4.format;
      let username3 = teenIdentity.global_name;
      yiUJNU = tmp15(tmp3[19]).yiUJNU;
      if (username3 == null) {
        username3 = teenIdentity.username;
      }
      obj20 = { username: username3 };
      items6[3] = closure_11(Text3, obj19);
      tmp10Result = tmp10(tmp11, obj4);
      tmp18 = tmp15;
      tmp19 = tmp12;
    } else {
      const obj21 = { children: items7 };
      const obj22 = { style: tmp.art, source: linkCode(navigation[22]) };
      const tmp23 = linkCode(navigation[21]);
      items7 = [closure_11(tmp23, obj22), ];
      const obj23 = { style: tmp.headerText, variant: "text-lg/bold", children: intl7.string(linkCode(navigation[19]).GH11eI) };
      const Text4 = tmp2(tmp3[20]).Text;
      intl7 = tmp2(tmp3[18]).intl;
      items7[1] = closure_11(Text4, obj23);
      tmp10Result = tmp10(closure_13, obj21);
      tmp18 = linkCode;
      tmp19 = closure_11;
    }
    const obj24 = { children: items9 };
    const obj25 = { children: items8 };
    items8 = [tmp10Result, tmp19(tmp18(navigation[23]), {})];
    items9 = [closure_12(ModalContent, obj25), ];
    const obj26 = { children: closure_12(ButtonGroup, obj27) };
    const ModalFooter = tmp2(tmp3[24]).ModalFooter;
    obj27 = { children: items10 };
    ButtonGroup = tmp2(tmp3[25]).ButtonGroup;
    const obj28 = { variant: "primary", size: "lg", disabled: isRequestingLink, loading: isRequestingLink, text: intl5.string(tmp18(navigation[19]).ISg34l), onPress: callback2 };
    const Button = tmp2(tmp3[26]).Button;
    intl5 = tmp2(tmp3[18]).intl;
    items10 = [tmp19(Button, obj28), ];
    const obj29 = { variant: "secondary", size: "lg", text: intl6.string(userId(navigation[18]).t["ETE/oC"]), onPress: tmp18(navigation[27]).pop };
    const Button2 = tmp2(tmp3[26]).Button;
    intl6 = tmp2(tmp3[18]).intl;
    items10[1] = tmp19(Button2, obj29);
    items9[1] = tmp19(ModalFooter, obj26);
    return closure_12(ModalScreen, obj24);
  }
}
class FamilyCenterModalRequestSuccess {
  constructor() {
    let Button;
    let currentUser;
    let dVtWId;
    let email;
    let format;
    let intl;
    let intl3;
    let items1;
    let items2;
    let obj10;
    let obj3;
    const tmp = closure_16();
    const items = [UserStore];
    const obj = useStateFromStores;
    const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
    const callback = react.useCallback(() => {
      const arr = ModalActionCreatorsDefault;
      arr.pop();
    }, []);
    if (null === stateFromStores) {
      const arr2 = ModalActionCreatorsDefault;
      let arr = arr2.pop();
    }
    const ModalScreen = tmp2(7964).ModalScreen;
    const obj2 = { style: tmp.content, children: authStore2(View, obj3) };
    obj3 = { style: tmp.textWrapper, children: items1 };
    const obj4 = { style: tmp.illustration, children: unpackModuleId(EnvelopeSpotIllustration.EnvelopeSpotIllustration, { scale: 0.7 }) };
    const ModalContent = tmp2(7965).ModalContent;
    items1 = [unpackModuleId(View, obj4), , ];
    const obj5 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.header, children: intl.string(_modDef2537.EpwfZl) };
    const Text = tmp2(5619).Text;
    intl = tmp2(1114).intl;
    items1[1] = unpackModuleId(Text, obj5);
    const obj6 = { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: format(dVtWId, { email }) };
    const Text2 = tmp2(5619).Text;
    const intl2 = tmp2(1114).intl;
    format = intl2.format;
    email = undefined;
    dVtWId = _modDef2537.dVtWId;
    if (stateFromStores != null) {
      email = stateFromStores.email;
    }
    const obj7 = { children: items2 };
    const obj8 = { children: unpackModuleId(View, obj2) };
    items1[2] = unpackModuleId(Text2, obj6);
    items2 = [unpackModuleId(ModalContent, obj8), ];
    const obj9 = { children: unpackModuleId(Button, obj10) };
    const ModalFooter = tmp2(13158).ModalFooter;
    obj10 = { size: "lg", text: intl3.string(intl8.t.cpT0Cq), onPress: callback };
    Button = tmp2(5629).Button;
    intl3 = tmp2(1114).intl;
    items2[1] = unpackModuleId(ModalFooter, obj9);
    return authStore2(ModalScreen, obj7);
  }
}
class FamilyCenterModalRequestError {
  constructor(failureCode) {
    let Button;
    let currentUser;
    let email;
    let intl;
    let items1;
    let items3;
    let items4;
    let obj14;
    let obj6;
    let tmp15Result;
    failureCode = failureCode.failureCode;
    const tmp = closure_18();
    const items = [UserStore];
    const obj = useStateFromStores;
    const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
    const tmp6 = useIsInAdultAgeGroupDefault();
    const obj2 = native;
    const boxShadowStyle = obj2.generateBoxShadowStyle(native.FOUR_DP_ELEVATION_SHADOW_PARAMS);
    const callback = react.useCallback(() => {
      const arr = ModalActionCreatorsDefault;
      arr.pop();
    }, []);
    _modDef38(null != stateFromStores, "User must be logged in to see this modal.");
    const obj4 = { isAdult: tmp6, email };
    email = stateFromStores.email;
    const icon = obj3.icon;
    const CHECK = constants2.CHECK;
    const headerResult = metroImportAll[failureCode].header(obj4);
    const descriptionResult = metroImportAll[failureCode].description(obj4);
    const ModalScreen = tmp2(7964).ModalScreen;
    const obj5 = { style: items1, children: unpackModuleId(View, obj6) };
    items1 = [tmp.ring, boxShadowStyle];
    const items2 = [tmp.iconContainer, ];
    obj6 = { style: items2, children: tmp15Result };
    items2[1] = icon === CHECK ? tmp.positive : tmp.negative;
    const ModalContent = tmp2(7965).ModalContent;
    const tmp13 = constants2;
    if (icon === tmp13.CHECK) {
      const obj7 = { source: AssetRegistryDefault2, color: "#FFF" };
      const Icon2 = tmp2(1188).Icon;
      tmp15Result = tmp15(Icon2, obj7);
    } else {
      const obj8 = { source: AssetRegistryDefault, color: "#FFF" };
      const Icon = tmp2(1188).Icon;
      tmp15Result = tmp15(Icon, obj8);
    }
    const obj10 = { children: items3 };
    const obj9 = { children: items4 };
    items3 = [unpackModuleId(View, obj5), , ];
    const obj11 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.header, children: headerResult };
    items3[1] = unpackModuleId(Text_Text.Text, obj11);
    const obj12 = { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: descriptionResult };
    items3[2] = unpackModuleId(Text_Text.Text, obj12);
    items4 = [authStore2(ModalContent, obj10), ];
    const obj13 = { children: unpackModuleId(Button, obj14) };
    const ModalFooter = tmp2(13158).ModalFooter;
    obj14 = { text: intl.string(intl8.t.cpT0Cq), onPress: callback };
    Button = tmp2(5629).Button;
    intl = tmp2(1114).intl;
    items4[1] = unpackModuleId(ModalFooter, obj13);
    return authStore2(ModalScreen, obj9);
  }
}
function FamilyCenterPrereqLoading(arg0) {
  let closure_2;
  let obj3;
  ({ userId: require, linkCode: importDefault } = arg0);
  let tmp = closure_20();
  let obj = useNavigation;
  dependencyMap = obj.useNavigation();
  const effect = react.useEffect(() => {
    let _true;
    function runPrereq() {
      return obj(...arguments);
    }
    let obj = function _runPrereq() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let closure_0;
        let obj2;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            let tmp;
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let closure_1 = tmp4;
                tmp = undefined;
                c2 = 1;
                c3 = 1;
                const obj5 = { value: obj2.resolveConnectionPrereqTarget(tmp, closure_1), done: false };
                obj2 = _true(closure_2_2[11]);
                return obj5;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              tmp = value;
              const tmp34 = closure_129_0;
              if (!tmp34) {
                if (tmp.section !== _true(closure_2_2[11]).FamilyCenterModalRequestSections.ERROR) {
                  if (tmp.section !== _true(closure_2_2[11]).FamilyCenterModalRequestSections.REQUEST) {
                    if (tmp.section !== _true(closure_2_2[11]).FamilyCenterModalRequestSections.CONFIRM_AGE) {
                      const replaced = c2.replace(tmp.section);
                    }
                  }
                }
                const replaced1 = c2.replace(tmp.section, tmp.params);
              }
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp28) {
            c3 = 3;
            throw tmp28;
          }
        }
      });
      return obj(...arguments);
    };
    let c0 = false;
    let tmp = runPrereq();
    return () => {
      let c0 = true;
    };
  }, []);
  let obj2 = { children: closure_11(View, obj3) };
  obj3 = { style: tmp.container, children: closure_11(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
  const ModalScreen = ModalScreen2.ModalScreen;
  return closure_11(ModalScreen, obj2);
}
function FamilyCenterPrereqScreen(primaryButton) {
  let description;
  let items;
  let items1;
  let obj6;
  let title;
  primaryButton = primaryButton.primaryButton;
  ({ title, description } = primaryButton);
  const tmp = closure_22();
  const obj = { children: items1 };
  const obj2 = { style: tmp.content, children: items };
  const ModalScreen = ModalScreen2.ModalScreen;
  items = [, ];
  const obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: title };
  items[0] = unpackModuleId(Text_Text.Text, obj3);
  const obj4 = { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: description };
  items[1] = unpackModuleId(Text_Text.Text, obj4);
  items1 = [authStore2(View, obj2), ];
  const obj5 = { children: unpackModuleId(components_Button_Button.Button, obj6) };
  const ModalFooter = ModalFooter2.ModalFooter;
  obj6 = { text: primaryButton.text, onPress: primaryButton.onPress };
  items1[1] = unpackModuleId(ModalFooter, obj5);
  return authStore2(ModalScreen, obj);
}
function FamilyCenterConfirmAgeScreen(teenIdentity) {
  let ButtonGroup;
  let closure_2;
  let formatToPlainString;
  let intl2;
  let intl3;
  let intl4;
  let items2;
  let items3;
  let items4;
  let obj9;
  let pQQMJ7;
  let str;
  teenIdentity = teenIdentity.teenIdentity;
  const tmp = closure_24();
  navigation = undefined;
  let obj = navigation(1498);
  navigation = obj.useNavigation();
  let obj2 = navigation(563);
  const items = [UserStore];
  const stateFromStores = obj2.useStateFromStores(items, f104114);
  const tmp7 = stateFromStores(6726)(stateFromStores);
  dependencyMap = tmp7;
  const items1 = [stateFromStores, tmp7, navigation];
  const effect = react.useEffect(() => {
    const tmp2 = null != closure_2 && tmp !== stateFromStores && null != stateFromStores && stateFromStores !== Server.AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
    if (tmp2) {
      const replaced = navigation.replace(FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.VERIFYING);
    }
  }, items1);
  const callback = react.useCallback(() => {
    const obj = stateFromStores(closure_2[36]);
    const obj2 = { entryPoint: navigation(closure_2[37]).AgeVerificationModalEntryPoint.FAMILY_CENTER_CONNECTION };
    const result = obj.showAgeVerificationGetStartedModal(obj2);
  }, []);
  const obj3 = { style: tmp.content, children: items2 };
  const obj4 = { style: tmp.art, children: closure_11(navigation(13322).FamilyShieldSpotIllustration, {}) };
  const ModalScreen = navigation(7964).ModalScreen;
  items2 = [closure_11(View, obj4), , ];
  const obj5 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: formatToPlainString(pQQMJ7, { username: str }) };
  const Text = navigation(5619).Text;
  const intl = navigation(1114).intl;
  formatToPlainString = intl.formatToPlainString;
  str = undefined;
  pQQMJ7 = stateFromStores(2537).pQQMJ7;
  const tmp11 = View;
  if (teenIdentity != null) {
    str = teenIdentity.global_name;
  }
  if (str == null) {
    let username;
    if (teenIdentity != null) {
      username = teenIdentity.username;
    }
    str = username;
  }
  if (str == null) {
    str = "";
  }
  const obj6 = { children: items3 };
  items2[1] = closure_11(Text, obj5);
  const obj7 = { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: intl2.format(stateFromStores(2537)["0o3yg8"], { link: "https://support.discord.com/hc/articles/14155060633623" }) };
  const Text2 = tmp2(5619).Text;
  intl2 = tmp2(1114).intl;
  items2[2] = closure_11(Text2, obj7);
  items3 = [closure_12(tmp11, obj3), ];
  const obj8 = { children: closure_12(ButtonGroup, obj9) };
  const ModalFooter = tmp2(13158).ModalFooter;
  obj9 = { children: items4 };
  ButtonGroup = tmp2(6761).ButtonGroup;
  const obj10 = { variant: "primary", text: intl3.string(stateFromStores(2537)["3oUE4o"]), onPress: callback };
  const Button = tmp2(5629).Button;
  intl3 = tmp2(1114).intl;
  items4 = [closure_11(Button, obj10), ];
  const obj11 = {
    variant: "tertiary",
    text: intl4.string(navigation(1114).t.oEAioF),
    onPress() {
      const arr = stateFromStores(closure_2[27]);
      return arr.pop();
    }
  };
  const Button2 = tmp2(5629).Button;
  intl4 = tmp2(1114).intl;
  items4[1] = closure_11(Button2, obj11);
  items3[1] = closure_11(ModalFooter, obj8);
  return closure_12(ModalScreen, obj6);
}
function FamilyCenterVerifyingScreen() {
  let obj5;
  let stateFromStores;
  let tmp = closure_20();
  let obj = navigation(stateFromStores[8]);
  navigation = obj.useNavigation();
  const obj2 = navigation(stateFromStores[39]);
  const isAgeVerified = obj2.useIsAgeVerified();
  const items = [UserStore];
  const obj3 = navigation(stateFromStores[9]);
  stateFromStores = obj3.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop;
  });
  const ref = react.useRef(false);
  const items1 = [isAgeVerified, stateFromStores, navigation];
  const effect = react.useEffect(() => {
    const tmp = isAgeVerified;
    if (tmp) {
      if (!ref.current) {
        tmp10.current = true;
        const replaced = navigation.replace(FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.PREREQ_LOADING);
      }
    } else if (stateFromStores === Server.AgeVerificationStatusUkAndAusOnly.UNVERIFIED) {
      const obj = { failureCode: constants.GENERIC_ERROR };
      const replaced1 = navigation.replace(FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.ERROR, obj);
    }
  }, items1);
  const items2 = [navigation];
  const effect1 = react.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => {
      const obj = { failureCode: constants.GENERIC_ERROR };
      const replaced = closure_0.replace(navigation(stateFromStores[11]).FamilyCenterModalRequestSections.ERROR, obj);
    }, closure_1_7);
    return () => clearTimeout(closure_0);
  }, items2);
  const obj4 = { children: closure_11(View, obj5) };
  obj5 = { style: tmp.container, children: closure_11(navigation(stateFromStores[33]).ActivityIndicator, {}) };
  const ModalScreen = navigation(stateFromStores[14]).ModalScreen;
  return closure_11(ModalScreen, obj4);
}
function FamilyCenterPrereqInvalidCodeScreen() {
  let intl;
  let intl2;
  let intl3;
  let obj2;
  const obj = { title: intl.string(_modDef2537.ewSb6o), description: intl2.string(_modDef2537.jcUN2F), primaryButton: obj2 };
  intl = intl8.intl;
  intl2 = intl8.intl;
  obj2 = { text: intl3.string(intl8.t.WAI6xu), onPress: ModalActionCreatorsDefault.pop };
  intl3 = intl8.intl;
  return unpackModuleId(FamilyCenterPrereqScreen, obj);
}
function FamilyCenterPrereqMustBeAdultScreen() {
  let closure_2;
  let intl;
  let intl2;
  let intl3;
  let obj4;
  let obj5;
  let obj = navigation(1498);
  navigation = obj.useNavigation();
  let obj2 = navigation(563);
  const items = [UserStore];
  const stateFromStores = obj2.useStateFromStores(items, f104114);
  const tmp3 = stateFromStores(6726)(stateFromStores);
  dependencyMap = tmp3;
  const items1 = [stateFromStores, tmp3, navigation];
  const effect = react.useEffect(() => {
    const tmp2 = null != closure_2 && tmp !== stateFromStores && null != stateFromStores && stateFromStores !== Server.AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
    if (tmp2) {
      const replaced = navigation.replace(FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.VERIFYING);
    }
  }, items1);
  const obj3 = { title: intl.string(stateFromStores(2537).BQFHXW), description: intl2.format(stateFromStores(2537).WDjaKn, obj4), primaryButton: obj5 };
  const callback = react.useCallback(() => {
    const obj = stateFromStores(closure_2[36]);
    const obj2 = { entryPoint: navigation(closure_2[37]).AgeVerificationModalEntryPoint.FAMILY_CENTER_CONNECTION };
    const result = obj.showAgeVerificationGetStartedModal(obj2);
  }, []);
  intl = navigation(1114).intl;
  intl2 = navigation(1114).intl;
  obj4 = { link: { onClick: callback } };
  obj5 = { text: intl3.string(navigation(1114).t["NX+WJN"]), onPress: stateFromStores(6738).pop };
  intl3 = navigation(1114).intl;
  return closure_11(FamilyCenterPrereqScreen, obj3);
}
const View = react_native.View;
({ FAMILY_CENTER_AGE_VERIFICATION_RESUME_TIMEOUT: metroImportDefault, FAMILY_CENTER_LINK_REQUEST_ERROR_EXPERIENCES: metroImportAll, FamilyCenterFailureCode: c9, FamilyCenterIconType: c10 } = FamilyCenterConstants);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { headerText: obj2, art: { width: 165, height: 119 }, connectionHeader: obj3, headerIcons: obj4, ellipseGroup: obj5, ellipse: size, title: { textAlign: "center" }, teenName: obj6, consent: obj7 };
obj2 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", marginBottom: nativeDefault.space.PX_16 };
obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "center", alignSelf: "center", padding: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round, marginBottom: nativeDefault.space.PX_24 };
obj5 = { flexDirection: "row", marginHorizontal: nativeDefault.space.PX_12 };
size = { width: 4, height: 4, marginHorizontal: 2, backgroundColor: nativeDefault.colors.ICON_MUTED, borderRadius: nativeDefault.radii.round };
obj6 = { marginTop: nativeDefault.space.PX_4, textAlign: "center" };
obj7 = { marginTop: nativeDefault.space.PX_8, textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16 };
const authStore3 = createStyles(obj);
createStyles = createStyles_mod;
let obj8 = { content: obj9, textWrapper: { alignItems: "center" }, header: obj10, description: { textAlign: "center" }, illustration: rect };
obj9 = { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 };
const createStyles2 = createStyles.createStyles;
obj10 = { marginBottom: nativeDefault.space.PX_8 };
rect = { position: "absolute", bottom: "100%", left: 0, right: 0, alignItems: "center", paddingBottom: nativeDefault.space.PX_24 };
const authStore4 = createStyles2(obj8);
createStyles = createStyles_mod;
let obj11 = { header: { marginBottom: 8, textAlign: "center" }, description: { textAlign: "center" }, ring: size1, iconContainer: size2, positive: obj12, negative: obj13 };
size1 = { display: "flex", justifyContent: "center", alignItems: "center", height: 64, width: 64, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginBottom: 24 };
const createStyles3 = createStyles.createStyles;
size2 = { display: "flex", justifyContent: "center", alignItems: "center", height: 48, width: 48, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj12 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj13 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
const authStore5 = createStyles3(obj11);
createStyles = createStyles_mod;
let closure_20 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
createStyles = createStyles_mod;
let obj14 = { content: { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: 32 }, title: obj15, description: { textAlign: "center" } };
obj15 = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
let closure_22 = createStyles.createStyles(obj14);
createStyles = createStyles_mod;
let obj16 = { content: { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: 32 }, art: obj17, title: obj18, description: { textAlign: "center" } };
obj17 = { marginBottom: nativeDefault.space.PX_24 };
const createStyles4 = createStyles.createStyles;
obj18 = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
let closure_24 = createStyles4(obj16);
let obj19 = {
  headerShown: true,
  headerLeft: NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
  headerTitle() {
    return null;
  }
};
NavigatorHeader = NavigatorHeader_mod;
size = size_mod;
let result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalRequest.tsx");

export default function FamilyCenterRequestModal(userId) {
  let intl;
  userId = userId.userId;
  const linkCode = userId.linkCode;
  const items = [linkCode, userId];
  const memo = react.useMemo(() => {
    let obj10;
    let obj12;
    let obj6;
    let closure_0 = userId;
    let closure_1 = linkCode;
    let obj = {};
    const obj2 = {
      render() {
        const obj = { userId, linkCode };
        return closure_2_11(closure_2_21, obj);
      }
    };
    const PREREQ_LOADING = FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.PREREQ_LOADING;
    const merged = Object.assign(obj19);
    obj[PREREQ_LOADING] = obj2;
    const obj3 = {
      render(teenIdentity) {
        teenIdentity = undefined;
        const tmp = closure_1_11;
        const tmp2 = closure_1_25;
        if (teenIdentity != null) {
          teenIdentity = teenIdentity.teenIdentity;
        }
        return tmp(tmp2, { teenIdentity });
      }
    };
    const CONFIRM_AGE = FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.CONFIRM_AGE;
    const merged1 = Object.assign(obj19);
    obj[CONFIRM_AGE] = obj3;
    const obj4 = {
      render() {
        return closure_1_11(closure_1_26, {});
      }
    };
    const VERIFYING = FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.VERIFYING;
    const merged2 = Object.assign(obj19);
    obj[VERIFYING] = obj4;
    const obj5 = {
      headerLeft: obj6.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerShown: true,
      headerTitle() {
        return null;
      },
      render(teenIdentity) {
        const obj = { userId, linkCode, teenIdentity };
        teenIdentity = undefined;
        const tmp = closure_2_11;
        const tmp2 = closure_2_15;
        if (teenIdentity != null) {
          teenIdentity = teenIdentity.teenIdentity;
        }
        return tmp(tmp2, obj);
      }
    };
    const REQUEST = FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.REQUEST;
    obj[REQUEST] = obj5;
    obj6 = NavigatorHeader;
    const obj7 = {
      render() {
        return closure_1_11(closure_1_27, {});
      }
    };
    const INVALID_CODE = FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.INVALID_CODE;
    const merged3 = Object.assign(obj19);
    obj[INVALID_CODE] = obj7;
    const obj8 = {
      render() {
        return closure_1_11(closure_1_28, {});
      }
    };
    const MUST_BE_ADULT = FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.MUST_BE_ADULT;
    const merged4 = Object.assign(obj19);
    obj[MUST_BE_ADULT] = obj8;
    const obj9 = {
      headerShown: true,
      headerLeft: obj10.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_11(closure_1_17, {});
      }
    };
    const SENT = FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.SENT;
    obj[SENT] = obj9;
    obj10 = NavigatorHeader;
    const obj11 = {
      headerShown: true,
      headerLeft: obj12.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        return null;
      },
      render(failureCode) {
        const obj = { failureCode: failureCode.failureCode };
        return closure_1_11(closure_1_19, obj);
      }
    };
    const ERROR = FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.ERROR;
    obj[ERROR] = obj11;
    obj12 = NavigatorHeader;
    return obj;
  }, items);
  let obj = { initialRouteName: userId(13308).FamilyCenterModalRequestSections.PREREQ_LOADING, screens: memo, headerBackTitle: intl.string(userId(1114).t["13/7kX"]) };
  const Modal = userId(11447).Modal;
  intl = userId(1114).intl;
  return closure_11(Modal, obj);
};
export { FamilyCenterModalRequestConfirm };
export { FamilyCenterModalRequestSuccess };
export { FamilyCenterModalRequestError };
