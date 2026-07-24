// Module ID: 10963
// Function ID: 85200
// Name: QuestCollectibleRewardModalMessages
// Dependencies: [1849, 4976, 33, 4130, 689, 566, 9499, 10493, 4126, 1212, 6947, 9804, 2]
// Exports: openQuestCollectibleRewardModal

// Module 10963 (QuestCollectibleRewardModalMessages)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { QuestsExperimentLocations } from "QuestsExperimentLocations";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function QuestCollectibleRewardModalMessages(quest) {
  quest = quest.quest;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getCurrentUser());
  let obj1 = require(9499) /* getCollectiblesQuestReward */;
  const defaultRewardNameWithArticle = obj1.getDefaultRewardNameWithArticle(quest.config, stateFromStores);
  obj = {};
  const claimedCollectibleRewardMessage = require(10493) /* _createForOfIteratorHelperLoose */.useClaimedCollectibleRewardMessage(quest.config);
  obj = { variant: "heading-xl/bold", style: tmp.title };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.format(require(1212) /* getSystemLocale */.t.YNaxMp, { itemName: defaultRewardNameWithArticle });
  const items1 = [callback(require(4126) /* Text */.Text, obj), ];
  obj1 = { variant: "text-md/medium", style: tmp.title, children: claimedCollectibleRewardMessage };
  items1[1] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items1;
  return callback2(closure_6, obj);
}
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { textAlign: "center", marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_32 };
_createForOfIteratorHelperLoose.title = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/quests/native/openQuestCollectibleRewardModal.tsx");

export const openQuestCollectibleRewardModal = function openQuestCollectibleRewardModal(onSuccess) {
  let product;
  let require;
  ({ quest: require, product } = onSuccess);
  let obj = require(6947) /* getQuestLogger */;
  obj = { location: QuestsExperimentLocations.QUEST_HOME_MOBILE };
  const questLogger = obj.getQuestLogger(obj);
  if (null != product) {
    obj = {
      product,
      renderMessages() {
          return outer1_5(outer1_9, { quest: closure_0 });
        },
      onSuccess: onSuccess.onSuccess
    };
    importDefault(9804).open(obj);
    const obj4 = importDefault(9804);
  } else {
    questLogger.warn("Product is null");
  }
};
