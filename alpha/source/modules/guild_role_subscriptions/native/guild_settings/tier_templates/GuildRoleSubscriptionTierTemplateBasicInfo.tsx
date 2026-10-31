// Module ID: 19994
// Function ID: 19995
// Name: GuildRoleSubscriptionTierTemplateBasicInfo
// Dependencies: [19, 17, 21, 5014, 575, 5717, 5624, 17207, 5634, 1113, 2]
// Exports: GuildRoleSubscriptionTierTemplateBasicInfo

// Module 19994 (GuildRoleSubscriptionTierTemplateBasicInfo)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import FastImageDefault from "FastImage" /* 5717 */;
import GuildRoleSubscriptionTypeUtils from "GuildRoleSubscriptionTypeUtils" /* 17207 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, headerText: obj4, image: size };
obj2 = { paddingBottom: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj4 = { flexShrink: 1, gap: nativeDefault.space.PX_4 };
size = { width: 48, height: 48, borderRadius: nativeDefault.radii.sm };
let closure_6 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateBasicInfo.tsx");

export function GuildRoleSubscriptionTierTemplateBasicInfo(template) {
  let closure_129_1;
  let closure_129_2;
  let description;
  let descriptionTextProps;
  let descriptionTextStyle;
  let image;
  let intl;
  let items;
  let items1;
  let items2;
  let name;
  let obj6;
  let price_tier;
  let subscriptionPlanTextStyle;
  template = template.template;
  ({ handleSelectTemplateInPreview: closure_129_1, closeActionSheet: closure_129_2, descriptionTextProps } = template);
  ({ subscriptionPlanTextStyle, descriptionTextStyle } = template);
  const tmp = closure_6();
  const obj = { style: tmp.container, children: items2 };
  const obj2 = { style: tmp.header, children: items };
  ({ image, name, price_tier, description } = template.listings[0]);
  items = [, ];
  const obj3 = { source: { uri: image }, style: tmp.image };
  items[0] = React3(FastImageDefault, obj3);
  const obj4 = { style: tmp.headerText, children: items1 };
  items1 = [React3(Text_Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", style: { flexWrap: "wrap" }, children: name }), ];
  const obj5 = { variant: "heading-md/medium", style: subscriptionPlanTextStyle, children: obj6.formatMonthlyPriceLabel(price_tier) };
  const Text = Text_Text.Text;
  obj6 = GuildRoleSubscriptionTypeUtils;
  items1[1] = React3(Text, obj5);
  items[1] = hasOwnProperty(View, obj4);
  items2 = [hasOwnProperty(View, obj2), , ];
  const obj7 = { variant: "text-sm/normal", style: descriptionTextStyle, children: description };
  const Text2 = Text_Text.Text;
  const merged = Object.assign(descriptionTextProps);
  items2[1] = React3(Text2, obj7);
  const obj8 = {
    text: intl.string(intl2.t["1W7mCt"]),
    onPress() {
      return closure_1_1(template, closure_1_2);
    },
    grow: true
  };
  const Button = components_Button_Button.Button;
  intl = intl2.intl;
  items2[2] = React3(Button, obj8);
  return hasOwnProperty(View, obj);
}
