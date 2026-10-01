// Module ID: 14782
// Function ID: 14783
// Name: GuildRoleSubscriptionCard
// Dependencies: [32, 19, 17, 21, 4836, 576, 6400, 4832, 14772, 9807, 1115, 1177, 14783, 14784, 14787, 2]
// Exports: Content

// Module 14782 (GuildRoleSubscriptionCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6400 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 14772 */;
import GuildRoleSubscriptionEmojiGalleryDefault from "GuildRoleSubscriptionEmojiGallery" /* 14784 */;
import GuildRoleSubscriptionBenefitRow from "GuildRoleSubscriptionBenefitRow" /* 14787 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let size;
class SectionTitle {
  constructor(children) {
    let items;
    children = children.children;
    const tmp = closure_9();
    const obj = useTypeConsolidationTextTransform;
    const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("GuildRoleSubscriptionCard", "text-xs/bold");
    const obj2 = { variant: typeConsolidationEyebrow.variant, color: "text-default", style: items, children };
    items = [tmp.sectionTitle, typeConsolidationEyebrow.style];
    return metroRequire(Text_Text.Text, obj2);
  }
}
class Separator {
  constructor() {
    const obj = { style: closure_9().separator };
    return metroRequire(View, obj);
  }
}
const View = react_native.View;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { sectionTitle: { textTransform: "uppercase" }, separator: size };
size = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 24 };
const React4 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionCard.tsx");

export { SectionTitle };
export { Separator };
export const Content = function Content(arg0) {
  let guildId;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let listingId;
  let obj10;
  let obj14;
  let obj18;
  ({ listingId, guildId } = arg0);
  let obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj.useTierEmojiIds(listingId, guildId), 1)[0];
  const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first1 = _slicedToArray(obj2.useChannelBenefits(listingId), 1)[0];
  const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first2 = _slicedToArray(obj3.useIntangibleBenefits(listingId), 1)[0];
  const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const role = obj4.useRole(listingId, guildId);
  size = first.size;
  const obj5 = {
    renderGap() {
      return closure_1_6(Separator, {});
    },
    children: items1
  };
  const obj6 = { children: items };
  const obj7 = { children: intl.string(guildId(1115).t["DJ+bGu"]) };
  const GappedList = guildId(9807).GappedList;
  intl = guildId(1115).intl;
  items = [closure_6(SectionTitle, obj7), closure_6(guildId(1177).Spacer, { size: 8 }), closure_6(guildId(14783).GuildRoleSubscriptionMemberPreview, { guildId, role })];
  items1 = [closure_8(closure_7, obj6), , , ];
  let tmp5Result = null;
  if (size > 0) {
    const obj8 = { children: items2 };
    const obj9 = { children: intl2.format(guildId(1115).t.oDeFmv, obj10) };
    intl2 = tmp6(1115).intl;
    obj10 = { numEmojis: first.size };
    items2 = [closure_6(SectionTitle, obj9), closure_6(guildId(1177).Spacer, { size: 14 }), ];
    const obj11 = { emojiIds: items3, guildId };
    items3 = [];
    const tmp12 = GuildRoleSubscriptionEmojiGalleryDefault;
    HermesBuiltin.arraySpread(items3, first, 0);
    items2[2] = closure_6(tmp12, obj11);
    tmp5Result = tmp5(tmp7, obj8);
  }
  items1[1] = tmp5Result;
  let tmp5Result3 = null;
  if (first1.length > 0) {
    const obj12 = { children: items4 };
    const obj13 = { children: intl3.format(guildId(1115).t.l40GUu, obj14) };
    intl3 = tmp6(1115).intl;
    obj14 = { numChannels: first1.length };
    items4 = [closure_6(SectionTitle, obj13), closure_6(guildId(1177).Spacer, { size: 14 }), ];
    const obj15 = {
      gap: 14,
      children: first1.map((benefit) => {
          const obj = { benefit, guildId };
          return metroRequire(GuildRoleSubscriptionBenefitRow.ChannelBenefitRow, obj, benefit.ref_id);
        })
    };
    const GappedList2 = tmp6(9807).GappedList;
    items4[2] = closure_6(GappedList2, obj15);
    tmp5Result3 = tmp5(tmp7, obj12);
  }
  items1[2] = tmp5Result3;
  let tmp5Result4 = null;
  if (first2.length > 0) {
    const obj16 = { children: items5 };
    const obj17 = { children: intl4.format(guildId(1115).t["4V/Mfi"], obj18) };
    intl4 = tmp6(1115).intl;
    obj18 = { numIntangibles: first2.length };
    items5 = [closure_6(SectionTitle, obj17), closure_6(guildId(1177).Spacer, { size: 14 }), ];
    const obj19 = {
      gap: 14,
      children: first2.map((benefit, index) => {
          const obj = { benefit, guildId };
          return metroRequire(GuildRoleSubscriptionBenefitRow.IntangibleBenefitRow, obj, index);
        })
    };
    const GappedList3 = tmp6(9807).GappedList;
    items5[2] = closure_6(GappedList3, obj19);
    tmp5Result4 = tmp5(tmp7, obj16);
  }
  items1[3] = tmp5Result4;
  return closure_8(GappedList, obj5);
};
