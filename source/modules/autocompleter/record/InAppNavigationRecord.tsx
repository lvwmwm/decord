// Module ID: 5246
// Function ID: 44516
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5246 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const Routes = arg1(dependencyMap[6]).Routes;
const RewardFilterTypes = arg1(dependencyMap[7]).RewardFilterTypes;
const UserSettingsPath = arg1(dependencyMap[8]).UserSettingsPath;
const obj = { SHOP: "SHOP", SHOP_ORBS_TAB: "SHOP_ORBS_TAB", NITRO_HOME: "NITRO_HOME", QUEST_HOME: "QUEST_HOME", QUEST_ORBS: "QUEST_ORBS", APPS_HOME: "APPS_HOME", SETTINGS: "SETTINGS", PLAYGROUND: "PLAYGROUND" };
const tmp3 = (importDefaultResult) => {
  class InAppNavigationRecord {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, InAppNavigationRecord);
      obj = closure_5(InAppNavigationRecord);
      tmp2 = closure_4;
      if (closure_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, [], closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      if (null != importDefaultResult.collectionId) {
        tmp7 = globalThis;
        _HermesInternal = HermesInternal;
        str = "";
        str2 = "_";
        type = "" + importDefaultResult.type + "_" + importDefaultResult.collectionId;
      } else {
        type = importDefaultResult.type;
      }
      tmp2Result.id = type;
      ({ path: tmp6.path, type: tmp6.type, label: tmp6.label, collectionId: tmp6.collectionId, IconComponent: tmp6.IconComponent } = importDefaultResult);
      return tmp2Result;
    }
  }
  const arg1 = InAppNavigationRecord;
  callback2(InAppNavigationRecord, importDefaultResult);
  const items = [
    {
      key: "fromType",
      value(arg0, arg1, label, collectionId, IconComponent) {
        let settingsPathToRouteResult = arg1;
        if (constants4.SHOP === arg0) {
          let obj = { path: constants.COLLECTIBLES_SHOP, type: constants4.SHOP };
          const prototype9 = InAppNavigationRecord.prototype;
          const tmp77 = new InAppNavigationRecord(obj);
          return tmp77;
        } else if (constants4.NITRO_HOME === arg0) {
          obj = { path: constants.NITRO_HOME, type: constants4.NITRO_HOME };
          const prototype8 = InAppNavigationRecord.prototype;
          const tmp69 = new InAppNavigationRecord(obj);
          return tmp69;
        } else if (constants4.QUEST_HOME === arg0) {
          const obj1 = { path: constants.QUEST_HOME, type: constants4.QUEST_HOME };
          const prototype7 = InAppNavigationRecord.prototype;
          const tmp61 = new InAppNavigationRecord(obj1);
          return tmp61;
        } else if (constants4.APPS_HOME === arg0) {
          const obj2 = { path: constants.GLOBAL_DISCOVERY_APPS, type: constants4.APPS_HOME };
          const prototype6 = InAppNavigationRecord.prototype;
          const tmp53 = new InAppNavigationRecord(obj2);
          return tmp53;
        } else if (constants4.SETTINGS === arg0) {
          let tmp36 = InAppNavigationRecord;
          const obj3 = {};
          if (null == settingsPathToRouteResult) {
            let obj4 = InAppNavigationRecord(closure_1[9]);
            settingsPathToRouteResult = obj4.settingsPathToRoute(constants3.ACCOUNT);
          }
          obj3.path = settingsPathToRouteResult;
          obj3.label = label;
          obj3.type = constants4.SETTINGS;
          const prototype5 = tmp36.prototype;
          tmp36 = new tmp36(obj3);
          return tmp36;
        } else if (constants4.PLAYGROUND === arg0) {
          let tmp25 = InAppNavigationRecord;
          obj4 = {};
          let APP = settingsPathToRouteResult;
          if (null == settingsPathToRouteResult) {
            APP = constants.APP;
          }
          obj4.path = APP;
          obj4.type = constants4.PLAYGROUND;
          obj4.label = label;
          obj4.collectionId = collectionId;
          obj4.IconComponent = IconComponent;
          const prototype4 = tmp25.prototype;
          tmp25 = new tmp25(obj4);
          return tmp25;
        } else if (constants4.SHOP_ORBS_TAB === arg0) {
          const obj5 = { path: constants.COLLECTIBLES_SHOP, type: constants4.SHOP_ORBS_TAB };
          const prototype3 = InAppNavigationRecord.prototype;
          const tmp23 = new InAppNavigationRecord(obj5);
          return tmp23;
        } else if (constants4.QUEST_ORBS === arg0) {
          obj = {};
          const _HermesInternal = HermesInternal;
          obj.path = "" + constants.QUEST_HOME + "?filter=" + constants2.VIRTUAL_CURRENCY;
          obj.type = constants4.QUEST_ORBS;
          const prototype2 = InAppNavigationRecord.prototype;
          const tmp15 = new InAppNavigationRecord(obj);
          return tmp15;
        } else {
          const _Error = Error;
          const error = new Error("Unhandled InAppNavigationType");
          throw error;
        }
      }
    }
  ];
  return callback(InAppNavigationRecord, null, items);
}(importDefault(dependencyMap[5]));
const importDefaultResult = importDefault(dependencyMap[5]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/autocompleter/record/InAppNavigationRecord.tsx");

export default tmp3;
export const InAppNavigationRecord = tmp3;
export const InAppNavigationType = obj;
