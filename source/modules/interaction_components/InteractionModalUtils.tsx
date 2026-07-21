// Module ID: 15948
// Function ID: 122316
// Name: useApplicationInfo
// Dependencies: []
// Exports: useIframeModalState, useIsFirstTextInputInModal, useModalState

// Module 15948 (useApplicationInfo)
function useApplicationInfo(application) {
  const arg1 = application;
  const items = [, , , ];
  ({ id: arr[0], icon: arr[1], name: arr[2], bot: arr[3] } = application);
  return React.useMemo((self) => {
    const guildId = guildId.getGuildId();
    let member;
    if (null != guildId) {
      if (null != self.bot) {
        member = member.getMember(guildId, self.bot.id);
      }
    }
    let obj = {};
    obj = { id: self.id, icon: self.icon, botIconFirst: true };
    let bot;
    if (null != member) {
      bot = self.bot;
    }
    obj.bot = bot;
    obj.guildMember = member;
    obj.applicationIconURL = callback(closure_2[14]).getApplicationIconURL(obj);
    let nick;
    if (null != member) {
      nick = member.nick;
    }
    if (null != nick) {
      let name = member.nick;
    } else if (null != self.bot) {
      name = self.bot.username;
    } else {
      name = self.name;
    }
    obj.applicationName = name;
    obj.applicationBaseUrl = callback(closure_2[15])(self.id);
    return obj;
  }, items);
}
function getData(arg0, arr) {
  arr = arg0;
  const importDefault = arg2;
  return arr.map((type) => {
    type = type.type;
    if (type(closure_2[13]).ComponentType.ACTION_ROW === type) {
      let obj = { type: type.type, components: callback(type, type.components, arg2) };
      return obj;
    } else if (type(closure_2[13]).ComponentType.TEXT_INPUT === type) {
      const iter3 = store.getInteractionComponentState(type, type.id);
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
    } else if (type(closure_2[13]).ComponentType.FILE_UPLOAD === type) {
      const interactionComponentState = store.getInteractionComponentState(type, type.id);
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
          const uploads = uploads.uploads;
          return uploads.findIndex((id) => id.id === id);
        });
      }
      let tmp41 = null;
      if (null != mapped) {
        tmp41 = mapped;
      }
      obj1.values = tmp41;
      return obj1;
    } else if (type(closure_2[13]).ComponentType.STRING_SELECT === type) {
      const interactionComponentState1 = store.getInteractionComponentState(type, type.id);
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
      if (type(closure_2[13]).ComponentType.USER_SELECT !== type) {
        if (type(closure_2[13]).ComponentType.ROLE_SELECT !== type) {
          if (type(closure_2[13]).ComponentType.MENTIONABLE_SELECT !== type) {
            if (type(closure_2[13]).ComponentType.CHANNEL_SELECT !== type) {
              if (type(closure_2[13]).ComponentType.TEXT_DISPLAY === type) {
                const obj3 = { type: type.type };
                return obj3;
              } else if (type(closure_2[13]).ComponentType.LABEL === type) {
                const obj4 = { type: type.type };
                const items = [type.component];
                obj4.component = callback(type, items, arg2)[0];
                return obj4;
              } else if (type(closure_2[13]).ComponentType.RADIO_GROUP === type) {
                const iter2 = store.getInteractionComponentState(type, type.id);
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
              } else if (type(closure_2[13]).ComponentType.CHECKBOX_GROUP === type) {
                const interactionComponentState2 = store.getInteractionComponentState(type, type.id);
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
              } else if (type(closure_2[13]).ComponentType.CHECKBOX === type) {
                const iter = store.getInteractionComponentState(type, type.id);
                obj = {};
                ({ type: obj.type, customId: obj.custom_id } = type);
                let type5;
                if (null != iter) {
                  type5 = iter.type;
                }
                obj.value = type5 === type.type && iter.value;
                return obj;
              } else {
                arg2(closure_2[23])(false, "unreachable");
              }
            }
          }
        }
      }
      const interactionComponentState3 = store.getInteractionComponentState(type, type.id);
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
  const uploads = uploads.getUploads(arg0, DraftType.InteractionModal);
  return uploads.filter((id) => {
    let containerId;
    const result = arg1(closure_2[24]).deserializeComponentUploadId(id.id);
    if (null != result) {
      containerId = result.containerId;
    }
    return containerId === arg1;
  });
}
function submitModal() {
  return _submitModal(...arguments);
}
function _submitModal() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _submitModal = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const DraftType = arg1(dependencyMap[5]).DraftType;
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
const InteractionModalState = arg1(dependencyMap[9]).InteractionModalState;
let closure_14 = importDefault(dependencyMap[10]);
const Endpoints = arg1(dependencyMap[11]).Endpoints;
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/interaction_components/InteractionModalUtils.tsx");

export const useIsFirstTextInputInModal = function useIsFirstTextInputInModal(id) {
  const componentStateContext = arg1(dependencyMap[12]).useComponentStateContext();
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
  let tmp4 = type === arg1(dependencyMap[13]).ComponentType.ACTION_ROW;
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
  const arg1 = customId;
  const importDefault = arg1;
  customId = customId.customId;
  const dependencyMap = customId;
  ({ application, components } = customId);
  const tmp = importDefault(dependencyMap[16])();
  let callback = tmp;
  const tmp2 = callback2(React.useState(null), 2);
  const callback2 = tmp2[1];
  const tmp3 = callback2(React.useState(null), 2);
  const first = tmp3[0];
  const React = first;
  let closure_6 = tmp3[1];
  [tmp6, tmp7] = callback2(React.useState({}), 2);
  let obj = arg1(dependencyMap[17]);
  const items = [closure_12];
  const items1 = [first];
  const stateFromStores = obj.useStateFromStores(items, () => modalState.getModalState(first), items1);
  let closure_7 = stateFromStores;
  const fn = () => new Set();
  const tmp9 = importDefault(dependencyMap[18])(fn);
  const DraftType = tmp9;
  // CreateGeneratorClosureLongIndex (0x67)
  const items2 = [tmp, customId, tmp9];
  const items3 = [first, stateFromStores, arg1, customId, customId.channelId];
  callback = React.useCallback(callback(fn), items2);
  const effect = React.useEffect(() => {
    if (stateFromStores === constants.SUCCEEDED) {
      let obj = arg1(customId[20]);
      obj = { type: "CLEAR_INTERACTION_MODAL_STATE", customId };
      obj.dispatch(obj);
      const obj3 = arg1(customId[21]);
      obj3.removeFiles(arg0.channelId, callback2(arg0.channelId, customId).map((id) => id.id), arg0.InteractionModal);
      arg1();
      const arr = callback2(arg0.channelId, customId);
    }
    if (stateFromStores === constants.ERRORED) {
      const intl = arg0(customId[22]).intl;
      callback(intl.string(arg0(customId[22]).t.uJgdEu));
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
  const channel = channel.getChannel(channelId.channelId);
  importDefault(dependencyMap[23])(null != channel, "channel should not be null");
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
