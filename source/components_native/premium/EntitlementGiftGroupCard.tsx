// Module ID: 12493
// Function ID: 96806
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 4167, 1194, 8193, 3781, 4175, 653, 1851, 33, 4130, 689, 8195, 4126, 1212, 4543, 5611, 8212, 1273, 5474, 8525, 5514, 12494, 12495, 12268, 12270, 12271, 12269, 12272, 12273, 12274, 12275, 11825, 12276, 12279, 12280, 12496, 3842, 566, 8202, 2]

// Module 12493 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_createForOfIteratorHelperLoose";
import resolveGiftCode from "resolveGiftCode";
import Text from "Text";
import importAllResult from "registerAsset";
import get_ActivityIndicator from "registerAsset";
import importDefaultResult from "_isNativeReflectConstruct";
import importDefaultResult1 from "_isNativeReflectConstruct";
import importDefaultResult2 from "_isNativeReflectConstruct";
import importDefaultResult4 from "_isNativeReflectConstruct";
import GuildFeatures from "GuildFeatures";
import jsxProd from "registerAsset";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult3 from "_isNativeReflectConstruct";
import importDefaultResult5 from "initialize";

let closure_10;
let closure_11;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ View: closure_9, ActivityIndicator: closure_10, TouchableWithoutFeedback: closure_11 } = get_ActivityIndicator);
({ SubscriptionIntervalTypes: closure_16, PremiumSubscriptionSKUs: closure_17, PremiumGiftStyles: closure_18 } = GuildFeatures);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
_createForOfIteratorHelperLoose = { giftGroupCard: { overflow: "hidden", marginTop: 8 } };
_createForOfIteratorHelperLoose = { borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.CARD_BORDER_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, backgroundColor: require("_createForOfIteratorHelperLoose").colors.TABLEROW_BACKGROUND_DEFAULT };
_createForOfIteratorHelperLoose.giftGroupCardRefresh = _createForOfIteratorHelperLoose;
let obj1 = { fontSize: 16, lineHeight: 20, fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose.title = obj1;
_createForOfIteratorHelperLoose.arrow = { color: require("_createForOfIteratorHelperLoose").colors.ICON_SUBTLE };
_createForOfIteratorHelperLoose.subtitle = { fontSize: 14, lineHeight: 18 };
_createForOfIteratorHelperLoose.titleContainer = { marginLeft: 8, flex: 1 };
_createForOfIteratorHelperLoose.groupCardHeader = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 16 };
let obj2 = { color: require("_createForOfIteratorHelperLoose").colors.ICON_SUBTLE };
_createForOfIteratorHelperLoose.groupCardHeaderLegacy = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.rowArrow = { height: 8, width: 12, marginRight: 8 };
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.giftIcon = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.generateGiftRow = { padding: 8, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
let obj4 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.generateGiftRowLegacy = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.generateGiftRowText = { flexShrink: 1 };
_createForOfIteratorHelperLoose.generateGiftButton = { marginLeft: 12 };
_createForOfIteratorHelperLoose.loading = { marginTop: 8 };
_createForOfIteratorHelperLoose.generateButtonContainer = { flexGrow: 1, flexShrink: 0 };
let obj5 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.groupCardHeaderOpen = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
let obj6 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.groupCardHeaderOpenRefresh = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
_createForOfIteratorHelperLoose.subtitleContainer = { flexDirection: "row", alignItems: "center", gap: 4 };
_createForOfIteratorHelperLoose.socialLayerSubtitleContainer = { marginTop: 2 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
let tmp11 = ((Component) => {
  class EntitlementGiftGroupCard {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_3(this, apply);
      items1 = [...items];
      obj = outer1_6(apply);
      tmp2 = outer1_5;
      if (outer1_22()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
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
          const userGiftCodesForSKU = outer2_1(outer2_2[17]).fetchUserGiftCodesForSKU(skuId, subscriptionPlanId);
          const obj = outer2_1(outer2_2[17]);
        }
        tmp2Result.setState({ isOpen: !tmp2Result.state.isOpen });
      };
      tmp2Result.handleGenerateGiftCode = () => {
        let giftStyle;
        let skuId;
        let subscriptionPlanId;
        ({ skuId, subscriptionPlanId, giftStyle } = tmp2Result.props);
        const giftCode = outer2_1(outer2_2[17]).createGiftCode(skuId, subscriptionPlanId, giftStyle);
      };
      return tmp2Result;
    }
  }
  callback2(EntitlementGiftGroupCard, Component);
  let obj = {
    key: "componentDidMount",
    value() {
      this._mountedAt = Date.now();
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "renderGenerateGiftCodeRow",
    value() {
      const tmp = outer1_21(this.context);
      let obj = {};
      const items = [tmp.generateGiftRow, ];
      let prop = null;
      if (!this.props.isRefreshEnabled) {
        prop = tmp.generateGiftRowLegacy;
      }
      items[1] = prop;
      obj.style = items;
      obj = { variant: "text-xs/medium", color: "text-subtle", style: tmp.generateGiftRowText };
      const intl = EntitlementGiftGroupCard(outer1_2[19]).intl;
      obj.children = intl.string(EntitlementGiftGroupCard(outer1_2[19]).t.lELyPj);
      const items1 = [outer1_19(EntitlementGiftGroupCard(outer1_2[18]).Text, obj), ];
      obj = { style: tmp.generateButtonContainer };
      const obj1 = { style: tmp.generateGiftButton };
      const obj2 = {};
      const intl2 = EntitlementGiftGroupCard(outer1_2[19]).intl;
      obj2.text = intl2.string(EntitlementGiftGroupCard(outer1_2[19]).t["w4+/BA"]);
      obj2.size = "sm";
      obj2.onPress = this.handleGenerateGiftCode;
      obj1.children = outer1_19(EntitlementGiftGroupCard(outer1_2[20]).Button, obj2);
      obj.children = outer1_19(outer1_9, obj1);
      items1[1] = outer1_19(outer1_9, obj);
      obj.children = items1;
      return outer1_20(outer1_9, obj);
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
      const tmp = outer1_21(this.context);
      const isOpen = this.state.isOpen;
      ({ entitlements, application, sku, isRefreshEnabled } = this.props);
      let obj = EntitlementGiftGroupCard(outer1_2[21]);
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
        let obj5 = EntitlementGiftGroupCard(outer1_2[23]);
        obj1.size = obj5.getIconSize(EntitlementGiftGroupCard(outer1_2[23]).Icon.Sizes.LARGE);
        obj1.containerStyle = tmp.giftIcon;
        let tmp11 = outer1_19(outer1_1(outer1_2[22]), obj1);
        const tmp18 = outer1_1(outer1_2[22]);
      } else {
        tmp11 = null;
        if (null != source) {
          const obj2 = { resizeMode: "contain", source, disableColor: true, size: EntitlementGiftGroupCard(outer1_2[23]).Icon.Sizes.LARGE, style: tmp.giftIcon };
          tmp11 = outer1_19(EntitlementGiftGroupCard(outer1_2[23]).Icon, obj2);
        }
      }
      const items1 = [tmp11, , ];
      const obj3 = { style: tmp.titleContainer };
      const obj4 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", accessibilityRole: "header", children };
      const items2 = [outer1_19(EntitlementGiftGroupCard(outer1_2[18]).Text, obj4), ];
      obj5 = {};
      let socialLayerSubtitleContainer = isGameItemSKUResult;
      if (isGameItemSKUResult) {
        socialLayerSubtitleContainer = tmp.socialLayerSubtitleContainer;
      }
      const items3 = [socialLayerSubtitleContainer, tmp.subtitleContainer];
      obj5.style = items3;
      let tmp22 = isGameItemSKUResult;
      if (isGameItemSKUResult) {
        const obj6 = { game: application, size: outer1_1(outer1_2[24]).Sizes.SIZE_24, skuId: sku.id };
        tmp22 = outer1_19(outer1_1(outer1_2[24]), obj6);
        const tmp26 = outer1_1(outer1_2[24]);
      }
      const items4 = [tmp22, ];
      const obj7 = { variant: "text-md/normal", color: "text-subtle", style: tmp.subtitle };
      const intl = EntitlementGiftGroupCard(outer1_2[19]).intl;
      const format = intl.format;
      const t = EntitlementGiftGroupCard(outer1_2[19]).t;
      if (isGameItemSKUResult) {
        const obj8 = { applicationName: application.name, copies: entitlements.length };
        let formatResult = format(t["6plpZi"], obj8);
      } else {
        const obj9 = { copies: entitlements.length };
        formatResult = format(t.zMcvcA, obj9);
      }
      obj7.children = formatResult;
      items4[1] = outer1_19(EntitlementGiftGroupCard(outer1_2[18]).Text, obj7);
      obj5.children = items4;
      items2[1] = outer1_20(outer1_9, obj5);
      obj3.children = items2;
      items1[1] = outer1_20(outer1_9, obj3);
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
        obj10.source = outer1_1(tmp34);
        obj10.color = tmp.arrow.color;
        items1[2] = tmp29(tmp30(tmp31[23]).Icon, obj10);
        obj.children = items1;
        obj.children = outer1_20(outer1_9, obj);
        return outer1_19(outer1_11, obj);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getCardHeaderThumbnail",
    value(arg0, arg1) {
      if (outer1_18.STANDARD_BOX === arg1) {
        return outer1_1(outer1_2[29]);
      } else if (outer1_18.CAKE === arg1) {
        return outer1_1(outer1_2[30]);
      } else if (outer1_18.CHEST === arg1) {
        return outer1_1(outer1_2[31]);
      } else if (outer1_18.COFFEE === arg1) {
        return outer1_1(outer1_2[32]);
      } else if (outer1_18.SEASONAL_STANDARD_BOX === arg1) {
        return outer1_1(outer1_2[33]);
      } else if (outer1_18.SEASONAL_CAKE === arg1) {
        return outer1_1(outer1_2[34]);
      } else if (outer1_18.SEASONAL_CHEST === arg1) {
        return outer1_1(outer1_2[35]);
      } else if (outer1_18.SEASONAL_COFFEE === arg1) {
        return outer1_1(outer1_2[36]);
      } else if (outer1_18.NITROWEEN_STANDARD === arg1) {
        const obj = { uri: outer1_1(outer1_2[37]) };
        return obj;
      } else if (outer1_17.TIER_0 === arg0) {
        return outer1_1(outer1_2[38]);
      } else if (outer1_17.TIER_1 === arg0) {
        return outer1_1(outer1_2[39]);
      } else {
        if (outer1_17.TIER_2 !== arg0) {
          if (outer1_17.LEGACY !== arg0) {
            return null;
          }
        }
        return outer1_1(outer1_2[40]);
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
      const values = Object.values(outer1_17);
      if (values.includes(id)) {
        if (null == subscriptionPlan) {
          return null;
        } else {
          const intl = EntitlementGiftGroupCard(outer1_2[19]).intl;
          if (subscriptionPlan.interval === outer1_16.MONTH) {
            let Vd3Iu8 = EntitlementGiftGroupCard(outer1_2[19]).t.rCJvqo;
          } else {
            Vd3Iu8 = EntitlementGiftGroupCard(outer1_2[19]).t.Vd3Iu8;
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
      let loading = outer1_21(this.context);
      const props = this.props;
      ({ giftCodes, sku } = props);
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
        return outer1_20(outer1_9, obj);
      } else {
        obj = {};
        if (isFetching) {
          obj = {};
          loading = loading.loading;
          obj.style = loading;
          let tmp6Result = outer1_19(outer1_10, obj);
        } else {
          const obj1 = {};
          let result = null;
          if (giftCodes.length < entitlements.length) {
            result = self.renderGenerateGiftCodeRow();
          }
          const items2 = [result, giftCodes.map((code) => outer2_19(outer2_1(outer2_2[41]), { giftCode: code, sku, isFirst: 0 === arg1, isRefreshEnabled }, code.code))];
          obj1.children = items2;
          tmp6Result = outer1_20(outer1_8.Fragment, obj1);
          const tmp6 = outer1_20;
        }
        obj.children = tmp6Result;
        outer1_19(outer1_9, obj);
        const tmp4 = outer1_19;
        const tmp5 = outer1_9;
      }
    }
  };
  return callback(EntitlementGiftGroupCard, items);
})(importAllResult.Component);
tmp11.contextType = require("ManaContext").ThemeContext;
let obj7 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
let items = [importDefaultResult1, importDefaultResult4, importDefaultResult, importDefaultResult2, importDefaultResult3];
const tmp12 = require("initialize").connectStores(items, (arg0) => {
  let require;
  let skuId;
  let subscriptionPlanId;
  ({ skuId, subscriptionPlanId, giftStyle: require } = arg0);
  const value = importDefaultResult4.get(skuId);
  if (null == value) {
    const _Error = Error;
    const error = new Error("SKU was unavailable while rendering gift.");
    throw error;
  } else {
    let obj = { sku: value, isFetching: importDefaultResult2.getUserGiftCodesFetchingForSKUAndPlan(skuId, subscriptionPlanId), loadedAt: importDefaultResult2.getUserGiftCodesLoadedAtForSKUAndPlan(skuId, subscriptionPlanId), application: importDefaultResult.getApplication(value.applicationId) };
    let orFetchSubscriptionPlan = null;
    if (null != subscriptionPlanId) {
      obj = require(8202) /* _createForOfIteratorHelperLoose */;
      orFetchSubscriptionPlan = obj.getOrFetchSubscriptionPlan(subscriptionPlanId);
    }
    obj.subscriptionPlan = orFetchSubscriptionPlan;
    const forGifterSKUAndPlan = importDefaultResult2.getForGifterSKUAndPlan(importDefaultResult1.getId(), skuId, subscriptionPlanId);
    const found = forGifterSKUAndPlan.filter((isClaimed) => !isClaimed.isClaimed);
    obj.giftCodes = found.filter((giftStyle) => giftStyle.giftStyle === closure_0);
    return obj;
  }
})(tmp11);
let result = require("_possibleConstructorReturn").fileFinishedImporting("components_native/premium/EntitlementGiftGroupCard.tsx");

export default tmp12;
