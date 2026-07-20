// Module ID: 15399
// Function ID: 117497
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: default

// Module 15399 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = arg1(dependencyMap[6]).GUILD_SELECTABLE_CHANNELS_KEY;
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = importDefault(dependencyMap[8]);
let closure_11 = importDefault(dependencyMap[9]);
const importAllResult = importAll(dependencyMap[5]);
({ Endpoints: closure_12, NON_USER_BOT_DISCRIMINATOR: closure_13, Permissions: closure_14, WebhookTypes: closure_15 } = arg1(dependencyMap[10]));
const tmp3 = arg1(dependencyMap[10]);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = arg1(dependencyMap[11]));
let obj = arg1(dependencyMap[12]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOWER };
obj.form = obj;
const tmp4 = arg1(dependencyMap[11]);
obj.row = { padding: importDefault(dependencyMap[13]).modules.mobile.TABLE_ROW_PADDING };
obj.channelIcon = {};
let closure_19 = obj.createLegacyClassComponentStyles(obj);
const tmp5 = (PureComponent) => {
  class EditWebhook {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, EditWebhook);
      items1 = [...items];
      obj = closure_6(EditWebhook);
      tmp2 = closure_5;
      if (closure_21()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      EditWebhook = tmp2Result;
      tmp2Result.state = { avatar: tmp2Result.props.avatar, name: tmp2Result.props.name, channel: tmp2Result.props.channel };
      tmp2Result.handleSave = () => {
        let guildId;
        let props;
        let state;
        let webhookId;
        if (tmp2Result.state.hasChanges) {
          ({ state, props } = tmp2Result);
          let obj = { name: state.name, channel_id: state.channel.id, avatar: state.avatar };
          obj = { submitting: true };
          ({ guildId, webhookId } = props);
          props.navigation.setState(obj);
          const obj3 = callback(closure_2[14]);
          const updateResult = callback(closure_2[14]).update(guildId, webhookId, obj);
          callback(closure_2[14]).update(guildId, webhookId, obj).then(() => {
            navigation.pop();
          }).catch((body) => {
            navigation.setState({ errors: body.body, submitting: false });
          });
          const nextPromise = callback(closure_2[14]).update(guildId, webhookId, obj).then(() => {
            navigation.pop();
          });
        }
      };
      tmp2Result.handleGuildIconUpload = (avatar) => {
        avatar = tmp2Result.props.avatar;
        if (avatar !== avatar) {
          let obj = { hasChanges: true, avatar };
          tmp2Result.setState(obj);
        } else {
          obj = { hasChanges: false, avatar };
          tmp2Result.setState(obj);
        }
      };
      tmp2Result.handleNameChange = (name) => {
        name = tmp2Result.props.name;
        if (name !== name) {
          let obj = { hasChanges: true, name };
          tmp2Result.setState(obj);
        } else {
          obj = { hasChanges: false, name };
          tmp2Result.setState(obj);
        }
      };
      tmp2Result.handleChannelChange = () => {
        const channel = tmp2Result.props.channel;
        callback(closure_2[15])({
          guildId: channel.props.guildId,
          channelType: closure_8,
          filterFn(channel) {
            return closure_9.can(constants.MANAGE_WEBHOOKS, channel.channel);
          },
          selectedChannel: channel,
          onSelect(id) {
            if (id.id !== channel.id) {
              let obj = { hasChanges: true, channel: id };
              channel.setState(obj);
            } else {
              obj = { hasChanges: false, channel };
              channel.setState(obj);
            }
          }
        });
      };
      tmp2Result.handleCopyUrl = () => {
        const token = tmp2Result.props.token;
        if (null != token) {
          const aPIBaseURL = tmp2Result(closure_2[16]).getAPIBaseURL(false);
          const _HermesInternal = HermesInternal;
          const combined = "" + aPIBaseURL + closure_12.WEBHOOK_INTEGRATION(tmp, token);
          const obj = tmp2Result(closure_2[16]);
          tmp2Result(closure_2[17]).copy(combined, () => state.setState({ copied: true }));
          const obj2 = tmp2Result(closure_2[17]);
        }
      };
      tmp2Result.handleConfirmDeleteWebhook = () => {
        let guildId;
        let webhookId;
        const props = tmp2Result.props;
        ({ guildId, webhookId } = props);
        const obj = callback(closure_2[14]);
        const tmp2Result = props.navigation;
        const deleteResult = callback(closure_2[14]).delete(guildId, webhookId);
        callback(closure_2[14]).delete(guildId, webhookId).then(() => {
          navigation.pop();
        }).catch(() => {
          let obj = callback(closure_2[18]);
          obj = {};
          const intl = navigation(closure_2[19]).intl;
          obj.title = intl.string(navigation(closure_2[19]).t.N5riYn);
          const intl2 = navigation(closure_2[19]).intl;
          obj.body = intl2.string(navigation(closure_2[19]).t./4TwKf);
          obj.show(obj);
        });
      };
      tmp2Result.handleDeleteWebhook = () => {
        const name = tmp2Result.props.name;
        let obj = callback(closure_2[18]);
        obj = {};
        const intl = tmp2Result(closure_2[19]).intl;
        obj.title = intl.formatToPlainString(tmp2Result(closure_2[19]).t.QVFjHh, { name });
        const intl2 = tmp2Result(closure_2[19]).intl;
        obj.body = intl2.format(tmp2Result(closure_2[19]).t.rIWe+5, { name });
        const intl3 = tmp2Result(closure_2[19]).intl;
        obj.cancelText = intl3.string(tmp2Result(closure_2[19]).t.gm1Vej);
        const intl4 = tmp2Result(closure_2[19]).intl;
        obj.confirmText = intl4.string(tmp2Result(closure_2[19]).t.p89ACt);
        obj.onConfirm = tmp2Result.handleConfirmDeleteWebhook;
        obj.confirmColor = callback(closure_2[20]).Colors.RED;
        obj.show(obj);
      };
      tmp2Result.handleCancelChanges = () => {
        tmp2Result.setState({ avatar: tmp2Result.props.avatar, name: tmp2Result.props.name, channel: tmp2Result.props.channel });
      };
      return tmp2Result;
    }
  }
  const arg1 = EditWebhook;
  callback2(EditWebhook, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      let obj = EditWebhook(closure_2[21]);
      if (obj.isAndroid()) {
        const self = this;
        const navigation = this.props.navigation;
        const EditWebhook = navigation;
        obj = {
          headerLeft() {
              return callback2(callback(closure_2[22]), { navigation, type: "back" });
            },
          headerBackVisible: false
        };
        navigation.setOptions(obj);
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "componentDidUpdate",
    value(arg0, submitting) {
      let hasChanges;
      const EditWebhook = this;
      const navigation = this.props.navigation;
      ({ submitting, hasChanges } = this.state);
      if (submitting !== submitting.submitting) {
        if (submitting) {
          if (!submitting.submitting) {
            let obj = {
              headerRight() {
                      return callback(self(closure_2[23]).HeaderSubmittingIndicator, {});
                    },
              headerLeft() {
                      return null;
                    },
              headerBackVisible: false
            };
            navigation.setOptions(obj);
          }
        }
        obj = {};
        if (hasChanges) {
          obj.headerRight = function headerRight() {
            const obj = { onPress: self.handleSave };
            const intl = self(closure_2[19]).intl;
            obj.label = intl.string(self(closure_2[19]).t.R3BPH+);
            return callback(self(closure_2[24]).HeaderTextButton, obj);
          };
          obj.headerLeft = function headerLeft() {
            const obj = { onPress: self.handleCancelChanges };
            const intl = self(closure_2[19]).intl;
            obj.label = intl.string(self(closure_2[19]).t.ETE/oC);
            return callback(self(closure_2[24]).HeaderTextButton, obj);
          };
          obj.headerBackVisible = false;
          navigation.setOptions(obj);
        } else {
          obj.headerRight = undefined;
          obj.headerLeft = function headerLeft() {
            return callback(navigation(closure_2[22]), { navigation, type: "back" });
          };
          obj.headerBackVisible = false;
          navigation.setOptions(obj);
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "render",
    value() {
      let avatar;
      let channel;
      let copied;
      let errors;
      let name;
      const self = this;
      const tmp = callback5(this.context);
      const props = this.props;
      const webhookId = props.webhookId;
      const EditWebhook = webhookId;
      const token = props.token;
      const state = this.state;
      ({ name, channel, errors } = state);
      ({ avatar, copied } = state);
      let obj = {};
      const intl = EditWebhook(closure_2[19]).intl;
      const string = intl.string;
      const t = EditWebhook(closure_2[19]).t;
      if (copied) {
        let stringResult = string(t.t5VZ88);
      } else {
        stringResult = string(t.OpuAlK);
      }
      obj.children = stringResult;
      obj = { style: tmp.form, contentContainerStyle: items };
      const items = [{ paddingTop: 16 }, self.props.contentContainerStyle];
      obj = { spacing: callback(closure_2[13]).space.PX_24, style: { paddingHorizontal: tmp.row.padding } };
      let tmp7 = null;
      if (props.webhookType !== constants.CHANNEL_FOLLOWER) {
        const obj1 = {};
        const obj2 = {
          onUpload: self.handleGuildIconUpload,
          type: "avatar",
          icon: avatar,
          name,
          makeURL(avatar) {
              let obj = webhookId(closure_2[29]);
              obj = { id: webhookId, avatar, discriminator: closure_13 };
              return obj.getUserAvatarURL(obj);
            },
          disabled: false
        };
        obj1.iconProps = obj2;
        const intl6 = EditWebhook(closure_2[19]).intl;
        obj1.label = intl6.string(EditWebhook(closure_2[19]).t.7+5GQa);
        tmp7 = callback4(callback(closure_2[28]), obj1);
        const tmp20 = callback(closure_2[28]);
      }
      const items1 = [tmp7, , , , ];
      const obj3 = {};
      const intl2 = EditWebhook(closure_2[19]).intl;
      obj3.label = intl2.string(EditWebhook(closure_2[19]).t.ukdxuo);
      obj3.value = name;
      obj3.onChange = self.handleNameChange;
      let first;
      if (undefined !== errors) {
        if (undefined !== errors.name) {
          first = errors.name[0];
        }
      }
      obj3.errorMessage = first;
      items1[1] = callback4(EditWebhook(closure_2[30]).TextInput, obj3);
      const obj4 = {};
      const intl3 = EditWebhook(closure_2[19]).intl;
      obj4.title = intl3.string(EditWebhook(closure_2[19]).t.GK18KJ);
      obj4.hasIcons = true;
      const obj5 = {};
      let obj6 = EditWebhook(closure_2[33]);
      obj5.label = obj6.computeChannelName(channel, closure_11, closure_10);
      obj5.arrow = true;
      obj5.onPress = self.handleChannelChange;
      obj6 = { size: EditWebhook(closure_2[34]).Icon.Sizes.CUSTOM };
      let obj8 = EditWebhook(closure_2[35]);
      obj6.source = obj8.getChannelIcon(channel);
      obj6.style = tmp.channelIcon;
      obj5.icon = callback4(EditWebhook(closure_2[34]).Icon, obj6);
      obj4.children = callback4(EditWebhook(closure_2[32]).TableRow, obj5);
      items1[2] = callback4(EditWebhook(closure_2[31]).TableRowGroup, obj4);
      let tmp10 = null;
      if (null != token) {
        const obj7 = {};
        const intl4 = EditWebhook(closure_2[19]).intl;
        obj7.title = intl4.string(EditWebhook(closure_2[19]).t.SFdvF1);
        obj7.hasIcons = false;
        obj8 = {};
        const aPIBaseURL = EditWebhook(closure_2[16]).getAPIBaseURL(false);
        const _HermesInternal = HermesInternal;
        obj8.label = "" + aPIBaseURL + closure_12.WEBHOOK_INTEGRATION(webhookId, token);
        obj8.onPress = self.handleCopyUrl;
        obj8.trailing = tmp2Result;
        obj7.children = callback4(EditWebhook(closure_2[32]).TableRow, obj8);
        tmp10 = callback4(EditWebhook(closure_2[31]).TableRowGroup, obj7);
        const obj12 = EditWebhook(closure_2[16]);
      }
      items1[3] = tmp10;
      const obj9 = { hasIcons: false };
      const obj10 = { variant: "danger", onPress: self.handleDeleteWebhook };
      const intl5 = EditWebhook(closure_2[19]).intl;
      obj10.label = intl5.string(EditWebhook(closure_2[19]).t.oyYWHE);
      obj9.children = callback4(EditWebhook(closure_2[32]).TableRow, obj10);
      items1[4] = callback4(EditWebhook(closure_2[31]).TableRowGroup, obj9);
      obj.children = items1;
      obj.children = closure_17(EditWebhook(closure_2[27]).Stack, obj);
      return callback4(EditWebhook(closure_2[26]).Form, obj);
    }
  };
  items[2] = obj;
  return callback(EditWebhook, items);
}(importAllResult.PureComponent);
tmp5.contextType = arg1(dependencyMap[36]).ThemeContext;
const obj1 = { padding: importDefault(dependencyMap[13]).modules.mobile.TABLE_ROW_PADDING };
const result = arg1(dependencyMap[39]).fileFinishedImporting("modules/integration_settings/native/IntegrationsSettingsEditWebhook.tsx");

export default function ConnectedEditWebhook(arg0) {
  let obj = arg1(dependencyMap[37]);
  obj = {};
  obj = { navigation: obj.useNavigation() };
  const merged = Object.assign(arg0);
  const items = [callback3(tmp5, obj), callback3(arg1(dependencyMap[38]).NavScrim, {})];
  obj.children = items;
  return callback4(closure_18, obj);
};
