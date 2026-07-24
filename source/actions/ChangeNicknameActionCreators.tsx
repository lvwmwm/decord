// Module ID: 8020
// Function ID: 63652
// Dependencies: [653, 507, 6691, 1212, 2]

// Module 8020
import { Endpoints } from "ME";

let result = require("trackInvite").fileFinishedImporting("actions/ChangeNicknameActionCreators.tsx");

export default {
  changeNickname(guildId, arg1, closure_4, nick) {
    const _require = arg1;
    let closure_1 = nick;
    const HTTP = _require(507).HTTP;
    obj = { url: Endpoints.GUILD_MEMBER_NICK(guildId, closure_4), body: obj, oldFormErrors: true };
    obj = { nick, rejectWithError: _require(507).rejectWithMigratedError() };
    const obj3 = _require(507);
    return HTTP.patch(obj).then((body) => {
      const nick = body.body.nick;
      nick(outer1_2[2]);
      if (null != nick) {
        if ("" !== nick) {
          const intl2 = callback(outer1_2[3]).intl;
          const obj = { nick };
          let result = intl2.formatToMarkdownString(callback(outer1_2[3]).t["gz+HRq"], obj);
        }
        tmp2(tmp3, result);
      }
      const intl = callback(outer1_2[3]).intl;
      result = intl.string(callback(outer1_2[3]).t.Vhpd9A);
    }, (status) => {
      if (403 === status.status) {
        const intl2 = callback(outer1_2[3]).intl;
        nick(outer1_2[2]).sendBotMessage(callback, intl2.formatToMarkdownString(callback(outer1_2[3]).t.Izf9jO, {}));
        const obj2 = nick(outer1_2[2]);
      } else {
        const intl = callback(outer1_2[3]).intl;
        nick(outer1_2[2]).sendBotMessage(callback, intl.string(callback(outer1_2[3]).t["5LO/Ss"]));
        const obj = nick(outer1_2[2]);
      }
    });
  }
};
