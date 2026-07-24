// Module ID: 9520
// Function ID: 74076
// Name: _isNativeReflectConstruct
// Dependencies: [57, 153, 6, 7, 15, 17, 18, 4044, 7089, 1348, 1838, 4142, 1906, 4325, 1849, 9521, 7093, 21, 664, 9522, 566, 686, 9523, 22, 2]

// Module 9520 (_isNativeReflectConstruct)
import _slicedToArray from "_slicedToArray";
import "_readOnlyError";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import result from "result";
import DISCORD_EPOCH from "DISCORD_EPOCH";
import set from "set";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import { SUMMARY_POLL_INTERVAL } from "result";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleQuickSwitcherUpdate() {
  const results = props.getProps().results;
  const found = results.filter((type) => {
    let tmp = type.type === outer1_0(outer1_2[16]).AutocompleterResultTypes.TEXT_CHANNEL;
    if (tmp) {
      tmp = 0 === type.record.type;
    }
    return tmp;
  });
  let closure_29 = found.map((record) => record.record.id);
}
let obj = { FETCHING: "fetching", OK: "ok", ERROR: "error" };
let closure_23 = {};
let closure_24 = {};
let closure_25 = {};
let closure_26 = [];
let closure_27 = {};
obj = { status: null, lastRequest: null, lastResponse: null };
obj.status = obj.OK;
let closure_29 = [];
let closure_30 = [];
let tmp3 = ((PersistedStore) => {
  class SummaryStore {
    constructor() {
      self = this;
      tmp = outer1_4(this, SummaryStore);
      obj = outer1_7(SummaryStore);
      tmp2 = outer1_6;
      if (outer1_31()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(SummaryStore, PersistedStore);
  let obj = {
    key: "getState",
    value() {
      return { shouldShowTopicsBar: outer1_18 };
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , ];
  obj = {
    key: "initialize",
    value(shouldShowTopicsBar) {
      const self = this;
      shouldShowTopicsBar = undefined;
      if (null != shouldShowTopicsBar) {
        shouldShowTopicsBar = shouldShowTopicsBar.shouldShowTopicsBar;
      }
      const outer1_18 = null == shouldShowTopicsBar || shouldShowTopicsBar;
      self.waitFor(outer1_11, outer1_9, outer1_12, outer1_10, outer1_13, outer1_14, outer1_15, outer1_16);
      const items = [outer1_10];
      self.syncWith(items, outer1_32);
    }
  };
  items[1] = obj;
  obj = {
    key: "allSummaries",
    value() {
      return outer1_23;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "topSummaries",
    value: function topSummaries() {
      const values = Object.values(outer1_23);
      const found = values.flat().filter((people) => {
        let tmp = people.people.length > 1;
        if (tmp) {
          const _Date = Date;
          const obj = outer2_1(outer2_2[17]);
          const date = new Date();
          const time = date.getTime();
          tmp = outer2_1(outer2_2[17]).extractTimestamp(people.endId) > time - 5 * outer2_1(outer2_2[18]).Millis.HOUR;
          const extractTimestampResult = outer2_1(outer2_2[17]).extractTimestamp(people.endId);
        }
        return tmp;
      });
      return found.sort((endId, endId2) => {
        const obj = outer2_1(outer2_2[17]);
        const extractTimestampResult = outer2_1(outer2_2[17]).extractTimestamp(endId2.endId);
        return extractTimestampResult - outer2_1(outer2_2[17]).extractTimestamp(endId.endId);
      });
    }
  };
  items[4] = {
    key: "summaries",
    value(arg0) {
      let tmp = outer1_23[arg0];
      if (null == tmp) {
        tmp = outer1_30;
      }
      return tmp;
    }
  };
  items[5] = {
    key: "shouldShowTopicsBar",
    value() {
      return outer1_18;
    }
  };
  items[6] = {
    key: "findSummary",
    value(arg0, arg1) {
      let closure_0 = arg1;
      const found = this.summaries(arg0).find((id) => id.id === closure_0);
      let tmp2 = null;
      if (null != found) {
        tmp2 = found;
      }
      return tmp2;
    }
  };
  items[7] = {
    key: "selectedSummary",
    value(arg0) {
      const self = this;
      let findSummaryResult = null;
      if (null != outer1_21) {
        findSummaryResult = null;
        if (outer1_21.channelId === arg0) {
          findSummaryResult = null;
          if (null != outer1_21.summaryId) {
            let summaryId;
            if (null != outer1_21) {
              summaryId = outer1_21.summaryId;
            }
            findSummaryResult = self.findSummary(arg0, summaryId);
          }
        }
      }
      return findSummaryResult;
    }
  };
  items[8] = {
    key: "summaryFeedback",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        tmp = outer1_25[arg0.id];
      }
      return tmp;
    }
  };
  items[9] = {
    key: "isFetching",
    value(arg0, arg1) {
      if (null != arg1) {
        let summaryId;
        if (null != outer1_24[arg0]) {
          summaryId = tmp6.summaryId;
        }
        let tmp4 = summaryId === arg1;
      } else {
        let fetching;
        if (null != outer1_24[arg0]) {
          fetching = tmp2.fetching;
        }
        tmp4 = true === fetching;
      }
      return tmp4;
    }
  };
  items[10] = {
    key: "status",
    value(arg0) {
      return outer1_24[arg0];
    }
  };
  items[11] = {
    key: "shouldFetch",
    value(channelId) {
      const channel = outer1_11.getChannel(channelId);
      if (obj.canSeeChannelSummaries(channel)) {
        if (null != arg1) {
          let prop;
          if (null != tmp) {
            prop = tmp.summaryIdLastRequestedAt;
          }
          let num3 = 0;
          if (null != prop) {
            num3 = prop;
          }
          const _Date = Date;
          let summaryId;
          const diff = Date.now() - num3;
          if (null != tmp) {
            summaryId = tmp.summaryId;
          }
          let tmp12 = arg1 !== summaryId;
          if (!tmp12) {
            tmp12 = diff > outer1_17;
          }
          return tmp12;
        } else {
          let lastReceivedAt;
          if (null != tmp) {
            lastReceivedAt = tmp.lastReceivedAt;
          }
          let num2 = 0;
          if (null != lastReceivedAt) {
            num2 = lastReceivedAt;
          }
          let fetching;
          if (null != tmp) {
            fetching = tmp.fetching;
          }
          return !Boolean(fetching) && 0 === num2;
        }
      } else {
        return false;
      }
      obj = SummaryStore(outer1_2[19]);
    }
  };
  items[12] = {
    key: "channelAffinities",
    value() {
      return outer1_26;
    }
  };
  items[13] = {
    key: "channelAffinitiesById",
    value() {
      return outer1_27;
    }
  };
  items[14] = {
    key: "channelAffinitiesStatus",
    value() {
      return outer1_28;
    }
  };
  items[15] = {
    key: "shouldFetchChannelAffinities",
    value() {
      let tmp = outer1_28.status !== outer1_22.FETCHING;
      if (tmp) {
        let tmp4 = null != outer1_28.lastResponse;
        if (tmp4) {
          const _Date = Date;
          const diff = Date.now() - outer1_28.lastResponse;
          tmp4 = diff < 30 * outer1_1(outer1_2[18]).Millis.SECOND;
        }
        tmp = !tmp4;
      }
      return tmp;
    }
  };
  items[16] = {
    key: "defaultChannelIds",
    value(numChannels) {
      let withChannelAffinities;
      let withQuickSwitcher;
      let withUnreads;
      let num = numChannels.numChannels;
      ({ withQuickSwitcher, withChannelAffinities, withUnreads } = numChannels);
      if (num === undefined) {
        num = 25;
      }
      const items = [];
      let combined = items;
      if (withQuickSwitcher) {
        combined = items.concat(outer1_29);
      }
      let combined1 = combined;
      if (withChannelAffinities) {
        combined1 = combined.concat(outer1_26.map((channel_id) => channel_id.channel_id));
      }
      let found = combined1;
      if (withUnreads) {
        found = combined1.filter((channelId) => {
          const channel = outer2_11.getChannel(channelId);
          let hasUnreadResult = null != channel;
          if (hasUnreadResult) {
            hasUnreadResult = !outer2_15.isChannelMuted(channel.guild_id, channelId);
          }
          if (hasUnreadResult) {
            hasUnreadResult = outer2_13.hasUnread(channelId);
          }
          return hasUnreadResult;
        });
      }
      const found1 = found.filter((channelId) => {
        const channel = outer2_11.getChannel(channelId);
        return SummaryStore(outer2_2[19]).canSeeChannelSummaries(channel, false, false);
      });
      return found1.slice(0, num);
    }
  };
  items[17] = {
    key: "visibleSummaryIndex",
    value() {
      return outer1_20;
    }
  };
  return callback(SummaryStore, items);
})(require("initialize").PersistedStore);
tmp3.persistKey = "SummaryStore";
obj = {
  CONNECTION_OPEN() {
    return false;
  },
  CHANNEL_SELECT(channelId) {
    channelId = undefined;
    if (null != c21) {
      channelId = c21.channelId;
    }
    if (channelId !== channelId.channelId) {
      c21 = null;
    }
  },
  TOGGLE_TOPICS_BAR() {
    closure_18 = !closure_18;
  },
  RECEIVE_CHANNEL_SUMMARY(arg0) {
    let channelId;
    let error;
    let receivedAt;
    let summary;
    ({ summary, channelId } = arg0);
    let summaryFromServer;
    ({ error, receivedAt } = arg0);
    if (null != summary) {
      const _Object = Object;
      if (Object.keys(summary).length > 0) {
        summaryFromServer = summaryFromServer(9523).createSummaryFromServer(summary, channelId);
        let items = dependencyMap2[channelId];
        if (null == items) {
          items = [];
        }
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        const findIndexResult = items1.findIndex((id) => {
          id = undefined;
          if (null != summaryFromServer) {
            id = summaryFromServer.id;
          }
          return id.id === id;
        });
        if (findIndexResult > -1) {
          items1[findIndexResult] = summaryFromServer;
        } else {
          items1.push(summaryFromServer);
        }
        dependencyMap2[channelId] = items1;
        const obj3 = summaryFromServer(9523);
      }
    }
    let obj = {};
    let tmp7 = dependencyMap3[channelId];
    if (null == tmp7) {
      obj = { fetching: false };
      tmp7 = obj;
    }
    const merged = Object.assign(tmp7);
    obj["summaryId"] = undefined;
    obj["summaryIdLastReceivedAt"] = receivedAt;
    obj["summaryIdError"] = error;
    dependencyMap3[channelId] = obj;
  },
  REQUEST_CHANNEL_SUMMARY(channelId) {
    let requestedAt;
    let summaryId;
    channelId = channelId.channelId;
    let obj = {};
    let tmp2 = dependencyMap3[channelId];
    ({ summaryId, requestedAt } = channelId);
    if (null == tmp2) {
      obj = { fetching: false };
      tmp2 = obj;
    }
    const merged = Object.assign(tmp2);
    obj["summaryId"] = summaryId;
    obj["summaryIdLastRequestedAt"] = requestedAt;
    dependencyMap3[channelId] = obj;
  },
  RECEIVE_CHANNEL_SUMMARIES(arg0) {
    let channelId;
    let error;
    let receivedAt;
    let summaries;
    ({ summaries, channelId } = arg0);
    ({ error, receivedAt } = arg0);
    const found = summaries.filter((arg0) => Object.keys(arg0).length > 0);
    const mapped = found.map((summary) => channelId(outer1_2[22]).createSummaryFromServer(summary, channelId));
    if (null != closure_21) {
      if (closure_21.channelId === channelId) {
        if (!mapped.some((id) => {
          let summaryId;
          if (null != outer1_21) {
            summaryId = outer1_21.summaryId;
          }
          return id.id === summaryId;
        })) {
          let items = dependencyMap2[channelId];
          if (null == items) {
            items = [];
          }
          const found1 = items.find((id) => {
            let summaryId;
            if (null != outer1_21) {
              summaryId = outer1_21.summaryId;
            }
            return id.id === summaryId;
          });
          if (null != found1) {
            mapped.push(found1);
          }
        }
      }
    }
    let obj = channelId(22);
    dependencyMap2[channelId] = obj.sortBy(mapped, (startId) => outer1_1(outer1_2[17]).extractTimestamp(startId.startId)).reverse();
    obj = {};
    const merged = Object.assign(dependencyMap3[channelId]);
    obj["fetching"] = false;
    obj["error"] = undefined;
    obj["lastReceivedAt"] = receivedAt;
    if (null != error) {
      obj.error = error;
    }
    dependencyMap3[channelId] = obj;
  },
  REQUEST_CHANNEL_SUMMARIES(requestedAt) {
    let obj = {};
    obj = dependencyMap3[requestedAt.channelId];
    if (null == obj) {
      obj = {};
    }
    const merged = Object.assign(obj);
    obj["fetching"] = true;
    obj["lastRequestedAt"] = requestedAt.requestedAt;
    dependencyMap3[requestedAt.channelId] = obj;
  },
  SET_HIGHLIGHTED_SUMMARY(channelId) {
    let summaryId;
    if (null == closure_19) {
      if (null == channelId.channelId) {
        return false;
      }
    }
    channelId = undefined;
    if (null != closure_19) {
      channelId = closure_19.channelId;
    }
    if (channelId.channelId === channelId) {
      summaryId = undefined;
      if (null != closure_19) {
        summaryId = closure_19.summaryId;
      }
      if (channelId.summaryId === summaryId) {
        return false;
      }
    }
    let tmp3 = null;
    if (null != channelId.channelId) {
      const obj = {};
      ({ channelId: obj.channelId, summaryId } = channelId);
      let tmp4 = null;
      if (null != summaryId) {
        tmp4 = summaryId;
      }
      obj.summaryId = tmp4;
      tmp3 = obj;
    }
    closure_19 = tmp3;
    if (null != tmp3) {
      if (closure_19.channelId === channelId.channelId) {
        if (null != closure_19.summaryId) {
          let findIndexResult;
          if (null != dependencyMap2[closure_19.channelId]) {
            findIndexResult = obj2.findIndex((id) => {
              let summaryId;
              if (null != tmp3) {
                summaryId = tmp3.summaryId;
              }
              return id.id === summaryId;
            });
          }
        }
      }
    }
  },
  UPDATE_VISIBLE_MESSAGES(arg0) {
    let closure_0 = arg0;
    channelId = channelId.getChannelId();
    if (null != channelId) {
      if (null != closure_19) {
        if (closure_19.channelId === channelId) {
          if (null != closure_19.summaryId) {
            let findIndexResult;
            if (null != dependencyMap2[closure_19.channelId]) {
              findIndexResult = obj2.findIndex((id) => {
                let summaryId;
                if (null != outer1_19) {
                  summaryId = outer1_19.summaryId;
                }
                return id.id === summaryId;
              });
            }
            let findIndexResult1 = findIndexResult;
          }
        }
      }
      findIndexResult1 = undefined;
      if (null != dependencyMap2[channelId]) {
        findIndexResult1 = obj.findIndex((endId) => {
          let bottomVisibleMessage;
          let topVisibleMessage;
          ({ topVisibleMessage, bottomVisibleMessage } = closure_0);
          let tmp = null == topVisibleMessage;
          if (!tmp) {
            tmp = topVisibleMessage > endId.endId;
          }
          if (!tmp) {
            tmp = null == bottomVisibleMessage;
          }
          if (!tmp) {
            tmp = bottomVisibleMessage < endId.startId;
          }
          return !tmp;
        });
      }
    }
  },
  SET_SELECTED_SUMMARY(channelId) {
    channelId = channelId.channelId;
    let tmp = null;
    if (null != channelId) {
      channelId = undefined;
      if (null != obj) {
        channelId = obj.channelId;
      }
      let tmp3 = channelId !== channelId;
      if (!tmp3) {
        let summaryId;
        if (null != obj) {
          summaryId = obj.summaryId;
        }
        tmp3 = channelId.summaryId !== summaryId;
      }
      if (tmp3) {
        obj = { channelId };
        summaryId = channelId.summaryId;
        let tmp5 = null;
        if (null != summaryId) {
          tmp5 = summaryId;
        }
        obj.summaryId = tmp5;
      }
      tmp = tmp3;
    }
    return tmp;
  },
  SET_SUMMARY_FEEDBACK(arg0) {
    let rating;
    let summary;
    ({ summary, rating } = arg0);
    if (null != rating) {
      closure_25[summary.id] = rating;
    } else {
      const id = summary.id;
      delete tmp2[tmp];
    }
  },
  REQUEST_CHANNEL_AFFINITIES() {
    const obj = {};
    const merged = Object.assign(obj);
    obj["status"] = obj.FETCHING;
    obj["lastRequest"] = Date.now();
  },
  RECEIVE_CHANNEL_AFFINITIES(affinities) {
    affinities = affinities.affinities;
    if (null != affinities.error) {
      let items = [];
      let reduced = {};
      let obj = {};
      const merged = Object.assign(obj);
      obj["status"] = obj.ERROR;
      const _Date2 = Date;
      obj["lastResponse"] = Date.now();
    } else {
      items = affinities;
      if (null == affinities) {
        items = [];
      }
      reduced = undefined;
      if (null != affinities) {
        reduced = affinities.reduce((arg0, channel_id) => {
          arg0[channel_id.channel_id] = channel_id.affinity;
          return arg0;
        }, {});
      }
      if (null == reduced) {
        reduced = {};
      }
      obj = {};
      const merged1 = Object.assign(obj);
      obj["status"] = obj.OK;
      const _Date = Date;
      obj["lastResponse"] = Date.now();
    }
  },
  REQUEST_CHANNEL_SUMMARIES_BULK(arg0) {
    let channelIds;
    let require;
    ({ channelIds, requestedAt: require } = arg0);
    const reduced = channelIds.reduce((arg0, arg1) => {
      obj = obj[arg1];
      if (null == obj) {
        obj = {};
      }
      obj = {};
      const merged = Object.assign(obj);
      obj["fetching"] = true;
      obj["lastRequestedAt"] = closure_0;
      obj["error"] = undefined;
      arg0[arg1] = obj;
      return arg0;
    }, {});
    let obj = {};
    let merged = Object.assign(obj);
    const merged1 = Object.assign(reduced);
  },
  RECEIVE_CHANNEL_SUMMARIES_BULK(requestArgs) {
    let importDefault;
    let require;
    ({ receivedAt: require, error: importDefault } = requestArgs);
    const channelIds = requestArgs.requestArgs.channelIds;
    let obj = importDefault(22);
    const dependencyMap = obj.toPairs(requestArgs.summaries).reduce((arg0, arg1) => {
      const tmp = outer1_3(arg1, 2);
      const first = tmp[0];
      const arr = tmp[1];
      const obj = outer1_1(22);
      const chainResult = outer1_1(22).chain(tmp[1].map((summary) => outer2_0(9523).createSummaryFromServer(summary, first)));
      const sortByResult = outer1_1(22).chain(tmp[1].map((summary) => outer2_0(9523).createSummaryFromServer(summary, first))).sortBy((startId) => outer2_1(21).extractTimestamp(startId.startId));
      const reversed = outer1_1(22).chain(tmp[1].map((summary) => outer2_0(9523).createSummaryFromServer(summary, first))).sortBy((startId) => outer2_1(21).extractTimestamp(startId.startId)).takeRight(75).reverse();
      const takeRightResult = outer1_1(22).chain(tmp[1].map((summary) => outer2_0(9523).createSummaryFromServer(summary, first))).sortBy((startId) => outer2_1(21).extractTimestamp(startId.startId)).takeRight(75);
      arg0[first] = reversed.filter((arg0) => Object.keys(arg0).length > 0).value();
      return arg0;
    }, {});
    const reduced = channelIds.reduce((summariesByChannel) => {
      obj = obj[arg1];
      if (null == obj) {
        obj = {};
      }
      if (null != dependencyMap[arg1]) {
        summariesByChannel.summariesByChannel[arg1] = tmp;
      }
      obj = {};
      const merged = Object.assign(obj);
      obj["fetching"] = false;
      obj["error"] = closure_1;
      obj["lastReceivedAt"] = closure_0;
      summariesByChannel.summaryFetchStatusByChannel[arg1] = obj;
      return summariesByChannel;
    }, { summariesByChannel: {}, summaryFetchStatusByChannel: {} });
    obj = {};
    let merged = Object.assign(obj);
    const merged1 = Object.assign(reduced.summariesByChannel);
    obj = {};
    const merged2 = Object.assign(obj);
    const merged3 = Object.assign(reduced.summaryFetchStatusByChannel);
  },
  CONVERSATION_SUMMARY_UPDATE(channel_id) {
    channel_id = channel_id.channel_id;
    const timestamp = Date.now();
    let obj = importDefault(22);
    const chainResult = obj.chain(channel_id.summaries);
    const found = obj.chain(channel_id.summaries).sortBy((start_id) => outer1_1(outer1_2[17]).extractTimestamp(start_id.start_id)).filter((arg0) => Object.keys(arg0).length > 0);
    const mapped = found.map((summary) => channel_id(outer1_2[22]).createSummaryFromServer(summary, channel_id));
    const sortByResult = obj.chain(channel_id.summaries).sortBy((start_id) => outer1_1(outer1_2[17]).extractTimestamp(start_id.start_id));
    let items = dependencyMap2[channel_id];
    const iter = mapped.reverse();
    if (null == items) {
      items = [];
    }
    const valueResult = mapped.reverse().value();
    const obj4 = importDefault(22);
    const combined = importDefault(22).chain(valueResult).concat(items);
    const chainResult1 = importDefault(22).chain(valueResult);
    const sortByResult1 = combined.sortBy((startId) => outer1_1(outer1_2[17]).extractTimestamp(startId.startId));
    const takeRightResult = combined.sortBy((startId) => outer1_1(outer1_2[17]).extractTimestamp(startId.startId)).takeRight(75);
    const uniqByResult = combined.sortBy((startId) => outer1_1(outer1_2[17]).extractTimestamp(startId.startId)).takeRight(75).uniqBy("id");
    dependencyMap2[channel_id] = combined.sortBy((startId) => outer1_1(outer1_2[17]).extractTimestamp(startId.startId)).takeRight(75).uniqBy("id").reverse().value();
    obj = {};
    const merged = Object.assign(dependencyMap3[channel_id]);
    obj["error"] = undefined;
    let fetching;
    if (null != dependencyMap3[channel_id]) {
      fetching = tmp5.fetching;
    }
    obj["fetching"] = null != fetching && fetching;
    obj["lastReceivedAt"] = timestamp;
    dependencyMap3[channel_id] = obj;
  },
  CLEAR_CONVERSATION_SUMMARIES() {
    let closure_23 = {};
    let closure_24 = {};
  },
  DELETE_SUMMARY(summary) {
    const channelId = summary.summary.channelId;
    let items = dependencyMap2[channelId];
    if (null == items) {
      items = [];
    }
    const index = items.indexOf(summary.summary);
    if (-1 !== index) {
      dependencyMap2[channelId].splice(index, 1);
      const arr2 = dependencyMap2[channelId];
    }
  }
};
tmp3 = new tmp3(require("dispatcher"), obj);
let result = require("_classCallCheck").fileFinishedImporting("modules/summaries/SummaryStore.tsx");

export default tmp3;
