// Module ID: 11427
// Function ID: 11428
// Name: SharedCustomThemeActionSheet
// Dependencies: [32, 19, 17, 4494, 1074, 1374, 21, 4836, 576, 1241, 11428, 4682, 6571, 6570, 1115, 2717, 4832, 8659, 5281, 504, 4488, 6842, 6603, 1177, 1228, 2]
// Exports: default

// Module 11427 (SharedCustomThemeActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import native from "native" /* 1177 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1228 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import ThemeActionCreators from "ThemeActionCreators" /* 4682 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 6842 */;
import UserSettingsActionCreators from "UserSettingsActionCreators" /* 8659 */;
import CustomThemeMobileActionCreators from "CustomThemeMobileActionCreators" /* 11428 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import "react";
import react from "react" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 4494 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, _require, closure_7, importDefault;

let closure_12;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
function PrimaryActionButton(onPressApply) {
  let TIER_2;
  let intl;
  let intl2;
  let nitroWheelButton;
  let premiumTypeSubscription;
  let tmp6;
  onPressApply = onPressApply.onPressApply;
  let tmp = closure_14();
  _require = tmp;
  let obj = require("get initialized");
  let items = [SubscriptionStore];
  const stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const obj2 = PremiumUtilsDefault;
  if (obj2.getPremiumTypeFromSubscription(stateFromStores) !== PremiumTypes.TIER_2) {
    const obj3 = {
      text: intl2.string(require("intl").t.pj0XBN),
      onPress: function onPressSubscribe() {
          let items;
          const obj = { premiumType: TIER_2.TIER_2, analyticsLocations: items, analyticsLocation: {} };
          items = [];
          const tmp = openPremiumPlanSelectionActionSheetDefault;
          items[0] = AnalyticsLocationDefault.SHARE_CUSTOM_CLIENT_THEME_EMBED;
          tmp(obj);
        },
      renderIcon() {
          let items;
          const obj = { style: items };
          items = [nitroWheelButton.nitroWheelButton];
          return closure_12(native.NitroWheel, obj);
        },
      style: tmp.getNitroButton
    };
    const ShinyButton = tmp2(1177).ShinyButton;
    intl2 = tmp2(1115).intl;
    tmp6 = closure_12(ShinyButton, obj3);
  } else {
    const obj4 = { text: intl.string(require("intl").t["1Qm822"]), onPress: onPressApply, variant: "primary" };
    const Button = tmp2(5281).Button;
    intl = tmp2(1115).intl;
    tmp6 = closure_12(Button, obj4);
  }
  return tmp6;
}
({ useEffect: hasOwnProperty, useLayoutEffect: metroRequire, useRef: metroImportDefault } = react);
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
const PremiumTypes = PremiumConstants.PremiumTypes;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let obj = { contentWrapper: { paddingHorizontal: 43.5, paddingVertical: 12 }, centeredText: { textAlign: "center" }, ctaContainer: { paddingHorizontal: 15, flexDirection: "column", display: "flex", gap: 6 }, nitroWheelButton: { marginStart: -2, width: 20, height: 20 }, getNitroButton: obj2 };
obj2 = { borderRadius: nativeDefault.radii.round };
let closure_14 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/client_themes/native/chat/SharedCustomThemeActionSheet.tsx");

export default function _default(message) {
  let Text;
  let closure_3;
  let colors;
  let first;
  let first1;
  let intl;
  let intl2;
  let intl3;
  let items4;
  let items5;
  let obj8;
  const f93597 = (item) => "#" + item;
  const sharedClientTheme = message.message.sharedClientTheme;
  let tmp = closure_14();
  let tmp2 = closure_7(null);
  importDefault = tmp2;
  let obj = first1;
  let tmp4;
  const useState = first1.useState;
  if (undefined !== sharedClientTheme) {
    let obj4 = { colors: colors.map(f93597), gradientColorStops: [], gradientAngle: null, baseMix: null };
    colors = sharedClientTheme.colors;
    ({ gradient_angle: obj2.gradientAngle, base_mix: obj2.baseMix } = sharedClientTheme);
    tmp4 = obj4;
  }
  [first, _slicedToArray] = useState(tmp4);
  let baseTheme;
  const useState2 = obj.useState;
  if (undefined !== sharedClientTheme) {
    let obj3 = sharedClientTheme(customUserThemeSettings[24]);
    baseTheme = obj3.getBaseTheme(sharedClientTheme.base_theme);
  }
  const tmp5Result = _slicedToArray(useState2(baseTheme), 2);
  first1 = tmp5Result[0];
  let closure_5 = tmp5Result[1];
  const tmp5Result2 = _slicedToArray(obj.useState(false), 2);
  const first2 = tmp5Result2[0];
  closure_7 = tmp5Result2[1];
  const ref = obj.useRef(true);
  const items = [sharedClientTheme];
  closure_5(() => {
    let colors;
    let tmp4;
    const tmp = closure_3;
    if (undefined !== sharedClientTheme) {
      const obj = { colors: colors.map(f93597), gradientColorStops: [], gradientAngle: null, baseMix: null };
      colors = tmp2.colors;
      ({ gradient_angle: obj.gradientAngle, base_mix: obj.baseMix } = sharedClientTheme);
      tmp4 = obj;
    }
    tmp(tmp4);
    let baseTheme;
    const tmp6 = closure_5;
    if (undefined !== sharedClientTheme) {
      const obj2 = ClientThemesUtils;
      baseTheme = obj2.getBaseTheme(tmp2.base_theme);
    }
    tmp6(baseTheme);
    const obj3 = AnalyticsUtilsDefault;
    obj3.track(AnalyticEvents.CUSTOM_THEME_SHARE_PREVIEWED, {});
  }, items);
  const items1 = [customUserThemeSettings, first1];
  closure_5(() => {
    let tmp2 = undefined !== first;
    const tmp = first;
    if (tmp2) {
      tmp2 = undefined !== first1;
    }
    if (tmp2) {
      const obj2 = { baseTheme: first1, customTheme: tmp };
      const obj = CustomThemeMobileActionCreators;
      obj.previewCustomTheme(obj2);
      const obj3 = ThemeActionCreators;
      obj3.refreshTheme();
    }
  }, items1);
  const items2 = [first2];
  first2(() => {
    ref.current = !first2;
  }, items2);
  const items3 = [ref];
  closure_5(() => () => {
    if (ref.current) {
      const obj = sharedClientTheme(first[10]);
      obj.clearPreviewTheme();
      const obj2 = sharedClientTheme(first[11]);
      obj2.refreshTheme();
    }
  }, items3);
  let obj5 = { ref: tmp2, backdropOpacity: 0, children: items4 };
  BottomSheet = sharedClientTheme(customUserThemeSettings[12]).BottomSheet;
  const obj6 = { title: intl.string(require("module_2717")["3ej1LT"]) };
  const BottomSheetTitleHeader = sharedClientTheme(customUserThemeSettings[13]).BottomSheetTitleHeader;
  intl = sharedClientTheme(customUserThemeSettings[14]).intl;
  items4 = [closure_12(BottomSheetTitleHeader, obj6), , ];
  const obj7 = { style: tmp.contentWrapper, children: closure_12(Text, obj8) };
  obj8 = { variant: "heading-md/medium", style: tmp.centeredText, children: intl2.string(require("module_2717").qZMUoL) };
  Text = sharedClientTheme(customUserThemeSettings[16]).Text;
  intl2 = sharedClientTheme(customUserThemeSettings[14]).intl;
  items4[1] = closure_12(ref, obj7);
  const obj9 = { style: tmp.ctaContainer, children: items5 };
  items5 = [, ];
  const obj10 = {
    onPressApply() {
      const tmp2 = undefined !== customUserThemeSettings && undefined !== first1 && null !== ref.current;
      if (tmp2) {
        closure_7(true);
        const obj = CustomThemeMobileActionCreators;
        obj.updateCustomTheme(customUserThemeSettings, first1);
        const obj3 = { customUserThemeSettings, theme: first1 };
        const obj2 = UserSettingsActionCreators;
        obj2.saveClientTheme(obj3);
        const obj4 = CustomThemeMobileActionCreators;
        obj4.clearPreviewTheme();
        const obj5 = AnalyticsUtilsDefault;
        obj5.track(AnalyticEvents.CUSTOM_THEME_SHARE_APPLIED, {});
        const current = ref.current;
        current.closeActionSheet();
      }
    }
  };
  items5[0] = closure_12(PrimaryActionButton, obj10);
  const obj18 = {
    text: intl3.string(sharedClientTheme(customUserThemeSettings[14]).t["13/7kX"]),
    onPress() {
      if (null !== ref.current) {
        const obj = CustomThemeMobileActionCreators;
        obj.clearPreviewTheme();
        const obj2 = ThemeActionCreators;
        obj2.refreshTheme();
        const current = tmp.current;
        current.closeActionSheet();
      }
    },
    variant: "secondary"
  };
  const Button = sharedClientTheme(customUserThemeSettings[18]).Button;
  intl3 = sharedClientTheme(customUserThemeSettings[14]).intl;
  items5[1] = closure_12(Button, obj18);
  items4[2] = closure_13(ref, obj9);
  return closure_13(BottomSheet, obj5);
};
