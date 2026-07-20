// Module ID: 14888
// Function ID: 112201
// Name: AccountLinkLargeBanner
// Dependencies: []
// Exports: getScaledAccountLinkBannerHeight

// Module 14888 (AccountLinkLargeBanner)
function AccountLinkLargeBanner(arg0) {
  let application;
  ({ application, markAsDismissed: closure_0, startAuthorization: closure_1 } = arg0);
  const tmp = callback3();
  let obj = arg1(dependencyMap[11]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const dependencyMap = importDefault(dependencyMap[12])(importDefault(dependencyMap[13]).MOBILE_ACCOUNT_LINK_LARGE_BANNER).analyticsLocations;
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
          return callback(constants.USER_DISMISS);
        },
      style: tmp.closeButton,
      children: callback(arg1(dependencyMap[16]).XSmallIcon, {})
    };
    const items1 = [callback(arg1(dependencyMap[15]).PressableOpacity, obj), , , , ];
    const obj1 = { style: tmp.imagesContainer };
    const obj2 = { game: application, size: NORMAL };
    const items2 = [callback(importDefault(dependencyMap[6]), obj2), , ];
    const obj3 = { style: tmp.ellipsisContainer };
    const obj4 = { style: tmp.ellipsisDot };
    const items3 = [callback(closure_4, obj4), , ];
    const obj5 = { style: tmp.ellipsisDot };
    items3[1] = callback(closure_4, obj5);
    const obj6 = { style: tmp.ellipsisDot };
    items3[2] = callback(closure_4, obj6);
    obj3.children = items3;
    items2[1] = callback2(closure_4, obj3);
    const obj7 = { user: stateFromStores, size: arg1(dependencyMap[17]).AvatarSizes.LARGE_48, guildId: undefined };
    items2[2] = callback(arg1(dependencyMap[17]).Avatar, obj7);
    obj1.children = items2;
    items1[1] = callback2(closure_4, obj1);
    const obj8 = { variant: closure_17, color: "mobile-text-heading-primary", style: tmp.title };
    const intl = arg1(dependencyMap[19]).intl;
    const obj9 = { gameName: application.name };
    obj8.children = intl.formatToPlainString(arg1(dependencyMap[19]).t.3gpxqO, obj9);
    items1[2] = callback(arg1(dependencyMap[18]).Text, obj8);
    const obj10 = { variant: closure_18, color: "text-muted", style: tmp.body };
    const intl2 = arg1(dependencyMap[19]).intl;
    const obj11 = { rewardName: reward_name };
    obj10.children = intl2.formatToPlainString(arg1(dependencyMap[19]).t.vxvKMm, obj11);
    items1[3] = callback(arg1(dependencyMap[18]).Text, obj10);
    const obj12 = { style: tmp.ctaContainer };
    const obj13 = { <string:1522289750>: "r", <string:570601313>: "isArray" };
    const intl3 = arg1(dependencyMap[19]).intl;
    obj13.text = intl3.string(arg1(dependencyMap[19]).t.0mvtKL);
    obj13.onPress = function onPress() {
      callback2({ analyticsLocations });
    };
    const obj14 = { size: "sm" };
    obj13.icon = callback(arg1(dependencyMap[21]).ExperimentalGameControllerLinkIcon, obj14);
    obj12.children = callback(arg1(dependencyMap[20]).Button, obj13);
    items1[4] = callback(closure_4, obj12);
    obj.children = items1;
    tmp5 = callback2(arg1(dependencyMap[14]).Card, obj);
  }
  return tmp5;
}
function AccountLinkMediumBanner(arg0) {
  let application;
  ({ application, markAsDismissed: closure_0, startAuthorization: closure_1 } = arg0);
  const tmp = callback4();
  const dependencyMap = importDefault(dependencyMap[12])(importDefault(dependencyMap[13]).MOBILE_ACCOUNT_LINK_MEDIUM_BANNER).analyticsLocations;
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
      const obj2 = { INTEGRATION_CREATE: "polite", ConstraintReasonCode: "column", style: tmp.bodyText };
      const intl = arg1(dependencyMap[19]).intl;
      const obj3 = { gameName: application.name, rewardName: reward_name };
      obj2.children = intl.formatToPlainString(arg1(dependencyMap[19]).t.V/C76E, obj3);
      items[1] = callback(arg1(dependencyMap[18]).Text, obj2);
      const obj4 = {
        accessibilityRole: "button",
        onPress() {
              return callback(constants.USER_DISMISS);
            },
        style: tmp.closeButton,
        children: callback(arg1(dependencyMap[16]).XSmallIcon, {})
      };
      items[2] = callback(arg1(dependencyMap[15]).PressableOpacity, obj4);
      obj.children = items;
      const items1 = [callback2(closure_4, obj), ];
      const obj5 = { style: tmp.ctaContainer };
      const obj6 = { <string:1522289750>: false, <string:570601313>: null };
      const intl2 = arg1(dependencyMap[19]).intl;
      obj6.text = intl2.string(arg1(dependencyMap[19]).t.0mvtKL);
      obj6.onPress = function onPress() {
        callback2({ analyticsLocations });
      };
      const obj7 = { size: "xs" };
      obj6.icon = callback(arg1(dependencyMap[21]).ExperimentalGameControllerLinkIcon, obj7);
      obj5.children = callback(arg1(dependencyMap[20]).Button, obj6);
      items1[1] = callback(closure_4, obj5);
      obj.children = items1;
      tmp4 = callback2(arg1(dependencyMap[14]).Card, obj);
    }
  }
  return tmp4;
}
const importAllResult = importAll(dependencyMap[0]);
({ Image: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
const ContentDismissActionType = arg1(dependencyMap[3]).ContentDismissActionType;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = arg1(dependencyMap[4]));
const PX_8 = importDefault(dependencyMap[5]).space.PX_8;
const PX_82 = importDefault(dependencyMap[5]).space.PX_8;
const PX_12 = importDefault(dependencyMap[5]).space.PX_12;
const PX_16 = importDefault(dependencyMap[5]).space.PX_16;
const PX_4 = importDefault(dependencyMap[5]).space.PX_4;
const NORMAL = arg1(dependencyMap[6]).GameIconSizes.NORMAL;
let closure_16 = arg1(dependencyMap[6]).GameIconImageSize[NORMAL];
let closure_17 = "heading-md/bold";
let closure_18 = "text-sm/medium";
const PX_162 = importDefault(dependencyMap[5]).space.PX_16;
const PX_122 = importDefault(dependencyMap[5]).space.PX_12;
let obj1 = arg1(dependencyMap[10]);
let obj = { card: { padding: PX_12 } };
obj = { top: importDefault(dependencyMap[5]).space.PX_12, right: importDefault(dependencyMap[5]).space.PX_12 };
obj.closeButton = obj;
obj.imagesContainer = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null };
obj1 = { -9223372036854775808: true, filter: true, marginHorizontal: importDefault(dependencyMap[5]).space.PX_8, gap: importDefault(dependencyMap[5]).space.PX_4 };
obj.ellipsisContainer = obj1;
const tmp3 = arg1(dependencyMap[4]);
obj.ellipsisDot = { width: importDefault(dependencyMap[5]).space.PX_4, height: importDefault(dependencyMap[5]).space.PX_4, borderRadius: importDefault(dependencyMap[5]).space.PX_4 / 2, backgroundColor: importDefault(dependencyMap[5]).colors.INTERACTIVE_MUTED };
obj.title = { marginTop: PX_16, textAlign: "center" };
obj.body = { marginTop: PX_4, textAlign: "center" };
obj.ctaContainer = { marginTop: PX_162 };
let closure_21 = obj1.createStyles(obj);
const obj2 = { width: importDefault(dependencyMap[5]).space.PX_4, height: importDefault(dependencyMap[5]).space.PX_4, borderRadius: importDefault(dependencyMap[5]).space.PX_4 / 2, backgroundColor: importDefault(dependencyMap[5]).colors.INTERACTIVE_MUTED };
const obj3 = { card: { padding: PX_12 }, closeButton: {} };
const obj7 = arg1(dependencyMap[10]);
obj3.contentContainer = { flexDirection: "row", gap: importDefault(dependencyMap[5]).space.PX_12 };
obj3.rewardImage = {};
obj3.bodyText = {};
obj3.ctaContainer = { marginTop: PX_122, width: "100%" };
let closure_22 = obj7.createStyles(obj3);
const obj4 = { flexDirection: "row", gap: importDefault(dependencyMap[5]).space.PX_12 };
const memoResult = importAllResult.memo((arg0) => {
  let obj = importDefault(dependencyMap[7]);
  const config = obj.useConfig({ location: "AccountLinkBanner" });
  const bannerSize = config.bannerSize;
  let tmp3Result = null;
  if (config.enabled) {
    obj = {};
    let tmp7 = bannerSize === arg1(dependencyMap[7]).MobileAccountLinkingBannerSize.LARGE;
    if (tmp7) {
      obj = {};
      const merged = Object.assign(arg0);
      tmp7 = callback(AccountLinkLargeBanner, obj);
    }
    const items = [tmp7, ];
    let tmp15 = bannerSize === arg1(dependencyMap[7]).MobileAccountLinkingBannerSize.MEDIUM;
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
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/application_account_linking/native/AccountLinkBanner.tsx");

export default memoResult;
export const ACCOUNT_LINK_BANNER_MARGIN_TOP = PX_8;
export const ACCOUNT_LINK_BANNER_MARGIN_BOTTOM = PX_82;
export const getScaledAccountLinkBannerHeight = function getScaledAccountLinkBannerHeight(fontScale) {
  const config = importDefault(dependencyMap[7]).getConfig({ location: "getScaledAccountLinkBannerHeight" });
  const bannerSize = config.bannerSize;
  if (!config.enabled) {
    return 0;
  } else if (bannerSize === arg1(dependencyMap[7]).MobileAccountLinkingBannerSize.LARGE) {
    const sum = PX_8 + PX_12 + closure_16 + PX_16;
    const sum1 = sum + arg1(dependencyMap[8]).scaleTextLineHeight(closure_17, fontScale) + PX_4;
    const obj2 = arg1(dependencyMap[8]);
    const sum2 = sum1 + 2 * arg1(dependencyMap[8]).scaleTextLineHeight(closure_18, fontScale) + PX_162;
    let num = sum2 + arg1(dependencyMap[9]).MEDIUM_BUTTON_HEIGHT + PX_12 + PX_82;
    const obj3 = arg1(dependencyMap[8]);
  } else {
    num = 0;
    if (bannerSize === arg1(dependencyMap[7]).MobileAccountLinkingBannerSize.MEDIUM) {
      const sum3 = PX_8 + PX_12 + 48 + PX_122;
      num = sum3 + arg1(dependencyMap[9]).SMALL_BUTTON_HEIGHT + PX_12 + PX_82;
    }
  }
};
