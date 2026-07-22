// Module ID: 16453
// Function ID: 127067
// Name: AgeVerificationScreen
// Dependencies: []
// Exports: default

// Module 16453 (AgeVerificationScreen)
let closure_3 = importAll(dependencyMap[0]);
const Pressable = arg1(dependencyMap[1]).Pressable;
let closure_5 = importDefault(dependencyMap[2]);
const HelpdeskArticles = arg1(dependencyMap[3]).HelpdeskArticles;
const jsx = arg1(dependencyMap[4]).jsx;
let closure_8 = arg1(dependencyMap[5]).createStyles({ helpLink: { textAlign: "center" } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/safety_flows/native/tasks/AgeVerificationScreen.tsx");

export default function AgeVerificationScreen() {
  let ageVerificationMethods;
  let loading;
  const memo = React.useMemo(() => memo(stateFromStores[6]).v4(), []);
  const arg1 = memo;
  let obj = arg1(dependencyMap[7]);
  const onTaskComplete = obj.useOnTaskComplete();
  const importDefault = onTaskComplete;
  let obj1 = arg1(dependencyMap[8]);
  const items = [closure_5];
  const stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  const dependencyMap = stateFromStores;
  obj = {
    onClose() {
      return onTaskComplete({ type: memo(stateFromStores[10]).TaskInputType.Empty });
    }
  };
  const tmp2 = callback();
  const items1 = [onTaskComplete, stateFromStores];
  ({ loading, ageVerificationMethods } = importDefault(dependencyMap[9])(obj));
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
  const tmp5 = importDefault(dependencyMap[9])(obj);
  obj.ImageComponent = jsx(arg1(dependencyMap[14]).ShieldSpotIllustration, {});
  const intl = arg1(dependencyMap[15]).intl;
  obj.title = intl.string(importDefault(dependencyMap[16]).dSkE/A);
  const intl2 = arg1(dependencyMap[15]).intl;
  obj1 = {
    handleOnHelpUrlHook() {
      const obj = onTaskComplete(stateFromStores[18]);
      obj.openUrl(onTaskComplete(stateFromStores[19]).getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
    }
  };
  obj.subtitle = intl2.format(importDefault(dependencyMap[17]).RpMIT0, obj1);
  const obj2 = {};
  const obj3 = {
    accessibilityRole: "button",
    onPress() {
      onTaskComplete(stateFromStores[21]).logout("age_verification_screen");
    }
  };
  const obj4 = { cachedAt: "<string:3344105473>", edpbxy: "<string:3465102384>", style: tmp2.helpLink };
  const intl3 = arg1(dependencyMap[15]).intl;
  obj4.children = intl3.string(arg1(dependencyMap[15]).t.2jxGer);
  obj3.children = jsx(arg1(dependencyMap[22]).Text, obj4);
  obj2.children = <Pressable {...obj3} />;
  obj.footer = jsx(arg1(dependencyMap[20]).ModalDisclaimer, obj2);
  obj.submitting = loading;
  obj.children = jsx(arg1(dependencyMap[23]).AgeVerificationMethodsContainer, { ageVerificationMethods, modalSessionId: memo });
  return jsx(importDefault(dependencyMap[13]), obj);
};
