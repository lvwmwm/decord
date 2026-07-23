// Module ID: 16479
// Function ID: 128400
// Name: SectionSeparator
// Dependencies: [31, 27, 33, 4130, 689, 1273, 14971, 4126, 14126, 1557, 5187, 16480, 5189, 1212, 16481, 9405, 16482, 2]
// Exports: default

// Module 16479 (SectionSeparator)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let require = arg1;
function SectionSeparator() {
  let obj = {};
  const items = [callback(require(1273) /* Button */.Spacer, { size: 24 }), , ];
  obj = { style: _createForOfIteratorHelperLoose().separator };
  items[1] = callback(View, obj);
  items[2] = callback(require(1273) /* Button */.Spacer, { size: 24 });
  obj.children = items;
  return callback2(closure_5, obj);
}
function BenefitRow(description) {
  description = description.description;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.benefitRowContainer };
  obj = { children: callback(importDefault(14971), {}) };
  const items = [callback(View, obj), ];
  obj = { style: tmp.benefitTextContainer };
  const items1 = [description.title, ];
  let tmp6 = null;
  if (null != description) {
    const obj1 = { style: tmp.benefitDescription, variant: "text-sm/normal", color: "interactive-text-default", children: description };
    tmp6 = callback(require(4126) /* Text */.Text, obj1);
  }
  items1[1] = tmp6;
  obj.children = items1;
  items[1] = closure_6(View, obj);
  obj.children = items;
  return closure_6(View, obj);
}
function BenefitSection(arg0) {
  let children;
  let sectionTitle;
  const obj = {};
  ({ sectionTitle, children } = arg0);
  const items = [callback(require(14126) /* SectionTitle */.SectionTitle, { children: sectionTitle }), callback(require(1273) /* Button */.Spacer, { size: 14 }), children];
  obj.children = items;
  return callback2(closure_5, obj);
}
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, flex: 1, padding: 16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.subscriptionPlanTextStyle = { color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj2 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, paddingTop: 16, paddingBottom: 24 };
_createForOfIteratorHelperLoose.descriptionPlanTextStyle = obj2;
_createForOfIteratorHelperLoose.content = { paddingTop: 24 };
const obj3 = { borderBottomWidth: 1, marginLeft: -16, marginRight: -16, borderColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_HOVER };
_createForOfIteratorHelperLoose.separator = obj3;
_createForOfIteratorHelperLoose.benefitRowContainer = { flexDirection: "row", justifyContent: "flex-start" };
_createForOfIteratorHelperLoose.benefitTextContainer = { flex: 1, justifyContent: "center", marginLeft: 16 };
_createForOfIteratorHelperLoose.benefitDescription = { marginTop: 2 };
_createForOfIteratorHelperLoose.channelTitle = { flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.channelIcon = { marginEnd: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateFullCard.tsx");

export default function GuildRoleSubscriptionTierTemplateFullCard(template) {
  let additional_perks;
  let channels;
  let guildId;
  let handleSelectTemplateInPreview;
  let image;
  let name;
  let role_color;
  template = template.template;
  ({ guildId, handleSelectTemplateInPreview } = template);
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  const first = template.listings[0];
  ({ channels, additional_perks } = first);
  ({ image, name, role_color } = first);
  let obj = { scrollable: true, startExpanded: true };
  obj = { style: tmp.container };
  obj = { template, handleSelectTemplateInPreview, subscriptionPlanTextStyle: tmp.subscriptionPlanTextStyle, descriptionTextStyle: tmp.descriptionPlanTextStyle, closeActionSheet: true };
  let items = [callback(require(16480) /* GuildRoleSubscriptionTierTemplateBasicInfo */.GuildRoleSubscriptionTierTemplateBasicInfo, obj), callback(View, { style: tmp.separator }), ];
  const obj2 = { scrollsToTop: false, style: tmp.content, contentContainerStyle: obj3 };
  const obj4 = { variant: "text-sm/bold", color: "text-default", style: { textTransform: "uppercase" } };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj4.children = intl.string(require(1212) /* getSystemLocale */.t.CjC5XZ);
  const items1 = [callback(require(4126) /* Text */.Text, obj4), callback(require(1273) /* Button */.Spacer, { size: 4 }), , , , , , , , , ];
  const obj5 = { variant: "text-sm/normal", color: "text-muted" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj5.children = intl2.string(require(1212) /* getSystemLocale */.t.bCb3c8);
  items1[2] = callback(require(4126) /* Text */.Text, obj5);
  items1[3] = callback(require(1273) /* Button */.Spacer, { size: 24 });
  const obj6 = { variant: "text-xs/bold", color: "text-default", style: { textTransform: "uppercase" } };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj6.children = intl3.string(require(1212) /* getSystemLocale */.t.ZKyfEo);
  items1[4] = callback(require(4126) /* Text */.Text, obj6);
  items1[5] = callback(require(1273) /* Button */.Spacer, { size: 8 });
  items1[6] = callback(require(16481) /* GuildRoleSubscriptionRolePreview */.GuildRoleSubscriptionRolePreview, { roleColor: role_color, roleImage: image, roleName: name, guildId });
  items1[7] = callback(SectionSeparator, {});
  const obj7 = {};
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj7.sectionTitle = intl4.string(require(1212) /* getSystemLocale */.t.Ofvpfs);
  const obj8 = {
    gap: 14,
    children: channels.map((description) => {
      let obj = tmp(outer1_2[16]);
      obj = { style: tmp.channelTitle };
      obj = { style: tmp.channelIcon, size: "xs" };
      const items = [outer1_4(obj.getPrivateChannelIconComponent(description.type), obj), ];
      const obj1 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: description.name };
      items[1] = outer1_4(tmp(outer1_2[7]).Text, obj1);
      obj.children = items;
      return outer1_4(outer1_9, { title: outer1_6(outer1_3, obj), description: description.description }, description.id);
    })
  };
  obj7.children = callback(require(9405) /* GappedList */.GappedList, obj8);
  items1[8] = callback(BenefitSection, obj7);
  items1[9] = callback(SectionSeparator, {});
  const obj9 = {};
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj9.sectionTitle = intl5.string(require(1212) /* getSystemLocale */.t.w7KA8R);
  const obj10 = {
    gap: 14,
    children: additional_perks.map((name) => {
      let obj = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: name.name };
      obj = { title: outer1_4(tmp(outer1_2[7]).Text, obj) };
      return outer1_4(outer1_9, obj, arg1);
    })
  };
  obj9.children = callback(require(9405) /* GappedList */.GappedList, obj10);
  items1[10] = callback(BenefitSection, obj9);
  obj2.children = items1;
  items[2] = callback2(require(5189) /* BottomSheetModal */.BottomSheetScrollView, obj2);
  obj.children = items;
  obj.children = callback2(View, obj);
  return callback(require(5187) /* Background */.BottomSheet, obj);
};
