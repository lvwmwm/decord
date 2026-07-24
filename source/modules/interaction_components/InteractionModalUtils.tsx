// Module ID: 16120
// Function ID: 124855
// Name: useApplicationInfo
// Dependencies: [5, 57, 31, 1194, 1348, 4468, 1917, 3947, 4467, 13383, 7886, 653, 7885, 1881, 1392, 10510, 5635, 566, 5450, 21, 686, 8025, 1212, 44, 4353, 7082, 7890, 4666, 507, 664, 2]
// Exports: useIframeModalState, useIsFirstTextInputInModal, useModalState

// Module 16120 (useApplicationInfo)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import result from "result";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { DraftType } from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import { InteractionModalState } from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import { Endpoints } from "ME";

const require = arg1;
function useApplicationInfo(application) {
  let closure_0 = application;
  const items = [, , , ];
  ({ id: arr[0], icon: arr[1], name: arr[2], bot: arr[3] } = application);
  return React.useMemo(() => {
    const guildId = outer1_10.getGuildId();
    let member;
    if (null != guildId) {
      if (null != application.bot) {
        member = outer1_9.getMember(guildId, application.bot.id);
      }
    }
    let obj = {};
    obj = { id: application.id, icon: application.icon, botIconFirst: true };
    let bot;
    if (null != member) {
      bot = application.bot;
    }
    obj.bot = bot;
    obj.guildMember = member;
    obj.applicationIconURL = outer1_1(outer1_2[14]).getApplicationIconURL(obj);
    let nick;
    if (null != member) {
      nick = member.nick;
    }
    if (null != nick) {
      let name = member.nick;
    } else if (null != application.bot) {
      name = application.bot.username;
    } else {
      name = application.name;
    }
    obj.applicationName = name;
    obj.applicationBaseUrl = outer1_1(outer1_2[15])(application.id);
    return obj;
  }, items);
}
function getData(arg0, arr) {
  let closure_0 = arg0;
  let closure_1 = arg2;
  return arr.map((type) => {
    type = type.type;
    if (callback(outer1_2[13]).ComponentType.ACTION_ROW === type) {
      let obj = { type: type.type, components: outer1_17(callback, type.components, callback2) };
      return obj;
    } else if (callback(outer1_2[13]).ComponentType.TEXT_INPUT === type) {
      const iter3 = outer1_14.getInteractionComponentState(callback, type.id);
      obj = {};
      ({ type: obj9.type, customId: obj9.custom_id } = type);
      type = undefined;
      if (null != iter3) {
        type = iter3.type;
      }
      let value = null;
      if (type === type.type) {
        value = iter3.value;
      }
      obj.value = value;
      return obj;
    } else if (callback(outer1_2[13]).ComponentType.FILE_UPLOAD === type) {
      const interactionComponentState = outer1_14.getInteractionComponentState(callback, type.id);
      let type1;
      if (null != interactionComponentState) {
        type1 = interactionComponentState.type;
      }
      let uploadIds = null;
      if (type1 === type.type) {
        uploadIds = interactionComponentState.uploadIds;
      }
      const obj1 = {};
      ({ type: obj8.type, customId: obj8.custom_id } = type);
      let mapped;
      if (null != uploadIds) {
        mapped = uploadIds.map((arg0) => {
          let closure_0 = arg0;
          const uploads = outer1_1.uploads;
          return uploads.findIndex((id) => id.id === closure_0);
        });
      }
      let tmp41 = null;
      if (null != mapped) {
        tmp41 = mapped;
      }
      obj1.values = tmp41;
      return obj1;
    } else if (callback(outer1_2[13]).ComponentType.STRING_SELECT === type) {
      const interactionComponentState1 = outer1_14.getInteractionComponentState(callback, type.id);
      const obj2 = {};
      ({ type: obj7.type, customId: obj7.custom_id } = type);
      let type2;
      if (null != interactionComponentState1) {
        type2 = interactionComponentState1.type;
      }
      let values = null;
      if (type2 === type.type) {
        values = interactionComponentState1.values;
      }
      obj2.values = values;
      return obj2;
    } else {
      if (callback(outer1_2[13]).ComponentType.USER_SELECT !== type) {
        if (callback(outer1_2[13]).ComponentType.ROLE_SELECT !== type) {
          if (callback(outer1_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
            if (callback(outer1_2[13]).ComponentType.CHANNEL_SELECT !== type) {
              if (callback(outer1_2[13]).ComponentType.TEXT_DISPLAY === type) {
                const obj3 = { type: type.type };
                return obj3;
              } else if (callback(outer1_2[13]).ComponentType.LABEL === type) {
                const obj4 = { type: type.type };
                const items = [type.component];
                obj4.component = outer1_17(callback, items, callback2)[0];
                return obj4;
              } else if (callback(outer1_2[13]).ComponentType.RADIO_GROUP === type) {
                const iter2 = outer1_14.getInteractionComponentState(callback, type.id);
                const obj5 = {};
                ({ type: obj3.type, customId: obj3.custom_id } = type);
                let type3;
                if (null != iter2) {
                  type3 = iter2.type;
                }
                value = null;
                if (type3 === type.type) {
                  value = iter2.value;
                }
                obj5.value = value;
                return obj5;
              } else if (callback(outer1_2[13]).ComponentType.CHECKBOX_GROUP === type) {
                const interactionComponentState2 = outer1_14.getInteractionComponentState(callback, type.id);
                const obj6 = {};
                ({ type: obj2.type, customId: obj2.custom_id } = type);
                let type4;
                if (null != interactionComponentState2) {
                  type4 = interactionComponentState2.type;
                }
                values = null;
                if (type4 === type.type) {
                  values = interactionComponentState2.values;
                }
                obj6.values = values;
                return obj6;
              } else if (callback(outer1_2[13]).ComponentType.CHECKBOX === type) {
                const iter = outer1_14.getInteractionComponentState(callback, type.id);
                obj = {};
                ({ type: obj.type, customId: obj.custom_id } = type);
                let type5;
                if (null != iter) {
                  type5 = iter.type;
                }
                obj.value = type5 === type.type && iter.value;
                return obj;
              } else {
                callback2(outer1_2[23])(false, "unreachable");
              }
            }
          }
        }
      }
      const interactionComponentState3 = outer1_14.getInteractionComponentState(callback, type.id);
      const obj7 = {};
      ({ type: obj6.type, customId: obj6.custom_id } = type);
      let type6;
      if (null != interactionComponentState3) {
        type6 = interactionComponentState3.type;
      }
      let mapped1 = null;
      if (type6 === type.type) {
        const selectedOptions = interactionComponentState3.selectedOptions;
        mapped1 = selectedOptions.map((value) => value.value);
      }
      obj7.values = mapped1;
      return obj7;
    }
  });
}
function getUploadsForModal(arg0, arg1) {
  let closure_0 = arg1;
  uploads = uploads.getUploads(arg0, DraftType.InteractionModal);
  return uploads.filter((id) => {
    let containerId;
    const result = callback(outer1_2[24]).deserializeComponentUploadId(id.id);
    if (null != result) {
      containerId = result.containerId;
    }
    return containerId === callback;
  });
}
function submitModal() {
  return _submitModal(...arguments);
}
function _submitModal() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
let result = require("result").fileFinishedImporting("modules/interaction_components/InteractionModalUtils.tsx");

export const useIsFirstTextInputInModal = function useIsFirstTextInputInModal(id) {
  const componentStateContext = require(7885) /* isInteractionComponent */.useComponentStateContext();
  let first;
  if (null != componentStateContext) {
    const modal = componentStateContext.modal;
    if (null != modal) {
      first = modal.components[0];
    }
  }
  let type;
  if (null != first) {
    type = first.type;
  }
  let tmp4 = type === require(1881) /* PermissionOverwriteType */.ComponentType.ACTION_ROW;
  if (tmp4) {
    tmp4 = first.components[0].id === id;
  }
  return tmp4;
};
export const useModalState = function useModalState(customId) {
  let application;
  let components;
  let tmp6;
  let tmp7;
  const _require = customId;
  const importDefault = arg1;
  customId = customId.customId;
  ({ application, components } = customId);
  const tmp = importDefault(customId[16])();
  let callback = tmp;
  const tmp2 = callback2(first.useState(null), 2);
  callback2 = tmp2[1];
  const tmp3 = callback2(first.useState(null), 2);
  first = tmp3[0];
  let closure_6 = tmp3[1];
  [tmp6, tmp7] = callback2(first.useState({}), 2);
  let obj = _require(customId[17]);
  const items = [closure_12];
  const items1 = [first];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_12.getModalState(first), items1);
  const fn = () => new Set();
  const tmp9 = importDefault(customId[18])(fn);
  const DraftType = tmp9;
  // CreateGeneratorClosureLongIndex (0x67)
  const items2 = [tmp, customId, tmp9];
  const items3 = [first, stateFromStores, arg1, customId, customId.channelId];
  callback = first.useCallback(callback(fn), items2);
  const effect = first.useEffect(() => {
    if (stateFromStores === outer1_13.SUCCEEDED) {
      let obj = callback(customId[20]);
      obj = { type: "CLEAR_INTERACTION_MODAL_STATE", customId };
      obj.dispatch(obj);
      const obj3 = callback(customId[21]);
      obj3.removeFiles(customId.channelId, outer1_18(customId.channelId, customId).map((id) => id.id), customId.InteractionModal);
      callback();
      const arr = outer1_18(customId.channelId, customId);
    }
    if (stateFromStores === outer1_13.ERRORED) {
      const intl = customId(customId[22]).intl;
      callback2(intl.string(customId(customId[22]).t.uJgdEu));
    }
  }, items3);
  const tmp12 = useApplicationInfo(application);
  obj = { components, applicationIconURL: tmp12.applicationIconURL, applicationName: tmp12.applicationName, submissionState: stateFromStores, error: tmp2[0], validators: tmp9, validationErrors: tmp6, setValidationErrors: tmp7, onSubmit: callback };
  return obj;
};
export const useIframeModalState = function useIframeModalState(channelId) {
  let application;
  let applicationIconURL;
  let applicationName;
  let customId;
  ({ application, customId } = channelId);
  const tmp = useApplicationInfo(application);
  const applicationBaseUrl = tmp.applicationBaseUrl;
  ({ applicationIconURL, applicationName } = tmp);
  channel = channel.getChannel(channelId.channelId);
  importDefault(44)(null != channel, "channel should not be null");
  let obj = { instance_id: "" + channelId.channelId + ":" + application.id + ":" + customId, custom_id: customId, channel_id: channelId.channelId };
  let str = "";
  if (tmp4) {
    obj.guild_id = channel.guild_id;
  }
  if (null != applicationBaseUrl) {
    str = applicationBaseUrl;
  }
  const str2 = new URL(str);
  str2.pathname = channelId.iframePath;
  obj = { applicationIconURL, applicationName, applicationBaseUrl, queryParams: obj, iframeUrl: str2.toString() };
  return obj;
};
export { submitModal };
