// Module ID: 16363
// Function ID: 126233
// Name: GuildRoleSubscriptionTierTemplateBasicInfo
// Dependencies: []
// Exports: GuildRoleSubscriptionTierTemplateBasicInfo

// Module 16363 (GuildRoleSubscriptionTierTemplateBasicInfo)
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
  const items1 = [callback(arg1(dependencyMap[9]).Text, { style: { flexWrap: "wrap" }, children: name }), callback(arg1(dependencyMap[8]).Spacer, { size: 4 }), ];
  const obj2 = { variant: "heading-md/medium", style: subscriptionPlanTextStyle };
  const intl = arg1(dependencyMap[10]).intl;
  const obj3 = {};
  let obj6 = arg1(dependencyMap[11]);
  obj3.price = obj6.formatPrice(price_tier, CurrencyCodes.USD);
  obj3.interval = arg1(dependencyMap[12]).formatPlanInterval({ interval: SubscriptionIntervalTypes.MONTH, interval_count: 1 });
  obj2.children = intl.format(arg1(dependencyMap[10]).t.CgmBaG, obj3);
  items1[2] = callback(arg1(dependencyMap[9]).Text, obj2);
  obj1.children = items1;
  items[2] = callback2(View, obj1);
  obj.children = items;
  const items2 = [callback2(View, obj), , ];
  const obj5 = { variant: "text-sm/normal", style: descriptionTextStyle };
  const merged = Object.assign(descriptionTextProps);
  obj5["children"] = description;
  items2[1] = callback(arg1(dependencyMap[9]).Text, obj5);
  obj6 = {};
  const intl2 = arg1(dependencyMap[10]).intl;
  obj6.text = intl2.string(arg1(dependencyMap[10]).t.1W7mCt);
  obj6.pillStyle = tmp.templateCTAButton;
  obj6.onPress = function onPress() {
    return callback(template, closure_2);
  };
  obj6.grow = true;
  items2[2] = callback(arg1(dependencyMap[13]).BaseTextButton, obj6);
  obj.children = items2;
  return callback2(View, obj);
};
