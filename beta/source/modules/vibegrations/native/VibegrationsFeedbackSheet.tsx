// Module ID: 16333
// Function ID: 16334
// Name: VibegrationsFeedbackSheet
// Dependencies: [19, 21, 16314, 4527, 16320, 1115, 3715, 2]
// Exports: default

// Module 16333 (VibegrationsFeedbackSheet)
import Fragment from "Fragment" /* 21 */;
import vibegrationsFeedback from "vibegrationsFeedback" /* 16314 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const ToastUtils = tmp(4527);
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsFeedbackSheet.tsx");

export default function VibegrationsFeedbackSheet(projectId) {
  projectId = projectId.projectId;
  const promptCount = projectId.promptCount;
  let items = [projectId, promptCount];
  const callback = react.useCallback((rating) => {
    const obj = vibegrationsFeedback;
    const result = obj.submitVibegrationsFeedback(projectId, promptCount, rating, "VibegrationsFeedbackSheet");
    if (null != rating.rating) {
      const tmpResult = ToastUtils;
      tmpResult.presentFeedbackSent();
    }
  }, items);
  const memo = react.useMemo(() => {
    const items = [];
    const obj = projectId(dependencyMap[2]);
    items[0] = obj.vibegrationsFeedbackSection();
    return items;
  }, []);
  promptCount(16320);
  const intl = projectId(1115).intl;
  const intl2 = projectId(1115).intl;
  const intl3 = projectId(1115).intl;
  return <tmp3 headerLabel={intl.string(promptCount(3715).W7Sdp4)} ratingBody={intl2.string(promptCount(3715).dXJed8)} categoriesHeader={intl3.string(promptCount(3715).kLHFxL)} optionsTree={memo} trackOpen={projectId(16314).trackVibegrationsFeedbackOpened} trackReport={callback} />;
};
