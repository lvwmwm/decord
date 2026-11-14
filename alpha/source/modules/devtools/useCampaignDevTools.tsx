// Module ID: 18351
// Function ID: 18352
// Name: useCampaignDevTools
// Dependencies: [32, 5, 19, 1389, 9623, 2189, 1388, 1390, 560, 1285, 504, 18352, 9670, 572, 18320, 2]
// Exports: default

// Module 18351 (useCampaignDevTools)
import PremiumConstants from "PremiumConstants" /* 1390 */;
import CampaignDevToolsUtils from "CampaignDevToolsUtils" /* 9670 */;
import OverridePremiumTypeActions from "OverridePremiumTypeActions" /* 18320 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import OverridePremiumTypeStore from "OverridePremiumTypeStore" /* 1389 */;
import PromotionsStore from "PromotionsStore" /* 9623 */;
import LocaleStore from "LocaleStore" /* 2189 */;
import UserStore from "UserStore" /* 1388 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

let c4, closure_2, closure_3, closure_4, closure_7, endDate;

function setCampaignNitro(value) {
  let closure_0 = value;
  const iter = prop.find((id) => id.id === closure_0);
  value = undefined;
  if (iter != null) {
    value = iter.value;
  }
  const obj = OverridePremiumTypeActions;
  const result = obj.updateClientPremiumTypeOverride(value, UserStore.getCurrentUser());
}
const prop = PremiumConstants.PREMIUM_TYPE_OVERRIDE_OPTIONS;
let items = [
  { id: "actual", value: "actual", label: "Use actual Nitro status" },
  ...prop.map((id) => {
    const obj = { value: id.id };
    const merged = Object.assign(id);
    return obj;
  })
];
let c11 = 0;
let c12 = 0;
let closure_13 = module_560.create((arg0) => {
  let closure_0 = arg0;
  let obj = {
    campaigns: [],
    campaignsLoading: true,
    componentsLoading: false,
    error: null,
    reload() {
      return closure_1(...arguments);
    }
  };
  let closure_1 = _asyncToGenerator(async (arg0, value) => {
    let sum;
    let tmp8;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        let body;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            body = undefined;
            sum = sum + 1;
            tmp8({ campaignsLoading: true, error: null });
            c3 = 2;
            const HTTP = tmp8(closure_2[9]).HTTP;
            c4 = 3;
            c5 = 1;
            const obj4 = { value: HTTP.get({ url: "/premium-marketing/promotions", rejectWithError: true }), done: false };
            return obj4;
          }
        } else if (1 === c4) {
          tmp8 = body;
          c3 = 0;
          const tmp24 = closure_2;
          if (sum === sum) {
            tmp8 = closure_129_0({ campaignsLoading: false });
          }
          throw tmp24;
        } else {
          if (2 === c4) {
            c3 = 1;
            tmp8 = sum;
            if (sum === sum) {
              tmp8 = closure_129_0;
              closure_129_0({ error: "Could not load campaigns. Staff access is required." });
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            tmp8 = sum;
            if (sum === sum) {
              tmp8 = closure_129_0;
              closure_129_0({ campaignsLoading: false });
            }
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            body = value;
            tmp8 = sum;
            if (sum === sum) {
              tmp8 = closure_129_0;
              const obj = { campaigns: body.body };
              closure_129_0(obj);
            }
            c3 = 1;
          }
          c3 = 0;
          tmp8 = sum;
          if (sum === sum) {
            tmp8 = closure_129_0;
            closure_129_0({ campaignsLoading: false });
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp29) {
        closure_2 = tmp29;
        if (0 === c3) {
          c5 = 3;
          throw tmp29;
        } else if (1 === tmp31) {
          c4 = 1;
        } else {
          c4 = 2;
        }
      }
    }
  });
  return obj;
});
let result = size.fileFinishedImporting("modules/devtools/useCampaignDevTools.tsx");

export default function useCampaignDevTools() {
  let callback;
  let campaignsLoading;
  let componentsLoading;
  let items4;
  let reload;
  let stateFromStores;
  let stateFromStores1;
  let tmp3;
  let obj = function _select() {
    obj = _asyncToGenerator(async (promotionId) => {
      let c6 = 0;
      let c7 = 0;
      let c5 = 0;
      return (async (arg0, value) => {
        let flag;
        if (c7 === 2) {
          c7 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "HermesInternal", done: null };
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
                body = undefined;
                sum = sum + 1;
                closure_2_2(null);
                const tmp67 = promotionId;
                if (null == promotionId) {
                  closure_1_13.setState({ componentsLoading: false });
                  const obj4 = { type: "CAMPAIGN_OVERRIDE_SET", promotionId: null, endDate: null, components: [] };
                  const obj6 = endDate(flag[13]);
                  obj6.dispatch(obj4);
                  c7 = 3;
                  return { value: true, done: true };
                } else {
                  closure_1_13.setState({ componentsLoading: true });
                  c5 = 2;
                  const HTTP = promotionId(flag[9]).HTTP;
                  const _HermesInternal = HermesInternal;
                  const get = HTTP.get;
                  const obj5 = { url: "/premium-marketing/promotions/" + tmp67 + "/components", rejectWithError: true };
                  flag = get(obj5);
                  c6 = 3;
                  c7 = 1;
                  return { value: flag, done: false };
                }
              }
            } else if (1 === c6) {
              flag = closure_3;
              c5 = 0;
              const tmp41 = closure_4;
              if (sum === sum) {
                flag = closure_1_13.setState({ componentsLoading: false });
              }
              throw tmp41;
            } else if (2 === c6) {
              c5 = 1;
              flag = sum;
              if (sum === sum) {
                closure_131_2("Could not enable campaign. Try again.");
              }
              c5 = 0;
              flag = sum;
              if (sum === sum) {
                closure_1_13.setState({ componentsLoading: false });
              }
              c7 = 3;
              return { value: false, done: true };
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              flag = sum;
              if (sum === sum) {
                closure_1_13.setState({ componentsLoading: false });
              }
              c7 = 3;
              return { value, done: true };
            } else {
              body = value;
              flag = sum === sum;
              if (flag) {
                obj = { type: "CAMPAIGN_OVERRIDE_SET", promotionId, endDate, components: body.body };
                const dispatch = endDate(flag[13]).dispatch;
                endDate(flag[13]);
                const found = closure_131_0.find((id) => id.id === promotionId);
                end_date = undefined;
                if (found != null) {
                  end_date = found.end_date;
                }
                endDate = end_date;
                if (end_date == null) {
                  endDate = null;
                }
                dispatch(obj);
                closure_1_13.setState({ error: null });
                flag = true;
              }
              c5 = 0;
              if (sum === sum) {
                closure_1_13.setState({ componentsLoading: false });
              }
              c7 = 3;
              return { value: flag, done: true };
            }
          } catch (tmp55) {
            closure_4 = tmp55;
            if (0 === c5) {
              c7 = 3;
              throw tmp55;
            } else if (1 === tmp57) {
              c6 = 1;
            } else {
              c6 = 2;
            }
          }
        }
      })();
    });
    return obj(...arguments);
  };
  const tmp = closure_13();
  const campaigns = tmp.campaigns;
  ({ campaignsLoading, componentsLoading, reload } = tmp);
  obj = stateFromStores1;
  const error = tmp.error;
  [tmp3, dependencyMap] = stateFromStores(stateFromStores1.useState(null), 2);
  const tmp2 = stateFromStores(stateFromStores1.useState(null), 2);
  const obj2 = campaigns(504);
  const items = [closure_7];
  stateFromStores = obj2.useStateFromStores(items, () => closure_7.campaignOverrideId);
  let found = campaigns.find((id) => id.id === stateFromStores);
  const obj3 = campaigns(504);
  const items1 = [closure_7];
  const stateFromStoresArray = obj3.useStateFromStoresArray(items1, () => closure_7.campaignOverrideRows);
  const tmp9 = reload(18352)(stateFromStores, stateFromStoresArray);
  let obj4 = campaigns(504);
  const items2 = [obj];
  stateFromStores1 = obj4.useStateFromStores(items2, () => obj.locale);
  let end_date;
  if (found != null) {
    end_date = found.end_date;
  }
  if (end_date == null) {
    end_date = null;
  }
  const items3 = [stateFromStoresArray, stateFromStores1, end_date];
  if (componentsLoading) {
    items4 = [];
  } else {
    const tmp4Result = campaigns(9670);
    items4 = tmp4Result.campaignPreviewActions(tmp12, stateFromStoresArray, found);
  }
  const items5 = [end_date];
  const tmp4Result3 = campaigns(504);
  closure_7 = tmp4Result3.useStateFromStores(items5, () => end_date.getPremiumTypeOverride());
  const found1 = prop.find((value) => value.value === closure_7);
  let str;
  if (found1 != null) {
    str = found1.id;
  }
  if (str == null) {
    str = "actual";
  }
  const items6 = [reload];
  let obj5 = {
    campaigns,
    dismissals: tmp9,
    error: tmp3,
    loading: componentsLoading || campaignsLoading,
    campaignsLoading,
    componentsLoading,
    reload: callback,
    select(arg0) {
      return obj(...arguments);
    },
    selectedId: stateFromStores,
    previewActions: items4,
    details: null,
    nitro: null,
    setNitro: null
  };
  callback = obj.useCallback(() => {
    dependencyMap(null);
    return reload();
  }, items6);
  if (tmp3 == null) {
    tmp3 = error;
  }
  if (!componentsLoading) {
    if (null != found) {
      const tmp4Result4 = campaigns(9670);
      tmp4Result4.campaignDetails(found, stateFromStoresArray);
    }
    obj5.details = [];
    obj5.nitro = str;
    obj5.setNitro = setCampaignNitro;
    return obj5;
  }
};
export const NITRO_OPTIONS = items;
export { setCampaignNitro };
