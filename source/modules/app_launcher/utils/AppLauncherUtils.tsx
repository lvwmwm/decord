// Module ID: 8006
// Function ID: 63300
// Name: _createForOfIteratorHelperLoose
// Dependencies: [29, 5, 8007, 4153, 8225, 653, 4566, 4123, 1212, 7371, 8227, 477, 1881, 6755, 8228, 6923, 6691, 4470, 1392, 8226, 8234, 6753, 8235, 2]
// Exports: appLauncherShowsRecommendations, ensureRecommendationSectionsOnlyContainActivities, executeAppLauncherCommand, formatPrimaryEntryPointCommandName, getApplicationDetails, getInstallAppProps, getInstallAppPropsFromProfileApplication, getSectionDescription, getSectionName, getShelfBadgeNameIfActive, isAppAvailableInAppLauncher, isApplicationAdSupported, isApplicationMonetizedWithIAP, isPartnerApplication, isPromotedApplication

// Module 8006 (_createForOfIteratorHelperLoose)
import _objectWithoutProperties from "_objectWithoutProperties";
import ME from "ME";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import closure_8 from "_isNativeReflectConstruct";
import { ApplicationFlags } from "ME";
import { BuiltInSectionId } from "TRUE_OPTION_NAME";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
    hasApplicationFlagResult = require(7371) /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
    const obj = require(7371) /* getApplicationFlags */;
  }
  return hasApplicationFlagResult;
}
function getShelfBadgeTypeIfActive(application) {
  const tmp = getEmbeddedActivityConfig(application);
  let tmp2;
  if (null != tmp) {
    const obj = require(477) /* set */;
    tmp2 = tmp.client_platform_config[importDefault(8227)(undefined, obj.getOS(obj))];
    const tmp5 = importDefault(8227);
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
  label_type = require(1881) /* PermissionOverwriteType */.EmbeddedActivityLabelTypes.NONE;
}
function getEmbeddedActivityConfig(embeddedActivityConfig) {
  let tmp = null;
  if (isRealApplication(embeddedActivityConfig)) {
    tmp = null;
  }
  return tmp;
}
let closure_3 = ["fakeAppIconURL"];
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_launcher/utils/AppLauncherUtils.tsx");

export const FAKE_BUILT_IN_APP = { id: BuiltInSectionId.BUILT_IN };
export { isRealApplication };
export const getSectionName = function getSectionName(FAKE_BUILT_IN_APP) {
  if (isRealApplication(FAKE_BUILT_IN_APP)) {
    let name = FAKE_BUILT_IN_APP.name;
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    name = intl.string(require(1212) /* getSystemLocale */.t.UB2gG2);
  }
  return name;
};
export const getSectionDescription = function getSectionDescription(FAKE_BUILT_IN_APP) {
  if (isRealApplication(FAKE_BUILT_IN_APP)) {
    let description = FAKE_BUILT_IN_APP.description;
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    description = intl.string(require(1212) /* getSystemLocale */.t.X9fusn);
  }
  return description;
};
export { isEmbeddedApp };
export const isPartnerApplication = function isPartnerApplication(application) {
  let hasApplicationFlagResult = isRealApplication(application);
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = require(7371) /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.PARTNER);
    const obj = require(7371) /* getApplicationFlags */;
  }
  return hasApplicationFlagResult;
};
export const isPromotedApplication = function isPromotedApplication(FAKE_BUILT_IN_APP2) {
  let hasApplicationFlagResult = isRealApplication(FAKE_BUILT_IN_APP2);
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = require(7371) /* getApplicationFlags */.hasApplicationFlag(FAKE_BUILT_IN_APP2, ApplicationFlags.PROMOTED);
    const obj = require(7371) /* getApplicationFlags */;
  }
  return hasApplicationFlagResult;
};
export { getShelfBadgeTypeIfActive };
export const getShelfBadgeNameIfActive = function getShelfBadgeNameIfActive(application) {
  const tmp = getShelfBadgeTypeIfActive(application);
  if (require(1881) /* PermissionOverwriteType */.EmbeddedActivityLabelTypes.NEW === tmp) {
    return "New";
  } else if (require(1881) /* PermissionOverwriteType */.EmbeddedActivityLabelTypes.UPDATED === tmp) {
    return "Updated";
  } else {
    return "";
  }
};
export { getEmbeddedActivityConfig };
export const executeAppLauncherCommand = function executeAppLauncherCommand(arg0) {
  let closure_3;
  let _objectWithoutProperties;
  let ME;
  let commandOrigin;
  let context;
  let importDefault;
  let require;
  ({ command: require, optionValues: importDefault, context } = arg0);
  ({ commandTargetId: closure_3, maxSizeCallback: _objectWithoutProperties, sectionName: ME, commandOrigin } = arg0);
  if (commandOrigin === undefined) {
    commandOrigin = require(context[13]).CommandOrigin.APPLICATION_LAUNCHER;
  }
  let channel;
  let c8;
  channel = context.channel;
  const tmp3 = (() => {
    let closure_0 = outer1_5(async () => {
      let obj = { command: inputType, optionValues: outer2_1, context: outer2_2, commandTargetId: outer2_3, maxSizeCallback: outer2_4, commandOrigin: outer2_6, sectionName: outer2_5, source: c8.entrypoint() };
      const tmp2 = yield outer3_1(context[14])(obj);
      if (inputType.inputType === outer3_0(context[13]).ApplicationCommandInputType.BUILT_IN_TEXT) {
        if (null != tmp3) {
          if (null != outer2_2.channel) {
            const parsed = outer3_1(context[15]).parse(outer2_7, tmp3.content);
            const tts = tmp3.tts;
            let tmp4 = tmp23;
            if (null != tts) {
              tmp4 = tts;
            }
            parsed.tts = tmp4;
            const obj2 = outer3_1(context[16]);
            obj = { location: outer3_11.APP_COMMAND };
            obj2.sendMessage(outer2_2.channel.id, parsed, true, obj);
            const obj4 = outer3_1(context[15]);
            const tmp21 = parsed;
          }
        }
      }
    });
    return function() {
      return callback(...arguments);
    };
  })();
  c8 = tmp3;
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
    obj.iconURL = importDefault(1392).getApplicationIconURL(obj);
    ({ name: obj2.name, description: obj2.description } = id);
    let tmp5 = obj;
    const obj3 = importDefault(1392);
  } else {
    let tmp2 = null;
    if (null != fakeAppIconURL) {
      tmp2 = fakeAppIconURL;
    }
    obj.iconURL = tmp2;
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.name = intl.string(require(1212) /* getSystemLocale */.t.UB2gG2);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.description = intl2.string(require(1212) /* getSystemLocale */.t.X9fusn);
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
  return entrypoint === require(8226) /* AppLauncherEntrypoint */.AppLauncherEntrypoint.TEXT;
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
  let tmp = _createForOfIteratorHelperLoose(stateFromStores);
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      let prop = value.application_directory_collection_items;
      let found = prop.filter((type) => {
        let tmp = type.type === outer1_0(outer1_2[20]).ApplicationDirectoryCollectionItemType.APPLICATION;
        if (tmp) {
          tmp = outer1_15(type.application);
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
  if (application instanceof _callSuper) {
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
    result = require(6753) /* _createForOfIteratorHelperLoose */.hasCommandIndexForApp(id.id, guildState);
    const obj = require(6753) /* _createForOfIteratorHelperLoose */;
  }
  const obj2 = require(8235) /* canInstallApplication */;
  return require(8235) /* canInstallApplication */.isAppUserInstallable(id) || result;
};
