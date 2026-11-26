// Module ID: 17384
// Function ID: 17385
// Name: PhoenixSettingsScreen
// Dependencies: [5, 32, 19, 17, 1387, 1071, 1389, 21, 5043, 575, 9101, 6380, 9695, 1112, 4729, 1379, 5641, 14303, 9638, 1629, 17378, 504, 2109, 17380, 17385, 6115, 5634, 2]
// Exports: default

// Module 17384 (PhoenixSettingsScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import PremiumConstants from "PremiumConstants" /* 1389 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6380 */;
import openPremiumModalDefault from "openPremiumModal" /* 9101 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9695 */;
import switchToPhoenix from "switchToPhoenix" /* 17385 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1387 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const switchToPhoenixDefault = switchToPhoenix;
let _require, c2, c5, closure_0, closure_3;

let c10;
let obj2;
let unpackModuleId;
function openNitroUpgrade() {
  let items;
  let obj2;
  const obj = { analyticsLocation: obj2, analyticsLocations: items, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
  items = [];
  obj2 = { section: AnalyticsSections.SETTINGS_PHOENIX };
  const tmp = openPremiumModalDefault;
  items[0] = AnalyticsLocationDefault.USER_SETTINGS;
  tmp(obj);
}
const ScrollView = react_native.ScrollView;
const AnalyticsSections = Constants.AnalyticsSections;
const PremiumTypes = PremiumConstants.PremiumTypes;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let obj = { container: { flex: 1 }, content: obj2 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24 };
let closure_12 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/phoenix_launch/native/PhoenixSettingsScreen.tsx");

export default function PhoenixSettingsScreen() {
  let FireIcon;
  let Stack;
  let TIER_2;
  let action;
  let body;
  let bottom;
  let callback;
  let currentUser;
  let intl3;
  let intl5;
  let intl6;
  let intl7;
  let items4;
  let items5;
  let items6;
  let note;
  let obj11;
  let obj8;
  let title;
  let tmp15;
  let tmp17;
  let tmp9;
  const tmp = closure_12();
  _require = tmp;
  const tmp3 = dependencyMap;
  bottom = bottom(1629)().bottom;
  let obj = react;
  let items = [tmp.content, bottom];
  const memo = react.useMemo(() => {
    const items = [closure_0.content, { paddingBottom: bottom + nativeDefault.space.PX_16 }];
    ({ paddingBottom: bottom + nativeDefault.space.PX_16 });
    return items;
  }, items);
  let obj2 = bottom(17378);
  const requiresNitro = obj2.useConfig({ location: "PhoenixSettingsScreen" }, { autoTrackExposure: false }).requiresNitro;
  let obj3 = require("get initialized");
  const items1 = [UserStore];
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    const obj = closure_0(dependencyMap[22]);
    return obj.isPremium(currentUser.getCurrentUser(), TIER_2.TIER_2);
  });
  let obj4 = require("PhoenixLaunchState");
  const shouldLaunchPhoenix = obj4.useShouldLaunchPhoenix();
  [tmp9, dependencyMap] = _slicedToArray(react.useState(false), 2);
  const tmp8 = _slicedToArray(react.useState(false), 2);
  const useCallback = react.useCallback;
  _require = callback(function*(arg0, value) {
    let v1;
    closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "+95" };
      }
    } else {
      let c4;
      try {
        c5 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            c2(true);
            c4 = 1;
            c2 = 2;
            c5 = 1;
            const obj4 = { value: closure_0(), done: false };
            return obj4;
          }
        } else if (1 === tmp4) {
          c4 = 0;
          c2(false);
          throw closure_3;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c2(false);
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c4 = 0;
          c2(false);
          c5 = 3;
          return { value: "HermesInternal", done: "+95" };
        }
      } catch (tmp19) {
        closure_3 = tmp19;
        if (0 === c4) {
          c5 = 3;
          throw tmp19;
        } else {
          c2 = 1;
        }
      }
    }
  });
  callback = useCallback(function() {
    return closure_0(...arguments);
  }, []);
  let tmp11 = !requiresNitro;
  if (requiresNitro) {
    tmp11 = stateFromStores;
  }
  const items2 = [callback];
  const items3 = [callback];
  const callback1 = obj.useCallback(() => callback(switchToPhoenixDefault), items2);
  const obj5 = { title: null, body: null, note: null, action: null };
  const callback2 = obj.useCallback(() => callback(switchToPhoenix.cancelSwitchToPhoenix), items3);
  const intl = tmp5(1112).intl;
  const string = intl.string;
  const tmp2Result = bottom(4729);
  if (tmp11) {
    let obj7;
    obj5.title = string(tmp2Result["zq7l/x"]);
    const intl4 = tmp5(1112).intl;
    const string2 = intl4.string;
    const tmp5Result = require("PlatformUtils");
    const isAndroidResult = tmp5Result.isAndroid();
    const tmp2Result2 = bottom(4729);
    obj5.note = string2(isAndroidResult ? tmp2Result2.IJohaD : tmp2Result2.sDKQNC);
    const Button2 = tmp5(5641).Button;
    if (shouldLaunchPhoenix) {
      const obj6 = { variant: "secondary", text: intl6.string(bottom(4729).TUZMAM), loading: tmp9, onPress: callback2 };
      intl6 = tmp5(1112).intl;
      obj7 = obj6;
    } else {
      obj7 = { variant: "primary", icon: tmp20(FireIcon, obj8), text: intl5.string(tmp2(4729).vVxb4Y), loading: tmp9, onPress: callback1 };
      obj8 = { size: "sm", color: bottom(575).colors.CONTROL_PRIMARY_TEXT_DEFAULT };
      FireIcon = tmp5(14303).FireIcon;
      intl5 = tmp5(1112).intl;
    }
    obj5.action = closure_10(Button2, obj7);
    tmp15 = tmp20;
    tmp17 = obj5;
  } else {
    obj5.title = string(tmp2Result.y9iUhJ);
    const intl2 = tmp5(1112).intl;
    obj5.body = intl2.string(bottom(4729)["4AA4MK"]);
    tmp15 = closure_10;
    const obj9 = { variant: "expressive", icon: bottom(9638), text: intl3.string(bottom(4729).SdwcaZ), onPress: openNitroUpgrade };
    const Button = tmp5(5641).Button;
    intl3 = tmp5(1112).intl;
    obj5.action = closure_10(Button, obj9);
    tmp17 = obj5;
  }
  ({ body, note } = tmp17);
  const obj10 = { style: tmp.container, contentContainerStyle: memo, children: tmp22(Stack, obj11) };
  ({ title, action } = tmp17);
  obj11 = { spacing: bottom(575).space.PX_16, children: items4 };
  Stack = tmp5(6115).Stack;
  items4 = [tmp15(tmp5(5634).Heading, { variant: "heading-md/semibold", children: title }), , ];
  const obj12 = { spacing: bottom(575).space.PX_8, children: items5 };
  const Stack2 = tmp5(6115).Stack;
  const obj13 = { variant: "body-md/normal", color: "text-default", children: intl7.string(bottom(4729).yfoIbN) };
  const Text = tmp5(5634).Text;
  intl7 = tmp5(1112).intl;
  items5 = [tmp15(Text, obj13), ];
  let tmp15Result = null;
  const tmp21 = ScrollView;
  if (null != body) {
    const obj14 = { variant: "body-md/normal", color: "text-default", children: body };
    tmp15Result = tmp15(tmp5(5634).Text, obj14);
  }
  items5[1] = tmp15Result;
  items4[1] = closure_11(Stack2, obj12);
  const obj15 = { spacing: bottom(575).space.PX_12, children: items6 };
  const Stack3 = tmp5(6115).Stack;
  items6 = [action, ];
  let tmp15Result2 = null;
  if (null != note) {
    const obj16 = { variant: "body-xs/normal", color: "text-muted", children: note };
    tmp15Result2 = tmp15(tmp5(5634).Text, obj16);
  }
  items6[1] = tmp15Result2;
  items4[2] = closure_11(Stack3, obj15);
  return tmp15(tmp21, obj10);
};
