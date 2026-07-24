// Module ID: 16527
// Function ID: 128731
// Name: GuildRoleSubscriptionTierTemplateBasicInfo
// Dependencies: [31, 27, 1851, 482, 33, 4130, 689, 5085, 1273, 4126, 1212, 5616, 14170, 4544, 2]
// Exports: GuildRoleSubscriptionTierTemplateBasicInfo

// Module 16527 (GuildRoleSubscriptionTierTemplateBasicInfo)
import "result";
import { View } from "get ActivityIndicator";
import { SubscriptionIntervalTypes } from "GuildFeatures";
import { CurrencyCodes } from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { paddingBottom: 24 }, header: { flexDirection: "row" } };
_createForOfIteratorHelperLoose = { width: 48, height: 48, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.image = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.templateCTAButton = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
const result = require("GuildFeatures").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateBasicInfo.tsx");

export const GuildRoleSubscriptionTierTemplateBasicInfo = function GuildRoleSubscriptionTierTemplateBasicInfo(template) {
  let dependencyMap;
  let description;
  let descriptionTextProps;
  let descriptionTextStyle;
  let image;
  let importDefault;
  let name;
  let price_tier;
  let subscriptionPlanTextStyle;
  template = template.template;
  ({ handleSelectTemplateInPreview: importDefault, closeActionSheet: dependencyMap, descriptionTextProps } = template);
  ({ subscriptionPlanTextStyle, descriptionTextStyle } = template);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container };
  obj = { style: tmp.header };
  ({ image, name, price_tier, description } = template.listings[0]);
  obj = { source: { uri: image }, style: tmp.image };
  const items = [callback(importDefault(5085), obj), callback(template(1273).Spacer, { size: 16 }), ];
  const obj1 = { style: { flexShrink: 1 } };
  const obj2 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", style: { flexWrap: "wrap" }, children: name };
  const items1 = [callback(template(4126).Text, obj2), callback(template(1273).Spacer, { size: 4 }), ];
  const obj3 = { variant: "heading-md/medium", style: subscriptionPlanTextStyle };
  const intl = template(1212).intl;
  const obj4 = {};
  let obj7 = template(5616);
  obj4.price = obj7.formatPrice(price_tier, CurrencyCodes.USD);
  obj4.interval = template(14170).formatPlanInterval({ interval: SubscriptionIntervalTypes.MONTH, interval_count: 1 });
  obj3.children = intl.format(template(1212).t.CgmBaG, obj4);
  items1[2] = callback(template(4126).Text, obj3);
  obj1.children = items1;
  items[2] = callback2(View, obj1);
  obj.children = items;
  const items2 = [callback2(View, obj), , ];
  const obj6 = { variant: "text-sm/normal", style: descriptionTextStyle };
  const merged = Object.assign(descriptionTextProps);
  obj6["children"] = description;
  items2[1] = callback(template(4126).Text, obj6);
  obj7 = {};
  const intl2 = template(1212).intl;
  obj7.text = intl2.string(template(1212).t["1W7mCt"]);
  obj7.pillStyle = tmp.templateCTAButton;
  obj7.onPress = function onPress() {
    return callback(template, closure_2);
  };
  obj7.grow = true;
  items2[2] = callback(template(4544).BaseTextButton, obj7);
  obj.children = items2;
  return callback2(View, obj);
};
