// Module ID: 7010
// Function ID: 56247
// Name: updateOptionStates
// Dependencies: []
// Exports: fetchCommand, fetchCommands, fetchCommandsForApplication, performAutocomplete, setActiveCommand, setAppLauncherActiveCommand, setPreferredCommandId, updateApplicationGuildCommandPermissions, updateChannelState, updateOptionValidationStates, updateRegistry

// Module 7010 (updateOptionStates)
function updateOptionStates(id, changedOptionStates) {
  let obj = importDefault(dependencyMap[5]);
  obj = { type: "APPLICATION_COMMAND_UPDATE_OPTIONS", channelId: id, changedOptionStates };
  obj.dispatch(obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const Endpoints = arg1(dependencyMap[2]).Endpoints;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/application_commands/ApplicationCommandActionCreators.tsx");

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
    importDefault(dependencyMap[3])(command.inputType !== arg1(dependencyMap[4]).ApplicationCommandInputType.PLACEHOLDER, "command should not be placeholder");
    const tmp3 = importDefault(dependencyMap[3]);
  }
  importDefault(dependencyMap[5]).dispatch({ type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND", channelId, command, section, initialValues, location: _location, triggerSection, queryLength, sectionName, query, searchResultsPosition, source, commandOrigin });
};
export const setPreferredCommandId = function setPreferredCommandId(channelId, commandId) {
  let obj = importDefault(dependencyMap[5]);
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
  importDefault(dependencyMap[5]).dispatch({ type: "APPLICATION_COMMAND_UPDATE_CHANNEL_STATE", channelId, command, section, preferredCommandId, location: _location, changedOptionStates });
};
export const updateApplicationGuildCommandPermissions = function updateApplicationGuildCommandPermissions(arg0, arg1, arg2, permissions) {
  const HTTP = arg1(dependencyMap[6]).HTTP;
  let obj = { body: obj, url: Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(arg0, arg1, arg2), rejectWithError: false };
  obj = { permissions };
  return HTTP.put(obj);
};
export const performAutocomplete = function performAutocomplete(command, context, data) {
  let name;
  let query;
  importDefault(dependencyMap[3])(null != context.autocomplete, "Missing autocomplete context");
  ({ query, name } = context.autocomplete);
  let obj = importDefault(dependencyMap[7]);
  const fromTimestampResult = obj.fromTimestamp(Date.now());
  context = fromTimestampResult;
  if (null != context.channel) {
    let obj1 = importDefault(dependencyMap[5]);
    obj = { type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST", nonce: fromTimestampResult, channelId: context.channel.id, query, name };
    obj1.dispatch(obj);
    if (null == autocompleteChoices.getAutocompleteChoices(context.channel.id, name, query)) {
      const HTTP = context(dependencyMap[6]).HTTP;
      obj = { url: Endpoints.INTERACTIONS };
      obj1 = { type: context(dependencyMap[8]).InteractionTypes.APPLICATION_COMMAND_AUTOCOMPLETE, application_id: command.applicationId };
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
        let obj = callback(closure_2[5]);
        obj = { type: "INTERACTION_FAILURE", nonce: fromTimestampResult };
        obj.dispatch(obj);
      });
      const postResult = HTTP.post(obj);
    }
  }
};
export const fetchCommand = function fetchCommand(guildId, channelId, commandId) {
  let obj = importDefault(dependencyMap[5]);
  obj = { type: "APPLICATION_COMMAND_FETCH", channelId, commandId, guildId };
  obj.dispatch(obj);
};
export const fetchCommands = function fetchCommands(guildId, channelId, commandIds) {
  let obj = importDefault(dependencyMap[5]);
  obj = { type: "APPLICATION_COMMANDS_FETCH", channelId, commandIds, guildId };
  obj.dispatch(obj);
};
export const fetchCommandsForApplication = function fetchCommandsForApplication(arg0) {
  let applicationId;
  let channelId;
  let guildId;
  ({ guildId, channelId, applicationId } = arg0);
  importDefault(dependencyMap[5]).dispatch({ type: "APPLICATION_COMMANDS_FETCH_FOR_APPLICATION", channelId, guildId, applicationId });
};
export const updateRegistry = function updateRegistry(commands, applications, channelId) {
  let obj = importDefault(dependencyMap[5]);
  obj = { type: "APPLICATION_COMMAND_REGISTRY_UPDATE", applications, commands, channelId };
  obj.dispatch(obj);
};
export const setAppLauncherActiveCommand = function setAppLauncherActiveCommand(id, command) {
  if (null != command) {
    importDefault(dependencyMap[3])(command.inputType !== command(dependencyMap[4]).ApplicationCommandInputType.PLACEHOLDER, "command should not be placeholder");
    const tmp3 = importDefault(dependencyMap[3]);
  }
  let obj = importDefault(dependencyMap[5]);
  obj = { type: "APP_LAUNCHER_SET_ACTIVE_COMMAND", channelId: id, command };
  obj.dispatch(obj);
};
