// Module ID: 6722
// Function ID: 52327
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 6722 (_createForOfIteratorHelperLoose)
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = 3 * importDefault(dependencyMap[5]).Millis.SECOND;
const tmp2 = () => {
  class GuildMemberSafetyPageStore {
    constructor(arg0) {
      tmp = closure_3(this, GuildMemberSafetyPageStore);
      this.lastRefreshTimestamp = 0;
      this.lastCursorTimestamp = Date.now();
      this._lastRefreshTimer = null;
      this.guildId = arg0;
      this._initialized = false;
      this._members = null;
      this._pagination = null;
      this._search = null;
      return;
    }
  }
  const arg1 = GuildMemberSafetyPageStore;
  let obj = {
    key: "getSearchIndex",
    value() {
      if (null != this._search) {
        if (!this._search.hasDefaultQuery) {
          let CURRENT_GUILD_MEMBER = GuildMemberSafetyPageStore(closure_1[6]).MemberSafetySecondaryIndex.INCLUDED_IN_SEARCH_RESULTS;
        }
        return CURRENT_GUILD_MEMBER;
      }
      CURRENT_GUILD_MEMBER = GuildMemberSafetyPageStore(closure_1[6]).MemberSafetySecondaryIndex.CURRENT_GUILD_MEMBER;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "initialize",
    value() {
      let _members;
      let guildId;
      const self = this;
      if (this._initialized) {
        const _Date = Date;
        self.lastCursorTimestamp = Date.now();
      } else {
        self._initialized = true;
        const GuildMemberSafetySearch = GuildMemberSafetyPageStore(closure_1[7]).GuildMemberSafetySearch;
        const prototype = GuildMemberSafetySearch.prototype;
        const guildMemberSafetySearch = new GuildMemberSafetySearch(self.guildId);
        self._search = guildMemberSafetySearch;
        const GuildMemberSafetyMembers = GuildMemberSafetyPageStore(closure_1[6]).GuildMemberSafetyMembers;
        const prototype2 = GuildMemberSafetyMembers.prototype;
        const guildMemberSafetyMembers = new GuildMemberSafetyMembers(self.guildId);
        self._members = guildMemberSafetyMembers;
        const GuildMemberSafetyPagination = GuildMemberSafetyPageStore(closure_1[8]).GuildMemberSafetyPagination;
        ({ guildId, _members } = self);
        const prototype3 = GuildMemberSafetyPagination.prototype;
        const guildMemberSafetyPagination = new GuildMemberSafetyPagination(guildId, _members.values(self.getSearchIndex()));
        self._pagination = guildMemberSafetyPagination;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "isInitialized",
    get() {
      return this._initialized;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "reset",
    value() {
      let flag = arg0;
      const self = this;
      if (arg0 === undefined) {
        flag = false;
      }
      if (self._initialized) {
        const _members = self._members;
        if (null != _members) {
          _members.reset();
        }
        const _pagination = self._pagination;
        if (null != _pagination) {
          _pagination.reset();
        }
        const _search = self._search;
        if (null != _search) {
          _search.reset();
        }
        if (flag) {
          self.initialize();
        }
      }
    }
  };
  items[4] = {
    key: "searchChunkSize",
    get() {
      const self = this;
      let num = 0;
      if (null != this._pagination) {
        num = 0;
        if (self._initialized) {
          const _pagination = self._pagination;
          num = GuildMemberSafetyPageStore(closure_1[8]).getSearchChunkLimit(_pagination.getPaginationState());
          const obj = GuildMemberSafetyPageStore(closure_1[8]);
        }
      }
      return num;
    }
  };
  items[5] = {
    key: "getMember",
    value(arg0) {
      const self = this;
      let tmp = null;
      if (null != this._members) {
        tmp = null;
        if (self._initialized) {
          const _members = self._members;
          const memberByUserId = _members.getMemberByUserId(arg0);
          tmp = null;
          if (null != memberByUserId) {
            tmp = memberByUserId;
          }
        }
      }
      return tmp;
    }
  };
  items[6] = {
    key: "getMembersByIndex",
    value(arg0) {
      const self = this;
      if (null != this._members) {
        if (self._initialized) {
          const _members = self._members;
          const items = [_members.values(arg0), self._members.version];
          let items1 = items;
        }
        return items1;
      }
      items1 = [[], 0];
    }
  };
  items[7] = {
    key: "countMembersByIndex",
    value(arg0) {
      const self = this;
      let num = 0;
      if (null != this._members) {
        num = 0;
        if (self._initialized) {
          const _members = self._members;
          num = _members.count(arg0);
        }
      }
      return num;
    }
  };
  items[8] = {
    key: "_checkUpdatesForPaginationUpdate",
    value(isIncludedInSearchResults, isIncludedInSearchResults2) {
      let tmp = null != isIncludedInSearchResults2.isIncludedInSearchResults && isIncludedInSearchResults2.isIncludedInSearchResults !== isIncludedInSearchResults.isIncludedInSearchResults;
      if (!tmp) {
        tmp = null != isIncludedInSearchResults2.isCurrentGuildMemberByTimestamp && isIncludedInSearchResults2.isCurrentGuildMemberByTimestamp !== isIncludedInSearchResults.isCurrentGuildMemberByTimestamp;
        const tmp2 = null != isIncludedInSearchResults2.isCurrentGuildMemberByTimestamp && isIncludedInSearchResults2.isCurrentGuildMemberByTimestamp !== isIncludedInSearchResults.isCurrentGuildMemberByTimestamp;
      }
      return tmp;
    }
  };
  items[9] = {
    key: "_getIsIncludedInSearch",
    value(isIncludedInSearchResults) {
      const self = this;
      if (null == this._search) {
        const items = [false, false];
        return items;
      } else if (self._search.hasDefaultQuery) {
        const items1 = [false, false];
        return items1;
      } else {
        const obj = {};
        const merged = Object.assign(isIncludedInSearchResults);
        const merged1 = Object.assign(arg1);
        const _search = self._search;
        const result = _search.isMemberIncludedInSearchResults(obj);
        const items2 = [result, result !== isIncludedInSearchResults.isIncludedInSearchResults];
        return items2;
      }
    }
  };
  items[10] = {
    key: "updatePaginationChunks",
    value() {
      const self = this;
      if (null != this._pagination) {
        if (null != self._members) {
          if (self._initialized) {
            const _members = self._members;
            const _pagination = self._pagination;
            return _pagination.updateSortedMembers(_members.values(self.getSearchIndex()));
          }
        }
      }
      return false;
    }
  };
  items[11] = {
    key: "removeMember",
    value(closure_2) {
      const self = this;
      if (null != this._members) {
        if (self._initialized) {
          const _members = self._members;
          if (null == _members.getMemberByUserId(closure_2)) {
            return false;
          } else {
            const _members2 = self._members;
            return _members2.removeMember(closure_2) && self.updatePaginationChunks();
          }
        }
      }
      return false;
    }
  };
  items[12] = {
    key: "_rawUpdateMember",
    value(arg0, isIncludedInSearchResults) {
      const self = this;
      if (null == this._members) {
        const items = [false, false];
        return items;
      } else {
        const _members2 = self._members;
        const memberByUserId = _members2.getMemberByUserId(arg0);
        let flag4 = false;
        let enhanceNewMemberResult = memberByUserId;
        if (null == memberByUserId) {
          const trueMember = store.getTrueMember(self.guildId, arg0);
          if (null == trueMember) {
            const items1 = [false, false];
            return items1;
          } else {
            const _members3 = self._members;
            enhanceNewMemberResult = _members3.enhanceNewMember(trueMember, self.getSearchState(), isIncludedInSearchResults);
            flag4 = true;
          }
        }
        if (null == isIncludedInSearchResults.isIncludedInSearchResults) {
          const tmp4 = callback(self._getIsIncludedInSearch(enhanceNewMemberResult, isIncludedInSearchResults), 2);
          let flag = flag4;
          if (tmp4[1]) {
            isIncludedInSearchResults.isIncludedInSearchResults = tmp4[0];
            flag = true;
          }
        } else {
          flag = flag4;
          if (isIncludedInSearchResults.isIncludedInSearchResults !== enhanceNewMemberResult.isIncludedInSearchResults) {
            flag = true;
          }
        }
        const _members = self._members;
        if (!flag) {
          flag = self._checkUpdatesForPaginationUpdate(enhanceNewMemberResult, isIncludedInSearchResults);
        }
        const items2 = [flag, _members.updateMember(enhanceNewMemberResult, isIncludedInSearchResults)];
        return items2;
      }
    }
  };
  items[13] = {
    key: "isMemberInIndex",
    value(arg0) {
      const self = this;
      const tmp = null == this._members || !self._initialized;
      let hasItem = !tmp;
      if (!tmp) {
        const _membersMap = self._members._membersMap;
        hasItem = _membersMap.has(arg0);
      }
      return hasItem;
    }
  };
  items[14] = {
    key: "isMemberIncludedInSearchResults",
    value(arg0) {
      const self = this;
      if (null != this._members) {
        if (null != self._search) {
          if (null != self._pagination) {
            if (self._initialized) {
              if (self._search.hasDefaultQuery) {
                const _pagination = self._pagination;
                return _pagination.isMemberInAnyChunk(arg0);
              } else {
                const _members = self._members;
                let memberByUserId = _members.getMemberByUserId(arg0);
                if (null == memberByUserId) {
                  const trueMember = store.getTrueMember(self.guildId, arg0);
                  if (null == trueMember) {
                    return false;
                  } else {
                    const _members2 = self._members;
                    memberByUserId = _members2.enhanceNewMember(trueMember, self.getSearchState());
                  }
                } else if (memberByUserId.isIncludedInSearchResults) {
                  return true;
                }
                const _search = self._search;
                return _search.isMemberIncludedInSearchResults(memberByUserId);
              }
            }
          }
        }
      }
      return false;
    }
  };
  items[15] = {
    key: "updateMember",
    value(arg0, arg1) {
      const self = this;
      if (null != this._members) {
        if (self._initialized) {
          const tmp4 = callback(self._rawUpdateMember(arg0, arg1), 2);
          let result = tmp4[1];
          if (tmp4[0]) {
            result = self.updatePaginationChunks();
          }
          return result;
        }
      }
      return false;
    }
  };
  items[16] = {
    key: "updateClientMembers",
    value(arg0) {
      let iter3;
      let flag = arg1;
      let flag2 = arg2;
      const self = this;
      if (arg1 === undefined) {
        flag = false;
      }
      if (flag2 === undefined) {
        flag2 = false;
      }
      if (null != self._members) {
        if (self._initialized) {
          const tmp3 = callback3(arg0);
          const iter = tmp3();
          let flag3 = false;
          let iter2 = iter;
          let flag5 = false;
          let flag6 = false;
          let flag7 = false;
          if (!iter.done) {
            do {
              let value = iter2.value;
              let tmp4 = flag3;
              let tmp5 = flag5;
              if (null != value.joinedAt) {
                let tmp9 = value;
                if (flag) {
                  let obj = {};
                  let tmp6 = obj;
                  let tmp7 = value;
                  let merged = Object.assign(value);
                  obj["isIncludedInSearchResults"] = true;
                  tmp9 = obj;
                }
                let tmp10 = tmp9;
                if (flag2) {
                  let tmp11 = closure_0;
                  let tmp12 = closure_1;
                  let obj2 = closure_0(closure_1[9]);
                  obj = {};
                  let tmp14 = obj;
                  let tmp15 = tmp9;
                  let joinedAtTimestamp = obj2.getJoinedAtTimestamp(value.joinedAt);
                  let merged1 = Object.assign(tmp9);
                  obj["isCurrentGuildMemberByTimestamp"] = joinedAtTimestamp <= self._members.newMemberTimestamp;
                  obj["refreshTimestamp"] = self.lastRefreshTimestamp;
                  tmp10 = obj;
                }
                let tmp17 = closure_2;
                let tmp18 = closure_2(self._rawUpdateMember(value.userId, tmp10), 2);
                let tmp19 = tmp18[0] || flag3;
                let tmp20 = tmp18[1] || flag5;
                tmp5 = tmp20;
                tmp4 = tmp19;
                let tmp21 = tmp10;
                let tmp22 = tmp18;
              }
              iter3 = tmp3();
              flag3 = tmp4;
              flag5 = tmp5;
              iter2 = iter3;
              flag6 = tmp4;
              flag7 = tmp5;
            } while (!iter3.done);
          }
          if (flag6) {
            flag7 = self.updatePaginationChunks();
          }
          return flag7;
        }
      }
      return false;
    }
  };
  items[17] = {
    key: "updateServerMembers",
    value(arg0) {
      let iter3;
      const self = this;
      if (null != this._members) {
        if (self._initialized) {
          const tmp3 = callback3(arg0);
          const iter = tmp3();
          let flag = false;
          let iter2 = iter;
          let flag2 = false;
          let flag3 = false;
          let flag4 = false;
          if (!iter.done) {
            do {
              let value = iter2.value;
              let tmp4 = closure_5;
              let trueMember = closure_5.getTrueMember(self.guildId, value.user.id);
              let tmp6 = flag;
              let tmp7 = flag2;
              if (null != trueMember) {
                let tmp8 = closure_2;
                let tmp9 = closure_2(self._rawUpdateMember(value.user.id, trueMember), 2);
                let tmp10 = tmp9[0] || flag;
                let tmp11 = tmp9[1] || flag2;
                tmp7 = tmp11;
                tmp6 = tmp10;
                let tmp12 = tmp9;
              }
              iter3 = tmp3();
              flag = tmp6;
              flag2 = tmp7;
              iter2 = iter3;
              flag3 = tmp6;
              flag4 = tmp7;
            } while (!iter3.done);
          }
          if (flag3) {
            flag4 = self.updatePaginationChunks();
          }
          return flag4;
        }
      }
      return false;
    }
  };
  items[18] = {
    key: "updateMembersByMemberIds",
    value(arr) {
      const self = this;
      const GuildMemberSafetyPageStore = this;
      if (null != this._members) {
        if (self._initialized) {
          return self.updateClientMembers(arr.reduce((arr) => {
            const trueMember = trueMember.getTrueMember(self.guildId, arg1);
            if (null != trueMember) {
              arr.push(trueMember);
            }
            return arr;
          }, []));
        }
      }
      return false;
    }
  };
  items[19] = {
    key: "updateMembersSort",
    value(arg0) {
      const GuildMemberSafetyPageStore = this;
      return new Promise((arg0) => {
        const items = [...self(arg0[10]).cloneDeep(closure_0.getMembersByIndex(closure_0(closure_1[6]).MemberSafetySecondaryIndex.CURRENT_GUILD_MEMBER)[0])];
        const obj = self(arg0[10]);
        HermesBuiltin.arraySpread(self(arg0[10]).cloneDeep(self.getMembersByIndex(self(arg0[6]).MemberSafetySecondaryIndex.NEW_GUILD_MEMBER)[0]), tmp);
        const item = items.forEach((joinedAt) => {
          let obj = lib(closure_1[11]);
          const _search = lib._search;
          let result;
          const sortValueForMember = obj.getSortValueForMember(joinedAt, closure_1);
          if (null != _search) {
            result = _search.isMemberIncludedInSearchResults(joinedAt);
          }
          const _members = lib._members;
          if (null != _members) {
            obj = { sort: sortValueForMember, isIncludedInSearchResults: tmp3 };
            _members.updateMember(joinedAt, obj);
          }
        });
        arg0();
      });
    }
  };
  items[20] = {
    key: "sortMembersBySelectedSort",
    value(sort) {
      const self = this;
      const GuildMemberSafetyPageStore = this;
      if (tmp) {
        const obj = { sort };
        const result = self.updatePaginationState(obj, true);
        self.updateMembersSort(sort).then(() => {
          const result = self.updatePaginationChunks();
        });
        const updateMembersSortResult = self.updateMembersSort(sort);
      }
    }
  };
  items[21] = {
    key: "updateSearchedMembersByMemberIds",
    value(arr) {
      const self = this;
      const GuildMemberSafetyPageStore = this;
      if (null != this._search) {
        if (null != self._members) {
          if (self._initialized) {
            return self.updateClientMembers(arr.reduce((arr) => {
              const trueMember = trueMember.getTrueMember(self.guildId, arg1);
              if (null != trueMember) {
                arr.push(trueMember);
              }
              return arr;
            }, []), self._search.requiresUsernameMatch, 0 !== self.lastRefreshTimestamp);
          }
        }
      }
      return false;
    }
  };
  items[22] = {
    key: "rebuildAllMembers",
    value() {
      const self = this;
      if (null != this._members) {
        if (self._initialized) {
          return self.updateClientMembers(store.getMembers(self.guildId));
        }
      }
      return false;
    }
  };
  items[23] = {
    key: "_scheduleRefresh",
    value(lastRefreshTimestamp) {
      const self = this;
      const GuildMemberSafetyPageStore = this;
      this.lastRefreshTimestamp = lastRefreshTimestamp;
      this.lastCursorTimestamp = Date.now();
      if (null != this._lastRefreshTimer) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._lastRefreshTimer);
      }
      self._lastRefreshTimer = setTimeout(() => {
        self._lastRefreshTimer = null;
        self.lastRefreshTimestamp = 0;
      }, closure_7);
    }
  };
  items[24] = {
    key: "refreshNewMembersAndSearchResults",
    value() {
      let iter3;
      const self = this;
      if (null != this._search) {
        if (null != self._members) {
          if (self._initialized) {
            const _Number = Number;
            const _Date = Date;
            const NumberResult = Number(Date.now());
            self._scheduleRefresh(NumberResult);
            let obj = GuildMemberSafetyPageStore(closure_1[10]);
            const _members = self._members;
            const tmp7 = callback3(obj.cloneDeep(_members.values(GuildMemberSafetyPageStore(closure_1[6]).MemberSafetySecondaryIndex.NEW_GUILD_MEMBER)));
            const iter = tmp7();
            let iter2 = iter;
            let flag3 = false;
            let flag4 = false;
            if (!iter.done) {
              do {
                let value = iter2.value;
                let _members2 = self._members;
                obj = { isCurrentGuildMemberByTimestamp: true, refreshTimestamp: NumberResult };
                let tmp8 = closure_6;
                obj.user = closure_6.getUser(value.userId);
                let tmp9 = _members2.updateMember(value, obj) || flag3;
                iter3 = tmp7();
                flag3 = tmp9;
                iter2 = iter3;
                flag4 = tmp9;
              } while (!iter3.done);
            }
            const _members3 = self._members;
            const result = _members3.resetNewMemberTimestamp();
            if (self.resetSearchState()) {
              flag4 = false;
            }
            obj = { currentPage: 1 };
            const tmp12 = callback(self.updatePaginationState(obj, false), 2);
            const first = tmp12[0];
            if (tmp12[1]) {
              flag4 = false;
            }
            if (flag4) {
              const result1 = self.updatePaginationChunks();
            }
            return true;
          }
        }
      }
      return false;
    }
  };
  items[25] = {
    key: "getNewMemberTimestamp",
    value() {
      const self = this;
      let num = 0;
      if (null != this._members) {
        num = 0;
        if (self._initialized) {
          num = self._members.newMemberTimestamp;
        }
      }
      return num;
    }
  };
  items[26] = {
    key: "updateSearchState",
    value(selectedSort) {
      let iter3;
      const self = this;
      if (null != this._members) {
        if (null != self._search) {
          if (self._initialized) {
            const _Boolean = Boolean;
            const BooleanResult = Boolean(self._search.hasDefaultQuery);
            let tmp3 = null != selectedSort.selectedSort;
            if (tmp3) {
              const _search = self._search;
              tmp3 = selectedSort.selectedSort !== _search.getSearchState().selectedSort;
            }
            if (tmp3) {
              const result = self.sortMembersBySelectedSort(selectedSort.selectedSort);
            }
            const _search2 = self._search;
            const updateSearchStateResult = _search2.updateSearchState(selectedSort);
            if (self._search.hasDefaultQuery) {
              if (BooleanResult) {
                return self.updatePaginationChunks();
              }
            }
            let obj = GuildMemberSafetyPageStore(closure_1[10]);
            const _members = self._members;
            let tmp8 = BooleanResult !== self._search.hasDefaultQuery;
            const tmp10 = callback3(obj.cloneDeep(_members.values(GuildMemberSafetyPageStore(closure_1[6]).MemberSafetySecondaryIndex.CURRENT_GUILD_MEMBER)));
            const iter = tmp10();
            let tmp11 = updateSearchStateResult;
            let iter2 = iter;
            let flag = updateSearchStateResult;
            let tmp12 = tmp8;
            if (!iter.done) {
              do {
                let value = iter2.value;
                let flag2 = tmp11;
                let flag3 = tmp8;
                if (value.isCurrentGuildMemberByTimestamp) {
                  let _search3 = self._search;
                  let result1 = _search3.isMemberIncludedInSearchResults(value);
                  flag2 = tmp11;
                  flag3 = tmp8;
                  let tmp14 = result1;
                  if (result1 !== value.isIncludedInSearchResults) {
                    let _members2 = self._members;
                    obj = { isIncludedInSearchResults: result1 };
                    let updateMemberResult = _members2.updateMember(value, obj);
                    flag2 = true;
                    flag3 = true;
                    let tmp16 = result1;
                  }
                }
                iter3 = tmp10();
                tmp11 = flag2;
                tmp8 = flag3;
                iter2 = iter3;
                flag = flag2;
                tmp12 = flag3;
              } while (!iter3.done);
            }
            if (tmp12) {
              const result2 = self.updatePaginationChunks();
              obj = { currentPage: 1 };
              const result3 = self.updatePaginationState(obj);
              flag = true;
            }
            return flag;
          }
        }
      }
      return false;
    }
  };
  items[27] = {
    key: "getSearchState",
    value() {
      const self = this;
      if (null != this._search) {
        if (self._initialized) {
          const _search = self._search;
          let searchState = _search.getSearchState();
        }
        return searchState;
      }
      searchState = GuildMemberSafetyPageStore(closure_1[7]).getDefaultSearchState();
    }
  };
  items[28] = {
    key: "hasDefaultSearchState",
    value() {
      const self = this;
      return null == this._search || !self._initialized || self._search.hasDefaultQuery;
    }
  };
  items[29] = {
    key: "resetSearchState",
    value() {
      const self = this;
      const tmp = null == this._search || !self._initialized;
      let tmp2 = !tmp;
      if (!tmp) {
        const _search = self._search;
        const tmp3 = !_search.resetSearchState();
        let result = !tmp3;
        if (!tmp3) {
          result = self.updatePaginationChunks();
        }
        tmp2 = result;
      }
      return tmp2;
    }
  };
  items[30] = {
    key: "getTotalResultsCount",
    value() {
      const self = this;
      let num = 0;
      if (null != this._search) {
        num = 0;
        if (null != self._pagination) {
          num = 0;
          if (self._initialized) {
            if (!self._search.hasDefaultQuery) {
              const _pagination = self._pagination;
              _pagination.getPaginationState().totalResultsCount;
            }
          }
        }
      }
      return num;
    }
  };
  items[31] = {
    key: "updatePaginationState",
    value(totalResultsCount) {
      let flag = arg1;
      const self = this;
      if (arg1 === undefined) {
        flag = true;
      }
      if (null != self._search) {
        if (null != self._pagination) {
          if (self._initialized) {
            if (flag) {
              self.lastRefreshTimestamp = 0;
            }
            if (tmp) {
              self._defaultSearchTotalResultsCount = totalResultsCount.totalResultsCount;
            }
            const _pagination = self._pagination;
            let result = _pagination.updatePaginationState(totalResultsCount);
            const tmp = self._search.hasDefaultQuery && null != totalResultsCount.totalResultsCount;
          }
          return result;
        }
      }
      result = [false, false];
    }
  };
  items[32] = {
    key: "clearPaginationState",
    value() {
      const _pagination = this._pagination;
      if (null != _pagination) {
        _pagination.reset();
      }
    }
  };
  items[33] = {
    key: "getPaginationState",
    value() {
      const self = this;
      if (null != this._pagination) {
        if (self._initialized) {
          const _pagination = self._pagination;
          let paginationState = _pagination.getPaginationState();
        }
        return paginationState;
      }
      paginationState = GuildMemberSafetyPageStore(closure_1[8]).createDefaultMemberSafetyPaginationState();
    }
  };
  items[34] = {
    key: "getPaginatedMembers",
    value() {
      const self = this;
      if (null != this._pagination) {
        if (self._initialized) {
          const items = [self._pagination.paginatedMembers, self._pagination.version];
          let items1 = items;
        }
        return items1;
      }
      items1 = [{}, 0];
    }
  };
  items[35] = {
    key: "updatePaginationToken",
    value(arg0) {
      const self = this;
      const tmp = null == this._pagination || !self._initialized;
      let result = !tmp;
      if (!tmp) {
        const _pagination = self._pagination;
        result = _pagination.updatePaginationToken(arg0);
      }
      return result;
    }
  };
  items[36] = {
    key: "getElasticSearchPagination",
    value() {
      const self = this;
      let elasticSearchPagination = null;
      if (null != this._pagination) {
        elasticSearchPagination = null;
        if (self._initialized) {
          const _pagination = self._pagination;
          elasticSearchPagination = _pagination.getElasticSearchPagination();
        }
      }
      return elasticSearchPagination;
    }
  };
  items[37] = {
    key: "removeRoleFromSearchState",
    value(arg0) {
      const selectedRoleIds = new Set(this.getSearchState().selectedRoleIds);
      selectedRoleIds.delete(arg0);
      return this.updateSearchState({ selectedRoleIds });
    }
  };
  return callback(GuildMemberSafetyPageStore, items);
}();
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/guild_mod_dash_member_safety/GuildMemberSafetyPageStore.tsx");

export const GuildMemberSafetyPageStore = tmp2;
