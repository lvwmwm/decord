// Module ID: 17612
// Function ID: 17613
// Name: GuildRoleSubscriptionTierTemplateFullCard
// Dependencies: [19, 17, 21, 4836, 576, 1177, 15750, 4832, 14782, 6400, 1613, 6571, 17613, 6045, 1115, 17614, 9807, 17615, 2]
// Exports: default

// Module 17612 (GuildRoleSubscriptionTierTemplateFullCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import Text_Text from "Text/Text" /* 4832 */;
import GuildRoleSubscriptionCard from "GuildRoleSubscriptionCard" /* 14782 */;
import GuildRoleSubscriptionGatedChannelIconDefault from "GuildRoleSubscriptionGatedChannelIcon" /* 15750 */;
import GuildRoleSubscriptionTierTemplateUtils from "GuildRoleSubscriptionTierTemplateUtils" /* 17615 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, _require;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
function SectionSeparator() {
  let items;
  const obj = { children: items };
  items = [, , ];
  const tmp = closure_7();
  items[0] = React3(native.Spacer, { size: 24 });
  const obj2 = { style: tmp.separator };
  items[1] = React3(View, obj2);
  items[2] = React3(native.Spacer, { size: 24 });
  return metroRequire(hasOwnProperty, obj);
}
function BenefitRow(description) {
  let items;
  let items1;
  description = description.description;
  const title = description.title;
  const tmp = closure_7();
  const obj = { style: tmp.benefitRowContainer, children: items };
  items = [, ];
  const obj2 = { children: React3(GuildRoleSubscriptionGatedChannelIconDefault, {}) };
  items[0] = React3(View, obj2);
  const obj3 = { style: tmp.benefitTextContainer, children: items1 };
  items1 = [title, ];
  let tmp4Result = null;
  const tmp4 = React3;
  if (null != description) {
    const obj4 = { style: tmp.benefitDescription, variant: "text-sm/normal", color: "interactive-text-default", children: description };
    tmp4Result = tmp4(Text_Text.Text, obj4);
  }
  items1[1] = tmp4Result;
  items[1] = metroRequire(View, obj3);
  return metroRequire(View, obj);
}
function BenefitSection(arg0) {
  let children;
  let items;
  let sectionTitle;
  const obj = { children: items };
  ({ sectionTitle, children } = arg0);
  items = [React3(GuildRoleSubscriptionCard.SectionTitle, { children: sectionTitle }), React3(native.Spacer, { size: 14 }), children];
  return metroRequire(hasOwnProperty, obj);
}
const View = react_native.View;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, subscriptionPlanTextStyle: obj3, descriptionPlanTextStyle: obj4, content: { paddingTop: 24 }, separator: obj5, benefitRowContainer: { flexDirection: "row", justifyContent: "flex-start" }, benefitTextContainer: { flex: 1, justifyContent: "center", marginLeft: 16 }, benefitDescription: { marginTop: 2 }, channelTitle: { flexDirection: "row", alignItems: "center" }, channelIcon: { marginEnd: 8 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1, padding: 16 };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj4 = { color: nativeDefault.colors.TEXT_DEFAULT, paddingTop: 16, paddingBottom: 24 };
obj5 = { borderBottomWidth: 1, marginLeft: -16, marginRight: -16, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateFullCard.tsx");

export default function GuildRoleSubscriptionTierTemplateFullCard(template) {
  let GappedList;
  let GappedList2;
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
  let items3;
  let name;
  let obj12;
  let obj14;
  let obj3;
  let obj7;
  let role_color;
  template = template.template;
  ({ guildId, handleSelectTemplateInPreview } = template);
  const tmp = closure_7();
  _require = tmp;
  let obj = require("useTypeConsolidationTextTransform");
  const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("TierTemplateFullCard", "text-xs/bold");
  const first = template.listings[0];
  ({ channels, additional_perks } = first);
  const bottom = useSafeAreaInsetsDefault().bottom;
  ({ image, name, role_color } = first);
  let obj2 = { scrollable: true, startExpanded: true, children: closure_6(View, obj3) };
  obj3 = { style: tmp.container, children: items };
  BottomSheet = require("Sheet/BottomSheet").BottomSheet;
  let obj4 = { template, handleSelectTemplateInPreview, subscriptionPlanTextStyle: tmp.subscriptionPlanTextStyle, descriptionTextStyle: tmp.descriptionPlanTextStyle, closeActionSheet: true };
  items = [closure_4(require("GuildRoleSubscriptionTierTemplateBasicInfo").GuildRoleSubscriptionTierTemplateBasicInfo, obj4), , ];
  let obj5 = { style: tmp.separator };
  items[1] = closure_4(View, obj5);
  const obj6 = { scrollsToTop: false, style: tmp.content, contentContainerStyle: obj7, children: items2 };
  obj7 = { paddingBottom: 32 + bottom };
  const BottomSheetScrollView = require("BottomSheetModal").BottomSheetScrollView;
  const obj8 = { variant: "text-sm/bold", color: "text-default", style: items1, children: intl.string(require("intl").t.CjC5XZ) };
  items1 = [{ textTransform: "uppercase" }, typeConsolidationEyebrow.style];
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items2 = [closure_4(Text, obj8), closure_4(require("native").Spacer, { size: 4 }), , , , , , , , , ];
  const obj9 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(require("intl").t.bCb3c8) };
  const Text2 = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items2[2] = closure_4(Text2, obj9);
  items2[3] = closure_4(require("native").Spacer, { size: 24 });
  const obj10 = { variant: typeConsolidationEyebrow.variant, color: "text-default", style: items3, children: intl3.string(require("intl").t.ZKyfEo) };
  items3 = [{ textTransform: "uppercase" }, typeConsolidationEyebrow.style];
  const Text3 = require("Text/Text").Text;
  intl3 = require("intl").intl;
  items2[4] = closure_4(Text3, obj10);
  items2[5] = closure_4(require("native").Spacer, { size: 8 });
  items2[6] = closure_4(require("GuildRoleSubscriptionTierTemplateRolePreview").GuildRoleSubscriptionRolePreview, { roleColor: role_color, roleImage: image, roleName: name, guildId });
  items2[7] = closure_4(SectionSeparator, {});
  const obj11 = { sectionTitle: intl4.string(require("intl").t.Ofvpfs), children: closure_4(GappedList, obj12) };
  intl4 = require("intl").intl;
  obj12 = {
    gap: 14,
    children: channels.map((children) => {
      let items;
      const obj2 = { style: closure_0.channelTitle, children: items };
      items = [, ];
      const obj = GuildRoleSubscriptionTierTemplateUtils;
      const obj3 = { style: closure_0.channelIcon, size: "xs" };
      items[0] = React3(obj.getPrivateChannelIconComponent(children.type), obj3);
      const obj4 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.name };
      items[1] = React3(Text_Text.Text, obj4);
      const obj5 = { title: metroRequire(View, obj2), description: children.description };
      return React3(BenefitRow, obj5, children.id);
    })
  };
  GappedList = require("LayoutUtils").GappedList;
  items2[8] = closure_4(BenefitSection, obj11);
  items2[9] = closure_4(SectionSeparator, {});
  const obj13 = { sectionTitle: intl5.string(require("intl").t.w7KA8R), children: closure_4(GappedList2, obj14) };
  intl5 = require("intl").intl;
  obj14 = {
    gap: 14,
    children: additional_perks.map((children, index) => {
      const obj = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.name };
      const obj2 = { title: closure_1_4(closure_0(dependencyMap[7]).Text, obj) };
      return closure_1_4(BenefitRow, obj2, index);
    })
  };
  GappedList2 = require("LayoutUtils").GappedList;
  items2[10] = closure_4(BenefitSection, obj13);
  items[2] = closure_6(BottomSheetScrollView, obj6);
  return closure_4(BottomSheet, obj2);
};
