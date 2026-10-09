// Module ID: 6942
// Function ID: 6943
// Name: useAppChannelApplication
// Dependencies: [1085, 558, 6849, 2]

// Module 6942 (useAppChannelApplication)
import Constants from "Constants" /* 1085 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6849 */;
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
