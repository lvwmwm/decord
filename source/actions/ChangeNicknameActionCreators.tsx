// Module ID: 7926
// Function ID: 63280
// Dependencies: []

// Module 7926
const Endpoints = require(dependencyMap[0]).Endpoints;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("actions/ChangeNicknameActionCreators.tsx");

export default {
  changeNickname(guildId, arg1, closure_4, nick) {
    const require = arg1;
    const importDefault = nick;
    const HTTP = require(dependencyMap[1]).HTTP;
    let obj = { url: Endpoints.GUILD_MEMBER_NICK(guildId, closure_4), body: obj, oldFormErrors: true };
    obj = { nick, rejectWithError: require(dependencyMap[1]).rejectWithMigratedError() };
    const obj3 = require(dependencyMap[1]);
    return HTTP.patch(obj).then((body) => {
      const arg3 = body.body.nick;
      arg3(closure_2[2]);
      if (null != arg3) {
        if ("" !== arg3) {
          const intl2 = arg1(closure_2[3]).intl;
          const obj = { nick: arg3 };
          let result = intl2.formatToMarkdownString(arg1(closure_2[3]).t.gz+HRq, obj);
        }
        tmp2(tmp3, result);
      }
      const intl = arg1(closure_2[3]).intl;
      result = intl.string(arg1(closure_2[3]).t.Vhpd9A);
    }, (status) => {
      if (403 === status.status) {
        const intl2 = arg1(closure_2[3]).intl;
        arg3(closure_2[2]).sendBotMessage(arg1, intl2.formatToMarkdownString(arg1(closure_2[3]).t.Izf9jO, {}));
        const obj2 = arg3(closure_2[2]);
      } else {
        const intl = arg1(closure_2[3]).intl;
        arg3(closure_2[2]).sendBotMessage(arg1, intl.string(arg1(closure_2[3]).t.5LO/Ss));
        const obj = arg3(closure_2[2]);
      }
    });
  }
};
