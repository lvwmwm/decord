// Module ID: 12182
// Function ID: 12183
// Name: RedesignContactSyncModal
// Dependencies: [5, 32, 19, 17, 1372, 1980, 12174, 12175, 1074, 5045, 21, 4836, 576, 5994, 12173, 4832, 1115, 12177, 12183, 1613, 1485, 504, 12181, 1364, 1094, 1241, 4800, 12184, 1981, 5451, 5437, 12185, 12186, 12189, 12192, 12193, 12194, 12195, 12197, 1249, 5936, 12199, 12200, 6421, 2]
// Exports: ContactSyncOnboardingModal

// Module 12182 (RedesignContactSyncModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5045 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12173 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12177 */;
import RedesignContactSyncDiscoverabilityFooterDefault from "RedesignContactSyncDiscoverabilityFooter" /* 12183 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import AppStateStore from "AppStateStore" /* 1980 */;
import ContactSyncModalStore from "ContactSyncModalStore" /* 12174 */;
import ContactSyncConstants from "ContactSyncConstants" /* 12175 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3, dependencyMap, navigation;

let c10;
let c9;
let closure_12;
let closure_16;
let closure_17;
let closure_18;
let map1;
let obj2;
let unpackModuleId;
function headerTitle() {
  return null;
}
function headerLeft() {
  return null;
}
function OnboardingTrailingLanding() {
  let format;
  let obj2;
  let obj3;
  let prop;
  const obj = { style: closure_19().landingTrailing, variant: "text-sm/medium", color: "text-muted", children: format(prop, obj2) };
  const Text = Text_Text.Text;
  const intl = intl3.intl;
  format = intl.format;
  obj2 = { learnMoreUrl: obj3.getOpenLearnMoreUrl() };
  prop = intl3.t["84S6+Z"];
  obj3 = ContactSyncUtils;
  return authStore3(Text, obj);
}
function OnboardingTrailing(isOnboarding) {
  let tmp3Result;
  if (isOnboarding.isOnboarding) {
    tmp3Result = tmp3(OnboardingTrailingLanding, {});
  } else {
    const obj = { discoverabilityEnabled: tmp, onValueChanged: tmp2 };
    tmp3Result = tmp3(RedesignContactSyncDiscoverabilityFooterDefault, obj);
  }
  return tmp3Result;
}
function ContactSyncLandingScreen(openSettingsSheet) {
  let error;
  let intl;
  let intl2;
  let loading;
  let permissionState;
  let setLoading;
  openSettingsSheet = openSettingsSheet.openSettingsSheet;
  ({ loading, setLoading } = openSettingsSheet);
  let onComplete = openSettingsSheet.onComplete;
  let discoverabilityEnabled;
  let currentUser;
  let onNext;
  let stateFromStores1;
  const tmp2 = setLoading;
  const tmp3 = onComplete;
  let tmp = closure_19();
  const bottom = setLoading(onComplete[19])().bottom;
  const tmp4 = openSettingsSheet;
  let obj = openSettingsSheet(onComplete[20]);
  navigation = obj.useNavigation();
  let obj2 = openSettingsSheet(onComplete[21]);
  const items = [currentUser];
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  let phone;
  if (stateFromStores != null) {
    phone = stateFromStores.phone;
  }
  let obj3 = phone;
  ({ permissionState, error } = closure_10());
  const tmp8 = closure_10();
  const tmp9 = stateFromStores(phone.useState(true), 2);
  discoverabilityEnabled = tmp9[0];
  let tmp11 = tmp9[1];
  let tmp12 = closure_11();
  currentUser = tmp12;
  let email;
  const useCallback = phone.useCallback;
  if (stateFromStores != null) {
    email = stateFromStores.email;
  }
  const items1 = [email, discoverabilityEnabled, tmp12, navigation, setLoading, phone];
  onNext = useCallback(() => {
    let user;
    const tmp = setLoading(true);
    let timerId = setTimeout(_asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let closure_1;
      let tmp15;
      if (c3 === 2) {
        c3 = 3;
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
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const tmp26 = currentUser;
              if (!tmp26) {
                let tmp12 = discoverabilityEnabled;
                const updateDiscoverability = tmp(c2[22]).updateDiscoverability;
                const tmp10 = tmp(c2[22]);
                const tmp11 = discoverabilityEnabled;
                if (tmp12) {
                  let email;
                  if (user != null) {
                    email = user.email;
                  }
                  tmp12 = null != email;
                }
                const obj4 = { email: tmp12, phone: tmp15 };
                tmp15 = tmp11 && null != phone;
                c2 = 2;
                c3 = 1;
                const obj6 = { value: updateDiscoverability(obj4), done: false };
                return obj6;
              }
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              const _setTimeout = setTimeout;
              const timerId = setTimeout(() => closure_1_1(false), 2000);
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          }
          const obj5 = tmp(c2[14]);
          c2 = 1;
          c3 = 1;
          const obj8 = { value: obj5.startContactSync(closure_129_3), done: false };
          return obj8;
        } catch (tmp22) {
          c3 = 3;
          throw tmp22;
        }
      }
    }), 25);
  }, items1);
  const items2 = [onNext];
  const tmp4Result = tmp4(tmp3[21]);
  stateFromStores1 = tmp4Result.useStateFromStores(items2, () => callback.getState(), []);
  const items3 = [stateFromStores1];
  const effect = obj3.useEffect(() => {
    const obj = PlatformUtils;
    const isAndroidResult = obj.isAndroid() && stateFromStores1 === tmp(1094).AppStates.ACTIVE;
    if (isAndroidResult) {
      const tmpResult = ContactSyncModalActionCreators;
      const result = tmpResult.refreshContactSyncPermissionStatus();
    }
  }, items3);
  const items4 = [openSettingsSheet];
  const effect1 = obj3.useEffect(() => {
    const tmp = openSettingsSheet;
    if (tmp) {
      const obj2 = { type: "Contact Sync", location: { page: "Contact Sync" } };
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.OPEN_POPOUT, obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.openLazy(asyncRequire(12184, dependencyMap.paths), "Contact Sync Info Settings");
    }
  }, items4);
  const items5 = [onNext, onComplete];
  const callback1 = obj3.useCallback(navigation(function*(arg0, value) {
    let c2;
    let closure_0;
    let v1;
    if (onComplete === 2) {
      onComplete = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        onComplete = 2;
        if (0 === setLoading) {
          if (arg0 === 1) {
            onComplete = 3;
            throw value;
          } else if (arg0 === 2) {
            onComplete = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const obj4 = setLoading(onComplete[29]);
            setLoading = 1;
            onComplete = 1;
            const obj5 = { value: obj4.requestPermission(constants.CONTACTS), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          onComplete = 3;
          throw value;
        } else if (arg0 === 2) {
          onComplete = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          if (value) {
            closure_128_8();
          } else {
            const obj7 = { onComplete: closure_128_2, skip: true };
            const obj = tmp3(onComplete[14]);
            const result = obj.closeContactSyncModal(obj7);
          }
          onComplete = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp14) {
        onComplete = 3;
        throw tmp14;
      }
    }
  }), items5);
  const items6 = [closure_16(tmp2(tmp3[30]), { absolute: true }), ];
  const items7 = [tmp.container, ];
  let num = 16;
  const tmp22 = discoverabilityEnabled;
  const tmp19 = closure_18;
  const tmp20 = closure_17;
  if (bottom > 0) {
    num = bottom;
  }
  let obj4 = { style: items7, children: null };
  items7[1] = { paddingBottom: num };
  if (!tmp12) {
    let tmp21Result;
    if (permissionState === constants.AUTHORIZED) {
      let obj5 = { onNext, error, loading, discoverabilityEnabled, setDiscoverabilityEnabled: tmp11 };
      tmp21Result = tmp21(tmp2(tmp3[33]), obj5);
    }
    let obj6 = { children: items6 };
    obj4.children = tmp21Result;
    items6[1] = closure_16(tmp22, obj4);
    return tmp19(tmp20, obj6);
  }
  let obj7 = {
    title: intl.string(tmp4(tmp3[16]).t.DjcfHu),
    subtitle: intl2.string(tmp4(tmp3[16]).t["kq+Cd3"]),
    trailing: tmp21(OnboardingTrailing, { isOnboarding: tmp12, discoverabilityEnabled, setDiscoverabilityEnabled: tmp11 }),
    header: tmp21(tmp2(tmp3[32]), {}),
    loading,
    showSkip: tmp12,
    onAllow: callback1,
    onDontAllow() {
      const obj = ContactSyncModalActionCreators;
      const obj2 = { onComplete, skip: true };
      const result = obj.closeContactSyncModal(obj2);
    }
  };
  const tmp2Result = tmp2(tmp3[31]);
  intl = tmp4(tmp3[16]).intl;
  intl2 = tmp4(tmp3[16]).intl;
  tmp21Result = tmp21(tmp2Result, obj7);
}
function ContactSyncNameInputScreen(navigateToLandingPage) {
  let closure_2;
  let error;
  let isNameFromContactBook;
  let loading;
  let obj3;
  let str;
  let tmp11;
  let tmp12;
  navigation = undefined;
  loading = undefined;
  dependencyMap = undefined;
  let onNext;
  navigateToLandingPage = navigateToLandingPage.navigateToLandingPage;
  const tmp = closure_19();
  let obj = navigation(1485);
  navigation = obj.useNavigation();
  [loading, dependencyMap] = react.useState(false);
  const tmp5 = closure_10();
  const name = tmp5.name;
  ({ isNameFromContactBook, error } = tmp5);
  loading(12192)(navigation, navigateToLandingPage);
  const useCallback = react.useCallback;
  let closure_0 = onNext(function*(arg0, value) {
    let obj2;
    let v1;
    closure_0 = arg0;
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
            let closure_1 = tmp;
            c2(true);
            closure_2_9(closure_0);
            c2 = 1;
            c3 = 1;
            const obj5 = { value: obj2.startContactSync(closure_0), done: false };
            obj2 = closure_0(closure_2_2[14]);
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => v1(false), 2000);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp16) {
        c3 = 3;
        throw tmp16;
      }
    }
  });
  const items = [navigation];
  onNext = useCallback(function() {
    return closure_0(...arguments);
  }, items);
  const items1 = [loading, onNext, navigation];
  const layoutEffect = react.useLayoutEffect(() => {
    let disabled;
    let obj = {
      headerRight() {
        const obj = {
          insideNavigator: true,
          disabled,
          onPress() {
            closure_1_3("");
          }
        };
        return closure_2_16(first(closure_2[35]), obj);
      }
    };
    navigation.setOptions(obj);
  }, items1);
  let obj2 = { style: tmp.container, children: tmp9(tmp11, obj3) };
  obj3 = { onNext, error, loading, initialName: str, prefilledFromContactBook: tmp12 };
  str = name;
  const tmp10 = View;
  tmp11 = loading(12194);
  if (name == null) {
    str = "";
  }
  tmp12 = null != name && "" !== name && isNameFromContactBook;
  return closure_16(tmp10, obj2);
}
function ContactSyncSuggestionScreen(onComplete) {
  let tmp10;
  onComplete = onComplete.onComplete;
  let suggestions;
  const tmp = closure_19();
  let obj = onComplete(suggestions[20]);
  navigation = obj.useNavigation();
  suggestions = closure_10().suggestions;
  let obj2 = onComplete(suggestions[34]);
  obj2.useBackHandlerMinimizeApp();
  const items = [onComplete, suggestions.length];
  const callback = react.useCallback((skip, friendsAdded) => {
    const obj = ContactSyncModalActionCreators;
    const obj2 = { onComplete, skip, friendsFound: suggestions.length, friendsAdded };
    const result = obj.closeContactSyncModal(obj2);
  }, items);
  const items1 = [callback, navigation, onComplete, suggestions.length];
  const layoutEffect = react.useLayoutEffect(() => {
    let obj = {
      headerRight() {
        const obj = {
          insideNavigator: true,
          onPress() {
            return closure_1_3(true, 0);
          }
        };
        return closure_2_16(navigation(suggestions[35]), obj);
      }
    };
    navigation.setOptions(obj);
  }, items1);
  if (suggestions.length > 0) {
    const obj3 = {
      friendSuggestions: suggestions,
      onSubmit(arg0) {
          const obj = ContactSyncModalActionCreators;
          return obj.bulkAddFriendSuggestions(arg0, onComplete);
        }
    };
    tmp10 = closure_16(navigation(tmp2[37]), obj3);
  } else {
    const obj4 = { style: tmp.container, children: closure_16(navigation(suggestions[38]), {}) };
    tmp10 = closure_16(View, obj4);
  }
  return tmp10;
}
class ContactSyncModal {
  constructor(onComplete) {
    let initialRoutes;
    let intl;
    let loading;
    let openSettingsSheet;
    let setLoading;
    onComplete = onComplete.onComplete;
    ({ initialRoutes, openSettingsSheet } = onComplete);
    loading = undefined;
    setLoading = undefined;
    let memo;
    [loading, setLoading] = memo.useState(false);
    const tmp3 = closure_11();
    _slicedToArray = tmp3;
    const items = [tmp3];
    const effect = memo.useEffect(() => {
      const tmp = isOnboarding;
      if (tmp) {
        const obj = ContactSyncModalActionCreators;
        const result = obj.refreshContactSyncPermissionStatus();
      }
    }, items);
    const items1 = [onComplete];
    memo = memo.useMemo(() => {
      let fn = onComplete;
      if (onComplete == null) {
        fn = () => {

        };
      }
      return fn;
    }, items1);
    const items2 = [tmp3, loading, openSettingsSheet, memo];
    const items3 = [tmp3, memo];
    const memo1 = memo.useMemo(() => {
      let closure_129_0;
      let closure_129_1;
      let closure_129_2;
      let closure_129_3;
      let closure_129_4;
      let headerCloseButton;
      function render() {
        const obj = { navigateToLandingPage };
        return closure_2_16(closure_2_25, obj);
      }
      const render2 = function render() {
        const obj = { onComplete };
        return closure_2_16(closure_2_26, obj);
      };
      function headerLeft(arg0) {
        const obj = { navigateToLandingPage };
        const tmp = openSettingsSheet(loading[41]);
        const merged = Object.assign(arg0);
        return closure_2_16(tmp, obj);
      }
      const render3 = function render() {
        return closure_1_16(onComplete(loading[42]).AddPhoneScreen, {});
      };
      const headerLeft2 = function headerLeft(arg0) {
        const obj = { navigateToLandingPage };
        const tmp = openSettingsSheet(loading[41]);
        const merged = Object.assign(arg0);
        return closure_2_16(tmp, obj);
      };
      const render4 = function render() {
        return closure_1_16(onComplete(loading[42]).VerifyPhoneScreen, {});
      };
      const headerLeft3 = function headerLeft(arg0) {
        const obj = { navigateToLandingPage };
        const tmp = openSettingsSheet(loading[41]);
        const merged = Object.assign(arg0);
        return closure_2_16(tmp, obj);
      };
      const render5 = function render() {
        return closure_1_16(onComplete(loading[42]).VerifyPasswordScreen, {});
      };
      let obj = { isOnboarding, loading, setLoading, openSettingsSheet, onComplete: memo };
      ({ loading: closure_129_0, setLoading: closure_129_1, openSettingsSheet: closure_129_2, onComplete: closure_129_3, navigateToLandingPage: closure_129_4 } = obj);
      let tmp = map1;
      let obj2 = {
        ignoreKeyboard: true,
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.CONTACT_SYNC_START,
        impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW },
        fullscreen: true,
        headerTitle,
        headerLeft: headerCloseButton,
        render() {
          const obj = { onComplete, openSettingsSheet, loading, setLoading };
          return closure_2_16(closure_2_24, obj);
        }
      };
      isOnboarding = obj.isOnboarding;
      const WELCOME = map1.WELCOME;
      ({ impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW });
      if (isOnboarding) {
        headerCloseButton = headerLeft;
      } else {
        const tmp2Result = NavigatorHeader;
        headerCloseButton = tmp2Result.getHeaderCloseButton(() => {
          const obj = closure_2_0(loading[14]);
          const obj2 = { onComplete, skip: true };
          return obj.closeContactSyncModal(obj2);
        });
      }
      const obj4 = { [WELCOME]: obj2 };
      const NAME_INPUT = tmp.NAME_INPUT;
      obj4[NAME_INPUT] = { ignoreKeyboard: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.CONTACT_SYNC_INPUT_NAME, impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW }, fullscreen: true, headerTitle, headerLeft, render };
      const obj5 = { ignoreKeyboard: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.CONTACT_SYNC_INPUT_NAME, impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW }, fullscreen: true, headerTitle, headerLeft, render };
      ({ impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW });
      const SUGGESTIONS = tmp.SUGGESTIONS;
      obj4[SUGGESTIONS] = { ignoreKeyboard: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.CONTACT_SYNC_SUGGESTIONS, impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW }, fullscreen: true, headerTitle, headerLeft, render: render2 };
      const obj7 = { ignoreKeyboard: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.CONTACT_SYNC_SUGGESTIONS, impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW }, fullscreen: true, headerTitle, headerLeft, render: render2 };
      ({ impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW });
      const ADD_PHONE = tmp.ADD_PHONE;
      obj4[ADD_PHONE] = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_ADD_PHONE, impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW }, fullscreen: true, headerTitle, headerLeft, render: render3 };
      const obj9 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_ADD_PHONE, impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW }, fullscreen: true, headerTitle, headerLeft, render: render3 };
      ({ impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW });
      const VERIFY_PHONE = tmp.VERIFY_PHONE;
      obj4[VERIFY_PHONE] = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFY_PHONE, impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW }, fullscreen: true, headerTitle, headerLeft: headerLeft2, render: render4 };
      const obj11 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFY_PHONE, impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW }, fullscreen: true, headerTitle, headerLeft: headerLeft2, render: render4 };
      ({ impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW });
      const VERIFY_PASSWORD = tmp.VERIFY_PASSWORD;
      obj4[VERIFY_PASSWORD] = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFY_PASSWORD, impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW }, fullscreen: true, headerLeft: headerLeft3, headerTitle, render: render5 };
      const obj13 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFY_PASSWORD, impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW }, fullscreen: true, headerLeft: headerLeft3, headerTitle, render: render5 };
      ({ impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CONTACT_SYNC_FLOW });
      return obj4;
    }, items2);
    const effect1 = memo.useEffect(() => () => {
      const tmp = !isOnboarding;
      if (tmp) {
        const obj2 = { onComplete };
        const obj = onComplete(first[14]);
        const result = obj.closeContactSyncModal(obj2);
      }
    }, items3);
    let obj = { screens: memo1, initialRouteStack: initialRoutes, headerBackTitle: intl.string(onComplete(loading[16]).t["13/7kX"]) };
    const Navigator = onComplete(loading[43]).Navigator;
    const tmp8 = closure_16;
    if (initialRoutes == null) {
      let obj2 = { name: constants2.WELCOME };
      const items4 = [obj2];
      initialRoutes = items4;
    }
    intl = tmp9(tmp10[16]).intl;
    return tmp8(Navigator, obj);
  }
}
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ setName: c9, useContactSyncModalStore: c10, useIsOnboarding: unpackModuleId } = ContactSyncModalStore);
({ ContactPermissions: closure_12, ContactSyncScenes: map1 } = ContactSyncConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = Fragment);
let obj = { container: obj2, landingTrailing: { textAlign: "center" } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + 32 };
let closure_19 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/contact_sync/native/components/RedesignContactSyncModal.tsx");

export default ContactSyncModal;
export const ContactSyncOnboardingModal = function ContactSyncOnboardingModal(onComplete) {
  const obj = { onComplete: onComplete.route.params.onComplete, openSettingsSheet: onComplete.openSettingsSheet, initialRoutes: onComplete.initialRoutes };
  return authStore3(ContactSyncModal, obj);
};
