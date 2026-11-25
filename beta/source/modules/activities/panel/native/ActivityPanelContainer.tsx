// Module ID: 19186
// Function ID: 19187
// Name: ActivityPanelContainer
// Dependencies: [19, 21, 19187, 19188, 19193, 2]

// Module 19186 (ActivityPanelContainer)
import Fragment from "Fragment" /* 21 */;
import ActivityPanelUtils from "ActivityPanelUtils" /* 19187 */;
import ActivityPanelControllerDefault from "ActivityPanelController" /* 19188 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(function ActivityPanelContainer() {
  let tmp2 = null;
  const obj = ActivityPanelUtils;
  if (obj.useIsConnectedToActivityInText()) {
    ActivityPanelControllerDefault;
    tmp2 = <tmp5>{null}</tmp5>;
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelContainer.tsx");

export default memoResult;
