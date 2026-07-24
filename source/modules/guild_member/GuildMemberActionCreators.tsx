// Module ID: 5080
// Function ID: 44215
// Name: updateGuildSelfMember
// Dependencies: [1909, 653, 5064, 686, 507, 2]
// Exports: updateGuildSelfMember

// Module 5080 (updateGuildSelfMember)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Endpoints } from "ME";

const require = arg1;
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_member/GuildMemberActionCreators.tsx");

export const updateGuildSelfMember = function updateGuildSelfMember(outer1_0, memberOptions) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  if (fullServerPreview.isFullServerPreview(outer1_0)) {
    let obj = { memberOptions };
    const result = require(5064) /* _createForOfIteratorHelperLoose */.updateImpersonatedData(outer1_0, obj);
  } else {
    obj = importDefault(686);
    obj = { type: "GUILD_MEMBER_UPDATE_LOCAL", guildId: outer1_0 };
    ({ roles: obj2.roles, flags: obj2.flags } = memberOptions);
    obj.dispatch(obj);
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    const obj1 = { url: Endpoints.SET_GUILD_MEMBER(outer1_0), body: memberOptions, oldFormErrors: !!flag, rejectWithError: false };
    return HTTP.patch(obj1);
  }
};
