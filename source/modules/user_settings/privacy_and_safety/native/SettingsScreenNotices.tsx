// Module ID: 13604
// Function ID: 103074
// Name: items
// Dependencies: [0, 0, 4294967295, 0, 0, 0, 4294967295, 0, 0, 0, 0, 0, 0, 4294967295]
// Exports: default

// Module 13604 (items)
import closure_2 from "__exportStarResult1";
import { View } from "__exportStarResult1";
import { jsx } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

let closure_4 = importDefault(dependencyMap[2]);
__exportStarResult1 = {};
__exportStarResult1 = { marginHorizontal: require("__exportStarResult1").space.PX_16, marginTop: require("__exportStarResult1").space.PX_16 };
__exportStarResult1.noticeContainer = __exportStarResult1;
__exportStarResult1 = __exportStarResult1.createStyles(__exportStarResult1);
const obj1 = {};
const items = [{ order: 100, predicate: arg1(dependencyMap[6]).isParentallyControlled, Component: require("__exportStarResult1") }, , ];
const obj2 = { order: 100, predicate: arg1(dependencyMap[6]).isParentallyControlled, Component: require("__exportStarResult1") };
items[1] = {
  order: 300,
  predicate() {
    const currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  },
  Component: require("__exportStarResult1").SensitiveContentFiltersTeenNotice
};
const obj3 = {
  order: 300,
  predicate() {
    const currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  },
  Component: require("__exportStarResult1").SensitiveContentFiltersTeenNotice
};
items[2] = {
  order: 200,
  predicate() {
    let isFeatureAgeGatedResult = arg1(dependencyMap[9]).isFeatureAgeGated(arg1(dependencyMap[10]).AgeGatedFeature.REACTIVE_CHECK);
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = !arg1(dependencyMap[11]).isAgeVerified();
      const obj2 = arg1(dependencyMap[11]);
    }
    return isFeatureAgeGatedResult;
  },
  Component: require("__exportStarResult1")
};
obj1.SENSITIVE_CONTENT_FILTERS = items;
const obj4 = {
  order: 200,
  predicate() {
    let isFeatureAgeGatedResult = arg1(dependencyMap[9]).isFeatureAgeGated(arg1(dependencyMap[10]).AgeGatedFeature.REACTIVE_CHECK);
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = !arg1(dependencyMap[11]).isAgeVerified();
      const obj2 = arg1(dependencyMap[11]);
    }
    return isFeatureAgeGatedResult;
  },
  Component: require("__exportStarResult1")
};
const items1 = [{ order: 100, predicate: arg1(dependencyMap[6]).isParentallyControlled, Component: require("__exportStarResult1") }, ];
const obj5 = { order: 100, predicate: arg1(dependencyMap[6]).isParentallyControlled, Component: require("__exportStarResult1") };
items1[1] = {
  order: 200,
  predicate() {
    let isFeatureAgeGatedResult = arg1(dependencyMap[9]).isFeatureAgeGated(arg1(dependencyMap[10]).AgeGatedFeature.REACTIVE_CHECK);
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = !arg1(dependencyMap[11]).isAgeVerified();
      const obj2 = arg1(dependencyMap[11]);
    }
    return isFeatureAgeGatedResult;
  },
  Component: require("__exportStarResult1")
};
obj1.CONTENT_AND_SOCIAL = items1;
const obj6 = {
  order: 200,
  predicate() {
    let isFeatureAgeGatedResult = arg1(dependencyMap[9]).isFeatureAgeGated(arg1(dependencyMap[10]).AgeGatedFeature.REACTIVE_CHECK);
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = !arg1(dependencyMap[11]).isAgeVerified();
      const obj2 = arg1(dependencyMap[11]);
    }
    return isFeatureAgeGatedResult;
  },
  Component: require("__exportStarResult1")
};
const items2 = [{ order: 100, predicate: arg1(dependencyMap[6]).isParentallyControlled, Component: require("__exportStarResult1") }];
obj1.DATA_AND_PRIVACY = items2;
const obj7 = { order: 100, predicate: arg1(dependencyMap[6]).isParentallyControlled, Component: require("__exportStarResult1") };
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsScreenNotices.tsx");

export default function SettingsScreenNotices(screen) {
  screen = screen.screen;
  const arg1 = screen;
  const items = [screen];
  const memo = React.useMemo(() => {
    const found = closure_7[closure_0].filter((predicate) => predicate.predicate());
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
    tmp3 = <View {...obj} />;
  }
  return tmp3;
};
export const SettingsScreen = { SENSITIVE_CONTENT_FILTERS: "SENSITIVE_CONTENT_FILTERS", CONTENT_AND_SOCIAL: "CONTENT_AND_SOCIAL", DATA_AND_PRIVACY: "DATA_AND_PRIVACY" };
