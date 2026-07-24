// Module ID: 14125
// Function ID: 108581
// Name: QuestBarPreview
// Dependencies: [31, 27, 33, 4130, 689, 14048, 14126, 14127, 2]
// Exports: QuestBarPreview

// Module 14125 (QuestBarPreview)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = { overlay: { position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 1000, elevation: 1000, pointerEvents: "box-none" } };
_createForOfIteratorHelperLoose = { position: "absolute", bottom: 0, left: require("_createForOfIteratorHelperLoose").space.PX_16, right: require("_createForOfIteratorHelperLoose").space.PX_16, zIndex: 1001, elevation: 1001 };
_createForOfIteratorHelperLoose.questDockContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/quests/native/QuestBarPreview.tsx");

export const QuestBarPreview = function QuestBarPreview(quest) {
  quest = quest.quest;
  const tmp = _createForOfIteratorHelperLoose();
  let tmp2 = null;
  if (null != quest) {
    tmp2 = null;
    if (quest.isVisible) {
      let obj = { style: tmp.overlay };
      obj = { style: tmp.questDockContainer };
      obj = {};
      const obj1 = {};
      const obj2 = { isRendered: true, isVisibleToUser: true, quest };
      obj1.value = obj2;
      obj1.children = jsx(require(14127) /* QuestDockWithGestureAnimation */.QuestDockWithEntranceAnimation, {});
      obj.children = jsx(importDefault(14126).Provider, {});
      obj.children = jsx(require(14048) /* QuestDockMode */.QuestDockExternalCoordinationContextProvider, {});
      obj.children = <View />;
      tmp2 = <View />;
    }
  }
  return tmp2;
};
