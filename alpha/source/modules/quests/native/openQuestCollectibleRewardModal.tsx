// Module ID: 14944
// Function ID: 14945
// Name: openQuestCollectibleRewardModal
// Dependencies: [1385, 6836, 21, 5140, 575, 504, 9790, 9772, 5751, 1113, 7930, 14730, 2]
// Exports: openQuestCollectibleRewardModal

// Module 14944 (openQuestCollectibleRewardModal)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5751 */;
import QuestConstants from "QuestConstants" /* 6836 */;
import getQuestLogger from "getQuestLogger" /* 7930 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 9772 */;
import QuestRewardUtils from "QuestRewardUtils" /* 9790 */;
import ProductPurchaseSuccessActionCreatorsDefault from "ProductPurchaseSuccessActionCreators" /* 14730 */;
import UserStore from "UserStore" /* 1385 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
function QuestCollectibleRewardModalMessages(quest) {
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
  const obj5 = { variant: "heading-xl/semibold", style: tmp.title, children: intl.format(intl2.t.YNaxMp, { itemName: defaultRewardNameWithArticle }) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items1 = [hasOwnProperty(Text, obj5), ];
  const obj6 = { variant: "body-md/medium", style: tmp.title, children: claimedCollectibleRewardMessage };
  items1[1] = hasOwnProperty(Text_Text.Text, obj6);
  return metroImportDefault(metroRequire, obj4);
}
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { title: obj2 };
obj2 = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/quests/native/openQuestCollectibleRewardModal.tsx");

export function openQuestCollectibleRewardModal(onSuccess) {
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
          return hasOwnProperty(QuestCollectibleRewardModalMessages, obj);
        },
      onSuccess
    };
    const obj4 = ProductPurchaseSuccessActionCreatorsDefault;
    obj4.open(obj3);
  } else {
    questLogger.warn("Product is null");
  }
}
