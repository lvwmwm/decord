// Module ID: 17616
// Function ID: 17617
// Name: GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet
// Dependencies: [32, 19, 17, 1374, 1085, 21, 4836, 576, 4548, 9203, 5899, 17520, 16214, 4832, 1115, 6655, 14776, 1613, 6571, 6045, 1177, 5282, 4800, 2]
// Exports: default

// Module 17616 (GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import react_native from "react-native" /* 4548 */;
import FastImageDefault from "FastImage" /* 5899 */;
import PriceUtils from "PriceUtils" /* 6655 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9203 */;
import GuildRoleSubscriptionTypeUtils from "GuildRoleSubscriptionTypeUtils" /* 14776 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
function PriceOptionRow(selected) {
  let CgmBaG;
  let accessibilityRole;
  let accessibilityState;
  let format;
  let items1;
  let obj5;
  let obj6;
  let onPress;
  let price;
  let tmp2Result;
  let tmp2Result2;
  selected = selected.selected;
  ({ price, onPress } = selected);
  const tmp = closure_11();
  const obj = react_native;
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const items = [tmp.rowContainer, ];
  let containerSelected;
  const tmp5 = authStore;
  const tmp7 = TouchableHitBoxDefault;
  if (selected) {
    containerSelected = tmp.containerSelected;
  }
  const obj2 = { style: items, accessibilityRole, accessibilityState, onPress, children: items1 };
  items[1] = containerSelected;
  const obj3 = { style: tmp.rowStatusIcon, source: importDefault(selected ? 17520 : 16214) };
  const tmp6Result = FastImageDefault;
  items1 = [React4(tmp6Result, obj3), ];
  const obj4 = { variant: "text-sm/normal", color: "text-default", children: format(CgmBaG, obj5) };
  const Text = tmp2(4832).Text;
  const intl = tmp2(1115).intl;
  format = intl.format;
  obj5 = { price: tmp2Result.formatPrice(price, CurrencyCodes.USD), interval: tmp2Result2.formatPlanInterval(obj6) };
  CgmBaG = tmp2(1115).t.CgmBaG;
  obj6 = { interval: SubscriptionIntervalTypes.MONTH, interval_count: 1 };
  tmp2Result = PriceUtils;
  tmp2Result2 = GuildRoleSubscriptionTypeUtils;
  items1[1] = React4(Text, obj4);
  return tmp5(tmp7, obj2);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ TouchableOpacity: hasOwnProperty, View: metroRequire } = react_native2);
const SubscriptionIntervalTypes = PremiumConstants.SubscriptionIntervalTypes;
const CurrencyCodes = Constants.CurrencyCodes;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, rowContainer: obj3, containerSelected: obj4, rowStatusIcon: { height: 20, width: 20, marginRight: 12 }, confirmButton: obj5, backToTemplates: { alignSelf: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24, borderTopLeftRadius: nativeDefault.radii.md, borderTopRightRadius: nativeDefault.radii.md };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, flexDirection: "row", alignSelf: "stretch", justifyContent: "flex-start", padding: 12, marginBottom: 12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
obj4 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj5 = { borderRadius: nativeDefault.radii.xs };
let closure_11 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet.tsx");

export default function GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet(selectedTemplate) {
  let BottomSheetScrollView;
  let Text3;
  let c3;
  let c4;
  let format;
  let intl;
  let intl3;
  let items;
  let newPricesToPick;
  let obj11;
  let obj2;
  let obj3;
  let obj5;
  let obj7;
  let obj8;
  let v5i7Uhb;
  selectedTemplate = selectedTemplate.selectedTemplate;
  ({ handleCreateFromTemplate: importDefault, newPricesToPick } = selectedTemplate);
  _slicedToArray = undefined;
  react = undefined;
  const tmp = closure_11();
  const bottom = require("useSafeAreaInsets")().bottom;
  [c3, c4] = react.useState(0);
  let obj = { backdropOpacity: 0.8, startExpanded: true, children: closure_9(closure_6, obj2) };
  obj2 = { style: tmp.container, children: closure_10(BottomSheetScrollView, obj3) };
  _slicedToArray(react.useState(0), 2);
  BottomSheet = selectedTemplate(newPricesToPick[18]).BottomSheet;
  obj3 = { contentContainerStyle: { paddingBottom: bottom }, children: items };
  BottomSheetScrollView = selectedTemplate(newPricesToPick[19]).BottomSheetScrollView;
  const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.format(selectedTemplate(newPricesToPick[14]).t["5WZ9Ct"], obj5) };
  const Text = selectedTemplate(newPricesToPick[13]).Text;
  intl = selectedTemplate(newPricesToPick[14]).intl;
  obj5 = { tierName: selectedTemplate.listings[0].name };
  items = [closure_9(Text, obj4), closure_9(selectedTemplate(newPricesToPick[20]).Spacer, { size: 12 }), , , , , , , ];
  const obj6 = { variant: "text-sm/normal", color: "text-default", children: format(v5i7Uhb, obj7) };
  const Text2 = selectedTemplate(newPricesToPick[13]).Text;
  const intl2 = selectedTemplate(newPricesToPick[14]).intl;
  format = intl2.format;
  obj7 = { price: obj8.formatPrice(selectedTemplate.listings[0].price_tier, CurrencyCodes.USD) };
  v5i7Uhb = selectedTemplate(newPricesToPick[14]).t["5i7Uhb"];
  obj8 = selectedTemplate(newPricesToPick[15]);
  items[2] = closure_9(Text2, obj6);
  items[3] = closure_9(selectedTemplate(newPricesToPick[20]).Spacer, { size: 24 });
  items[4] = newPricesToPick.map((price, index) => {
    let closure_0 = index;
    const obj = {
      price,
      selected: index === c3,
      onPress() {
        return c4(index);
      }
    };
    return closure_1_9(PriceOptionRow, obj, price);
  });
  items[5] = closure_9(selectedTemplate(newPricesToPick[20]).Spacer, { size: 36 });
  const obj9 = {
    text: "Confirm New Price",
    pillStyle: tmp.confirmButton,
    onPress() {
      let items;
      const obj = { listings: items };
      const merged = Object.assign(selectedTemplate);
      const obj2 = { price_tier: newPricesToPick[c3] };
      const merged1 = Object.assign(selectedTemplate.listings[0]);
      items = [obj2];
      importDefault(obj, true);
    },
    grow: true
  };
  items[6] = closure_9(selectedTemplate(newPricesToPick[21]).BaseTextButton, obj9);
  items[7] = closure_9(selectedTemplate(newPricesToPick[20]).Spacer, { size: 24 });
  const obj10 = {
    onPress() {
      const obj = require("ActionSheetActionCreators");
      return obj.hideActionSheet();
    },
    style: tmp.backToTemplates,
    activeOpacity: 0.5,
    children: closure_9(Text3, obj11)
  };
  obj11 = { variant: "text-sm/semibold", color: "interactive-text-active", children: intl3.string(selectedTemplate(newPricesToPick[14]).t.h26VOI) };
  Text3 = selectedTemplate(newPricesToPick[13]).Text;
  intl3 = selectedTemplate(newPricesToPick[14]).intl;
  items[8] = closure_9(closure_5, obj10);
  return closure_9(BottomSheet, obj);
};
