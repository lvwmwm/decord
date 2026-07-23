// Module ID: 16402
// Function ID: 127879
// Name: GuildServerSubscriberCount
// Dependencies: [31, 27, 33, 4130, 689, 4126, 1273, 9356, 1212, 16403, 3827, 16375, 5085, 14129, 4544, 2]
// Exports: default

// Module 16402 (GuildServerSubscriberCount)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
let require = arg1;
function GuildServerSubscriberCount(arg0) {
  let style;
  let subscriberCount;
  ({ subscriberCount, style } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: items };
  items = [, , ];
  ({ horizontalContainer: arr[0], subscriberCountContainer: arr[1] } = tmp);
  items[2] = style;
  obj = { style: tmp.subscriberCount, variant: "text-sm/medium", color: "text-overlay-light", children: subscriberCount };
  const items1 = [callback(require(4126) /* Text */.Text, obj), , ];
  obj = { size: require(1273) /* Button */.Icon.Sizes.SMALL, color: importDefault(689).unsafe_rawColors.WHITE, style: tmp.subscriberCountIcon, source: importDefault(9356) };
  items1[1] = callback(require(1273) /* Button */.Icon, obj);
  const obj1 = { variant: "text-sm/normal", color: "text-overlay-light" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl.string(require(1212) /* getSystemLocale */.t["3NNXPW"]);
  items1[2] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items1;
  return callback2(closure_4, obj);
}
function CreatorGuildCard(highlightedCreatorGuild) {
  let emojisToShow;
  let guildAvatarUrl;
  let guildName;
  let notShownEmojiCount;
  let quote;
  let quote_attribution;
  let subscriberCount;
  highlightedCreatorGuild = highlightedCreatorGuild.highlightedCreatorGuild;
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  const guild_id = highlightedCreatorGuild.guild_id;
  let quote_attribution_title = highlightedCreatorGuild.quote_attribution_title;
  ({ quote, quote_attribution } = highlightedCreatorGuild);
  const tmp2 = guild_id(16403)(guild_id, 3, 60);
  const dependencyMap = tmp2;
  const hasAllImperativeDetails = tmp2.hasAllImperativeDetails;
  let items = [hasAllImperativeDetails, tmp2];
  if (tmp2.isLoading) {
    let obj = { style: tmp.cardContainer, children: callback(guild_id(16375), {}) };
    return callback(closure_4, obj);
  } else if (hasAllImperativeDetails) {
    const details = tmp2.details;
    ({ subscriberCount, emojisToShow, notShownEmojiCount } = details);
    obj = { style: tmp.cardContainer };
    obj = { style: tmp.horizontalContainer };
    ({ guildName, guildAvatarUrl } = details);
    const obj1 = { style: tmp.guildIcon };
    const obj2 = { uri: guildAvatarUrl };
    obj1.source = obj2;
    const items1 = [callback(guild_id(5085), obj1), ];
    const obj3 = { style: tmp.cardHeaderContainer };
    const obj4 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", lineClamp: 1, lineBreakMode: "tail", children: guildName };
    const items2 = [callback(require(4126) /* Text */.Text, obj4), ];
    let tmp17 = null != subscriberCount;
    if (tmp17) {
      const obj5 = { subscriberCount, style: tmp.serverSubscriberCount };
      tmp17 = callback(GuildServerSubscriberCount, obj5);
    }
    items2[1] = tmp17;
    obj3.children = items2;
    items1[1] = closure_7(closure_4, obj3);
    obj.children = items1;
    const items3 = [closure_7(closure_4, obj), , , , ];
    const obj6 = { style: tmp.ownerQuote, variant: "text-md/normal", color: "text-default", children: quote };
    items3[1] = callback(require(4126) /* Text */.Text, obj6);
    const obj7 = { style: tmp.ownerUsername, variant: "text-sm/normal", color: "text-default", lineClamp: 1, lineBreakMode: "tail" };
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj8 = { attributionName: quote_attribution };
    if (null == quote_attribution_title) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      quote_attribution_title = intl2.string(require(1212) /* getSystemLocale */.t.pclUFJ);
    }
    obj8.attributionTitle = quote_attribution_title;
    obj7.children = intl.format(require(1212) /* getSystemLocale */.t.m0b6Kj, obj8);
    items3[2] = callback(require(4126) /* Text */.Text, obj7);
    let tmp27Result = null != emojisToShow;
    if (tmp27Result) {
      tmp27Result = emojisToShow.length > 0;
    }
    if (tmp27Result) {
      const obj9 = { style: tmp.emojiSectionContainer };
      const obj10 = { style: tmp.premiumEmojisTitle, variant: "text-xs/semibold", color: "text-default" };
      const intl3 = require(1212) /* getSystemLocale */.intl;
      obj10.children = intl3.string(require(1212) /* getSystemLocale */.t.wg53L8);
      const items4 = [callback(require(4126) /* Text */.Text, obj10), ];
      const obj11 = {};
      const items5 = [, ];
      ({ horizontalContainer: arr6[0], emojiContainer: arr6[1] } = tmp);
      obj11.style = items5;
      const items6 = [
        emojisToShow.map((id) => {
              const items = [, ];
              ({ emoji: arr[0], emojiListItem: arr[1] } = closure_0);
              return outer1_6(guild_id(tmp2[13]), { style: items, size: 24, id: id.id, guildId: guild_id }, id.id);
            }),

      ];
      let tmp34 = null != notShownEmojiCount;
      if (tmp34) {
        const obj12 = { style: tmp.emojiListItem, variant: "text-sm/semibold", color: "text-default" };
        const _HermesInternal = HermesInternal;
        obj12.children = "+" + notShownEmojiCount;
        tmp34 = callback(require(4126) /* Text */.Text, obj12);
      }
      items6[1] = tmp34;
      obj11.children = items6;
      items4[1] = closure_7(closure_4, obj11);
      obj9.children = items4;
      tmp27Result = closure_7(closure_4, obj9);
      const tmp27 = closure_7;
      const tmp28 = closure_4;
      const tmp32 = closure_7;
      const tmp33 = closure_4;
    }
    items3[3] = tmp27Result;
    const obj13 = { style: tmp.viewServerButtonContainer };
    const obj14 = { pillStyle: tmp.viewServerButton };
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj14.text = intl4.string(require(1212) /* getSystemLocale */.t.mQ2IGa);
    obj14.onPress = tmp3;
    obj14.shrink = true;
    obj13.children = callback(require(4544) /* CollapsingText */.BaseTextButton, obj14);
    items3[4] = callback(closure_4, obj13);
    obj.children = items3;
    return closure_7(closure_4, obj);
  } else {
    return null;
  }
}
({ View: closure_4, FlatList: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { horizontalContainer: { flexDirection: "row" }, serverSubscriberCount: { marginTop: 8 } };
_createForOfIteratorHelperLoose = { alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_530, paddingEnd: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, overflow: "hidden" };
_createForOfIteratorHelperLoose.subscriberCountContainer = _createForOfIteratorHelperLoose;
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_630, paddingHorizontal: 8, paddingVertical: 4 };
_createForOfIteratorHelperLoose.subscriberCount = obj1;
_createForOfIteratorHelperLoose.subscriberCountIcon = { marginStart: 8, marginEnd: 6, marginVertical: 4, alignSelf: "center" };
let obj2 = { width: 276, marginEnd: 12, paddingHorizontal: 24, paddingVertical: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
_createForOfIteratorHelperLoose.cardContainer = obj2;
_createForOfIteratorHelperLoose.cardHeaderContainer = { flex: 1, justifyContent: "flex-start", alignItems: "flex-start" };
_createForOfIteratorHelperLoose.guildIcon = { width: 60, height: 60, borderRadius: 6, marginEnd: 16 };
_createForOfIteratorHelperLoose.ownerQuote = { marginTop: 24 };
_createForOfIteratorHelperLoose.ownerUsername = { marginTop: 8 };
_createForOfIteratorHelperLoose.premiumEmojisTitle = { marginTop: 32, textTransform: "uppercase" };
_createForOfIteratorHelperLoose.viewServerButtonContainer = { flex: 1, justifyContent: "flex-end" };
let obj3 = { width: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, marginTop: 16 };
_createForOfIteratorHelperLoose.viewServerButton = obj3;
_createForOfIteratorHelperLoose.emojiSectionContainer = { flex: 1, justifyContent: "flex-start", alignItems: "flex-start" };
let obj4 = { width: "100%", marginTop: 8, paddingHorizontal: 8, justifyContent: "space-around", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL, alignItems: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
_createForOfIteratorHelperLoose.emojiContainer = obj4;
_createForOfIteratorHelperLoose.emojiListItem = { marginHorizontal: 8 };
_createForOfIteratorHelperLoose.emoji = { height: 24, width: 24, marginVertical: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
function renderItem(highlightedCreatorGuild) {
  return callback(CreatorGuildCard, { highlightedCreatorGuild: highlightedCreatorGuild.item });
}
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorHighlightSection.tsx");

export default function CreatorHighlightSection(data) {
  return callback(closure_5, {
    data: data.highlightedCreators,
    horizontal: true,
    keyExtractor(guild_id) {
      return guild_id.guild_id;
    },
    renderItem
  });
};
