// Module ID: 13718
// Function ID: 105230
// Name: items
// Dependencies: [31, 27, 1849, 33, 4130, 689, 6828, 13719, 13720, 3809, 4956, 4347, 13721, 2]
// Exports: default

// Module 13718 (items)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.noticeContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = {};
let items = [{ order: 100, predicate: require("getActivityTypeTextConfigs").isParentallyControlled, Component: require("FamilyCenterSettingsParentalControlsNotice") }, , ];
let obj2 = { order: 100, predicate: require("getActivityTypeTextConfigs").isParentallyControlled, Component: require("FamilyCenterSettingsParentalControlsNotice") };
items[1] = {
  order: 300,
  predicate() {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  },
  Component: require("SensitiveContentFiltersTeenNotice").SensitiveContentFiltersTeenNotice
};
const obj3 = {
  order: 300,
  predicate() {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  },
  Component: require("SensitiveContentFiltersTeenNotice").SensitiveContentFiltersTeenNotice
};
items[2] = {
  order: 200,
  predicate() {
    let isFeatureAgeGatedResult = require(3809) /* isFeatureAgeGated */.isFeatureAgeGated(require(4956) /* AgeGatedFeature */.AgeGatedFeature.REACTIVE_CHECK);
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = !require(4347) /* isReactiveCheckEnabled */.isAgeVerified();
      const obj2 = require(4347) /* isReactiveCheckEnabled */;
    }
    return isFeatureAgeGatedResult;
  },
  Component: require("AgeConfirmationNotice")
};
obj1.SENSITIVE_CONTENT_FILTERS = items;
const obj4 = {
  order: 200,
  predicate() {
    let isFeatureAgeGatedResult = require(3809) /* isFeatureAgeGated */.isFeatureAgeGated(require(4956) /* AgeGatedFeature */.AgeGatedFeature.REACTIVE_CHECK);
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = !require(4347) /* isReactiveCheckEnabled */.isAgeVerified();
      const obj2 = require(4347) /* isReactiveCheckEnabled */;
    }
    return isFeatureAgeGatedResult;
  },
  Component: require("AgeConfirmationNotice")
};
const items1 = [{ order: 100, predicate: require("getActivityTypeTextConfigs").isParentallyControlled, Component: require("FamilyCenterSettingsParentalControlsNotice") }, ];
const obj5 = { order: 100, predicate: require("getActivityTypeTextConfigs").isParentallyControlled, Component: require("FamilyCenterSettingsParentalControlsNotice") };
items1[1] = {
  order: 200,
  predicate() {
    let isFeatureAgeGatedResult = require(3809) /* isFeatureAgeGated */.isFeatureAgeGated(require(4956) /* AgeGatedFeature */.AgeGatedFeature.REACTIVE_CHECK);
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = !require(4347) /* isReactiveCheckEnabled */.isAgeVerified();
      const obj2 = require(4347) /* isReactiveCheckEnabled */;
    }
    return isFeatureAgeGatedResult;
  },
  Component: require("AgeConfirmationNotice")
};
obj1.CONTENT_AND_SOCIAL = items1;
const obj6 = {
  order: 200,
  predicate() {
    let isFeatureAgeGatedResult = require(3809) /* isFeatureAgeGated */.isFeatureAgeGated(require(4956) /* AgeGatedFeature */.AgeGatedFeature.REACTIVE_CHECK);
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = !require(4347) /* isReactiveCheckEnabled */.isAgeVerified();
      const obj2 = require(4347) /* isReactiveCheckEnabled */;
    }
    return isFeatureAgeGatedResult;
  },
  Component: require("AgeConfirmationNotice")
};
const items2 = [{ order: 100, predicate: require("getActivityTypeTextConfigs").isParentallyControlled, Component: require("FamilyCenterSettingsParentalControlsNotice") }];
obj1.DATA_AND_PRIVACY = items2;
const obj7 = { order: 100, predicate: require("getActivityTypeTextConfigs").isParentallyControlled, Component: require("FamilyCenterSettingsParentalControlsNotice") };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsScreenNotices.tsx");

export default function SettingsScreenNotices(screen) {
  screen = screen.screen;
  const items = [screen];
  const memo = React.useMemo(() => {
    const found = outer1_7[screen].filter((predicate) => predicate.predicate());
    const sorted = found.sort((order, order2) => order.order - order2.order);
    const mapped = sorted.map((Component) => Component.Component);
    let first = null;
    if (0 !== mapped.length) {
      first = mapped[0];
    }
    return first;
  }, items);
  let tmp3 = null;
  if (null != memo) {
    const obj = { style: tmp.noticeContainer, children: <memo key={screen} /> };
    tmp3 = <View style={tmp.noticeContainer}><memo key={screen} /></View>;
  }
  return tmp3;
};
export const SettingsScreen = { SENSITIVE_CONTENT_FILTERS: "SENSITIVE_CONTENT_FILTERS", CONTENT_AND_SOCIAL: "CONTENT_AND_SOCIAL", DATA_AND_PRIVACY: "DATA_AND_PRIVACY" };
