// Module ID: 12874
// Function ID: 12875
// Name: PlayStationLinkPreConnect
// Dependencies: [19, 12871, 21, 5091, 558, 576, 1503, 12875, 1126, 9191, 2]

// Module 12874 (PlayStationLinkPreConnect)
import Fragment from "Fragment" /* 21 */;
import PlayStationLinkConstants from "PlayStationLinkConstants" /* 12871 */;
import _modDef12875 from "module_12875" /* 12875 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

const constants = PlayStationLinkConstants.PlayStationLinkModalScenes;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ image: { width: 231, height: 160 } });
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlayStationLinkPreConnect(platformType) {
  let tmp12;
  let tmp6;
  const obj = navigation(576);
  const cResult = obj.c(12);
  platformType = platformType.platformType;
  const tmp4 = closure_6();
  const obj2 = navigation(1503);
  navigation = obj2.useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function s(arg0) {
      navigation.push(constants.DISCORD_CONSENT, arg0);
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== navigation) {
    class S {
      constructor() {
        navigation.push(constants.ERROR, {});
      }
    }
    cResult[2] = navigation;
    cResult[3] = S;
  } else {
    class S {
      constructor() {
        navigation.push(constants.ERROR, {});
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        navigation.push(constants.ERROR, {});
      }
    }
    tmp9[0] = _modDef12875;
    cResult[4] = tmp9;
  } else {
    class S {
      constructor() {
        navigation.push(constants.ERROR, {});
      }
    }
  }
  const image = tmp4.image;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        navigation.push(constants.ERROR, {});
      }
    }
    const stringResult = obj3.string(navigation(1126).t["6n+UPR"]);
    const intl = tmp(1126).intl;
    const stringResult1 = intl.string(navigation(1126).t.JaaqIf);
    cResult[5] = stringResult;
    cResult[6] = stringResult1;
    tmp12 = stringResult1;
  } else {
    class S {
      constructor() {
        navigation.push(constants.ERROR, {});
      }
    }
    tmp12 = cResult[6];
  }
  if (cResult[7] === tmp7) {
    class S {
      constructor() {
        navigation.push(constants.ERROR, {});
      }
    }
  }
  cResult[7] = tmp7;
  cResult[8] = tmp6;
  cResult[9] = platformType;
  cResult[10] = tmp4.image;
  cResult[11] = jsx(navigation(9191).TwoWayLinkPreConnect, { platformType, onError: tmp7, onNext: tmp6, img: tmp8, imgStyle: image, title: tmp11, body: tmp12 });
  jsx(navigation(9191).TwoWayLinkPreConnect, { platformType, onError: tmp7, onNext: tmp6, img: tmp8, imgStyle: image, title: tmp11, body: tmp12 });
}) : (function PlayStationLinkPreConnect(platformType) {
  navigation = undefined;
  platformType = platformType.platformType;
  const tmp = closure_6();
  let obj = navigation(1503);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = react.useCallback((arg0) => {
    navigation.push(constants.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = react.useCallback(() => {
    navigation.push(constants.ERROR, {});
  }, items1);
  const memo = react.useMemo(() => {
    const obj = { uri: _modDef12875 };
    return obj;
  }, []);
  const TwoWayLinkPreConnect = navigation(9191).TwoWayLinkPreConnect;
  const intl = navigation(1126).intl;
  const intl2 = navigation(1126).intl;
  return <TwoWayLinkPreConnect platformType={platformType} onError={callback1} onNext={callback} img={memo} imgStyle={tmp.image} title={intl.string(navigation(1126).t["6n+UPR"])} body={intl2.string(navigation(1126).t.JaaqIf)} />;
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkPreConnect.tsx");

export const PlayStationLinkPreConnect = tmp2;
