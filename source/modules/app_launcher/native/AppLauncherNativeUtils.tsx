// Module ID: 11201
// Function ID: 87105
// Name: handleApplicationSelected
// Dependencies: [31, 1348, 1849, 1455, 653, 4566, 4324, 6755, 11202, 6753, 1881, 7019, 1831, 8006, 1392, 10911, 9419, 11207, 5468, 10554, 4099, 2]
// Exports: getAppLauncherIconSource, getInitialOptionValues, handleApplicationCommandSelected, handleApplicationSelected, handleViewAllSelected, useHandleActivityItemSelected, useLogAppLauncherEmptyStateView

// Module 11201 (handleApplicationSelected)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import APP_LAUNCHER_BUILT_IN_SECTION_ICON from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import { AnalyticEvents } from "ME";
import { BuiltInSectionId } from "TRUE_OPTION_NAME";

let closure_7;
let closure_8;
const require = arg1;
({ APP_LAUNCHER_BUILT_IN_SECTION_ICON: closure_7, AppLauncherRouteName: closure_8 } = APP_LAUNCHER_BUILT_IN_SECTION_ICON);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_launcher/native/AppLauncherNativeUtils.tsx");

export const handleApplicationSelected = function handleApplicationSelected(entrypoint) {
  let _location;
  let application;
  let context;
  let installOnDemand;
  let navigates;
  let navigation;
  let query;
  let searchResultsPosition;
  let sectionName;
  ({ application, navigation, sectionName, navigates } = entrypoint);
  ({ location: _location, context, installOnDemand, query, searchResultsPosition } = entrypoint);
  if (navigates === undefined) {
    navigates = true;
  }
  entrypoint = entrypoint.entrypoint;
  let obj = require(4324) /* _createForOfIteratorHelperLoose */;
  obj = { location: _location };
  if (application.id === BuiltInSectionId.BUILT_IN) {
    let APP = require(6755) /* ApplicationCommandSectionType */.ApplicationCommandTriggerSections.BUILT_IN;
  } else {
    APP = require(6755) /* ApplicationCommandSectionType */.ApplicationCommandTriggerSections.APP;
  }
  obj.section = APP;
  const id = application.id;
  let tmp5 = null;
  if (null != id) {
    tmp5 = id;
  }
  obj.application_id = tmp5;
  obj.section_name = sectionName;
  obj.query = query;
  obj.search_results_position = searchResultsPosition;
  obj.source = entrypoint;
  obj.trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_SECTION_SELECTED, obj);
  if (navigates) {
    obj = { application, context, installOnDemand, sectionName, entrypoint };
    navigation.navigate(constants.APPLICATION_VIEW, obj);
  }
};
export const handleViewAllSelected = function handleViewAllSelected(arg0) {
  let _location;
  let applications;
  let commands;
  let context;
  let navigation;
  let promotedApplicationIds;
  let sectionDescriptors;
  let sectionItemType;
  let sectionName;
  let sectionOverallPosition;
  let title;
  ({ navigation, sectionName, applications, sectionItemType, commands } = arg0);
  ({ location: _location, context, sectionOverallPosition, sectionDescriptors, title, promotedApplicationIds } = arg0);
  let obj = require(4324) /* _createForOfIteratorHelperLoose */;
  obj = { section_name: sectionName, num: sectionItemType === require(11202) /* Placeholder */.SectionItemType.APPS ? applications.length : commands.length };
  obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SECTION_VIEW_MORE, obj);
  navigation.navigate(constants.APP_LIST_VIEW, { analyticsLocation: _location, context, sectionName, sectionOverallPosition, applications, sectionItemType, commands, sectionDescriptors, title, promotedApplicationIds });
};
export const handleApplicationCommandSelected = function handleApplicationCommandSelected(arg0) {
  let _location;
  let command;
  let context;
  let entrypoint;
  let installOnDemand;
  let navigation;
  let onCommandExecuted;
  let query;
  let searchResultsPosition;
  let section;
  let sectionDescriptors;
  let sectionName;
  ({ location: _location, context, command } = arg0);
  ({ section, sectionDescriptors, query, navigation, installOnDemand, sectionName, entrypoint } = arg0);
  ({ searchResultsPosition, onCommandExecuted } = arg0);
  let obj = command(6753);
  obj = { command, location: _location, triggerSection: command(6753).getCommandTriggerSection(section), queryLength: query.length, sectionName, query, searchResultsPosition, source: entrypoint };
  obj.trackCommandSelected(obj);
  if (command.type === command(1881).ApplicationCommandType.PRIMARY_ENTRY_POINT) {
    obj = { application: section.application, context, installOnDemand, sectionName, entrypoint };
    navigation.navigate(constants.APPLICATION_VIEW, obj);
  } else {
    let tmp4 = section;
    if (section.id === BuiltInSectionId.FRECENCY) {
      const found = sectionDescriptors.find((id) => id.id === command.applicationId);
      tmp4 = section;
      if (null != found) {
        tmp4 = found;
      }
    }
    if ("channel" === context.type) {
      const result = importAll(7019).setAppLauncherActiveCommand(context.channel.id, command);
      const obj1 = { command, section: tmp4, context, installOnDemand, sectionName, analyticsLocation: _location, onCommandExecuted };
      navigation.navigate(constants.COMMAND_VIEW, obj1);
      const obj4 = importAll(7019);
    }
  }
};
export const getInitialOptionValues = function getInitialOptionValues(option) {
  let prefilledValues;
  let roles;
  option = option.option;
  ({ prefilledValues, roles } = option);
  let found;
  found = undefined;
  if (null != prefilledValues) {
    found = prefilledValues.find((name) => {
      let tmp = name.name === option.name;
      if (tmp) {
        tmp = name.type === option.type;
      }
      return tmp;
    });
  }
  const type = option.type;
  if (option(1881).ApplicationCommandOptionType.BOOLEAN === type) {
    if (null != found) {
      let obj = { type: "text" };
      const _String8 = String;
      const _Boolean = Boolean;
      obj.text = String(Boolean(found.value));
      const items = [obj];
      let items1 = items;
    } else {
      items1 = [{ type: "text", text: "false" }];
    }
    return items1;
  } else {
    if (option(1881).ApplicationCommandOptionType.STRING !== type) {
      if (option(1881).ApplicationCommandOptionType.INTEGER !== type) {
        if (option(1881).ApplicationCommandOptionType.NUMBER !== type) {
          if (option(1881).ApplicationCommandOptionType.CHANNEL === type) {
            if (null != found) {
              const _String5 = String;
              if (null != channel.getChannel(String(found.value))) {
                obj = { type: "channelMention" };
                const _String6 = String;
                obj.channelId = String(found.value);
                const items2 = [obj];
                let items3 = items2;
              }
              return items3;
            }
            items3 = [{ type: "text", text: "" }];
          } else if (option(1881).ApplicationCommandOptionType.USER === type) {
            if (null != found) {
              const _String3 = String;
              if (null != authStore.getUser(String(found.value))) {
                const obj1 = { type: "userMention" };
                const _String4 = String;
                obj1.userId = String(found.value);
                const items4 = [obj1];
                let items5 = items4;
              }
              return items5;
            }
            items5 = [{ type: "text", text: "" }];
          } else if (option(1881).ApplicationCommandOptionType.ROLE === type) {
            if (null != found) {
              if ("string" === typeof found.value) {
                if (found.value in roles) {
                  const obj2 = { type: "roleMention", roleId: found.value };
                  const items6 = [obj2];
                  let items7 = items6;
                }
                return items7;
              }
            }
            items7 = [{ type: "text", text: "" }];
          } else if (option(1881).ApplicationCommandOptionType.MENTIONABLE === type) {
            if (null != found) {
              if (found.value === option.guildId) {
                const items8 = [{ type: "textMention", text: "@everyone" }];
                return items8;
              } else {
                if ("string" === typeof found.value) {
                  if (found.value in roles) {
                    const obj3 = { type: "roleMention", roleId: found.value };
                    const items9 = [obj3];
                    return items9;
                  }
                }
                const _String = String;
                if (null != authStore.getUser(String(found.value))) {
                  obj = { type: "userMention" };
                  const _String2 = String;
                  obj.userId = String(found.value);
                  const items10 = [obj];
                  return items10;
                }
              }
            }
            const items11 = [{ type: "text", text: "" }];
            return items11;
          } else {
            const items12 = [{ type: "text", text: "" }];
            return items12;
          }
        }
      }
    }
    if (null != found) {
      if (null == option.choices) {
        const obj4 = { type: "text" };
        const _String7 = String;
        obj4.text = String(found.value);
        const items13 = [obj4];
        return items13;
      } else {
        let choices = option.choices;
        if (choices.some((value) => value.value === found.value)) {
          const obj5 = { type: "text" };
          choices = option.choices;
          obj5.text = choices.find((value) => value.value === found.value).displayName;
          const items14 = [obj5];
          return items14;
        }
      }
    }
    const items15 = [{ type: "text", text: "" }];
    return items15;
  }
};
export const getAppLauncherIconSource = function getAppLauncherIconSource(application) {
  if (null == application) {
    let applicationIconSource = importDefault(1831);
  } else {
    const obj2 = require(8006) /* _createForOfIteratorHelperLoose */;
    const obj3 = importDefault(1392);
    if (isRealApplicationResult) {
      const obj = {};
      ({ id: obj.id, icon: obj.icon, bot: obj.bot } = application);
      obj.botIconFirst = false;
      applicationIconSource = obj3.getApplicationIconSource(obj);
    } else {
      applicationIconSource = obj3.makeSource(closure_7);
    }
    isRealApplicationResult = require(8006) /* _createForOfIteratorHelperLoose */.isRealApplication(application);
  }
  return applicationIconSource;
};
export const useLogAppLauncherEmptyStateView = function useLogAppLauncherEmptyStateView(COMMAND_NOT_FOUND, query) {
  const _require = COMMAND_NOT_FOUND;
  const entrypoint = _require(10911).useAppLauncherContext().entrypoint;
  const items = [COMMAND_NOT_FOUND, query, entrypoint];
  const effect = React.useEffect(() => {
    if (null != COMMAND_NOT_FOUND) {
      let obj = COMMAND_NOT_FOUND(outer1_3[6]);
      obj = { type: COMMAND_NOT_FOUND, source: entrypoint };
      obj.trackWithMetadata(outer1_9.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, obj);
    }
  }, items);
};
export const useHandleActivityItemSelected = function useHandleActivityItemSelected(fetchesApplication) {
  let applicationId;
  let context;
  let entrypoint;
  let importAll;
  let importDefault;
  let sectionName;
  ({ applicationId, context, sectionName } = fetchesApplication);
  ({ onActivityItemSelected: importDefault, location: importAll, entrypoint } = fetchesApplication);
  let flag = fetchesApplication.fetchesApplication;
  if (flag === undefined) {
    flag = true;
  }
  let result;
  let _isNativeReflectConstruct;
  let obj = sectionName(entrypoint[16]);
  const analyticsContext = obj.useAnalyticsContext();
  let obj1 = sectionName(entrypoint[17]);
  obj = { context, applicationId, fetchesApplication: flag };
  result = obj1.useActivityAction(obj);
  const getOrFetchApplication = sectionName(entrypoint[18]).useGetOrFetchApplication(applicationId, flag);
  const obj4 = sectionName(entrypoint[18]);
  const entrypointParams = sectionName(entrypoint[15]).useAppLauncherContext().entrypointParams;
  const obj5 = sectionName(entrypoint[15]);
  obj = {
    application: getOrFetchApplication,
    context,
    embeddedActivitiesManager: importDefault(entrypoint[19]),
    locationObject: analyticsContext.location,
    onActivityItemSelectedProp(applicationId) {
      applicationId = applicationId.applicationId;
      if (null != callback) {
        let obj = { applicationId };
        callback(obj);
      }
      obj = { location: closure_2, application_id: applicationId, section_name: sectionName, action: result, source: entrypoint };
      sectionName(entrypoint[6]).trackWithMetadata(outer1_9.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, obj);
    },
    launchingComponentId: fetchesApplication.launchingComponentId,
    commandOrigin: sectionName(entrypoint[7]).CommandOrigin.APPLICATION_LAUNCHER,
    sectionName,
    source: entrypoint,
    fetchesApplication: flag
  };
  let customId;
  if (null != entrypointParams) {
    customId = entrypointParams.customId;
  }
  obj.customId = customId;
  let referrerId;
  if (null != entrypointParams) {
    referrerId = entrypointParams.referrerId;
  }
  obj.referrerId = referrerId;
  _isNativeReflectConstruct = sectionName(entrypoint[17]).useOnActivityItemSelected(obj);
  obj1 = {
    handleActivityItemSelected() {
      const result = sectionName(entrypoint[20]).triggerHapticFeedback(sectionName(entrypoint[20]).HapticFeedbackTypes.IMPACT_MEDIUM);
      callback2();
    }
  };
  return obj1;
};
