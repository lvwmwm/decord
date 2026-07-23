// Module ID: 14217
// Function ID: 109215
// Name: getAccessibilitySettingScreen
// Dependencies: [31, 3804, 7662, 653, 33, 1212, 1920, 2556, 5796, 5584, 14218, 1456, 624, 10095, 13550, 2]
// Exports: default

// Module 14217 (getAccessibilitySettingScreen)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { MobileSetting } from "MobileSetting";
import ME from "ME";
import { jsx } from "jsxProd";

let closure_6;
let closure_7;
const require = arg1;
function getAccessibilitySettingScreen(arg0) {
  let animateEmojiOverrideReason;
  let animateStickersOverrideReason;
  let gifAutoPlayOverrideReason;
  let require;
  ({ navigation: require, gifAutoPlayOverrideReason, animateEmojiOverrideReason, animateStickersOverrideReason } = arg0);
  let obj = { settings: items };
  items = [MobileSetting.ROLE_COLORS];
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = {};
  let obj2 = importDefault(1920);
  obj.learnMoreLink = obj2.getArticleURL(constants.ROLE_STYLES);
  obj.subLabel = intl.format(require(1212) /* getSystemLocale */.t["ksVr5/"], obj);
  const items1 = [obj, , , , , , , , , , , ];
  obj = { settings: items2 };
  items2 = [MobileSetting.OFFICIAL_MESSAGE_STYLE];
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.subLabel = intl2.string(require(1212) /* getSystemLocale */.t.a3IPrX);
  items1[1] = obj;
  const obj1 = { settings: items3 };
  items3 = [MobileSetting.DISPLAY_NAME_STYLES_ACCESSIBILITY];
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj2 = {
    onClickOpenModal() {
      let obj = outer1_0(outer1_2[8]);
      obj = { screen: outer1_7.PROFILE_CUSTOMIZATION };
      obj.openUserSettings(obj, () => {
        outer2_0(outer2_2[9]).runAfterInteractions(() => {
          let obj = outer3_0(outer3_2[8]);
          obj = { screen: outer3_7.DISPLAY_NAME_STYLES };
          obj.openUserSettings(obj);
        });
      });
    }
  };
  obj1.subLabel = intl3.format(importDefault(2556).L8U56h, obj2);
  items1[2] = obj1;
  const obj3 = { settings: items4 };
  items4 = [MobileSetting.CONTRAST_MODE];
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj3.subLabel = intl4.string(require(1212) /* getSystemLocale */.t.Ax4Pgn);
  items1[3] = obj3;
  const obj4 = { settings: items5 };
  items5 = [MobileSetting.REDUCE_SATURATION];
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj4.subLabel = intl5.string(require(1212) /* getSystemLocale */.t["0PbE/H"]);
  items1[4] = obj4;
  const obj5 = { settings: items6 };
  items6 = [MobileSetting.SHOW_LINK_DECORATIONS];
  const intl6 = require(1212) /* getSystemLocale */.intl;
  obj5.subLabel = intl6.string(require(1212) /* getSystemLocale */.t["72i5GI"]);
  items1[5] = obj5;
  const obj6 = { settings: items7 };
  items7 = [MobileSetting.SHOW_ON_OFF_INDICATORS];
  const intl7 = require(1212) /* getSystemLocale */.intl;
  obj6.subLabel = intl7.string(require(1212) /* getSystemLocale */.t["3QuI9+"]);
  items1[6] = obj6;
  const obj7 = {};
  const intl8 = require(1212) /* getSystemLocale */.intl;
  obj7.label = intl8.string(require(1212) /* getSystemLocale */.t.BT8Bmp);
  const items8 = [MobileSetting.SYNC_PROFILE_COLORS];
  obj7.settings = items8;
  const intl9 = require(1212) /* getSystemLocale */.intl;
  obj7.subLabel = intl9.format(require(1212) /* getSystemLocale */.t.u6UjrL, {
    onThemeClick() {

    }
  });
  items1[7] = obj7;
  const obj9 = {};
  const intl10 = require(1212) /* getSystemLocale */.intl;
  obj9.label = intl10.string(require(1212) /* getSystemLocale */.t.e3TR1b);
  const items9 = [MobileSetting.ENABLE_REDUCED_MOTION, MobileSetting.SYNC_REDUCED_MOTION_WITH_DEVICE];
  obj9.settings = items9;
  const intl11 = require(1212) /* getSystemLocale */.intl;
  const obj10 = { helpdeskArticle: importDefault(1920).getArticleURL(constants.REDUCED_MOTION) };
  obj9.subLabel = intl11.format(require(1212) /* getSystemLocale */.t["2l9U2j"], obj10);
  items1[8] = obj9;
  const obj11 = { settings: items10 };
  items10 = [MobileSetting.AUTOPLAY_GIF];
  let tmp = null != gifAutoPlayOverrideReason;
  if (tmp) {
    tmp = importDefault(14218)(gifAutoPlayOverrideReason);
  }
  obj11.subLabel = tmp;
  items1[9] = obj11;
  const obj12 = { settings: items11 };
  items11 = [MobileSetting.ANIMATE_EMOJI];
  let tmp4 = null != animateEmojiOverrideReason;
  if (tmp4) {
    tmp4 = importDefault(14218)(animateEmojiOverrideReason);
  }
  obj12.subLabel = tmp4;
  items1[10] = obj12;
  const obj13 = { settings: items12 };
  items12 = [MobileSetting.ANIMATE_STICKERS];
  let tmp7 = null != animateStickersOverrideReason;
  if (tmp7) {
    tmp7 = importDefault(14218)(animateStickersOverrideReason);
  }
  obj13.subLabel = tmp7;
  items1[11] = obj13;
  return items1.filter((arg0) => null != arg0);
}
({ HelpdeskArticles: closure_6, UserSettingsSections: closure_7 } = ME);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/accessibility/native/SettingsAccessibilityScreen.tsx");

export default function SettingsAccessibilityScreen() {
  stackNavigation = stackNavigation(animateEmojiOverrideReason[11]).useStackNavigation();
  let obj = stackNavigation(animateEmojiOverrideReason[11]);
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = stackNavigation(animateEmojiOverrideReason[12]).useStateFromStoresObject(items, () => ({ gifAutoPlayOverrideReason: outer1_4.getAppliedOverrideReasonKey("gifAutoPlay"), animateEmojiOverrideReason: outer1_4.getAppliedOverrideReasonKey("animateEmoji"), animateStickersOverrideReason: outer1_4.getAppliedOverrideReasonKey("animateStickers") }));
  const gifAutoPlayOverrideReason = stateFromStoresObject.gifAutoPlayOverrideReason;
  animateEmojiOverrideReason = stateFromStoresObject.animateEmojiOverrideReason;
  const animateStickersOverrideReason = stateFromStoresObject.animateStickersOverrideReason;
  const items1 = [animateEmojiOverrideReason, animateStickersOverrideReason, gifAutoPlayOverrideReason, stackNavigation];
  const node = animateStickersOverrideReason.useMemo(() => {
    let obj = stackNavigation(animateEmojiOverrideReason[13]);
    obj = { sections: outer1_9(obj) };
    obj = { navigation: stackNavigation, gifAutoPlayOverrideReason, animateEmojiOverrideReason, animateStickersOverrideReason };
    return obj.createList(obj);
  }, items1);
  return jsx(gifAutoPlayOverrideReason(animateEmojiOverrideReason[14]), { node });
};
