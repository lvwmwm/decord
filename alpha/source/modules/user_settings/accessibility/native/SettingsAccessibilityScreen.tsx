// Module ID: 17252
// Function ID: 17253
// Name: SettingsAccessibilityScreen
// Dependencies: [19, 5010, 4835, 8424, 1072, 21, 1114, 2062, 2931, 7557, 7201, 17253, 1498, 563, 11505, 16533, 2]
// Exports: default

// Module 17252 (SettingsAccessibilityScreen)
import Fragment from "Fragment" /* 21 */;
import intl15 from "intl" /* 1114 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2062 */;
import _modDef2931 from "module_2931" /* 2931 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import getSettingsOverrideReasonDefault from "getSettingsOverrideReason" /* 17253 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import UserSettingsOverridesStore from "UserSettingsOverridesStore" /* 4835 */;
import Constants from "Constants" /* 1072 */;
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
    let intl11;
    let intl13;
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
    let items14;
    let items2;
    let items3;
    let items4;
    let items5;
    let items6;
    let items7;
    let items8;
    let items9;
    let obj13;
    let obj15;
    let obj16;
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
    const intl = intl15.intl;
    format = intl.format;
    obj2 = { learnMoreLink: obj3.getArticleURL(metroImportDefault.ROLE_STYLES) };
    prop = intl15.t["ksVr5/"];
    const items1 = [obj, , , , , , , , , , , , , ];
    obj3 = HelpdeskUtilsDefault;
    const obj4 = { settings: items2, subLabel: intl2.string(intl15.t.a3IPrX) };
    items2 = [MobileUserSettings.OFFICIAL_MESSAGE_STYLE];
    intl2 = intl15.intl;
    items1[1] = obj4;
    const obj5 = { settings: items3, subLabel: intl3.format(_modDef2931.L8U56h, obj6) };
    items3 = [MobileUserSettings.DISPLAY_NAME_STYLES_ACCESSIBILITY];
    intl3 = intl15.intl;
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
    const obj7 = { settings: items4, subLabel: intl4.string(intl15.t.Ax4Pgn) };
    items4 = [MobileUserSettings.CONTRAST_MODE];
    intl4 = intl15.intl;
    items1[3] = obj7;
    const obj8 = { settings: items5, subLabel: intl5.string(intl15.t["0PbE/H"]) };
    items5 = [MobileUserSettings.REDUCE_SATURATION];
    intl5 = intl15.intl;
    items1[4] = obj8;
    const obj9 = { settings: items6, subLabel: intl6.string(intl15.t.CZ3jxp) };
    items6 = [MobileUserSettings.TOAST_DURATION];
    intl6 = intl15.intl;
    items1[5] = obj9;
    const obj10 = { settings: items7, subLabel: intl7.string(intl15.t["72i5GI"]) };
    items7 = [MobileUserSettings.SHOW_LINK_DECORATIONS];
    intl7 = intl15.intl;
    items1[6] = obj10;
    const obj11 = { settings: items8, subLabel: intl8.string(intl15.t["3QuI9+"]) };
    items8 = [MobileUserSettings.SHOW_ON_OFF_INDICATORS];
    intl8 = intl15.intl;
    items1[7] = obj11;
    const obj12 = { label: intl9.string(intl15.t.BT8Bmp), settings: items9, subLabel: intl10.format(intl15.t.u6UjrL, obj13) };
    intl9 = intl15.intl;
    items9 = [MobileUserSettings.SYNC_PROFILE_COLORS];
    intl10 = intl15.intl;
    obj13 = {
      onThemeClick() {
        closure_0.push(constants.APPEARANCE);
      }
    };
    items1[8] = obj12;
    const obj14 = { label: intl11.string(intl15.t.e3TR1b), settings: items10, subLabel: format2(v2l9U2j, obj15) };
    intl11 = intl15.intl;
    items10 = [, ];
    ({ ENABLE_REDUCED_MOTION: arr11[0], SYNC_REDUCED_MOTION_WITH_DEVICE: arr11[1] } = MobileUserSettings);
    const intl12 = intl15.intl;
    format2 = intl12.format;
    obj15 = { helpdeskArticle: obj16.getArticleURL(metroImportDefault.REDUCED_MOTION) };
    v2l9U2j = intl15.t["2l9U2j"];
    items1[9] = obj14;
    obj16 = HelpdeskUtilsDefault;
    const obj17 = { settings: items11, subLabel: null != gifAutoPlayOverrideReason && getSettingsOverrideReasonDefault(gifAutoPlayOverrideReason) };
    items11 = [MobileUserSettings.AUTOPLAY_GIF];
    items1[10] = obj17;
    const obj18 = { settings: items12, subLabel: null != animateEmojiOverrideReason && getSettingsOverrideReasonDefault(animateEmojiOverrideReason) };
    items12 = [MobileUserSettings.ANIMATE_EMOJI];
    null != gifAutoPlayOverrideReason && getSettingsOverrideReasonDefault(gifAutoPlayOverrideReason);
    items1[11] = obj18;
    const obj19 = { settings: items13, subLabel: null != animateStickersOverrideReason && getSettingsOverrideReasonDefault(animateStickersOverrideReason) };
    items13 = [MobileUserSettings.ANIMATE_STICKERS];
    null != animateEmojiOverrideReason && getSettingsOverrideReasonDefault(animateEmojiOverrideReason);
    items1[12] = obj19;
    const obj20 = { settings: items14, label: intl13.string(intl15.t.Loi61N), subLabel: string(stateFromStores ? t["SZC/D5"] : t.c7VVKU) };
    items14 = [, ];
    ({ YOU_BAR_NAMEPLATE_ACCESSIBILITY: arr15[0], YOU_BAR_AVATAR_DECO_ACCESSSIBILITY: arr15[1] } = MobileUserSettings);
    null != animateStickersOverrideReason && getSettingsOverrideReasonDefault(animateStickersOverrideReason);
    intl13 = tmp(1114).intl;
    const intl14 = tmp(1114).intl;
    string = intl14.string;
    t = tmp(1114).t;
    items1[13] = obj20;
    const obj21 = { sections: items1.filter((item) => null != item) };
    return createList(obj21);
  }, items2);
  return jsx(gifAutoPlayOverrideReason(animateEmojiOverrideReason[15]), { node });
};
