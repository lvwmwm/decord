// Module ID: 11528
// Function ID: 11529
// Name: FamilyCenterModalRequest
// Dependencies: [5, 19, 17, 1390, 7259, 21, 5092, 587, 558, 576, 1503, 573, 7260, 11529, 7741, 11530, 1200, 1415, 1126, 2568, 5088, 6156, 11531, 11532, 7515, 5379, 5934, 11539, 5958, 7514, 11540, 7739, 38, 10713, 7728, 6153, 5922, 1998, 7497, 5918, 11544, 5909, 6200, 10602, 2]

// Module 11528 (FamilyCenterModalRequest)
import react_native from "react-native" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import useStateFromStores from "useStateFromStores" /* 573 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl8 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import useNavigation from "useNavigation" /* 1503 */;
import Server from "Server" /* 1998 */;
import _modDef2568 from "module_2568" /* 2568 */;
import Text_Text from "Text/Text" /* 5088 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 6153 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7260 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7497 */;
import ModalScreen2 from "ModalScreen" /* 7514 */;
import ModalContent2 from "ModalContent" /* 7515 */;
import AssetRegistryDefault from "AssetRegistry" /* 7728 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 7739 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 7741 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10713 */;
import FamilyCenterModalRequestRouting from "FamilyCenterModalRequestRouting" /* 11529 */;
import ModalFooter2 from "ModalFooter" /* 11539 */;
import EnvelopeSpotIllustration from "EnvelopeSpotIllustration" /* 11540 */;
import FamilyShieldSpotIllustration from "FamilyShieldSpotIllustration" /* 11544 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7259 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import NavigatorHeader_mod from "NavigatorHeader" /* 6200 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, c3, dependencyMap, importDefault, navigation;

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
function FamilyCenterPrereqLoading(arg0) {
  let closure_2;
  let obj3;
  let require;
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
            return { value: "IconComponent", done: "+51" };
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
                obj2 = _true(closure_2_2[13]);
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
                if (tmp.section !== _true(closure_2_2[13]).FamilyCenterModalRequestSections.ERROR) {
                  if (tmp.section !== _true(closure_2_2[13]).FamilyCenterModalRequestSections.REQUEST) {
                    if (tmp.section !== _true(closure_2_2[13]).FamilyCenterModalRequestSections.CONFIRM_AGE) {
                      const replaced = c2.replace(tmp.section);
                    }
                  }
                }
                const replaced1 = c2.replace(tmp.section, tmp.params);
              }
              c3 = 3;
              return { value: "IconComponent", done: "+51" };
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
function getScreens(userId, linkCode) {
  let obj10;
  let obj12;
  let obj6;
  _require = userId;
  importDefault = linkCode;
  let obj = {};
  const obj2 = {
    render() {
      const obj = { userId, linkCode };
      return unpackModuleId(FamilyCenterPrereqLoading, obj);
    }
  };
  const PREREQ_LOADING = require("FamilyCenterModalRequestRouting").FamilyCenterModalRequestSections.PREREQ_LOADING;
  const merged = Object.assign(obj19);
  obj[PREREQ_LOADING] = obj2;
  const obj3 = {
    render(teenIdentity) {
      teenIdentity = undefined;
      const tmp = closure_1_11;
      const tmp2 = closure_1_26;
      if (teenIdentity != null) {
        teenIdentity = teenIdentity.teenIdentity;
      }
      return tmp(tmp2, { teenIdentity });
    }
  };
  const CONFIRM_AGE = require("FamilyCenterModalRequestRouting").FamilyCenterModalRequestSections.CONFIRM_AGE;
  const merged1 = Object.assign(obj19);
  obj[CONFIRM_AGE] = obj3;
  const obj4 = {
    render() {
      return closure_1_11(closure_1_27, {});
    }
  };
  const VERIFYING = require("FamilyCenterModalRequestRouting").FamilyCenterModalRequestSections.VERIFYING;
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
      const tmp = unpackModuleId;
      const tmp2 = closure_15;
      if (teenIdentity != null) {
        teenIdentity = teenIdentity.teenIdentity;
      }
      return tmp(tmp2, obj);
    }
  };
  const REQUEST = require("FamilyCenterModalRequestRouting").FamilyCenterModalRequestSections.REQUEST;
  obj[REQUEST] = obj5;
  obj6 = require("NavigatorHeader");
  const obj7 = {
    render() {
      return closure_1_11(closure_1_28, {});
    }
  };
  const INVALID_CODE = require("FamilyCenterModalRequestRouting").FamilyCenterModalRequestSections.INVALID_CODE;
  const merged3 = Object.assign(obj19);
  obj[INVALID_CODE] = obj7;
  const obj8 = {
    render() {
      return closure_1_11(closure_1_29, {});
    }
  };
  const MUST_BE_ADULT = require("FamilyCenterModalRequestRouting").FamilyCenterModalRequestSections.MUST_BE_ADULT;
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
  const SENT = require("FamilyCenterModalRequestRouting").FamilyCenterModalRequestSections.SENT;
  obj[SENT] = obj9;
  obj10 = require("NavigatorHeader");
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
  const ERROR = require("FamilyCenterModalRequestRouting").FamilyCenterModalRequestSections.ERROR;
  obj[ERROR] = obj11;
  obj12 = require("NavigatorHeader");
  return obj;
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
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterModalRequestConfirm(userId) {
  let currentUser;
  let format;
  let formatToPlainString;
  let formatToPlainString2;
  let intl3;
  let intl5;
  let intl6;
  let items1;
  let items2;
  let items4;
  let items5;
  let items6;
  let items7;
  let kFj4h1;
  let kFj4h12;
  let obj12;
  let obj20;
  let obj24;
  let obj6;
  let tmp10;
  let tmp11;
  let tmp22Result;
  let tmp6;
  let tmp7;
  let username2;
  let yiUJNU;
  let obj = userId(navigation[9]);
  const cResult = obj.c(38);
  userId = userId.userId;
  const linkCode = userId.linkCode;
  const teenIdentity = userId.teenIdentity;
  const tmp4 = closure_14();
  const obj2 = userId(navigation[10]);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function s() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = userId(navigation[11]);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[2] !== navigation) {
    const fn2 = function v() {
      const obj = FamilyCenterActionCreatorsDefault;
      const result = obj.clearPendingConnection();
      navigation.push(FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.SENT);
    };
    cResult[2] = navigation;
    cResult[3] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== navigation) {
    const fn3 = function x(arg0) {
      const obj = FamilyCenterUtils;
      const failureCodeForAPIError = obj.getFailureCodeForAPIError(arg0);
      navigation.push(FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.ERROR, { failureCode: failureCodeForAPIError });
    };
    cResult[4] = navigation;
    cResult[5] = fn3;
    tmp11 = fn3;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] === tmp11) {
    let tmp12;
    if (cResult[7] === tmp10) {
      tmp12 = cResult[8];
    }
    const tmpResult2 = userId(navigation[15]);
    const familyCenterActions = tmpResult2.useFamilyCenterActions(tmp12);
    const requestLink = familyCenterActions.requestLink;
    const isRequestingLink = familyCenterActions.isRequestingLink;
    if (cResult[9] === linkCode) {
      if (cResult[10] === requestLink) {
        let tmp14;
        let tmp17Result;
        if (cResult[11] === userId) {
          tmp14 = cResult[12];
        }
        if (cResult[13] === stateFromStores) {
          if (cResult[14] === tmp4.art) {
            if (cResult[15] === tmp4.connectionHeader) {
              if (cResult[16] === tmp4.consent) {
                if (cResult[17] === tmp4.ellipse) {
                  if (cResult[18] === tmp4.ellipseGroup) {
                    if (cResult[19] === tmp4.headerIcons) {
                      if (cResult[20] === tmp4.headerText) {
                        if (cResult[21] === tmp4.teenName) {
                          if (cResult[22] === tmp4.title) {
                            let tmp15;
                            let tmp25;
                            let tmp29;
                            if (cResult[23] === teenIdentity) {
                              tmp15 = cResult[24];
                            }
                            const _Symbol = Symbol;
                            if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                              const tmp28 = closure_11(linkCode(navigation[23]), {});
                              cResult[25] = tmp28;
                              tmp25 = tmp28;
                            } else {
                              tmp25 = cResult[25];
                            }
                            if (cResult[26] !== tmp15) {
                              const obj3 = { children: items1 };
                              items1 = [tmp15, tmp25];
                              const tmp31 = closure_12(userId(navigation[24]).ModalContent, obj3);
                              class A {
                                constructor() {
                                  requestLink(userId, linkCode);
                                }
                              }
                              cResult[26] = tmp15;
                              cResult[27] = tmp31;
                              tmp29 = tmp31;
                            } else {
                              tmp29 = cResult[27];
                            }
                            const _Symbol2 = Symbol;
                            class A {
                              constructor() {
                                requestLink(userId, linkCode);
                              }
                            }
                            if (cResult[29] === tmp14) {
                              let tmp34;
                              let tmp41;
                              if (cResult[30] === isRequestingLink) {
                                tmp34 = cResult[31];
                              }
                              const _Symbol3 = Symbol;
                              if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                                const obj4 = { variant: "secondary", size: "lg", text: intl5.string(userId(navigation[18]).t["ETE/oC"]), onPress: null };
                                const Button = tmp(tmp2[25]).Button;
                                intl5 = tmp(tmp2[18]).intl;
                                class A {
                                  constructor() {
                                    requestLink(userId, linkCode);
                                  }
                                }
                                cResult[32] = closure_11(Button, obj4);
                                const tmp40 = closure_11(Button, obj4);
                              }
                              if (cResult[33] !== tmp34) {
                                const obj5 = { children: closure_12(userId(navigation[28]).ButtonGroup, obj6) };
                                const ModalFooter = tmp(tmp2[27]).ModalFooter;
                                obj6 = { children: items2 };
                                items2 = [tmp34, ];
                                class A {
                                  constructor() {
                                    requestLink(userId, linkCode);
                                  }
                                }
                                const tmp44 = closure_11(ModalFooter, obj5);
                                cResult[33] = tmp34;
                                cResult[34] = tmp44;
                                tmp41 = tmp44;
                              } else {
                                tmp41 = cResult[34];
                              }
                              if (cResult[35] === tmp41) {
                                let tmp45;
                                if (cResult[36] === tmp29) {
                                  tmp45 = cResult[37];
                                }
                                return tmp45;
                              }
                              class A {
                                constructor() {
                                  requestLink(userId, linkCode);
                                }
                              }
                              const items3 = [tmp29, tmp41];
                              tmp47[0] = items3;
                              const tmp48 = closure_12(userId(navigation[29]).ModalScreen, tmp47);
                              cResult[35] = tmp41;
                              cResult[36] = tmp29;
                              cResult[37] = tmp48;
                              tmp45 = tmp48;
                            }
                            const obj7 = { variant: "primary", size: "lg", disabled: isRequestingLink, loading: isRequestingLink, text: tmp33, onPress: tmp14 };
                            const tmp36 = closure_11(userId(navigation[25]).Button, obj7);
                            cResult[29] = tmp14;
                            cResult[30] = isRequestingLink;
                            cResult[31] = tmp36;
                            tmp34 = tmp36;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if (null != teenIdentity) {
          let userAvatarSource;
          const obj10 = { style: tmp4.headerIcons, children: items4 };
          const obj9 = { style: tmp4.connectionHeader, children: items6 };
          class A {
            constructor() {
              requestLink(userId, linkCode);
            }
          }
          const Avatar = tmp(tmp2[16]).Avatar;
          if (null != stateFromStores) {
            const obj8 = linkCode(navigation[17]);
            userAvatarSource = obj8.getUserAvatarSource(stateFromStores);
          }
          const obj11 = { source: userAvatarSource, size: userId(navigation[16]).AvatarSizes.LARGE, accessibilityLabel: formatToPlainString(kFj4h1, obj12) };
          const intl = tmp(tmp2[18]).intl;
          formatToPlainString = intl.formatToPlainString;
          let str;
          kFj4h1 = linkCode(tmp2[19]).kFj4h1;
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
          obj12 = { name: str };
          items4 = [closure_11(Avatar, obj11), , ];
          const obj13 = { style: tmp4.ellipseGroup, children: items5 };
          const obj14 = { style: tmp4.ellipse };
          items5 = [closure_11(View, obj14), , ];
          const obj15 = { style: tmp4.ellipse };
          items5[1] = closure_11(View, obj15);
          const obj16 = { style: tmp4.ellipse };
          items5[2] = closure_11(View, obj16);
          items4[1] = closure_12(View, obj13);
          const obj18 = { source: tmp22Result.getUserAvatarSource(obj19), size: userId(navigation[16]).AvatarSizes.LARGE, accessibilityLabel: formatToPlainString2(kFj4h12, obj20) };
          const Avatar2 = tmp(tmp2[16]).Avatar;
          obj19 = { id: null, avatar: null, discriminator: "0" };
          ({ id: obj17.id, avatar: obj17.avatar } = teenIdentity);
          tmp22Result = linkCode(navigation[17]);
          const intl2 = tmp(tmp2[18]).intl;
          formatToPlainString2 = intl2.formatToPlainString;
          let username = teenIdentity.global_name;
          kFj4h12 = tmp22(tmp2[19]).kFj4h1;
          if (username == null) {
            username = teenIdentity.username;
          }
          obj20 = { name: username };
          items4[2] = closure_11(Avatar2, obj18);
          items6 = [closure_12(View, obj10), , , ];
          const obj21 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp4.title, children: intl3.string(linkCode(navigation[19]).sMmIbm) };
          const Text = tmp(tmp2[20]).Text;
          intl3 = tmp(tmp2[18]).intl;
          items6[1] = closure_11(Text, obj21);
          const obj22 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp4.teenName, children: username2 };
          username2 = teenIdentity.global_name;
          const Text2 = tmp(tmp2[20]).Text;
          if (username2 == null) {
            username2 = teenIdentity.username;
          }
          items6[2] = closure_11(Text2, obj22);
          const obj23 = { variant: "text-sm/medium", color: "text-muted", style: tmp4.consent, children: format(yiUJNU, obj24) };
          const Text3 = tmp(tmp2[20]).Text;
          const intl4 = tmp(tmp2[18]).intl;
          format = intl4.format;
          let username3 = teenIdentity.global_name;
          yiUJNU = tmp22(tmp2[19]).yiUJNU;
          if (username3 == null) {
            username3 = teenIdentity.username;
          }
          obj24 = { username: username3 };
          items6[3] = closure_11(Text3, obj23);
          tmp17Result = tmp17(tmp18, obj9);
        } else {
          const obj25 = { children: items7 };
          const obj26 = { style: tmp4.art, source: linkCode(navigation[22]) };
          class A {
            constructor() {
              requestLink(userId, linkCode);
            }
          }
          items7 = [closure_11(tmp53, obj26), ];
          const obj27 = { style: tmp4.headerText, variant: "text-lg/bold", children: intl6.string(linkCode(navigation[19]).GH11eI) };
          const Text4 = tmp(tmp2[20]).Text;
          intl6 = tmp(tmp2[18]).intl;
          items7[1] = closure_11(Text4, obj27);
          tmp17Result = closure_12(closure_13, obj25);
        }
        cResult[13] = stateFromStores;
        class A {
          constructor() {
            requestLink(userId, linkCode);
          }
        }
        cResult[15] = tmp4.connectionHeader;
        cResult[16] = tmp4.consent;
        cResult[17] = tmp4.ellipse;
        cResult[18] = tmp4.ellipseGroup;
        cResult[19] = tmp4.headerIcons;
        cResult[20] = tmp4.headerText;
        cResult[21] = tmp4.teenName;
        cResult[22] = tmp4.title;
        cResult[23] = teenIdentity;
        cResult[24] = tmp17Result;
        tmp15 = tmp17Result;
      }
    }
    class A {
      constructor() {
        requestLink(userId, linkCode);
      }
    }
    cResult[9] = linkCode;
    cResult[10] = requestLink;
    cResult[11] = userId;
    cResult[12] = A;
    tmp14 = A;
  }
  const obj28 = { onSuccess: tmp10, onError: tmp11 };
  cResult[6] = tmp11;
  cResult[7] = tmp10;
  cResult[8] = obj28;
  tmp12 = obj28;
}) : (function FamilyCenterModalRequestConfirm(userId) {
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
  let obj = userId(navigation[10]);
  navigation = obj.useNavigation();
  const items = [UserStore];
  const obj2 = userId(navigation[11]);
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
  const obj3 = userId(navigation[15]);
  const familyCenterActions = obj3.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  const requestLink = familyCenterActions.requestLink;
  const isRequestingLink = familyCenterActions.isRequestingLink;
  const items3 = [requestLink, userId, linkCode];
  const callback2 = react.useCallback(() => {
    requestLink(userId, linkCode);
  }, items3);
  const ModalScreen = userId(navigation[29]).ModalScreen;
  const ModalContent = userId(navigation[24]).ModalContent;
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
  const ModalFooter = tmp2(tmp3[27]).ModalFooter;
  obj27 = { children: items10 };
  ButtonGroup = tmp2(tmp3[28]).ButtonGroup;
  const obj28 = { variant: "primary", size: "lg", disabled: isRequestingLink, loading: isRequestingLink, text: intl5.string(tmp18(navigation[19]).ISg34l), onPress: callback2 };
  const Button = tmp2(tmp3[25]).Button;
  intl5 = tmp2(tmp3[18]).intl;
  items10 = [tmp19(Button, obj28), ];
  const obj29 = { variant: "secondary", size: "lg", text: intl6.string(userId(navigation[18]).t["ETE/oC"]), onPress: tmp18(navigation[26]).pop };
  const Button2 = tmp2(tmp3[25]).Button;
  intl6 = tmp2(tmp3[18]).intl;
  items10[1] = tmp19(Button2, obj29);
  items9[1] = tmp19(ModalFooter, obj26);
  return closure_12(ModalScreen, obj24);
});
let closure_15 = tmp5;
createStyles = createStyles_mod;
let obj8 = { content: obj9, textWrapper: { alignItems: "center" }, header: obj10, description: { textAlign: "center" }, illustration: rect };
obj9 = { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 };
const createStyles2 = createStyles.createStyles;
obj10 = { marginBottom: nativeDefault.space.PX_8 };
rect = { position: "absolute", bottom: "100%", left: 0, right: 0, alignItems: "center", paddingBottom: nativeDefault.space.PX_24 };
let closure_16 = createStyles2(obj8);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterModalRequestSuccess() {
  let Button;
  let content;
  let currentUser;
  let intl3;
  let items1;
  let items2;
  let obj6;
  let obj9;
  let textWrapper;
  let tmp12;
  let tmp15;
  let tmp19;
  let tmp22;
  let tmp27;
  let tmp5;
  let tmp6;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(25);
  const tmp4 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = useStateFromStores;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function u() {
      const arr = ModalActionCreatorsDefault;
      arr.pop();
    };
    cResult[2] = fn2;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[2];
  }
  if (null === stateFromStores) {
    const arr2 = ModalActionCreatorsDefault;
    let arr = arr2.pop();
  }
  ({ content, textWrapper } = tmp4);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp14 = unpackModuleId(EnvelopeSpotIllustration.EnvelopeSpotIllustration, { scale: 0.7 });
    cResult[3] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] !== tmp4.illustration) {
    const obj2 = { style: tmp4.illustration, children: tmp12 };
    const tmp18 = unpackModuleId(View, obj2);
    cResult[4] = tmp4.illustration;
    cResult[5] = tmp18;
    tmp15 = tmp18;
  } else {
    tmp15 = cResult[5];
  }
  const header = tmp4.header;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(_modDef2568.EpwfZl);
    cResult[6] = stringResult;
    tmp19 = stringResult;
  } else {
    tmp19 = cResult[6];
  }
  if (cResult[7] !== tmp4.header) {
    const obj3 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: header, children: tmp19 };
    const tmp24 = unpackModuleId(Text_Text.Text, obj3);
    cResult[7] = tmp4.header;
    cResult[8] = tmp24;
    tmp22 = tmp24;
  } else {
    tmp22 = cResult[8];
  }
  let email;
  const description = tmp4.description;
  const tmp25 = cResult[9];
  if (stateFromStores != null) {
    email = stateFromStores.email;
  }
  if (tmp25 !== email) {
    const intl2 = tmp(1126).intl;
    const format = intl2.format;
    let email1;
    const dVtWId = _modDef2568.dVtWId;
    if (stateFromStores != null) {
      email1 = stateFromStores.email;
    }
    const obj4 = { email: email1 };
    const formatResult = format(dVtWId, obj4);
    let email2;
    if (stateFromStores != null) {
      email2 = stateFromStores.email;
    }
    cResult[9] = email2;
    cResult[10] = formatResult;
    tmp27 = formatResult;
  } else {
    tmp27 = cResult[10];
  }
  if (cResult[11] === tmp4.description) {
    let tmp32;
    if (cResult[12] === tmp27) {
      tmp32 = cResult[13];
    }
    if (cResult[14] === tmp4.textWrapper) {
      if (cResult[15] === tmp32) {
        if (cResult[16] === tmp15) {
          let tmp34;
          if (cResult[17] === tmp22) {
            tmp34 = cResult[18];
          }
          if (cResult[19] === tmp4.content) {
            let tmp38;
            let tmp42;
            let tmp45;
            if (cResult[20] === tmp34) {
              tmp38 = cResult[21];
            }
            const _Symbol = Symbol;
            if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
              const obj5 = { children: unpackModuleId(Button, obj6) };
              const ModalFooter = tmp(11539).ModalFooter;
              obj6 = { size: "lg", text: intl3.string(intl8.t.cpT0Cq), onPress: tmp9 };
              Button = tmp(5379).Button;
              intl3 = tmp(1126).intl;
              const tmp44 = unpackModuleId(ModalFooter, obj5);
              cResult[22] = tmp44;
              tmp42 = tmp44;
            } else {
              tmp42 = cResult[22];
            }
            if (cResult[23] !== tmp38) {
              const obj7 = { children: items1 };
              items1 = [tmp38, tmp42];
              const tmp47 = authStore2(ModalScreen2.ModalScreen, obj7);
              cResult[23] = tmp38;
              cResult[24] = tmp47;
              tmp45 = tmp47;
            } else {
              tmp45 = cResult[24];
            }
            return tmp45;
          }
          const obj8 = { children: unpackModuleId(View, obj9) };
          obj9 = { style: content, children: tmp34 };
          const ModalContent = tmp(7515).ModalContent;
          const tmp41 = unpackModuleId(ModalContent, obj8);
          cResult[19] = tmp4.content;
          cResult[20] = tmp34;
          cResult[21] = tmp41;
          tmp38 = tmp41;
        }
      }
    }
    const obj10 = { style: textWrapper, children: items2 };
    items2 = [tmp15, tmp22, tmp32];
    const tmp37 = authStore2(View, obj10);
    cResult[14] = tmp4.textWrapper;
    cResult[15] = tmp32;
    cResult[16] = tmp15;
    cResult[17] = tmp22;
    cResult[18] = tmp37;
    tmp34 = tmp37;
  }
  const tmp33 = unpackModuleId(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", style: description, children: tmp27 });
  cResult[11] = tmp4.description;
  cResult[12] = tmp27;
  cResult[13] = tmp33;
  tmp32 = tmp33;
}) : (function FamilyCenterModalRequestSuccess() {
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
  const ModalScreen = tmp2(7514).ModalScreen;
  const obj2 = { style: tmp.content, children: authStore2(View, obj3) };
  obj3 = { style: tmp.textWrapper, children: items1 };
  const obj4 = { style: tmp.illustration, children: unpackModuleId(EnvelopeSpotIllustration.EnvelopeSpotIllustration, { scale: 0.7 }) };
  const ModalContent = tmp2(7515).ModalContent;
  items1 = [unpackModuleId(View, obj4), , ];
  const obj5 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.header, children: intl.string(_modDef2568.EpwfZl) };
  const Text = tmp2(5088).Text;
  intl = tmp2(1126).intl;
  items1[1] = unpackModuleId(Text, obj5);
  const obj6 = { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: format(dVtWId, { email }) };
  const Text2 = tmp2(5088).Text;
  const intl2 = tmp2(1126).intl;
  format = intl2.format;
  email = undefined;
  dVtWId = _modDef2568.dVtWId;
  if (stateFromStores != null) {
    email = stateFromStores.email;
  }
  const obj7 = { children: items2 };
  const obj8 = { children: unpackModuleId(View, obj2) };
  items1[2] = unpackModuleId(Text2, obj6);
  items2 = [unpackModuleId(ModalContent, obj8), ];
  const obj9 = { children: unpackModuleId(Button, obj10) };
  const ModalFooter = tmp2(11539).ModalFooter;
  obj10 = { size: "lg", text: intl3.string(intl8.t.cpT0Cq), onPress: callback };
  Button = tmp2(5379).Button;
  intl3 = tmp2(1126).intl;
  items2[1] = unpackModuleId(ModalFooter, obj9);
  return authStore2(ModalScreen, obj7);
});
let closure_17 = tmp7;
createStyles = createStyles_mod;
let obj11 = { header: { marginBottom: 8, textAlign: "center" }, description: { textAlign: "center" }, ring: size1, iconContainer: size2, positive: obj12, negative: obj13 };
size1 = { display: "flex", justifyContent: "center", alignItems: "center", height: 64, width: 64, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginBottom: 24 };
const createStyles3 = createStyles.createStyles;
size2 = { display: "flex", justifyContent: "center", alignItems: "center", height: 48, width: 48, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj12 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj13 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
let closure_18 = createStyles3(obj11);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterModalRequestError(failureCode) {
  let Button;
  let currentUser;
  let intl;
  let items2;
  let items3;
  let obj6;
  let tmp11;
  let tmp13;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(35);
  failureCode = failureCode.failureCode;
  const tmp4 = closure_18();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function s() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = useStateFromStores;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmp10 = useIsInAdultAgeGroupDefault();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult2 = native;
    const boxShadowStyle = tmpResult2.generateBoxShadowStyle(tmp(1200).FOUR_DP_ELEVATION_SHADOW_PARAMS);
    cResult[2] = boxShadowStyle;
    tmp11 = boxShadowStyle;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function v() {
      const arr = ModalActionCreatorsDefault;
      arr.pop();
    };
    cResult[3] = fn2;
    tmp13 = fn2;
  } else {
    tmp13 = cResult[3];
  }
  _modDef38(null != stateFromStores, "User must be logged in to see this modal.");
  const email = stateFromStores.email;
  if (cResult[4] === metroImportAll[failureCode]) {
    if (cResult[5] === tmp10) {
      let tmp16;
      let tmp17;
      let tmp21;
      if (cResult[6] === email) {
        tmp16 = cResult[7];
        tmp17 = cResult[8];
      }
      const icon = obj4.icon;
      const CHECK = constants2.CHECK;
      const tmp20 = constants2;
      if (cResult[9] !== tmp4.ring) {
        const items1 = [tmp4.ring, tmp11];
        cResult[9] = tmp4.ring;
        cResult[10] = items1;
        tmp21 = items1;
      } else {
        tmp21 = cResult[10];
      }
      const tmp22 = icon === CHECK ? tmp4.positive : tmp4.negative;
      if (cResult[11] === tmp4.iconContainer) {
        let tmp23;
        let tmp24;
        if (cResult[12] === tmp22) {
          tmp23 = cResult[13];
        }
        if (cResult[14] !== icon) {
          let tmp26;
          if (icon === tmp20.CHECK) {
            const obj2 = { source: AssetRegistryDefault2, color: "#FFF" };
            const Icon2 = tmp(1200).Icon;
            tmp26 = unpackModuleId(Icon2, obj2);
          } else {
            const obj3 = { source: AssetRegistryDefault, color: "#FFF" };
            const Icon = tmp(1200).Icon;
            tmp26 = unpackModuleId(Icon, obj3);
          }
          cResult[14] = icon;
          cResult[15] = tmp26;
          tmp24 = tmp26;
        } else {
          tmp24 = cResult[15];
        }
        if (cResult[16] === tmp23) {
          let tmp28;
          if (cResult[17] === tmp24) {
            tmp28 = cResult[18];
          }
          if (cResult[19] === tmp28) {
            let tmp32;
            if (cResult[20] === tmp21) {
              tmp32 = cResult[21];
            }
            if (cResult[22] === tmp4.header) {
              let tmp36;
              if (cResult[23] === tmp16) {
                tmp36 = cResult[24];
              }
              if (cResult[25] === tmp17) {
                let tmp39;
                if (cResult[26] === tmp4.description) {
                  tmp39 = cResult[27];
                }
                if (cResult[28] === tmp32) {
                  if (cResult[29] === tmp36) {
                    let tmp42;
                    let tmp45;
                    let tmp48;
                    if (cResult[30] === tmp39) {
                      tmp42 = cResult[31];
                    }
                    const _Symbol = Symbol;
                    if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                      const obj5 = { children: unpackModuleId(Button, obj6) };
                      const ModalFooter = tmp(11539).ModalFooter;
                      obj6 = { text: intl.string(intl8.t.cpT0Cq), onPress: tmp13 };
                      Button = tmp(5379).Button;
                      intl = tmp(1126).intl;
                      const tmp47 = unpackModuleId(ModalFooter, obj5);
                      cResult[32] = tmp47;
                      tmp45 = tmp47;
                    } else {
                      tmp45 = cResult[32];
                    }
                    if (cResult[33] !== tmp42) {
                      const obj7 = { children: items2 };
                      items2 = [tmp42, tmp45];
                      const tmp50 = authStore2(ModalScreen2.ModalScreen, obj7);
                      cResult[33] = tmp42;
                      cResult[34] = tmp50;
                      tmp48 = tmp50;
                    } else {
                      tmp48 = cResult[34];
                    }
                    return tmp48;
                  }
                }
                const obj8 = { children: items3 };
                items3 = [tmp32, tmp36, tmp39];
                const tmp44 = authStore2(ModalContent2.ModalContent, obj8);
                cResult[28] = tmp32;
                cResult[29] = tmp36;
                cResult[30] = tmp39;
                cResult[31] = tmp44;
                tmp42 = tmp44;
              }
              const obj9 = { variant: "text-sm/medium", color: "text-muted", style: tmp4.description, children: tmp17 };
              const tmp41 = unpackModuleId(Text_Text.Text, obj9);
              cResult[25] = tmp17;
              cResult[26] = tmp4.description;
              cResult[27] = tmp41;
              tmp39 = tmp41;
            }
            const obj10 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp4.header, children: tmp16 };
            const tmp38 = unpackModuleId(Text_Text.Text, obj10);
            cResult[22] = tmp4.header;
            cResult[23] = tmp16;
            cResult[24] = tmp38;
            tmp36 = tmp38;
          }
          const obj11 = { style: tmp21, children: tmp28 };
          const tmp35 = unpackModuleId(View, obj11);
          cResult[19] = tmp28;
          cResult[20] = tmp21;
          cResult[21] = tmp35;
          tmp32 = tmp35;
        }
        const obj12 = { style: tmp23, children: tmp24 };
        const tmp31 = unpackModuleId(View, obj12);
        cResult[16] = tmp23;
        cResult[17] = tmp24;
        cResult[18] = tmp31;
        tmp28 = tmp31;
      }
      const items4 = [tmp4.iconContainer, tmp22];
      cResult[11] = tmp4.iconContainer;
      cResult[12] = tmp22;
      cResult[13] = items4;
      tmp23 = items4;
    }
  }
  const obj13 = { isAdult: tmp10, email };
  const headerResult = metroImportAll[failureCode].header(obj13);
  const descriptionResult = metroImportAll[failureCode].description(obj13);
  cResult[4] = metroImportAll[failureCode];
  cResult[5] = tmp10;
  cResult[6] = email;
  cResult[7] = headerResult;
  cResult[8] = descriptionResult;
  tmp17 = descriptionResult;
  tmp16 = headerResult;
}) : (function FamilyCenterModalRequestError(failureCode) {
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
  const ModalScreen = tmp2(7514).ModalScreen;
  const obj5 = { style: items1, children: unpackModuleId(View, obj6) };
  items1 = [tmp.ring, boxShadowStyle];
  const items2 = [tmp.iconContainer, ];
  obj6 = { style: items2, children: tmp15Result };
  items2[1] = icon === CHECK ? tmp.positive : tmp.negative;
  const ModalContent = tmp2(7515).ModalContent;
  const tmp13 = constants2;
  if (icon === tmp13.CHECK) {
    const obj7 = { source: AssetRegistryDefault2, color: "#FFF" };
    const Icon2 = tmp2(1200).Icon;
    tmp15Result = tmp15(Icon2, obj7);
  } else {
    const obj8 = { source: AssetRegistryDefault, color: "#FFF" };
    const Icon = tmp2(1200).Icon;
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
  const ModalFooter = tmp2(11539).ModalFooter;
  obj14 = { text: intl.string(intl8.t.cpT0Cq), onPress: callback };
  Button = tmp2(5379).Button;
  intl = tmp2(1126).intl;
  items4[1] = unpackModuleId(ModalFooter, obj13);
  return authStore2(ModalScreen, obj9);
});
let closure_19 = tmp9;
createStyles = createStyles_mod;
let closure_20 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
createStyles = createStyles_mod;
let obj14 = { content: { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: 32 }, title: obj15, description: { textAlign: "center" } };
obj15 = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
let closure_22 = createStyles.createStyles(obj14);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterPrereqScreen(arg0) {
  let description;
  let items;
  let items1;
  let obj4;
  let primaryButton;
  let title;
  const obj = react2;
  const cResult = obj.c(16);
  ({ title, description, primaryButton } = arg0);
  const tmp4 = closure_22();
  if (cResult[0] === tmp4.title) {
    let tmp5;
    if (cResult[1] === title) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === description) {
      let tmp7;
      if (cResult[4] === tmp4.description) {
        tmp7 = cResult[5];
      }
      if (cResult[6] === tmp4.content) {
        if (cResult[7] === tmp5) {
          let tmp10;
          if (cResult[8] === tmp7) {
            tmp10 = cResult[9];
          }
          if (cResult[10] === primaryButton.onPress) {
            let tmp14;
            if (cResult[11] === primaryButton.text) {
              tmp14 = cResult[12];
            }
            if (cResult[13] === tmp10) {
              let tmp17;
              if (cResult[14] === tmp14) {
                tmp17 = cResult[15];
              }
              return tmp17;
            }
            const obj2 = { children: items };
            items = [tmp10, tmp14];
            const tmp19 = authStore2(ModalScreen2.ModalScreen, obj2);
            cResult[13] = tmp10;
            cResult[14] = tmp14;
            cResult[15] = tmp19;
            tmp17 = tmp19;
          }
          const obj3 = { children: unpackModuleId(components_Button_Button.Button, obj4) };
          const ModalFooter = tmp(11539).ModalFooter;
          obj4 = { text: null, onPress: null };
          ({ text: obj6.text, onPress: obj6.onPress } = primaryButton);
          const tmp16 = unpackModuleId(ModalFooter, obj3);
          cResult[10] = primaryButton.onPress;
          cResult[11] = primaryButton.text;
          cResult[12] = tmp16;
          tmp14 = tmp16;
        }
      }
      const obj5 = { style: tmp4.content, children: items1 };
      items1 = [tmp5, tmp7];
      const tmp13 = authStore2(View, obj5);
      cResult[6] = tmp4.content;
      cResult[7] = tmp5;
      cResult[8] = tmp7;
      cResult[9] = tmp13;
      tmp10 = tmp13;
    }
    const obj7 = { variant: "text-sm/medium", color: "text-muted", style: tmp4.description, children: description };
    const tmp9 = unpackModuleId(Text_Text.Text, obj7);
    cResult[3] = description;
    cResult[4] = tmp4.description;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const obj13 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp4.title, children: title };
  const tmp6 = unpackModuleId(Text_Text.Text, obj13);
  cResult[0] = tmp4.title;
  cResult[1] = title;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function FamilyCenterPrereqScreen(primaryButton) {
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
});
createStyles = createStyles_mod;
let obj16 = { content: { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: 32 }, art: obj17, title: obj18, description: { textAlign: "center" } };
obj17 = { marginBottom: nativeDefault.space.PX_24 };
const createStyles4 = createStyles.createStyles;
obj18 = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
let closure_24 = createStyles4(obj16);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? (function useNavigateToVerifyingOnPending() {
  let closure_2;
  let tmp5;
  let tmp6;
  let tmp2 = dependencyMap;
  const tmp = navigation;
  const obj = navigation(576);
  const cResult = obj.c(7);
  const obj2 = navigation(1503);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function o() {
      currentUser = currentUser.getCurrentUser();
      let prop;
      if (currentUser != null) {
        prop = currentUser.ageVerificationStatus;
      }
      return prop;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(573);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmp9 = stateFromStores(5922)(stateFromStores);
  dependencyMap = tmp9;
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === navigation) {
      let tmp10;
      let tmp11;
      if (cResult[4] === tmp9) {
        tmp10 = cResult[5];
        tmp11 = cResult[6];
      }
      const effect = react.useEffect(tmp10, tmp11);
    }
  }
  const fn2 = function u() {
    const tmp2 = null != closure_2 && tmp !== stateFromStores && null != stateFromStores && stateFromStores !== Server.AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
    if (tmp2) {
      const replaced = navigation.replace(FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.VERIFYING);
    }
  };
  const items1 = [stateFromStores, tmp9, navigation];
  cResult[2] = stateFromStores;
  cResult[3] = navigation;
  cResult[4] = tmp9;
  cResult[5] = fn2;
  cResult[6] = items1;
  tmp11 = items1;
  tmp10 = fn2;
}) : (function useNavigateToVerifyingOnPending() {
  let closure_2;
  const obj = navigation(1503);
  navigation = obj.useNavigation();
  const items = [UserStore];
  const obj2 = navigation(573);
  const stateFromStores = obj2.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop;
  });
  const tmp3 = stateFromStores(5922)(stateFromStores);
  dependencyMap = tmp3;
  const items1 = [stateFromStores, tmp3, navigation];
  const effect = react.useEffect(() => {
    const tmp2 = null != closure_2 && tmp !== stateFromStores && null != stateFromStores && stateFromStores !== Server.AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
    if (tmp2) {
      const replaced = navigation.replace(FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.VERIFYING);
    }
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterConfirmAgeScreen(teenIdentity) {
  let ButtonGroup;
  let first;
  let intl3;
  let intl4;
  let items;
  let items1;
  let items2;
  let obj6;
  let tmp10;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(22);
  teenIdentity = teenIdentity.teenIdentity;
  const tmp4 = closure_24();
  closure_25();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      const obj = AgeVerificationActionCreatorsDefault;
      const obj2 = { entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint.FAMILY_CENTER_CONNECTION };
      const result = obj.showAgeVerificationGetStartedModal(obj2);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const content = tmp4.content;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp9 = unpackModuleId(FamilyShieldSpotIllustration.FamilyShieldSpotIllustration, {});
    cResult[1] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== tmp4.art) {
    let obj2 = { style: tmp4.art, children: tmp7 };
    const tmp13 = unpackModuleId(View, obj2);
    cResult[2] = tmp4.art;
    cResult[3] = tmp13;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[3];
  }
  let global_name;
  const title = tmp4.title;
  const tmp14 = cResult[4];
  if (teenIdentity != null) {
    global_name = teenIdentity.global_name;
  }
  if (tmp14 === global_name) {
    let tmp18;
    let username;
    const tmp16 = cResult[5];
    if (teenIdentity != null) {
      username = teenIdentity.username;
    }
    if (tmp16 === username) {
      tmp18 = cResult[6];
    }
    if (cResult[7] === tmp4.title) {
      let tmp23;
      let tmp26;
      let tmp29;
      if (cResult[8] === tmp18) {
        tmp23 = cResult[9];
      }
      const _Symbol = Symbol;
      const description = tmp4.description;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const formatResult = intl2.format(_modDef2568["0o3yg8"], { link: "https://support.discord.com/hc/articles/14155060633623" });
        cResult[10] = formatResult;
        tmp26 = formatResult;
      } else {
        tmp26 = cResult[10];
      }
      if (cResult[11] !== tmp4.description) {
        const obj3 = { variant: "text-sm/medium", color: "text-muted", style: description, children: tmp26 };
        const tmp31 = unpackModuleId(Text_Text.Text, obj3);
        cResult[11] = tmp4.description;
        cResult[12] = tmp31;
        tmp29 = tmp31;
      } else {
        tmp29 = cResult[12];
      }
      if (cResult[13] === tmp4.content) {
        if (cResult[14] === tmp29) {
          if (cResult[15] === tmp10) {
            let tmp32;
            let tmp36;
            let tmp40;
            let tmp44;
            if (cResult[16] === tmp23) {
              tmp32 = cResult[17];
            }
            const _Symbol2 = Symbol;
            if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
              const obj4 = { variant: "primary", text: intl3.string(_modDef2568["3oUE4o"]), onPress: first };
              const Button = tmp(5379).Button;
              intl3 = tmp(1126).intl;
              const tmp39 = unpackModuleId(Button, obj4);
              cResult[18] = tmp39;
              tmp36 = tmp39;
            } else {
              tmp36 = cResult[18];
            }
            const _Symbol3 = Symbol;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              const obj5 = { children: authStore2(ButtonGroup, obj6) };
              const ModalFooter = tmp(11539).ModalFooter;
              obj6 = { children: items };
              items = [tmp36, ];
              ButtonGroup = tmp(5958).ButtonGroup;
              const obj7 = {
                variant: "tertiary",
                text: intl4.string(intl8.t.oEAioF),
                onPress() {
                              const arr = ModalActionCreatorsDefault;
                              return arr.pop();
                            }
              };
              const Button2 = tmp(5379).Button;
              intl4 = tmp(1126).intl;
              items[1] = unpackModuleId(Button2, obj7);
              const tmp43 = unpackModuleId(ModalFooter, obj5);
              cResult[19] = tmp43;
              tmp40 = tmp43;
            } else {
              tmp40 = cResult[19];
            }
            if (cResult[20] !== tmp32) {
              const obj8 = { children: items1 };
              items1 = [tmp32, tmp40];
              const tmp46 = authStore2(ModalScreen2.ModalScreen, obj8);
              cResult[20] = tmp32;
              cResult[21] = tmp46;
              tmp44 = tmp46;
            } else {
              tmp44 = cResult[21];
            }
            return tmp44;
          }
        }
      }
      const obj9 = { style: content, children: items2 };
      items2 = [tmp10, tmp23, tmp29];
      const tmp35 = authStore2(View, obj9);
      cResult[13] = tmp4.content;
      cResult[14] = tmp29;
      cResult[15] = tmp10;
      cResult[16] = tmp23;
      cResult[17] = tmp35;
      tmp32 = tmp35;
    }
    const obj10 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: title, children: tmp18 };
    const tmp25 = unpackModuleId(Text_Text.Text, obj10);
    cResult[7] = tmp4.title;
    cResult[8] = tmp18;
    cResult[9] = tmp25;
    tmp23 = tmp25;
  }
  const intl = tmp(1126).intl;
  const formatToPlainString = intl.formatToPlainString;
  let str;
  const pQQMJ7 = _modDef2568.pQQMJ7;
  if (teenIdentity != null) {
    str = teenIdentity.global_name;
  }
  if (str == null) {
    let username1;
    if (teenIdentity != null) {
      username1 = teenIdentity.username;
    }
    str = username1;
  }
  if (str == null) {
    str = "";
  }
  const formatToPlainStringResult = formatToPlainString(pQQMJ7, { username: str });
  let global_name1;
  if (teenIdentity != null) {
    global_name1 = teenIdentity.global_name;
  }
  cResult[4] = global_name1;
  let username2;
  if (teenIdentity != null) {
    username2 = teenIdentity.username;
  }
  cResult[5] = username2;
  cResult[6] = formatToPlainStringResult;
  tmp18 = formatToPlainStringResult;
}) : (function FamilyCenterConfirmAgeScreen(teenIdentity) {
  let ButtonGroup;
  let formatToPlainString;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let items2;
  let obj7;
  let pQQMJ7;
  let str;
  teenIdentity = teenIdentity.teenIdentity;
  const tmp = closure_24();
  closure_25();
  const callback = react.useCallback(() => {
    const obj = AgeVerificationActionCreatorsDefault;
    const obj2 = { entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint.FAMILY_CENTER_CONNECTION };
    const result = obj.showAgeVerificationGetStartedModal(obj2);
  }, []);
  let obj = { style: tmp.content, children: items };
  let obj2 = { style: tmp.art, children: unpackModuleId(FamilyShieldSpotIllustration.FamilyShieldSpotIllustration, {}) };
  const ModalScreen = ModalScreen2.ModalScreen;
  items = [unpackModuleId(View, obj2), , ];
  const obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: formatToPlainString(pQQMJ7, { username: str }) };
  const Text = Text_Text.Text;
  const intl = intl8.intl;
  formatToPlainString = intl.formatToPlainString;
  str = undefined;
  pQQMJ7 = _modDef2568.pQQMJ7;
  const tmp7 = View;
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
  const obj4 = { children: items1 };
  items[1] = unpackModuleId(Text, obj3);
  const obj5 = { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: intl2.format(_modDef2568["0o3yg8"], { link: "https://support.discord.com/hc/articles/14155060633623" }) };
  const Text2 = tmp5(5088).Text;
  intl2 = tmp5(1126).intl;
  items[2] = unpackModuleId(Text2, obj5);
  items1 = [authStore2(tmp7, obj), ];
  const obj6 = { children: authStore2(ButtonGroup, obj7) };
  const ModalFooter = tmp5(11539).ModalFooter;
  obj7 = { children: items2 };
  ButtonGroup = tmp5(5958).ButtonGroup;
  const obj8 = { variant: "primary", text: intl3.string(_modDef2568["3oUE4o"]), onPress: callback };
  const Button = tmp5(5379).Button;
  intl3 = tmp5(1126).intl;
  items2 = [unpackModuleId(Button, obj8), ];
  const obj9 = {
    variant: "tertiary",
    text: intl4.string(intl8.t.oEAioF),
    onPress() {
      const arr = ModalActionCreatorsDefault;
      return arr.pop();
    }
  };
  const Button2 = tmp5(5379).Button;
  intl4 = tmp5(1126).intl;
  items2[1] = unpackModuleId(Button2, obj9);
  items1[1] = unpackModuleId(ModalFooter, obj6);
  return authStore2(ModalScreen, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterVerifyingScreen() {
  let obj6;
  let stateFromStores;
  let tmp7;
  let tmp8;
  let tmp = navigation;
  let obj = navigation(stateFromStores[9]);
  const cResult = obj.c(13);
  const tmp4 = closure_20();
  const obj2 = navigation(stateFromStores[10]);
  navigation = obj2.useNavigation();
  const obj3 = navigation(stateFromStores[41]);
  const isAgeVerified = obj3.useIsAgeVerified();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function s() {
      currentUser = currentUser.getCurrentUser();
      let prop;
      if (currentUser != null) {
        prop = currentUser.ageVerificationStatus;
      }
      return prop;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult = tmp(stateFromStores[11]);
  stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  const ref = react.useRef(false);
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === isAgeVerified) {
      let tmp11;
      let tmp12;
      let tmp15;
      let tmp14;
      let tmp17;
      let tmp19;
      if (cResult[4] === navigation) {
        tmp11 = cResult[5];
        tmp12 = cResult[6];
      }
      const effect = obj5.useEffect(tmp11, tmp12);
      if (cResult[7] !== navigation) {
        class E {
          constructor() {
            closure_0 = setTimeout(() => {
              const obj = { failureCode: constants.GENERIC_ERROR };
              const replaced = closure_0.replace(navigation(stateFromStores[13]).FamilyCenterModalRequestSections.ERROR, obj);
            }, closure_1_7);
            return () => clearTimeout(closure_0);
          }
        }
        const items1 = [navigation];
        cResult[7] = navigation;
        cResult[8] = E;
        cResult[9] = items1;
        tmp15 = items1;
        tmp14 = E;
      } else {
        class E {
          constructor() {
            closure_0 = setTimeout(() => {
              const obj = { failureCode: constants.GENERIC_ERROR };
              const replaced = closure_0.replace(navigation(stateFromStores[13]).FamilyCenterModalRequestSections.ERROR, obj);
            }, closure_1_7);
            return () => clearTimeout(closure_0);
          }
        }
        tmp15 = cResult[9];
      }
      const effect1 = obj5.useEffect(tmp14, tmp15);
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            closure_0 = setTimeout(() => {
              const obj = { failureCode: constants.GENERIC_ERROR };
              const replaced = closure_0.replace(navigation(stateFromStores[13]).FamilyCenterModalRequestSections.ERROR, obj);
            }, closure_1_7);
            return () => clearTimeout(closure_0);
          }
        }
        const tmp18 = closure_11(tmp(stateFromStores[35]).ActivityIndicator, {});
        cResult[10] = tmp18;
        tmp17 = tmp18;
      } else {
        class E {
          constructor() {
            closure_0 = setTimeout(() => {
              const obj = { failureCode: constants.GENERIC_ERROR };
              const replaced = closure_0.replace(navigation(stateFromStores[13]).FamilyCenterModalRequestSections.ERROR, obj);
            }, closure_1_7);
            return () => clearTimeout(closure_0);
          }
        }
      }
      if (cResult[11] !== tmp4.container) {
        class E {
          constructor() {
            closure_0 = setTimeout(() => {
              const obj = { failureCode: constants.GENERIC_ERROR };
              const replaced = closure_0.replace(navigation(stateFromStores[13]).FamilyCenterModalRequestSections.ERROR, obj);
            }, closure_1_7);
            return () => clearTimeout(closure_0);
          }
        }
        const obj4 = { children: closure_11(View, obj6) };
        obj6 = { style: tmp4.container, children: tmp17 };
        const ModalScreen = tmp(tmp2[29]).ModalScreen;
        const tmp21 = closure_11(ModalScreen, obj4);
        cResult[11] = tmp4.container;
        cResult[12] = tmp21;
        tmp19 = tmp21;
      } else {
        class E {
          constructor() {
            closure_0 = setTimeout(() => {
              const obj = { failureCode: constants.GENERIC_ERROR };
              const replaced = closure_0.replace(navigation(stateFromStores[13]).FamilyCenterModalRequestSections.ERROR, obj);
            }, closure_1_7);
            return () => clearTimeout(closure_0);
          }
        }
      }
      return tmp19;
    }
  }
  const fn2 = function f() {
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
  };
  const items2 = [isAgeVerified, stateFromStores, navigation];
  cResult[2] = stateFromStores;
  cResult[3] = isAgeVerified;
  cResult[4] = navigation;
  cResult[5] = fn2;
  cResult[6] = items2;
  tmp12 = items2;
  tmp11 = fn2;
}) : (function FamilyCenterVerifyingScreen() {
  let obj5;
  let stateFromStores;
  let tmp = closure_20();
  let obj = navigation(stateFromStores[10]);
  navigation = obj.useNavigation();
  const obj2 = navigation(stateFromStores[41]);
  const isAgeVerified = obj2.useIsAgeVerified();
  const items = [UserStore];
  const obj3 = navigation(stateFromStores[11]);
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
      const replaced = closure_0.replace(navigation(stateFromStores[13]).FamilyCenterModalRequestSections.ERROR, obj);
    }, closure_1_7);
    return () => clearTimeout(closure_0);
  }, items2);
  const obj4 = { children: closure_11(View, obj5) };
  obj5 = { style: tmp.container, children: closure_11(navigation(stateFromStores[35]).ActivityIndicator, {}) };
  const ModalScreen = navigation(stateFromStores[29]).ModalScreen;
  return closure_11(ModalScreen, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterPrereqInvalidCodeScreen() {
  let first;
  let intl;
  let intl2;
  let intl3;
  let obj3;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: intl.string(_modDef2568.ewSb6o), description: intl2.string(_modDef2568.jcUN2F), primaryButton: obj3 };
    intl = tmp(1126).intl;
    intl2 = tmp(1126).intl;
    obj3 = { text: intl3.string(intl8.t.WAI6xu), onPress: ModalActionCreatorsDefault.pop };
    intl3 = tmp(1126).intl;
    const tmp8 = unpackModuleId(closure_23, obj2);
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function FamilyCenterPrereqInvalidCodeScreen() {
  let intl;
  let intl2;
  let intl3;
  let obj2;
  const obj = { title: intl.string(_modDef2568.ewSb6o), description: intl2.string(_modDef2568.jcUN2F), primaryButton: obj2 };
  intl = intl8.intl;
  intl2 = intl8.intl;
  obj2 = { text: intl3.string(intl8.t.WAI6xu), onPress: ModalActionCreatorsDefault.pop };
  intl3 = intl8.intl;
  return unpackModuleId(closure_23, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterPrereqMustBeAdultScreen() {
  let first;
  let intl;
  let intl2;
  let intl3;
  let obj3;
  let obj4;
  let obj5;
  let tmp6;
  let obj = react2;
  const cResult = obj.c(2);
  closure_25();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const obj = AgeVerificationActionCreatorsDefault;
      const obj2 = { entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint.FAMILY_CENTER_CONNECTION };
      const result = obj.showAgeVerificationGetStartedModal(obj2);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { title: intl.string(_modDef2568.BQFHXW), description: intl2.format(_modDef2568.WDjaKn, obj3), primaryButton: obj5 };
    intl = tmp(1126).intl;
    intl2 = tmp(1126).intl;
    obj3 = { link: obj4 };
    obj4 = { onClick: first };
    obj5 = { text: intl3.string(intl8.t["NX+WJN"]), onPress: ModalActionCreatorsDefault.pop };
    intl3 = tmp(1126).intl;
    const tmp10 = unpackModuleId(closure_23, obj2);
    cResult[1] = tmp10;
    tmp6 = tmp10;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6;
}) : (function FamilyCenterPrereqMustBeAdultScreen() {
  let intl;
  let intl2;
  let intl3;
  let obj2;
  let obj3;
  closure_25();
  let obj = { title: intl.string(_modDef2568.BQFHXW), description: intl2.format(_modDef2568.WDjaKn, obj2), primaryButton: obj3 };
  const callback = react.useCallback(() => {
    const obj = AgeVerificationActionCreatorsDefault;
    const obj2 = { entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint.FAMILY_CENTER_CONNECTION };
    const result = obj.showAgeVerificationGetStartedModal(obj2);
  }, []);
  intl = intl8.intl;
  intl2 = intl8.intl;
  obj2 = { link: { onClick: callback } };
  obj3 = { text: intl3.string(intl8.t["NX+WJN"]), onPress: ModalActionCreatorsDefault.pop };
  intl3 = intl8.intl;
  return unpackModuleId(closure_23, obj);
});
let obj19 = {
  headerShown: true,
  headerLeft: NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
  headerTitle() {
    return null;
  }
};
NavigatorHeader = NavigatorHeader_mod;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterRequestModal(arg0) {
  let linkCode;
  let userId;
  const obj = react2;
  const cResult = obj.c(6);
  ({ userId, linkCode } = arg0);
  if (cResult[0] === linkCode) {
    let tmp4;
    let tmp7;
    let tmp9;
    if (cResult[1] === userId) {
      tmp4 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(intl8.t["13/7kX"]);
      cResult[3] = stringResult;
      tmp7 = stringResult;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== tmp4) {
      const obj2 = { initialRouteName: FamilyCenterModalRequestRouting.FamilyCenterModalRequestSections.PREREQ_LOADING, screens: tmp4, headerBackTitle: tmp7 };
      const Modal = tmp(10602).Modal;
      const tmp11 = unpackModuleId(Modal, obj2);
      cResult[4] = tmp4;
      cResult[5] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[5];
    }
    return tmp9;
  }
  const tmp5 = getScreens(userId, linkCode);
  cResult[0] = linkCode;
  cResult[1] = userId;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : (function FamilyCenterRequestModal(userId) {
  let intl;
  userId = userId.userId;
  const linkCode = userId.linkCode;
  const items = [linkCode, userId];
  const memo = react.useMemo(() => getScreens(userId, linkCode), items);
  const obj = { initialRouteName: userId(11529).FamilyCenterModalRequestSections.PREREQ_LOADING, screens: memo, headerBackTitle: intl.string(userId(1126).t["13/7kX"]) };
  const Modal = userId(10602).Modal;
  intl = userId(1126).intl;
  return closure_11(Modal, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalRequest.tsx");

export default tmp11;
export const FamilyCenterModalRequestConfirm = tmp5;
export const FamilyCenterModalRequestSuccess = tmp7;
export const FamilyCenterModalRequestError = tmp9;
