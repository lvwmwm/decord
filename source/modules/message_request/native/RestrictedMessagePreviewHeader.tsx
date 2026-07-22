// Module ID: 15463
// Function ID: 117941
// Name: RestrictedMessagePreviewHeader
// Dependencies: []
// Exports: default

// Module 15463 (RestrictedMessagePreviewHeader)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = arg1(dependencyMap[2]).MOBILE_MESSAGE_REQUESTS_MODAL_KEY;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { alignItems: "flex-start", gap: importDefault(dependencyMap[5]).space.PX_8, paddingVertical: importDefault(dependencyMap[5]).space.PX_12 };
obj.container = obj;
const tmp2 = arg1(dependencyMap[3]);
obj.avatar = { marginBottom: importDefault(dependencyMap[5]).space.PX_4 };
let closure_8 = obj.createStyles(obj);
const obj1 = { marginBottom: importDefault(dependencyMap[5]).space.PX_4 };
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewHeader.tsx");

export default function RestrictedMessagePreviewHeader(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const user = channel.user;
  const importDefault = user;
  const tmp = callback2();
  const analyticsLocations = importDefault(dependencyMap[6])().analyticsLocations;
  const dependencyMap = analyticsLocations;
  let obj = importDefault(dependencyMap[7]);
  const name = obj.getName(user);
  let obj1 = importDefault(dependencyMap[7]);
  const userTag = obj1.getUserTag(user, { y: true, getEventLocationIconSource: true });
  const React = userTag;
  const items = [user.id, channel.id, analyticsLocations];
  const callback = React.useCallback(() => {
    user(analyticsLocations[8])({ userId: user.id, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations });
  }, items);
  const items1 = [userTag];
  const items2 = [user];
  const callback1 = React.useCallback(() => {
    channel(analyticsLocations[9]).copy(userTag);
    const obj = channel(analyticsLocations[9]);
    const result = channel(analyticsLocations[10]).presentUsernameCopied();
  }, items1);
  obj = { style: tmp.container };
  const callback2 = React.useCallback(() => {
    let obj = user(analyticsLocations[11]);
    obj = {
      user,
      onPressMutualGuild(arg0) {
        const result = callback(closure_2[14]).trackUserProfileAction({ action: "PRESS_MUTUAL_GUILD" });
        const obj = callback(closure_2[14]);
        callback(closure_2[15]).transitionToGuild(arg0);
        const obj2 = callback(closure_2[15]);
        callback2(closure_2[11]).hideActionSheet();
        const obj3 = callback2(closure_2[11]);
        callback2(closure_2[16]).popWithKey(closure_5);
      }
    };
    obj.openLazy(channel(analyticsLocations[13])(analyticsLocations[12], analyticsLocations.paths), "MutualGuildsActionSheet", obj);
  }, items2);
  obj = { accessibilityRole: "button" };
  const intl = arg1(dependencyMap[18]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[18]).t.iXAna6);
  obj.onPress = callback;
  obj1 = { style: tmp.avatar, user, guildId: channel.guild_id, size: arg1(dependencyMap[19]).AvatarSizes.XXLARGE, avatarDecoration: user.avatarDecoration };
  obj.children = callback(arg1(dependencyMap[19]).Avatar, obj1);
  const items3 = [callback(arg1(dependencyMap[17]).PressableOpacity, obj), , , , , ];
  const obj2 = { accessibilityRole: "button" };
  const intl2 = arg1(dependencyMap[18]).intl;
  obj2.accessibilityLabel = intl2.string(arg1(dependencyMap[18]).t.iXAna6);
  obj2.onPress = callback;
  const obj3 = { cachedAt: "Array", edpbxy: "isArray", children: name };
  obj2.children = callback(arg1(dependencyMap[20]).Text, obj3);
  items3[1] = callback(arg1(dependencyMap[17]).PressableOpacity, obj2);
  let tmp9 = !user.isProvisional;
  if (tmp9) {
    const obj4 = { accessibilityRole: "button" };
    const intl3 = arg1(dependencyMap[18]).intl;
    obj4.accessibilityHint = intl3.string(arg1(dependencyMap[18]).t.y5MwJy);
    obj4.onPress = callback1;
    const obj5 = { cachedAt: null, edpbxy: null, children: userTag };
    obj4.children = callback(arg1(dependencyMap[20]).Text, obj5);
    tmp9 = callback(arg1(dependencyMap[17]).PressableOpacity, obj4);
  }
  items3[2] = tmp9;
  const obj6 = {};
  const intl4 = arg1(dependencyMap[18]).intl;
  obj6.children = intl4.formatToPlainString(arg1(dependencyMap[18]).t.Qvg+6+, { username: name });
  items3[3] = callback(arg1(dependencyMap[20]).Text, obj6);
  const obj7 = { userId: user.id, onPress: callback2, iconSize: arg1(dependencyMap[22]).GuildIconSizes.XSMALL, textVariant: "text-md/medium" };
  items3[4] = callback(importDefault(dependencyMap[21]), obj7);
  items3[5] = callback(importDefault(dependencyMap[23]), { channel, user });
  obj.children = items3;
  return closure_7(View, obj);
};
