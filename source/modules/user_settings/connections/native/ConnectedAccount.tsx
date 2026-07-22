// Module ID: 13752
// Function ID: 103985
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13752 (_isNativeReflectConstruct)
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
  const arg1 = integration;
  let obj = arg1(dependencyMap[14]);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(legacyClassComponentStyles);
  const tmp2 = callback3(importAllResult.useState(), 2);
  const importDefault = tmp2[1];
  let obj1 = arg1(dependencyMap[19]);
  const items = [closure_12];
  const items1 = [integration.id];
  const stateFromStores = obj1.useStateFromStores(items, () => joining.isJoining(integration.id), items1);
  let obj2 = arg1(dependencyMap[19]);
  const items2 = [closure_13];
  const items3 = [integration.guild.id];
  if (tmp4) {
    let tmp15 = tmp2[0] === integration.id;
    if (tmp15) {
      obj = { "Null": "ars", "Null": "<string:1156272384>", alignItems: "AccountAgeTier9LargeBadge", style: legacyClassComponentStyles.integrationErrorText };
      const intl2 = arg1(dependencyMap[21]).intl;
      obj.children = intl2.string(arg1(dependencyMap[21]).t.fEptJP);
      tmp15 = callback4(arg1(dependencyMap[22]).Text, obj);
    }
    obj = { style: legacyClassComponentStyles.integrationContainer };
    obj1 = { style: legacyClassComponentStyles.integrationContainerInternal };
    obj2 = { guild: integration.guild, size: arg1(dependencyMap[23]).GuildIconSizes.SMALL, style: legacyClassComponentStyles.integrationGuildIcon };
    const items4 = [callback4(importDefault(dependencyMap[23]), obj2), , ];
    const obj3 = { style: legacyClassComponentStyles.integrationTextRowContainer };
    const obj4 = { children: integration.guild.name };
    const items5 = [callback4(arg1(dependencyMap[22]).Text, obj4), ];
    const obj5 = {};
    const tmp19 = closure_20;
    const tmp20 = View;
    const tmp21 = closure_20;
    const tmp22 = View;
    const tmp26 = importDefault(dependencyMap[23]);
    const tmp28 = closure_20;
    const tmp29 = View;
    const tmp31 = callback4;
    const value = importDefault(dependencyMap[24]).get(integration.type);
    let platformUserUrl;
    if (null != value) {
      if (null != value.getPlatformUserUrl) {
        platformUserUrl = value.getPlatformUserUrl(integration.account);
      }
    }
    obj5.children = platformUserUrl;
    items5[1] = tmp31(arg1(dependencyMap[22]).Text, obj5);
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
      onPress() {
          callback(closure_2[18]).joinServer(integration.id, () => {
            callback(id.id);
          });
        },
      disabled: stateFromStores
    };
    const intl = arg1(dependencyMap[21]).intl;
    const string = intl.string;
    let RXvQQu = arg1(dependencyMap[21]).t;
    if (stateFromStores) {
      RXvQQu = RXvQQu.RXvQQu;
      let stringResult = string(RXvQQu);
    } else {
      stringResult = string(RXvQQu.XpeFYr);
    }
    obj7.text = stringResult;
    obj7 = callback4(arg1(dependencyMap[20]).Button, obj7);
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
  return callback4(arg1(dependencyMap[25]).TableSwitchRow, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const importAllResult = importAll(dependencyMap[7]);
const View = arg1(dependencyMap[8]).View;
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
const tmp3 = arg1(dependencyMap[11]);
({ FRIEND_SYNC_PLATFORM_TYPES: closure_14, ACTIVITY_PLATFORM_TYPES: closure_15, PlatformTypes: closure_16, HelpdeskArticles: closure_17 } = tmp3);
const MetadataFields = arg1(dependencyMap[12]).MetadataFields;
({ jsx: closure_19, jsxs: closure_20 } = arg1(dependencyMap[13]));
let obj = arg1(dependencyMap[14]);
obj = { platformIcon: { marginRight: 4 } };
obj = {};
let obj3 = arg1(dependencyMap[15]);
obj.borderRadius = obj3.getIconSize(arg1(dependencyMap[15]).Icon.Sizes.LARGE);
obj.marginRight = 4;
obj.connectedApplicationIdentityIcon = obj;
const tmp4 = arg1(dependencyMap[13]);
obj.deleteConnectionIcon = { marginRight: 10, tintColor: importDefault(dependencyMap[16]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.container = { guildId: "Array", guildMemberAvatar: "isArray" };
const obj1 = { marginRight: 10, tintColor: importDefault(dependencyMap[16]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.connectedAccountItem = { borderRadius: importDefault(dependencyMap[16]).modules.mobile.TABLE_ROW_BORDER_RADIUS, backgroundColor: importDefault(dependencyMap[16]).colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden" };
obj3 = { backgroundColor: importDefault(dependencyMap[16]).colors.BACKGROUND_SURFACE_HIGHEST, borderTopLeftRadius: importDefault(dependencyMap[16]).modules.mobile.TABLE_ROW_BORDER_RADIUS, borderTopRightRadius: importDefault(dependencyMap[16]).modules.mobile.TABLE_ROW_BORDER_RADIUS };
obj.connectedAccountTopContainer = obj3;
obj.connectedAccountContentContainer = { hotel: 800, GiftingBadgeDesktopExperiment: 16 };
const obj2 = { borderRadius: importDefault(dependencyMap[16]).modules.mobile.TABLE_ROW_BORDER_RADIUS, backgroundColor: importDefault(dependencyMap[16]).colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden" };
obj.integrationContainer = { backgroundColor: importDefault(dependencyMap[16]).colors.BACKGROUND_MOD_NORMAL, borderRadius: importDefault(dependencyMap[16]).modules.mobile.TABLE_ROW_BORDER_RADIUS };
obj.integrationContainerInternal = { width: true, marginHorizontal: true };
obj.integrationTextRowContainer = { "Null": false, "Null": false, "Null": false };
obj.integrationErrorText = {};
obj.integrationCategoryLabel = { marginVertical: 0 };
obj.integrationGuildIcon = { margin: 8 };
obj.integrationJoinButton = { "Bool(false)": "L2", "Bool(false)": 1, "Bool(false)": 0 };
const obj5 = { <string:3890177015>: "50a11b05117d31e1ad224516819cbd87", <string:897799382>: "ic_clock", <string:1737456548>: "png", -3056305900156: true, backgroundColor: importDefault(dependencyMap[16]).colors.BORDER_SUBTLE };
obj.divider = obj5;
obj.alertInfoBox = { marginTop: 8 };
const obj4 = { backgroundColor: importDefault(dependencyMap[16]).colors.BACKGROUND_MOD_NORMAL, borderRadius: importDefault(dependencyMap[16]).modules.mobile.TABLE_ROW_BORDER_RADIUS };
const obj6 = { marginTop: 16 };
const merged = Object.assign(importDefault(dependencyMap[17])(tmp3.Fonts.PRIMARY_MEDIUM, importDefault(dependencyMap[16]).colors.TEXT_DEFAULT, 16));
obj.alertBodyText = obj6;
const obj7 = { -9223372036854775808: true, 9223372036854775807: true, 0: false, 0: false, -9223372036854775808: false, "Bool(false)": false, "Bool(false)": false, backgroundColor: importDefault(dependencyMap[16]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[16]).radii.xs };
obj.metadataContainer = obj7;
obj.metadataItemsContainer = { "Null": "SubscriptionIcon", "Null": "png", "Null": true, "Null": "/assets/design/components/Icon/native/redesign/generated/images", "Null": 24, "Null": 24, "Null": null };
obj.metadataRefreshButton = { -1252912056: "<string:2387738626>", 1635872382: "<string:1374549508>" };
obj.metadataRefreshButtonDisabled = { opacity: 0.5 };
obj.metadataRefreshIcon = { hideWhenScrolling: null, autoCapitalize: null };
obj.metadataBannerContainer = { createInGameMessageNuxSystemMessage: null, canCreateApplicationBypassInvites: null, suggestedGamesIds: null, pf: null, fetchApexExperimentsMetadata: 1093128785 };
obj.newBadge = { marginRight: 4 };
obj.rowDivider = {};
obj.addDetailsButton = {};
obj.learnMoreButton = { paddingVertical: "<string:855900161>", width: "<string:1902706689>" };
const obj8 = { "Bool(false)": null, "Bool(false)": null, borderRadius: importDefault(dependencyMap[16]).radii.round };
obj.relinkButton = obj8;
obj.relinkText = { marginTop: 8 };
const legacyClassComponentStyles = obj.createLegacyClassComponentStyles(obj);
const tmp8 = (PureComponent) => {
  class ConnectedAccount {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, ConnectedAccount);
      items1 = [...items];
      obj = closure_7(ConnectedAccount);
      tmp2 = closure_6;
      if (closure_22()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      ConnectedAccount = tmp2Result;
      obj = { isVisible: 1 === tmp2Result.props.account.visibility, isMetadataVisible: 1 === tmp2Result.props.account.metadataVisibility, inProgressVisibility: null, inProgressMetadataVisibility: null, showActivity: tmp2Result.props.account.showActivity, friendSync: tmp2Result.props.account.friendSync, metadataRefreshing: false, metadataAlreadyRefreshed: false };
      tmp2Result.state = obj;
      tmp2Result.handleDisconnect = () => {
        const tmp = callback5(tmp2Result.context);
        const account = tmp2Result.props.account;
        let obj = callback(closure_2[24]);
        const value = obj.get(account.type);
        const intl = tmp2Result(closure_2[21]).intl;
        obj = { provider: value.name };
        const formatResult = intl.format(tmp2Result(closure_2[21]).t.VgqIPj, obj);
        let tmp4;
        if (callback(closure_2[26])(account)) {
          obj = {};
          const obj1 = { style: tmp.alertBodyText, variant: "text-md/medium", children: formatResult };
          const items = [callback3(tmp2Result(closure_2[22]).Text, obj1), ];
          const obj2 = { style: tmp.alertInfoBox };
          const intl2 = tmp2Result(closure_2[21]).intl;
          const obj3 = { platformName: value.name };
          obj2.children = intl2.format(tmp2Result(closure_2[21]).t.COW3Xn, obj3);
          items[1] = callback3(callback(closure_2[27]), obj2);
          obj.children = items;
          tmp4 = callback4(closure_11, obj);
          const tmp12 = callback(closure_2[27]);
        }
        const obj4 = {};
        const intl3 = tmp2Result(closure_2[21]).intl;
        obj4.title = intl3.formatToPlainString(tmp2Result(closure_2[21]).t.U5x12f, { name: value.name });
        obj4.body = formatResult;
        const intl4 = tmp2Result(closure_2[21]).intl;
        obj4.cancelText = intl4.string(tmp2Result(closure_2[21]).t.ETE/oC);
        obj4.children = tmp4;
        const intl5 = tmp2Result(closure_2[21]).intl;
        obj4.confirmText = intl5.string(tmp2Result(closure_2[21]).t.ppppRJ);
        obj4.onConfirm = tmp2Result.handleConfirmDisconnectAccount;
        obj4.confirmColor = callback(closure_2[29]).Colors.RED;
        callback(closure_2[28]).show(obj4);
      };
      tmp2Result.handleConfirmDisconnectAccount = () => {
        const account = tmp2Result.props.account;
        callback(closure_2[18]).disconnect(account.type, account.id);
      };
      tmp2Result.handleVisibilityChange = () => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = callback2(tmp);
        return function() {
          return callback(...arguments);
        };
      }();
      tmp2Result.handleMetadataVisibilityChange = () => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = callback2(tmp);
        return function() {
          return callback(...arguments);
        };
      }();
      tmp2Result.handleFriendSyncChange = () => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = callback2(tmp);
        return function() {
          return callback(...arguments);
        };
      }();
      tmp2Result.handleShowActivityChange = () => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = callback2(tmp);
        return function() {
          return callback(...arguments);
        };
      }();
      return tmp2Result;
    }
  }
  const arg1 = ConnectedAccount;
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
            obj = callback(closure_2[18]);
            obj.setVisibility(account.type, account.id, inProgressVisibility);
          }
          if (null != inProgressMetadataVisibility) {
            obj.isMetadataVisible = 1 === inProgressMetadataVisibility;
            obj.inProgressMetadataVisibility = null;
            const result = callback(closure_2[18]).setMetadataVisibility(account.type, account.id, inProgressMetadataVisibility);
            const obj2 = callback(closure_2[18]);
          }
        }
        self.setState(obj);
      }
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "renderUpsell",
    value() {
      const account = this.props.account;
      if (account.twoWayLink) {
        return null;
      } else if (account.type === constants.XBOX) {
        let tmp3 = callback4(ConnectedAccount(closure_2[31]).XboxTwoWayLinkUpsell, {});
      } else {
        tmp3 = null;
        if (account.type === constants.PLAYSTATION) {
          tmp3 = callback4(ConnectedAccount(closure_2[32]).PlayStationTwoWayLinkUpsell, {});
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "renderVisibilityCheckRow",
    value() {
      const obj = {};
      const intl = ConnectedAccount(closure_2[21]).intl;
      obj.label = intl.string(ConnectedAccount(closure_2[21]).t.f7yOAX);
      obj.value = this.state.isVisible;
      obj.onValueChange = this.handleVisibilityChange;
      return callback4(closure_24, obj);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "renderMetadataVisibilityCheckRow",
    value() {
      let isMetadataVisible;
      let isVisible;
      const self = this;
      let obj = callback(closure_2[24]);
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
        const intl = ConnectedAccount(closure_2[21]).intl;
        obj.label = intl.string(ConnectedAccount(closure_2[21]).t.FYKGsL);
        obj.value = isMetadataVisible;
        obj.disabled = !isVisible;
        obj.onValueChange = self.handleMetadataVisibilityChange;
        return callback4(closure_24, obj);
      }
    }
  };
  items[4] = {
    key: "renderMetadata",
    value() {
      const self = this;
      const ConnectedAccount = this;
      let tmp = callback6(this.context);
      const props = this.props;
      const account = props.account;
      let metadata = account.metadata;
      if (null == metadata) {
        metadata = {};
      }
      let items = [];
      let obj1 = ConnectedAccount(closure_2[33]);
      const createdAtDate = obj1.getCreatedAtDate(metadata[closure_18.CREATED_AT], props.locale);
      const type = account.type;
      if (constants.REDDIT === type) {
        let obj6 = ConnectedAccount(closure_2[34]);
        items = obj6.generateRedditMetadataItems(metadata);
      } else if (constants.STEAM === type) {
        let obj5 = ConnectedAccount(closure_2[34]);
        items = obj5.generateSteamMetadataItems(metadata);
      } else {
        if (constants.BLUESKY !== type) {
          if (constants.TWITTER !== type) {
            if (constants.MASTODON !== type) {
              if (constants.EBAY === type) {
                let obj3 = ConnectedAccount(closure_2[34]);
                items = obj3.generateEbayMetadataItems(metadata);
              } else if (constants.PAYPAL === type) {
                let obj2 = ConnectedAccount(closure_2[34]);
                items = obj2.generatePaypalMetadataItems(metadata);
              } else if (constants.TIKTOK === type) {
                items = ConnectedAccount(closure_2[34]).generateTikTokMetadataItems(metadata);
                const obj16 = ConnectedAccount(closure_2[34]);
              }
            }
          }
        }
        let obj4 = ConnectedAccount(closure_2[34]);
        items = obj4.generateTwitterMetadataItems(metadata);
      }
      if (null !== createdAtDate) {
        let obj = { cachedAt: "Array", edpbxy: "isArray" };
        const intl2 = ConnectedAccount(closure_2[21]).intl;
        obj = { date: createdAtDate };
        obj.children = intl2.format(ConnectedAccount(closure_2[21]).t.9rfonh, obj);
        items.push(callback4(ConnectedAccount(closure_2[22]).Text, obj, constants2.CREATED_AT));
      }
      function handleRefresh() {
        self.setState({ metadataRefreshing: true });
        const obj = account(closure_2[18]);
        account(closure_2[18]).refresh(account.type, account.id).finally(() => {
          const timerId = setTimeout(() => {
            state.setState({ 0: 1766088043, -9223372036854775808: 827788593 });
          }, 2000);
        });
      }
      let tmp15 = self.state.metadataRefreshing || self.state.metadataAlreadyRefreshed;
      if (0 === items.length) {
        let obj10 = account(closure_2[24]);
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
          const intl4 = ConnectedAccount(closure_2[21]).intl;
          obj2.text = intl4.string(ConnectedAccount(closure_2[21]).t.y2b7CA);
          obj2.style = tmp.newBadge;
          const items2 = [callback4(ConnectedAccount(closure_2[15]).TextBadge, obj2), , , , ];
          obj3 = { variant: "text-xs/normal" };
          const intl5 = ConnectedAccount(closure_2[21]).intl;
          obj3.children = intl5.string(ConnectedAccount(closure_2[21]).t.eH16Gn);
          items2[1] = callback4(ConnectedAccount(closure_2[22]).Text, obj3);
          obj4 = { style: tmp.rowDivider };
          items2[2] = callback4(closure_11, obj4);
          let tmp33 = callback4;
          let tmp34 = closure_11;
          obj5 = { style: tmp.addDetailsButton };
          let intl = callback4;
          let num10 = 20;
          let string = ConnectedAccount(closure_2[20]).Button;
          obj6 = {};
          const intl6 = ConnectedAccount(closure_2[21]).intl;
          const string2 = intl6.string;
          let i4jeWR = ConnectedAccount(closure_2[21]).t;
          if (self.state.metadataAlreadyRefreshed) {
            i4jeWR = i4jeWR.i4jeWR;
            let string2Result = string2(i4jeWR);
          } else {
            string2Result = string2(i4jeWR.LVh3/5);
          }
          obj6.text = string2Result;
          obj6.size = "sm";
          obj6.onPress = handleRefresh;
          obj6.disabled = tmp15;
          obj5.children = intl(string, obj6);
          items2[3] = tmp33(tmp34, obj5);
          tmp33 = callback4;
          tmp34 = closure_11;
          const obj7 = { style: tmp.learnMoreButton };
          tmp = callback4;
          tmp15 = ConnectedAccount;
          const obj8 = { EMOJI_PICKER_EMOJI_CLICKED: 44, overflow: null, getOwnPropertyNames: true };
          intl = ConnectedAccount(closure_2[21]).intl;
          string = intl.string;
          obj6 = string(ConnectedAccount(closure_2[21]).t.8O0mlf);
          obj8.text = obj6;
          obj8.onPress = function onPress() {
            const obj = account(closure_2[35]);
            return obj.openURL(account(closure_2[36]).getArticleURL(constants.CONNECTION_DETAILS));
          };
          num10 = callback4(ConnectedAccount(closure_2[num10]).Button, obj8);
          obj7.children = num10;
          obj5 = callback4(closure_11, obj7);
          items2[4] = obj5;
          obj1.children = items2;
          callback5(closure_11, obj1);
          const tmp52 = callback5;
          const tmp53 = closure_11;
        }
      } else {
        const obj9 = { accessibilityRole: "button" };
        const intl3 = ConnectedAccount(closure_2[21]).intl;
        obj9.accessibilityLabel = intl3.string(ConnectedAccount(closure_2[21]).t.wzzjk9);
        obj9.hitSlop = {};
        obj9.onPress = handleRefresh;
        obj9.disabled = tmp15;
        const items3 = [tmp.metadataRefreshButton, ];
        let metadataRefreshButtonDisabled = tmp15;
        if (tmp15) {
          metadataRefreshButtonDisabled = tmp.metadataRefreshButtonDisabled;
        }
        items3[1] = metadataRefreshButtonDisabled;
        obj9.style = items3;
        obj10 = { style: tmp.metadataRefreshIcon, size: ConnectedAccount(closure_2[15]).Icon.Sizes.SMALL };
        if (self.state.metadataAlreadyRefreshed) {
          let tmp19Result = tmp19(tmp20[38]);
        } else {
          tmp19Result = tmp19(tmp20[39]);
        }
        obj10.source = tmp19Result;
        obj9.children = callback4(ConnectedAccount(closure_2[15]).Icon, obj10);
        const obj11 = { style: tmp.metadataContainer };
        const obj12 = { style: tmp.metadataItemsContainer, children: items };
        const items4 = [callback4(closure_11, obj12), callback4(ConnectedAccount(closure_2[37]).PressableOpacity, obj9)];
        obj11.children = items4;
        return callback5(closure_11, obj11);
      }
    }
  };
  items[5] = {
    key: "renderFriendSyncCheckRow",
    value() {
      let obj = callback(closure_2[24]);
      let tmp = null;
      if (set.has(obj.get(this.props.account.type).type)) {
        obj = {};
        const intl = ConnectedAccount(closure_2[21]).intl;
        obj.label = intl.string(ConnectedAccount(closure_2[21]).t.+KCMSi);
        obj.value = this.state.friendSync;
        obj.onValueChange = this.handleFriendSyncChange;
        tmp = callback4(closure_24, obj);
      }
      return tmp;
    }
  };
  items[6] = {
    key: "renderActivityCheckRow",
    value() {
      let obj = callback(closure_2[24]);
      const value = obj.get(this.props.account.type);
      let tmp2 = null;
      if (set2.has(value.type)) {
        obj = {};
        const intl = ConnectedAccount(closure_2[21]).intl;
        obj = { platform: value.name };
        obj.label = intl.formatToPlainString(ConnectedAccount(closure_2[21]).t.6u6J0q, obj);
        obj.value = this.state.showActivity;
        obj.onValueChange = this.handleShowActivityChange;
        tmp2 = callback4(closure_24, obj);
      }
      return tmp2;
    }
  };
  items[7] = {
    key: "renderIntegrationsRow",
    value() {
      const tmp = callback6(this.context);
      const account = this.props.account;
      let tmp2 = null;
      if (account.integrations.length > 0) {
        tmp2 = null;
        if (!account.revoked) {
          let obj = {};
          obj = { style: tmp.divider };
          const items = [callback4(closure_11, obj), ];
          obj = { style: {} };
          const obj1 = { style: tmp.integrationCategoryLabel };
          const intl = ConnectedAccount(closure_2[21]).intl;
          obj1.children = intl.string(ConnectedAccount(closure_2[21]).t.fOe3fZ);
          const items1 = [callback4(ConnectedAccount(closure_2[22]).Text, obj1), ];
          const integrations = account.integrations;
          items1[1] = integrations.map((id) => callback(closure_23, { integration: id }, id.id));
          obj.children = items1;
          items[1] = callback5(closure_11, obj);
          obj.children = items;
          tmp2 = callback5(closure_11, obj);
        }
      }
      return tmp2;
    }
  };
  items[8] = {
    key: "render",
    value() {
      const self = this;
      const tmp = callback6(this.context);
      const props = this.props;
      const account = props.account;
      let obj = callback(closure_2[24]);
      const value = obj.get(account.type);
      const migrationData = value.migrationData;
      if (null != migrationData) {
        if (migrationData.getMigrationExperimentEnabled("User Settings Connections Mobile")) {
          const intl = ConnectedAccount(closure_2[21]).intl;
          obj = { platformName: account.name };
          let name = intl.format(callback(closure_2[40]).Glhokn, obj);
        }
        obj = { accessible: true, accessibilityLabel: value.name, style: tmp.platformIcon, size: ConnectedAccount(closure_2[15]).Icon.Sizes.LARGE };
        let obj3 = ConnectedAccount(closure_2[41]);
        let obj4 = ConnectedAccount(closure_2[42]);
        const icon = value.icon;
        obj.source = obj3.makeSource(obj4.isThemeDark(props.theme) ? icon.darkPNG : icon.lightPNG);
        obj.disableColor = true;
        const obj1 = { <string:2494249571>: 8, <string:1638682449>: "absolute", <string:180507111>: 8 };
        const obj2 = { accessibilityRole: "button" };
        const intl2 = ConnectedAccount(closure_2[21]).intl;
        obj2.accessibilityLabel = intl2.string(ConnectedAccount(closure_2[21]).t.DT39A+);
        obj2.onPress = self.handleDisconnect;
        obj2.hitSlop = { useManaTypeConsolidationExperiment: "Text", notification_center_id: "options", bdt: "to", animatedContainerHeight: "Array" };
        obj3 = { style: tmp.deleteConnectionIcon, source: callback(closure_2[44]) };
        obj2.children = callback4(ConnectedAccount(closure_2[15]).Icon, obj3);
        obj1.children = callback4(ConnectedAccount(closure_2[37]).PressableOpacity, obj2);
        const tmp6 = callback4;
        const tmp6Result = callback4(ConnectedAccount(closure_2[15]).Icon, obj);
        const result = self.renderIntegrationsRow();
        const result1 = self.renderFriendSyncCheckRow();
        const result2 = self.renderActivityCheckRow();
        const result3 = self.renderMetadataVisibilityCheckRow();
        obj4 = { style: tmp.container };
        const obj5 = { style: tmp.connectedAccountItem };
        const obj6 = { style: tmp.connectedAccountTopContainer };
        const result4 = self.renderVisibilityCheckRow();
        const obj7 = { label: name, icon: tmp6Result, trailing: callback4(ConnectedAccount(closure_2[43]).Stack, obj1) };
        obj6.children = callback4(ConnectedAccount(closure_2[45]).TableRow, obj7);
        const items = [callback4(closure_11, obj6), ];
        const obj8 = { style: tmp.connectedAccountContentContainer };
        const items1 = [self.renderUpsell(), self.renderMetadata(), , ];
        const obj9 = { hasIcons: false };
        const items2 = [result4, result3, result2, result1];
        obj9.children = items2;
        items1[2] = callback5(ConnectedAccount(closure_2[46]).TableRowGroup, obj9);
        items1[3] = result;
        obj8.children = items1;
        items[1] = callback5(closure_11, obj8);
        obj5.children = items;
        obj4.children = callback5(closure_11, obj5);
        return callback4(closure_11, obj4);
      }
      name = account.name;
    }
  };
  return callback(ConnectedAccount, items);
}(importAllResult.PureComponent);
tmp8.contextType = arg1(dependencyMap[47]).ThemeContext;
const importDefaultResult = importDefault(dependencyMap[17]);
const result = arg1(dependencyMap[48]).fileFinishedImporting("modules/user_settings/connections/native/ConnectedAccount.tsx");

export default tmp8;
export const readStyles = legacyClassComponentStyles;
