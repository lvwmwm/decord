// Module ID: 12436
// Function ID: 12437
// Name: ConjureLiveBehindTip
// Dependencies: [19, 21, 558, 576, 12244, 1125, 3864, 12431, 9870, 12422, 2]

// Module 12436 (ConjureLiveBehindTip)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1125 */;
import _modDef3864 from "module_3864" /* 3864 */;
import UploadIcon from "UploadIcon" /* 9870 */;
import useConjureStartPublishDefault from "useConjureStartPublish" /* 12244 */;
import conjureLiveBehindTip from "conjureLiveBehindTip" /* 12422 */;
import ConjureTipHintDefault from "ConjureTipHint" /* 12431 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_4 = ReactCompilerGating.isReactCompilerEnabled() ? (function LiveBehindHint(onDismiss) {
  let projectId;
  let publish;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(5);
  onDismiss = onDismiss.onDismiss;
  ({ projectId, publish } = onDismiss);
  const tmp5 = useConjureStartPublishDefault(projectId, publish);
  let closure_0 = tmp5;
  if (cResult[0] !== tmp5) {
    const intl = tmp(1125).intl;
    const obj2 = {
      onPublish() {
          return closure_0("outdated_notice");
        }
    };
    const formatResult = intl.format(_modDef3864.fWfeZ8, obj2);
    cResult[0] = tmp5;
    cResult[1] = formatResult;
    tmp6 = formatResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === onDismiss) {
    let tmp8;
    if (cResult[3] === tmp6) {
      tmp8 = cResult[4];
    }
    return tmp8;
  }
  ConjureTipHintDefault;
  const tmp10 = <tmp4Result icon={UploadIcon.UploadIcon} onDismiss={onDismiss}>{tmp6}</tmp4Result>;
  cResult[2] = onDismiss;
  cResult[3] = tmp6;
  cResult[4] = tmp10;
  tmp8 = tmp10;
}) : (function LiveBehindHint(arg0) {
  let onDismiss;
  let projectId;
  let publish;
  ({ projectId, publish, onDismiss } = arg0);
  let closure_0 = useConjureStartPublishDefault(projectId, publish);
  ConjureTipHintDefault;
  const intl = intl2.intl;
  const obj2 = {
    onPublish() {
      return closure_0("outdated_notice");
    }
  };
  return <tmp icon={UploadIcon.UploadIcon} onDismiss={onDismiss}>{intl.format(_modDef3864.fWfeZ8, obj2)}</tmp>;
});
let obj = {
  render(arg0, context) {
    const publish = context.context.publish;
    let tmp3 = null;
    if (null != publish) {
      tmp3 = <closure_4 projectId={tmp} publish={publish} onDismiss={tmp2} />;
    }
    return tmp3;
  }
};
const merged = Object.assign(conjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP_BASE);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureLiveBehindTip.tsx");

export const CONJURE_LIVE_BEHIND_TIP = obj;
