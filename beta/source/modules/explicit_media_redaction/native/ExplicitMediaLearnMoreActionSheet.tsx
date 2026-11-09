// Module ID: 13537
// Function ID: 13538
// Name: ExplicitMediaLearnMoreActionSheet
// Dependencies: [19, 17, 7530, 1072, 21, 5140, 575, 13538, 6781, 8758, 7635, 5374, 5834, 2185, 8024, 1113, 3348, 6784, 13539, 2118, 5388, 8044, 5751, 5758, 2]
// Exports: default

// Module 13537 (ExplicitMediaLearnMoreActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl11 from "intl" /* 1113 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2185 */;
import _modDef3348 from "module_3348" /* 3348 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import LinkingDefault from "Linking" /* 5834 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6784 */;
import ExplicitMediaRedactionConstants from "ExplicitMediaRedactionConstants" /* 7530 */;
import openUserSettings from "openUserSettings" /* 7635 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8024 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 8758 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
const View = react_native.View;
let closure_5 = ExplicitMediaRedactionConstants.EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
({ HelpdeskArticles: metroRequire, UserSettingsSections: metroImportDefault } = Constants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, art: obj3, infoHeader: obj4, info: obj5, infoDesc: { textAlign: "center" }, buttonsContainer: obj6, linkSubtext: obj7 };
obj2 = { paddingVertical: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_24, justifyContent: "center" };
createStyles = createStyles.createStyles;
obj3 = { alignSelf: "center", marginBottom: nativeDefault.space.PX_16 };
obj4 = { marginBottom: nativeDefault.space.PX_8, alignItems: "center" };
obj5 = { marginBottom: nativeDefault.space.PX_24, alignItems: "center" };
obj6 = { gap: nativeDefault.space.PX_8 };
obj7 = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let result = size.fileFinishedImporting("modules/explicit_media_redaction/native/ExplicitMediaLearnMoreActionSheet.tsx");

export default function ExplicitMediaLearnMoreActionSheet(channelId) {
  let formatResult;
  let handleConfirmAgeButtonPress;
  let handleNavigateToSettingsButtonPress;
  let intl10;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items4;
  let items5;
  let items6;
  let obj14;
  let stringResult;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const attachmentId = channelId.attachmentId;
  const embedId = channelId.embedId;
  const tmp = closure_10();
  const tmp2 = attachmentId;
  const tmp3 = messageId(attachmentId[7])();
  let obj = channelId(attachmentId[8]);
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  let obj2 = channelId(attachmentId[9]);
  const shouldAgeVerifyForExplicitMedia = obj2.useShouldAgeVerifyForExplicitMedia();
  const items = [isVerifiedTeen, shouldAgeVerifyForExplicitMedia];
  const memo = embedId.useMemo(() => isVerifiedTeen && shouldAgeVerifyForExplicitMedia, items);
  const items1 = [channelId, messageId];
  const callback = embedId.useCallback((action) => {
    const obj = ExplicitMediaRedactionUtils;
    const obj2 = { action, channelId, messageId };
    const result = obj.trackMediaRedactionAction(obj2);
  }, items1);
  const items2 = [channelId, messageId];
  const effect = embedId.useEffect(() => {
    const obj = ExplicitMediaRedactionUtils;
    const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_VIEWED, channelId, messageId };
    const result = obj.trackMediaRedactionAction(obj2);
  }, items2);
  const items3 = [shouldAgeVerifyForExplicitMedia, callback, channelId, messageId, attachmentId, embedId];
  const tmp10 = embedId.useCallback(() => {
    let formatResult = null;
    if (!shouldAgeVerifyForExplicitMedia) {
      const intl = intl11.intl;
      let obj = {
        handleFalsePositiveHook() {
            const obj = messageId(attachmentId[11]);
            obj.hideActionSheet();
            callback(channelId(attachmentId[9]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE);
            const obj2 = messageId(attachmentId[11]);
            const obj3 = { channelId, messageId, attachmentId, embedId };
            obj2.openLazy(channelId(attachmentId[19])(attachmentId[18], attachmentId.paths), shouldAgeVerifyForExplicitMedia, obj3);
          }
      };
      formatResult = intl.format(intl11.t.Ge0HUi, obj);
    }
    return formatResult;
  }, items3)();
  let obj3 = { style: tmp.container, children: items4 };
  const obj4 = { style: tmp.art, children: closure_8(channelId(attachmentId[21]).ShieldSpotIllustration, { height: 120, width: 120 }) };
  const BottomSheet = channelId(attachmentId[20]).BottomSheet;
  items4 = [closure_8(isVerifiedTeen, obj4), , ];
  const obj5 = { style: tmp.info, children: items5 };
  const obj6 = { style: tmp.infoHeader, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: stringResult };
  const Text = channelId(attachmentId[22]).Text;
  let intl = channelId(attachmentId[15]).intl;
  const string = intl.string;
  const t = channelId(attachmentId[15]).t;
  if (shouldAgeVerifyForExplicitMedia) {
    stringResult = string(t["2t3DCx"]);
  } else {
    stringResult = string(t.sGW77l);
  }
  function handleNavigateToHelpCenterLearnMore() {
    callback(ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE);
    const openURL = LinkingDefault.openURL;
    LinkingDefault;
    const obj = HelpdeskUtilsDefault;
    openURL(obj.getArticleURL(metroRequire.EXPLICIT_MEDIA_REDACTION));
  }
  items5 = [closure_8(Text, obj6), ];
  const obj7 = { style: tmp.infoDesc, variant: "body-md/medium", color: "text-default", children: formatResult };
  const Text2 = tmp4(tmp2[22]).Text;
  if (memo) {
    function handleNavigateToTeenAgeGroupArticle() {
      callback(ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE);
      const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
      AgeVerificationActionCreatorsDefault;
      const getArticleURL = HelpdeskUtilsDefault.getArticleURL;
      HelpdeskUtilsDefault;
      const intl = intl11.intl;
      openUrl(getArticleURL(intl.string(_modDef3348.agiNYw)));
    }
    const intl5 = tmp4(tmp2[15]).intl;
    const obj8 = { handleOnTeenAgeGroupHook: handleNavigateToTeenAgeGroupArticle };
    formatResult = intl5.format(tmp4(tmp2[15]).t["24JQP1"], obj8);
  } else if (shouldAgeVerifyForExplicitMedia) {
    const intl4 = tmp4(tmp2[15]).intl;
    formatResult = intl4.string(tmp4(tmp2[15]).t["3y2fov"]);
  } else if (true === tmp3) {
    const intl3 = tmp4(tmp2[15]).intl;
    const obj9 = { handleOnHelpCenterHook: handleNavigateToHelpCenterLearnMore };
    formatResult = intl3.format(tmp4(tmp2[15]).t.kIEcIY, obj9);
  } else {
    const intl2 = tmp4(tmp2[15]).intl;
    formatResult = intl2.string(tmp4(tmp2[15]).t["E/oQYL"]);
  }
  items5[1] = closure_8(Text2, obj7);
  items4[1] = closure_9(isVerifiedTeen, obj5);
  const obj10 = { style: tmp.buttonsContainer, children: items6 };
  const Button = tmp4(tmp2[23]).Button;
  if (memo) {
    const obj11 = { variant: "primary", size: "md", text: intl9.string(channelId(tmp2[15]).t.hvVgAZ), onPress: handleNavigateToHelpCenterLearnMore };
    intl9 = tmp4(tmp2[15]).intl;
    obj14 = obj11;
  } else if (shouldAgeVerifyForExplicitMedia) {
    const obj12 = { variant: "primary", size: "md", text: intl8.string(channelId(tmp2[15]).t.DVywUB), onPress: handleConfirmAgeButtonPress };
    handleConfirmAgeButtonPress = function handleConfirmAgeButtonPress() {
      callback(ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = AgeVerificationActionCreatorsDefault;
      const obj3 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SENSITIVE_MEDIA_LEARN_MORE };
      const result = obj2.showAgeVerificationGetStartedModal(obj3);
    };
    intl8 = tmp4(tmp2[15]).intl;
    obj14 = obj12;
  } else if (true === tmp3) {
    const obj13 = { variant: "primary", size: "md", text: intl7.string(channelId(tmp2[15]).t["9D+zGX"]), onPress: handleNavigateToSettingsButtonPress };
    handleNavigateToSettingsButtonPress = function handleNavigateToSettingsButtonPress() {
      callback(ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS);
      const obj = openUserSettings;
      const obj2 = { screen: metroImportDefault.CONTENT_AND_SOCIAL };
      obj.openUserSettings(obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet();
    };
    intl7 = tmp4(tmp2[15]).intl;
    obj14 = obj13;
  } else {
    obj14 = { variant: "primary", size: "md", text: intl6.string(channelId(tmp2[15]).t.hvVgAZ), onPress: handleNavigateToHelpCenterLearnMore };
    intl6 = tmp4(tmp2[15]).intl;
  }
  items6 = [closure_8(Button, obj14), , ];
  const obj15 = {
    variant: "secondary",
    size: "md",
    text: intl10.string(channelId(tmp2[15]).t.bmbHPA),
    onPress: function handleDismissButtonPress() {
      callback(ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  };
  const Button2 = tmp4(tmp2[23]).Button;
  intl10 = tmp4(tmp2[15]).intl;
  items6[1] = closure_8(Button2, obj15);
  let tmp11Result = null != tmp10;
  if (tmp11Result) {
    const obj16 = { style: tmp.linkSubtext, variant: "body-sm/medium", color: "text-muted", children: tmp10 };
    tmp11Result = tmp11(tmp4(tmp2[22]).Text, obj16);
  }
  items6[2] = tmp11Result;
  const obj17 = { startExpanded: true, children: closure_9(isVerifiedTeen, obj3) };
  items4[2] = closure_9(isVerifiedTeen, obj10);
  return closure_8(BottomSheet, obj17);
};
