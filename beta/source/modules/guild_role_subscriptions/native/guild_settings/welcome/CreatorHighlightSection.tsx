// Module ID: 17535
// Function ID: 17536
// Name: CreatorHighlightSection
// Dependencies: [19, 17, 21, 4836, 576, 4832, 1177, 9762, 1115, 6400, 17536, 4525, 17508, 5899, 14785, 5282, 2]
// Exports: default

// Module 17535 (CreatorHighlightSection)
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import LinkingDefault from "Linking" /* 4525 */;
import Text_Text from "Text/Text" /* 4832 */;
import AssetRegistryDefault from "AssetRegistry" /* 9762 */;
import EmojiIconDefault from "EmojiIcon" /* 14785 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function GuildServerSubscriberCount(arg0) {
  let intl;
  let items;
  let items1;
  let style;
  let subscriberCount;
  ({ subscriberCount, style } = arg0);
  const tmp = closure_8();
  const obj = { style: items, children: items1 };
  items = [, , ];
  ({ horizontalContainer: arr[0], subscriberCountContainer: arr[1] } = tmp);
  items[2] = style;
  items1 = [, , ];
  const obj2 = { style: tmp.subscriberCount, variant: "text-sm/medium", color: "text-overlay-light", children: subscriberCount };
  items1[0] = metroRequire(Text_Text.Text, obj2);
  const obj3 = { size: native.Icon.Sizes.SMALL, color: nativeDefault.unsafe_rawColors.WHITE, style: tmp.subscriberCountIcon, source: AssetRegistryDefault };
  const Icon = native.Icon;
  items1[1] = metroRequire(Icon, obj3);
  const obj4 = { variant: "text-sm/normal", color: "text-overlay-light", children: intl.string(intl5.t["3NNXPW"]) };
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items1[2] = metroRequire(Text, obj4);
  return metroImportDefault(React3, obj);
}
function CreatorGuildCard(highlightedCreatorGuild) {
  let BaseTextButton;
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
  let obj6;
  let quote;
  let quote_attribution;
  let subscriberCount;
  highlightedCreatorGuild = highlightedCreatorGuild.highlightedCreatorGuild;
  let tmp = closure_8();
  _require = tmp;
  let obj = require("useTypeConsolidationTextTransform");
  const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("CreatorHighlightSection", "text-xs/semibold");
  const guild_id = highlightedCreatorGuild.guild_id;
  let quote_attribution_title = highlightedCreatorGuild.quote_attribution_title;
  ({ quote, quote_attribution } = highlightedCreatorGuild);
  const tmp6 = guild_id(17536)(guild_id, 3, 60);
  dependencyMap = tmp6;
  const hasAllImperativeDetails = tmp6.hasAllImperativeDetails;
  let items = [hasAllImperativeDetails, tmp6];
  if (tmp6.isLoading) {
    const obj2 = { style: tmp.cardContainer, children: closure_6(guild_id(17508), {}) };
    return closure_6(closure_4, obj2);
  } else if (hasAllImperativeDetails) {
    const details = tmp6.details;
    ({ subscriberCount, emojisToShow, notShownEmojiCount } = details);
    const obj3 = { style: tmp.cardContainer, children: items3 };
    const obj4 = { style: tmp.horizontalContainer, children: items1 };
    ({ guildName, guildAvatarUrl } = details);
    const obj5 = { style: tmp.guildIcon, source: obj6 };
    obj6 = { uri: guildAvatarUrl };
    items1 = [closure_6(tmp5(5899), obj5), ];
    const obj7 = { style: tmp.cardHeaderContainer, children: items2 };
    const obj8 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", lineClamp: 1, lineBreakMode: "tail", children: guildName };
    items2 = [closure_6(tmp2(4832).Text, obj8), ];
    let tmp11Result = null != subscriberCount;
    if (tmp11Result) {
      const obj9 = { subscriberCount, style: tmp.serverSubscriberCount };
      tmp11Result = tmp11(GuildServerSubscriberCount, obj9);
    }
    items2[1] = tmp11Result;
    items1[1] = closure_7(closure_4, obj7);
    items3 = [closure_7(closure_4, obj4), , , , ];
    const obj10 = { style: tmp.ownerQuote, variant: "text-md/normal", color: "text-default", children: quote };
    items3[1] = closure_6(require("Text/Text").Text, obj10);
    const obj11 = { style: tmp.ownerUsername, variant: "text-sm/normal", color: "text-default", lineClamp: 1, lineBreakMode: "tail", children: format(m0b6Kj, obj12) };
    const Text = tmp2(4832).Text;
    const intl = tmp2(1115).intl;
    format = intl.format;
    obj12 = { attributionName: quote_attribution, attributionTitle: quote_attribution_title };
    m0b6Kj = tmp2(1115).t.m0b6Kj;
    if (quote_attribution_title == null) {
      const intl2 = tmp2(1115).intl;
      quote_attribution_title = intl2.string(tmp2(1115).t.pclUFJ);
    }
    items3[2] = closure_6(Text, obj11);
    let tmp9Result = null != emojisToShow && emojisToShow.length > 0;
    if (tmp9Result) {
      const obj13 = { style: tmp.emojiSectionContainer, children: items5 };
      const obj14 = { style: items4, variant: typeConsolidationEyebrow.variant, color: "text-default", children: intl3.string(require("intl").t.wg53L8) };
      items4 = [tmp.premiumEmojisTitle, typeConsolidationEyebrow.style];
      const Text2 = tmp2(4832).Text;
      intl3 = tmp2(1115).intl;
      items5 = [closure_6(Text2, obj14), ];
      const obj15 = { style: items6, children: items7 };
      items6 = [, ];
      ({ horizontalContainer: arr7[0], emojiContainer: arr7[1] } = tmp);
      items7 = [
        emojisToShow.map((id) => {
              let items;
              const obj = { style: items, size: 24, id: id.id, guildId: guild_id };
              items = [, ];
              ({ emoji: arr[0], emojiListItem: arr[1] } = closure_0);
              return metroRequire(EmojiIconDefault, obj, id.id);
            }),

      ];
      let tmp11Result2 = null != notShownEmojiCount;
      if (tmp11Result2) {
        const _HermesInternal = HermesInternal;
        const obj16 = { style: tmp.emojiListItem, variant: "text-sm/semibold", color: "text-default", children: "+" + notShownEmojiCount };
        const Text3 = tmp2(4832).Text;
        tmp11Result2 = tmp11(Text3, obj16);
      }
      items7[1] = tmp11Result2;
      items5[1] = closure_7(closure_4, obj15);
      tmp9Result = tmp9(tmp10, obj13);
    }
    items3[3] = tmp9Result;
    const obj17 = { style: tmp.viewServerButtonContainer, children: closure_6(BaseTextButton, obj18) };
    obj18 = { pillStyle: tmp.viewServerButton, text: intl4.string(require("intl").t.mQ2IGa), onPress: tmp7, shrink: true };
    BaseTextButton = tmp2(5282).BaseTextButton;
    intl4 = tmp2(1115).intl;
    items3[4] = closure_6(closure_4, obj17);
    return closure_7(closure_4, obj3);
  } else {
    return null;
  }
}
({ View: closure_4, FlatList: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { horizontalContainer: { flexDirection: "row" }, serverSubscriberCount: { marginTop: 8 }, subscriberCountContainer: obj2, subscriberCount: obj3, subscriberCountIcon: { marginStart: 8, marginEnd: 6, marginVertical: 4, alignSelf: "center" }, cardContainer: obj4, cardHeaderContainer: { flex: 1, justifyContent: "flex-start", alignItems: "flex-start" }, guildIcon: { width: 60, height: 60, borderRadius: 6, marginEnd: 16 }, ownerQuote: { marginTop: 24 }, ownerUsername: { marginTop: 8 }, premiumEmojisTitle: { marginTop: 32, textTransform: "uppercase" }, viewServerButtonContainer: { flex: 1, justifyContent: "flex-end" }, viewServerButton: obj5, emojiSectionContainer: { flex: 1, justifyContent: "flex-start", alignItems: "flex-start" }, emojiContainer: obj6, emojiListItem: { marginHorizontal: 8 }, emoji: { height: 24, width: 24, marginVertical: 8 } };
obj2 = { alignItems: "center", backgroundColor: nativeDefault.unsafe_rawColors.BRAND_530, paddingEnd: 8, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.BRAND_630, paddingHorizontal: 8, paddingVertical: 4 };
obj4 = { width: 276, marginEnd: 12, paddingHorizontal: 24, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj5 = { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, marginTop: 16 };
obj6 = { width: "100%", marginTop: 8, paddingHorizontal: 8, justifyContent: "space-around", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let closure_8 = createStyles(obj);
function renderItem(highlightedCreatorGuild) {
  const obj = { highlightedCreatorGuild: highlightedCreatorGuild.item };
  return metroRequire(CreatorGuildCard, obj);
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
  return metroRequire(hasOwnProperty, obj);
};
