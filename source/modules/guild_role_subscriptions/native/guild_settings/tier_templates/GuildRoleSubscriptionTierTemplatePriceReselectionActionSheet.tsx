// Module ID: 16483
// Function ID: 128415
// Name: PriceOptionRow
// Dependencies: [57, 31, 27, 1851, 482, 33, 4130, 689, 3848, 8474, 5085, 16387, 15290, 4126, 1212, 5618, 14120, 1557, 5187, 5189, 1273, 4544, 4098, 2]
// Exports: default

// Module 16483 (PriceOptionRow)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { SubscriptionIntervalTypes } from "GuildFeatures";
import { CurrencyCodes } from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
function PriceOptionRow(selected) {
  let accessibilityRole;
  let accessibilityState;
  let onPress;
  let price;
  selected = selected.selected;
  ({ price, onPress } = selected);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(3848) /* useCheckboxA11yNative */;
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  obj = {};
  const items = [tmp.rowContainer, ];
  let containerSelected;
  if (selected) {
    containerSelected = tmp.containerSelected;
  }
  items[1] = containerSelected;
  obj.style = items;
  obj.accessibilityRole = accessibilityRole;
  obj.accessibilityState = accessibilityState;
  obj.onPress = onPress;
  obj = { style: tmp.rowStatusIcon };
  const tmp3 = closure_10;
  const tmp4 = importDefault(8474);
  const tmp6 = callback2;
  const tmp7 = importDefault;
  if (selected) {
    let tmp10 = 16387;
  } else {
    tmp10 = 15290;
  }
  obj.source = tmp7(tmp10);
  const items1 = [tmp6(importDefault(5085), obj), ];
  const obj1 = { variant: "text-sm/normal", color: "text-default" };
  const intl = require(1212) /* getSystemLocale */.intl;
  const obj2 = {};
  const tmp8 = importDefault(5085);
  obj2.price = require(5618) /* formatSingleCurrencyPrice */.formatPrice(price, CurrencyCodes.USD);
  const obj6 = require(5618) /* formatSingleCurrencyPrice */;
  obj2.interval = require(14120) /* getBenefitKey */.formatPlanInterval({ interval: SubscriptionIntervalTypes.MONTH, interval_count: 1 });
  obj1.children = intl.format(require(1212) /* getSystemLocale */.t.CgmBaG, obj2);
  items1[1] = callback2(require(4126) /* Text */.Text, obj1);
  obj.children = items1;
  return tmp3(tmp4, obj);
}
({ TouchableOpacity: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, padding: 24, borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.md, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.md };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, flexDirection: "row", alignSelf: "stretch", justifyContent: "flex-start", padding: 12, marginBottom: 12, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED };
_createForOfIteratorHelperLoose.rowContainer = obj1;
_createForOfIteratorHelperLoose.containerSelected = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.rowStatusIcon = { height: 20, width: 20, marginRight: 12 };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.confirmButton = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.backToTemplates = { alignSelf: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet.tsx");

export default function GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet(selectedTemplate) {
  let importDefault;
  let newPricesToPick;
  selectedTemplate = selectedTemplate.selectedTemplate;
  ({ handleCreateFromTemplate: importDefault, newPricesToPick } = selectedTemplate);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(React.useState(0), 2);
  callback = tmp2[0];
  React = tmp2[1];
  let obj = { backdropOpacity: 0.8, startExpanded: true };
  obj = { style: tmp.container };
  obj = { contentContainerStyle: { paddingBottom: importDefault(newPricesToPick[17])().bottom } };
  const obj1 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary" };
  const intl = selectedTemplate(newPricesToPick[14]).intl;
  obj1.children = intl.format(selectedTemplate(newPricesToPick[14]).t["5WZ9Ct"], { tierName: selectedTemplate.listings[0].name });
  let items = [callback2(selectedTemplate(newPricesToPick[13]).Text, obj1), callback2(selectedTemplate(newPricesToPick[20]).Spacer, { size: 12 }), , , , , , , ];
  const obj3 = { variant: "text-sm/normal", color: "text-default" };
  const intl2 = selectedTemplate(newPricesToPick[14]).intl;
  const obj4 = {};
  let obj7 = selectedTemplate(newPricesToPick[15]);
  obj4.price = obj7.formatPrice(selectedTemplate.listings[0].price_tier, CurrencyCodes.USD);
  obj3.children = intl2.format(selectedTemplate(newPricesToPick[14]).t["5i7Uhb"], obj4);
  items[2] = callback2(selectedTemplate(newPricesToPick[13]).Text, obj3);
  items[3] = callback2(selectedTemplate(newPricesToPick[20]).Spacer, { size: 24 });
  items[4] = newPricesToPick.map((price) => {
    let closure_0 = arg1;
    return outer1_9(outer1_12, {
      price,
      selected: arg1 === _slicedToArray,
      onPress() {
        return outer1_4(closure_0);
      }
    }, price);
  });
  items[5] = callback2(selectedTemplate(newPricesToPick[20]).Spacer, { size: 36 });
  items[6] = callback2(selectedTemplate(newPricesToPick[21]).BaseTextButton, {
    text: "Confirm New Price",
    pillStyle: tmp.confirmButton,
    onPress() {
      let obj = {};
      const merged = Object.assign(selectedTemplate);
      obj = {};
      const merged1 = Object.assign(selectedTemplate.listings[0]);
      obj["price_tier"] = newPricesToPick[_slicedToArray];
      const items = [obj];
      obj["listings"] = items;
      callback(obj, true);
    },
    grow: true
  });
  items[7] = callback2(selectedTemplate(newPricesToPick[20]).Spacer, { size: 24 });
  const obj6 = {
    onPress() {
      return outer1_1(newPricesToPick[22]).hideActionSheet();
    },
    style: tmp.backToTemplates,
    activeOpacity: 0.5
  };
  obj7 = { variant: "text-sm/semibold", color: "interactive-text-active" };
  const intl3 = selectedTemplate(newPricesToPick[14]).intl;
  obj7.children = intl3.string(selectedTemplate(newPricesToPick[14]).t.h26VOI);
  obj6.children = callback2(selectedTemplate(newPricesToPick[13]).Text, obj7);
  items[8] = callback2(closure_5, obj6);
  obj.children = items;
  obj.children = callback3(selectedTemplate(newPricesToPick[19]).BottomSheetScrollView, obj);
  obj.children = callback2(closure_6, obj);
  return callback2(selectedTemplate(newPricesToPick[18]).BottomSheet, obj);
};
