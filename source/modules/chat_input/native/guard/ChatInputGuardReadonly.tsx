// Module ID: 11489
// Function ID: 89424
// Name: sortChannelsByLastMessageId
// Dependencies: []

// Module 11489 (sortChannelsByLastMessageId)
function sortChannelsByLastMessageId(id, id2) {
  const obj = importDefault(dependencyMap[18]);
  return obj.compare(closure_8.lastMessageId(id2.id), closure_8.lastMessageId(id.id));
}
const isTextChannel = arg1(dependencyMap[1]).isTextChannel;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = arg1(dependencyMap[3]).GUILD_SELECTABLE_CHANNELS_KEY;
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
const TextAreaCta = arg1(dependencyMap[8]).TextAreaCta;
const importAllResult = importAll(dependencyMap[0]);
({ AnalyticEvents: closure_12, Permissions: closure_13 } = arg1(dependencyMap[9]));
const jsx = arg1(dependencyMap[10]).jsx;
const tmp2 = arg1(dependencyMap[9]);
const memoResult = importAllResult.memo(function ChatInputGuardReadonly(guildId) {
  let handlePress;
  let text;
  ({ text, handlePress } = function useNotice(guildId, channel) {
    let obj = guildId(stateFromStores[11]);
    const channelAction = obj.useMemberActionsForChannel(guildId, channel).channelAction;
    let obj1 = guildId(stateFromStores[11]);
    let channelId;
    if (null != channelAction) {
      channelId = channelAction.channelId;
    }
    let closure_1 = obj1.useNextMemberAction(guildId, channelId);
    let obj2 = guildId(stateFromStores[12]);
    const items = [stateFromStoresArray1];
    const stateFromStores = obj2.useStateFromStores(items, () => {
      let channelId;
      if (null != lib) {
        channelId = lib.channelId;
      }
      return stateFromStoresArray1.getChannel(channelId);
    });
    let obj3 = guildId(stateFromStores[12]);
    const items1 = [closure_5];
    const stateFromStoresArray = obj3.useStateFromStoresArray(items1, () => {
      const mapped = channels.getChannels(arg0)[closure_6].map((channel) => channel.channel);
      return mapped.sort(closure_15);
    });
    const items2 = [closure_7];
    const items3 = [stateFromStoresArray];
    const stateFromStoresArray1 = guildId(stateFromStores[12]).useStateFromStoresArray(items2, () => {
      const found = stateFromStoresArray.filter(arg0(stateFromStores[13]).isNotNullish);
      const found1 = found.filter((type) => callback(type.type));
      return found1.filter((channel) => closure_7.can(constants.SEND_MESSAGES, channel));
    }, items3);
    if (null != stateFromStores) {
      obj = {};
      const intl2 = guildId(stateFromStores[14]).intl;
      obj = { channelName: guildId(stateFromStores[15]).computeChannelName(stateFromStores, closure_10, closure_9) };
      obj.text = intl2.formatToPlainString(guildId(stateFromStores[14]).t.q1krfU, obj);
      obj.handlePress = function handlePress() {
        let obj = lib(stateFromStores[16]);
        obj = { cta_type: constants.CHANNEL_LINK };
        obj.trackWithMetadata(constants2.TEXT_AREA_CTA_CLICKED, obj);
        arg0(stateFromStores[17]).transitionToGuild(arg0, stateFromStores.id);
      };
      obj2 = obj;
      const obj11 = guildId(stateFromStores[15]);
    } else if (0 === stateFromStoresArray1.length) {
      obj1 = {};
      const intl = guildId(stateFromStores[14]).intl;
      obj1.text = intl.string(guildId(stateFromStores[14]).t.gHD/nZ);
      obj1.handlePress = function handlePress() {
        let obj = lib(stateFromStores[16]);
        obj = { cta_type: constants.CHANNEL_LIST };
        obj.trackWithMetadata(constants2.TEXT_AREA_CTA_CLICKED, obj);
        arg0(stateFromStores[17]).transitionToGuild(arg0, undefined);
      };
      obj2 = obj1;
    } else {
      obj2 = {};
      const intl3 = guildId(stateFromStores[14]).intl;
      obj3 = {};
      let str = "";
      if (null != stateFromStoresArray1[0]) {
        str = guildId(stateFromStores[15]).computeChannelName(stateFromStoresArray1[0], closure_10, closure_9);
        const obj6 = guildId(stateFromStores[15]);
      }
      obj3.channelName = str;
      obj2.text = intl3.formatToPlainString(guildId(stateFromStores[14]).t.q1krfU, obj3);
      obj2.handlePress = function handlePress() {
        let obj = lib(stateFromStores[16]);
        obj = { cta_type: constants.CHANNEL_LINK };
        obj.trackWithMetadata(constants2.TEXT_AREA_CTA_CLICKED, obj);
        arg0(stateFromStores[17]).transitionToGuild(arg0, stateFromStoresArray1[0].id);
      };
    }
    return obj2;
  }(guildId.guildId, guildId.channel));
  const obj = { type: "simple-action", actionOnPress: handlePress };
  const tmp = function useNotice(guildId, channel) {
    let obj = guildId(stateFromStores[11]);
    const channelAction = obj.useMemberActionsForChannel(guildId, channel).channelAction;
    let obj1 = guildId(stateFromStores[11]);
    let channelId;
    if (null != channelAction) {
      channelId = channelAction.channelId;
    }
    let closure_1 = obj1.useNextMemberAction(guildId, channelId);
    let obj2 = guildId(stateFromStores[12]);
    const items = [stateFromStoresArray1];
    const stateFromStores = obj2.useStateFromStores(items, () => {
      let channelId;
      if (null != lib) {
        channelId = lib.channelId;
      }
      return stateFromStoresArray1.getChannel(channelId);
    });
    let obj3 = guildId(stateFromStores[12]);
    const items1 = [closure_5];
    const stateFromStoresArray = obj3.useStateFromStoresArray(items1, () => {
      const mapped = channels.getChannels(arg0)[closure_6].map((channel) => channel.channel);
      return mapped.sort(closure_15);
    });
    const items2 = [closure_7];
    const items3 = [stateFromStoresArray];
    const stateFromStoresArray1 = guildId(stateFromStores[12]).useStateFromStoresArray(items2, () => {
      const found = stateFromStoresArray.filter(arg0(stateFromStores[13]).isNotNullish);
      const found1 = found.filter((type) => callback(type.type));
      return found1.filter((channel) => closure_7.can(constants.SEND_MESSAGES, channel));
    }, items3);
    if (null != stateFromStores) {
      obj = {};
      const intl2 = guildId(stateFromStores[14]).intl;
      obj = { channelName: guildId(stateFromStores[15]).computeChannelName(stateFromStores, closure_10, closure_9) };
      obj.text = intl2.formatToPlainString(guildId(stateFromStores[14]).t.q1krfU, obj);
      obj.handlePress = function handlePress() {
        let obj = lib(stateFromStores[16]);
        obj = { cta_type: constants.CHANNEL_LINK };
        obj.trackWithMetadata(constants2.TEXT_AREA_CTA_CLICKED, obj);
        arg0(stateFromStores[17]).transitionToGuild(arg0, stateFromStores.id);
      };
      obj2 = obj;
      const obj11 = guildId(stateFromStores[15]);
    } else if (0 === stateFromStoresArray1.length) {
      obj1 = {};
      const intl = guildId(stateFromStores[14]).intl;
      obj1.text = intl.string(guildId(stateFromStores[14]).t.gHD/nZ);
      obj1.handlePress = function handlePress() {
        let obj = lib(stateFromStores[16]);
        obj = { cta_type: constants.CHANNEL_LIST };
        obj.trackWithMetadata(constants2.TEXT_AREA_CTA_CLICKED, obj);
        arg0(stateFromStores[17]).transitionToGuild(arg0, undefined);
      };
      obj2 = obj1;
    } else {
      obj2 = {};
      const intl3 = guildId(stateFromStores[14]).intl;
      obj3 = {};
      let str = "";
      if (null != stateFromStoresArray1[0]) {
        str = guildId(stateFromStores[15]).computeChannelName(stateFromStoresArray1[0], closure_10, closure_9);
        const obj6 = guildId(stateFromStores[15]);
      }
      obj3.channelName = str;
      obj2.text = intl3.formatToPlainString(guildId(stateFromStores[14]).t.q1krfU, obj3);
      obj2.handlePress = function handlePress() {
        let obj = lib(stateFromStores[16]);
        obj = { cta_type: constants.CHANNEL_LINK };
        obj.trackWithMetadata(constants2.TEXT_AREA_CTA_CLICKED, obj);
        arg0(stateFromStores[17]).transitionToGuild(arg0, stateFromStoresArray1[0].id);
      };
    }
    return obj2;
  }(guildId.guildId, guildId.channel);
  const intl = arg1(dependencyMap[14]).intl;
  obj.actionLabel = intl.string(arg1(dependencyMap[14]).t.9cs5LM);
  obj.message = text;
  return jsx(importDefault(dependencyMap[19]), obj);
});
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardReadonly.tsx");

export default memoResult;
