// Module ID: 18265
// Function ID: 18266
// Name: useConjurePublishButton
// Dependencies: [19, 12301, 1112, 4190, 2]
// Exports: default

// Module 18265 (useConjurePublishButton)
import intl4 from "intl" /* 1112 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 12301 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishButton.tsx");

export default function useConjurePublishButton(arg0, arg1, arg2, arg3) {
  let str3;
  let str4;
  let stringResult;
  let stringResult1;
  let tmp11;
  let closure_0 = arg1;
  let closure_1 = arg2;
  let closure_2 = arg3;
  const items = [arg1, arg3, arg2];
  const memo = react.useMemo(() => ({ guildId, platform, busy }), items);
  const tmp4 = useConjurePublishActionDefault(arg0, memo);
  let str;
  if (tmp4 != null) {
    str = tmp4.state;
  }
  if (str == null) {
    str = "hidden";
  }
  const obj = { publishOptions: memo, publish: tmp4, state: str, variant: str3, text: stringResult, indicator: str4, hint: stringResult1, pendingChanges: tmp11 };
  str3 = "primary";
  if ("up_to_date" === str || "auto_synced" === str) {
    str3 = "secondary";
  }
  if ("up_to_date" === str || "auto_synced" === str) {
    const intl2 = intl4.intl;
    stringResult = intl2.string(tmp2(4190).kAfbEN);
  } else {
    stringResult = undefined;
    if (tmp4 != null) {
      stringResult = tmp4.label;
    }
    if (stringResult == null) {
      const intl = intl4.intl;
      stringResult = intl.string(tmp2(4190)["120EFN"]);
    }
  }
  str4 = "publishing";
  if ("publishing" !== str) {
    let str6 = null;
    if ("action_needed" === str) {
      str6 = "unpublished";
    }
    str4 = str6;
  }
  stringResult1 = null;
  if ("auto_synced" === str) {
    const intl3 = intl4.intl;
    stringResult1 = intl3.string(tmp2(4190).W4LzCY);
  }
  tmp11 = null != tmp4;
  if (tmp11) {
    let isUpdate = tmp4.isUpdate;
    if (!isUpdate) {
      const status = tmp4.status;
      let publishState;
      if (status != null) {
        publishState = status.publishState;
      }
      isUpdate = "not_live" === publishState;
    }
    tmp11 = isUpdate;
  }
  return obj;
};
