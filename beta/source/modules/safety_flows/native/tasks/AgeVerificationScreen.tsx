// Module ID: 17705
// Function ID: 17706
// Name: AgeVerificationScreen
// Dependencies: [19, 17, 1372, 1074, 21, 4836, 1255, 17698, 504, 8041, 17692, 1979, 7861, 17701, 7872, 1115, 2781, 3039, 7859, 2111, 13995, 6010, 4832, 8043, 2]
// Exports: default

// Module 17705 (AgeVerificationScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import Server from "Server" /* 1979 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 7861 */;
import types from "types" /* 17692 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const Pressable = react_native.Pressable;
const HelpdeskArticles = Constants.HelpdeskArticles;
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ helpLink: { textAlign: "center" } });
let result = size.fileFinishedImporting("modules/safety_flows/native/tasks/AgeVerificationScreen.tsx");

export default function AgeVerificationScreen() {
  let ageVerificationMethods;
  let currentUser;
  let intl3;
  let loading;
  let stateFromStores;
  const memo = react.useMemo(() => {
    const obj = memo(stateFromStores[6]);
    return obj.v4();
  }, []);
  let tmp2 = closure_8();
  let obj = memo(stateFromStores[7]);
  const onTaskComplete = obj.useOnTaskComplete();
  const items = [UserStore];
  const obj2 = memo(stateFromStores[8]);
  stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj3 = {
    onClose() {
      const obj = { type: types.TaskInputType.Empty };
      return onTaskComplete(obj);
    }
  };
  const items1 = [onTaskComplete, stateFromStores];
  ({ loading, ageVerificationMethods } = onTaskComplete(stateFromStores[9])(obj3));
  const tmp5 = onTaskComplete(stateFromStores[9])(obj3);
  const effect = react.useEffect(() => {
    let prop;
    if (stateFromStores != null) {
      prop = stateFromStores.ageVerificationStatus;
    }
    if (prop !== Server.AgeVerificationStatusUkAndAusOnly.UNVERIFIED) {
      const obj = { type: types.TaskInputType.Empty };
      onTaskComplete(obj);
    }
  }, items1);
  const items2 = [memo];
  const effect1 = react.useEffect(() => {
    const trackAgeVerificationModalViewed = AgeVerificationAnalyticsUtils.trackAgeVerificationModalViewed;
    AgeVerificationAnalyticsUtils;
    const result = trackAgeVerificationModalViewed(memo, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SAFETY_FLOWS);
  }, items2);
  onTaskComplete(stateFromStores[13]);
  const intl = memo(stateFromStores[15]).intl;
  const intl2 = memo(stateFromStores[15]).intl;
  const obj5 = {
    handleOnHelpUrlHook() {
      const openUrl = onTaskComplete(stateFromStores[18]).openUrl;
      onTaskComplete(stateFromStores[18]);
      const obj = onTaskComplete(stateFromStores[19]);
      openUrl(obj.getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
    }
  };
  const ModalDisclaimer = memo(stateFromStores[20]).ModalDisclaimer;
  ({ variant: "text-sm/medium", color: "text-link", style: tmp2.helpLink, children: intl3.string(memo(stateFromStores[15]).t["2jxGer"]) });
  const Text = memo(stateFromStores[22]).Text;
  intl3 = memo(stateFromStores[15]).intl;
  return <tmp8 ImageComponent={null} title={intl.string(onTaskComplete(stateFromStores[16])["dSkE/A"])} subtitle={intl2.format(onTaskComplete(stateFromStores[17]).RpMIT0, obj5)} footer={null} submitting={loading}>{null}</tmp8>;
};
