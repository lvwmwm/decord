// Module ID: 12971
// Function ID: 12972
// Name: BountyActionCreators
// Dependencies: [5, 7387, 5282, 7389, 7390, 5972, 1085, 3, 584, 5979, 9182, 7388, 5636, 7183, 7409, 1295, 5975, 12972, 7386, 2]
// Exports: claimBountyReward, dismissAdContent, fetchBountyPreview, fetchQuestBarCreativePreview, fetchQuestHomeBounties, resetCreativePreviewDeliveryState, resetPreviewDeliveryStateLookback, setBountyVideoProgress

// Module 12971 (BountyActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1295 */;
import QuestConstants from "QuestConstants" /* 5972 */;
import QuestTypes from "QuestTypes" /* 5975 */;
import SessionHeartbeatScheduler from "SessionHeartbeatScheduler" /* 7183 */;
import QuestDataUtils from "QuestDataUtils" /* 7386 */;
import SessionAdGenerator from "SessionAdGenerator" /* 7409 */;
import BountiesDesktopQuestBarExperiment2 from "BountiesDesktopQuestBarExperiment" /* 12972 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AdDeliveryStore from "AdDeliveryStore" /* 7387 */;
import NetworkStore from "NetworkStore" /* 5282 */;
import BountyStore from "BountyStore" /* 7389 */;
import QuestStore from "QuestStore" /* 7390 */;
import size from "module_2" /* 2 */;

let _null, bounties, closure_2, error, map, uuid2;

function fetchBountiesAndDispatch() {
  return obj(...arguments);
}
let obj = function _fetchBountiesAndDispatch() {
  obj = _asyncToGenerator(async (placement, fetchedAt) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      let request_id;
      let tmp15;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              decisions = undefined;
              map = undefined;
              bounties = undefined;
              const obj8 = DispatcherDefault;
              obj8.dispatch({ type: "BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_BEGIN" });
              c5 = 1;
              const _Date = Date;
              fetchedAt = Date.now();
              c6 = 2;
              c7 = 1;
              const obj5 = { value: fetchedAt(), done: false };
              return obj5;
            }
          } else {
            let obj2;
            if (1 === tmp4) {
              c5 = 0;
              let closure_5 = bounties;
              obj2 = closure_131_1(closure_131_2[8]);
              const dispatch = obj2.dispatch;
              const self = this;
              const self2 = this;
              const obj6 = { type: "BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_FAILURE", placement, error: tmp15 };
              tmp15 = new closure_131_1(closure_131_2[12])(closure_5);
              dispatch(obj6);
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              decisions = value;
              const _Map = Map;
              const self3 = this;
              const self4 = this;
              map = new Map();
              decisions = decisions.decisions;
              bounties = decisions.flatMap((creative) => {
                let obj2;
                if (null != creative.creative) {
                  if (creative.creative.creative_type === placement(obj2[9]).AdCreativeType.BOUNTY) {
                    const tmpResult = placement(obj2[10]);
                    const bountyFromServerResult = tmpResult.bountyFromServer(creative.creative.creative_content);
                    obj = { fetchedAt, requestId: request_id.request_id, creative: obj2 };
                    const tmpResult2 = placement(obj2[11]);
                    obj2 = { type: placement(obj2[9]).AdCreativeType.BOUNTY, bounty: bountyFromServerResult };
                    const questAdDecisionFromAdDecision = tmpResult2.questAdDecisionFromAdDecision;
                    const result = closure_1_3.set(bountyFromServerResult.id, questAdDecisionFromAdDecision(creative, obj));
                    const items = [bountyFromServerResult];
                    return items;
                  }
                }
                return [];
              });
              obj2 = closure_131_1(closure_131_2[8]);
              const obj7 = { type: "BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_SUCCESS", bounties, placement, adDecisionsByAdCreativeId: map, fetchedAt };
              obj2.dispatch(obj7);
              c5 = 0;
            }
            c7 = 3;
            return { value: "IconComponent", done: "+51" };
          }
        } catch (tmp18) {
          bounties = tmp18;
          if (0 === c5) {
            c7 = 3;
            throw tmp18;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchQuestHomeBounties() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0;
    if (c1 === 2) {
      c1 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else if (!BountyStore.isFetchingQuestHomeBounties) {
            c2 = 1;
            c1 = 1;
            const obj4 = {
              value: fetchBountiesAndDispatch(tmp4, _asyncToGenerator(async () => {
                        let c3;
                        let obj7;
                        let obj8;
                        let tmp;
                        const obj6 = tmp(c2[13]);
                        tmp = await obj6.getSession();
                        const obj10 = tmp(c2[14]);
                        let uuid = obj10.getOrRefreshAdSession();
                        const HTTP = tmp(c2[15]).HTTP;
                        const request = { url: constants.QUESTS_GET_DECISIONS, query: obj7, rejectWithError: false, context: obj8 };
                        obj7 = { placement: closure_129_0, client_ad_session_id: uuid.uuid, client_heartbeat_session_id: uuid, num_decisions_requested: 5 };
                        const get = HTTP.get;
                        if (tmp != null) {
                          uuid = tmp.uuid;
                        }
                        obj8 = { connection_type: type.getType() };
                        await get(request);
                        return arg1.body;
                      })),
              done: false
            };
            return obj4;
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        }
        c1 = 3;
        return { value: "IconComponent", done: "+51" };
      } catch (tmp8) {
        c1 = 3;
        throw tmp8;
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchBountyPreview() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    let closure_1 = value;
    if (c2 === 2) {
      c2 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else if (!BountyStore.isFetchingQuestHomeBounties) {
            c3 = 1;
            c2 = 1;
            let obj4 = {
              value: fetchBountiesAndDispatch(tmp5, _asyncToGenerator(async function() {
                        let c1;
                        const _URLSearchParams = URLSearchParams;
                        closure_0 = 0;
                        let items = [];
                        closure_0 = HermesBuiltin.arraySpread(items, closure_0.map((item) => {
                          const items = ["ad_creative_ids", item];
                          return items;
                        }), closure_0);
                        const _String = String;
                        const items1 = ["placement", String(closure_1)];
                        items[closure_0] = items1;
                        closure_0 = closure_0 + 1;
                        const self = this;
                        const self2 = this;
                        const str2 = new URLSearchParams(items);
                        const HTTP = closure_0(c2[15]).HTTP;
                        const obj4 = { url: "" + constants.QUESTS_CREATIVE_PREVIEW + "?" + str2.toString(), rejectWithError: false };
                        const get = HTTP.get;
                        const _HermesInternal = HermesInternal;
                        await get(obj4);
                        return arg1.body;
                      })),
              done: false
            };
            return obj4;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        }
        c2 = 3;
        return { value: "IconComponent", done: "+51" };
      } catch (tmp9) {
        c2 = 3;
        throw tmp9;
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchQuestBarCreativePreview() {
  let constants2;
  let fetchingAdToDeliverByPlacement;
  obj = _asyncToGenerator(async (adCreativeId, placement) => {
    let closure_5;
    let closure_6;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async function(arg0, value) {
      let ad_context;
      let ad_identifiers1;
      let ad_set_id;
      let adset_id;
      let campaign_id;
      let creative_id;
      let creative_type;
      let creative_type1;
      let metadata_sealed;
      let obj13;
      let prop;
      let prop1;
      let status;
      let tmp53;
      let tmp72;
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        let tmp87;
        try {
          let body;
          let tmp;
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              _null = undefined;
              body = undefined;
              tmp = undefined;
              tmp87 = undefined;
              value = undefined;
              const _Date = Date;
              fetchedAt = Date.now();
              dispatch = fetchingAdToDeliverByPlacement;
              const tmp113 = adCreativeId;
              if (fetchingAdToDeliverByPlacement.isFetchingAdToDeliverByPlacement(placement)) {
                c9 = 3;
                return { value: null, done: true };
              } else {
                dispatch = require;
                if (placement === QuestTypes.AdPlacement.DESKTOP_ACCOUNT_PANEL_AREA) {
                  const BountiesDesktopQuestBarExperiment = BountiesDesktopQuestBarExperiment2.BountiesDesktopQuestBarExperiment;
                  const obj4 = { location: constants.BOUNTY_PREVIEW_LINK };
                  if (!BountiesDesktopQuestBarExperiment.getConfig(obj4).enabled) {
                    c9 = 3;
                    return { value: null, done: true };
                  }
                }
                const obj5 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement };
                const obj10 = DispatcherDefault;
                obj10.dispatch(obj5);
                c7 = 1;
                const _URLSearchParams = URLSearchParams;
                const items = ["ad_creative_ids", tmp113];
                const items1 = [items, ];
                const _String = String;
                const items2 = ["placement", String(placement)];
                items1[1] = items2;
                const self5 = this;
                const self6 = this;
                const str = new URLSearchParams(items1);
                dispatch = HTTPUtils.HTTP;
                const get = dispatch.get;
                const _HermesInternal = HermesInternal;
                c8 = 2;
                c9 = 1;
                const obj6 = { url: "" + constants2.QUESTS_CREATIVE_PREVIEW + "?" + str.toString(), rejectWithError: false };
                const obj7 = { value: get(obj6), done: false };
                return obj7;
              }
            }
          } else if (1 === tmp4) {
            c7 = 0;
            error = tmp87;
            dispatch = closure_133_10;
            const obj8 = { error, adCreativeId, status };
            status = undefined;
            const error2 = closure_133_10.error;
            if (error != null) {
              status = error.status;
            }
            error2("Failed to fetch dock creative preview for adCreativeId", obj8);
            dispatch = closure_133_1(closure_133_2[8]);
            const dispatch3 = dispatch.dispatch;
            const self3 = this;
            const self4 = this;
            const obj9 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", placement, error: tmp72 };
            tmp72 = new closure_133_1(closure_133_2[12])(error);
            dispatch3(obj9);
            c9 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            return { value, done: true };
          } else {
            _null = value;
            body = _null.body;
            const decisions = body.decisions;
            dispatch = decisions == null;
            let first;
            if (!dispatch) {
              first = decisions[0];
            }
            let c2 = first;
            if (first == null) {
              c2 = null;
            }
            tmp = c2;
            dispatch = tmp == null;
            let creative;
            if (!dispatch) {
              creative = tmp.creative;
            }
            let c3 = creative;
            if (creative == null) {
              c3 = null;
            }
            tmp87 = c3;
            if (null != tmp87) {
              dispatch = closure_133_0;
              if (tmp87.creative_type === closure_133_0(closure_133_2[9]).AdCreativeType.BOUNTY) {
                const obj16 = closure_133_0(closure_133_2[10]);
                value = obj16.bountyFromServer(tmp87.creative_content);
                dispatch = closure_133_1(closure_133_2[8]).dispatch;
                const obj12 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS", creative: obj13, adDecisionData: obj, adContext: ad_context, metadataSealed: metadata_sealed, trafficMetadataSealed: prop, provenanceMetadataSealed: prop1, responseTtlSeconds: 300, placement, fetchedAt };
                obj13 = { type: closure_133_0(closure_133_2[9]).AdCreativeType.BOUNTY, bounty: value };
                closure_133_1(closure_133_2[8]);
                let ad_id;
                if (tmp != null) {
                  const ad_identifiers = tmp.ad_identifiers;
                  if (ad_identifiers != null) {
                    ad_id = ad_identifiers.ad_id;
                  }
                }
                obj = { ad_id, adset_id, ad_set_id, campaign_id, creative_id, creative_type, decision_id: body.request_id, is_targeted: null != ad_identifiers1 };
                adset_id = undefined;
                if (tmp != null) {
                  const ad_identifiers2 = tmp.ad_identifiers;
                  if (ad_identifiers2 != null) {
                    adset_id = ad_identifiers2.adset_id;
                  }
                }
                ad_set_id = undefined;
                if (tmp != null) {
                  const ad_identifiers3 = tmp.ad_identifiers;
                  if (ad_identifiers3 != null) {
                    ad_set_id = ad_identifiers3.ad_set_id;
                  }
                }
                campaign_id = undefined;
                if (tmp != null) {
                  const ad_identifiers4 = tmp.ad_identifiers;
                  if (ad_identifiers4 != null) {
                    campaign_id = ad_identifiers4.campaign_id;
                  }
                }
                creative_id = undefined;
                if (tmp != null) {
                  const ad_identifiers5 = tmp.ad_identifiers;
                  if (ad_identifiers5 != null) {
                    creative_id = ad_identifiers5.creative_id;
                  }
                }
                creative_type = undefined;
                if (tmp != null) {
                  const ad_identifiers6 = tmp.ad_identifiers;
                  if (ad_identifiers6 != null) {
                    creative_type = ad_identifiers6.creative_type;
                  }
                }
                ad_identifiers1 = undefined;
                if (tmp != null) {
                  ad_identifiers1 = tmp.ad_identifiers;
                }
                ad_context = undefined;
                if (tmp != null) {
                  ad_context = tmp.ad_context;
                }
                metadata_sealed = undefined;
                if (tmp != null) {
                  metadata_sealed = tmp.metadata_sealed;
                }
                prop = undefined;
                if (tmp != null) {
                  prop = tmp.traffic_metadata_sealed;
                }
                prop1 = undefined;
                if (tmp != null) {
                  prop1 = tmp.provenance_metadata_sealed;
                }
                dispatch(obj12);
                c7 = 0;
                c9 = 3;
                return { value, done: true };
              }
            }
            dispatch = closure_133_10;
            const obj15 = { adCreativeId, creativeType: creative_type1 };
            creative_type1 = undefined;
            error = closure_133_10.error;
            if (tmp87 != null) {
              creative_type1 = tmp87.creative_type;
            }
            error("Creative preview returned no renderable bounty", obj15);
            dispatch = closure_133_1(closure_133_2[8]);
            const dispatch2 = dispatch.dispatch;
            const self = this;
            const self2 = this;
            const obj17 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", placement, error: tmp53 };
            const obj18 = { status: _null.status, body: _null.body };
            tmp53 = new closure_133_1(closure_133_2[12])(obj18);
            dispatch2(obj17);
            c7 = 0;
            c9 = 3;
            return { value: null, done: true };
          }
        } catch (tmp87) {
          if (0 === c7) {
            c9 = 3;
            throw tmp87;
          } else {
            c8 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _claimBountyReward() {
  let claimingBountyReward;
  obj = _asyncToGenerator(async (bountyId, arg1) => {
    let closure_4;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      let obj10;
      let obj11;
      let tmp15;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        let adMetadataSealed;
        try {
          let adTrafficMetadataSealed;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              uuid = undefined;
              uuid2 = undefined;
              adMetadataSealed = undefined;
              adTrafficMetadataSealed = undefined;
              error = undefined;
              const tmp64 = bountyId;
              if (!claimingBountyReward.isClaimingBountyReward(bountyId)) {
                const obj4 = { type: "BOUNTIES_CLAIM_REWARD_BEGIN", bountyId: tmp64 };
                const obj9 = DispatcherDefault;
                obj9.dispatch(obj4);
                c5 = 1;
                c6 = 2;
                c7 = 1;
                const obj5 = { value: obj11.getSession(), done: false };
                obj11 = SessionHeartbeatScheduler;
                return obj5;
              }
            }
          } else if (1 === c6) {
            c5 = 0;
            let closure_7 = adMetadataSealed;
            const self = this;
            const self2 = this;
            error = new closure_131_1(closure_131_2[12])(closure_7);
            const obj6 = { type: "BOUNTIES_CLAIM_REWARD_FAILURE", bountyId, error };
            const tmp27 = new closure_131_1(closure_131_2[12])(closure_7);
            const obj7 = closure_131_1(closure_131_2[8]);
            obj7.dispatch(obj6);
            throw error;
          } else if (2 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              return { value, done: true };
            } else {
              uuid = value;
              const obj15 = closure_131_0(closure_131_2[14]);
              uuid2 = obj15.getOrRefreshAdSession();
              const obj16 = closure_131_0(closure_131_2[18]);
              adMetadataSealed = obj16.getAdMetadataSealed(closure_1, bountyId);
              const obj17 = closure_131_0(closure_131_2[18]);
              adTrafficMetadataSealed = obj17.getAdTrafficMetadataSealed(closure_1, undefined, bountyId);
              const HTTP = closure_131_0(closure_131_2[15]).HTTP;
              const request = { url: closure_131_9.QUESTS_CREATIVES_CLAIM_REWARD(bountyId), body: obj10, rejectWithError: false };
              const post = HTTP.post;
              let tmp12 = null;
              if (null != adMetadataSealed) {
                tmp12 = adMetadataSealed;
              }
              obj10 = { decision_metadata_sealed: tmp12, traffic_metadata_sealed: tmp15, client_ad_session_id: uuid2.uuid, client_heartbeat_session_id: uuid };
              tmp15 = null;
              if (null != adTrafficMetadataSealed) {
                tmp15 = adTrafficMetadataSealed;
              }
              uuid = undefined;
              if (uuid != null) {
                uuid = uuid.uuid;
              }
              c6 = 3;
              c7 = 1;
              const obj12 = { value: post(request), done: false };
              return obj12;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            const obj14 = { type: "BOUNTIES_CLAIM_REWARD_SUCCESS", bountyId };
            obj = closure_131_1(closure_131_2[8]);
            obj.dispatch(obj14);
            c5 = 0;
          }
          c7 = 3;
          return { value: "IconComponent", done: "+51" };
        } catch (tmp40) {
          adMetadataSealed = tmp40;
          if (0 === c5) {
            c7 = 3;
            throw tmp40;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _dismissAdContent() {
  let dismissingContent;
  obj = _asyncToGenerator(async function(arg0, value) {
    let obj6;
    let tmp22;
    let tmp38;
    let tmp39;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      let c5;
      try {
        let adCreativeId;
        let dispatch;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp;
            adCreativeId = closure_0.adCreativeId;
            const adCreativeType = closure_0.adCreativeType;
            dispatch = require;
            const obj15 = QuestDataUtils;
            if (obj15.isDismissible(closure_1)) {
              if (!dismissingContent.isDismissingContent(adCreativeId)) {
                const obj4 = { type: "AD_CONTENT_DISMISS_BEGIN", adCreativeType, adCreativeId };
                const obj5 = DispatcherDefault;
                obj5.dispatch(obj4);
                c5 = 1;
                const dispatchResult1 = dispatch(dependencyMap[18]);
                const adMetadataSealed = dispatchResult1.getAdMetadataSealed(tmp48, adCreativeId);
                const dispatchResult2 = dispatch(dependencyMap[18]);
                const adTrafficMetadataSealed = dispatchResult2.getAdTrafficMetadataSealed(tmp48, undefined, adCreativeId);
                const dispatchResult3 = dispatch(dependencyMap[18]);
                const questPlacementFromQuestContent = dispatchResult3.getQuestPlacementFromQuestContent(tmp48);
                const HTTP = dispatch(dependencyMap[15]).HTTP;
                dispatch = HTTP.post;
                const request = { url: Endpoints.QUESTS_CREATIVES_DISMISS(adCreativeId), body: obj6, rejectWithError: false };
                let tmp37 = null;
                if (null != adMetadataSealed) {
                  tmp37 = adMetadataSealed;
                }
                obj6 = { decision_metadata_sealed: tmp37, traffic_metadata_sealed: tmp38, placement: tmp39, ad_creative_type: adCreativeType };
                tmp38 = null;
                if (null != adTrafficMetadataSealed) {
                  tmp38 = adTrafficMetadataSealed;
                }
                tmp39 = null;
                if (null != questPlacementFromQuestContent) {
                  tmp39 = questPlacementFromQuestContent;
                }
                dispatch = dispatch(request);
                c6 = 2;
                c7 = 1;
                const obj7 = { value: dispatch, done: false };
                return obj7;
              }
            }
          }
        } else if (1 === tmp4) {
          c5 = 0;
          closure_1 = closure_4;
          dispatch = closure_131_1(closure_131_2[8]).dispatch;
          const obj8 = { type: "AD_CONTENT_DISMISS_FAILURE", adCreativeId, error: tmp22 };
          const self = this;
          const self2 = this;
          const tmp17 = closure_131_1(closure_131_2[8]);
          tmp22 = new closure_131_1(closure_131_2[12])(closure_1);
          dispatch(obj8);
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          const obj10 = { type: "AD_CONTENT_DISMISS_SUCCESS", adCreativeId };
          obj = closure_131_1(closure_131_2[8]);
          obj.dispatch(obj10);
          c5 = 0;
        }
        c7 = 3;
        return { value: "IconComponent", done: "+51" };
      } catch (tmp40) {
        closure_4 = tmp40;
        if (0 === c5) {
          c7 = 3;
          throw tmp40;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _resetCreativePreviewDeliveryState() {
  obj = _asyncToGenerator(async (adCreativeId, arg1) => {
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              let tmp11;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: Endpoints.ADS_CREATIVES_PREVIEW_DELIVERY_STATE(adCreativeId), query: tmp11, rejectWithError: false };
              const del = HTTP.del;
              const tmp17 = closure_1;
              if (null != closure_1) {
                tmp11 = { placement: tmp17 };
                const obj4 = { placement: tmp17 };
              }
              c4 = 1;
              c5 = 1;
              const obj5 = { value: del(request), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            const obj7 = { type: "ADS_CREATIVE_PREVIEW_DELIVERY_STATE_RESET", adCreativeId };
            obj = closure_131_1(closure_131_2[8]);
            obj.dispatch(obj7);
            c5 = 3;
            return { value: "IconComponent", done: "+51" };
          }
        } catch (tmp12) {
          c5 = 3;
          throw tmp12;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _resetPreviewDeliveryStateLookback() {
  obj = _asyncToGenerator(async (lookback_minutes) => {
    let c2 = 0;
    let c3 = 0;
    return (async (arg0, value) => {
      let obj4;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            } else {
              closure_1 = tmp;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.ADS_CREATIVES_PREVIEW_DELIVERY_STATE_LOOKBACK, query: obj4, rejectWithError: false };
              c2 = 1;
              c3 = 1;
              obj4 = { lookback_minutes };
              const obj5 = { value: HTTP.del(request), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            return { value, done: true };
          } else {
            obj = closure_129_1(closure_129_2[8]);
            obj.dispatch({ type: "ADS_PREVIEW_DELIVERY_STATE_LOOKBACK_RESET" });
            c3 = 3;
            return { value: "IconComponent", done: "+51" };
          }
        } catch (tmp13) {
          c3 = 3;
          throw tmp13;
        }
      }
    })();
  });
  return obj(...arguments);
};
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
const Endpoints = Constants.Endpoints;
const tmp2 = new LoggerDefault("BountyActionCreators");
let closure_10 = tmp2;
let result = size.fileFinishedImporting("modules/quests/BountyActionCreators.tsx");

export const fetchQuestHomeBounties = function fetchQuestHomeBounties() {
  return obj(...arguments);
};
export const fetchBountyPreview = function fetchBountyPreview() {
  return obj(...arguments);
};
export const fetchQuestBarCreativePreview = function fetchQuestBarCreativePreview() {
  return obj(...arguments);
};
export const setBountyVideoProgress = function setBountyVideoProgress(bountyId, arg1) {
  obj = SessionAdGenerator;
  if (null != obj.getCurrentAdSession()) {
    const tmpResult = SessionAdGenerator;
    const orRefreshAdSession = tmpResult.getOrRefreshAdSession(true);
    const obj2 = { type: "BOUNTIES_VIDEO_PROGRESS_UPDATE", bountyId, timestampSec: null, maxTimestampSec: null, duration: null };
    ({ timestampSec: obj4.timestampSec, maxTimestampSec: obj4.maxTimestampSec, duration: obj4.duration } = arg1);
    const obj3 = DispatcherDefault;
    obj3.dispatch(obj2);
  }
};
export const claimBountyReward = function claimBountyReward() {
  return obj(...arguments);
};
export const dismissAdContent = function dismissAdContent() {
  return obj(...arguments);
};
export const resetCreativePreviewDeliveryState = function resetCreativePreviewDeliveryState() {
  return obj(...arguments);
};
export const resetPreviewDeliveryStateLookback = function resetPreviewDeliveryStateLookback() {
  return obj(...arguments);
};
