// Module ID: 10825
// Function ID: 84009
// Name: RaisedHandIcon
// Dependencies: [31, 27, 1917, 33, 4130, 689, 4314, 1273, 7672, 1450, 566, 4957, 4319, 5217, 1212, 7557, 10807, 3976, 10826, 2]

// Module 10825 (RaisedHandIcon)
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_5;
let closure_6;
const require = arg1;
function RaisedHandIcon(rtsState) {
  const tmp = styles();
  let activeBackground = rtsState.rtsState === require(4314) /* getAudienceRequestToSpeakState */.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  const unsafe_rawColors = importDefault(689).unsafe_rawColors;
  let obj = {};
  const items = [tmp.raisedHandContainer, ];
  if (activeBackground) {
    activeBackground = tmp.activeBackground;
  }
  items[1] = activeBackground;
  obj.style = items;
  obj = { style: tmp.raisedHand, source: importDefault(7672), color: activeBackground ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_800 };
  obj.children = callback(require(1273) /* Button */.Icon, obj);
  return callback(View, obj);
}
function getTileWidthStyle(arg0) {
  return (arg0 - 46) / 4;
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = { touchableContainer: { overflow: "visible" }, container: { alignItems: "center" }, avatarContainer: { position: "relative", padding: 8, paddingTop: 0, paddingBottom: 4 } };
obj = { position: "absolute", top: -8, right: 0, height: 24, width: 24, alignItems: "center", justifyContent: "center", borderRadius: 12, borderWidth: 2, borderColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_800, backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
obj.raisedHandContainer = obj;
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360 };
obj.activeBackground = _createForOfIteratorHelperLoose;
obj.raisedHand = { height: 13, width: 13, alignItems: "center", justifyContent: "center", resizeMode: "contain" };
obj.nameplateContainer = { flexDirection: "row", alignItems: "center", justifyContent: "center" };
obj.usernameText = { fontSize: 14, color: require("_createForOfIteratorHelperLoose").colors.WHITE };
obj.faded = { opacity: 0.5 };
const styles = _createForOfIteratorHelperLoose.createStyles(obj);
let obj2 = { fontSize: 14, color: require("_createForOfIteratorHelperLoose").colors.WHITE };
const memoResult = importAllResult.memo((channel) => {
  let blocked;
  let ignored;
  let rtsState;
  channel = channel.channel;
  const participant = channel.participant;
  const user = participant.user;
  ({ rtsState, blocked, ignored } = participant);
  const theme = channel.theme;
  let tmp = styles();
  const tmp2 = getTileWidthStyle(user(guildId[9])().width);
  guildId = channel.getGuildId();
  let obj = channel(guildId[10]);
  const items = [_isNativeReflectConstruct];
  const items1 = [guildId, user.id];
  let stateFromStores = obj.useStateFromStores(items, () => {
    let tmp = null != guildId;
    if (tmp) {
      const member = outer1_4.getMember(guildId, user.id);
      let premiumSince;
      if (null != member) {
        premiumSince = member.premiumSince;
      }
      tmp = null != premiumSince;
    }
    return Boolean(tmp);
  }, items1);
  let obj1 = channel(guildId[11]);
  let result = obj1.isRequestedToSpeakAll(rtsState);
  let obj2 = user(guildId[12]);
  const name = obj2.getName(guildId, channel.id, user);
  let tmp7 = blocked;
  if (!blocked) {
    tmp7 = ignored;
  }
  obj = {};
  const intl = channel(guildId[14]).intl;
  obj.accessibilityLabel = intl.formatToPlainString(channel(guildId[14]).t.QLMGhv, { name });
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
  obj1.size = channel(guildId[7]).AvatarSizes.LARGE;
  let faded = tmp7;
  if (tmp7) {
    faded = tmp.faded;
  }
  obj1.style = faded;
  const items3 = [callback(channel(guildId[7]).CutoutableAvatarImage, obj1), ];
  if (result) {
    obj2 = { rtsState };
    result = callback(RaisedHandIcon, obj2);
  }
  items3[1] = result;
  obj.children = items3;
  const items4 = [closure_6(View, obj), ];
  const obj3 = { style: items5 };
  items5 = [tmp.nameplateContainer];
  if (blocked) {
    blocked = callback(channel(guildId[16]).BlockedStatus, {});
  }
  const items6 = [blocked, , , ];
  if (ignored) {
    ignored = callback(channel(guildId[16]).IgnoredStatus, {});
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
    items6[2] = callback(channel(guildId[7]).LegacyText, obj4);
    if (stateFromStores) {
      const obj6 = { source: user(guildId[18]), size: channel(guildId[7]).Icon.Sizes.SMALL, color: user(guildId[5]).unsafe_rawColors.GUILD_BOOSTING_PINK };
      stateFromStores = callback(channel(guildId[7]).Icon, obj6);
    }
    items6[3] = stateFromStores;
    obj3.children = items6;
    items4[1] = closure_6(View, obj3);
    obj.children = items4;
    return tmp8(channel(guildId[13]).Pressable, obj);
  } else {
    const obj7 = {};
    const obj12 = channel(guildId[17]);
    const unsafe_rawColors = user(guildId[5]).unsafe_rawColors;
    obj7.color = channel(guildId[17]).isThemeDark(theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860;
    const isThemeDarkResult = channel(guildId[17]).isThemeDark(theme);
  }
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stage_channels/native/components/AudienceTile.tsx");

export default memoResult;
export const useAudienceTileStyles = styles;
export { getTileWidthStyle };
