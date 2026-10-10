// Module ID: 17483
// Function ID: 17484
// Name: SpamRequestsScreen
// Dependencies: [19, 4760, 1390, 10216, 1085, 21, 558, 576, 6851, 6878, 17482, 504, 1273, 8971, 8303, 10222, 2]

// Module 17483 (SpamRequestsScreen)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8303 */;
import UserRowConstants from "UserRowConstants" /* 10216 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import UserStore from "UserStore" /* 1390 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let element, obj1, onPress;

const UserRowModes = UserRowConstants.UserRowModes;
const RelationshipTypes = Constants.RelationshipTypes;
const jsx = Fragment.jsx;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function SpamRequestsScreen(arg0) {
  let analyticsLocations;
  let mutableRelationships;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp20;
  let tmp6;
  let tmp7;
  let obj = analyticsLocations(stateFromStoresArray1[7]);
  const cResult = obj.c(18);
  const tmp5 = stateFromStoresArray(stateFromStoresArray1[8]);
  analyticsLocations = tmp5(stateFromStoresArray(stateFromStoresArray1[9]).FRIEND_REQUESTS).analyticsLocations;
  const tmp4 = stateFromStoresArray;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    class S {
      constructor() {
        obj = analyticsLocations(closure_2[10]);
        return obj.getPendingRelationshipIds(closure_1_4.getMutableRelationships()).spamIds;
      }
    }
    cResult[0] = items;
    cResult[1] = S;
    tmp6 = items;
    tmp7 = S;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = analyticsLocations(stateFromStoresArray1[11]);
  stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { name: analyticsLocations(stateFromStoresArray1[12]).ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX };
    class S {
      constructor() {
        obj = analyticsLocations(closure_2[10]);
        return obj.getPendingRelationshipIds(closure_1_4.getMutableRelationships()).spamIds;
      }
    }
    tmp10 = obj2;
  } else {
    tmp10 = cResult[2];
  }
  tmp4(stateFromStoresArray1[13])(tmp10);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    class S {
      constructor() {
        obj = analyticsLocations(closure_2[10]);
        return obj.getPendingRelationshipIds(closure_1_4.getMutableRelationships()).spamIds;
      }
    }
    cResult[3] = items1;
    tmp12 = items1;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] !== stateFromStoresArray) {
    class N {
      constructor() {
        mapped = closure_1.map(() => { /* body not rendered: F150289 */ });
        return mapped.filter(() => { /* body not rendered: F150290 */ });
      }
    }
    const items2 = [stateFromStoresArray];
    class S {
      constructor() {
        obj = analyticsLocations(closure_2[10]);
        return obj.getPendingRelationshipIds(closure_1_4.getMutableRelationships()).spamIds;
      }
    }
    cResult[4] = stateFromStoresArray;
    cResult[5] = N;
    cResult[6] = items2;
    tmp15 = items2;
    tmp14 = N;
  } else {
    class N {
      constructor() {
        mapped = closure_1.map(() => { /* body not rendered: F150289 */ });
        return mapped.filter(() => { /* body not rendered: F150290 */ });
      }
    }
    tmp15 = cResult[6];
  }
  const tmpResult2 = analyticsLocations(stateFromStoresArray1[11]);
  stateFromStoresArray1 = tmpResult2.useStateFromStoresArray(tmp12, tmp14, tmp15);
  if (cResult[7] !== analyticsLocations) {
    class E {
      constructor(arg0) {
        obj = { userId: arg0.id, localUser: arg0, sourceAnalyticsLocations: analyticsLocations };
        tmp = closure_1(closure_2[14])(obj);
        return;
      }
    }
    cResult[7] = analyticsLocations;
    class S {
      constructor() {
        obj = analyticsLocations(closure_2[10]);
        return obj.getPendingRelationshipIds(closure_1_4.getMutableRelationships()).spamIds;
      }
    }
    cResult[8] = E;
  } else {
    class E {
      constructor(arg0) {
        obj = { userId: arg0.id, localUser: arg0, sourceAnalyticsLocations: analyticsLocations };
        tmp = closure_1(closure_2[14])(obj);
        return;
      }
    }
  }
  E = tmp16;
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        return;
      }
    }
    cResult[9] = P;
    class S {
      constructor() {
        obj = analyticsLocations(closure_2[10]);
        return obj.getPendingRelationshipIds(closure_1_4.getMutableRelationships()).spamIds;
      }
    }
  } else {
    class P {
      constructor() {
        return;
      }
    }
  }
  if (cResult[10] === tmp16) {
    class P {
      constructor() {
        return;
      }
    }
    if (0 !== stateFromStoresArray1.length) {
      class P {
        constructor() {
          return;
        }
      }
      if (cResult[15] === tmp18) {
        class P {
          constructor() {
            return;
          }
        }
        return tmp20;
      }
      class S {
        constructor() {
          obj = analyticsLocations(closure_2[10]);
          return obj.getPendingRelationshipIds(closure_1_4.getMutableRelationships()).spamIds;
        }
      }
      tmp22[0] = tmp18;
      tmp22[1] = tmp17;
      tmp22[2] = tmp19;
      const tmp23 = jsx(analyticsLocations(stateFromStoresArray1[15]).UsersFastList, tmp22);
      cResult[15] = tmp18;
      cResult[16] = tmp19;
      cResult[17] = tmp23;
      tmp20 = tmp23;
    } else {
      class P {
        constructor() {
          return;
        }
      }
    }
  }
  class F {
    constructor(arg0, arg1) {
      element = { type: "user", props: null };
      obj1 = { type: RelationshipTypes.PENDING_INCOMING, user: closure_2[arg1], onPress: closure_3, mode: UserRowModes.ACTIONS, start: 0 === arg1, end: arg1 === closure_2.length - 1 };
      element.props = obj1;
      return element;
    }
  }
  cResult[10] = tmp16;
  cResult[11] = stateFromStoresArray1;
  cResult[12] = F;
}) : (function SpamRequestsScreen(navigation) {
  let mutableRelationships;
  navigation = navigation.navigation;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  onPress = undefined;
  const tmp2 = stateFromStoresArray(stateFromStoresArray1[8]);
  const analyticsLocations = tmp2(stateFromStoresArray(stateFromStoresArray1[9]).FRIEND_REQUESTS).analyticsLocations;
  let obj = analyticsLocations(stateFromStoresArray1[11]);
  const items = [RelationshipStore];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const obj = analyticsLocations(stateFromStoresArray1[10]);
    return obj.getPendingRelationshipIds(mutableRelationships.getMutableRelationships()).spamIds;
  });
  const obj2 = { name: analyticsLocations(stateFromStoresArray1[12]).ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX };
  const tmp5 = stateFromStoresArray(stateFromStoresArray1[13]);
  tmp5(obj2);
  const items1 = [UserStore];
  const items2 = [stateFromStoresArray];
  const obj3 = analyticsLocations(stateFromStoresArray1[11]);
  const tmp = stateFromStoresArray1;
  stateFromStoresArray1 = obj3.useStateFromStoresArray(items1, () => {
    let user;
    const mapped = stateFromStoresArray.map((item) => user.getUser(item));
    return mapped.filter((item) => null != item);
  }, items2);
  const items3 = [analyticsLocations];
  onPress = onPress.useCallback((id) => {
    const obj = { userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj);
  }, items3);
  const items4 = [onPress, stateFromStoresArray1];
  const callback1 = onPress.useCallback(() => {

  }, []);
  const tmp3 = analyticsLocations;
  if (0 !== stateFromStoresArray1.length) {
    const items5 = [stateFromStoresArray1.length];
    return jsx(tmp3(tmp[15]).UsersFastList, { getItemProps: tmp9, getSectionProps: callback1, sections: items5 });
  } else {
    navigation.goBack();
  }
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/SpamRequestsScreen.tsx");

export default tmp2;
