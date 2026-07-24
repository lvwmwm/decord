// Module ID: 14341
// Function ID: 109827
// Name: VideoUploadQualityNitroUpsell
// Dependencies: [31, 27, 1849, 3782, 7751, 653, 33, 4130, 689, 1456, 624, 3776, 4126, 1212, 5167, 1273, 9647, 7375, 10127, 13601, 2]
// Exports: default

// Module 14341 (VideoUploadQualityNitroUpsell)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { MobileSetting } from "MobileSetting";
import { UserSettingsSections } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
const require = arg1;
function VideoUploadQualityNitroUpsell() {
  let obj = _require(1456);
  _require = obj.useStackNavigation();
  const tmp = _createForOfIteratorHelperLoose();
  let obj1 = _require(624);
  const items = [_isNativeReflectConstruct, closure_6];
  obj = {};
  const stateFromStores = obj1.useStateFromStores(items, () => {
    const premiumTypeSubscription = outer1_6.getPremiumTypeSubscription();
    const currentUser = outer1_5.getCurrentUser();
    return arr(outer1_2[11]).hasPremiumSubscriptionToDisplay(currentUser, premiumTypeSubscription);
  });
  obj = { variant: "text-xs/normal", color: "text-muted" };
  const intl = _require(1212).intl;
  obj.children = intl.format(_require(1212).t["Up+hSO"], { supportURL: "https://support.discord.com/hc/articles/9665451164951" });
  const items1 = [callback(_require(4126).Text, obj), ];
  let tmp5 = !stateFromStores;
  if (tmp5) {
    obj1 = { style: tmp.card };
    const obj2 = { border: "none", shadow: "none" };
    const obj3 = { style: tmp.cardContent };
    const obj4 = { style: tmp.cardIcon, source: importDefault(9647), size: _require(1273).Icon.Sizes.SMALL, color: importDefault(689).unsafe_rawColors.PRIMARY_400 };
    const items2 = [callback(_require(1273).Icon, obj4), ];
    const obj5 = { variant: "text-sm/medium", color: "text-muted" };
    const intl2 = _require(1212).intl;
    const obj6 = {
      onClick() {
          outer1_1(outer1_2[17]).setSection(outer1_8.PREMIUM);
          const obj = outer1_1(outer1_2[17]);
        }
    };
    obj5.children = intl2.format(_require(1212).t.uW1zul, obj6);
    items2[1] = callback(_require(4126).Text, obj5);
    obj3.children = items2;
    obj2.children = callback2(View, obj3);
    obj1.children = callback(_require(5167).Card, obj2);
    tmp5 = callback(View, obj1);
  }
  items1[1] = tmp5;
  obj.children = items1;
  return callback2(View, obj);
}
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: 8, borderColor: require("_createForOfIteratorHelperLoose").colors.REDESIGN_INPUT_CONTROL_SELECTED, borderWidth: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose.card = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.cardContent = { flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.cardIcon = { marginEnd: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/chat/native/SettingsChatScreen.tsx");

export default function SettingsChatScreen(route) {
  route = route.route;
  let initialSetting;
  if (null != route) {
    let params = route.params;
    if (null != params) {
      initialSetting = params.initialSetting;
    }
  }
  let items = [initialSetting];
  const node = React.useMemo(() => {
    let obj = route(outer1_2[18]);
    obj = {};
    obj = {};
    const intl = route(outer1_2[13]).intl;
    obj.label = intl.string(route(outer1_2[13]).t["9nyle0"]);
    const items = [, , ];
    ({ DISPLAY_MEDIA_LINKS: arr[0], DISPLAY_MEDIA_UPLOADS: arr[1], IMAGE_DESCRIPTIONS: arr[2] } = outer1_7);
    obj.settings = items;
    const intl2 = route(outer1_2[13]).intl;
    obj.subLabel = intl2.string(route(outer1_2[13]).t.T0rbtM);
    const items1 = [obj, , , , , , , , ];
    const obj1 = {};
    const intl3 = route(outer1_2[13]).intl;
    obj1.label = intl3.string(route(outer1_2[13]).t.YTnrbV);
    const items2 = [outer1_7.SAVE_CAMERA_UPLOADS_TO_DEVICE];
    obj1.settings = items2;
    const intl4 = route(outer1_2[13]).intl;
    obj1.subLabel = intl4.string(route(outer1_2[13]).t.eZmJYE);
    items1[1] = obj1;
    const items3 = [outer1_7.VIDEO_UPLOAD_QUALITY];
    items1[2] = { settings: items3, subLabel: outer1_9(outer1_12, {}) };
    const obj3 = {};
    const intl5 = route(outer1_2[13]).intl;
    obj3.label = intl5.string(route(outer1_2[13]).t.fyG8t2);
    const items4 = [outer1_7.DATA_SAVING_MODE];
    obj3.settings = items4;
    const intl6 = route(outer1_2[13]).intl;
    obj3.subLabel = intl6.string(route(outer1_2[13]).t["wC0+Ph"]);
    items1[3] = obj3;
    const obj4 = {};
    const intl7 = route(outer1_2[13]).intl;
    obj4.label = intl7.string(route(outer1_2[13]).t.PWZOn4);
    const items5 = [outer1_7.EMBED_AND_LINK_PREVIEWS];
    obj4.settings = items5;
    items1[4] = obj4;
    const obj5 = {};
    const intl8 = route(outer1_2[13]).intl;
    obj5.label = intl8.string(route(outer1_2[13]).t.sMOuuS);
    const items6 = [, ];
    ({ EMOJI_REACTIONS_ON_MESSAGES: arr7[0], CHAT_EMOJI_EMOTICONS: arr7[1] } = outer1_7);
    obj5.settings = items6;
    const intl9 = route(outer1_2[13]).intl;
    obj5.subLabel = intl9.format(route(outer1_2[13]).t.GejoQK, {
      emojiHook(arg0) {
        return arg0;
      }
    });
    items1[5] = obj5;
    const obj7 = {};
    const intl10 = route(outer1_2[13]).intl;
    obj7.label = intl10.string(route(outer1_2[13]).t["29xPVZ"]);
    const items7 = [outer1_7.STICKER_AUTOCOMPLETE];
    obj7.settings = items7;
    const intl11 = route(outer1_2[13]).intl;
    obj7.subLabel = intl11.string(route(outer1_2[13]).t["/eVrj8"]);
    items1[6] = obj7;
    const obj8 = {};
    const intl12 = route(outer1_2[13]).intl;
    obj8.label = intl12.string(route(outer1_2[13]).t["4NDJgM"]);
    const items8 = [, , ];
    ({ SWIPE_RIGHT_TO_LEFT: arr9[0], DOUBLE_TAP_TO_REACT_ENABLED: arr9[1], DOUBLE_TAP_EMOJI: arr9[2] } = outer1_7);
    obj8.settings = items8;
    items1[7] = obj8;
    const obj9 = {};
    const intl13 = route(outer1_2[13]).intl;
    obj9.label = intl13.string(route(outer1_2[13]).t.BkuOO6);
    const items9 = [outer1_7.TEXT_AND_MEDIA_SYNC];
    obj9.settings = items9;
    const intl14 = route(outer1_2[13]).intl;
    obj9.subLabel = intl14.string(route(outer1_2[13]).t.p4IKE9);
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
  return callback(importDefault(13601), { node });
};
