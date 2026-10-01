// Module ID: 12126
// Function ID: 12127
// Name: useProvisionalAccountExplanationText
// Dependencies: [19, 1074, 12127, 1115, 2111, 2]
// Exports: useProvisionalAccountExplanationText

// Module 12126 (useProvisionalAccountExplanationText)
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import useProvisionalAccountApplicationDefault from "useProvisionalAccountApplication" /* 12127 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let importDefault;

const HelpdeskArticles = Constants.HelpdeskArticles;
const result = size.fileFinishedImporting("modules/provisional_accounts/hooks/useProvisionalAccountExplanationText.tsx");

export const useProvisionalAccountExplanationText = function useProvisionalAccountExplanationText(renderApplicationName) {
  let closure_1;
  renderApplicationName = renderApplicationName.renderApplicationName;
  const tmp = useProvisionalAccountApplicationDefault(renderApplicationName.userId);
  importDefault = tmp;
  const items = [tmp, renderApplicationName];
  return react.useMemo(() => {
    let formatResult;
    let obj2;
    let obj4;
    if (null != closure_1) {
      const intl = intl3.intl;
      const format = intl.format;
      const obj = {
        helpdeskArticle: obj2.getArticleURL(HelpdeskArticles.SLAYER_PROVISIONAL_ACCOUNTS),
        applicationName() {
            return renderApplicationName(closure_1_1);
          }
      };
      const rSUACb = intl3.t.rSUACb;
      obj2 = HelpdeskUtilsDefault;
      formatResult = format(rSUACb, obj);
    } else {
      const intl2 = intl3.intl;
      const format2 = intl2.format;
      const obj3 = { helpdeskArticle: obj4.getArticleURL(HelpdeskArticles.SLAYER_PROVISIONAL_ACCOUNTS) };
      const prop = intl3.t["q+N8L6"];
      obj4 = HelpdeskUtilsDefault;
      formatResult = format2(prop, obj3);
    }
    return formatResult;
  }, items);
};
