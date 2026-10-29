// Module ID: 7406
// Function ID: 7407
// Name: useAppChannelApplication
// Dependencies: [1084, 558, 6868, 2]

// Module 7406 (useAppChannelApplication)
import Constants from "Constants" /* 1084 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6868 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAppChannelApplication(type) {
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  let application_id;
  if (type === ChannelTypes.GUILD_APP) {
    application_id = type.application_id;
  }
  const obj = ApplicationActionCreators;
  return obj.useApplication(application_id).data;
}) : (function useAppChannelApplication(type) {
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  let application_id;
  if (type === ChannelTypes.GUILD_APP) {
    application_id = type.application_id;
  }
  const obj = ApplicationActionCreators;
  return obj.useApplication(application_id).data;
});
const result = size.fileFinishedImporting("modules/app_channels/useAppChannelApplication.tsx");

export const useAppChannelApplication = tmp2;
