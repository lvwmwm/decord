// Module ID: 15590
// Function ID: 15591
// Name: SettingsAccessibilityScreen
// Dependencies: [19, 4750, 2024, 8238, 1078, 21, 1119, 2112, 2876, 7626, 7284, 15591, 558, 568, 1488, 565, 11594, 14953, 2]

// Module 15590 (SettingsAccessibilityScreen)
import useStateFromStores from "useStateFromStores" /* 565 */;
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import useNavigation from "useNavigation" /* 1488 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2112 */;
import _modDef2876 from "module_2876" /* 2876 */;
import openUserSettings from "openUserSettings" /* 7626 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
import SettingLayoutDefault from "SettingLayout" /* 14953 */;
import getSettingsOverrideReasonDefault from "getSettingsOverrideReason" /* 15591 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4750 */;
import UserSettingsOverridesStore from "UserSettingsOverridesStore" /* 2024 */;

require = fn;
function getAccessibilitySettingScreen(youBarAnimationsOverridden) {
  ({ navigation: require, gifAutoPlayOverrideReason, animateEmojiOverrideReason, animateStickersOverrideReason } = youBarAnimationsOverridden);
  const obj = { settings: null, subLabel: null };
  const items = [MobileUserSettings.ROLE_COLORS];
  obj.settings = items;
  const intl = util.intl;
  const obj2 = { learnMoreLink: HelpdeskUtilsDefault.getArticleURL(constants.ROLE_STYLES) };
  obj.subLabel = intl.format(util.t["ksVr5/"], obj2);
  const items1 = [obj, , , , , , , , , , , , ];
  const obj4 = { settings: null, subLabel: null };
  const items2 = [MobileUserSettings.OFFICIAL_MESSAGE_STYLE];
  obj4.settings = items2;
  const intl2 = util.intl;
  obj4.subLabel = intl2.string(util.t.a3IPrX);
  items1[1] = obj4;
  const obj5 = { settings: null, subLabel: null };
  const items3 = [MobileUserSettings.DISPLAY_NAME_STYLES_ACCESSIBILITY];
  obj5.settings = items3;
  const intl3 = util.intl;
  obj5.subLabel = intl3.format(_modDef2876.L8U56h, {
    onClickOpenModal() {
      openUserSettings.openUserSettings({ screen: constants.PROFILE_CUSTOMIZATION }, () => {
        closure_1_0(closure_1_2[10]).runAfterInteractions(() => {
          closure_1_0(closure_1_2[9]).openUserSettings({ screen: constants.DISPLAY_NAME_STYLES });
        });
      });
    }
  });
  items1[2] = obj5;
  const obj7 = { settings: null, subLabel: null };
  const items4 = [MobileUserSettings.CONTRAST_MODE];
  obj7.settings = items4;
  const intl4 = util.intl;
  obj7.subLabel = intl4.string(util.t.Ax4Pgn);
  items1[3] = obj7;
  const obj8 = { settings: null, subLabel: null };
  const items5 = [MobileUserSettings.REDUCE_SATURATION];
  obj8.settings = items5;
  const intl5 = util.intl;
  obj8.subLabel = intl5.string(util.t["0PbE/H"]);
  items1[4] = obj8;
  const obj9 = { settings: null, subLabel: null };
  const items6 = [MobileUserSettings.SHOW_LINK_DECORATIONS];
  obj9.settings = items6;
  const intl6 = util.intl;
  obj9.subLabel = intl6.string(util.t["72i5GI"]);
  items1[5] = obj9;
  const obj10 = { settings: null, subLabel: null };
  const items7 = [MobileUserSettings.SHOW_ON_OFF_INDICATORS];
  obj10.settings = items7;
  const intl7 = util.intl;
  obj10.subLabel = intl7.string(util.t["3QuI9+"]);
  items1[6] = obj10;
  const obj11 = { label: null, settings: null, subLabel: null };
  const intl8 = util.intl;
  obj11.label = intl8.string(util.t.BT8Bmp);
  const items8 = [MobileUserSettings.SYNC_PROFILE_COLORS];
  obj11.settings = items8;
  const intl9 = util.intl;
  obj11.subLabel = intl9.format(util.t.u6UjrL, {
    onThemeClick() {
      require.push(constants2.APPEARANCE);
    }
  });
  items1[7] = obj11;
  const obj13 = { label: null, settings: null, subLabel: null };
  const intl10 = util.intl;
  obj13.label = intl10.string(util.t.e3TR1b);
  const items9 = [, ];
  ({ ENABLE_REDUCED_MOTION: arr10[0], SYNC_REDUCED_MOTION_WITH_DEVICE: arr10[1] } = MobileUserSettings);
  obj13.settings = items9;
  const intl11 = util.intl;
  const obj14 = { helpdeskArticle: null };
  const obj12 = {
    onThemeClick() {
      require.push(constants2.APPEARANCE);
    }
  };
  const obj6 = {
    onClickOpenModal() {
      openUserSettings.openUserSettings({ screen: constants.PROFILE_CUSTOMIZATION }, () => {
        closure_1_0(closure_1_2[10]).runAfterInteractions(() => {
          closure_1_0(closure_1_2[9]).openUserSettings({ screen: constants.DISPLAY_NAME_STYLES });
        });
      });
    }
  };
  obj14.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(constants.REDUCED_MOTION);
  obj13.subLabel = intl11.format(util.t["2l9U2j"], obj14);
  items1[8] = obj13;
  const obj16 = { settings: null, subLabel: null };
  const items10 = [MobileUserSettings.AUTOPLAY_GIF];
  obj16.settings = items10;
  obj16.subLabel = null != gifAutoPlayOverrideReason && getSettingsOverrideReasonDefault(gifAutoPlayOverrideReason);
  items1[9] = obj16;
  const obj17 = { settings: null, subLabel: null };
  const items11 = [MobileUserSettings.ANIMATE_EMOJI];
  obj17.settings = items11;
  const tmp5 = null != gifAutoPlayOverrideReason && getSettingsOverrideReasonDefault(gifAutoPlayOverrideReason);
  obj17.subLabel = null != animateEmojiOverrideReason && getSettingsOverrideReasonDefault(animateEmojiOverrideReason);
  items1[10] = obj17;
  const obj18 = { settings: null, subLabel: null };
  const items12 = [MobileUserSettings.ANIMATE_STICKERS];
  obj18.settings = items12;
  const tmp6 = null != animateEmojiOverrideReason && getSettingsOverrideReasonDefault(animateEmojiOverrideReason);
  obj18.subLabel = null != animateStickersOverrideReason && getSettingsOverrideReasonDefault(animateStickersOverrideReason);
  items1[11] = obj18;
  const obj19 = { settings: null, label: null, subLabel: null };
  const items13 = [, ];
  ({ YOU_BAR_NAMEPLATE_ACCESSIBILITY: arr14[0], YOU_BAR_AVATAR_DECO_ACCESSSIBILITY: arr14[1] } = MobileUserSettings);
  obj19.settings = items13;
  const intl12 = tmp2(1119).intl;
  obj19.label = intl12.string(util.t.Loi61N);
  const intl13 = tmp2(1119).intl;
  const t = tmp2(1119).t;
  obj19.subLabel = intl13.string(youBarAnimationsOverridden.youBarAnimationsOverridden ? t["SZC/D5"] : t.c7VVKU);
  items1[12] = obj19;
  return items1.filter((item) => null != item);
}
const MobileUserSettings = fn(8238).MobileUserSettings;
const Constants = fn(1078);
({ HelpdeskArticles: closure_7, UserSettingsSections: closure_8 } = Constants);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/accessibility/native/SettingsAccessibilityScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(12);
  const stackNavigation = useNavigation.useStackNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserSettingsOverridesStore];
    const fn = function o() {
      return { gifAutoPlayOverrideReason: UserSettingsOverridesStore.getAppliedOverrideReasonKey("gifAutoPlay"), animateEmojiOverrideReason: UserSettingsOverridesStore.getAppliedOverrideReasonKey("animateEmoji"), animateStickersOverrideReason: UserSettingsOverridesStore.getAppliedOverrideReasonKey("animateStickers") };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStoresObject = useStateFromStores.useStateFromStoresObject(tmp5, tmp6);
  ({ gifAutoPlayOverrideReason, animateEmojiOverrideReason, animateStickersOverrideReason } = stateFromStoresObject);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AccessibilityStore];
    const fn2 = function c() {
      return ("respect-motion-settings" === AccessibilityStore.youBarNameplateAnimation || "respect-motion-settings" === AccessibilityStore.youBarAvatarDecoAnimation) && AccessibilityStore.useReducedMotion;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp10 = fn2;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = useStateFromStores;
  const stateFromStores = useStateFromStores.useStateFromStores(tmp9, tmp10);
  if (cResult[4] === animateEmojiOverrideReason) {
    if (cResult[5] === animateStickersOverrideReason) {
      if (cResult[6] === gifAutoPlayOverrideReason) {
        if (cResult[7] === stackNavigation) {
          if (cResult[8] === stateFromStores) {
            let tmp13 = cResult[9];
          }
          if (cResult[10] !== tmp13) {
            const obj3 = { node: tmp13 };
            const tmp18 = jsx(SettingLayoutDefault, { node: tmp13 });
            cResult[10] = tmp13;
            cResult[11] = tmp18;
            let tmp15 = tmp18;
          } else {
            tmp15 = cResult[11];
          }
          return tmp15;
        }
      }
    }
  }
  const tmpResult3 = useStateFromStores;
  const tmpResult4 = SettingBuilders;
  const list = tmpResult4.createList({ sections: getAccessibilitySettingScreen({ navigation: stackNavigation, gifAutoPlayOverrideReason, animateEmojiOverrideReason, animateStickersOverrideReason, youBarAnimationsOverridden: stateFromStores }) });
  cResult[4] = animateEmojiOverrideReason;
  cResult[5] = animateStickersOverrideReason;
  cResult[6] = gifAutoPlayOverrideReason;
  cResult[7] = stackNavigation;
  cResult[8] = stateFromStores;
  cResult[9] = list;
  tmp13 = list;
}) : (() => {
  stackNavigation = stackNavigation(animateEmojiOverrideReason[14]).useStackNavigation();
  const obj = stackNavigation(animateEmojiOverrideReason[14]);
  const items = [UserSettingsOverridesStore];
  const stateFromStoresObject = stackNavigation(animateEmojiOverrideReason[15]).useStateFromStoresObject(items, () => ({ gifAutoPlayOverrideReason: UserSettingsOverridesStore.getAppliedOverrideReasonKey("gifAutoPlay"), animateEmojiOverrideReason: UserSettingsOverridesStore.getAppliedOverrideReasonKey("animateEmoji"), animateStickersOverrideReason: UserSettingsOverridesStore.getAppliedOverrideReasonKey("animateStickers") }));
  const gifAutoPlayOverrideReason = stateFromStoresObject.gifAutoPlayOverrideReason;
  animateEmojiOverrideReason = stateFromStoresObject.animateEmojiOverrideReason;
  const animateStickersOverrideReason = stateFromStoresObject.animateStickersOverrideReason;
  let obj2 = stackNavigation(animateEmojiOverrideReason[15]);
  const items1 = [stateFromStores];
  stateFromStores = stackNavigation(animateEmojiOverrideReason[15]).useStateFromStores(items1, () => ("respect-motion-settings" === stateFromStores.youBarNameplateAnimation || "respect-motion-settings" === stateFromStores.youBarAvatarDecoAnimation) && stateFromStores.useReducedMotion);
  const items2 = [animateEmojiOverrideReason, animateStickersOverrideReason, gifAutoPlayOverrideReason, stackNavigation, stateFromStores];
  const node = animateStickersOverrideReason.useMemo(() => {
    const obj2 = { sections: getAccessibilitySettingScreen({ navigation: stackNavigation, gifAutoPlayOverrideReason, animateEmojiOverrideReason, animateStickersOverrideReason, youBarAnimationsOverridden: stateFromStores }) };
    return SettingBuilders.createList(obj2);
  }, items2);
  return jsx(gifAutoPlayOverrideReason(animateEmojiOverrideReason[17]), { node });
});
