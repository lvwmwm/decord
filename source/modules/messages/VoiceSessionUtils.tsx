// Module ID: 7747
// Function ID: 61543
// Name: getSortedVoiceSessionParticipants
// Dependencies: [31, 6902, 1348, 1849, 7748, 566, 7667, 4360, 1212, 22, 2]
// Exports: getVoiceSessionMessageContent, useSortedVoiceSessionParticipants

// Module 7747 (getSortedVoiceSessionParticipants)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";

let require = arg1;
function getSortedVoiceSessionParticipants(channel_id) {
  userAffinitiesMap = userAffinitiesMap.getUserAffinitiesMap();
  const tmp = (function getVoiceSessionParticipants(call) {
    let closure_0 = call;
    call = call.call;
    let reduced;
    if (null != call) {
      const participants = call.participants;
      reduced = participants.reduce((arg0, arg1) => {
        const user = outer2_6.getUser(arg1);
        let tmp2 = arg0;
        if (null != user) {
          tmp2 = arg0;
          if (user.id !== author.author.id) {
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
  })(channel_id);
  return require(7748) /* maybeSortByProbability */.maybeSortByProbability(tmp, userAffinitiesMap, "VoiceSessionUtils - participants");
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/VoiceSessionUtils.tsx");

export { getSortedVoiceSessionParticipants };
export const useSortedVoiceSessionParticipants = function useSortedVoiceSessionParticipants(author) {
  const tmp = (function useVoiceSessionParticipants(author) {
    const items = [outer1_6];
    const items1 = [author.author.id, author.call];
    return author(outer1_2[5]).useStateFromStoresArray(items, () => {
      const call = closure_0.call;
      let participants;
      if (null != call) {
        participants = call.participants;
      }
      if (null != participants) {
        const participants1 = closure_0.call.participants;
        const mapped = participants1.map((arg0) => outer3_6.getUser(arg0));
        const found = mapped.filter((arg0) => null != arg0);
        let found1 = found.filter((id) => id.id !== outer1_0.author.id);
      } else {
        found1 = [];
      }
      return found1;
    }, items1);
  })(author);
  const require = tmp;
  let items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_4.getUserAffinitiesMap(), []);
  let items1 = [tmp, stateFromStores];
  return React.useMemo(() => tmp(outer1_2[4]).maybeSortByProbability(tmp, stateFromStores, "VoiceSessionUtils - participants"), items1);
};
export const getVoiceSessionMessageContent = function getVoiceSessionMessageContent(channel_id) {
  const _require = channel.getChannel(channel_id.channel_id);
  const tmp = importDefault(7667)(channel_id);
  let obj = _require(4360);
  const messageAuthor = obj.getMessageAuthor(channel_id);
  const mapped = getSortedVoiceSessionParticipants(channel_id).map((user) => {
    const obj = { user, messageAuthor: callback(outer1_2[7]).getUserAuthor(user, callback) };
    return obj;
  });
  if (null == tmp) {
    const intl = _require(1212).intl;
    obj = { username: messageAuthor.nick, usernameOnClick: _require(22).identity };
    let formatToPlainStringResult = intl.formatToPlainString(_require(1212).t.HzBfIN, obj);
  } else {
    const intl2 = _require(1212).intl;
    obj = { userCount: mapped.length + 1, username: messageAuthor.nick, usernameOnClick: _require(22).identity };
    const first = mapped[0];
    let nick;
    if (null != first) {
      nick = first.messageAuthor.nick;
    }
    obj.username2 = nick;
    obj.username2OnClick = _require(22).identity;
    let nick1;
    if (null != mapped[1]) {
      nick1 = tmp6.messageAuthor.nick;
    }
    obj.username3 = nick1;
    obj.username3OnClick = _require(22).identity;
    obj.otherCount = mapped.length - 1;
    obj.duration = tmp;
    formatToPlainStringResult = intl2.formatToPlainString(_require(1212).t.atbXuX, obj);
  }
  return formatToPlainStringResult;
};
