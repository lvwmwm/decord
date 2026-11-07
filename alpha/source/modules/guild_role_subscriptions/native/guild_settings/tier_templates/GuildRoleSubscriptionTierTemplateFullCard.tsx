// Module ID: 20392
// Function ID: 20393
// Name: GuildRoleSubscriptionTierTemplateFullCard
// Dependencies: [19, 17, 21, 5140, 575, 18500, 5751, 17536, 1627, 5388, 20393, 5392, 1113, 1187, 20394, 20395, 2]
// Exports: default

// Module 20392 (GuildRoleSubscriptionTierTemplateFullCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import Text_Text from "Text/Text" /* 5751 */;
import GuildRoleSubscriptionCard from "GuildRoleSubscriptionCard" /* 17536 */;
import GuildRoleSubscriptionGatedChannelIconDefault from "GuildRoleSubscriptionGatedChannelIcon" /* 18500 */;
import GuildRoleSubscriptionTierTemplateUtils from "GuildRoleSubscriptionTierTemplateUtils" /* 20395 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let obj10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
function SectionSeparator() {
  let items;
  const obj = { style: items };
  items = [, ];
  ({ separator: arr[0], sectionSeparator: arr[1] } = closure_6());
  closure_6();
  return React3(View, obj);
}
function BenefitRow(description) {
  let items;
  let items1;
  description = description.description;
  const title = description.title;
  const tmp = closure_6();
  const obj = { style: tmp.benefitRowContainer, children: items };
  items = [, ];
  const obj2 = { children: React3(GuildRoleSubscriptionGatedChannelIconDefault, {}) };
  items[0] = React3(View, obj2);
  const obj3 = { style: tmp.benefitTextContainer, children: items1 };
  items1 = [title, ];
  let tmp4Result = null;
  const tmp4 = React3;
  if (null != description) {
    const obj4 = { style: tmp.benefitDescription, variant: "body-sm/normal", color: "interactive-text-default", children: description };
    tmp4Result = tmp4(Text_Text.Text, obj4);
  }
  items1[1] = tmp4Result;
  items[1] = hasOwnProperty(View, obj3);
  return hasOwnProperty(View, obj);
}
function BenefitSection(arg0) {
  let children;
  let items;
  let sectionTitle;
  ({ sectionTitle, children } = arg0);
  const obj = { style: closure_6().benefitSection, children: items };
  items = [React3(GuildRoleSubscriptionCard.SectionTitle, { children: sectionTitle }), children];
  return hasOwnProperty(View, obj);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, subscriptionPlanTextStyle: obj4, descriptionPlanTextStyle: obj5, content: obj6, separator: obj7, sectionSeparator: obj8, benefitSection: { gap: 14 }, benefitRowContainer: { flexDirection: "row", justifyContent: "flex-start" }, benefitTextContainer: obj9, benefitDescription: { marginTop: 2 }, channelTitle: { flexDirection: "row", alignItems: "center" }, channelIcon: obj10 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
obj4 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj5 = { color: nativeDefault.colors.TEXT_DEFAULT, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24 };
obj6 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24 };
obj7 = { borderBottomWidth: 1, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
obj8 = { marginVertical: nativeDefault.space.PX_24 };
obj9 = { flex: 1, justifyContent: "center", marginLeft: nativeDefault.space.PX_16 };
obj10 = { marginEnd: nativeDefault.space.PX_8 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateFullCard.tsx");

export default function GuildRoleSubscriptionTierTemplateFullCard(template) {
  let additional_perks;
  let channels;
  let closure_0;
  let guildId;
  let handleSelectTemplateInPreview;
  let image;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let items1;
  let items2;
  let name;
  let obj2;
  let obj4;
  let role_color;
  template = template.template;
  ({ guildId, handleSelectTemplateInPreview } = template);
  const tmp = closure_6();
  _require = tmp;
  const first = template.listings[0];
  ({ channels, additional_perks } = first);
  const bottom = useSafeAreaInsetsDefault().bottom;
  ({ image, name, role_color } = first);
  let obj = { scrollable: true, startExpanded: true, children: closure_5(View, obj2) };
  obj2 = { style: tmp.container, children: items };
  let obj3 = { style: tmp.header, children: closure_4(require("GuildRoleSubscriptionTierTemplateBasicInfo").GuildRoleSubscriptionTierTemplateBasicInfo, obj4) };
  const BottomSheet = require("Sheet/BottomSheet").BottomSheet;
  obj4 = { template, handleSelectTemplateInPreview, subscriptionPlanTextStyle: tmp.subscriptionPlanTextStyle, descriptionTextStyle: tmp.descriptionPlanTextStyle, closeActionSheet: true };
  items = [closure_4(View, obj3), , ];
  let obj5 = { style: tmp.separator };
  items[1] = closure_4(View, obj5);
  const obj6 = { scrollsToTop: false, contentContainerStyle: items1, children: items2 };
  items1 = [tmp.content, ];
  const obj7 = { paddingBottom: nativeDefault.space.PX_32 + nativeDefault.space.PX_16 + bottom };
  const BottomSheetScrollView = require("BottomSheetModal").BottomSheetScrollView;
  items1[1] = obj7;
  const obj8 = { variant: "body-sm/semibold", color: "text-default", children: intl.string(require("intl").t.CjC5XZ) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items2 = [closure_4(Text, obj8), closure_4(require("native").Spacer, { size: 4 }), , , , , , , , , ];
  const obj9 = { variant: "body-sm/normal", color: "text-muted", children: intl2.string(require("intl").t.bCb3c8) };
  const Text2 = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items2[2] = closure_4(Text2, obj9);
  items2[3] = closure_4(require("native").Spacer, { size: 24 });
  const obj10 = { variant: "body-sm/medium", color: "text-default", children: intl3.string(require("intl").t.ZKyfEo) };
  const Text3 = require("Text/Text").Text;
  intl3 = require("intl").intl;
  items2[4] = closure_4(Text3, obj10);
  items2[5] = closure_4(require("native").Spacer, { size: 8 });
  items2[6] = closure_4(require("GuildRoleSubscriptionTierTemplateRolePreview").GuildRoleSubscriptionRolePreview, { roleColor: role_color, roleImage: image, roleName: name, guildId });
  items2[7] = closure_4(SectionSeparator, {});
  const obj11 = {
    sectionTitle: intl4.string(require("intl").t.Ofvpfs),
    children: channels.map((children) => {
      let items;
      const obj2 = { style: closure_0.channelTitle, children: items };
      items = [, ];
      const obj = GuildRoleSubscriptionTierTemplateUtils;
      const obj3 = { style: closure_0.channelIcon, size: "xs" };
      items[0] = React3(obj.getPrivateChannelIconComponent(children.type), obj3);
      const obj4 = { variant: "body-md/medium", color: "mobile-text-heading-primary", children: children.name };
      items[1] = React3(Text_Text.Text, obj4);
      const obj5 = { title: hasOwnProperty(View, obj2), description: children.description };
      return React3(BenefitRow, obj5, children.id);
    })
  };
  intl4 = require("intl").intl;
  items2[8] = closure_4(BenefitSection, obj11);
  items2[9] = closure_4(SectionSeparator, {});
  const obj12 = {
    sectionTitle: intl5.string(require("intl").t.w7KA8R),
    children: additional_perks.map((children, index) => {
      const obj = { variant: "body-md/medium", color: "mobile-text-heading-primary", children: children.name };
      const obj2 = { title: closure_1_4(closure_0(dependencyMap[6]).Text, obj) };
      return closure_1_4(BenefitRow, obj2, index);
    })
  };
  intl5 = require("intl").intl;
  items2[10] = closure_4(BenefitSection, obj12);
  items[2] = closure_5(BottomSheetScrollView, obj6);
  return closure_4(BottomSheet, obj);
};
