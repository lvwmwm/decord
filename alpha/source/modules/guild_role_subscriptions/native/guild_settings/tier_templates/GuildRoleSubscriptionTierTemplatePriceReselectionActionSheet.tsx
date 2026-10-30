// Module ID: 19939
// Function ID: 19940
// Name: GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet
// Dependencies: [32, 19, 17, 1083, 21, 5009, 575, 1626, 5267, 5270, 5619, 1114, 1188, 7407, 7052, 7055, 17151, 6761, 5629, 5253, 2]
// Exports: default

// Module 19939 (GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet;

let metroImportAll;
let metroImportDefault;
let obj2;
const View = react_native.View;
const CurrencyCodes = Constants.CurrencyCodes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { container: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24, borderTopLeftRadius: nativeDefault.radii.md, borderTopRightRadius: nativeDefault.radii.md };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet.tsx");

export default function GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet(selectedTemplate) {
  let BottomSheetScrollView;
  let format;
  let intl;
  let intl3;
  let intl4;
  let items;
  let items1;
  let newPricesToPick;
  let obj2;
  let obj3;
  let obj5;
  let obj7;
  let obj8;
  let v5i7Uhb;
  selectedTemplate = selectedTemplate.selectedTemplate;
  ({ handleCreateFromTemplate: importDefault, newPricesToPick } = selectedTemplate);
  let value;
  const tmp = closure_9();
  const bottom = require("useSafeAreaInsets")().bottom;
  const tmp2 = value(react.useState(0), 2);
  value = tmp2[0];
  let obj = { backdropOpacity: 0.8, startExpanded: true, children: closure_7(View, obj2) };
  obj2 = { style: tmp.container, children: closure_8(BottomSheetScrollView, obj3) };
  const tmp4 = tmp2[1];
  BottomSheet = selectedTemplate(newPricesToPick[8]).BottomSheet;
  obj3 = { contentContainerStyle: { paddingBottom: bottom }, children: items };
  BottomSheetScrollView = selectedTemplate(newPricesToPick[9]).BottomSheetScrollView;
  const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.format(selectedTemplate(newPricesToPick[11]).t["5WZ9Ct"], obj5) };
  const Text = selectedTemplate(newPricesToPick[10]).Text;
  intl = selectedTemplate(newPricesToPick[11]).intl;
  obj5 = { tierName: selectedTemplate.listings[0].name };
  items = [closure_7(Text, obj4), closure_7(selectedTemplate(newPricesToPick[12]).Spacer, { size: 12 }), , , , , ];
  const obj6 = { variant: "text-sm/normal", color: "text-default", children: format(v5i7Uhb, obj7) };
  const Text2 = selectedTemplate(newPricesToPick[10]).Text;
  const intl2 = selectedTemplate(newPricesToPick[11]).intl;
  format = intl2.format;
  obj7 = { price: obj8.formatPrice(selectedTemplate.listings[0].price_tier, CurrencyCodes.USD) };
  v5i7Uhb = selectedTemplate(newPricesToPick[11]).t["5i7Uhb"];
  obj8 = selectedTemplate(newPricesToPick[13]);
  items[2] = closure_7(Text2, obj6);
  items[3] = closure_7(selectedTemplate(newPricesToPick[12]).Spacer, { size: 24 });
  const obj9 = {
    hasIcons: false,
    value,
    onChange: tmp4,
    children: newPricesToPick.map((item, value) => {
      let obj2;
      const obj = { value, label: obj2.formatMonthlyPriceLabel(item) };
      const TableRadioRow = selectedTemplate(newPricesToPick[15]).TableRadioRow;
      obj2 = selectedTemplate(newPricesToPick[16]);
      return closure_1_7(TableRadioRow, obj, item);
    })
  };
  const TableRadioGroup = selectedTemplate(newPricesToPick[14]).TableRadioGroup;
  items[4] = closure_7(TableRadioGroup, obj9);
  items[5] = closure_7(selectedTemplate(newPricesToPick[12]).Spacer, { size: 20 });
  const obj10 = { children: items1 };
  const ButtonGroup = selectedTemplate(newPricesToPick[17]).ButtonGroup;
  const obj11 = {
    text: intl3.string(selectedTemplate(newPricesToPick[11]).t.DVCXzm),
    onPress() {
      let items;
      const obj = { listings: items };
      const merged = Object.assign(selectedTemplate);
      const obj2 = { price_tier: newPricesToPick[first] };
      const merged1 = Object.assign(selectedTemplate.listings[0]);
      items = [obj2];
      importDefault(obj, true);
    }
  };
  const Button = selectedTemplate(newPricesToPick[18]).Button;
  intl3 = selectedTemplate(newPricesToPick[11]).intl;
  items1 = [closure_7(Button, obj11), ];
  const obj12 = {
    variant: "secondary",
    text: intl4.string(selectedTemplate(newPricesToPick[11]).t.h26VOI),
    onPress() {
      const obj = require("ActionSheetActionCreators");
      return obj.hideActionSheet();
    }
  };
  const Button2 = selectedTemplate(newPricesToPick[18]).Button;
  intl4 = selectedTemplate(newPricesToPick[11]).intl;
  items1[1] = closure_7(Button2, obj12);
  items[6] = closure_8(ButtonGroup, obj10);
  return closure_7(BottomSheet, obj);
};
