// Module ID: 16523
// Function ID: 16524
// Name: maybeShowVibegrationsFeedback
// Dependencies: [11326, 16513, 16524, 16542, 1981, 6655, 4830, 2]
// Exports: default

// Module 16523 (maybeShowVibegrationsFeedback)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import Constants from "Constants" /* 11326 */;
import FeedbackManagerDefault from "FeedbackManager" /* 16524 */;
import size from "module_2" /* 2 */;

const FeedbackType = Constants.FeedbackType;
let result = size.fileFinishedImporting("modules/vibegrations/native/maybeShowVibegrationsFeedback.tsx");

export default function maybeShowVibegrationsFeedback(arg0) {
  _require = arg0;
  if (!obj.consumeFeedbackSkipForProject(arg0)) {
    const countSettledTurnsResult = tmp(16513).countSettledTurns(arg0);
    importDefault = countSettledTurnsResult;
    let result = countSettledTurnsResult < tmp(16513).MINIMUM_SETTLED_TURNS_FOR_FEEDBACK;
    if (!result) {
      result = tmp(16513).hasShownFeedbackForProject(arg0);
      const tmpResult2 = tmp(16513);
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
    const tmpResult = tmp(16513);
  }
};
