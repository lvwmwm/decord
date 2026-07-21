// Module ID: 16269
// Function ID: 125602
// Name: GuildServerSubscriberCount
// Dependencies: []
// Exports: default

// Module 16269 (GuildServerSubscriberCount)
function GuildServerSubscriberCount(arg0) {
  let style;
  let subscriberCount;
  ({ subscriberCount, style } = arg0);
  const tmp = callback3();
  let obj = { style: items };
  const items = [, , ];
  ({ horizontalContainer: arr[0], subscriberCountContainer: arr[1] } = tmp);
  items[2] = style;
  obj = { style: tmp.subscriberCount, children: subscriberCount };
  const items1 = [callback(arg1(dependencyMap[5]).Text, obj), , ];
  obj = { size: arg1(dependencyMap[6]).Icon.Sizes.SMALL, color: importDefault(dependencyMap[4]).unsafe_rawColors.WHITE, style: tmp.subscriberCountIcon, source: importDefault(dependencyMap[7]) };
  items1[1] = callback(arg1(dependencyMap[6]).Icon, obj);
  const obj1 = {};
  const intl = arg1(dependencyMap[8]).intl;
  obj1.children = intl.string(arg1(dependencyMap[8]).t.3NNXPW);
  items1[2] = callback(arg1(dependencyMap[5]).Text, obj1);
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
  const tmp = callback3();
  const arg1 = tmp;
  const guild_id = highlightedCreatorGuild.guild_id;
  const importDefault = guild_id;
  let quote_attribution_title = highlightedCreatorGuild.quote_attribution_title;
  ({ quote, quote_attribution } = highlightedCreatorGuild);
  const tmp2 = importDefault(dependencyMap[9])(guild_id, 3, 60);
  const dependencyMap = tmp2;
  const hasAllImperativeDetails = tmp2.hasAllImperativeDetails;
  let closure_3 = hasAllImperativeDetails;
  const items = [hasAllImperativeDetails, tmp2];
  if (tmp2.isLoading) {
    let obj = { style: tmp.cardContainer, children: callback(importDefault(dependencyMap[11]), {}) };
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
    const items1 = [callback(importDefault(dependencyMap[12]), obj1), ];
    const obj3 = { style: tmp.cardHeaderContainer };
    const obj4 = { children: guildName };
    const items2 = [callback(arg1(dependencyMap[5]).Text, obj4), ];
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
    const obj6 = { "Null": "absolute", "Null": 0, "Null": "center", style: tmp.ownerQuote, children: quote };
    items3[1] = callback(arg1(dependencyMap[5]).Text, obj6);
    const obj7 = { 9223372036854775807: "xs", 0: "interactive-text-default", -9223372036854775808: "md", 0: "background-brand", 0: "white", style: tmp.ownerUsername };
    const intl = arg1(dependencyMap[8]).intl;
    const obj8 = { attributionName: quote_attribution };
    if (null == quote_attribution_title) {
      const intl2 = arg1(dependencyMap[8]).intl;
      quote_attribution_title = intl2.string(arg1(dependencyMap[8]).t.pclUFJ);
    }
    obj8.attributionTitle = quote_attribution_title;
    obj7.children = intl.format(arg1(dependencyMap[8]).t.m0b6Kj, obj8);
    items3[2] = callback(arg1(dependencyMap[5]).Text, obj7);
    let tmp27Result = null != emojisToShow;
    if (tmp27Result) {
      tmp27Result = emojisToShow.length > 0;
    }
    if (tmp27Result) {
      const obj9 = { style: tmp.emojiSectionContainer };
      const obj10 = { style: tmp.premiumEmojisTitle };
      const intl3 = arg1(dependencyMap[8]).intl;
      obj10.children = intl3.string(arg1(dependencyMap[8]).t.wg53L8);
      const items4 = [callback(arg1(dependencyMap[5]).Text, obj10), ];
      const obj11 = {};
      const items5 = [, ];
      ({ horizontalContainer: arr6[0], emojiContainer: arr6[1] } = tmp);
      obj11.style = items5;
      const items6 = [
        emojisToShow.map((id) => {
              const items = [, ];
              ({ emoji: arr[0], emojiListItem: arr[1] } = tmp);
              return callback(guild_id(tmp2[13]), { style: items, size: 24, id: id.id, guildId: guild_id }, id.id);
            }),

      ];
      let tmp34 = null != notShownEmojiCount;
      if (tmp34) {
        const obj12 = { style: tmp.emojiListItem };
        const _HermesInternal = HermesInternal;
        obj12.children = "+" + notShownEmojiCount;
        tmp34 = callback(arg1(dependencyMap[5]).Text, obj12);
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
    const intl4 = arg1(dependencyMap[8]).intl;
    obj14.text = intl4.string(arg1(dependencyMap[8]).t.mQ2IGa);
    obj14.onPress = tmp3;
    obj14.shrink = true;
    obj13.children = callback(arg1(dependencyMap[14]).BaseTextButton, obj14);
    items3[4] = callback(closure_4, obj13);
    obj.children = items3;
    return closure_7(closure_4, obj);
  } else {
    return null;
  }
}
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, FlatList: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { horizontalContainer: { flexDirection: "row" }, serverSubscriberCount: { marginTop: 8 } };
obj = { "Null": 208463177963594620000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006688871913474923, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007436098949264682, "Null": -0.0000000000000000000000000000000000000009788013778458023, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006312419341205383, backgroundColor: importDefault(dependencyMap[4]).unsafe_rawColors.BRAND_530, borderRadius: importDefault(dependencyMap[4]).radii.xs };
obj.subscriberCountContainer = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.subscriberCount = { backgroundColor: importDefault(dependencyMap[4]).unsafe_rawColors.BRAND_630 };
obj.subscriberCountIcon = {};
const obj1 = { backgroundColor: importDefault(dependencyMap[4]).unsafe_rawColors.BRAND_630 };
obj.cardContainer = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[4]).radii.sm };
obj.cardHeaderContainer = {};
obj.guildIcon = { <string:3853039475>: null, <string:1408316811>: "stretch", <string:3025157889>: 54, <string:676503258>: 1 };
obj.ownerQuote = { marginTop: 24 };
obj.ownerUsername = { marginTop: 8 };
obj.premiumEmojisTitle = {};
obj.viewServerButtonContainer = {};
const obj3 = { -1269809407: null, 676503258: 10, 1093740625: "grab", backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_SUBTLE };
obj.viewServerButton = obj3;
obj.emojiSectionContainer = {};
const obj2 = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[4]).radii.sm };
obj.emojiContainer = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_NORMAL, borderRadius: importDefault(dependencyMap[4]).radii.sm };
obj.emojiListItem = { marginHorizontal: 8 };
obj.emoji = {};
let closure_8 = obj.createStyles(obj);
function renderItem(highlightedCreatorGuild) {
  return callback(CreatorGuildCard, { highlightedCreatorGuild: highlightedCreatorGuild.item });
}
const obj4 = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_NORMAL, borderRadius: importDefault(dependencyMap[4]).radii.sm };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorHighlightSection.tsx");

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
