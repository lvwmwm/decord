// Module ID: 11747
// Function ID: 11748
// Name: conjureProjectLinkCard
// Dependencies: [2162, 1385, 6932, 11745, 5226, 9800, 11748, 2]
// Exports: conjureProjectLinkCardKey

// Module 11747 (conjureProjectLinkCard)
import UserUtils from "UserUtils" /* 5226 */;
import ConjureProjectStore2 from "ConjureProjectStore" /* 6932 */;
import ConjureMobileExperiment from "ConjureMobileExperiment" /* 9800 */;
import conjureSharedProjectCoverTargetDefault from "conjureSharedProjectCoverTarget" /* 11748 */;
import ApplicationStore from "ApplicationStore" /* 2162 */;
import UserStore from "UserStore" /* 1385 */;
import ConjureSharedProjectStore from "ConjureSharedProjectStore" /* 11745 */;
import size from "module_2" /* 2 */;

const ConjureProjectStore = ConjureProjectStore2;

function readConjureProjectLinkCard(applicationId, ticket, memo2) {
  let name;
  let ticketValid;
  let type;
  const status = ConjureSharedProjectStore.getStatus(applicationId, ticket);
  if (null != status) {
    if ("loading" !== status.type) {
      if ("unavailable" !== status.type) {
        if ("no_access" !== status.type) {
          if ("expired" !== status.type) {
            const application = ApplicationStore.getApplication(applicationId);
            if (null == application) {
              return null;
            } else if ("info_only" === status.type) {
              return { type: "info_only", application };
            } else {
              const project = ConjureProjectStore.getProject(status.projectId);
              if (null == project) {
                return null;
              } else {
                const owner_user_id = project.owner_user_id;
                const user = UserStore.getUser(owner_user_id);
                const obj4 = { type: "ready", application, ownerId: owner_user_id, creatorName: name, canRemix: ticketValid, coverAction: type };
                name = null;
                if (null != user) {
                  const obj = UserUtils;
                  name = obj.getName(user);
                }
                ticketValid = status.ticketValid || canRemixProject(project);
                if (ticketValid) {
                  const obj2 = ConjureMobileExperiment;
                  ticketValid = obj2.isConjureMobileEnabled("ConjureProjectLinkCard");
                }
                const tmp11 = conjureSharedProjectCoverTargetDefault(applicationId, project, memo2);
                type = undefined;
                if (tmp11 != null) {
                  type = tmp11.type;
                }
                if (type == null) {
                  type = null;
                }
                return obj4;
              }
            }
          }
        }
        return { type: status.type };
      }
    }
  }
  return null;
}
const canRemixProject = ConjureProjectStore2.canRemixProject;
const result = size.fileFinishedImporting("modules/conjure/share/native/conjureProjectLinkCard.tsx");

export { readConjureProjectLinkCard };
export function conjureProjectLinkCardKey(applicationId, ticket, memo2) {
  const tmp2 = readConjureProjectLinkCard(applicationId, ticket, memo2);
  if (null != tmp2) {
    if ("no_access" !== tmp2.type) {
      if ("expired" !== tmp2.type) {
        const items = [tmp2.type, , , , ];
        ({ name: arr2[1], description: arr2[2], icon: arr2[3], coverImage: arr2[4] } = tmp2.application);
        let obj = items;
        if ("ready" === tmp2.type) {
          const items1 = [, , ];
          const arraySpreadResult = HermesBuiltin.arraySpread(items1, items, 0);
          items1[arraySpreadResult] = tmp2.creatorName;
          const sum = arraySpreadResult + 1;
          ({ canRemix: arr[tmp6], coverAction: arr[tmp6 + 1] } = tmp2);
          obj = items1;
        }
        return obj.join("\0");
      }
    }
  }
  let str2;
  if (tmp2 != null) {
    str2 = tmp2.type;
  }
  if (str2 == null) {
    str2 = "";
  }
  return str2;
}
