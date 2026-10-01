// Module ID: 7514
// Function ID: 7515
// Name: VoiceSessionUtils
// Dependencies: [19, 7072, 2045, 1372, 7515, 504, 7422, 5083, 1115, 12, 2]
// Exports: getSortedVoiceSessionParticipants, getVoiceSessionMessageContent, useSortedVoiceSessionParticipants

// Module 7514 (VoiceSessionUtils)
import useMessageAuthor from "useMessageAuthor" /* 5083 */;
import getHumanizedCallDurationDefault from "getHumanizedCallDuration" /* 7422 */;
import maybeSortByProbability from "maybeSortByProbability" /* 7515 */;
import react from "react" /* 19 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7072 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f113778 = (acc, item) => {
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

export const getSortedVoiceSessionParticipants = function getSortedVoiceSessionParticipants(message) {
  _require = message;
  const call = message.call;
  let reduced;
  if (call != null) {
    const participants = call.participants;
    reduced = participants.reduce(f113778, []);
  }
  if (reduced == null) {
    reduced = [];
  }
  const userAffinitiesMap = UserAffinitiesV2Store.getUserAffinitiesMap();
  const obj = require("maybeSortByProbability");
  return obj.maybeSortByProbability(reduced, userAffinitiesMap, "VoiceSessionUtils - participants");
};
export const useSortedVoiceSessionParticipants = function useSortedVoiceSessionParticipants(author) {
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
};
export const getVoiceSessionMessageContent = function getVoiceSessionMessageContent(channel_id) {
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
    reduced = participants.reduce(f113778, []);
  }
  if (reduced == null) {
    reduced = [];
  }
  const userAffinitiesMap = UserAffinitiesV2Store.getUserAffinitiesMap();
  const tmp3Result = tmp3(7515);
  const result = tmp3Result.maybeSortByProbability(reduced, userAffinitiesMap, "VoiceSessionUtils - participants");
  const mapped = result.map((user) => {
    let obj2;
    const obj = { user, messageAuthor: obj2.getUserAuthor(user, closure_0) };
    obj2 = useMessageAuthor;
    return obj;
  });
  if (null == tmp2) {
    const intl = tmp3(1115).intl;
    const formatToPlainString = intl.formatToPlainString;
    let obj2 = { username: messageAuthor.nick, usernameOnClick: tmp3(12).identity };
    const HzBfIN = tmp3(1115).t.HzBfIN;
    formatToPlainStringResult = formatToPlainString(HzBfIN, obj2);
  } else {
    const intl2 = tmp3(1115).intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const obj3 = { userCount: mapped.length + 1, username: messageAuthor.nick, usernameOnClick: tmp3(12).identity, username2: nick, username2OnClick: tmp3(12).identity, username3: nick1, username3OnClick: tmp3(12).identity, otherCount: mapped.length - 1, duration: tmp2 };
    const atbXuX = tmp3(1115).t.atbXuX;
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
};
