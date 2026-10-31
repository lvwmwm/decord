// Module ID: 9232
// Function ID: 9233
// Name: FormComponents
// Dependencies: [19, 5761, 21, 5014, 575, 6960, 7060, 9233, 1187, 7326, 9234, 9246, 7497, 6439, 9290, 8750, 504, 7882, 9291, 9293, 5624, 1113, 6975, 5634, 7487, 9294, 5068, 9295, 14735, 2]
// Exports: MemberRowItem, VoicePanelFormSection

// Module 9232 (FormComponents)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import Text_Text from "Text/Text" /* 5624 */;
import NativeViewDefault from "NativeView" /* 6960 */;
import TableRowGroup2 from "TableRowGroup" /* 7060 */;
import CallActionCreatorsDefault from "CallActionCreators" /* 7487 */;
import StreamerApplicationSelectors from "StreamerApplicationSelectors" /* 7882 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8750 */;
import VoiceStateIcons from "VoiceStateIcons" /* 9233 */;
import react from "react" /* 19 */;
import PresenceStore from "PresenceStore" /* 5761 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let size;
function VoiceBadges(arg0) {
  let MuteDeafenIcon;
  let VideoIcon;
  let items;
  let muteDeafenIconState;
  let obj3;
  let obj5;
  let videoIconState;
  ({ muteDeafenIconState, videoIconState } = arg0);
  const tmp = closure_7();
  let tmp6 = null;
  const obj = { style: tmp.voiceBadgesContainer, children: items };
  const tmp2 = metroRequire;
  const tmp5 = NativeViewDefault;
  if (null != muteDeafenIconState) {
    const obj2 = { style: tmp.iconWrapper, children: hasOwnProperty(MuteDeafenIcon, obj3) };
    obj3 = { state: muteDeafenIconState, size: native.IconSizes.SMALL, style: tmp.icon };
    const tmp3Result = NativeViewDefault;
    MuteDeafenIcon = VoiceStateIcons.MuteDeafenIcon;
    tmp6 = hasOwnProperty(tmp3Result, obj2);
  }
  items = [tmp6, ];
  let tmp10 = null;
  if (null != videoIconState) {
    const obj4 = { style: tmp.iconWrapper, children: hasOwnProperty(VideoIcon, obj5) };
    obj5 = { state: videoIconState, size: native.IconSizes.SMALL, style: tmp.icon };
    const tmp3Result2 = NativeViewDefault;
    VideoIcon = VoiceStateIcons.VideoIcon;
    tmp10 = hasOwnProperty(tmp3Result2, obj4);
  }
  items[1] = tmp10;
  return tmp2(tmp5, obj);
}
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { marginHorizontal: 16 }, voiceBadgesContainer: { flexDirection: "row" }, iconWrapper: obj2, icon: size, notConnectedAvatar: { opacity: 0.5 }, memberRow: { flexDirection: "row", alignItems: "center", gap: 4 }, trailingContainer: { flexDirection: "row", alignItems: "center", gap: 8 } };
obj2 = { marginLeft: 8, padding: 6, backgroundColor: nativeDefault.colors.MOBILE_VOICE_PANEL_BADGE_BACKGROUND, borderRadius: nativeDefault.radii.round };
createStyles = createStyles.createStyles;
size = { width: 16, height: 16, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_7 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/FormComponents.tsx");

export function VoicePanelFormSection(style) {
  let TableRowGroup;
  let items;
  let obj2;
  style = style.style;
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  const obj = { style: items, children: hasOwnProperty(TableRowGroup, obj2) };
  items = [closure_7().container, style];
  closure_7();
  obj2 = {};
  const tmp3 = NativeViewDefault;
  TableRowGroup = TableRowGroup2.TableRowGroup;
  const merged1 = Object.assign(merged);
  return hasOwnProperty(tmp3, obj);
}
export function MemberRowItem(user) {
  let Avatar;
  let guildId;
  let intl;
  let items3;
  let items4;
  let nick;
  let notConnected;
  let notConnectedAvatar;
  let obj10;
  let showRing;
  let showSecureFramesUI;
  let tmp18Result3;
  let tmp21Result;
  let tmp28;
  user = user.user;
  const channelId = user.channelId;
  let flag = user.selfStream;
  if (flag === undefined) {
    flag = false;
  }
  ({ nick, guildId, notConnected } = user);
  if (notConnected === undefined) {
    notConnected = false;
  }
  ({ showSecureFramesUI, showRing } = user);
  if (showSecureFramesUI === undefined) {
    showSecureFramesUI = false;
  }
  let flag2 = user.showGameActivity;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let tmp = closure_7();
  const tmp2 = channelId;
  const analyticsLocations = channelId(flag[9])().analyticsLocations;
  let obj = user(flag[10]);
  const muteDeafenIconState = obj.useMuteDeafenIconState(user.id, guildId);
  let obj2 = user(flag[10]);
  const videoIconState = obj2.useVideoIconState(user.id, guildId);
  const id = user.id;
  const obj3 = user(flag[11]);
  const isUserSecureFramesVerified = obj3.useIsUserSecureFramesVerified({ userId: id, channelId });
  const obj4 = user(flag[12]);
  const canRing = obj4.useCanRing(user);
  const obj5 = { userId: user.id, guildId };
  const tmp9 = channelId(flag[13])(obj5);
  const obj6 = user(flag[14]);
  const displayNameStylesFont = obj6.useDisplayNameStylesFont({ displayNameStyles: tmp9 });
  let items = [id, channelId, analyticsLocations];
  const callback = analyticsLocations.useCallback(() => {
    const obj = { userId: id, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj);
  }, items);
  const items1 = [id];
  const obj8 = user(flag[16]);
  const stateFromStores = obj8.useStateFromStores(items1, () => {
    const obj = StreamerApplicationSelectors;
    return obj.getStreamerActivityByUserId(id, PresenceStore);
  });
  const first = channelId(flag[18])(id, guildId, flag2)[0];
  let application_id;
  const obj7 = analyticsLocations;
  if (first != null) {
    application_id = first.application_id;
  }
  const gameRecord = tmp2(tmp3[19])(application_id).gameRecord;
  const items2 = [stateFromStores, flag];
  let tmp16 = true === showRing;
  const memo = obj7.useMemo(() => {
    let obj2;
    let tmp = null;
    if (flag) {
      let stringResult;
      if (null != stateFromStores) {
        const Text = Text_Text.Text;
        const intl2 = intl3.intl;
        const format = intl2.format;
        const tmp8 = hasOwnProperty;
        if (null != stateFromStores.details) {
          let name;
          if ("" !== stateFromStores.details) {
            name = tmp2.details;
          }
          const obj = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: format(tmp15, obj2) };
          obj2 = { name };
          stringResult = tmp8(Text, obj);
        }
        name = tmp2.name;
      } else {
        const intl = intl3.intl;
        stringResult = intl.string(intl3.t.eXan7B);
      }
      tmp = stringResult;
    }
    return tmp;
  }, items2);
  if (tmp16) {
    tmp16 = canRing;
  }
  const obj9 = { onPress: callback, icon: stateFromStores(Avatar, obj10), subLabel: memo, trailing: null, label: null };
  const TableRow = tmp4(tmp3[22]).TableRow;
  obj10 = { user, guildId, size: user(flag[8]).AvatarSizes.REFRESH_MEDIUM_32, style: notConnectedAvatar };
  Avatar = tmp4(tmp3[8]).Avatar;
  notConnectedAvatar = undefined;
  if (notConnected) {
    notConnectedAvatar = tmp.notConnectedAvatar;
  }
  if (!tmp16) {
    obj9.trailing = tmp21Result;
    if (nick == null) {
      const tmp4Result = user(flag[26]);
      nick = tmp4Result.getName(user);
    }
    let str = "text-default";
    const obj11 = { style: tmp.memberRow, children: items3 };
    const tmp2Result = tmp2(flag[5]);
    let Text = tmp4(tmp3[20]).Text;
    const tmp26 = closure_6;
    if (notConnected) {
      str = "text-muted";
    }
    const obj12 = { variant: "text-md/semibold", color: str, style: tmp28, children: nick };
    tmp28 = null != displayNameStylesFont;
    if (tmp28) {
      tmp28 = { fontFamily: displayNameStylesFont };
      const obj13 = { fontFamily: displayNameStylesFont };
    }
    items3 = [stateFromStores(Text, obj12), , ];
    const obj14 = { userId: user.id };
    items3[1] = stateFromStores(tmp2(flag[27]), obj14);
    let tmp18Result = null;
    if (showSecureFramesUI) {
      tmp18Result = null;
      if (isUserSecureFramesVerified) {
        const obj15 = { size: "xs", style: tmp.icon };
        tmp18Result = tmp18(tmp4(tmp3[28]).ShieldLockIcon, obj15);
      }
    }
    items3[2] = tmp18Result;
    obj9.label = tmp26(tmp2Result, obj11);
    return stateFromStores(TableRow, obj9);
  }
  const obj16 = { style: tmp.trailingContainer, children: items4 };
  const tmp21 = closure_6;
  const tmp2Result2 = tmp2(flag[5]);
  if (tmp16) {
    const obj17 = {
      size: "sm",
      variant: "secondary",
      onPress() {
          const items = [user.id];
          const obj = CallActionCreatorsDefault;
          return obj.ring(channelId, items, "voice_panel_floating_cta");
        },
      text: intl.string(user(flag[21]).t.bHa9kN)
    };
    const Button = tmp4(tmp3[23]).Button;
    intl = tmp4(tmp3[21]).intl;
    tmp18Result3 = tmp18(Button, obj17);
  } else {
    tmp18Result3 = null;
    if (null != muteDeafenIconState || null != videoIconState) {
      const obj18 = { muteDeafenIconState, videoIconState };
      tmp18Result3 = tmp18(VoiceBadges, obj18);
    }
  }
  items4 = [tmp18Result3, ];
  let tmp18Result4 = null;
  if (null != gameRecord) {
    const obj19 = { game: gameRecord, size: 24, fallback: "placeholder" };
    tmp18Result4 = tmp18(tmp2(tmp3[25]), obj19);
  }
  items4[1] = tmp18Result4;
  tmp21Result = tmp21(tmp2Result2, obj16);
}
