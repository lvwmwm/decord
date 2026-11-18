// Module ID: 13140
// Function ID: 13141
// Name: ConjureInstallTarget
// Dependencies: [5, 7018, 7329, 2]
// Exports: conjureInstallGuildId, repairConjureGuildHints

// Module 13140 (ConjureInstallTarget)
import ConjureProjectTypes from "ConjureProjectTypes" /* 7018 */;
import ConjureActionCreators from "ConjureActionCreators" /* 7329 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let obj = function _repairConjureGuildHints() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    const guild_id = arg0;
    let closure_1 = arg1;
    let c3 = 0;
    let c2 = 0;
    return (async (arg0, value) => {
      let obj2;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              return { value, done: true };
            } else {
              const tmp4 = guild_id.guild_id === preview_guild_id && tmp11.preview_guild_id === tmp12;
              if (!tmp4) {
                c3 = 1;
                c2 = 1;
                const obj5 = { guild_id: preview_guild_id, preview_guild_id };
                const obj6 = { value: obj2.setGuildHints(guild_id.id, obj5), done: false };
                obj2 = ConjureActionCreators;
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            return { value, done: true };
          }
          c2 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp7) {
          c2 = 3;
          throw tmp7;
        }
      }
    })();
  });
  return obj(...arguments);
};
let result = size.fileFinishedImporting("modules/conjure/publish/ConjureInstallTarget.tsx");

export function conjureInstallGuildId(project, integrationStatus, guildId) {
  let guild_id1;
  if (project != null) {
    guild_id1 = project.guild_id;
  }
  if (null == guild_id1) {
    return guildId;
  } else {
    let guild_id;
    let hasItem = guildId !== project.guild_id;
    if (hasItem) {
      obj = ConjureProjectTypes;
      const result = obj.conjureProjectServerIds(project);
      hasItem = result.includes(guildId);
    }
    let prop;
    if (integrationStatus != null) {
      prop = integrationStatus.integration_installed;
    }
    if (true === prop) {
      guild_id = project.guild_id;
    } else {
      guild_id = guildId;
    }
    return guild_id;
  }
}
export function repairConjureGuildHints() {
  return obj(...arguments);
}
