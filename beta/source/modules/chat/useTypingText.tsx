// Module ID: 11461
// Function ID: 11462
// Name: useTypingText
// Dependencies: [32, 1372, 504, 4988, 1115, 2]
// Exports: default

// Module 11461 (useTypingText)
import NicknameUtilsDefault from "NicknameUtils" /* 4988 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/chat/useTypingText.tsx");

export default function useTypingText(channelId) {
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  const typingUserIds = channelId.typingUserIds;
  let tmp2 = typingUserIds;
  let obj = channelId(typingUserIds[2]);
  let items = [UserStore];
  const items1 = [channelId, guildId, typingUserIds];
  const tmp3 = _slicedToArray(obj.useStateFromStoresArray(items, () => {
    const items = [];
    const tmp2 = typingUserIds[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let user = UserStore.getUser(tmp3);
      if (null != user) {
        let push = items.push;
        let obj = NicknameUtilsDefault;
        let arr = push(obj.getName(guildId, channelId, tmp6));
      }
      continue;
    }
    return items;
  }, items1), 4);
  [tmp4, tmp5, tmp6] = tmp3;
  let tmp8 = null;
  if (null != tmp4) {
    let formatResult;
    if (null == tmp5) {
      const intl4 = tmp(tmp2[4]).intl;
      const obj2 = { a: tmp4 };
      formatResult = intl4.format(tmp(tmp2[4]).t.lJ9sZX, obj2);
    } else if (null == tmp6) {
      const intl3 = tmp(tmp2[4]).intl;
      const obj3 = { a: tmp4, b: tmp5 };
      formatResult = intl3.format(tmp(tmp2[4]).t.rB0CUa, obj3);
    } else if (null == tmp7) {
      const intl2 = tmp(tmp2[4]).intl;
      const obj4 = { a: tmp4, b: tmp5, c: tmp6 };
      formatResult = intl2.format(tmp(tmp2[4]).t.StKThj, obj4);
    } else {
      const intl = tmp(tmp2[4]).intl;
      formatResult = intl.string(tmp(tmp2[4]).t.uVDhqZ);
    }
    tmp8 = formatResult;
  }
  return tmp8;
};
