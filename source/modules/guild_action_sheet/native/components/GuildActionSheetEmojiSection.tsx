// Module ID: 12984
// Function ID: 100500
// Name: GuildActionSheetEmojiSection
// Dependencies: [57, 31, 27, 4991, 1278, 1849, 653, 33, 4130, 689, 566, 1450, 3834, 3776, 5464, 5484, 4098, 7941, 3976, 12985, 1212, 4660, 1273, 9368, 4099, 4100, 3830, 5085, 5152, 5153, 1392, 2]
// Exports: default

// Module 12984 (GuildActionSheetEmojiSection)
import _slicedToArray from "_slicedToArray";
import set from "set";
import { View } from "preload";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let Fonts;
let closure_10;
let closure_11;
let closure_12;
let closure_9;
const require = arg1;
({ UpsellTypes: closure_9, AnalyticsSections: closure_10, Fonts } = ME);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = { header: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" } };
_createForOfIteratorHelperLoose = { width: 4, height: 4, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, marginRight: 8, marginLeft: 8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
_createForOfIteratorHelperLoose.dotSeparator = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.premiumTitle = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PREMIUM_TIER_2_PURPLE, marginLeft: 4, fontFamily: Fonts.PRIMARY_BOLD, fontSize: 12 };
_createForOfIteratorHelperLoose.emojiContainer = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", padding: 4 };
_createForOfIteratorHelperLoose.emoji = { width: 24, height: 24 };
let obj2 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, fontSize: 12, fontFamily: Fonts.PRIMARY_BOLD, textAlign: "center", textAlignVertical: "center" };
_createForOfIteratorHelperLoose.emojiCount = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PREMIUM_TIER_2_PURPLE, marginLeft: 4, fontFamily: Fonts.PRIMARY_BOLD, fontSize: 12 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetEmojiSection.tsx");

export default function GuildActionSheetEmojiSection(guildId) {
  guildId = guildId.guildId;
  let num;
  let analyticsLocations;
  let theme;
  const tmp = _createForOfIteratorHelperLoose();
  const importDefault = tmp;
  let tmp2 = callback(stateFromStores.useState(false), 2);
  const first = tmp2[0];
  callback = tmp2[1];
  let obj = guildId(first[10]);
  let items = [analyticsLocations];
  const items1 = [guildId];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => analyticsLocations.getGuildEmoji(guildId), items1);
  let obj1 = guildId(first[12]);
  const token = obj1.useToken(importDefault(first[9]).modules.mobile.TABLE_ROW_PADDING);
  let obj2 = guildId(first[10]);
  const items2 = [closure_8];
  stateFromStores = obj2.useStateFromStores(items2, () => outer1_8.getCurrentUser(), []);
  let obj3 = importDefault(first[13]);
  let tmp6 = !obj3.canUseEmojisEverywhere(stateFromStores);
  if (tmp6) {
    let obj4 = importDefault(first[13]);
    tmp6 = !obj4.isPremium(stateFromStores);
  }
  const diff = importDefault(first[11])().width - (26 + 2 * token);
  const rounded = Math.floor(diff / 32);
  let result = (diff - 24 * rounded) / (2 * rounded);
  num = 4;
  if (result >= 4) {
    num = 4;
    if (result < 12) {
      num = result;
    }
  }
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
  analyticsLocations = importDefault(first[14])(importDefault(first[15]).EMOJI_PICKER).analyticsLocations;
  const items3 = [analyticsLocations];
  theme = stateFromStores.useCallback((arg0, currentUser) => {
    let result = null == currentUser;
    if (!result) {
      let obj = tmp(first[13]);
      result = obj.canUseEmojisEverywhere(currentUser);
    }
    if (!result) {
      const _HermesInternal = HermesInternal;
      tmp(first[16]).hideActionSheet("GuildProfile:" + arg0);
      const obj2 = tmp(first[16]);
      obj = { initialUpsellKey: outer1_9.GLOBAL_EMOJI };
      obj = { section: outer1_10.EMOJI_PICKER_POPOUT };
      obj.analyticsLocation = obj;
      obj.analyticsLocations = analyticsLocations;
      const result1 = tmp(first[17]).handleShowUpsellAlert(obj);
      const obj3 = tmp(first[17]);
    }
  }, items3);
  let obj5 = guildId(first[18]);
  const tmp14 = importDefault(first[14]);
  const unsafe_rawColors = importDefault(first[9]).unsafe_rawColors;
  const tmp16 = obj5.isThemeDark(theme.theme) ? unsafe_rawColors.PREMIUM_TIER_2_PURPLE : unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS;
  let tmp18Result = null;
  if (substr.length > 0) {
    obj = {};
    const intl = guildId(first[20]).intl;
    obj.title = intl.string(guildId(first[20]).t.Q60n1E);
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
      const items4 = [callback2(num, obj2), , ];
      obj3 = { source: importDefault(first[23]), color: tmp16, size: guildId(first[22]).Icon.Sizes.SMALL };
      items4[1] = callback2(guildId(first[22]).Icon, obj3);
      obj4 = {};
      const items5 = [tmp.premiumTitle, ];
      obj5 = { color: tmp16 };
      items5[1] = obj5;
      obj4.style = items5;
      const intl2 = guildId(first[20]).intl;
      obj4.children = intl2.string(guildId(first[20]).t.p1j56s);
      items4[2] = callback2(guildId(first[22]).LegacyText, obj4);
      obj1.children = items4;
      obj.children = callback3(num, obj1);
      tmp21 = callback2(guildId(first[21]).PressableOpacity, obj);
    }
    obj.trailing = tmp21;
    const obj6 = { style: tmp.emojiContainer };
    const items6 = [
      substr.map((accessibilityLabel) => {
          let closure_0 = accessibilityLabel;
          let obj = {
            accessibilityRole: "image",
            accessibilityLabel: accessibilityLabel.name,
            onPress() {
              const result = guildId(first[24]).triggerHapticFeedback(callback(first[25]).IMPACT_LIGHT);
              const obj = guildId(first[24]);
              guildId(first[26]).presentEmoji(closure_0);
              if (!outer1_2) {
                outer1_3(true);
              }
            }
          };
          obj = { resizeMode: "contain", style: items };
          items = [outer1_11.emoji, ];
          obj = { margin: num };
          items[1] = obj;
          const tmp2 = outer1_11(first[27]);
          if (obj4.isThemeDark(lib.theme)) {
            let tmp3Result = tmp3(tmp4[28]);
          } else {
            tmp3Result = tmp3(tmp4[29]);
          }
          obj.placeholder = tmp3Result;
          const obj1 = {};
          obj4 = guildId(first[18]);
          obj1.uri = outer1_11(first[30]).getEmojiURL({ id: accessibilityLabel.id, animated: accessibilityLabel.animated, size: 48 });
          obj.source = obj1;
          obj.children = outer1_11(tmp2, obj);
          return outer1_11(guildId(first[21]).PressableOpacity, obj, accessibilityLabel.id);
        }),

    ];
    let tmp30 = null;
    if (bound > 0) {
      const obj7 = { accessibilityRole: "button" };
      const intl3 = guildId(first[20]).intl;
      obj7.accessibilityLabel = intl3.string(guildId(first[20]).t["UKOtz+"]);
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
      let _HermesInternal = HermesInternal;
      obj8.children = "+" + bound;
      obj7.children = callback2(guildId(first[22]).LegacyText, obj8);
      tmp30 = callback2(guildId(first[21]).PressableOpacity, obj7, -1);
    }
    items6[1] = tmp30;
    obj6.children = items6;
    obj.children = callback3(num, obj6);
    tmp18Result = callback2(guildId(first[19]).RowGroup, obj);
    const tmp18 = callback2;
    const tmp28 = callback3;
    const tmp29 = num;
  }
  return tmp18Result;
};
