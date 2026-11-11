// Module ID: 12873
// Function ID: 12874
// Name: useRaiseHandControl
// Dependencies: [32, 19, 21, 12874, 12875, 6845, 12876, 5489, 12877, 8124, 6770, 2]
// Exports: default

// Module 12873 (useRaiseHandControl)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5489 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6770 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 6845 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8124 */;
import useLocalStorageState from "useLocalStorageState" /* 12875 */;
import useCanRaiseHand from "useCanRaiseHand" /* 12876 */;
import AgeVerificationSpeakerActionSheet from "AgeVerificationSpeakerActionSheet" /* 12877 */;
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
  let tmp = shouldAgeVerifyToSpeakForCurrentUser(first(12874)(id), 2);
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
