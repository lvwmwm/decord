// Module ID: 16313
// Function ID: 16314
// Name: maybeShowVibegrationsFeedback
// Dependencies: [11121, 16314, 16315, 16333, 1981, 6459, 4800, 2]
// Exports: default

// Module 16313 (maybeShowVibegrationsFeedback)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Constants from "Constants" /* 11121 */;
import FeedbackManagerDefault from "FeedbackManager" /* 16315 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const FeedbackType = Constants.FeedbackType;
let result = size.fileFinishedImporting("modules/vibegrations/native/maybeShowVibegrationsFeedback.tsx");

export default function maybeShowVibegrationsFeedback(arg0) {
  let closure_0;
  let paths;
  _require = arg0;
  let obj = require("vibegrationsFeedback");
  const countSettledTurnsResult = obj.countSettledTurns(arg0);
  importDefault = countSettledTurnsResult;
  let result = countSettledTurnsResult < require("vibegrationsFeedback").MINIMUM_SETTLED_TURNS_FOR_FEEDBACK;
  const tmp = _require;
  if (!result) {
    const tmpResult = tmp(16314);
    result = tmpResult.hasShownFeedbackForProject(arg0);
  }
  if (!result) {
    const obj3 = FeedbackManagerDefault;
    const result1 = obj3.possiblyShowFeedbackModal(FeedbackType.VIBEGRATIONS, () => {
      let projectId;
      let obj = projectId(paths[1]);
      const result = obj.markFeedbackShownForProject(projectId);
      projectId = projectId(paths[4])(paths[3], paths.paths);
      let obj2 = projectId(paths[5]);
      obj2.runAfterInteractions(() => {
        const obj = ActionSheetActionCreatorsDefault;
        const obj2 = { projectId, promptCount: importDefault };
        obj.openLazy(projectId, "VibegrationsFeedback" + projectId, obj2);
      });
    });
  }
};
