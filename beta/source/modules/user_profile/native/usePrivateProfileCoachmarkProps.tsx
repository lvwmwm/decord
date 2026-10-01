// Module ID: 16002
// Function ID: 16003
// Name: usePrivateProfileCoachmarkProps
// Dependencies: [19, 17, 1074, 2042, 21, 4836, 16003, 1186, 1115, 8104, 2021, 2029, 6800, 2]
// Exports: usePrivateProfileCoachmarkProps

// Module 16002 (usePrivateProfileCoachmarkProps)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import intl4 from "intl" /* 1115 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import PrivateProfileAbstractUI from "PrivateProfileAbstractUI" /* 16003 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

function PrivateProfileCoachmarkImage() {
  return <View style={closure_7().imageContainer}>{jsx(PrivateProfileAbstractUI.PrivateProfileAbstractUI, { width: 100, height: 67, resizeMode: "contain" })}</View>;
}
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ imageContainer: { alignItems: "center", justifyContent: "center" } });
const result = size.fileFinishedImporting("modules/user_profile/native/usePrivateProfileCoachmarkProps.tsx");

export const usePrivateProfileCoachmarkProps = function usePrivateProfileCoachmarkProps(visibleContent) {
  let constants2;
  visibleContent = visibleContent.visibleContent;
  const markAsDismissed = visibleContent.markAsDismissed;
  let stringResult1;
  let obj = visibleContent(markAsDismissed[9]);
  const userIsTeen = obj.useUserIsTeen();
  const ProfileVisibility = visibleContent(markAsDismissed[10]).ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  if (userIsTeen) {
    if (setting !== visibleContent(markAsDismissed[7]).ProfileVisibility.FRIENDS_AND_ALL_GUILDS) {
      let stringResult;
      if (setting === visibleContent(markAsDismissed[7]).ProfileVisibility.FRIENDS_ONLY) {
        const intl3 = tmp(tmp2[8]).intl;
        stringResult = intl3.string(tmp(tmp2[8]).t["/hogEy"]);
      } else {
        let intl2 = tmp(tmp2[8]).intl;
        stringResult = intl2.string(tmp(tmp2[8]).t["6hEfm1"]);
      }
      stringResult1 = stringResult;
    }
    const items = [stringResult1, markAsDismissed, visibleContent];
    return stringResult1.useMemo(() => {
      let intl;
      let intl2;
      let obj = {
        title: intl.string(intl4.t.Ve4nS1),
        description: stringResult1,
        position: "top",
        visible: visibleContent === dismissible_content.DismissibleContent.PRIVATE_PROFILE_COACHMARK,
        onDismiss() {
          return markAsDismissed(constants2.USER_DISMISS);
        },
        renderImgComponent() {
          return closure_1_6(closure_1_8, {});
        },
        buttonLabel: intl2.string(intl4.t.eOoTMX),
        buttonVariant: "primary",
        onButtonPress() {
          closure_1_1(constants2.TAKE_ACTION);
          const obj = visibleContent(markAsDismissed[12]);
          const obj2 = { screen: constants.DATA_AND_PRIVACY };
          obj.openUserSettings(obj2);
        }
      };
      intl = intl4.intl;
      intl2 = intl4.intl;
      return obj;
    }, items);
  }
  let intl = tmp(tmp2[8]).intl;
  stringResult1 = intl.string(tmp(tmp2[8]).t.bnNxW1);
};
