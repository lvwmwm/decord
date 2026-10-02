// Module ID: 14864
// Function ID: 14865
// Name: SettingsAccessibilityScreen
// Dependencies: [19, 4826, 2028, 7421, 1086, 21, 1127, 2114, 2880, 6801, 6459, 14865, 558, 576, 1491, 573, 10874, 14235, 2]

// Module 14864 (SettingsAccessibilityScreen)
import Fragment from "Fragment" /* 21 */;
import useStateFromStores from "useStateFromStores" /* 573 */;
import react2 from "react" /* 576 */;
import intl14 from "intl" /* 1127 */;
import useNavigation from "useNavigation" /* 1491 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2114 */;
import _modDef2880 from "module_2880" /* 2880 */;
import openUserSettings from "openUserSettings" /* 6801 */;
import SettingsConstants from "SettingsConstants" /* 7421 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import SettingLayoutDefault from "SettingLayout" /* 14235 */;
import getSettingsOverrideReasonDefault from "getSettingsOverrideReason" /* 14865 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4826 */;
import UserSettingsOverridesStore from "UserSettingsOverridesStore" /* 2028 */;
import Constants from "Constants" /* 1086 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
function getAccessibilitySettingScreen(youBarAnimationsOverridden) {
  let animateEmojiOverrideReason;
  let animateStickersOverrideReason;
  let format;
  let format2;
  let gifAutoPlayOverrideReason;
  let intl10;
  let intl12;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items;
  let items10;
  let items11;
  let items12;
  let items13;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj12;
  let obj14;
  let obj15;
  let obj2;
  let obj3;
  let obj6;
  let prop;
  let string;
  let t;
  let v2l9U2j;
  ({ navigation: require, gifAutoPlayOverrideReason, animateEmojiOverrideReason, animateStickersOverrideReason } = youBarAnimationsOverridden);
  let obj = { settings: items, subLabel: format(prop, obj2) };
  items = [MobileUserSettings.ROLE_COLORS];
  youBarAnimationsOverridden = youBarAnimationsOverridden.youBarAnimationsOverridden;
  const intl = intl14.intl;
  format = intl.format;
  obj2 = { learnMoreLink: obj3.getArticleURL(constants.ROLE_STYLES) };
  prop = intl14.t["ksVr5/"];
  const items1 = [obj, , , , , , , , , , , , ];
  obj3 = HelpdeskUtilsDefault;
  const obj4 = { settings: items2, subLabel: intl2.string(intl14.t.a3IPrX) };
  items2 = [MobileUserSettings.OFFICIAL_MESSAGE_STYLE];
  intl2 = intl14.intl;
  items1[1] = obj4;
  const obj5 = { settings: items3, subLabel: intl3.format(_modDef2880.L8U56h, obj6) };
  items3 = [MobileUserSettings.DISPLAY_NAME_STYLES_ACCESSIBILITY];
  intl3 = intl14.intl;
  obj6 = {
    onClickOpenModal() {
      let obj = openUserSettings;
      let obj2 = { screen: constants.PROFILE_CUSTOMIZATION };
      obj.openUserSettings(obj2, () => {
        let obj = closure_1_0(closure_1_2[10]);
        obj.runAfterInteractions(() => {
          const obj = closure_1_0(closure_1_2[9]);
          const obj2 = { screen: constants.DISPLAY_NAME_STYLES };
          obj.openUserSettings(obj2);
        });
      });
    }
  };
  items1[2] = obj5;
  const obj7 = { settings: items4, subLabel: intl4.string(intl14.t.Ax4Pgn) };
  items4 = [MobileUserSettings.CONTRAST_MODE];
  intl4 = intl14.intl;
  items1[3] = obj7;
  const obj8 = { settings: items5, subLabel: intl5.string(intl14.t["0PbE/H"]) };
  items5 = [MobileUserSettings.REDUCE_SATURATION];
  intl5 = intl14.intl;
  items1[4] = obj8;
  const obj9 = { settings: items6, subLabel: intl6.string(intl14.t["72i5GI"]) };
  items6 = [MobileUserSettings.SHOW_LINK_DECORATIONS];
  intl6 = intl14.intl;
  items1[5] = obj9;
  const obj10 = { settings: items7, subLabel: intl7.string(intl14.t["3QuI9+"]) };
  items7 = [MobileUserSettings.SHOW_ON_OFF_INDICATORS];
  intl7 = intl14.intl;
  items1[6] = obj10;
  const obj11 = { label: intl8.string(intl14.t.BT8Bmp), settings: items8, subLabel: intl9.format(intl14.t.u6UjrL, obj12) };
  intl8 = intl14.intl;
  items8 = [MobileUserSettings.SYNC_PROFILE_COLORS];
  intl9 = intl14.intl;
  obj12 = {
    onThemeClick() {
      require.push(metroImportAll.APPEARANCE);
    }
  };
  items1[7] = obj11;
  const obj13 = { label: intl10.string(intl14.t.e3TR1b), settings: items9, subLabel: format2(v2l9U2j, obj14) };
  intl10 = intl14.intl;
  items9 = [, ];
  ({ ENABLE_REDUCED_MOTION: arr10[0], SYNC_REDUCED_MOTION_WITH_DEVICE: arr10[1] } = MobileUserSettings);
  const intl11 = intl14.intl;
  format2 = intl11.format;
  obj14 = { helpdeskArticle: obj15.getArticleURL(constants.REDUCED_MOTION) };
  v2l9U2j = intl14.t["2l9U2j"];
  items1[8] = obj13;
  obj15 = HelpdeskUtilsDefault;
  const obj16 = { settings: items10, subLabel: null != gifAutoPlayOverrideReason && getSettingsOverrideReasonDefault(gifAutoPlayOverrideReason) };
  items10 = [MobileUserSettings.AUTOPLAY_GIF];
  items1[9] = obj16;
  const obj17 = { settings: items11, subLabel: null != animateEmojiOverrideReason && getSettingsOverrideReasonDefault(animateEmojiOverrideReason) };
  items11 = [MobileUserSettings.ANIMATE_EMOJI];
  null != gifAutoPlayOverrideReason && getSettingsOverrideReasonDefault(gifAutoPlayOverrideReason);
  items1[10] = obj17;
  const obj18 = { settings: items12, subLabel: null != animateStickersOverrideReason && getSettingsOverrideReasonDefault(animateStickersOverrideReason) };
  items12 = [MobileUserSettings.ANIMATE_STICKERS];
  null != animateEmojiOverrideReason && getSettingsOverrideReasonDefault(animateEmojiOverrideReason);
  items1[11] = obj18;
  const obj19 = { settings: items13, label: intl12.string(intl14.t.Loi61N), subLabel: string(youBarAnimationsOverridden ? t["SZC/D5"] : t.c7VVKU) };
  items13 = [, ];
  ({ YOU_BAR_NAMEPLATE_ACCESSIBILITY: arr14[0], YOU_BAR_AVATAR_DECO_ACCESSSIBILITY: arr14[1] } = MobileUserSettings);
  null != animateStickersOverrideReason && getSettingsOverrideReasonDefault(animateStickersOverrideReason);
  intl12 = tmp2(1127).intl;
  const intl13 = tmp2(1127).intl;
  string = intl13.string;
  t = tmp2(1127).t;
  items1[12] = obj19;
  return items1.filter((item) => null != item);
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
({ HelpdeskArticles: metroImportDefault, UserSettingsSections: metroImportAll } = Constants);
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let animateEmojiOverrideReason;
  let animateStickersOverrideReason;
  let gifAutoPlayOverrideReason;
  let tmp10;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(12);
  const obj2 = useNavigation;
  const stackNavigation = obj2.useStackNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserSettingsOverridesStore];
    const fn = function o() {
      const obj = { gifAutoPlayOverrideReason: UserSettingsOverridesStore.getAppliedOverrideReasonKey("gifAutoPlay"), animateEmojiOverrideReason: UserSettingsOverridesStore.getAppliedOverrideReasonKey("animateEmoji"), animateStickersOverrideReason: UserSettingsOverridesStore.getAppliedOverrideReasonKey("animateStickers") };
      return obj;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = useStateFromStores;
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp5, tmp6);
  ({ gifAutoPlayOverrideReason, animateEmojiOverrideReason, animateStickersOverrideReason } = stateFromStoresObject);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AccessibilityStore];
    const fn2 = function c() {
      return ("respect-motion-settings" === AccessibilityStore.youBarNameplateAnimation || "respect-motion-settings" === AccessibilityStore.youBarAvatarDecoAnimation) && AccessibilityStore.useReducedMotion;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp10 = fn2;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult3 = useStateFromStores;
  const stateFromStores = tmpResult3.useStateFromStores(tmp9, tmp10);
  if (cResult[4] === animateEmojiOverrideReason) {
    if (cResult[5] === animateStickersOverrideReason) {
      if (cResult[6] === gifAutoPlayOverrideReason) {
        if (cResult[7] === stackNavigation) {
          let tmp13;
          let tmp16;
          if (cResult[8] === stateFromStores) {
            tmp13 = cResult[9];
          }
          if (cResult[10] !== tmp13) {
            const tmp19 = jsx(SettingLayoutDefault, { node: tmp13 });
            cResult[10] = tmp13;
            cResult[11] = tmp19;
            tmp16 = tmp19;
          } else {
            tmp16 = cResult[11];
          }
          return tmp16;
        }
      }
    }
  }
  const createList = SettingBuilders.createList;
  const tmpResult4 = SettingBuilders;
  const obj4 = { sections: getAccessibilitySettingScreen({ navigation: stackNavigation, gifAutoPlayOverrideReason, animateEmojiOverrideReason, animateStickersOverrideReason, youBarAnimationsOverridden: stateFromStores }) };
  const list = createList(obj4);
  cResult[4] = animateEmojiOverrideReason;
  cResult[5] = animateStickersOverrideReason;
  cResult[6] = gifAutoPlayOverrideReason;
  cResult[7] = stackNavigation;
  cResult[8] = stateFromStores;
  cResult[9] = list;
  tmp13 = list;
}) : (() => {
  let animateEmojiOverrideReason;
  let stackNavigation;
  let stateFromStores;
  let obj = stackNavigation(animateEmojiOverrideReason[14]);
  stackNavigation = obj.useStackNavigation();
  let obj2 = stackNavigation(animateEmojiOverrideReason[15]);
  const items = [UserSettingsOverridesStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { gifAutoPlayOverrideReason: UserSettingsOverridesStore.getAppliedOverrideReasonKey("gifAutoPlay"), animateEmojiOverrideReason: UserSettingsOverridesStore.getAppliedOverrideReasonKey("animateEmoji"), animateStickersOverrideReason: UserSettingsOverridesStore.getAppliedOverrideReasonKey("animateStickers") };
    return obj;
  });
  const gifAutoPlayOverrideReason = stateFromStoresObject.gifAutoPlayOverrideReason;
  animateEmojiOverrideReason = stateFromStoresObject.animateEmojiOverrideReason;
  const animateStickersOverrideReason = stateFromStoresObject.animateStickersOverrideReason;
  const items1 = [stateFromStores];
  const obj3 = stackNavigation(animateEmojiOverrideReason[15]);
  stateFromStores = obj3.useStateFromStores(items1, () => ("respect-motion-settings" === stateFromStores.youBarNameplateAnimation || "respect-motion-settings" === stateFromStores.youBarAvatarDecoAnimation) && stateFromStores.useReducedMotion);
  const items2 = [animateEmojiOverrideReason, animateStickersOverrideReason, gifAutoPlayOverrideReason, stackNavigation, stateFromStores];
  const node = animateStickersOverrideReason.useMemo(() => {
    let obj2;
    const obj = { sections: getAccessibilitySettingScreen(obj2) };
    const createList = SettingBuilders.createList;
    obj2 = { navigation: stackNavigation, gifAutoPlayOverrideReason, animateEmojiOverrideReason, animateStickersOverrideReason, youBarAnimationsOverridden: stateFromStores };
    SettingBuilders;
    return createList(obj);
  }, items2);
  return jsx(gifAutoPlayOverrideReason(animateEmojiOverrideReason[17]), { node });
});
const result = size.fileFinishedImporting("modules/user_settings/accessibility/native/SettingsAccessibilityScreen.tsx");

export default tmp3;
