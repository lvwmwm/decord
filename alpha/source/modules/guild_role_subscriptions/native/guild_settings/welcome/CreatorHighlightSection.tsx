// Module ID: 20248
// Function ID: 20249
// Name: CreatorHighlightSection
// Dependencies: [19, 17, 21, 5170, 575, 5781, 1187, 10116, 1113, 20249, 5864, 20198, 5872, 17491, 5788, 7380, 2]
// Exports: default

// Module 20248 (CreatorHighlightSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import Text_Text from "Text/Text" /* 5781 */;
import LinkingDefault from "Linking" /* 5864 */;
import defaultMVCPConfig from "defaultMVCPConfig" /* 7380 */;
import AssetRegistryDefault from "AssetRegistry" /* 10116 */;
import EmojiIconDefault from "EmojiIcon" /* 17491 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
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
  const obj2 = { style: tmp.subscriberCount, variant: "body-sm/medium", color: "text-overlay-light", children: subscriberCount };
  items1[0] = hasOwnProperty(Text_Text.Text, obj2);
  const obj3 = { size: native.Icon.Sizes.SMALL, color: nativeDefault.unsafe_rawColors.WHITE, style: tmp.subscriberCountIcon, source: AssetRegistryDefault };
  const Icon = native.Icon;
  items1[1] = hasOwnProperty(Icon, obj3);
  const obj4 = { variant: "body-sm/normal", color: "text-overlay-light", children: intl.string(intl5.t["3NNXPW"]) };
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
  let m0b6Kj;
  let notShownEmojiCount;
  let obj11;
  let obj17;
  let obj18;
  let obj5;
  let quote;
  let quote_attribution;
  let subscriberCount;
  highlightedCreatorGuild = highlightedCreatorGuild.highlightedCreatorGuild;
  let tmp = closure_7();
  _require = tmp;
  const guild_id = highlightedCreatorGuild.guild_id;
  let quote_attribution_title = highlightedCreatorGuild.quote_attribution_title;
  ({ quote, quote_attribution } = highlightedCreatorGuild);
  const tmp4 = guild_id(20249)(guild_id, 3, 60);
  dependencyMap = tmp4;
  const hasAllImperativeDetails = tmp4.hasAllImperativeDetails;
  let items = [hasAllImperativeDetails, tmp4];
  if (tmp4.isLoading) {
    const obj2 = { style: tmp.cardContainer, children: closure_5(guild_id(20198), {}) };
    return closure_5(View, obj2);
  } else if (hasAllImperativeDetails) {
    const details = tmp4.details;
    ({ subscriberCount, emojisToShow, notShownEmojiCount } = details);
    let obj = { style: tmp.cardContainer, children: items3 };
    const obj3 = { style: tmp.horizontalContainer, children: items1 };
    ({ guildName, guildAvatarUrl } = details);
    const obj4 = { style: tmp.guildIcon, source: obj5 };
    obj5 = { uri: guildAvatarUrl };
    items1 = [closure_5(tmp2(5872), obj4), ];
    const obj6 = { style: tmp.cardHeaderContainer, children: items2 };
    const obj7 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", lineClamp: 1, lineBreakMode: "tail", children: guildName };
    items2 = [closure_5(require("Text/Text").Text, obj7), ];
    let tmp9Result = null != subscriberCount;
    if (tmp9Result) {
      const obj8 = { subscriberCount, style: tmp.serverSubscriberCount };
      tmp9Result = tmp9(GuildServerSubscriberCount, obj8);
    }
    items2[1] = tmp9Result;
    items1[1] = closure_6(View, obj6);
    items3 = [closure_6(View, obj3), , , , ];
    const obj9 = { style: tmp.ownerQuote, variant: "body-md/normal", color: "text-default", children: quote };
    items3[1] = closure_5(require("Text/Text").Text, obj9);
    const obj10 = { style: tmp.ownerUsername, variant: "body-sm/normal", color: "text-default", lineClamp: 1, lineBreakMode: "tail", children: format(m0b6Kj, obj11) };
    const Text = tmp10(5781).Text;
    const intl = tmp10(1113).intl;
    format = intl.format;
    obj11 = { attributionName: quote_attribution, attributionTitle: quote_attribution_title };
    m0b6Kj = tmp10(1113).t.m0b6Kj;
    if (quote_attribution_title == null) {
      const intl2 = tmp10(1113).intl;
      quote_attribution_title = intl2.string(tmp10(1113).t.pclUFJ);
    }
    items3[2] = closure_5(Text, obj10);
    let tmp7Result = null != emojisToShow && emojisToShow.length > 0;
    if (tmp7Result) {
      const obj12 = { style: tmp.emojiSectionContainer, children: items4 };
      const obj13 = { style: tmp.premiumEmojisTitle, variant: "body-sm/medium", color: "text-default", children: intl3.string(require("intl").t.wg53L8) };
      const Text2 = tmp10(5781).Text;
      intl3 = tmp10(1113).intl;
      items4 = [closure_5(Text2, obj13), ];
      const obj14 = { style: items5, children: items6 };
      items5 = [, ];
      ({ horizontalContainer: arr6[0], emojiContainer: arr6[1] } = tmp);
      items6 = [
        emojisToShow.map((id) => {
              let items;
              const obj = { style: items, size: 24, id: id.id, guildId: guild_id };
              items = [, ];
              ({ emoji: arr[0], emojiListItem: arr[1] } = closure_0);
              return hasOwnProperty(EmojiIconDefault, obj, id.id);
            }),

      ];
      let tmp9Result2 = null != notShownEmojiCount;
      if (tmp9Result2) {
        const _HermesInternal = HermesInternal;
        const obj15 = { style: tmp.emojiListItem, variant: "body-sm/semibold", color: "text-default", children: "+" + notShownEmojiCount };
        const Text3 = tmp10(5781).Text;
        tmp9Result2 = tmp9(Text3, obj15);
      }
      items6[1] = tmp9Result2;
      items4[1] = closure_6(View, obj14);
      tmp7Result = tmp7(tmp8, obj12);
    }
    items3[3] = tmp7Result;
    const obj16 = { style: tmp.viewServerButtonContainer, children: closure_5(View, obj17) };
    obj17 = { style: tmp.viewServerButton, children: closure_5(Button, obj18) };
    obj18 = { variant: "secondary", text: intl4.string(require("intl").t.mQ2IGa), onPress: tmp5, grow: true };
    Button = tmp10(5788).Button;
    intl4 = tmp10(1113).intl;
    items3[4] = closure_5(View, obj16);
    return closure_6(View, obj);
  } else {
    return null;
  }
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { horizontalContainer: { flexDirection: "row" }, serverSubscriberCount: { marginTop: 8 }, subscriberCountContainer: obj2, subscriberCount: obj3, subscriberCountIcon: { marginStart: 8, marginEnd: 6, marginVertical: 4, alignSelf: "center" }, cardContainer: obj4, cardHeaderContainer: { flex: 1, justifyContent: "flex-start", alignItems: "flex-start" }, guildIcon: { width: 60, height: 60, borderRadius: 6, marginEnd: 16 }, ownerQuote: { marginTop: 24 }, ownerUsername: { marginTop: 8 }, premiumEmojisTitle: { marginTop: 32 }, viewServerButtonContainer: { flex: 1, justifyContent: "flex-end" }, viewServerButton: { marginTop: 16 }, emojiSectionContainer: { flex: 1, justifyContent: "flex-start", alignItems: "flex-start" }, emojiContainer: obj5, emojiListItem: { marginHorizontal: 8 }, emoji: { height: 24, width: 24, marginVertical: 8 } };
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
