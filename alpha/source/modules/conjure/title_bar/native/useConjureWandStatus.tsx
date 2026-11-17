// Module ID: 15092
// Function ID: 15093
// Name: useConjureWandStatus
// Dependencies: [7025, 15093, 5893, 7339, 1113, 4133, 2]
// Exports: default

// Module 15092 (useConjureWandStatus)
import intl5 from "intl" /* 1113 */;
import useMountEffectDefault from "useMountEffect" /* 5893 */;
import ConjureActionCreators from "ConjureActionCreators" /* 7339 */;
import useConjureTitleBarStatusDefault from "useConjureTitleBarStatus" /* 15093 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7025 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/title_bar/native/useConjureWandStatus.tsx");

export default function useConjureWandStatus() {
  let found;
  let ownedProjectsFetchState;
  const tmp3 = useConjureTitleBarStatusDefault();
  const status = tmp3.status;
  let kind;
  const hasUnread = tmp3.hasUnread;
  if (status != null) {
    kind = status.kind;
  }
  useMountEffectDefault(() => {
    if ("unattempted" === ownedProjectsFetchState.getOwnedProjectsFetchState()) {
      const obj = ConjureActionCreators;
      obj.listProjects();
    }
  });
  let obj = { working: tmp5, hasBadge: !tmp5 && hasUnread, accessibilityLabel: found.join(", ") };
  const intl = intl5.intl;
  const items = [intl.string(tmp(4133).uk6jhJ), , , ];
  let stringResult = null;
  if ("working" === kind) {
    const intl2 = tmp7(1113).intl;
    stringResult = intl2.string(tmp(4133)["Y8pS+n"]);
  }
  items[1] = stringResult;
  let kind1;
  if (status != null) {
    kind1 = status.kind;
  }
  let stringResult1 = null;
  if ("needs_input" === kind1) {
    const intl3 = tmp7(1113).intl;
    stringResult1 = intl3.string(tmp(4133).hfIuc7);
  }
  items[2] = stringResult1;
  let kind2;
  if (status != null) {
    kind2 = status.kind;
  }
  let stringResult2 = null;
  if ("unread" === kind2) {
    const intl4 = tmp7(1113).intl;
    stringResult2 = intl4.string(tmp(4133)["6XGnHJ"]);
  }
  items[3] = stringResult2;
  found = items.filter((item) => null != item);
  return obj;
};
