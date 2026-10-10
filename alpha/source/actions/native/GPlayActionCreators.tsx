// Module ID: 9399
// Function ID: 9400
// Name: GPlayActionCreators
// Dependencies: [109, 5, 17, 9400, 502, 7131, 1085, 7132, 1392, 1096, 3, 7126, 6959, 5913, 584, 4782, 569, 1481, 1382, 1265, 5299, 1126, 1295, 4784, 2]
// Exports: downgradeSubscription, ensureSkusLoaded, loadUserCountry, purchase, retainInAppSkus, sendPaymentCompleteAnalytics, subscribe, updatePendingDowngrade, verifyPurchase

// Module 9399 (GPlayActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import BackoffDefault from "Backoff" /* 569 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants2 from "Constants" /* 1096 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import HTTPUtils from "HTTPUtils" /* 1295 */;
import NetworkUtilsDefault from "NetworkUtils" /* 1481 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4782 */;
import BillingUtils from "BillingUtils" /* 4784 */;
import ProductIds from "ProductIds" /* 7126 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GPlayAnalyticsStore from "GPlayAnalyticsStore" /* 9400 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import IAPStore from "IAPStore" /* 7131 */;
import Constants_mod from "Constants" /* 1085 */;
import Constants_mod2 from "Constants" /* 7132 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let applyResult, c2, c21, c22, c8, closure_31, gift_info_options, importDefault, oldProductId;

let c10;
let c9;
let closure_14;
let closure_15;
let closure_18;
let closure_19;
let map1;
const f101363 = async () => {
  closure_0 = [...arguments];
  let c5 = 0;
  let c6 = 0;
  let c4 = 0;
  const iter = (async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            closure_2 = tmp;
            c5 = 1;
            c6 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            c4 = 1;
            const items = [];
            HermesBuiltin.arraySpread(items, closure_0, 0);
            applyResult = HermesBuiltin.apply(closure_130_0, items, undefined);
            c5 = 3;
            c6 = 1;
            return { value: applyResult, done: false };
          }
        } else if (2 === c5) {
          c4 = 0;
          let closure_1 = closure_3;
          let tmp12;
          const tmp10 = closure_1;
          const tmp9 = closure_1_44;
          if (null != closure_130_2) {
            applyResult = { source: tmp11 };
            tmp12 = applyResult;
          }
          const obj6 = { tags: tmp12 };
          applyResult = tmp9(tmp10, obj6);
          const tmp13 = closure_130_1;
          if (tmp13) {
            throw closure_1;
          } else {
            c6 = 3;
            return { value: "IconComponent", done: "+51" };
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          return { value, done: true };
        } else {
          c4 = 0;
          c6 = 3;
          return { value, done: true };
        }
      } catch (tmp25) {
        closure_3 = tmp25;
        if (0 === c4) {
          c6 = 3;
          throw tmp25;
        } else {
          c5 = 2;
        }
      }
    }
  })();
  iter.next();
  return iter;
};
function getPlanIdForProduct(arg0, arg1) {
  const tmp = arg1;
  if (tmp) {
    try {
      obj = ProductIds;
      return obj.getPlanIdForGift(arg0);
    } catch (err) {
      return null;
    }
  } else {
    let basePlanId;
    const tmp5 = ProductIds.AppStorePremiumProductIdsToPremiumBundledItems[arg0];
    if (tmp5 != null) {
      basePlanId = tmp5.basePlanId;
    }
    if (basePlanId == null) {
      basePlanId = null;
    }
    return basePlanId;
  }
}
function fetchDesktopSubscriptionSkus() {
  return obj(...arguments);
}
let obj = function _fetchDesktopSubscriptionSkus() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let US;
    let str2;
    let str3;
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    if (c22 === 2) {
      c22 = 3;
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
      while (true) {
        let currencyCode;
        let flag;
        let DEFAULT;
        let c6;
        let closure_7;
        let closure_8;
        let closure_9;
        let closure_10;
        let c11;
        let id;
        let _var;
        let planId;
        let title;
        let country_prices;
        let first;
        let amount;
        let user;
        c22 = 2;
        let tmp4 = c21;
        if (0 === c21) {
          if (arg0 === 1) {
            c22 = 3;
            throw value;
          } else if (arg0 === 2) {
            c22 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            currencyCode = tmp;
            let closure_17 = tmp4;
            flag = undefined;
            DEFAULT = closure_1;
            if (closure_1 === undefined) {
              DEFAULT = constants.DEFAULT;
            }
            flag = closure_2;
            if (closure_2 === undefined) {
              flag = false;
            }
            value = undefined;
            set = undefined;
            closure_5 = undefined;
            c6 = undefined;
            closure_7 = undefined;
            closure_8 = undefined;
            closure_9 = undefined;
            closure_10 = undefined;
            c11 = undefined;
            id = undefined;
            _var = undefined;
            planId = undefined;
            title = undefined;
            country_prices = undefined;
            first = undefined;
            currencyCode = undefined;
            amount = undefined;
            user = undefined;
            c21 = 1;
            c22 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c22 = 3;
            throw value;
          } else if (arg0 === 2) {
            c22 = 3;
            let obj4 = { value, done: true };
            return obj4;
          } else {
            value = [];
            let _Set = Set;
            let self2 = this;
            let self = this;
            set = new Set();
            closure_5 = {};
            closure_4 = closure_0;
            value = closure_0[Symbol.iterator]();
            while (value !== undefined) {
              let c20 = 1;
              c6 = tmp110;
              closure_7 = closure_146_23(c6, flag);
              if (null != closure_7) {
                closure_8 = closure_146_19[closure_7];
                let skuId;
                if (closure_8 != null) {
                  skuId = closure_8.skuId;
                }
                let tmp112 = null != skuId;
                if (tmp112) {
                  tmp112 = closure_8.skuId !== closure_146_18.NONE;
                }
                if (tmp112) {
                  let addResult = set.add(closure_8.skuId);
                  closure_5[c6] = closure_7;
                }
              }
              c20 = 0;
              continue;
            }
            closure_9 = {};
            let tmp128 = closure_146_0(closure_146_2[12]);
            let items = [];
            let fetchSubscriptionPlansBySKUs = tmp128.fetchSubscriptionPlansBySKUs;
            let arraySpreadResult = HermesBuiltin.arraySpread(items, set, 0);
            c21 = 3;
            c22 = 1;
            let obj5 = { value: fetchSubscriptionPlansBySKUs(items), done: false };
            return obj5;
          }
        } else if (2 === tmp4) {
          c20 = 0;
          value.return();
          throw closure_1_19;
        } else if (3 === tmp4) {
          if (arg0 === 1) {
            c22 = 3;
            throw value;
          } else if (arg0 === 2) {
            c22 = 3;
            let obj6 = { value, done: true };
            return obj6;
          } else {
            closure_10 = value;
            closure_6 = closure_10;
            closure_5 = closure_10[Symbol.iterator]();
            while (closure_5 !== undefined) {
              c20 = 2;
              c11 = tmp16;
              closure_10 = c11;
              closure_9 = c11[Symbol.iterator]();
              while (closure_9 !== undefined) {
                id = tmp22;
                closure_9[id.id] = id;
                c20 = 2;
                continue;
              }
              c20 = 0;
              continue;
            }
            closure_8 = closure_0;
            closure_7 = closure_0[Symbol.iterator]();
            while (closure_7 !== undefined) {
              c20 = 4;
              _var = tmp32;
              planId = closure_5[_var2];
              if (null != planId) {
                title = closure_9[planId];
                if (null != title) {
                  let prices = title.prices;
                  country_prices = undefined;
                  if (prices != null) {
                    let tmp53 = prices[DEFAULT];
                    if (tmp53 != null) {
                      country_prices = tmp53.country_prices;
                    }
                  }
                  first = undefined;
                  if (country_prices != null) {
                    let prices2 = country_prices.prices;
                    if (prices2 != null) {
                      first = prices2[0];
                    }
                  }
                  if (null != first) {
                    let str = first.currency;
                    let formatted;
                    if (str != null) {
                      formatted = str.toLowerCase();
                    }
                    let usd = formatted;
                    if (formatted == null) {
                      usd = "usd";
                    }
                    currencyCode = usd;
                    amount = first.amount;
                    user = closure_146_19[planId];
                    let obj7 = { identifier: _var, price: amount, currencySymbol: first.currency, currencyCode, priceString: str2, countryCode: US, downloadable: false, description: _var, title, type: str3, subscriptionOffers: [] };
                    str2 = "";
                    let push = value.push;
                    if (null != first.currency) {
                      let result = amount / 100;
                      let _HermesInternal = HermesInternal;
                      str2 = "" + first.currency + " " + result.toFixed(2);
                    }
                    let country_code;
                    if (country_prices != null) {
                      country_code = country_prices.country_code;
                    }
                    US = country_code;
                    if (country_code == null) {
                      US = closure_146_0(closure_146_2[13]).CountryCodes.US;
                    }
                    let name;
                    if (user != null) {
                      name = user.name;
                    }
                    let name2 = name;
                    if (name == null) {
                      name2 = title.name;
                    }
                    _var = name2;
                    if (name2 == null) {
                      _var = "";
                    }
                    let name1;
                    if (user != null) {
                      name1 = user.name;
                    }
                    name2 = name1;
                    if (name1 == null) {
                      name2 = title.name;
                    }
                    title = name2;
                    if (name2 == null) {
                      title = "";
                    }
                    str3 = "subs";
                    if (flag) {
                      str3 = "inapp";
                    }
                    let arr = push(obj7);
                  } else {
                    let obj8 = { productId: _var, planId, priceSetAssignmentType: DEFAULT };
                    let warnResult = closure_146_22.warn("[fetchDesktopSubscriptionSkus] No price info found", obj8);
                  }
                } else {
                  let obj9 = { productId: _var, planId };
                  let warnResult1 = closure_146_22.warn("[fetchDesktopSubscriptionSkus] Plan not found", obj9);
                }
              } else {
                obj = { productId: _var };
                let warnResult2 = closure_146_22.warn("[fetchDesktopSubscriptionSkus] No plan ID found", obj);
              }
              c20 = 0;
              continue;
            }
            c22 = 3;
            let obj10 = { value, done: true };
            return obj10;
          }
        } else if (4 === tmp4) {
          c20 = 0;
          closure_5.return();
          throw closure_1_19;
        } else if (5 === tmp4) {
          c20 = 2;
          closure_9.return();
          throw closure_1_19;
        } else {
          c20 = 0;
          closure_7.return();
          throw closure_1_19;
        }
      }
    }
  });
  return obj(...arguments);
};
function retryFailedInAppSkus() {
  let closure_1;
  let product;
  const items = [...set1];
  const found = items.filter((item) => {
    const hasItem = set2.has(item) && null == product.getProduct(item);
    return hasItem;
  });
  const item = set1.forEach((item) => set.delete(item));
  set1.clear();
  let tmp3 = found.length > 0;
  if (tmp3) {
    obj = NetworkUtilsDefault;
    let isOnlineResult = obj.isOnline();
    if (isOnlineResult) {
      let isReadyResult;
      const obj2 = found(4782);
      if (obj2.isGooglePlayBillingSupported()) {
        isReadyResult = IAPStore.isReady();
      } else {
        isReadyResult = AuthenticationStore.isAuthenticated();
      }
      isOnlineResult = isReadyResult;
    }
    tmp3 = isOnlineResult;
  }
  if (tmp3) {
    const promise = importDefaultResultResult1(found);
    importDefault = promise.then(() => {
      closure_1_36.succeed();
      const tmp2 = set1.size > 0 && obj.fails < 5;
      if (tmp2) {
        closure_1_36.fail(retryFailedInAppSkus);
      }
    }, (code) => {
      code = undefined;
      if (code != null) {
        code = code.code;
      }
      if (code === String(constants.BILLING_CLIENT_NOT_READY)) {
        const item = found.forEach((item) => set.delete(item));
      } else {
        let code1;
        has = has.has;
        if (code != null) {
          code1 = code.code;
        }
        if (!has(code1)) {
          const item1 = found.forEach((item) => set2.add(item));
          const tmp7 = set1.size > 0 && closure_2_36.fails < 5;
          if (tmp7) {
            closure_2_36.fail(retryFailedInAppSkus);
          }
        }
      }
    });
    const item1 = found.forEach((item) => map.set(item, closure_1));
  }
}
obj = function _loadUserCountry() {
  obj = _asyncToGenerator(async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
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
      try {
        let countryCode;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp4;
            countryCode = undefined;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: importDefaultResultResult3(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          countryCode = value;
          const obj6 = { type: "GPLAY_SET_USER_COUNTRY", countryCode };
          obj = closure_129_1(closure_129_2[14]);
          obj.dispatch(obj6);
          c3 = 3;
          return { value: "IconComponent", done: "+51" };
        }
      } catch (tmp12) {
        c3 = 3;
        throw tmp12;
      }
    }
  });
  return obj(...arguments);
};
obj = function _subscribe() {
  obj = _asyncToGenerator(async (arg0, arg1, offer_id, arg3, arg4) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let message = arg3;
    closure_4 = arg4;
    let c10 = 0;
    let c11 = 0;
    let c9 = 0;
    return (async (arg0, value, arg2, arg3, arg4) => {
      let intl;
      let intl2;
      if (c11 === 2) {
        c11 = 3;
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
          c11 = 2;
          if (0 === c10) {
            if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              c11 = 3;
              return { value, done: true };
            } else {
              closure_7 = tmp;
              closure_6 = tmp4;
              closure_1 = offer_id;
              offer_id = closure_4;
              c9 = 1;
              c10 = 2;
              c11 = 1;
              const obj4 = { value: BillingManager.subscribe(product_id, closure_1, offer_id, message, closure_4), done: false };
              return obj4;
            }
          } else {
            if (1 === c10) {
              c9 = 0;
              message = closure_8;
              const obj6 = { productId: product_id, oldProductId };
              oldProductId = closure_1;
              const tmp10 = message;
              const tmp9 = closure_135_44;
              if (closure_1 == null) {
                oldProductId = "";
              }
              const obj7 = { tags: obj6 };
              tmp9(tmp10, obj7);
              const obj8 = { title: intl.string(closure_135_0(closure_135_2[21]).t["U+H+kd"]), body: intl2.string(closure_135_0(closure_135_2[21]).t.LFFx5G) };
              const show = closure_135_1(closure_135_2[20]).show;
              closure_135_1(closure_135_2[20]);
              intl = closure_135_0(closure_135_2[21]).intl;
              intl2 = closure_135_0(closure_135_2[21]).intl;
              show(obj8);
              const obj9 = { location: "subscribe", product_id, offer_id, error: message.message };
              const obj5 = closure_135_1(closure_135_2[19]);
              obj5.track(closure_135_13.GPLAY_PURCHASE_FAILED, obj9);
            } else if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 0;
              c11 = 3;
              return { value, done: true };
            } else {
              c9 = 0;
            }
            c11 = 3;
            return { value: "IconComponent", done: "+51" };
          }
        } catch (tmp37) {
          closure_8 = tmp37;
          if (0 === c9) {
            c11 = 3;
            throw tmp37;
          } else {
            c10 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _verifyPurchase() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_1;
    let load_id;
    let obj7;
    let closure_0 = arg0;
    gift_info_options = value;
    if (c8 === 2) {
      c8 = 3;
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
      let c6;
      try {
        let closure_2;
        let productId;
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let tmp46;
            let tmp47;
            closure_4 = undefined;
            closure_5 = undefined;
            const tmp69 = state.getState().analyticsByProductId[closure_0.productId];
            gift_info_options = tmp69;
            id = id.getId();
            const SubscriptionProductIds = require("ProductIds").SubscriptionProductIds;
            const hasItem = SubscriptionProductIds.includes(closure_0.productId);
            let tmp48 = !hasItem;
            closure_2 = tmp48;
            productId = closure_0.productId;
            const tmp72 = _require;
            if (hasItem) {
              tmp46 = null;
              tmp47 = productId;
            } else {
              tmp46 = productId;
              tmp47 = null;
            }
            if (!hasItem) {
              tmp48 = null != tmp67;
            }
            if (tmp48) {
              tmp48 = null == tmp67.gift_style;
            }
            if (tmp48) {
              const obj4 = { source: "verifyPurchase", sku_id: closure_0.productId };
              const obj8 = AnalyticsUtilsDefault;
              obj8.track(constants.GIFT_INFO_OPTIONS_MISSING, obj4);
            }
            c6 = 1;
            const HTTP = tmp72(dependencyMap[22]).HTTP;
            const request = { url: constants2.VERIFY_PURCHASE, body: productId, rejectWithError: false };
            productId = { purchase_token: closure_0.purchaseToken, user_id: id, package_name: closure_0.packageName, subscription_sku_id: tmp47, one_time_purchase_sku_id: tmp46, gift_info_options, one_time_purchase_options: { consume_on_validate: true }, load_id };
            load_id = undefined;
            const post = HTTP.post;
            if (tmp69 != null) {
              load_id = tmp69.load_id;
            }
            if (load_id == null) {
              load_id = null;
            }
            c7 = 2;
            c8 = 1;
            const obj5 = { value: post(request), done: false };
            return obj5;
          }
        } else if (1 === tmp4) {
          c6 = 0;
          closure_6 = closure_5;
          productId = closure_132_44;
          const obj6 = { tags: obj7 };
          obj7 = { productId: closure_0.productId };
          closure_132_44(closure_6, obj6);
          if (null != gift_info_options) {
            const succeededOnlyFields2 = gift_info_options.succeededOnlyFields;
            closure_5 = closure_132_7(gift_info_options, closure_132_6);
            productId = closure_132_1(closure_132_2[19]);
            const obj9 = { payment_gateway: closure_132_20.GOOGLE };
            const track = productId.track;
            const PAYMENT_FLOW_FAILED = closure_132_13.PAYMENT_FLOW_FAILED;
            const merged = Object.assign(closure_5);
            track(PAYMENT_FLOW_FAILED, obj9);
          }
          throw closure_6;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          productId = value;
          if (null != gift_info_options) {
            const tmp6 = closure_2;
            if (!tmp6) {
              const succeededOnlyFields = gift_info_options.succeededOnlyFields;
              closure_4 = closure_132_7(gift_info_options, closure_132_5);
              obj = closure_132_1(closure_132_2[19]);
              obj.track(closure_132_13.PAYMENT_FLOW_COMPLETED, closure_4);
              closure_132_9(closure_0.productId);
            }
          }
          c6 = 0;
          c8 = 3;
          const obj11 = { value: productId.body, done: true };
          return obj11;
        }
      } catch (tmp57) {
        closure_5 = tmp57;
        if (0 === c6) {
          c8 = 3;
          throw tmp57;
        } else {
          c7 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function captureGPlayBillingException(code, fingerprint) {
  code = undefined;
  const has = set3.has;
  if (code != null) {
    code = code.code;
  }
  if (!has(code)) {
    let hasItem;
    let hasItem1;
    let code1;
    const has2 = set2.has;
    if (code != null) {
      code1 = code.code;
    }
    const has2Result = has2(code1);
    if (code != null) {
      const message = code.message;
      if (message != null) {
        hasItem = message.includes("max attempts exceeded");
      }
    }
    if (code != null) {
      const message2 = code.message;
      if (message2 != null) {
        hasItem1 = message2.includes("returned null");
      }
    }
    if (!has2Result) {
      if (true !== hasItem) {
        if (true !== hasItem1) {
          obj = BillingUtils;
          const result = obj.captureBillingException(code, fingerprint);
        }
      }
    }
    const _Math = Math;
    if (Math.random() < 0.01) {
      if (has2Result) {
        let code2;
        const _String = String;
        if (code != null) {
          code2 = code.code;
        }
        const items = ["gplay-billing-error", _String(code2)];
        fingerprint = items;
      } else {
        fingerprint = fingerprint.fingerprint;
      }
      const obj2 = { fingerprint };
      const captureBillingException = BillingUtils.captureBillingException;
      BillingUtils;
      const merged = Object.assign(fingerprint);
      const result1 = captureBillingException(code, obj2);
    }
  }
}
let closure_3 = ["succeededOnlyFields"];
let closure_4 = ["succeededOnlyFields"];
let closure_5 = ["succeededOnlyFields"];
let closure_6 = ["succeededOnlyFields"];
const NativeModules = react_native.NativeModules;
({ deleteGPlayAnalytics: c9, useGPlayAnalyticsStore: c10 } = GPlayAnalyticsStore);
let Constants = Constants_mod2;
({ AnalyticEvents: map1, Endpoints: closure_14, PriceSetAssignmentPurchaseTypes: closure_15 } = Constants);
Constants = Constants_mod2;
const GPlaySkusType = Constants.GPlaySkusType;
({ PremiumSubscriptionSKUs: closure_18, SubscriptionPlanInfo: closure_19 } = PremiumConstants);
const PaymentGateways = Constants2.PaymentGateways;
const BillingManager = NativeModules.BillingManager;
let tmp7 = new LoggerDefault("GPlayActionCreators");
let closure_22 = tmp7;
_asyncToGenerator(async (arg0, value) => {
  let items;
  let closure_0 = arg0;
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "+51" };
    }
  } else {
    let c4;
    try {
      let closure_2;
      let SubscriptionProductIds;
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp;
          value = tmp5;
          SubscriptionProductIds = closure_0;
          if (closure_0 === undefined) {
            SubscriptionProductIds = ProductIds.SubscriptionProductIds;
          }
          value = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "Set", done: true };
        }
      } else if (1 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          if (null != SubscriptionProductIds) {
            if (0 !== SubscriptionProductIds.length) {
              const obj12 = closure_130_1(closure_130_2[14]);
              obj12.dispatch({ type: "GPLAY_FETCH_SUBSCRIPTION_SKUS_START" });
              c4 = 1;
              const obj13 = closure_130_0(closure_130_2[15]);
              if (obj13.isGooglePlayBillingSupported()) {
                c5 = 4;
                c6 = 1;
                const obj6 = { value: closure_130_21.getSubscriptionSkus(SubscriptionProductIds), done: false };
                return obj6;
              } else {
                c5 = 3;
                c6 = 1;
                const obj7 = { value: closure_130_24(SubscriptionProductIds), done: false };
                return obj7;
              }
            }
          }
          c6 = 3;
          const obj8 = { value: [], done: true };
          return obj8;
        }
      } else if (2 === c5) {
        c4 = 0;
        closure_2 = closure_3;
        const obj5 = closure_130_1(closure_130_2[14]);
        obj5.dispatch({ type: "GPLAY_FETCH_SUBSCRIPTION_SKUS_FAILED" });
        throw closure_2;
      } else {
        if (3 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj9 = { value, done: true };
            return obj9;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        }
        const obj10 = { type: "GPLAY_SUBSCRIPTION_SKUS_LOADED", skus: items, skusType: closure_130_17.SUBSCRIPTION };
        items = [];
        const dispatch = closure_130_1(closure_130_2[14]).dispatch;
        const tmp10 = closure_130_1(closure_130_2[14]);
        HermesBuiltin.arraySpread(items, value, 0);
        dispatch(obj10);
        c4 = 0;
        c6 = 3;
        const obj11 = { value, done: true };
        return obj11;
      }
    } catch (tmp30) {
      closure_3 = tmp30;
      if (0 === c4) {
        c6 = 3;
        throw tmp30;
      } else {
        c5 = 2;
      }
    }
  }
});
const loadSubscriptionSkus = "loadSubscriptionSkus";
const importDefaultResultResult = _asyncToGenerator(f101363);
_asyncToGenerator(async () => {
  let closure_0 = arg0;
  let c5 = 0;
  let c6 = 0;
  let c4 = 0;
  let iter = (async (arg0, value) => {
    let items;
    function fetchDesktopInAppSkus(IAPProductIds) {
      const items = [];
      const iter = IAPProductIds[Symbol.iterator]();
      const nextResult = iter.next();
      if (iter === undefined) {
        let resolved;
        if (0 === items.length) {
          resolved = Promise.resolve([]);
        } else {
          resolved = closure_1_24(items, constants.GIFT, true);
        }
        return resolved;
      } else {
        try {
          obj = closure_1_0(closure_1_2[11]);
          const planIdForGift = obj.getPlanIdForGift(tmp2);
          items.push(nextResult);
        } catch (err) {
        }
      }
    }
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        let IAPProductIds;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            closure_2 = tmp;
            value = tmp5;
            IAPProductIds = closure_0;
            if (closure_0 === undefined) {
              IAPProductIds = ProductIds.IAPProductIds;
            }
            value = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            if (null != IAPProductIds) {
              if (0 !== IAPProductIds.length) {
                const obj12 = closure_130_1(closure_130_2[14]);
                obj12.dispatch({ type: "GPLAY_FETCH_IN_APP_SKUS_START" });
                c4 = 1;
                const obj13 = closure_130_0(closure_130_2[15]);
                if (obj13.isGooglePlayBillingSupported()) {
                  c5 = 4;
                  c6 = 1;
                  const obj6 = { value: closure_130_21.getIAPSkus(IAPProductIds), done: false };
                  return obj6;
                } else {
                  c5 = 3;
                  c6 = 1;
                  const obj7 = { value: fetchDesktopInAppSkus(IAPProductIds), done: false };
                  return obj7;
                }
              }
            }
            c6 = 3;
            return { value: [], done: true };
          }
        } else if (2 === c5) {
          c4 = 0;
          closure_2 = closure_3;
          const obj5 = closure_130_1(closure_130_2[14]);
          obj5.dispatch({ type: "GPLAY_FETCH_IN_APP_SKUS_FAILED" });
          throw closure_2;
        } else {
          if (3 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              return { value, done: true };
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          }
          const obj10 = { type: "GPLAY_IN_APP_SKUS_LOADED", skus: items, skusType: closure_130_17.IN_APP };
          items = [];
          const dispatch = closure_130_1(closure_130_2[14]).dispatch;
          closure_130_1(closure_130_2[14]);
          HermesBuiltin.arraySpread(items, value, 0);
          dispatch(obj10);
          c4 = 0;
          c6 = 3;
          return { value, done: true };
        }
      } catch (tmp30) {
        closure_3 = tmp30;
        if (0 === c4) {
          c6 = 3;
          throw tmp30;
        } else {
          c5 = 2;
        }
      }
    }
  })();
  let nextResult = iter.next();
  return iter;
});
const loadInAppSkus = "loadInAppSkus";
const importDefaultResultResult1 = _asyncToGenerator(f101363);
_asyncToGenerator(async (arg0, value) => {
  if (c0 === 2) {
    c0 = 3;
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
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          const items = [importDefaultResultResult(), importDefaultResultResult1()];
          c1 = 1;
          c0 = 1;
          const obj4 = { value: all(items), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c0 = 3;
        return { value: "IconComponent", done: "+51" };
      }
    } catch (tmp7) {
      c0 = 3;
      throw tmp7;
    }
  }
});
const loadSkus = "loadSkus";
const importDefaultResultResult2 = _asyncToGenerator(f101363);
let tmp11 = new BackoffDefault(5000, 300000, true);
let closure_29 = tmp11;
let c30 = 0;
let c31 = null;
let items = [, , , ];
({ BILLING_UNAVAILABLE: arr[0], DEVELOPER_ERROR: arr[1], FEATURE_NOT_SUPPORTED: arr[2], ITEM_UNAVAILABLE: arr[3] } = Constants.GPlayBillingResult);
let set = new Set(items.map(String));
const map = new Map();
map1 = new Map();
const set1 = new Set();
const tmp16 = new BackoffDefault(1000, 60000);
let closure_36 = tmp16;
_asyncToGenerator(async (arg0, value) => {
  let obj6;
  let v1;
  let closure_1 = value;
  if (c8 === 2) {
    c8 = 3;
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
    let c6;
    try {
      let message;
      let succeededOnlyFields;
      let purchaseResult;
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          message = tmp;
          succeededOnlyFields = undefined;
          closure_3 = undefined;
          closure_1 = state.getState().analyticsByProductId[product_id];
          c6 = 1;
          purchaseResult = BillingManager.purchase(product_id, closure_1);
          c7 = 2;
          c8 = 1;
          const obj4 = { value: purchaseResult, done: false };
          return obj4;
        }
      } else if (1 === tmp4) {
        c6 = 0;
        message = closure_5;
        const obj5 = { tags: obj6 };
        obj6 = { productId: product_id };
        purchaseResult = captureGPlayBillingException(message, obj5);
        succeededOnlyFields = closure_1;
        if (closure_1 == null) {
          succeededOnlyFields = {};
        }
        succeededOnlyFields = succeededOnlyFields.succeededOnlyFields;
        closure_3 = c7(succeededOnlyFields, purchaseResult);
        const obj7 = { location: "purchase", product_id, error: message.message };
        const track = closure_1(succeededOnlyFields[19]).track;
        const GPLAY_PURCHASE_FAILED = constants.GPLAY_PURCHASE_FAILED;
        const tmp23 = closure_1(succeededOnlyFields[19]);
        const merged = Object.assign(closure_3);
        purchaseResult = track(GPLAY_PURCHASE_FAILED, obj7);
        throw message;
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c6 = 0;
        c8 = 3;
        return { value: "IconComponent", done: "+51" };
      }
    } catch (tmp35) {
      closure_5 = tmp35;
      if (0 === c6) {
        c8 = 3;
        throw tmp35;
      } else {
        c7 = 1;
      }
    }
  }
});
let _require = _asyncToGenerator(async (arg0, value) => {
  let closure_0;
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
      return { value: "IconComponent", done: "+51" };
    }
  } else {
    let c3;
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          let closure_1 = tmp;
          _require = tmp4;
          const obj9 = BillingPlatformUtils;
          if (obj9.isGooglePlayBillingSupported()) {
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj5 = { value: BillingManager.getUserCountry(), done: false };
            return obj5;
          } else {
            logger.info("[getUserCountry] Quest: Skipping Google Play country lookup");
            c5 = 3;
            return { value: null, done: true };
          }
        }
      } else if (1 === c4) {
        c3 = 0;
        _require = closure_2;
        let code;
        if (_require != null) {
          code = _require.code;
        }
        const _String = String;
        if (code !== String(closure_129_16.BILLING_CLIENT_NOT_READY)) {
          let hasItem;
          if (_require != null) {
            const message = _require.message;
            if (message != null) {
              hasItem = message.includes("max attempts exceeded");
            }
          }
          if (true !== hasItem) {
            let hasItem1;
            if (_require != null) {
              const message2 = _require.message;
              if (message2 != null) {
                hasItem1 = message2.includes("returned null");
              }
            }
            if (true !== hasItem1) {
              const obj6 = { tags: { source: "getUserCountry" } };
              const obj3 = closure_129_0(closure_129_2[23]);
              const result = obj3.captureBillingException(_require, obj6);
            }
            c5 = 3;
            return { value: null, done: true };
          }
        }
        let message1;
        const warn = closure_129_22.warn;
        if (_require != null) {
          message1 = _require.message;
        }
        const obj7 = { error: message1 };
        warn("[getUserCountry] Failed to get user country from Google Play Billing", obj7);
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        c3 = 0;
        c5 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp28) {
      closure_2 = tmp28;
      if (0 === c3) {
        c5 = 3;
        throw tmp28;
      } else {
        c4 = 1;
      }
    }
  }
});
let c1 = true;
const getUserCountry = "getUserCountry";
const importDefaultResultResult3 = _asyncToGenerator(f101363);
const items1 = [, , , , ];
({ SERVICE_DISCONNECTED: arr2[0], SERVICE_TIMEOUT: arr2[1], BILLING_UNAVAILABLE: arr2[2], BILLING_CLIENT_NOT_READY: arr2[3], DEVELOPER_ERROR: arr2[4] } = Constants.GPlayBillingResult);
const set2 = new Set(items1.map(String));
const items2 = [, , ];
({ FEATURE_NOT_SUPPORTED: arr3[0], SERVICE_UNAVAILABLE: arr3[1], NETWORK_ERROR: arr3[2] } = Constants.GPlayBillingResult);
const set3 = new Set(items2.map(String));
let result = size.fileFinishedImporting("actions/native/GPlayActionCreators.tsx");
const loadSubscriptionSkus_export = importDefaultResultResult;
const loadInAppSkus_export = importDefaultResultResult1;
const loadSkus_export = importDefaultResultResult2;
const getUserCountry_export = importDefaultResultResult3;

export { loadSubscriptionSkus_export as loadSubscriptionSkus };
export { loadInAppSkus_export as loadInAppSkus };
export { loadSkus_export as loadSkus };
export const ensureSkusLoaded = function ensureSkusLoaded(items) {
  let product;
  let resolved1;
  _require = items;
  const tmp = _require;
  obj = require("PlatformUtils");
  if (obj.isAndroid()) {
    let resolved;
    if (items.every((item) => null != product.getProduct(item))) {
      resolved = Promise.resolve();
    } else if (null != closure_31) {
      resolved = closure_31;
    } else {
      let _Date = Date;
      if (Date.now() < c30) {
        resolved = Promise.resolve();
      } else {
        let obj3 = NetworkUtilsDefault;
        let isOnlineResult = obj3.isOnline();
        if (isOnlineResult) {
          let isReadyResult;
          const tmpResult = tmp(4782);
          if (tmpResult.isGooglePlayBillingSupported()) {
            isReadyResult = IAPStore.isReady();
          } else {
            isReadyResult = AuthenticationStore.isAuthenticated();
          }
          isOnlineResult = isReadyResult;
        }
        if (isOnlineResult) {
          const tmp13 = (async (arg0, value) => {
            const f154229 = (item) => null != product.getProduct(item);
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
                return { value: "IconComponent", done: "+51" };
              }
            } else {
              let c3;
              try {
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
                    let closure_1 = tmp;
                    let closure_0 = tmp;
                    c3 = 1;
                    c4 = 2;
                    c5 = 1;
                    const obj4 = { value: importDefaultResultResult2(), done: false };
                    return obj4;
                  }
                } else if (1 === tmp4) {
                  c3 = 0;
                  c31 = null;
                  const tmp19 = closure_2;
                  if (closure_129_0.every(f154229)) {
                    closure_1_29.succeed();
                    let closure_30 = 0;
                  } else {
                    const _Date3 = Date;
                    const timestamp = Date.now();
                    closure_30 = timestamp + closure_1_29.fail();
                  }
                  throw tmp19;
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c31 = null;
                  if (closure_129_0.every(f154229)) {
                    closure_1_29.succeed();
                    closure_30 = 0;
                  } else {
                    const _Date2 = Date;
                    const timestamp1 = Date.now();
                    closure_30 = timestamp1 + closure_1_29.fail();
                  }
                  c5 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  c3 = 0;
                  c31 = null;
                  if (closure_129_0.every(f154229)) {
                    closure_1_29.succeed();
                    closure_30 = 0;
                  } else {
                    const _Date = Date;
                    const timestamp2 = Date.now();
                    closure_30 = timestamp2 + closure_1_29.fail();
                  }
                  c5 = 3;
                  return { value: "IconComponent", done: "+51" };
                }
              } catch (tmp28) {
                closure_2 = tmp28;
                if (0 === c3) {
                  c5 = 3;
                  throw tmp28;
                } else {
                  c4 = 1;
                }
              }
            }
          })();
          closure_31 = tmp13;
          resolved = tmp13;
        } else {
          resolved = Promise.resolve();
        }
      }
    }
    resolved1 = resolved;
  } else {
    const tmp3 = globalThis;
    resolved1 = Promise.resolve();
  }
  return resolved1;
};
export const retainInAppSkus = function retainInAppSkus(c0) {
  let allPromises;
  let product;
  _require = c0;
  let item = c0.forEach((item) => {
    set = map1.set;
    let num = map1.get(item);
    if (num == null) {
      num = 0;
    }
    return set(item, num + 1);
  });
  set = new Set(c0);
  const items = [...set];
  const found = items.filter((item) => {
    const hasItem = map.has(item);
    const tmp2 = !hasItem && null == product.getProduct(item);
    return tmp2;
  });
  let tmp3 = found.length > 0;
  if (tmp3) {
    obj = NetworkUtilsDefault;
    let isOnlineResult = obj.isOnline();
    if (isOnlineResult) {
      let isReadyResult;
      let tmp7 = _require;
      const obj2 = require("BillingPlatformUtils");
      if (obj2.isGooglePlayBillingSupported()) {
        isReadyResult = IAPStore.isReady();
      } else {
        isReadyResult = AuthenticationStore.isAuthenticated();
      }
      isOnlineResult = isReadyResult;
    }
    tmp3 = isOnlineResult;
  }
  if (tmp3) {
    const promise = importDefaultResultResult1(found);
    let closure_1 = promise.then(() => {
      closure_1_36.succeed();
      const tmp2 = set1.size > 0 && obj.fails < 5;
      if (tmp2) {
        closure_1_36.fail(retryFailedInAppSkus);
      }
    }, (code) => {
      code = undefined;
      if (code != null) {
        code = code.code;
      }
      if (code === String(constants.BILLING_CLIENT_NOT_READY)) {
        const item = found.forEach((item) => set.delete(item));
      } else {
        let code1;
        has = has.has;
        if (code != null) {
          code1 = code.code;
        }
        if (!has(code1)) {
          const item1 = found.forEach((item) => set2.add(item));
          const tmp7 = set1.size > 0 && closure_2_36.fails < 5;
          if (tmp7) {
            closure_2_36.fail(retryFailedInAppSkus);
          }
        }
      }
    });
    let item1 = found.forEach((item) => map.set(item, closure_1));
  }
  const obj3 = {
    settled: allPromises.then(() => {

    }),
    release() {
      return closure_0.forEach((item) => {
        let num = map.get(item);
        if (num == null) {
          num = 0;
        }
        const diff = num - 1;
        if (0 < diff) {
          const result = obj.set(item, diff);
        } else {
          map.delete(item);
        }
      });
    }
  };
  allPromises = Promise.all(c0.map((item) => map.get(item)));
  return obj3;
};
export const loadUserCountry = function loadUserCountry() {
  return obj(...arguments);
};
export const purchase = function purchase() {
  return closure_0(...arguments);
};
export const subscribe = function subscribe() {
  return obj(...arguments);
};
export const verifyPurchase = function verifyPurchase() {
  return obj(...arguments);
};
export const sendPaymentCompleteAnalytics = function sendPaymentCompleteAnalytics(purchase) {
  const tmp = state.getState().analyticsByProductId[purchase.productId];
  if (null != tmp) {
    const succeededOnlyFields = tmp.succeededOnlyFields;
    const tmp4 = _objectWithoutProperties(tmp, closure_4);
    obj = AnalyticsUtilsDefault;
    obj.track(map1.PAYMENT_FLOW_COMPLETED, tmp4);
    const obj2 = {};
    const track = AnalyticsUtilsDefault.track;
    const PAYMENT_FLOW_SUCCEEDED = map1.PAYMENT_FLOW_SUCCEEDED;
    AnalyticsUtilsDefault;
    const merged = Object.assign(tmp4);
    const merged1 = Object.assign(succeededOnlyFields);
    track(PAYMENT_FLOW_SUCCEEDED, obj2);
    React4(purchase.productId);
  }
};
export const updatePendingDowngrade = function updatePendingDowngrade(c0, c6, c7, c5) {
  let obj4;
  let tmp;
  let tmp2;
  const items = [IAPStore.getProduct(c0), IAPStore.getProduct(c6)];
  [tmp, tmp2] = items;
  if (null != tmp2) {
    if (null != tmp) {
      if (null != tmp2) {
        if (null != tmp) {
          if (null != tmp2.billingPeriod) {
            if (null != tmp.billingPeriod) {
              const price = tmp.price;
              BillingUtils;
            }
          }
        }
      }
      const obj3 = { type: "GPLAY_UPDATE_PENDING_DOWNGRADE", pendingDowngrade: obj4 };
      obj4 = { purchaseToken: c7, subscriptionId: c5, newSubscriptionSkuId: tmp.identifier };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
    }
  }
};
export const downgradeSubscription = function downgradeSubscription(pendingDowngrade) {
  let newSubscriptionSkuId;
  let purchaseToken;
  let subscriptionId;
  ({ purchaseToken, subscriptionId, newSubscriptionSkuId } = pendingDowngrade);
  const HTTP = HTTPUtils.HTTP;
  const request = { url: constants2.DOWNGRADE_SUBSCRIPTION, body: { purchase_token: purchaseToken, subscription_id: subscriptionId, subscription_sku_id: newSubscriptionSkuId }, rejectWithError: false };
  return HTTP.post(request);
};
export { getUserCountry_export as getUserCountry };
