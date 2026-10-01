// Module ID: 13522
// Function ID: 13523
// Name: GuildActionSheetEmojiSection
// Dependencies: [32, 19, 17, 5771, 1182, 1372, 1074, 21, 4836, 576, 504, 1479, 4531, 4488, 6583, 6603, 4800, 8614, 4685, 13523, 1115, 5435, 1177, 9775, 4801, 4802, 4527, 5899, 6552, 6553, 1397, 2]
// Exports: default

// Module 13522 (GuildActionSheetEmojiSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4802 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 8614 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import EmojiStore from "EmojiStore" /* 5771 */;
import ThemeStore_mod from "ThemeStore" /* 1182 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let Fonts;
let c10;
let c9;
let closure_12;
let obj2;
let obj3;
let size;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
let ThemeStore = ThemeStore_mod;
({ UpsellTypes: c9, AnalyticsSections: c10, Fonts } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" }, dotSeparator: size, premiumTitle: obj2, emojiContainer: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", padding: 4 }, emoji: { width: 24, height: 24 }, emojiCount: obj3 };
size = { width: 4, height: 4, borderRadius: nativeDefault.radii.xs, marginRight: 8, marginLeft: 8, backgroundColor: nativeDefault.colors.TEXT_SUBTLE };
createStyles = createStyles.createStyles;
obj2 = { color: nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE, marginLeft: 4, fontFamily: Fonts.PRIMARY_BOLD, fontSize: 12 };
obj3 = { color: nativeDefault.colors.TEXT_SUBTLE, fontSize: 12, fontFamily: Fonts.PRIMARY_BOLD, textAlign: "center", textAlignVertical: "center" };
let closure_13 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetEmojiSection.tsx");

export default function GuildActionSheetEmojiSection(guildId) {
  let LegacyText2;
  let closure_1;
  let closure_3;
  let closure_7;
  let currentUser;
  let first;
  let intl;
  let intl2;
  let intl3;
  let items4;
  let items5;
  let items6;
  let items7;
  let length;
  let num3;
  let obj13;
  let obj15;
  let obj8;
  let tmp20Result;
  let tmp24;
  let tmp25;
  guildId = guildId.guildId;
  first = undefined;
  _slicedToArray = undefined;
  let stateFromStores;
  let num;
  let analyticsLocations;
  ThemeStore = undefined;
  const tmp = closure_13();
  importDefault = tmp;
  let obj = stateFromStores;
  [first, _slicedToArray] = stateFromStores.useState(false);
  let tmp4 = guildId;
  let obj2 = guildId(first[10]);
  let items = [analyticsLocations];
  const items1 = [guildId];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items, () => EmojiStore.getGuildEmoji(guildId), items1);
  const width = require("useWindowDimensions")().width;
  let obj3 = guildId(first[12]);
  const token = obj3.useToken(require("native").modules.mobile.TABLE_ROW_PADDING);
  let obj4 = guildId(first[10]);
  const items2 = [UserStore];
  stateFromStores = obj4.useStateFromStores(items2, () => currentUser.getCurrentUser(), []);
  let obj5 = require("PremiumUtils");
  let result = obj5.canUseEmojisEverywhere(stateFromStores);
  let tmp10 = !result;
  if (tmp10) {
    const tmp6Result = require("PremiumUtils");
    tmp10 = !tmp6Result.isPremium(stateFromStores);
  }
  const diff = width - (26 + 2 * token);
  const rounded = Math.floor(diff / 32);
  let result1 = (diff - 24 * rounded) / (2 * rounded);
  num = 4;
  if (4 <= result1) {
    num = 4;
    if (result1 < 12) {
      num = result1;
    }
  }
  if (first) {
    length = stateFromStoresArray.length;
    num3 = 0;
  } else {
    length = 2 * rounded;
    num3 = stateFromStoresArray.length - length;
  }
  let diff1 = length;
  let bound = num3;
  if (0 < num3) {
    diff1 = length - 1;
    const _Math = Math;
    bound = Math.min(num3 + 1, 99);
  }
  const substr = stateFromStoresArray.slice(0, diff1);
  const tmp6Result2 = require("useAnalyticsLocations");
  analyticsLocations = tmp6Result2(tmp6(tmp5[15]).EMOJI_PICKER).analyticsLocations;
  const items3 = [analyticsLocations];
  ThemeStore = obj.useCallback((arg0, currentUser) => {
    let obj5;
    let result = null == currentUser;
    if (!result) {
      const obj = PremiumUtilsDefault;
      result = obj.canUseEmojisEverywhere(currentUser);
    }
    if (!result) {
      const _HermesInternal = HermesInternal;
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet("GuildProfile:" + arg0);
      const obj4 = { initialUpsellKey: constants.GLOBAL_EMOJI, analyticsLocation: obj5, analyticsLocations };
      obj5 = { section: constants2.EMOJI_PICKER_POPOUT };
      const obj3 = PremiumUpsellUtilsDefault;
      const result1 = obj3.handleShowUpsellAlert(obj4);
    }
  }, items3);
  const tmp4Result = tmp4(first[18]);
  const isThemeDarkResult = tmp4Result.isThemeDark(ThemeStore.theme);
  const unsafe_rawColors = tmp6(tmp5[9]).unsafe_rawColors;
  const tmp18 = isThemeDarkResult ? unsafe_rawColors.PREMIUM_TIER_2_PURPLE : unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS;
  let tmp20Result4 = null;
  if (substr.length > 0) {
    let obj6 = { title: intl.string(tmp4(tmp5[20]).t.Q60n1E), trailing: tmp20Result, children: tmp24(tmp25, obj13) };
    const RowGroup = tmp4(tmp5[19]).RowGroup;
    intl = tmp4(tmp5[20]).intl;
    tmp20Result = null;
    if (tmp10) {
      const obj7 = {
        accessibilityRole: "button",
        onPress() {
              return closure_7(guildId, stateFromStores);
            },
        children: closure_12(num, obj8)
      };
      obj8 = { style: tmp.header, children: items4 };
      const obj9 = { style: tmp.dotSeparator };
      let PressableOpacity = tmp4(tmp5[21]).PressableOpacity;
      items4 = [closure_11(num, obj9), , ];
      const obj10 = { source: require("AssetRegistry"), color: tmp18, size: tmp4(first[22]).Icon.Sizes.SMALL };
      const Icon = tmp4(tmp5[22]).Icon;
      items4[1] = closure_11(Icon, obj10);
      const obj11 = { style: items5, children: intl2.string(tmp4(first[20]).t.p1j56s) };
      items5 = [tmp.premiumTitle, ];
      const obj12 = { color: tmp18 };
      items5[1] = obj12;
      const LegacyText = tmp4(tmp5[22]).LegacyText;
      intl2 = tmp4(tmp5[20]).intl;
      items4[2] = closure_11(LegacyText, obj11);
      tmp20Result = tmp20(PressableOpacity, obj7);
    }
    obj13 = { style: tmp.emojiContainer, children: items6 };
    items6 = [
      substr.map((accessibilityLabel) => {
          let items;
          let obj2;
          let obj5;
          let obj6;
          let tmp3Result;
          let tmp3Result2;
          let tmp4;
          let closure_0 = accessibilityLabel;
          let obj = {
            accessibilityRole: "image",
            accessibilityLabel: accessibilityLabel.name,
            onPress() {
              const obj = HapticUtils;
              const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
              const obj2 = ToastUtils;
              obj2.presentEmoji(accessibilityLabel);
              const tmp3 = first;
              if (!tmp3) {
                closure_3(true);
              }
            },
            children: closure_1_11(tmp4, obj2)
          };
          let tmp3 = closure_1;
          const PressableOpacity = guildId(first[21]).PressableOpacity;
          obj2 = { resizeMode: "contain", style: items, placeholder: tmp3Result, source: obj5 };
          items = [closure_1.emoji, ];
          const obj3 = { margin: num };
          items[1] = obj3;
          tmp4 = closure_1(first[27]);
          const obj4 = guildId(first[18]);
          if (obj4.isThemeDark(closure_7.theme)) {
            tmp3Result = tmp3(tmp2[28]);
          } else {
            tmp3Result = tmp3(tmp2[29]);
          }
          obj5 = { uri: tmp3Result2.getEmojiURL(obj6) };
          obj6 = { id: accessibilityLabel.id, animated: accessibilityLabel.animated, size: 48 };
          tmp3Result2 = tmp3(first[30]);
          return closure_1_11(PressableOpacity, obj, accessibilityLabel.id);
        }),

    ];
    let tmp20Result3 = null;
    tmp24 = closure_12;
    tmp25 = num;
    if (bound > 0) {
      const obj14 = {
        accessibilityRole: "button",
        accessibilityLabel: intl3.string(tmp4(first[20]).t["UKOtz+"]),
        onPress() {
              const obj = HapticUtils;
              const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
              closure_3(true);
            },
        children: closure_11(LegacyText2, obj15)
      };
      const PressableOpacity2 = tmp4(tmp5[21]).PressableOpacity;
      intl3 = tmp4(tmp5[20]).intl;
      obj15 = { style: items7, children: "+" + bound };
      items7 = [, , ];
      ({ emoji: arr10[0], emojiCount: arr10[1] } = tmp);
      const obj16 = { margin: num };
      items7[2] = obj16;
      let _HermesInternal = HermesInternal;
      LegacyText2 = tmp4(tmp5[22]).LegacyText;
      tmp20Result3 = tmp20(PressableOpacity2, obj14, -1);
    }
    items6[1] = tmp20Result3;
    tmp20Result4 = tmp20(RowGroup, obj6);
  }
  return tmp20Result4;
};
