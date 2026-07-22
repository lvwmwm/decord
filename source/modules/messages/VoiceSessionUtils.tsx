// Module ID: 7741
// Function ID: 61506
// Name: getSortedVoiceSessionParticipants
// Dependencies: []
// Exports: getVoiceSessionMessageContent, useSortedVoiceSessionParticipants

// Module 7741 (getSortedVoiceSessionParticipants)
function getSortedVoiceSessionParticipants(channel_id) {
  const userAffinitiesMap = userAffinitiesMap.getUserAffinitiesMap();
  const tmp = function getVoiceSessionParticipants(call) {
    call = call.call;
    let reduced;
    if (null != call) {
      const participants = call.participants;
      reduced = participants.reduce((arg0, arg1) => {
        const user = user.getUser(arg1);
        let tmp2 = arg0;
        if (null != user) {
          tmp2 = arg0;
          if (user.id !== arg0.author.id) {
            const items = [];
            const arraySpreadResult = HermesBuiltin.arraySpread(arg0, 0);
            items[arraySpreadResult] = user;
            const sum = arraySpreadResult + 1;
            tmp2 = items;
          }
        }
        return tmp2;
      }, []);
    }
    if (null == reduced) {
      reduced = [];
    }
    return reduced;
  }(channel_id);
  return arg1(dependencyMap[4]).maybeSortByProbability(tmp, userAffinitiesMap, "VoiceSessionUtils - participants");
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/messages/VoiceSessionUtils.tsx");

export { getSortedVoiceSessionParticipants };
export const useSortedVoiceSessionParticipants = function useSortedVoiceSessionParticipants(author) {
  const tmp = function useVoiceSessionParticipants(author) {
    const items = [closure_6];
    const items1 = [author.author.id, author.call];
    return author(closure_2[5]).useStateFromStoresArray(items, () => {
      const call = arg0.call;
      let participants;
      if (null != call) {
        participants = call.participants;
      }
      if (null != participants) {
        const participants1 = arg0.call.participants;
        const mapped = participants1.map((arg0) => user.getUser(arg0));
        const found = mapped.filter((arg0) => null != arg0);
        let found1 = found.filter((id) => id.id !== author.author.id);
      } else {
        found1 = [];
      }
      return found1;
    }, items1);
  }(author);
  const arg1 = tmp;
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => userAffinitiesMap.getUserAffinitiesMap(), []);
  const importDefault = stateFromStores;
  const items1 = [tmp, stateFromStores];
  return React.useMemo(() => tmp(closure_2[4]).maybeSortByProbability(tmp, stateFromStores, "VoiceSessionUtils - participants"), items1);
};
export const getVoiceSessionMessageContent = function getVoiceSessionMessageContent(channel_id) {
  const callback = channel.getChannel(channel_id.channel_id);
  const tmp = importDefault(dependencyMap[6])(channel_id);
  let obj = callback(dependencyMap[7]);
  const messageAuthor = obj.getMessageAuthor(channel_id);
  const mapped = getSortedVoiceSessionParticipants(channel_id).map((user) => {
    const obj = { user, messageAuthor: callback(closure_2[7]).getUserAuthor(user, callback) };
    return obj;
  });
  if (null == tmp) {
    const intl = callback(dependencyMap[8]).intl;
    obj = { username: messageAuthor.nick, usernameOnClick: callback(dependencyMap[9]).identity };
    let formatToPlainStringResult = intl.formatToPlainString(callback(dependencyMap[8]).t.HzBfIN, obj);
  } else {
    const intl2 = callback(dependencyMap[8]).intl;
    obj = { userCount: mapped.length + 1, username: messageAuthor.nick, usernameOnClick: callback(dependencyMap[9]).identity };
    const first = mapped[0];
    let nick;
    if (null != first) {
      nick = first.messageAuthor.nick;
    }
    obj.username2 = nick;
    obj.username2OnClick = callback(dependencyMap[9]).identity;
    let nick1;
    if (null != mapped[1]) {
      nick1 = tmp6.messageAuthor.nick;
    }
    obj.username3 = nick1;
    obj.username3OnClick = callback(dependencyMap[9]).identity;
    obj.otherCount = mapped.length - 1;
    obj.duration = tmp;
    formatToPlainStringResult = intl2.formatToPlainString(callback(dependencyMap[8]).t.atbXuX, obj);
  }
  return formatToPlainStringResult;
};
