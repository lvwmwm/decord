// Module ID: 16570
// Function ID: 129241
// Name: AgeVerificationScreen
// Dependencies: [31, 27, 1849, 653, 33, 4130, 491, 16563, 566, 7567, 16557, 1881, 7538, 16566, 5807, 1212, 2460, 2716, 7536, 1920, 13088, 5590, 4126, 7574, 2]
// Exports: default

// Module 16570 (AgeVerificationScreen)
import result from "result";
import { Pressable } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { HelpdeskArticles } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ helpLink: { textAlign: "center" } });
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/safety_flows/native/tasks/AgeVerificationScreen.tsx");

export default function AgeVerificationScreen() {
  let ageVerificationMethods;
  let loading;
  const memo = React.useMemo(() => memo(stateFromStores[6]).v4(), []);
  let obj = memo(stateFromStores[7]);
  const onTaskComplete = obj.useOnTaskComplete();
  let obj1 = memo(stateFromStores[8]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj1.useStateFromStores(items, () => outer1_5.getCurrentUser());
  obj = {
    onClose() {
      return onTaskComplete({ type: memo(stateFromStores[10]).TaskInputType.Empty });
    }
  };
  const tmp2 = callback();
  const items1 = [onTaskComplete, stateFromStores];
  ({ loading, ageVerificationMethods } = onTaskComplete(stateFromStores[9])(obj));
  const effect = React.useEffect(() => {
    let prop;
    if (null != stateFromStores) {
      prop = stateFromStores.ageVerificationStatus;
    }
    if (prop !== memo(stateFromStores[11]).AgeVerificationStatusUkAndAusOnly.UNVERIFIED) {
      const obj = { type: memo(stateFromStores[10]).TaskInputType.Empty };
      onTaskComplete(obj);
    }
  }, items1);
  const items2 = [memo];
  const effect1 = React.useEffect(() => {
    const result = memo(stateFromStores[12]).trackAgeVerificationModalViewed(memo, memo(stateFromStores[12]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, memo(stateFromStores[12]).AgeVerificationModalEntryPoint.SAFETY_FLOWS);
  }, items2);
  obj = {};
  const tmp5 = onTaskComplete(stateFromStores[9])(obj);
  obj.ImageComponent = jsx(memo(stateFromStores[14]).ShieldSpotIllustration, {});
  const intl = memo(stateFromStores[15]).intl;
  obj.title = intl.string(onTaskComplete(stateFromStores[16])["dSkE/A"]);
  const intl2 = memo(stateFromStores[15]).intl;
  obj1 = {
    handleOnHelpUrlHook() {
      const obj = onTaskComplete(stateFromStores[18]);
      obj.openUrl(onTaskComplete(stateFromStores[19]).getArticleURL(outer1_6.TIGGER_PAWTECT_LEARN_MORE));
    }
  };
  obj.subtitle = intl2.format(onTaskComplete(stateFromStores[17]).RpMIT0, obj1);
  const obj2 = {};
  const obj3 = {
    accessibilityRole: "button",
    onPress() {
      onTaskComplete(stateFromStores[21]).logout("age_verification_screen");
    }
  };
  const obj4 = { variant: "text-sm/medium", color: "text-link", style: tmp2.helpLink };
  const intl3 = memo(stateFromStores[15]).intl;
  obj4.children = intl3.string(memo(stateFromStores[15]).t["2jxGer"]);
  obj3.children = jsx(memo(stateFromStores[22]).Text, { variant: "text-sm/medium", color: "text-link", style: tmp2.helpLink });
  obj2.children = <Pressable accessibilityRole="button" onPress={function onPress() {
    onTaskComplete(stateFromStores[21]).logout("age_verification_screen");
  }} />;
  obj.footer = jsx(memo(stateFromStores[20]).ModalDisclaimer, {});
  obj.submitting = loading;
  obj.children = jsx(memo(stateFromStores[23]).AgeVerificationMethodsContainer, { ageVerificationMethods, modalSessionId: memo });
  return jsx(onTaskComplete(stateFromStores[13]), {});
};
