// Module ID: 4958
// Function ID: 42622
// Name: getHighestHoistedRole
// Dependencies: []
// Exports: default

// Module 4958 (getHighestHoistedRole)
function getHighestHoistedRole(guildId, id) {
  let obj;
  let obj2;
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [closure_4, closure_3];
    tmp = items;
  }
  [obj, obj2] = tmp;
  if (null != guildId) {
    if (null != id) {
      const guild = obj.getGuild(guildId);
      if (null == guild) {
        return null;
      } else {
        const member = obj2.getMember(guild.id, id);
        let highestHoistedRole = null;
        if (null != member) {
          highestHoistedRole = importAll(dependencyMap[2]).getHighestHoistedRole(guild, member);
          const obj3 = importAll(dependencyMap[2]);
        }
        return highestHoistedRole;
      }
    }
  }
  return null;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/stage_channels/useGuildMemberDisplayRole.tsx");

export default function useGuildMemberDisplayRole(arg0, arg1) {
  arg1 = arg0;
  const importAll = arg1;
  const items = [closure_4, closure_3];
  const items1 = [arg0, arg1];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => {
    const items = [closure_4, closure_3];
    return callback(arg0, arg1, items);
  }, items1);
};
export { getHighestHoistedRole };
