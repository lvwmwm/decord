// Module ID: 17158
// Function ID: 17159
// Name: InteractionModalUtils
// Dependencies: [5, 32, 19, 502, 2045, 5200, 2108, 4655, 5199, 13889, 7570, 1074, 7569, 1979, 1397, 8503, 6672, 504, 5910, 11, 573, 8608, 1115, 38, 5060, 7262, 7574, 5441, 1271, 1091, 2]
// Exports: useIframeModalState, useIsFirstTextInputInModal, useModalState

// Module 17158 (InteractionModalUtils)
import _modDef38 from "module_38" /* 38 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import Server from "Server" /* 1979 */;
import DraftStore from "DraftStore" /* 5200 */;
import ComponentStateContext from "ComponentStateContext" /* 7569 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 8608 */;
import InteractionModalStore2 from "InteractionModalStore" /* 13889 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 5199 */;
import LocalInteractionComponentStateStore from "LocalInteractionComponentStateStore" /* 7570 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const InteractionModalStore = InteractionModalStore2;
let _require, c0, c1, c5, c6, importDefault, set;

let tmp5;
const getURLForApplicationDefault = tmp5(8503);
function getData(arg0, arr, arg2) {
  const f107272 = (type) => {
    let components;
    let items;
    let mapped;
    let mapped1;
    let type6;
    let value;
    let value2;
    let values;
    let values2;
    type = type.type;
    if (Server.ComponentType.ACTION_ROW === type) {
      const obj4 = { type: type.type, components: components.map(f107272) };
      components = type.components;
      return obj4;
    } else if (Server.ComponentType.TEXT_INPUT === type) {
      const iter3 = LocalInteractionComponentStateStore.getInteractionComponentState(closure_0, type.id);
      const obj5 = { type: null, custom_id: null, value };
      ({ type: obj9.type, customId: obj9.custom_id } = type);
      let type1;
      if (iter3 != null) {
        type1 = iter3.type;
      }
      value = null;
      if (type1 === type.type) {
        value = iter3.value;
      }
      return obj5;
    } else if (Server.ComponentType.FILE_UPLOAD === type) {
      const interactionComponentState = LocalInteractionComponentStateStore.getInteractionComponentState(closure_0, type.id);
      let type2;
      if (interactionComponentState != null) {
        type2 = interactionComponentState.type;
      }
      let uploadIds = null;
      if (type2 === type.type) {
        uploadIds = interactionComponentState.uploadIds;
      }
      const obj10 = { type: null, custom_id: null, values: mapped };
      ({ type: obj8.type, customId: obj8.custom_id } = type);
      mapped = undefined;
      if (uploadIds != null) {
        mapped = uploadIds.map((item) => {
          closure_0 = item;
          uploads = uploads.uploads;
          return uploads.findIndex((id) => id.id === closure_0);
        });
      }
      if (mapped == null) {
        mapped = null;
      }
      return obj10;
    } else if (Server.ComponentType.STRING_SELECT === type) {
      const interactionComponentState1 = LocalInteractionComponentStateStore.getInteractionComponentState(closure_0, type.id);
      const obj19 = { type: null, custom_id: null, values };
      ({ type: obj7.type, customId: obj7.custom_id } = type);
      let type3;
      if (interactionComponentState1 != null) {
        type3 = interactionComponentState1.type;
      }
      values = null;
      if (type3 === type.type) {
        values = interactionComponentState1.values;
      }
      return obj19;
    } else {
      if (Server.ComponentType.USER_SELECT !== type) {
        if (Server.ComponentType.ROLE_SELECT !== type) {
          if (Server.ComponentType.MENTIONABLE_SELECT !== type) {
            if (Server.ComponentType.CHANNEL_SELECT !== type) {
              if (Server.ComponentType.TEXT_DISPLAY === type) {
                return { type: type.type };
              } else if (Server.ComponentType.LABEL === type) {
                const obj21 = { type: type.type, component: items.map(f107272)[0] };
                items = [type.component];
                return obj21;
              } else if (Server.ComponentType.RADIO_GROUP === type) {
                const iter2 = LocalInteractionComponentStateStore.getInteractionComponentState(closure_0, type.id);
                const obj22 = { type: null, custom_id: null, value: value2 };
                ({ type: obj3.type, customId: obj3.custom_id } = type);
                let type4;
                if (iter2 != null) {
                  type4 = iter2.type;
                }
                value2 = null;
                if (type4 === type.type) {
                  value2 = iter2.value;
                }
                return obj22;
              } else if (Server.ComponentType.CHECKBOX_GROUP === type) {
                const interactionComponentState2 = LocalInteractionComponentStateStore.getInteractionComponentState(closure_0, type.id);
                const obj23 = { type: null, custom_id: null, values: values2 };
                ({ type: obj2.type, customId: obj2.custom_id } = type);
                let type5;
                if (interactionComponentState2 != null) {
                  type5 = interactionComponentState2.type;
                }
                values2 = null;
                if (type5 === type.type) {
                  values2 = interactionComponentState2.values;
                }
                return obj23;
              } else if (Server.ComponentType.CHECKBOX === type) {
                const iter = LocalInteractionComponentStateStore.getInteractionComponentState(closure_0, type.id);
                obj = { type: null, custom_id: null, value: type6 === type.type && iter.value };
                ({ type: obj.type, customId: obj.custom_id } = type);
                type6 = undefined;
                if (iter != null) {
                  type6 = iter.type;
                }
                return obj;
              } else {
                _modDef38(false, "unreachable");
              }
            }
          }
        }
      }
      const interactionComponentState3 = LocalInteractionComponentStateStore.getInteractionComponentState(closure_0, type.id);
      const obj24 = { type: null, custom_id: null, values: mapped1 };
      ({ type: obj6.type, customId: obj6.custom_id } = type);
      let type7;
      if (interactionComponentState3 != null) {
        type7 = interactionComponentState3.type;
      }
      mapped1 = null;
      if (type7 === type.type) {
        const selectedOptions = interactionComponentState3.selectedOptions;
        mapped1 = selectedOptions.map((value) => value.value);
      }
      return obj24;
    }
  };
  let closure_0 = arg0;
  let closure_1 = arg2;
  return arr.map(f107272);
}
function getUploadsForModal(id, arg1) {
  let closure_0 = arg1;
  const uploads = UploadAttachmentStore.getUploads(id, DraftType.InteractionModal);
  return uploads.filter((id) => {
    obj = components(customId[24]);
    const result = obj.deserializeComponentUploadId(id.id);
    let containerId;
    if (result != null) {
      containerId = result.containerId;
    }
    return containerId === closure_0;
  });
}
function submitModal() {
  return obj(...arguments);
}
let obj = function _submitModal() {
  obj = _asyncToGenerator(async (arg0, value, arg2) => {
    let closure_1;
    let closure_2;
    let obj5;
    let tmp;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else {
      const tmp13 = tmp3;
      if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let arr;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_4 = tmp2;
              let closure_3 = tmp;
              channel = undefined;
              let length;
              let components;
              const channelId = closure_0.channelId;
              channel = channel.getChannel(channelId);
              _modDef38(null != channel, "expected channel");
              arr = getUploadsForModal(channelId, closure_0.customId);
              let tmp6;
              const tmp22 = closure_0;
              const tmp24 = nonce;
              const tmp27 = importDefault;
              if (arr.length > 0) {
                tmp6 = tmp27(tmp28[25])(arr);
              }
              const tmp8 = require("InteractionActionCreators");
              const obj4 = { data: obj5, preflight: tmp6 };
              obj5 = { interactionType: require("Server").InteractionTypes.MODAL_SUBMIT, applicationId: tmp22.application.id };
              const addQueued = tmp8.addQueued;
              addQueued(tmp24, obj4);
              c5 = 1;
              c6 = 1;
              const obj6 = { value: tmp6, done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            length = arr.map((item, index) => {
              obj = closure_1_0(nonce[27]);
              return obj.getAttachmentPayload(item, index);
            });
            const obj7 = { uploads: arr };
            components = closure_132_16(closure_0.customId, closure_0.components, obj7);
            function send() {
              let body;
              let obj5;
              let tmp9;
              const tmp = closure_1_3;
              if (null != closure_1_3) {
                let aborted;
                if (signal != null) {
                  aborted = tmp13.aborted;
                }
                if (!aborted) {
                  const HTTP = closure_0(nonce[28]).HTTP;
                  const request = { url: constants.INTERACTIONS, body, signal, rejectWithError: false };
                  body = { type: closure_0(nonce[13]).InteractionTypes.MODAL_SUBMIT, application_id: closure_1_0.application.id, channel_id: null, guild_id: null, data: obj5, session_id: components.getSessionId(), nonce };
                  const post = HTTP.post;
                  ({ id: obj2.channel_id, guild_id: obj2.guild_id } = tmp);
                  obj5 = { id: null, custom_id: null, components, attachments: tmp9 };
                  ({ id: obj3.id, customId: obj3.custom_id } = closure_1_0);
                  tmp9 = undefined;
                  if (length.length > 0) {
                    tmp9 = length;
                  }
                  const postResult = post(request);
                  postResult.catch((error) => {
                    if (429 === error.status) {
                      const _setTimeout = setTimeout;
                      const timerId = setTimeout(closure_1_7, error.body.retry_after * signal(nonce[29]).Millis.SECOND);
                    } else {
                      obj = closure_2_0(nonce[26]);
                      obj.setFailed(closure_1_2);
                    }
                  });
                }
              }
            }
            send();
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp10) {
          c6 = 3;
          throw tmp10;
        }
      }
    }
  });
  return obj(...arguments);
};
let _asyncToGenerator = _asyncToGenerator_mod;
const DraftType = DraftStore.DraftType;
const InteractionModalState = InteractionModalStore2.InteractionModalState;
const Endpoints = Constants.Endpoints;
let result = size.fileFinishedImporting("modules/interaction_components/InteractionModalUtils.tsx");

export const useIsFirstTextInputInModal = function useIsFirstTextInputInModal(id) {
  obj = ComponentStateContext;
  const componentStateContext = obj.useComponentStateContext();
  let first;
  if (componentStateContext != null) {
    const modal = componentStateContext.modal;
    if (modal != null) {
      first = modal.components[0];
    }
  }
  let type;
  if (first != null) {
    type = first.type;
  }
  let tmp6 = type === tmp(1979).ComponentType.ACTION_ROW && first.components[0].id === id;
  if (!tmp6) {
    let type1;
    if (first != null) {
      type1 = first.type;
    }
    tmp6 = type1 === Server.ComponentType.LABEL && first.component.id === id;
    type1 === Server.ComponentType.LABEL && first.component.id === id;
  }
  return tmp6;
};
export const useModalState = function useModalState(components, arg1) {
  let application;
  let closure_1;
  let closure_3;
  let closure_6;
  let customId;
  let first;
  let tmp3;
  let tmp7;
  let tmp8;
  _require = components;
  importDefault = arg1;
  ({ application, customId } = components);
  components = components.components;
  let tmp = require("useUnmountAbortSignal")();
  _asyncToGenerator = tmp;
  let tmp2 = _slicedToArray(first.useState(null), 2);
  [tmp3, _slicedToArray] = tmp2;
  [first, closure_6] = first.useState(null);
  [tmp7, tmp8] = _slicedToArray(first.useState({}), 2);
  const tmp6 = _slicedToArray(first.useState({}), 2);
  obj = require("get initialized");
  const items = [InteractionModalStore];
  const items1 = [first];
  const stateFromStores = obj.useStateFromStores(items, () => InteractionModalStore.getModalState(first), items1);
  const tmp10 = require("react")(() => {
    set = new Set();
    return set;
  });
  let closure_8 = tmp10;
  const items2 = [tmp, components, tmp10];
  const items3 = [first, stateFromStores, arg1, customId, components.channelId];
  const callback = first.useCallback(_asyncToGenerator(async (arg0, value) => {
    let v1;
    function validate(arr) {
      c0 = true;
      const item = arr.forEach((fn) => {
        if (!fn()) {
          c0 = false;
        }
      });
      return c0;
    }
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            _slicedToArray(null);
            closure_6(null);
            const tmp19 = closure_6;
            if (validate(closure_8)) {
              const _Date = Date;
              const obj2 = c1(customId[19]);
              const fromTimestampResult = obj2.fromTimestamp(Date.now());
              tmp19(fromTimestampResult);
              c1 = 1;
              c0 = 1;
              const obj5 = { value: submitModal(components, closure_3, fromTimestampResult), done: false };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        }
        c0 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp12) {
        c0 = 3;
        throw tmp12;
      }
    }
  }), items2);
  const effect = first.useEffect(() => {
    const tmp = stateFromStores;
    const tmp2 = InteractionModalState;
    if (stateFromStores === InteractionModalState.SUCCEEDED) {
      obj = DispatcherDefault;
      const obj2 = { type: "CLEAR_INTERACTION_MODAL_STATE", customId };
      obj.dispatch(obj2);
      components = customId;
      const removeFiles = UploadAttachmentActionCreatorsDefault.removeFiles;
      const channelId = components.channelId;
      UploadAttachmentActionCreatorsDefault;
      const uploads = UploadAttachmentStore.getUploads(components.channelId, DraftType.InteractionModal);
      const found = uploads.filter((id) => {
        obj = components(customId[24]);
        const result = obj.deserializeComponentUploadId(id.id);
        let containerId;
        if (result != null) {
          containerId = result.containerId;
        }
        return containerId === closure_0;
      });
      removeFiles(channelId, found.map((id) => id.id), DraftType.InteractionModal);
      closure_1();
    }
    if (tmp === tmp2.ERRORED) {
      const intl = intl2.intl;
      _slicedToArray(intl.string(intl2.t.uJgdEu));
    }
  }, items3);
  const items4 = [, , , ];
  ({ id: arr5[0], icon: arr5[1], name: arr5[2], bot: arr5[3] } = application);
  const memo = first.useMemo(() => {
    let bot;
    let name;
    const guildId = SelectedGuildStore.getGuildId();
    let member;
    if (null != guildId) {
      if (null != application.bot) {
        member = GuildMemberStore.getMember(guildId, tmp3.bot.id);
      }
    }
    obj = { id: application.id, icon: application.icon, botIconFirst: true, bot, guildMember: member };
    bot = undefined;
    const getApplicationIconURL = AvatarUtilsDefault.getApplicationIconURL;
    AvatarUtilsDefault;
    if (null != member) {
      bot = tmp8.bot;
    }
    let nick;
    const obj2 = { applicationIconURL: getApplicationIconURL(obj), applicationName: name, applicationBaseUrl: getURLForApplicationDefault(application.id) };
    if (member != null) {
      nick = member.nick;
    }
    if (null != nick) {
      name = member.nick;
    } else if (null != application.bot) {
      name = tmp8.bot.username;
    } else {
      name = tmp8.name;
    }
    return obj2;
  }, items4);
  let obj2 = { components, applicationIconURL: memo.applicationIconURL, applicationName: memo.applicationName, submissionState: stateFromStores, error: tmp3, validators: tmp10, validationErrors: tmp7, setValidationErrors: tmp8, onSubmit: callback };
  return obj2;
};
export const useIframeModalState = function useIframeModalState(channelId) {
  let application;
  let applicationIconURL;
  let applicationName;
  let customId;
  ({ application, customId } = channelId);
  const items = [, , , ];
  ({ id: arr[0], icon: arr[1], name: arr[2], bot: arr[3] } = application);
  const memo = react.useMemo(() => {
    let bot;
    let name;
    const guildId = SelectedGuildStore.getGuildId();
    let member;
    if (null != guildId) {
      if (null != application.bot) {
        member = GuildMemberStore.getMember(guildId, tmp3.bot.id);
      }
    }
    obj = { id: application.id, icon: application.icon, botIconFirst: true, bot, guildMember: member };
    bot = undefined;
    const getApplicationIconURL = AvatarUtilsDefault.getApplicationIconURL;
    AvatarUtilsDefault;
    if (null != member) {
      bot = tmp8.bot;
    }
    let nick;
    const obj2 = { applicationIconURL: getApplicationIconURL(obj), applicationName: name, applicationBaseUrl: getURLForApplicationDefault(application.id) };
    if (member != null) {
      nick = member.nick;
    }
    if (null != nick) {
      name = member.nick;
    } else if (null != application.bot) {
      name = tmp8.bot.username;
    } else {
      name = tmp8.name;
    }
    return obj2;
  }, items);
  const applicationBaseUrl = memo.applicationBaseUrl;
  ({ applicationIconURL, applicationName } = memo);
  const channel = ChannelStore.getChannel(channelId.channelId);
  const tmp3 = _modDef38(null != channel, "channel should not be null");
  const queryParams = { instance_id: "" + channelId.channelId + ":" + application.id + ":" + customId, custom_id: customId, channel_id: channelId.channelId };
  const tmp4 = null != channel.guild_id && "" !== channel.guild_id;
  if (tmp4) {
    queryParams.guild_id = channel.guild_id;
  }
  let str = applicationBaseUrl;
  const _URL = URL;
  if (applicationBaseUrl == null) {
    str = "";
  }
  const str2 = new _URL(str);
  str2.pathname = channelId.iframePath;
  let obj2 = { applicationIconURL, applicationName, applicationBaseUrl, queryParams, iframeUrl: str2.toString() };
  return obj2;
};
export { submitModal };
