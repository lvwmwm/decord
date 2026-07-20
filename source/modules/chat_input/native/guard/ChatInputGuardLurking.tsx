// Module ID: 11470
// Function ID: 89344
// Dependencies: [956301319, 2701131783, 2919235598, 3808428034, 33554452, 2080374784, 31, 1194, 1917, 3744, 33, 566, 3762]

// Module 11470
const importAllResult = importAll(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
const TextAreaCta = arg1(dependencyMap[3]).TextAreaCta;
({ AnalyticEvents: closure_8, JoinGuildSources: closure_9 } = arg1(dependencyMap[4]));
const jsx = arg1(dependencyMap[5]).jsx;
const tmp2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function ChatInputGuardLurking(channel) {
  let isLurking;
  let lurkingSource;
  channel = channel.channel;
  const arg1 = channel;
  const guildId = channel.getGuildId();
  const importDefault = guildId;
  let obj = arg1(dependencyMap[6]);
  const items = [closure_5];
  const items1 = [guildId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = {};
    let isLurkingResult = null != guildId;
    if (isLurkingResult) {
      isLurkingResult = store.isLurking(guildId);
    }
    obj.isLurking = isLurkingResult;
    obj.lurkingSource = store.getLurkingSourceForGuild(guildId);
    return obj;
  }, items1);
  ({ isLurking, lurkingSource } = stateFromStoresObject);
  const items2 = [guildId, channel.id];
  const callback = importAllResult.useCallback(() => {
    const history = channel(closure_3[7]).getHistory();
    history.goBack();
  }, []);
  const items3 = [guildId];
  const callback1 = importAllResult.useCallback(() => {
    if (null != guildId) {
      let obj = guildId(closure_3[8]);
      obj = { cta_type: constants.FOLLOW_ANNOUNCEMENT };
      obj.trackWithMetadata(constants2.TEXT_AREA_CTA_CLICKED, obj);
      const result = channel(closure_3[9]).showChannelFollowingActionSheet(channel.id, guildId);
      const obj3 = channel(closure_3[9]);
    }
  }, items2);
  const callback2 = importAllResult.useCallback(() => {
    if (null != guildId) {
      const lurkingSourceForGuild = store.getLurkingSourceForGuild(guildId);
      let type;
      if (null != lurkingSourceForGuild) {
        type = lurkingSourceForGuild.type;
      }
      if (type === constants3.DIRECTORY_ENTRY) {
        const channel = channel.getChannel(lurkingSourceForGuild.directoryChannelId);
        if (null != channel) {
          const guildId = channel.getGuildId();
          const result = channel(closure_3[10]).setHubProgressActionComplete(guildId, channel(closure_3[11]).HubProgressStep.JOIN_GUILD);
          const obj2 = channel(closure_3[10]);
        }
      }
      const result1 = callback(closure_3[12]).trackGuildJoinClicked(guildId);
      const obj3 = callback(closure_3[12]);
      let obj = { cta_type: constants.JOIN_GUILD };
      guildId(closure_3[8]).trackWithMetadata(constants2.TEXT_AREA_CTA_CLICKED, obj);
      const obj4 = guildId(closure_3[8]);
      obj = { source: constants3.CHAT_INPUT_BLOCKER };
      guildId(closure_3[13]).joinGuild(guildId, obj);
      const obj6 = guildId(closure_3[13]);
    }
  }, items3);
  let type;
  if (null != lurkingSource) {
    type = lurkingSource.type;
  }
  if (type === constants.DIRECTORY_ENTRY) {
    obj = { type: "button-action" };
    const intl6 = arg1(dependencyMap[15]).intl;
    obj.message = intl6.string(arg1(dependencyMap[15]).t.G42YmG);
    const intl7 = arg1(dependencyMap[15]).intl;
    obj.buttonSecondaryText = intl7.string(arg1(dependencyMap[15]).t.GlKb5i);
    obj.buttonSecondaryOnPress = callback;
    const intl8 = arg1(dependencyMap[15]).intl;
    obj.buttonPrimaryText = intl8.string(arg1(dependencyMap[15]).t.RLch70);
    obj.buttonPrimaryOnPress = callback2;
    let tmp23Result = jsx(importDefault(dependencyMap[14]), obj);
    const tmp21 = importDefault(dependencyMap[14]);
  } else {
    if (channel.isReadonlyAnnouncementsChannel) {
      obj = { type: "button-action" };
      const intl3 = arg1(dependencyMap[15]).intl;
      obj.message = intl3.string(arg1(dependencyMap[15]).t.Hl0Mqh);
      let stringResult;
      if (isLurking) {
        const intl4 = arg1(dependencyMap[15]).intl;
        stringResult = intl4.string(arg1(dependencyMap[15]).t.VJlc0S);
      }
      obj.buttonSecondaryText = stringResult;
      let tmp14;
      if (isLurking) {
        tmp14 = callback2;
      }
      obj.buttonSecondaryOnPress = tmp14;
      const intl5 = arg1(dependencyMap[15]).intl;
      obj.buttonPrimaryText = intl5.string(arg1(dependencyMap[15]).t.3aOv+h);
      obj.buttonPrimaryOnPress = callback1;
      let obj1 = obj;
    } else {
      obj1 = { type: "button-action" };
      const intl = arg1(dependencyMap[15]).intl;
      obj1.message = intl.string(arg1(dependencyMap[15]).t.G42YmG);
      const intl2 = arg1(dependencyMap[15]).intl;
      obj1.buttonPrimaryText = intl2.string(arg1(dependencyMap[15]).t.RLch70);
      obj1.buttonPrimaryOnPress = callback2;
    }
    tmp23Result = jsx(importDefault(dependencyMap[14]), obj1);
    const tmp23 = jsx;
    const tmp26 = importDefault(dependencyMap[14]);
  }
  return tmp23Result;
});
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardLurking.tsx");

export default memoResult;
