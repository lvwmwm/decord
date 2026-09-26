// Module ID: 14784
// Function ID: 14785
// Name: GuildRoleSubscriptionCard
// Dependencies: [32, 19, 17, 21, 4836, 576, 6400, 4832, 14774, 9807, 1115, 1177, 14785, 14786, 14789, 2]
// Exports: Content

// Module 14784 (GuildRoleSubscriptionCard)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6400 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 14774 */;
import GuildRoleSubscriptionEmojiGalleryDefault from "GuildRoleSubscriptionEmojiGallery" /* 14786 */;
import GuildRoleSubscriptionBenefitRow from "GuildRoleSubscriptionBenefitRow" /* 14789 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
class SectionTitle {
  constructor(arg0) {
    tmp = closure_9();
    obj = closure_0(closure_3[6]);
    typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("GuildRoleSubscriptionCard", "text-xs/bold");
    obj1 = { variant: typeConsolidationEyebrow.variant, color: "text-default", style: null, children: global.children };
    items = [, ];
    items[0] = tmp.sectionTitle;
    items[1] = typeConsolidationEyebrow.style;
    obj1.style = items;
    return jsx(closure_0(closure_3[7]).Text, obj1);
  }
}
class Separator {
  constructor() {
    obj = { style: closure_9().separator };
    return jsx(View, obj);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4836);
let obj2 = { sectionTitle: { textTransform: "uppercase" }, separator: null };
let size = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 24 };
obj2.separator = size;
const React7 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionCard.tsx");

export { SectionTitle };
export { Separator };
export const Content = function Content(arg0) {
  ({ listingId, guildId } = arg0);
  const first = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useTierEmojiIds(listingId, guildId), 1)[0];
  const first1 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useChannelBenefits(listingId), 1)[0];
  const first2 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useIntangibleBenefits(listingId), 1)[0];
  const role = GuildRoleSubscriptionListingEditStateUtilsAll.useRole(listingId, guildId);
  const obj5 = {
    renderGap() {
      return closure_1_6(Separator, {});
    },
    children: null
  };
  const obj6 = { children: null };
  const obj7 = { children: null };
  const intl = guildId(1115).intl;
  obj7.children = intl.string(guildId(1115).t["DJ+bGu"]);
  const items = [closure_6(SectionTitle, obj7), closure_6(guildId(1177).Spacer, { size: 8 }), closure_6(guildId(14785).GuildRoleSubscriptionMemberPreview, { guildId, role })];
  obj6.children = items;
  const items1 = [closure_8(closure_7, obj6), , , ];
  let tmp4Result = null;
  if (first.size > 0) {
    const obj8 = { children: null };
    const obj9 = { children: null };
    const intl2 = tmp5(1115).intl;
    const obj10 = { numEmojis: first.size };
    obj9.children = intl2.format(tmp5(1115).t.oDeFmv, obj10);
    const items2 = [tmp7(tmp8, obj9), tmp7(tmp5(1177).Spacer, { size: 14 }), ];
    const obj11 = { emojiIds: null, guildId: null };
    const items3 = [];
    HermesBuiltin.arraySpread(first, 0);
    obj11.emojiIds = items3;
    obj11.guildId = guildId;
    items2[2] = tmp7(GuildRoleSubscriptionEmojiGalleryDefault, obj11);
    obj8.children = items2;
    tmp4Result = tmp4(tmp6, obj8);
  }
  items1[1] = tmp4Result;
  let tmp4Result3 = null;
  if (first1.length > 0) {
    const obj12 = { children: null };
    const obj13 = { children: null };
    const intl3 = tmp5(1115).intl;
    const obj14 = { numChannels: length };
    obj13.children = intl3.format(tmp5(1115).t.l40GUu, obj14);
    const items4 = [tmp7(tmp8, obj13), tmp7(tmp5(1177).Spacer, { size: 14 }), ];
    const obj15 = { gap: 14, children: first1.map((benefit) => timestampProducer(GuildRoleSubscriptionBenefitRow.ChannelBenefitRow, { benefit, guildId }, benefit.ref_id)) };
    items4[2] = tmp7(tmp5(9807).GappedList, obj15);
    obj12.children = items4;
    tmp4Result3 = tmp4(tmp6, obj12);
  }
  items1[2] = tmp4Result3;
  let tmp4Result4 = null;
  if (first2.length > 0) {
    const obj16 = { children: null };
    const obj17 = { children: null };
    const intl4 = tmp5(1115).intl;
    const obj18 = { numIntangibles: length2 };
    obj17.children = intl4.format(tmp5(1115).t["4V/Mfi"], obj18);
    const items5 = [tmp7(tmp8, obj17), tmp7(tmp5(1177).Spacer, { size: 14 }), ];
    const obj19 = { gap: 14, children: first2.map((benefit, index) => timestampProducer(GuildRoleSubscriptionBenefitRow.IntangibleBenefitRow, { benefit, guildId }, index)) };
    items5[2] = tmp7(tmp5(9807).GappedList, obj19);
    obj16.children = items5;
    tmp4Result4 = tmp4(tmp6, obj16);
  }
  items1[3] = tmp4Result4;
  obj5.children = items1;
  return closure_8(guildId(9807).GappedList, obj5);
};
