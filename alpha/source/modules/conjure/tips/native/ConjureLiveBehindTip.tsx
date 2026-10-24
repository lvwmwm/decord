// Module ID: 12339
// Function ID: 12340
// Name: ConjureLiveBehindTip
// Dependencies: [19, 21, 558, 576, 11873, 1128, 3830, 12286, 12340, 9804, 12329, 2]

// Module 12339 (ConjureLiveBehindTip)
import Fragment from "Fragment" /* 21 */;
import _modDef3830 from "module_3830" /* 3830 */;
import ConjurePublishSheetDefault from "ConjurePublishSheet" /* 12286 */;
import conjureLiveBehindTip from "conjureLiveBehindTip" /* 12329 */;
import ConjureTipHintDefault from "ConjureTipHint" /* 12340 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

const jsx = Fragment.jsx;
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? (function LiveBehindHint(projectId) {
  const tmp = projectId;
  const obj = projectId(576);
  const cResult = obj.c(6);
  projectId = projectId.projectId;
  const onDismiss = projectId.onDismiss;
  const context = react.useContext(projectId(11873).ConjurePublishActionContext);
  if (cResult[0] === context) {
    let tmp5;
    if (cResult[1] === projectId) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === onDismiss) {
      let tmp7;
      if (cResult[4] === tmp5) {
        tmp7 = cResult[5];
      }
      return tmp7;
    }
    context(12340);
    const tmp11 = <tmp10 icon={tmp(9804).UploadIcon} onDismiss={onDismiss}>{tmp5}</tmp10>;
    cResult[3] = onDismiss;
    cResult[4] = tmp5;
    cResult[5] = tmp11;
    tmp7 = tmp11;
  }
  const intl = tmp(1128).intl;
  const obj3 = {
    onPublish() {
      if (null != context) {
        ConjurePublishSheetDefault(projectId, tmp.guildId, "outdated_notice");
      }
    }
  };
  const formatResult = intl.format(context(3830).fWfeZ8, obj3);
  cResult[0] = context;
  cResult[1] = projectId;
  cResult[2] = formatResult;
  tmp5 = formatResult;
}) : (function LiveBehindHint(projectId) {
  let closure_1;
  projectId = projectId.projectId;
  const onDismiss = projectId.onDismiss;
  importDefault = react.useContext(projectId(11873).ConjurePublishActionContext);
  const tmp = ConjureTipHintDefault;
  const intl = projectId(1128).intl;
  const obj2 = {
    onPublish() {
      if (null != closure_1) {
        ConjurePublishSheetDefault(projectId, tmp.guildId, "outdated_notice");
      }
    }
  };
  return <tmp icon={projectId(9804).UploadIcon} onDismiss={onDismiss}>{intl.format(_modDef3830.fWfeZ8, obj2)}</tmp>;
});
let obj = {
  render(arg0, context) {
    let tmp3 = null;
    if (null != context.context.publish) {
      tmp3 = <closure_5 projectId={tmp} onDismiss={tmp2} />;
    }
    return tmp3;
  }
};
const merged = Object.assign(conjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP_BASE);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureLiveBehindTip.tsx");

export const CONJURE_LIVE_BEHIND_TIP = obj;
