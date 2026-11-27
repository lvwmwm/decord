// Module ID: 20067
// Function ID: 20068
// Name: GuildSettingsModalIntegrationCommandPermissions
// Dependencies: [5, 32, 19, 20068, 1071, 21, 1501, 504, 20069, 20071, 20070, 5793, 7191, 20072, 7751, 1112, 6115, 575, 20073, 12151, 5634, 7941, 20074, 20088, 2]
// Exports: default

// Module 20067 (GuildSettingsModalIntegrationCommandPermissions)
import Constants from "Constants" /* 1071 */;
import NavigatorHeader from "NavigatorHeader" /* 7191 */;
import IntegrationPermissionActionCreatorsAll from "IntegrationPermissionActionCreators" /* 20071 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import IntegrationPermissionStore from "IntegrationPermissionStore" /* 20068 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c4, c5, navigation;

let c10;
let c9;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const GuildSettingsSections = Constants.GuildSettingsSections;
({ jsx: c9, jsxs: c10 } = Fragment);
let result = size.fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrationCommandPermissions.tsx");

export default function GuildSettingsModalIntegrationCommandPermissions(guildId) {
  let _undefined;
  let application;
  let c6;
  let closure_5;
  let editedTargetPermissions;
  let first;
  let hasCommandsScope;
  let intl;
  let intl2;
  let items6;
  let items7;
  let obj4;
  let originalApplicationPermissions;
  let selectedPermissionCount;
  guildId = guildId.guildId;
  let hasChanges;
  first = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let callback;
  let tmp = guildId;
  const tmp2 = hasChanges;
  ({ application, hasCommandsScope } = guildId);
  let obj = guildId(hasChanges[6]);
  navigation = obj.useNavigation();
  const id = application.id;
  let obj2 = guildId(hasChanges[7]);
  const items = [callback];
  const stateFromStores = obj2.useStateFromStores(items, () => callback.isUnavailable());
  let obj3 = guildId(hasChanges[7]);
  const items1 = [callback];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    const tmp = null != callback.getApplicationPermissions() && null != callback.getCommands();
    return tmp;
  });
  const tmp7 = navigation(hasChanges[8])(guildId, id);
  hasChanges = tmp7.hasChanges;
  ({ originalApplicationPermissions, editedTargetPermissions, selectedPermissionCount } = tmp7);
  [first, _slicedToArray] = react.useState(false);
  [obj4, c6] = _slicedToArray(react.useState(null), 2);
  const items2 = [id];
  const tmp10 = _slicedToArray(react.useState(null), 2);
  const effect = react.useEffect(() => {
    let obj = IntegrationPermissionActionCreatorsAll;
    const integrationPermissions = obj.initIntegrationPermissions(id);
    return () => {
      const obj = id(hasChanges[9]);
      const result = obj.clearIntegrationPermissions();
      const obj2 = navigation(hasChanges[10]);
      const result1 = obj2.stopEditingCommandPermissions(closure_1_2);
    };
  }, items2);
  const items3 = [id, guildId];
  const effect1 = react.useEffect(() => {
    const obj = IntegrationPermissionActionCreatorsAll;
    const applicationCommandPermissions = obj.getApplicationCommandPermissions(id, guildId, id);
    const obj2 = IntegrationPermissionActionCreatorsAll;
    const applicationCommands = obj2.getApplicationCommands(guildId, id);
  }, items3);
  const items4 = [id, guildId];
  callback = react.useCallback(first(function*(arg0, value) {
    let c3;
    let closure_1;
    let closure_2;
    let editedApplication;
    let obj3;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let closure_0;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = tmp4;
            editedApplication = editedApplication.getEditedApplication();
            if (null != editedApplication) {
              _undefined(null);
              v3(true);
              hasChanges = 1;
              const _Object = Object;
              c4 = 2;
              c5 = 1;
              const obj5 = { value: obj3.saveApplicationPermissions(id, guildId, Object.values(editedApplication)), done: false };
              obj3 = tmp31(hasChanges[9]);
              return obj5;
            }
          }
        } else {
          if (1 === c4) {
            hasChanges = 0;
            closure_0 = tmp31;
            const self = this;
            const self2 = this;
            const tmp17 = new tmp(hasChanges[11])(closure_0);
            closure_129_6(tmp17);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            hasChanges = 0;
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            const obj = tmp31(hasChanges[9]);
            obj.resetPermissions();
            hasChanges = 0;
          }
          closure_129_5(false);
        }
        c5 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp31) {
        if (0 === hasChanges) {
          c5 = 3;
          throw tmp31;
        } else {
          c4 = 1;
        }
      }
    }
  }), items4);
  const items5 = [hasChanges, navigation, callback, first];
  const layoutEffect = react.useLayoutEffect(() => {
    let fn;
    let onPress;
    let tmp = navigation;
    const setOptions = navigation.setOptions;
    if (first) {
      fn = () => null;
    } else {
      let tmp3 = require;
      let obj = NavigatorHeader;
      fn = obj.getHeaderConditionalBackButton(() => navigation(hasChanges[13])(closure_1_3));
    }
    const obj2 = {
      headerLeft: fn,
      gestureEnabled: !hasChanges && !first,
      headerRight() {
        let intl;
        let tmp3;
        const tmp = first;
        if (tmp) {
          tmp3 = closure_2_9(guildId(hasChanges[12]).HeaderSubmittingIndicator, {});
        } else {
          tmp3 = null;
          if (closure_1_3) {
            const obj = { text: intl.string(guildId(hasChanges[15]).t["R3BPH+"]), onPress };
            const HeaderActionButton = guildId(hasChanges[14]).HeaderActionButton;
            intl = guildId(hasChanges[15]).intl;
            tmp3 = closure_2_9(HeaderActionButton, obj);
          }
        }
        return tmp3;
      }
    };
    setOptions(obj2);
  }, items5);
  let tmp16Result = null;
  if (!stateFromStores) {
    if (stateFromStores1) {
      let obj5 = { spacing: tmp6(tmp2[17]).space.PX_16, children: items7 };
      const Stack = tmp(tmp2[16]).Stack;
      let obj6 = { spacing: tmp6(tmp2[17]).space.PX_8, children: items6 };
      const Stack2 = tmp(tmp2[16]).Stack;
      let tmp17 = closure_9;
      const obj7 = { icon: tmp(tmp2[19]).SlashBoxIcon, title: intl.string(tmp(tmp2[15]).t.RGoJNN) };
      const tmp6Result = navigation(tmp2[18]);
      intl = tmp(tmp2[15]).intl;
      items6 = [closure_9(tmp6Result, obj7), ];
      const obj8 = { variant: "body-sm/normal", color: "text-muted", children: intl2.string(tmp(tmp2[15]).t.sCkD3Z) };
      const Text = tmp(tmp2[20]).Text;
      intl2 = tmp(tmp2[15]).intl;
      items6[1] = closure_9(Text, obj8);
      items7 = [closure_10(Stack2, obj6), , , ];
      let tmp17Result = null;
      const tmp16 = closure_10;
      if (null != obj4) {
        tmp17Result = null;
        if (!obj4.hasFieldErrors()) {
          const obj9 = { type: "critical", message: obj4.getAnyErrorMessage(), role: "alert" };
          const InlineNotice = tmp(tmp2[21]).InlineNotice;
          tmp17Result = tmp17(InlineNotice, obj9);
        }
      }
      items7[1] = tmp17Result;
      const obj10 = { applicationId: id, guildId, editedTargetPermissions, originalApplicationPermissions, selectedPermissionCount };
      items7[2] = tmp17(navigation(tmp2[22]), obj10);
      const obj11 = {
        onPressCommand(commandId) {
              const obj = { applicationId: id, commandId: commandId.id };
              return navigation.push(GuildSettingsSections.INTEGRATION_COMMAND_PERMISSIONS, obj);
            }
      };
      items7[3] = tmp17(navigation(tmp2[23]), obj11);
      tmp16Result = tmp16(Stack, obj5);
    } else {
      tmp16Result = null;
    }
  }
  return tmp16Result;
};
