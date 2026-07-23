// Module ID: 11513
// Function ID: 89686
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 27, 4018, 33, 4130, 689, 4041, 11514, 11523, 11543, 1557, 5464, 11549, 11550, 11579, 4337, 4037, 5094, 1212, 2230, 9122, 5087, 11586, 11588, 11596, 11602, 11612, 11621, 2]
// Exports: default

// Module 11513 (_createForOfIteratorHelperLoose)
import result from "result";
import get_ActivityIndicator from "GuildPowerupsBoostButton";
import BoostedGuildTiers from "BoostedGuildTiers";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
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
({ ScrollView: closure_4, View: closure_5 } = get_ActivityIndicator);
({ BoostInfoType: closure_6, GuildPowerupType: closure_7 } = BoostedGuildTiers);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerContainer = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj2 = { flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderStyle: "solid", borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.boostInfoContainer = obj2;
let obj3 = { width: 1, height: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.boostInfoSeparator = obj3;
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.scrollView = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_96 };
let obj5 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, position: "absolute", bottom: 0, left: 0, right: 0 };
_createForOfIteratorHelperLoose.boostButtonContainer = obj5;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_96 };
const result = require("BoostedGuildTiers").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsModal.tsx");

export default function GuildPowerupsModal(guildId) {
  let analyticsLocation;
  let autoOpenPerkId;
  let available;
  let spent;
  let total;
  guildId = guildId.guildId;
  ({ analyticsLocation, autoOpenPerkId } = guildId);
  const autoOpenRequestId = guildId.autoOpenRequestId;
  let buildGuildPowerupsSections;
  let closure_4;
  let obj = guildId(autoOpenRequestId[6]);
  const gameServerEnabled = obj.useGameServerEnabled(guildId, "GuildPowerupsModal");
  autoOpenPerkId(autoOpenRequestId[7])(guildId);
  let obj1 = guildId(autoOpenRequestId[8]);
  const autoDismissGuildPowerupsNotifications = obj1.useAutoDismissGuildPowerupsNotifications(guildId);
  autoOpenPerkId(autoOpenRequestId[9])(guildId, "GuildPowerupsModal", null != autoOpenPerkId);
  let tmp5 = _createForOfIteratorHelperLoose();
  if (null != analyticsLocation) {
    const items = [analyticsLocation];
    let items1 = items;
  } else {
    items1 = [];
  }
  let obj2 = guildId(autoOpenRequestId[12]);
  buildGuildPowerupsSections = obj2.useBuildGuildPowerupsSections(guildId, gameServerEnabled);
  closure_4 = buildGuildPowerupsSections.useRef(undefined);
  const items2 = [autoOpenPerkId, autoOpenRequestId, guildId, buildGuildPowerupsSections];
  const effect = buildGuildPowerupsSections.useEffect(() => {
    if (null != autoOpenPerkId) {
      if (null != autoOpenRequestId) {
        if (ref.current !== autoOpenRequestId) {
          const tmp23 = outer1_11(buildGuildPowerupsSections);
          const iter5 = tmp23();
          let iter4 = iter5;
          if (!iter5.done) {
            while (true) {
              let tmp = outer1_11;
              let tmp2 = outer1_11(iter4.value.listings);
              let iter = tmp2();
              if (!iter.done) {
                while (true) {
                  let value = iter.value;
                  if ("singlePerk" === value.type) {
                    let tmp3 = autoOpenPerkId;
                    if (value.powerup.skuId === autoOpenPerkId) {
                      break;
                    }
                  }
                  if ("multiPerk" === value.type) {
                    let tmp4 = autoOpenPerkId;
                    if (value.group !== autoOpenPerkId) {
                      let powerups = value.powerups;
                    }
                    let tmp6 = ref;
                    let tmp7 = autoOpenRequestId;
                    ref.current = autoOpenRequestId;
                    let tmp8 = autoOpenPerkId;
                    let tmp9 = autoOpenRequestId;
                    let num = 14;
                    let obj = {};
                    let tmp10 = guildId;
                    obj.guildId = guildId;
                    obj.listing = value;
                    obj.onDismiss = function onDismiss() {
                      return autoOpenPerkId(autoOpenRequestId[15]).pop();
                    };
                    let tmp11 = autoOpenPerkId(autoOpenRequestId[14])(obj);
                  }
                  let iter2 = tmp2();
                  iter = iter2;
                  let tmp5 = value;
                  continue;
                }
                let tmp12 = ref;
                let tmp13 = autoOpenRequestId;
                ref.current = autoOpenRequestId;
                let tmp14 = autoOpenPerkId;
                let tmp15 = autoOpenRequestId;
                let num2 = 13;
                obj = {};
                let tmp16 = guildId;
                obj.guildId = guildId;
                obj.powerup = value.powerup;
                let tmp17 = autoOpenPerkId(autoOpenRequestId[13])(obj);
              }
              let iter3 = tmp23();
              iter4 = iter3;
            }
          }
        }
      }
    }
  }, items2);
  const callback = buildGuildPowerupsSections.useCallback(() => {
    let arr = autoOpenPerkId(autoOpenRequestId[15]);
    arr = arr.pop();
  }, []);
  let tmp6 = autoOpenPerkId(autoOpenRequestId[11]);
  ({ available, spent, total } = autoOpenPerkId(autoOpenRequestId[16])(guildId));
  obj = { value: tmp6(...items1).analyticsLocations };
  obj = { style: tmp5.container };
  obj1 = { style: tmp5.headerContainer };
  obj2 = {};
  let intl = guildId(autoOpenRequestId[18]).intl;
  obj2.title = intl.string(autoOpenPerkId(autoOpenRequestId[19]).hjvcLO);
  obj2.headerTitle = function headerTitle() {
    const obj = {};
    const intl = guildId(autoOpenRequestId[18]).intl;
    obj.title = intl.string(autoOpenPerkId(autoOpenRequestId[19]).hjvcLO);
    return outer1_8(guildId(autoOpenRequestId[20]).GenericHeaderTitle, obj);
  };
  obj2.headerTitleAlign = "center";
  let obj7 = guildId(autoOpenRequestId[21]);
  obj2.headerLeft = obj7.getHeaderCloseButton(callback);
  obj1.children = callback(guildId(autoOpenRequestId[17]).Header, obj2);
  const items3 = [callback(closure_5, obj1), , ];
  const obj3 = { contentContainerStyle: tmp5.scrollView };
  const obj4 = { style: tmp5.boostInfoContainer };
  const items4 = [callback(autoOpenPerkId(autoOpenRequestId[22]), { count: available, type: constants.AVAILABLE }), callback(closure_5, { style: tmp5.boostInfoSeparator }), , , ];
  obj7 = { count: spent, type: constants.SPENT };
  items4[2] = callback(autoOpenPerkId(autoOpenRequestId[22]), obj7);
  items4[3] = callback(closure_5, { style: tmp5.boostInfoSeparator });
  items4[4] = callback(autoOpenPerkId(autoOpenRequestId[22]), { count: total, type: constants.TOTAL });
  obj4.children = items4;
  const items5 = [
    callback2(closure_5, obj4),
    callback(autoOpenPerkId(autoOpenRequestId[23]), { guildId }),
    buildGuildPowerupsSections.map((type) => {
      type = type.type;
      if (outer1_7.LEVEL === type) {
        let obj = { guildId, listings: type.listings };
        return outer1_8(autoOpenPerkId(autoOpenRequestId[24]), obj, type.type);
      } else if (outer1_7.PERK === type) {
        obj = { guildId, listings: type.listings };
        return outer1_8(autoOpenPerkId(autoOpenRequestId[25]), obj, type.type);
      } else {
        return null;
      }
    }),
    callback(autoOpenPerkId(autoOpenRequestId[26]), { guildId })
  ];
  obj3.children = items5;
  items3[1] = callback2(closure_4, obj3);
  const obj5 = { count: available, type: constants.AVAILABLE };
  const obj6 = { style: tmp5.boostInfoSeparator };
  const obj8 = { style: tmp5.boostInfoSeparator };
  const obj9 = { count: total, type: constants.TOTAL };
  let tmp9 = autoOpenPerkId(autoOpenRequestId[16])(guildId);
  const items6 = [tmp5.boostButtonContainer, { paddingBottom: autoOpenPerkId(autoOpenRequestId[10])().bottom }];
  items3[2] = callback(closure_5, { style: items6, children: callback(guildId(autoOpenRequestId[27]).GuildPowerupsBoostButton, { guildId }) });
  obj.children = items3;
  obj.children = callback2(closure_5, obj);
  return callback(guildId(autoOpenRequestId[11]).AnalyticsLocationProvider, obj);
};
