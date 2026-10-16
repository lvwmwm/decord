// Module ID: 7032
// Function ID: 7033
// Name: GuildMemberActionCreators
// Dependencies: [2121, 1087, 6352, 584, 1297, 2]
// Exports: updateGuildSelfMember

// Module 7032 (GuildMemberActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1087 */;
import HTTPUtils from "HTTPUtils" /* 1297 */;
import ImpersonateActionCreators from "ImpersonateActionCreators" /* 6352 */;
import ImpersonateStore from "ImpersonateStore" /* 2121 */;
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
