// Module ID: 14108
// Function ID: 14109
// Name: ProvisionalAccountNoCallAllowed
// Dependencies: [19, 1078, 21, 4790, 558, 568, 7208, 1119, 2112, 5148, 5148, 2]

// Module 14108 (ProvisionalAccountNoCallAllowed)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2112 */;
import AlertModal from "AlertModal" /* 5148 */;
import CircleErrorIcon from "CircleErrorIcon" /* 7208 */;
import noop from "module_19" /* 19 */;

require = fn;
const HelpdeskArticles = fn(1078).HelpdeskArticles;
const jsx = fn(21).jsx;
const createStyles = fn(4790);
let closure_5 = createStyles.createStyles({ header: { alignSelf: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/provisional_accounts/native/ProvisionalAccountNoCallAllowed.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(7);
  const tmp4 = closure_5();
  if (cResult[0] !== tmp4.header) {
    const obj2 = { size: "lg", style: tmp4.header };
    const tmp7 = jsx(tmp(7208).CircleErrorIcon, { size: "lg", style: tmp4.header });
    cResult[0] = tmp4.header;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t["vh+Zpq"]);
    const intl2 = tmp(1119).intl;
    const obj3 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SLAYER_PROVISIONAL_ACCOUNTS) };
    const formatResult = intl2.format(tmp(1119).t["tx08s+"], obj3);
    cResult[2] = stringResult;
    cResult[3] = formatResult;
    let tmp9 = formatResult;
    let tmp8 = stringResult;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { children: null };
    const obj6 = { variant: "secondary", text: null };
    const intl3 = tmp(1119).intl;
    obj6.text = intl3.string(tmp(1119).t["NX+WJN"]);
    obj5.children = jsx(tmp(5148).AlertActionButton, { variant: "secondary", text: null }, "got-it");
    const tmp16 = jsx(tmp(5148).AlertActions, { children: null });
    cResult[4] = tmp16;
    let tmp14 = tmp16;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] !== tmp5) {
    const obj7 = { header: tmp5, title: tmp8, content: tmp9, actions: tmp14 };
    const tmp19 = jsx(tmp(5148).AlertModal, { header: tmp5, title: tmp8, content: tmp9, actions: tmp14 });
    cResult[5] = tmp5;
    cResult[6] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[6];
  }
  return tmp17;
}) : (() => {
  const obj = { header: null, title: null, content: null, actions: null };
  const tmp = closure_5();
  obj.header = jsx(CircleErrorIcon.CircleErrorIcon, { size: "lg", style: closure_5().header });
  const intl = util.intl;
  obj.title = intl.string(util.t["vh+Zpq"]);
  const intl2 = util.intl;
  const obj3 = { helpdeskArticle: null };
  const obj2 = { size: "lg", style: closure_5().header };
  obj3.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SLAYER_PROVISIONAL_ACCOUNTS);
  obj.content = intl2.format(util.t["tx08s+"], obj3);
  const obj5 = { children: null };
  const obj6 = { variant: "secondary", text: null };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t["NX+WJN"]);
  obj5.children = jsx(AlertModal.AlertActionButton, { variant: "secondary", text: null }, "got-it");
  obj.actions = jsx(AlertModal.AlertActions, { children: null });
  return jsx(AlertModal.AlertModal, { header: null, title: null, content: null, actions: null });
});
