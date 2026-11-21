// Module ID: 9091
// Function ID: 9092
// Name: SuperReactionUpsellActionSheet
// Dependencies: [19, 17, 1386, 1071, 21, 4746, 9092, 9093, 9094, 9095, 9096, 9097, 9098, 4913, 575, 7520, 504, 2173, 9099, 10505, 12, 14195, 4882, 14196, 1112, 4871, 1186, 5127, 2]
// Exports: default

// Module 9091 (SuperReactionUpsellActionSheet)
import _modDef12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import native from "native" /* 1186 */;
import dismissible_content from "dismissible_content" /* 4746 */;
import _mod4882 from "module_4882" /* 4882 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import AssetRegistry from "AssetRegistry" /* 9092 */;
import AssetRegistry2 from "AssetRegistry" /* 9093 */;
import AssetRegistry3 from "AssetRegistry" /* 9094 */;
import AssetRegistry4 from "AssetRegistry" /* 9095 */;
import AssetRegistry5 from "AssetRegistry" /* 9096 */;
import AssetRegistry6 from "AssetRegistry" /* 9097 */;
import AssetRegistry7 from "AssetRegistry" /* 9098 */;
import openPremiumModalDefault from "openPremiumModal" /* 9099 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 10505 */;
import SuperReactionLocalImageAnimationDefault from "SuperReactionLocalImageAnimation" /* 14195 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1386 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let StyleSheet;
let closure_4;
let obj2;
let size;
({ View: closure_4, StyleSheet } = react_native);
const AnalyticsPages = Constants.AnalyticsPages;
const jsx = Fragment.jsx;
const dismissibleContent = dismissible_content.DismissibleContent.SUPER_REACTIONS_COACHMARK_MOBILE;
let items = [AssetRegistry, AssetRegistry2, AssetRegistry3, AssetRegistry4, AssetRegistry2, AssetRegistry5, AssetRegistry6, AssetRegistry7];
let createStyles = createStyles_mod;
let obj = { fill: obj2, nitroIcon: size, description: { paddingHorizontal: 16 } };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", top: -150 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
size = { tintColor: nativeDefault.colors.WHITE, width: 32, height: 32, marginVertical: -8, marginRight: -4 };
let closure_10 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/SuperReactionUpsellActionSheet.tsx");

export default function SuperReactionCoachmarkActionSheet(onDismiss) {
  let currentUser;
  let nitroIcon;
  let analyticsLocations;
  let analyticsLocation;
  onDismiss = onDismiss.onDismiss;
  const tmp = closure_10();
  _require = tmp;
  let tmp2 = analyticsLocations;
  analyticsLocations = analyticsLocations(analyticsLocation[15])().analyticsLocations;
  analyticsLocation = { page: AnalyticsPages.PREMIUM_UPSELL_BURST_REACTIONS };
  let obj2 = require("get initialized");
  items = [UserStore];
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj3 = require("PremiumUtils");
  [][0] = tmp;
  let tmp8 = null;
  const isPremiumResult = obj3.isPremium(stateFromStores);
  if (!isPremiumResult) {
    tmp2(tmp3[23]);
    const intl = tmp4(tmp3[24]).intl;
    const obj5 = { backdropOpacity: require("burst_reactions/BurstReactionEffectUtils").BACKDROP_OPACITY, backdropChildren: tmp7 };
    const intl2 = tmp4(tmp3[24]).intl;
    const intl3 = tmp4(tmp3[24]).intl;
    const intl4 = tmp4(tmp3[24]).intl;
    tmp8 = <tmp2Result title={intl.string(require("intl").t.Wfl5zp)} backdropProps={obj5} description={intl2.string(require("intl").t.eikz43)} descriptionStyle={tmp.description} dismissibleContent={dismissibleContent} primaryButtonText={intl3.string(require("intl").t.sEAnVH)} primaryButtonIcon={function primaryButtonIcon() {
      return jsx(native.NitroWheel, { style: nitroIcon.nitroIcon });
    }} onPrimaryButtonPress={function onPrimaryButtonPress() {
      analyticsLocation = ActionSheetActionCreatorsDefault;
      analyticsLocation.hideActionSheet();
      const obj2 = { analyticsLocation, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
      const tmp2 = openPremiumModalDefault;
      tmp2(obj2);
    }} secondaryButtonText={intl4.string(require("intl").t.TulDPl)} onDismiss={onDismiss} />;
  }
  return tmp8;
};
