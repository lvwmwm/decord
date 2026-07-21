// Module ID: 6746
// Function ID: 52485
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 6746 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  const obj = { selectedRoleIds: new Set(), selectedJoinDateOption: {}, selectedAccountAgeOption: {}, selectedJoinSourceType: undefined, selectedSourceInviteCode: undefined, selectedSort: undefined };
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = Object.freeze(getDefaultSearchState());
const tmp2 = () => {
  class GuildMemberSafetySearch {
    constructor(arg0) {
      tmp = closure_3(this, GuildMemberSafetySearch);
      this.guildId = arg0;
      this._searchState = closure_9();
      this.hasDefaultQuery = true;
      return;
    }
  }
  const arg1 = GuildMemberSafetySearch;
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
      this._searchState = callback5();
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
      this.hasDefaultQuery = callback(closure_2[4])(this._searchState, closure_6);
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
        self._searchState = callback5();
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
          const tmp46 = callback3(GuildMemberSafetySearch(closure_2[3]).splitQuery(query), 2);
          const first = tmp46[0];
          const tmp49 = callback4(tmp46[1]);
          let iter7 = tmp49();
          if (iter7.done) {
            const tmp3 = callback4(first);
            let iter = tmp3();
            if (iter.done) {
              flag = false;
              if (null != user.user) {
                ({ globalName, username } = user.user);
                const tmp7 = callback4(first);
                let iter3 = tmp7();
                if (iter3.done) {
                  const tmp10 = callback4(first);
                  let iter5 = tmp10();
                  flag = false;
                  if (!iter5.done) {
                    flag = true;
                    while (!callback6(globalName, iter5.value)) {
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
                  while (!callback6(username, iter3.value)) {
                    let iter4 = tmp7();
                    iter3 = iter4;
                    break;
                  }
                }
              }
            } else {
              flag = true;
              while (!callback6(user.nick, iter.value)) {
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
          const obj5 = GuildMemberSafetySearch(closure_2[3]);
        }
        tmp = !flag;
      }
      let tmp12 = !tmp;
      if (!tmp) {
        let tmp13 = selectedRoleIds.size > 0;
        if (tmp13) {
          tmp13 = !function hasSelectedRole(user, selectedRoleIds) {
            let everyResult = 0 !== selectedRoleIds.size;
            if (everyResult) {
              const _Array = Array;
              everyResult = Array.from(selectedRoleIds).every((arg0) => {
                const roles = arg0.roles;
                return roles.includes(arg0);
              });
              const arr = Array.from(selectedRoleIds);
            }
            return everyResult;
          }(user, selectedRoleIds);
        }
        let tmp14 = !tmp13;
        if (!tmp13) {
          let tmp17 = !tmp16;
          if (!(null != selectedJoinDateOption.afterDate && user.joinedAtTimestamp < selectedJoinDateOption.afterDate)) {
            let tmp19 = !tmp18;
            if (!(null != selectedJoinDateOption.beforeDate && user.joinedAtTimestamp > selectedJoinDateOption.beforeDate)) {
              let tmp20 = null != selectedAccountAgeOption.afterDate;
              if (tmp20) {
                tmp20 = callback(closure_2[5]).extractTimestamp(user.userId) < selectedAccountAgeOption.afterDate;
                const obj = callback(closure_2[5]);
              }
              let tmp23 = !tmp20;
              if (!tmp20) {
                let tmp24 = null != selectedAccountAgeOption.beforeDate;
                if (tmp24) {
                  tmp24 = callback(closure_2[5]).extractTimestamp(user.userId) > selectedAccountAgeOption.beforeDate;
                  const obj2 = callback(closure_2[5]);
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
                            tmp34 = !GuildMemberSafetySearch(closure_2[6]).isMemberCommunicationDisabled(user);
                            const obj3 = GuildMemberSafetySearch(closure_2[6]);
                          }
                          let tmp37 = !tmp34;
                          if (tmp34) {
                            let tmp39 = !tmp38;
                            if (!requireUnusualAccountActivity || !user.hasUnusualAccountActivity) {
                              let tmp40 = !requireUsernameQuarantined;
                              if (!tmp40) {
                                tmp40 = !GuildMemberSafetySearch(closure_2[7]).hasAutomodQuarantinedProfile(user);
                                const obj4 = GuildMemberSafetySearch(closure_2[7]);
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
}();
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/guild_mod_dash_member_safety/GuildMemberSafetySearch.tsx");

export { getDefaultSearchState };
export const GuildMemberSafetySearch = tmp2;
