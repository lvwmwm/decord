// Module ID: 17022
// Function ID: 17023
// Name: VibegrationsFeedbackSheet
// Dependencies: [19, 21, 17003, 4485, 17009, 1115, 3710, 2]
// Exports: default

// Module 17022 (VibegrationsFeedbackSheet)
import ToastUtils from "ToastUtils" /* 4485 */;
import vibegrationsFeedback from "vibegrationsFeedback" /* 17003 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsFeedbackSheet.tsx");

export default function VibegrationsFeedbackSheet(projectId) {
  projectId = projectId.projectId;
  const promptCount = projectId.promptCount;
  let items = [projectId, promptCount];
  const callback = noop.useCallback((rating) => {
    const result = vibegrationsFeedback.submitVibegrationsFeedback(projectId, promptCount, rating, "VibegrationsFeedbackSheet");
    if (null != rating.rating) {
      ToastUtils.presentFeedbackSent();
      const tmpResult = ToastUtils;
    }
  }, items);
  const memo = noop.useMemo(() => {
    const items = [projectId(dependencyMap[2]).vibegrationsFeedbackSection()];
    return items;
  }, []);
  const obj = { headerLabel: null, ratingBody: null, categoriesHeader: null, optionsTree: null, trackOpen: null, trackReport: null };
  const intl = projectId(1115).intl;
  obj.headerLabel = intl.string(promptCount(3710).W7Sdp4);
  const intl2 = projectId(1115).intl;
  obj.ratingBody = intl2.string(promptCount(3710).dXJed8);
  const intl3 = projectId(1115).intl;
  obj.categoriesHeader = intl3.string(promptCount(3710).kLHFxL);
  obj.optionsTree = memo;
  obj.trackOpen = projectId(17003).trackVibegrationsFeedbackOpened;
  obj.trackReport = callback;
  return jsx(promptCount(17009), { headerLabel: null, ratingBody: null, categoriesHeader: null, optionsTree: null, trackOpen: null, trackReport: null });
};
