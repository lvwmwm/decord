// Module ID: 15117
// Function ID: 15118
// Name: AndroidViewNsfwDmCommandsSetting
// Dependencies: [8270, 558, 9440, 568, 5000, 9441, 5002, 1368, 8719, 8721, 2023, 11630, 1119, 2]

// Module 15117 (AndroidViewNsfwDmCommandsSetting)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import AgeGateUtils from "AgeGateUtils" /* 5000 */;
import SettingsConstants from "SettingsConstants" /* 8270 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8719 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 9440 */;
import useNSFWAllowed from "useNSFWAllowed" /* 9441 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
import size from "module_2" /* 2 */;

const PlatformUtils = tmp(1368);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
let ReactCompilerGating = ReactCompilerGating_mod;
const fn = () => AgeRestrictedContentSettingsUtils.useViewNsfwCommandsOrDefault();
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp = require;
  let isAndroid = dependencyMap;
  const cResult = c.c(3);
  const shouldAgeVerifyForSettingsToggles = AgeGateUtils.useShouldAgeVerifyForSettingsToggles();
  let flag = useNSFWAllowed.useNSFWAllowed();
  if (flag == null) {
    flag = true;
  }
  if (shouldAgeVerifyForSettingsToggles) {
    if (!tmpResult.useIsVerifiedTeen()) {
      const _Symbol = Symbol;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const isAndroidResult = PlatformUtils.isAndroid();
        cResult[0] = isAndroidResult;
        let first = isAndroidResult;
        const tmpResult2 = PlatformUtils;
      } else {
        first = cResult[0];
      }
      return first;
    }
  }
  if (cResult[1] !== flag) {
    let isAndroidResult1 = flag;
    if (flag) {
      tmp = PlatformUtils;
      isAndroid = tmp.isAndroid;
      isAndroidResult1 = isAndroid();
    }
    cResult[1] = flag;
    cResult[2] = isAndroidResult1;
  }
}) : (() => {
  let shouldAgeVerifyForSettingsToggles = AgeGateUtils.useShouldAgeVerifyForSettingsToggles();
  let flag = useNSFWAllowed.useNSFWAllowed();
  if (flag == null) {
    flag = true;
  }
  if (shouldAgeVerifyForSettingsToggles) {
    shouldAgeVerifyForSettingsToggles = !tmpResult.useIsVerifiedTeen();
  }
  if (!shouldAgeVerifyForSettingsToggles) {
    shouldAgeVerifyForSettingsToggles = flag;
  }
  if (shouldAgeVerifyForSettingsToggles) {
    shouldAgeVerifyForSettingsToggles = tmp(1368).isAndroid();
    const tmpResult2 = tmp(1368);
  }
  return shouldAgeVerifyForSettingsToggles;
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.VGWIAo);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t["J4zza/"]);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: fn,
  onValueChange: function handleValueChange(arg0) {
    if (obj.shouldAgeVerifyForSettingsToggles()) {
      if (arg0) {
        const obj3 = { entryPoint: tmp(8721).AgeVerificationModalEntryPoint.AGE_RESTRICTED_DM_COMMANDS_SETTINGS };
        const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj3);
      }
    }
    const ViewNsfwCommands = tmp(2023).ViewNsfwCommands;
    ViewNsfwCommands.updateSetting(arg0);
  },
  usePredicate: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    let tmp = require;
    let isAndroid = dependencyMap;
    const cResult = c.c(3);
    const shouldAgeVerifyForSettingsToggles = AgeGateUtils.useShouldAgeVerifyForSettingsToggles();
    let flag = useNSFWAllowed.useNSFWAllowed();
    if (flag == null) {
      flag = true;
    }
    if (shouldAgeVerifyForSettingsToggles) {
      if (!tmpResult.useIsVerifiedTeen()) {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const isAndroidResult = PlatformUtils.isAndroid();
          cResult[0] = isAndroidResult;
          let first = isAndroidResult;
          const tmpResult2 = PlatformUtils;
        } else {
          first = cResult[0];
        }
        return first;
      }
    }
    if (cResult[1] !== flag) {
      let isAndroidResult1 = flag;
      if (flag) {
        tmp = PlatformUtils;
        isAndroid = tmp.isAndroid;
        isAndroidResult1 = isAndroid();
      }
      cResult[1] = flag;
      cResult[2] = isAndroidResult1;
    }
  }) : (() => {
    let shouldAgeVerifyForSettingsToggles = AgeGateUtils.useShouldAgeVerifyForSettingsToggles();
    let flag = useNSFWAllowed.useNSFWAllowed();
    if (flag == null) {
      flag = true;
    }
    if (shouldAgeVerifyForSettingsToggles) {
      shouldAgeVerifyForSettingsToggles = !tmpResult.useIsVerifiedTeen();
    }
    if (!shouldAgeVerifyForSettingsToggles) {
      shouldAgeVerifyForSettingsToggles = flag;
    }
    if (shouldAgeVerifyForSettingsToggles) {
      shouldAgeVerifyForSettingsToggles = tmp(1368).isAndroid();
      const tmpResult2 = tmp(1368);
    }
    return shouldAgeVerifyForSettingsToggles;
  })
});
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidViewNsfwDmCommandsSetting.tsx");

export default toggle;
export const AndroidViewNsfwDmCommandsSettingV2 = toggle;
