// Module ID: 15353
// Function ID: 15354
// Name: SidechainCompressionSetting
// Dependencies: [2011, 7966, 5115, 558, 576, 504, 11262, 1126, 5241, 2]

// Module 15353 (SidechainCompressionSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import Constants from "Constants" /* 5115 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5241 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import MediaEngineStore from "MediaEngineStore" /* 2011 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const Features = Constants.Features;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSidechainCompressionSettingValue() {
  let sidechainCompression;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function n() {
      return sidechainCompression.getSidechainCompression();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useSidechainCompressionSettingValue() {
  let sidechainCompression;
  const items = [MediaEngineStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => sidechainCompression.getSidechainCompression());
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["/jwMtn"]);
  },
  parent: MobileUserSettings.VOICE,
  usePredicate() {
    return MediaEngineStore.supports(Features.SIDECHAIN_COMPRESSION);
  },
  useValue: tmp2,
  onValueChange(arg0) {
    const obj = AudioActionCreatorsDefault;
    return obj.setSidechainCompression(arg0);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t.zlA23F);
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SidechainCompressionSetting.tsx");

export default toggle;
