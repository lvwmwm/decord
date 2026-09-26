// Module ID: 17002
// Function ID: 17003
// Name: maybeShowVibegrationsFeedback
// Dependencies: [11906, 17003, 17004, 17022, 1980, 7315, 4755, 2]
// Exports: default

// Module 17002 (maybeShowVibegrationsFeedback)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import Constants from "Constants" /* 11906 */;
import FeedbackManagerDefault from "FeedbackManager" /* 17004 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const FeedbackType = Constants.FeedbackType;
let result = size.fileFinishedImporting("modules/vibegrations/native/maybeShowVibegrationsFeedback.tsx");

export default function maybeShowVibegrationsFeedback(arg0) {
  _require = arg0;
  const countSettledTurnsResult = require("vibegrationsFeedback").countSettledTurns(arg0);
  importDefault = countSettledTurnsResult;
  let result = countSettledTurnsResult < require("vibegrationsFeedback").MINIMUM_SETTLED_TURNS_FOR_FEEDBACK;
  if (!result) {
    result = require("vibegrationsFeedback").hasShownFeedbackForProject(arg0);
    const tmpResult = require("vibegrationsFeedback");
  }
  if (!result) {
    const result1 = FeedbackManagerDefault.possiblyShowFeedbackModal(FeedbackType.VIBEGRATIONS, () => {
      const result = projectId(paths[1]).markFeedbackShownForProject(projectId);
      projectId = projectId(paths[4])(paths[3], paths.paths);
      const obj = projectId(paths[1]);
      projectId(paths[5]).runAfterInteractions(() => {
        ActionSheetActionCreatorsDefault.openLazy(projectId, "VibegrationsFeedback" + projectId, { projectId, promptCount: countSettledTurnsResult });
      });
    });
  }
};
