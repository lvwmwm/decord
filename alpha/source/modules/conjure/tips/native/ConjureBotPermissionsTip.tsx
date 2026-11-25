// Module ID: 18611
// Function ID: 18612
// Name: ConjureBotPermissionsTip
// Dependencies: [5, 19, 21, 11412, 18612, 10036, 1112, 4244, 18616, 2]

// Module 18611 (ConjureBotPermissionsTip)
import Fragment from "Fragment" /* 21 */;
import _modDef4244 from "module_4244" /* 4244 */;
import ConjureTipHintDefault from "ConjureTipHint" /* 18612 */;
import conjureBotPermissionsTip from "conjureBotPermissionsTip" /* 18616 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c1, dependencyMap, importDefault;

function BotPermissionsHint(projectId) {
  let closure_1;
  let closure_2;
  projectId = projectId.projectId;
  dependencyMap = react.useContext(projectId(11412).ConjurePublishActionContext);
  ConjureTipHintDefault;
  const intl = projectId(1112).intl;
  const format = intl.format;
  let obj2 = {
    onReview() {
      return closure_1(...arguments);
    }
  };
  const v0S9HY8 = _modDef4244["0S9HY8"];
  importDefault = _asyncToGenerator(async (arg0, value) => {
    let v3;
    if (projectId === 2) {
      projectId = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        projectId = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            projectId = 3;
            throw value;
          } else if (arg0 === 2) {
            projectId = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (null != closure_2) {
            c1 = 1;
            const obj2 = projectId(closure_1_2[3]);
            projectId = 1;
            const obj5 = { value: obj2.requestConjureInstallConsent(projectId, tmp4.guildId), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          projectId = 3;
          throw value;
        } else if (arg0 === 2) {
          projectId = 3;
          const obj = { value, done: true };
          return obj;
        }
        projectId = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      } catch (tmp9) {
        projectId = 3;
        throw tmp9;
      }
    }
  });
  return <tmp icon={projectId(10036).ShieldIcon}>{format(v0S9HY8, obj2)}</tmp>;
}
const jsx = Fragment.jsx;
let obj = {
  render(arg0, context) {
    return <BotPermissionsHint projectId={arg1.context.projectId} />;
  }
};
const merged = Object.assign(conjureBotPermissionsTip.CONJURE_BOT_PERMISSIONS_TIP_BASE);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureBotPermissionsTip.tsx");

export const CONJURE_BOT_PERMISSIONS_TIP = obj;
