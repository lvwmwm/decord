// Module ID: 15008
// Function ID: 15009
// Name: SettingsChatScreen
// Dependencies: [19, 17, 1372, 4494, 7417, 1074, 21, 4836, 576, 1485, 563, 4488, 4832, 1115, 5919, 1177, 9860, 6411, 11006, 14247, 2]
// Exports: default

// Module 15008 (SettingsChatScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl14 from "intl" /* 1115 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6411 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import AssetRegistryDefault from "AssetRegistry" /* 9860 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import SettingLayoutDefault from "SettingLayout" /* 14247 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import SubscriptionStore from "SubscriptionStore" /* 4494 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, currentUser, premiumTypeSubscription;

let c10;
let c9;
let obj2;
function VideoUploadQualityNitroUpsell() {
  let Card;
  let closure_0;
  let intl;
  let intl2;
  let items2;
  let obj5;
  let obj6;
  let obj9;
  let obj = require("useNavigation");
  _require = obj.useStackNavigation();
  const tmp3 = closure_11();
  const items = [UserStore, SubscriptionStore];
  const obj2 = require("useStateFromStores");
  const stateFromStores = obj2.useStateFromStores(items, () => {
    premiumTypeSubscription = premiumTypeSubscription.getPremiumTypeSubscription();
    currentUser = currentUser.getCurrentUser();
    const obj = closure_0(dependencyMap[11]);
    return obj.hasPremiumSubscriptionToDisplay(currentUser, premiumTypeSubscription);
  });
  const obj3 = { variant: "text-xs/normal", color: "text-muted", children: intl.format(require("intl").t["Up+hSO"], { supportURL: "https://support.discord.com/hc/articles/9665451164951" }) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  const children = [closure_9(Text, obj3), ];
  let tmp7Result = !stateFromStores;
  if (tmp7Result) {
    const obj4 = { style: tmp3.card, children: closure_9(Card, obj5) };
    obj5 = { border: "none", shadow: "none", children: closure_10(View, obj6) };
    obj6 = { style: tmp3.cardContent, children: items2 };
    Card = tmp(5919).Card;
    const obj7 = { style: tmp3.cardIcon, source: AssetRegistryDefault, size: require("native").Icon.Sizes.SMALL, color: nativeDefault.unsafe_rawColors.PRIMARY_400 };
    const Icon = tmp(1177).Icon;
    items2 = [closure_9(Icon, obj7), ];
    const obj8 = { variant: "text-sm/medium", color: "text-muted", children: intl2.format(require("intl").t.uW1zul, obj9) };
    const Text2 = tmp(4832).Text;
    intl2 = tmp(1115).intl;
    obj9 = {
      onClick() {
          const obj = UserSettingsModalActionCreatorsDefault;
          obj.setSection(UserSettingsSections.PREMIUM);
          closure_0.push(UserSettingsSections.PREMIUM, { isFromTextSection: true });
        }
    };
    items2[1] = closure_9(Text2, obj8);
    tmp7Result = tmp7(tmp6, obj4);
  }
  children[1] = tmp7Result;
  return closure_10(View, { children });
}
const View = react_native.View;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { card: obj2, cardContent: { flexDirection: "row", alignItems: "center" }, cardIcon: { marginEnd: 8 } };
obj2 = { marginTop: 8, borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED, borderWidth: 1, borderRadius: nativeDefault.radii.lg };
let closure_11 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/chat/native/SettingsChatScreen.tsx");

export default function SettingsChatScreen(route) {
  route = route.route;
  let initialSetting;
  const useMemo = react.useMemo;
  if (route != null) {
    let params = route.params;
    if (params != null) {
      initialSetting = params.initialSetting;
    }
  }
  let items = [initialSetting];
  const node = useMemo(() => {
    let initialSetting;
    let intl;
    let intl10;
    let intl11;
    let intl12;
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
    let items1;
    let items10;
    let items2;
    let items3;
    let items4;
    let items5;
    let items6;
    let items7;
    let items8;
    let items9;
    const obj = { sections: items1, scrollTarget: initialSetting };
    const obj2 = { label: intl.string(intl14.t["9nyle0"]), settings: items, subLabel: intl2.string(intl14.t.T0rbtM) };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    intl = intl14.intl;
    items = [, , ];
    ({ DISPLAY_MEDIA_LINKS: arr[0], DISPLAY_MEDIA_UPLOADS: arr[1], IMAGE_DESCRIPTIONS: arr[2] } = MobileUserSettings);
    intl2 = intl14.intl;
    items1 = [obj2, , , , , , , , , ];
    const obj3 = { label: intl3.string(intl14.t.YTnrbV), settings: items2, subLabel: intl4.string(intl14.t.eZmJYE) };
    intl3 = intl14.intl;
    items2 = [MobileUserSettings.SAVE_CAMERA_UPLOADS_TO_DEVICE];
    intl4 = intl14.intl;
    items1[1] = obj3;
    const obj4 = { settings: items3, subLabel: React4(VideoUploadQualityNitroUpsell, {}) };
    items3 = [MobileUserSettings.VIDEO_UPLOAD_QUALITY];
    items1[2] = obj4;
    const obj5 = { label: intl5.string(intl14.t.fyG8t2), settings: items4, subLabel: intl6.string(intl14.t["wC0+Ph"]) };
    intl5 = intl14.intl;
    items4 = [MobileUserSettings.DATA_SAVING_MODE];
    intl6 = intl14.intl;
    items1[3] = obj5;
    const obj6 = { label: intl7.string(intl14.t.PWZOn4), settings: items5 };
    intl7 = intl14.intl;
    items5 = [MobileUserSettings.EMBED_AND_LINK_PREVIEWS];
    items1[4] = obj6;
    const obj7 = { label: intl8.string(intl14.t.sMOuuS), settings: items6 };
    intl8 = intl14.intl;
    items6 = [, , ];
    ({ EMOJI_REACTIONS_ON_MESSAGES: arr7[0], CHAT_EMOJI_EMOTICONS: arr7[1], INLINE_EMOJI_SUGGESTIONS: arr7[2] } = MobileUserSettings);
    items1[5] = obj7;
    const obj8 = { settings: items7 };
    items7 = [MobileUserSettings.SHOW_SPOILERS];
    items1[6] = obj8;
    const obj9 = { label: intl9.string(intl14.t["29xPVZ"]), settings: items8, subLabel: intl10.string(intl14.t["/eVrj8"]) };
    intl9 = intl14.intl;
    items8 = [MobileUserSettings.STICKER_AUTOCOMPLETE];
    intl10 = intl14.intl;
    items1[7] = obj9;
    const obj10 = { label: intl11.string(intl14.t["4NDJgM"]), settings: items9 };
    intl11 = intl14.intl;
    items9 = [, , ];
    ({ SWIPE_RIGHT_TO_LEFT: arr10[0], DOUBLE_TAP_TO_REACT_ENABLED: arr10[1], DOUBLE_TAP_EMOJI: arr10[2] } = MobileUserSettings);
    items1[8] = obj10;
    const obj11 = { label: intl12.string(intl14.t.BkuOO6), settings: items10, subLabel: intl13.string(intl14.t.p4IKE9) };
    intl12 = intl14.intl;
    items10 = [MobileUserSettings.TEXT_AND_MEDIA_SYNC];
    intl13 = intl14.intl;
    items1[9] = obj11;
    initialSetting = undefined;
    if (route != null) {
      const params = route.params;
      if (params != null) {
        initialSetting = params.initialSetting;
      }
    }
    return createList(obj);
  }, items);
  return closure_9(SettingLayoutDefault, { node });
};
