// Module ID: 11502
// Function ID: 89623
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 11502 (_createForOfIteratorHelperLoose)
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
let closure_3 = importAll(dependencyMap[0]);
({ ScrollView: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ BoostInfoType: closure_6, GuildPowerupType: closure_7 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
const tmp4 = arg1(dependencyMap[3]);
obj.headerContainer = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16, paddingTop: importDefault(dependencyMap[5]).space.PX_8 };
const obj2 = { "Null": 2046820991, "Null": 1174405381, "Null": 66666, "Null": 66666, borderColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE, marginBottom: importDefault(dependencyMap[5]).space.PX_16 };
obj.boostInfoContainer = obj2;
const obj3 = { "Null": false, "Null": false, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
obj.boostInfoSeparator = obj3;
const obj1 = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16, paddingTop: importDefault(dependencyMap[5]).space.PX_8 };
obj.scrollView = { paddingBottom: importDefault(dependencyMap[5]).space.PX_96 };
const obj4 = { paddingBottom: importDefault(dependencyMap[5]).space.PX_96 };
obj.boostButtonContainer = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16 };
let closure_10 = obj.createStyles(obj);
const obj5 = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16 };
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsModal.tsx");

export default function GuildPowerupsModal(guildId) {
  let analyticsLocation;
  let autoOpenPerkId;
  let available;
  let spent;
  let total;
  guildId = guildId.guildId;
  const arg1 = guildId;
  ({ analyticsLocation, autoOpenPerkId } = guildId);
  const importDefault = autoOpenPerkId;
  const autoOpenRequestId = guildId.autoOpenRequestId;
  const dependencyMap = autoOpenRequestId;
  let React;
  let closure_4;
  let obj = arg1(dependencyMap[6]);
  const gameServerEnabled = obj.useGameServerEnabled(guildId, "GuildPowerupsModal");
  importDefault(dependencyMap[7])(guildId);
  let obj1 = arg1(dependencyMap[8]);
  const autoDismissGuildPowerupsNotifications = obj1.useAutoDismissGuildPowerupsNotifications(guildId);
  importDefault(dependencyMap[9])(guildId, "GuildPowerupsModal", null != autoOpenPerkId);
  const tmp5 = callback3();
  if (null != analyticsLocation) {
    const items = [analyticsLocation];
    let items1 = items;
  } else {
    items1 = [];
  }
  let obj2 = arg1(dependencyMap[12]);
  const buildGuildPowerupsSections = obj2.useBuildGuildPowerupsSections(guildId, gameServerEnabled);
  React = buildGuildPowerupsSections;
  closure_4 = React.useRef(undefined);
  const items2 = [autoOpenPerkId, autoOpenRequestId, guildId, buildGuildPowerupsSections];
  const effect = React.useEffect(() => {
    if (null != autoOpenPerkId) {
      if (null != autoOpenRequestId) {
        if (ref.current !== autoOpenRequestId) {
          const tmp23 = callback2(buildGuildPowerupsSections);
          const iter5 = tmp23();
          let iter4 = iter5;
          if (!iter5.done) {
            while (true) {
              let tmp = callback2;
              let tmp2 = callback2(iter4.value.listings);
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
                      return callback(closure_2[15]).pop();
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
  const callback = React.useCallback(() => {
    let arr = autoOpenPerkId(autoOpenRequestId[15]);
    arr = arr.pop();
  }, []);
  const tmp6 = importDefault(dependencyMap[11]);
  ({ available, spent, total } = importDefault(dependencyMap[16])(guildId));
  obj = { value: tmp6(...items1).analyticsLocations };
  obj = { style: tmp5.container };
  obj1 = { style: tmp5.headerContainer };
  obj2 = {};
  const intl = arg1(dependencyMap[18]).intl;
  obj2.title = intl.string(importDefault(dependencyMap[19]).hjvcLO);
  obj2.headerTitle = function headerTitle() {
    const obj = {};
    const intl = guildId(autoOpenRequestId[18]).intl;
    obj.title = intl.string(autoOpenPerkId(autoOpenRequestId[19]).hjvcLO);
    return callback(guildId(autoOpenRequestId[20]).GenericHeaderTitle, obj);
  };
  obj2.headerTitleAlign = "center";
  let obj7 = arg1(dependencyMap[21]);
  obj2.headerLeft = obj7.getHeaderCloseButton(callback);
  obj1.children = callback(arg1(dependencyMap[17]).Header, obj2);
  const items3 = [callback(closure_5, obj1), , ];
  const obj3 = { contentContainerStyle: tmp5.scrollView };
  const obj4 = { style: tmp5.boostInfoContainer };
  const items4 = [callback(importDefault(dependencyMap[22]), { count: available, type: constants.AVAILABLE }), callback(closure_5, { style: tmp5.boostInfoSeparator }), , , ];
  obj7 = { count: spent, type: constants.SPENT };
  items4[2] = callback(importDefault(dependencyMap[22]), obj7);
  items4[3] = callback(closure_5, { style: tmp5.boostInfoSeparator });
  items4[4] = callback(importDefault(dependencyMap[22]), { count: total, type: constants.TOTAL });
  obj4.children = items4;
  const items5 = [
    callback2(closure_5, obj4),
    callback(importDefault(dependencyMap[23]), { guildId }),
    buildGuildPowerupsSections.map((type) => {
      type = type.type;
      if (constants.LEVEL === type) {
        let obj = { guildId, listings: type.listings };
        return callback(autoOpenPerkId(autoOpenRequestId[24]), obj, type.type);
      } else if (constants.PERK === type) {
        obj = { guildId, listings: type.listings };
        return callback(autoOpenPerkId(autoOpenRequestId[25]), obj, type.type);
      } else {
        return null;
      }
    }),
    callback(importDefault(dependencyMap[26]), { guildId })
  ];
  obj3.children = items5;
  items3[1] = callback2(closure_4, obj3);
  const obj5 = { count: available, type: constants.AVAILABLE };
  const obj6 = { style: tmp5.boostInfoSeparator };
  const obj8 = { style: tmp5.boostInfoSeparator };
  const obj9 = { count: total, type: constants.TOTAL };
  const tmp9 = importDefault(dependencyMap[16])(guildId);
  const items6 = [tmp5.boostButtonContainer, { paddingBottom: importDefault(dependencyMap[10])().bottom }];
  items3[2] = callback(closure_5, { style: items6, children: callback(arg1(dependencyMap[27]).GuildPowerupsBoostButton, { guildId }) });
  obj.children = items3;
  obj.children = callback2(closure_5, obj);
  return callback(arg1(dependencyMap[11]).AnalyticsLocationProvider, obj);
};
