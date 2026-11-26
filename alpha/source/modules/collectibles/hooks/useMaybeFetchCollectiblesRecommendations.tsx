// Module ID: 16055
// Function ID: 16056
// Name: useMaybeFetchCollectiblesRecommendations
// Dependencies: [19, 1387, 14462, 504, 16056, 2]
// Exports: default

// Module 16055 (useMaybeFetchCollectiblesRecommendations)
import react from "react" /* 19 */;
import CollectiblesRecommendationActionCreators from "CollectiblesRecommendationActionCreators" /* 16056 */;
import UserStore from "UserStore" /* 1387 */;
import CollectiblesRecommendationStore from "CollectiblesRecommendationStore" /* 14462 */;
import size from "module_2" /* 2 */;

let currentUser;

const useEffect = react.useEffect;
let result = size.fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchCollectiblesRecommendations.tsx");

export default function useMaybeFetchCollectiblesRecommendations() {
  let stateFromStores;
  let stateFromStores1;
  let obj = stateFromStores(stateFromStores1[3]);
  const items = [UserStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const items1 = [CollectiblesRecommendationStore];
  const obj2 = stateFromStores(stateFromStores1[3]);
  stateFromStores1 = obj2.useStateFromStores(items1, () => CollectiblesRecommendationStore.shouldFetch());
  const items2 = [stateFromStores, stateFromStores1];
  useEffect(() => {
    const tmp = null != stateFromStores && stateFromStores1;
    if (tmp) {
      const obj = CollectiblesRecommendationActionCreators;
      const result = obj.maybeFetchCollectiblesRecommendations();
    }
  }, items2);
};
