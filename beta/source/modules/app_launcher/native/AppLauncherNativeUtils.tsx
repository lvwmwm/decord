// Module ID: 11533
// Function ID: 11534
// Name: AppLauncherNativeUtils
// Dependencies: [19, 2045, 1372, 1484, 1074, 5305, 5016, 6943, 11534, 6941, 1979, 7197, 1969, 8590, 1397, 10785, 8895, 11539, 6589, 8765, 4801, 2]
// Exports: getAppLauncherIconSource, getInitialOptionValues, handleApplicationCommandSelected, handleApplicationSelected, handleViewAllSelected, useHandleActivityItemSelected, useLogAppLauncherEmptyStateView

// Module 11533 (AppLauncherNativeUtils)
import Constants from "Constants" /* 1074 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import AssetRegistryDefault from "AssetRegistry" /* 1969 */;
import Server from "Server" /* 1979 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5016 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5305 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 6941 */;
import ApplicationCommandActionCreatorsAll from "ApplicationCommandActionCreators" /* 7197 */;
import AppLauncherUtils from "AppLauncherUtils" /* 8590 */;
import FrecencySection from "FrecencySection" /* 11534 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserStore from "UserStore" /* 1372 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1484 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportAll;
let metroImportDefault;
({ APP_LAUNCHER_BUILT_IN_SECTION_ICON: metroImportDefault, AppLauncherRouteName: metroImportAll } = AppLauncherNativeConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const BuiltInSectionId = ApplicationCommandConstants.BuiltInSectionId;
let result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherNativeUtils.tsx");

export const handleApplicationSelected = function handleApplicationSelected(entrypoint) {
  let APP;
  let _location;
  let application;
  let context;
  let id;
  let installOnDemand;
  let navigates;
  let query;
  let searchResultsPosition;
  let sectionName;
  ({ application, navigation, sectionName, navigates } = entrypoint);
  ({ location: _location, context, installOnDemand, query, searchResultsPosition } = entrypoint);
  if (navigates === undefined) {
    navigates = true;
  }
  entrypoint = entrypoint.entrypoint;
  const obj = { location: _location, section: APP, application_id: id, section_name: sectionName, query, search_results_position: searchResultsPosition, source: entrypoint };
  const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
  const APPLICATION_COMMAND_SECTION_SELECTED = AnalyticEvents.APPLICATION_COMMAND_SECTION_SELECTED;
  AppAnalyticsUtils;
  if (application.id === BuiltInSectionId.BUILT_IN) {
    APP = tmp(6943).ApplicationCommandTriggerSections.BUILT_IN;
  } else {
    APP = tmp(6943).ApplicationCommandTriggerSections.APP;
  }
  id = application.id;
  if (id == null) {
    id = null;
  }
  trackWithMetadata(APPLICATION_COMMAND_SECTION_SELECTED, obj);
  if (navigates) {
    const obj2 = { application, context, installOnDemand, sectionName, entrypoint };
    navigation.navigate(metroImportAll.APPLICATION_VIEW, obj2);
  }
};
export const handleViewAllSelected = function handleViewAllSelected(arg0) {
  let _location;
  let applications;
  let commands;
  let context;
  let promotedApplicationIds;
  let sectionDescriptors;
  let sectionItemType;
  let sectionName;
  let sectionOverallPosition;
  let title;
  ({ navigation, sectionName, applications, sectionItemType, commands } = arg0);
  ({ location: _location, context, sectionOverallPosition, sectionDescriptors, title, promotedApplicationIds } = arg0);
  const obj = AppAnalyticsUtils;
  const obj2 = { section_name: sectionName, num: sectionItemType === FrecencySection.SectionItemType.APPS ? applications.length : commands.length };
  obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_SECTION_VIEW_MORE, obj2);
  navigation.navigate(metroImportAll.APP_LIST_VIEW, { analyticsLocation: _location, context, sectionName, sectionOverallPosition, applications, sectionItemType, commands, sectionDescriptors, title, promotedApplicationIds });
};
export const handleApplicationCommandSelected = function handleApplicationCommandSelected(arg0) {
  let _location;
  let command;
  let context;
  let entrypoint;
  let installOnDemand;
  let obj2;
  let onCommandExecuted;
  let query;
  let searchResultsPosition;
  let section;
  let sectionDescriptors;
  let sectionName;
  ({ location: _location, context, command } = arg0);
  ({ section, sectionDescriptors, query, navigation, installOnDemand, sectionName, entrypoint } = arg0);
  ({ searchResultsPosition, onCommandExecuted } = arg0);
  const obj = { command, location: _location, triggerSection: obj2.getCommandTriggerSection(section), queryLength: query.length, sectionName, query, searchResultsPosition, source: entrypoint };
  const trackCommandSelected = ApplicationCommandUtils.trackCommandSelected;
  ApplicationCommandUtils;
  obj2 = ApplicationCommandUtils;
  trackCommandSelected(obj);
  if (command.type === Server.ApplicationCommandType.PRIMARY_ENTRY_POINT) {
    const obj4 = { application: section.application, context, installOnDemand, sectionName, entrypoint };
    navigation.navigate(metroImportAll.APPLICATION_VIEW, obj4);
  } else {
    let tmp6 = section;
    if (section.id === BuiltInSectionId.FRECENCY) {
      const found = sectionDescriptors.find((id) => id.id === command.applicationId);
      tmp6 = section;
      if (null != found) {
        tmp6 = found;
      }
    }
    if ("channel" === context.type) {
      const obj3 = ApplicationCommandActionCreatorsAll;
      const result = obj3.setAppLauncherActiveCommand(context.channel.id, command);
      const obj5 = { command, section: tmp6, context, installOnDemand, sectionName, analyticsLocation: _location, onCommandExecuted };
      navigation.navigate(metroImportAll.COMMAND_VIEW, obj5);
    }
  }
};
export const getInitialOptionValues = function getInitialOptionValues(option) {
  let choices1;
  let prefilledValues;
  let roles;
  option = option.option;
  ({ prefilledValues, roles } = option);
  let found;
  const guildId = option.guildId;
  if (prefilledValues != null) {
    found = prefilledValues.find((name) => name.name === option.name && name.type === tmp.type);
  }
  const type = option.type;
  if (Server.ApplicationCommandOptionType.BOOLEAN === type) {
    let items1;
    if (null != found) {
      const _String8 = String;
      const _Boolean = Boolean;
      const items = [{ type: "text", text: String(Boolean(found.value)) }];
      items1 = items;
      const obj2 = { type: "text", text: String(Boolean(found.value)) };
    } else {
      items1 = [{ type: "text", text: "false" }];
    }
    return items1;
  } else {
    if (Server.ApplicationCommandOptionType.STRING !== type) {
      if (Server.ApplicationCommandOptionType.INTEGER !== type) {
        if (Server.ApplicationCommandOptionType.NUMBER !== type) {
          if (Server.ApplicationCommandOptionType.CHANNEL === type) {
            if (null != found) {
              let items3;
              const _String5 = String;
              if (null != ChannelStore.getChannel(String(found.value))) {
                const _String6 = String;
                const items2 = [{ type: "channelMention", channelId: String(found.value) }];
                items3 = items2;
                const obj3 = { type: "channelMention", channelId: String(found.value) };
              }
              return items3;
            }
            items3 = [{ type: "text", text: "" }];
          } else if (Server.ApplicationCommandOptionType.USER === type) {
            if (null != found) {
              let items5;
              const _String3 = String;
              if (null != UserStore.getUser(String(found.value))) {
                const _String4 = String;
                const items4 = [{ type: "userMention", userId: String(found.value) }];
                items5 = items4;
                const obj4 = { type: "userMention", userId: String(found.value) };
              }
              return items5;
            }
            items5 = [{ type: "text", text: "" }];
          } else if (Server.ApplicationCommandOptionType.ROLE === type) {
            if (null != found) {
              if (typeof found.value === "string") {
                let items7;
                if (found.value in roles) {
                  const items6 = [{ type: "roleMention", roleId: found.value }];
                  items7 = items6;
                  const obj5 = { type: "roleMention", roleId: found.value };
                }
                return items7;
              }
            }
            items7 = [{ type: "text", text: "" }];
          } else if (Server.ApplicationCommandOptionType.MENTIONABLE === type) {
            if (null != found) {
              if (found.value === guildId) {
                const items8 = [{ type: "textMention", text: "@everyone" }];
                return items8;
              } else {
                if (typeof found.value === "string") {
                  if (found.value in roles) {
                    const items9 = [{ type: "roleMention", roleId: found.value }];
                    return items9;
                  }
                }
                const _String = String;
                if (null != UserStore.getUser(String(found.value))) {
                  const _String2 = String;
                  const items10 = [{ type: "userMention", userId: String(found.value) }];
                  const obj = { type: "userMention", userId: String(found.value) };
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
        const _String7 = String;
        const items13 = [{ type: "text", text: String(found.value) }];
        const obj7 = { type: "text", text: String(found.value) };
        return items13;
      } else {
        const choices = option.choices;
        if (choices.some((value) => value.value === found.value)) {
          const obj8 = { type: "text", text: choices1.find((value) => value.value === found.value).displayName };
          choices1 = option.choices;
          const items14 = [obj8];
          return items14;
        }
      }
    }
    const items15 = [{ type: "text", text: "" }];
    return items15;
  }
};
export const getAppLauncherIconSource = function getAppLauncherIconSource(application) {
  let applicationIconSource;
  if (null == application) {
    applicationIconSource = AssetRegistryDefault;
  } else {
    const obj = AppLauncherUtils;
    const isRealApplicationResult = obj.isRealApplication(application);
    const obj2 = AvatarUtilsDefault;
    if (isRealApplicationResult) {
      const obj4 = { id: null, icon: null, bot: null, botIconFirst: false };
      ({ id: obj3.id, icon: obj3.icon, bot: obj3.bot } = application);
      applicationIconSource = obj2.getApplicationIconSource(obj4);
    } else {
      applicationIconSource = obj2.makeSource(metroImportDefault);
    }
  }
  return applicationIconSource;
};
export const useLogAppLauncherEmptyStateView = function useLogAppLauncherEmptyStateView(COMMAND_NOT_FOUND, query) {
  _require = COMMAND_NOT_FOUND;
  let obj = require("AppLauncherContext");
  const entrypoint = obj.useAppLauncherContext().entrypoint;
  const items = [COMMAND_NOT_FOUND, query, entrypoint];
  const effect = react.useEffect(() => {
    if (null != COMMAND_NOT_FOUND) {
      const obj2 = { type: tmp, source: entrypoint };
      const obj = AppAnalyticsUtils;
      obj.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, obj2);
    }
  }, items);
};
export const useHandleActivityItemSelected = function useHandleActivityItemSelected(fetchesApplication) {
  let _location;
  let applicationId;
  let context;
  let customId;
  let entrypoint;
  let referrerId;
  let sectionName;
  ({ applicationId, context, sectionName } = fetchesApplication);
  ({ onActivityItemSelected: importDefault, location: importAll, entrypoint } = fetchesApplication);
  let flag = fetchesApplication.fetchesApplication;
  const launchingComponentId = fetchesApplication.launchingComponentId;
  if (flag === undefined) {
    flag = true;
  }
  let closure_5;
  let obj = sectionName(entrypoint[16]);
  const analyticsContext = obj.useAnalyticsContext();
  let obj2 = sectionName(entrypoint[17]);
  const action = obj2.useActivityAction({ context, applicationId, fetchesApplication: flag });
  let obj3 = sectionName(entrypoint[18]);
  const getOrFetchApplication = obj3.useGetOrFetchApplication(applicationId, flag);
  const obj4 = sectionName(entrypoint[15]);
  const entrypointParams = obj4.useAppLauncherContext().entrypointParams;
  const tmp3 = sectionName(entrypoint[17]);
  const useOnActivityItemSelected = tmp3.useOnActivityItemSelected;
  const obj5 = {
    application: getOrFetchApplication,
    context,
    embeddedActivitiesManager: require("EmbeddedActivitiesNativeManager"),
    locationObject: analyticsContext.location,
    onActivityItemSelectedProp(applicationId) {
      applicationId = applicationId.applicationId;
      if (importDefault != null) {
        const obj = { applicationId };
        tmp(obj);
      }
      const obj2 = AppAnalyticsUtils;
      const obj3 = { location: importAll, application_id: applicationId, section_name: sectionName, action, source: entrypoint };
      obj2.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, obj3);
    },
    launchingComponentId,
    commandOrigin: sectionName(entrypoint[7]).CommandOrigin.APPLICATION_LAUNCHER,
    sectionName,
    source: entrypoint,
    fetchesApplication: flag,
    customId,
    referrerId
  };
  customId = undefined;
  if (entrypointParams != null) {
    customId = entrypointParams.customId;
  }
  referrerId = undefined;
  if (entrypointParams != null) {
    referrerId = entrypointParams.referrerId;
  }
  closure_5 = useOnActivityItemSelected(obj5);
  return {
    handleActivityItemSelected() {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      closure_5();
    }
  };
};
