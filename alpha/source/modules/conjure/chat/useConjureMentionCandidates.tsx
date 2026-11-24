// Module ID: 18665
// Function ID: 18666
// Name: useConjureMentionCandidates
// Dependencies: [19, 502, 4829, 4788, 1386, 6808, 1071, 504, 12231, 6809, 6864, 18513, 11, 4854, 2]
// Exports: default

// Module 18665 (useConjureMentionCandidates)
import Constants from "Constants" /* 1071 */;
import PermissionUtilsAll from "PermissionUtils" /* 4854 */;
import GuildUtilsDefault from "GuildUtils" /* 6864 */;
import conjureMentions from "conjureMentions" /* 18513 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 4829 */;
import GuildStore from "GuildStore" /* 4788 */;
import UserStore from "UserStore" /* 1386 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

const Permissions = Constants.Permissions;
let result = size.fileFinishedImporting("modules/conjure/chat/useConjureMentionCandidates.tsx");

export default function useConjureMentionCandidates(arg0, str) {
  let closure_0;
  _require = arg0;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  let creator;
  let stateFromStores1;
  let formatted;
  let tmp = _require;
  let tmp2 = creator;
  let obj = require("get initialized");
  let items = [ConjureProjectStore];
  let items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureProjectStore.getProject(closure_0), items1);
  let obj2 = require("useConjureProjectCreator");
  const conjureProjectPeople = obj2.useConjureProjectPeople(stateFromStores);
  creator = conjureProjectPeople.creator;
  const collaborators = conjureProjectPeople.collaborators;
  let items2 = [stateFromStores1];
  const obj3 = require("get initialized");
  stateFromStores1 = obj3.useStateFromStores(items2, () => stateFromStores1.getId());
  let guild_id;
  if (null != stateFromStores) {
    const tmpResult = tmp(tmp2[9]);
    if (tmpResult.isProjectGuildCollaborationEnabled(stateFromStores)) {
      guild_id = stateFromStores.guild_id;
    }
  }
  formatted = undefined;
  if (str != null) {
    formatted = str.toLowerCase();
  }
  if (formatted == null) {
    formatted = null;
  }
  let items3 = [flag, guild_id, formatted];
  const effect = collaborators.useEffect(() => {
    const tmp = flag && null != guild_id && null != formatted;
    if (tmp) {
      const obj = GuildUtilsDefault;
      const members = obj.requestMembers(guild_id, formatted, 100);
    }
  }, items3);
  let items4 = [guild_id, formatted, UserStore];
  const items5 = [stateFromStores, guild_id, formatted, creator, collaborators, stateFromStores1];
  const tmpResult2 = tmp(tmp2[7]);
  return tmpResult2.useStateFromStoresArray(items4, function() {
    let _Set1;
    let user;
    if (null == formatted) {
      return [];
    } else {
      let items;
      let items2;
      let guild = null;
      if (null != guild_id) {
        guild = formatted.getGuild(tmp23);
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
      if (_Set1 != null) {
        prop = _Set1.collaborator_role_ids;
      }
      if (prop == null) {
        prop = [];
      }
      const self = this;
      const self2 = this;
      _Set1 = new _Set(prop);
      let tmp6 = _Set1;
      let hasItem = null != guild;
      if (hasItem) {
        const has = _Set1.has;
        let obj = flag(creator[12]);
        hasItem = has(obj.castGuildIdAsEveryoneGuildRoleId(guild.id));
      }
      if (null == guild) {
        items = [];
      } else {
        const memberIds = guild_id.getMemberIds(guild.id);
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
      if (null != hasItem) {
        const items1 = [tmp13];
        items2 = items1;
      } else {
        items2 = [];
      }
      const items3 = [];
      HermesBuiltin.arraySpread(items3, set, HermesBuiltin.arraySpread(items3, items2, 0));
      const items4 = [];
      HermesBuiltin.arraySpread(items4, items, HermesBuiltin.arraySpread(items4, items3.filter(matches), 0));
      return items4.filter((id) => {
        flag = id.id !== stateFromStores1 && !id.bot && !set.has(id.id);
        if (flag) {
          set.add(id.id);
          flag = true;
        }
        return flag;
      });
    }
  }, items5);
};
