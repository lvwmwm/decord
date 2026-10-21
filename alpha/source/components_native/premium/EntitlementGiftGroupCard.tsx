// Module ID: 14766
// Function ID: 14767
// Name: EntitlementGiftGroupCard
// Dependencies: [19, 17, 2045, 502, 10982, 2057, 6803, 1087, 1394, 21, 4966, 587, 5020, 10983, 5216, 1128, 5226, 7307, 9376, 1202, 7238, 11026, 7282, 14407, 14409, 14410, 14408, 14411, 14412, 14413, 14414, 13793, 14415, 14418, 14419, 14767, 504, 10994, 2]

// Module 14766 (EntitlementGiftGroupCard)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import intl3 from "intl" /* 1128 */;
import native from "native" /* 1202 */;
import native2 from "native" /* 5020 */;
import Text_Text from "Text/Text" /* 5216 */;
import components_Button_Button from "components/Button/Button" /* 5226 */;
import GameIconDefault from "GameIcon" /* 7238 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7307 */;
import SlayerStorefrontItemCardDefault from "SlayerStorefrontItemCard" /* 9376 */;
import GiftCodeActionCreatorsDefault from "GiftCodeActionCreators" /* 10983 */;
import SubscriptionUtils from "SubscriptionUtils" /* 10994 */;
import _modDef13793 from "module_13793" /* 13793 */;
import AssetRegistryDefault from "AssetRegistry" /* 14407 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14408 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 14409 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 14410 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 14411 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 14412 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 14413 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 14414 */;
import AssetRegistryDefault9 from "AssetRegistry" /* 14415 */;
import AssetRegistryDefault10 from "AssetRegistry" /* 14418 */;
import AssetRegistryDefault11 from "AssetRegistry" /* 14419 */;
import GiftCodeRowDefault from "GiftCodeRow" /* 14767 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GiftCodeStore from "GiftCodeStore" /* 10982 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 2057 */;
import SKUStore from "SKUStore" /* 6803 */;
import PremiumConstants from "PremiumConstants" /* 1394 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4966 */;
import get_initialized from "get initialized" /* 504 */;
import size from "module_2" /* 2 */;

let closure_12;
let closure_14;
let closure_15;
let closure_4;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let unpackModuleId;
({ View: closure_4, ActivityIndicator: hasOwnProperty, TouchableWithoutFeedback: metroRequire } = react_native);
const Fonts = Constants.Fonts;
({ SubscriptionIntervalTypes: unpackModuleId, PremiumSubscriptionSKUs: closure_12, PremiumGiftStyles: map1 } = PremiumConstants);
let Fragment = Fragment_mod;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let obj = { giftGroupCard: { overflow: "hidden", marginTop: 8 }, giftGroupCardRefresh: obj2, title: obj3, arrow: obj4, subtitle: { fontSize: 14, lineHeight: 18 }, titleContainer: { marginLeft: 8, flex: 1 }, groupCardHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 16 }, groupCardHeaderLegacy: obj5, rowArrow: { height: 8, width: 12, marginRight: 8 }, giftIcon: obj6, generateGiftRow: { padding: 8, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, generateGiftRowLegacy: obj7, generateGiftRowText: { flexShrink: 1 }, generateGiftButton: { marginLeft: 12 }, loading: { marginTop: 8 }, generateButtonContainer: { flexGrow: 1, flexShrink: 0 }, groupCardHeaderOpen: obj8, groupCardHeaderOpenRefresh: obj9, subtitleContainer: { flexDirection: "row", alignItems: "center", gap: 4 }, socialLayerSubtitleContainer: { marginTop: 2 } };
obj2 = { borderWidth: 1, borderColor: nativeDefault.colors.CARD_BORDER_DEFAULT, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { fontSize: 16, lineHeight: 20, fontFamily: Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj4 = { color: nativeDefault.colors.ICON_SUBTLE };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj6 = { borderRadius: nativeDefault.radii.xs };
obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
const authStore4 = createLegacyClassComponentStyles(obj);
const Component = react.Component;
class EntitlementGiftGroupCard extends Component {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult._mountedAt = null;
    applyArgumentsResult.state = { isOpen: false };
    applyArgumentsResult.handleToggleOpen = function handleToggleOpen() {
      let skuId;
      let subscriptionPlanId;
      const props = require.props;
      let tmp2 = null != props.loadedAt;
      ({ skuId, subscriptionPlanId } = props);
      if (tmp2) {
        tmp2 = null != obj._mountedAt;
      }
      if (!tmp2) {
        tmp2 = !tmp;
      }
      if (!tmp2) {
        const obj2 = GiftCodeActionCreatorsDefault;
        const userGiftCodesForSKU = obj2.fetchUserGiftCodesForSKU(skuId, subscriptionPlanId);
      }
      require.setState({ isOpen: !require.state.isOpen });
    };
    applyArgumentsResult.handleGenerateGiftCode = function handleGenerateGiftCode() {
      let giftStyle;
      let skuId;
      let subscriptionPlanId;
      ({ skuId, subscriptionPlanId, giftStyle } = require.props);
      const obj = GiftCodeActionCreatorsDefault;
      const giftCode = obj.createGiftCode(skuId, subscriptionPlanId, giftStyle);
    };
    return applyArgumentsResult;
  }
  componentDidMount() {
    this._mountedAt = Date.now();
  }
  renderGenerateGiftCodeRow() {
    let Button;
    let intl;
    let intl2;
    let items;
    let obj4;
    let obj5;
    const tmp = closure_16(this.context);
    const obj = { style: tmp.generateGiftRow, children: items };
    const obj2 = { variant: "text-xs/medium", color: "text-subtle", style: tmp.generateGiftRowText, children: intl.string(intl3.t.lELyPj) };
    const Text = Text_Text.Text;
    intl = intl3.intl;
    items = [syncedClientThemes(Text, obj2), ];
    const obj3 = { style: tmp.generateButtonContainer, children: syncedClientThemes(React3, obj4) };
    obj4 = { style: tmp.generateGiftButton, children: syncedClientThemes(Button, obj5) };
    obj5 = { text: intl2.string(intl3.t["w4+/BA"]), size: "sm", onPress: this.handleGenerateGiftCode };
    Button = components_Button_Button.Button;
    intl2 = intl3.intl;
    items[1] = syncedClientThemes(React3, obj3);
    return authStore3(React3, obj);
  }
  renderHeader(source, children) {
    let ChevronSmallRightIcon;
    let application;
    let entitlements;
    let formatResult;
    let items1;
    let items2;
    let items3;
    let items4;
    let obj3;
    let sku;
    let tmp2Result;
    let tmp6Result;
    const tmp = closure_16(this.context);
    const isOpen = this.state.isOpen;
    ({ entitlements, application, sku } = this.props);
    const obj = SlayerStorefrontUtils;
    const isGameItemSKUResult = obj.isGameItemSKU(sku) && null != application;
    const items = [tmp.groupCardHeader, ];
    let prop = null;
    const obj2 = { accessibilityRole: "button", accessibilityState: { expanded: isOpen }, onPress: this.handleToggleOpen, children: authStore3(React3, obj3) };
    const tmp7 = metroRequire;
    if (isOpen) {
      prop = tmp.groupCardHeaderOpenRefresh;
    }
    obj3 = { style: items, children: items1 };
    items[1] = prop;
    if (isGameItemSKUResult) {
      const obj4 = { sku, size: tmp2Result.getIconSize(native.Icon.Sizes.LARGE), containerStyle: tmp.giftIcon };
      const tmp14 = SlayerStorefrontItemCardDefault;
      tmp2Result = native;
      tmp6Result = tmp6(tmp14, obj4);
    } else {
      tmp6Result = null;
      if (null != source) {
        const obj5 = { resizeMode: "contain", source, disableColor: true, size: native.Icon.Sizes.LARGE, style: tmp.giftIcon };
        const Icon = tmp2(1202).Icon;
        tmp6Result = tmp6(Icon, obj5);
      }
    }
    items1 = [tmp6Result, , ];
    const obj6 = { style: tmp.titleContainer, children: items2 };
    items2 = [, ];
    const obj7 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", accessibilityRole: "header", children };
    items2[0] = syncedClientThemes(Text_Text.Text, obj7);
    const obj8 = { style: items3, children: items4 };
    items3 = [, ];
    const tmp15 = isGameItemSKUResult && tmp.socialLayerSubtitleContainer;
    items3[0] = tmp15;
    items3[1] = tmp.subtitleContainer;
    let tmp6Result2 = isGameItemSKUResult;
    if (tmp6Result2) {
      const obj9 = { game: application, size: GameIconDefault.Sizes.SIZE_24, skuId: sku.id };
      const tmp18 = GameIconDefault;
      tmp6Result2 = tmp6(tmp18, obj9);
    }
    items4 = [tmp6Result2, ];
    const obj10 = { variant: "text-md/normal", color: "text-subtle", style: tmp.subtitle, children: formatResult };
    const Text = tmp2(5216).Text;
    const intl = tmp2(1128).intl;
    const format = intl.format;
    const t = tmp2(1128).t;
    if (isGameItemSKUResult) {
      const obj11 = { applicationName: application.name, copies: entitlements.length };
      formatResult = format(t["6plpZi"], obj11);
    } else {
      const obj12 = { copies: entitlements.length };
      formatResult = format(t.zMcvcA, obj12);
    }
    items4[1] = syncedClientThemes(Text, obj10);
    items2[1] = authStore3(React3, obj8);
    items1[1] = authStore3(React3, obj6);
    if (isOpen) {
      ChevronSmallRightIcon = tmp2(11026).ChevronSmallDownIcon;
    } else {
      ChevronSmallRightIcon = tmp2(7282).ChevronSmallRightIcon;
    }
    items1[2] = syncedClientThemes(ChevronSmallRightIcon, {});
    return syncedClientThemes(tmp7, obj2);
  }
  getCardHeaderThumbnail(id, giftStyle) {
    if (map1.STANDARD_BOX === giftStyle) {
      return AssetRegistryDefault;
    } else if (map1.CAKE === giftStyle) {
      return AssetRegistryDefault3;
    } else if (map1.CHEST === giftStyle) {
      return AssetRegistryDefault4;
    } else if (map1.COFFEE === giftStyle) {
      return AssetRegistryDefault2;
    } else if (map1.SEASONAL_STANDARD_BOX === giftStyle) {
      return AssetRegistryDefault5;
    } else if (map1.SEASONAL_CAKE === giftStyle) {
      return AssetRegistryDefault6;
    } else if (map1.SEASONAL_CHEST === giftStyle) {
      return AssetRegistryDefault7;
    } else if (map1.SEASONAL_COFFEE === giftStyle) {
      return AssetRegistryDefault8;
    } else if (map1.NITROWEEN_STANDARD === giftStyle) {
      const obj = { uri: _modDef13793 };
      return obj;
    } else if (TIER_0.TIER_0 === id) {
      return AssetRegistryDefault9;
    } else if (TIER_0.TIER_1 === id) {
      return AssetRegistryDefault10;
    } else {
      if (TIER_0.TIER_2 !== id) {
        if (TIER_0.LEGACY !== id) {
          return null;
        }
      }
      return AssetRegistryDefault11;
    }
  }
  renderCardHeader(sku) {
    let application;
    let id;
    let name;
    let subscriptionPlan;
    const self = this;
    const props = this.props;
    ({ application, subscriptionPlan } = props);
    ({ id, name } = sku);
    const cardHeaderThumbnail = this.getCardHeaderThumbnail(id, props.giftStyle);
    const values = Object.values(closure_12);
    if (values.includes(id)) {
      if (null == subscriptionPlan) {
        return null;
      } else {
        let Vd3Iu8;
        const intl = intl3.intl;
        const formatToPlainString = intl.formatToPlainString;
        if (subscriptionPlan.interval === unpackModuleId.MONTH) {
          Vd3Iu8 = tmp4(1128).t.rCJvqo;
        } else {
          Vd3Iu8 = tmp4(1128).t.Vd3Iu8;
        }
        const obj = { skuName: sku.name, intervalCount: subscriptionPlan.intervalCount };
        return self.renderHeader(cardHeaderThumbnail, formatToPlainString(Vd3Iu8, obj));
      }
    } else {
      let renderHeaderResult = null;
      if (null != application) {
        const renderHeader = self.renderHeader;
        let iconSource = application.getIconSource(32);
        if (iconSource == null) {
          iconSource = cardHeaderThumbnail;
        }
        renderHeaderResult = renderHeader(iconSource, name);
      }
      return renderHeaderResult;
    }
  }
  render() {
    let entitlements;
    let giftCodes;
    let isFetching;
    let items;
    let items1;
    let items2;
    let sku;
    const self = this;
    const tmp = closure_16(this.context);
    const props = this.props;
    ({ giftCodes, sku } = props);
    let obj = { style: items, children: items1 };
    items = [, ];
    ({ giftGroupCard: arr[0], giftGroupCardRefresh: arr[1] } = tmp);
    ({ entitlements, isFetching } = props);
    const isOpen = this.state.isOpen;
    items1 = [this.renderCardHeader(sku), ];
    let tmp5Result2 = null;
    if (isOpen) {
      let tmp2Result;
      if (isFetching) {
        const obj2 = { style: tmp.loading };
        tmp2Result = tmp5(closure_5, obj2);
      } else {
        let result = null;
        const Fragment = react.Fragment;
        if (giftCodes.length < entitlements.length) {
          result = self.renderGenerateGiftCodeRow();
        }
        const obj3 = { children: items2 };
        items2 = [
          result,
          giftCodes.map((giftCode, index) => {
                const obj = { giftCode, sku, isFirst: 0 === index };
                return syncedClientThemes(GiftCodeRowDefault, obj, giftCode.code);
              })
        ];
        tmp2Result = tmp2(Fragment, obj3);
      }
      const obj4 = { children: tmp2Result };
      tmp5Result2 = tmp5(tmp3, obj4);
    }
    items1[1] = tmp5Result2;
    return closure_15(closure_4, obj);
  }
}
const prototype = EntitlementGiftGroupCard.prototype;
EntitlementGiftGroupCard.contextType = native2.ThemeContext;
let items = [AuthenticationStore, SKUStore, ApplicationStore, GiftCodeStore, SubscriptionPlanStore];
const tmp12 = get_initialized.connectStores(items, function(arg0) {
  let closure_129_0;
  let found;
  let orFetchSubscriptionPlan;
  let skuId;
  let subscriptionPlanId;
  ({ skuId, subscriptionPlanId, giftStyle: closure_129_0 } = arg0);
  const value = SKUStore.get(skuId);
  if (null == value) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("SKU was unavailable while rendering gift.");
    throw error;
  } else {
    const obj2 = { sku: value, isFetching: GiftCodeStore.getUserGiftCodesFetchingForSKUAndPlan(skuId, subscriptionPlanId), loadedAt: GiftCodeStore.getUserGiftCodesLoadedAtForSKUAndPlan(skuId, subscriptionPlanId), application: ApplicationStore.getApplication(value.applicationId), subscriptionPlan: orFetchSubscriptionPlan, giftCodes: found.filter((giftStyle) => giftStyle.giftStyle === closure_1_0) };
    orFetchSubscriptionPlan = null;
    const obj3 = GiftCodeStore;
    if (null != subscriptionPlanId) {
      const obj = SubscriptionUtils;
      orFetchSubscriptionPlan = obj.getOrFetchSubscriptionPlan(subscriptionPlanId);
    }
    const forGifterSKUAndPlan = obj3.getForGifterSKUAndPlan(AuthenticationStore.getId(), skuId, subscriptionPlanId);
    found = forGifterSKUAndPlan.filter((isClaimed) => !isClaimed.isClaimed);
    return obj2;
  }
})(EntitlementGiftGroupCard);
let result = size.fileFinishedImporting("components_native/premium/EntitlementGiftGroupCard.tsx");

export default tmp12;
