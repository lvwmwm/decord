// Module ID: 8041
// Function ID: 8042
// Name: useAgeVerificationMethods
// Dependencies: [5, 32, 19, 7904, 7860, 504, 5048, 7861, 7891, 5179, 5184, 8042, 7866, 1115, 2]
// Exports: default

// Module 8041 (useAgeVerificationMethods)
import intl3 from "intl" /* 1115 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5179 */;
import MetricEvents from "MetricEvents" /* 5184 */;
import AgeVerificationURLActionCreators from "AgeVerificationURLActionCreators" /* 7866 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AgeVerificationStore from "AgeVerificationStore" /* 7904 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 7860 */;
import size from "module_2" /* 2 */;

let c1, c2, id;

let metroImportAll;
let metroImportDefault;
let _slicedToArray = _slicedToArray_mod;
({ VERIFICATION_METHOD_TITLE_MAP: metroImportDefault, VerificationMethod: metroImportAll } = AgeVerificationConstants);
let result = size.fileFinishedImporting("modules/age_assurance/hooks/useAgeVerificationMethods.tsx");

export default function useAgeVerificationMethods(onGoogleWalletSelect) {
  let classificationId;
  let closure_4;
  let first;
  let onClose;
  onGoogleWalletSelect = onGoogleWalletSelect.onGoogleWalletSelect;
  let initiateAgeVerification;
  first = undefined;
  _slicedToArray = undefined;
  ({ onClose, classificationId } = onGoogleWalletSelect);
  let obj = onGoogleWalletSelect(initiateAgeVerification[5]);
  let items = [AgeVerificationStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ methods: AgeVerificationStore.methods, loading: AgeVerificationStore.loading }));
  const methods = stateFromStoresObject.methods;
  const loading = stateFromStoresObject.loading;
  let obj2 = onGoogleWalletSelect(initiateAgeVerification[6]);
  let obj3 = { onComplete: onClose, entryPoint: onGoogleWalletSelect(initiateAgeVerification[7]).AgeVerificationModalEntryPoint.EXPRESSIVE_GET_STARTED, shouldShowExpressiveModal: true, classificationId };
  initiateAgeVerification = obj2.useInitiateAgeVerification(obj3).initiateAgeVerification;
  [first, _slicedToArray] = react.useState(false);
  const effect = react.useEffect(() => {
    let c0 = false;
    let obj = onGoogleWalletSelect(initiateAgeVerification[8]);
    let result = obj.checkGoogleWalletAvailable();
    result.then((result) => {
      let items;
      const tmp = c0;
      if (!tmp) {
        const obj = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: items };
        const increment = MonitoringAgentDefault.increment;
        MonitoringAgentDefault;
        const _HermesInternal = HermesInternal;
        items = ["available:" + result];
        increment(obj);
        const tmp6 = require;
        const tmp9 = closure_4;
        if (result) {
          const tmp6Result = tmp6(8042);
          result = tmp6Result.isGoogleWalletEnabled("age_verification_methods");
        }
        tmp9(result);
      }
    });
    return () => {
      c0 = true;
    };
  }, []);
  const items1 = [methods];
  const effect1 = react.useEffect(() => {
    if (null == methods) {
      const obj = AgeVerificationURLActionCreators;
      const ageVerificationMethods = obj.getAgeVerificationMethods();
    }
  }, items1);
  const items2 = [methods, first, onGoogleWalletSelect, initiateAgeVerification];
  let obj4 = {
    ageVerificationMethods: react.useMemo(() => {
      let intl;
      let intl2;
      let found1;
      const arr = methods;
      if (methods != null) {
        const found = arr.filter((item) => item !== constants.GOOGLE_WALLET);
        const mapped = found.map((id) => {
          let description;
          let intl;
          let intl2;
          let title;
          if (null == closure_1_7[id]) {
            return null;
          } else {
            let obj = {
              id,
              title: intl.string(title),
              description: intl2.string(description),
              onClick: function() {
                  return closure_1(...arguments);
                }
            };
            const tmp2 = onGoogleWalletSelect;
            ({ title, description } = closure_1_7[id]);
            intl = onGoogleWalletSelect(initiateAgeVerification[13]).intl;
            intl2 = onGoogleWalletSelect(initiateAgeVerification[13]).intl;
            const tmp4 = first;
            let closure_1 = first(function*(arg0, value) {
              let closure_0;
              let v1;
              id = arg0;
              if (c1 === 2) {
                c1 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp2 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  return { value: "HermesInternal", done: null };
                }
              } else {
                try {
                  c1 = 2;
                  if (0 === c2) {
                    if (arg0 === 1) {
                      c1 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c1 = 3;
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      const tmp11 = id(initiateAgeVerification[7]);
                      const trackAgeVerificationModalClicked = tmp11.trackAgeVerificationModalClicked;
                      const result = trackAgeVerificationModalClicked(id, id(initiateAgeVerification[7]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, id(initiateAgeVerification[7]).AgeVerificationModalCta.METHOD_SELECT, id);
                      c2 = 1;
                      c1 = 1;
                      const obj4 = { value: c2(id), done: false };
                      return obj4;
                    }
                  } else if (arg0 === 1) {
                    c1 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c1 = 3;
                    const obj = { value, done: true };
                    return obj;
                  } else {
                    c1 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp4) {
                  c1 = 3;
                  throw tmp4;
                }
              }
            });
            return obj;
          }
        });
        found1 = mapped.filter((item) => null != item);
      }
      if (found1 == null) {
        found1 = [];
      }
      let tmp2 = first;
      if (tmp2) {
        if (null != onGoogleWalletSelect) {
          let tmp4 = metroImportDefault;
          if (null != metroImportDefault[metroImportAll.GOOGLE_WALLET]) {
            let obj = {
              id: tmp5.GOOGLE_WALLET,
              title: intl.string(tmp6.title),
              description: intl2.string(tmp6.description),
              onClick(modalSessionId) {
                      const obj = methods(initiateAgeVerification[9]);
                      const obj2 = { name: onGoogleWalletSelect(initiateAgeVerification[10]).MetricEvents.GOOGLE_WALLET_METHOD_SELECTED };
                      obj.increment(obj2);
                      const trackAgeVerificationModalClicked = onGoogleWalletSelect(initiateAgeVerification[7]).trackAgeVerificationModalClicked;
                      onGoogleWalletSelect(initiateAgeVerification[7]);
                      const result = trackAgeVerificationModalClicked(modalSessionId, onGoogleWalletSelect(initiateAgeVerification[7]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, onGoogleWalletSelect(initiateAgeVerification[7]).AgeVerificationModalCta.METHOD_SELECT, constants.GOOGLE_WALLET);
                      closure_1_0();
                    }
            };
            intl = intl3.intl;
            intl2 = intl3.intl;
            const items = [];
            items[HermesBuiltin.arraySpread(items, found1, 0)] = obj;
            return items;
          }
        }
      }
      return found1;
    }, items2),
    loading
  };
  return obj4;
};
