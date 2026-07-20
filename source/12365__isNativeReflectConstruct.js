// Module ID: 12365
// Function ID: 94577
// Name: _isNativeReflectConstruct
// Dependencies: [251658240, 131072, 351272960, 31, 27, 6660, 1851, 33, 4126, 689, 5242, 1324, 4546, 668, 3774, 12370, 12371, 7162, 7105, 7106, 7157, 5428, 2, 333040, 2031616, 1769472, 247726080, 367984640, 2162688, 297533440, 270270464, 37093376, 368181248, 471400448, 357826560, 633733120, 292487168, 79429632, 247332864, 633470976, 297271296, 810876928, 131072, 528154624, 452984832, 989855744]

// Module 12365 (_isNativeReflectConstruct)
import module_31 from "module_31";
import getActivityIndicator from "get ActivityIndicator";
import importAllResult from "items";
import GuildFeatures from "GuildFeatures";
import importDefaultResult from "module_33";
import importDefaultResult1 from "_createForOfIteratorHelperLoose";
import importDefaultResult2 from "_createForOfIteratorHelperLoose";
import importDefaultResult4 from "useIsMobileVisualRefreshExperimentEnabled";
import DrawerSourceTypes from "DrawerSourceTypes";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import module_12370 from "module_12370";
import importDefaultResult3 from "result";

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
({ View: closure_9, ActivityIndicator: closure_10, TouchableWithoutFeedback: closure_11 } = GuildFeatures);
({ SubscriptionIntervalTypes: closure_16, PremiumSubscriptionSKUs: closure_17, PremiumGiftStyles: closure_18 } = DrawerSourceTypes);
({ jsx: closure_19, jsxs: closure_20 } = _createForOfIteratorHelperLoose);
module_12370 = { giftGroupCard: { position: "<string:4150329345>", right: "<string:1906121297>" } };
module_12370 = { borderWidth: 1, borderColor: require("module_12371").colors.CARD_BORDER_DEFAULT, borderRadius: require("module_12371").radii.md, backgroundColor: require("module_12371").colors.TABLEROW_BACKGROUND_DEFAULT };
module_12370.giftGroupCardRefresh = module_12370;
const obj1 = { "Null": "flex-end", "Null": "center", fontFamily: require("LinearGradient").Fonts.PRIMARY_SEMIBOLD, color: require("module_12371").colors.MOBILE_TEXT_HEADING_PRIMARY };
module_12370.title = obj1;
module_12370.arrow = { color: require("module_12371").colors.ICON_SUBTLE };
module_12370.subtitle = {};
module_12370.titleContainer = {};
module_12370.groupCardHeader = { "Bool(false)": -2073476764, "Bool(false)": 1090584580, "Bool(false)": 110338, "Bool(false)": 3186 };
const obj2 = { color: require("module_12371").colors.ICON_SUBTLE };
module_12370.groupCardHeaderLegacy = { backgroundColor: require("module_12371").colors.BACKGROUND_SURFACE_HIGH };
module_12370.rowArrow = {};
const obj3 = { backgroundColor: require("module_12371").colors.BACKGROUND_SURFACE_HIGH };
module_12370.giftIcon = { borderRadius: require("module_12371").radii.xs };
module_12370.generateGiftRow = {};
const obj4 = { borderRadius: require("module_12371").radii.xs };
module_12370.generateGiftRowLegacy = { backgroundColor: require("module_12371").colors.BACKGROUND_SURFACE_HIGH };
module_12370.generateGiftRowText = { flexShrink: 1 };
module_12370.generateGiftButton = { marginLeft: 12 };
module_12370.loading = { marginTop: 8 };
module_12370.generateButtonContainer = { backgroundColor: null, height: null };
const obj5 = { backgroundColor: require("module_12371").colors.BACKGROUND_SURFACE_HIGH };
module_12370.groupCardHeaderOpen = { backgroundColor: require("module_12371").colors.BACKGROUND_BASE_LOWEST };
const obj6 = { backgroundColor: require("module_12371").colors.BACKGROUND_BASE_LOWEST };
module_12370.groupCardHeaderOpenRefresh = { backgroundColor: require("module_12371").colors.BACKGROUND_MOD_MUTED };
module_12370.subtitleContainer = {};
module_12370.socialLayerSubtitleContainer = { marginTop: 2 };
module_12370 = module_12370.createLegacyClassComponentStyles(module_12370);
const tmp11 = (Component) => {
  class EntitlementGiftGroupCard {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, EntitlementGiftGroupCard);
      items1 = [...items];
      obj = module_31(EntitlementGiftGroupCard);
      tmp2 = closure_5;
      if (closure_22()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = module_31;
        constructResult = Reflect.construct(obj, items1, module_31(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      EntitlementGiftGroupCard = tmp2Result;
      tmp2Result._mountedAt = null;
      tmp2Result.state = { isOpen: false };
      tmp2Result.handleToggleOpen = () => {
        let skuId;
        let subscriptionPlanId;
        const props = tmp2Result.props;
        let tmp2 = null != props.loadedAt;
        ({ skuId, subscriptionPlanId } = props);
        if (tmp2) {
          tmp2 = null != tmp2Result._mountedAt;
        }
        if (!tmp2) {
          tmp2 = !tmp;
        }
        if (!tmp2) {
          const userGiftCodesForSKU = callback(closure_2[17]).fetchUserGiftCodesForSKU(skuId, subscriptionPlanId);
          const obj = callback(closure_2[17]);
        }
        tmp2Result.setState({ isOpen: !tmp2Result.state.isOpen });
      };
      tmp2Result.handleGenerateGiftCode = () => {
        let giftStyle;
        let skuId;
        let subscriptionPlanId;
        ({ skuId, subscriptionPlanId, giftStyle } = tmp2Result.props);
        const giftCode = callback(closure_2[17]).createGiftCode(skuId, subscriptionPlanId, giftStyle);
      };
      return tmp2Result;
    }
  }
  const arg1 = EntitlementGiftGroupCard;
  callback2(EntitlementGiftGroupCard, Component);
  let obj = {
    key: "componentDidMount",
    value() {
      this._mountedAt = Date.now();
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "renderGenerateGiftCodeRow",
    value() {
      const tmp = callback5(this.context);
      let obj = {};
      const items = [tmp.generateGiftRow, ];
      let prop = null;
      if (!this.props.isRefreshEnabled) {
        prop = tmp.generateGiftRowLegacy;
      }
      items[1] = prop;
      obj.style = items;
      obj = { style: tmp.generateGiftRowText };
      const intl = EntitlementGiftGroupCard(closure_2[19]).intl;
      obj.children = intl.string(EntitlementGiftGroupCard(closure_2[19]).t.lELyPj);
      const items1 = [callback4(EntitlementGiftGroupCard(closure_2[18]).Text, obj), ];
      obj = { style: tmp.generateButtonContainer };
      const obj1 = { style: tmp.generateGiftButton };
      const obj2 = {};
      const intl2 = EntitlementGiftGroupCard(closure_2[19]).intl;
      obj2.text = intl2.string(EntitlementGiftGroupCard(closure_2[19]).t.w4+/BA);
      obj2.size = "sm";
      obj2.onPress = this.handleGenerateGiftCode;
      obj1.children = callback4(EntitlementGiftGroupCard(closure_2[20]).Button, obj2);
      obj.children = callback4(closure_9, obj1);
      items1[1] = callback4(closure_9, obj);
      obj.children = items1;
      return closure_20(closure_9, obj);
    }
  };
  items[1] = obj;
  obj = {
    key: "renderHeader",
    value(source, children) {
      let application;
      let entitlements;
      let isRefreshEnabled;
      let sku;
      const tmp = callback5(this.context);
      const isOpen = this.state.isOpen;
      ({ entitlements, application, sku, isRefreshEnabled } = this.props);
      let obj = EntitlementGiftGroupCard(closure_2[21]);
      let isGameItemSKUResult = obj.isGameItemSKU(sku);
      if (isGameItemSKUResult) {
        isGameItemSKUResult = null != application;
      }
      obj = { accessibilityRole: "button", onPress: this.handleToggleOpen };
      obj = {};
      const items = [tmp.groupCardHeader, , ];
      let prop = null;
      if (!isRefreshEnabled) {
        prop = tmp.groupCardHeaderLegacy;
      }
      items[1] = prop;
      let tmp10 = null;
      if (isOpen) {
        tmp10 = tmp4;
      }
      items[2] = tmp10;
      obj.style = items;
      if (isGameItemSKUResult) {
        const obj1 = { sku };
        let obj5 = EntitlementGiftGroupCard(closure_2[23]);
        obj1.size = obj5.getIconSize(EntitlementGiftGroupCard(closure_2[23]).Icon.Sizes.LARGE);
        obj1.containerStyle = tmp.giftIcon;
        let tmp11 = callback4(callback(closure_2[22]), obj1);
        const tmp18 = callback(closure_2[22]);
      } else {
        tmp11 = null;
        if (null != source) {
          const obj2 = { headerBackTitle: 822083969, VoiceNormalIcon: -858993459, wink: 1072483532, source, size: EntitlementGiftGroupCard(closure_2[23]).Icon.Sizes.LARGE, style: tmp.giftIcon };
          tmp11 = callback4(EntitlementGiftGroupCard(closure_2[23]).Icon, obj2);
        }
      }
      const items1 = [tmp11, , ];
      const obj3 = { style: tmp.titleContainer };
      const items2 = [callback4(EntitlementGiftGroupCard(closure_2[18]).Text, { children }), ];
      obj5 = {};
      let socialLayerSubtitleContainer = isGameItemSKUResult;
      if (isGameItemSKUResult) {
        socialLayerSubtitleContainer = tmp.socialLayerSubtitleContainer;
      }
      const items3 = [socialLayerSubtitleContainer, tmp.subtitleContainer];
      obj5.style = items3;
      let tmp22 = isGameItemSKUResult;
      if (isGameItemSKUResult) {
        const obj6 = { game: application, size: callback(closure_2[24]).Sizes.SIZE_24, skuId: sku.id };
        tmp22 = callback4(callback(closure_2[24]), obj6);
        const tmp26 = callback(closure_2[24]);
      }
      const items4 = [tmp22, ];
      const obj7 = { style: tmp.subtitle };
      const intl = EntitlementGiftGroupCard(closure_2[19]).intl;
      const format = intl.format;
      const t = EntitlementGiftGroupCard(closure_2[19]).t;
      if (isGameItemSKUResult) {
        const obj8 = { applicationName: application.name, copies: entitlements.length };
        let formatResult = format(t.6plpZi, obj8);
      } else {
        const obj9 = { copies: entitlements.length };
        formatResult = format(t.zMcvcA, obj9);
      }
      obj7.children = formatResult;
      items4[1] = callback4(EntitlementGiftGroupCard(closure_2[18]).Text, obj7);
      obj5.children = items4;
      items2[1] = closure_20(closure_9, obj5);
      obj3.children = items2;
      items1[1] = closure_20(closure_9, obj3);
      if (isRefreshEnabled) {
        if (isOpen) {
          let ChevronSmallRightIcon = tmp30(tmp31[25]).ChevronSmallDownIcon;
        } else {
          ChevronSmallRightIcon = tmp30(tmp31[26]).ChevronSmallRightIcon;
        }
        tmp29(ChevronSmallRightIcon, {});
      } else {
        const obj10 = { style: tmp.rowArrow, size: tmp30(tmp31[23]).Icon.Sizes.LARGE };
        if (isOpen) {
          let tmp34 = tmp33[27];
        } else {
          tmp34 = tmp33[28];
        }
        obj10.source = callback(tmp34);
        obj10.color = tmp.arrow.color;
        items1[2] = tmp29(tmp30(tmp31[23]).Icon, obj10);
        obj.children = items1;
        obj.children = closure_20(closure_9, obj);
        return callback4(closure_11, obj);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getCardHeaderThumbnail",
    value(arg0, arg1) {
      if (constants2.STANDARD_BOX === arg1) {
        return callback(closure_2[29]);
      } else if (constants2.CAKE === arg1) {
        return callback(closure_2[30]);
      } else if (constants2.CHEST === arg1) {
        return callback(closure_2[31]);
      } else if (constants2.COFFEE === arg1) {
        return callback(closure_2[32]);
      } else if (constants2.SEASONAL_STANDARD_BOX === arg1) {
        return callback(closure_2[33]);
      } else if (constants2.SEASONAL_CAKE === arg1) {
        return callback(closure_2[34]);
      } else if (constants2.SEASONAL_CHEST === arg1) {
        return callback(closure_2[35]);
      } else if (constants2.SEASONAL_COFFEE === arg1) {
        return callback(closure_2[36]);
      } else if (constants2.NITROWEEN_STANDARD === arg1) {
        const obj = { uri: callback(closure_2[37]) };
        return obj;
      } else if (closure_17.TIER_0 === arg0) {
        return callback(closure_2[38]);
      } else if (closure_17.TIER_1 === arg0) {
        return callback(closure_2[39]);
      } else {
        if (closure_17.TIER_2 !== arg0) {
          if (closure_17.LEGACY !== arg0) {
            return null;
          }
        }
        return callback(closure_2[40]);
      }
    }
  };
  items[4] = {
    key: "renderCardHeader",
    value(name) {
      let application;
      let id;
      let subscriptionPlan;
      const self = this;
      const props = this.props;
      ({ application, subscriptionPlan } = props);
      ({ id, name } = name);
      const cardHeaderThumbnail = this.getCardHeaderThumbnail(id, props.giftStyle);
      const values = Object.values(closure_17);
      if (values.includes(id)) {
        if (null == subscriptionPlan) {
          return null;
        } else {
          const intl = EntitlementGiftGroupCard(closure_2[19]).intl;
          if (subscriptionPlan.interval === constants.MONTH) {
            let Vd3Iu8 = EntitlementGiftGroupCard(closure_2[19]).t.rCJvqo;
          } else {
            Vd3Iu8 = EntitlementGiftGroupCard(closure_2[19]).t.Vd3Iu8;
          }
          const obj = { skuName: name.name, intervalCount: subscriptionPlan.intervalCount };
          return self.renderHeader(cardHeaderThumbnail, intl.formatToPlainString(Vd3Iu8, obj));
        }
      } else {
        let renderHeaderResult = null;
        if (null != application) {
          const iconSource = application.getIconSource(32);
          let tmp4 = cardHeaderThumbnail;
          if (null != iconSource) {
            tmp4 = iconSource;
          }
          renderHeaderResult = self.renderHeader(tmp4, name);
        }
        return renderHeaderResult;
      }
    }
  };
  items[5] = {
    key: "render",
    value() {
      let entitlements;
      let giftCodes;
      let isFetching;
      let sku;
      const self = this;
      let loading = callback5(this.context);
      const props = this.props;
      ({ giftCodes, sku } = props);
      const EntitlementGiftGroupCard = sku;
      const isRefreshEnabled = props.isRefreshEnabled;
      let obj = {};
      const items = [loading.giftGroupCard, ];
      let giftGroupCardRefresh = null;
      ({ entitlements, isFetching } = props);
      if (isRefreshEnabled) {
        giftGroupCardRefresh = loading.giftGroupCardRefresh;
      }
      items[1] = giftGroupCardRefresh;
      obj.style = items;
      const items1 = [self.renderCardHeader(sku), ];
      if (!this.state.isOpen) {
        items1[1] = null;
        obj.children = items1;
        return closure_20(closure_9, obj);
      } else {
        obj = {};
        if (isFetching) {
          obj = {};
          loading = loading.loading;
          obj.style = loading;
          let tmp6Result = callback4(closure_10, obj);
        } else {
          const obj1 = {};
          let result = null;
          if (giftCodes.length < entitlements.length) {
            result = self.renderGenerateGiftCodeRow();
          }
          const items2 = [result, giftCodes.map((code) => callback(isRefreshEnabled(closure_2[41]), { giftCode: code, sku, isFirst: 0 === arg1, isRefreshEnabled }, code.code))];
          obj1.children = items2;
          tmp6Result = closure_20(React.Fragment, obj1);
          const tmp6 = closure_20;
        }
        obj.children = tmp6Result;
        callback4(closure_9, obj);
        const tmp4 = callback4;
        const tmp5 = closure_9;
      }
    }
  };
  return callback(EntitlementGiftGroupCard, items);
}(importAllResult.Component);
tmp11.contextType = arg1(dependencyMap[42]).ThemeContext;
const obj7 = { backgroundColor: require("module_12371").colors.BACKGROUND_MOD_MUTED };
const items = [importDefaultResult1, importDefaultResult4, importDefaultResult, importDefaultResult2, importDefaultResult3];
const importDefaultResult5 = importDefault(dependencyMap[43]);
const tmp12 = importDefault(dependencyMap[43]).connectStores(items, (arg0) => {
  let skuId;
  let subscriptionPlanId;
  ({ skuId, subscriptionPlanId, giftStyle: closure_0 } = arg0);
  const value = importDefaultResult4.get(skuId);
  if (null == value) {
    const _Error = Error;
    const error = new Error("SKU was unavailable while rendering gift.");
    throw error;
  } else {
    let obj = { sku: value, isFetching: importDefaultResult2.getUserGiftCodesFetchingForSKUAndPlan(skuId, subscriptionPlanId), loadedAt: importDefaultResult2.getUserGiftCodesLoadedAtForSKUAndPlan(skuId, subscriptionPlanId), application: importDefaultResult.getApplication(value.applicationId) };
    let orFetchSubscriptionPlan = null;
    if (null != subscriptionPlanId) {
      obj = arg1(dependencyMap[44]);
      orFetchSubscriptionPlan = obj.getOrFetchSubscriptionPlan(subscriptionPlanId);
    }
    obj.subscriptionPlan = orFetchSubscriptionPlan;
    const forGifterSKUAndPlan = importDefaultResult2.getForGifterSKUAndPlan(importDefaultResult1.getId(), skuId, subscriptionPlanId);
    const found = forGifterSKUAndPlan.filter((isClaimed) => !isClaimed.isClaimed);
    obj.giftCodes = found.filter((giftStyle) => giftStyle.giftStyle === closure_0);
    return obj;
  }
})(tmp11);
const result = arg1(dependencyMap[45]).fileFinishedImporting("components_native/premium/EntitlementGiftGroupCard.tsx");

export default tmp12;
