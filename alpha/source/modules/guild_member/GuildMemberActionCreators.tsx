// Module ID: 7409
// Function ID: 7410
// Name: GuildMemberActionCreators
// Dependencies: [5046, 1072, 7047, 572, 1282, 2]
// Exports: updateGuildSelfMember

// Module 7409 (GuildMemberActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import ImpersonateActionCreators from "ImpersonateActionCreators" /* 7047 */;
import ImpersonateStore from "ImpersonateStore" /* 5046 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
let result = size.fileFinishedImporting("modules/guild_member/GuildMemberActionCreators.tsx");

export function updateGuildSelfMember(guildId, memberOptions) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  if (ImpersonateStore.isFullServerPreview(guildId)) {
    const obj3 = { memberOptions };
    const obj4 = ImpersonateActionCreators;
    const result = obj4.updateImpersonatedData(guildId, obj3);
  } else {
    const obj5 = { type: "GUILD_MEMBER_UPDATE_LOCAL", guildId, roles: null, flags: null };
    ({ roles: obj2.roles, flags: obj2.flags } = memberOptions);
    const obj = DispatcherDefault;
    obj.dispatch(obj5);
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.SET_GUILD_MEMBER(guildId), body: memberOptions, oldFormErrors: flag || undefined, rejectWithError: false };
    const patch = HTTP.patch;
    return patch(request);
  }
}
