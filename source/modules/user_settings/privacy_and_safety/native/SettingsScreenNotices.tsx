// Module ID: 13597
// Function ID: 103041
// Name: items
// Dependencies: [0, 0, 4294967295, 0, 0, 0, 4294967295, 0, 0, 0, 0, 0, 0, 4294967295]
// Exports: default

// Module 13597 (items)
import closure_2 from "result";
import { View } from "result";
import { jsx } from "result";
import result from "result";

let closure_4 = importDefault(dependencyMap[2]);
result = {};
result = { marginHorizontal: require("result").space.PX_16, marginTop: require("result").space.PX_16 };
result.noticeContainer = result;
result = result.createStyles(result);
const obj1 = {};
const items = [{ order: 100, predicate: arg1(dependencyMap[6]).isParentallyControlled, Component: require("result") }, , ];
const obj2 = { order: 100, predicate: arg1(dependencyMap[6]).isParentallyControlled, Component: require("result") };
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
  Component: require("result").SensitiveContentFiltersTeenNotice
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
  Component: require("result").SensitiveContentFiltersTeenNotice
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
  Component: require("result")
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
  Component: require("result")
};
const items1 = [{ order: 100, predicate: arg1(dependencyMap[6]).isParentallyControlled, Component: require("result") }, ];
const obj5 = { order: 100, predicate: arg1(dependencyMap[6]).isParentallyControlled, Component: require("result") };
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
  Component: require("result")
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
  Component: require("result")
};
const items2 = [{ order: 100, predicate: arg1(dependencyMap[6]).isParentallyControlled, Component: require("result") }];
obj1.DATA_AND_PRIVACY = items2;
const obj7 = { order: 100, predicate: arg1(dependencyMap[6]).isParentallyControlled, Component: require("result") };
result = arg1(dependencyMap[13]).fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsScreenNotices.tsx");

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
