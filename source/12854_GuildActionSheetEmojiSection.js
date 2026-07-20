// Module ID: 12854
// Function ID: 98266
// Name: GuildActionSheetEmojiSection
// Dependencies: []
// Exports: default

// Module 12854 (GuildActionSheetEmojiSection)
let Fonts;
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ UpsellTypes: closure_9, AnalyticsSections: closure_10, Fonts } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = { header: {} };
obj = { <string:335545560>: null, <string:603981006>: "\u{1F6B9}", <string:80489728>: 6, <string:81021952>: 1155, <string:80568576>: null, borderRadius: importDefault(dependencyMap[9]).radii.xs, backgroundColor: importDefault(dependencyMap[9]).colors.TEXT_SUBTLE };
obj.dotSeparator = obj;
const tmp3 = arg1(dependencyMap[7]);
obj.premiumTitle = { color: importDefault(dependencyMap[9]).unsafe_rawColors.PREMIUM_TIER_2_PURPLE, marginLeft: 4, fontFamily: Fonts.PRIMARY_BOLD, fontSize: 12 };
obj.emojiContainer = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true };
obj.emoji = { aze: false, azj: false };
const obj2 = { <string:1602118752>: null, <string:3629236602>: "\u{1F449}\u{1F3FE}", <string:2900517872>: true, <string:27677015>: null, <string:2182482790>: 8, color: importDefault(dependencyMap[9]).colors.TEXT_SUBTLE, fontFamily: Fonts.PRIMARY_BOLD };
obj.emojiCount = obj2;
let closure_13 = obj.createStyles(obj);
const obj1 = { color: importDefault(dependencyMap[9]).unsafe_rawColors.PREMIUM_TIER_2_PURPLE, marginLeft: 4, fontFamily: Fonts.PRIMARY_BOLD, fontSize: 12 };
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetEmojiSection.tsx");

export default function GuildActionSheetEmojiSection(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  let View;
  let closure_6;
  let theme;
  const tmp = callback4();
  const importDefault = tmp;
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  const dependencyMap = first;
  const callback = tmp2[1];
  let obj = arg1(dependencyMap[10]);
  const items = [closure_6];
  const items1 = [guildId];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => analyticsLocations.getGuildEmoji(guildId), items1);
  let obj1 = arg1(dependencyMap[12]);
  const token = obj1.useToken(importDefault(dependencyMap[9]).modules.mobile.TABLE_ROW_PADDING);
  let obj2 = arg1(dependencyMap[10]);
  const items2 = [closure_8];
  const stateFromStores = obj2.useStateFromStores(items2, () => currentUser.getCurrentUser(), []);
  const React = stateFromStores;
  let obj3 = importDefault(dependencyMap[13]);
  let tmp6 = !obj3.canUseEmojisEverywhere(stateFromStores);
  if (tmp6) {
    let obj4 = importDefault(dependencyMap[13]);
    tmp6 = !obj4.isPremium(stateFromStores);
  }
  const diff = importDefault(dependencyMap[11])().width - (26 + 2 * token);
  const rounded = Math.floor(diff / 32);
  const result = (diff - 24 * rounded) / (2 * rounded);
  let num = 4;
  if (result >= 4) {
    num = 4;
    if (result < 12) {
      num = result;
    }
  }
  View = num;
  if (first) {
    let length = stateFromStoresArray.length;
    let num2 = 0;
  } else {
    length = 2 * rounded;
    num2 = stateFromStoresArray.length - length;
  }
  let diff1 = length;
  let bound = num2;
  if (num2 > 0) {
    diff1 = length - 1;
    const _Math = Math;
    bound = Math.min(num2 + 1, 99);
  }
  const substr = stateFromStoresArray.slice(0, diff1);
  const analyticsLocations = importDefault(dependencyMap[14])(importDefault(dependencyMap[15]).EMOJI_PICKER).analyticsLocations;
  closure_6 = analyticsLocations;
  const items3 = [analyticsLocations];
  theme = React.useCallback((arg0, currentUser) => {
    let result = null == currentUser;
    if (!result) {
      let obj = tmp(first[13]);
      result = obj.canUseEmojisEverywhere(currentUser);
    }
    if (!result) {
      const _HermesInternal = HermesInternal;
      tmp(first[16]).hideActionSheet("GuildProfile:" + arg0);
      const obj2 = tmp(first[16]);
      obj = { initialUpsellKey: constants.GLOBAL_EMOJI };
      obj = { section: constants2.EMOJI_PICKER_POPOUT };
      obj.analyticsLocation = obj;
      obj.analyticsLocations = analyticsLocations;
      const result1 = tmp(first[17]).handleShowUpsellAlert(obj);
      const obj3 = tmp(first[17]);
    }
  }, items3);
  let obj5 = arg1(dependencyMap[18]);
  const tmp14 = importDefault(dependencyMap[14]);
  const unsafe_rawColors = importDefault(dependencyMap[9]).unsafe_rawColors;
  const tmp16 = obj5.isThemeDark(theme.theme) ? unsafe_rawColors.PREMIUM_TIER_2_PURPLE : unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS;
  let tmp18Result = null;
  if (substr.length > 0) {
    obj = {};
    const intl = arg1(dependencyMap[20]).intl;
    obj.title = intl.string(arg1(dependencyMap[20]).t.Q60n1E);
    let tmp21 = null;
    if (tmp6) {
      obj = {
        accessibilityRole: "button",
        onPress() {
              return lib(guildId, stateFromStores);
            }
      };
      obj1 = { style: tmp.header };
      obj2 = { style: tmp.dotSeparator };
      const items4 = [callback2(View, obj2), , ];
      obj3 = { source: importDefault(dependencyMap[23]), color: tmp16, size: arg1(dependencyMap[22]).Icon.Sizes.SMALL };
      items4[1] = callback2(arg1(dependencyMap[22]).Icon, obj3);
      obj4 = {};
      const items5 = [tmp.premiumTitle, ];
      obj5 = { color: tmp16 };
      items5[1] = obj5;
      obj4.style = items5;
      const intl2 = arg1(dependencyMap[20]).intl;
      obj4.children = intl2.string(arg1(dependencyMap[20]).t.p1j56s);
      items4[2] = callback2(arg1(dependencyMap[22]).LegacyText, obj4);
      obj1.children = items4;
      obj.children = callback3(View, obj1);
      tmp21 = callback2(arg1(dependencyMap[21]).PressableOpacity, obj);
    }
    obj.trailing = tmp21;
    const obj6 = { style: tmp.emojiContainer };
    const items6 = [
      substr.map((accessibilityLabel) => {
          const guildId = accessibilityLabel;
          let obj = {
            accessibilityRole: "image",
            accessibilityLabel: accessibilityLabel.name,
            onPress() {
              const result = arg0(closure_2[24]).triggerHapticFeedback(callback(closure_2[25]).IMPACT_LIGHT);
              const obj = arg0(closure_2[24]);
              arg0(closure_2[26]).presentEmoji(arg0);
              if (!closure_2) {
                callback2(true);
              }
            }
          };
          obj = { resizeMode: "contain", style: items };
          const items = [closure_11.emoji, ];
          obj = { margin: num };
          items[1] = obj;
          const tmp2 = closure_11(first[27]);
          if (obj4.isThemeDark(lib.theme)) {
            let tmp3Result = tmp3(tmp4[28]);
          } else {
            tmp3Result = tmp3(tmp4[29]);
          }
          obj.placeholder = tmp3Result;
          const obj1 = {};
          const obj4 = guildId(first[18]);
          obj1.uri = closure_11(first[30]).getEmojiURL({ id: accessibilityLabel.id, animated: accessibilityLabel.animated, size: 48 });
          obj.source = obj1;
          obj.children = closure_11(tmp2, obj);
          return closure_11(guildId(first[21]).PressableOpacity, obj, accessibilityLabel.id);
        }),

    ];
    let tmp30 = null;
    if (bound > 0) {
      const obj7 = { accessibilityRole: "button" };
      const intl3 = arg1(dependencyMap[20]).intl;
      obj7.accessibilityLabel = intl3.string(arg1(dependencyMap[20]).t.UKOtz+);
      obj7.onPress = function onPress() {
        const result = guildId(first[24]).triggerHapticFeedback(tmp(first[25]).IMPACT_LIGHT);
        callback(true);
      };
      const obj8 = {};
      const items7 = [, , ];
      ({ emoji: arr10[0], emojiCount: arr10[1] } = tmp);
      const obj9 = { margin: num };
      items7[2] = obj9;
      obj8.style = items7;
      const _HermesInternal = HermesInternal;
      obj8.children = "+" + bound;
      obj7.children = callback2(arg1(dependencyMap[22]).LegacyText, obj8);
      tmp30 = callback2(arg1(dependencyMap[21]).PressableOpacity, obj7, -1);
    }
    items6[1] = tmp30;
    obj6.children = items6;
    obj.children = callback3(View, obj6);
    tmp18Result = callback2(arg1(dependencyMap[19]).RowGroup, obj);
    const tmp18 = callback2;
    const tmp28 = callback3;
    const tmp29 = View;
  }
  return tmp18Result;
};
