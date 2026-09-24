// Module ID: 13866
// Function ID: 13867
// Name: EntitlementGiftGroupCard
// Dependencies: [19, 17, 5017, 502, 11597, 4455, 5761, 1078, 1378, 21, 4790, 580, 4503, 11598, 4786, 1119, 5220, 7505, 9136, 1181, 7451, 11444, 7488, 13536, 13538, 13539, 13537, 13540, 13541, 13542, 13543, 11358, 13544, 13547, 13548, 13867, 504, 11609, 2]

// Module 13866 (EntitlementGiftGroupCard)
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import Text_Text from "Text/Text" /* 4786 */;
import components_Button_Button from "components/Button/Button" /* 5220 */;
import GameIconDefault from "GameIcon" /* 7451 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7505 */;
import SlayerStorefrontItemCardDefault from "SlayerStorefrontItemCard" /* 9136 */;
import _modDef11358 from "module_11358" /* 11358 */;
import GiftCodeActionCreatorsDefault from "GiftCodeActionCreators" /* 11598 */;
import SubscriptionUtils from "SubscriptionUtils" /* 11609 */;
import _modDef13536 from "module_13536" /* 13536 */;
import _modDef13537 from "module_13537" /* 13537 */;
import _modDef13538 from "module_13538" /* 13538 */;
import _modDef13539 from "module_13539" /* 13539 */;
import _modDef13540 from "module_13540" /* 13540 */;
import _modDef13541 from "module_13541" /* 13541 */;
import _modDef13542 from "module_13542" /* 13542 */;
import _modDef13543 from "module_13543" /* 13543 */;
import _modDef13544 from "module_13544" /* 13544 */;
import _modDef13547 from "module_13547" /* 13547 */;
import _modDef13548 from "module_13548" /* 13548 */;
import GiftCodeRowDefault from "GiftCodeRow" /* 13867 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5017 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GiftCodeStore from "GiftCodeStore" /* 11597 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4455 */;
import SKUStore from "SKUStore" /* 5761 */;
import initialize from "initialize" /* 504 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty, TouchableWithoutFeedback: metroRequire } = get_ActivityIndicator);
const PremiumConstants = fn(1378);
({ SubscriptionIntervalTypes: closure_11, PremiumSubscriptionSKUs: closure_12, PremiumGiftStyles: map1 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { giftGroupCard: { overflow: "hidden", marginTop: 8 }, giftGroupCardRefresh: { borderWidth: 1, borderColor: nativeDefault.colors.CARD_BORDER_DEFAULT, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT }, title: null, arrow: null, subtitle: null, titleContainer: null, groupCardHeader: null, groupCardHeaderLegacy: null, rowArrow: null, giftIcon: null, generateGiftRow: null, generateGiftRowLegacy: null, generateGiftRowText: null, generateGiftButton: null, loading: null, generateButtonContainer: null, groupCardHeaderOpen: null, groupCardHeaderOpenRefresh: null, subtitleContainer: null, socialLayerSubtitleContainer: null };
let obj3 = { borderWidth: 1, borderColor: nativeDefault.colors.CARD_BORDER_DEFAULT, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT };
obj2.title = { fontSize: 16, lineHeight: 20, fontFamily: fn(1078).Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj4 = { fontSize: 16, lineHeight: 20, fontFamily: fn(1078).Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.arrow = { color: nativeDefault.colors.ICON_SUBTLE };
obj2.subtitle = { fontSize: 14, lineHeight: 18 };
obj2.titleContainer = { marginLeft: 8, flex: 1 };
obj2.groupCardHeader = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 16 };
let obj5 = { color: nativeDefault.colors.ICON_SUBTLE };
obj2.groupCardHeaderLegacy = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.rowArrow = { height: 8, width: 12, marginRight: 8 };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.giftIcon = { borderRadius: nativeDefault.radii.xs };
obj2.generateGiftRow = { padding: 8, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
const obj7 = { borderRadius: nativeDefault.radii.xs };
obj2.generateGiftRowLegacy = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.generateGiftRowText = { flexShrink: 1 };
obj2.generateGiftButton = { marginLeft: 12 };
obj2.loading = { marginTop: 8 };
obj2.generateButtonContainer = { flexGrow: 1, flexShrink: 0 };
let obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.groupCardHeaderOpen = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.groupCardHeaderOpenRefresh = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.subtitleContainer = { flexDirection: "row", alignItems: "center", gap: 4 };
obj2.socialLayerSubtitleContainer = { marginTop: 2 };
let closure_16 = createStyles.createLegacyClassComponentStyles(obj2);
const Component = noop.Component;
class EntitlementGiftGroupCard extends Component {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult._mountedAt = null;
    applyArgumentsResult.state = { isOpen: false };
    applyArgumentsResult.handleToggleOpen = function handleToggleOpen() {
      const props = applyArgumentsResult.props;
      let tmp2 = null != props.loadedAt;
      ({ skuId, subscriptionPlanId } = props);
      if (tmp2) {
        tmp2 = null != obj._mountedAt;
      }
      if (!tmp2) {
        tmp2 = !tmp;
      }
      if (!tmp2) {
        const userGiftCodesForSKU = GiftCodeActionCreatorsDefault.fetchUserGiftCodesForSKU(skuId, subscriptionPlanId);
      }
      applyArgumentsResult.setState({ isOpen: !applyArgumentsResult.state.isOpen });
    };
    applyArgumentsResult.handleGenerateGiftCode = function handleGenerateGiftCode() {
      ({ skuId, subscriptionPlanId, giftStyle } = applyArgumentsResult.props);
      const giftCode = GiftCodeActionCreatorsDefault.createGiftCode(skuId, subscriptionPlanId, giftStyle);
    };
    return applyArgumentsResult;
  }
}
const prototype = EntitlementGiftGroupCard.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  this._mountedAt = Date.now();
};
prototype["renderGenerateGiftCodeRow"] = function renderGenerateGiftCodeRow() {
  const tmp = closure_16(this.context);
  const obj = { style: tmp.generateGiftRow, children: null };
  const obj2 = { variant: "text-xs/medium", color: "text-subtle", style: tmp.generateGiftRowText, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.lELyPj);
  const items = [state(Text_Text.Text, obj2), ];
  const obj3 = { style: tmp.generateButtonContainer, children: null };
  const obj4 = { style: tmp.generateGiftButton, children: null };
  const obj5 = { text: null, size: "sm", onPress: null };
  const intl2 = util.intl;
  obj5.text = intl2.string(util.t["w4+/BA"]);
  obj5.onPress = this.handleGenerateGiftCode;
  obj4.children = state(components_Button_Button.Button, obj5);
  obj3.children = state(React4, obj4);
  items[1] = state(React4, obj3);
  obj.children = items;
  return closure_1_15(React4, obj);
};
prototype["renderHeader"] = function renderHeader(source, children) {
  const tmp = closure_16(this.context);
  const isOpen = this.state.isOpen;
  ({ entitlements, application, sku } = this.props);
  let isGameItemSKUResult = SlayerStorefrontUtils.isGameItemSKU(sku);
  if (isGameItemSKUResult) {
    isGameItemSKUResult = null != application;
  }
  const obj2 = { accessibilityRole: "button", accessibilityState: { expanded: isOpen }, onPress: this.handleToggleOpen, children: null };
  const items = [tmp.groupCardHeader, ];
  let prop = null;
  if (isOpen) {
    prop = tmp.groupCardHeaderOpenRefresh;
  }
  const obj3 = { style: items, children: null };
  items[1] = prop;
  if (isGameItemSKUResult) {
    const obj4 = { sku, size: null, containerStyle: null };
    const tmp14 = SlayerStorefrontItemCardDefault;
    obj4.size = tmp2(1181).getIconSize(tmp2(1181).Icon.Sizes.LARGE);
    obj4.containerStyle = tmp.giftIcon;
    let tmp6Result = tmp6(tmp14, obj4);
    const tmp2Result = tmp2(1181);
  } else {
    tmp6Result = null;
    if (null != source) {
      const obj5 = { resizeMode: "contain", source, disableColor: true, size: tmp2(1181).Icon.Sizes.LARGE, style: tmp.giftIcon };
      tmp6Result = tmp6(tmp2(1181).Icon, obj5);
    }
  }
  const items1 = [tmp6Result, , ];
  const obj6 = { style: tmp.titleContainer, children: null };
  const items2 = [state(Text_Text.Text, { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", accessibilityRole: "header", children }), ];
  let socialLayerSubtitleContainer = isGameItemSKUResult;
  if (isGameItemSKUResult) {
    socialLayerSubtitleContainer = tmp.socialLayerSubtitleContainer;
  }
  const obj8 = { style: null, children: null };
  const items3 = [socialLayerSubtitleContainer, tmp.subtitleContainer];
  obj8.style = items3;
  let tmp6Result2 = isGameItemSKUResult;
  if (isGameItemSKUResult) {
    const obj9 = { game: application, size: GameIconDefault.Sizes.SIZE_24, skuId: sku.id };
    tmp6Result2 = tmp6(GameIconDefault, obj9);
  }
  const items4 = [tmp6Result2, ];
  const obj10 = { variant: "text-md/normal", color: "text-subtle", style: tmp.subtitle, children: null };
  const intl = tmp2(1119).intl;
  const format = intl.format;
  const t = tmp2(1119).t;
  if (isGameItemSKUResult) {
    const obj11 = { applicationName: application.name, copies: entitlements.length };
    let formatResult = format(t["6plpZi"], obj11);
  } else {
    const obj12 = { copies: entitlements.length };
    formatResult = format(t.zMcvcA, obj12);
  }
  obj10.children = formatResult;
  items4[1] = state(Text_Text.Text, obj10);
  obj8.children = items4;
  items2[1] = closure_1_15(React4, obj8);
  obj6.children = items2;
  items1[1] = closure_1_15(React4, obj6);
  if (isOpen) {
    let ChevronSmallRightIcon = tmp2(11444).ChevronSmallDownIcon;
  } else {
    ChevronSmallRightIcon = tmp2(7488).ChevronSmallRightIcon;
  }
  items1[2] = state(ChevronSmallRightIcon, {});
  obj3.children = items1;
  obj2.children = closure_1_15(React4, obj3);
  return state(timestampProducer, obj2);
};
prototype["getCardHeaderThumbnail"] = function getCardHeaderThumbnail(id, giftStyle) {
  if (constants2.STANDARD_BOX === giftStyle) {
    return _modDef13536;
  } else if (tmp.CAKE === giftStyle) {
    return _modDef13538;
  } else if (tmp.CHEST === giftStyle) {
    return _modDef13539;
  } else if (tmp.COFFEE === giftStyle) {
    return _modDef13537;
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    return _modDef13540;
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    return _modDef13541;
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    return _modDef13542;
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    return _modDef13543;
  } else if (tmp.NITROWEEN_STANDARD === giftStyle) {
    const obj = { uri: _modDef11358 };
    return obj;
  } else if (TIER_0.TIER_0 === id) {
    return _modDef13544;
  } else if (tmp3.TIER_1 === id) {
    return _modDef13547;
  } else {
    if (tmp3.TIER_2 !== id) {
      if (tmp3.LEGACY !== id) {
        return null;
      }
    }
    return _modDef13548;
  }
};
prototype["renderCardHeader"] = function renderCardHeader(sku) {
  const self = this;
  const props = this.props;
  ({ application, subscriptionPlan } = props);
  ({ id, name } = sku);
  const cardHeaderThumbnail = this.getCardHeaderThumbnail(id, props.giftStyle);
  const values = Object.values(TIER_0);
  if (values.includes(id)) {
    if (null == subscriptionPlan) {
      return null;
    } else {
      const intl = util.intl;
      if (subscriptionPlan.interval === constants.MONTH) {
        let Vd3Iu8 = tmp4(1119).t.rCJvqo;
      } else {
        Vd3Iu8 = tmp4(1119).t.Vd3Iu8;
      }
      const obj = { skuName: sku.name, intervalCount: subscriptionPlan.intervalCount };
      return self.renderHeader(cardHeaderThumbnail, intl.formatToPlainString(Vd3Iu8, obj));
    }
  } else {
    let renderHeaderResult = null;
    if (null != application) {
      let iconSource = application.getIconSource(32);
      if (iconSource == null) {
        iconSource = cardHeaderThumbnail;
      }
      renderHeaderResult = self.renderHeader(iconSource, name);
    }
    return renderHeaderResult;
  }
};
prototype["render"] = function render() {
  const self = this;
  let loading = closure_16(this.context);
  const props = this.props;
  ({ giftCodes, sku } = props);
  const obj = { style: null, children: null };
  const items = [, ];
  ({ giftGroupCard: arr[0], giftGroupCardRefresh: arr[1] } = loading);
  obj.style = items;
  ({ entitlements, isFetching } = props);
  const items1 = [this.renderCardHeader(sku), ];
  if (!this.state.isOpen) {
    items1[1] = null;
    obj.children = items1;
    return tmp(tmp2, obj);
  } else {
    if (isFetching) {
      const obj2 = { style: null };
      loading = loading.loading;
      obj2.style = loading;
      let tmpResult = tmp3(closure_5, obj2);
    } else {
      let result = null;
      if (giftCodes.length < entitlements.length) {
        result = self.renderGenerateGiftCodeRow();
      }
      const obj3 = { children: null };
      const items2 = [result, giftCodes.map((giftCode, index) => state(GiftCodeRowDefault, { giftCode, sku, isFirst: 0 === index }, giftCode.code))];
      obj3.children = items2;
      tmpResult = tmp(noop.Fragment, obj3);
    }
    const obj4 = { children: tmpResult };
    closure_14(tmp2, obj4);
  }
};
EntitlementGiftGroupCard.contextType = fn(4503).ThemeContext;
let items = [AuthenticationStore, SKUStore, ApplicationStore, GiftCodeStore, SubscriptionPlanStore];
let obj10 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
const size = fn(2);
let result = size.fileFinishedImporting("components_native/premium/EntitlementGiftGroupCard.tsx");

export default initialize.connectStores(items, (arg0) => {
  ({ skuId, subscriptionPlanId, giftStyle: require } = arg0);
  value = SKUStore.get(skuId);
  if (null == value) {
    const _Error = Error;
    const error = new Error("SKU was unavailable while rendering gift.");
    throw error;
  } else {
    const obj2 = { sku: value, isFetching: GiftCodeStore.getUserGiftCodesFetchingForSKUAndPlan(skuId, subscriptionPlanId), loadedAt: GiftCodeStore.getUserGiftCodesLoadedAtForSKUAndPlan(skuId, subscriptionPlanId), application: ApplicationStore.getApplication(value.applicationId), subscriptionPlan: null, giftCodes: null };
    let orFetchSubscriptionPlan = null;
    if (null != subscriptionPlanId) {
      orFetchSubscriptionPlan = SubscriptionUtils.getOrFetchSubscriptionPlan(subscriptionPlanId);
    }
    obj2.subscriptionPlan = orFetchSubscriptionPlan;
    const forGifterSKUAndPlan = GiftCodeStore.getForGifterSKUAndPlan(AuthenticationStore.getId(), skuId, subscriptionPlanId);
    const found = forGifterSKUAndPlan.filter((isClaimed) => !isClaimed.isClaimed);
    obj2.giftCodes = found.filter((giftStyle) => giftStyle.giftStyle === require);
    return obj2;
  }
})(EntitlementGiftGroupCard);
