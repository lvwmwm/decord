// Module ID: 16478
// Function ID: 128389
// Name: ContentHeader
// Dependencies: [31, 27, 653, 33, 4130, 689, 4126, 4098, 16479, 1934, 16483, 1273, 16482, 1212, 5452, 1456, 14116, 16484, 675, 4324, 14122, 16480, 9405, 2]
// Exports: default

// Module 16478 (ContentHeader)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function ContentHeader(arg0) {
  let count;
  let title;
  ({ count, title } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { variant: "text-xs/bold", color: "text-muted", style: tmp.contentHeader };
  obj = { variant: "text-xs/bold", color: "text-default", style: tmp.contentHeader, children: count };
  const items = [callback(require(4126) /* Text */.Text, obj), " ", title];
  obj.children = items;
  return callback2(require(4126) /* Text */.Text, obj);
}
function Separator() {
  return callback(closure_6, { style: _createForOfIteratorHelperLoose().separator });
}
function BenefitShowCase(title) {
  title = title.title;
  let obj = {};
  let tmp3 = title;
  if ("string" === typeof title) {
    obj = { variant: "text-md/semibold", color: "text-default", children: title };
    tmp3 = callback(require(4126) /* Text */.Text, obj);
  }
  const items = [tmp3, callback(require(1273) /* Button */.Spacer, { size: 2 }), ];
  obj = { variant: "text-sm/medium", color: "interactive-text-default", children: title.description };
  items[2] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return closure_10(closure_6, obj);
}
function ChannelBenefitShowCase(channel) {
  let description;
  let name;
  let type;
  ({ description, type, name } = channel.channel);
  let obj = require(16482) /* getPrivateChannelIconComponent */;
  obj = { style: { flexDirection: "row", alignItems: "center" } };
  const items = [callback(obj.getPrivateChannelIconComponent(type), { size: "xs" }), callback(require(1273) /* Button */.Spacer, { size: 4 }), ];
  obj = { variant: "text-md/semibold", color: "text-default", children: name };
  items[2] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback(BenefitShowCase, { title: callback2(closure_6, obj), description });
}
function ViewEntireTemplateFooter() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.viewEntireTemplateFooter };
  obj = {};
  obj = { variant: "text-sm/semibold", color: "interactive-text-hover", style: { marginTop: -1 } };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.kejaOD);
  const items = [callback(require(4126) /* Text */.Text, obj), callback(require(1273) /* Button */.Spacer, { size: 3 }), callback(closure_6, { style: tmp.viewEntireTemplateFooterUnderline })];
  obj.children = items;
  const items1 = [callback2(closure_6, obj), ];
  const obj2 = {};
  const obj3 = { size: require(1273) /* Button */.Icon.Sizes.REFRESH_SMALL_16, source: importDefault(5452) };
  const items2 = [{ rotate: "180deg" }];
  obj3.style = { transform: items2 };
  obj2.children = callback(require(1273) /* Button */.Icon, obj3);
  items1[1] = callback(closure_6, obj2);
  obj.children = items1;
  return callback2(closure_6, obj);
}
({ TouchableOpacity: closure_5, View: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: closure_7, GuildSettingsSections: closure_8 } = ME);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL, width: 319 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.subscriptionPlanTextStyle = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
let obj2 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, paddingTop: 8, paddingBottom: 16 };
_createForOfIteratorHelperLoose.descriptionPlanTextStyle = obj2;
let obj3 = { width: "100%", height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_HOVER, marginVertical: 16 };
_createForOfIteratorHelperLoose.separator = obj3;
let obj1 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
_createForOfIteratorHelperLoose.contentContainer = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm, padding: 16, paddingBottom: 0 };
_createForOfIteratorHelperLoose.contentHeader = { textTransform: "uppercase" };
let obj5 = { paddingVertical: 16, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderBottomLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderBottomRightRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginLeft: -16, marginRight: -16, marginTop: 16 };
_createForOfIteratorHelperLoose.viewEntireTemplateFooter = obj5;
let obj6 = { position: "absolute", left: 0, right: 0, height: 1, bottom: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
_createForOfIteratorHelperLoose.viewEntireTemplateFooterUnderline = obj6;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm, padding: 16, paddingBottom: 0 };
let result = require("ME").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePreviewCard.tsx");

export default function GuildRoleSubscriptionTierTemplatePreviewCard(template) {
  let additional_perks;
  let channels;
  let guildId;
  let priceTiers;
  template = template.template;
  ({ priceTiers, guildId } = template);
  const groupListingId = template.groupListingId;
  let suggestedUnusedPrices;
  let c7;
  let callback1;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = template(navigation[15]);
  navigation = obj.useNavigation();
  let obj1 = groupListingId(navigation[16]);
  const addNewEditStateFromTemplate = obj1.useEditStateIds(groupListingId, template.editGroupId, { includeSoftDeleted: true }).addNewEditStateFromTemplate;
  const first = template.listings[0];
  ({ channels, additional_perks } = first);
  const first1 = additional_perks[0];
  const items = [addNewEditStateFromTemplate, groupListingId, navigation, guildId];
  const callback = addNewEditStateFromTemplate.useCallback((selectedTemplate) => {
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
    obj3.track(_undefined.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj);
    obj = { groupListingId, initialEditStateId: tmp2 };
    const replaced = navigation.replace(callback1.ROLE_SUBSCRIPTIONS_TIER_EDIT, obj);
  }, items);
  let obj2 = template(navigation[20]);
  let tmp6;
  if (null != priceTiers) {
    tmp6 = priceTiers;
  }
  suggestedUnusedPrices = obj2.useSuggestedUnusedPrices(guildId, tmp6, first.price_tier);
  c7 = tmp7;
  const items1 = [callback, suggestedUnusedPrices, null != suggestedUnusedPrices && suggestedUnusedPrices.length > 0];
  callback1 = addNewEditStateFromTemplate.useCallback((selectedTemplate) => {
    if (c7) {
      let obj = guildId(navigation[7]);
      obj = { selectedTemplate, handleCreateFromTemplate: tmp, newPricesToPick: suggestedUnusedPrices };
      obj.openLazy(template(navigation[9])(navigation[10], navigation.paths), "TierTemplatePriceReselectionCard", obj);
    } else {
      tmp(selectedTemplate, arg1);
    }
  }, items1);
  obj = { style: tmp.container };
  obj = { template, handleSelectTemplateInPreview: callback1, subscriptionPlanTextStyle: tmp.subscriptionPlanTextStyle, descriptionTextStyle: tmp.descriptionPlanTextStyle, closeActionSheet: false, descriptionTextProps: { numberOfLines: 2, ellipsizeMode: "tail" } };
  const items2 = [callback(template(navigation[21]).GuildRoleSubscriptionTierTemplateBasicInfo, obj), ];
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
      return outer1_9(outer1_13, {});
    }
  };
  let obj3 = {};
  const obj4 = {};
  const intl = template(navigation[13]).intl;
  obj4.title = intl.formatToPlainString(template(navigation[13]).t.y7dUrm, { numChannels: channels.length });
  obj4.count = channels.length;
  const items3 = [callback(ContentHeader, obj4), callback(template(navigation[11]).Spacer, { size: 12 }), callback(ChannelBenefitShowCase, { channel: channels[0] }), callback(template(navigation[11]).Spacer, { size: 6 })];
  obj3.children = items3;
  const items4 = [callback2(suggestedUnusedPrices, obj3), ];
  const obj5 = {};
  const obj6 = {};
  const intl2 = template(navigation[13]).intl;
  obj6.title = intl2.formatToPlainString(template(navigation[13]).t.MR7oOF, { numBenefits: additional_perks.length });
  obj6.count = additional_perks.length;
  const items5 = [callback(ContentHeader, obj6), callback(template(navigation[11]).Spacer, { size: 12 }), callback(BenefitShowCase, { title: first1.name, description: first1.description }), callback(template(navigation[11]).Spacer, { size: 6 })];
  obj5.children = items5;
  items4[1] = callback2(suggestedUnusedPrices, obj5);
  obj2.children = items4;
  const items6 = [callback2(template(navigation[22]).GappedList, obj2), callback(ViewEntireTemplateFooter, {})];
  obj1.children = items6;
  items2[1] = callback2(callback, obj1);
  obj.children = items2;
  return callback2(suggestedUnusedPrices, obj);
};
export const CARD_WIDTH = 319;
