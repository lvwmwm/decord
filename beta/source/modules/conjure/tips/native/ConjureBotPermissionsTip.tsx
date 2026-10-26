// Module ID: 12341
// Function ID: 12342
// Name: ConjureBotPermissionsTip
// Dependencies: [5, 19, 21, 558, 576, 11877, 1128, 3830, 12342, 10953, 12348, 2]

// Module 12341 (ConjureBotPermissionsTip)
import Fragment from "Fragment" /* 21 */;
import _modDef3830 from "module_3830" /* 3830 */;
import ConjureTipHintDefault from "ConjureTipHint" /* 12342 */;
import conjureBotPermissionsTip from "conjureBotPermissionsTip" /* 12348 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, c1, dependencyMap, importDefault;

const jsx = Fragment.jsx;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (function BotPermissionsHint(projectId) {
  let closure_0;
  let context;
  const tmp2 = context;
  let obj = require("react");
  const cResult = obj.c(5);
  projectId = projectId.projectId;
  context = react.useContext(require("useConjurePublishAction").ConjurePublishActionContext);
  if (cResult[0] === context) {
    let tmp5;
    let tmp8;
    if (cResult[1] === projectId) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== tmp5) {
      const tmp9 = jsx;
      projectId(tmp2[8]);
      const tmp12 = <tmp11 icon={require("ShieldIcon").ShieldIcon}>{tmp5}</tmp11>;
      cResult[3] = tmp5;
      cResult[4] = tmp12;
      tmp8 = tmp12;
    } else {
      tmp8 = cResult[4];
    }
    return tmp8;
  }
  const intl = tmp(tmp2[6]).intl;
  const format = intl.format;
  let obj3 = {
    onReview() {
      return closure_0(...arguments);
    }
  };
  const v0S9HY8 = projectId(tmp2[7])["0S9HY8"];
  _require = _asyncToGenerator(async (arg0, value) => {
    let v3;
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (null != context) {
            c1 = 1;
            const obj2 = c0(context[5]);
            c0 = 1;
            const obj5 = { value: obj2.requestConjureInstallConsent(projectId, tmp4.guildId), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c0 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp9) {
        c0 = 3;
        throw tmp9;
      }
    }
  });
  const formatResult = format(v0S9HY8, obj3);
  cResult[0] = context;
  cResult[1] = projectId;
  cResult[2] = formatResult;
  tmp5 = formatResult;
}) : (function BotPermissionsHint(projectId) {
  let closure_1;
  let closure_2;
  projectId = projectId.projectId;
  dependencyMap = react.useContext(projectId(11877).ConjurePublishActionContext);
  ConjureTipHintDefault;
  const intl = projectId(1128).intl;
  const format = intl.format;
  let obj2 = {
    onReview() {
      return closure_1(...arguments);
    }
  };
  const v0S9HY8 = _modDef3830["0S9HY8"];
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
        return { value: "IconComponent", done: null };
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
            const obj2 = projectId(closure_1_2[5]);
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
        return { value: "IconComponent", done: null };
      } catch (tmp9) {
        projectId = 3;
        throw tmp9;
      }
    }
  });
  return <tmp icon={projectId(10953).ShieldIcon}>{format(v0S9HY8, obj2)}</tmp>;
});
let obj = {
  render(arg0, context) {
    return <closure_6 projectId={arg1.context.projectId} />;
  }
};
const merged = Object.assign(conjureBotPermissionsTip.CONJURE_BOT_PERMISSIONS_TIP_BASE);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureBotPermissionsTip.tsx");

export const CONJURE_BOT_PERMISSIONS_TIP = obj;
