// Module ID: 5350
// Function ID: 45781
// Name: updateGuildSelfMember
// Dependencies: []
// Exports: updateGuildSelfMember

// Module 5350 (updateGuildSelfMember)
let closure_3 = importDefault(dependencyMap[0]);
const Endpoints = arg1(dependencyMap[1]).Endpoints;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_member/GuildMemberActionCreators.tsx");

export const updateGuildSelfMember = function updateGuildSelfMember(guildId, memberOptions) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  if (fullServerPreview.isFullServerPreview(guildId)) {
    let obj = { memberOptions };
    const result = memberOptions(dependencyMap[2]).updateImpersonatedData(guildId, obj);
  } else {
    obj = importDefault(dependencyMap[3]);
    obj = { type: "GUILD_MEMBER_UPDATE_LOCAL", guildId };
    ({ roles: obj2.roles, flags: obj2.flags } = memberOptions);
    obj.dispatch(obj);
    const HTTP = memberOptions(dependencyMap[4]).HTTP;
    const obj1 = { url: Endpoints.SET_GUILD_MEMBER(guildId), body: memberOptions, oldFormErrors: !!flag, rejectWithError: false };
    return HTTP.patch(obj1);
  }
};
