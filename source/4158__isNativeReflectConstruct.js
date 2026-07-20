// Module ID: 4158
// Function ID: 35192
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4158 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
const importDefaultResult = importDefault(dependencyMap[5]);
({ LibraryApplicationFlags: closure_10, Distributors: closure_11, SKUTypes: closure_12 } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[8]);
const tmp4 = (importDefaultResult) => {
  class LibraryApplicationRecord {
    constructor(arg0) {
      self = this;
      tmp = closure_3(this, LibraryApplicationRecord);
      obj = closure_6(LibraryApplicationRecord);
      tmp2 = closure_5;
      if (closure_13()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, [], closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ id: tmp6.id, createdAt: tmp6.createdAt, flags: tmp6.flags, branchId: tmp6.branchId, entitlements: tmp6.entitlements, branch: tmp6.branch, sku: tmp6.sku } = importDefaultResult);
      tmp2Result.isTestMode = importDefaultResult.isTestMode || false;
      return tmp2Result;
    }
  }
  const importDefault = LibraryApplicationRecord;
  callback2(LibraryApplicationRecord, importDefaultResult);
  let obj = {
    key: "getFlags",
    value() {
      return this.flags;
    }
  };
  const items = [obj, , , , , , , , , , , , , , ];
  obj = {
    key: "hasFlag",
    value(arg0) {
      return callback(closure_2[9]).hasFlag(this.flags, arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "isHidden",
    value() {
      return this.hasFlag(closure_10.HIDDEN);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isLegacyOverlayEnabled",
    value() {
      return !this.hasFlag(closure_10.OVERLAY_DISABLED);
    }
  };
  items[4] = {
    key: "isOverlayV3Enabled",
    value() {
      return !this.hasFlag(closure_10.OVERLAY_V3_DISABLED);
    }
  };
  items[5] = {
    key: "isOverlayEnabled",
    value() {
      const self = this;
      return this.isLegacyOverlayEnabled() || self.isOverlayV3Enabled();
    }
  };
  items[6] = {
    key: "isMasterBranch",
    value() {
      return this.branchId === this.id;
    }
  };
  items[7] = {
    key: "isDiscordApplication",
    value() {
      return true;
    }
  };
  items[8] = {
    key: "isEntitled",
    value(arg0, arg1) {
      const LibraryApplicationRecord = this;
      const tmp = !this.isTestMode;
      let someResult = !tmp;
      if (tmp) {
        const entitlements = this.entitlements;
        someResult = entitlements.some((isValid) => isValid.isValid(isValid, arg1, self.branchId));
      }
      return someResult;
    }
  };
  items[9] = {
    key: "isPreorder",
    value() {
      return null != this.sku.preorderReleaseAt || null != this.sku.preorderApproximateReleaseDate;
    }
  };
  items[10] = {
    key: "getDistributor",
    value() {
      return constants.DISCORD;
    }
  };
  items[11] = {
    key: "getBranchName",
    value() {
      let str = "master";
      if (null != this.branch) {
        str = this.branch.name;
      }
      return str;
    }
  };
  items[12] = {
    key: "getBranchedName",
    value(name) {
      const self = this;
      if (!this.isMasterBranch()) {
        if (null != self.branch) {
          const _HermesInternal = HermesInternal;
          name = "" + name.name + " (" + self.branch.name + ")";
        }
        return name;
      }
      name = name.name;
    }
  };
  items[13] = {
    key: "getSkuIdForAnalytics",
    value() {
      return this.sku.id;
    }
  };
  items[14] = {
    key: "getAnalyticsData",
    value() {
      const self = this;
      const application = application.getApplication(this.id);
      const obj = {};
      let id = null;
      if (null != application) {
        id = application.id;
      }
      obj.application_id = id;
      let name = null;
      if (null != application) {
        name = application.name;
      }
      obj.application_name = name;
      obj.sku_id = self.getSkuIdForAnalytics();
      obj.launcher_platform = self.getDistributor();
      return obj;
    }
  };
  const items1 = [
    {
      key: "createFromServer",
      value(id) {
        let tmp = LibraryApplicationRecord;
        let obj = { id: id.application.id, branchId: id.branch_id };
        if (null != id.entitlements) {
          const entitlements = id.entitlements;
          let mapped = entitlements.map((arg0) => closure_9.createFromServer(arg0));
        } else {
          mapped = [];
        }
        obj.entitlements = mapped;
        ({ branch: obj.branch, flags: obj.flags, created_at: obj.createdAt } = id);
        obj = { id: id.sku.id, type: id.sku.type, premium: id.sku.premium };
        let tmp2 = null;
        if (null != id.sku.preorder_release_at) {
          tmp2 = LibraryApplicationRecord(closure_2[10])(id.sku.preorder_release_at);
        }
        obj.preorderReleaseAt = tmp2;
        let prop = null;
        if (null != id.sku.preorder_approximate_release_date) {
          prop = id.sku.preorder_approximate_release_date;
        }
        obj.preorderApproximateReleaseDate = prop;
        obj.sku = obj;
        tmp = new tmp(obj);
        return tmp;
      }
    },
    {
      key: "createForTestMode",
      value(id) {
        let obj = { id: id.id, entitlements: [], branchId: id.branch.id, branch: id.branch, flags: closure_10.ENTITLED, createdAt: id.branch.created_at, sku: obj, isTestMode: true };
        obj = { id: id.skuId, type: constants2.DURABLE_PRIMARY, premium: false };
        return new LibraryApplicationRecord(obj);
      }
    }
  ];
  return callback(LibraryApplicationRecord, items, items1);
}(importDefaultResult);
const result = arg1(dependencyMap[11]).fileFinishedImporting("records/LibraryApplicationRecord.tsx");

export default tmp4;
