// Module ID: 15581
// Function ID: 120099
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 1907, 3758, 3767, 1849, 653, 33, 4130, 689, 15574, 10403, 507, 5490, 4471, 1212, 4561, 477, 9165, 5087, 9158, 4126, 7636, 4541, 15582, 1392, 7574, 5501, 5165, 4320, 1273, 4593, 3842, 1456, 5448, 2]
// Exports: default

// Module 15581 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import openChannelPicker from "openChannelPicker";
import _copy from "_copy";
import module_4471 from "module_4471";
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_8 } from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "computeDefaultGroupDmNameFromUserIds";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "TableRowGroupTitle";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ Endpoints: closure_12, NON_USER_BOT_DISCRIMINATOR: closure_13, Permissions: closure_14, WebhookTypes: closure_15 } = ME);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.form = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.row = { padding: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING };
_createForOfIteratorHelperLoose.channelIcon = { height: 16, width: 16, opacity: 0.6 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
const tmp5 = ((PureComponent) => {
  class EditWebhook {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_3(this, apply);
      items1 = [...items];
      obj = outer1_6(apply);
      tmp2 = outer1_5;
      if (outer1_21()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      obj = { avatar: null, name: null, channel: null, hasChanges: false, submitting: false, copied: false };
      obj.avatar = tmp2Result.props.avatar;
      obj.name = tmp2Result.props.name;
      obj.channel = tmp2Result.props.channel;
      tmp2Result.state = obj;
      tmp2Result.handleSave = () => {
        let guildId;
        let props;
        let state;
        let webhookId;
        if (navigation.state.hasChanges) {
          ({ state, props } = navigation);
          navigation = props.navigation;
          let obj = { name: state.name, channel_id: state.channel.id, avatar: state.avatar };
          obj = { submitting: true };
          ({ guildId, webhookId } = props);
          navigation.setState(obj);
          const obj3 = outer2_1(outer2_2[14]);
          const updateResult = outer2_1(outer2_2[14]).update(guildId, webhookId, obj);
          outer2_1(outer2_2[14]).update(guildId, webhookId, obj).then(() => {
            navigation.pop();
          }).catch((body) => {
            navigation.setState({ errors: body.body, submitting: false });
          });
          const nextPromise = outer2_1(outer2_2[14]).update(guildId, webhookId, obj).then(() => {
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
        channel = channel.props.channel;
        outer2_1(outer2_2[15])({
          guildId: channel.props.guildId,
          channelType: outer2_8,
          filterFn(channel) {
            return outer3_9.can(outer3_14.MANAGE_WEBHOOKS, channel.channel);
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
          const aPIBaseURL = EditWebhook(outer2_2[16]).getAPIBaseURL(false);
          const _HermesInternal = HermesInternal;
          const combined = "" + aPIBaseURL + outer2_12.WEBHOOK_INTEGRATION(tmp, token);
          const obj = EditWebhook(outer2_2[16]);
          EditWebhook(outer2_2[17]).copy(combined, () => outer1_0.setState({ copied: true }));
          const obj2 = EditWebhook(outer2_2[17]);
        }
      };
      tmp2Result.handleConfirmDeleteWebhook = () => {
        let guildId;
        let webhookId;
        const props = navigation.props;
        navigation = props.navigation;
        ({ guildId, webhookId } = props);
        let obj = outer2_1(outer2_2[14]);
        const deleteResult = outer2_1(outer2_2[14]).delete(guildId, webhookId);
        outer2_1(outer2_2[14]).delete(guildId, webhookId).then(() => {
          navigation.pop();
        }).catch(() => {
          let obj = outer3_1(outer3_2[18]);
          obj = {};
          const intl = EditWebhook(outer3_2[19]).intl;
          obj.title = intl.string(EditWebhook(outer3_2[19]).t.N5riYn);
          const intl2 = EditWebhook(outer3_2[19]).intl;
          obj.body = intl2.string(EditWebhook(outer3_2[19]).t["/4TwKf"]);
          obj.show(obj);
        });
      };
      tmp2Result.handleDeleteWebhook = () => {
        const name = tmp2Result.props.name;
        let obj = outer2_1(outer2_2[18]);
        obj = {};
        const intl = EditWebhook(outer2_2[19]).intl;
        obj.title = intl.formatToPlainString(EditWebhook(outer2_2[19]).t.QVFjHh, { name });
        const intl2 = EditWebhook(outer2_2[19]).intl;
        obj.body = intl2.format(EditWebhook(outer2_2[19]).t["rIWe+5"], { name });
        const intl3 = EditWebhook(outer2_2[19]).intl;
        obj.cancelText = intl3.string(EditWebhook(outer2_2[19]).t.gm1Vej);
        const intl4 = EditWebhook(outer2_2[19]).intl;
        obj.confirmText = intl4.string(EditWebhook(outer2_2[19]).t.p89ACt);
        obj.onConfirm = tmp2Result.handleConfirmDeleteWebhook;
        obj.confirmColor = outer2_1(outer2_2[20]).Colors.RED;
        obj.show(obj);
      };
      tmp2Result.handleCancelChanges = () => {
        const obj = { avatar: tmp2Result.props.avatar, name: tmp2Result.props.name, channel: tmp2Result.props.channel, hasChanges: false, submitting: false, copied: false };
        tmp2Result.setState(obj);
      };
      return tmp2Result;
    }
  }
  callback2(EditWebhook, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      let obj = EditWebhook(outer1_2[21]);
      if (obj.isAndroid()) {
        const self = this;
        const navigation = this.props.navigation;
        obj = {
          headerLeft() {
              return outer2_16(outer2_1(outer2_2[22]), { navigation, type: "back" });
            },
          headerBackVisible: false
        };
        navigation.setOptions(obj);
      }
    }
  };
  let items = [obj, , ];
  obj = {
    key: "componentDidUpdate",
    value(arg0, submitting) {
      let hasChanges;
      const self = this;
      const navigation = this.props.navigation;
      ({ submitting, hasChanges } = this.state);
      if (submitting !== submitting.submitting) {
        if (submitting) {
          if (!submitting.submitting) {
            let obj = {
              headerRight() {
                      return outer2_16(EditWebhook(outer2_2[23]).HeaderSubmittingIndicator, {});
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
            const intl = EditWebhook(outer2_2[19]).intl;
            obj.label = intl.string(EditWebhook(outer2_2[19]).t["R3BPH+"]);
            return outer2_16(EditWebhook(outer2_2[24]).HeaderTextButton, obj);
          };
          obj.headerLeft = function headerLeft() {
            const obj = { onPress: self.handleCancelChanges };
            const intl = EditWebhook(outer2_2[19]).intl;
            obj.label = intl.string(EditWebhook(outer2_2[19]).t["ETE/oC"]);
            return outer2_16(EditWebhook(outer2_2[24]).HeaderTextButton, obj);
          };
          obj.headerBackVisible = false;
          navigation.setOptions(obj);
        } else {
          obj.headerRight = undefined;
          obj.headerLeft = function headerLeft() {
            return outer2_16(outer2_1(outer2_2[22]), { navigation, type: "back" });
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
      const tmp = outer1_19(this.context);
      const props = this.props;
      const webhookId = props.webhookId;
      const token = props.token;
      const state = this.state;
      ({ name, channel, errors } = state);
      ({ avatar, copied } = state);
      let obj = { variant: "text-sm/medium", color: "text-link" };
      const intl = EditWebhook(outer1_2[19]).intl;
      const string = intl.string;
      const t = EditWebhook(outer1_2[19]).t;
      if (copied) {
        let stringResult = string(t.t5VZ88);
      } else {
        stringResult = string(t.OpuAlK);
      }
      obj.children = stringResult;
      obj = { style: tmp.form, contentContainerStyle: items };
      items = [{ paddingTop: 16 }, self.props.contentContainerStyle];
      obj = { spacing: outer1_1(outer1_2[13]).space.PX_24, style: { paddingHorizontal: tmp.row.padding } };
      let tmp7 = null;
      if (props.webhookType !== outer1_15.CHANNEL_FOLLOWER) {
        const obj1 = {};
        const obj2 = {
          onUpload: self.handleGuildIconUpload,
          type: "avatar",
          icon: avatar,
          name,
          makeURL(avatar) {
              let obj = EditWebhook(outer2_2[29]);
              obj = { id: webhookId, avatar, discriminator: outer2_13 };
              return obj.getUserAvatarURL(obj);
            },
          disabled: false
        };
        obj1.iconProps = obj2;
        const intl6 = EditWebhook(outer1_2[19]).intl;
        obj1.label = intl6.string(EditWebhook(outer1_2[19]).t["7+5GQa"]);
        tmp7 = outer1_16(outer1_1(outer1_2[28]), obj1);
        const tmp20 = outer1_1(outer1_2[28]);
      }
      const items1 = [tmp7, , , , ];
      const obj3 = {};
      const intl2 = EditWebhook(outer1_2[19]).intl;
      obj3.label = intl2.string(EditWebhook(outer1_2[19]).t.ukdxuo);
      obj3.value = name;
      obj3.onChange = self.handleNameChange;
      let first;
      if (undefined !== errors) {
        if (undefined !== errors.name) {
          first = errors.name[0];
        }
      }
      obj3.errorMessage = first;
      items1[1] = outer1_16(EditWebhook(outer1_2[30]).TextInput, obj3);
      const obj4 = {};
      const intl3 = EditWebhook(outer1_2[19]).intl;
      obj4.title = intl3.string(EditWebhook(outer1_2[19]).t.GK18KJ);
      obj4.hasIcons = true;
      const obj5 = {};
      let obj6 = EditWebhook(outer1_2[33]);
      obj5.label = obj6.computeChannelName(channel, outer1_11, outer1_10);
      obj5.arrow = true;
      obj5.onPress = self.handleChannelChange;
      obj6 = { size: EditWebhook(outer1_2[34]).Icon.Sizes.CUSTOM };
      let obj8 = EditWebhook(outer1_2[35]);
      obj6.source = obj8.getChannelIcon(channel);
      obj6.style = tmp.channelIcon;
      obj5.icon = outer1_16(EditWebhook(outer1_2[34]).Icon, obj6);
      obj4.children = outer1_16(EditWebhook(outer1_2[32]).TableRow, obj5);
      items1[2] = outer1_16(EditWebhook(outer1_2[31]).TableRowGroup, obj4);
      let tmp10 = null;
      if (null != token) {
        const obj7 = {};
        const intl4 = EditWebhook(outer1_2[19]).intl;
        obj7.title = intl4.string(EditWebhook(outer1_2[19]).t.SFdvF1);
        obj7.hasIcons = false;
        obj8 = {};
        const aPIBaseURL = EditWebhook(outer1_2[16]).getAPIBaseURL(false);
        const _HermesInternal = HermesInternal;
        obj8.label = "" + aPIBaseURL + outer1_12.WEBHOOK_INTEGRATION(webhookId, token);
        obj8.onPress = self.handleCopyUrl;
        obj8.trailing = tmp2Result;
        obj7.children = outer1_16(EditWebhook(outer1_2[32]).TableRow, obj8);
        tmp10 = outer1_16(EditWebhook(outer1_2[31]).TableRowGroup, obj7);
        const obj12 = EditWebhook(outer1_2[16]);
      }
      items1[3] = tmp10;
      const obj9 = { hasIcons: false };
      const obj10 = { variant: "danger", onPress: self.handleDeleteWebhook };
      const intl5 = EditWebhook(outer1_2[19]).intl;
      obj10.label = intl5.string(EditWebhook(outer1_2[19]).t.oyYWHE);
      obj9.children = outer1_16(EditWebhook(outer1_2[32]).TableRow, obj10);
      items1[4] = outer1_16(EditWebhook(outer1_2[31]).TableRowGroup, obj9);
      obj.children = items1;
      obj.children = outer1_17(EditWebhook(outer1_2[27]).Stack, obj);
      return outer1_16(EditWebhook(outer1_2[26]).Form, obj);
    }
  };
  items[2] = obj;
  return callback(EditWebhook, items);
})(importAllResult.PureComponent);
let closure_20 = tmp5;
tmp5.contextType = require("ManaContext").ThemeContext;
let obj1 = { padding: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING };
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/integration_settings/native/IntegrationsSettingsEditWebhook.tsx");

export default function ConnectedEditWebhook(arg0) {
  let obj = require(1456) /* useNavigation */;
  obj = {};
  obj = { navigation: obj.useNavigation() };
  const merged = Object.assign(arg0);
  const items = [callback3(closure_20, obj), callback3(require(5448) /* NavScrim */.NavScrim, {})];
  obj.children = items;
  return callback4(closure_18, obj);
};
