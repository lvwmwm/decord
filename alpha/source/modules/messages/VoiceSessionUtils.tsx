// Module ID: 8538
// Function ID: 8539
// Name: VoiceSessionUtils
// Dependencies: [19, 7801, 4863, 1383, 8539, 504, 8437, 6438, 1113, 12, 2]
// Exports: getSortedVoiceSessionParticipants, getVoiceSessionMessageContent, useSortedVoiceSessionParticipants

// Module 8538 (VoiceSessionUtils)
import useMessageAuthor from "useMessageAuthor" /* 6438 */;
import getHumanizedCallDurationDefault from "getHumanizedCallDuration" /* 8437 */;
import maybeSortByProbability from "maybeSortByProbability" /* 8539 */;
import react from "react" /* 19 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7801 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import UserStore from "UserStore" /* 1383 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f124623 = (acc, item) => {
  user = user.getUser(item);
  let tmp3 = acc;
  if (null != user) {
    tmp3 = acc;
    if (user.id !== author.author.id) {
      const items = [];
      items[HermesBuiltin.arraySpread(items, acc, 0)] = user;
      tmp3 = items;
    }
  }
  return tmp3;
};
let result = size.fileFinishedImporting("modules/messages/VoiceSessionUtils.tsx");

export function getSortedVoiceSessionParticipants(message) {
  _require = message;
  const call = message.call;
  let reduced;
  if (call != null) {
    const participants = call.participants;
    reduced = participants.reduce(f124623, []);
  }
  if (reduced == null) {
    reduced = [];
  }
  const userAffinitiesMap = UserAffinitiesV2Store.getUserAffinitiesMap();
  const obj = require("maybeSortByProbability");
  return obj.maybeSortByProbability(reduced, userAffinitiesMap, "VoiceSessionUtils - participants");
}
export function useSortedVoiceSessionParticipants(author) {
  let stateFromStoresArray;
  let userAffinitiesMap;
  let closure_0 = author;
  let obj = stateFromStoresArray(504);
  const items = [UserStore];
  const items1 = [author.author.id, author.call];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    let found1;
    let user;
    const call = author.call;
    let participants;
    const tmp = author;
    if (call != null) {
      participants = call.participants;
    }
    if (null != participants) {
      const participants1 = tmp.call.participants;
      const mapped = participants1.map((item) => user.getUser(item));
      const found = mapped.filter((item) => null != item);
      found1 = found.filter((id) => id.id !== author.author.id);
    } else {
      found1 = [];
    }
    return found1;
  }, items1);
  const items2 = [UserAffinitiesV2Store];
  const obj2 = stateFromStoresArray(504);
  const stateFromStores = obj2.useStateFromStores(items2, () => userAffinitiesMap.getUserAffinitiesMap(), []);
  const items3 = [stateFromStoresArray, stateFromStores];
  return react.useMemo(() => {
    const obj = maybeSortByProbability;
    return obj.maybeSortByProbability(stateFromStoresArray, stateFromStores, "VoiceSessionUtils - participants");
  }, items3);
}
export function getVoiceSessionMessageContent(channel_id) {
  let closure_0;
  let formatToPlainStringResult;
  let nick;
  let nick1;
  _require = ChannelStore.getChannel(channel_id.channel_id);
  const tmp2 = getHumanizedCallDurationDefault(channel_id);
  let tmp3 = _require;
  let obj = require("useMessageAuthor");
  const messageAuthor = obj.getMessageAuthor(channel_id);
  _require = channel_id;
  const call = channel_id.call;
  let reduced;
  if (call != null) {
    const participants = call.participants;
    reduced = participants.reduce(f124623, []);
  }
  if (reduced == null) {
    reduced = [];
  }
  const userAffinitiesMap = UserAffinitiesV2Store.getUserAffinitiesMap();
  const tmp3Result = tmp3(8539);
  const result = tmp3Result.maybeSortByProbability(reduced, userAffinitiesMap, "VoiceSessionUtils - participants");
  const mapped = result.map((user) => {
    let obj2;
    const obj = { user, messageAuthor: obj2.getUserAuthor(user, closure_0) };
    obj2 = useMessageAuthor;
    return obj;
  });
  if (null == tmp2) {
    const intl = tmp3(1113).intl;
    const formatToPlainString = intl.formatToPlainString;
    let obj2 = { username: messageAuthor.nick, usernameOnClick: tmp3(12).identity };
    const HzBfIN = tmp3(1113).t.HzBfIN;
    formatToPlainStringResult = formatToPlainString(HzBfIN, obj2);
  } else {
    const intl2 = tmp3(1113).intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const obj3 = { userCount: mapped.length + 1, username: messageAuthor.nick, usernameOnClick: tmp3(12).identity, username2: nick, username2OnClick: tmp3(12).identity, username3: nick1, username3OnClick: tmp3(12).identity, otherCount: mapped.length - 1, duration: tmp2 };
    const atbXuX = tmp3(1113).t.atbXuX;
    const first = mapped[0];
    nick = undefined;
    if (first != null) {
      nick = first.messageAuthor.nick;
    }
    nick1 = undefined;
    if (mapped[1] != null) {
      nick1 = tmp7.messageAuthor.nick;
    }
    formatToPlainStringResult = formatToPlainString2(atbXuX, obj3);
  }
  return formatToPlainStringResult;
}
