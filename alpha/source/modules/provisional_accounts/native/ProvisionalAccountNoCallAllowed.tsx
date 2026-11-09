// Module ID: 15495
// Function ID: 15496
// Name: ProvisionalAccountNoCallAllowed
// Dependencies: [19, 1072, 21, 5140, 6096, 7152, 1113, 2185, 6096, 2]
// Exports: default

// Module 15495 (ProvisionalAccountNoCallAllowed)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2185 */;
import AlertModal2 from "AlertModal" /* 6096 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const HelpdeskArticles = Constants.HelpdeskArticles;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ header: { alignSelf: "center" } });
const result = size.fileFinishedImporting("modules/provisional_accounts/native/ProvisionalAccountNoCallAllowed.tsx");

export default function ProvisionalAccountNoCallAllowed() {
  let intl3;
  let obj4;
  const tmp = closure_5();
  const AlertModal = AlertModal2.AlertModal;
  const intl = intl4.intl;
  const intl2 = intl4.intl;
  const format = intl2.format;
  const obj3 = { helpdeskArticle: obj4.getArticleURL(HelpdeskArticles.SLAYER_PROVISIONAL_ACCOUNTS) };
  const prop = intl4.t["tx08s+"];
  obj4 = HelpdeskUtilsDefault;
  const AlertActions = AlertModal2.AlertActions;
  ({ variant: "secondary", text: intl3.string(intl4.t["NX+WJN"]) });
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl4.intl;
  return <AlertModal header={null} title={intl.string(intl4.t["vh+Zpq"])} content={format(prop, obj3)} actions={null} />;
};
