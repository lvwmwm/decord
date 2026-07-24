// Module ID: 15146
// Function ID: 115278
// Name: PrivateProfileCoachmarkImage
// Dependencies: [31, 27, 653, 1345, 33, 4130, 6426, 1282, 1212, 7705, 3803, 1334, 5796, 2]
// Exports: usePrivateProfileCoachmarkProps

// Module 15146 (PrivateProfileCoachmarkImage)
import result from "result";
import { View } from "get ActivityIndicator";
import { UserSettingsSections } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function PrivateProfileCoachmarkImage() {
  return <View style={callback().imageContainer}>{jsx(require(6426) /* PrivateProfileAbstractUI */.PrivateProfileAbstractUI, { width: 100, height: 67, resizeMode: "contain" })}</View>;
}
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ imageContainer: { alignItems: "center", justifyContent: "center" } });
const result = require("ME").fileFinishedImporting("modules/user_profile/native/usePrivateProfileCoachmarkProps.tsx");

export const usePrivateProfileCoachmarkProps = function usePrivateProfileCoachmarkProps(visibleContent) {
  visibleContent = visibleContent.visibleContent;
  const markAsDismissed = visibleContent.markAsDismissed;
  let stringResult1;
  const userIsTeen = visibleContent(markAsDismissed[9]).useUserIsTeen();
  const ProfileVisibility = visibleContent(markAsDismissed[10]).ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  if (userIsTeen) {
    if (setting !== visibleContent(markAsDismissed[7]).ProfileVisibility.FRIENDS_AND_ALL_GUILDS) {
      if (setting === visibleContent(markAsDismissed[7]).ProfileVisibility.FRIENDS_ONLY) {
        const intl3 = visibleContent(markAsDismissed[8]).intl;
        let stringResult = intl3.string(visibleContent(markAsDismissed[8]).t["/hogEy"]);
      } else {
        let intl2 = visibleContent(markAsDismissed[8]).intl;
        stringResult = intl2.string(visibleContent(markAsDismissed[8]).t["6hEfm1"]);
      }
    }
  }
  let intl = visibleContent(markAsDismissed[8]).intl;
  stringResult1 = intl.string(visibleContent(markAsDismissed[8]).t.bnNxW1);
  const items = [stringResult1, markAsDismissed, visibleContent];
  return stringResult1.useMemo(() => {
    let obj = {};
    const intl = visibleContent(markAsDismissed[8]).intl;
    obj.title = intl.string(visibleContent(markAsDismissed[8]).t.Ve4nS1);
    obj.description = stringResult1;
    obj.position = "top";
    obj.visible = visibleContent === visibleContent(markAsDismissed[11]).DismissibleContent.PRIVATE_PROFILE_COACHMARK;
    obj.onDismiss = function onDismiss() {
      return outer1_1(outer2_5.USER_DISMISS);
    };
    obj.renderImgComponent = function renderImgComponent() {
      return outer2_6(outer2_8, {});
    };
    const intl2 = visibleContent(markAsDismissed[8]).intl;
    obj.buttonLabel = intl2.string(visibleContent(markAsDismissed[8]).t.eOoTMX);
    obj.buttonVariant = "primary";
    obj.onButtonPress = function onButtonPress() {
      outer1_1(outer2_5.TAKE_ACTION);
      let obj = visibleContent(markAsDismissed[12]);
      obj = { screen: outer2_4.DATA_AND_PRIVACY };
      obj.openUserSettings(obj);
    };
    return obj;
  }, items);
};
