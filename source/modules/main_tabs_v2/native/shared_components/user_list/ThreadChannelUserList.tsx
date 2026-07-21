// Module ID: 15253
// Function ID: 115135
// Dependencies: []

// Module 15253
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const RelationshipTypes = arg1(dependencyMap[5]).RelationshipTypes;
const jsx = arg1(dependencyMap[6]).jsx;
const memoResult = importAllResult.memo(function ThreadChannelUserList(channelId) {
  let disableBottomSafeZone;
  let disableStickySections;
  let insetEnd;
  let listStyleOverride;
  channelId = channelId.channelId;
  const arg1 = channelId;
  const guildId = channelId.guildId;
  const importDefault = guildId;
  const onUserPress = channelId.onUserPress;
  const dependencyMap = onUserPress;
  ({ disableStickySections, listStyleOverride, disableBottomSafeZone, insetEnd } = channelId);
  const analyticsLocations = importDefault(dependencyMap[7])().analyticsLocations;
  let obj = arg1(dependencyMap[8]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => tmp3.getGuild(guildId));
  const threadMemberListSections = arg1(dependencyMap[9]).useThreadMemberListSections(channelId, stateFromStores);
  let closure_4 = threadMemberListSections;
  const obj2 = arg1(dependencyMap[9]);
  const items1 = [closure_4];
  const stateFromStores1 = arg1(dependencyMap[8]).useStateFromStores(items1, () => threadMemberListSections.getChannel(channelId));
  let closure_5 = stateFromStores1;
  const tmp3 = importDefault(dependencyMap[10])();
  closure_6 = tmp3;
  let closure_7 = importAllResult.useRef(0);
  let closure_8 = importAllResult.useRef(0);
  const items2 = [channelId, guildId, tmp3];
  const memo = importAllResult.useMemo(() => guildId(onUserPress[11])(() => {
    if (null != channel.getChannel(callback)) {
      let obj = callback(closure_2[12]);
      obj = { guildId: closure_1, channelId: callback, y: ref2.current, height: ref.current, rowHeight: closure_6 };
      const result = obj.subscribeChannelDimensions(obj);
    }
  }, 50), items2);
  const jsx = memo;
  const items3 = [memo];
  const items4 = [memo];
  const callback = importAllResult.useCallback((nativeEvent) => {
    closure_7.current = nativeEvent.nativeEvent.layout.height;
    memo();
  }, items3);
  const items5 = [stateFromStores1, memo];
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    closure_8.current = nativeEvent.nativeEvent.contentOffset.y;
    memo();
  }, items4);
  const effect = importAllResult.useEffect(() => {
    if (null != stateFromStores1) {
      memo();
    }
  }, items5);
  const items6 = [threadMemberListSections];
  const items7 = [threadMemberListSections, guildId, onUserPress, analyticsLocations, channelId];
  const callback2 = importAllResult.useCallback((arg0) => {
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
  const callback3 = importAllResult.useCallback((arg0, arg1) => {
    const userIds = threadMemberListSections[arg0].userIds;
    const user = user.getUser(userIds[arg1]);
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
        if (null != callback2) {
          callback2();
        }
        callback(callback2[14])({ userId: id.id, sourceAnalyticsLocations: closure_3, channelId: closure_0 });
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
  return jsx(arg1(dependencyMap[15]).UsersFastList, obj);
});
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/ThreadChannelUserList.tsx");

export default memoResult;
