// Module ID: 17220
// Function ID: 17221
// Name: PhoenixSettingsScreen
// Dependencies: [5, 32, 19, 17, 1386, 1071, 1388, 21, 4917, 575, 8960, 6254, 9554, 1112, 4665, 1378, 5515, 14129, 9497, 17219, 504, 2108, 17221, 5989, 5508, 1628, 2]
// Exports: default

// Module 17220 (PhoenixSettingsScreen)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import PremiumConstants from "PremiumConstants" /* 1388 */;
import _modDef4665 from "module_4665" /* 4665 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6254 */;
import openPremiumModalDefault from "openPremiumModal" /* 8960 */;
import AssetRegistryDefault from "AssetRegistry" /* 9497 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9554 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14129 */;
import PhoenixSwitchEntrypointExperimentDefault from "PhoenixSwitchEntrypointExperiment" /* 17219 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1386 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4917 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c4, closure_2;

let closure_12;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
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
function PhoenixStatusCard() {
  let Stack;
  let TIER_2;
  let action;
  let body;
  let closure_0;
  let currentUser;
  let first;
  let intl3;
  let intl6;
  let items1;
  let obj8;
  let title;
  let tmp11;
  let tmp13;
  let tmp18;
  const tmp3 = dependencyMap;
  const tmp = closure_13();
  let obj = PhoenixSwitchEntrypointExperimentDefault;
  const requiresNitro = obj.useConfig({ location: "PhoenixSettingsScreen" }, { autoTrackExposure: false }).requiresNitro;
  const tmp4 = _require;
  let obj2 = require("get initialized");
  const items = [UserStore];
  let obj3 = react;
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const obj = closure_0(dependencyMap[21]);
    return obj.isPremium(currentUser.getCurrentUser(), TIER_2.TIER_2);
  });
  [first, _require] = react.useState(false);
  let tmp8 = !requiresNitro;
  if (requiresNitro) {
    tmp8 = stateFromStores;
  }
  let obj4 = { title: null, body: null, note: null, action: null };
  const callback = obj3.useCallback(_asyncToGenerator(async (arg0, value) => {
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            tmp(true);
            c3 = 1;
            c1 = 2;
            c4 = 1;
            const obj4 = { value: c1(closure_2[22])(), done: false };
            return obj4;
          }
        } else if (1 === tmp4) {
          c3 = 0;
          closure_128_0(false);
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_0(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c3 = 0;
          closure_128_0(false);
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp20) {
        closure_2 = tmp20;
        if (0 === c3) {
          c4 = 3;
          throw tmp20;
        } else {
          c1 = 1;
        }
      }
    }
  }), []);
  const intl = tmp4(1112).intl;
  const string = intl.string;
  const tmp2Result = _modDef4665;
  if (tmp8) {
    obj4.title = string(tmp2Result["zq7l/x"]);
    const intl4 = tmp4(1112).intl;
    obj4.body = intl4.string(_modDef4665.vE5daK);
    const intl5 = tmp4(1112).intl;
    const string2 = intl5.string;
    const tmp4Result = tmp4(1378);
    const isAndroidResult = tmp4Result.isAndroid();
    const tmp2Result2 = _modDef4665;
    obj4.note = string2(isAndroidResult ? tmp2Result2.IJohaD : tmp2Result2.sDKQNC);
    const obj5 = { variant: "primary", icon: AssetRegistryDefault2, text: intl6.string(_modDef4665.vVxb4Y), loading: first, onPress: callback };
    const Button2 = tmp4(5515).Button;
    intl6 = tmp4(1112).intl;
    obj4.action = closure_11(Button2, obj5);
    tmp11 = closure_11;
    tmp13 = obj4;
  } else {
    obj4.title = string(tmp2Result.y9iUhJ);
    const intl2 = tmp4(1112).intl;
    obj4.body = intl2.string(_modDef4665["4AA4MK"]);
    tmp11 = closure_11;
    const obj6 = { variant: "expressive", icon: AssetRegistryDefault, text: intl3.string(_modDef4665.SdwcaZ), onPress: openNitroUpgrade };
    const Button = tmp4(5515).Button;
    intl3 = tmp4(1112).intl;
    obj4.action = closure_11(Button, obj6);
    tmp13 = obj4;
  }
  const note = tmp13.note;
  ({ title, body, action } = tmp13);
  const obj7 = { style: tmp.statusCard, children: tmp18(Stack, obj8) };
  obj8 = { spacing: nativeDefault.space.PX_12, children: items1 };
  Stack = tmp4(5989).Stack;
  items1 = [tmp11(tmp4(5508).Heading, { variant: "heading-md/semibold", children: title }), tmp11(tmp4(5508).Text, { variant: "body-sm/normal", color: "text-muted", children: body }), action, ];
  let tmp11Result = null;
  const tmp17 = closure_7;
  tmp18 = closure_12;
  if (null != note) {
    const obj9 = { variant: "body-xs/normal", color: "text-muted", children: note };
    tmp11Result = tmp11(tmp4(5508).Text, obj9);
  }
  items1[3] = tmp11Result;
  return tmp11(tmp17, obj7);
}
({ ScrollView: metroRequire, View: metroImportDefault } = react_native);
const AnalyticsSections = Constants.AnalyticsSections;
const PremiumTypes = PremiumConstants.PremiumTypes;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, content: obj2, statusCard: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_13 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/phoenix_launch/native/PhoenixSettingsScreen.tsx");

export default function PhoenixSettingsScreen() {
  let Stack;
  let bottom;
  let content;
  let intl;
  let items1;
  let obj2;
  const tmp = closure_13();
  _require = tmp;
  bottom = bottom(1628)().bottom;
  let items = [tmp.content, bottom];
  const obj = {
    style: tmp.container,
    contentContainerStyle: react.useMemo(() => {
      const items = [content.content, { paddingBottom: bottom + nativeDefault.space.PX_16 }];
      ({ paddingBottom: bottom + nativeDefault.space.PX_16 });
      return items;
    }, items),
    children: closure_12(Stack, obj2)
  };
  obj2 = { spacing: bottom(575).space.PX_16, children: items1 };
  Stack = require("Stack/Stack").Stack;
  const obj3 = { variant: "body-md/normal", color: "text-default", children: intl.string(bottom(4665).yfoIbN) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items1 = [closure_11(Text, obj3), closure_11(PhoenixStatusCard, {})];
  return closure_11(closure_6, obj);
};
