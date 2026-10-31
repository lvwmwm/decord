// Module ID: 16991
// Function ID: 16992
// Name: HexagonCampaignQuestHomeHeader
// Dependencies: [19, 17, 5039, 1072, 21, 5014, 575, 5080, 5043, 5596, 671, 7862, 6788, 7871, 6784, 7819, 16992, 5717, 17003, 5587, 17004, 5624, 1113, 4285, 17005, 6027, 16472, 5634, 5021, 2]
// Exports: default

// Module 16991 (HexagonCampaignQuestHomeHeader)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5039 */;
import QuestTypes from "QuestTypes" /* 6784 */;
import AdCreativeType from "AdCreativeType" /* 6788 */;
import getDeviceMetadataDefault from "getDeviceMetadata" /* 7819 */;
import AnalyticsActions from "AnalyticsActions" /* 7862 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7871 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let rect;
let size;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
let closure_6 = HexagonCampaignConstants.HEXAGON_CAMPAIGN_AD_CONTENT_ID;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, banner: { width: "100%", aspectRatio: 1 }, bannerImage: { width: "100%", height: "100%" }, logo: size, sponsoredTag: rect, cardShadow: obj3, card: obj4, cardArt: obj5, cardContent: obj6, cardBody: { opacity: 0.8 } };
obj2 = { width: "100%", maxWidth: 448, alignSelf: "center", marginBottom: nativeDefault.space.PX_40 };
createStyles = createStyles.createStyles;
size = { position: "absolute", top: nativeDefault.space.PX_4, left: nativeDefault.space.PX_8, width: 88, height: 88 };
rect = { position: "absolute", top: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
obj3 = { marginTop: -146, marginHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.xl, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj4 = { borderRadius: nativeDefault.radii.xl, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj5 = { alignItems: "center", paddingTop: nativeDefault.space.PX_12 };
obj6 = { paddingTop: nativeDefault.space.PX_10, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let closure_10 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignQuestHomeHeader.tsx");

export default function HexagonCampaignQuestHomeHeader() {
  let Text;
  let adContentId;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let isHexagonCampaignQuestHomeHeaderEnabled;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj10;
  let obj12;
  let obj20;
  let token;
  let tmp = closure_10();
  let obj = isHexagonCampaignQuestHomeHeaderEnabled(5080);
  const theme = obj.useThemeContext().theme;
  let obj2 = isHexagonCampaignQuestHomeHeaderEnabled(5043);
  isHexagonCampaignQuestHomeHeaderEnabled = obj2.useIsHexagonCampaignQuestHomeHeaderEnabled("HexagonCampaignQuestHomeHeader");
  let obj3 = isHexagonCampaignQuestHomeHeaderEnabled(5596);
  token = obj3.useToken(token(575).colors.BACKGROUND_BASE_LOWEST);
  let items = [token];
  const items1 = [isHexagonCampaignQuestHomeHeaderEnabled];
  const memo = react.useMemo(() => {
    const items = [0, 0.83, 1];
    return items.map((item) => {
      const obj = token(dependencyMap[10])(closure_1_1);
      const alphaResult = obj.alpha(item);
      return alphaResult.css();
    });
  }, items);
  const effect = react.useEffect(() => {
    let obj2;
    const tmp = isHexagonCampaignQuestHomeHeaderEnabled;
    if (tmp) {
      const obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: obj2, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE };
      const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
      AnalyticsActions;
      obj2 = {};
      const obj3 = AnalyticsTypes;
      const merged = Object.assign(obj3.getContentProperties(QuestTypes.QuestContent.QUEST_HOME_MOBILE, 0));
      const merged1 = Object.assign(getDeviceMetadataDefault());
      trackAdContentEvent(obj);
    }
  }, items1);
  let tmp11Result = null;
  if (isHexagonCampaignQuestHomeHeaderEnabled) {
    const obj4 = { style: tmp.container, children: items3 };
    const obj5 = { style: tmp.banner, children: items2 };
    const obj6 = { source: token(17003), style: tmp.bannerImage, resizeMode: "cover", accessible: false };
    const tmp5Result = token(5717);
    items2 = [closure_8(tmp5Result, obj6), , , ];
    const obj7 = { colors: memo, locations: [0.716, 0.823, 1], style: absoluteFill.absoluteFill, pointerEvents: "none" };
    items2[1] = closure_8(token(5587), obj7);
    const obj8 = { source: token(17004), style: tmp.logo, resizeMode: "contain", accessible: false };
    const tmp5Result2 = token(5717);
    items2[2] = closure_8(tmp5Result2, obj8);
    const obj9 = { style: tmp.sponsoredTag, children: closure_8(Text, obj10) };
    obj10 = { variant: "text-sm/semibold", color: "text-overlay-light", children: intl.string(token(4285).kVJc0r) };
    Text = tmp2(5624).Text;
    intl = tmp2(1113).intl;
    items2[3] = closure_8(closure_5, obj9);
    items3 = [closure_9(closure_5, obj5), ];
    const obj11 = { style: tmp.cardShadow, children: closure_9(closure_5, obj12) };
    obj12 = { style: tmp.card, children: items4 };
    const obj13 = { style: tmp.cardArt, children: closure_8(isHexagonCampaignQuestHomeHeaderEnabled(17005).BundleAbstractUI, { accessible: false }) };
    items4 = [closure_8(closure_5, obj13), ];
    const obj14 = { direction: "vertical", spacing: token(575).space.PX_12, style: tmp.cardContent, children: items7 };
    const Stack = tmp2(6027).Stack;
    const obj15 = { direction: "vertical", spacing: token(575).space.PX_8, children: items6 };
    const Stack2 = tmp2(6027).Stack;
    const obj16 = { direction: "vertical", spacing: token(575).space.PX_4, children: items5 };
    const Stack3 = tmp2(6027).Stack;
    const obj17 = { variant: "text-lg/semibold", color: "text-strong", children: intl2.string(token(4285)["fShp/D"]) };
    const Heading = tmp2(5624).Heading;
    intl2 = tmp2(1113).intl;
    items5 = [closure_8(Heading, obj17), ];
    const obj18 = { variant: "text-sm/medium", color: "text-default", style: tmp.cardBody, children: intl3.string(token(4285).XLqMej) };
    const Text2 = tmp2(5624).Text;
    intl3 = tmp2(1113).intl;
    items5[1] = closure_8(Text2, obj18);
    items6 = [closure_9(Stack3, obj16), ];
    const obj19 = { variant: "text-xs/medium", color: "text-subtle", children: intl4.format(token(4285).uL0TOA, obj20) };
    const Text3 = tmp2(5624).Text;
    intl4 = tmp2(1113).intl;
    obj20 = {
      learnMoreHook(children, arg1) {
          const obj = { variant: "text-xs/medium", color: "text-link", accessibilityRole: "link", onPress: isHexagonCampaignQuestHomeHeaderEnabled(dependencyMap[26]).openHexagonCampaignLearnMore, children };
          const Text = isHexagonCampaignQuestHomeHeaderEnabled(dependencyMap[21]).Text;
          return closure_1_8(Text, obj, arg1);
        }
    };
    items6[1] = closure_8(Text3, obj19);
    items7 = [closure_9(Stack2, obj15), ];
    const Button = tmp2(5634).Button;
    let str = "primary-overlay";
    const tmp2Result = isHexagonCampaignQuestHomeHeaderEnabled(5021);
    if (tmp2Result.isThemeLight(theme)) {
      str = "primary";
    }
    const obj21 = { variant: str, text: intl5.string(token(4285)["KX1/jp"]), onPress: tmp9, grow: true };
    intl5 = tmp2(1113).intl;
    items7[1] = closure_8(Button, obj21);
    items4[1] = closure_9(Stack, obj14);
    items3[1] = closure_8(closure_5, obj11);
    tmp11Result = tmp11(tmp12, obj4);
  }
  return tmp11Result;
};
