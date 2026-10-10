// Module ID: 6809
// Function ID: 6810
// Name: GuildMemberActionCreators
// Dependencies: [2118, 1085, 6127, 584, 1295, 2]
// Exports: updateGuildSelfMember

// Module 6809 (GuildMemberActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1295 */;
import ImpersonateActionCreators from "ImpersonateActionCreators" /* 6127 */;
import ImpersonateStore from "ImpersonateStore" /* 2118 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
let result = size.fileFinishedImporting("modules/guild_member/GuildMemberActionCreators.tsx");

export const updateGuildSelfMember = function updateGuildSelfMember(guildId, memberOptions) {
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
};
