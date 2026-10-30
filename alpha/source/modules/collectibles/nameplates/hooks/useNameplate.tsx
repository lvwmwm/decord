// Module ID: 8781
// Function ID: 8782
// Name: useNameplate
// Dependencies: [19, 4921, 504, 1985, 2]
// Exports: useNameplate

// Module 8781 (useNameplate)
import utils from "utils" /* 1985 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/nameplates/hooks/useNameplate.tsx");

export function useNameplate(user) {
  user = user.user;
  const guildId = user.guildId;
  const items = [GuildMemberStore];
  const obj = user(guildId[2]);
  const stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (null != guildId) {
      member = null;
      if (null != user) {
        member = GuildMemberStore.getMember(tmp, tmp3.id);
      }
    }
    return member;
  });
  const items1 = [stateFromStores, user];
  return stateFromStores.useMemo(() => {
    if (null != user) {
      let nameplate1;
      const getNameplateData = utils.getNameplateData;
      utils;
      if (stateFromStores != null) {
        const collectibles = stateFromStores.collectibles;
        if (collectibles != null) {
          nameplate1 = collectibles.nameplate;
        }
      }
      let nameplate = getNameplateData(nameplate1);
      if (nameplate == null) {
        nameplate = tmp.nameplate;
      }
      return nameplate;
    }
  }, items1);
}
