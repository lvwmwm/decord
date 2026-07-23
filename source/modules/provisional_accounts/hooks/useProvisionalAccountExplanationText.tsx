// Module ID: 11662
// Function ID: 90447
// Name: useProvisionalAccountExplanationText
// Dependencies: [31, 653, 11663, 1212, 1920, 2]
// Exports: useProvisionalAccountExplanationText

// Module 11662 (useProvisionalAccountExplanationText)
import result from "result";
import { HelpdeskArticles } from "ME";

const require = arg1;
const result = require("useProvisionalAccountApplication").fileFinishedImporting("modules/provisional_accounts/hooks/useProvisionalAccountExplanationText.tsx");

export const useProvisionalAccountExplanationText = function useProvisionalAccountExplanationText(renderApplicationName) {
  renderApplicationName = renderApplicationName.renderApplicationName;
  const tmp = importDefault(11663)(renderApplicationName.userId);
  importDefault = tmp;
  const items = [tmp, renderApplicationName];
  return React.useMemo(() => {
    if (null != tmp) {
      const intl2 = renderApplicationName(outer1_2[3]).intl;
      let obj = {
        helpdeskArticle: tmp(outer1_2[4]).getArticleURL(outer1_4.SLAYER_PROVISIONAL_ACCOUNTS),
        applicationName() {
            return outer1_0(outer1_1);
          }
      };
      let formatResult = intl2.format(renderApplicationName(outer1_2[3]).t.rSUACb, obj);
      const obj4 = tmp(outer1_2[4]);
    } else {
      const intl = renderApplicationName(outer1_2[3]).intl;
      obj = { helpdeskArticle: renderApplicationName(outer1_2[4]).getArticleURL(outer1_4.SLAYER_PROVISIONAL_ACCOUNTS) };
      formatResult = intl.format(renderApplicationName(outer1_2[3]).t["q+N8L6"], obj);
      const obj2 = renderApplicationName(outer1_2[4]);
    }
    return formatResult;
  }, items);
};
