// Module ID: 13917
// Function ID: 106465
// Name: _isNativeReflectConstruct
// Dependencies: [5, 6, 7, 15, 17, 18, 57, 31, 27, 4812, 1838, 653, 4940, 33, 4130, 1273, 689, 5052, 4938, 566, 4543, 1212, 4126, 5513, 4814, 5502, 13918, 8258, 4470, 4561, 9009, 13919, 13922, 4939, 10033, 3827, 1920, 4660, 9704, 13924, 2748, 1392, 3976, 4541, 7696, 5165, 5501, 3842, 2]

// Module 13917 (_isNativeReflectConstruct)
import _inherits from "_inherits";
import _slicedToArray from "_slicedToArray";
import result from "result";
import closure_6 from "Button";
import createTextStyle from "createTextStyle";
import callback from "callback";
import closure_9 from "_slicedToArray";
import importAllResult from "XboxTwoWayLinkUpsell";
import { View } from "InfoBox";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_13 from "_createForOfIteratorHelperLoose";
import ME from "ME";
import { MetadataFields } from "OperatorTypes";
import jsxProd from "officialApplicationIds";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import Button from "Button";
import importDefaultResult from "createTextStyle";

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_19;
let closure_20;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function Integration(integration) {
  integration = integration.integration;
  let obj = integration(4130);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
  const tmp2 = callback3(importAllResult.useState(), 2);
  const importDefault = tmp2[1];
  let obj1 = integration(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [integration.id];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_12.isJoining(integration.id), items1);
  let obj2 = integration(566);
  const items2 = [closure_13];
  const items3 = [integration.guild.id];
  if (tmp4) {
    let tmp15 = tmp2[0] === integration.id;
    if (tmp15) {
      obj = { style: legacyClassComponentStyles.integrationErrorText, variant: "text-sm/medium", color: "text-feedback-critical" };
      const intl2 = integration(1212).intl;
      obj.children = intl2.string(integration(1212).t.fEptJP);
      tmp15 = callback4(integration(4126).Text, obj);
    }
    obj = { style: legacyClassComponentStyles.integrationContainer };
    obj1 = { style: legacyClassComponentStyles.integrationContainerInternal };
    obj2 = { guild: integration.guild, size: integration(5513).GuildIconSizes.SMALL, style: legacyClassComponentStyles.integrationGuildIcon };
    const items4 = [callback4(importDefault(5513), obj2), , ];
    const obj3 = { style: legacyClassComponentStyles.integrationTextRowContainer };
    const obj4 = { lineClamp: 1, variant: "text-sm/medium", children: integration.guild.name };
    const items5 = [callback4(integration(4126).Text, obj4), ];
    const obj5 = { lineClamp: 1, variant: "text-xs/medium", color: "text-muted" };
    const tmp19 = closure_20;
    const tmp20 = View;
    const tmp21 = closure_20;
    const tmp22 = View;
    const tmp26 = importDefault(5513);
    const tmp28 = closure_20;
    const tmp29 = View;
    const tmp31 = callback4;
    const value = importDefault(4814).get(integration.type);
    let platformUserUrl;
    if (null != value) {
      if (null != value.getPlatformUserUrl) {
        platformUserUrl = value.getPlatformUserUrl(integration.account);
      }
    }
    obj5.children = platformUserUrl;
    items5[1] = tmp31(integration(4126).Text, obj5);
    obj3.children = items5;
    items4[1] = tmp28(tmp29, obj3);
    items4[2] = tmp5;
    obj1.children = items4;
    const items6 = [tmp21(tmp22, obj1), tmp15];
    obj.children = items6;
    return tmp19(tmp20, obj);
  } else {
    const obj6 = { style: legacyClassComponentStyles.integrationJoinButton };
    let obj7 = {
      size: "sm",
      variant: "secondary",
      onPress() {
          callback(outer1_2[18]).joinServer(integration.id, () => {
            outer1_1(outer1_0.id);
          });
        },
      disabled: stateFromStores
    };
    const intl = integration(1212).intl;
    const string = intl.string;
    let RXvQQu = integration(1212).t;
    if (stateFromStores) {
      RXvQQu = RXvQQu.RXvQQu;
      let stringResult = string(RXvQQu);
    } else {
      stringResult = string(RXvQQu.XpeFYr);
    }
    obj7.text = stringResult;
    obj7 = callback4(integration(4543).Button, obj7);
    obj6.children = obj7;
    callback4(View, obj6);
    const tmp6 = callback4;
    const tmp7 = View;
    const tmp8 = callback4;
  }
}
function RowSwitch(label) {
  let obj = Object.create(null);
  obj.label = 0;
  const merged = Object.assign(label, obj);
  obj = { label: label.label };
  const merged1 = Object.assign(merged);
  return callback4(require(5502) /* TableSwitchRow */.TableSwitchRow, obj);
}
({ FRIEND_SYNC_PLATFORM_TYPES: closure_14, ACTIVITY_PLATFORM_TYPES: closure_15, PlatformTypes: closure_16, HelpdeskArticles: closure_17 } = ME);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
_createForOfIteratorHelperLoose = { platformIcon: { marginRight: 4 } };
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose.borderRadius = Button.getIconSize(require("Button").Icon.Sizes.LARGE);
_createForOfIteratorHelperLoose.marginRight = 4;
_createForOfIteratorHelperLoose.connectedApplicationIdentityIcon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.deleteConnectionIcon = { marginRight: 10, tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.container = { marginHorizontal: 8, marginVertical: 4 };
let obj1 = { marginRight: 10, tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.connectedAccountItem = { borderRadius: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_BORDER_RADIUS, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden" };
Button = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGHEST, borderTopLeftRadius: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_BORDER_RADIUS, borderTopRightRadius: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_BORDER_RADIUS };
_createForOfIteratorHelperLoose.connectedAccountTopContainer = Button;
_createForOfIteratorHelperLoose.connectedAccountContentContainer = { marginTop: 8, gap: 8 };
let obj4 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL, marginTop: 12, paddingVertical: 4, borderRadius: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_BORDER_RADIUS, flexDirection: "column", alignItems: "center" };
_createForOfIteratorHelperLoose.integrationContainer = obj4;
_createForOfIteratorHelperLoose.integrationContainerInternal = { alignItems: "center", flexDirection: "row" };
_createForOfIteratorHelperLoose.integrationTextRowContainer = { alignItems: "flex-start", flexDirection: "column", flex: 1 };
_createForOfIteratorHelperLoose.integrationErrorText = { alignItems: "center", marginTop: 4, marginBottom: 8 };
_createForOfIteratorHelperLoose.integrationCategoryLabel = { marginVertical: 0 };
_createForOfIteratorHelperLoose.integrationGuildIcon = { margin: 8 };
_createForOfIteratorHelperLoose.integrationJoinButton = { alignSelf: "center", marginEnd: 8, marginStart: 8 };
let obj5 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, height: 1, marginVertical: 8, marginHorizontal: 16 };
_createForOfIteratorHelperLoose.divider = obj5;
_createForOfIteratorHelperLoose.alertInfoBox = { marginTop: 8 };
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_BORDER_RADIUS, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden" };
let obj6 = { marginTop: 16 };
let merged = Object.assign(require("createTextStyle")(ME.Fonts.PRIMARY_MEDIUM, require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, 16));
_createForOfIteratorHelperLoose.alertBodyText = obj6;
let obj7 = { display: "flex", flexDirection: "row", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, padding: 8, marginLeft: 16, marginRight: 16 };
_createForOfIteratorHelperLoose.metadataContainer = obj7;
_createForOfIteratorHelperLoose.metadataItemsContainer = { display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", alignContent: "flex-start", paddingRight: 8, flexShrink: 1 };
_createForOfIteratorHelperLoose.metadataRefreshButton = { alignSelf: "center", marginLeft: "auto" };
_createForOfIteratorHelperLoose.metadataRefreshButtonDisabled = { opacity: 0.5 };
_createForOfIteratorHelperLoose.metadataRefreshIcon = { height: 16, width: 16 };
_createForOfIteratorHelperLoose.metadataBannerContainer = { justifyContent: "center", flexWrap: "wrap", alignItems: "center", paddingHorizontal: 16, paddingVertical: 14 };
_createForOfIteratorHelperLoose.newBadge = { marginRight: 4 };
_createForOfIteratorHelperLoose.rowDivider = { flexBasis: "100%", height: 12 };
_createForOfIteratorHelperLoose.addDetailsButton = { paddingHorizontal: 16, flexGrow: 0, marginRight: 12 };
_createForOfIteratorHelperLoose.learnMoreButton = { paddingHorizontal: 16, flexGrow: 0 };
let obj8 = { paddingVertical: 8, paddingHorizontal: 12, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.relinkButton = obj8;
_createForOfIteratorHelperLoose.relinkText = { marginTop: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
let tmp8 = ((PureComponent) => {
  class ConnectedAccount {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_4(this, apply);
      items1 = [...items];
      obj = outer1_7(apply);
      tmp2 = outer1_6;
      if (outer1_22()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_7;
        constructResult = Reflect.construct(obj, items1, outer1_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      obj = { isVisible: 1 === tmp2Result.props.account.visibility, isMetadataVisible: 1 === tmp2Result.props.account.metadataVisibility, inProgressVisibility: null, inProgressMetadataVisibility: null, showActivity: tmp2Result.props.account.showActivity, friendSync: tmp2Result.props.account.friendSync, metadataRefreshing: false, metadataAlreadyRefreshed: false };
      tmp2Result.state = obj;
      tmp2Result.handleDisconnect = () => {
        const tmp = outer2_21(tmp2Result.context);
        const account = tmp2Result.props.account;
        let obj = outer2_1(outer2_2[24]);
        const value = obj.get(account.type);
        const intl = ConnectedAccount(outer2_2[21]).intl;
        obj = { provider: value.name };
        const formatResult = intl.format(ConnectedAccount(outer2_2[21]).t.VgqIPj, obj);
        let tmp4;
        if (outer2_1(outer2_2[26])(account)) {
          obj = {};
          const obj1 = { style: tmp.alertBodyText, variant: "text-md/medium", children: formatResult };
          const items = [outer2_19(ConnectedAccount(outer2_2[22]).Text, obj1), ];
          const obj2 = { style: tmp.alertInfoBox };
          const intl2 = ConnectedAccount(outer2_2[21]).intl;
          const obj3 = { platformName: value.name };
          obj2.children = intl2.format(ConnectedAccount(outer2_2[21]).t.COW3Xn, obj3);
          items[1] = outer2_19(outer2_1(outer2_2[27]), obj2);
          obj.children = items;
          tmp4 = outer2_20(outer2_11, obj);
          const tmp12 = outer2_1(outer2_2[27]);
        }
        const obj4 = {};
        const intl3 = ConnectedAccount(outer2_2[21]).intl;
        obj4.title = intl3.formatToPlainString(ConnectedAccount(outer2_2[21]).t.U5x12f, { name: value.name });
        obj4.body = formatResult;
        const intl4 = ConnectedAccount(outer2_2[21]).intl;
        obj4.cancelText = intl4.string(ConnectedAccount(outer2_2[21]).t["ETE/oC"]);
        obj4.children = tmp4;
        const intl5 = ConnectedAccount(outer2_2[21]).intl;
        obj4.confirmText = intl5.string(ConnectedAccount(outer2_2[21]).t.ppppRJ);
        obj4.onConfirm = tmp2Result.handleConfirmDisconnectAccount;
        obj4.confirmColor = outer2_1(outer2_2[29]).Colors.RED;
        outer2_1(outer2_2[28]).show(obj4);
      };
      tmp2Result.handleConfirmDisconnectAccount = () => {
        const account = tmp2Result.props.account;
        outer2_1(outer2_2[18]).disconnect(account.type, account.id);
      };
      tmp2Result.handleVisibilityChange = (() => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = outer2_3(tmp);
        return function() {
          return callback(...arguments);
        };
      })();
      tmp2Result.handleMetadataVisibilityChange = (() => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = outer2_3(tmp);
        return function() {
          return callback(...arguments);
        };
      })();
      tmp2Result.handleFriendSyncChange = (() => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = outer2_3(tmp);
        return function() {
          return callback(...arguments);
        };
      })();
      tmp2Result.handleShowActivityChange = (() => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = outer2_3(tmp);
        return function() {
          return callback(...arguments);
        };
      })();
      return tmp2Result;
    }
  }
  callback2(ConnectedAccount, PureComponent);
  let obj = {
    key: "componentDidUpdate",
    value(account) {
      let inProgressMetadataVisibility;
      let inProgressVisibility;
      const self = this;
      account = this.props.account;
      if (account.account !== account) {
        let obj = {};
        const merged = Object.assign(self.state);
        obj["isVisible"] = 1 === account.visibility;
        obj["isMetadataVisible"] = 1 === account.metadataVisibility;
        obj["showActivity"] = account.showActivity;
        obj["friendSync"] = account.friendSync;
        if (account.verified) {
          ({ inProgressVisibility, inProgressMetadataVisibility } = self.state);
          if (null != inProgressVisibility) {
            obj.isVisible = 1 === inProgressVisibility;
            obj.inProgressVisibility = null;
            obj = outer1_1(outer1_2[18]);
            obj.setVisibility(account.type, account.id, inProgressVisibility);
          }
          if (null != inProgressMetadataVisibility) {
            obj.isMetadataVisible = 1 === inProgressMetadataVisibility;
            obj.inProgressMetadataVisibility = null;
            const result = outer1_1(outer1_2[18]).setMetadataVisibility(account.type, account.id, inProgressMetadataVisibility);
            const obj2 = outer1_1(outer1_2[18]);
          }
        }
        self.setState(obj);
      }
    }
  };
  let items = [obj, , , , , , , , ];
  obj = {
    key: "renderUpsell",
    value() {
      const account = this.props.account;
      if (account.twoWayLink) {
        return null;
      } else if (account.type === outer1_16.XBOX) {
        let tmp3 = outer1_19(ConnectedAccount(outer1_2[31]).XboxTwoWayLinkUpsell, {});
      } else {
        tmp3 = null;
        if (account.type === outer1_16.PLAYSTATION) {
          tmp3 = outer1_19(ConnectedAccount(outer1_2[32]).PlayStationTwoWayLinkUpsell, {});
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "renderVisibilityCheckRow",
    value() {
      const obj = {};
      const intl = ConnectedAccount(outer1_2[21]).intl;
      obj.label = intl.string(ConnectedAccount(outer1_2[21]).t.f7yOAX);
      obj.value = this.state.isVisible;
      obj.onValueChange = this.handleVisibilityChange;
      return outer1_19(outer1_24, obj);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "renderMetadataVisibilityCheckRow",
    value() {
      let isMetadataVisible;
      let isVisible;
      const self = this;
      let obj = outer1_1(outer1_2[24]);
      const value = obj.get(this.props.account.type);
      let hasMetadata;
      if (null != value) {
        hasMetadata = value.hasMetadata;
      }
      if (true !== hasMetadata) {
        return null;
      } else {
        obj = {};
        ({ isMetadataVisible, isVisible } = self.state);
        const intl = ConnectedAccount(outer1_2[21]).intl;
        obj.label = intl.string(ConnectedAccount(outer1_2[21]).t.FYKGsL);
        obj.value = isMetadataVisible;
        obj.disabled = !isVisible;
        obj.onValueChange = self.handleMetadataVisibilityChange;
        return outer1_19(outer1_24, obj);
      }
    }
  };
  items[4] = {
    key: "renderMetadata",
    value() {
      let self = this;
      self = this;
      let tmp = outer1_21(this.context);
      const props = this.props;
      const account = props.account;
      let metadata = account.metadata;
      if (null == metadata) {
        metadata = {};
      }
      let items = [];
      let obj1 = ConnectedAccount(outer1_2[33]);
      const createdAtDate = obj1.getCreatedAtDate(metadata[outer1_18.CREATED_AT], props.locale);
      const type = account.type;
      if (outer1_16.REDDIT === type) {
        let obj6 = ConnectedAccount(outer1_2[34]);
        items = obj6.generateRedditMetadataItems(metadata);
      } else if (outer1_16.STEAM === type) {
        let obj5 = ConnectedAccount(outer1_2[34]);
        items = obj5.generateSteamMetadataItems(metadata);
      } else {
        if (outer1_16.BLUESKY !== type) {
          if (outer1_16.TWITTER !== type) {
            if (outer1_16.MASTODON !== type) {
              if (outer1_16.EBAY === type) {
                let obj3 = ConnectedAccount(outer1_2[34]);
                items = obj3.generateEbayMetadataItems(metadata);
              } else if (outer1_16.PAYPAL === type) {
                let obj2 = ConnectedAccount(outer1_2[34]);
                items = obj2.generatePaypalMetadataItems(metadata);
              } else if (outer1_16.TIKTOK === type) {
                items = ConnectedAccount(outer1_2[34]).generateTikTokMetadataItems(metadata);
                const obj16 = ConnectedAccount(outer1_2[34]);
              }
            }
          }
        }
        let obj4 = ConnectedAccount(outer1_2[34]);
        items = obj4.generateTwitterMetadataItems(metadata);
      }
      if (null !== createdAtDate) {
        let obj = { variant: "text-xs/normal", color: "interactive-text-default" };
        const intl2 = ConnectedAccount(outer1_2[21]).intl;
        obj = { date: createdAtDate };
        obj.children = intl2.format(ConnectedAccount(outer1_2[21]).t["9rfonh"], obj);
        items.push(outer1_19(ConnectedAccount(outer1_2[22]).Text, obj, outer1_18.CREATED_AT));
      }
      function handleRefresh() {
        self.setState({ metadataRefreshing: true });
        const obj = outer2_1(outer2_2[18]);
        outer2_1(outer2_2[18]).refresh(account.type, account.id).finally(() => {
          const timerId = setTimeout(() => {
            outer2_0.setState({ metadataRefreshing: false, metadataAlreadyRefreshed: true });
          }, 2000);
        });
      }
      let tmp15 = self.state.metadataRefreshing || self.state.metadataAlreadyRefreshed;
      if (0 === items.length) {
        let obj10 = outer1_1(outer1_2[24]);
        const value = obj10.get(account.type);
        let hasMetadata;
        if (null != value) {
          hasMetadata = value.hasMetadata;
        }
        if (true !== hasMetadata) {
          return null;
        } else {
          obj1 = {};
          const items1 = [, ];
          ({ metadataContainer: arr4[0], metadataBannerContainer: arr4[1] } = tmp);
          obj1.style = items1;
          obj2 = {};
          const intl4 = ConnectedAccount(outer1_2[21]).intl;
          obj2.text = intl4.string(ConnectedAccount(outer1_2[21]).t.y2b7CA);
          obj2.style = tmp.newBadge;
          const items2 = [outer1_19(ConnectedAccount(outer1_2[15]).TextBadge, obj2), , , , ];
          obj3 = { variant: "text-xs/normal" };
          const intl5 = ConnectedAccount(outer1_2[21]).intl;
          obj3.children = intl5.string(ConnectedAccount(outer1_2[21]).t.eH16Gn);
          items2[1] = outer1_19(ConnectedAccount(outer1_2[22]).Text, obj3);
          obj4 = { style: tmp.rowDivider };
          items2[2] = outer1_19(outer1_11, obj4);
          let tmp33 = outer1_19;
          let tmp34 = outer1_11;
          obj5 = { style: tmp.addDetailsButton };
          let intl = outer1_19;
          let num10 = 20;
          let string = ConnectedAccount(outer1_2[20]).Button;
          obj6 = {};
          const intl6 = ConnectedAccount(outer1_2[21]).intl;
          const string2 = intl6.string;
          let i4jeWR = ConnectedAccount(outer1_2[21]).t;
          if (self.state.metadataAlreadyRefreshed) {
            i4jeWR = i4jeWR.i4jeWR;
            let string2Result = string2(i4jeWR);
          } else {
            string2Result = string2(i4jeWR["LVh3/5"]);
          }
          obj6.text = string2Result;
          obj6.size = "sm";
          obj6.onPress = handleRefresh;
          obj6.disabled = tmp15;
          obj5.children = intl(string, obj6);
          items2[3] = tmp33(tmp34, obj5);
          tmp33 = outer1_19;
          tmp34 = outer1_11;
          const obj7 = { style: tmp.learnMoreButton };
          tmp = outer1_19;
          tmp15 = ConnectedAccount;
          const obj8 = { text: null, variant: "secondary", size: "sm" };
          intl = ConnectedAccount(outer1_2[21]).intl;
          string = intl.string;
          obj6 = string(ConnectedAccount(outer1_2[21]).t["8O0mlf"]);
          obj8.text = obj6;
          obj8.onPress = function onPress() {
            const obj = outer2_1(outer2_2[35]);
            return obj.openURL(outer2_1(outer2_2[36]).getArticleURL(outer2_17.CONNECTION_DETAILS));
          };
          num10 = outer1_19(ConnectedAccount(outer1_2[num10]).Button, obj8);
          obj7.children = num10;
          obj5 = outer1_19(outer1_11, obj7);
          items2[4] = obj5;
          obj1.children = items2;
          outer1_20(outer1_11, obj1);
          const tmp52 = outer1_20;
          const tmp53 = outer1_11;
        }
      } else {
        const obj9 = { accessibilityRole: "button" };
        const intl3 = ConnectedAccount(outer1_2[21]).intl;
        obj9.accessibilityLabel = intl3.string(ConnectedAccount(outer1_2[21]).t.wzzjk9);
        obj9.hitSlop = { top: 8, right: 8, bottom: 8, left: 8 };
        obj9.onPress = handleRefresh;
        obj9.disabled = tmp15;
        const items3 = [tmp.metadataRefreshButton, ];
        let metadataRefreshButtonDisabled = tmp15;
        if (tmp15) {
          metadataRefreshButtonDisabled = tmp.metadataRefreshButtonDisabled;
        }
        items3[1] = metadataRefreshButtonDisabled;
        obj9.style = items3;
        obj10 = { style: tmp.metadataRefreshIcon, size: ConnectedAccount(outer1_2[15]).Icon.Sizes.SMALL };
        if (self.state.metadataAlreadyRefreshed) {
          let tmp19Result = tmp19(tmp20[38]);
        } else {
          tmp19Result = tmp19(tmp20[39]);
        }
        obj10.source = tmp19Result;
        obj9.children = outer1_19(ConnectedAccount(outer1_2[15]).Icon, obj10);
        const obj11 = { style: tmp.metadataContainer };
        const obj12 = { style: tmp.metadataItemsContainer, children: items };
        const items4 = [outer1_19(outer1_11, obj12), outer1_19(ConnectedAccount(outer1_2[37]).PressableOpacity, obj9)];
        obj11.children = items4;
        return outer1_20(outer1_11, obj11);
      }
    }
  };
  items[5] = {
    key: "renderFriendSyncCheckRow",
    value() {
      let obj = outer1_1(outer1_2[24]);
      let tmp = null;
      if (outer1_14.has(obj.get(this.props.account.type).type)) {
        obj = {};
        const intl = ConnectedAccount(outer1_2[21]).intl;
        obj.label = intl.string(ConnectedAccount(outer1_2[21]).t["+KCMSi"]);
        obj.value = this.state.friendSync;
        obj.onValueChange = this.handleFriendSyncChange;
        tmp = outer1_19(outer1_24, obj);
      }
      return tmp;
    }
  };
  items[6] = {
    key: "renderActivityCheckRow",
    value() {
      let obj = outer1_1(outer1_2[24]);
      const value = obj.get(this.props.account.type);
      let tmp2 = null;
      if (outer1_15.has(value.type)) {
        obj = {};
        const intl = ConnectedAccount(outer1_2[21]).intl;
        obj = { platform: value.name };
        obj.label = intl.formatToPlainString(ConnectedAccount(outer1_2[21]).t["6u6J0q"], obj);
        obj.value = this.state.showActivity;
        obj.onValueChange = this.handleShowActivityChange;
        tmp2 = outer1_19(outer1_24, obj);
      }
      return tmp2;
    }
  };
  items[7] = {
    key: "renderIntegrationsRow",
    value() {
      const tmp = outer1_21(this.context);
      const account = this.props.account;
      let tmp2 = null;
      if (account.integrations.length > 0) {
        tmp2 = null;
        if (!account.revoked) {
          let obj = {};
          obj = { style: tmp.divider };
          const items = [outer1_19(outer1_11, obj), ];
          obj = { style: { paddingHorizontal: 16, paddingVertical: 8 } };
          const obj1 = { style: tmp.integrationCategoryLabel, variant: "eyebrow", color: "mobile-text-heading-primary" };
          const intl = ConnectedAccount(outer1_2[21]).intl;
          obj1.children = intl.string(ConnectedAccount(outer1_2[21]).t.fOe3fZ);
          const items1 = [outer1_19(ConnectedAccount(outer1_2[22]).Text, obj1), ];
          const integrations = account.integrations;
          items1[1] = integrations.map((id) => outer2_19(outer2_23, { integration: id }, id.id));
          obj.children = items1;
          items[1] = outer1_20(outer1_11, obj);
          obj.children = items;
          tmp2 = outer1_20(outer1_11, obj);
        }
      }
      return tmp2;
    }
  };
  items[8] = {
    key: "render",
    value() {
      const self = this;
      const tmp = outer1_21(this.context);
      const props = this.props;
      const account = props.account;
      let obj = outer1_1(outer1_2[24]);
      const value = obj.get(account.type);
      const migrationData = value.migrationData;
      if (null != migrationData) {
        if (migrationData.getMigrationExperimentEnabled("User Settings Connections Mobile")) {
          const intl = ConnectedAccount(outer1_2[21]).intl;
          obj = { platformName: account.name };
          let name = intl.format(outer1_1(outer1_2[40]).Glhokn, obj);
        }
        obj = { accessible: true, accessibilityLabel: value.name, style: tmp.platformIcon, size: ConnectedAccount(outer1_2[15]).Icon.Sizes.LARGE };
        let obj3 = ConnectedAccount(outer1_2[41]);
        let obj4 = ConnectedAccount(outer1_2[42]);
        const icon = value.icon;
        obj.source = obj3.makeSource(obj4.isThemeDark(props.theme) ? icon.darkPNG : icon.lightPNG);
        obj.disableColor = true;
        const obj1 = { spacing: 8, direction: "horizontal", align: "center" };
        const obj2 = { accessibilityRole: "button" };
        const intl2 = ConnectedAccount(outer1_2[21]).intl;
        obj2.accessibilityLabel = intl2.string(ConnectedAccount(outer1_2[21]).t["DT39A+"]);
        obj2.onPress = self.handleDisconnect;
        obj2.hitSlop = { top: 5, left: 5, bottom: 5, right: 5 };
        obj3 = { style: tmp.deleteConnectionIcon, source: outer1_1(outer1_2[44]) };
        obj2.children = outer1_19(ConnectedAccount(outer1_2[15]).Icon, obj3);
        obj1.children = outer1_19(ConnectedAccount(outer1_2[37]).PressableOpacity, obj2);
        const tmp6 = outer1_19;
        const tmp6Result = outer1_19(ConnectedAccount(outer1_2[15]).Icon, obj);
        const result = self.renderIntegrationsRow();
        const result1 = self.renderFriendSyncCheckRow();
        const result2 = self.renderActivityCheckRow();
        const result3 = self.renderMetadataVisibilityCheckRow();
        obj4 = { style: tmp.container };
        const obj5 = { style: tmp.connectedAccountItem };
        const obj6 = { style: tmp.connectedAccountTopContainer };
        const result4 = self.renderVisibilityCheckRow();
        const obj7 = { label: name, icon: tmp6Result, trailing: outer1_19(ConnectedAccount(outer1_2[43]).Stack, obj1) };
        obj6.children = outer1_19(ConnectedAccount(outer1_2[45]).TableRow, obj7);
        const items = [outer1_19(outer1_11, obj6), ];
        const obj8 = { style: tmp.connectedAccountContentContainer };
        const items1 = [self.renderUpsell(), self.renderMetadata(), , ];
        const obj9 = { hasIcons: false };
        const items2 = [result4, result3, result2, result1];
        obj9.children = items2;
        items1[2] = outer1_20(ConnectedAccount(outer1_2[46]).TableRowGroup, obj9);
        items1[3] = result;
        obj8.children = items1;
        items[1] = outer1_20(outer1_11, obj8);
        obj5.children = items;
        obj4.children = outer1_20(outer1_11, obj5);
        return outer1_19(outer1_11, obj4);
      }
      name = account.name;
    }
  };
  return callback(ConnectedAccount, items);
})(importAllResult.PureComponent);
tmp8.contextType = require("ManaContext").ThemeContext;
let result = require("_defineProperties").fileFinishedImporting("modules/user_settings/connections/native/ConnectedAccount.tsx");

export default tmp8;
export const readStyles = _createForOfIteratorHelperLoose;
