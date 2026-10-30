// Module ID: 19936
// Function ID: 19937
// Name: GuildRoleSubscriptionTierTemplateBasicInfo
// Dependencies: [19, 17, 21, 5009, 575, 5712, 1188, 5619, 17151, 5629, 1114, 2]
// Exports: GuildRoleSubscriptionTierTemplateBasicInfo

// Module 19936 (GuildRoleSubscriptionTierTemplateBasicInfo)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import FastImageDefault from "FastImage" /* 5712 */;
import GuildRoleSubscriptionTypeUtils from "GuildRoleSubscriptionTypeUtils" /* 17151 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: { paddingBottom: 24 }, header: { flexDirection: "row" }, image: size };
size = { width: 48, height: 48, borderRadius: nativeDefault.radii.sm };
let closure_6 = createStyles.createStyles(obj);
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
  items = [, , ];
  const obj3 = { source: { uri: image }, style: tmp.image };
  items[0] = React3(FastImageDefault, obj3);
  items[1] = React3(native.Spacer, { size: 16 });
  const obj4 = { style: { flexShrink: 1 }, children: items1 };
  items1 = [React3(Text_Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", style: { flexWrap: "wrap" }, children: name }), React3(native.Spacer, { size: 4 }), ];
  const obj5 = { variant: "heading-md/medium", style: subscriptionPlanTextStyle, children: obj6.formatMonthlyPriceLabel(price_tier) };
  const Text = Text_Text.Text;
  obj6 = GuildRoleSubscriptionTypeUtils;
  items1[2] = React3(Text, obj5);
  items[2] = hasOwnProperty(View, obj4);
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
