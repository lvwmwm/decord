// Module ID: 6756
// Function ID: 52622
// Name: createDefaultMemberSafetyPaginationState
// Dependencies: [57, 6, 7, 1917, 6729, 2]
// Exports: getSearchChunkLimit

// Module 6756 (createDefaultMemberSafetyPaginationState)
import _slicedToArray from "_slicedToArray";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function createDefaultMemberSafetyPaginationState() {
  const obj = { pageSize: items[0], currentPage: 1, continuationToken: null, sort: require(6729) /* result */.OrderBy.ORDER_BY_UNSPECIFIED, elasticSearchCursor: null };
  return obj;
}
let items = [12, 25, 50, 100];
let closure_7 = { FORWARD: 1, [1]: "FORWARD", BACKWARD: -1, [-1]: "BACKWARD" };
const tmp2 = (() => {
  class GuildMemberSafetyPagination {
    constructor(arg0, arg1) {
      self = this;
      tmp = outer1_3(this, self);
      this._reduceMemberIdsToPaginationChunks = (arg0, arg1, arg2) => {
        const sum = Math.floor(arg2 / self._paginationState.pageSize) + 1;
        if (null == arg0[sum]) {
          arg0[sum] = [];
        }
        let arr = arg0[sum];
        arr = arr.push(arg1);
        return arg0;
      };
      this.guildId = arg0;
      this._paginationState = outer1_8();
      this._version = 0;
      tmp2 = outer1_2(this._initPaginationFromRawMembers(arg1), 2);
      [this._sortedMemberIds, this._cachedPaginationChunks] = tmp2;
      this._version = this._version + 1;
      return;
    }
  }
  let obj = {
    key: "reset",
    value() {
      this._paginationState = outer1_8();
      this._sortedMemberIds = [];
      this._cachedPaginationChunks = {};
      this._version = this._version + 1;
    }
  };
  let items = [obj, , , , , , , , , , , , , , , ];
  obj = {
    key: "isMemberOnCurrentPage",
    value(arg0) {
      let items = this._cachedPaginationChunks[this._paginationState.currentPage];
      if (null == items) {
        items = [];
      }
      return items.includes(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "isMemberInAnyChunk",
    value(arg0) {
      const _sortedMemberIds = this._sortedMemberIds;
      return _sortedMemberIds.includes(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_initPaginationFromRawMembers",
    value(arr) {
      const self = this;
      const items = [];
      const items1 = [
        items,
        arr.reduce((arg0, userId) => {
          const result = self._reduceMemberIdsToPaginationChunks(arg0, userId.userId, arg2);
          items.push(userId.userId);
          return result;
        }, {})
      ];
      return items1;
    }
  };
  items[4] = {
    key: "_buildPaginationFromMemberIds",
    value(arr) {
      return arr.reduce(this._reduceMemberIdsToPaginationChunks, {});
    }
  };
  items[5] = {
    key: "_rebuildPaginationChunksFromStoredMembers",
    value() {
      this._cachedPaginationChunks = this._buildPaginationFromMemberIds(this._sortedMemberIds);
      this._version = this._version + 1;
      return true;
    }
  };
  items[6] = {
    key: "getPaginationState",
    value() {
      return this._paginationState;
    }
  };
  items[7] = {
    key: "updatePaginationToken",
    value(arg0) {
      const self = this;
      let flag = arg0 !== this._paginationState.continuationToken;
      if (flag) {
        const obj = {};
        const merged = Object.assign(self._paginationState);
        obj["continuationToken"] = arg0;
        self._paginationState = obj;
        flag = true;
      }
      return flag;
    }
  };
  items[8] = {
    key: "_calculateNewPageFromPageSizeChange",
    value(arg0, arg1) {
      let currentPage;
      let pageSize;
      ({ currentPage, pageSize } = this._paginationState);
      if (arg0 * pageSize <= this._sortedMemberIds.length) {
        if (null != arg1) {
          currentPage = arg1;
        }
        const _Math = Math;
        const _Math2 = Math;
        return Math.max(Math.ceil(pageSize / arg0 * currentPage), 1);
      } else {
        return 1;
      }
    }
  };
  items[9] = {
    key: "updatePaginationState",
    value(pageSize) {
      const self = this;
      let flag = false;
      if (tmp) {
        pageSize = pageSize.pageSize;
        if (null == pageSize) {
          pageSize = self._paginationState.pageSize;
        }
        pageSize.currentPage = self._calculateNewPageFromPageSizeChange(pageSize, pageSize.currentPage);
        flag = true;
      }
      const merged = Object.assign(self._paginationState);
      const merged1 = Object.assign(pageSize);
      self._paginationState = {};
      if (flag) {
        const result = self._rebuildPaginationChunksFromStoredMembers();
      }
      const items = [true, flag];
      return items;
    }
  };
  items[10] = {
    key: "updateSortedMembers",
    value(arg0) {
      [this._sortedMemberIds, this._cachedPaginationChunks] = outer1_2(this._initPaginationFromRawMembers(arg0), 2);
      this._version = this._version + 1;
      return true;
    }
  };
  items[11] = {
    key: "updateSortedMembersByUserIds",
    value(_sortedMemberIds) {
      this._sortedMemberIds = _sortedMemberIds;
      const result = this._rebuildPaginationChunksFromStoredMembers();
      return true;
    }
  };
  items[12] = {
    key: "_findMember",
    value(arg0) {
      let sum = arg0;
      let BACKWARD = arg1;
      const self = this;
      if (arg1 === undefined) {
        BACKWARD = outer1_7.BACKWARD;
      }
      let diff = sum;
      if (sum < self._sortedMemberIds.length) {
        diff = self._sortedMemberIds.length - 1;
      }
      let member = outer1_5.getMember(self.guildId, self._sortedMemberIds[sum]);
      let tmp5 = member;
      if (null == member) {
        sum = sum + BACKWARD;
        tmp5 = member;
        while (sum >= 0) {
          tmp5 = member;
          if (sum >= self._sortedMemberIds.length) {
            break;
          } else {
            let tmp6 = outer1_5;
            let member1 = outer1_5.getMember(self.guildId, self._sortedMemberIds[sum]);
            let joinedAt;
            if (null != member1) {
              joinedAt = member1.joinedAt;
            }
            if (null == joinedAt) {
              member1 = null;
            }
            member = member1;
            tmp5 = member1;
            if (null != member1) {
              break;
            }
          }
        }
      }
      return tmp5;
    }
  };
  items[13] = {
    key: "getElasticSearchPagination",
    value() {
      return this.getPaginationState().elasticSearchCursor;
    }
  };
  items[14] = {
    key: "paginatedMembers",
    get() {
      return this._cachedPaginationChunks;
    }
  };
  items[15] = {
    key: "version",
    get() {
      return this._version;
    }
  };
  return callback(GuildMemberSafetyPagination, items);
})();
let result = require("_defineProperties").fileFinishedImporting("modules/guild_mod_dash_member_safety/GuildMemberSafetyPagination.tsx");

export const PAGINATION_PAGE_SIZE_OPTIONS = items;
export const MAX_VISIBLE_PAGES = 7;
export const MAX_FORWARD_PAGE_SKIP = 5;
export const DEFAULT_SEARCH_CHUNK_LIMIT = 250;
export { createDefaultMemberSafetyPaginationState };
export const getSearchChunkLimit = function getSearchChunkLimit(paginationState) {
  return Math.max(5 * paginationState.pageSize, 250);
};
export const GuildMemberSafetyPagination = tmp2;
