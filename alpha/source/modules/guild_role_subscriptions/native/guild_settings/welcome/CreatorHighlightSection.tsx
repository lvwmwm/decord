// Module ID: 19918
// Function ID: 19919
// Name: CreatorHighlightSection
// Dependencies: [19, 17, 21, 5014, 575, 5624, 1187, 9977, 1113, 7148, 19919, 5709, 19868, 5717, 17217, 5634, 7294, 2]
// Exports: default

// Module 19918 (CreatorHighlightSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import Text_Text from "Text/Text" /* 5624 */;
import LinkingDefault from "Linking" /* 5709 */;
import defaultMVCPConfig from "defaultMVCPConfig" /* 7294 */;
import AssetRegistryDefault from "AssetRegistry" /* 9977 */;
import EmojiIconDefault from "EmojiIcon" /* 17217 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
function GuildServerSubscriberCount(arg0) {
  let intl;
  let items;
  let items1;
  let style;
  let subscriberCount;
  ({ subscriberCount, style } = arg0);
  const tmp = closure_7();
  const obj = { style: items, children: items1 };
  items = [, , ];
  ({ horizontalContainer: arr[0], subscriberCountContainer: arr[1] } = tmp);
  items[2] = style;
  items1 = [, , ];
  const obj2 = { style: tmp.subscriberCount, variant: "text-sm/medium", color: "text-overlay-light", children: subscriberCount };
  items1[0] = hasOwnProperty(Text_Text.Text, obj2);
  const obj3 = { size: native.Icon.Sizes.SMALL, color: nativeDefault.unsafe_rawColors.WHITE, style: tmp.subscriberCountIcon, source: AssetRegistryDefault };
  const Icon = native.Icon;
  items1[1] = hasOwnProperty(Icon, obj3);
  const obj4 = { variant: "text-sm/normal", color: "text-overlay-light", children: intl.string(intl5.t["3NNXPW"]) };
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items1[2] = hasOwnProperty(Text, obj4);
  return metroRequire(View, obj);
}
function CreatorGuildCard(highlightedCreatorGuild) {
  let Button;
  let closure_0;
  let emojisToShow;
  let format;
  let guildAvatarUrl;
  let guildName;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let m0b6Kj;
  let notShownEmojiCount;
  let obj12;
  let obj18;
  let obj19;
  let obj6;
  let quote;
  let quote_attribution;
  let subscriberCount;
  highlightedCreatorGuild = highlightedCreatorGuild.highlightedCreatorGuild;
  let tmp = closure_7();
  _require = tmp;
  let obj = require("useTypeConsolidationTextTransform");
  const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("CreatorHighlightSection", "text-xs/semibold");
  const guild_id = highlightedCreatorGuild.guild_id;
  let quote_attribution_title = highlightedCreatorGuild.quote_attribution_title;
  ({ quote, quote_attribution } = highlightedCreatorGuild);
  const tmp6 = guild_id(19919)(guild_id, 3, 60);
  dependencyMap = tmp6;
  const hasAllImperativeDetails = tmp6.hasAllImperativeDetails;
  let items = [hasAllImperativeDetails, tmp6];
  if (tmp6.isLoading) {
    const obj2 = { style: tmp.cardContainer, children: closure_5(guild_id(19868), {}) };
    return closure_5(View, obj2);
  } else if (hasAllImperativeDetails) {
    const details = tmp6.details;
    ({ subscriberCount, emojisToShow, notShownEmojiCount } = details);
    const obj3 = { style: tmp.cardContainer, children: items3 };
    const obj4 = { style: tmp.horizontalContainer, children: items1 };
    ({ guildName, guildAvatarUrl } = details);
    const obj5 = { style: tmp.guildIcon, source: obj6 };
    obj6 = { uri: guildAvatarUrl };
    items1 = [closure_5(tmp5(5717), obj5), ];
    const obj7 = { style: tmp.cardHeaderContainer, children: items2 };
    const obj8 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", lineClamp: 1, lineBreakMode: "tail", children: guildName };
    items2 = [closure_5(tmp2(5624).Text, obj8), ];
    let tmp11Result = null != subscriberCount;
    if (tmp11Result) {
      const obj9 = { subscriberCount, style: tmp.serverSubscriberCount };
      tmp11Result = tmp11(GuildServerSubscriberCount, obj9);
    }
    items2[1] = tmp11Result;
    items1[1] = closure_6(View, obj7);
    items3 = [closure_6(View, obj4), , , , ];
    const obj10 = { style: tmp.ownerQuote, variant: "text-md/normal", color: "text-default", children: quote };
    items3[1] = closure_5(require("Text/Text").Text, obj10);
    const obj11 = { style: tmp.ownerUsername, variant: "text-sm/normal", color: "text-default", lineClamp: 1, lineBreakMode: "tail", children: format(m0b6Kj, obj12) };
    const Text = tmp2(5624).Text;
    const intl = tmp2(1113).intl;
    format = intl.format;
    obj12 = { attributionName: quote_attribution, attributionTitle: quote_attribution_title };
    m0b6Kj = tmp2(1113).t.m0b6Kj;
    if (quote_attribution_title == null) {
      const intl2 = tmp2(1113).intl;
      quote_attribution_title = intl2.string(tmp2(1113).t.pclUFJ);
    }
    items3[2] = closure_5(Text, obj11);
    let tmp9Result = null != emojisToShow && emojisToShow.length > 0;
    if (tmp9Result) {
      const obj13 = { style: tmp.emojiSectionContainer, children: items5 };
      const obj14 = { style: items4, variant: typeConsolidationEyebrow.variant, color: "text-default", children: intl3.string(require("intl").t.wg53L8) };
      items4 = [tmp.premiumEmojisTitle, typeConsolidationEyebrow.style];
      const Text2 = tmp2(5624).Text;
      intl3 = tmp2(1113).intl;
      items5 = [closure_5(Text2, obj14), ];
      const obj15 = { style: items6, children: items7 };
      items6 = [, ];
      ({ horizontalContainer: arr7[0], emojiContainer: arr7[1] } = tmp);
      items7 = [
        emojisToShow.map((id) => {
              let items;
              const obj = { style: items, size: 24, id: id.id, guildId: guild_id };
              items = [, ];
              ({ emoji: arr[0], emojiListItem: arr[1] } = closure_0);
              return hasOwnProperty(EmojiIconDefault, obj, id.id);
            }),

      ];
      let tmp11Result2 = null != notShownEmojiCount;
      if (tmp11Result2) {
        const _HermesInternal = HermesInternal;
        const obj16 = { style: tmp.emojiListItem, variant: "text-sm/semibold", color: "text-default", children: "+" + notShownEmojiCount };
        const Text3 = tmp2(5624).Text;
        tmp11Result2 = tmp11(Text3, obj16);
      }
      items7[1] = tmp11Result2;
      items5[1] = closure_6(View, obj15);
      tmp9Result = tmp9(tmp10, obj13);
    }
    items3[3] = tmp9Result;
    const obj17 = { style: tmp.viewServerButtonContainer, children: closure_5(View, obj18) };
    obj18 = { style: tmp.viewServerButton, children: closure_5(Button, obj19) };
    obj19 = { variant: "secondary", text: intl4.string(require("intl").t.mQ2IGa), onPress: tmp7, grow: true };
    Button = tmp2(5634).Button;
    intl4 = tmp2(1113).intl;
    items3[4] = closure_5(View, obj17);
    return closure_6(View, obj3);
  } else {
    return null;
  }
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { horizontalContainer: { flexDirection: "row" }, serverSubscriberCount: { marginTop: 8 }, subscriberCountContainer: obj2, subscriberCount: obj3, subscriberCountIcon: { marginStart: 8, marginEnd: 6, marginVertical: 4, alignSelf: "center" }, cardContainer: obj4, cardHeaderContainer: { flex: 1, justifyContent: "flex-start", alignItems: "flex-start" }, guildIcon: { width: 60, height: 60, borderRadius: 6, marginEnd: 16 }, ownerQuote: { marginTop: 24 }, ownerUsername: { marginTop: 8 }, premiumEmojisTitle: { marginTop: 32, textTransform: "uppercase" }, viewServerButtonContainer: { flex: 1, justifyContent: "flex-end" }, viewServerButton: { marginTop: 16 }, emojiSectionContainer: { flex: 1, justifyContent: "flex-start", alignItems: "flex-start" }, emojiContainer: obj5, emojiListItem: { marginHorizontal: 8 }, emoji: { height: 24, width: 24, marginVertical: 8 } };
obj2 = { alignItems: "center", backgroundColor: nativeDefault.unsafe_rawColors.BRAND_530, paddingEnd: 8, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.BRAND_630, paddingHorizontal: 8, paddingVertical: 4 };
obj4 = { width: 276, marginEnd: 12, paddingHorizontal: 24, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj5 = { width: "100%", marginTop: 8, paddingHorizontal: 8, justifyContent: "space-around", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let closure_7 = createStyles(obj);
function renderItem(item) {
  const highlightedCreatorGuild = item.item;
  return hasOwnProperty(CreatorGuildCard, { highlightedCreatorGuild }, highlightedCreatorGuild.guild_id);
}
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorHighlightSection.tsx");

export default function CreatorHighlightSection(data) {
  const obj = {
    data: data.highlightedCreators,
    horizontal: true,
    keyExtractor(guild_id) {
      return guild_id.guild_id;
    },
    renderItem
  };
  return hasOwnProperty(defaultMVCPConfig.FlashList, obj);
};
