// Module ID: 13607
// Function ID: 103091
// Name: AgeConfirmationNotice
// Dependencies: []
// Exports: default

// Module 13607 (AgeConfirmationNotice)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ SafetySettingsNoticeAction: closure_5, SafetySettingsNoticeType: closure_6 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/user_settings/content_and_social/native/AgeConfirmationNotice.tsx");

export default function AgeConfirmationNotice() {
  let obj = arg1(dependencyMap[4]);
  const sensitiveContentFilterHelpArticle = obj.useSensitiveContentFilterHelpArticle();
  const arg1 = sensitiveContentFilterHelpArticle;
  const effect = React.useEffect(() => {
    const result = sensitiveContentFilterHelpArticle(closure_2[5]).trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.VIEWED);
  }, []);
  const items = [sensitiveContentFilterHelpArticle];
  const importDefault = React.useCallback(() => {
    const obj = callback(closure_2[6]);
    obj.openURL(callback(closure_2[7]).getArticleURL(sensitiveContentFilterHelpArticle));
    const obj2 = callback(closure_2[7]);
    const result = sensitiveContentFilterHelpArticle(closure_2[5]).trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.LEARN_MORE);
  }, items);
  obj = {};
  obj = {};
  const callback = React.useCallback(() => {
    let obj = callback(closure_2[8]);
    obj = { entryPoint: sensitiveContentFilterHelpArticle(closure_2[9]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
    const result = obj.showAgeVerificationGetStartedModal(obj);
    const result1 = sensitiveContentFilterHelpArticle(closure_2[5]).trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.CONFIRM_AGE);
  }, []);
  obj.marginBottom = importDefault(dependencyMap[10]).space.PX_8;
  obj.style = obj;
  const obj1 = { messageType: arg1(dependencyMap[11]).HelpMessageTypes.INFO, borderRadius: importDefault(dependencyMap[10]).radii.lg };
  const obj2 = {};
  const intl = arg1(dependencyMap[13]).intl;
  obj2.text = intl.string(arg1(dependencyMap[13]).t.FDSSia);
  obj2.onPress = callback;
  obj1.button = jsx(arg1(dependencyMap[12]).Button, obj2);
  const intl2 = arg1(dependencyMap[13]).intl;
  obj1.children = intl2.format(arg1(dependencyMap[13]).t.mFgsfg, {
    hook(children) {
      const obj = { "Null": null, "Null": null, -9223372036854775808: null, onPress: closure_1, children };
      return callback2(sensitiveContentFilterHelpArticle(closure_2[14]).Text, obj);
    }
  });
  obj.children = jsx(arg1(dependencyMap[11]).HelpMessage, obj1);
  return <View {...obj} />;
};
