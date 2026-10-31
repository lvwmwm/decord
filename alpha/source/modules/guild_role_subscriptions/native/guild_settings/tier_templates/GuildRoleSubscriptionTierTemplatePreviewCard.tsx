// Module ID: 19992
// Function ID: 19993
// Name: GuildRoleSubscriptionTierTemplatePreviewCard
// Dependencies: [19, 17, 1072, 21, 5014, 575, 7148, 5624, 5258, 19993, 1994, 19997, 1187, 19996, 1113, 15458, 1497, 17203, 19998, 1252, 5760, 17209, 19994, 17214, 2]
// Exports: default

// Module 19992 (GuildRoleSubscriptionTierTemplatePreviewCard)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import Text_Text from "Text/Text" /* 5624 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7148 */;
import ChevronSmallUpIcon from "ChevronSmallUpIcon" /* 15458 */;
import GuildRoleSubscriptionTierTemplateUtils from "GuildRoleSubscriptionTierTemplateUtils" /* 19996 */;
import GuildRoleSubscriptionTierTemplateActionCreators from "GuildRoleSubscriptionTierTemplateActionCreators" /* 19998 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let navigation;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let rect;
let size;
let tmp;
const AppAnalyticsUtils = tmp(5760);
function ContentHeader(arg0) {
  let count;
  let items;
  let items1;
  let title;
  ({ count, title } = arg0);
  const tmp = closure_11();
  const obj = useTypeConsolidationTextTransform;
  const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("TierTemplatePreviewCard", "text-xs/bold");
  const obj2 = { variant: typeConsolidationEyebrow.variant, color: "text-muted", style: items, children: items1 };
  items = [tmp.contentHeader, typeConsolidationEyebrow.style];
  const Text = Text_Text.Text;
  items1 = [, , ];
  const obj3 = { variant: typeConsolidationEyebrow.variant, color: "text-default", style: tmp.contentHeader, children: count };
  items1[0] = React4(Text_Text.Text, obj3);
  items1[1] = " ";
  items1[2] = title;
  return authStore(Text, obj2);
}
function Separator() {
  const obj = { style: closure_11().separator };
  return React4(metroRequire, obj);
}
function BenefitShowCase(title) {
  let items;
  title = title.title;
  let tmp3 = title;
  const description = title.description;
  const tmp = authStore;
  const tmp2 = metroRequire;
  if (typeof title === "string") {
    const obj2 = { variant: "text-md/semibold", color: "text-default", children: title };
    tmp3 = React4(Text_Text.Text, obj2);
  }
  const obj = { children: items };
  items = [tmp3, React4(native.Spacer, { size: 2 }), React4(Text_Text.Text, { variant: "text-sm/medium", color: "interactive-text-default", children: description })];
  return tmp(tmp2, obj);
}
function ChannelBenefitShowCase(channel) {
  let description;
  let items;
  let name;
  let type;
  channel = channel.channel;
  ({ description, type, name } = channel);
  const obj2 = { style: closure_11().channelTitle, children: items };
  items = [, ];
  const obj = GuildRoleSubscriptionTierTemplateUtils;
  items[0] = React4(obj.getPrivateChannelIconComponent(type), { size: "xs" });
  items[1] = React4(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", children: name });
  const obj3 = { title: authStore(metroRequire, obj2), description };
  return React4(BenefitShowCase, obj3);
}
function ViewEntireTemplateFooter() {
  let intl;
  let items;
  let items1;
  const tmp = closure_11();
  const obj = { style: tmp.viewEntireTemplateFooter, children: items1 };
  const obj2 = { children: items };
  const obj3 = { variant: "text-sm/semibold", color: "interactive-text-hover", style: tmp.viewEntireTemplateText, children: intl.string(intl3.t.kejaOD) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items = [React4(Text, obj3), React4(native.Spacer, { size: 3 }), ];
  const obj4 = { style: tmp.viewEntireTemplateFooterUnderline };
  items[2] = React4(metroRequire, obj4);
  items1 = [authStore(metroRequire, obj2), ];
  const obj5 = { children: React4(ChevronSmallUpIcon.ChevronSmallUpIcon, { size: "xs" }) };
  items1[1] = React4(metroRequire, obj5);
  return authStore(metroRequire, obj);
}
({ TouchableOpacity: hasOwnProperty, View: metroRequire } = react_native);
({ AnalyticEvents: metroImportDefault, GuildSettingsSections: metroImportAll } = Constants);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, subscriptionPlanTextStyle: obj3, descriptionPlanTextStyle: obj4, separator: size, contentContainer: obj5, channelTitle: obj6, viewEntireTemplateText: { marginTop: -1 }, contentHeader: { textTransform: "uppercase" }, viewEntireTemplateFooter: obj7, viewEntireTemplateFooterUnderline: rect };
obj2 = { padding: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, width: 319 };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj4 = { color: nativeDefault.colors.TEXT_MUTED, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16 };
size = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER, marginVertical: nativeDefault.space.PX_16 };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderTopRightRadius: nativeDefault.radii.sm, borderTopLeftRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_0 };
obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj7 = { paddingVertical: nativeDefault.space.PX_16, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm, marginLeft: -nativeDefault.space.PX_16, marginRight: -nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_16 };
rect = { position: "absolute", left: 0, right: 0, height: 1, bottom: 0, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
let closure_11 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePreviewCard.tsx");

export default function GuildRoleSubscriptionTierTemplatePreviewCard(template) {
  let additional_perks;
  let channels;
  let guildId;
  let intl;
  let intl2;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let priceTiers;
  template = template.template;
  ({ priceTiers, guildId } = template);
  const groupListingId = template.groupListingId;
  navigation = undefined;
  const editGroupId = template.editGroupId;
  let tmp = closure_11();
  let tmp3 = navigation;
  let obj = template(navigation[16]);
  navigation = obj.useNavigation();
  let obj2 = groupListingId(navigation[17]);
  const addNewEditStateFromTemplate = obj2.useEditStateIds(groupListingId, editGroupId, { includeSoftDeleted: true }).addNewEditStateFromTemplate;
  const first = template.listings[0];
  ({ channels, additional_perks } = first);
  const first1 = additional_perks[0];
  let obj3 = addNewEditStateFromTemplate;
  const items = [addNewEditStateFromTemplate, groupListingId, navigation, guildId];
  const price_tier = first.price_tier;
  const first2 = channels[0];
  const handleCreateFromTemplate = addNewEditStateFromTemplate.useCallback((selectedTemplate, arg1) => {
    const obj = GuildRoleSubscriptionTierTemplateActionCreators;
    const result = obj.stashTemplateChannels(selectedTemplate, guildId);
    const tmp3 = guildId;
    const tmp5 = addNewEditStateFromTemplate(selectedTemplate);
    if (arg1) {
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    }
    const track = AnalyticsUtilsDefault.track;
    const ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED = metroImportDefault.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED;
    const obj3 = { exit_reason: "template_selected" };
    AnalyticsUtilsDefault;
    const tmpResult = AppAnalyticsUtils;
    const merged = Object.assign(tmpResult.collectGuildAnalyticsMetadata(tmp3));
    track(ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj3);
    const obj4 = { groupListingId, initialEditStateId: tmp5 };
    const replaced = navigation.replace(metroImportAll.ROLE_SUBSCRIPTIONS_TIER_EDIT, obj4);
  }, items);
  const useSuggestedUnusedPrices = template(navigation[21]).useSuggestedUnusedPrices;
  template(navigation[21]);
  const suggestedUnusedPrices = useSuggestedUnusedPrices(guildId, priceTiers, price_tier);
  let closure_7 = tmp10;
  const items1 = [handleCreateFromTemplate, suggestedUnusedPrices, tmp10];
  const callback1 = obj3.useCallback((selectedTemplate, arg1) => {
    if (closure_7) {
      const obj2 = { selectedTemplate, handleCreateFromTemplate, newPricesToPick: suggestedUnusedPrices };
      const obj = ActionSheetActionCreatorsDefault;
      obj.openLazy(asyncRequire(19997, dependencyMap.paths), "TierTemplatePriceReselectionCard", obj2);
    } else {
      handleCreateFromTemplate(selectedTemplate, arg1);
    }
  }, items1);
  let obj4 = { style: tmp.container, children: items2 };
  items2 = [, ];
  const obj5 = { template, handleSelectTemplateInPreview: callback1, subscriptionPlanTextStyle: tmp.subscriptionPlanTextStyle, descriptionTextStyle: tmp.descriptionPlanTextStyle, closeActionSheet: false, descriptionTextProps: { numberOfLines: 2, ellipsizeMode: "tail" } };
  items2[0] = closure_9(template(tmp3[22]).GuildRoleSubscriptionTierTemplateBasicInfo, obj5);
  const obj6 = {
    style: tmp.contentContainer,
    onPress: function handleViewEntireTemplate() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { template, guildId, handleSelectTemplateInPreview: callback1 };
      obj.openLazy(asyncRequire(19993, dependencyMap.paths), "TierTemplateCard", obj2);
    },
    children: items6
  };
  const obj7 = { separator: closure_9(Separator, {}), children: items4 };
  const SeparatedList = tmp2(tmp3[23]).SeparatedList;
  const obj8 = { children: items3 };
  const obj9 = { title: intl.formatToPlainString(template(tmp3[14]).t.y7dUrm, { numChannels: channels.length }), count: channels.length };
  intl = tmp2(tmp3[14]).intl;
  items3 = [closure_9(ContentHeader, obj9), closure_9(tmp2(tmp3[12]).Spacer, { size: 12 }), closure_9(ChannelBenefitShowCase, { channel: first2 }), closure_9(tmp2(tmp3[12]).Spacer, { size: 6 })];
  items4 = [closure_10(suggestedUnusedPrices, obj8), ];
  const obj10 = { children: items5 };
  const obj11 = { title: intl2.formatToPlainString(template(tmp3[14]).t.MR7oOF, { numBenefits: additional_perks.length }), count: additional_perks.length };
  intl2 = tmp2(tmp3[14]).intl;
  items5 = [closure_9(ContentHeader, obj11), closure_9(tmp2(tmp3[12]).Spacer, { size: 12 }), , ];
  const obj12 = { title: first1.name, description: first1.description };
  items5[2] = closure_9(BenefitShowCase, obj12);
  items5[3] = closure_9(template(tmp3[12]).Spacer, { size: 6 });
  items4[1] = closure_10(suggestedUnusedPrices, obj10);
  items6 = [closure_10(SeparatedList, obj7), closure_9(ViewEntireTemplateFooter, {})];
  items2[1] = closure_10(handleCreateFromTemplate, obj6);
  return closure_10(suggestedUnusedPrices, obj4);
};
export const CARD_WIDTH = 319;
