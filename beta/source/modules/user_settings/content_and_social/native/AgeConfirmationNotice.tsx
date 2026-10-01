// Module ID: 14358
// Function ID: 14359
// Name: AgeConfirmationNotice
// Dependencies: [19, 17, 7847, 21, 6719, 14246, 4525, 2111, 7859, 7861, 576, 1177, 5281, 1115, 4832, 2]
// Exports: default

// Module 14358 (AgeConfirmationNotice)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import LinkingDefault from "Linking" /* 4525 */;
import Text_Text from "Text/Text" /* 4832 */;
import SafetySettingsUtils from "SafetySettingsUtils" /* 14246 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 7847 */;
import size from "module_2" /* 2 */;

let importDefault;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ SafetySettingsNoticeAction: hasOwnProperty, SafetySettingsNoticeType: metroRequire } = Constants);
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/AgeConfirmationNotice.tsx");

export default function AgeConfirmationNotice() {
  let intl;
  let intl2;
  let onPress;
  let sensitiveContentFilterHelpArticle;
  let obj = sensitiveContentFilterHelpArticle(6719);
  sensitiveContentFilterHelpArticle = obj.useSensitiveContentFilterHelpArticle();
  const effect = react.useEffect(() => {
    const obj = sensitiveContentFilterHelpArticle(dependencyMap[5]);
    const result = obj.trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.VIEWED);
  }, []);
  const items = [sensitiveContentFilterHelpArticle];
  importDefault = react.useCallback(() => {
    const openURL = LinkingDefault.openURL;
    LinkingDefault;
    const obj = HelpdeskUtilsDefault;
    openURL(obj.getArticleURL(sensitiveContentFilterHelpArticle));
    const obj2 = SafetySettingsUtils;
    const result = obj2.trackSafetySettingsNoticeAnalytics(metroRequire.AGE_CONFIRMATION_NOTICE, hasOwnProperty.LEARN_MORE);
  }, items);
  let obj3 = { marginBottom: nativeDefault.space.PX_8 };
  const callback = react.useCallback(() => {
    const obj = onPress(dependencyMap[8]);
    const obj2 = { entryPoint: sensitiveContentFilterHelpArticle(dependencyMap[9]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
    const result = obj.showAgeVerificationGetStartedModal(obj2);
    const obj3 = sensitiveContentFilterHelpArticle(dependencyMap[5]);
    const result1 = obj3.trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.CONFIRM_AGE);
  }, []);
  ({ messageType: sensitiveContentFilterHelpArticle(1177).HelpMessageTypes.INFO, borderRadius: nativeDefault.radii.lg, button: null, children: intl2.format(sensitiveContentFilterHelpArticle(1115).t.mFgsfg, obj6) });
  const HelpMessage = sensitiveContentFilterHelpArticle(1177).HelpMessage;
  ({ variant: "secondary", size: "sm", text: intl.string(sensitiveContentFilterHelpArticle(1115).t.FDSSia), onPress: callback });
  const Button = sensitiveContentFilterHelpArticle(5281).Button;
  intl = sensitiveContentFilterHelpArticle(1115).intl;
  intl2 = sensitiveContentFilterHelpArticle(1115).intl;
  return <View style={obj3}>{null}</View>;
};
