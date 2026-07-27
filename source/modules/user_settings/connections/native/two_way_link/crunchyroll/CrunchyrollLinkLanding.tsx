// Module ID: 8918
// Function ID: 70526
// Name: CrunchyrollLinkLanding
// Dependencies: [31, 8917, 653, 33, 4131, 1212, 8065, 1456, 8869, 8919, 1921, 2]
// Exports: default

// Module 8918 (CrunchyrollLinkLanding)
import result from "result";
import { CrunchyrollLinkModalScenes as closure_4 } from "CrunchyrollLinkModalScenes";
import ME from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ HelpdeskArticles: closure_5, PlatformTypes: closure_6 } = ME);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ image: { width: 234, height: 147 } });
const result = require("ME").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkLanding.tsx");

export default function CrunchyrollLinkLanding() {
  let obj = navigation(1456);
  navigation = obj.useNavigation();
  let items = [navigation];
  const memo = React.useMemo(() => {
    const obj = {};
    const intl = navigation(outer1_2[5]).intl;
    obj.label = intl.string(navigation(outer1_2[5]).t["2TXHQd"]);
    obj.icon = navigation(outer1_2[6]).PlayIcon;
    const items = [obj];
    return items;
  }, []);
  const callback = React.useCallback(() => {
    navigation.push(outer1_4.PRE_CONNECT);
  }, items);
  obj = { platformType: constants2.CRUNCHYROLL, img: importDefault(8919), imgStyle: callback().image };
  let intl = navigation(1212).intl;
  obj.headerConnect = intl.string(navigation(1212).t["Da+3NJ"]);
  const intl2 = navigation(1212).intl;
  obj.body = intl2.string(navigation(1212).t.MaPpPL);
  const tmp = callback();
  obj.learnMoreLink = importDefault(1921).getArticleURL(constants.CRUNCHYROLL_CONNECTION);
  obj.onNext = callback;
  obj.valueProps = memo;
  return jsx(navigation(8869).TwoWayLinkLanding, { platformType: constants2.CRUNCHYROLL, img: importDefault(8919), imgStyle: callback().image });
};
