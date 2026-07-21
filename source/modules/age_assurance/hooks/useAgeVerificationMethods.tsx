// Module ID: 7560
// Function ID: 60477
// Name: useAgeVerificationMethods
// Dependencies: []
// Exports: default

// Module 7560 (useAgeVerificationMethods)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ VERIFICATION_METHOD_TITLE_MAP: closure_7, VerificationMethod: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/age_assurance/hooks/useAgeVerificationMethods.tsx");

export default function useAgeVerificationMethods(onGoogleWalletSelect) {
  let classificationId;
  let onClose;
  onGoogleWalletSelect = onGoogleWalletSelect.onGoogleWalletSelect;
  const arg1 = onGoogleWalletSelect;
  ({ onClose, classificationId } = onGoogleWalletSelect);
  let obj = arg1(dependencyMap[5]);
  const items = [closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ methods: closure_6.methods, loading: closure_6.loading }));
  const methods = stateFromStoresObject.methods;
  const importDefault = methods;
  obj = { onComplete: onClose, entryPoint: arg1(dependencyMap[7]).AgeVerificationModalEntryPoint.EXPRESSIVE_GET_STARTED, shouldShowExpressiveModal: true, classificationId };
  const initiateAgeVerification = arg1(dependencyMap[6]).useInitiateAgeVerification(obj).initiateAgeVerification;
  const dependencyMap = initiateAgeVerification;
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  let closure_3 = first;
  const callback = tmp2[1];
  const effect = React.useEffect(() => {
    const onGoogleWalletSelect = false;
    const result = onGoogleWalletSelect(initiateAgeVerification[8]).checkGoogleWalletAvailable();
    result.then((arg0) => {
      let result = arg0;
      if (!callback) {
        let obj = callback2(closure_2[9]);
        obj = { name: callback(closure_2[10]).MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK };
        const _HermesInternal = HermesInternal;
        const items = ["available:" + result];
        obj.tags = items;
        obj.increment(obj);
        if (result) {
          result = callback(closure_2[11]).isGoogleWalletEnabled("age_verification_methods");
          const obj3 = callback(closure_2[11]);
        }
        closure_4(result);
        const tmp7 = closure_4;
      }
    });
    return () => {
      let closure_0 = true;
    };
  }, []);
  const items1 = [methods];
  const effect1 = React.useEffect(() => {
    if (null == methods) {
      const ageVerificationMethods = onGoogleWalletSelect(initiateAgeVerification[12]).getAgeVerificationMethods();
      const obj = onGoogleWalletSelect(initiateAgeVerification[12]);
    }
  }, items1);
  const items2 = [methods, first, onGoogleWalletSelect, initiateAgeVerification];
  obj = {
    ageVerificationMethods: React.useMemo(() => {
      let found1;
      if (null != methods) {
        const found = methods.filter((arg0) => arg0 !== constants.GOOGLE_WALLET);
        const mapped = found.map((id) => {
          let description;
          let title;
          if (null == closure_7[id]) {
            return null;
          } else {
            const obj = { id };
            ({ title, description } = tmp);
            const intl = id(closure_2[13]).intl;
            obj.title = intl.string(title);
            const intl2 = id(closure_2[13]).intl;
            obj.description = intl2.string(description);
            let closure_1 = callback3(async (arg0) => {
              const result = callback(closure_2[7]).trackAgeVerificationModalClicked(arg0, callback(closure_2[7]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, callback(closure_2[7]).AgeVerificationModalCta.METHOD_SELECT, callback);
              yield closure_2(closure_0);
            });
            obj.onClick = function() {
              return callback(...arguments);
            };
            return obj;
          }
        });
        found1 = mapped.filter((arg0) => null != arg0);
      }
      if (null == found1) {
        found1 = [];
      }
      if (first) {
        if (null != onGoogleWalletSelect) {
          if (null != closure_7[closure_8.GOOGLE_WALLET]) {
            const obj = { id: constants.GOOGLE_WALLET };
            const intl = onGoogleWalletSelect(initiateAgeVerification[13]).intl;
            obj.title = intl.string(tmp5.title);
            const intl2 = onGoogleWalletSelect(initiateAgeVerification[13]).intl;
            obj.description = intl2.string(tmp5.description);
            obj.onClick = function onClick(modalSessionId) {
              let obj = callback2(closure_2[9]);
              obj = { name: callback(closure_2[10]).MetricEvents.GOOGLE_WALLET_METHOD_SELECTED };
              obj.increment(obj);
              const result = callback(closure_2[7]).trackAgeVerificationModalClicked(modalSessionId, callback(closure_2[7]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, callback(closure_2[7]).AgeVerificationModalCta.METHOD_SELECT, constants.GOOGLE_WALLET);
              callback();
            };
            const items = [];
            const arraySpreadResult = HermesBuiltin.arraySpread(found1, 0);
            items[arraySpreadResult] = obj;
            const sum = arraySpreadResult + 1;
            return items;
          }
        }
      }
      return found1;
    }, items2),
    loading: stateFromStoresObject.loading
  };
  return obj;
};
