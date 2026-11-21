// Module ID: 10916
// Function ID: 10917
// Name: useRaiseHandControl
// Dependencies: [32, 19, 21, 10917, 10918, 6502, 10919, 5127, 10920, 7793, 6414, 2]
// Exports: default

// Module 10916 (useRaiseHandControl)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5127 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6414 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 6502 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7793 */;
import useLocalStorageState from "useLocalStorageState" /* 10918 */;
import useCanRaiseHand from "useCanRaiseHand" /* 10919 */;
import AgeVerificationSpeakerActionSheet from "AgeVerificationSpeakerActionSheet" /* 10920 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/stage_channels/native/useRaiseHandControl.tsx");

export default function useRaiseHandControl(id) {
  let closure_2;
  let first;
  let shouldAgeVerifyToSpeakForCurrentUser;
  let tmp2;
  let tmp = shouldAgeVerifyToSpeakForCurrentUser(first(10917)(id), 2);
  [tmp2, require] = tmp;
  let obj = useLocalStorageState;
  const tmp3 = shouldAgeVerifyToSpeakForCurrentUser(obj.useLocalStorageState("age-verification-stage-popover-dismissed", false), 2);
  first = tmp3[0];
  const tmp5 = tmp3[1];
  dependencyMap = tmp5;
  const obj2 = useStageSpeakingForCurrentUser;
  shouldAgeVerifyToSpeakForCurrentUser = obj2.useShouldAgeVerifyToSpeakForCurrentUser(id.id);
  const obj3 = useStageSpeakingForCurrentUser;
  const shouldShowAgeVerificationPopover = obj3.useShouldShowAgeVerificationPopover(id.id);
  const obj4 = useCanRaiseHand;
  const canRaiseHand = obj4.useCanRaiseHand(id);
  const items = [shouldShowAgeVerificationPopover, first, tmp5];
  const effect = shouldShowAgeVerificationPopover.useEffect(() => {
    const tmp = shouldShowAgeVerificationPopover && !first;
    if (tmp) {
      const obj = { content: null, key: AgeVerificationSpeakerActionSheet.AGE_VERIFICATION_SPEAKER_SHEET_KEY };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      showActionSheet(obj);
    }
  }, items);
  return {
    hasRequestedToSpeak: tmp2,
    shouldAgeVerifyToSpeak: shouldAgeVerifyToSpeakForCurrentUser,
    disabled: !canRaiseHand && !tmp2,
    handlePress() {
      const tmp = shouldAgeVerifyToSpeakForCurrentUser;
      if (tmp) {
        const obj = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
        const showAgeVerificationGetStartedModal = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal;
        AgeVerificationActionCreatorsDefault;
        const result = showAgeVerificationGetStartedModal(obj);
      } else {
        require();
      }
    }
  };
};
