// Module ID: 14876
// Function ID: 14877
// Name: SettingsAccessibilityScreen
// Dependencies: [19, 4825, 2022, 7417, 1074, 21, 1115, 2111, 2877, 6800, 6459, 14877, 1485, 563, 11006, 14247, 2]
// Exports: default

// Module 14876 (SettingsAccessibilityScreen)
import Fragment from "Fragment" /* 21 */;
import intl14 from "intl" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import _modDef2877 from "module_2877" /* 2877 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import getSettingsOverrideReasonDefault from "getSettingsOverrideReason" /* 14877 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import UserSettingsOverridesStore from "UserSettingsOverridesStore" /* 2022 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
({ HelpdeskArticles: metroImportDefault, UserSettingsSections: metroImportAll } = Constants);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/accessibility/native/SettingsAccessibilityScreen.tsx");

export default function SettingsAccessibilityScreen() {
  let animateEmojiOverrideReason;
  let stackNavigation;
  let stateFromStores;
  let obj = stackNavigation(animateEmojiOverrideReason[12]);
  stackNavigation = obj.useStackNavigation();
  let obj2 = stackNavigation(animateEmojiOverrideReason[13]);
  let items = [UserSettingsOverridesStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { gifAutoPlayOverrideReason: UserSettingsOverridesStore.getAppliedOverrideReasonKey("gifAutoPlay"), animateEmojiOverrideReason: UserSettingsOverridesStore.getAppliedOverrideReasonKey("animateEmoji"), animateStickersOverrideReason: UserSettingsOverridesStore.getAppliedOverrideReasonKey("animateStickers") };
    return obj;
  });
  const gifAutoPlayOverrideReason = stateFromStoresObject.gifAutoPlayOverrideReason;
  animateEmojiOverrideReason = stateFromStoresObject.animateEmojiOverrideReason;
  const animateStickersOverrideReason = stateFromStoresObject.animateStickersOverrideReason;
  let obj3 = stackNavigation(animateEmojiOverrideReason[13]);
  let items1 = [stateFromStores];
  stateFromStores = obj3.useStateFromStores(items1, () => ("respect-motion-settings" === stateFromStores.youBarNameplateAnimation || "respect-motion-settings" === stateFromStores.youBarAvatarDecoAnimation) && stateFromStores.useReducedMotion);
  let items2 = [animateEmojiOverrideReason, animateStickersOverrideReason, gifAutoPlayOverrideReason, stackNavigation, stateFromStores];
  const node = animateStickersOverrideReason.useMemo(() => {
    let format;
    let format2;
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
    let obj = { settings: items, subLabel: format(prop, obj2) };
    items = [MobileUserSettings.ROLE_COLORS];
    const createList = SettingBuilders.createList;
    SettingBuilders;
    const intl = intl14.intl;
    format = intl.format;
    obj2 = { learnMoreLink: obj3.getArticleURL(metroImportDefault.ROLE_STYLES) };
    prop = intl14.t["ksVr5/"];
    const items1 = [obj, , , , , , , , , , , , ];
    obj3 = HelpdeskUtilsDefault;
    const obj4 = { settings: items2, subLabel: intl2.string(intl14.t.a3IPrX) };
    items2 = [MobileUserSettings.OFFICIAL_MESSAGE_STYLE];
    intl2 = intl14.intl;
    items1[1] = obj4;
    const obj5 = { settings: items3, subLabel: intl3.format(_modDef2877.L8U56h, obj6) };
    items3 = [MobileUserSettings.DISPLAY_NAME_STYLES_ACCESSIBILITY];
    intl3 = intl14.intl;
    obj6 = {
      onClickOpenModal() {
        let obj = stackNavigation(animateEmojiOverrideReason[9]);
        let obj2 = { screen: constants.PROFILE_CUSTOMIZATION };
        obj.openUserSettings(obj2, () => {
          let obj = stackNavigation(closure_1_2[10]);
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
        closure_0.push(constants.APPEARANCE);
      }
    };
    items1[7] = obj11;
    const obj13 = { label: intl10.string(intl14.t.e3TR1b), settings: items9, subLabel: format2(v2l9U2j, obj14) };
    intl10 = intl14.intl;
    items9 = [, ];
    ({ ENABLE_REDUCED_MOTION: arr10[0], SYNC_REDUCED_MOTION_WITH_DEVICE: arr10[1] } = MobileUserSettings);
    const intl11 = intl14.intl;
    format2 = intl11.format;
    obj14 = { helpdeskArticle: obj15.getArticleURL(metroImportDefault.REDUCED_MOTION) };
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
    const obj19 = { settings: items13, label: intl12.string(intl14.t.Loi61N), subLabel: string(stateFromStores ? t["SZC/D5"] : t.c7VVKU) };
    items13 = [, ];
    ({ YOU_BAR_NAMEPLATE_ACCESSIBILITY: arr14[0], YOU_BAR_AVATAR_DECO_ACCESSSIBILITY: arr14[1] } = MobileUserSettings);
    null != animateStickersOverrideReason && getSettingsOverrideReasonDefault(animateStickersOverrideReason);
    intl12 = tmp(1115).intl;
    const intl13 = tmp(1115).intl;
    string = intl13.string;
    t = tmp(1115).t;
    items1[12] = obj19;
    const obj20 = { sections: items1.filter((item) => null != item) };
    return createList(obj20);
  }, items2);
  return jsx(gifAutoPlayOverrideReason(animateEmojiOverrideReason[15]), { node });
};
