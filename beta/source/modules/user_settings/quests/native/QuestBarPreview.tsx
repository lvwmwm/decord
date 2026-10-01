// Module ID: 14710
// Function ID: 14711
// Name: QuestBarPreview
// Dependencies: [19, 17, 21, 4836, 576, 14628, 14711, 14712, 2]
// Exports: QuestBarPreview

// Module 14710 (QuestBarPreview)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import QuestDockExternalCoordinationContext from "QuestDockExternalCoordinationContext" /* 14628 */;
import reactDefault from "react" /* 14711 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let rect;
const View = react_native.View;
const jsx = Fragment.jsx;
const value = { isRendered: true, isVisibleToUser: true };
const obj = { overlay: { position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 1000, elevation: 1000, pointerEvents: "box-none" }, questDockContainer: rect };
rect = { position: "absolute", bottom: 0, left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, zIndex: 1001, elevation: 1001 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestBarPreview.tsx");

export const QuestBarPreview = function QuestBarPreview(quest) {
  quest = quest.quest;
  const isVisible = quest.isVisible;
  const tmp = closure_6();
  let tmp2 = null;
  if (null != quest) {
    tmp2 = null;
    if (isVisible) {
      const QuestDockExternalCoordinationContextProvider = QuestDockExternalCoordinationContext.QuestDockExternalCoordinationContextProvider;
      const Provider = reactDefault.Provider;
      tmp2 = <View style={tmp.overlay}>{null}</View>;
    }
  }
  return tmp2;
};
