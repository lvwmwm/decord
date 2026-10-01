// Module ID: 15826
// Function ID: 15827
// Name: AccountLinkBanner
// Dependencies: [19, 17, 1372, 2042, 21, 576, 6593, 9578, 5286, 4836, 563, 6583, 6603, 5919, 5435, 5992, 1177, 4832, 1115, 5281, 8197, 2]
// Exports: getScaledAccountLinkBannerHeight

// Module 15826 (AccountLinkBanner)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import ButtonConstants from "ButtonConstants" /* 5286 */;
import GameIcon from "GameIcon" /* 6593 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 9578 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;

let metroImportDefault;
let metroRequire;
let obj2;
let size;
let size1;
function AccountLinkLargeBanner(arg0) {
  let Button;
  let application;
  let currentUser;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let items3;
  let obj12;
  let obj14;
  let obj16;
  ({ application, markAsDismissed: require, startAuthorization: importDefault } = arg0);
  let analyticsLocations;
  const tmp = closure_18();
  let obj = require("useStateFromStores");
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp6 = require("useAnalyticsLocations");
  analyticsLocations = tmp6(require("AnalyticsLocation").MOBILE_ACCOUNT_LINK_LARGE_BANNER).analyticsLocations;
  const applicationAccountLinkBenefitConfig = application.applicationAccountLinkBenefitConfig;
  let reward_name;
  const name = application.name;
  const tmp5 = importDefault;
  if (applicationAccountLinkBenefitConfig != null) {
    reward_name = applicationAccountLinkBenefitConfig.reward_name;
  }
  let tmp8 = null;
  if (null != reward_name) {
    const obj2 = { variant: "secondary", style: tmp.card, children: items1 };
    const Card = tmp2(tmp3[13]).Card;
    const obj3 = {
      accessibilityRole: "button",
      onPress() {
          return require(ContentDismissActionType.USER_DISMISS);
        },
      style: tmp.closeButton,
      children: closure_6(require("XSmallIcon").XSmallIcon, { size: "sm", color: "text-muted" })
    };
    const PressableOpacity = tmp2(tmp3[14]).PressableOpacity;
    items1 = [closure_6(PressableOpacity, obj3), , , , ];
    const obj4 = { style: tmp.imagesContainer, children: items2 };
    const obj5 = { game: application, size: NORMAL };
    items2 = [closure_6(tmp5(analyticsLocations[6]), obj5), , ];
    const obj6 = { style: tmp.ellipsisContainer, children: items3 };
    const obj7 = { style: tmp.ellipsisDot };
    items3 = [closure_6(View, obj7), , ];
    const obj8 = { style: tmp.ellipsisDot };
    items3[1] = closure_6(View, obj8);
    const obj9 = { style: tmp.ellipsisDot };
    items3[2] = closure_6(View, obj9);
    items2[1] = closure_7(View, obj6);
    const obj10 = { user: stateFromStores, size: require("native").AvatarSizes.LARGE_48, guildId: "Array" };
    const Avatar = tmp2(tmp3[16]).Avatar;
    items2[2] = closure_6(Avatar, obj10);
    items1[1] = closure_7(View, obj4);
    const obj11 = { variant, color: "mobile-text-heading-primary", style: tmp.title, children: intl.formatToPlainString(require("intl").t["3gpxqO"], obj12) };
    const Text = tmp2(tmp3[17]).Text;
    intl = tmp2(tmp3[18]).intl;
    obj12 = { gameName: name };
    items1[2] = closure_6(Text, obj11);
    const obj13 = { variant: variant2, color: "text-muted", style: tmp.body, children: intl2.formatToPlainString(require("intl").t.vxvKMm, obj14) };
    const Text2 = tmp2(tmp3[17]).Text;
    intl2 = tmp2(tmp3[18]).intl;
    obj14 = { rewardName: reward_name };
    items1[3] = closure_6(Text2, obj13);
    const obj15 = { style: tmp.ctaContainer, children: closure_6(Button, obj16) };
    obj16 = {
      variant: "secondary",
      size: "md",
      text: intl3.string(require("intl").t["0mvtKL"]),
      onPress() {
          const obj = { analyticsLocations };
          importDefault(obj);
        },
      icon: closure_6(require("ExperimentalGameControllerLinkIcon").ExperimentalGameControllerLinkIcon, { size: "sm" })
    };
    Button = tmp2(tmp3[19]).Button;
    intl3 = tmp2(tmp3[18]).intl;
    items1[4] = closure_6(View, obj15);
    tmp8 = closure_7(Card, obj2);
  }
  return tmp8;
}
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
const PX_82 = nativeDefault.space.PX_8;
const PX_12 = nativeDefault.space.PX_12;
const PX_16 = nativeDefault.space.PX_16;
const PX_4 = nativeDefault.space.PX_4;
const NORMAL = GameIcon.GameIconSizes.NORMAL;
let closure_14 = GameIcon.GameIconImageSize[NORMAL];
let c15 = "heading-md/bold";
let c16 = "text-sm/medium";
const PX_162 = nativeDefault.space.PX_16;
let createStyles = createStyles_mod;
let obj = { card: { padding: PX_12 }, closeButton: size, imagesContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, ellipsisContainer: obj2, ellipsisDot: size1, title: { marginTop: PX_16, textAlign: "center" }, body: { marginTop: PX_4, textAlign: "center" }, ctaContainer: { marginTop: PX_162 } };
size = { position: "absolute", top: nativeDefault.space.PX_12, right: nativeDefault.space.PX_12, width: 24, height: 24, alignItems: "center", justifyContent: "center", zIndex: 1 };
createStyles = createStyles.createStyles;
obj2 = { flexDirection: "row", alignItems: "center", marginHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
size1 = { width: nativeDefault.space.PX_4, height: nativeDefault.space.PX_4, borderRadius: nativeDefault.space.PX_4 / 2, backgroundColor: nativeDefault.colors.INTERACTIVE_MUTED };
let closure_18 = createStyles(obj);
const memoResult = react.memo((arg0) => {
  const obj = {};
  const merged = Object.assign(arg0);
  return metroRequire(AccountLinkLargeBanner, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/application_account_linking/native/AccountLinkBanner.tsx");

export default memoResult;
export const ACCOUNT_LINK_BANNER_MARGIN_TOP = PX_8;
export const ACCOUNT_LINK_BANNER_MARGIN_BOTTOM = PX_82;
export const getScaledAccountLinkBannerHeight = function getScaledAccountLinkBannerHeight(fontScale) {
  const sum = PX_8 + PX_12 + closure_14 + PX_16;
  const obj = useScaledTextLineHeight;
  const sum1 = sum + obj.scaleTextLineHeight(c15, fontScale) + PX_4;
  const obj2 = useScaledTextLineHeight;
  const sum2 = sum1 + 2 * obj2.scaleTextLineHeight(c16, fontScale) + PX_162;
  return sum2 + ButtonConstants.MEDIUM_BUTTON_HEIGHT + PX_12 + PX_82;
};
