// Module ID: 6940
// Function ID: 55370
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 6940 (_createForOfIteratorHelperLoose)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function initializeState() {
  let c0 = false;
  let closure_1 = [];
  const set = new Set();
  const set1 = new Set();
  const map = new Map();
  const map1 = new Map();
}
initializeState();
let tmp3 = ((Store) => {
  class BountyStore {
    constructor() {
      self = this;
      tmp = outer1_6(this, BountyStore);
      obj = outer1_9(BountyStore);
      tmp2 = outer1_8;
      if (outer1_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_9;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_9(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(BountyStore, Store);
  let obj = {
    key: "isFetchingQuestHomeBounties",
    get() {
      return BountyStore;
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "questHomeBounties",
    get() {
      return outer1_1;
    }
  };
  items[1] = obj;
  obj = {
    key: "isBountyCompleted",
    value(arg0) {
      return outer1_2.has(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getCompletedBountyCount",
    value(arg0) {
      let iter3;
      const tmp = outer1_11(arg0);
      const iter = tmp();
      let iter2 = iter;
      let num = 0;
      let num2 = 0;
      if (!iter.done) {
        do {
          let tmp2 = outer1_2;
          let sum = num;
          if (outer1_2.has(iter2.value.id)) {
            sum = num + 1;
          }
          iter3 = tmp();
          num = sum;
          iter2 = iter3;
          num2 = sum;
        } while (!iter3.done);
      }
      return num2;
    }
  };
  items[4] = {
    key: "isClaimingBountyReward",
    value(arg0) {
      return outer1_3.has(arg0);
    }
  };
  items[5] = {
    key: "areAllBountiesCompleted",
    value() {
      return outer1_1.every((id) => outer2_2.has(id.id));
    }
  };
  items[6] = {
    key: "getAdDecisionByPlacementAndAdCreativeId",
    value(arg0, arg1) {
      let value = outer1_4.get(arg0);
      value = undefined;
      if (null != value) {
        value = value.get(arg1);
      }
      let tmp3 = null;
      if (null != value) {
        tmp3 = value;
      }
      return tmp3;
    }
  };
  items[7] = {
    key: "getBountyVideoProgress",
    value(arg0) {
      const value = outer1_5.get(arg0);
      let tmp2 = null;
      if (null != value) {
        tmp2 = value;
      }
      return tmp2;
    }
  };
  return callback(BountyStore, items);
})(require("initialize").Store);
tmp3.displayName = "BountyStore";
tmp3 = new tmp3(require("dispatcher"), {
  LOGOUT: function handleLogout() {
    initializeState();
  },
  BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_BEGIN: function handleFetchQuestHomeBountiesBegin() {
    let c0 = true;
  },
  BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_SUCCESS: function handleFetchQuestHomeBountiesSuccess(bounties) {
    let adDecisionsByAdCreativeId;
    let placement;
    let c0 = false;
    bounties = bounties.bounties;
    ({ placement, adDecisionsByAdCreativeId } = bounties);
    const set = new Set();
    const map = new Map();
    map1 = new Map(map1);
    const result = map1.set(placement, adDecisionsByAdCreativeId);
  },
  BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_FAILURE: function handleFetchQuestHomeBountiesFailure(placement) {
    let c0 = false;
    let closure_1 = [];
    const set = new Set();
    map = new Map(map);
    map.delete(placement.placement);
  },
  BOUNTIES_CLAIM_REWARD_BEGIN: function handleClaimBountyRewardBegin(bountyId) {
    set = new Set(set);
    set.add(bountyId.bountyId);
  },
  BOUNTIES_CLAIM_REWARD_SUCCESS: function handleClaimBountyRewardSuccess(bountyId) {
    bountyId = bountyId.bountyId;
    set = new Set(set);
    set.delete(bountyId);
    set1 = new Set(set1);
    set1.add(bountyId);
  },
  BOUNTIES_CLAIM_REWARD_FAILURE: function handleClaimBountyRewardFailure(bountyId) {
    set = new Set(set);
    set.delete(bountyId.bountyId);
  },
  BOUNTIES_VIDEO_PROGRESS_UPDATE: function handleBountyVideoProgressUpdate(arg0) {
    let bountyId;
    let duration;
    let maxTimestampSec;
    let timestampSec;
    ({ bountyId, timestampSec, maxTimestampSec, duration } = arg0);
    map = new Map(map);
    const result = map.set(bountyId, { timestampSec, maxTimestampSec, duration });
  },
  AD_SESSION_RESET: function handleAdSessionReset() {
    const map = new Map();
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/quests/BountyStore.tsx");

export default tmp3;
