// Module ID: 11696
// Function ID: 90850
// Name: headerTitle
// Dependencies: [31, 27, 33, 4126, 4963, 689, 4124, 4535, 1212, 2, 31, 27, 33, 4126, 11701, 11702, 2, 5, 31, 27, 4336, 33, 4126, 689, 4963, 4671, 11704, 4124, 1212, 4535, 11705, 11697, 2, 31, 33, 4126, 3989, 4127, 4124, 2, 27, 11689, 5359, 2, 31]
// Exports: ContactSyncOnboardingModal

// Module 11696 (headerTitle)
import closure_3 from "module_31";
import getActivityIndicator from "get ActivityIndicator";
import module_33 from "module_33";
import { View } from "_createForOfIteratorHelperLoose";
import NAV_BAR_HEIGHT from "NAV_BAR_HEIGHT";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import Text from "Text";
import Button from "Button";
import { AnalyticEvents } from "getSystemLocale";
import { NativePermissionTypes } from "keys";
import module_31 from "module_31";
import get ActivityIndicator from "get ActivityIndicator";
import module_31 from "module_31";

function headerTitle() {
  return null;
}
function headerLeft() {
  return null;
}
function OnboardingTrailingLanding() {
  let obj = { Promise: null, marginTop: null, flags: null, style: get_ActivityIndicator().landingTrailing };
  const intl = arg1(dependencyMap[16]).intl;
  obj = {};
  const tmp = get_ActivityIndicator();
  obj.learnMoreUrl = arg1(dependencyMap[17]).getOpenLearnMoreUrl();
  obj.children = intl.format(arg1(dependencyMap[16]).t.84S6+Z, obj);
  return callback5(arg1(dependencyMap[15]).Text, obj);
}
function OnboardingTrailing(isOnboarding) {
  if (isOnboarding.isOnboarding) {
    let tmp3Result = tmp3(OnboardingTrailingLanding, {});
  } else {
    const obj = { discoverabilityEnabled: tmp, onValueChanged: tmp2 };
    tmp3Result = tmp3(importDefault(dependencyMap[18]), obj);
  }
  return tmp3Result;
}
function ContactSyncLandingScreen(openSettingsSheet) {
  let error;
  let loading;
  let permissionState;
  let setLoading;
  openSettingsSheet = openSettingsSheet.openSettingsSheet;
  const arg1 = openSettingsSheet;
  ({ loading, setLoading } = openSettingsSheet);
  const importDefault = setLoading;
  const onComplete = openSettingsSheet.onComplete;
  const dependencyMap = onComplete;
  let React;
  let View;
  let NAV_BAR_HEIGHT;
  let _createForOfIteratorHelperLoose;
  let stateFromStores1;
  const bottom = importDefault(dependencyMap[19])().bottom;
  let obj = arg1(dependencyMap[20]);
  const navigation = obj.useNavigation();
  let callback = navigation;
  let obj1 = arg1(dependencyMap[21]);
  const items = [NAV_BAR_HEIGHT];
  const stateFromStores = obj1.useStateFromStores(items, () => tmp9.getCurrentUser());
  const callback2 = stateFromStores;
  let phone;
  if (null != stateFromStores) {
    phone = stateFromStores.phone;
  }
  React = phone;
  const tmp = get_ActivityIndicator();
  ({ permissionState, error } = callback3());
  const tmp6 = callback2(React.useState(true), 2);
  const first = tmp6[0];
  View = first;
  const tmp9 = callback4();
  NAV_BAR_HEIGHT = tmp9;
  let email;
  if (null != stateFromStores) {
    email = stateFromStores.email;
  }
  const items1 = [email, first, tmp9, navigation, setLoading, phone];
  callback = React.useCallback(() => {
    setLoading(true);
    // CreateGeneratorClosureLongIndex (0x67)
    const timerId = setTimeout(navigation(globalThis), 25);
  }, items1);
  _createForOfIteratorHelperLoose = callback;
  let obj2 = arg1(dependencyMap[21]);
  const items2 = [_createForOfIteratorHelperLoose];
  stateFromStores1 = obj2.useStateFromStores(items2, () => callback.getState(), []);
  const items3 = [stateFromStores1];
  const effect = React.useEffect(() => {
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
  const callback1 = React.useCallback(callback(React.useEffect(() => {
    if (openSettingsSheet) {
      let obj = setLoading(onComplete[25]);
      obj = { type: "Contact Sync" };
      obj = { page: "Contact Sync" };
      obj.location = obj;
      obj.track(constants.OPEN_POPOUT, obj);
      setLoading(onComplete[26]).openLazy(openSettingsSheet(onComplete[28])(onComplete[27], onComplete.paths), "Contact Sync Info Settings");
      const obj4 = setLoading(onComplete[26]);
    }
  }, items4)), items5);
  const items6 = [callback5(importDefault(dependencyMap[30]), { absolute: true }), ];
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
      let tmp24 = callback5(importDefault(dependencyMap[33]), obj2);
    }
    obj.children = tmp24;
    items6[1] = tmp18(tmp19, obj);
    obj.children = items6;
    return tmp16(tmp17, obj);
  }
  const obj3 = {};
  const tmp16 = closure_18;
  const tmp17 = closure_17;
  const tmp18 = callback5;
  const tmp19 = View;
  const tmp5 = callback3();
  const intl = arg1(dependencyMap[16]).intl;
  obj3.title = intl.string(arg1(dependencyMap[16]).t.DjcfHu);
  const intl2 = arg1(dependencyMap[16]).intl;
  obj3.subtitle = intl2.string(arg1(dependencyMap[16]).t.kq+Cd3);
  obj3.trailing = callback5(OnboardingTrailing, { isOnboarding: tmp9, discoverabilityEnabled: first, setDiscoverabilityEnabled: tmp6[1] });
  obj3.header = callback5(importDefault(dependencyMap[32]), {});
  obj3.loading = loading;
  obj3.showSkip = tmp9;
  obj3.onAllow = callback1;
  obj3.onDontAllow = function onDontAllow() {
    let obj = openSettingsSheet(onComplete[14]);
    obj = { onComplete, skip: true };
    const result = obj.closeContactSyncModal(obj);
  };
  tmp24 = callback5(importDefault(dependencyMap[31]), obj3);
}
function ContactSyncNameInputScreen(navigateToLandingPage) {
  let error;
  let isNameFromContactBook;
  let obj = arg1(closure_2[20]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  const tmp3 = callback2(React.useState(false), 2);
  const first = tmp3[0];
  const importDefault = first;
  closure_2 = tmp3[1];
  const tmp5 = callback3();
  const name = tmp5.name;
  ({ isNameFromContactBook, error } = tmp5);
  importDefault(closure_2[34])(navigation, navigateToLandingPage.navigateToLandingPage);
  const items = [navigation];
  const callback = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items);
  let closure_3 = callback;
  const items1 = [first, callback, navigation];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight() {
        return callback2(callback(closure_2[35]), {
          insideNavigator: true,
          disabled: callback,
          onPress() {
            callback("");
          }
        });
      }
    });
  }, items1);
  obj = { style: get_ActivityIndicator().container };
  obj = { onNext: callback, error, loading: first };
  let str = "";
  const tmp = get_ActivityIndicator();
  const tmp10 = View;
  const tmp11 = closure_16;
  const tmp9 = closure_16;
  if (null != name) {
    str = name;
  }
  obj.initialName = str;
  obj.prefilledFromContactBook = null != name && "" !== name && isNameFromContactBook;
  obj.children = tmp11(importDefault(closure_2[36]), obj);
  return tmp9(tmp10, obj);
}
function ContactSyncSuggestionScreen(onComplete) {
  onComplete = onComplete.onComplete;
  const arg1 = onComplete;
  let obj = arg1(dependencyMap[20]);
  const navigation = obj.useNavigation();
  const importDefault = navigation;
  const suggestions = callback3().suggestions;
  const dependencyMap = suggestions;
  const tmp = get_ActivityIndicator();
  arg1(dependencyMap[34]).useBackHandlerMinimizeApp();
  const items = [onComplete, suggestions.length];
  const callback = React.useCallback((skip, friendsAdded) => {
    let obj = onComplete(suggestions[14]);
    obj = { onComplete, skip, friendsFound: suggestions.length, friendsAdded };
    const result = obj.closeContactSyncModal(obj);
  }, items);
  let closure_3 = callback;
  const items1 = [callback, navigation, onComplete, suggestions.length];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight() {
        return callback2(callback(closure_2[35]), {
          insideNavigator: true,
          onPress() {
            return callback(true, 0);
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
    let tmp11 = callback5(importDefault(dependencyMap[37]), obj);
  } else {
    obj = { style: tmp.container, children: callback5(importDefault(dependencyMap[38]), {}) };
    tmp11 = callback5(View, obj);
  }
  return tmp11;
}
class ContactSyncModal {
  constructor(arg0) {
    onComplete = global.onComplete;
    arg1 = onComplete;
    ({ initialRoutes, openSettingsSheet } = global);
    importDefault = openSettingsSheet;
    tmp = getActivityIndicator(importAll.useState(false), 2);
    first = tmp[0];
    dependencyMap = first;
    closure_3 = tmp[1];
    tmp3 = useIsOnboarding();
    getActivityIndicator = tmp3;
    items = [];
    items[0] = tmp3;
    effect = importAll.useEffect(() => {
      if (tmp3) {
        const result = onComplete(first[14]).refreshContactSyncPermissionStatus();
        const obj = onComplete(first[14]);
      }
    }, items);
    items1 = [];
    items1[0] = onComplete;
    memo = importAll.useMemo(() => null != onComplete ? onComplete : () => {

    }, items1);
    importAll = memo;
    items2 = [, , , ];
    items2[0] = tmp3;
    items2[1] = first;
    items2[2] = openSettingsSheet;
    items2[3] = memo;
    items3 = [, ];
    items3[0] = tmp3;
    items3[1] = memo;
    memo1 = importAll.useMemo(() => function getScreens(isOnboarding) {
      ({ loading: closure_0, setLoading: closure_1, openSettingsSheet: closure_2, onComplete: closure_3, navigateToLandingPage: getActivityIndicator } = isOnboarding);
      let obj = {};
      obj = { ignoreKeyboard: true, impressionName: callback(closure_2[39]).ImpressionNames.CONTACT_SYNC_START };
      obj = { impression_group: callback(closure_2[39]).ImpressionGroups.CONTACT_SYNC_FLOW };
      obj.impressionProperties = obj;
      obj.fullscreen = true;
      obj.headerTitle = closure_20;
      if (isOnboarding.isOnboarding) {
        let headerCloseButton = closure_21;
      } else {
        let obj3 = callback(closure_2[40]);
        headerCloseButton = obj3.getHeaderCloseButton(() => {
          let obj = callback(closure_2[14]);
          obj = { onComplete: closure_3, skip: true };
          return obj.closeContactSyncModal(obj);
        });
      }
      obj.headerLeft = headerCloseButton;
      obj.render = function render() {
        return callback3(closure_24, { onComplete: closure_3, openSettingsSheet: closure_2, loading: closure_0, setLoading: closure_1 });
      };
      obj[constants.WELCOME] = obj;
      const obj1 = {
        ignoreKeyboard: true,
        impressionName: callback(closure_2[39]).ImpressionNames.CONTACT_SYNC_INPUT_NAME,
        impressionProperties: { impression_group: callback(closure_2[39]).ImpressionGroups.CONTACT_SYNC_FLOW },
        fullscreen: true,
        headerTitle: closure_20,
        headerLeft: closure_21,
        render() {
          return callback3(closure_25, { navigateToLandingPage: getActivityIndicator });
        }
      };
      obj[constants.NAME_INPUT] = obj1;
      obj3 = { ignoreKeyboard: true, impressionName: callback(closure_2[39]).ImpressionNames.CONTACT_SYNC_SUGGESTIONS };
      const obj2 = { impression_group: callback(closure_2[39]).ImpressionGroups.CONTACT_SYNC_FLOW };
      obj3.impressionProperties = { impression_group: callback(closure_2[39]).ImpressionGroups.CONTACT_SYNC_FLOW };
      obj3.fullscreen = true;
      obj3.headerTitle = closure_20;
      obj3.headerLeft = closure_21;
      obj3.render = function render() {
        return callback3(closure_26, { onComplete: closure_3 });
      };
      obj[constants.SUGGESTIONS] = obj3;
      const obj5 = { impressionName: callback(closure_2[39]).ImpressionNames.USER_ADD_PHONE };
      const obj4 = { impression_group: callback(closure_2[39]).ImpressionGroups.CONTACT_SYNC_FLOW };
      obj5.impressionProperties = { impression_group: callback(closure_2[39]).ImpressionGroups.CONTACT_SYNC_FLOW };
      obj5.fullscreen = true;
      obj5.headerTitle = closure_20;
      obj5.headerLeft = function headerLeft(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["navigateToLandingPage"] = getActivityIndicator;
        return callback3(callback2(closure_2[41]), obj);
      };
      obj5.render = function render() {
        return callback3(callback(closure_2[42]).AddPhoneScreen, {});
      };
      obj[constants.ADD_PHONE] = obj5;
      const obj7 = { impressionName: callback(closure_2[39]).ImpressionNames.USER_VERIFY_PHONE };
      const obj6 = { impression_group: callback(closure_2[39]).ImpressionGroups.CONTACT_SYNC_FLOW };
      obj7.impressionProperties = { impression_group: callback(closure_2[39]).ImpressionGroups.CONTACT_SYNC_FLOW };
      obj7.fullscreen = true;
      obj7.headerTitle = closure_20;
      obj7.headerLeft = function headerLeft(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["navigateToLandingPage"] = getActivityIndicator;
        return callback3(callback2(closure_2[41]), obj);
      };
      obj7.render = function render() {
        return callback3(callback(closure_2[42]).VerifyPhoneScreen, {});
      };
      obj[constants.VERIFY_PHONE] = obj7;
      const obj9 = { impressionName: callback(closure_2[39]).ImpressionNames.USER_VERIFY_PASSWORD };
      const obj8 = { impression_group: callback(closure_2[39]).ImpressionGroups.CONTACT_SYNC_FLOW };
      obj9.impressionProperties = { impression_group: callback(closure_2[39]).ImpressionGroups.CONTACT_SYNC_FLOW };
      obj9.fullscreen = true;
      obj9.headerLeft = function headerLeft(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["navigateToLandingPage"] = getActivityIndicator;
        return callback3(callback2(closure_2[41]), obj);
      };
      obj9.headerTitle = closure_20;
      obj9.render = function render() {
        return callback3(callback(closure_2[42]).VerifyPasswordScreen, {});
      };
      obj[constants.VERIFY_PASSWORD] = obj9;
      return obj;
    }({ isOnboarding: tmp3, loading: first, setLoading: closure_3, openSettingsSheet, onComplete: memo }), items2);
    effect1 = importAll.useEffect(() => () => {
      if (!getActivityIndicator) {
        let obj = callback(closure_2[14]);
        obj = { onComplete: module_33 };
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
    intl = require("keys").intl;
    obj.headerBackTitle = intl.string(require("keys").t.13/7kX);
    return tmp8(require("keys").Navigator, obj);
  }
}
({ setName: closure_9, useContactSyncModalStore: closure_10, useIsOnboarding: closure_11 } = Text);
({ ContactPermissions: closure_12, ContactSyncScenes: closure_13 } = Button);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = module_31);
get ActivityIndicator = {};
get ActivityIndicator = { backgroundColor: require("module_33").colors.BACKGROUND_BASE_LOW, paddingTop: require("_createForOfIteratorHelperLoose").NAV_BAR_HEIGHT + 32 };
get_ActivityIndicator.container = get_ActivityIndicator;
get_ActivityIndicator.landingTrailing = { textAlign: "center" };
get ActivityIndicator = get_ActivityIndicator.createStyles(get_ActivityIndicator);
const result = module_31.fileFinishedImporting("modules/contact_sync/native/components/RedesignContactSyncModal.tsx");

export default ContactSyncModal;
export const ContactSyncOnboardingModal = function ContactSyncOnboardingModal(onComplete) {
  return callback5(ContactSyncModal, { onComplete: onComplete.route.params.onComplete, openSettingsSheet: onComplete.openSettingsSheet, initialRoutes: onComplete.initialRoutes });
};
