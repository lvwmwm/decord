// Module ID: 14169
// Function ID: 107305
// Name: VideoUploadQualityNitroUpsell
// Dependencies: []
// Exports: default

// Module 14169 (VideoUploadQualityNitroUpsell)
function VideoUploadQualityNitroUpsell() {
  let obj = callback(dependencyMap[9]);
  const callback = obj.useStackNavigation();
  const tmp = callback4();
  let obj1 = callback(dependencyMap[10]);
  const items = [closure_5, closure_6];
  obj = {};
  const stateFromStores = obj1.useStateFromStores(items, () => {
    const premiumTypeSubscription = premiumTypeSubscription.getPremiumTypeSubscription();
    const currentUser = currentUser.getCurrentUser();
    return arr(closure_2[11]).hasPremiumSubscriptionToDisplay(currentUser, premiumTypeSubscription);
  });
  obj = {};
  const intl = callback(dependencyMap[13]).intl;
  obj.children = intl.format(callback(dependencyMap[13]).t.Up+hSO, { supportURL: "https://support.discord.com/hc/articles/9665451164951" });
  const items1 = [callback2(callback(dependencyMap[12]).TextWithIOSLinkWorkaround, obj), ];
  let tmp5 = !stateFromStores;
  if (tmp5) {
    obj1 = { style: tmp.card };
    const obj2 = {};
    const obj3 = { style: tmp.cardContent };
    const obj4 = { style: tmp.cardIcon, source: importDefault(dependencyMap[16]), size: callback(dependencyMap[15]).Icon.Sizes.SMALL, color: importDefault(dependencyMap[8]).unsafe_rawColors.PRIMARY_400 };
    const items2 = [callback2(callback(dependencyMap[15]).Icon, obj4), ];
    const obj5 = { hasMaxConnections: "<string:3086024708>", isBoostOnlySubscription: "<string:625475588>" };
    const intl2 = callback(dependencyMap[13]).intl;
    const obj6 = {
      onClick() {
          callback(closure_2[17]).setSection(constants.PREMIUM);
          const obj = callback(closure_2[17]);
        }
    };
    obj5.children = intl2.format(callback(dependencyMap[13]).t.uW1zul, obj6);
    items2[1] = callback2(callback(dependencyMap[12]).TextWithIOSLinkWorkaround, obj5);
    obj3.children = items2;
    obj2.children = callback3(View, obj3);
    obj1.children = callback2(callback(dependencyMap[14]).Card, obj2);
    tmp5 = callback2(View, obj1);
  }
  items1[1] = tmp5;
  obj.children = items1;
  return callback3(View, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const MobileSetting = arg1(dependencyMap[4]).MobileSetting;
const UserSettingsSections = arg1(dependencyMap[5]).UserSettingsSections;
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { borderColor: importDefault(dependencyMap[8]).colors.REDESIGN_INPUT_CONTROL_SELECTED, borderRadius: importDefault(dependencyMap[8]).radii.lg };
obj.card = obj;
obj.cardContent = { "Null": 7, "Null": 370 };
obj.cardIcon = { marginEnd: 8 };
let closure_11 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/user_settings/chat/native/SettingsChatScreen.tsx");

export default function SettingsChatScreen(route) {
  route = route.route;
  const arg1 = route;
  let initialSetting;
  if (null != route) {
    const params = route.params;
    if (null != params) {
      initialSetting = params.initialSetting;
    }
  }
  const items = [initialSetting];
  const node = React.useMemo(() => {
    let obj = route(closure_2[18]);
    obj = {};
    obj = {};
    const intl = route(closure_2[13]).intl;
    obj.label = intl.string(route(closure_2[13]).t.9nyle0);
    const items = [, , ];
    ({ DISPLAY_MEDIA_LINKS: arr[0], DISPLAY_MEDIA_UPLOADS: arr[1], IMAGE_DESCRIPTIONS: arr[2] } = constants);
    obj.settings = items;
    const intl2 = route(closure_2[13]).intl;
    obj.subLabel = intl2.string(route(closure_2[13]).t.T0rbtM);
    const items1 = [obj, , , , , , , , ];
    const obj1 = {};
    const intl3 = route(closure_2[13]).intl;
    obj1.label = intl3.string(route(closure_2[13]).t.YTnrbV);
    const items2 = [constants.SAVE_CAMERA_UPLOADS_TO_DEVICE];
    obj1.settings = items2;
    const intl4 = route(closure_2[13]).intl;
    obj1.subLabel = intl4.string(route(closure_2[13]).t.eZmJYE);
    items1[1] = obj1;
    const items3 = [constants.VIDEO_UPLOAD_QUALITY];
    items1[2] = { settings: items3, subLabel: callback(closure_12, {}) };
    const obj3 = {};
    const intl5 = route(closure_2[13]).intl;
    obj3.label = intl5.string(route(closure_2[13]).t.fyG8t2);
    const items4 = [constants.DATA_SAVING_MODE];
    obj3.settings = items4;
    const intl6 = route(closure_2[13]).intl;
    obj3.subLabel = intl6.string(route(closure_2[13]).t.wC0+Ph);
    items1[3] = obj3;
    const obj4 = {};
    const intl7 = route(closure_2[13]).intl;
    obj4.label = intl7.string(route(closure_2[13]).t.PWZOn4);
    const items5 = [constants.EMBED_AND_LINK_PREVIEWS];
    obj4.settings = items5;
    items1[4] = obj4;
    const obj5 = {};
    const intl8 = route(closure_2[13]).intl;
    obj5.label = intl8.string(route(closure_2[13]).t.sMOuuS);
    const items6 = [, ];
    ({ EMOJI_REACTIONS_ON_MESSAGES: arr7[0], CHAT_EMOJI_EMOTICONS: arr7[1] } = constants);
    obj5.settings = items6;
    const intl9 = route(closure_2[13]).intl;
    obj5.subLabel = intl9.format(route(closure_2[13]).t.GejoQK, {
      emojiHook(arg0) {
        return arg0;
      }
    });
    items1[5] = obj5;
    const obj7 = {};
    const intl10 = route(closure_2[13]).intl;
    obj7.label = intl10.string(route(closure_2[13]).t.29xPVZ);
    const items7 = [constants.STICKER_AUTOCOMPLETE];
    obj7.settings = items7;
    const intl11 = route(closure_2[13]).intl;
    obj7.subLabel = intl11.string(route(closure_2[13]).t./eVrj8);
    items1[6] = obj7;
    const obj8 = {};
    const intl12 = route(closure_2[13]).intl;
    obj8.label = intl12.string(route(closure_2[13]).t.4NDJgM);
    const items8 = [, , ];
    ({ SWIPE_RIGHT_TO_LEFT: arr9[0], DOUBLE_TAP_TO_REACT_ENABLED: arr9[1], DOUBLE_TAP_EMOJI: arr9[2] } = constants);
    obj8.settings = items8;
    items1[7] = obj8;
    const obj9 = {};
    const intl13 = route(closure_2[13]).intl;
    obj9.label = intl13.string(route(closure_2[13]).t.BkuOO6);
    const items9 = [constants.TEXT_AND_MEDIA_SYNC];
    obj9.settings = items9;
    const intl14 = route(closure_2[13]).intl;
    obj9.subLabel = intl14.string(route(closure_2[13]).t.p4IKE9);
    items1[8] = obj9;
    obj.sections = items1;
    let initialSetting;
    if (null != route) {
      const params = route.params;
      if (null != params) {
        initialSetting = params.initialSetting;
      }
    }
    obj.scrollTarget = initialSetting;
    return obj.createList(obj);
  }, items);
  return callback2(importDefault(dependencyMap[19]), { node });
};
