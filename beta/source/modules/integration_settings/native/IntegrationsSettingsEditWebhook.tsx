// Module ID: 16672
// Function ID: 16673
// Name: IntegrationsSettingsEditWebhook
// Dependencies: [19, 4467, 4469, 4479, 1372, 1074, 21, 4836, 576, 4540, 1364, 7295, 5936, 7288, 1115, 16665, 10871, 1271, 6610, 5204, 5300, 4832, 8053, 5279, 16673, 1397, 6024, 5999, 5917, 4989, 1177, 5335, 1485, 6461, 2]
// Exports: default

// Module 16672 (IntegrationsSettingsEditWebhook)
import nativeDefault from "native" /* 576 */;
import intl7 from "intl" /* 1115 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import useNavigation from "useNavigation" /* 1485 */;
import GuildChannelStore from "GuildChannelStore" /* 4467 */;
import native from "native" /* 4540 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5204 */;
import AlertDefault from "Alert" /* 5300 */;
import NavScrim from "NavScrim" /* 6461 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import HeaderShared from "HeaderShared" /* 7288 */;
import PressableNavigatorModalIconDefault from "PressableNavigatorModalIcon" /* 7295 */;
import openChannelPickerDefault from "openChannelPicker" /* 10871 */;
import WebhooksActionCreatorsDefault from "WebhooksActionCreators" /* 16665 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let tmp8;
let unpackModuleId;
const IconLabelBlockDefault = tmp8(16673);
let closure_3 = GuildChannelStore.GUILD_SELECTABLE_CHANNELS_KEY;
({ Endpoints: metroImportDefault, NON_USER_BOT_DISCRIMINATOR: metroImportAll, Permissions: c9, WebhookTypes: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let obj = { form: obj2, row: obj3, channelIcon: { height: 16, width: 16, opacity: 0.6 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
const authStore2 = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class EditWebhook extends PureComponent {
  constructor() {
    let channelType;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.state = { avatar: applyArgumentsResult.props.avatar, name: applyArgumentsResult.props.name, channel: applyArgumentsResult.props.channel, hasChanges: false, submitting: false, copied: false };
    applyArgumentsResult.handleSave = function handleSave() {
      let guildId;
      let props;
      let state;
      let webhookId;
      let obj = navigation;
      if (navigation.state.hasChanges) {
        ({ state, props } = obj);
        navigation = props.navigation;
        const obj2 = { name: state.name, channel_id: state.channel.id, avatar: state.avatar };
        ({ guildId, webhookId } = props);
        obj.setState({ submitting: true });
        const obj3 = WebhooksActionCreatorsDefault;
        const updateResult = obj3.update(guildId, webhookId, obj2);
        const nextPromise = updateResult.then(() => {
          navigation.pop();
        });
        nextPromise.catch((error) => {
          const obj = { errors: error.body, submitting: false };
          navigation.setState(obj);
        });
      }
    };
    applyArgumentsResult.handleGuildIconUpload = function handleGuildIconUpload(avatar) {
      avatar = require.props.avatar;
      if (avatar !== avatar) {
        const obj2 = { hasChanges: true, avatar };
        require.setState(obj2);
      } else {
        const obj3 = { hasChanges: false, avatar };
        require.setState(obj3);
      }
    };
    applyArgumentsResult.handleNameChange = function handleNameChange(name) {
      name = require.props.name;
      if (name !== name) {
        const obj2 = { hasChanges: true, name };
        require.setState(obj2);
      } else {
        const obj3 = { hasChanges: false, name };
        require.setState(obj3);
      }
    };
    applyArgumentsResult.handleChannelChange = function handleChannelChange() {
      let channel;
      channel = channel.props.channel;
      let obj = {
        guildId: channel.props.guildId,
        channelType,
        filterFn(channel) {
          return closure_1_4.can(constants.MANAGE_WEBHOOKS, channel.channel);
        },
        selectedChannel: channel,
        onSelect(id) {
          if (id.id !== channel.id) {
            const obj2 = { hasChanges: true, channel: id };
            require.setState(obj2);
          } else {
            const obj = { hasChanges: false, channel: tmp };
            require.setState(obj);
          }
        }
      };
      const tmp = openChannelPickerDefault(obj);
    };
    applyArgumentsResult.handleCopyUrl = function handleCopyUrl() {
      let state;
      const token = require.props.token;
      if (null != token) {
        const obj = HTTPUtils;
        const aPIBaseURL = obj.getAPIBaseURL(false);
        const _HermesInternal = HermesInternal;
        const combined = "" + aPIBaseURL + metroImportDefault.WEBHOOK_INTEGRATION(tmp, token);
        const obj2 = ClipboardUtils;
        obj2.copy(combined, () => state.setState({ copied: true }));
      }
    };
    applyArgumentsResult.handleConfirmDeleteWebhook = function handleConfirmDeleteWebhook() {
      let guildId;
      let webhookId;
      const props = require.props;
      navigation = props.navigation;
      ({ guildId, webhookId } = props);
      let obj = WebhooksActionCreatorsDefault;
      const deleteResult = obj.delete(guildId, webhookId);
      const nextPromise = deleteResult.then(() => {
        navigation.pop();
      });
      nextPromise.catch(() => {
        let intl;
        let intl2;
        const obj = { title: intl.string(closure_1_0(closure_1_2[14]).t.N5riYn), body: intl2.string(closure_1_0(closure_1_2[14]).t["/4TwKf"]) };
        const show = closure_1_1(closure_1_2[19]).show;
        closure_1_1(closure_1_2[19]);
        intl = closure_1_0(closure_1_2[14]).intl;
        intl2 = closure_1_0(closure_1_2[14]).intl;
        show(obj);
      });
    };
    applyArgumentsResult.handleDeleteWebhook = function handleDeleteWebhook() {
      let intl;
      let intl2;
      let intl3;
      let intl4;
      const name = require.props.name;
      const obj = { title: intl.formatToPlainString(intl7.t.QVFjHh, { name }), body: intl2.format(intl7.t["rIWe+5"], { name }), cancelText: intl3.string(intl7.t.gm1Vej), confirmText: intl4.string(intl7.t.p89ACt), onConfirm: require.handleConfirmDeleteWebhook, confirmColor: AlertDefault.Colors.RED };
      const show = actions_AlertActionCreatorsDefault.show;
      actions_AlertActionCreatorsDefault;
      intl = intl7.intl;
      intl2 = intl7.intl;
      intl3 = intl7.intl;
      intl4 = intl7.intl;
      show(obj);
    };
    applyArgumentsResult.handleCancelChanges = function handleCancelChanges() {
      const obj = { avatar: require.props.avatar, name: require.props.name, channel: require.props.channel, hasChanges: false, submitting: false, copied: false };
      require.setState(obj);
    };
    return applyArgumentsResult;
  }
  componentDidMount() {
    let obj = navigation(1364);
    if (obj.isAndroid()) {
      const self = this;
      navigation = this.props.navigation;
      const obj2 = {
        headerLeft() {
            const obj = { navigation, type: "back" };
            return unpackModuleId(PressableNavigatorModalIconDefault, obj);
          },
        headerBackVisible: false
      };
      navigation.setOptions(obj2);
    }
  }
  componentDidUpdate(arg0, submitting) {
    let hasChanges;
    const self = this;
    navigation = this.props.navigation;
    ({ submitting, hasChanges } = this.state);
    if (submitting !== submitting.submitting) {
      if (submitting) {
        if (!submitting.submitting) {
          let obj = {
            headerRight() {
                    return closure_1_11(navigation(dependencyMap[12]).HeaderSubmittingIndicator, {});
                  },
            headerLeft() {
                    return null;
                  },
            headerBackVisible: false
          };
          navigation.setOptions(obj);
        }
      }
      if (hasChanges) {
        const obj2 = {
          headerRight() {
                let intl;
                const obj = { onPress: self.handleSave, label: intl.string(intl7.t["R3BPH+"]) };
                const HeaderTextButton = HeaderShared.HeaderTextButton;
                intl = intl7.intl;
                return unpackModuleId(HeaderTextButton, obj);
              },
          headerLeft() {
                let intl;
                const obj = { onPress: self.handleCancelChanges, label: intl.string(intl7.t["ETE/oC"]) };
                const HeaderTextButton = HeaderShared.HeaderTextButton;
                intl = intl7.intl;
                return unpackModuleId(HeaderTextButton, obj);
              },
          headerBackVisible: false
        };
        navigation.setOptions(obj2);
      } else {
        const obj3 = {
          headerRight: "Array",
          headerLeft() {
                const obj = { navigation, type: "back" };
                return unpackModuleId(PressableNavigatorModalIconDefault, obj);
              },
          headerBackVisible: null
        };
        navigation.setOptions(obj3);
      }
    }
  }
  render() {
    let Icon;
    let Stack;
    let TableRow;
    let TableRow2;
    let TableRow3;
    let aPIBaseURL;
    let avatar;
    let channel;
    let copied;
    let errors;
    let first;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let items;
    let items1;
    let name;
    let obj10;
    let obj12;
    let obj2;
    let obj4;
    let obj7;
    let obj8;
    let stringResult;
    let tmp3Result;
    let tmp3Result3;
    let tmp7;
    const self = this;
    const tmp = closure_14(this.context);
    const props = this.props;
    const webhookId = props.webhookId;
    const token = props.token;
    const state = this.state;
    ({ name, channel, errors } = state);
    const webhookType = props.webhookType;
    ({ avatar, copied } = state);
    const Text = webhookId(4832).Text;
    const intl = webhookId(1115).intl;
    const string = intl.string;
    const t = webhookId(1115).t;
    if (copied) {
      stringResult = string(t.t5VZ88);
    } else {
      stringResult = string(t.OpuAlK);
    }
    let obj = { style: tmp.form, contentContainerStyle: items, children: tmp7(Stack, obj2) };
    items = [{ paddingTop: 16 }, self.props.contentContainerStyle];
    const tmp2Result = closure_11(Text, { variant: "text-sm/medium", color: "text-link", children: stringResult });
    const Form = tmp3(8053).Form;
    obj2 = { spacing: nativeDefault.space.PX_24, style: { paddingHorizontal: tmp.row.padding }, children: items1 };
    Stack = tmp3(5279).Stack;
    let tmp2Result3 = null;
    tmp7 = closure_12;
    if (webhookType !== constants.CHANNEL_FOLLOWER) {
      const obj3 = { iconProps: obj4, label: intl2.string(webhookId(1115).t["7+5GQa"]) };
      obj4 = {
        onUpload: self.handleGuildIconUpload,
        type: "avatar",
        icon: avatar,
        name,
        makeURL(avatar) {
            const obj = AvatarUtils;
            const obj2 = { id: webhookId, avatar, discriminator: metroImportAll };
            return obj.getUserAvatarURL(obj2);
          },
        disabled: false
      };
      const tmp8Result = IconLabelBlockDefault;
      intl2 = tmp3(1115).intl;
      tmp2Result3 = tmp2(tmp8Result, obj3);
    }
    items1 = [tmp2Result3, , , , ];
    const obj5 = { label: intl3.string(webhookId(1115).t.ukdxuo), value: name, onChange: self.handleNameChange, errorMessage: first };
    const TextInput = tmp3(6024).TextInput;
    intl3 = tmp3(1115).intl;
    first = undefined;
    if (undefined !== errors) {
      if (undefined !== errors.name) {
        first = errors.name[0];
      }
    }
    items1[1] = closure_11(TextInput, obj5);
    const obj6 = { title: intl4.string(webhookId(1115).t.GK18KJ), hasIcons: true, children: closure_11(TableRow, obj7) };
    const TableRowGroup = tmp3(5999).TableRowGroup;
    intl4 = tmp3(1115).intl;
    obj7 = { label: tmp3Result.computeChannelName(channel, UserStore, RelationshipStore), arrow: true, onPress: self.handleChannelChange, icon: closure_11(Icon, obj8) };
    TableRow = tmp3(5917).TableRow;
    tmp3Result = webhookId(4989);
    obj8 = { size: webhookId(1177).Icon.Sizes.CUSTOM, source: tmp3Result3.getChannelIcon(channel), style: tmp.channelIcon };
    Icon = tmp3(1177).Icon;
    tmp3Result3 = webhookId(5335);
    items1[2] = closure_11(TableRowGroup, obj6);
    let tmp2Result4 = null;
    if (null != token) {
      const obj9 = { title: intl5.string(webhookId(1115).t.SFdvF1), hasIcons: false, children: closure_11(TableRow2, obj10) };
      const TableRowGroup2 = tmp3(5999).TableRowGroup;
      intl5 = tmp3(1115).intl;
      obj10 = { label: "" + aPIBaseURL + closure_7.WEBHOOK_INTEGRATION(webhookId, token), onPress: self.handleCopyUrl, trailing: tmp2Result };
      TableRow2 = tmp3(5917).TableRow;
      const tmp3Result4 = webhookId(1271);
      aPIBaseURL = tmp3Result4.getAPIBaseURL(false);
      const _HermesInternal = HermesInternal;
      tmp2Result4 = tmp2(TableRowGroup2, obj9);
    }
    items1[3] = tmp2Result4;
    const obj11 = { hasIcons: false, children: closure_11(TableRow3, obj12) };
    const TableRowGroup3 = tmp3(5999).TableRowGroup;
    obj12 = { variant: "danger", onPress: self.handleDeleteWebhook, label: intl6.string(webhookId(1115).t.oyYWHE) };
    TableRow3 = tmp3(5917).TableRow;
    intl6 = tmp3(1115).intl;
    items1[4] = closure_11(TableRowGroup3, obj11);
    return closure_11(Form, obj);
  }
}
const prototype = EditWebhook.prototype;
EditWebhook.contextType = native.ThemeContext;
const result = size.fileFinishedImporting("modules/integration_settings/native/IntegrationsSettingsEditWebhook.tsx");

export default function ConnectedEditWebhook(arg0) {
  let items;
  const obj2 = { children: items };
  const obj = useNavigation;
  const obj3 = { navigation: obj.useNavigation() };
  const merged = Object.assign(arg0);
  items = [unpackModuleId(EditWebhook, obj3), unpackModuleId(NavScrim.NavScrim, {})];
  return closure_12(map1, obj2);
};
