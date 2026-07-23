// Module ID: 7567
// Function ID: 60537
// Name: useAgeVerificationMethods
// Dependencies: [5, 57, 31, 7568, 7537, 566, 4347, 7538, 7569, 6837, 6842, 7571, 7542, 1212, 2]
// Exports: default

// Module 7567 (useAgeVerificationMethods)
import initialize from "initialize";
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "set";
import set from "result";

let closure_7;
let closure_8;
const require = arg1;
({ VERIFICATION_METHOD_TITLE_MAP: closure_7, VerificationMethod: closure_8 } = set);
let result = set.fileFinishedImporting("modules/age_assurance/hooks/useAgeVerificationMethods.tsx");

export default function useAgeVerificationMethods(onGoogleWalletSelect) {
  let classificationId;
  let onClose;
  onGoogleWalletSelect = onGoogleWalletSelect.onGoogleWalletSelect;
  ({ onClose, classificationId } = onGoogleWalletSelect);
  let obj = onGoogleWalletSelect(initiateAgeVerification[5]);
  let items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ methods: outer1_6.methods, loading: outer1_6.loading }));
  const methods = stateFromStoresObject.methods;
  obj = { onComplete: onClose, entryPoint: onGoogleWalletSelect(initiateAgeVerification[7]).AgeVerificationModalEntryPoint.EXPRESSIVE_GET_STARTED, shouldShowExpressiveModal: true, classificationId };
  initiateAgeVerification = onGoogleWalletSelect(initiateAgeVerification[6]).useInitiateAgeVerification(obj).initiateAgeVerification;
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  callback = tmp2[1];
  const effect = React.useEffect(() => {
    let c0 = false;
    let result = onGoogleWalletSelect(initiateAgeVerification[8]).checkGoogleWalletAvailable();
    result.then((arg0) => {
      let result = arg0;
      if (!c0) {
        let obj = methods(initiateAgeVerification[9]);
        obj = { name: onGoogleWalletSelect(initiateAgeVerification[10]).MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK };
        const _HermesInternal = HermesInternal;
        const items = ["available:" + result];
        obj.tags = items;
        obj.increment(obj);
        if (result) {
          result = onGoogleWalletSelect(initiateAgeVerification[11]).isGoogleWalletEnabled("age_verification_methods");
          const obj3 = onGoogleWalletSelect(initiateAgeVerification[11]);
        }
        outer1_4(result);
        const tmp7 = outer1_4;
      }
    });
    return () => {
      let c0 = true;
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
        const found = methods.filter((arg0) => arg0 !== outer2_8.GOOGLE_WALLET);
        const mapped = found.map((id) => {
          let description;
          let title;
          let closure_0 = id;
          if (null == outer2_7[id]) {
            return null;
          } else {
            const obj = { id };
            ({ title, description } = tmp);
            const intl = onGoogleWalletSelect(initiateAgeVerification[13]).intl;
            obj.title = intl.string(title);
            const intl2 = onGoogleWalletSelect(initiateAgeVerification[13]).intl;
            obj.description = intl2.string(description);
            let closure_1 = first(async (arg0) => {
              const result = onGoogleWalletSelect(initiateAgeVerification[7]).trackAgeVerificationModalClicked(arg0, onGoogleWalletSelect(initiateAgeVerification[7]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, onGoogleWalletSelect(initiateAgeVerification[7]).AgeVerificationModalCta.METHOD_SELECT, outer1_0);
              yield outer3_2(outer1_0);
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
          if (null != outer1_7[outer1_8.GOOGLE_WALLET]) {
            let obj = { id: outer1_8.GOOGLE_WALLET };
            let intl = onGoogleWalletSelect(initiateAgeVerification[13]).intl;
            obj.title = intl.string(tmp5.title);
            let intl2 = onGoogleWalletSelect(initiateAgeVerification[13]).intl;
            obj.description = intl2.string(tmp5.description);
            obj.onClick = function onClick(modalSessionId) {
              let obj = methods(initiateAgeVerification[9]);
              obj = { name: onGoogleWalletSelect(initiateAgeVerification[10]).MetricEvents.GOOGLE_WALLET_METHOD_SELECTED };
              obj.increment(obj);
              const result = onGoogleWalletSelect(initiateAgeVerification[7]).trackAgeVerificationModalClicked(modalSessionId, onGoogleWalletSelect(initiateAgeVerification[7]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, onGoogleWalletSelect(initiateAgeVerification[7]).AgeVerificationModalCta.METHOD_SELECT, outer2_8.GOOGLE_WALLET);
              outer1_0();
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
