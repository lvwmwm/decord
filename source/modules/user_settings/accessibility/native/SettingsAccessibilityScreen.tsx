// Module ID: 14095
// Function ID: 107016
// Name: getAccessibilitySettingScreen
// Dependencies: []
// Exports: default

// Module 14095 (getAccessibilitySettingScreen)
function getAccessibilitySettingScreen(arg0) {
  let animateEmojiOverrideReason;
  let animateStickersOverrideReason;
  let gifAutoPlayOverrideReason;
  ({ navigation: closure_0, gifAutoPlayOverrideReason, animateEmojiOverrideReason, animateStickersOverrideReason } = arg0);
  let obj = { settings: items };
  const items = [MobileSetting.ROLE_COLORS];
  const intl = arg1(dependencyMap[5]).intl;
  obj = {};
  let obj2 = importDefault(dependencyMap[6]);
  obj.learnMoreLink = obj2.getArticleURL(constants.ROLE_STYLES);
  obj.subLabel = intl.format(arg1(dependencyMap[5]).t.ksVr5/, obj);
  const items1 = [obj, , , , , , , , , , , ];
  obj = { settings: items2 };
  const items2 = [MobileSetting.OFFICIAL_MESSAGE_STYLE];
  const intl2 = arg1(dependencyMap[5]).intl;
  obj.subLabel = intl2.string(arg1(dependencyMap[5]).t.a3IPrX);
  items1[1] = obj;
  const obj1 = { settings: items3 };
  const items3 = [MobileSetting.DISPLAY_NAME_STYLES_ACCESSIBILITY];
  const intl3 = arg1(dependencyMap[5]).intl;
  obj2 = {
    onClickOpenModal() {
      let obj = arr(closure_2[8]);
      obj = { screen: constants.PROFILE_CUSTOMIZATION };
      obj.openUserSettings(obj, () => {
        callback(closure_2[9]).runAfterInteractions(() => {
          let obj = callback(closure_2[8]);
          obj = { screen: constants.DISPLAY_NAME_STYLES };
          obj.openUserSettings(obj);
        });
      });
    }
  };
  obj1.subLabel = intl3.format(importDefault(dependencyMap[7]).L8U56h, obj2);
  items1[2] = obj1;
  const obj3 = { settings: items4 };
  const items4 = [MobileSetting.CONTRAST_MODE];
  const intl4 = arg1(dependencyMap[5]).intl;
  obj3.subLabel = intl4.string(arg1(dependencyMap[5]).t.Ax4Pgn);
  items1[3] = obj3;
  const obj4 = { settings: items5 };
  const items5 = [MobileSetting.REDUCE_SATURATION];
  const intl5 = arg1(dependencyMap[5]).intl;
  obj4.subLabel = intl5.string(arg1(dependencyMap[5]).t.0PbE/H);
  items1[4] = obj4;
  const obj5 = { settings: items6 };
  const items6 = [MobileSetting.SHOW_LINK_DECORATIONS];
  const intl6 = arg1(dependencyMap[5]).intl;
  obj5.subLabel = intl6.string(arg1(dependencyMap[5]).t.72i5GI);
  items1[5] = obj5;
  const obj6 = { settings: items7 };
  const items7 = [MobileSetting.SHOW_ON_OFF_INDICATORS];
  const intl7 = arg1(dependencyMap[5]).intl;
  obj6.subLabel = intl7.string(arg1(dependencyMap[5]).t.3QuI9+);
  items1[6] = obj6;
  const obj7 = {};
  const intl8 = arg1(dependencyMap[5]).intl;
  obj7.label = intl8.string(arg1(dependencyMap[5]).t.BT8Bmp);
  const items8 = [MobileSetting.SYNC_PROFILE_COLORS];
  obj7.settings = items8;
  const intl9 = arg1(dependencyMap[5]).intl;
  obj7.subLabel = intl9.format(arg1(dependencyMap[5]).t.u6UjrL, {
    onThemeClick() {

    }
  });
  items1[7] = obj7;
  const obj9 = {};
  const intl10 = arg1(dependencyMap[5]).intl;
  obj9.label = intl10.string(arg1(dependencyMap[5]).t.e3TR1b);
  const items9 = [MobileSetting.ENABLE_REDUCED_MOTION, MobileSetting.SYNC_REDUCED_MOTION_WITH_DEVICE];
  obj9.settings = items9;
  const intl11 = arg1(dependencyMap[5]).intl;
  const obj10 = { helpdeskArticle: importDefault(dependencyMap[6]).getArticleURL(constants.REDUCED_MOTION) };
  obj9.subLabel = intl11.format(arg1(dependencyMap[5]).t.2l9U2j, obj10);
  items1[8] = obj9;
  const obj11 = { settings: items10 };
  const items10 = [MobileSetting.AUTOPLAY_GIF];
  let tmp = null != gifAutoPlayOverrideReason;
  if (tmp) {
    tmp = importDefault(dependencyMap[10])(gifAutoPlayOverrideReason);
  }
  obj11.subLabel = tmp;
  items1[9] = obj11;
  const obj12 = { settings: items11 };
  const items11 = [MobileSetting.ANIMATE_EMOJI];
  let tmp4 = null != animateEmojiOverrideReason;
  if (tmp4) {
    tmp4 = importDefault(dependencyMap[10])(animateEmojiOverrideReason);
  }
  obj12.subLabel = tmp4;
  items1[10] = obj12;
  const obj13 = { settings: items12 };
  const items12 = [MobileSetting.ANIMATE_STICKERS];
  let tmp7 = null != animateStickersOverrideReason;
  if (tmp7) {
    tmp7 = importDefault(dependencyMap[10])(animateStickersOverrideReason);
  }
  obj13.subLabel = tmp7;
  items1[11] = obj13;
  return items1.filter((arg0) => null != arg0);
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const MobileSetting = arg1(dependencyMap[2]).MobileSetting;
({ HelpdeskArticles: closure_6, UserSettingsSections: closure_7 } = arg1(dependencyMap[3]));
const jsx = arg1(dependencyMap[4]).jsx;
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/user_settings/accessibility/native/SettingsAccessibilityScreen.tsx");

export default function SettingsAccessibilityScreen() {
  const stackNavigation = arg1(dependencyMap[11]).useStackNavigation();
  const arg1 = stackNavigation;
  const obj = arg1(dependencyMap[11]);
  const items = [closure_4];
  const stateFromStoresObject = arg1(dependencyMap[12]).useStateFromStoresObject(items, () => ({ gifAutoPlayOverrideReason: store.getAppliedOverrideReasonKey("gifAutoPlay"), animateEmojiOverrideReason: store.getAppliedOverrideReasonKey("animateEmoji"), animateStickersOverrideReason: store.getAppliedOverrideReasonKey("animateStickers") }));
  const gifAutoPlayOverrideReason = stateFromStoresObject.gifAutoPlayOverrideReason;
  const importDefault = gifAutoPlayOverrideReason;
  const animateEmojiOverrideReason = stateFromStoresObject.animateEmojiOverrideReason;
  const dependencyMap = animateEmojiOverrideReason;
  const animateStickersOverrideReason = stateFromStoresObject.animateStickersOverrideReason;
  const React = animateStickersOverrideReason;
  const items1 = [animateEmojiOverrideReason, animateStickersOverrideReason, gifAutoPlayOverrideReason, stackNavigation];
  const node = React.useMemo(() => {
    let obj = stackNavigation(animateEmojiOverrideReason[13]);
    obj = { sections: callback(obj) };
    obj = { navigation: stackNavigation, gifAutoPlayOverrideReason, animateEmojiOverrideReason, animateStickersOverrideReason };
    return obj.createList(obj);
  }, items1);
  return jsx(importDefault(dependencyMap[14]), { node });
};
