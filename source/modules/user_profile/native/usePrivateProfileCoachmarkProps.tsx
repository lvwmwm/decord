// Module ID: 14975
// Function ID: 112746
// Name: PrivateProfileCoachmarkImage
// Dependencies: []
// Exports: usePrivateProfileCoachmarkProps

// Module 14975 (PrivateProfileCoachmarkImage)
function PrivateProfileCoachmarkImage() {
  return <View style={callback().imageContainer}>{jsx(arg1(dependencyMap[6]).PrivateProfileAbstractUI, {})}</View>;
}
let closure_2 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const UserSettingsSections = arg1(dependencyMap[2]).UserSettingsSections;
const ContentDismissActionType = arg1(dependencyMap[3]).ContentDismissActionType;
const jsx = arg1(dependencyMap[4]).jsx;
let closure_7 = arg1(dependencyMap[5]).createStyles({ imageContainer: { "Null": null, "Null": null } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/user_profile/native/usePrivateProfileCoachmarkProps.tsx");

export const usePrivateProfileCoachmarkProps = function usePrivateProfileCoachmarkProps(visibleContent) {
  visibleContent = visibleContent.visibleContent;
  const arg1 = visibleContent;
  const markAsDismissed = visibleContent.markAsDismissed;
  const dependencyMap = markAsDismissed;
  let React;
  const userIsTeen = arg1(dependencyMap[9]).useUserIsTeen();
  const ProfileVisibility = arg1(dependencyMap[10]).ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  if (userIsTeen) {
    if (setting !== arg1(dependencyMap[7]).ProfileVisibility.FRIENDS_AND_ALL_GUILDS) {
      if (setting === arg1(dependencyMap[7]).ProfileVisibility.FRIENDS_ONLY) {
        const intl3 = arg1(dependencyMap[8]).intl;
        let stringResult = intl3.string(arg1(dependencyMap[8]).t./hogEy);
      } else {
        const intl2 = arg1(dependencyMap[8]).intl;
        stringResult = intl2.string(arg1(dependencyMap[8]).t.6hEfm1);
      }
    }
  }
  const intl = arg1(dependencyMap[8]).intl;
  const stringResult1 = intl.string(arg1(dependencyMap[8]).t.bnNxW1);
  React = stringResult1;
  const items = [stringResult1, markAsDismissed, visibleContent];
  return React.useMemo(() => {
    const obj = {};
    const intl = visibleContent(markAsDismissed[8]).intl;
    obj.title = intl.string(visibleContent(markAsDismissed[8]).t.Ve4nS1);
    obj.description = stringResult1;
    obj.position = "top";
    obj.visible = visibleContent === visibleContent(markAsDismissed[11]).DismissibleContent.PRIVATE_PROFILE_COACHMARK;
    obj.onDismiss = function onDismiss() {
      return callback2(constants2.USER_DISMISS);
    };
    obj.renderImgComponent = function renderImgComponent() {
      return callback3(closure_8, {});
    };
    const intl2 = visibleContent(markAsDismissed[8]).intl;
    obj.buttonLabel = intl2.string(visibleContent(markAsDismissed[8]).t.eOoTMX);
    obj.buttonVariant = "primary";
    obj.onButtonPress = function onButtonPress() {
      callback2(constants2.TAKE_ACTION);
      let obj = callback(callback2[12]);
      obj = { screen: constants.DATA_AND_PRIVACY };
      obj.openUserSettings(obj);
    };
    return obj;
  }, items);
};
