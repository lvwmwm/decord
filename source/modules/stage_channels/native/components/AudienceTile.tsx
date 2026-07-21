// Module ID: 10785
// Function ID: 83744
// Name: RaisedHandIcon
// Dependencies: []

// Module 10785 (RaisedHandIcon)
function RaisedHandIcon(rtsState) {
  const tmp = styles();
  let activeBackground = rtsState.rtsState === arg1(dependencyMap[6]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  const unsafe_rawColors = importDefault(dependencyMap[5]).unsafe_rawColors;
  let obj = {};
  const items = [tmp.raisedHandContainer, ];
  if (activeBackground) {
    activeBackground = tmp.activeBackground;
  }
  items[1] = activeBackground;
  obj.style = items;
  obj = { style: tmp.raisedHand, source: importDefault(dependencyMap[8]), color: activeBackground ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_800 };
  obj.children = callback(arg1(dependencyMap[7]).Icon, obj);
  return callback(View, obj);
}
function getTileWidthStyle(arg0) {
  return (arg0 - 46) / 4;
}
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj1 = arg1(dependencyMap[4]);
let obj = { touchableContainer: { overflow: "visible" }, container: { alignItems: "center" }, avatarContainer: { paddingLeft: "<string:1148797440>", alignItems: "<string:3323723777>", flexDirection: "<string:2286026754>", height: "<string:469762316>" } };
obj = { borderColor: importDefault(dependencyMap[5]).unsafe_rawColors.PRIMARY_800, backgroundColor: importDefault(dependencyMap[5]).colors.WHITE };
obj.raisedHandContainer = obj;
obj1 = { backgroundColor: importDefault(dependencyMap[5]).unsafe_rawColors.GREEN_360 };
obj.activeBackground = obj1;
obj.raisedHand = {};
obj.nameplateContainer = { padding: 0, paddingBottom: 6, flexDirection: 0 };
const tmp2 = arg1(dependencyMap[3]);
obj.usernameText = { fontSize: 14, color: importDefault(dependencyMap[5]).colors.WHITE };
obj.faded = { opacity: 0.5 };
const styles = obj1.createStyles(obj);
const obj2 = { fontSize: 14, color: importDefault(dependencyMap[5]).colors.WHITE };
const memoResult = importAllResult.memo((channel) => {
  let blocked;
  let ignored;
  let rtsState;
  channel = channel.channel;
  const arg1 = channel;
  const participant = channel.participant;
  const user = participant.user;
  const importDefault = user;
  ({ rtsState, blocked, ignored } = participant);
  const theme = channel.theme;
  const tmp = styles();
  const tmp2 = getTileWidthStyle(importDefault(dependencyMap[9])().width);
  const guildId = channel.getGuildId();
  const dependencyMap = guildId;
  let obj = arg1(dependencyMap[10]);
  const items = [closure_4];
  const items1 = [guildId, user.id];
  let stateFromStores = obj.useStateFromStores(items, () => {
    let tmp = null != guildId;
    if (tmp) {
      const member = member.getMember(guildId, user.id);
      let premiumSince;
      if (null != member) {
        premiumSince = member.premiumSince;
      }
      tmp = null != premiumSince;
    }
    return Boolean(tmp);
  }, items1);
  let obj1 = arg1(dependencyMap[11]);
  let result = obj1.isRequestedToSpeakAll(rtsState);
  let obj2 = importDefault(dependencyMap[12]);
  const name = obj2.getName(guildId, channel.id, user);
  let tmp7 = blocked;
  if (!blocked) {
    tmp7 = ignored;
  }
  obj = {};
  const intl = arg1(dependencyMap[14]).intl;
  obj.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[14]).t.QLMGhv, { name });
  const items2 = [, , ];
  ({ touchableContainer: arr3[0], container: arr3[1] } = tmp);
  items2[2] = { width: tmp2 };
  obj.style = items2;
  obj.accessibilityRole = "button";
  obj.onPress = function onPress() {
    let obj = channel(guildId[15]);
    obj = { userId: user.id, channelId: channel.id };
    obj.showUserProfile(obj);
  };
  obj = { style: tmp.avatarContainer };
  obj1 = { user };
  let tmp11;
  if (null != guildId) {
    tmp11 = guildId;
  }
  obj1.guildId = tmp11;
  obj1.size = arg1(dependencyMap[7]).AvatarSizes.LARGE;
  let faded = tmp7;
  if (tmp7) {
    faded = tmp.faded;
  }
  obj1.style = faded;
  const items3 = [callback(arg1(dependencyMap[7]).CutoutableAvatarImage, obj1), ];
  if (result) {
    obj2 = { rtsState };
    result = callback(RaisedHandIcon, obj2);
  }
  items3[1] = result;
  obj.children = items3;
  const items4 = [closure_6(View, obj), ];
  const obj3 = { style: items5 };
  const items5 = [tmp.nameplateContainer];
  if (blocked) {
    blocked = callback(arg1(dependencyMap[16]).BlockedStatus, {});
  }
  const items6 = [blocked, , , ];
  if (ignored) {
    ignored = callback(arg1(dependencyMap[16]).IgnoredStatus, {});
  }
  items6[1] = ignored;
  const obj4 = {};
  const items7 = [tmp.usernameText, , ];
  let tmp23 = stateFromStores;
  if (!stateFromStores) {
    tmp23 = tmp7;
  }
  if (tmp23) {
    const obj5 = {};
    let num4 = 1;
    if (stateFromStores) {
      num4 = 1;
      if (tmp7) {
        num4 = 2;
      }
    }
    obj5.maxWidth = tmp2 - 18 * num4;
    tmp23 = obj5;
  }
  items7[1] = tmp23;
  if (null == theme) {
    items7[2] = tmp24;
    obj4.style = items7;
    obj4.numberOfLines = 1;
    obj4.children = name;
    items6[2] = callback(arg1(dependencyMap[7]).LegacyText, obj4);
    if (stateFromStores) {
      const obj6 = { source: importDefault(dependencyMap[18]), size: arg1(dependencyMap[7]).Icon.Sizes.SMALL, color: importDefault(dependencyMap[5]).unsafe_rawColors.GUILD_BOOSTING_PINK };
      stateFromStores = callback(arg1(dependencyMap[7]).Icon, obj6);
    }
    items6[3] = stateFromStores;
    obj3.children = items6;
    items4[1] = closure_6(View, obj3);
    obj.children = items4;
    return tmp8(arg1(dependencyMap[13]).Pressable, obj);
  } else {
    const obj7 = {};
    const obj12 = arg1(dependencyMap[17]);
    const unsafe_rawColors = importDefault(dependencyMap[5]).unsafe_rawColors;
    obj7.color = arg1(dependencyMap[17]).isThemeDark(theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860;
    const isThemeDarkResult = arg1(dependencyMap[17]).isThemeDark(theme);
  }
});
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/stage_channels/native/components/AudienceTile.tsx");

export default memoResult;
export const useAudienceTileStyles = styles;
export { getTileWidthStyle };
