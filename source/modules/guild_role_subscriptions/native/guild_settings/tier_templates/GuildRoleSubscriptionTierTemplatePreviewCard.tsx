// Module ID: 16361
// Function ID: 126215
// Name: ContentHeader
// Dependencies: []
// Exports: default

// Module 16361 (ContentHeader)
function ContentHeader(arg0) {
  let count;
  let title;
  ({ count, title } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.contentHeader };
  obj = { cachedAt: true, edpbxy: true, style: tmp.contentHeader, children: count };
  const items = [callback(arg1(dependencyMap[6]).Text, obj), " ", title];
  obj.children = items;
  return callback2(arg1(dependencyMap[6]).Text, obj);
}
function Separator() {
  return callback(closure_6, { style: callback3().separator });
}
function BenefitShowCase(children) {
  const title = children.title;
  let obj = {};
  let tmp3 = title;
  if ("string" === typeof title) {
    obj = { cachedAt: null, edpbxy: "Array", children: title };
    tmp3 = callback(arg1(dependencyMap[6]).Text, obj);
  }
  const items = [tmp3, callback(arg1(dependencyMap[11]).Spacer, { size: 2 }), callback(arg1(dependencyMap[6]).Text, { children: children.description })];
  obj.children = items;
  return closure_10(closure_6, obj);
}
function ChannelBenefitShowCase(channel) {
  let description;
  let name;
  let type;
  ({ description, type, name } = channel.channel);
  let obj = arg1(dependencyMap[12]);
  obj = { style: { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F" } };
  const items = [callback(obj.getPrivateChannelIconComponent(type), { size: "xs" }), callback(arg1(dependencyMap[11]).Spacer, { size: 4 }), ];
  obj = { cachedAt: null, edpbxy: "Array", children: name };
  items[2] = callback(arg1(dependencyMap[6]).Text, obj);
  obj.children = items;
  return callback(BenefitShowCase, { title: callback2(closure_6, obj), description });
}
function ViewEntireTemplateFooter() {
  const tmp = callback3();
  let obj = { style: tmp.viewEntireTemplateFooter };
  obj = {};
  obj = { style: { marginTop: -1 } };
  const intl = arg1(dependencyMap[13]).intl;
  obj.children = intl.string(arg1(dependencyMap[13]).t.kejaOD);
  const items = [callback(arg1(dependencyMap[6]).Text, obj), callback(arg1(dependencyMap[11]).Spacer, { size: 3 }), callback(closure_6, { style: tmp.viewEntireTemplateFooterUnderline })];
  obj.children = items;
  const items1 = [callback2(closure_6, obj), ];
  const obj2 = {};
  const obj3 = { size: arg1(dependencyMap[11]).Icon.Sizes.REFRESH_SMALL_16, source: importDefault(dependencyMap[14]) };
  const items2 = [{ rotate: "180deg" }];
  obj3.style = { transform: items2 };
  obj2.children = callback(arg1(dependencyMap[11]).Icon, obj3);
  items1[1] = callback(closure_6, obj2);
  obj.children = items1;
  return callback2(closure_6, obj);
}
let closure_4 = importAll(dependencyMap[0]);
({ TouchableOpacity: closure_5, View: closure_6 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ AnalyticEvents: closure_7, GuildSettingsSections: closure_8 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { padding: 16, borderRadius: importDefault(dependencyMap[5]).radii.md, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_NORMAL, width: 319 };
obj.container = obj;
const tmp4 = arg1(dependencyMap[3]);
obj.subscriptionPlanTextStyle = { color: importDefault(dependencyMap[5]).colors.TEXT_SUBTLE };
const obj2 = { "Null": null, "Null": null, "Null": null, color: importDefault(dependencyMap[5]).colors.TEXT_MUTED };
obj.descriptionPlanTextStyle = obj2;
const obj3 = { style: 141317.775, mediaPlaybackRequiresUserAction: 0.00000000000000000000000000000000000000000000000000000000000004133483696512099, muteVideo: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011780288631753582, unMuteVideo: "\u{1F9D1}\u{1F3FC}\u200D\u{1F9BC}", backgroundColor: importDefault(dependencyMap[5]).colors.INTERACTIVE_BACKGROUND_HOVER };
obj.separator = obj3;
const obj1 = { color: importDefault(dependencyMap[5]).colors.TEXT_SUBTLE };
obj.contentContainer = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH, borderTopRightRadius: importDefault(dependencyMap[5]).radii.sm, borderTopLeftRadius: importDefault(dependencyMap[5]).radii.sm, padding: 16, paddingBottom: 0 };
obj.contentHeader = { textTransform: "uppercase" };
const obj4 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH, borderTopRightRadius: importDefault(dependencyMap[5]).radii.sm, borderTopLeftRadius: importDefault(dependencyMap[5]).radii.sm, padding: 16, paddingBottom: 0 };
obj.viewEntireTemplateFooter = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW, borderBottomLeftRadius: importDefault(dependencyMap[5]).radii.sm, borderBottomRightRadius: importDefault(dependencyMap[5]).radii.sm };
const obj6 = { 0: null, -9223372036854775808: null, 0: null, 9223372036854775807: null, 0: null, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_MUTED };
obj.viewEntireTemplateFooterUnderline = obj6;
let closure_11 = obj.createStyles(obj);
const obj5 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW, borderBottomLeftRadius: importDefault(dependencyMap[5]).radii.sm, borderBottomRightRadius: importDefault(dependencyMap[5]).radii.sm };
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePreviewCard.tsx");

export default function GuildRoleSubscriptionTierTemplatePreviewCard(template) {
  let additional_perks;
  let channels;
  let guildId;
  let priceTiers;
  template = template.template;
  const arg1 = template;
  ({ priceTiers, guildId } = template);
  const importDefault = guildId;
  const groupListingId = template.groupListingId;
  const importAll = groupListingId;
  let suggestedUnusedPrices;
  let tmp7;
  let callback1;
  const tmp = callback3();
  let obj = arg1(dependencyMap[15]);
  const navigation = obj.useNavigation();
  const dependencyMap = navigation;
  let obj1 = importAll(dependencyMap[16]);
  const addNewEditStateFromTemplate = obj1.useEditStateIds(groupListingId, template.editGroupId, { includeSoftDeleted: true }).addNewEditStateFromTemplate;
  const React = addNewEditStateFromTemplate;
  const first = template.listings[0];
  ({ channels, additional_perks } = first);
  const first1 = additional_perks[0];
  const items = [addNewEditStateFromTemplate, groupListingId, navigation, guildId];
  const callback = React.useCallback((selectedTemplate) => {
    let obj = template(navigation[17]);
    const result = obj.stashTemplateChannels(selectedTemplate, guildId);
    if (arg1) {
      guildId(navigation[7]).hideActionSheet();
      const obj2 = guildId(navigation[7]);
    }
    const tmp2 = addNewEditStateFromTemplate(selectedTemplate);
    obj = { exit_reason: "template_selected" };
    const obj3 = guildId(navigation[18]);
    const merged = Object.assign(template(navigation[19]).collectGuildAnalyticsMetadata(guildId));
    obj3.track(tmp7.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj);
    obj = { groupListingId, initialEditStateId: tmp2 };
    const replaced = navigation.replace(callback1.ROLE_SUBSCRIPTIONS_TIER_EDIT, obj);
  }, items);
  let obj2 = arg1(dependencyMap[20]);
  let tmp6;
  if (null != priceTiers) {
    tmp6 = priceTiers;
  }
  suggestedUnusedPrices = obj2.useSuggestedUnusedPrices(guildId, tmp6, first.price_tier);
  tmp7 = null != suggestedUnusedPrices && suggestedUnusedPrices.length > 0;
  const items1 = [callback, suggestedUnusedPrices, tmp7];
  callback1 = React.useCallback((selectedTemplate) => {
    if (tmp7) {
      let obj = guildId(navigation[7]);
      obj = { selectedTemplate, handleCreateFromTemplate: tmp, newPricesToPick: suggestedUnusedPrices };
      obj.openLazy(template(navigation[9])(navigation[10], navigation.paths), "TierTemplatePriceReselectionCard", obj);
      const tmp7 = template;
    } else {
      tmp(selectedTemplate, arg1);
    }
  }, items1);
  obj = { style: tmp.container };
  obj = { template, handleSelectTemplateInPreview: callback1, subscriptionPlanTextStyle: tmp.subscriptionPlanTextStyle, descriptionTextStyle: tmp.descriptionPlanTextStyle, closeActionSheet: false, descriptionTextProps: { fontFamily: 0.167, fontSize: 0.236 } };
  const items2 = [callback(arg1(dependencyMap[21]).GuildRoleSubscriptionTierTemplateBasicInfo, obj), ];
  obj1 = {
    style: tmp.contentContainer,
    onPress() {
      let obj = guildId(navigation[7]);
      obj = { template, guildId, handleSelectTemplateInPreview: callback1 };
      obj.openLazy(template(navigation[9])(navigation[8], navigation.paths), "TierTemplateCard", obj);
    }
  };
  obj2 = {
    renderGap() {
      return callback(closure_13, {});
    }
  };
  const obj3 = {};
  const obj4 = {};
  const intl = arg1(dependencyMap[13]).intl;
  obj4.title = intl.formatToPlainString(arg1(dependencyMap[13]).t.y7dUrm, { numChannels: channels.length });
  obj4.count = channels.length;
  const items3 = [callback(ContentHeader, obj4), callback(arg1(dependencyMap[11]).Spacer, { size: 12 }), callback(ChannelBenefitShowCase, { channel: channels[0] }), callback(arg1(dependencyMap[11]).Spacer, { size: 6 })];
  obj3.children = items3;
  const items4 = [callback2(suggestedUnusedPrices, obj3), ];
  const obj5 = {};
  const obj6 = {};
  const intl2 = arg1(dependencyMap[13]).intl;
  obj6.title = intl2.formatToPlainString(arg1(dependencyMap[13]).t.MR7oOF, { numBenefits: additional_perks.length });
  obj6.count = additional_perks.length;
  const items5 = [callback(ContentHeader, obj6), callback(arg1(dependencyMap[11]).Spacer, { size: 12 }), callback(BenefitShowCase, { title: first1.name, description: first1.description }), callback(arg1(dependencyMap[11]).Spacer, { size: 6 })];
  obj5.children = items5;
  items4[1] = callback2(suggestedUnusedPrices, obj5);
  obj2.children = items4;
  const items6 = [callback2(arg1(dependencyMap[22]).GappedList, obj2), callback(ViewEntireTemplateFooter, {})];
  obj1.children = items6;
  items2[1] = callback2(callback, obj1);
  obj.children = items2;
  return callback2(suggestedUnusedPrices, obj);
};
export const CARD_WIDTH = 319;
