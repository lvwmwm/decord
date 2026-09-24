// Module ID: 15527
// Function ID: 15528
// Name: SidechainCompressionSetting
// Dependencies: [1996, 8270, 4815, 558, 568, 504, 11630, 1119, 9921, 2]

// Module 15527 (SidechainCompressionSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9921 */;
import MediaEngineStore from "MediaEngineStore" /* 1996 */;

require = fn;
const Features = fn(4815).Features;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11630);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
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
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [MediaEngineStore];
  return initialize.useStateFromStores(items, () => sidechainCompression.getSidechainCompression());
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["/jwMtn"]);
  },
  parent: fn(8270).MobileUserSettings.VOICE,
  usePredicate() {
    return MediaEngineStore.supports(Features.SIDECHAIN_COMPRESSION);
  },
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(2);
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
    return initialize.useStateFromStores(tmp4, tmp5);
  }) : (() => {
    const items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => sidechainCompression.getSidechainCompression());
  }),
  onValueChange(arg0) {
    return AudioActionCreatorsDefault.setSidechainCompression(arg0);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.zlA23F);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SidechainCompressionSetting.tsx");

export default toggle;
