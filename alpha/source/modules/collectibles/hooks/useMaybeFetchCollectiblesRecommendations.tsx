// Module ID: 16821
// Function ID: 16822
// Name: useMaybeFetchCollectiblesRecommendations
// Dependencies: [19, 1385, 15294, 15295, 504, 16822, 2]
// Exports: default

// Module 16821 (useMaybeFetchCollectiblesRecommendations)
import react from "react" /* 19 */;
import CollectiblesRecommendationActionCreators from "CollectiblesRecommendationActionCreators" /* 16822 */;
import UserStore from "UserStore" /* 1385 */;
import CollectiblesRecommendationStore from "CollectiblesRecommendationStore" /* 15294 */;
import size from "module_2" /* 2 */;

let currentUser;

const useEffect = react.useEffect;
let result = size.fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchCollectiblesRecommendations.tsx");

export default function useMaybeFetchCollectiblesRecommendations() {
  let isEditProfileCollectiblesOrderingEnabled;
  let stateFromStores;
  let obj = isEditProfileCollectiblesOrderingEnabled(stateFromStores[3]);
  isEditProfileCollectiblesOrderingEnabled = obj.useIsEditProfileCollectiblesOrderingEnabled("edit_profile_preload");
  const items = [UserStore];
  const obj2 = isEditProfileCollectiblesOrderingEnabled(stateFromStores[4]);
  stateFromStores = obj2.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const items1 = [CollectiblesRecommendationStore];
  const obj3 = isEditProfileCollectiblesOrderingEnabled(stateFromStores[4]);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => CollectiblesRecommendationStore.shouldFetch());
  const items2 = [isEditProfileCollectiblesOrderingEnabled, stateFromStores, stateFromStores1];
  stateFromStores1(() => {
    const tmp = isEditProfileCollectiblesOrderingEnabled && null != stateFromStores && stateFromStores1;
    if (tmp) {
      const obj = CollectiblesRecommendationActionCreators;
      const result = obj.maybeFetchCollectiblesRecommendations();
    }
  }, items2);
};
