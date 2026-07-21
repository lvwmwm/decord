// Module ID: 16346
// Function ID: 126123
// Name: SectionSeparator
// Dependencies: []
// Exports: default

// Module 16346 (SectionSeparator)
function SectionSeparator() {
  let obj = {};
  const items = [callback(arg1(dependencyMap[5]).Spacer, { size: 24 }), , ];
  obj = { style: callback3().separator };
  items[1] = callback(View, obj);
  items[2] = callback(arg1(dependencyMap[5]).Spacer, { size: 24 });
  obj.children = items;
  return callback2(closure_5, obj);
}
function BenefitRow(description) {
  description = description.description;
  const tmp = callback3();
  let obj = { style: tmp.benefitRowContainer };
  obj = { children: callback(importDefault(dependencyMap[6]), {}) };
  const items = [callback(View, obj), ];
  obj = { style: tmp.benefitTextContainer };
  const items1 = [description.title, ];
  let tmp6 = null;
  if (null != description) {
    const obj1 = { style: tmp.benefitDescription, children: description };
    tmp6 = callback(arg1(dependencyMap[7]).Text, obj1);
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
  const items = [callback(arg1(dependencyMap[8]).SectionTitle, { children: sectionTitle }), callback(arg1(dependencyMap[5]).Spacer, { size: 14 }), children];
  obj.children = items;
  return callback2(closure_5, obj);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH };
obj.container = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.subscriptionPlanTextStyle = { color: importDefault(dependencyMap[4]).colors.MOBILE_TEXT_HEADING_PRIMARY };
const obj2 = { "Null": false, "Null": false, "Null": false, color: importDefault(dependencyMap[4]).colors.TEXT_DEFAULT };
obj.descriptionPlanTextStyle = obj2;
obj.content = { paddingTop: 24 };
const obj3 = { flexDirection: null, paddingRight: null, alignItems: null, borderColor: importDefault(dependencyMap[4]).colors.INTERACTIVE_BACKGROUND_HOVER };
obj.separator = obj3;
obj.benefitRowContainer = {};
obj.benefitTextContainer = { "Null": "heading-md/semibold", "Null": "display", "Null": false };
obj.benefitDescription = { marginTop: 2 };
obj.channelTitle = {};
obj.channelIcon = { marginEnd: 8 };
let closure_7 = obj.createStyles(obj);
const obj1 = { color: importDefault(dependencyMap[4]).colors.MOBILE_TEXT_HEADING_PRIMARY };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateFullCard.tsx");

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
  const tmp = callback3();
  const arg1 = tmp;
  const first = template.listings[0];
  ({ channels, additional_perks } = first);
  ({ image, name, role_color } = first);
  let obj = { 1891290120: null, -475247768: null };
  obj = { style: tmp.container };
  obj = { template, handleSelectTemplateInPreview, subscriptionPlanTextStyle: tmp.subscriptionPlanTextStyle, descriptionTextStyle: tmp.descriptionPlanTextStyle, closeActionSheet: true };
  const items = [callback(arg1(dependencyMap[11]).GuildRoleSubscriptionTierTemplateBasicInfo, obj), callback(View, { style: tmp.separator }), ];
  const obj2 = { scrollsToTop: false, style: tmp.content, contentContainerStyle: obj3 };
  const obj4 = { style: { textTransform: "uppercase" } };
  const intl = arg1(dependencyMap[13]).intl;
  obj4.children = intl.string(arg1(dependencyMap[13]).t.CjC5XZ);
  const items1 = [callback(arg1(dependencyMap[7]).Text, obj4), callback(arg1(dependencyMap[5]).Spacer, { size: 4 }), , , , , , , , , ];
  const obj5 = {};
  const intl2 = arg1(dependencyMap[13]).intl;
  obj5.children = intl2.string(arg1(dependencyMap[13]).t.bCb3c8);
  items1[2] = callback(arg1(dependencyMap[7]).Text, obj5);
  items1[3] = callback(arg1(dependencyMap[5]).Spacer, { size: 24 });
  const obj6 = { style: { textTransform: "uppercase" } };
  const intl3 = arg1(dependencyMap[13]).intl;
  obj6.children = intl3.string(arg1(dependencyMap[13]).t.ZKyfEo);
  items1[4] = callback(arg1(dependencyMap[7]).Text, obj6);
  items1[5] = callback(arg1(dependencyMap[5]).Spacer, { size: 8 });
  items1[6] = callback(arg1(dependencyMap[14]).GuildRoleSubscriptionRolePreview, { roleColor: role_color, roleImage: image, roleName: name, guildId });
  items1[7] = callback(SectionSeparator, {});
  const obj7 = {};
  const intl4 = arg1(dependencyMap[13]).intl;
  obj7.sectionTitle = intl4.string(arg1(dependencyMap[13]).t.Ofvpfs);
  const obj8 = {
    gap: 14,
    children: channels.map((children) => {
      let obj = tmp(closure_2[16]);
      obj = { style: tmp.channelTitle };
      obj = { style: tmp.channelIcon, size: "xs" };
      const items = [callback(obj.getPrivateChannelIconComponent(children.type), obj), callback(tmp(closure_2[7]).Text, { children: children.name })];
      obj.children = items;
      return callback(closure_9, { title: callback2(closure_3, obj), description: children.description }, children.id);
    })
  };
  obj7.children = callback(arg1(dependencyMap[15]).GappedList, obj8);
  items1[8] = callback(BenefitSection, obj7);
  items1[9] = callback(SectionSeparator, {});
  const obj9 = {};
  const intl5 = arg1(dependencyMap[13]).intl;
  obj9.sectionTitle = intl5.string(arg1(dependencyMap[13]).t.w7KA8R);
  const obj10 = {
    gap: 14,
    children: additional_perks.map((children) => {
      let obj = { children: children.name };
      obj = { title: callback(tmp(closure_2[7]).Text, obj) };
      return callback(closure_9, obj, arg1);
    })
  };
  obj9.children = callback(arg1(dependencyMap[15]).GappedList, obj10);
  items1[10] = callback(BenefitSection, obj9);
  obj2.children = items1;
  items[2] = callback2(arg1(dependencyMap[12]).BottomSheetScrollView, obj2);
  obj.children = items;
  obj.children = callback2(View, obj);
  return callback(arg1(dependencyMap[10]).BottomSheet, obj);
};
