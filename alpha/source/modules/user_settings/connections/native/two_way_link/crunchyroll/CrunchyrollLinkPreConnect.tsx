// Module ID: 12885
// Function ID: 12886
// Name: CrunchyrollLinkPreConnect
// Dependencies: [19, 12882, 1085, 8440, 21, 5091, 558, 576, 1503, 1126, 9191, 12886, 2]

// Module 12885 (CrunchyrollLinkPreConnect)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import CrunchyrollConnectionConstants from "CrunchyrollConnectionConstants" /* 8440 */;
import CrunchyrollLinkConstants from "CrunchyrollLinkConstants" /* 12882 */;
import AssetRegistryDefault from "AssetRegistry" /* 12886 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

const constants = CrunchyrollLinkConstants.CrunchyrollLinkModalScenes;
const PlatformTypes = Constants.PlatformTypes;
const redirectDestination = CrunchyrollConnectionConstants.CRUNCHYROLL_LINK_DEST_ORIGIN;
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ image: { width: 152, height: 123 } });
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function CrunchyrollLinkPreConnect() {
  let tmp6;
  let tmp9;
  const obj = navigation(576);
  const cResult = obj.c(10);
  const tmp4 = closure_8();
  const obj2 = navigation(1503);
  navigation = obj2.useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function n(arg0) {
      navigation.push(constants.DISCORD_CONSENT, arg0);
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== navigation) {
    class N {
      constructor() {
        navigation.push(constants.ERROR);
      }
    }
    cResult[2] = navigation;
    cResult[3] = N;
  } else {
    class N {
      constructor() {
        navigation.push(constants.ERROR);
      }
    }
  }
  const image = tmp4.image;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        navigation.push(constants.ERROR);
      }
    }
    const stringResult = obj3.string(navigation(1126).t.siPkNp);
    const intl = tmp(1126).intl;
    const stringResult1 = intl.string(navigation(1126).t.oS4NEH);
    cResult[4] = stringResult;
    cResult[5] = stringResult1;
    tmp9 = stringResult1;
  } else {
    class N {
      constructor() {
        navigation.push(constants.ERROR);
      }
    }
    tmp9 = cResult[5];
  }
  if (cResult[6] === tmp7) {
    class N {
      constructor() {
        navigation.push(constants.ERROR);
      }
    }
  }
  ({ platformType: PlatformTypes.CRUNCHYROLL, onError: tmp7, onNext: tmp6, img: AssetRegistryDefault, imgStyle: image, title: tmp8, body: tmp9, redirectDestination });
  const TwoWayLinkPreConnect = tmp(9191).TwoWayLinkPreConnect;
  cResult[6] = tmp7;
  cResult[7] = tmp6;
  cResult[8] = tmp4.image;
  cResult[9] = <TwoWayLinkPreConnect platformType={PlatformTypes.CRUNCHYROLL} onError={tmp7} onNext={tmp6} img={AssetRegistryDefault} imgStyle={image} title={tmp8} body={tmp9} redirectDestination={redirectDestination} />;
}) : (function CrunchyrollLinkPreConnect() {
  const tmp = closure_8();
  const obj = navigation(1503);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = react.useCallback((arg0) => {
    navigation.push(constants.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = react.useCallback(() => {
    navigation.push(constants.ERROR);
  }, items1);
  const TwoWayLinkPreConnect = navigation(9191).TwoWayLinkPreConnect;
  const intl = navigation(1126).intl;
  const intl2 = navigation(1126).intl;
  return <TwoWayLinkPreConnect platformType={PlatformTypes.CRUNCHYROLL} onError={callback1} onNext={callback} img={AssetRegistryDefault} imgStyle={tmp.image} title={intl.string(navigation(1126).t.siPkNp)} body={intl2.string(navigation(1126).t.oS4NEH)} redirectDestination={redirectDestination} />;
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkPreConnect.tsx");

export default tmp2;
