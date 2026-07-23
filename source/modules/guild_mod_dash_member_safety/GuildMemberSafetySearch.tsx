// Module ID: 6751
// Function ID: 52536
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 57, 6752, 4276, 21, 3747, 3764, 2]

// Module 6751 (_createForOfIteratorHelperLoose)
import isCommunicationDisabled from "isCommunicationDisabled";
import getAutomodQuarantinedProfileFlags from "getAutomodQuarantinedProfileFlags";
import _slicedToArray from "_slicedToArray";

const require = arg1;
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
function getDefaultSearchState() {
  const obj = { query: "", requireUnusualDmActivity: false, requireCommunicationDisabled: false, requireUnusualAccountActivity: false, requireUsernameQuarantined: false, selectedRoleIds: new Set(), selectedJoinDateOption: { optionId: 0, afterDate: null, beforeDate: null }, selectedAccountAgeOption: { optionId: 0, afterDate: null, beforeDate: null }, selectedJoinSourceType: undefined, selectedSourceInviteCode: undefined, selectedSort: undefined };
  return obj;
}
function hasStringMatch(str, str2) {
  let hasItem = null != str;
  if (hasItem) {
    const formatted = str.toLowerCase();
    hasItem = formatted.includes(str2.toLowerCase());
  }
  return hasItem;
}
let closure_6 = Object.freeze(getDefaultSearchState());
let tmp2 = (() => {
  class GuildMemberSafetySearch {
    constructor(arg0) {
      tmp = outer1_3(this, GuildMemberSafetySearch);
      this.guildId = arg0;
      this._searchState = outer1_9();
      this.hasDefaultQuery = true;
      return;
    }
  }
  let obj = {
    key: "requiresUsernameMatch",
    get() {
      return this._searchState.query.trim().length > 0;
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "reset",
    value() {
      this._searchState = outer1_9();
      this.hasDefaultQuery = true;
    }
  };
  items[1] = obj;
  obj = {
    key: "updateSearchState",
    value(arg0) {
      const merged = Object.assign(this._searchState);
      const merged1 = Object.assign(arg0);
      this._searchState = {};
      this.hasDefaultQuery = outer1_1(outer1_2[4])(this._searchState, outer1_6);
      return true;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "resetSearchState",
    value() {
      const self = this;
      let flag = !this.hasDefaultQuery;
      if (flag) {
        self._searchState = outer1_9();
        self.hasDefaultQuery = true;
        flag = true;
      }
      return flag;
    }
  };
  items[4] = {
    key: "getSearchState",
    value() {
      return this._searchState;
    }
  };
  items[5] = {
    key: "isMemberIncludedInSearchResults",
    value(user) {
      let globalName;
      let query;
      let requireCommunicationDisabled;
      let requireUnusualAccountActivity;
      let requireUnusualDmActivity;
      let requireUsernameQuarantined;
      let selectedAccountAgeOption;
      let selectedJoinDateOption;
      let selectedJoinSourceType;
      let selectedRoleIds;
      let selectedSourceInviteCode;
      let username;
      ({ query, requireUnusualDmActivity, requireCommunicationDisabled, requireUnusualAccountActivity, requireUsernameQuarantined, selectedRoleIds, selectedJoinDateOption, selectedAccountAgeOption, selectedSourceInviteCode, selectedJoinSourceType } = this._searchState);
      let tmp = query.length > 0;
      if (tmp) {
        let flag = false;
        if ("" !== query.trim()) {
          const tmp46 = outer1_5(GuildMemberSafetySearch(outer1_2[3]).splitQuery(query), 2);
          const first = tmp46[0];
          const tmp49 = outer1_7(tmp46[1]);
          let iter7 = tmp49();
          if (iter7.done) {
            const tmp3 = outer1_7(first);
            let iter = tmp3();
            if (iter.done) {
              flag = false;
              if (null != user.user) {
                ({ globalName, username } = user.user);
                const tmp7 = outer1_7(first);
                let iter3 = tmp7();
                if (iter3.done) {
                  const tmp10 = outer1_7(first);
                  let iter5 = tmp10();
                  flag = false;
                  if (!iter5.done) {
                    flag = true;
                    while (!outer1_10(globalName, iter5.value)) {
                      let iter6 = tmp10();
                      iter5 = iter6;
                      flag = false;
                      if (iter6.done) {
                        break;
                      }
                    }
                  }
                } else {
                  flag = true;
                  while (!outer1_10(username, iter3.value)) {
                    let iter4 = tmp7();
                    iter3 = iter4;
                    break;
                  }
                }
              }
            } else {
              flag = true;
              while (!outer1_10(user.nick, iter.value)) {
                let iter2 = tmp3();
                iter = iter2;
                break;
              }
            }
          } else {
            flag = true;
            while (user.userId !== iter7.value) {
              let iter8 = tmp49();
              iter7 = iter8;
              break;
            }
          }
          const obj5 = GuildMemberSafetySearch(outer1_2[3]);
        }
        tmp = !flag;
      }
      let tmp12 = !tmp;
      if (!tmp) {
        let tmp13 = selectedRoleIds.size > 0;
        if (tmp13) {
          tmp13 = !(function hasSelectedRole(user, selectedRoleIds) {
            let closure_0 = user;
            let everyResult = 0 !== selectedRoleIds.size;
            if (everyResult) {
              const _Array = Array;
              everyResult = Array.from(selectedRoleIds).every((arg0) => {
                const roles = user.roles;
                return roles.includes(arg0);
              });
              const arr = Array.from(selectedRoleIds);
            }
            return everyResult;
          })(user, selectedRoleIds);
        }
        let tmp14 = !tmp13;
        if (!tmp13) {
          let tmp17 = !tmp16;
          if (!(null != selectedJoinDateOption.afterDate && user.joinedAtTimestamp < selectedJoinDateOption.afterDate)) {
            let tmp19 = !tmp18;
            if (!(null != selectedJoinDateOption.beforeDate && user.joinedAtTimestamp > selectedJoinDateOption.beforeDate)) {
              let tmp20 = null != selectedAccountAgeOption.afterDate;
              if (tmp20) {
                tmp20 = outer1_1(outer1_2[5]).extractTimestamp(user.userId) < selectedAccountAgeOption.afterDate;
                const obj = outer1_1(outer1_2[5]);
              }
              let tmp23 = !tmp20;
              if (!tmp20) {
                let tmp24 = null != selectedAccountAgeOption.beforeDate;
                if (tmp24) {
                  tmp24 = outer1_1(outer1_2[5]).extractTimestamp(user.userId) > selectedAccountAgeOption.beforeDate;
                  const obj2 = outer1_1(outer1_2[5]);
                }
                let tmp27 = !tmp24;
                if (!tmp24) {
                  let tmp28 = null == selectedSourceInviteCode || user.sourceInviteCode === selectedSourceInviteCode;
                  if (tmp28) {
                    let tmp29 = null == selectedJoinSourceType || user.joinSourceType === selectedJoinSourceType;
                    if (tmp29) {
                      let tmp30 = requireUnusualDmActivity;
                      if (!requireUnusualDmActivity) {
                        tmp30 = requireCommunicationDisabled;
                      }
                      if (!tmp30) {
                        tmp30 = requireUnusualAccountActivity;
                      }
                      if (!tmp30) {
                        tmp30 = requireUsernameQuarantined;
                      }
                      let tmp31 = !tmp30;
                      if (!tmp31) {
                        let tmp33 = !tmp32;
                        if (!requireUnusualDmActivity || !user.hasUnusualDmActivity) {
                          let tmp34 = !requireCommunicationDisabled;
                          if (!tmp34) {
                            tmp34 = !GuildMemberSafetySearch(outer1_2[6]).isMemberCommunicationDisabled(user);
                            const obj3 = GuildMemberSafetySearch(outer1_2[6]);
                          }
                          let tmp37 = !tmp34;
                          if (tmp34) {
                            let tmp39 = !tmp38;
                            if (!requireUnusualAccountActivity || !user.hasUnusualAccountActivity) {
                              let tmp40 = !requireUsernameQuarantined;
                              if (!tmp40) {
                                tmp40 = !GuildMemberSafetySearch(outer1_2[7]).hasAutomodQuarantinedProfile(user);
                                const obj4 = GuildMemberSafetySearch(outer1_2[7]);
                              }
                              tmp39 = !tmp40;
                            }
                            tmp37 = tmp39;
                          }
                          tmp33 = tmp37;
                        }
                        tmp31 = tmp33;
                      }
                      tmp29 = tmp31;
                    }
                    tmp28 = tmp29;
                  }
                  tmp27 = tmp28;
                }
                tmp23 = tmp27;
              }
              tmp19 = tmp23;
            }
            tmp17 = tmp19;
          }
          tmp14 = tmp17;
        }
        tmp12 = tmp14;
      }
      return tmp12;
    }
  };
  return callback(GuildMemberSafetySearch, items);
})();
const result = require("_slicedToArray").fileFinishedImporting("modules/guild_mod_dash_member_safety/GuildMemberSafetySearch.tsx");

export { getDefaultSearchState };
export const GuildMemberSafetySearch = tmp2;
