// Module ID: 7019
// Function ID: 56324
// Name: updateOptionStates
// Dependencies: [1194, 7020, 653, 44, 6755, 686, 507, 21, 1881, 2]
// Exports: fetchCommand, fetchCommands, fetchCommandsForApplication, performAutocomplete, setActiveCommand, setAppLauncherActiveCommand, setPreferredCommandId, updateApplicationGuildCommandPermissions, updateChannelState, updateOptionValidationStates, updateRegistry

// Module 7019 (updateOptionStates)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { Endpoints } from "ME";

let require = arg1;
function updateOptionStates(id, changedOptionStates) {
  let obj = importDefault(686);
  obj = { type: "APPLICATION_COMMAND_UPDATE_OPTIONS", channelId: id, changedOptionStates };
  obj.dispatch(obj);
}
const result = require("ME").fileFinishedImporting("modules/application_commands/ApplicationCommandActionCreators.tsx");

export const setActiveCommand = function setActiveCommand(command) {
  let _location;
  let channelId;
  let commandOrigin;
  let initialValues;
  let query;
  let queryLength;
  let searchResultsPosition;
  let section;
  let sectionName;
  let source;
  let triggerSection;
  command = command.command;
  ({ channelId, section, location: _location, initialValues, triggerSection, queryLength, sectionName, query, searchResultsPosition, source, commandOrigin } = command);
  if (null != command) {
    importDefault(44)(command.inputType !== require(6755) /* ApplicationCommandSectionType */.ApplicationCommandInputType.PLACEHOLDER, "command should not be placeholder");
    const tmp3 = importDefault(44);
  }
  importDefault(686).dispatch({ type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND", channelId, command, section, initialValues, location: _location, triggerSection, queryLength, sectionName, query, searchResultsPosition, source, commandOrigin });
};
export const setPreferredCommandId = function setPreferredCommandId(channelId, commandId) {
  let obj = importDefault(686);
  obj = { type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", channelId, commandId };
  obj.dispatch(obj);
};
export { updateOptionStates };
export const updateOptionValidationStates = function updateOptionValidationStates(id) {
  const entries = Object.entries(arg1);
  updateOptionStates(id, Object.fromEntries(entries.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    const items = [tmp, { lastValidationResult: tmp2 }];
    return items;
  })));
};
export const updateChannelState = function updateChannelState(arg0) {
  let _location;
  let changedOptionStates;
  let channelId;
  let command;
  let preferredCommandId;
  let section;
  ({ channelId, command, section, preferredCommandId, location: _location, changedOptionStates } = arg0);
  importDefault(686).dispatch({ type: "APPLICATION_COMMAND_UPDATE_CHANNEL_STATE", channelId, command, section, preferredCommandId, location: _location, changedOptionStates });
};
export const updateApplicationGuildCommandPermissions = function updateApplicationGuildCommandPermissions(arg0, arg1, arg2, permissions) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  obj = { body: obj, url: Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(arg0, arg1, arg2), rejectWithError: false };
  obj = { permissions };
  return HTTP.put(obj);
};
export const performAutocomplete = function performAutocomplete(command, context, data) {
  let name;
  let query;
  importDefault(44)(null != context.autocomplete, "Missing autocomplete context");
  ({ query, name } = context.autocomplete);
  let obj = importDefault(21);
  const fromTimestampResult = obj.fromTimestamp(Date.now());
  const require = fromTimestampResult;
  if (null != context.channel) {
    let obj1 = importDefault(686);
    obj = { type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST", nonce: fromTimestampResult, channelId: context.channel.id, query, name };
    obj1.dispatch(obj);
    if (null == autocompleteChoices.getAutocompleteChoices(context.channel.id, name, query)) {
      const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
      obj = { url: Endpoints.INTERACTIONS };
      obj1 = { type: require(1881) /* PermissionOverwriteType */.InteractionTypes.APPLICATION_COMMAND_AUTOCOMPLETE, application_id: command.applicationId };
      const guild = context.guild;
      let id;
      if (null != guild) {
        id = guild.id;
      }
      obj1.guild_id = id;
      obj1.channel_id = context.channel.id;
      obj1.session_id = sessionId.getSessionId();
      obj1.data = data;
      obj1.nonce = fromTimestampResult;
      obj.body = obj1;
      obj.timeout = 3000;
      obj.rejectWithError = true;
      HTTP.post(obj).catch(() => {
        let obj = outer1_1(outer1_2[5]);
        obj = { type: "INTERACTION_FAILURE", nonce: closure_0 };
        obj.dispatch(obj);
      });
      const postResult = HTTP.post(obj);
    }
  }
};
export const fetchCommand = function fetchCommand(guildId, channelId, commandId) {
  let obj = importDefault(686);
  obj = { type: "APPLICATION_COMMAND_FETCH", channelId, commandId, guildId };
  obj.dispatch(obj);
};
export const fetchCommands = function fetchCommands(guildId, channelId, commandIds) {
  let obj = importDefault(686);
  obj = { type: "APPLICATION_COMMANDS_FETCH", channelId, commandIds, guildId };
  obj.dispatch(obj);
};
export const fetchCommandsForApplication = function fetchCommandsForApplication(arg0) {
  let applicationId;
  let channelId;
  let guildId;
  ({ guildId, channelId, applicationId } = arg0);
  importDefault(686).dispatch({ type: "APPLICATION_COMMANDS_FETCH_FOR_APPLICATION", channelId, guildId, applicationId });
};
export const updateRegistry = function updateRegistry(commands, applications, channelId) {
  let obj = importDefault(686);
  obj = { type: "APPLICATION_COMMAND_REGISTRY_UPDATE", applications, commands, channelId };
  obj.dispatch(obj);
};
export const setAppLauncherActiveCommand = function setAppLauncherActiveCommand(id, command) {
  if (null != command) {
    importDefault(44)(command.inputType !== require(6755) /* ApplicationCommandSectionType */.ApplicationCommandInputType.PLACEHOLDER, "command should not be placeholder");
    const tmp3 = importDefault(44);
  }
  let obj = importDefault(686);
  obj = { type: "APP_LAUNCHER_SET_ACTIVE_COMMAND", channelId: id, command };
  obj.dispatch(obj);
};
