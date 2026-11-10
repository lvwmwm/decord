// Module ID: 13030
// Function ID: 13031
// Name: useConjureMentionCandidates
// Dependencies: [19, 502, 5054, 5013, 1385, 6902, 1072, 504, 13021, 6903, 6959, 12852, 11, 5079, 2]
// Exports: default

// Module 13030 (useConjureMentionCandidates)
import Constants from "Constants" /* 1072 */;
import PermissionUtilsAll from "PermissionUtils" /* 5079 */;
import GuildUtilsDefault from "GuildUtils" /* 6959 */;
import conjureMentions from "conjureMentions" /* 12852 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 5054 */;
import GuildStore from "GuildStore" /* 5013 */;
import UserStore from "UserStore" /* 1385 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6902 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, guild, set;

const Permissions = Constants.Permissions;
let result = size.fileFinishedImporting("modules/conjure/chat/useConjureMentionCandidates.tsx");

export default function useConjureMentionCandidates(arg0, str) {
  let closure_0;
  let collaborators;
  let guild_id;
  _require = arg0;
  let tmp = _require;
  let tmp2 = collaborators;
  let obj = require("get initialized");
  let items = [ConjureProjectStore];
  let items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureProjectStore.getProject(closure_0), items1);
  let obj2 = require("useConjureProjectCreator");
  const conjureProjectPeople = obj2.useConjureProjectPeople(stateFromStores);
  const creator = conjureProjectPeople.creator;
  collaborators = conjureProjectPeople.collaborators;
  let items2 = [guild_id];
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(items2, () => guild_id.getId());
  guild_id = undefined;
  if (null != stateFromStores) {
    const tmpResult = tmp(tmp2[9]);
    if (tmpResult.isProjectGuildCollaborationEnabled(stateFromStores)) {
      guild_id = stateFromStores.guild_id;
    }
  }
  let formatted;
  if (str != null) {
    formatted = str.toLowerCase();
  }
  if (formatted == null) {
    formatted = null;
  }
  let items3 = [guild_id, formatted];
  const effect = stateFromStores1.useEffect(() => {
    let tmp2 = null != guild_id;
    const tmp = guild_id;
    if (tmp2) {
      tmp2 = null != formatted;
    }
    if (tmp2) {
      const obj = GuildUtilsDefault;
      const members = obj.requestMembers(tmp, formatted, 100);
    }
  }, items3);
  let items4 = [formatted, GuildStore, UserStore];
  const items5 = [stateFromStores, guild_id, formatted, creator, collaborators, stateFromStores1];
  const tmpResult2 = tmp(tmp2[7]);
  return tmpResult2.useStateFromStoresArray(items4, function() {
    let user;
    if (null == formatted) {
      return [];
    } else {
      let items;
      let items2;
      guild = null;
      if (null != guild_id) {
        guild = guild.getGuild(tmp23);
      }
      function matches(id) {
        let nick = null;
        const matchesConjureMentionQuery = conjureMentions.matchesConjureMentionQuery;
        conjureMentions;
        const tmp2 = formatted;
        if (null != guild) {
          nick = GuildMemberStore.getNick(tmp3.id, id.id);
        }
        return matchesConjureMentionQuery(id, tmp2, nick);
      }
      const tmp3 = globalThis;
      let prop;
      const _Set = Set;
      if (matches != null) {
        prop = matches.collaborator_role_ids;
      }
      if (prop == null) {
        prop = [];
      }
      const self = this;
      const self2 = this;
      const _Set1 = new _Set(prop);
      let tmp6 = _Set1;
      let hasItem = null != guild;
      if (hasItem) {
        const has = _Set1.has;
        let obj = stateFromStores(collaborators[12]);
        hasItem = has(obj.castGuildIdAsEveryoneGuildRoleId(guild.id));
      }
      if (null == guild) {
        items = [];
      } else {
        const memberIds = formatted.getMemberIds(guild.id);
        const mapped = memberIds.map((item) => user.getUser(item));
        items = mapped.filter((id) => {
          let result = null != id;
          if (result) {
            if (typeof matches === "function") {
              let nick = null;
              const matchesConjureMentionQuery = conjureMentions.matchesConjureMentionQuery;
              conjureMentions;
              const tmp6 = formatted;
              if (null != guild) {
                nick = GuildMemberStore.getNick(tmp7.id, id.id);
              }
              result = matchesConjureMentionQuery(id, tmp6, nick);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          if (result) {
            let someResult = hasItem;
            if (!someResult) {
              const member = GuildMemberStore.getMember(guild.id, id.id);
              let roles;
              if (member != null) {
                roles = member.roles;
              }
              if (roles == null) {
                roles = [];
              }
              someResult = roles.some((item) => set.has(item));
            }
            if (!someResult) {
              const obj2 = { permission: Permissions.MANAGE_GUILD, user: id, context: guild };
              const obj = PermissionUtilsAll;
              someResult = obj.can(obj2);
            }
            result = someResult;
          }
          return result;
        });
      }
      const _Set2 = Set;
      const self3 = this;
      const self4 = this;
      set = new Set();
      if (null != _Set1) {
        const items1 = [tmp13];
        items2 = items1;
      } else {
        items2 = [];
      }
      const items3 = [];
      HermesBuiltin.arraySpread(items3, hasItem, HermesBuiltin.arraySpread(items3, items2, 0));
      const items4 = [];
      HermesBuiltin.arraySpread(items4, items, HermesBuiltin.arraySpread(items4, items3.filter(matches), 0));
      return items4.filter((id) => {
        let flag = id.id !== stateFromStores1 && !id.bot && !set.has(id.id);
        if (flag) {
          set.add(id.id);
          flag = true;
        }
        return flag;
      });
    }
  }, items5);
};
