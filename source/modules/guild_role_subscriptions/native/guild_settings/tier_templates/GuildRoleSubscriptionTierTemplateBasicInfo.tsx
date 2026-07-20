// Module ID: 16340
// Function ID: 126099
// Name: GuildRoleSubscriptionTierTemplateBasicInfo
// Dependencies: []
// Exports: GuildRoleSubscriptionTierTemplateBasicInfo

// Module 16340 (GuildRoleSubscriptionTierTemplateBasicInfo)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const SubscriptionIntervalTypes = arg1(dependencyMap[2]).SubscriptionIntervalTypes;
const CurrencyCodes = arg1(dependencyMap[3]).CurrencyCodes;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { container: { paddingBottom: 24 }, header: { flexDirection: "row" } };
obj = { borderRadius: importDefault(dependencyMap[6]).radii.sm };
obj.image = obj;
const tmp3 = arg1(dependencyMap[4]);
obj.templateCTAButton = { borderRadius: importDefault(dependencyMap[6]).radii.sm };
let closure_8 = obj.createStyles(obj);
const obj1 = { borderRadius: importDefault(dependencyMap[6]).radii.sm };
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateBasicInfo.tsx");

export const GuildRoleSubscriptionTierTemplateBasicInfo = function GuildRoleSubscriptionTierTemplateBasicInfo(template) {
  let description;
  let descriptionTextProps;
  let descriptionTextStyle;
  let image;
  let name;
  let price_tier;
  let subscriptionPlanTextStyle;
  template = template.template;
  const arg1 = template;
  ({ handleSelectTemplateInPreview: closure_1, closeActionSheet: closure_2, descriptionTextProps } = template);
  ({ subscriptionPlanTextStyle, descriptionTextStyle } = template);
  const tmp = callback3();
  let obj = { style: tmp.container };
  obj = { style: tmp.header };
  ({ image, name, price_tier, description } = template.listings[0]);
  obj = { source: { uri: image }, style: tmp.image };
  const items = [callback(importDefault(dependencyMap[7]), obj), callback(arg1(dependencyMap[8]).Spacer, { size: 16 }), ];
  const obj1 = { style: { flexShrink: 1 } };
  const obj2 = { INTEGRATION_CREATE: null, ConstraintReasonCode: null, style: { flexWrap: "wrap" }, children: name };
  const items1 = [callback(arg1(dependencyMap[9]).Text, obj2), callback(arg1(dependencyMap[8]).Spacer, { size: 4 }), ];
  const obj3 = { variant: "heading-md/medium", style: subscriptionPlanTextStyle };
  const intl = arg1(dependencyMap[10]).intl;
  const obj4 = {};
  let obj7 = arg1(dependencyMap[11]);
  obj4.price = obj7.formatPrice(price_tier, CurrencyCodes.USD);
  obj4.interval = arg1(dependencyMap[12]).formatPlanInterval({ interval: SubscriptionIntervalTypes.MONTH, interval_count: 1 });
  obj3.children = intl.format(arg1(dependencyMap[10]).t.CgmBaG, obj4);
  items1[2] = callback(arg1(dependencyMap[9]).Text, obj3);
  obj1.children = items1;
  items[2] = callback2(View, obj1);
  obj.children = items;
  const items2 = [callback2(View, obj), , ];
  const obj6 = { variant: "text-sm/normal", style: descriptionTextStyle };
  const merged = Object.assign(descriptionTextProps);
  obj6["children"] = description;
  items2[1] = callback(arg1(dependencyMap[9]).Text, obj6);
  obj7 = {};
  const intl2 = arg1(dependencyMap[10]).intl;
  obj7.text = intl2.string(arg1(dependencyMap[10]).t.1W7mCt);
  obj7.pillStyle = tmp.templateCTAButton;
  obj7.onPress = function onPress() {
    return callback(template, closure_2);
  };
  obj7.grow = true;
  items2[2] = callback(arg1(dependencyMap[13]).BaseTextButton, obj7);
  obj.children = items2;
  return callback2(View, obj);
};
