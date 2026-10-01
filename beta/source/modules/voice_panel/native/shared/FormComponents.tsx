// Module ID: 9131
// Function ID: 9132
// Name: FormComponents
// Dependencies: [19, 4876, 21, 4836, 576, 5901, 5999, 9132, 1177, 6583, 9133, 9144, 9187, 5084, 9188, 7624, 504, 7157, 9190, 9191, 9193, 4832, 1115, 5917, 5281, 9194, 9204, 4678, 9205, 9238, 2]
// Exports: MemberRowItem, VoicePanelFormSection

// Module 9131 (FormComponents)
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import NativeViewDefault from "NativeView" /* 5901 */;
import TableRowGroup2 from "TableRowGroup" /* 5999 */;
import StreamerApplicationSelectors from "StreamerApplicationSelectors" /* 7157 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import VoiceStateIcons from "VoiceStateIcons" /* 9132 */;
import CallActionCreatorsDefault from "CallActionCreators" /* 9194 */;
import react from "react" /* 19 */;
import PresenceStore from "PresenceStore" /* 4876 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
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

export const VoicePanelFormSection = function VoicePanelFormSection(style) {
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
};
export const MemberRowItem = function MemberRowItem(user) {
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
  let tmp20Result3;
  let tmp23Result;
  let tmp30;
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
  let tmp13 = channelId(flag[18])("voice_member_row");
  const obj7 = analyticsLocations;
  const tmp14 = channelId(flag[19]);
  if (tmp13) {
    tmp13 = flag2;
  }
  const first = tmp14(id, guildId, tmp13)[0];
  let application_id;
  if (first != null) {
    application_id = first.application_id;
  }
  const gameRecord = tmp2(tmp3[20])(application_id).gameRecord;
  const items2 = [stateFromStores, flag];
  let tmp18 = true === showRing;
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
  if (tmp18) {
    tmp18 = canRing;
  }
  const obj9 = { onPress: callback, icon: stateFromStores(Avatar, obj10), subLabel: memo, trailing: null, label: null };
  const TableRow = tmp4(tmp3[23]).TableRow;
  obj10 = { user, guildId, size: user(flag[8]).AvatarSizes.REFRESH_MEDIUM_32, style: notConnectedAvatar };
  Avatar = tmp4(tmp3[8]).Avatar;
  notConnectedAvatar = undefined;
  if (notConnected) {
    notConnectedAvatar = tmp.notConnectedAvatar;
  }
  if (!tmp18) {
    obj9.trailing = tmp23Result;
    if (nick == null) {
      const tmp4Result = user(flag[27]);
      nick = tmp4Result.getName(user);
    }
    let str = "text-default";
    const obj11 = { style: tmp.memberRow, children: items3 };
    const tmp2Result = tmp2(flag[5]);
    let Text = tmp4(tmp3[21]).Text;
    const tmp28 = closure_6;
    if (notConnected) {
      str = "text-muted";
    }
    const obj12 = { variant: "text-md/semibold", color: str, style: tmp30, children: nick };
    tmp30 = null != displayNameStylesFont;
    if (tmp30) {
      tmp30 = { fontFamily: displayNameStylesFont };
      const obj13 = { fontFamily: displayNameStylesFont };
    }
    items3 = [stateFromStores(Text, obj12), , ];
    const obj14 = { userId: user.id };
    items3[1] = stateFromStores(tmp2(flag[28]), obj14);
    let tmp20Result = null;
    if (showSecureFramesUI) {
      tmp20Result = null;
      if (isUserSecureFramesVerified) {
        const obj15 = { size: "xs", style: tmp.icon };
        tmp20Result = tmp20(tmp4(tmp3[29]).ShieldLockIcon, obj15);
      }
    }
    items3[2] = tmp20Result;
    obj9.label = tmp28(tmp2Result, obj11);
    return stateFromStores(TableRow, obj9);
  }
  const obj16 = { style: tmp.trailingContainer, children: items4 };
  const tmp23 = closure_6;
  const tmp2Result2 = tmp2(flag[5]);
  if (tmp18) {
    const obj17 = {
      size: "sm",
      variant: "secondary",
      onPress() {
          const items = [user.id];
          const obj = CallActionCreatorsDefault;
          return obj.ring(channelId, items, "voice_panel_floating_cta");
        },
      text: intl.string(user(flag[22]).t.bHa9kN)
    };
    const Button = tmp4(tmp3[24]).Button;
    intl = tmp4(tmp3[22]).intl;
    tmp20Result3 = tmp20(Button, obj17);
  } else {
    tmp20Result3 = null;
    if (null != muteDeafenIconState || null != videoIconState) {
      const obj18 = { muteDeafenIconState, videoIconState };
      tmp20Result3 = tmp20(VoiceBadges, obj18);
    }
  }
  items4 = [tmp20Result3, ];
  let tmp20Result4 = null;
  if (null != gameRecord) {
    const obj19 = { game: gameRecord, size: 24, fallback: "placeholder" };
    tmp20Result4 = tmp20(tmp2(tmp3[26]), obj19);
  }
  items4[1] = tmp20Result4;
  tmp23Result = tmp23(tmp2Result2, obj16);
};
