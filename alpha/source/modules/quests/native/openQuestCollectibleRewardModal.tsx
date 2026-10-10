// Module ID: 12991
// Function ID: 12992
// Name: openQuestCollectibleRewardModal
// Dependencies: [1390, 5972, 21, 5092, 587, 558, 576, 504, 9189, 9170, 5088, 1126, 7397, 12770, 2]
// Exports: openQuestCollectibleRewardModal

// Module 12991 (openQuestCollectibleRewardModal)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import QuestConstants from "QuestConstants" /* 5972 */;
import getQuestLogger from "getQuestLogger" /* 7397 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 9170 */;
import QuestRewardUtils from "QuestRewardUtils" /* 9189 */;
import ProductPurchaseSuccessActionCreatorsDefault from "ProductPurchaseSuccessActionCreators" /* 12770 */;
import UserStore from "UserStore" /* 1390 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { title: obj2 };
obj2 = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
let closure_8 = createStyles.createStyles(obj);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestCollectibleRewardModalMessages(quest) {
  let currentUser;
  let items1;
  let tmp5;
  let tmp6;
  const obj = react;
  const cResult = obj.c(12);
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmpResult3 = QuestRewardUtils;
  const defaultRewardNameWithArticle = tmpResult3.getDefaultRewardNameWithArticle(quest.config, stateFromStores);
  const tmpResult4 = hooks_QuestHooks;
  const claimedCollectibleRewardMessage = tmpResult4.useClaimedCollectibleRewardMessage(quest.config);
  const Text = tmp(5088).Text;
  const title = tmp4.title;
  const intl = tmp(1126).intl;
  const formatResult = intl.format(intl2.t.YNaxMp, { itemName: defaultRewardNameWithArticle });
  if (cResult[2] === Text) {
    if (cResult[3] === tmp4.title) {
      let tmp12;
      if (cResult[4] === formatResult) {
        tmp12 = cResult[5];
      }
      if (cResult[6] === claimedCollectibleRewardMessage) {
        let tmp14;
        if (cResult[7] === tmp4.title) {
          tmp14 = cResult[8];
        }
        if (cResult[9] === tmp12) {
          let tmp17;
          if (cResult[10] === tmp14) {
            tmp17 = cResult[11];
          }
          return tmp17;
        }
        const obj2 = { children: items1 };
        items1 = [tmp12, tmp14];
        const tmp20 = metroImportDefault(metroRequire, obj2);
        cResult[9] = tmp12;
        cResult[10] = tmp14;
        cResult[11] = tmp20;
        tmp17 = tmp20;
      }
      const obj3 = { variant: "text-md/medium", style: tmp4.title, children: claimedCollectibleRewardMessage };
      const tmp16 = hasOwnProperty(Text_Text.Text, obj3);
      cResult[6] = claimedCollectibleRewardMessage;
      cResult[7] = tmp4.title;
      cResult[8] = tmp16;
      tmp14 = tmp16;
    }
  }
  const tmp13 = hasOwnProperty(Text, { variant: "heading-xl/bold", style: title, children: formatResult });
  cResult[2] = Text;
  cResult[3] = tmp4.title;
  cResult[4] = formatResult;
  cResult[5] = tmp13;
  tmp12 = tmp13;
}) : (function QuestCollectibleRewardModalMessages(quest) {
  let currentUser;
  let intl;
  let items1;
  quest = quest.quest;
  const tmp = closure_8();
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = QuestRewardUtils;
  const defaultRewardNameWithArticle = obj2.getDefaultRewardNameWithArticle(quest.config, stateFromStores);
  const obj4 = { children: items1 };
  const obj3 = hooks_QuestHooks;
  const claimedCollectibleRewardMessage = obj3.useClaimedCollectibleRewardMessage(quest.config);
  const obj5 = { variant: "heading-xl/bold", style: tmp.title, children: intl.format(intl2.t.YNaxMp, { itemName: defaultRewardNameWithArticle }) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items1 = [hasOwnProperty(Text, obj5), ];
  const obj6 = { variant: "text-md/medium", style: tmp.title, children: claimedCollectibleRewardMessage };
  items1[1] = hasOwnProperty(Text_Text.Text, obj6);
  return metroImportDefault(metroRequire, obj4);
});
const result = size.fileFinishedImporting("modules/quests/native/openQuestCollectibleRewardModal.tsx");

export const openQuestCollectibleRewardModal = function openQuestCollectibleRewardModal(onSuccess) {
  let product;
  let quest;
  ({ quest: require, product } = onSuccess);
  onSuccess = onSuccess.onSuccess;
  let obj = getQuestLogger;
  const obj2 = { location: QuestsExperimentLocations.QUEST_HOME_MOBILE };
  const questLogger = obj.getQuestLogger(obj2);
  if (null != product) {
    const obj3 = {
      product,
      renderMessages() {
          const obj = { quest: require };
          return hasOwnProperty(closure_9, obj);
        },
      onSuccess
    };
    const obj4 = ProductPurchaseSuccessActionCreatorsDefault;
    obj4.open(obj3);
  } else {
    questLogger.warn("Product is null");
  }
};
