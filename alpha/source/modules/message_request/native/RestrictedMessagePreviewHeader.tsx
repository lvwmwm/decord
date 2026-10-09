// Module ID: 17531
// Function ID: 17532
// Name: RestrictedMessagePreviewHeader
// Dependencies: [19, 17, 12117, 21, 5091, 587, 6848, 4923, 8287, 6879, 4767, 5055, 12300, 2000, 8299, 7046, 5941, 6191, 1126, 1200, 5087, 17514, 6165, 17532, 2]
// Exports: default

// Module 17531 (RestrictedMessagePreviewHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ToastUtils from "ToastUtils" /* 4767 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import ClipboardUtils from "ClipboardUtils" /* 6879 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8287 */;
import MessageRequestConstants from "MessageRequestConstants" /* 12117 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
let closure_5 = MessageRequestConstants.MOBILE_MESSAGE_REQUESTS_MODAL_KEY;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, avatar: obj3 };
obj2 = { alignItems: "flex-start", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_4 };
let closure_8 = createStyles(obj);
let result = size.fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewHeader.tsx");

export default function RestrictedMessagePreviewHeader(channel) {
  let Avatar;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items3;
  let obj5;
  let obj8;
  channel = channel.channel;
  const user = channel.user;
  let analyticsLocations;
  const tmp = closure_8();
  analyticsLocations = user(analyticsLocations[6])().analyticsLocations;
  let obj = user(analyticsLocations[7]);
  const name = obj.getName(user);
  let obj2 = user(analyticsLocations[7]);
  const userTag = obj2.getUserTag(user, { decoration: "never", identifiable: "always" });
  const items = [user.id, channel.id, analyticsLocations];
  const callback = userTag.useCallback(() => {
    const obj = { userId: user.id, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj);
  }, items);
  const items1 = [userTag];
  const items2 = [user];
  const callback1 = userTag.useCallback(() => {
    const obj = ClipboardUtils;
    obj.copy(userTag);
    const obj2 = ToastUtils;
    const result = obj2.presentUsernameCopied();
  }, items1);
  let obj3 = { style: tmp.container, children: items3 };
  const callback2 = userTag.useCallback(() => {
    let obj = ActionSheetActionCreatorsDefault;
    let obj2 = {
      user,
      onPressMutualGuild(arg0) {
        const obj = channel(analyticsLocations[14]);
        const result = obj.trackUserProfileAction({ action: "PRESS_MUTUAL_GUILD" });
        const obj2 = channel(analyticsLocations[15]);
        obj2.transitionToGuild(arg0);
        const obj3 = user(analyticsLocations[11]);
        obj3.hideActionSheet();
        const obj4 = user(analyticsLocations[16]);
        obj4.popWithKey(closure_1_5);
      }
    };
    obj.openLazy(asyncRequire(12300, dependencyMap.paths), "MutualGuildsActionSheet", obj2);
  }, items2);
  let obj4 = { accessibilityRole: "button", accessibilityLabel: intl.string(channel(analyticsLocations[18]).t.iXAna6), onPress: callback, children: closure_6(Avatar, obj5) };
  const PressableOpacity = channel(analyticsLocations[17]).PressableOpacity;
  intl = channel(analyticsLocations[18]).intl;
  obj5 = { style: tmp.avatar, user, guildId: channel.guild_id, size: channel(analyticsLocations[19]).AvatarSizes.XXLARGE, avatarDecoration: user.avatarDecoration };
  Avatar = channel(analyticsLocations[19]).Avatar;
  items3 = [closure_6(PressableOpacity, obj4), , , , , ];
  const obj6 = { accessibilityRole: "button", accessibilityLabel: intl2.string(channel(analyticsLocations[18]).t.iXAna6), onPress: callback, children: closure_6(channel(analyticsLocations[20]).Text, { variant: "heading-xxl/extrabold", color: "mobile-text-heading-primary", children: name }) };
  const PressableOpacity2 = channel(analyticsLocations[17]).PressableOpacity;
  intl2 = channel(analyticsLocations[18]).intl;
  items3[1] = closure_6(PressableOpacity2, obj6);
  let tmp11Result = !user.isProvisional;
  const tmp10 = View;
  const tmp9 = closure_7;
  if (tmp11Result) {
    const obj7 = { accessibilityRole: "button", accessibilityHint: intl3.string(channel(analyticsLocations[18]).t.y5MwJy), onPress: callback1, children: closure_6(channel(analyticsLocations[20]).Text, obj8) };
    const PressableOpacity3 = tmp12(tmp3[17]).PressableOpacity;
    intl3 = tmp12(tmp3[18]).intl;
    obj8 = { variant: "heading-lg/medium", color: "text-default", children: userTag };
    tmp11Result = tmp11(PressableOpacity3, obj7);
  }
  items3[2] = tmp11Result;
  const obj9 = { variant: "text-md/medium", color: "text-default", children: intl4.formatToPlainString(channel(analyticsLocations[18]).t["Qvg+6+"], { username: name }) };
  const Text = tmp12(tmp3[20]).Text;
  intl4 = tmp12(tmp3[18]).intl;
  items3[3] = closure_6(Text, obj9);
  const obj10 = { userId: user.id, onPress: callback2, iconSize: channel(analyticsLocations[22]).GuildIconSizes.XSMALL, textVariant: "text-md/medium" };
  const tmp2Result = user(analyticsLocations[21]);
  items3[4] = closure_6(tmp2Result, obj10);
  items3[5] = closure_6(user(analyticsLocations[23]), { channel, user });
  return tmp9(tmp10, obj3);
};
