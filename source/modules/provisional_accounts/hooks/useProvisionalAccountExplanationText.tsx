// Module ID: 11651
// Function ID: 90373
// Name: useProvisionalAccountExplanationText
// Dependencies: []
// Exports: useProvisionalAccountExplanationText

// Module 11651 (useProvisionalAccountExplanationText)
let closure_3 = importAll(dependencyMap[0]);
const HelpdeskArticles = arg1(dependencyMap[1]).HelpdeskArticles;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/provisional_accounts/hooks/useProvisionalAccountExplanationText.tsx");

export const useProvisionalAccountExplanationText = function useProvisionalAccountExplanationText(renderApplicationName) {
  renderApplicationName = renderApplicationName.renderApplicationName;
  const arg1 = renderApplicationName;
  const tmp = importDefault(dependencyMap[2])(renderApplicationName.userId);
  const importDefault = tmp;
  const items = [tmp, renderApplicationName];
  return React.useMemo(() => {
    if (null != tmp) {
      const intl2 = renderApplicationName(closure_2[3]).intl;
      let obj = {
        helpdeskArticle: tmp(closure_2[4]).getArticleURL(constants.SLAYER_PROVISIONAL_ACCOUNTS),
        applicationName() {
            return callback(closure_1);
          }
      };
      let formatResult = intl2.format(renderApplicationName(closure_2[3]).t.rSUACb, obj);
      const obj4 = tmp(closure_2[4]);
    } else {
      const intl = renderApplicationName(closure_2[3]).intl;
      obj = { helpdeskArticle: renderApplicationName(closure_2[4]).getArticleURL(constants.SLAYER_PROVISIONAL_ACCOUNTS) };
      formatResult = intl.format(renderApplicationName(closure_2[3]).t.q+N8L6, obj);
      const obj2 = renderApplicationName(closure_2[4]);
    }
    return formatResult;
  }, items);
};
