// Module ID: 11687
// Function ID: 11688
// Name: createSocialLayerStorefrontProductDetailsEmbed
// Dependencies: [32, 19, 5017, 5761, 1078, 8015, 8240, 1119, 11688, 7510, 7505, 3584, 558, 568, 9510, 4778, 11133, 1369, 1374, 504, 7447, 2]
// Exports: createSocialLayerStorefrontProductDetailsEmbed

// Module 11687 (createSocialLayerStorefrontProductDetailsEmbed)
import util from "util" /* 1119 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1369 */;
import GlobalUtils from "GlobalUtils" /* 1374 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7505 */;
import StorefrontUtils from "StorefrontUtils" /* 7510 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8240 */;
import SocialLayerStorefrontActionCreators from "SocialLayerStorefrontActionCreators" /* 11133 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5017 */;
import SKUStore from "SKUStore" /* 5761 */;

const require = globalThis.__r;

require = fn;
const PaymentGateways = fn(1078).PaymentGateways;
const InviteTypes = fn(8015).InviteTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/slayer_storefront/native/createSocialLayerStorefrontProductDetailsEmbed.tsx");

export const createSocialLayerStorefrontProductDetailsEmbed = function createSocialLayerStorefrontProductDetailsEmbed(theme) {
  ({ skuId, guildOrApplication } = theme);
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme.theme));
  value = SKUStore.get(skuId);
  let applicationId;
  if (value != null) {
    applicationId = value.applicationId;
  }
  const application = ApplicationStore.getApplication(applicationId);
  const isFetchingResult = SKUStore.isFetching(skuId);
  let result = null != applicationId;
  const tmp3 = getEmbedThemeColorsDefault(theme.theme);
  if (result) {
    result = obj2.isFetchingApplication(applicationId);
  }
  const didFetchingSkuFailResult = SKUStore.didFetchingSkuFail(skuId);
  let name;
  if (application != null) {
    name = application.name;
  }
  if (name == null) {
    const intl = util.intl;
    name = intl.string(util.t.vyaWs7).toUpperCase();
    const str = intl.string(util.t.vyaWs7);
  }
  if (!isFetchingResult) {
    if (null == value) {
      return null;
    } else {
      if (null != application) {
        if (tmp(11688)(application)) {
          if ("guild" !== guildOrApplication.type) {
            const result1 = StorefrontUtils.isSlayerSkuAvailableOnThisPlatform(value);
            const str4 = SlayerStorefrontUtils.getCardImageURL(value);
            let str1;
            if (str4 != null) {
              str1 = str4.toString();
            }
            if (str1 == null) {
              str1 = application.getIconURL(64);
            }
            const obj3 = {};
            const merged = Object.assign(baseColors);
            obj3.headerText = name;
            obj3.headerColor = colors.headerColor;
            obj3.titleText = value.name;
            obj3.titleColor = colors.titleColor;
            const intl2 = tmp12(1119).intl;
            obj3.subtitle = intl2.string(util.t.V91tvy);
            obj3.subtitleColor = colors.subtitleColor;
            obj3.thumbnailUrl = str1;
            obj3.thumbnailBackgroundColor = colors.thumbnailBackgroundColor;
            const intl3 = tmp12(1119).intl;
            const string = intl3.string;
            if (result1) {
              let stringResult = string(tmp12(1119).t.boqtTA);
            } else {
              stringResult = string(tmp(3584).BKf0MM);
            }
            obj3.acceptLabelText = stringResult;
            let prop;
            if (result1) {
              prop = colors.acceptLabelGreenColor;
            }
            obj3.acceptLabelColor = prop;
            obj3.acceptLabelBackgroundColor = result1 ? colors.acceptLabelGreenBackgroundColor : colors.acceptBlurpleLabelBackgroundColor;
            obj3.embedCanBeTapped = true;
            obj3.canBeAccepted = true;
            obj3.type = InviteTypes.GUILD;
            return obj3;
          }
        }
      }
      return null;
    }
  }
  const obj6 = {};
  const merged1 = Object.assign(baseColors);
  obj6.headerText = name;
  ({ resolvingGradientEnd: obj7.resolvingGradientEnd, resolvingGradientStart: obj7.resolvingGradientStart } = colors);
  obj6.type = InviteTypes.GUILD;
  return obj6;
};
export const useFetchSocialLayerStorefrontProductDetailsEmbedData = ReactCompilerGating.isReactCompilerEnabled() ? ((arr) => {
  const cResult = country(568).c(13);
  let obj = country(568);
  let tmp = country;
  let tmp4 = first;
  const mobileStoreFront = first(9510).useMobileStoreFront();
  country = undefined;
  if (mobileStoreFront != null) {
    country = mobileStoreFront.country;
  }
  if (cResult[0] !== arr) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function s(arg0, arg1) {
        [arr, arr2] = arg0;
        const iter = arg1.codedLinks[Symbol.iterator]();
        const tmp = _slicedToArray(arg0, 2);
        while (iter !== undefined) {
          ({ type, code } = nextResult);
          let tmp3 = type;
          let tmp4 = country;
          let tmp5 = closure_2;
          if (type === country(closure_2[15]).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
            let arr3 = arr.push(code.split("-"));
          } else if (tmp3 === tmp4(tmp5[15]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
            let arr5 = arr2.push(code.split("-"));
          }
          continue;
        }
        const items = [arr, arr2];
        return items;
      };
      cResult[2] = fn;
      let tmp8 = fn;
    } else {
      tmp8 = cResult[2];
    }
    let items = [[], []];
    const reduced = arr.reduce(tmp8, items);
    cResult[0] = arr;
    cResult[1] = reduced;
  } else {
    let tmp12 = _slicedToArray(cResult[1], 2);
    first = tmp12[0];
    dependencyMap = tmp14;
    if (cResult[3] === country) {
      if (cResult[4] === tmp14) {
        if (cResult[5] === first) {
          let tmp15 = cResult[6];
          let tmp16 = cResult[7];
        }
        const effect = noop.useEffect(tmp15, tmp16);
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          let items1 = [SKUStore];
          cResult[8] = items1;
          let tmp21 = items1;
        } else {
          tmp21 = cResult[8];
        }
        if (cResult[9] === tmp14) {
          if (cResult[10] === first) {
            let tmp23 = cResult[11];
            let tmp24 = cResult[12];
          }
          const stateFromStoresArray = tmp(504).useStateFromStoresArray(tmp21, tmp23, tmp24);
          tmp4(7447)(stateFromStoresArray);
        }
        class L {
          constructor() {
            items = [...closure_1.map((item) => closure_1_6.get(closure_1_3(item, 1)[0])), ...closure_2.map((item) => closure_1_6.get(closure_1_3(item, 1)[0]))];
            found = items.filter(closure_0(closure_2[18]).isNotNullish);
            set = new Set(found.map((applicationId) => applicationId.applicationId));
            items1 = [...set];
            return items1;
          }
        }
        const items2 = [tmp14, first];
        cResult[9] = tmp14;
        cResult[10] = first;
        cResult[11] = L;
        cResult[12] = items2;
        tmp24 = items2;
        tmp23 = L;
      }
    }
    const fn2 = function y() {
      while (tmp2 !== undefined) {
        [first, tmp8] = tmp3;
        let tmp7 = first;
        let isFetchingResult = null != SKUStore.get(first);
        if (!isFetchingResult) {
          isFetchingResult = SKUStore.isFetching(tmp7);
        }
        if (!isFetchingResult) {
          isFetchingResult = SKUStore.didFetchingSkuFail(tmp7);
        }
        if (!isFetchingResult) {
          let obj = SocialLayerStorefrontActionCreators;
          let obj2 = { withGoogleSkuIds: null, countryCode: null, paymentGateway: null };
          let obj3 = utils_PlatformUtils;
          obj2.withGoogleSkuIds = obj3.isAndroid();
          obj2.countryCode = country;
          let obj4 = utils_PlatformUtils;
          let APPLE;
          if (obj4.isIOS()) {
            APPLE = PaymentGateways.APPLE;
          }
          obj2.paymentGateway = APPLE;
          let socialLayerStorefrontSku = obj.fetchSocialLayerStorefrontSku(tmp8, tmp7, obj2);
        }
        continue;
      }
      for (const item10057 of closure_2) {
        [first1, tmp31] = item10057;
        let tmp30 = first1;
        let isFetchingResult1 = null != SKUStore.get(first1);
        if (!isFetchingResult1) {
          isFetchingResult1 = SKUStore.isFetching(tmp30);
        }
        if (!isFetchingResult1) {
          isFetchingResult1 = SKUStore.didFetchingSkuFail(tmp30);
        }
        if (!isFetchingResult1) {
          let obj5 = SocialLayerStorefrontActionCreators;
          let obj6 = { withGoogleSkuIds: null, countryCode: null, paymentGateway: null };
          let obj7 = utils_PlatformUtils;
          obj6.withGoogleSkuIds = obj7.isAndroid();
          obj6.countryCode = country;
          let obj8 = utils_PlatformUtils;
          let APPLE1;
          if (obj8.isIOS()) {
            APPLE1 = PaymentGateways.APPLE;
          }
          obj6.paymentGateway = APPLE1;
          let socialLayerStorefrontSkuForApplication = obj5.fetchSocialLayerStorefrontSkuForApplication(tmp31, tmp30, obj6);
        }
        continue;
      }
    };
    tmp17[0] = first;
    tmp17[1] = tmp12[1];
    tmp17[2] = country;
    cResult[3] = country;
    cResult[4] = tmp12[1];
    cResult[5] = first;
    cResult[6] = fn2;
    cResult[7] = tmp17;
    tmp16 = tmp17;
    tmp15 = fn2;
  }
}) : ((arg0) => {
  _require = arg0;
  const mobileStoreFront = country(first[14]).useMobileStoreFront();
  country = undefined;
  if (mobileStoreFront != null) {
    country = mobileStoreFront.country;
  }
  let items = [arg0];
  let tmp5 = _slicedToArray(noop.useMemo(() => {
    let items = [[], []];
    return closure_0.reduce((acc, item) => {
      [arr, arr2] = acc;
      const iter = item.codedLinks[Symbol.iterator]();
      while (iter !== undefined) {
        ({ type, code } = nextResult);
        let tmp2 = type;
        let tmp3 = closure_1_0;
        let tmp4 = first;
        if (type === closure_1_0(first[15]).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
          let arr3 = arr.push(code.split("-"));
        } else if (tmp2 === tmp3(tmp4[15]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
          let arr5 = arr2.push(code.split("-"));
        }
        continue;
      }
      const items = [arr, arr2];
      return items;
    }, items);
  }, items), 2);
  first = tmp5[0];
  _slicedToArray = tmp7;
  let items1 = [first, tmp5[1], country];
  const effect = noop.useEffect(() => {
    while (tmp2 !== undefined) {
      [first, tmp8] = tmp3;
      let tmp7 = first;
      let isFetchingResult = null != SKUStore.get(first);
      if (!isFetchingResult) {
        isFetchingResult = SKUStore.isFetching(tmp7);
      }
      if (!isFetchingResult) {
        isFetchingResult = SKUStore.didFetchingSkuFail(tmp7);
      }
      if (!isFetchingResult) {
        let obj = SocialLayerStorefrontActionCreators;
        let obj2 = { withGoogleSkuIds: null, countryCode: null, paymentGateway: null };
        let obj3 = utils_PlatformUtils;
        obj2.withGoogleSkuIds = obj3.isAndroid();
        obj2.countryCode = country;
        let obj4 = utils_PlatformUtils;
        let APPLE;
        if (obj4.isIOS()) {
          APPLE = PaymentGateways.APPLE;
        }
        obj2.paymentGateway = APPLE;
        let socialLayerStorefrontSku = obj.fetchSocialLayerStorefrontSku(tmp8, tmp7, obj2);
      }
      continue;
    }
    for (const item10057 of closure_3) {
      [first1, tmp31] = item10057;
      let tmp30 = first1;
      let isFetchingResult1 = null != SKUStore.get(first1);
      if (!isFetchingResult1) {
        isFetchingResult1 = SKUStore.isFetching(tmp30);
      }
      if (!isFetchingResult1) {
        isFetchingResult1 = SKUStore.didFetchingSkuFail(tmp30);
      }
      if (!isFetchingResult1) {
        let obj5 = SocialLayerStorefrontActionCreators;
        let obj6 = { withGoogleSkuIds: null, countryCode: null, paymentGateway: null };
        let obj7 = utils_PlatformUtils;
        obj6.withGoogleSkuIds = obj7.isAndroid();
        obj6.countryCode = country;
        let obj8 = utils_PlatformUtils;
        let APPLE1;
        if (obj8.isIOS()) {
          APPLE1 = PaymentGateways.APPLE;
        }
        obj6.paymentGateway = APPLE1;
        let socialLayerStorefrontSkuForApplication = obj5.fetchSocialLayerStorefrontSkuForApplication(tmp31, tmp30, obj6);
      }
      continue;
    }
  }, items1);
  let obj = country(first[14]);
  const tmp = country;
  const items2 = [SKUStore];
  const items3 = [tmp5[1], first];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items2, () => {
    const items = [
      ...first.map((item) => {
        [tmp] = item;
        return closure_1_6.get(tmp);
      }),
      ...closure_3.map((item) => {
        [tmp] = item;
        return closure_1_6.get(tmp);
      })
    ];
    const found = items.filter(GlobalUtils.isNotNullish);
    const items1 = [...new Set(found.map((applicationId) => applicationId.applicationId))];
    return items1;
  }, items3);
  tmp(first[20])(stateFromStoresArray);
});
