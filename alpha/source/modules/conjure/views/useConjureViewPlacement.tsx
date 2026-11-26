// Module ID: 18481
// Function ID: 18482
// Name: useConjureViewPlacement
// Dependencies: [32, 19, 4892, 11475, 504, 18465, 1112, 4245, 7708, 2]
// Exports: default

// Module 18481 (useConjureViewPlacement)
import intl5 from "intl" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import ConjureViewsTypes from "ConjureViewsTypes" /* 7708 */;
import conjureViewPlacement from "conjureViewPlacement" /* 18465 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, channel, closure_5, dependencyMap, id;

let _slicedToArray = _slicedToArray_mod;
let result = size.fileFinishedImporting("modules/conjure/views/useConjureViewPlacement.tsx");

export default function useConjureViewPlacement(install_scope, views) {
  let K90CLK;
  let appChannels;
  let draft;
  let formatToPlainString;
  let formatToPlainString2Result;
  let formatToPlainString3Result;
  let mapped;
  let mapped1;
  let obj6;
  let personal;
  let previewAppChannels;
  let tmp11;
  let tmp18;
  let tmp7Result2;
  function channelName(arg0) {
    return closure_1_5[arg0];
  }
  _require = views;
  views = undefined;
  if (views != null) {
    views = views.views;
  }
  if (views == null) {
    views = null;
  }
  dependencyMap = tmp2;
  let isConjureLiveResult = null != views;
  if (isConjureLiveResult) {
    let obj = require("ConjurePublishTypes");
    isConjureLiveResult = obj.isConjureLive(views.publishState);
  }
  _slicedToArray = isConjureLiveResult;
  let appChannels1;
  if (views != null) {
    appChannels1 = views.mounts.appChannels;
  }
  let obj2 = require("get initialized");
  let items = [closure_5];
  let items1 = [appChannels1];
  closure_5 = obj2.useStateFromStoresObject(items, () => {
    let items = appChannels1;
    const _Object = Object;
    if (appChannels1 == null) {
      items = [];
    }
    return fromEntries(items.map((id) => {
      id = id.id;
      const items = [id, ];
      channel = channel.getChannel(id);
      let name;
      if (channel != null) {
        name = channel.name;
      }
      items[1] = name;
      return items;
    }));
  }, items1);
  [draft, tmp11] = appChannels1.useState(() => {
    let previewAppChannels;
    let result = null;
    if (null != views) {
      const obj = { personal, live: _slicedToArray, channelName, buildAppChannels: previewAppChannels };
      previewAppChannels = undefined;
      const initialConjureViewPlacement = conjureViewPlacement.initialConjureViewPlacement;
      conjureViewPlacement;
      if (views != null) {
        previewAppChannels = views.previewAppChannels;
      }
      result = initialConjureViewPlacement(tmp, obj);
    }
    return result;
  });
  let closure_7 = tmp11;
  const tmp12 = null == draft && null != views;
  if (tmp12) {
    const obj4 = { personal: "user" === install_scope.install_scope, live: isConjureLiveResult, channelName, buildAppChannels: previewAppChannels };
    previewAppChannels = undefined;
    let initialConjureViewPlacement = tmp7(18465).initialConjureViewPlacement;
    require("conjureViewPlacement");
    if (views != null) {
      previewAppChannels = views.previewAppChannels;
    }
    tmp11(initialConjureViewPlacement(views, obj4));
  }
  let views1;
  if (views != null) {
    views1 = views.views;
  }
  let items2 = [draft, views1];
  const memo = obj3.useMemo(() => {
    let result = null;
    if (null != first) {
      result = null;
      if (null != views1) {
        const obj = conjureViewPlacement;
        result = obj.checkConjureViewPlacement(tmp, tmp3);
      }
    }
    return result;
  }, items2);
  let closure_10 = obj3.useCallback((arg0) => {
    let closure_0 = arg0;
    return closure_7((arg0) => {
      let tmp = arg0;
      if (null != arg0) {
        tmp = closure_0(arg0);
      }
      return tmp;
    });
  }, []);
  if (null != draft) {
    if (null != views1) {
      if (null != memo) {
        function isMissing(activity) {
          let hasItem = null != activity;
          if (hasItem) {
            const missingViews = memo.missingViews;
            hasItem = missingViews.includes(activity);
          }
          return hasItem;
        }
        function viewChoices(value) {
          let intl;
          let obj2;
          if (null != value) {
            if (typeof isMissing === "function") {
              let items2;
              let hasItem = null != value;
              if (hasItem) {
                const missingViews = memo.missingViews;
                hasItem = missingViews.includes(value);
              }
              if (hasItem) {
                const obj = { value, label: intl.formatToPlainString(_modDef4245.qRfT8T, obj2), missing: true };
                intl = intl5.intl;
                const items = [obj];
                items2 = items;
                obj2 = { view: value };
              }
              const items1 = [];
              const arraySpreadResult = HermesBuiltin.arraySpread(items1, items2, 0);
              HermesBuiltin.arraySpread(items1, views1.map((id) => ({ value: id.id, label: id.name, missing: false })), arraySpreadResult);
              return items1;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          items2 = [];
        }
        const channelErrors = memo.channelErrors;
        const obj5 = {
          views: views1,
          personal: "user" === install_scope.install_scope,
          draft,
          surfaceChoices(activity) {
                  let intl;
                  const obj = { value: null, label: intl.string(_modDef4245.tkc5qm), missing: false };
                  intl = intl5.intl;
                  const items = [obj, ...viewChoices(activity)];
                  return items;
                },
          channelChoices(view) {
                  return viewChoices(view);
                },
          setActivity(arg0) {
                  let closure_0 = arg0;
                  return closure_10((arg0) => {
                    const obj = { activity };
                    const merged = Object.assign(arg0);
                    return obj;
                  });
                },
          setVoiceChannel(arg0) {
                  let closure_0 = arg0;
                  return closure_10((arg0) => {
                    const obj = { voiceChannel };
                    const merged = Object.assign(arg0);
                    return obj;
                  });
                },
          addAppChannel() {
                  return closure_10((appChannels) => {
                    const obj = views(personal[5]);
                    return obj.addConjureViewAppChannel(appChannels, views1);
                  });
                },
          removeAppChannel(key) {
                  let closure_0 = key;
                  return closure_10((appChannels) => {
                    const f140041 = () => null;
                    const obj = {
                      appChannels: appChannels.flatMap((key) => {
                        let tmp = key;
                        if (key.key === closure_0) {
                          let items = f140043(key);
                          if (items == null) {
                            items = [];
                          }
                          tmp = items;
                        }
                        return tmp;
                      })
                    };
                    const merged = Object.assign(appChannels);
                    appChannels = appChannels.appChannels;
                    return obj;
                  });
                },
          renameAppChannel(key, arg1) {
                  let closure_0 = key;
                  let closure_1 = arg1;
                  return closure_10((appChannels) => {
                    const f140042 = (arg0) => {
                      const obj = { name: f140042 };
                      const merged = Object.assign(arg0);
                      return obj;
                    };
                    let obj = {
                      appChannels: appChannels.flatMap((key) => {
                        let tmp = key;
                        if (key.key === closure_0) {
                          let items = f140043(key);
                          if (items == null) {
                            items = [];
                          }
                          tmp = items;
                        }
                        return tmp;
                      })
                    };
                    let merged = Object.assign(appChannels);
                    appChannels = appChannels.appChannels;
                    return obj;
                  });
                },
          setAppChannelView(key, arg1) {
                  let closure_0 = key;
                  let closure_1 = arg1;
                  return closure_10((appChannels) => {
                    const f140043 = (arg0) => {
                      const obj = { view: f140043 };
                      const merged = Object.assign(arg0);
                      return obj;
                    };
                    let obj = {
                      appChannels: appChannels.flatMap((key) => {
                        let tmp = key;
                        if (key.key === closure_0) {
                          let items = f140043(key);
                          if (items == null) {
                            items = [];
                          }
                          tmp = items;
                        }
                        return tmp;
                      })
                    };
                    let merged = Object.assign(appChannels);
                    appChannels = appChannels.appChannels;
                    return obj;
                  });
                },
          canAddAppChannel: tmp18,
          hasExistingAppChannel: appChannels.some((existing) => null != existing.existing),
          appChannelLimitHint: formatToPlainString(K90CLK, obj6),
          channelError(key) {
                  const value = channelErrors.get(key);
                  if ("empty" === value) {
                    const intl4 = intl5.intl;
                    return intl4.string(_modDef4245["6Eeo8t"]);
                  } else if ("too_long" === value) {
                    const intl3 = intl5.intl;
                    const formatToPlainString = intl3.formatToPlainString;
                    const obj = { max: ConjureViewsTypes.CONJURE_MAX_VIEW_APP_CHANNEL_NAME_LENGTH };
                    const v4dSq3U = _modDef4245["4dSq3U"];
                    return formatToPlainString(v4dSq3U, obj);
                  } else if ("unusable" === value) {
                    const intl2 = intl5.intl;
                    return intl2.string(_modDef4245.CUlTpp);
                  } else if ("duplicate" === value) {
                    const intl = intl5.intl;
                    return intl.string(_modDef4245.k4F0ZO);
                  } else {
                    return null;
                  }
                },
          missingNotice: formatToPlainString2Result,
          unplacedNotice: formatToPlainString3Result,
          isMissing,
          blocked: memo.blocked,
          wire: tmp7Result2.conjureViewPlacementWire(draft)
        };
        tmp18 = !tmp2;
        if (tmp18) {
          tmp18 = views1.length > 0;
        }
        if (tmp18) {
          tmp18 = draft.appChannels.length < tmp7(7708).CONJURE_MAX_VIEW_APP_CHANNELS;
        }
        appChannels = draft.appChannels;
        let intl = tmp7(1112).intl;
        formatToPlainString = intl.formatToPlainString;
        obj6 = { count: require("ConjureViewsTypes").CONJURE_MAX_VIEW_APP_CHANNELS };
        K90CLK = views(4245).K90CLK;
        formatToPlainString2Result = null;
        if (0 !== memo.missingViews.length) {
          function viewName(item) {
            let closure_0 = item;
            const found = views1.find((id) => id.id === closure_0);
            let name;
            if (found != null) {
              name = found.name;
            }
            if (name == null) {
              name = item;
            }
            return name;
          }
          let intl2 = tmp7(1112).intl;
          const formatToPlainString2 = intl2.formatToPlainString;
          let missingViews = memo.missingViews;
          const obj7 = { views: mapped.join(", ") };
          const prop = tmp19(4245)["4k/FdZ"];
          mapped = missingViews.map(viewName);
          formatToPlainString2Result = formatToPlainString2(prop, obj7);
        }
        formatToPlainString3Result = null;
        if (0 !== memo.unplacedViews.length) {
          let intl3 = tmp7(1112).intl;
          const formatToPlainString3 = intl3.formatToPlainString;
          const unplacedViews = memo.unplacedViews;
          const obj8 = { views: mapped1.join(", ") };
          const v9G0FW8 = tmp19(4245)["9G0FW8"];
          mapped1 = unplacedViews.map((name) => name.name);
          formatToPlainString3Result = formatToPlainString3(v9G0FW8, obj8);
        }
        tmp7Result2 = require("conjureViewPlacement");
        return obj5;
      }
    }
  }
  return null;
};
