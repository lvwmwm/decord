// Module ID: 9472
// Function ID: 73788
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 9472 (_isNativeReflectConstruct)
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
    let tmp = type.type === callback(closure_2[16]).AutocompleterResultTypes.TEXT_CHANNEL;
    if (tmp) {
      tmp = 0 === type.record.type;
    }
    return tmp;
  });
  let closure_29 = found.map((record) => record.record.id);
}
let closure_3 = importDefault(dependencyMap[0]);
importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = importDefault(dependencyMap[8]);
let closure_11 = importDefault(dependencyMap[9]);
let closure_12 = importDefault(dependencyMap[10]);
let closure_13 = importDefault(dependencyMap[11]);
let closure_14 = importDefault(dependencyMap[12]);
let closure_15 = importDefault(dependencyMap[13]);
let closure_16 = importDefault(dependencyMap[14]);
const SUMMARY_POLL_INTERVAL = arg1(dependencyMap[15]).SUMMARY_POLL_INTERVAL;
let obj = { FETCHING: "fetching", OK: "ok", ERROR: "error" };
let closure_23 = {};
let closure_24 = {};
let closure_25 = {};
let closure_26 = [];
let closure_27 = {};
obj = { "Null": "Normal", "Null": true, "Null": "AbortSignal" };
obj.status = obj.OK;
let closure_29 = [];
let closure_30 = [];
let tmp3 = (PersistedStore) => {
  class SummaryStore {
    constructor() {
      self = this;
      tmp = closure_4(this, SummaryStore);
      obj = closure_7(SummaryStore);
      tmp2 = closure_6;
      if (closure_31()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = SummaryStore;
  callback2(SummaryStore, PersistedStore);
  let obj = {
    key: "getState",
    value() {
      return { shouldShowTopicsBar: closure_18 };
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , ];
  obj = {
    key: "initialize",
    value(shouldShowTopicsBar) {
      const self = this;
      shouldShowTopicsBar = undefined;
      if (null != shouldShowTopicsBar) {
        shouldShowTopicsBar = shouldShowTopicsBar.shouldShowTopicsBar;
      }
      let closure_18 = null == shouldShowTopicsBar || shouldShowTopicsBar;
      self.waitFor(closure_11, closure_9, closure_12, closure_10, closure_13, closure_14, closure_15, closure_16);
      const items = [closure_10];
      self.syncWith(items, closure_32);
    }
  };
  items[1] = obj;
  obj = {
    key: "allSummaries",
    value() {
      return closure_23;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "topSummaries",
    value: function topSummaries() {
      const values = Object.values(closure_23);
      const found = values.flat().filter((people) => {
        let tmp = people.people.length > 1;
        if (tmp) {
          const _Date = Date;
          const obj = callback(closure_2[17]);
          const date = new Date();
          const time = date.getTime();
          tmp = callback(closure_2[17]).extractTimestamp(people.endId) > time - 5 * callback(closure_2[18]).Millis.HOUR;
          const extractTimestampResult = callback(closure_2[17]).extractTimestamp(people.endId);
        }
        return tmp;
      });
      return found.sort((endId, endId2) => {
        const obj = callback(closure_2[17]);
        const extractTimestampResult = callback(closure_2[17]).extractTimestamp(endId2.endId);
        return extractTimestampResult - callback(closure_2[17]).extractTimestamp(endId.endId);
      });
    }
  };
  items[4] = {
    key: "summaries",
    value(arg0) {
      let tmp = closure_23[arg0];
      if (null == tmp) {
        tmp = closure_30;
      }
      return tmp;
    }
  };
  items[5] = {
    key: "shouldShowTopicsBar",
    value() {
      return closure_18;
    }
  };
  items[6] = {
    key: "findSummary",
    value(arg0, arg1) {
      const SummaryStore = arg1;
      const found = this.summaries(arg0).find((id) => id.id === arg1);
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
      if (null != closure_21) {
        findSummaryResult = null;
        if (closure_21.channelId === arg0) {
          findSummaryResult = null;
          if (null != closure_21.summaryId) {
            let summaryId;
            if (null != closure_21) {
              summaryId = closure_21.summaryId;
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
        tmp = closure_25[arg0.id];
      }
      return tmp;
    }
  };
  items[9] = {
    key: "isFetching",
    value(arg0, arg1) {
      if (null != arg1) {
        let summaryId;
        if (null != closure_24[arg0]) {
          summaryId = tmp6.summaryId;
        }
        let tmp4 = summaryId === arg1;
      } else {
        let fetching;
        if (null != closure_24[arg0]) {
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
      return closure_24[arg0];
    }
  };
  items[11] = {
    key: "shouldFetch",
    value(channelId) {
      const channel = channel.getChannel(channelId);
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
            tmp12 = diff > closure_17;
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
      const obj = SummaryStore(closure_2[19]);
    }
  };
  items[12] = {
    key: "channelAffinities",
    value() {
      return closure_26;
    }
  };
  items[13] = {
    key: "channelAffinitiesById",
    value() {
      return closure_27;
    }
  };
  items[14] = {
    key: "channelAffinitiesStatus",
    value() {
      return closure_28;
    }
  };
  items[15] = {
    key: "shouldFetchChannelAffinities",
    value() {
      let tmp = closure_28.status !== constants.FETCHING;
      if (tmp) {
        let tmp4 = null != closure_28.lastResponse;
        if (tmp4) {
          const _Date = Date;
          const diff = Date.now() - closure_28.lastResponse;
          tmp4 = diff < 30 * callback(closure_2[18]).Millis.SECOND;
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
        combined = items.concat(closure_29);
      }
      let combined1 = combined;
      if (withChannelAffinities) {
        combined1 = combined.concat(closure_26.map((channel_id) => channel_id.channel_id));
      }
      let found = combined1;
      if (withUnreads) {
        found = combined1.filter((channelId) => {
          const channel = store.getChannel(channelId);
          let hasUnreadResult = null != channel;
          if (hasUnreadResult) {
            hasUnreadResult = !channelMuted.isChannelMuted(channel.guild_id, channelId);
          }
          if (hasUnreadResult) {
            hasUnreadResult = closure_13.hasUnread(channelId);
          }
          return hasUnreadResult;
        });
      }
      const found1 = found.filter((channelId) => {
        const channel = store.getChannel(channelId);
        return callback(closure_2[19]).canSeeChannelSummaries(channel, false, false);
      });
      return found1.slice(0, num);
    }
  };
  items[17] = {
    key: "visibleSummaryIndex",
    value() {
      return closure_20;
    }
  };
  return callback(SummaryStore, items);
}(importDefault(dependencyMap[20]).PersistedStore);
tmp3.persistKey = "SummaryStore";
obj = {
  CONNECTION_OPEN() {
    return false;
  },
  CHANNEL_SELECT(channelId) {
    channelId = undefined;
    if (null != closure_21) {
      channelId = closure_21.channelId;
    }
    if (channelId !== channelId.channelId) {
      closure_21 = null;
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
    let arg1;
    ({ error, receivedAt } = arg0);
    if (null != summary) {
      const _Object = Object;
      if (Object.keys(summary).length > 0) {
        const summaryFromServer = arg1(dependencyMap[22]).createSummaryFromServer(summary, channelId);
        arg1 = summaryFromServer;
        let items = closure_23[channelId];
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
        closure_23[channelId] = items1;
        const obj3 = arg1(dependencyMap[22]);
      }
    }
    let obj = {};
    let tmp7 = closure_24[channelId];
    if (null == tmp7) {
      obj = { fetching: false };
      tmp7 = obj;
    }
    const merged = Object.assign(tmp7);
    obj["summaryId"] = undefined;
    obj["summaryIdLastReceivedAt"] = receivedAt;
    obj["summaryIdError"] = error;
    closure_24[channelId] = obj;
  },
  REQUEST_CHANNEL_SUMMARY(channelId) {
    let requestedAt;
    let summaryId;
    channelId = channelId.channelId;
    let obj = {};
    let tmp2 = closure_24[channelId];
    ({ summaryId, requestedAt } = channelId);
    if (null == tmp2) {
      obj = { fetching: false };
      tmp2 = obj;
    }
    const merged = Object.assign(tmp2);
    obj["summaryId"] = summaryId;
    obj["summaryIdLastRequestedAt"] = requestedAt;
    closure_24[channelId] = obj;
  },
  RECEIVE_CHANNEL_SUMMARIES(arg0) {
    let channelId;
    let error;
    let receivedAt;
    let summaries;
    ({ summaries, channelId } = arg0);
    const arg1 = channelId;
    ({ error, receivedAt } = arg0);
    const found = summaries.filter((arg0) => Object.keys(arg0).length > 0);
    const mapped = found.map((summary) => channelId(closure_2[22]).createSummaryFromServer(summary, channelId));
    if (null != closure_21) {
      if (closure_21.channelId === channelId) {
        if (!mapped.some((id) => {
          let summaryId;
          if (null != closure_21) {
            summaryId = closure_21.summaryId;
          }
          return id.id === summaryId;
        })) {
          let items = closure_23[channelId];
          if (null == items) {
            items = [];
          }
          const found1 = items.find((id) => {
            let summaryId;
            if (null != closure_21) {
              summaryId = closure_21.summaryId;
            }
            return id.id === summaryId;
          });
          if (null != found1) {
            mapped.push(found1);
          }
        }
      }
    }
    let obj = arg1(dependencyMap[23]);
    closure_23[channelId] = obj.sortBy(mapped, (startId) => callback(closure_2[17]).extractTimestamp(startId.startId)).reverse();
    obj = {};
    const merged = Object.assign(closure_24[channelId]);
    obj["fetching"] = false;
    obj["error"] = undefined;
    obj["lastReceivedAt"] = receivedAt;
    if (null != error) {
      obj.error = error;
    }
    closure_24[channelId] = obj;
  },
  REQUEST_CHANNEL_SUMMARIES(requestedAt) {
    let obj = {};
    obj = closure_24[requestedAt.channelId];
    if (null == obj) {
      obj = {};
    }
    const merged = Object.assign(obj);
    obj["fetching"] = true;
    obj["lastRequestedAt"] = requestedAt.requestedAt;
    closure_24[requestedAt.channelId] = obj;
  },
  SET_HIGHLIGHTED_SUMMARY(channelId) {
    let summaryId;
    if (null == tmp3) {
      if (null == channelId.channelId) {
        return false;
      }
    }
    channelId = undefined;
    if (null != tmp3) {
      channelId = tmp3.channelId;
    }
    if (channelId.channelId === channelId) {
      summaryId = undefined;
      if (null != tmp3) {
        summaryId = tmp3.summaryId;
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
    if (null != tmp3) {
      if (tmp3.channelId === channelId.channelId) {
        if (null != tmp3.summaryId) {
          let findIndexResult;
          if (null != closure_23[closure_19.channelId]) {
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
    const arg1 = arg0;
    const channelId = channelId.getChannelId();
    if (null != channelId) {
      if (null != closure_19) {
        if (closure_19.channelId === channelId) {
          if (null != closure_19.summaryId) {
            let findIndexResult;
            if (null != closure_23[closure_19.channelId]) {
              findIndexResult = obj2.findIndex((id) => {
                let summaryId;
                if (null != summaryId) {
                  summaryId = summaryId.summaryId;
                }
                return id.id === summaryId;
              });
            }
            let findIndexResult1 = findIndexResult;
          }
        }
      }
      findIndexResult1 = undefined;
      if (null != closure_23[channelId]) {
        findIndexResult1 = obj.findIndex((endId) => {
          let bottomVisibleMessage;
          let topVisibleMessage;
          ({ topVisibleMessage, bottomVisibleMessage } = endId);
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
        const obj = { channelId };
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
      delete r3[r1];
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
      let closure_26 = [];
      let closure_27 = {};
      let obj = {};
      const merged = Object.assign(obj);
      obj["status"] = obj.ERROR;
      const _Date2 = Date;
      obj["lastResponse"] = Date.now();
    } else {
      let items = affinities;
      if (null == affinities) {
        items = [];
      }
      closure_26 = items;
      let reduced;
      if (null != affinities) {
        reduced = affinities.reduce((arg0, channel_id) => {
          arg0[channel_id.channel_id] = channel_id.affinity;
          return arg0;
        }, {});
      }
      if (null == reduced) {
        reduced = {};
      }
      closure_27 = reduced;
      obj = {};
      const merged1 = Object.assign(obj);
      obj["status"] = obj.OK;
      const _Date = Date;
      obj["lastResponse"] = Date.now();
    }
  },
  REQUEST_CHANNEL_SUMMARIES_BULK(arg0) {
    let channelIds;
    ({ channelIds, requestedAt: closure_0 } = arg0);
    const reduced = channelIds.reduce((arg0, arg1) => {
      let obj = obj[arg1];
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
    const merged = Object.assign(closure_24);
    const merged1 = Object.assign(reduced);
    closure_24 = {};
  },
  RECEIVE_CHANNEL_SUMMARIES_BULK(requestArgs) {
    ({ receivedAt: closure_0, error: closure_1 } = requestArgs);
    const channelIds = requestArgs.requestArgs.channelIds;
    let obj = importDefault(closure_2[23]);
    closure_2 = obj.toPairs(requestArgs.summaries).reduce((arg0, arg1) => {
      const tmp = callback2(arg1, 2);
      const first = tmp[0];
      const arr = tmp[1];
      const obj = callback(closure_2[23]);
      const chainResult = callback(closure_2[23]).chain(tmp[1].map((summary) => first(closure_2[22]).createSummaryFromServer(summary, first)));
      const sortByResult = callback(closure_2[23]).chain(tmp[1].map((summary) => first(closure_2[22]).createSummaryFromServer(summary, first))).sortBy((startId) => callback(closure_2[17]).extractTimestamp(startId.startId));
      const reversed = callback(closure_2[23]).chain(tmp[1].map((summary) => first(closure_2[22]).createSummaryFromServer(summary, first))).sortBy((startId) => callback(closure_2[17]).extractTimestamp(startId.startId)).takeRight(75).reverse();
      const takeRightResult = callback(closure_2[23]).chain(tmp[1].map((summary) => first(closure_2[22]).createSummaryFromServer(summary, first))).sortBy((startId) => callback(closure_2[17]).extractTimestamp(startId.startId)).takeRight(75);
      arg0[first] = reversed.filter((arg0) => Object.keys(arg0).length > 0).value();
      return arg0;
    }, {});
    const reduced = channelIds.reduce((summariesByChannel) => {
      let obj = obj[arg1];
      if (null == obj) {
        obj = {};
      }
      if (null != closure_2[arg1]) {
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
    const merged = Object.assign(closure_23);
    const merged1 = Object.assign(reduced.summariesByChannel);
    closure_23 = obj;
    obj = {};
    const merged2 = Object.assign(closure_24);
    const merged3 = Object.assign(reduced.summaryFetchStatusByChannel);
    closure_24 = obj;
  },
  CONVERSATION_SUMMARY_UPDATE(channel_id) {
    channel_id = channel_id.channel_id;
    const arg1 = channel_id;
    const timestamp = Date.now();
    let obj = importDefault(dependencyMap[23]);
    const chainResult = obj.chain(channel_id.summaries);
    const found = obj.chain(channel_id.summaries).sortBy((start_id) => callback(closure_2[17]).extractTimestamp(start_id.start_id)).filter((arg0) => Object.keys(arg0).length > 0);
    const mapped = found.map((summary) => channel_id(closure_2[22]).createSummaryFromServer(summary, channel_id));
    const sortByResult = obj.chain(channel_id.summaries).sortBy((start_id) => callback(closure_2[17]).extractTimestamp(start_id.start_id));
    let items = closure_23[channel_id];
    const iter = mapped.reverse();
    if (null == items) {
      items = [];
    }
    const valueResult = mapped.reverse().value();
    const obj4 = importDefault(dependencyMap[23]);
    const combined = importDefault(dependencyMap[23]).chain(valueResult).concat(items);
    const chainResult1 = importDefault(dependencyMap[23]).chain(valueResult);
    const sortByResult1 = combined.sortBy((startId) => callback(closure_2[17]).extractTimestamp(startId.startId));
    const takeRightResult = combined.sortBy((startId) => callback(closure_2[17]).extractTimestamp(startId.startId)).takeRight(75);
    const uniqByResult = combined.sortBy((startId) => callback(closure_2[17]).extractTimestamp(startId.startId)).takeRight(75).uniqBy("id");
    closure_23[channel_id] = combined.sortBy((startId) => callback(closure_2[17]).extractTimestamp(startId.startId)).takeRight(75).uniqBy("id").reverse().value();
    obj = {};
    const merged = Object.assign(closure_24[channel_id]);
    obj["error"] = undefined;
    let fetching;
    if (null != closure_24[channel_id]) {
      fetching = tmp5.fetching;
    }
    obj["fetching"] = null != fetching && fetching;
    obj["lastReceivedAt"] = timestamp;
    closure_24[channel_id] = obj;
  },
  CLEAR_CONVERSATION_SUMMARIES() {
    let closure_23 = {};
    let closure_24 = {};
  },
  DELETE_SUMMARY(summary) {
    const channelId = summary.summary.channelId;
    let items = closure_23[channelId];
    if (null == items) {
      items = [];
    }
    const index = items.indexOf(summary.summary);
    if (-1 !== index) {
      closure_23[channelId].splice(index, 1);
      const arr2 = closure_23[channelId];
    }
  }
};
tmp3 = new tmp3(importDefault(dependencyMap[21]), obj);
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/summaries/SummaryStore.tsx");

export default tmp3;
