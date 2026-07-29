// Module ID: 14203
// Function ID: 14204
// Name: QuestBarPreview
// Dependencies: [19, 17, 21, 4189, 712, 14126, 14204, 14205, 2]
// Exports: QuestBarPreview

// Module 14203 (QuestBarPreview)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { overlay: { position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 1000, elevation: 1000, pointerEvents: "box-none" }, questDockContainer: null };
createCacheKey = { position: "absolute", bottom: 0, left: require("Themes").space.PX_16, right: require("Themes").space.PX_16, zIndex: 1001, elevation: 1001 };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/quests/native/QuestBarPreview.tsx");

export const QuestBarPreview = function QuestBarPreview(quest) {
  quest = quest.quest;
  const tmp = createCacheKey();
  let tmp2 = null;
  if (null != quest) {
    tmp2 = null;
    if (quest.isVisible) {
      let obj = { style: null, children: null };
      obj[0] = tmp.overlay;
      obj = { style: null, children: null };
      obj[0] = tmp.questDockContainer;
      obj = { children: null };
      const obj1 = { value: null, children: null };
      const obj2 = { isRendered: true, isVisibleToUser: true, quest: null };
      obj2[2] = quest;
      obj1[0] = obj2;
      obj1[1] = jsx(require(14205) /* QuestDockWithGestureAnimation */.QuestDockWithEntranceAnimation, {});
      obj[0] = jsx(importDefault(14204).Provider, { value: null, children: null });
      obj[1] = jsx(require(14126) /* QuestDockMode */.QuestDockExternalCoordinationContextProvider, { children: null });
      obj[1] = <View>{null}</View>;
      tmp2 = <View>{null}</View>;
    }
  }
  return tmp2;
};
