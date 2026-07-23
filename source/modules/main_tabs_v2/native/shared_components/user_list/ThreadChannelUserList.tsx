// Module ID: 15381
// Function ID: 117386
// Dependencies: [31, 1348, 1917, 1838, 1849, 653, 33, 5464, 566, 15382, 8832, 572, 5688, 3969, 8492, 8825, 2]

// Module 15381
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import { RelationshipTypes } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo(function ThreadChannelUserList(channelId) {
  let disableBottomSafeZone;
  let disableStickySections;
  let insetEnd;
  let listStyleOverride;
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  const onUserPress = channelId.onUserPress;
  ({ disableStickySections, listStyleOverride, disableBottomSafeZone, insetEnd } = channelId);
  const analyticsLocations = guildId(onUserPress[7])().analyticsLocations;
  let obj = channelId(onUserPress[8]);
  const items = [_createForOfIteratorHelperLoose];
  const stateFromStores = obj.useStateFromStores(items, () => tmp3.getGuild(guildId));
  const threadMemberListSections = channelId(onUserPress[9]).useThreadMemberListSections(channelId, stateFromStores);
  const obj2 = channelId(onUserPress[9]);
  const items1 = [threadMemberListSections];
  const stateFromStores1 = channelId(onUserPress[8]).useStateFromStores(items1, () => threadMemberListSections.getChannel(channelId));
  const tmp3 = guildId(onUserPress[10])();
  _createForOfIteratorHelperLoose = tmp3;
  let closure_7 = analyticsLocations.useRef(0);
  let closure_8 = analyticsLocations.useRef(0);
  const items2 = [channelId, guildId, tmp3];
  const memo = analyticsLocations.useMemo(() => guildId(onUserPress[11])(() => {
    if (null != threadMemberListSections.getChannel(outer1_0)) {
      let obj = channelId(onUserPress[12]);
      obj = { guildId: outer1_1, channelId: outer1_0, y: outer1_8.current, height: outer1_7.current, rowHeight: outer1_6 };
      const result = obj.subscribeChannelDimensions(obj);
    }
  }, 50), items2);
  const items3 = [memo];
  const items4 = [memo];
  const callback = analyticsLocations.useCallback((nativeEvent) => {
    closure_7.current = nativeEvent.nativeEvent.layout.height;
    memo();
  }, items3);
  const items5 = [stateFromStores1, memo];
  const callback1 = analyticsLocations.useCallback((nativeEvent) => {
    closure_8.current = nativeEvent.nativeEvent.contentOffset.y;
    memo();
  }, items4);
  const effect = analyticsLocations.useEffect(() => {
    if (null != stateFromStores1) {
      memo();
    }
  }, items5);
  const items6 = [threadMemberListSections];
  const items7 = [threadMemberListSections, guildId, onUserPress, analyticsLocations, channelId];
  const callback2 = analyticsLocations.useCallback((arg0) => {
    if (null != threadMemberListSections[arg0]) {
      const label = tmp.label;
      if (null != label) {
        if (0 !== length) {
          let obj = { type: "section" };
          obj = {};
          const _HermesInternal = HermesInternal;
          obj.title = "" + label + " \u2014 " + length;
          obj.props = obj;
          return obj;
        }
      }
    }
  }, items6);
  const callback3 = analyticsLocations.useCallback((arg0, arg1) => {
    const userIds = threadMemberListSections[arg0].userIds;
    user = user.getUser(userIds[arg1]);
    if (null != user) {
      const member = stateFromStores1.getMember(guildId, user.id);
    }
    if (null != user) {
      let obj = { type: "user" };
      obj = { type: constants.NONE, user, guildId };
      let nick;
      if (null != member) {
        nick = member.nick;
      }
      if (null == nick) {
        nick = guildId(onUserPress[13]).getGlobalName(user);
        const obj5 = guildId(onUserPress[13]);
      }
      obj.nickname = nick;
      let colorString;
      if (null != member) {
        colorString = member.colorString;
      }
      obj.usernameColor = colorString;
      let colorStrings;
      if (null != member) {
        colorStrings = member.colorStrings;
      }
      obj.roleColors = colorStrings;
      obj.isNameplatedRow = true;
      obj.canShowDisplayNameStylesFont = true;
      obj.onPress = function onPress(id) {
        if (null != outer1_2) {
          outer1_2();
        }
        guildId(onUserPress[14])({ userId: id.id, sourceAnalyticsLocations: outer1_3, channelId: outer1_0 });
      };
      obj.start = tmp5;
      obj.end = tmp6;
      obj.props = obj;
    } else {
      obj = { type: "placeholder" };
      const obj1 = { start: tmp5, end: tmp6 };
      obj.props = obj1;
    }
    return obj;
  }, items7);
  obj = { sections: threadMemberListSections.map((userIds) => userIds.userIds.length), getItemProps: callback3, getSectionProps: callback2, onLayout: callback, onScroll: callback1, disableStickySections, disableBackgroundOverlay: true, listStyleOverride, disableBottomSafeZone, insetEnd };
  return memo(channelId(onUserPress[15]).UsersFastList, obj);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/ThreadChannelUserList.tsx");

export default memoResult;
