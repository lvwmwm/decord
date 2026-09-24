// Module ID: 11951
// Function ID: 11952
// Name: openQuestCollectibleRewardModal
// Dependencies: [1376, 5695, 21, 4790, 580, 558, 568, 504, 10611, 11643, 4786, 1119, 7982, 11412, 2]
// Exports: openQuestCollectibleRewardModal

// Module 11951 (openQuestCollectibleRewardModal)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import Text_Text from "Text/Text" /* 4786 */;
import getQuestLogger from "getQuestLogger" /* 7982 */;
import QuestRewardUtils from "QuestRewardUtils" /* 10611 */;
import ProductPurchaseSuccessActionCreatorsDefault from "ProductPurchaseSuccessActionCreators" /* 11412 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 11643 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
const QuestsExperimentLocations = fn(5695).QuestsExperimentLocations;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { title: { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((quest) => {
  const cResult = c.c(12);
  quest = quest.quest;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function f() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
  const tmpResult = initialize;
  const defaultRewardNameWithArticle = QuestRewardUtils.getDefaultRewardNameWithArticle(quest.config, stateFromStores);
  const tmpResult3 = QuestRewardUtils;
  const claimedCollectibleRewardMessage = hooks_QuestHooks.useClaimedCollectibleRewardMessage(quest.config);
  const Text = tmp(4786).Text;
  const intl = tmp(1119).intl;
  const formatResult = intl.format(util.t.YNaxMp, { itemName: defaultRewardNameWithArticle });
  if (cResult[2] === Text) {
    if (cResult[3] === tmp4.title) {
      if (cResult[4] === formatResult) {
        let tmp12 = cResult[5];
      }
      if (cResult[6] === claimedCollectibleRewardMessage) {
        if (cResult[7] === tmp4.title) {
          let tmp14 = cResult[8];
        }
        if (cResult[9] === tmp12) {
          if (cResult[10] === tmp14) {
            let tmp17 = cResult[11];
          }
          return tmp17;
        }
        const obj2 = { children: null };
        const items1 = [tmp12, tmp14];
        obj2.children = items1;
        const tmp20 = React5(timestampProducer, obj2);
        cResult[9] = tmp12;
        cResult[10] = tmp14;
        cResult[11] = tmp20;
        tmp17 = tmp20;
      }
      const obj3 = { variant: "text-md/medium", style: tmp4.title, children: claimedCollectibleRewardMessage };
      const tmp16 = hasOwnProperty(tmp(4786).Text, obj3);
      cResult[6] = claimedCollectibleRewardMessage;
      cResult[7] = tmp4.title;
      cResult[8] = tmp16;
      tmp14 = tmp16;
    }
  }
  const tmp13 = hasOwnProperty(Text, { variant: "heading-xl/bold", style: tmp4.title, children: formatResult });
  cResult[2] = Text;
  cResult[3] = tmp4.title;
  cResult[4] = formatResult;
  cResult[5] = tmp13;
  tmp12 = tmp13;
}) : ((quest) => {
  quest = quest.quest;
  const tmp = closure_8();
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const defaultRewardNameWithArticle = QuestRewardUtils.getDefaultRewardNameWithArticle(quest.config, stateFromStores);
  const obj4 = { children: null };
  const claimedCollectibleRewardMessage = hooks_QuestHooks.useClaimedCollectibleRewardMessage(quest.config);
  const obj5 = { variant: "heading-xl/bold", style: tmp.title, children: null };
  const intl = util.intl;
  obj5.children = intl.format(util.t.YNaxMp, { itemName: defaultRewardNameWithArticle });
  const items1 = [hasOwnProperty(Text_Text.Text, obj5), hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", style: tmp.title, children: claimedCollectibleRewardMessage })];
  obj4.children = items1;
  return React5(timestampProducer, obj4);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/openQuestCollectibleRewardModal.tsx");

export const openQuestCollectibleRewardModal = function openQuestCollectibleRewardModal(onSuccess) {
  ({ quest: require, product } = onSuccess);
  const questLogger = getQuestLogger.getQuestLogger({ location: QuestsExperimentLocations.QUEST_HOME_MOBILE });
  if (null != product) {
    const obj3 = {
      product,
      renderMessages() {
          return hasOwnProperty(closure_9, { quest });
        },
      onSuccess: onSuccess.onSuccess
    };
    ProductPurchaseSuccessActionCreatorsDefault.open(obj3);
  } else {
    questLogger.warn("Product is null");
  }
};
