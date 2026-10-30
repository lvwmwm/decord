// Module ID: 16944
// Function ID: 16945
// Name: DisplayNameStylesEditPreview
// Dependencies: [19, 17, 5010, 8723, 21, 5009, 575, 8729, 1985, 504, 8732, 11356, 1114, 2931, 11472, 16943, 6847, 8722, 4831, 1188, 8812, 10752, 10753, 5619, 2]
// Exports: default

// Module 16944 (DisplayNameStylesEditPreview)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1188 */;
import DateUtils from "DateUtils" /* 4831 */;
import Text_Text from "Text/Text" /* 5619 */;
import useAvatarDecoration from "useAvatarDecoration" /* 6847 */;
import usePendingAvatarSettingsDefault from "usePendingAvatarSettings" /* 8722 */;
import RecentAvatarUtils from "RecentAvatarUtils" /* 8732 */;
import profile_customization_ProfileCustomizationUtils from "profile_customization/ProfileCustomizationUtils" /* 8812 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10752 */;
import types from "types" /* 10753 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8723 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let items;
let items1;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function ChatPreview(chatMessage) {
  let avatarSrcOverride;
  let displayName;
  let displayNameStyles;
  let guildId;
  let isTryItOut;
  let items1;
  let items2;
  let items3;
  let obj5;
  let tmp2Result;
  let useReducedMotion;
  let user;
  ({ user, guildId, avatarSrcOverride, isTryItOut } = chatMessage);
  ({ displayName, displayNameStyles } = chatMessage);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  chatMessage = chatMessage.chatMessage;
  const tmp = closure_9();
  const obj = useAvatarDecoration;
  const avatarDecoration = obj.useAvatarDecoration(user, guildId);
  const pendingAvatarDecoration = usePendingAvatarSettingsDefault({ guildId, isTryItOut }).pendingAvatarDecoration;
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
  const Avatar = tmp2(1188).Avatar;
  if (undefined !== avatarSrcOverride) {
    const obj4 = { source: tmp2Result.getAvatarSource(user, guildId, avatarSrcOverride, stateFromStores), size: native.AvatarSizes.NORMAL, avatarDecoration: tmp8 };
    obj5 = obj4;
    tmp2Result = profile_customization_ProfileCustomizationUtils;
  } else {
    obj5 = { user, size: native.AvatarSizes.NORMAL, guildId, avatarDecoration: tmp8, animate: !stateFromStores };
  }
  items1 = [metroImportDefault(Avatar, obj5), ];
  const obj6 = { style: tmp.chatContent, children: items3 };
  const obj7 = { style: tmp.chatHeader, children: items2 };
  const obj8 = { userId: user.id, guildId, userName: displayName, variant: "text-md/semibold", effectDisplayType: types.EffectDisplayType.PLAIN, lineClamp: 1, pendingDisplayNameStyles: displayNameStyles, style: tmp.chatUsername };
  const tmp5Result = UsernameWithEffectsDefault;
  items2 = [metroImportDefault(tmp5Result, obj8), ];
  const obj9 = { variant: "text-xs/medium", color: "text-muted", style: tmp.chatTimestamp, children: memo };
  items2[1] = metroImportDefault(Text_Text.Text, obj9);
  items3 = [metroImportAll(View, obj7), ];
  const obj10 = { variant: "text-md/normal", color: "text-default", style: tmp.chatMessageText, children: chatMessage };
  const Text = tmp2(5619).Text;
  if (chatMessage == null) {
    const intl = tmp2(1114).intl;
    chatMessage = intl.string(tmp5(2931).h5Cuej);
  }
  items3[1] = metroImportDefault(Text, obj10);
  items1[1] = metroImportAll(View, obj6);
  return metroImportAll(View, obj3);
}
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { previewSection: obj2, previewSectionTilted: { marginBottom: 0 }, profilePreviewTilted: obj3, chatPreviewWrapper: obj4, chatPreviewWrapperTilted: obj5, nameplatePreviewWrapper: { marginTop: -6, width: 260 }, chatContainer: obj6, chatContent: { flex: 1 }, chatHeader: { flexDirection: "row", alignItems: "baseline", gap: 6 }, chatUsername: { flexShrink: 1, minWidth: 0 }, chatTimestamp: { marginTop: -8, flexShrink: 0 }, chatMessageText: {} };
obj2 = { marginBottom: nativeDefault.space.PX_24, alignItems: "center", alignSelf: "center", width: "100%", maxWidth: 360 };
createStyles = createStyles.createStyles;
obj3 = { transform: items };
items = [{ rotate: "-2.63deg" }];
obj4 = { marginTop: -18, alignSelf: "flex-end", width: 260, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj5 = { alignSelf: "flex-start", marginLeft: 88, transform: items1 };
items1 = [{ rotate: "3.36deg" }];
obj6 = { flexDirection: "row", borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, gap: nativeDefault.space.PX_12 };
let closure_9 = createStyles(obj);
createStyles = createStyles_mod;
let closure_10 = createStyles.createStyles((scale) => {
  let items;
  let rect;
  const obj = { appIconTilted: rect };
  rect = { position: "absolute", top: 64, right: 0, borderRadius: nativeDefault.radii.xl, borderCurve: "continuous", borderWidth: 0, transform: items };
  items = [{ rotate: "15deg" }, ];
  const obj2 = { scale };
  items[1] = obj2;
  return obj;
});
const result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEditPreview.tsx");

export default function DisplayNameStylesEditPreview(user) {
  let NameplatePreview;
  let appIconId;
  let appIconScale;
  let displayName;
  let guildId;
  let guildNameplate;
  let intl;
  let items3;
  let obj8;
  let pendingNameplate;
  let profilePreviewTilted;
  let tmp17;
  let userNameplate;
  user = user.user;
  ({ displayName, guildId } = user);
  const selectedFontId = user.selectedFontId;
  const selectedEffectId = user.selectedEffectId;
  const selectedColors = user.selectedColors;
  let flag = user.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  ({ appIconId, appIconScale } = user);
  if (appIconScale === undefined) {
    appIconScale = 1;
  }
  let flag2 = user.hideNameplate;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = user.hideBadges;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = user.hidePronouns;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let flag5 = user.hideGuildTag;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let flag6 = user.tilted;
  if (flag6 === undefined) {
    flag6 = false;
  }
  const chatMessage = user.chatMessage;
  const tmp = closure_9();
  const tmp2 = closure_10(appIconScale);
  const obj = user(selectedFontId[7]);
  const guildMemberAndUserPendingNameplate = obj.useGuildMemberAndUserPendingNameplate(user, guildId);
  ({ pendingNameplate, userNameplate, guildNameplate } = guildMemberAndUserPendingNameplate);
  let obj2 = user(selectedFontId[8]);
  let nameplateData = obj2.getNameplateData(guildNameplate);
  let obj3 = user(selectedFontId[9]);
  const items = [UserProfileSettingsStore];
  const stateFromStores = obj3.useStateFromStores(items, () => {
    let pendingAvatar;
    if (flag) {
      pendingAvatar = obj.getTryItOutChanges().tryItOutAvatar;
    } else {
      pendingAvatar = obj.getPendingChanges(guildId).pendingAvatar;
    }
    const obj2 = RecentAvatarUtils;
    const obj3 = { userId: user.id, image: pendingAvatar };
    return obj2.getPendingAvatarSrc(obj3);
  });
  const items1 = [selectedFontId, selectedEffectId, selectedColors];
  const memo = selectedEffectId.useMemo(() => ({ fontId: selectedFontId, effectId: selectedEffectId, colors: selectedColors }), items1);
  const items2 = [tmp.previewSection, ];
  let previewSectionTilted = flag6;
  const tmp9 = closure_8;
  if (flag6) {
    previewSectionTilted = tmp.previewSectionTilted;
  }
  const obj4 = { style: items2, children: items3 };
  items2[1] = previewSectionTilted;
  const obj5 = { user, displayName, guildId, displayNameStylesOverride: memo, isPremiumTryItOut: flag, compact: true, hideFrame: true, hideBadges: flag3, hidePronouns: flag4, hideGuildTag: flag5, maxWidth: 320, style: profilePreviewTilted, accessibilityLabel: intl.string(guildId(selectedFontId[13]).zoh6MT) };
  profilePreviewTilted = undefined;
  const tmp13 = guildId(selectedFontId[11]);
  if (flag6) {
    profilePreviewTilted = tmp.profilePreviewTilted;
  }
  intl = tmp3(tmp4[12]).intl;
  items3 = [closure_7(tmp13, obj5), , , ];
  const items4 = [tmp.chatPreviewWrapper, ];
  if (flag6) {
    flag6 = tmp.chatPreviewWrapperTilted;
  }
  items4[1] = flag6;
  const obj6 = { style: items4, children: closure_7(ChatPreview, { user, displayName, displayNameStyles: memo, guildId, avatarSrcOverride: stateFromStores, isTryItOut: flag, chatMessage }) };
  items3[1] = closure_7(selectedColors, obj6);
  let tmp11Result = !flag2;
  if (tmp11Result) {
    const obj7 = { style: tmp.nameplatePreviewWrapper, children: closure_7(NameplatePreview, obj8) };
    obj8 = { user, nameplate: pendingNameplate, nameplateData: tmp17, guildId, pendingAvatarSrc: stateFromStores, pendingDisplayNameStyles: memo, pendingGlobalName: displayName };
    tmp17 = undefined;
    NameplatePreview = tmp3(tmp4[14]).NameplatePreview;
    if (null == pendingNameplate) {
      if (nameplateData == null) {
        nameplateData = userNameplate;
      }
      tmp17 = nameplateData;
    }
    tmp11Result = tmp11(tmp10, obj7);
  }
  items3[2] = tmp11Result;
  let tmp11Result2 = null != appIconId;
  if (tmp11Result2) {
    const obj9 = { id: appIconId, size: 102, style: tmp2.appIconTilted };
    tmp11Result2 = tmp11(tmp12(tmp4[15]), obj9);
  }
  items3[3] = tmp11Result2;
  return tmp9(selectedColors, obj4);
};
