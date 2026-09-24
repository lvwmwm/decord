// Module ID: 15240
// Function ID: 15241
// Name: ConnectedAccount
// Dependencies: [5, 109, 32, 19, 17, 5532, 2067, 1078, 5659, 21, 4790, 1181, 580, 5775, 5657, 558, 568, 504, 5220, 1119, 4786, 5831, 5534, 7478, 4503, 15241, 10073, 5142, 5239, 9371, 15242, 15245, 5658, 11731, 4487, 2112, 5373, 10986, 15247, 3134, 1401, 4642, 5218, 7270, 5854, 5935, 2]

// Module 15240 (ConnectedAccount)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import native2 from "native" /* 1181 */;
import AvatarUtils from "AvatarUtils" /* 1401 */;
import shared from "shared" /* 4642 */;
import Text_Text from "Text/Text" /* 4786 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5142 */;
import Stack_Stack from "Stack/Stack" /* 5218 */;
import common_AlertDefault from "common/Alert" /* 5239 */;
import Pressables from "Pressables" /* 5373 */;
import PlatformsDefault from "Platforms" /* 5534 */;
import ConnectedAccountsActionCreatorsDefault from "ConnectedAccountsActionCreators" /* 5657 */;
import GuildIconDefault from "GuildIcon" /* 5831 */;
import TableRow from "TableRow" /* 5854 */;
import TableRowGroup from "TableRowGroup" /* 5935 */;
import _modDef7270 from "module_7270" /* 7270 */;
import TableSwitchRow from "TableSwitchRow" /* 7478 */;
import shouldWarnConnectedAccountTwoWayDefault from "shouldWarnConnectedAccountTwoWay" /* 15241 */;
import XboxTwoWayLinkUpsell from "XboxTwoWayLinkUpsell" /* 15242 */;
import PlayStationTwoWayLinkUpsell from "PlayStationTwoWayLinkUpsell" /* 15245 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5532 */;
import GuildStore from "GuildStore" /* 2067 */;
import TextStyles from "TextStyles" /* 5775 */;

require = fn;
let closure_3 = ["label"];
const View = fn(17).View;
const Constants = fn(1078);
({ FRIEND_SYNC_PLATFORM_TYPES: closure_11, ACTIVITY_PLATFORM_TYPES: closure_12, PlatformTypes: map1, HelpdeskArticles: closure_14, Fonts } = Constants);
const MetadataFields = fn(5659).MetadataFields;
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { platformIcon: { marginRight: 4 }, connectedApplicationIdentityIcon: null, deleteConnectionIcon: null, container: null, connectedAccountItem: null, connectedAccountTopContainer: null, connectedAccountContentContainer: null, integrationContainer: null, integrationContainerInternal: null, integrationTextRowContainer: null, integrationErrorText: null, integrationCategoryLabel: null, integrationGuildIcon: null, integrationJoinButton: null, divider: null, alertInfoBox: null, alertBodyText: null, metadataContainer: null, metadataItemsContainer: null, metadataRefreshButton: null, metadataRefreshButtonDisabled: null, metadataRefreshIcon: null, metadataBannerContainer: null, newBadge: null, rowDivider: null, addDetailsButton: null, learnMoreButton: null, relinkButton: null, relinkText: null };
let obj3 = { borderRadius: null, marginRight: 4 };
const native = fn(1181);
obj3.borderRadius = native.getIconSize(fn(1181).Icon.Sizes.LARGE);
obj2.connectedApplicationIdentityIcon = obj3;
obj2.deleteConnectionIcon = { marginRight: 10, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.container = { marginHorizontal: 8, marginVertical: 4 };
let obj5 = { marginRight: 10, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.connectedAccountItem = { borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden" };
let obj6 = { borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden" };
obj2.connectedAccountTopContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderTopLeftRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, borderTopRightRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS };
obj2.connectedAccountContentContainer = { marginTop: 8, gap: 8 };
let obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderTopLeftRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, borderTopRightRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS };
obj2.integrationContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, marginTop: 12, paddingVertical: 4, borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, flexDirection: "column", alignItems: "center" };
obj2.integrationContainerInternal = { alignItems: "center", flexDirection: "row" };
obj2.integrationTextRowContainer = { alignItems: "flex-start", flexDirection: "column", flex: 1 };
obj2.integrationErrorText = { alignItems: "center", marginTop: 4, marginBottom: 8 };
obj2.integrationCategoryLabel = { marginVertical: 0 };
obj2.integrationGuildIcon = { margin: 8 };
obj2.integrationJoinButton = { alignSelf: "center", marginEnd: 8, marginStart: 8 };
let obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, marginTop: 12, paddingVertical: 4, borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, flexDirection: "column", alignItems: "center" };
obj2.divider = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1, marginVertical: 8, marginHorizontal: 16 };
obj2.alertInfoBox = { marginTop: 8 };
let merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 16));
obj2.alertBodyText = { marginTop: 16 };
let obj10 = { marginTop: 16 };
let obj9 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1, marginVertical: 8, marginHorizontal: 16 };
obj2.metadataContainer = { display: "flex", flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs, padding: 8, marginLeft: 16, marginRight: 16 };
obj2.metadataItemsContainer = { display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", alignContent: "flex-start", paddingRight: 8, flexShrink: 1 };
obj2.metadataRefreshButton = { alignSelf: "center", marginLeft: "auto" };
obj2.metadataRefreshButtonDisabled = { opacity: 0.5 };
obj2.metadataRefreshIcon = { height: 16, width: 16 };
obj2.metadataBannerContainer = { justifyContent: "center", flexWrap: "wrap", alignItems: "center", paddingHorizontal: 16, paddingVertical: 14 };
obj2.newBadge = { marginRight: 4 };
obj2.rowDivider = { flexBasis: "100%", height: 12 };
obj2.addDetailsButton = { paddingHorizontal: 16, flexGrow: 0, marginRight: 12 };
obj2.learnMoreButton = { paddingHorizontal: 16, flexGrow: 0 };
let obj11 = { display: "flex", flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs, padding: 8, marginLeft: 16, marginRight: 16 };
obj2.relinkButton = { paddingVertical: 8, paddingHorizontal: 12, borderRadius: nativeDefault.radii.round };
obj2.relinkText = { marginTop: 8 };
let legacyClassComponentStyles = createStyles.createLegacyClassComponentStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((integration) => {
  const cResult = integration(568).c(40);
  integration = integration.integration;
  const obj = integration(568);
  legacyClassComponentStyles = integration(4790).useLegacyClassComponentStyles(legacyClassComponentStyles);
  const obj2 = integration(4790);
  [r10021, importDefault] = noop.useState();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConnectedAccountsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== integration.id) {
    const fn = function o() {
      return ConnectedAccountsStore.isJoining(integration.id);
    };
    const items1 = [integration.id];
    cResult[1] = integration.id;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmp5 = _slicedToArray(noop.useState(), 2);
  const stateFromStores = integration(504).useStateFromStores(first, tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildStore];
    cResult[4] = items2;
    let tmp11 = items2;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== integration.guild.id) {
    class E {
      constructor() {
        return closure_10.getGuild(integration.guild.id);
      }
    }
    const items3 = [integration.guild.id];
    cResult[5] = integration.guild.id;
    cResult[6] = E;
    cResult[7] = items3;
    let tmp14 = items3;
    const tmp13 = E;
  } else {
    class E {
      constructor() {
        return closure_10.getGuild(integration.guild.id);
      }
    }
    tmp14 = cResult[7];
  }
  const tmpResult = integration(504);
  const tmp15 = null != integration(504).useStateFromStores(tmp11, tmp13, tmp14);
  if (cResult[8] === integration.id) {
    class E {
      constructor() {
        return closure_10.getGuild(integration.guild.id);
      }
    }
  }
  if (tmp15) {
    class E {
      constructor() {
        return closure_10.getGuild(integration.guild.id);
      }
    }
    cResult[8] = integration.id;
    cResult[9] = stateFromStores;
    cResult[10] = tmp15;
    cResult[11] = legacyClassComponentStyles.integrationJoinButton;
    cResult[12] = tmp17;
  } else {
    class E {
      constructor() {
        return closure_10.getGuild(integration.guild.id);
      }
    }
    const obj3 = { style: legacyClassComponentStyles.integrationJoinButton, children: null };
    let obj4 = {
      size: "sm",
      variant: "secondary",
      onPress() {
          ConnectedAccountsActionCreatorsDefault.joinServer(integration.id, () => {
            closure_1_1(id.id);
          });
        },
      disabled: stateFromStores,
      text: null
    };
    const intl = tmp(1119).intl;
    if (stateFromStores) {
      class E {
        constructor() {
          return closure_10.getGuild(integration.guild.id);
        }
      }
      const stringResult = intl.string(tmp(1119).t);
    } else {
      class E {
        constructor() {
          return closure_10.getGuild(integration.guild.id);
        }
      }
    }
    obj4.text = stringResult;
    obj4 = tmp18(tmp(5220).Button, obj4);
    obj3.children = obj4;
    tmp18(View, obj3);
  }
}) : ((integration) => {
  integration = integration.integration;
  importDefault = undefined;
  legacyClassComponentStyles = integration(4790).useLegacyClassComponentStyles(legacyClassComponentStyles);
  const obj = integration(4790);
  [tmp5, c1] = noop.useState();
  const tmp4 = _slicedToArray(noop.useState(), 2);
  const items = [ConnectedAccountsStore];
  const items1 = [integration.id];
  const stateFromStores = integration(504).useStateFromStores(items, () => ConnectedAccountsStore.isJoining(integration.id), items1);
  const obj2 = integration(504);
  const items2 = [GuildStore];
  const items3 = [integration.guild.id];
  const tmp7 = null == integration(504).useStateFromStores(items2, () => GuildStore.getGuild(integration.guild.id), items3);
  if (!tmp7) {
    let tmp12 = tmp5 === integration.id;
    if (tmp12) {
      const obj4 = { style: legacyClassComponentStyles.integrationErrorText, variant: "text-sm/medium", color: "text-feedback-critical", children: null };
      const intl2 = tmp(1119).intl;
      obj4.children = intl2.string(tmp(1119).t.fEptJP);
      tmp12 = closure_16(tmp(4786).Text, obj4);
    }
    const obj5 = { style: legacyClassComponentStyles.integrationContainer, children: null };
    const obj6 = { style: legacyClassComponentStyles.integrationContainerInternal, children: null };
    const obj7 = { guild: integration.guild, size: tmp(5831).GuildIconSizes.SMALL, style: legacyClassComponentStyles.integrationGuildIcon };
    const items4 = [closure_16(GuildIconDefault, obj7), , ];
    const obj8 = { style: legacyClassComponentStyles.integrationTextRowContainer, children: null };
    const obj9 = { lineClamp: 1, variant: "text-sm/medium", children: integration.guild.name };
    const items5 = [closure_16(tmp(4786).Text, obj9), ];
    const tmp16 = closure_16;
    value = PlatformsDefault.get(integration.type);
    let platformUserUrl;
    if (value != null) {
      const getPlatformUserUrl = value.getPlatformUserUrl;
      if (getPlatformUserUrl != null) {
        platformUserUrl = getPlatformUserUrl(integration.account);
      }
    }
    const obj10 = { lineClamp: 1, variant: "text-xs/medium", color: "text-muted", children: platformUserUrl };
    items5[1] = tmp16(tmp(4786).Text, obj10);
    obj8.children = items5;
    items4[1] = closure_17(View, obj8);
    items4[2] = tmp7;
    obj6.children = items4;
    const items6 = [closure_17(View, obj6), tmp12];
    obj5.children = items6;
    return closure_17(View, obj5);
  } else {
    const obj11 = { style: legacyClassComponentStyles.integrationJoinButton, children: null };
    let obj13 = {
      size: "sm",
      variant: "secondary",
      onPress() {
          ConnectedAccountsActionCreatorsDefault.joinServer(integration.id, () => {
            closure_1_1(id.id);
          });
        },
      disabled: stateFromStores,
      text: null
    };
    const intl = tmp(1119).intl;
    const string = intl.string;
    let RXvQQu = tmp(1119).t;
    if (stateFromStores) {
      RXvQQu = RXvQQu.RXvQQu;
      let stringResult = string(RXvQQu);
    } else {
      stringResult = string(RXvQQu.XpeFYr);
    }
    obj13.text = stringResult;
    obj13 = tmp8(tmp(5220).Button, obj13);
    obj11.children = obj13;
    closure_16(View, obj11);
  }
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((label) => {
  const cResult = c.c(6);
  if (cResult[0] !== label) {
    label = label.label;
    const tmp8 = _objectWithoutProperties(label, closure_3);
    cResult[0] = label;
    cResult[1] = label;
    cResult[2] = tmp8;
    let tmp5 = tmp8;
    let tmp4 = label;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === tmp4) {
    if (cResult[4] === tmp5) {
      let tmp9 = cResult[5];
    }
    return tmp9;
  }
  const merged = Object.assign(tmp5);
  const tmp11 = value2(TableSwitchRow.TableSwitchRow, { label: tmp4 });
  cResult[3] = tmp4;
  cResult[4] = tmp5;
  cResult[5] = tmp11;
  tmp9 = tmp11;
}) : ((label) => {
  const merged = Object.assign(label, Object.assign({ label: 0 }));
  const merged1 = Object.assign(merged);
  return value2(TableSwitchRow.TableSwitchRow, { label: label.label });
});
const PureComponent = noop.PureComponent;
class ConnectedAccount extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    obj = { isVisible: 1 === applyArgumentsResult.props.account.visibility, isMetadataVisible: 1 === applyArgumentsResult.props.account.metadataVisibility, inProgressVisibility: null, inProgressMetadataVisibility: null, showActivity: applyArgumentsResult.props.account.showActivity, friendSync: applyArgumentsResult.props.account.friendSync, metadataRefreshing: false, metadataAlreadyRefreshed: false };
    applyArgumentsResult.state = obj;
    applyArgumentsResult.handleDisconnect = function handleDisconnect() {
      const tmp2 = legacyClassComponentStyles(applyArgumentsResult.context);
      const account = applyArgumentsResult.props.account;
      value = PlatformsDefault.get(account.type);
      const intl = util.intl;
      const formatResult = intl.format(util.t.VgqIPj, { provider: value.name });
      let tmp8;
      if (shouldWarnConnectedAccountTwoWayDefault(account)) {
        const obj3 = { children: null };
        const obj4 = { style: tmp2.alertBodyText, variant: "text-md/medium", children: formatResult };
        const items = [value2(tmp6(4786).Text, obj4), ];
        const obj5 = { style: tmp2.alertInfoBox, children: null };
        const intl2 = tmp6(1119).intl;
        const obj6 = { platformName: value.name };
        obj5.children = intl2.format(tmp6(1119).t.COW3Xn, obj6);
        items[1] = value2(tmp3(10073), obj5);
        obj3.children = items;
        tmp8 = constants(View, obj3);
        const tmp3Result = tmp3(10073);
      }
      const obj2 = { provider: value.name };
      const tmp = applyArgumentsResult;
      const obj7 = { title: null, body: null, cancelText: null, children: null, confirmText: null, onConfirm: null, confirmColor: null };
      const intl3 = tmp6(1119).intl;
      obj7.title = intl3.formatToPlainString(util.t.U5x12f, { name: value.name });
      obj7.body = formatResult;
      const intl4 = tmp6(1119).intl;
      obj7.cancelText = intl4.string(util.t["ETE/oC"]);
      obj7.children = tmp8;
      const intl5 = tmp6(1119).intl;
      obj7.confirmText = intl5.string(util.t.ppppRJ);
      obj7.onConfirm = tmp.handleConfirmDisconnectAccount;
      obj7.confirmColor = common_AlertDefault.Colors.RED;
      AlertActionCreatorsDefault.show(obj7);
    };
    applyArgumentsResult.handleConfirmDisconnectAccount = function handleConfirmDisconnectAccount() {
      const account = applyArgumentsResult.props.account;
      ConnectedAccountsActionCreatorsDefault.disconnect(account.type, account.id);
    };
    closure_129_0 = undefined;
    closure_129_1 = applyArgumentsResult;
    closure_129_0 = closure_4(async (arg0) => {
      closure_129_0 = applyArgumentsResult;
      const account = importDefault.props.account;
      let num5 = 0;
      if (applyArgumentsResult) {
        num5 = 1;
      }
      if (applyArgumentsResult) {
        if (!account.verified) {
          importDefault.setState({ inProgressVisibility: num5 });
          closure_1(tmp3[29])({ platformType: account.type });
          c5 = 3;
          return { value: undefined, done: true };
        }
      }
      importDefault.setState({ isVisible: applyArgumentsResult });
      await closure_1(tmp3[14]).setVisibility(account.type, account.id, num5);
      if (1 === tmp7) {
        c3 = 0;
        closure_130_1.setState({ isVisible: !closure_129_0 });
        c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        c3 = 0;
      }
      return arg1;
    });
    applyArgumentsResult.handleVisibilityChange = function() {
      const self = this;
      const apply = applyArgumentsResult.apply;
      if (typeof apply === "unknown") {
        applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    closure_130_0 = undefined;
    closure_130_1 = applyArgumentsResult;
    closure_130_0 = closure_4(async (arg0) => {
      closure_129_0 = applyArgumentsResult;
      const account = importDefault.props.account;
      let num5 = 0;
      if (applyArgumentsResult) {
        num5 = 1;
      }
      if (applyArgumentsResult) {
        if (!account.verified) {
          importDefault.setState({ inProgressMetadataVisibility: num5 });
          closure_1(tmp3[29])({ platformType: account.type });
          c5 = 3;
          return { value: undefined, done: true };
        }
      }
      importDefault.setState({ isMetadataVisible: applyArgumentsResult });
      await closure_1(tmp3[14]).setMetadataVisibility(account.type, account.id, num5);
      if (1 === tmp7) {
        c3 = 0;
        closure_130_1.setState({ isMetadataVisible: !closure_129_0 });
        c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        c3 = 0;
      }
      return arg1;
    });
    applyArgumentsResult.handleMetadataVisibilityChange = function() {
      const self = this;
      const apply = applyArgumentsResult.apply;
      if (typeof apply === "unknown") {
        applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    closure_131_0 = undefined;
    closure_131_1 = applyArgumentsResult;
    closure_131_0 = closure_4(async (friendSync) => {
      c4 = 0;
      c5 = 0;
      c3 = 0;
      return (async (arg0, value) => {
        closure_129_0 = friendSync;
        const account = importDefault.props.account;
        importDefault.setState({ friendSync });
        await closure_1(tmp3[14]).setFriendSync(account.type, account.id, friendSync);
        if (1 === tmp7) {
          c3 = 0;
          closure_130_1.setState({ friendSync: !closure_129_0 });
          c5 = 3;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c3 = 0;
        }
        return value;
      })();
    });
    applyArgumentsResult.handleFriendSyncChange = function() {
      const self = this;
      const apply = applyArgumentsResult.apply;
      if (typeof apply === "unknown") {
        applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    closure_132_0 = undefined;
    closure_132_1 = applyArgumentsResult;
    closure_132_0 = closure_4(async (showActivity) => {
      c4 = 0;
      c5 = 0;
      c3 = 0;
      return (async (arg0, value) => {
        closure_129_0 = showActivity;
        const account = importDefault.props.account;
        importDefault.setState({ showActivity });
        await closure_1(tmp3[14]).setShowActivity(account.type, account.id, showActivity);
        if (1 === tmp7) {
          c3 = 0;
          closure_130_1.setState({ showActivity: !closure_129_0 });
          c5 = 3;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c3 = 0;
        }
        return value;
      })();
    });
    applyArgumentsResult.handleShowActivityChange = function() {
      const self = this;
      const apply = applyArgumentsResult.apply;
      if (typeof apply === "unknown") {
        applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    return applyArgumentsResult;
  }
}
const prototype = ConnectedAccount.prototype;
prototype["componentDidUpdate"] = function componentDidUpdate(account) {
  const self = this;
  account = this.props.account;
  if (account.account !== account) {
    const obj4 = {};
    const merged = Object.assign(self.state);
    obj4.isVisible = 1 === account.visibility;
    obj4.isMetadataVisible = 1 === account.metadataVisibility;
    ({ showActivity: obj3.showActivity, friendSync: obj3.friendSync } = account);
    if (account.verified) {
      ({ inProgressVisibility, inProgressMetadataVisibility } = self.state);
      if (null != inProgressVisibility) {
        obj4.isVisible = 1 === inProgressVisibility;
        obj4.inProgressVisibility = null;
        ConnectedAccountsActionCreatorsDefault.setVisibility(account.type, account.id, inProgressVisibility);
      }
      if (null != inProgressMetadataVisibility) {
        obj4.isMetadataVisible = 1 === inProgressMetadataVisibility;
        obj4.inProgressMetadataVisibility = null;
        const result = ConnectedAccountsActionCreatorsDefault.setMetadataVisibility(account.type, account.id, inProgressMetadataVisibility);
      }
    }
    self.setState(obj4);
  }
};
prototype["renderUpsell"] = function renderUpsell() {
  const account = this.props.account;
  if (account.twoWayLink) {
    return null;
  } else if (account.type === constants.XBOX) {
    let tmp2 = value2(XboxTwoWayLinkUpsell.XboxTwoWayLinkUpsell, {});
  } else if (account.type === tmp.PLAYSTATION) {
    tmp2 = value2(PlayStationTwoWayLinkUpsell.PlayStationTwoWayLinkUpsell, {});
  }
};
prototype["renderVisibilityCheckRow"] = function renderVisibilityCheckRow() {
  const obj = { label: null, value: null, onValueChange: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.f7yOAX);
  obj.value = this.state.isVisible;
  obj.onValueChange = this.handleVisibilityChange;
  return value2(closure_20, obj);
};
prototype["renderMetadataVisibilityCheckRow"] = function renderMetadataVisibilityCheckRow() {
  const self = this;
  value = PlatformsDefault.get(this.props.account.type);
  let hasMetadata;
  if (value != null) {
    hasMetadata = value.hasMetadata;
  }
  if (true !== hasMetadata) {
    return null;
  } else {
    const obj2 = { label: null, value: null, disabled: null, onValueChange: null };
    ({ isMetadataVisible, isVisible } = self.state);
    const intl = util.intl;
    obj2.label = intl.string(util.t.FYKGsL);
    obj2.value = isMetadataVisible;
    obj2.disabled = !isVisible;
    obj2.onValueChange = self.handleMetadataVisibilityChange;
    return value2(closure_20, obj2);
  }
};
prototype["renderMetadata"] = function renderMetadata() {
  const self = this;
  let tmp = legacyClassComponentStyles(this.context);
  const props = this.props;
  const account = props.account;
  let metadata = account.metadata;
  if (metadata == null) {
    metadata = {};
  }
  let stringResult = dependencyMap;
  const createdAtDate = account(5658).getCreatedAtDate(metadata[MetadataFields.CREATED_AT], props.locale);
  const type = account.type;
  if (constants.REDDIT === type) {
    let redditMetadataItems = tmp2(11731).generateRedditMetadataItems(metadata);
    const tmp2Result = tmp2(11731);
  } else if (tmp6.STEAM === type) {
    redditMetadataItems = tmp2(11731).generateSteamMetadataItems(metadata);
    const tmp2Result6 = tmp2(11731);
  } else {
    if (tmp6.BLUESKY !== type) {
      if (tmp6.TWITTER !== type) {
        if (tmp6.MASTODON !== type) {
          if (tmp6.EBAY === type) {
            redditMetadataItems = tmp2(11731).generateEbayMetadataItems(metadata);
            const tmp2Result7 = tmp2(11731);
          } else if (tmp6.PAYPAL === type) {
            redditMetadataItems = tmp2(11731).generatePaypalMetadataItems(metadata);
            const tmp2Result8 = tmp2(11731);
          } else {
            redditMetadataItems = [];
            if (tmp6.TIKTOK === type) {
              redditMetadataItems = tmp2(11731).generateTikTokMetadataItems(metadata);
              const tmp2Result9 = tmp2(11731);
            }
          }
        }
      }
    }
    redditMetadataItems = tmp2(11731).generateTwitterMetadataItems(metadata);
    const tmp2Result10 = tmp2(11731);
  }
  if (null !== createdAtDate) {
    let obj = { variant: "text-xs/normal", color: "interactive-text-default", children: null };
    const intl = tmp2(1119).intl;
    const obj3 = { date: createdAtDate };
    obj.children = intl.format(tmp2(1119).t["9rfonh"], obj3);
    redditMetadataItems.push(closure_16(tmp2(4786).Text, obj, MetadataFields.CREATED_AT));
  }
  let intl2 = self.state.metadataRefreshing || self.state.metadataAlreadyRefreshed;
  function handleRefresh() {
    self.setState({ metadataRefreshing: true });
    ConnectedAccountsActionCreatorsDefault.refresh(account.type, account.id).finally(() => {
      const timerId = setTimeout(() => {
        state.setState({ metadataRefreshing: false, metadataAlreadyRefreshed: true });
      }, 2000);
    });
  }
  if (0 === redditMetadataItems.length) {
    value = self(5534).get(account.type);
    let hasMetadata;
    if (value != null) {
      hasMetadata = value.hasMetadata;
    }
    if (true !== hasMetadata) {
      return null;
    } else {
      const obj4 = { style: null, children: null };
      const items = [, ];
      ({ metadataContainer: arr4[0], metadataBannerContainer: arr4[1] } = tmp);
      obj4.style = items;
      const obj5 = { text: null, style: null };
      const intl4 = tmp2(1119).intl;
      obj5.text = intl4.string(tmp2(1119).t.y2b7CA);
      obj5.style = tmp.newBadge;
      const items1 = [closure_16(tmp2(1181).TextBadge, obj5), , , , ];
      const obj6 = { variant: "text-xs/normal", children: null };
      const intl5 = tmp2(1119).intl;
      obj6.children = intl5.string(tmp2(1119).t.eH16Gn);
      items1[1] = closure_16(tmp2(4786).Text, obj6);
      const obj7 = { style: tmp.rowDivider };
      items1[2] = closure_16(View, obj7);
      let obj8 = { style: tmp.addDetailsButton, children: null };
      let string = tmp2(5220).Button;
      const intl6 = tmp2(1119).intl;
      const string2 = intl6.string;
      let Button = tmp2(1119).t;
      if (self.state.metadataAlreadyRefreshed) {
        let string2Result = string2(Button.i4jeWR);
      } else {
        string2Result = string2(Button["LVh3/5"]);
      }
      const obj9 = { text: string2Result, size: "sm", onPress: handleRefresh, disabled: intl2 };
      obj8.children = closure_16(string, obj9);
      items1[3] = closure_16(View, obj8);
      const obj10 = { style: tmp.learnMoreButton, children: null };
      Button = tmp2(5220).Button;
      const obj11 = { text: null, variant: "secondary", size: "sm", onPress: null };
      intl2 = tmp2(1119).intl;
      string = intl2.string;
      stringResult = string(tmp2(1119).t["8O0mlf"]);
      obj11.text = stringResult;
      obj11.onPress = function onPress() {
        const obj = self(4487);
        return obj.openURL(self(2112).getArticleURL(constants.CONNECTION_DETAILS));
      };
      tmp = tmp23(Button, obj11);
      obj10.children = tmp;
      obj8 = tmp23(tmp22, obj10);
      items1[4] = obj8;
      obj4.children = items1;
      closure_17(View, obj4);
    }
    const obj13 = self(5534);
  } else {
    const obj12 = { accessibilityRole: "button", accessibilityLabel: null, hitSlop: null, onPress: null, disabled: null, style: null, children: null };
    const intl3 = tmp2(1119).intl;
    obj12.accessibilityLabel = intl3.string(tmp2(1119).t.wzzjk9);
    obj12.hitSlop = { top: 8, right: 8, bottom: 8, left: 8 };
    obj12.onPress = handleRefresh;
    obj12.disabled = intl2;
    const items2 = [tmp.metadataRefreshButton, ];
    let metadataRefreshButtonDisabled = intl2;
    if (intl2) {
      metadataRefreshButtonDisabled = tmp.metadataRefreshButtonDisabled;
    }
    items2[1] = metadataRefreshButtonDisabled;
    obj12.style = items2;
    const obj14 = { style: tmp.metadataRefreshIcon, size: tmp2(1181).Icon.Sizes.SMALL, source: null };
    if (self.state.metadataAlreadyRefreshed) {
      let tmp9Result = tmp9(10986);
    } else {
      tmp9Result = tmp9(15247);
    }
    obj14.source = tmp9Result;
    obj12.children = closure_16(tmp2(1181).Icon, obj14);
    const obj15 = { style: tmp.metadataContainer, children: null };
    const obj16 = { style: tmp.metadataItemsContainer, children: redditMetadataItems };
    const items3 = [closure_16(View, obj16), closure_16(tmp2(5373).PressableOpacity, obj12)];
    obj15.children = items3;
    return closure_17(View, obj15);
  }
};
prototype["renderFriendSyncCheckRow"] = function renderFriendSyncCheckRow() {
  let tmp2 = null;
  if (set.has(obj.get(this.props.account.type).type)) {
    const obj2 = { label: null, value: null, onValueChange: null };
    const intl = util.intl;
    obj2.label = intl.string(util.t["+KCMSi"]);
    obj2.value = this.state.friendSync;
    obj2.onValueChange = this.handleFriendSyncChange;
    tmp2 = value2(closure_20, obj2);
  }
  return tmp2;
};
prototype["renderActivityCheckRow"] = function renderActivityCheckRow() {
  value = PlatformsDefault.get(this.props.account.type);
  let tmp3 = null;
  if (set2.has(value.type)) {
    const obj2 = { label: null, value: null, onValueChange: null };
    const intl = util.intl;
    const obj3 = { platform: value.name };
    obj2.label = intl.formatToPlainString(util.t["6u6J0q"], obj3);
    obj2.value = this.state.showActivity;
    obj2.onValueChange = this.handleShowActivityChange;
    tmp3 = value2(closure_20, obj2);
  }
  return tmp3;
};
prototype["renderIntegrationsRow"] = function renderIntegrationsRow() {
  const tmp = legacyClassComponentStyles(this.context);
  const account = this.props.account;
  let tmp2 = null;
  if (account.integrations.length > 0) {
    tmp2 = null;
    if (!account.revoked) {
      const obj = { children: null };
      const obj2 = { style: tmp.divider };
      const items = [value2(View, obj2), ];
      const obj3 = { style: { paddingHorizontal: 16, paddingVertical: 8 }, children: null };
      const obj4 = { style: tmp.integrationCategoryLabel, variant: "eyebrow", color: "mobile-text-heading-primary", children: null };
      const intl = util.intl;
      obj4.children = intl.string(util.t.fOe3fZ);
      const items1 = [value2(Text_Text.Text, obj4), ];
      const integrations = account.integrations;
      items1[1] = integrations.map((integration) => closure_1_16(closure_1_19, { integration }, integration.id));
      obj3.children = items1;
      items[1] = constants(View, obj3);
      obj.children = items;
      tmp2 = constants(View, obj);
    }
  }
  return tmp2;
};
prototype["render"] = function render() {
  const self = this;
  const tmp = legacyClassComponentStyles(this.context);
  const props = this.props;
  const account = props.account;
  value = PlatformsDefault.get(account.type);
  const migrationData = value.migrationData;
  let migrationExperimentEnabled;
  if (migrationData != null) {
    migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("User Settings Connections Mobile");
  }
  if (migrationExperimentEnabled) {
    const intl = util.intl;
    const obj2 = { platformName: account.name };
    let name = intl.format(tmp2(3134).Glhokn, obj2);
  } else {
    name = account.name;
  }
  const obj3 = { accessible: true, accessibilityLabel: value.name, style: tmp.platformIcon, size: native2.Icon.Sizes.LARGE, source: null, disableColor: true };
  const obj4 = AvatarUtils;
  const icon = value.icon;
  obj3.source = obj4.makeSource(shared.isThemeDark(props.theme) ? icon.darkPNG : icon.lightPNG);
  const obj6 = { spacing: 8, direction: "horizontal", align: "center", children: null };
  const obj7 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, children: null };
  const intl2 = tmp8(1119).intl;
  obj7.accessibilityLabel = intl2.string(util.t["DT39A+"]);
  obj7.onPress = self.handleDisconnect;
  obj7.hitSlop = { top: 5, left: 5, bottom: 5, right: 5 };
  const tmp7Result = value2(native2.Icon, obj3);
  obj7.children = value2(native2.Icon, { style: tmp.deleteConnectionIcon, source: _modDef7270 });
  obj6.children = value2(Pressables.PressableOpacity, obj7);
  const obj8 = { style: tmp.deleteConnectionIcon, source: _modDef7270 };
  const result = self.renderIntegrationsRow();
  const result1 = self.renderFriendSyncCheckRow();
  const result2 = self.renderActivityCheckRow();
  const result3 = self.renderMetadataVisibilityCheckRow();
  const obj9 = { style: tmp.container, children: null };
  const obj10 = { style: tmp.connectedAccountItem, children: null };
  const obj11 = { style: tmp.connectedAccountTopContainer, children: null };
  const result4 = self.renderVisibilityCheckRow();
  obj11.children = value2(TableRow.TableRow, { label: name, icon: tmp7Result, trailing: value2(Stack_Stack.Stack, obj6) });
  const items = [value2(View, obj11), ];
  const obj12 = { style: tmp.connectedAccountContentContainer, children: null };
  const items1 = [self.renderUpsell(), self.renderMetadata(), , ];
  const obj13 = { hasIcons: false, children: null };
  const items2 = [result4, result3, result2, result1];
  obj13.children = items2;
  items1[2] = constants(TableRowGroup.TableRowGroup, obj13);
  items1[3] = result;
  obj12.children = items1;
  items[1] = constants(View, obj12);
  obj10.children = items;
  obj9.children = constants(View, obj10);
  return value2(View, obj9);
};
ConnectedAccount.contextType = fn(4503).ThemeContext;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/connections/native/ConnectedAccount.tsx");

export default ConnectedAccount;
export const readStyles = legacyClassComponentStyles;
