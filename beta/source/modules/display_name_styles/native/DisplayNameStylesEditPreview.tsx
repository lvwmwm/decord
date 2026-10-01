// Module ID: 14902
// Function ID: 14903
// Name: DisplayNameStylesEditPreview
// Dependencies: [19, 17, 4825, 21, 4836, 576, 7611, 1971, 10572, 1115, 2877, 10790, 7661, 7604, 504, 4512, 1177, 10357, 10358, 4832, 2]
// Exports: default

// Module 14902 (DisplayNameStylesEditPreview)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import utils from "utils" /* 1971 */;
import _modDef2877 from "module_2877" /* 2877 */;
import DateUtils from "DateUtils" /* 4512 */;
import Text_Text from "Text/Text" /* 4832 */;
import usePendingAvatarSettingsDefault from "usePendingAvatarSettings" /* 7604 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 7611 */;
import useAvatarDecoration from "useAvatarDecoration" /* 7661 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10357 */;
import types from "types" /* 10358 */;
import UserProfilePreviewDefault from "UserProfilePreview" /* 10572 */;
import NameplatePreview2 from "NameplatePreview" /* 10790 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
function ChatPreview(arg0) {
  let displayName;
  let displayNameStyles;
  let guildId;
  let intl;
  let items1;
  let items2;
  let items3;
  let useReducedMotion;
  let user;
  ({ user, guildId } = arg0);
  ({ displayName, displayNameStyles } = arg0);
  const tmp = closure_8();
  const obj = useAvatarDecoration;
  const avatarDecoration = obj.useAvatarDecoration(user, guildId);
  const pendingAvatarDecoration = usePendingAvatarSettingsDefault({ guildId }).pendingAvatarDecoration;
  const items = [AccessibilityStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let tmp8 = avatarDecoration;
  const memo = react.useMemo(() => {
    const calendarFormat = DateUtils.calendarFormat;
    DateUtils;
    const date = new Date();
    return calendarFormat(date, true);
  }, []);
  if (undefined !== pendingAvatarDecoration) {
    tmp8 = pendingAvatarDecoration;
  }
  const obj3 = { style: tmp.chatContainer, pointerEvents: "none", children: items1 };
  const obj4 = { user, size: native.AvatarSizes.NORMAL, guildId, avatarDecoration: tmp8, animate: !stateFromStores };
  const Avatar = tmp2(1177).Avatar;
  items1 = [metroRequire(Avatar, obj4), ];
  const obj5 = { style: tmp.chatContent, children: items3 };
  const obj6 = { style: tmp.chatHeader, children: items2 };
  const obj7 = { userId: user.id, guildId, userName: displayName, variant: "text-md/semibold", effectDisplayType: types.EffectDisplayType.PLAIN, lineClamp: 1, pendingDisplayNameStyles: displayNameStyles, style: tmp.chatUsername };
  const tmp5Result = UsernameWithEffectsDefault;
  items2 = [metroRequire(tmp5Result, obj7), ];
  const obj8 = { variant: "text-xs/medium", color: "text-muted", style: tmp.chatTimestamp, children: memo };
  items2[1] = metroRequire(Text_Text.Text, obj8);
  items3 = [metroImportDefault(View, obj6), ];
  const obj9 = { variant: "text-md/normal", color: "text-default", style: tmp.chatMessageText, children: intl.string(_modDef2877.h5Cuej) };
  const Text = tmp2(4832).Text;
  intl = tmp2(1115).intl;
  items3[1] = metroRequire(Text, obj9);
  items1[1] = metroImportDefault(View, obj5);
  return metroImportDefault(View, obj3);
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { previewSection: obj2, chatPreviewWrapper: obj3, nameplatePreviewWrapper: { marginTop: -6, width: 260 }, chatContainer: obj4, chatContent: { flex: 1 }, chatHeader: { flexDirection: "row", alignItems: "baseline", gap: 6 }, chatUsername: { flexShrink: 1, minWidth: 0 }, chatTimestamp: { marginTop: -8, flexShrink: 0 }, chatMessageText: {} };
obj2 = { marginBottom: nativeDefault.space.PX_24, alignItems: "center", alignSelf: "center", width: "100%", maxWidth: 360 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: -18, alignSelf: "flex-end", width: 260, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj4 = { flexDirection: "row", borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, gap: nativeDefault.space.PX_12 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEditPreview.tsx");

export default function DisplayNameStylesEditPreview(selectedEffectId) {
  let NameplatePreview;
  let displayName;
  let guildId;
  let guildNameplate;
  let intl;
  let items1;
  let obj7;
  let pendingNameplate;
  let selectedFontId;
  let tmp9;
  let user;
  let userNameplate;
  ({ user, displayName, guildId, selectedFontId } = selectedEffectId);
  selectedEffectId = selectedEffectId.selectedEffectId;
  const selectedColors = selectedEffectId.selectedColors;
  const tmp = closure_8();
  const obj = ProfileCustomizationUtils;
  const guildMemberAndUserPendingNameplate = obj.useGuildMemberAndUserPendingNameplate(user, guildId);
  ({ pendingNameplate, userNameplate, guildNameplate } = guildMemberAndUserPendingNameplate);
  const obj2 = utils;
  let nameplateData = obj2.getNameplateData(guildNameplate);
  const items = [selectedFontId, selectedEffectId, selectedColors];
  const memo = react.useMemo(() => ({ fontId: selectedFontId, effectId: selectedEffectId, colors: selectedColors }), items);
  const obj3 = { style: tmp.previewSection, children: items1 };
  const obj4 = { user, displayName, guildId, displayNameStylesOverride: memo, compact: true, hideFrame: true, maxWidth: 320, accessibilityLabel: intl.string(_modDef2877.zoh6MT) };
  const tmp8 = UserProfilePreviewDefault;
  intl = intl2.intl;
  items1 = [metroRequire(tmp8, obj4), , ];
  const obj5 = { style: tmp.chatPreviewWrapper, children: metroRequire(ChatPreview, { user, displayName, displayNameStyles: memo, guildId }) };
  items1[1] = metroRequire(View, obj5);
  const obj6 = { style: tmp.nameplatePreviewWrapper, children: metroRequire(NameplatePreview, obj7) };
  obj7 = { user, nameplate: pendingNameplate, nameplateData: tmp9, guildId, pendingDisplayNameStyles: memo, pendingGlobalName: displayName };
  tmp9 = undefined;
  NameplatePreview = NameplatePreview2.NameplatePreview;
  const tmp5 = metroImportDefault;
  if (null == pendingNameplate) {
    if (nameplateData == null) {
      nameplateData = userNameplate;
    }
    tmp9 = nameplateData;
  }
  items1[2] = metroRequire(View, obj6);
  return tmp5(View, obj3);
};
