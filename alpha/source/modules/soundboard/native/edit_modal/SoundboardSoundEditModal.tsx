// Module ID: 19859
// Function ID: 19860
// Name: SoundboardSoundEditModal
// Dependencies: [19, 1072, 21, 6308, 1113, 6976, 19860, 5353, 1256, 6973, 2]

// Module 19859 (SoundboardSoundEditModal)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import useMountEffectDefault from "useMountEffect" /* 5353 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let ModalAnimation;
let closure_4;
let tmp;
const NavigatorHeader = tmp(6976);
function close() {
  const arr = ModalActionCreatorsDefault;
  arr.pop();
}
class SoundboardSoundEditModal {
  constructor(arg0) {
    let guild_id;
    let localSource;
    let source;
    _require = arg0;
    ({ guildId: importDefault, analyticsSource: dependencyMap, localSource: react } = arg0);
    let tmp = useMountEffectDefault(() => {
      if (null != react) {
        const obj2 = { type: "Soundboard Upload Sound", guild_id: importDefault, source: dependencyMap };
        const obj = AnalyticsUtilsDefault;
        obj.track(constants.OPEN_MODAL, obj2);
      }
    });
    const items = [arg0];
    const memo = react.useMemo(() => {
      let HmsZGS;
      let onSaved;
      let tmpResult;
      let tmp = require;
      const ROOT = constants.ROOT;
      const intl = intl2.intl;
      const string = intl.string;
      if (null != localSource.localSource) {
        HmsZGS = intl2.t["ioD/9I"];
      } else {
        HmsZGS = intl2.t.HmsZGS;
      }
      let obj = {};
      const obj2 = {
        title: string(HmsZGS),
        headerLeft: tmpResult.getHeaderCloseButton(close),
        render() {
          const obj = { onSaved };
          const tmp = guild_id(source[6]);
          const merged = Object.assign(closure_0);
          return closure_2_5(tmp, obj);
        }
      };
      obj[ROOT] = obj2;
      tmpResult = NavigatorHeader;
      return obj;
    }, items);
    return jsx(require("Navigator").Navigator, { screens: memo, initialRouteName: constants2.ROOT });
  }
}
({ AnalyticEvents: closure_4, ModalAnimation } = Constants);
const jsx = Fragment.jsx;
const metroRequire = { ROOT: "ROOT" };
SoundboardSoundEditModal.modalConfig = { animation: ModalAnimation.SLIDE_IN_OUT };
const result = size.fileFinishedImporting("modules/soundboard/native/edit_modal/SoundboardSoundEditModal.tsx");

export default SoundboardSoundEditModal;
