// Module ID: 11161
// Function ID: 86786
// Name: handleApplicationSelected
// Dependencies: []
// Exports: getAppLauncherIconSource, getInitialOptionValues, handleApplicationCommandSelected, handleApplicationSelected, handleViewAllSelected, useHandleActivityItemSelected, useLogAppLauncherEmptyStateView

// Module 11161 (handleApplicationSelected)
let closure_4 = importAll(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
({ APP_LAUNCHER_BUILT_IN_SECTION_ICON: closure_7, AppLauncherRouteName: closure_8 } = arg1(dependencyMap[3]));
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
const BuiltInSectionId = arg1(dependencyMap[5]).BuiltInSectionId;
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/app_launcher/native/AppLauncherNativeUtils.tsx");

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
  let obj = arg1(dependencyMap[6]);
  obj = { location: _location };
  if (application.id === BuiltInSectionId.BUILT_IN) {
    let APP = arg1(dependencyMap[7]).ApplicationCommandTriggerSections.BUILT_IN;
  } else {
    APP = arg1(dependencyMap[7]).ApplicationCommandTriggerSections.APP;
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
  let obj = arg1(dependencyMap[6]);
  obj = { section_name: sectionName, num: sectionItemType === arg1(dependencyMap[8]).SectionItemType.APPS ? applications.length : commands.length };
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
  const arg1 = command;
  ({ section, sectionDescriptors, query, navigation, installOnDemand, sectionName, entrypoint } = arg0);
  ({ searchResultsPosition, onCommandExecuted } = arg0);
  let obj = arg1(dependencyMap[9]);
  obj = { command, location: _location, triggerSection: arg1(dependencyMap[9]).getCommandTriggerSection(section), queryLength: query.length, sectionName, query, searchResultsPosition, source: entrypoint };
  obj.trackCommandSelected(obj);
  if (command.type === arg1(dependencyMap[10]).ApplicationCommandType.PRIMARY_ENTRY_POINT) {
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
      const result = importAll(dependencyMap[11]).setAppLauncherActiveCommand(context.channel.id, command);
      const obj1 = { command, section: tmp4, context, installOnDemand, sectionName, analyticsLocation: _location, onCommandExecuted };
      navigation.navigate(constants.COMMAND_VIEW, obj1);
      const obj4 = importAll(dependencyMap[11]);
    }
  }
};
export const getInitialOptionValues = function getInitialOptionValues(option) {
  let prefilledValues;
  let roles;
  option = option.option;
  const arg1 = option;
  ({ prefilledValues, roles } = option);
  let importDefault;
  let found;
  if (null != prefilledValues) {
    found = prefilledValues.find((name) => {
      let tmp = name.name === option.name;
      if (tmp) {
        tmp = name.type === option.type;
      }
      return tmp;
    });
  }
  importDefault = found;
  const type = option.type;
  if (arg1(dependencyMap[10]).ApplicationCommandOptionType.BOOLEAN === type) {
    if (null != found) {
      let obj = { type: "text" };
      const _String8 = String;
      const _Boolean = Boolean;
      obj.text = String(Boolean(found.value));
      const items = [obj];
      let items1 = items;
    } else {
      items1 = [{}];
    }
    return items1;
  } else {
    if (arg1(dependencyMap[10]).ApplicationCommandOptionType.STRING !== type) {
      if (arg1(dependencyMap[10]).ApplicationCommandOptionType.INTEGER !== type) {
        if (arg1(dependencyMap[10]).ApplicationCommandOptionType.NUMBER !== type) {
          if (arg1(dependencyMap[10]).ApplicationCommandOptionType.CHANNEL === type) {
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
            items3 = [{ -1298326025: "JPEGInterchangeFormatLength", -291407389: "GAME_CLAIM_NOTICE_MARGIN_BOTTOM" }];
          } else if (arg1(dependencyMap[10]).ApplicationCommandOptionType.USER === type) {
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
            items5 = [{ -1298326025: "JPEGInterchangeFormatLength", -291407389: "GAME_CLAIM_NOTICE_MARGIN_BOTTOM" }];
          } else if (arg1(dependencyMap[10]).ApplicationCommandOptionType.ROLE === type) {
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
            items7 = [{ -1298326025: "JPEGInterchangeFormatLength", -291407389: "GAME_CLAIM_NOTICE_MARGIN_BOTTOM" }];
          } else if (arg1(dependencyMap[10]).ApplicationCommandOptionType.MENTIONABLE === type) {
            if (null != found) {
              if (found.value === option.guildId) {
                const items8 = [{}];
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
            const items11 = [{ -1298326025: "JPEGInterchangeFormatLength", -291407389: "GAME_CLAIM_NOTICE_MARGIN_BOTTOM" }];
            return items11;
          } else {
            const items12 = [{ -1298326025: "JPEGInterchangeFormatLength", -291407389: "GAME_CLAIM_NOTICE_MARGIN_BOTTOM" }];
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
    const items15 = [{ -1298326025: "JPEGInterchangeFormatLength", -291407389: "GAME_CLAIM_NOTICE_MARGIN_BOTTOM" }];
    return items15;
  }
};
export const getAppLauncherIconSource = function getAppLauncherIconSource(application) {
  if (null == application) {
    let applicationIconSource = importDefault(dependencyMap[12]);
  } else {
    const obj2 = arg1(dependencyMap[13]);
    const obj3 = importDefault(dependencyMap[14]);
    if (isRealApplicationResult) {
      const obj = {};
      ({ id: obj.id, icon: obj.icon, bot: obj.bot } = application);
      obj.botIconFirst = false;
      applicationIconSource = obj3.getApplicationIconSource(obj);
    } else {
      applicationIconSource = obj3.makeSource(closure_7);
    }
    const isRealApplicationResult = arg1(dependencyMap[13]).isRealApplication(application);
  }
  return applicationIconSource;
};
export const useLogAppLauncherEmptyStateView = function useLogAppLauncherEmptyStateView(COMMAND_NOT_FOUND, query) {
  query = COMMAND_NOT_FOUND;
  const entrypoint = query(dependencyMap[15]).useAppLauncherContext().entrypoint;
  const importDefault = entrypoint;
  const items = [COMMAND_NOT_FOUND, query, entrypoint];
  const effect = React.useEffect(() => {
    if (null != arg0) {
      let obj = arg0(closure_3[6]);
      obj = { type: arg0, source: entrypoint };
      obj.trackWithMetadata(constants.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, obj);
    }
  }, items);
};
export const useHandleActivityItemSelected = function useHandleActivityItemSelected(fetchesApplication) {
  let applicationId;
  let context;
  let entrypoint;
  let sectionName;
  ({ applicationId, context, sectionName } = fetchesApplication);
  const arg1 = sectionName;
  ({ onActivityItemSelected: closure_1, location: closure_2, entrypoint } = fetchesApplication);
  const dependencyMap = entrypoint;
  let flag = fetchesApplication.fetchesApplication;
  if (flag === undefined) {
    flag = true;
  }
  let closure_4;
  let closure_5;
  let obj = arg1(dependencyMap[16]);
  const analyticsContext = obj.useAnalyticsContext();
  let obj1 = arg1(dependencyMap[17]);
  obj = { context, applicationId, fetchesApplication: flag };
  closure_4 = obj1.useActivityAction(obj);
  const getOrFetchApplication = arg1(dependencyMap[18]).useGetOrFetchApplication(applicationId, flag);
  const obj4 = arg1(dependencyMap[18]);
  const entrypointParams = arg1(dependencyMap[15]).useAppLauncherContext().entrypointParams;
  const obj5 = arg1(dependencyMap[15]);
  obj = {
    application: getOrFetchApplication,
    context,
    embeddedActivitiesManager: importDefault(dependencyMap[19]),
    locationObject: analyticsContext.location,
    onActivityItemSelectedProp(applicationId) {
      applicationId = applicationId.applicationId;
      if (null != callback) {
        let obj = { applicationId };
        callback(obj);
      }
      obj = { location: closure_2, application_id: applicationId, section_name: sectionName, action: closure_4, source: entrypoint };
      sectionName(entrypoint[6]).trackWithMetadata(constants.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, obj);
    },
    launchingComponentId: fetchesApplication.launchingComponentId,
    commandOrigin: arg1(dependencyMap[7]).CommandOrigin.APPLICATION_LAUNCHER,
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
  closure_5 = arg1(dependencyMap[17]).useOnActivityItemSelected(obj);
  obj1 = {
    handleActivityItemSelected() {
      const result = sectionName(entrypoint[20]).triggerHapticFeedback(sectionName(entrypoint[20]).HapticFeedbackTypes.IMPACT_MEDIUM);
      callback2();
    }
  };
  return obj1;
};
