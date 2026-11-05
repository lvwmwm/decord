// Module ID: 12847
// Function ID: 12848
// Name: ConjureBotPermissionsTip
// Dependencies: [5, 19, 21, 12302, 12848, 11477, 1113, 3995, 12852, 2]

// Module 12847 (ConjureBotPermissionsTip)
import Fragment from "Fragment" /* 21 */;
import _modDef3995 from "module_3995" /* 3995 */;
import ConjureTipHintDefault from "ConjureTipHint" /* 12848 */;
import conjureBotPermissionsTip from "conjureBotPermissionsTip" /* 12852 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c1, dependencyMap, importDefault;

function BotPermissionsHint(projectId) {
  let closure_1;
  let closure_2;
  projectId = projectId.projectId;
  dependencyMap = react.useContext(projectId(12302).ConjurePublishActionContext);
  ConjureTipHintDefault;
  const intl = projectId(1113).intl;
  const format = intl.format;
  let obj2 = {
    onReview() {
      return closure_1(...arguments);
    }
  };
  const v0S9HY8 = _modDef3995["0S9HY8"];
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
        return { value: "HermesInternal", done: null };
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
        return { value: "HermesInternal", done: null };
      } catch (tmp9) {
        projectId = 3;
        throw tmp9;
      }
    }
  });
  return <tmp icon={projectId(11477).ShieldIcon}>{format(v0S9HY8, obj2)}</tmp>;
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
