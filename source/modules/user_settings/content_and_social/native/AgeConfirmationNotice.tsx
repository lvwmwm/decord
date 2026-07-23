// Module ID: 13721
// Function ID: 105247
// Name: AgeConfirmationNotice
// Dependencies: [31, 27, 7483, 33, 5678, 13651, 3827, 1920, 7536, 7538, 689, 1273, 4543, 1212, 4126, 2]
// Exports: default

// Module 13721 (AgeConfirmationNotice)
import result from "result";
import { View } from "get ActivityIndicator";
import SafetyToastType from "SafetyToastType";
import { jsx } from "jsxProd";

let closure_5;
let closure_6;
const require = arg1;
({ SafetySettingsNoticeAction: closure_5, SafetySettingsNoticeType: closure_6 } = SafetyToastType);
let result = require("SafetyToastType").fileFinishedImporting("modules/user_settings/content_and_social/native/AgeConfirmationNotice.tsx");

export default function AgeConfirmationNotice() {
  let obj = sensitiveContentFilterHelpArticle(5678);
  sensitiveContentFilterHelpArticle = obj.useSensitiveContentFilterHelpArticle();
  const effect = React.useEffect(() => {
    const result = sensitiveContentFilterHelpArticle(outer1_2[5]).trackSafetySettingsNoticeAnalytics(outer1_6.AGE_CONFIRMATION_NOTICE, outer1_5.VIEWED);
  }, []);
  const items = [sensitiveContentFilterHelpArticle];
  const importDefault = React.useCallback(() => {
    const obj = callback(outer1_2[6]);
    obj.openURL(callback(outer1_2[7]).getArticleURL(sensitiveContentFilterHelpArticle));
    const obj2 = callback(outer1_2[7]);
    const result = sensitiveContentFilterHelpArticle(outer1_2[5]).trackSafetySettingsNoticeAnalytics(outer1_6.AGE_CONFIRMATION_NOTICE, outer1_5.LEARN_MORE);
  }, items);
  obj = {};
  obj = {};
  const callback = React.useCallback(() => {
    let obj = callback(outer1_2[8]);
    obj = { entryPoint: sensitiveContentFilterHelpArticle(outer1_2[9]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
    const result = obj.showAgeVerificationGetStartedModal(obj);
    const result1 = sensitiveContentFilterHelpArticle(outer1_2[5]).trackSafetySettingsNoticeAnalytics(outer1_6.AGE_CONFIRMATION_NOTICE, outer1_5.CONFIRM_AGE);
  }, []);
  obj.marginBottom = importDefault(689).space.PX_8;
  obj.style = obj;
  const obj1 = { messageType: sensitiveContentFilterHelpArticle(1273).HelpMessageTypes.INFO, borderRadius: importDefault(689).radii.lg };
  let obj2 = { variant: "secondary", size: "sm" };
  const intl = sensitiveContentFilterHelpArticle(1212).intl;
  obj2.text = intl.string(sensitiveContentFilterHelpArticle(1212).t.FDSSia);
  obj2.onPress = callback;
  obj1.button = jsx(sensitiveContentFilterHelpArticle(4543).Button, { variant: "secondary", size: "sm" });
  const intl2 = sensitiveContentFilterHelpArticle(1212).intl;
  obj1.children = intl2.format(sensitiveContentFilterHelpArticle(1212).t.mFgsfg, {
    hook(children) {
      const obj = { role: "link", variant: "text-sm/medium", color: "text-link", onPress: closure_1, children };
      return outer1_7(sensitiveContentFilterHelpArticle(outer1_2[14]).Text, obj);
    }
  });
  obj.children = jsx(sensitiveContentFilterHelpArticle(1273).HelpMessage, { messageType: sensitiveContentFilterHelpArticle(1273).HelpMessageTypes.INFO, borderRadius: importDefault(689).radii.lg });
  return <View />;
};
