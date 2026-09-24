// Module ID: 15523
// Function ID: 15524
// Name: AndroidMobileOverlaySetting
// Dependencies: [10273, 8270, 558, 568, 504, 1119, 11630, 10284, 2]

// Module 15523 (AndroidMobileOverlaySetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import MobileVoiceOverlayActionCreatorsDefault from "MobileVoiceOverlayActionCreators" /* 10284 */;
import MobileVoiceOverlayStore from "MobileVoiceOverlayStore" /* 10273 */;

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11630);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MobileVoiceOverlayStore];
    const fn = function s() {
      return enabled.getEnabled();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [MobileVoiceOverlayStore];
  return initialize.useStateFromStores(items, () => enabled.getEnabled());
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["9CSZJm"]);
  },
  parent: fn(8270).MobileUserSettings.VOICE,
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(2);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [MobileVoiceOverlayStore];
      const fn = function s() {
        return enabled.getEnabled();
      };
      cResult[0] = items;
      cResult[1] = fn;
      tmp4 = items;
      tmp5 = fn;
    } else {
      [tmp4, tmp5] = cResult;
    }
    return initialize.useStateFromStores(tmp4, tmp5);
  }) : (() => {
    const items = [MobileVoiceOverlayStore];
    return initialize.useStateFromStores(items, () => enabled.getEnabled());
  }),
  onValueChange: MobileVoiceOverlayActionCreatorsDefault.setEnabled,
  useDescription: function useAndroidMobileOverlaySettingDescription() {
    const intl = util.intl;
    return intl.string(util.t.Wfoivk);
  },
  usePredicate: fn(10273).isMobileOverlaySupported
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidMobileOverlaySetting.tsx");

export default toggle;
