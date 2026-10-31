// Module ID: 17213
// Function ID: 17214
// Name: GuildRoleSubscriptionCard
// Dependencies: [32, 19, 17, 21, 5014, 575, 7148, 5624, 17203, 17214, 1113, 1187, 17215, 17216, 17219, 2]
// Exports: Content

// Module 17213 (GuildRoleSubscriptionCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5624 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7148 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 17203 */;
import GuildRoleSubscriptionEmojiGalleryDefault from "GuildRoleSubscriptionEmojiGallery" /* 17216 */;
import GuildRoleSubscriptionBenefitRow from "GuildRoleSubscriptionBenefitRow" /* 17219 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
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
let obj = { sectionTitle: { textTransform: "uppercase" }, section: { gap: 14 }, separator: size };
size = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: nativeDefault.space.PX_24 };
const React4 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionCard.tsx");

export { SectionTitle };
export { Separator };
export function Content(arg0) {
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
  let obj17;
  ({ listingId, guildId } = arg0);
  const tmp2 = closure_9();
  let obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj.useTierEmojiIds(listingId, guildId), 1)[0];
  const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first1 = _slicedToArray(obj2.useChannelBenefits(listingId), 1)[0];
  const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first2 = _slicedToArray(obj3.useIntangibleBenefits(listingId), 1)[0];
  const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const role = obj4.useRole(listingId, guildId);
  size = first.size;
  const obj5 = { separator: closure_6(Separator, {}), children: items1 };
  const SeparatedList = guildId(17214).SeparatedList;
  const obj6 = { children: items };
  const obj7 = { children: intl.string(guildId(1113).t["DJ+bGu"]) };
  intl = guildId(1113).intl;
  items = [closure_6(SectionTitle, obj7), closure_6(guildId(1187).Spacer, { size: 8 }), closure_6(guildId(17215).GuildRoleSubscriptionMemberPreview, { guildId, role })];
  items1 = [closure_8(closure_7, obj6), , , ];
  let tmp6Result = null;
  if (size > 0) {
    const obj8 = { style: tmp2.section, children: items2 };
    const obj9 = { children: intl2.format(guildId(1113).t.oDeFmv, obj10) };
    intl2 = tmp7(1113).intl;
    obj10 = { numEmojis: first.size };
    items2 = [closure_6(SectionTitle, obj9), ];
    const obj11 = { emojiIds: items3, guildId };
    items3 = [];
    const tmp13 = GuildRoleSubscriptionEmojiGalleryDefault;
    HermesBuiltin.arraySpread(items3, first, 0);
    items2[1] = closure_6(tmp13, obj11);
    tmp6Result = tmp6(View, obj8);
  }
  items1[1] = tmp6Result;
  let tmp6Result3 = null;
  if (first1.length > 0) {
    const obj12 = { style: tmp2.section, children: items4 };
    const obj13 = { children: intl3.format(guildId(1113).t.l40GUu, obj14) };
    intl3 = tmp7(1113).intl;
    obj14 = { numChannels: first1.length };
    items4 = [
      closure_6(SectionTitle, obj13),
      first1.map((benefit) => {
          const obj = { benefit, guildId };
          return metroRequire(GuildRoleSubscriptionBenefitRow.ChannelBenefitRow, obj, benefit.ref_id);
        })
    ];
    tmp6Result3 = tmp6(View, obj12);
  }
  items1[2] = tmp6Result3;
  let tmp6Result4 = null;
  if (first2.length > 0) {
    const obj15 = { style: tmp2.section, children: items5 };
    const obj16 = { children: intl4.format(guildId(1113).t["4V/Mfi"], obj17) };
    intl4 = tmp7(1113).intl;
    obj17 = { numIntangibles: first2.length };
    items5 = [
      closure_6(SectionTitle, obj16),
      first2.map((benefit, index) => {
          const obj = { benefit, guildId };
          return metroRequire(GuildRoleSubscriptionBenefitRow.IntangibleBenefitRow, obj, index);
        })
    ];
    tmp6Result4 = tmp6(View, obj15);
  }
  items1[3] = tmp6Result4;
  return closure_8(SeparatedList, obj5);
}
