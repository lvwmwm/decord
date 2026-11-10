// Module ID: 13477
// Function ID: 13478
// Name: handleTapConjureProjectEmbed
// Dependencies: [5, 6902, 11722, 11725, 11903, 13016, 5838, 1113, 4028, 9773, 13011, 13023, 2118, 2]
// Exports: default

// Module 13477 (handleTapConjureProjectEmbed)
import ConjureProjectStore2 from "ConjureProjectStore" /* 6902 */;
import conjureSharedProjectCoverTargetDefault from "conjureSharedProjectCoverTarget" /* 11725 */;
import launchConjureSharedProjectDefault from "launchConjureSharedProject" /* 13016 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConjureSharedProjectStore from "ConjureSharedProjectStore" /* 11722 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_4, project, status;

let tmp;
const openFrameDefault = tmp(11903);
function runConjureSharedProjectCoverAction(applicationId, arg1, arg2) {
  let channelId;
  let guildId;
  function launchOrReport() {
    return obj(...arguments);
  }
  const tmp3 = conjureSharedProjectCoverTargetDefault(applicationId, arg1, arg2);
  if (null == tmp3) {
    return false;
  } else if ("open" === tmp3.type) {
    obj = { applicationId, channel: tmp3.appChannel };
    openFrameDefault(obj);
    return true;
  } else {
    ({ guildId, channelId } = arg2);
    let flag = null != guildId && null != channelId;
    if (flag) {
      launchOrReport(applicationId, guildId, channelId);
      flag = true;
    }
    return flag;
  }
}
let obj = function _launchOrReport() {
  obj = _asyncToGenerator(async (applicationId, guildId, channelId) => {
    let c4 = 0;
    let c6 = 0;
    let c5 = 0;
    return (async (arg0, value, arg2) => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              c5 = 1;
              c4 = 2;
              c6 = 1;
              const obj4 = { applicationId, guildId, channelId };
              const obj5 = { value: launchConjureSharedProjectDefault(obj4), done: false };
              return obj5;
            }
          } else {
            if (1 === tmp4) {
              c5 = 0;
              const presentFailedToast = closure_131_0(closure_131_2[6]).presentFailedToast;
              closure_131_0(closure_131_2[6]);
              const intl = closure_131_0(closure_131_2[7]).intl;
              presentFailedToast(intl.string(closure_131_1(closure_131_2[8]).hh2nuX));
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c6 = 3;
              return { value, done: true };
            } else {
              c5 = 0;
            }
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp18) {
          if (0 === c5) {
            c6 = 3;
            throw tmp18;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _handleTapConjureProjectEmbed() {
  let paths;
  obj = _asyncToGenerator(async (arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let guildId = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2, arg3) => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              closure_0 = guildId;
              guildId = closure_2;
              closure_2 = closure_3;
              project = undefined;
              status = status.getStatus(closure_0, guildId);
              let type;
              const tmp37 = guildId;
              if (status != null) {
                type = status.type;
              }
              project = null;
              if ("ready" === type) {
                project = project.getProject(status.projectId);
              }
              if (null == project) {
                let result = null != project;
                if (result) {
                  let type1;
                  if (status != null) {
                    type1 = status.type;
                  }
                  const ticketValid = "ready" === type1 && status.ticketValid || canRemixProject(project);
                  result = ticketValid;
                }
                if (result) {
                  const obj2 = require("ConjureMobileExperiment");
                  result = obj2.isConjureMobileEnabled("handleTapConjureProjectEmbed");
                }
                if (null != project) {
                  if (result) {
                    c5 = 1;
                    c6 = 1;
                    const obj5 = { value: require("asyncRequire")(paths[11], paths.paths), done: false };
                    return obj5;
                  }
                }
                let type2;
                if (status != null) {
                  type2 = status.type;
                }
                let tmp27 = "no_access" !== type2;
                if (tmp27) {
                  let type3;
                  if (status != null) {
                    type3 = status.type;
                  }
                  tmp27 = "expired" !== type3;
                }
                if (tmp27) {
                  require("openConjureProjectAboutSheet")(closure_0, closure_2, tmp37);
                }
              }
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            guildId = guildId.guildId;
            let str = "remix";
            const _default = value.default;
            if ("install" === closure_2) {
              str = "copy";
            }
            _default(project, guildId, str, closure_0);
          }
          c6 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp32) {
          c6 = 3;
          throw tmp32;
        }
      }
    })();
  });
  return obj(...arguments);
};
const canRemixProject = ConjureProjectStore2.canRemixProject;
let result = size.fileFinishedImporting("modules/conjure/share/native/handleTapConjureProjectEmbed.tsx");

export default function handleTapConjureProjectEmbed() {
  return obj(...arguments);
};
