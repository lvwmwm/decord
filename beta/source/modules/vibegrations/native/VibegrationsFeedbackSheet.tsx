// Module ID: 16333
// Function ID: 16334
// Name: VibegrationsFeedbackSheet
// Dependencies: [19, 21, 16314, 4527, 16320, 1115, 3715, 2]
// Exports: default

// Module 16333 (VibegrationsFeedbackSheet)
import ToastUtils from "ToastUtils" /* 4527 */;
import vibegrationsFeedback from "vibegrationsFeedback" /* 16314 */;
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
  obj.headerLabel = intl.string(promptCount(3715).W7Sdp4);
  const intl2 = projectId(1115).intl;
  obj.ratingBody = intl2.string(promptCount(3715).dXJed8);
  const intl3 = projectId(1115).intl;
  obj.categoriesHeader = intl3.string(promptCount(3715).kLHFxL);
  obj.optionsTree = memo;
  obj.trackOpen = projectId(16314).trackVibegrationsFeedbackOpened;
  obj.trackReport = callback;
  return jsx(promptCount(16320), { headerLabel: null, ratingBody: null, categoriesHeader: null, optionsTree: null, trackOpen: null, trackReport: null });
};
