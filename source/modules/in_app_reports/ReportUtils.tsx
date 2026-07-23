// Module ID: 7604
// Function ID: 60891
// Name: getReportMenu
// Dependencies: [5, 31, 4129, 653, 7483, 507, 7603, 7488, 686, 44, 7601, 4324, 2]
// Exports: areRequiredElementsUnfilled, fetchUrfCapabilities, getDsaExperiment, getReportMenuForModeratorReport, getUnauthenticatedReportMenu, sendUnauthenticatedReportPincode, showInAppReportsFeedbackModal, submitHeadlessReport, submitReport, submitReportSecondLook, submitUnauthenticatedReport, trackCloseReportModalAnalytics, useTrackSettingsUpsellsAction, verifyUnauthenticatedReport

// Module 7604 (getReportMenu)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import result from "result";
import closure_5 from "_isNativeReflectConstruct";
import ME from "ME";
import { SafetyToastType } from "SafetyToastType";

let closure_6;
let closure_7;
const require = arg1;
function getReportMenu(name, arg1) {
  return _getReportMenu(...arguments);
}
async function _getReportMenu(arg0, arg1, arg2) {
  const HTTP = outer2_0(outer2_2[5]).HTTP;
  let obj = { url: outer2_7.GET_REPORT_MENU(outer2_20(arg0)) };
  let variant;
  if (null != arg1) {
    variant = arg1.variant;
  }
  let tmp3;
  if (null != variant) {
    obj = { variant: arg1.variant };
    tmp3 = obj;
  }
  obj.query = tmp3;
  obj.rejectWithError = false;
  const tmp4 = yield HTTP.get(obj);
  let body = tmp4.body;
  if (null == body) {
    const _JSON = JSON;
    body = JSON.parse(tmp4.text);
  }
  return body;
}
async function _getReportMenuForModeratorReport(arg0, arg1, arg2) {
  const HTTP = outer2_0(outer2_2[5]).HTTP;
  let obj = { url: outer2_7.GET_REPORT_MENU(outer2_21(arg0)) };
  let variant;
  if (null != arg1) {
    variant = arg1.variant;
  }
  let tmp3;
  if (null != variant) {
    obj = { variant: arg1.variant };
    tmp3 = obj;
  }
  obj.query = tmp3;
  obj.rejectWithError = false;
  const tmp4 = yield HTTP.get(obj);
  let body = tmp4.body;
  if (null == body) {
    const _JSON = JSON;
    body = JSON.parse(tmp4.text);
  }
  return body;
}
async function _getUnauthenticatedReportMenu(arg0, arg1, arg2) {
  const HTTP = outer2_0(outer2_2[5]).HTTP;
  let obj = { url: outer2_7.GET_UNAUTHENTICATED_REPORT_MENU(outer2_19(arg0)) };
  let variant;
  if (null != arg1) {
    variant = arg1.variant;
  }
  let tmp3;
  if (null != variant) {
    obj = { variant: arg1.variant };
    tmp3 = obj;
  }
  obj.query = tmp3;
  obj.rejectWithError = false;
  const tmp4 = yield HTTP.get(obj);
  let body = tmp4.body;
  if (null == body) {
    const _JSON = JSON;
    body = JSON.parse(tmp4.text);
  }
  return body;
}
async function _submitHeadlessReport(arg0, arg1, arg2) {
  const tmp2 = yield outer2_9(arg0, arg1);
  const HTTP = outer2_0(outer2_2[5]).HTTP;
  let obj = { url: outer2_7.SUBMIT_REPORT_MENU(outer2_20(arg0)), body: outer2_23(tmp2, arg0, items1), rejectWithError: false };
  obj = { nodeRef: tmp2.root_node_id, destination: items };
  items = ["", tmp2.success_node_id];
  items1 = [obj];
  yield HTTP.post(obj);
}
function clientCacheBucket(email) {
  let length;
  let num = 5381;
  let num2 = 0;
  let num3 = 5381;
  if (0 < email.length) {
    do {
      num = (num << 5) + num + email.charCodeAt(num2) | 0;
      num2 = num2 + 1;
      num3 = num;
      length = email.length;
    } while (num2 < length);
  }
  return num3 >>> 0.toString(36);
}
async function _verifyUnauthenticatedReport(arg0, arg1, arg2, arg3) {
  const HTTP = outer2_0(outer2_2[5]).HTTP;
  obj = { url: outer2_7.VERIFY_UNAUTHENTICATED_REPORT(arg0), body: obj, rejectWithError: false };
  obj = { name: arg0, email: arg1, code: arg2 };
  return yield HTTP.post(obj).body;
}
async function _getDsaExperiment() {
  const HTTP = outer2_0(outer2_2[5]).HTTP;
  return yield HTTP.get({ url: outer2_7.DSA_EXPERIMENT_UNAUTHENTICATED, rejectWithError: false });
}
async function _fetchUrfCapabilities() {
  const HTTP = outer2_0(outer2_2[5]).HTTP;
  return yield HTTP.get({ url: outer2_7.DSA_CAPABILITIES, rejectWithError: false });
}
async function _submitReportSecondLook(arg0, arg1) {
  const HTTP = outer2_0(outer2_2[5]).HTTP;
  obj = { url: outer2_7.SUBMIT_REPORT_SECOND_LOOK, body: obj, rejectWithError: false };
  obj = { token: arg0 };
  return yield HTTP.post(obj).body;
}
function getUnauthenticatedReportNameSafely(name) {
  name = name.name;
  const values = Object.values(require(7601) /* ReportNames */.UnauthenticatedReportNames);
  const hasItem = values.includes(name);
  importDefault(44)(hasItem, "Invalid report type " + name.name);
  return name;
}
function getReportNameSafely(name) {
  name = name.name;
  const values = Object.values(require(7601) /* ReportNames */.ReportNames);
  const hasItem = values.includes(name);
  importDefault(44)(hasItem, "Invalid report type " + name.name);
  return name;
}
function getModeratorReportNameSafely(name) {
  name = name.name;
  const values = Object.values(require(7601) /* ReportNames */.ModeratorReportNames);
  const hasItem = values.includes(name);
  importDefault(44)(hasItem, "Invalid report type " + name.name);
  return name;
}
function getModeratorReportEndpointSafely(name) {
  const REPORT_TO_MOD = require(7603) /* set */.ReportMenuTypeSets.REPORT_TO_MOD;
  const hasItem = REPORT_TO_MOD.has(name.name);
  importDefault(44)(hasItem, "Invalid report type " + name.name);
  if (name.name === require(7601) /* ReportNames */.ModeratorReportNames.MESSAGE) {
    return closure_7.SUBMIT_MODERATOR_MESSAGE_REPORT(name.record.channel_id, name.record.id);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Invalid report type " + name.name);
    throw error;
  }
  const tmp = importDefault(44);
}
function genSubmitData(language, name, arr, arg3) {
  let channelId;
  let channel_id;
  let channel_id2;
  let guildId;
  let guild_id;
  let guild_id2;
  let id;
  let id2;
  let id3;
  language = language.language;
  let obj = { channel_id: undefined, message_id: undefined, stage_instance_id: undefined, guild_id: undefined, guild_scheduled_event_id: undefined, user_id: undefined, email_token: undefined, application_id: undefined, entrypoint: undefined, widget_id: undefined };
  obj = { version: language.version, variant: language.variant };
  let str = "en";
  if (null != language) {
    str = language;
  }
  obj.language = str;
  obj.breadcrumbs = arr.map((nodeRef) => nodeRef.nodeRef);
  obj.elements = arr.reduce((arg0, arg1) => {
    let multiSelect;
    let textInput;
    ({ multiSelect, textInput } = arg1);
    let obj = {};
    const merged = Object.assign(arg0);
    let tmp2 = null != multiSelect;
    if (tmp2) {
      obj = {};
      const _Object = Object;
      obj[multiSelect.name] = Object.keys(multiSelect.state);
      tmp2 = obj;
    }
    const merged1 = Object.assign(tmp2);
    if (null == textInput) {
      textInput = {};
    }
    const entries = Object.entries(textInput);
    const merged2 = Object.assign(Object.fromEntries(entries.map((arg0) => {
      let tmp;
      [tmp, ] = arg0;
      const items = [tmp, tmp2];
      return items;
    })));
    return obj;
  }, {});
  if (name.name !== require(7601) /* ReportNames */.ReportNames.MESSAGE) {
    if (name.name !== require(7601) /* ReportNames */.ReportNames.FIRST_DM) {
      if (name.name !== require(7601) /* ReportNames */.ReportNames.GUILD) {
        if (name.name !== require(7601) /* ReportNames */.ReportNames.GUILD_DISCOVERY) {
          if (name.name === require(7601) /* ReportNames */.ReportNames.GUILD_DIRECTORY_ENTRY) {
            obj = {};
            ({ guildId, channelId } = name.record);
            let merged = Object.assign(obj);
            let merged1 = Object.assign(obj);
            obj["name"] = name.name;
            obj["channel_id"] = channelId;
            obj["guild_id"] = guildId;
            return obj;
          } else if (name.name === require(7601) /* ReportNames */.ReportNames.STAGE_CHANNEL) {
            const obj1 = {};
            ({ id: id2, guild_id: guild_id2, channel_id } = name.record);
            let merged2 = Object.assign(obj);
            const merged3 = Object.assign(obj);
            obj1["name"] = name.name;
            obj1["channel_id"] = channel_id;
            obj1["guild_id"] = guild_id2;
            obj1["stage_instance_id"] = id2;
            return obj1;
          } else if (name.name === require(7601) /* ReportNames */.ReportNames.GUILD_SCHEDULED_EVENT) {
            const obj2 = {};
            ({ id, guild_id } = name.record);
            const merged4 = Object.assign(obj);
            const merged5 = Object.assign(obj);
            obj2["name"] = name.name;
            obj2["guild_id"] = guild_id;
            obj2["guild_scheduled_event_id"] = id;
            return obj2;
          } else {
            if (name.name === require(7601) /* ReportNames */.ReportNames.USER) {
              const obj3 = {};
              const merged6 = Object.assign(obj);
              const merged7 = Object.assign(obj);
              obj3["name"] = name.name;
              obj3["user_id"] = name.record.id;
              obj3["guild_id"] = name.contextualGuildId;
              let tmp3 = obj3;
            } else if (name.name === require(7601) /* ReportNames */.UnauthenticatedReportNames.USER) {
              const obj4 = {};
              const merged8 = Object.assign(obj);
              const merged9 = Object.assign(obj);
              obj4["name"] = name.name;
              obj4["user_id"] = name.record.id;
              obj4["guild_id"] = name.contextualGuildId;
              obj4["email_token"] = arg3;
              tmp3 = obj4;
            } else if (name.name === require(7601) /* ReportNames */.UnauthenticatedReportNames.MESSAGE) {
              const obj5 = {};
              const merged10 = Object.assign(obj);
              const merged11 = Object.assign(obj);
              obj5["name"] = name.name;
              obj5["message_id"] = name.record.id;
              obj5["email_token"] = arg3;
              tmp3 = obj5;
            } else if (name.name === require(7601) /* ReportNames */.UnauthenticatedReportNames.GUILD) {
              const obj6 = {};
              const merged12 = Object.assign(obj);
              const merged13 = Object.assign(obj);
              obj6["name"] = name.name;
              obj6["guild_id"] = name.record.id;
              obj6["email_token"] = arg3;
              tmp3 = obj6;
            } else if (name.name === require(7601) /* ReportNames */.ReportNames.APPLICATION) {
              const obj7 = {};
              const merged14 = Object.assign(obj);
              const merged15 = Object.assign(obj);
              obj7["name"] = name.name;
              obj7["application_id"] = name.record.id;
              obj7["guild_id"] = name.contextualGuildId;
              obj7["channel_id"] = name.contextualChannelId;
              obj7["entrypoint"] = name.entrypoint;
              tmp3 = obj7;
            } else if (name.name === require(7601) /* ReportNames */.ReportNames.WIDGET) {
              const obj8 = {};
              const merged16 = Object.assign(obj);
              const merged17 = Object.assign(obj);
              obj8["name"] = name.name;
              obj8["user_id"] = name.user_id;
              obj8["widget_id"] = name.widget_id;
              tmp3 = obj8;
            } else {
              tmp3 = null;
              if (name.name === require(7601) /* ReportNames */.UnauthenticatedReportNames.MEDIA_TAKEDOWN) {
                const obj9 = {};
                const merged18 = Object.assign(obj);
                const merged19 = Object.assign(obj);
                obj9["name"] = name.name;
                obj9["email_token"] = arg3;
                tmp3 = obj9;
              }
            }
            return tmp3;
          }
        }
      }
      const obj10 = {};
      const merged20 = Object.assign(obj);
      const merged21 = Object.assign(obj);
      obj10["name"] = name.name;
      obj10["guild_id"] = name.record.id;
      return obj10;
    }
  }
  const obj11 = {};
  ({ channel_id: channel_id2, id: id3 } = name.record);
  const merged22 = Object.assign(obj);
  const merged23 = Object.assign(obj);
  obj11["name"] = name.name;
  obj11["channel_id"] = channel_id2;
  obj11["message_id"] = id3;
  return obj11;
}
({ AnalyticEvents: closure_6, Endpoints: closure_7 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/in_app_reports/ReportUtils.tsx");

export { getReportMenu };
export const getReportMenuForModeratorReport = function getReportMenuForModeratorReport(name, arg1) {
  return _getReportMenuForModeratorReport(...arguments);
};
export const getUnauthenticatedReportMenu = function getUnauthenticatedReportMenu() {
  return _getUnauthenticatedReportMenu(...arguments);
};
export const submitHeadlessReport = function submitHeadlessReport(arg0, arg1) {
  return _submitHeadlessReport(...arguments);
};
export const submitReport = function submitReport(language, name, arr) {
  if (store.get("iar_skip_api_report_submit")) {
    let resolved = Promise.resolve();
  } else {
    const REPORT_TO_MOD = require(7603) /* set */.ReportMenuTypeSets.REPORT_TO_MOD;
    if (REPORT_TO_MOD.has(name.name)) {
      resolved = (function submitModeratorReport(language, name, arr) {
        const tmp = (function genModeratorSubmitdata(language, name, arr) {
          let channel_id;
          let id;
          language = language.language;
          let obj = { channel_id: undefined, message_id: undefined, guild_id: undefined };
          obj = { version: language.version, variant: language.variant };
          let str = "en";
          if (null != language) {
            str = language;
          }
          obj.language = str;
          obj.breadcrumbs = arr.map((nodeRef) => nodeRef.nodeRef);
          obj.elements = arr.reduce((arg0, arg1) => {
            let multiSelect;
            let textInput;
            ({ multiSelect, textInput } = arg1);
            let obj = {};
            const merged = Object.assign(arg0);
            let tmp2 = null != multiSelect;
            if (tmp2) {
              obj = {};
              const _Object = Object;
              obj[multiSelect.name] = Object.keys(multiSelect.state);
              tmp2 = obj;
            }
            const merged1 = Object.assign(tmp2);
            if (null == textInput) {
              textInput = {};
            }
            const entries = Object.entries(textInput);
            const merged2 = Object.assign(Object.fromEntries(entries.map((arg0) => {
              let tmp;
              [tmp, ] = arg0;
              const items = [tmp, tmp2];
              return items;
            })));
            return obj;
          }, {});
          if (name.name === outer2_0(outer2_2[10]).ModeratorReportNames.MESSAGE) {
            obj = {};
            ({ channel_id, id } = name.record);
            let merged = Object.assign(obj);
            let merged1 = Object.assign(obj);
            obj["name"] = name.name;
            obj["channel_id"] = channel_id;
            obj["message_id"] = id;
            return obj;
          } else {
            return null;
          }
        })(language, name, arr);
        let closure_0 = tmp;
        const HTTP = outer1_0(outer1_2[5]).HTTP;
        let obj = { url: outer1_22(name), body: tmp, rejectWithError: false };
        return HTTP.post({ url: outer1_22(name), body: tmp, rejectWithError: false }).then((arg0) => {
          let obj = outer2_1(outer2_2[7]);
          obj.showSuccessToast(outer2_8.REPORT_TO_MOD_SUCCESS);
          let channel_id;
          if (null != tmp) {
            channel_id = tmp.channel_id;
          }
          let tmp4 = null != channel_id;
          if (tmp4) {
            let message_id;
            if (null != tmp) {
              message_id = tmp.message_id;
            }
            tmp4 = null != message_id;
          }
          if (tmp4) {
            obj = { type: "REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS" };
            ({ channel_id: obj3.channelId, message_id: obj3.messageId } = tmp);
            outer2_1(outer2_2[8]).dispatch(obj);
            const obj2 = outer2_1(outer2_2[8]);
          }
          return arg0;
        });
      })(language, name, arr);
    } else {
      let HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
      let obj = { url: closure_7.SUBMIT_REPORT_MENU(getReportNameSafely(name)), body: genSubmitData(language, name, arr), rejectWithError: false };
      resolved = HTTP.post(obj);
    }
  }
  return resolved;
};
export const submitUnauthenticatedReport = function submitUnauthenticatedReport(language, name, arr) {
  if (store.get("iar_skip_api_report_submit")) {
    return Promise.resolve();
  } else {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    const obj = { url: closure_7.SUBMIT_UNAUTHENTICATED_REPORT_MENU(getUnauthenticatedReportNameSafely(name)), body: genSubmitData(language, name, arr, arg3), rejectWithError: true };
    return HTTP.post(obj);
  }
};
export const sendUnauthenticatedReportPincode = function sendUnauthenticatedReportPincode(name, email) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  const obj = {};
  const result = closure_7.SEND_UNAUTHENTICATED_REPORT_PINCODE(name);
  obj.url = "" + result + "?b=" + clientCacheBucket(email);
  obj.body = { name, email };
  obj.rejectWithError = false;
  obj.failImmediatelyWhenRateLimited = true;
  return HTTP.post(obj);
};
export const verifyUnauthenticatedReport = function verifyUnauthenticatedReport() {
  return _verifyUnauthenticatedReport(...arguments);
};
export const getDsaExperiment = function getDsaExperiment() {
  return _getDsaExperiment(...arguments);
};
export const fetchUrfCapabilities = function fetchUrfCapabilities() {
  return _fetchUrfCapabilities(...arguments);
};
export const submitReportSecondLook = function submitReportSecondLook() {
  return _submitReportSecondLook(...arguments);
};
export { getUnauthenticatedReportNameSafely };
export { getReportNameSafely };
export { getModeratorReportNameSafely };
export { getModeratorReportEndpointSafely };
export const trackCloseReportModalAnalytics = function trackCloseReportModalAnalytics(closure_0, c12, first) {
  let obj = importDefault(4324);
  obj = { report_type: closure_0.name, report_id: first, navigation_history: c12 };
  if (closure_0.name === require(7601) /* ReportNames */.ReportNames.MESSAGE) {
    let id = closure_0.record.id;
  }
  obj.message_id = id;
  id = undefined;
  if (closure_0.name === require(7601) /* ReportNames */.ReportNames.STAGE_CHANNEL) {
    id = closure_0.record.id;
  }
  obj.stage_instance_id = id;
  let id1;
  if (closure_0.name === require(7601) /* ReportNames */.ReportNames.GUILD_SCHEDULED_EVENT) {
    id1 = closure_0.record.id;
  }
  obj.guild_scheduled_event_id = id1;
  if (closure_0.name !== require(7601) /* ReportNames */.ReportNames.GUILD) {
    if (closure_0.name !== require(7601) /* ReportNames */.ReportNames.GUILD_DISCOVERY) {
      if (closure_0.name === require(7601) /* ReportNames */.ReportNames.GUILD_DIRECTORY_ENTRY) {
        let id2 = closure_0.record.guildId;
      } else if (closure_0.name === require(7601) /* ReportNames */.ReportNames.GUILD_SCHEDULED_EVENT) {
        id2 = closure_0.record.guild_id;
      }
    }
    obj.guild_id = id2;
    if (closure_0.name === require(7601) /* ReportNames */.ReportNames.GUILD_SCHEDULED_EVENT) {
      let channelId = closure_0.record.channel_id;
    } else if (closure_0.name === require(7601) /* ReportNames */.ReportNames.GUILD_DIRECTORY_ENTRY) {
      channelId = closure_0.record.channelId;
    }
    obj.channel_id = channelId;
    id2 = undefined;
    if (closure_0.name === require(7601) /* ReportNames */.ReportNames.APPLICATION) {
      id2 = closure_0.record.id;
    }
    obj.application_id = id2;
    obj.trackWithMetadata(constants.IAR_MODAL_CLOSE, obj);
  }
  id2 = closure_0.record.id;
};
export const showInAppReportsFeedbackModal = function showInAppReportsFeedbackModal(closure_0, first) {
  let obj = importDefault(686);
  obj = { type: "IN_APP_REPORTS_SHOW_FEEDBACK", reportId: first, reportType: closure_0.name };
  obj.dispatch(obj);
};
export const areRequiredElementsUnfilled = function areRequiredElementsUnfilled(arg0, textInput) {
  let contentUrlInputElement;
  let countrySelectElement;
  let dropdownElements;
  let freeTextElements;
  let multiSelectElement;
  let radioGroupElements;
  ({ freeTextElements, dropdownElements, countrySelectElement, radioGroupElements, multiSelectElement, contentUrlInputElement } = arg0);
  textInput = textInput.textInput;
  const multiSelect = textInput.multiSelect;
  let someResult = freeTextElements.some((should_submit_data) => {
    let tmp = true === should_submit_data.should_submit_data;
    if (tmp) {
      let tmp4;
      if (null != textInput) {
        tmp4 = textInput[should_submit_data.name];
      }
      let tmp6 = null == tmp4;
      if (!tmp6) {
        let value;
        if (null != textInput) {
          value = textInput[should_submit_data.name].value;
        }
        tmp6 = "" === value;
      }
      if (!tmp6) {
        let isValid = null != textInput;
        if (isValid) {
          isValid = null != tmp13;
          const tmp11 = textInput[should_submit_data.name];
        }
        if (isValid) {
          isValid = tmp11.isValid;
        }
        tmp6 = !isValid;
      }
      tmp = tmp6;
    }
    return tmp;
  }) || dropdownElements.some((should_submit_data) => {
    let tmp = true === should_submit_data.should_submit_data;
    if (tmp) {
      let tmp4;
      if (null != textInput) {
        tmp4 = textInput[should_submit_data.name];
      }
      let tmp6 = null == tmp4;
      if (!tmp6) {
        let value;
        if (null != textInput) {
          value = textInput[should_submit_data.name].value;
        }
        tmp6 = "" === value;
      }
      tmp = tmp6;
    }
    return tmp;
  });
  if (!someResult) {
    let should_submit_data;
    if (null != countrySelectElement) {
      should_submit_data = countrySelectElement.should_submit_data;
    }
    let tmp4 = true === should_submit_data;
    if (tmp4) {
      let tmp5;
      if (null != textInput) {
        tmp5 = textInput[countrySelectElement.name];
      }
      let tmp6 = null == tmp5;
      if (!tmp6) {
        let value;
        if (null != textInput) {
          value = textInput[countrySelectElement.name].value;
        }
        tmp6 = "" === value;
      }
      tmp4 = tmp6;
    }
    someResult = tmp4;
  }
  if (!someResult) {
    someResult = radioGroupElements.some((should_submit_data) => {
      let tmp = true === should_submit_data.should_submit_data;
      if (tmp) {
        let tmp4;
        if (null != textInput) {
          tmp4 = textInput[should_submit_data.name];
        }
        let tmp6 = null == tmp4;
        if (!tmp6) {
          let value;
          if (null != textInput) {
            value = textInput[should_submit_data.name].value;
          }
          tmp6 = "" === value;
        }
        tmp = tmp6;
      }
      return tmp;
    });
  }
  if (!someResult) {
    let should_submit_data1;
    if (null != multiSelectElement) {
      should_submit_data1 = multiSelectElement.should_submit_data;
    }
    let tmp10 = true === should_submit_data1;
    if (tmp10) {
      let tmp11 = null == multiSelect;
      if (!tmp11) {
        const _Object = Object;
        tmp11 = 0 === Object.keys(multiSelect).length;
      }
      tmp10 = tmp11;
    }
    someResult = tmp10;
  }
  if (!someResult) {
    let should_submit_data2;
    if (null != contentUrlInputElement) {
      should_submit_data2 = contentUrlInputElement.should_submit_data;
    }
    let tmp15 = true === should_submit_data2;
    if (tmp15) {
      let tmp16;
      if (null != textInput) {
        tmp16 = textInput[contentUrlInputElement.name];
      }
      let tmp17 = null == tmp16;
      if (!tmp17) {
        value = undefined;
        if (null != textInput) {
          value = textInput[contentUrlInputElement.name].value;
        }
        tmp17 = "" === value;
      }
      if (!tmp17) {
        let isValid = null != textInput;
        if (isValid) {
          isValid = null != tmp20;
          const tmp19 = textInput[contentUrlInputElement.name];
        }
        if (isValid) {
          isValid = tmp19.isValid;
        }
        tmp17 = !isValid;
      }
      tmp15 = tmp17;
    }
    someResult = tmp15;
  }
  return someResult;
};
export const TrackIarSettingsUpsellsActionType = { SETTINGS_UPSELLS_VIEWED: "SETTINGS_UPSELLS_VIEWED", SETTINGS_UPSELLS_APPLY_CLICKED: "SETTINGS_UPSELLS_APPLY_CLICKED", SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED: "SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED" };
export const useTrackSettingsUpsellsAction = function useTrackSettingsUpsellsAction(reportType, reportSubType, reportId) {
  let closure_0 = reportType;
  let closure_1 = reportSubType;
  let closure_2 = reportId;
  const items = [reportId, reportType, reportSubType];
  return React.useCallback((arg0) => {
    let closure_0 = arg0;
    return (action) => {
      let obj = callback(table[11]);
      obj = { report_id: outer1_2, report_type: name.name, report_subtype: outer1_1, settings_upsells_type: name, action };
      obj.trackWithMetadata(outer2_6.IAR_SETTINGS_UPSELLS_ACTION, obj);
    };
  }, items);
};
