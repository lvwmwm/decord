// Module ID: 15069
// Function ID: 114791
// Name: AccountLinkLargeBanner
// Dependencies: [31, 27, 1849, 1345, 33, 689, 5472, 15070, 9921, 4547, 4130, 624, 5462, 5482, 5167, 4660, 5119, 1273, 4126, 1212, 4543, 8689, 2]
// Exports: getScaledAccountLinkBannerHeight

// Module 15069 (AccountLinkLargeBanner)
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function AccountLinkLargeBanner(arg0) {
  let application;
  let importDefault;
  let require;
  ({ application, markAsDismissed: require, startAuthorization: importDefault } = arg0);
  const tmp = callback3();
  let obj = require(analyticsLocations[11]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getCurrentUser());
  analyticsLocations = importDefault(analyticsLocations[12])(importDefault(analyticsLocations[13]).MOBILE_ACCOUNT_LINK_LARGE_BANNER).analyticsLocations;
  const applicationAccountLinkBenefitConfig = application.applicationAccountLinkBenefitConfig;
  let reward_name;
  if (null != applicationAccountLinkBenefitConfig) {
    reward_name = applicationAccountLinkBenefitConfig.reward_name;
  }
  let tmp5 = null;
  if (null != reward_name) {
    obj = { variant: "secondary", style: tmp.card };
    obj = {
      accessibilityRole: "button",
      onPress() {
          return callback(outer1_6.USER_DISMISS);
        },
      style: tmp.closeButton,
      children: callback(require(analyticsLocations[16]).XSmallIcon, { size: "sm", color: "text-muted" })
    };
    const items1 = [callback(require(analyticsLocations[15]).PressableOpacity, obj), , , , ];
    const obj1 = { style: tmp.imagesContainer };
    const obj2 = { game: application, size: NORMAL };
    const items2 = [callback(importDefault(analyticsLocations[6]), obj2), , ];
    const obj3 = { style: tmp.ellipsisContainer };
    const obj4 = { style: tmp.ellipsisDot };
    const items3 = [callback(closure_4, obj4), , ];
    const obj5 = { style: tmp.ellipsisDot };
    items3[1] = callback(closure_4, obj5);
    const obj6 = { style: tmp.ellipsisDot };
    items3[2] = callback(closure_4, obj6);
    obj3.children = items3;
    items2[1] = callback2(closure_4, obj3);
    const obj7 = { user: stateFromStores, size: require(analyticsLocations[17]).AvatarSizes.LARGE_48, guildId: undefined };
    items2[2] = callback(require(analyticsLocations[17]).Avatar, obj7);
    obj1.children = items2;
    items1[1] = callback2(closure_4, obj1);
    const obj8 = { variant: c17, color: "mobile-text-heading-primary", style: tmp.title };
    const intl = require(analyticsLocations[19]).intl;
    const obj9 = { gameName: application.name };
    obj8.children = intl.formatToPlainString(require(analyticsLocations[19]).t["3gpxqO"], obj9);
    items1[2] = callback(require(analyticsLocations[18]).Text, obj8);
    const obj10 = { variant: c18, color: "text-muted", style: tmp.body };
    const intl2 = require(analyticsLocations[19]).intl;
    const obj11 = { rewardName: reward_name };
    obj10.children = intl2.formatToPlainString(require(analyticsLocations[19]).t.vxvKMm, obj11);
    items1[3] = callback(require(analyticsLocations[18]).Text, obj10);
    const obj12 = { style: tmp.ctaContainer };
    const obj13 = { variant: "secondary", size: "md" };
    const intl3 = require(analyticsLocations[19]).intl;
    obj13.text = intl3.string(require(analyticsLocations[19]).t["0mvtKL"]);
    obj13.onPress = function onPress() {
      callback2({ analyticsLocations });
    };
    const obj14 = { size: "sm" };
    obj13.icon = callback(require(analyticsLocations[21]).ExperimentalGameControllerLinkIcon, obj14);
    obj12.children = callback(require(analyticsLocations[20]).Button, obj13);
    items1[4] = callback(closure_4, obj12);
    obj.children = items1;
    tmp5 = callback2(require(analyticsLocations[14]).Card, obj);
  }
  return tmp5;
}
function AccountLinkMediumBanner(arg0) {
  let application;
  let importDefault;
  let require;
  ({ application, markAsDismissed: require, startAuthorization: importDefault } = arg0);
  const tmp = callback4();
  analyticsLocations = importDefault(analyticsLocations[12])(importDefault(analyticsLocations[13]).MOBILE_ACCOUNT_LINK_MEDIUM_BANNER).analyticsLocations;
  const applicationAccountLinkBenefitConfig = application.applicationAccountLinkBenefitConfig;
  let reward_name;
  if (null != applicationAccountLinkBenefitConfig) {
    reward_name = applicationAccountLinkBenefitConfig.reward_name;
  }
  const applicationAccountLinkBenefitConfig2 = application.applicationAccountLinkBenefitConfig;
  if (null != applicationAccountLinkBenefitConfig2) {
    const reward_image = applicationAccountLinkBenefitConfig2.reward_image;
  }
  let tmp4 = null;
  if (null != reward_name) {
    tmp4 = null;
    if (null != reward_image) {
      let obj = { variant: "secondary", style: tmp.card };
      obj = { style: tmp.contentContainer };
      obj = {};
      const obj1 = { uri: reward_image };
      obj.source = obj1;
      obj.style = tmp.rewardImage;
      obj.resizeMode = "contain";
      const items = [callback(closure_3, obj), , ];
      const obj2 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", style: tmp.bodyText };
      const intl = require(analyticsLocations[19]).intl;
      const obj3 = { gameName: application.name, rewardName: reward_name };
      obj2.children = intl.formatToPlainString(require(analyticsLocations[19]).t["V/C76E"], obj3);
      items[1] = callback(require(analyticsLocations[18]).Text, obj2);
      const obj4 = {
        accessibilityRole: "button",
        onPress() {
              return callback(outer1_6.USER_DISMISS);
            },
        style: tmp.closeButton,
        children: callback(require(analyticsLocations[16]).XSmallIcon, { size: "sm", color: "text-muted" })
      };
      items[2] = callback(require(analyticsLocations[15]).PressableOpacity, obj4);
      obj.children = items;
      const items1 = [callback2(closure_4, obj), ];
      const obj5 = { style: tmp.ctaContainer };
      const obj6 = { variant: "secondary", size: "sm" };
      const intl2 = require(analyticsLocations[19]).intl;
      obj6.text = intl2.string(require(analyticsLocations[19]).t["0mvtKL"]);
      obj6.onPress = function onPress() {
        callback2({ analyticsLocations });
      };
      const obj7 = { size: "xs" };
      obj6.icon = callback(require(analyticsLocations[21]).ExperimentalGameControllerLinkIcon, obj7);
      obj5.children = callback(require(analyticsLocations[20]).Button, obj6);
      items1[1] = callback(closure_4, obj5);
      obj.children = items1;
      tmp4 = callback2(require(analyticsLocations[14]).Card, obj);
    }
  }
  return tmp4;
}
({ Image: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const PX_8 = require("_createForOfIteratorHelperLoose").space.PX_8;
const PX_82 = require("_createForOfIteratorHelperLoose").space.PX_8;
const PX_12 = require("_createForOfIteratorHelperLoose").space.PX_12;
const PX_16 = require("_createForOfIteratorHelperLoose").space.PX_16;
const PX_4 = require("_createForOfIteratorHelperLoose").space.PX_4;
const NORMAL = require("GameIcon").GameIconSizes.NORMAL;
let closure_16 = require("GameIcon").GameIconImageSize[NORMAL];
let c17 = "heading-md/bold";
let c18 = "text-sm/medium";
const PX_162 = require("_createForOfIteratorHelperLoose").space.PX_16;
const PX_122 = require("_createForOfIteratorHelperLoose").space.PX_12;
let obj = { card: { padding: PX_12 } };
obj = { position: "absolute", top: require("_createForOfIteratorHelperLoose").space.PX_12, right: require("_createForOfIteratorHelperLoose").space.PX_12, width: 24, height: 24, alignItems: "center", justifyContent: "center", zIndex: 1 };
obj.closeButton = obj;
obj.imagesContainer = { flexDirection: "row", alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.ellipsisContainer = _createForOfIteratorHelperLoose;
obj.ellipsisDot = { width: require("_createForOfIteratorHelperLoose").space.PX_4, height: require("_createForOfIteratorHelperLoose").space.PX_4, borderRadius: require("_createForOfIteratorHelperLoose").space.PX_4 / 2, backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_MUTED };
obj.title = { marginTop: PX_16, textAlign: "center" };
obj.body = { marginTop: PX_4, textAlign: "center" };
obj.ctaContainer = { marginTop: PX_162 };
let closure_21 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj3 = { card: { padding: PX_12 }, closeButton: { width: 24, height: 24, alignItems: "center", justifyContent: "center", alignSelf: "flex-start" } };
let obj2 = { width: require("_createForOfIteratorHelperLoose").space.PX_4, height: require("_createForOfIteratorHelperLoose").space.PX_4, borderRadius: require("_createForOfIteratorHelperLoose").space.PX_4 / 2, backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_MUTED };
obj3.contentContainer = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj3.rewardImage = { width: 48, height: 48 };
obj3.bodyText = { flexGrow: 1, flexShrink: 1, alignSelf: "center" };
obj3.ctaContainer = { marginTop: PX_122, width: "100%" };
let closure_22 = _createForOfIteratorHelperLoose.createStyles(obj3);
let obj4 = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
const memoResult = importAllResult.memo((arg0) => {
  let obj = importDefault(15070);
  const config = obj.useConfig({ location: "AccountLinkBanner" });
  const bannerSize = config.bannerSize;
  let tmp3Result = null;
  if (config.enabled) {
    obj = {};
    let tmp7 = bannerSize === require(15070) /* apexExperiment */.MobileAccountLinkingBannerSize.LARGE;
    if (tmp7) {
      obj = {};
      const merged = Object.assign(arg0);
      tmp7 = callback(AccountLinkLargeBanner, obj);
    }
    const items = [tmp7, ];
    let tmp15 = bannerSize === require(15070) /* apexExperiment */.MobileAccountLinkingBannerSize.MEDIUM;
    if (tmp15) {
      const obj1 = {};
      const merged1 = Object.assign(arg0);
      tmp15 = callback(AccountLinkMediumBanner, obj1);
    }
    items[1] = tmp15;
    obj.children = items;
    tmp3Result = closure_8(closure_9, obj);
    const tmp3 = closure_8;
    const tmp4 = closure_9;
  }
  return tmp3Result;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/application_account_linking/native/AccountLinkBanner.tsx");

export default memoResult;
export const ACCOUNT_LINK_BANNER_MARGIN_TOP = PX_8;
export const ACCOUNT_LINK_BANNER_MARGIN_BOTTOM = PX_82;
export const getScaledAccountLinkBannerHeight = function getScaledAccountLinkBannerHeight(fontScale) {
  const config = importDefault(15070).getConfig({ location: "getScaledAccountLinkBannerHeight" });
  const bannerSize = config.bannerSize;
  if (!config.enabled) {
    return 0;
  } else if (bannerSize === require(15070) /* apexExperiment */.MobileAccountLinkingBannerSize.LARGE) {
    const sum = PX_8 + PX_12 + closure_16 + PX_16;
    const sum1 = sum + require(9921) /* scaleLineHeight */.scaleTextLineHeight(c17, fontScale) + PX_4;
    const obj2 = require(9921) /* scaleLineHeight */;
    const sum2 = sum1 + 2 * require(9921) /* scaleLineHeight */.scaleTextLineHeight(c18, fontScale) + PX_162;
    let num = sum2 + require(4547) /* getButtonPadding */.MEDIUM_BUTTON_HEIGHT + PX_12 + PX_82;
    const obj3 = require(9921) /* scaleLineHeight */;
  } else {
    num = 0;
    if (bannerSize === require(15070) /* apexExperiment */.MobileAccountLinkingBannerSize.MEDIUM) {
      const sum3 = PX_8 + PX_12 + 48 + PX_122;
      num = sum3 + require(4547) /* getButtonPadding */.SMALL_BUTTON_HEIGHT + PX_12 + PX_82;
    }
  }
};
