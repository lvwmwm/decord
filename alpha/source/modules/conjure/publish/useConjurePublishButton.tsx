// Module ID: 18250
// Function ID: 18251
// Name: useConjurePublishButton
// Dependencies: [19, 1112, 4190, 12305, 2]
// Exports: default

// Module 18250 (useConjurePublishButton)
import intl3 from "intl" /* 1112 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 12305 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishButton.tsx");

export default function useConjurePublishButton(arg0, arg1, arg2, arg3) {
  let label;
  let publishing;
  let str2;
  let tmp10;
  let tmp13;
  let closure_0 = arg1;
  let closure_1 = arg2;
  let closure_2 = arg3;
  const items = [arg1, arg3, arg2];
  const memo = react.useMemo(() => ({ guildId, platform, busy }), items);
  const tmp4 = useConjurePublishActionDefault(arg0, memo);
  const obj = { publishOptions: memo, publish: tmp4, publishing: true === publishing, variant: str2, text: label, indicator: tmp10, pendingChanges: tmp13 };
  publishing = undefined;
  if (tmp4 != null) {
    publishing = tmp4.publishing;
  }
  str2 = "primary";
  const tmp6 = null != tmp4 && tmp4.upToDate && "publish" === tmp4.action && !tmp4.awaitingApproval;
  if (tmp6) {
    str2 = "secondary";
  }
  if (null == tmp4) {
    const intl2 = intl3.intl;
    label = intl2.string(tmp2(4190)["120EFN"]);
  } else {
    const tmp7 = null != tmp4 && tmp4.upToDate && "publish" === tmp4.action && !tmp4.awaitingApproval;
    if (tmp7) {
      if (!tmp4.publishing) {
        const intl = intl3.intl;
        label = intl.string(tmp2(4190).kAfbEN);
      }
    }
    label = tmp4.label;
  }
  tmp10 = null;
  if (null != tmp4) {
    let str4 = "publishing";
    if (!tmp4.publishing) {
      let tmp12 = "unpublished";
      const tmp11 = null != tmp4 && tmp4.upToDate && "publish" === tmp4.action && !tmp4.awaitingApproval;
      if (tmp11) {
        tmp12 = null;
      }
      str4 = tmp12;
    }
    tmp10 = str4;
  }
  tmp13 = null != tmp4;
  if (tmp13) {
    let isUpdate = tmp4.isUpdate;
    if (!isUpdate) {
      const status = tmp4.status;
      let publishState;
      if (status != null) {
        publishState = status.publishState;
      }
      isUpdate = "not_live" === publishState;
    }
    tmp13 = isUpdate;
  }
  return obj;
};
