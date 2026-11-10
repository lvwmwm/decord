// Module ID: 8491
// Function ID: 8492
// Name: UnlinkedGamePlayersSystemMessage
// Dependencies: [32, 1072, 8492, 8493, 8495, 1113, 8497, 2]
// Exports: createUnlinkedGamePlayersSystemMessage

// Module 8491 (UnlinkedGamePlayersSystemMessage)
import Constants from "Constants" /* 1072 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8493 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8495 */;
import createCommonMessageDefault from "createCommonMessage" /* 8497 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const MessageTypes = Constants.MessageTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/UnlinkedGamePlayersSystemMessage.tsx");

export function createUnlinkedGamePlayersSystemMessage(roleStyle, unlinkedGamePlayerPlaceholders) {
  let formatToPartsResult;
  let onClick;
  let tmp4;
  let tmp5;
  roleStyle = roleStyle.roleStyle;
  let obj = roleStyle(8492);
  const firstMessagePerAuthor = obj.getFirstMessagePerAuthor(unlinkedGamePlayerPlaceholders);
  const mapped = firstMessagePerAuthor.map((message) => {
    const obj = useAuthorWithProcessedColor;
    const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
    const obj2 = { name: messageAuthorWithProcessedColor.nick, onClick: formatUsernameOnClickDefault(obj3) };
    return obj2;
  });
  [tmp4, tmp5] = mapped;
  _slicedToArray(mapped, 2);
  if (mapped.length <= 1) {
    const intl2 = tmp(1113).intl;
    const formatToParts = intl2.formatToParts;
    let name;
    const DbQxMP = tmp(1113).t.DbQxMP;
    if (tmp4 != null) {
      name = tmp4.name;
    }
    const obj3 = { a: name, aOnClick: onClick, count: unlinkedGamePlayerPlaceholders.length };
    onClick = undefined;
    if (tmp4 != null) {
      onClick = tmp4.onClick;
    }
    formatToPartsResult = formatToParts(DbQxMP, obj3);
  } else if (mapped.length <= roleStyle(8492).MAX_NAMED_PLAYERS) {
    const intl = tmp(1113).intl;
    const obj4 = { a: null, aOnClick: null, b: null, bOnClick: null };
    ({ name: obj2.a, onClick: obj2.aOnClick } = tmp4);
    ({ name: obj2.b, onClick: obj2.bOnClick } = tmp5);
    formatToPartsResult = intl.formatToParts(tmp(1113).t.Me666b, obj4);
  } else {
    const intl3 = tmp(1113).intl;
    const formatToParts2 = intl3.formatToParts;
    ({ name: obj5.a, onClick: obj5.aOnClick } = tmp4);
    ({ name: obj5.b, onClick: obj5.bOnClick } = tmp5);
    const obj9 = { a: null, aOnClick: null, b: null, bOnClick: null, count: mapped.length - roleStyle(8492).MAX_NAMED_PLAYERS };
    const Mb0AX6 = tmp(1113).t.Mb0AX6;
    formatToPartsResult = formatToParts2(Mb0AX6, obj9);
  }
  const obj10 = { content: formatToPartsResult, type: MessageTypes.IN_GAME_MESSAGE_NUX };
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj10;
}
