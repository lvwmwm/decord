// Module ID: 11731
// Function ID: 11732
// Name: useAppChannelApplication
// Dependencies: [1078, 558, 7410, 2]

// Module 11731 (useAppChannelApplication)
import Constants from "Constants" /* 1078 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 7410 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/app_channels/useAppChannelApplication.tsx");

export const useAppChannelApplication = ReactCompilerGating.isReactCompilerEnabled() ? ((type) => {
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  let application_id;
  if (type === ChannelTypes.GUILD_APP) {
    application_id = type.application_id;
  }
  return ApplicationActionCreators.useApplication(application_id).data;
}) : ((type) => {
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  let application_id;
  if (type === ChannelTypes.GUILD_APP) {
    application_id = type.application_id;
  }
  return ApplicationActionCreators.useApplication(application_id).data;
});
