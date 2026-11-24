// Module ID: 11314
// Function ID: 11315
// Name: ConjureInstallTarget
// Dependencies: [5, 7541, 2]
// Exports: conjureInstallGuildId, repairConjureGuildHints

// Module 11314 (ConjureInstallTarget)
import ConjureActionCreators from "ConjureActionCreators" /* 7541 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let obj = function _repairConjureGuildHints() {
  obj = _asyncToGenerator(async (arg0, preview_guild_id) => {
    const install_scope = arg0;
    let c3 = 0;
    let c2 = 0;
    return (async (arg0, value) => {
      let obj3;
      let obj6;
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
            } else if ("guild" === install_scope.install_scope) {
              if (null == install_scope.guild_id) {
                c3 = 1;
                c2 = 1;
                const obj5 = { value: obj6.setConjureProjectServer(install_scope.id, preview_guild_id), done: false };
                obj6 = ConjureActionCreators;
                return obj5;
              } else if (install_scope.preview_guild_id !== preview_guild_id) {
                c3 = 2;
                c2 = 1;
                const obj7 = { preview_guild_id };
                const obj8 = { value: obj3.updateProjectSettings(install_scope.id, obj7), done: false };
                obj3 = ConjureActionCreators;
                return obj8;
              }
            }
          } else if (1 === tmp3) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              return { value, done: true };
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
        } catch (tmp9) {
          c2 = 3;
          throw tmp9;
        }
      }
    })();
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/conjure/publish/ConjureInstallTarget.tsx");

export function conjureInstallGuildId(project, guildId) {
  let install_scope;
  if (project != null) {
    install_scope = project.install_scope;
  }
  let guild_id = guildId;
  if ("guild" === install_scope) {
    guild_id = guildId;
    if (null != project.guild_id) {
      guild_id = project.guild_id;
    }
  }
  return guild_id;
}
export function repairConjureGuildHints() {
  return obj(...arguments);
}
