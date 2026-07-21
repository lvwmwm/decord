// Module ID: 16358
// Function ID: 126199
// Name: PriceOptionRow
// Dependencies: []
// Exports: default

// Module 16358 (PriceOptionRow)
function PriceOptionRow(selected) {
  let accessibilityRole;
  let accessibilityState;
  let onPress;
  let price;
  selected = selected.selected;
  ({ price, onPress } = selected);
  const tmp = callback4();
  let obj = arg1(dependencyMap[8]);
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
  const tmp4 = importDefault(dependencyMap[9]);
  const tmp6 = callback2;
  const tmp7 = importDefault;
  if (selected) {
    let tmp10 = tmp9[11];
  } else {
    tmp10 = tmp9[12];
  }
  obj.source = tmp7(tmp10);
  const items1 = [tmp6(importDefault(dependencyMap[10]), obj), ];
  const obj1 = { hasMaxConnections: "editingMessageId", isBoostOnlySubscription: "turquoise" };
  const intl = arg1(dependencyMap[14]).intl;
  const obj2 = {};
  const tmp8 = importDefault(dependencyMap[10]);
  obj2.price = arg1(dependencyMap[15]).formatPrice(price, CurrencyCodes.USD);
  const obj6 = arg1(dependencyMap[15]);
  obj2.interval = arg1(dependencyMap[16]).formatPlanInterval({ interval: SubscriptionIntervalTypes.MONTH, interval_count: 1 });
  obj1.children = intl.format(arg1(dependencyMap[14]).t.CgmBaG, obj2);
  items1[1] = callback2(arg1(dependencyMap[13]).Text, obj1);
  obj.children = items1;
  return tmp3(tmp4, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ TouchableOpacity: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
const SubscriptionIntervalTypes = arg1(dependencyMap[3]).SubscriptionIntervalTypes;
const CurrencyCodes = arg1(dependencyMap[4]).CurrencyCodes;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH, padding: 24, borderTopLeftRadius: importDefault(dependencyMap[7]).radii.md, borderTopRightRadius: importDefault(dependencyMap[7]).radii.md };
obj.container = obj;
const tmp3 = arg1(dependencyMap[5]);
obj.rowContainer = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[7]).radii.sm, borderColor: importDefault(dependencyMap[7]).colors.BORDER_MUTED };
const obj1 = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[7]).radii.sm, borderColor: importDefault(dependencyMap[7]).colors.BORDER_MUTED };
obj.containerSelected = { backgroundColor: importDefault(dependencyMap[7]).colors.BORDER_SUBTLE };
obj.rowStatusIcon = { 0: false, 0: false, 0: false };
const obj2 = { backgroundColor: importDefault(dependencyMap[7]).colors.BORDER_SUBTLE };
obj.confirmButton = { borderRadius: importDefault(dependencyMap[7]).radii.xs };
obj.backToTemplates = { alignSelf: "center" };
let closure_11 = obj.createStyles(obj);
const obj3 = { borderRadius: importDefault(dependencyMap[7]).radii.xs };
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet.tsx");

export default function GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet(selectedTemplate) {
  let newPricesToPick;
  selectedTemplate = selectedTemplate.selectedTemplate;
  const arg1 = selectedTemplate;
  ({ handleCreateFromTemplate: closure_1, newPricesToPick } = selectedTemplate);
  const dependencyMap = newPricesToPick;
  const tmp = callback4();
  const tmp2 = callback(React.useState(0), 2);
  const callback = tmp2[0];
  const React = tmp2[1];
  let obj = { "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000011331524067088385, "Null": 0.3 };
  obj = { style: tmp.container };
  obj = { contentContainerStyle: { paddingBottom: importDefault(dependencyMap[17])().bottom } };
  const obj1 = {};
  const intl = arg1(dependencyMap[14]).intl;
  obj1.children = intl.format(arg1(dependencyMap[14]).t.5WZ9Ct, { tierName: selectedTemplate.listings[0].name });
  const items = [callback2(arg1(dependencyMap[13]).Text, obj1), callback2(arg1(dependencyMap[20]).Spacer, { size: 12 }), , , , , , , ];
  const obj3 = { hasMaxConnections: "editingMessageId", isBoostOnlySubscription: "turquoise" };
  const intl2 = arg1(dependencyMap[14]).intl;
  const obj4 = {};
  let obj7 = arg1(dependencyMap[15]);
  obj4.price = obj7.formatPrice(selectedTemplate.listings[0].price_tier, CurrencyCodes.USD);
  obj3.children = intl2.format(arg1(dependencyMap[14]).t.5i7Uhb, obj4);
  items[2] = callback2(arg1(dependencyMap[13]).Text, obj3);
  items[3] = callback2(arg1(dependencyMap[20]).Spacer, { size: 24 });
  items[4] = newPricesToPick.map((price) => {
    const selectedTemplate = arg1;
    return callback2(closure_12, {
      price,
      selected: arg1 === closure_3,
      onPress() {
        return callback(arg1);
      }
    }, price);
  });
  items[5] = callback2(arg1(dependencyMap[20]).Spacer, { size: 36 });
  items[6] = callback2(arg1(dependencyMap[21]).BaseTextButton, {
    text: "Confirm New Price",
    pillStyle: tmp.confirmButton,
    onPress() {
      let obj = {};
      const merged = Object.assign(selectedTemplate);
      obj = {};
      const merged1 = Object.assign(selectedTemplate.listings[0]);
      obj["price_tier"] = newPricesToPick[closure_3];
      const items = [obj];
      obj["listings"] = items;
      callback(obj, true);
    },
    grow: true
  });
  items[7] = callback2(arg1(dependencyMap[20]).Spacer, { size: 24 });
  const obj6 = {
    onPress() {
      return callback(newPricesToPick[22]).hideActionSheet();
    },
    style: tmp.backToTemplates,
    activeOpacity: 0.5
  };
  obj7 = { hasMaxConnections: 1626341378, isBoostOnlySubscription: -1035927550 };
  const intl3 = arg1(dependencyMap[14]).intl;
  obj7.children = intl3.string(arg1(dependencyMap[14]).t.h26VOI);
  obj6.children = callback2(arg1(dependencyMap[13]).Text, obj7);
  items[8] = callback2(closure_5, obj6);
  obj.children = items;
  obj.children = callback3(arg1(dependencyMap[19]).BottomSheetScrollView, obj);
  obj.children = callback2(closure_6, obj);
  return callback2(arg1(dependencyMap[18]).BottomSheet, obj);
};
