// Module ID: 11024
// Function ID: 11025
// Name: createSocialLayerStorefrontProductDetailsEmbed
// Dependencies: [19, 5063, 5822, 7155, 7387, 1115, 11025, 6652, 6647, 3585, 4821, 11026, 504, 1370, 6589, 2]
// Exports: createSocialLayerStorefrontProductDetailsEmbed, useFetchSocialLayerStorefrontProductDetailsEmbedApplications

// Module 11024 (createSocialLayerStorefrontProductDetailsEmbed)
import intl4 from "intl" /* 1115 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 6647 */;
import StorefrontUtils from "StorefrontUtils" /* 6652 */;
import Constants from "Constants" /* 7155 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 7387 */;
import isSocialLayerApplicationDefault from "isSocialLayerApplication" /* 11025 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;
import SKUStore from "SKUStore" /* 5822 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, arr;

const InviteTypes = Constants.InviteTypes;
let result = size.fileFinishedImporting("modules/slayer_storefront/native/createSocialLayerStorefrontProductDetailsEmbed.tsx");

export const createSocialLayerStorefrontProductDetailsEmbed = function createSocialLayerStorefrontProductDetailsEmbed(theme) {
  let baseColors;
  let colors;
  let guildOrApplication;
  let intl2;
  let prop;
  let skuId;
  let stringResult;
  ({ skuId, guildOrApplication } = theme);
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme.theme));
  getEmbedThemeColorsDefault(theme.theme);
  const value = SKUStore.get(skuId);
  let applicationId;
  if (value != null) {
    applicationId = value.applicationId;
  }
  const application = ApplicationStore.getApplication(applicationId);
  let result = null != applicationId;
  const isFetchingResult = SKUStore.isFetching(skuId);
  SKUStore.didFetchingSkuFail(skuId);
  if (result) {
    result = obj2.isFetchingApplication(applicationId);
  }
  let name;
  null != applicationId && ApplicationStore.didFetchingApplicationFail(applicationId);
  if (application != null) {
    name = application.name;
  }
  if (name == null) {
    const intl = intl4.intl;
    const str = intl.string(intl4.t.vyaWs7);
    name = str.toUpperCase();
  }
  if (!isFetchingResult) {
    if (null == value) {
      return null;
    } else {
      if (null != application) {
        if (isSocialLayerApplicationDefault(application)) {
          if ("guild" !== guildOrApplication.type) {
            const obj4 = StorefrontUtils;
            const result1 = obj4.isSlayerSkuAvailableOnThisPlatform(value);
            const obj5 = SlayerStorefrontUtils;
            const str4 = obj5.getCardImageURL(value);
            let str1;
            if (str4 != null) {
              str1 = str4.toString();
            }
            if (str1 == null) {
              str1 = application.getIconURL(64);
            }
            const obj3 = { headerText: name, headerColor: colors.headerColor, titleText: value.name, titleColor: colors.titleColor, subtitle: intl2.string(intl4.t.V91tvy), subtitleColor: colors.subtitleColor, thumbnailUrl: str1, thumbnailBackgroundColor: colors.thumbnailBackgroundColor, acceptLabelText: stringResult, acceptLabelColor: prop, acceptLabelBackgroundColor: result1 ? colors.acceptLabelGreenBackgroundColor : colors.acceptBlurpleLabelBackgroundColor, embedCanBeTapped: true, canBeAccepted: true, type: InviteTypes.GUILD };
            const merged = Object.assign(baseColors);
            intl2 = tmp12(1115).intl;
            const intl3 = tmp12(1115).intl;
            const string = intl3.string;
            if (result1) {
              stringResult = string(tmp12(1115).t.boqtTA);
            } else {
              stringResult = string(tmp(3585).BKf0MM);
            }
            prop = undefined;
            if (result1) {
              prop = colors.acceptLabelGreenColor;
            }
            return obj3;
          }
        }
      }
      return null;
    }
  }
  const obj6 = { headerText: name, type: InviteTypes.GUILD };
  const merged1 = Object.assign(baseColors);
  ({ resolvingGradientEnd: obj7.resolvingGradientEnd, resolvingGradientStart: obj7.resolvingGradientStart } = colors);
  return obj6;
};
export const useFetchSocialLayerStorefrontProductDetailsEmbedApplications = function useFetchSocialLayerStorefrontProductDetailsEmbedApplications(stateFromStores) {
  _require = stateFromStores;
  let items = [stateFromStores];
  const memo = react.useMemo(() => stateFromStores.reduce((arr, item) => {
    let code;
    let type;
    const iter = item.codedLinks[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      ({ type, code } = nextResult);
      let tmp3 = stateFromStores;
      let tmp4 = closure_1_2;
      if (type === stateFromStores(closure_1_2[10]).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
        let tmp3Result = tmp3(tmp4[11]);
        let result = tmp3Result.parseStorefrontCodedLink(code);
        let tmp8 = result;
        let tmp9 = null != result;
        if (tmp9) {
          tmp9 = 1 === tmp8.skuIds.length;
        }
        if (tmp9) {
          arr = arr.push(tmp8.skuIds[0]);
        }
      }
      continue;
    }
    return arr;
  }, []), items);
  const items1 = [SKUStore];
  const items2 = [memo];
  const obj = require("get initialized");
  const stateFromStoresArray = obj.useStateFromStoresArray(items1, () => {
    const f116039 = (applicationId) => applicationId.applicationId;
    const mapped = memo.map((item) => closure_1_5.get(item));
    const found = mapped.filter(GlobalUtils.isNotNullish);
    const items = [...new Set(found.map(f116039))];
    new Set(found.map(f116039));
    return items;
  }, items2);
  let tmp3 = memo(6589)(stateFromStoresArray);
};
