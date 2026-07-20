// Module ID: 7908
// Function ID: 62917
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: appLauncherShowsRecommendations, ensureRecommendationSectionsOnlyContainActivities, executeAppLauncherCommand, formatPrimaryEntryPointCommandName, getApplicationDetails, getInstallAppProps, getInstallAppPropsFromProfileApplication, getSectionDescription, getSectionName, getShelfBadgeNameIfActive, isAppAvailableInAppLauncher, isApplicationAdSupported, isApplicationMonetizedWithIAP, isPartnerApplication, isPromotedApplication

// Module 7908 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function isRealApplication(application) {
  return application.id !== BuiltInSectionId.BUILT_IN;
}
function isEmbeddedApp(application) {
  let hasApplicationFlagResult = isRealApplication(application);
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = arg1(dependencyMap[9]).hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
    const obj = arg1(dependencyMap[9]);
  }
  return hasApplicationFlagResult;
}
function getShelfBadgeTypeIfActive(application) {
  const tmp = getEmbeddedActivityConfig(application);
  let tmp2;
  if (null != tmp) {
    const obj = arg1(dependencyMap[11]);
    tmp2 = tmp.client_platform_config[importDefault(dependencyMap[10])(undefined, obj.getOS(obj))];
    const tmp5 = importDefault(dependencyMap[10]);
  }
  const timestamp = Date.now();
  let label_until;
  if (null != tmp2) {
    label_until = tmp2.label_until;
  }
  if (null != label_until) {
    const _Date = Date;
    if (timestamp < Date.parse(tmp2.label_until)) {
      let label_from;
      if (null != tmp2) {
        label_from = tmp2.label_from;
      }
      if (null != label_from) {
        const _Date2 = Date;
        if (timestamp > Date.parse(tmp2.label_from)) {
          let label_type;
          if (null != tmp2) {
            label_type = tmp2.label_type;
          }
        }
        return label_type;
      }
    }
  }
  label_type = arg1(dependencyMap[12]).EmbeddedActivityLabelTypes.NONE;
}
function getEmbeddedActivityConfig(embeddedActivityConfig) {
  let tmp = null;
  if (isRealApplication(embeddedActivityConfig)) {
    tmp = null;
  }
  return tmp;
}
let closure_3 = [null];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const ApplicationFlags = arg1(dependencyMap[5]).ApplicationFlags;
const BuiltInSectionId = arg1(dependencyMap[6]).BuiltInSectionId;
const MessageSendLocation = arg1(dependencyMap[7]).MessageSendLocation;
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/app_launcher/utils/AppLauncherUtils.tsx");

export const FAKE_BUILT_IN_APP = { id: BuiltInSectionId.BUILT_IN };
export { isRealApplication };
export const getSectionName = function getSectionName(FAKE_BUILT_IN_APP) {
  if (isRealApplication(FAKE_BUILT_IN_APP)) {
    let name = FAKE_BUILT_IN_APP.name;
  } else {
    const intl = arg1(dependencyMap[8]).intl;
    name = intl.string(arg1(dependencyMap[8]).t.UB2gG2);
  }
  return name;
};
export const getSectionDescription = function getSectionDescription(FAKE_BUILT_IN_APP) {
  if (isRealApplication(FAKE_BUILT_IN_APP)) {
    let description = FAKE_BUILT_IN_APP.description;
  } else {
    const intl = arg1(dependencyMap[8]).intl;
    description = intl.string(arg1(dependencyMap[8]).t.X9fusn);
  }
  return description;
};
export { isEmbeddedApp };
export const isPartnerApplication = function isPartnerApplication(application) {
  let hasApplicationFlagResult = isRealApplication(application);
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = arg1(dependencyMap[9]).hasApplicationFlag(application, ApplicationFlags.PARTNER);
    const obj = arg1(dependencyMap[9]);
  }
  return hasApplicationFlagResult;
};
export const isPromotedApplication = function isPromotedApplication(FAKE_BUILT_IN_APP2) {
  let hasApplicationFlagResult = isRealApplication(FAKE_BUILT_IN_APP2);
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = arg1(dependencyMap[9]).hasApplicationFlag(FAKE_BUILT_IN_APP2, ApplicationFlags.PROMOTED);
    const obj = arg1(dependencyMap[9]);
  }
  return hasApplicationFlagResult;
};
export { getShelfBadgeTypeIfActive };
export const getShelfBadgeNameIfActive = function getShelfBadgeNameIfActive(application) {
  const tmp = getShelfBadgeTypeIfActive(application);
  if (arg1(dependencyMap[12]).EmbeddedActivityLabelTypes.NEW === tmp) {
    return "New";
  } else if (arg1(dependencyMap[12]).EmbeddedActivityLabelTypes.UPDATED === tmp) {
    return "Updated";
  } else {
    return "";
  }
};
export { getEmbeddedActivityConfig };
export const executeAppLauncherCommand = function executeAppLauncherCommand(arg0) {
  let commandOrigin;
  let context;
  ({ command: closure_0, optionValues: closure_1, context } = arg0);
  const dependencyMap = context;
  ({ commandTargetId: closure_3, maxSizeCallback: closure_4, sectionName: closure_5, commandOrigin } = arg0);
  if (commandOrigin === undefined) {
    commandOrigin = arg1(dependencyMap[13]).CommandOrigin.APPLICATION_LAUNCHER;
  }
  let closure_6 = commandOrigin;
  let channel;
  let closure_8;
  channel = context.channel;
  const tmp3 = () => {
    let closure_0 = callback(async () => {
      let obj = { command: lib, optionValues: callback, context: closure_2, commandTargetId: closure_3, maxSizeCallback: closure_4, commandOrigin: closure_6, sectionName: closure_5, source: closure_8.entrypoint() };
      const tmp2 = yield callback(closure_2[14])(obj);
      if (lib.inputType === lib(closure_2[13]).ApplicationCommandInputType.BUILT_IN_TEXT) {
        if (null != tmp3) {
          if (null != closure_2.channel) {
            const parsed = callback(closure_2[15]).parse(closure_7, tmp3.content);
            const tts = tmp3.tts;
            let tmp4 = tmp23;
            if (null != tts) {
              tmp4 = tts;
            }
            parsed.tts = tmp4;
            const obj2 = callback(closure_2[16]);
            obj = { location: constants.APP_COMMAND };
            obj2.sendMessage(closure_2.channel.id, parsed, true, obj);
            const obj4 = callback(closure_2[15]);
            const tmp21 = parsed;
          }
        }
      }
    });
    return function() {
      return callback(...arguments);
    };
  }();
  closure_8 = tmp3;
  return tmp3();
};
export const getApplicationDetails = function getApplicationDetails(id, guildMember) {
  let obj = guildMember;
  if (guildMember === undefined) {
    obj = {};
  }
  const fakeAppIconURL = obj.fakeAppIconURL;
  const tmp = callback(obj, closure_3);
  obj = {};
  if (isRealApplication(id)) {
    obj = {};
    const merged = Object.assign(tmp);
    obj["id"] = id.id;
    obj["icon"] = id.icon;
    obj.iconURL = importDefault(dependencyMap[18]).getApplicationIconURL(obj);
    ({ name: obj2.name, description: obj2.description } = id);
    let tmp5 = obj;
    const obj3 = importDefault(dependencyMap[18]);
  } else {
    let tmp2 = null;
    if (null != fakeAppIconURL) {
      tmp2 = fakeAppIconURL;
    }
    obj.iconURL = tmp2;
    const intl = guildMember(dependencyMap[8]).intl;
    obj.name = intl.string(guildMember(dependencyMap[8]).t.UB2gG2);
    const intl2 = guildMember(dependencyMap[8]).intl;
    obj.description = intl2.string(guildMember(dependencyMap[8]).t.X9fusn);
    tmp5 = obj;
  }
  return tmp5;
};
export const isApplicationMonetizedWithIAP = function isApplicationMonetizedWithIAP(application) {
  const tmp = isRealApplication(application);
  if (!tmp) {
    return tmp;
  }
};
export const isApplicationAdSupported = function isApplicationAdSupported(application) {
  const tmp = getEmbeddedActivityConfig(application);
  return null != tmp && tmp.displays_advertisements;
};
export const appLauncherShowsRecommendations = function appLauncherShowsRecommendations(entrypoint) {
  return entrypoint === arg1(dependencyMap[19]).AppLauncherEntrypoint.TEXT;
};
export const formatPrimaryEntryPointCommandName = function formatPrimaryEntryPointCommandName(displayName) {
  let str = "";
  if (null != displayName) {
    const charAtResult = displayName.charAt(0);
    const sum = displayName.charAt(0).toLocaleUpperCase() + displayName.slice(1);
    str = sum.replaceAll("_", " ");
    const toLocaleUpperCaseResult = displayName.charAt(0).toLocaleUpperCase();
  }
  return str;
};
export const ensureRecommendationSectionsOnlyContainActivities = function ensureRecommendationSectionsOnlyContainActivities(stateFromStores) {
  let iter2;
  const items = [];
  const tmp = _createForOfIteratorHelperLoose(stateFromStores);
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      let prop = value.application_directory_collection_items;
      let found = prop.filter((type) => {
        let tmp = type.type === callback(closure_2[20]).ApplicationDirectoryCollectionItemType.APPLICATION;
        if (tmp) {
          tmp = callback2(type.application);
        }
        return tmp;
      });
      if (0 !== found.length) {
        let obj = {};
        let tmp2 = obj;
        let tmp3 = value;
        let merged = Object.assign(value);
        obj["application_directory_collection_items"] = found;
        let arr = items.push(obj);
      }
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
  return items;
};
export const getInstallAppPropsFromProfileApplication = function getInstallAppPropsFromProfileApplication(application) {
  return { applicationId: application.id, customInstallUrl: application.customInstallUrl, installParams: application.installParams, integrationTypesConfig: application.integrationTypesConfig };
};
export const getInstallAppProps = function getInstallAppProps(application) {
  const obj = { applicationId: application.id };
  if (application instanceof closure_7) {
    ({ customInstallUrl: obj.customInstallUrl, installParams: obj.installParams, integrationTypesConfig: obj.integrationTypesConfig } = application);
    let tmp = obj;
  } else {
    ({ custom_install_url: obj.customInstallUrl, install_params: obj.installParams, integration_types_config: obj.integrationTypesConfig } = application);
    tmp = obj;
  }
  return tmp;
};
export const isAppAvailableInAppLauncher = function isAppAvailableInAppLauncher(id) {
  let guildState = null;
  if (null != arg1) {
    guildState = guildState.getGuildState(arg1);
  }
  let result = null != guildState;
  if (result) {
    result = arg1(dependencyMap[21]).hasCommandIndexForApp(id.id, guildState);
    const obj = arg1(dependencyMap[21]);
  }
  const obj2 = arg1(dependencyMap[22]);
  return arg1(dependencyMap[22]).isAppUserInstallable(id) || result;
};
