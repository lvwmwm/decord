// Module ID: 11057
// Function ID: 11058
// Name: GuildRoleConnectionsConnectAccountsActionSheet
// Dependencies: [5, 32, 19, 17, 6528, 2112, 1386, 502, 2045, 5593, 2108, 4469, 5720, 1074, 21, 4836, 576, 4767, 5595, 1397, 4685, 1177, 5335, 4989, 4832, 1115, 5719, 11058, 6586, 8741, 11059, 11060, 12, 4531, 11061, 38, 4528, 10823, 5298, 8053, 5718, 504, 5721, 5832, 1241, 5016, 4800, 6800, 11064, 8528, 573, 5039, 8513, 1981, 8505, 11068, 6571, 11069, 6624, 5281, 2]

// Module 11057 (GuildRoleConnectionsConnectAccountsActionSheet)
import _modDef12 from "module_12" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import intl14 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import shared from "shared" /* 4685 */;
import useThemeDefault from "useTheme" /* 4767 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import useChannelNameDefault from "useChannelName" /* 4989 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5016 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import useMountEffectDefault from "useMountEffect" /* 5298 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5335 */;
import PlatformsDefault from "Platforms" /* 5595 */;
import ConnectedAccountsActionCreatorsDefault from "ConnectedAccountsActionCreators" /* 5718 */;
import ConnectionsUtils from "ConnectionsUtils" /* 5719 */;
import getConnectionsRolesDefault from "getConnectionsRoles" /* 5721 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5832 */;
import openUserSettings from "openUserSettings" /* 6800 */;
import AssetRegistryDefault from "AssetRegistry" /* 10823 */;
import ConnectionsRoleActionCreators from "ConnectionsRoleActionCreators" /* 11068 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 6528 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import UserRecord from "UserRecord" /* 1386 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5593 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import Constants_mod from "Constants" /* 5720 */;
import Constants_mod2 from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, c0, importDefault;

let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_30;
let closure_31;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let rect;
let size;
let size1;
let size2;
function PlatformIcon(platformType) {
  platformType = platformType.platformType;
  const tmp = closure_32();
  const tmp3 = useThemeDefault();
  const obj = PlatformsDefault;
  const value = obj.get(platformType);
  const makeSource = AvatarUtils.makeSource;
  AvatarUtils;
  const icon = value.icon;
  const obj2 = shared;
  const source = makeSource(obj2.isThemeLight(tmp3) ? icon.lightPNG : icon.darkPNG);
  const obj3 = { source, style: tmp.platformIcon, disableColor: true };
  return closure_29(native.Icon, obj3);
}
function ChannelName(channel) {
  let items;
  let items1;
  channel = channel.channel;
  const style = channel.style;
  const tmp = closure_32();
  const obj = utils_ChannelUtils;
  const channelIcon = obj.getChannelIcon(channel);
  const obj2 = { style: items, children: items1 };
  items = [tmp.channelName, style];
  let tmp8 = null;
  const tmp5 = useChannelNameDefault(channel);
  const tmp6 = __initData2;
  const tmp7 = metroImportAll;
  if (null != channelIcon) {
    const obj3 = { source: channelIcon, style: tmp.channelNameIcon };
    tmp8 = closure_29(tmp2(1177).Icon, obj3);
  }
  items1 = [tmp8, ];
  const obj4 = { variant: "heading-lg/semibold", color: "text-default", style: tmp.channelNameText, lineClamp: 1, children: tmp5 };
  items1[1] = closure_29(Text_Text.Text, obj4);
  return tmp6(tmp7, obj2);
}
function ConnectionsCheck(result) {
  let connectionMetadataField;
  let connectionType;
  let description;
  let operator;
  let value;
  ({ connectionType, connectionMetadataField, operator, value, description } = result);
  result = result.result;
  if (connectionType === closure_20) {
    return null;
  } else {
    let formatResult;
    if (null != description) {
      if (constants2.LESS_THAN === operator) {
        const intl = intl14.intl;
        const format = intl.format;
        const _Math = Math;
        const _Number = Number;
        const obj2 = { description, count: Math.max(0, Number(value) - 1) };
        const v2p7dA3 = intl14.t["2p7dA3"];
        formatResult = format(v2p7dA3, obj2);
      } else {
        formatResult = description;
        if (tmp18.GREATER_THAN === operator) {
          const intl2 = intl14.intl;
          const format2 = intl2.format;
          const _Math2 = Math;
          const _Number2 = Number;
          const obj3 = { description, count: Math.max(0, Number(value) + 1) };
          const v2p7dA31 = intl14.t["2p7dA3"];
          formatResult = format2(v2p7dA31, obj3);
        }
      }
    } else {
      let dcSDhW;
      if (constants2.EQUAL === operator) {
        let tmp13 = connectionType === constants3.PAYPAL;
        const v0BlpbA = intl14.t["0BlpbA"];
        const tmp9 = require;
        if (tmp13) {
          tmp13 = connectionMetadataField === constants.PAYPAL_VERIFIED;
        }
        dcSDhW = v0BlpbA;
        if (tmp13) {
          dcSDhW = tmp9(1115).t.dcSDhW;
        }
      } else if (constants2.NOT_EQUAL === operator) {
        dcSDhW = intl14.t.otcpTN;
      } else if (constants2.LESS_THAN === operator) {
        dcSDhW = intl14.t.Ef35xs;
      } else if (constants2.GREATER_THAN === operator) {
        dcSDhW = intl14.t["8W9OXU"];
      } else {
        return null;
      }
      const obj4 = { connectionType, connectionMetadataField, operator, operatorText: dcSDhW, value };
      const obj = ConnectionsUtils;
      formatResult = obj.getConnectionsCheckText(obj4);
    }
    let tmp24Result = null;
    if (null != formatResult) {
      let str = "text-feedback-critical";
      const Text = Text_Text.Text;
      const tmp24 = closure_29;
      if (result) {
        str = "text-default";
      }
      const obj5 = { variant: "text-xs/normal", color: str, style: tmp.connectionsCheck, children: formatResult };
      tmp24Result = tmp24(Text, obj5);
    }
    return tmp24Result;
  }
}
function IdentityConnectionsCheckGroup(eligibilityState) {
  let c5;
  let intl;
  let intl2;
  let items3;
  let items4;
  let items5;
  let tmp10;
  let tmp13Result;
  let tmp15;
  eligibilityState = eligibilityState.eligibilityState;
  const onAttempted = eligibilityState.onAttempted;
  const onIdentityAuthorize = eligibilityState.onIdentityAuthorize;
  let application;
  let c9;
  let tmp = closure_32();
  let tmp2 = eligibilityState;
  let tmp3 = onIdentityAuthorize;
  let obj = eligibilityState(onIdentityAuthorize[27]);
  const getOrFetchApplicationBatched = obj.useGetOrFetchApplicationBatched(eligibilityState.application_id);
  const tmp6 = onAttempted(onIdentityAuthorize[28])(getOrFetchApplicationBatched);
  const canStartAuthorization = tmp6.canStartAuthorization;
  const startAuthorization = tmp6.startAuthorization;
  react = canStartAuthorization;
  const identity_connected_account_type = eligibilityState.identity_connected_account_type;
  const identity_auth_required_scopes = eligibilityState.identity_auth_required_scopes;
  let flag = canStartAuthorization;
  if (!flag) {
    let tmp7 = null;
    flag = canStartAuthorization;
    if (null != identity_connected_account_type) {
      flag = canStartAuthorization;
      if (null != identity_auth_required_scopes) {
        const tmp5Result = onAttempted(tmp3[18]);
        const value = tmp5Result.get(identity_connected_account_type);
        flag = canStartAuthorization;
        const tmp9 = null != value && value.enabled;
        if (tmp9) {
          react = true;
          flag = true;
        }
      }
    }
  }
  application = eligibilityState.application;
  const items = [application];
  const memo = react.useMemo(function() {
    let bot;
    if (application != null) {
      bot = tmp.bot;
    }
    let tmp3 = null;
    if (null != bot) {
      const self = this;
      const self2 = this;
      tmp3 = new UserRecord(tmp.bot);
    }
    return tmp3;
  }, items);
  const result = eligibilityState.result;
  c9 = result;
  const obj3 = react;
  if (null != memo) {
    let obj2 = { style: tmp.botTag, verified: memo.isVerifiedBot() };
    const tmp5Result2 = onAttempted(tmp3[29]);
    tmp10 = closure_29(tmp5Result2, obj2);
  }
  let tmp13 = closure_29;
  if (result) {
    const obj4 = { source: onAttempted(tmp3[30]), style: tmp.connectionsChecksGroupCheckmark };
    const Icon2 = tmp2(tmp3[21]).Icon;
    tmp13Result = tmp13(Icon2, obj4);
    tmp15 = tmp13;
  } else if (flag) {
    const obj5 = { source: onAttempted(tmp3[31]), style: tmp.connectionsChecksGroupCaret };
    const Icon = tmp2(tmp3[21]).Icon;
    tmp13Result = tmp13(Icon, obj5);
    tmp15 = tmp13;
  } else {
    const obj6 = { variant: "text-md/medium", color: "text-muted", children: intl.string(tmp2(tmp3[25]).t.cEts68) };
    const Text = tmp2(tmp3[24]).Text;
    intl = tmp2(tmp3[25]).intl;
    tmp13Result = tmp13(Text, obj6);
    tmp15 = tmp13;
  }
  const items1 = [result, flag, canStartAuthorization, startAuthorization, onAttempted, onIdentityAuthorize, , , , ];
  ({ connection_type: arr2[6], application_id: arr2[7] } = eligibilityState);
  items1[8] = identity_connected_account_type;
  items1[9] = identity_auth_required_scopes;
  const callback = obj3.useCallback(() => {
    const tmp = c9;
    if (!tmp) {
      const tmp2 = c5;
      if (tmp2) {
        let someResult = null != identity_connected_account_type;
        if (someResult) {
          const accounts = ConnectedAccountsStore.getAccounts();
          someResult = accounts.some((type) => type.type === identity_connected_account_type);
        }
        let connection_type = null;
        const tmp7 = onAttempted;
        if (!someResult) {
          connection_type = eligibilityState.connection_type;
        }
        let application_id = eligibilityState.application_id;
        if (application_id == null) {
          application_id = null;
        }
        tmp7(connection_type, application_id);
        const tmp13 = canStartAuthorization;
        if (tmp13) {
          const obj = { analyticsLocations: ["Verified Roles Connect Accounts Modal"] };
          startAuthorization(obj);
        } else {
          const tmp14 = null != tmp3 && null != identity_auth_required_scopes && null != tmp10.application_id;
          if (tmp14) {
            const obj2 = { applicationId: eligibilityState.application_id, scopes: identity_auth_required_scopes, connectedAccountProvider: identity_connected_account_type, wasAlreadyConnected: someResult };
            onIdentityAuthorize(obj2);
          }
        }
      }
    }
  }, items1);
  const officialApplicationIds = tmp2(tmp3[26]).officialApplicationIds;
  let str;
  const includes = officialApplicationIds.includes;
  if (application != null) {
    str = application.id;
  }
  if (str == null) {
    str = "";
  }
  let tmp18Result = null;
  if (!includes(str)) {
    const items2 = [tmp.connectionsChecksGroup, , ];
    let prop = null;
    const tmp19 = identity_auth_required_scopes;
    if (result) {
      prop = tmp.connectionsChecksGroupPassed;
    }
    items2[1] = prop;
    let prop1 = null;
    if (!flag) {
      prop1 = tmp.connectionsChecksGroupPlatformDisabled;
    }
    const obj7 = { accessibilityRole: "button", style: items2, disabled: result || !flag, onPress: callback, children: items3 };
    items2[2] = prop1;
    let tmp15Result = null;
    if (null != memo) {
      const obj8 = { style: tmp.appIcon, user: memo, size: tmp2(tmp3[21]).AvatarSizes.XSMALL, guildId: "a" };
      const Avatar = tmp2(tmp3[21]).Avatar;
      tmp15Result = tmp15(Avatar, obj8);
    }
    items3 = [tmp15Result, , ];
    let name;
    const obj10 = { style: tmp.connectionsChecksGroupTextNameContainer, children: items4 };
    const obj9 = { style: tmp.connectionsChecksGroupTextContainer, children: items5 };
    const Text2 = tmp2(tmp3[24]).Text;
    if (application != null) {
      name = application.name;
    }
    const obj11 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: name };
    items4 = [tmp15(Text2, obj11), tmp10];
    items5 = [tmp18(application, obj10), ];
    let tmp15Result2 = null;
    if (!flag) {
      tmp15Result2 = null;
      if (!result) {
        const obj12 = { variant: "text-xs/normal", color: "text-muted", style: tmp.connectionsCheck, children: intl2.string(tmp2(tmp3[25]).t["+z5dYe"]) };
        const Text3 = tmp2(tmp3[24]).Text;
        intl2 = tmp2(tmp3[25]).intl;
        tmp15Result2 = tmp15(Text3, obj12);
      }
    }
    items5[1] = tmp15Result2;
    items3[1] = closure_30(application, obj9);
    items3[2] = tmp13Result;
    tmp18Result = tmp18(tmp19, obj7);
  }
  return tmp18Result;
}
function ConnectionsChecks(eligibilityStatesGroups) {
  let _undefined;
  let c6;
  let c7;
  let c8;
  let c9;
  let closure_5;
  let guildId;
  let initialAttemptedApplicationId;
  let initialAttemptedPlatformType;
  let onIdentityAuthorize;
  let onPlatformConnected;
  let sorted;
  eligibilityStatesGroups = eligibilityStatesGroups.eligibilityStatesGroups;
  ({ onPlatformAttempt: importDefault, onPlatformConnect: dependencyMap, onPlatformConnected } = eligibilityStatesGroups);
  ({ onPlatformIdentityAuthorize: _slicedToArray, initialAttemptedPlatformType, initialAttemptedApplicationId } = eligibilityStatesGroups);
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  let first;
  let closure_11;
  let first1;
  let closure_13;
  let memo;
  let memo1;
  let roleColor;
  react = closure_32();
  let obj = react;
  const tmp = _slicedToArray;
  let tmp2 = _slicedToArray(react.useState({}), 2);
  [c6, c7] = tmp2;
  let tmp3 = _slicedToArray(react.useState(0), 2);
  [c8, c9] = tmp3;
  const useState = react.useState;
  if (initialAttemptedPlatformType == null) {
    initialAttemptedPlatformType = null;
  }
  const tmpResult = tmp(useState(initialAttemptedPlatformType), 2);
  first = tmpResult[0];
  closure_11 = tmpResult[1];
  const useState2 = obj.useState;
  if (initialAttemptedApplicationId == null) {
    initialAttemptedApplicationId = null;
  }
  const tmpResult2 = tmp(useState2(initialAttemptedApplicationId), 2);
  first1 = tmpResult2[0];
  closure_13 = tmpResult2[1];
  let items = [eligibilityStatesGroups];
  memo = obj.useMemo(() => {
    const obj = _modDef12;
    return obj.flatten(eligibilityStatesGroups);
  }, items);
  let items1 = [memo];
  memo1 = obj.useMemo(() => {
    const obj = _modDef12;
    return obj.groupBy(memo, (connection_type) => {
      let str = "";
      connection_type = connection_type.connection_type;
      if (null != connection_type.application_id) {
        const _HermesInternal = HermesInternal;
        str = ":" + connection_type.application_id;
      }
      return "" + connection_type + str;
    });
  }, items1);
  let items2 = [memo];
  const effect = obj.useEffect(() => _undefined(Date.now()), items2);
  let items3 = [memo1, first, first1, onPlatformConnected];
  const effect1 = obj.useEffect(() => {
    if (null != first) {
      let str2 = "";
      const tmp10 = memo1;
      if (null != first1) {
        const _HermesInternal = HermesInternal;
        str2 = ":" + tmp11;
      }
      const _HermesInternal2 = HermesInternal;
      const arr = tmp10["" + first + str2];
      if (null != arr) {
        if (arr.every((item) => item.result)) {
          first = arr[0];
          let prop;
          if (first != null) {
            prop = first.identity_connected_account_type;
          }
          if (prop == null) {
            prop = tmp;
          }
          const found = arr.find((application) => null != application.application);
          let application;
          if (found != null) {
            application = found.application;
          }
          if (application == null) {
            application = null;
          }
          onPlatformConnected(prop, application);
        }
      }
    }
  }, items3);
  let obj2 = eligibilityStatesGroups(4531);
  roleColor = obj2.useToken(nativeDefault.unsafe_rawColors.GREEN_330);
  let obj3 = {
    children: sorted.map(function(item) {
      let Icon3;
      let Text3;
      let intl;
      let intl2;
      let intl4;
      let items1;
      let items2;
      let items3;
      let obj11;
      let obj17;
      let tmp20Result;
      let tmp22;
      let tmp22Result;
      if (item.startsWith("" + closure_1_20 + ":")) {
        if (null != memo1[item][0]) {
          let obj2 = {
            eligibilityState: memo1[item][0],
            onAttempted(onIdentityAuthorize, arg1) {
                  closure_1_11(onIdentityAuthorize);
                  closure_1_13(arg1);
                  if (null != onIdentityAuthorize) {
                    value();
                  }
                },
            onIdentityAuthorize
          };
          return closure_1_29(IdentityConnectionsCheckGroup, obj2, item);
        }
      }
      const found = arr.find((operator) => null == operator.operator);
      const found1 = arr.filter((operator) => null != operator.operator);
      const tmp3 = (null == found || found.result) && found1.every((item) => item.result);
      const found2 = arr.find((application) => null != application.application);
      let tmp6 = dependencyMap;
      let obj = PlatformsDefault;
      const value = obj.get(item);
      importDefault = value;
      let application;
      if (found2 != null) {
        application = found2.application;
      }
      let bot;
      if (application != null) {
        bot = application.bot;
      }
      let tmp11 = null;
      if (null != bot) {
        const self = this;
        const self2 = this;
        tmp11 = new closure_11(application.bot);
      }
      const officialApplicationIds = eligibilityStatesGroups(tmp6[26]).officialApplicationIds;
      let str;
      const includes = officialApplicationIds.includes;
      if (application != null) {
        str = application.id;
      }
      if (str == null) {
        str = "";
      }
      let type;
      const hasItem = includes(str);
      if (value != null) {
        type = value.type;
      }
      if (type == null) {
        type = closure_1_19;
      }
      if (tmp3) {
        const obj3 = { source: require("AssetRegistry"), style: closure_5.connectionsChecksGroupCheckmark };
        const Icon2 = tmp13(tmp6[21]).Icon;
        tmp20Result = tmp20(Icon2, obj3);
        tmp22 = tmp20;
      } else if (!tmp3 && null != tmp17 && tmp17 <= c8) {
        const obj4 = { variant: "text-sm/semibold", color: "text-brand", children: intl2.string(eligibilityStatesGroups(tmp6[25]).t["5911Lb"]) };
        const Text2 = tmp13(tmp6[24]).Text;
        intl2 = tmp13(tmp6[25]).intl;
        tmp20Result = tmp20(Text2, obj4);
        tmp22 = tmp20;
      } else if (null == value || value.enabled) {
        const obj5 = { source: require("AssetRegistry"), style: closure_5.connectionsChecksGroupCaret };
        const Icon = tmp13(tmp6[21]).Icon;
        tmp20Result = tmp20(Icon, obj5);
        tmp22 = tmp20;
      } else {
        const obj6 = { variant: "text-md/medium", color: "text-muted", children: intl.string(eligibilityStatesGroups(tmp6[25]).t.cEts68) };
        const Text = tmp13(tmp6[24]).Text;
        intl = tmp13(tmp6[25]).intl;
        tmp20Result = tmp20(Text, obj6);
        tmp22 = tmp20;
      }
      let type1;
      if (value != null) {
        type1 = value.type;
      }
      let tmp26;
      if (type1 === constants.STEAM) {
        const intl3 = tmp13(tmp6[25]).intl;
        const stringResult = intl3.string(tmp13(tmp6[25]).t.NcZh6K);
        eligibilityStatesGroups = stringResult;
        tmp26 = stringResult;
      }
      if (hasItem) {
        const obj7 = { style: closure_5.botTag, guildId, roleColor, size: 16 };
        tmp22Result = tmp22(tmp5(tmp6[34]), obj7);
      } else if (null != tmp11) {
        const obj8 = { style: closure_5.botTag, verified: tmp11.isVerifiedBot() };
        const tmp5Result = require("BotTag");
        tmp22Result = tmp22(tmp5Result, obj8);
      }
      const items = [closure_5.connectionsChecksGroup, , ];
      let prop = null;
      if (tmp3) {
        prop = tmp36.connectionsChecksGroupPassed;
      }
      items[1] = prop;
      let prop1 = null;
      if (!(null == value || value.enabled)) {
        prop1 = tmp36.connectionsChecksGroupPlatformDisabled;
      }
      const obj9 = {
        accessibilityRole: "button",
        style: items,
        disabled: tmp3 || !(null == value || value.enabled),
        onPress() {
          let type;
          if (value != null) {
            type = value.type;
          }
          if (type == null) {
            type = closure_19;
          }
          let tmp2 = application;
          if (application == null) {
            tmp2 = null;
          }
          const obj = {};
          const merged = Object.assign(c6);
          obj[type] = Date.now();
          c7(obj);
          closure_11(type);
          let id;
          const tmp6 = closure_13;
          if (tmp2 != null) {
            id = tmp2.id;
          }
          if (id == null) {
            id = null;
          }
          tmp6(id);
          importDefault();
          dependencyMap(type, tmp2);
        },
        children: items1
      };
      items[2] = prop1;
      let tmp22Result5 = null;
      if (!tmp3) {
        tmp22Result5 = null;
        if (!tmp3 && null != tmp17 && tmp17 <= c8) {
          const obj10 = { style: closure_5.connectionsChecksGroupRequirementsNotMet, children: tmp22(Text3, obj11) };
          obj11 = { variant: "text-xs/normal", color: "text-overlay-light", children: intl4.string(eligibilityStatesGroups(tmp6[25]).t.UB3hKo) };
          Text3 = tmp13(tmp6[24]).Text;
          intl4 = tmp13(tmp6[25]).intl;
          tmp22Result5 = tmp22(c8, obj10);
        }
      }
      items1 = [tmp22Result5, , , , ];
      let tmp22Result6 = null;
      if (null != value) {
        const obj12 = { platformType: value.type };
        tmp22Result6 = tmp22(PlatformIcon, obj12);
      }
      items1[1] = tmp22Result6;
      let tmp22Result7 = null;
      if (null != tmp11) {
        const obj13 = { style: closure_5.appIcon, user: tmp11, size: eligibilityStatesGroups(tmp6[21]).AvatarSizes.XSMALL, guildId: "a" };
        const Avatar = tmp13(tmp6[21]).Avatar;
        tmp22Result7 = tmp22(Avatar, obj13);
      }
      items1[2] = tmp22Result7;
      let name;
      const obj14 = { style: closure_5.connectionsChecksGroupTextContainer, children: items3 };
      const obj15 = { style: closure_5.connectionsChecksGroupTextNameContainer, children: items2 };
      const Text4 = tmp13(tmp6[24]).Text;
      if (value != null) {
        name = value.name;
      }
      if (name == null) {
        let name1;
        if (application != null) {
          name1 = application.name;
        }
        name = name1;
      }
      items2 = [tmp22(Text4, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: name }), tmp22Result, ];
      let tmp22Result8 = null;
      if (null != tmp26) {
        const obj16 = {
          onPress() {
              _modDef38(null != stringResult, "tooltip is null");
              const obj = ToastActionCreatorsDefault;
              const obj2 = { key: "CONNECTIONS_STEAM_TOOLTIP", icon: AssetRegistryDefault, content: stringResult };
              obj.open(obj2);
            },
          children: tmp22(Icon3, obj17)
        };
        obj17 = { source: require("AssetRegistry"), size: eligibilityStatesGroups(tmp6[21]).Icon.Sizes.SMALL_20, style: closure_5.connectionsChecksGroupTextNameInfoIcon };
        Icon3 = tmp13(tmp6[21]).Icon;
        tmp22Result8 = tmp22(tmp35, obj16);
      }
      items2[2] = tmp22Result8;
      items3 = [
        closure_1_30(c8, obj15),
        found1.map((item) => {
          let connection_metadata_field;
          let connection_type;
          let description;
          let operator;
          let result;
          ({ connection_metadata_field, operator, value } = item);
          ({ connection_type, result, description } = item);
          value(application[35])(null != connectionMetadataField, "connectionMetadataField is null");
          value(application[35])(null != operator, "operator is null");
          value(application[35])(null != value, "value is null");
          return closure_1_29(closure_1_35, { connectionType, connectionMetadataField, operator, value, result, description }, connectionMetadataField);
        })
      ];
      items1[3] = closure_1_30(c8, obj14);
      items1[4] = tmp20Result;
      return closure_1_30(c7, obj9, item);
    })
  };
  const keys = Object.keys(memo1);
  sorted = keys.sort((arg0, arg1) => {
    let num;
    const obj = memo1[arg0];
    const everyResult = obj.every((item) => item.result);
    const obj2 = memo1[arg1];
    const everyResult1 = obj2.every((item) => item.result);
    if (true !== everyResult) {
      let num2 = 0;
      if (false === everyResult) {
        num2 = 0;
        if (true === everyResult1) {
          num2 = -1;
        }
      }
      num = num2;
    } else {
      num = 1;
    }
    return num;
  });
  return closure_29(closure_31, obj3);
}
function ConnectedUserAccountOptions(account) {
  let _undefined;
  let c3;
  let closure_4;
  let closure_6;
  let closure_8;
  let first;
  let first1;
  let first2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj4;
  let tmp3;
  account = account.account;
  ({ setShowPreviewInvisibleIcon: importDefault, setShowPreviewMetadata: dependencyMap } = account);
  c3 = undefined;
  _slicedToArray = undefined;
  first1 = undefined;
  closure_6 = undefined;
  first2 = undefined;
  closure_8 = undefined;
  const tmp = closure_32();
  [tmp3, c3] = _slicedToArray(first1.useState(account.friendSync), 2);
  const tmp2 = _slicedToArray(first1.useState(account.friendSync), 2);
  [first, _slicedToArray] = first1.useState(account.showActivity);
  [first1, closure_6] = first1.useState(1 === account.metadataVisibility);
  [first2, closure_8] = first1.useState(1 === account.visibility);
  useMountEffectDefault(() => {
    importDefault(!first2);
    dependencyMap(first1);
  });
  let obj = PlatformsDefault;
  const value = obj.get(account.type);
  let tmp13;
  if (set.has(account.type)) {
    const obj2 = {
      label: intl.string(account(1115).t["+KCMSi"]),
      value: tmp3,
      onValueChange(enabled) {
          _undefined(enabled);
          const obj = ConnectedAccountsActionCreatorsDefault;
          obj.setFriendSync(account.type, account.id, enabled);
        }
    };
    const FormSwitchRow = account(8053).FormSwitchRow;
    intl = account(1115).intl;
    tmp13 = closure_29(FormSwitchRow, obj2);
  }
  let tmp16;
  if (set2.has(account.type)) {
    const obj3 = {
      label: intl2.formatToPlainString(account(1115).t["6u6J0q"], obj4),
      value: first,
      onValueChange(show_activity) {
          closure_4(show_activity);
          const obj = ConnectedAccountsActionCreatorsDefault;
          obj.setShowActivity(account.type, account.id, show_activity);
        }
    };
    const FormSwitchRow2 = account(8053).FormSwitchRow;
    intl2 = account(1115).intl;
    obj4 = { platform: value.name };
    tmp16 = closure_29(FormSwitchRow2, obj3);
  }
  let tmp19;
  if (true === value.hasMetadata) {
    const obj5 = {
      label: intl3.string(account(1115).t.FYKGsL),
      value: first1,
      disabled: !first2,
      onValueChange(arg0) {
          let id;
          let type;
          dependencyMap(arg0);
          closure_6(arg0);
          let num = 0;
          const setMetadataVisibility = ConnectedAccountsActionCreatorsDefault.setMetadataVisibility;
          ({ type, id } = account);
          ConnectedAccountsActionCreatorsDefault;
          if (arg0) {
            num = 1;
          }
          const result = setMetadataVisibility(type, id, num);
        }
    };
    const FormSwitchRow3 = account(8053).FormSwitchRow;
    intl3 = account(1115).intl;
    tmp19 = closure_29(FormSwitchRow3, obj5);
  }
  const obj6 = { style: tmp.accountConnectedPrivacyOptionsContainer, children: items };
  const obj7 = {
    label: intl4.string(account(1115).t.f7yOAX),
    value: first2,
    onValueChange(arg0) {
      let id;
      let type;
      importDefault(!arg0);
      closure_8(arg0);
      let num = 0;
      const setVisibility = ConnectedAccountsActionCreatorsDefault.setVisibility;
      ({ type, id } = account);
      ConnectedAccountsActionCreatorsDefault;
      if (arg0) {
        num = 1;
      }
      setVisibility(type, id, num);
    }
  };
  const FormSwitchRow4 = account(8053).FormSwitchRow;
  intl4 = account(1115).intl;
  items = [closure_29(FormSwitchRow4, obj7), tmp19, tmp16, tmp13];
  return closure_30(closure_8, obj6);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ActivityIndicator: metroRequire, Pressable: metroImportDefault, View: metroImportAll } = react_native);
let Constants = Constants_mod2;
({ MetadataFields: closure_17, OperatorTypes: closure_18, GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE: closure_19, GUILD_ROLE_CONNECTION_APPLICATION_IDENTITY_CONNECTION_TYPE: closure_20 } = Constants);
Constants = Constants_mod2;
({ PlatformTypes: closure_21, UserSettingsSections: closure_22, AnalyticEvents: closure_23, MarketingURLs: closure_24, FRIEND_SYNC_PLATFORM_TYPES: closure_25, ACTIVITY_PLATFORM_TYPES: closure_26, Permissions: closure_27, EMPTY_STRING_SNOWFLAKE_ID: closure_28 } = Constants);
({ jsx: closure_29, jsxs: closure_30, Fragment: closure_31 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { padding: 12 }, connectionsChecksGroups: { marginTop: 16, flexDirection: "column" }, connectionsChecksGroup: obj2, connectionsChecksGroupPassed: obj3, connectionsChecksGroupPlatformDisabled: obj4, connectionsChecksGroupRequirementsNotMet: rect, connectionsChecksGroupTextContainer: { flex: 1 }, connectionsChecksGroupTextNameContainer: { flexDirection: "row", alignItems: "center" }, connectionsChecksGroupTextNameInfoIcon: obj5, connectionsChecksGroupCheckmark: size, connectionsChecksGroupCaret: size1, connectionsCheck: { marginTop: 4 }, platformIcon: { width: 24, height: 24, marginRight: 12 }, channelName: { flexDirection: "row", alignItems: "center", marginBottom: 4 }, channelNameIcon: size2, channelNameText: { overflow: "hidden" }, header: { flexDirection: "row", width: "100%", alignItems: "center", marginBottom: 8 }, content: { width: "100%" }, footerText: { marginBottom: 16 }, accountConnectedContainer: { flexDirection: "column", alignItems: "flex-start", marginVertical: 24 }, accountConnectedPreview: { width: "100%" }, accountConnectedPreviewConnectedUserAccount: obj6, accountConnectedPrivacy: { marginTop: 16, width: "100%" }, accountConnectedPrivacyOptionsContainer: obj7, roleGranted: obj8, roleGrantedName: { overflow: "hidden", marginRight: 24 }, verifiedIcon: { marginRight: 8 }, channelsGranted: obj9, manageConnectionsButton: { marginTop: 8 }, loading: { marginTop: 24, marginBottom: 32, alignSelf: "center" }, appIcon: { marginRight: 8 }, botTag: { marginLeft: 4 } };
obj2 = { flexDirection: "row", borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 2, borderRadius: nativeDefault.radii.md, paddingHorizontal: 16, paddingVertical: 20, marginBottom: 16, width: "100%", alignItems: "center", position: "relative" };
createStyles = createStyles.createStyles;
obj3 = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj4 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
rect = { paddingVertical: 4, paddingHorizontal: 12, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, position: "absolute", top: -8, right: 20 };
obj5 = { marginLeft: 4, tintColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
size = { tintColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE, width: 24, height: 24 };
size1 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, width: 24, height: 24 };
size2 = { tintColor: nativeDefault.colors.TEXT_MUTED, marginRight: 8, width: 24, height: 24 };
obj6 = { marginTop: 8, borderRadius: nativeDefault.radii.xs, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj7 = { marginTop: 8, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.xs, padding: 8, flexDirection: "column" };
obj8 = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingVertical: 12, paddingHorizontal: 8, borderTopStartRadius: 4, borderTopEndRadius: 4, marginTop: 16 };
obj9 = { flexDirection: "column", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, padding: 16, borderBottomStartRadius: 4, borderBottomEndRadius: 4, marginBottom: 24 };
const __initData3 = createStyles(obj);
const constants8 = { CHECKS_REQUIRED: 0, [0]: "CHECKS_REQUIRED", ACCOUNT_CONNECTED: 1, [1]: "ACCOUNT_CONNECTED", ROLE_GRANTED: 2, [2]: "ROLE_GRANTED" };
size = size_mod;
let result = size.fileFinishedImporting("modules/connections/native/GuildRoleConnectionsConnectAccountsActionSheet.tsx");
class GuildRoleConnectionsConnectAccountsActionSheet {
  constructor(guildId) {
    let Button2;
    let Text2;
    let _undefined;
    let _undefined2;
    let applicationId;
    let arr;
    let arr6;
    let c16;
    let c17;
    let c5;
    let c6;
    let c8;
    let closure_10;
    let closure_13;
    let closure_15;
    let closure_7;
    let first;
    let first1;
    let first2;
    let first3;
    let intl;
    let intl10;
    let intl11;
    let intl12;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let intl7;
    let intl8;
    let intl9;
    let items10;
    let items12;
    let items13;
    let items14;
    let items16;
    let items17;
    let items18;
    let items9;
    let obj11;
    let obj15;
    let obj17;
    let obj19;
    let obj25;
    let obj46;
    let obj9;
    let onCloseModal;
    let platformType;
    let tmp13;
    let tmp14;
    let tmp16;
    let tmp17;
    let tmp27;
    let tmp37Result;
    let tmp37Result6;
    let tmp38Result4;
    let tmp4;
    let tmp58;
    let tmp9;
    const f92814 = () => {
      let tmp3;
      let tmp2 = null;
      if (null != initialAttemptedPlatformType) {
        obj = { platformType: tmp, applicationId: tmp3 };
        tmp3 = _asyncToGenerator;
        if (_asyncToGenerator == null) {
          tmp3 = null;
        }
        tmp2 = obj;
      }
      return tmp2;
    };
    guildId = guildId.guildId;
    const role = guildId.role;
    const initialAttemptedPlatformType = guildId.initialAttemptedPlatformType;
    ({ initialAttemptedApplicationId: _asyncToGenerator, onCloseModal: _slicedToArray } = guildId);
    react = undefined;
    c6 = undefined;
    closure_7 = undefined;
    c8 = undefined;
    first1 = undefined;
    closure_10 = undefined;
    first2 = undefined;
    closure_13 = undefined;
    first3 = undefined;
    closure_15 = undefined;
    c16 = undefined;
    c17 = undefined;
    let obj = function _handleAssignRole() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let v1;
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
            if (0 === id) {
              if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_2_10(true);
                const obj2 = id(initialAttemptedPlatformType[43]);
                id = 1;
                c0 = 1;
                const obj5 = { value: obj2.assignGuildRoleConnection(guildId, id.id), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c0 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp10) {
            c0 = 3;
            throw tmp10;
          }
        }
      });
      return obj(...arguments);
    };
    let tmp = closure_32();
    let tmp2 = constants8;
    let tmp3 = _slicedToArray(react.useState(constants8.CHECKS_REQUIRED), 2);
    [tmp4, c5] = tmp3;
    let tmp5 = _slicedToArray(react.useState(null), 2);
    [arr, c6] = tmp5;
    [first, closure_7] = react.useState(false);
    let tmp8 = _slicedToArray(react.useState(true), 2);
    [tmp9, c8] = tmp8;
    [first1, closure_10] = react.useState(false);
    [tmp13, tmp14] = _slicedToArray(react.useState(true), 2);
    const tmp12 = _slicedToArray(react.useState(true), 2);
    [tmp16, tmp17] = _slicedToArray(react.useState(false), 2);
    const tmp15 = _slicedToArray(react.useState(false), 2);
    obj = guildId(initialAttemptedPlatformType[41]);
    const items = [first3];
    const stateFromStores = obj.useStateFromStores(items, () => first3.getAccounts());
    let obj2 = guildId(initialAttemptedPlatformType[41]);
    const items1 = [first1];
    const stateFromStores1 = obj2.useStateFromStores(items1, () => first1.getNewestTokens());
    let obj3 = guildId(initialAttemptedPlatformType[41]);
    const items2 = [first2];
    const stateFromStores2 = obj3.useStateFromStores(items2, () => first2.getId());
    [first2, closure_13] = react.useState(null);
    [first3, closure_15] = react.useState(null);
    [tmp27, c16] = react.useState(f92814);
    _slicedToArray(react.useState(f92814), 2);
    [arr6, c17] = react.useState(null);
    _slicedToArray(react.useState(null), 2);
    const tmp30 = role(initialAttemptedPlatformType[17])();
    let obj4 = guildId(initialAttemptedPlatformType[41]);
    const items3 = [closure_15];
    const stateFromStores3 = obj4.useStateFromStores(items3, () => GuildMemberStore.getMember(guildId, stateFromStores2));
    let obj5 = guildId(initialAttemptedPlatformType[41]);
    const items4 = [closure_13];
    const stateFromStores4 = obj5.useStateFromStores(items4, () => ChannelStore.getMutableGuildChannelsForGuild(guildId));
    const items5 = [closure_10];
    const obj6 = guildId(initialAttemptedPlatformType[41]);
    const stateFromStores5 = obj6.useStateFromStores(items5, () => closure_10.locale);
    const values = Object.values(stateFromStores4);
    const found = values.filter((item) => {
      let hasItem = PermissionStore.can(constants3.VIEW_CHANNEL, item) && PermissionStore.can(constants3.SEND_MESSAGES, item);
      if (hasItem) {
        const obj2 = getConnectionsRolesDefault(item);
        hasItem = obj2.includes(role);
      }
      return hasItem;
    });
    const items6 = [guildId, role.id, stateFromStores, stateFromStores1];
    const effect = react.useEffect(() => {
      obj = GuildActionCreatorsDefault;
      const guildRoleConnectionsEligibility = obj.fetchGuildRoleConnectionsEligibility(guildId, role.id);
      guildRoleConnectionsEligibility.then((arr) => {
        closure_1_6(arr);
        closure_1_7(arr.some((arr) => arr.every((item) => item.result)));
        closure_1_8(false);
      });
    }, items6);
    const items7 = [initialAttemptedPlatformType, role.id, guildId];
    const effect1 = react.useEffect(() => {
      if (null == initialAttemptedPlatformType) {
        obj = { role_id: role.id };
        const track = AnalyticsUtilsDefault.track;
        const PASSPORT_CHALLENGE_VIEWED = constants2.PASSPORT_CHALLENGE_VIEWED;
        AnalyticsUtilsDefault;
        const obj2 = AppAnalyticsUtils;
        const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
        track(PASSPORT_CHALLENGE_VIEWED, obj);
      }
    }, items7);
    const items8 = [first1, found.length, stateFromStores3, guildId, role.id];
    const effect2 = react.useEffect(() => {
      let hasItem = first1 && null != stateFromStores3;
      if (hasItem) {
        const roles = stateFromStores3.roles;
        hasItem = roles.includes(role.id);
      }
      if (hasItem) {
        closure_10(false);
        if (found.length > 0) {
          _undefined(constants.ROLE_GRANTED);
        } else {
          obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        }
        const obj2 = { role_id: role.id };
        const track = AnalyticsUtilsDefault.track;
        const PASSPORT_CHALLENGE_FINISHED = constants2.PASSPORT_CHALLENGE_FINISHED;
        AnalyticsUtilsDefault;
        const obj3 = AppAnalyticsUtils;
        const merged = Object.assign(obj3.collectGuildAnalyticsMetadata(guildId));
        track(PASSPORT_CHALLENGE_FINISHED, obj2);
      }
    }, items8);
    const obj7 = { style: tmp.container, children: items9 };
    BottomSheet = guildId(initialAttemptedPlatformType[56]).BottomSheet;
    if (constants8.CHECKS_REQUIRED === tmp4) {
      const obj8 = { style: tmp.header, children: closure_29(Text2, obj9) };
      obj9 = { variant: "heading-lg/extrabold", children: intl2.string(guildId(initialAttemptedPlatformType[25]).t.zOZh3R) };
      Text2 = tmp18(tmp19[24]).Text;
      intl2 = tmp18(tmp19[25]).intl;
      tmp37Result = tmp37(tmp39, obj8);
    } else if (tmp2.ACCOUNT_CONNECTED === tmp4) {
      role(initialAttemptedPlatformType[35])(null != first2, "lastPlatformConnected is null");
      const tmp29Result = role(initialAttemptedPlatformType[18]);
      const value = tmp29Result.get(first2);
      let name;
      if (value != null) {
        name = value.name;
      }
      if (name == null) {
        let name1;
        if (first3 != null) {
          name1 = first3.name;
        }
        name = name1;
      }
      const obj10 = { variant: "heading-lg/extrabold", style: tmp.header, children: intl.format(guildId(initialAttemptedPlatformType[25]).t.yQvgBO, obj11) };
      const Text = tmp18(tmp19[24]).Text;
      intl = tmp18(tmp19[25]).intl;
      obj11 = { platformName: name };
      tmp37Result = tmp37(Text, obj10);
    } else {
      tmp37Result = null;
      if (tmp2.ROLE_GRANTED === tmp4) {
        const obj12 = { variant: "heading-lg/extrabold", style: tmp.header, children: intl12.string(guildId(initialAttemptedPlatformType[25]).t.najNdz) };
        const Text8 = tmp18(tmp19[24]).Text;
        intl12 = tmp18(tmp19[25]).intl;
        tmp37Result = tmp37(Text8, obj12);
      }
    }
    function handleManageConnections() {
      if (_slicedToArray != null) {
        tmp();
      }
      obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = openUserSettings;
      const obj3 = { screen: constants.CONNECTIONS };
      obj2.openUserSettings(obj3);
    }
    function handleManageAuthorizedApplications() {
      if (_slicedToArray != null) {
        tmp();
      }
      obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = openUserSettings;
      const obj3 = { screen: constants.AUTHORIZED_APPS };
      obj2.openUserSettings(obj3);
    }
    items9 = [tmp37Result, , ];
    if (tmp2.CHECKS_REQUIRED === tmp4) {
      let tmp56 = null != arr;
      if (tmp56) {
        tmp56 = arr.length > 1;
      }
      let tmp57 = null != arr;
      if (tmp57) {
        tmp57 = 1 === arr.length;
      }
      if (tmp57) {
        tmp57 = 1 === arr[0].length;
      }
      if (!tmp9) {
        let tmp37Result4;
        if (null != arr) {
          let jHfRvZ;
          const obj13 = { style: tmp.content, children: items10 };
          const Text9 = tmp18(tmp19[24]).Text;
          const intl13 = tmp18(tmp19[25]).intl;
          const format = intl13.format;
          const t = tmp18(tmp19[25]).t;
          if (tmp57) {
            jHfRvZ = t.jHfRvZ;
          } else {
            jHfRvZ = tmp56 ? t["mOQ8k+"] : t.U0olLg;
          }
          const obj14 = { variant: "text-md/medium", color: "text-default", children: format(jHfRvZ, obj15) };
          function handlePlatformAttempt() {
            const track = AnalyticsUtilsDefault.track;
            const PASSPORT_CHALLENGE_STARTED = constants2.PASSPORT_CHALLENGE_STARTED;
            obj = { role_id: role.id };
            AnalyticsUtilsDefault;
            const obj2 = AppAnalyticsUtils;
            const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
            track(PASSPORT_CHALLENGE_STARTED, obj);
          }
          function handlePlatformConnect(platformType, role_connections_verification_url) {
            let prop;
            obj = {
              platformType,
              location: "Verified Roles Connect Accounts Modal",
              onClose() {
                let tmp8;
                let id;
                if (role_connections_verification_url != null) {
                  id = tmp2.id;
                }
                if (id == null) {
                  id = null;
                }
                let prop;
                if (role_connections_verification_url != null) {
                  prop = tmp2.role_connections_verification_url;
                }
                const openLazy = role_connections_verification_url(initialAttemptedPlatformType[46]).openLazy;
                obj = { default: closure_1_40 };
                role_connections_verification_url(initialAttemptedPlatformType[46]);
                const resolved = Promise.resolve(obj);
                const obj3 = { role, guildId, initialAttemptedPlatformType: platformType, initialAttemptedApplicationId: tmp8, overrideUrl: { overrideUrl: prop }.overrideUrl, onCloseModal: _slicedToArray };
                tmp8 = null;
                const obj2 = platformType(initialAttemptedPlatformType[48]);
                const guildRoleConnectionsConnectAccountsActionSheetKey = obj2.makeGuildRoleConnectionsConnectAccountsActionSheetKey(role.id);
                if (null != platformType) {
                  tmp8 = id;
                }
                openLazy(resolved, guildRoleConnectionsConnectAccountsActionSheetKey, obj3);
              },
              overrideUrl: prop
            };
            prop = undefined;
            const tmp = role(initialAttemptedPlatformType[49]);
            if (role_connections_verification_url != null) {
              prop = role_connections_verification_url.role_connections_verification_url;
            }
            tmp(obj);
          }
          function handlePlatformIdentityAuthorize(applicationId) {
            let connectedAccountProvider;
            let scopes;
            applicationId = applicationId.applicationId;
            const wasAlreadyConnected = applicationId.wasAlreadyConnected;
            ({ scopes, connectedAccountProvider } = applicationId);
            obj = role(initialAttemptedPlatformType[46]);
            obj.hideActionSheet();
            const combined = "OAuth2AuthorizeModal-" + applicationId;
            let obj2 = role(initialAttemptedPlatformType[50]);
            function handleModalClose(key) {
              let tmp14;
              if (key.key === combined) {
                const obj4 = DispatcherDefault;
                obj4.unsubscribe("MODAL_POP", handleModalClose);
                let tmp = null;
                if (!wasAlreadyConnected) {
                  tmp = closure_20;
                }
                obj = { default: closure_1_40 };
                const openLazy = wasAlreadyConnected(combined[46]).openLazy;
                wasAlreadyConnected(combined[46]);
                const resolved = Promise.resolve(obj);
                const obj3 = { role, guildId, initialAttemptedPlatformType: tmp, initialAttemptedApplicationId: tmp14, overrideUrl: {}.overrideUrl, onCloseModal: _slicedToArray };
                tmp14 = null;
                const obj2 = applicationId(combined[48]);
                const guildRoleConnectionsConnectAccountsActionSheetKey = obj2.makeGuildRoleConnectionsConnectAccountsActionSheetKey(role.id);
                const tmp2 = applicationId;
                if (null != tmp) {
                  tmp14 = tmp2;
                }
                openLazy(resolved, guildRoleConnectionsConnectAccountsActionSheetKey, obj3);
              }
            }
            const subscription = obj2.subscribe("MODAL_POP", handleModalClose);
            const pushLazy = role(initialAttemptedPlatformType[51]).pushLazy;
            const tmp4 = role(initialAttemptedPlatformType[51]);
            let obj3 = {
              clientId: applicationId,
              scopes,
              integrationType: guildId(initialAttemptedPlatformType[54]).ApplicationIntegrationType.USER_INSTALL,
              connectedAccountProvider,
              callback() {

              },
              dismissOAuthModal() {
                obj = ModalActionCreatorsDefault;
                return obj.popWithKey(combined);
              }
            };
            const tmp5 = guildId(initialAttemptedPlatformType[53])(initialAttemptedPlatformType[52], initialAttemptedPlatformType.paths);
            pushLazy(tmp5, obj3, combined);
          }
          function handlePlatformConnected(arg0, arg1) {
            closure_13(arg0);
            closure_15(arg1);
            _undefined(constants.ACCOUNT_CONNECTED);
            _undefined2(null);
            if (null != arg1) {
              obj = ConnectionsRoleActionCreators;
              const userApplicationRoleConnections = obj.fetchUserApplicationRoleConnections();
              const nextPromise = userApplicationRoleConnections.then((result) => {
                closure_1_17(result);
              });
              nextPromise.catch(() => {

              });
            }
          }
          obj15 = { roleName: role.name };
          items10 = [closure_29(Text9, obj14), , ];
          const obj16 = { style: tmp.connectionsChecksGroups, children: closure_29(tmp58, obj17) };
          obj17 = { eligibilityStatesGroups: arr, onPlatformAttempt: handlePlatformAttempt, onPlatformConnect: handlePlatformConnect, onPlatformConnected: handlePlatformConnected, onPlatformIdentityAuthorize: handlePlatformIdentityAuthorize, initialAttemptedPlatformType: platformType, initialAttemptedApplicationId: applicationId };
          platformType = undefined;
          tmp58 = ConnectionsChecks;
          if (tmp27 != null) {
            platformType = tmp27.platformType;
          }
          if (platformType == null) {
            platformType = null;
          }
          applicationId = undefined;
          if (tmp27 != null) {
            applicationId = tmp27.applicationId;
          }
          if (applicationId == null) {
            applicationId = null;
          }
          items10[1] = closure_29(c8, obj16);
          const obj18 = { variant: "text-xs/normal", style: tmp.footerText, color: "text-default", children: intl7.format(guildId(initialAttemptedPlatformType[25]).t.gsgvxh, obj19) };
          const Text7 = tmp18(tmp19[24]).Text;
          intl7 = tmp18(tmp19[25]).intl;
          obj19 = { privacyPolicyUrl: constants6.PRIVACY, onAuthorizedApplicationsClick: handleManageAuthorizedApplications, onConnectionsClick: handleManageConnections };
          items10[2] = closure_29(Text7, obj18);
          tmp37Result4 = tmp38(tmp39, obj13);
        }
        tmp38Result4 = tmp37Result4;
      }
      const obj20 = { size: "large", style: tmp.loading };
      tmp37Result4 = tmp37(c6, obj20);
    } else if (tmp2.ACCOUNT_CONNECTED === tmp4) {
      role(initialAttemptedPlatformType[35])(null != first2, "lastPlatformConnected is null");
      const found1 = stateFromStores.find((type) => first2 === type.type);
      let found2;
      if (arr6 != null) {
        found2 = arr6.find((application) => {
          let id1;
          const id = application.application.id;
          if (first3 != null) {
            id1 = first3.id;
          }
          return id === id1;
        });
      }
      const obj21 = { style: tmp.content, children: null };
      const obj22 = { style: tmp.accountConnectedContainer, children: null };
      if (null == found1) {
        let tmp37Result5;
        if (null == found2) {
          const obj23 = { size: "large", style: tmp.loading };
          tmp37Result5 = tmp37(c6, obj23);
        }
        obj22.children = tmp37Result5;
        const items11 = [closure_29(c8, obj22), ];
        const obj24 = { variant: "text-md/normal", color: "text-default", children: intl6.format(guildId(initialAttemptedPlatformType[25]).t.gsgvxh, obj25) };
        const Text6 = tmp18(tmp19[24]).Text;
        intl6 = tmp18(tmp19[25]).intl;
        obj25 = { privacyPolicyUrl: constants6.PRIVACY, onAuthorizedApplicationsClick: handleManageAuthorizedApplications, onConnectionsClick: handleManageConnections };
        items11[1] = closure_29(Text6, obj24);
        obj21.children = items11;
        tmp38Result4 = tmp38(tmp39, obj21);
      }
      let tmp38Result5 = null;
      if (null != found1) {
        const obj26 = { children: items13 };
        const obj27 = { style: tmp.accountConnectedPreview, children: items12 };
        const obj28 = { variant: "eyebrow", color: "text-default", children: intl3.string(guildId(initialAttemptedPlatformType[25]).t.TOjkEg) };
        const Text3 = tmp18(tmp19[24]).Text;
        intl3 = tmp18(tmp19[25]).intl;
        items12 = [closure_29(Text3, obj28), ];
        const obj29 = { account: found1, userId: stateFromStores2, theme: tmp30, locale: stateFromStores5, style: tmp.accountConnectedPreviewConnectedUserAccount, showMetadata: tmp13, showInvisibleIcon: tmp16 };
        items12[1] = closure_29(guildId(initialAttemptedPlatformType[57]).ConnectedUserAccount, obj29);
        items13 = [closure_30(c8, obj27), ];
        const obj30 = { style: tmp.accountConnectedPrivacy, children: items14 };
        const obj31 = { variant: "eyebrow", color: "text-default", children: intl4.string(guildId(initialAttemptedPlatformType[25]).t.jndPhX) };
        const Text4 = tmp18(tmp19[24]).Text;
        intl4 = tmp18(tmp19[25]).intl;
        items14 = [closure_29(Text4, obj31), ];
        const obj32 = { account: found1, setShowPreviewInvisibleIcon: tmp17, setShowPreviewMetadata: tmp14 };
        items14[1] = closure_29(ConnectedUserAccountOptions, obj32);
        items13[1] = closure_30(c8, obj30);
        tmp38Result5 = tmp38(tmp48, obj26);
      }
      const items15 = [tmp38Result5, ];
      let tmp38Result6 = null;
      if (null != found2) {
        const obj33 = { style: tmp.accountConnectedPreview, children: items16 };
        const obj34 = { variant: "eyebrow", color: "text-default", children: intl5.string(guildId(initialAttemptedPlatformType[25]).t.TOjkEg) };
        const Text5 = tmp18(tmp19[24]).Text;
        intl5 = tmp18(tmp19[25]).intl;
        items16 = [closure_29(Text5, obj34), ];
        const obj35 = { applicationRoleConnection: found2, theme: tmp30, locale: stateFromStores5, style: tmp.accountConnectedPreviewConnectedUserAccount };
        items16[1] = closure_29(guildId(initialAttemptedPlatformType[57]).ConnectedApplicationUserRoleAccount, obj35);
        tmp38Result6 = tmp38(tmp39, obj33);
      }
      const obj36 = { children: items15 };
      items15[1] = tmp38Result6;
      tmp37Result5 = tmp38(tmp48, obj36);
    } else {
      tmp38Result4 = null;
      if (tmp2.ROLE_GRANTED === tmp4) {
        const obj37 = { style: tmp.content, children: items18 };
        const obj38 = { style: tmp.roleGranted, children: items17 };
        const obj39 = { guildId, style: tmp.verifiedIcon, role, size: 24 };
        items17 = [closure_29(role(tmp19[58]), obj39), ];
        const obj40 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: tmp.roleGrantedName, children: role.name };
        items17[1] = closure_29(guildId(initialAttemptedPlatformType[24]).Text, obj40);
        items18 = [closure_30(c8, obj38), ];
        const obj41 = {
          style: tmp.channelsGranted,
          children: found.map((channel) => {
                obj = { channel };
                return closure_1_29(ChannelName, obj, channel.id);
              })
        };
        items18[1] = closure_29(c8, obj41);
        tmp38Result4 = tmp38(tmp39, obj37);
      }
    }
    items9[1] = tmp38Result4;
    if (tmp2.CHECKS_REQUIRED === tmp4) {
      const obj42 = {
        variant: "primary",
        onPress() {
            function handleAssignRole() {
              return obj(...arguments);
            }
            return handleAssignRole();
          },
        disabled: tmp9,
        text: intl11.string(guildId(initialAttemptedPlatformType[25]).t["8SuVoE"]),
        grow: true
      };
      const Button4 = tmp18(tmp19[59]).Button;
      if (!tmp9) {
        tmp9 = !first;
      }
      if (!tmp9) {
        tmp9 = first1;
      }
      intl11 = tmp18(tmp19[25]).intl;
      tmp37Result6 = tmp37(Button4, obj42);
    } else if (tmp2.ACCOUNT_CONNECTED === tmp4) {
      const obj43 = {
        variant: "primary",
        onPress() {
            return _undefined(constants.CHECKS_REQUIRED);
          },
        text: intl10.string(guildId(initialAttemptedPlatformType[25]).t.i4jeWR),
        grow: true
      };
      const Button3 = tmp18(tmp19[59]).Button;
      intl10 = tmp18(tmp19[25]).intl;
      tmp37Result6 = tmp37(Button3, obj43);
    } else {
      let flag;
      if (arr != null) {
        const flatResult = arr.flat();
        flag = flatResult.some((application_id) => null == application_id.application_id);
      }
      if (flag == null) {
        flag = false;
      }
      const obj44 = {
        variant: "primary",
        onPress() {
            if (_slicedToArray != null) {
              tmp();
            }
            obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          },
        text: intl8.string(guildId(initialAttemptedPlatformType[25]).t.cpT0Cq),
        grow: true
      };
      const Button = tmp18(tmp19[59]).Button;
      intl8 = tmp18(tmp19[25]).intl;
      const items19 = [closure_29(Button, obj44), ];
      let tmp37Result7 = null;
      const tmp64 = closure_31;
      if (flag) {
        const obj45 = { style: tmp.manageConnectionsButton, children: closure_29(Button2, obj46) };
        obj46 = { variant: "secondary", onPress: handleManageConnections, text: intl9.string(guildId(initialAttemptedPlatformType[25]).t.VXV55P), grow: true };
        Button2 = tmp18(tmp19[59]).Button;
        intl9 = tmp18(tmp19[25]).intl;
        tmp37Result7 = tmp37(tmp39, obj45);
      }
      const obj47 = { children: items19 };
      items19[1] = tmp37Result7;
      tmp37Result6 = tmp38(tmp64, obj47);
    }
    items9[2] = tmp37Result6;
    const obj48 = { children: closure_30(c8, obj7) };
    return closure_29(BottomSheet, obj48);
  }
}

export default GuildRoleConnectionsConnectAccountsActionSheet;
