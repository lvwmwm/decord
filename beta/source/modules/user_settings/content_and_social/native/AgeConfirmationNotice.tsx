// Module ID: 16132
// Function ID: 16133
// Name: AgeConfirmationNotice
// Dependencies: [19, 17, 6504, 21, 8233, 15992, 5592, 2187, 7793, 6414, 575, 7762, 1112, 5504, 2]
// Exports: default

// Module 16132 (AgeConfirmationNotice)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2187 */;
import Text_Text from "Text/Text" /* 5504 */;
import LinkingDefault from "Linking" /* 5592 */;
import SafetySettingsUtils from "SafetySettingsUtils" /* 15992 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 6504 */;
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
  let obj5;
  let obj6;
  let onPress;
  let sensitiveContentFilterHelpArticle;
  let obj = sensitiveContentFilterHelpArticle(8233);
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
  ({ type: "info", message: intl.format(sensitiveContentFilterHelpArticle(1112).t.mFgsfg, obj5), role: "status", action: obj6 });
  const InlineNotice = sensitiveContentFilterHelpArticle(7762).InlineNotice;
  intl = sensitiveContentFilterHelpArticle(1112).intl;
  obj5 = {
    hook(children) {
      return jsx(Text_Text.Text, { role: "link", variant: "body-sm/medium", color: "text-link", onPress, children });
    }
  };
  obj6 = { text: intl2.string(sensitiveContentFilterHelpArticle(1112).t.FDSSia), onPress: callback };
  intl2 = sensitiveContentFilterHelpArticle(1112).intl;
  return <View style={obj3}>{null}</View>;
};
