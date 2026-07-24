// Module ID: 15627
// Function ID: 120437
// Name: RestrictedMessagePreviewHeader
// Dependencies: [31, 27, 11506, 33, 4130, 689, 5462, 3969, 8537, 5490, 3830, 4098, 11662, 1934, 8311, 5737, 4337, 4660, 1212, 1273, 4126, 15610, 5513, 15628, 2]
// Exports: default

// Module 15627 (RestrictedMessagePreviewHeader)
import result from "result";
import { View } from "get ActivityIndicator";
import { MOBILE_MESSAGE_REQUESTS_MODAL_KEY as closure_5 } from "MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { alignItems: "flex-start", gap: require("_createForOfIteratorHelperLoose").space.PX_8, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.avatar = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
let result = require("MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL").fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewHeader.tsx");

export default function RestrictedMessagePreviewHeader(channel) {
  channel = channel.channel;
  const user = channel.user;
  const tmp = _createForOfIteratorHelperLoose();
  analyticsLocations = user(analyticsLocations[6])().analyticsLocations;
  let obj = user(analyticsLocations[7]);
  const name = obj.getName(user);
  let obj1 = user(analyticsLocations[7]);
  const userTag = obj1.getUserTag(user, { decoration: "never", identifiable: "always" });
  const items = [user.id, channel.id, analyticsLocations];
  const callback = userTag.useCallback(() => {
    user(analyticsLocations[8])({ userId: user.id, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations });
  }, items);
  const items1 = [userTag];
  const items2 = [user];
  const callback1 = userTag.useCallback(() => {
    channel(analyticsLocations[9]).copy(userTag);
    const obj = channel(analyticsLocations[9]);
    const result = channel(analyticsLocations[10]).presentUsernameCopied();
  }, items1);
  obj = { style: tmp.container };
  const callback2 = userTag.useCallback(() => {
    let obj = user(analyticsLocations[11]);
    obj = {
      user,
      onPressMutualGuild(arg0) {
        const result = channel(analyticsLocations[14]).trackUserProfileAction({ action: "PRESS_MUTUAL_GUILD" });
        const obj = channel(analyticsLocations[14]);
        channel(analyticsLocations[15]).transitionToGuild(arg0);
        const obj2 = channel(analyticsLocations[15]);
        user(analyticsLocations[11]).hideActionSheet();
        const obj3 = user(analyticsLocations[11]);
        user(analyticsLocations[16]).popWithKey(outer2_5);
      }
    };
    obj.openLazy(channel(analyticsLocations[13])(analyticsLocations[12], analyticsLocations.paths), "MutualGuildsActionSheet", obj);
  }, items2);
  obj = { accessibilityRole: "button" };
  const intl = channel(analyticsLocations[18]).intl;
  obj.accessibilityLabel = intl.string(channel(analyticsLocations[18]).t.iXAna6);
  obj.onPress = callback;
  obj1 = { style: tmp.avatar, user, guildId: channel.guild_id, size: channel(analyticsLocations[19]).AvatarSizes.XXLARGE, avatarDecoration: user.avatarDecoration };
  obj.children = callback(channel(analyticsLocations[19]).Avatar, obj1);
  const items3 = [callback(channel(analyticsLocations[17]).PressableOpacity, obj), , , , , ];
  let obj2 = { accessibilityRole: "button" };
  const intl2 = channel(analyticsLocations[18]).intl;
  obj2.accessibilityLabel = intl2.string(channel(analyticsLocations[18]).t.iXAna6);
  obj2.onPress = callback;
  let obj3 = { variant: "heading-xxl/extrabold", color: "mobile-text-heading-primary", children: name };
  obj2.children = callback(channel(analyticsLocations[20]).Text, obj3);
  items3[1] = callback(channel(analyticsLocations[17]).PressableOpacity, obj2);
  let tmp9 = !user.isProvisional;
  if (tmp9) {
    const obj4 = { accessibilityRole: "button" };
    const intl3 = channel(analyticsLocations[18]).intl;
    obj4.accessibilityHint = intl3.string(channel(analyticsLocations[18]).t.y5MwJy);
    obj4.onPress = callback1;
    const obj5 = { variant: "heading-lg/medium", color: "text-default", children: userTag };
    obj4.children = callback(channel(analyticsLocations[20]).Text, obj5);
    tmp9 = callback(channel(analyticsLocations[17]).PressableOpacity, obj4);
  }
  items3[2] = tmp9;
  const obj6 = { variant: "text-md/medium", color: "text-default" };
  const intl4 = channel(analyticsLocations[18]).intl;
  obj6.children = intl4.formatToPlainString(channel(analyticsLocations[18]).t["Qvg+6+"], { username: name });
  items3[3] = callback(channel(analyticsLocations[20]).Text, obj6);
  const obj7 = { userId: user.id, onPress: callback2, iconSize: channel(analyticsLocations[22]).GuildIconSizes.XSMALL, textVariant: "text-md/medium" };
  items3[4] = callback(user(analyticsLocations[21]), obj7);
  items3[5] = callback(user(analyticsLocations[23]), { channel, user });
  obj.children = items3;
  return closure_7(View, obj);
};
