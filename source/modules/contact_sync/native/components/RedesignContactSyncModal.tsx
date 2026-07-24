// Module ID: 11741
// Function ID: 91185
// Name: headerTitle
// Dependencies: [5, 57, 31, 27, 1849, 6651, 11733, 11734, 653, 4344, 33, 4130, 689, 5084, 11732, 4126, 1212, 11736, 11742, 1557, 1456, 566, 11740, 477, 668, 675, 4098, 11743, 1934, 4675, 4662, 11744, 11745, 11748, 11751, 11752, 11753, 11754, 11756, 480, 5087, 11758, 11759, 5517, 2]
// Exports: ContactSyncOnboardingModal

// Module 11741 (headerTitle)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import NewUserPermissionsOnboarding from "NewUserPermissionsOnboarding";
import { View } from "ContactSyncSettingsActionSheet";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import initialValues from "initialValues";
import ContactSyncLandingPage from "ContactSyncLandingPage";
import { AnalyticEvents } from "ME";
import { NativePermissionTypes } from "NativePermissionStatus";
import jsxProd from "ContactSyncLandingOnboardingRedesign";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_16;
let closure_17;
let closure_18;
let closure_9;
const require = arg1;
function headerTitle() {
  return null;
}
function headerLeft() {
  return null;
}
function OnboardingTrailingLanding() {
  let obj = { style: _createForOfIteratorHelperLoose().landingTrailing, variant: "text-sm/medium", color: "text-muted" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = {};
  const tmp = _createForOfIteratorHelperLoose();
  obj.learnMoreUrl = require(11736) /* isContactSyncAvailable */.getOpenLearnMoreUrl();
  obj.children = intl.format(require(1212) /* getSystemLocale */.t["84S6+Z"], obj);
  return callback4(require(4126) /* Text */.Text, obj);
}
function OnboardingTrailing(isOnboarding) {
  if (isOnboarding.isOnboarding) {
    let tmp3Result = tmp3(OnboardingTrailingLanding, {});
  } else {
    const obj = { discoverabilityEnabled: tmp, onValueChanged: tmp2 };
    tmp3Result = tmp3(importDefault(11742), obj);
  }
  return tmp3Result;
}
function ContactSyncLandingScreen(openSettingsSheet) {
  let error;
  let loading;
  let permissionState;
  let setLoading;
  openSettingsSheet = openSettingsSheet.openSettingsSheet;
  ({ loading, setLoading } = openSettingsSheet);
  const onComplete = openSettingsSheet.onComplete;
  let phone;
  let first;
  let c7;
  let callback;
  let stateFromStores1;
  const bottom = setLoading(onComplete[19])().bottom;
  let obj = openSettingsSheet(onComplete[20]);
  const navigation = obj.useNavigation();
  let obj1 = openSettingsSheet(onComplete[21]);
  const items = [c7];
  const stateFromStores = obj1.useStateFromStores(items, () => _undefined.getCurrentUser());
  phone = undefined;
  if (null != stateFromStores) {
    phone = stateFromStores.phone;
  }
  const tmp = _createForOfIteratorHelperLoose();
  ({ permissionState, error } = callback2());
  const tmp6 = stateFromStores(phone.useState(true), 2);
  first = tmp6[0];
  const tmp9 = callback3();
  c7 = tmp9;
  let email;
  if (null != stateFromStores) {
    email = stateFromStores.email;
  }
  const items1 = [email, first, tmp9, navigation, setLoading, phone];
  callback = phone.useCallback(() => {
    setLoading(true);
    // CreateGeneratorClosureLongIndex (0x67)
    const timerId = setTimeout(navigation(globalThis), 25);
  }, items1);
  let obj2 = openSettingsSheet(onComplete[21]);
  const items2 = [callback];
  stateFromStores1 = obj2.useStateFromStores(items2, () => callback.getState(), []);
  const items3 = [stateFromStores1];
  const effect = phone.useEffect(() => {
    let isAndroidResult = openSettingsSheet(onComplete[23]).isAndroid();
    if (isAndroidResult) {
      isAndroidResult = stateFromStores1 === openSettingsSheet(onComplete[24]).AppStates.ACTIVE;
    }
    if (isAndroidResult) {
      const result = openSettingsSheet(onComplete[14]).refreshContactSyncPermissionStatus();
      const obj2 = openSettingsSheet(onComplete[14]);
    }
  }, items3);
  const items4 = [openSettingsSheet];
  // CreateGeneratorClosureLongIndex (0x67)
  const items5 = [callback, onComplete];
  obj = {};
  const callback1 = phone.useCallback(navigation(phone.useEffect(() => {
    if (openSettingsSheet) {
      let obj = setLoading(onComplete[25]);
      obj = { type: "Contact Sync" };
      obj = { page: "Contact Sync" };
      obj.location = obj;
      obj.track(outer1_14.OPEN_POPOUT, obj);
      setLoading(onComplete[26]).openLazy(openSettingsSheet(onComplete[28])(onComplete[27], onComplete.paths), "Contact Sync Info Settings");
      const obj4 = setLoading(onComplete[26]);
    }
  }, items4)), items5);
  const items6 = [callback4(setLoading(onComplete[30]), { absolute: true }), ];
  obj = {};
  const items7 = [tmp.container, ];
  obj1 = {};
  let num = 16;
  if (bottom > 0) {
    num = bottom;
  }
  obj1.paddingBottom = num;
  items7[1] = obj1;
  obj.style = items7;
  if (!tmp9) {
    if (permissionState === constants.AUTHORIZED) {
      obj2 = { onNext: callback, error, loading, discoverabilityEnabled: first, setDiscoverabilityEnabled: tmp8 };
      let tmp24 = callback4(setLoading(onComplete[33]), obj2);
    }
    obj.children = tmp24;
    items6[1] = tmp18(tmp19, obj);
    obj.children = items6;
    return tmp16(tmp17, obj);
  }
  const obj3 = {};
  tmp16 = closure_18;
  tmp17 = closure_17;
  tmp18 = callback4;
  tmp19 = first;
  const tmp5 = callback2();
  const intl = openSettingsSheet(onComplete[16]).intl;
  obj3.title = intl.string(openSettingsSheet(onComplete[16]).t.DjcfHu);
  const intl2 = openSettingsSheet(onComplete[16]).intl;
  obj3.subtitle = intl2.string(openSettingsSheet(onComplete[16]).t["kq+Cd3"]);
  obj3.trailing = callback4(OnboardingTrailing, { isOnboarding: tmp9, discoverabilityEnabled: first, setDiscoverabilityEnabled: tmp6[1] });
  obj3.header = callback4(setLoading(onComplete[32]), {});
  obj3.loading = loading;
  obj3.showSkip = tmp9;
  obj3.onAllow = callback1;
  obj3.onDontAllow = function onDontAllow() {
    let obj = openSettingsSheet(onComplete[14]);
    obj = { onComplete, skip: true };
    const result = obj.closeContactSyncModal(obj);
  };
  tmp24 = callback4(setLoading(onComplete[31]), obj3);
}
function ContactSyncNameInputScreen(navigateToLandingPage) {
  let error;
  let isNameFromContactBook;
  let obj = navigation(1456);
  navigation = obj.useNavigation();
  const tmp3 = callback(React.useState(false), 2);
  const first = tmp3[0];
  const dependencyMap = tmp3[1];
  const tmp5 = callback2();
  const name = tmp5.name;
  ({ isNameFromContactBook, error } = tmp5);
  first(11751)(navigation, navigateToLandingPage.navigateToLandingPage);
  const items = [navigation];
  callback = React.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items);
  const items1 = [first, callback, navigation];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight() {
        return outer2_16(first(table[35]), {
          insideNavigator: true,
          disabled: outer1_1,
          onPress() {
            outer2_3("");
          }
        });
      }
    });
  }, items1);
  obj = { style: _createForOfIteratorHelperLoose().container };
  obj = { onNext: callback, error, loading: first };
  let str = "";
  const tmp = _createForOfIteratorHelperLoose();
  const tmp10 = View;
  const tmp11 = closure_16;
  const tmp9 = closure_16;
  if (null != name) {
    str = name;
  }
  obj.initialName = str;
  obj.prefilledFromContactBook = null != name && "" !== name && isNameFromContactBook;
  obj.children = tmp11(first(11753), obj);
  return tmp9(tmp10, obj);
}
function ContactSyncSuggestionScreen(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = onComplete(suggestions[20]);
  const navigation = obj.useNavigation();
  suggestions = callback2().suggestions;
  const tmp = _createForOfIteratorHelperLoose();
  onComplete(suggestions[34]).useBackHandlerMinimizeApp();
  const items = [onComplete, suggestions.length];
  const callback = React.useCallback((skip, friendsAdded) => {
    let obj = onComplete(suggestions[14]);
    obj = { onComplete, skip, friendsFound: suggestions.length, friendsAdded };
    const result = obj.closeContactSyncModal(obj);
  }, items);
  const items1 = [callback, navigation, onComplete, suggestions.length];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight() {
        return outer2_16(navigation(suggestions[35]), {
          insideNavigator: true,
          onPress() {
            return outer2_3(true, 0);
          }
        });
      }
    });
  }, items1);
  if (suggestions.length > 0) {
    obj = {
      friendSuggestions: suggestions,
      onSubmit(arg0) {
          return onComplete(suggestions[14]).bulkAddFriendSuggestions(arg0, onComplete);
        }
    };
    let tmp11 = callback4(navigation(suggestions[37]), obj);
  } else {
    obj = { style: tmp.container, children: callback4(navigation(suggestions[38]), {}) };
    tmp11 = callback4(View, obj);
  }
  return tmp11;
}
class ContactSyncModal {
  constructor(arg0) {
    onComplete = global.onComplete;
    ({ initialRoutes, openSettingsSheet } = global);
    tmp = c4(useEffect.useState(false), 2);
    first = tmp[0];
    closure_2 = first;
    c3 = tmp[1];
    tmp3 = useIsOnboarding();
    c4 = tmp3;
    items = [];
    items[0] = tmp3;
    effect = useEffect.useEffect(() => {
      if (_slicedToArray) {
        const result = onComplete(first[14]).refreshContactSyncPermissionStatus();
        const obj = onComplete(first[14]);
      }
    }, items);
    items1 = [];
    items1[0] = onComplete;
    memo = useEffect.useMemo(() => null != onComplete ? onComplete : (() => {

    }), items1);
    useEffect = memo;
    items2 = [, , , ];
    items2[0] = tmp3;
    items2[1] = first;
    items2[2] = openSettingsSheet;
    items2[3] = memo;
    items3 = [, ];
    items3[0] = tmp3;
    items3[1] = memo;
    memo1 = useEffect.useMemo(() => (function getScreens(isOnboarding) {
      let closure_0;
      let closure_1;
      let closure_2;
      let _isNativeReflectConstruct;
      let _slicedToArray;
      ({ loading: closure_0, setLoading: closure_1, openSettingsSheet: closure_2, onComplete: _isNativeReflectConstruct, navigateToLandingPage: _slicedToArray } = isOnboarding);
      let obj = {};
      obj = { ignoreKeyboard: true, impressionName: onComplete(first[39]).ImpressionNames.CONTACT_SYNC_START };
      obj = { impression_group: onComplete(first[39]).ImpressionGroups.CONTACT_SYNC_FLOW };
      obj.impressionProperties = obj;
      obj.fullscreen = true;
      obj.headerTitle = outer2_20;
      if (isOnboarding.isOnboarding) {
        let headerCloseButton = outer2_21;
      } else {
        let obj3 = onComplete(first[40]);
        headerCloseButton = obj3.getHeaderCloseButton(() => {
          let obj = onComplete(first[14]);
          obj = { onComplete: _isNativeReflectConstruct, skip: true };
          return obj.closeContactSyncModal(obj);
        });
      }
      obj.headerLeft = headerCloseButton;
      obj.render = function render() {
        return outer3_16(outer3_24, { onComplete: _isNativeReflectConstruct, openSettingsSheet: closure_2, loading: closure_0, setLoading: closure_1 });
      };
      obj[outer2_13.WELCOME] = obj;
      const obj1 = {
        ignoreKeyboard: true,
        impressionName: onComplete(first[39]).ImpressionNames.CONTACT_SYNC_INPUT_NAME,
        impressionProperties: { impression_group: onComplete(first[39]).ImpressionGroups.CONTACT_SYNC_FLOW },
        fullscreen: true,
        headerTitle: outer2_20,
        headerLeft: outer2_21,
        render() {
          return outer3_16(outer3_25, { navigateToLandingPage: _slicedToArray });
        }
      };
      obj[outer2_13.NAME_INPUT] = obj1;
      obj3 = { ignoreKeyboard: true, impressionName: onComplete(first[39]).ImpressionNames.CONTACT_SYNC_SUGGESTIONS };
      const obj2 = { impression_group: onComplete(first[39]).ImpressionGroups.CONTACT_SYNC_FLOW };
      obj3.impressionProperties = { impression_group: onComplete(first[39]).ImpressionGroups.CONTACT_SYNC_FLOW };
      obj3.fullscreen = true;
      obj3.headerTitle = outer2_20;
      obj3.headerLeft = outer2_21;
      obj3.render = function render() {
        return outer3_16(outer3_26, { onComplete: _isNativeReflectConstruct });
      };
      obj[outer2_13.SUGGESTIONS] = obj3;
      const obj5 = { impressionName: onComplete(first[39]).ImpressionNames.USER_ADD_PHONE };
      const obj4 = { impression_group: onComplete(first[39]).ImpressionGroups.CONTACT_SYNC_FLOW };
      obj5.impressionProperties = { impression_group: onComplete(first[39]).ImpressionGroups.CONTACT_SYNC_FLOW };
      obj5.fullscreen = true;
      obj5.headerTitle = outer2_20;
      obj5.headerLeft = function headerLeft(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["navigateToLandingPage"] = _slicedToArray;
        return outer3_16(openSettingsSheet(first[41]), obj);
      };
      obj5.render = function render() {
        return outer3_16(onComplete(first[42]).AddPhoneScreen, {});
      };
      obj[outer2_13.ADD_PHONE] = obj5;
      const obj7 = { impressionName: onComplete(first[39]).ImpressionNames.USER_VERIFY_PHONE };
      const obj6 = { impression_group: onComplete(first[39]).ImpressionGroups.CONTACT_SYNC_FLOW };
      obj7.impressionProperties = { impression_group: onComplete(first[39]).ImpressionGroups.CONTACT_SYNC_FLOW };
      obj7.fullscreen = true;
      obj7.headerTitle = outer2_20;
      obj7.headerLeft = function headerLeft(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["navigateToLandingPage"] = _slicedToArray;
        return outer3_16(openSettingsSheet(first[41]), obj);
      };
      obj7.render = function render() {
        return outer3_16(onComplete(first[42]).VerifyPhoneScreen, {});
      };
      obj[outer2_13.VERIFY_PHONE] = obj7;
      const obj9 = { impressionName: onComplete(first[39]).ImpressionNames.USER_VERIFY_PASSWORD };
      const obj8 = { impression_group: onComplete(first[39]).ImpressionGroups.CONTACT_SYNC_FLOW };
      obj9.impressionProperties = { impression_group: onComplete(first[39]).ImpressionGroups.CONTACT_SYNC_FLOW };
      obj9.fullscreen = true;
      obj9.headerLeft = function headerLeft(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["navigateToLandingPage"] = _slicedToArray;
        return outer3_16(openSettingsSheet(first[41]), obj);
      };
      obj9.headerTitle = outer2_20;
      obj9.render = function render() {
        return outer3_16(onComplete(first[42]).VerifyPasswordScreen, {});
      };
      obj[outer2_13.VERIFY_PASSWORD] = obj9;
      return obj;
    })({ isOnboarding: _slicedToArray, loading: first, setLoading: _isNativeReflectConstruct, openSettingsSheet, onComplete: memo }), items2);
    effect1 = useEffect.useEffect(() => () => {
      if (!outer1_4) {
        let obj = onComplete(first[14]);
        obj = { onComplete: outer1_5 };
        const result = obj.closeContactSyncModal(obj);
      }
    }, items3);
    tmp8 = jsx;
    obj = { screens: memo1 };
    if (null == initialRoutes) {
      obj = {};
      tmp9 = ContactSyncScenes;
      obj.name = ContactSyncScenes.WELCOME;
      items4 = [];
      items4[0] = obj;
      initialRoutes = items4;
    }
    obj.initialRouteStack = initialRoutes;
    intl = require("getSystemLocale").intl;
    obj.headerBackTitle = intl.string(require("getSystemLocale").t["13/7kX"]);
    return tmp8(require("NavigationStack").Navigator, obj);
  }
}
({ setName: closure_9, useContactSyncModalStore: closure_10, useIsOnboarding: closure_11 } = initialValues);
({ ContactPermissions: closure_12, ContactSyncScenes: closure_13 } = ContactSyncLandingPage);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT + 32 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.landingTrailing = { textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("result").fileFinishedImporting("modules/contact_sync/native/components/RedesignContactSyncModal.tsx");

export default ContactSyncModal;
export const ContactSyncOnboardingModal = function ContactSyncOnboardingModal(onComplete) {
  return callback4(ContactSyncModal, { onComplete: onComplete.route.params.onComplete, openSettingsSheet: onComplete.openSettingsSheet, initialRoutes: onComplete.initialRoutes });
};
