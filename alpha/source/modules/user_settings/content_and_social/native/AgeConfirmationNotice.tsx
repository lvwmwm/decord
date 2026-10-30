// Module ID: 16671
// Function ID: 16672
// Name: AgeConfirmationNotice
// Dependencies: [19, 17, 7484, 21, 7466, 16532, 5704, 2062, 7947, 6723, 575, 8017, 1114, 5619, 2]
// Exports: default

// Module 16671 (AgeConfirmationNotice)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2062 */;
import Text_Text from "Text/Text" /* 5619 */;
import LinkingDefault from "Linking" /* 5704 */;
import SafetySettingsUtils from "SafetySettingsUtils" /* 16532 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 7484 */;
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
  let obj = sensitiveContentFilterHelpArticle(7466);
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
  ({ type: "info", message: intl.format(sensitiveContentFilterHelpArticle(1114).t.mFgsfg, obj5), role: "status", action: obj6 });
  const InlineNotice = sensitiveContentFilterHelpArticle(8017).InlineNotice;
  intl = sensitiveContentFilterHelpArticle(1114).intl;
  obj5 = {
    hook(children) {
      return jsx(Text_Text.Text, { role: "link", variant: "text-sm/medium", color: "text-link", onPress, children });
    }
  };
  obj6 = { text: intl2.string(sensitiveContentFilterHelpArticle(1114).t.FDSSia), onPress: callback };
  intl2 = sensitiveContentFilterHelpArticle(1114).intl;
  return <View style={obj3}>{null}</View>;
};
