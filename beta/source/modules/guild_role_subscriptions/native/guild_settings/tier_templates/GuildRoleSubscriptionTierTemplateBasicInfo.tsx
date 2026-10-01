// Module ID: 17613
// Function ID: 17614
// Name: GuildRoleSubscriptionTierTemplateBasicInfo
// Dependencies: [19, 17, 1374, 1085, 21, 4836, 576, 5899, 1177, 4832, 1115, 6655, 14776, 5282, 2]
// Exports: GuildRoleSubscriptionTierTemplateBasicInfo

// Module 17613 (GuildRoleSubscriptionTierTemplateBasicInfo)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import Text_Text from "Text/Text" /* 4832 */;
import BaseTextButton2 from "BaseTextButton" /* 5282 */;
import FastImageDefault from "FastImage" /* 5899 */;
import PriceUtils from "PriceUtils" /* 6655 */;
import GuildRoleSubscriptionTypeUtils from "GuildRoleSubscriptionTypeUtils" /* 14776 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let size;
const View = react_native.View;
const SubscriptionIntervalTypes = PremiumConstants.SubscriptionIntervalTypes;
const CurrencyCodes = Constants.CurrencyCodes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { paddingBottom: 24 }, header: { flexDirection: "row" }, image: size, templateCTAButton: obj2 };
size = { width: 48, height: 48, borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj2 = { borderRadius: nativeDefault.radii.sm };
let closure_8 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateBasicInfo.tsx");

export const GuildRoleSubscriptionTierTemplateBasicInfo = function GuildRoleSubscriptionTierTemplateBasicInfo(template) {
  let CgmBaG;
  let closure_129_1;
  let closure_129_2;
  let description;
  let descriptionTextProps;
  let descriptionTextStyle;
  let format;
  let image;
  let intl2;
  let items;
  let items1;
  let items2;
  let name;
  let obj6;
  let obj7;
  let obj8;
  let obj9;
  let price_tier;
  let subscriptionPlanTextStyle;
  template = template.template;
  ({ handleSelectTemplateInPreview: closure_129_1, closeActionSheet: closure_129_2, descriptionTextProps } = template);
  ({ subscriptionPlanTextStyle, descriptionTextStyle } = template);
  const tmp = closure_8();
  const obj = { style: tmp.container, children: items2 };
  const obj2 = { style: tmp.header, children: items };
  ({ image, name, price_tier, description } = template.listings[0]);
  items = [, , ];
  const obj3 = { source: { uri: image }, style: tmp.image };
  items[0] = metroRequire(FastImageDefault, obj3);
  items[1] = metroRequire(native.Spacer, { size: 16 });
  const obj4 = { style: { flexShrink: 1 }, children: items1 };
  items1 = [metroRequire(Text_Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", style: { flexWrap: "wrap" }, children: name }), metroRequire(native.Spacer, { size: 4 }), ];
  const obj5 = { variant: "heading-md/medium", style: subscriptionPlanTextStyle, children: format(CgmBaG, obj6) };
  const Text = Text_Text.Text;
  const intl = intl3.intl;
  format = intl.format;
  obj6 = { price: obj7.formatPrice(price_tier, CurrencyCodes.USD), interval: obj8.formatPlanInterval(obj9) };
  CgmBaG = intl3.t.CgmBaG;
  obj7 = PriceUtils;
  obj8 = GuildRoleSubscriptionTypeUtils;
  obj9 = { interval: SubscriptionIntervalTypes.MONTH, interval_count: 1 };
  items1[2] = metroRequire(Text, obj5);
  items[2] = metroImportDefault(View, obj4);
  items2 = [metroImportDefault(View, obj2), , ];
  const obj10 = { variant: "text-sm/normal", style: descriptionTextStyle, children: description };
  const Text2 = Text_Text.Text;
  const merged = Object.assign(descriptionTextProps);
  items2[1] = metroRequire(Text2, obj10);
  const obj11 = {
    text: intl2.string(intl3.t["1W7mCt"]),
    pillStyle: tmp.templateCTAButton,
    onPress() {
      return closure_1_1(template, closure_1_2);
    },
    grow: true
  };
  const BaseTextButton = BaseTextButton2.BaseTextButton;
  intl2 = intl3.intl;
  items2[2] = metroRequire(BaseTextButton, obj11);
  return metroImportDefault(View, obj);
};
