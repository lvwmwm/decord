// Module ID: 17333
// Function ID: 17334
// Name: PhoenixSettingsScreen
// Dependencies: [5, 32, 19, 17, 1386, 1071, 1388, 21, 5012, 575, 9059, 6349, 9653, 1112, 4728, 1378, 5610, 14251, 9596, 1628, 17327, 504, 2108, 17334, 6084, 5603, 2]
// Exports: default

// Module 17333 (PhoenixSettingsScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import PremiumConstants from "PremiumConstants" /* 1388 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6349 */;
import openPremiumModalDefault from "openPremiumModal" /* 9059 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9653 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1386 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, closure_0, closure_2;

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
  let currentUser;
  let first;
  let intl3;
  let intl5;
  let intl6;
  let items2;
  let items3;
  let items4;
  let note;
  let obj6;
  let obj9;
  let title;
  let tmp12;
  let tmp14;
  const tmp = closure_12();
  _require = tmp;
  const tmp3 = dependencyMap;
  bottom = bottom(1628)().bottom;
  let obj = react;
  let items = [tmp.content, bottom];
  const memo = react.useMemo(() => {
    const items = [closure_0.content, { paddingBottom: bottom + nativeDefault.space.PX_16 }];
    ({ paddingBottom: bottom + nativeDefault.space.PX_16 });
    return items;
  }, items);
  let obj2 = bottom(17327);
  const requiresNitro = obj2.useConfig({ location: "PhoenixSettingsScreen" }, { autoTrackExposure: false }).requiresNitro;
  let obj3 = require("get initialized");
  const items1 = [UserStore];
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    const obj = closure_0(closure_2[22]);
    return obj.isPremium(currentUser.getCurrentUser(), TIER_2.TIER_2);
  });
  [first, dependencyMap] = react.useState(false);
  let tmp9 = !requiresNitro;
  if (requiresNitro) {
    tmp9 = stateFromStores;
  }
  let obj4 = { title: null, body: null, note: null, action: null };
  const callback = obj.useCallback(_asyncToGenerator(async (arg0, value) => {
    let v1;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === bottom) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp;
            closure_2(true);
            c3 = 1;
            bottom = 2;
            c4 = 1;
            const obj4 = { value: bottom(closure_2[23])(), done: false };
            return obj4;
          }
        } else if (1 === tmp4) {
          c3 = 0;
          closure_128_2(false);
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_2(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c3 = 0;
          closure_128_2(false);
          c4 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp20) {
        closure_2 = tmp20;
        if (0 === c3) {
          c4 = 3;
          throw tmp20;
        } else {
          bottom = 1;
        }
      }
    }
  }), []);
  const intl = tmp5(1112).intl;
  const string = intl.string;
  const tmp2Result = bottom(4728);
  if (tmp9) {
    obj4.title = string(tmp2Result["zq7l/x"]);
    const intl4 = tmp5(1112).intl;
    const string2 = intl4.string;
    const tmp5Result = require("PlatformUtils");
    const isAndroidResult = tmp5Result.isAndroid();
    const tmp2Result2 = bottom(4728);
    obj4.note = string2(isAndroidResult ? tmp2Result2.IJohaD : tmp2Result2.sDKQNC);
    const obj5 = { variant: "primary", icon: closure_10(FireIcon, obj6), text: intl5.string(bottom(4728).vVxb4Y), loading: first, onPress: callback };
    const Button2 = tmp5(5610).Button;
    obj6 = { size: "sm", color: bottom(575).colors.CONTROL_PRIMARY_TEXT_DEFAULT };
    FireIcon = tmp5(14251).FireIcon;
    intl5 = tmp5(1112).intl;
    obj4.action = closure_10(Button2, obj5);
    tmp12 = closure_10;
    tmp14 = obj4;
  } else {
    obj4.title = string(tmp2Result.y9iUhJ);
    const intl2 = tmp5(1112).intl;
    obj4.body = intl2.string(bottom(4728)["4AA4MK"]);
    tmp12 = closure_10;
    const obj7 = { variant: "expressive", icon: bottom(9596), text: intl3.string(bottom(4728).SdwcaZ), onPress: openNitroUpgrade };
    const Button = tmp5(5610).Button;
    intl3 = tmp5(1112).intl;
    obj4.action = closure_10(Button, obj7);
    tmp14 = obj4;
  }
  ({ body, note } = tmp14);
  const obj8 = { style: tmp.container, contentContainerStyle: memo, children: tmp19(Stack, obj9) };
  ({ title, action } = tmp14);
  obj9 = { spacing: bottom(575).space.PX_16, children: items2 };
  Stack = tmp5(6084).Stack;
  items2 = [tmp12(tmp5(5603).Heading, { variant: "heading-md/semibold", children: title }), , ];
  const obj10 = { spacing: bottom(575).space.PX_8, children: items3 };
  const Stack2 = tmp5(6084).Stack;
  const obj11 = { variant: "body-md/normal", color: "text-default", children: intl6.string(bottom(4728).yfoIbN) };
  const Text = tmp5(5603).Text;
  intl6 = tmp5(1112).intl;
  items3 = [tmp12(Text, obj11), ];
  let tmp12Result = null;
  const tmp18 = ScrollView;
  if (null != body) {
    const obj12 = { variant: "body-md/normal", color: "text-default", children: body };
    tmp12Result = tmp12(tmp5(5603).Text, obj12);
  }
  items3[1] = tmp12Result;
  items2[1] = closure_11(Stack2, obj10);
  const obj13 = { spacing: bottom(575).space.PX_12, children: items4 };
  const Stack3 = tmp5(6084).Stack;
  items4 = [action, ];
  let tmp12Result2 = null;
  if (null != note) {
    const obj14 = { variant: "body-xs/normal", color: "text-muted", children: note };
    tmp12Result2 = tmp12(tmp5(5603).Text, obj14);
  }
  items4[1] = tmp12Result2;
  items2[2] = closure_11(Stack3, obj13);
  return tmp12(tmp18, obj8);
};
