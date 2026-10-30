// Module ID: 14152
// Function ID: 14153
// Name: useProvisionalAccountExplanationText
// Dependencies: [19, 1072, 14153, 1114, 2062, 2]
// Exports: useProvisionalAccountExplanationText

// Module 14152 (useProvisionalAccountExplanationText)
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1114 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2062 */;
import useProvisionalAccountApplicationDefault from "useProvisionalAccountApplication" /* 14153 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let importDefault;

const HelpdeskArticles = Constants.HelpdeskArticles;
const result = size.fileFinishedImporting("modules/provisional_accounts/hooks/useProvisionalAccountExplanationText.tsx");

export function useProvisionalAccountExplanationText(renderApplicationName) {
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
}
