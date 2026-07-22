// Module ID: 7778
// Function ID: 61768
// Name: _callSuper
// Dependencies: []

// Module 7778 (_callSuper)
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_5(arg0, constructResult);
}
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
let closure_7 = importDefault(dependencyMap[5]);
let obj = { EXCLUSIVE: 0, [0]: "EXCLUSIVE", SYNCED: 1, [1]: "SYNCED", PRE_ALLOCATED: 2, [2]: "PRE_ALLOCATED" };
obj = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", USER: 1, [1]: "USER", INSTALLATION: 2, [2]: "INSTALLATION", GUILD: 3, [3]: "GUILD", CUSTOM: 4, [4]: "CUSTOM" };
obj = { SURFACE_UNSPECIFIED: 0, [0]: "SURFACE_UNSPECIFIED", API: 1, [1]: "API", APP: 2, [2]: "APP", DEVELOPER_PORTAL: 3, [3]: "DEVELOPER_PORTAL", ADMIN_PANEL: 4, [4]: "ADMIN_PANEL", ADS_BUDGET_AB: 5, [5]: "ADS_BUDGET_AB", AV_WORKER: 6, [6]: "AV_WORKER", SEO: 7, [7]: "SEO", MARKETING: 8, [8]: "MARKETING" };
const obj1 = { ENABLED: 0, [0]: "ENABLED", DISABLED: 1, [1]: "DISABLED" };
const obj2 = { FULL: 0, [0]: "FULL", FORCE_CONTROL: 3, [3]: "FORCE_CONTROL", OVERRIDES_ONLY: 4, [4]: "OVERRIDES_ONLY", OFF: 5, [5]: "OFF" };
const obj3 = { DEFAULT: 0, [0]: "DEFAULT", HOLDOUT: 1, [1]: "HOLDOUT", NUMBERLINE: 2, [2]: "NUMBERLINE" };
const obj4 = { CUSTOM_UNIT_PREFIX_UNSPECIFIED: 0, [0]: "CUSTOM_UNIT_PREFIX_UNSPECIFIED", SEO_URL_SLUG: 1, [1]: "SEO_URL_SLUG" };
const obj5 = { EXPOSURE_POINT_ID_UNSPECIFIED: 0, [0]: "EXPOSURE_POINT_ID_UNSPECIFIED", SEO_INSTALLATION_PAGE_LOAD: 1, [1]: "SEO_INSTALLATION_PAGE_LOAD", MARKETING_INSTALLATION_PAGE_LOAD: 2, [2]: "MARKETING_INSTALLATION_PAGE_LOAD" };
const obj6 = { DEFAULT: 0, [0]: "DEFAULT", OFF: 1, [1]: "OFF", OVERRIDES_ONLY: 2, [2]: "OVERRIDES_ONLY" };
const obj7 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", CONTROL: 1, [1]: "CONTROL", TREATMENT: 2, [2]: "TREATMENT", OVERRIDE: 3, [3]: "OVERRIDE" };
const obj8 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", ACTIVE: 1, [1]: "ACTIVE", UNUSED: 2, [2]: "UNUSED", BURNED: 3, [3]: "BURNED", PRESERVED: 4, [4]: "PRESERVED" };
const obj9 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", DRAFT: 1, [1]: "DRAFT", MEASUREMENT: 2, [2]: "MEASUREMENT", ROLLING_OUT: 4, [4]: "ROLLING_OUT", ARCHIVED: 6, [6]: "ARCHIVED", AA_MODE: 7, [7]: "AA_MODE" };
let tmp2 = (MessageType) => {
  class Experiment$Type {
    constructor() {
      tmp = closure_3(this, Experiment$Type);
      items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
      items[0] = {};
      items[1] = {};
      obj = { -111020099: true, 1351895378: true, 1456955659: true };
      obj.T = function T() {
        return callback(closure_1[6]).Timestamp;
      };
      items[2] = obj;
      items[3] = {};
      items[4] = {};
      items[5] = {
        T() {
              return callback(closure_1[6]).Timestamp;
            }
      };
      items[6] = {};
      items[7] = {};
      items[8] = {};
      obj = { -111020099: "\u{1F468}\u{1F3FD}", 1351895378: true, 1456955659: null };
      obj.T = function T() {
        return callback(closure_1[7]).StringValue;
      };
      items[9] = obj;
      obj1 = { -111020099: true, 1351895378: null, 1456955659: 11 };
      obj1.T = function T() {
        return callback(closure_1[7]).StringValue;
      };
      items[10] = obj1;
      items[11] = {};
      items[12] = {};
      obj2 = { -111020099: null, 1351895378: 14, 1456955659: null };
      obj2.T = function T() {
        const items = [, closure_9];
        return items;
      };
      items[13] = obj2;
      items[14] = {
        T() {
              return closure_21;
            }
      };
      obj3 = { 0: true, 0: true, 0: true, 0: true };
      obj3.T = function T() {
        return callback(closure_1[8]).Rule;
      };
      items[15] = obj3;
      obj4 = { -111020099: true, 1351895378: true, 1456955659: true };
      obj4.T = function T() {
        const items = [, closure_19];
        return items;
      };
      items[16] = obj4;
      obj5 = { 0: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012481105994209963, 0: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001027432588455497, 0: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002097624309993742, 0: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002385786475620103 };
      obj5.T = function T() {
        const items = [, closure_10];
        return items;
      };
      items[17] = obj5;
      items[18] = {};
      items[19] = {};
      items[20] = {
        T() {
              const items = [, closure_11];
              return items;
            }
      };
      obj6 = { -111020099: "message", 1351895378: "absolute", 1456955659: 1 };
      obj6.T = function T() {
        const items = [, closure_12];
        return items;
      };
      items[21] = obj6;
      items[22] = {};
      items[23] = {};
      items[24] = {};
      items[25] = {
        T() {
              const items = [, closure_13];
              return items;
            }
      };
      items[26] = {};
      items[27] = { 0: false, 0: false, 0: false, 0: false, -9223372036854775808: false };
      items[28] = { 0: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003969956896415088, 0: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016553504661858577, 0: 0.0000000000000000000000000000000000000000000000000000000000000000000000011319598909435675, 0: 0.709, -9223372036854775808: 438132543599790200000000000000000000000000000000000000000000000000000000000000000000000 };
      obj7 = { -111020099: "construct", 1351895378: "isArray", 1456955659: "isArray" };
      obj7.T = function T() {
        return closure_23;
      };
      items[29] = obj7;
      obj8 = { -111020099: null, 1351895378: null, 1456955659: null };
      obj8.T = function T() {
        return callback(closure_1[6]).Timestamp;
      };
      items[30] = obj8;
      items[31] = {};
      items[32] = {};
      items[33] = {
        T() {
              return callback(closure_1[6]).Timestamp;
            }
      };
      items[34] = {
        T() {
              return callback(closure_1[7]).Int32Value;
            }
      };
      obj9 = { -111020099: false, 1351895378: false, 1456955659: false };
      obj9.T = function T() {
        const items = [, closure_14];
        return items;
      };
      items[35] = obj9;
      obj10 = { 0: "scalar", 0: 8, 0: null, 0: 2 };
      obj10.T = function T() {
        const items = [, closure_15];
        return items;
      };
      items[36] = obj10;
      items[37] = { 0: true, 0: true, 0: true, 0: true, -9223372036854775808: true };
      items[38] = {};
      items[39] = {};
      items[40] = {
        T() {
              return closure_20;
            }
      };
      items[41] = {
        T() {
              const items = ["activityAction", closure_16, "ELIGIBILITY_PERSISTENCE_"];
              return items;
            }
      };
      items1 = [];
      items1[1] = items;
      return closure_24(this, Experiment$Type, items1);
    }
  }
  const arg1 = Experiment$Type;
  callback3(Experiment$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { variations: [], rules: [], surfaces: [], fieldNumbersToCopy: [], engineFeatureFlags: [], isAutomatedChange: false, suppressEditorMention: false, customUnitPrefix: 0, exposurePoints: [], growthbookTags: [], allocateRightToLeft: false, isManaged: false, eligibilityPersistence: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, Experiment$Type(closure_1[9]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = Experiment$Type(closure_1[9]).reflectionMergePartial(this, obj, arr);
        const obj3 = Experiment$Type(closure_1[9]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos) {
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      if (pos.pos < sum) {
        obj.eligibilityPersistence = pos.int32();
        while (true) {
          do {
            let tmp3 = tmp8;
            let tmp4 = tmp9;
            let tmp5 = tmp10;
            let tmp6 = tmp11;
            let tmp7 = tmp12;
          } while (pos.pos >= sum);
        }
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(id, tag, writeUnknownFields) {
      let length;
      let length2;
      let length3;
      let length4;
      let length5;
      let length6;
      let length7;
      if ("0" !== id.id) {
        tag.tag(1, Experiment$Type(closure_1[9]).WireType.Bit64).fixed64(id.id);
        const tagResult = tag.tag(1, Experiment$Type(closure_1[9]).WireType.Bit64);
      }
      if ("" !== id.name) {
        tag.tag(2, Experiment$Type(closure_1[9]).WireType.LengthDelimited).string(id.name);
        const tagResult1 = tag.tag(2, Experiment$Type(closure_1[9]).WireType.LengthDelimited);
      }
      if (id.createdAt) {
        const Timestamp = Experiment$Type(closure_1[6]).Timestamp;
        const tagResult2 = tag.tag(3, Experiment$Type(closure_1[9]).WireType.LengthDelimited);
        const joined = Timestamp.internalBinaryWrite(id.createdAt, tag.tag(3, Experiment$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Timestamp.internalBinaryWrite(id.createdAt, tag.tag(3, Experiment$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("0" !== id.creatorId) {
        tag.tag(4, Experiment$Type(closure_1[9]).WireType.Bit64).fixed64(id.creatorId);
        const tagResult3 = tag.tag(4, Experiment$Type(closure_1[9]).WireType.Bit64);
      }
      if (0 !== id.version) {
        tag.tag(5, Experiment$Type(closure_1[9]).WireType.Varint).int32(id.version);
        const tagResult4 = tag.tag(5, Experiment$Type(closure_1[9]).WireType.Varint);
      }
      if (id.editedAt) {
        const Timestamp2 = Experiment$Type(closure_1[6]).Timestamp;
        const tagResult5 = tag.tag(6, Experiment$Type(closure_1[9]).WireType.LengthDelimited);
        const joined1 = Timestamp2.internalBinaryWrite(id.editedAt, tag.tag(6, Experiment$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = Timestamp2.internalBinaryWrite(id.editedAt, tag.tag(6, Experiment$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("0" !== id.editorId) {
        tag.tag(7, Experiment$Type(closure_1[9]).WireType.Bit64).fixed64(id.editorId);
        const tagResult6 = tag.tag(7, Experiment$Type(closure_1[9]).WireType.Bit64);
      }
      if ("" !== id.title) {
        tag.tag(8, Experiment$Type(closure_1[9]).WireType.LengthDelimited).string(id.title);
        const tagResult7 = tag.tag(8, Experiment$Type(closure_1[9]).WireType.LengthDelimited);
      }
      if ("" !== id.description) {
        tag.tag(9, Experiment$Type(closure_1[9]).WireType.LengthDelimited).string(id.description);
        const tagResult8 = tag.tag(9, Experiment$Type(closure_1[9]).WireType.LengthDelimited);
      }
      if (id.hypothesis) {
        const StringValue = Experiment$Type(closure_1[7]).StringValue;
        const tagResult9 = tag.tag(10, Experiment$Type(closure_1[9]).WireType.LengthDelimited);
        const joined2 = StringValue.internalBinaryWrite(id.hypothesis, tag.tag(10, Experiment$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = StringValue.internalBinaryWrite(id.hypothesis, tag.tag(10, Experiment$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (id.techSpecLink) {
        const StringValue2 = Experiment$Type(closure_1[7]).StringValue;
        const tagResult10 = tag.tag(11, Experiment$Type(closure_1[9]).WireType.LengthDelimited);
        const joined3 = StringValue2.internalBinaryWrite(id.techSpecLink, tag.tag(11, Experiment$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = StringValue2.internalBinaryWrite(id.techSpecLink, tag.tag(11, Experiment$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== id.revision) {
        tag.tag(12, Experiment$Type(closure_1[9]).WireType.Varint).int32(id.revision);
        const tagResult11 = tag.tag(12, Experiment$Type(closure_1[9]).WireType.Varint);
      }
      if ("" !== id.hashKey) {
        tag.tag(13, Experiment$Type(closure_1[9]).WireType.LengthDelimited).string(id.hashKey);
        const tagResult12 = tag.tag(13, Experiment$Type(closure_1[9]).WireType.LengthDelimited);
      }
      if (0 !== id.unitType) {
        tag.tag(14, Experiment$Type(closure_1[9]).WireType.Varint).int32(id.unitType);
        const tagResult13 = tag.tag(14, Experiment$Type(closure_1[9]).WireType.Varint);
      }
      let num31 = 0;
      if (0 < id.variations.length) {
        do {
          let tmp43 = closure_21;
          let tmp44 = closure_0;
          let tmp45 = closure_1;
          let tagResult14 = tag.tag(15, closure_0(closure_1[9]).WireType.LengthDelimited);
          let internalBinaryWriteResult4 = closure_21.internalBinaryWrite(id.variations[num31], tagResult14.fork(), writeUnknownFields);
          let joined4 = internalBinaryWriteResult4.join();
          num31 = num31 + 1;
          length = id.variations.length;
        } while (num31 < length);
      }
      let num32 = 0;
      if (0 < id.rules.length) {
        do {
          let tmp47 = closure_0;
          let tmp48 = closure_1;
          let Rule = closure_0(closure_1[8]).Rule;
          let tagResult15 = tag.tag(16, closure_0(closure_1[9]).WireType.LengthDelimited);
          let internalBinaryWriteResult5 = Rule.internalBinaryWrite(id.rules[num32], tagResult15.fork(), writeUnknownFields);
          let joined5 = internalBinaryWriteResult5.join();
          num32 = num32 + 1;
          length2 = id.rules.length;
        } while (num32 < length2);
      }
      if (0 !== id.phase) {
        tag.tag(18, Experiment$Type(closure_1[9]).WireType.Varint).int32(id.phase);
        const tagResult16 = tag.tag(18, Experiment$Type(closure_1[9]).WireType.Varint);
      }
      if (id.surfaces.length) {
        tag.tag(19, Experiment$Type(closure_1[9]).WireType.LengthDelimited).fork();
        let num35 = 0;
        if (0 < id.surfaces.length) {
          do {
            let int32Result4 = tag.int32(id.surfaces[num35]);
            num35 = num35 + 1;
            length3 = id.surfaces.length;
          } while (num35 < length3);
        }
        const joined6 = tag.join();
        const tagResult17 = tag.tag(19, Experiment$Type(closure_1[9]).WireType.LengthDelimited);
      }
      if ("" !== id.owningTeamId) {
        tag.tag(20, Experiment$Type(closure_1[9]).WireType.LengthDelimited).string(id.owningTeamId);
        const tagResult18 = tag.tag(20, Experiment$Type(closure_1[9]).WireType.LengthDelimited);
      }
      if ("0" !== id.cachedNotificationChannelId) {
        tag.tag(21, Experiment$Type(closure_1[9]).WireType.Bit64).fixed64(id.cachedNotificationChannelId);
        const tagResult19 = tag.tag(21, Experiment$Type(closure_1[9]).WireType.Bit64);
      }
      if (0 !== id.exposureTracking) {
        tag.tag(22, Experiment$Type(closure_1[9]).WireType.Varint).int32(id.exposureTracking);
        const tagResult20 = tag.tag(22, Experiment$Type(closure_1[9]).WireType.Varint);
      }
      if (0 !== id.assignmentMode) {
        tag.tag(25, Experiment$Type(closure_1[9]).WireType.Varint).int32(id.assignmentMode);
        const tagResult21 = tag.tag(25, Experiment$Type(closure_1[9]).WireType.Varint);
      }
      if (false !== id.enableEditRawJsonUi) {
        tag.tag(23, Experiment$Type(closure_1[9]).WireType.Varint).bool(id.enableEditRawJsonUi);
        const tagResult22 = tag.tag(23, Experiment$Type(closure_1[9]).WireType.Varint);
      }
      if (0 !== id.winningVariationId) {
        tag.tag(24, Experiment$Type(closure_1[9]).WireType.Varint).int32(id.winningVariationId);
        const tagResult23 = tag.tag(24, Experiment$Type(closure_1[9]).WireType.Varint);
      }
      if ("" !== id.extraOutcomeContext) {
        tag.tag(34, Experiment$Type(closure_1[9]).WireType.LengthDelimited).string(id.extraOutcomeContext);
        const tagResult24 = tag.tag(34, Experiment$Type(closure_1[9]).WireType.LengthDelimited);
      }
      if (0 !== id.type) {
        tag.tag(26, Experiment$Type(closure_1[9]).WireType.Varint).int32(id.type);
        const tagResult25 = tag.tag(26, Experiment$Type(closure_1[9]).WireType.Varint);
      }
      if (false !== id.isTemplate) {
        tag.tag(27, Experiment$Type(closure_1[9]).WireType.Varint).bool(id.isTemplate);
        const tagResult26 = tag.tag(27, Experiment$Type(closure_1[9]).WireType.Varint);
      }
      if (id.fieldNumbersToCopy.length) {
        tag.tag(28, Experiment$Type(closure_1[9]).WireType.LengthDelimited).fork();
        let num46 = 0;
        if (0 < id.fieldNumbersToCopy.length) {
          do {
            let int32Result9 = tag.int32(id.fieldNumbersToCopy[num46]);
            num46 = num46 + 1;
            length4 = id.fieldNumbersToCopy.length;
          } while (num46 < length4);
        }
        const joined7 = tag.join();
        const tagResult27 = tag.tag(28, Experiment$Type(closure_1[9]).WireType.LengthDelimited);
      }
      let num47 = 0;
      if (0 < id.engineFeatureFlags.length) {
        do {
          let tmp90 = closure_0;
          let tmp91 = closure_1;
          let tagResult28 = tag.tag(29, closure_0(closure_1[9]).WireType.LengthDelimited);
          let stringResult6 = tagResult28.string(id.engineFeatureFlags[num47]);
          num47 = num47 + 1;
          length5 = id.engineFeatureFlags.length;
        } while (num47 < length5);
      }
      if (id.debugConfig) {
        const tagResult29 = tag.tag(30, Experiment$Type(closure_1[9]).WireType.LengthDelimited);
        const joined8 = closure_23.internalBinaryWrite(id.debugConfig, tag.tag(30, Experiment$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult6 = closure_23.internalBinaryWrite(id.debugConfig, tag.tag(30, Experiment$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (id.expectedEndDate) {
        const Timestamp3 = Experiment$Type(closure_1[6]).Timestamp;
        const tagResult30 = tag.tag(31, Experiment$Type(closure_1[9]).WireType.LengthDelimited);
        const joined9 = Timestamp3.internalBinaryWrite(id.expectedEndDate, tag.tag(31, Experiment$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult7 = Timestamp3.internalBinaryWrite(id.expectedEndDate, tag.tag(31, Experiment$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (false !== id.isAutomatedChange) {
        tag.tag(32, Experiment$Type(closure_1[9]).WireType.Varint).bool(id.isAutomatedChange);
        const tagResult31 = tag.tag(32, Experiment$Type(closure_1[9]).WireType.Varint);
      }
      if (false !== id.suppressEditorMention) {
        tag.tag(44, Experiment$Type(closure_1[9]).WireType.Varint).bool(id.suppressEditorMention);
        const tagResult32 = tag.tag(44, Experiment$Type(closure_1[9]).WireType.Varint);
      }
      if (id.archiveAt) {
        const Timestamp4 = Experiment$Type(closure_1[6]).Timestamp;
        const tagResult33 = tag.tag(33, Experiment$Type(closure_1[9]).WireType.LengthDelimited);
        Timestamp4.internalBinaryWrite(id.archiveAt, tag.tag(33, Experiment$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult8 = Timestamp4.internalBinaryWrite(id.archiveAt, tag.tag(33, Experiment$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (id.guildExperimentVersion) {
        const Int32Value = Experiment$Type(closure_1[7]).Int32Value;
        const tagResult34 = tag.tag(35, Experiment$Type(closure_1[9]).WireType.LengthDelimited);
        Int32Value.internalBinaryWrite(id.guildExperimentVersion, tag.tag(35, Experiment$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult9 = Int32Value.internalBinaryWrite(id.guildExperimentVersion, tag.tag(35, Experiment$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== id.customUnitPrefix) {
        tag.tag(36, Experiment$Type(closure_1[9]).WireType.Varint).int32(id.customUnitPrefix);
        const tagResult35 = tag.tag(36, Experiment$Type(closure_1[9]).WireType.Varint);
      }
      if (id.exposurePoints.length) {
        tag.tag(45, Experiment$Type(closure_1[9]).WireType.LengthDelimited).fork();
        let num59 = 0;
        if (0 < id.exposurePoints.length) {
          do {
            let boolResult2 = tag.int32(id.exposurePoints[num59]);
            num59 = num59 + 1;
            length6 = id.exposurePoints.length;
          } while (num59 < length6);
        }
        tag.join();
        const tagResult36 = tag.tag(45, Experiment$Type(closure_1[9]).WireType.LengthDelimited);
      }
      let num60 = 0;
      if (0 < id.growthbookTags.length) {
        do {
          boolResult2 = closure_0;
          boolResult2 = closure_1;
          let tagResult37 = tag.tag(37, closure_0(closure_1[9]).WireType.LengthDelimited);
          boolResult2 = tagResult37.string(id.growthbookTags[num60]);
          num60 = num60 + 1;
          length7 = id.growthbookTags.length;
        } while (num60 < length7);
      }
      if (false !== id.allocateRightToLeft) {
        tag.tag(38, Experiment$Type(closure_1[9]).WireType.Varint).bool(id.allocateRightToLeft);
        const tagResult38 = tag.tag(38, Experiment$Type(closure_1[9]).WireType.Varint);
      }
      if (false !== id.isManaged) {
        tag.tag(39, Experiment$Type(closure_1[9]).WireType.Varint).bool(id.isManaged);
        const tagResult39 = tag.tag(39, Experiment$Type(closure_1[9]).WireType.Varint);
      }
      if (id.numberLineSettings) {
        const tagResult40 = tag.tag(43, Experiment$Type(closure_1[9]).WireType.LengthDelimited);
        closure_20.internalBinaryWrite(id.numberLineSettings, tag.tag(43, Experiment$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult10 = closure_20.internalBinaryWrite(id.numberLineSettings, tag.tag(43, Experiment$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== id.eligibilityPersistence) {
        tag.tag(42, Experiment$Type(closure_1[9]).WireType.Varint).int32(id.eligibilityPersistence);
        const tagResult41 = tag.tag(42, Experiment$Type(closure_1[9]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = Experiment$Type(closure_1[9]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, id, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(Experiment$Type, items);
}(arg1(dependencyMap[9]).MessageType);
tmp2 = new tmp2();
let tmp4 = (MessageType) => {
  class Experiment_NumberLineSettings$Type {
    constructor() {
      tmp = closure_3(this, Experiment_NumberLineSettings$Type);
      obj = {
        T() {
              const items = [null, closure_8];
              return items;
            }
      };
      items = [, , ];
      items[0] = obj;
      items[1] = {};
      items[2] = {};
      items1 = [1280262401];
      items1[1] = items;
      return closure_24(this, Experiment_NumberLineSettings$Type, items1);
    }
  }
  const arg1 = Experiment_NumberLineSettings$Type;
  callback3(Experiment_NumberLineSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, Experiment_NumberLineSettings$Type(closure_1[9]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = Experiment_NumberLineSettings$Type(closure_1[9]).reflectionMergePartial(this, obj, arr);
        const obj3 = Experiment_NumberLineSettings$Type(closure_1[9]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.mode = pos.int32();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let str4 = pos.fixed64();
          obj.linkedId = str4.toString();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.sharedControl = pos.bool();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = Experiment_NumberLineSettings$Type;
                let tmp13 = closure_1;
                onRead = Experiment_NumberLineSettings$Type(closure_1[9]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(mode, tag, writeUnknownFields) {
      if (0 !== mode.mode) {
        tag.tag(1, Experiment_NumberLineSettings$Type(closure_1[9]).WireType.Varint).int32(mode.mode);
        const tagResult = tag.tag(1, Experiment_NumberLineSettings$Type(closure_1[9]).WireType.Varint);
      }
      if ("0" !== mode.linkedId) {
        tag.tag(2, Experiment_NumberLineSettings$Type(closure_1[9]).WireType.Bit64).fixed64(mode.linkedId);
        const tagResult1 = tag.tag(2, Experiment_NumberLineSettings$Type(closure_1[9]).WireType.Bit64);
      }
      if (false !== mode.sharedControl) {
        tag.tag(3, Experiment_NumberLineSettings$Type(closure_1[9]).WireType.Varint).bool(mode.sharedControl);
        const tagResult2 = tag.tag(3, Experiment_NumberLineSettings$Type(closure_1[9]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = Experiment_NumberLineSettings$Type(closure_1[9]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, mode, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(Experiment_NumberLineSettings$Type, items);
}(arg1(dependencyMap[9]).MessageType);
tmp4 = new tmp4();
let tmp6 = (MessageType) => {
  class Variation$Type {
    constructor() {
      tmp = closure_3(this, Variation$Type);
      items = [, , , , , , ];
      items[0] = {};
      items[1] = {};
      items[2] = {};
      items[3] = {
        T() {
              return closure_22;
            }
      };
      items[4] = {
        T() {
              const items = [null, closure_17];
              return items;
            }
      };
      items[5] = {
        T() {
              return callback(closure_1[7]).StringValue;
            }
      };
      items[6] = {};
      items1 = [false];
      items1[1] = items;
      return closure_24(this, Variation$Type, items1);
    }
  }
  const arg1 = Variation$Type;
  callback3(Variation$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { NativeAppearance: true, appearance: true, id: true, username: true, email: true, "Bool(false)": true, buckets: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, Variation$Type(closure_1[9]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = Variation$Type(closure_1[9]).reflectionMergePartial(this, obj, arr);
        const obj3 = Variation$Type(closure_1[9]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.id = pos.int32();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.label = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.targetAllocation = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let buckets = obj.buckets;
          let tmp31 = closure_22;
          let arr = buckets.push(closure_22.internalBinaryRead(pos, pos.uint32(), readUnknownField));
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          obj.type = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (6 === tmp7) {
          let tmp26 = Variation$Type;
          let tmp27 = closure_1;
          let StringValue = Variation$Type(closure_1[7]).StringValue;
          let tmp28 = StringValue;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.configuration = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.configuration);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (7 === tmp7) {
          let str4 = pos.fixed64();
          obj.owningExperimentId = str4.toString();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = Variation$Type;
                let tmp13 = closure_1;
                onRead = Variation$Type(closure_1[9]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(id, tag, writeUnknownFields) {
      let length;
      if (0 !== id.id) {
        tag.tag(1, Variation$Type(closure_1[9]).WireType.Varint).int32(id.id);
        const tagResult = tag.tag(1, Variation$Type(closure_1[9]).WireType.Varint);
      }
      if ("" !== id.label) {
        tag.tag(2, Variation$Type(closure_1[9]).WireType.LengthDelimited).string(id.label);
        const tagResult1 = tag.tag(2, Variation$Type(closure_1[9]).WireType.LengthDelimited);
      }
      if (0 !== id.targetAllocation) {
        tag.tag(3, Variation$Type(closure_1[9]).WireType.Varint).int32(id.targetAllocation);
        const tagResult2 = tag.tag(3, Variation$Type(closure_1[9]).WireType.Varint);
      }
      let num7 = 0;
      if (0 < id.buckets.length) {
        do {
          let tmp10 = closure_22;
          let tmp11 = closure_0;
          let tmp12 = closure_1;
          let tagResult3 = tag.tag(4, closure_0(closure_1[9]).WireType.LengthDelimited);
          let internalBinaryWriteResult = closure_22.internalBinaryWrite(id.buckets[num7], tagResult3.fork(), writeUnknownFields);
          let joined = internalBinaryWriteResult.join();
          num7 = num7 + 1;
          length = id.buckets.length;
        } while (num7 < length);
      }
      if (0 !== id.type) {
        tag.tag(5, Variation$Type(closure_1[9]).WireType.Varint).int32(id.type);
        const tagResult4 = tag.tag(5, Variation$Type(closure_1[9]).WireType.Varint);
      }
      if (id.configuration) {
        const StringValue = Variation$Type(closure_1[7]).StringValue;
        const tagResult5 = tag.tag(6, Variation$Type(closure_1[9]).WireType.LengthDelimited);
        const joined1 = StringValue.internalBinaryWrite(id.configuration, tag.tag(6, Variation$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = StringValue.internalBinaryWrite(id.configuration, tag.tag(6, Variation$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("0" !== id.owningExperimentId) {
        tag.tag(7, Variation$Type(closure_1[9]).WireType.Bit64).fixed64(id.owningExperimentId);
        const tagResult6 = tag.tag(7, Variation$Type(closure_1[9]).WireType.Bit64);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = Variation$Type(closure_1[9]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, id, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(Variation$Type, items);
}(arg1(dependencyMap[9]).MessageType);
tmp6 = new tmp6();
let tmp8 = (MessageType) => {
  class Bucket$Type {
    constructor() {
      tmp = closure_3(this, Bucket$Type);
      items = [, , ];
      items[0] = {};
      items[1] = {};
      obj = { -111020099: true, 1351895378: true, 1456955659: true };
      obj.T = function T() {
        const items = [false, closure_18];
        return items;
      };
      items[2] = obj;
      items1 = [];
      items1[1] = items;
      return closure_24(this, Bucket$Type, items1);
    }
  }
  const arg1 = Bucket$Type;
  callback3(Bucket$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { eventTarget: "spring", requestAnimationFrame: 0.4, setInterval: 1 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, Bucket$Type(closure_1[9]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = Bucket$Type(closure_1[9]).reflectionMergePartial(this, obj, arr);
        const obj3 = Bucket$Type(closure_1[9]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.start = pos.int32();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.stop = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.type = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = Bucket$Type;
                let tmp13 = closure_1;
                onRead = Bucket$Type(closure_1[9]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(start, tag, writeUnknownFields) {
      if (0 !== start.start) {
        tag.tag(1, Bucket$Type(closure_1[9]).WireType.Varint).int32(start.start);
        const tagResult = tag.tag(1, Bucket$Type(closure_1[9]).WireType.Varint);
      }
      if (0 !== start.stop) {
        tag.tag(2, Bucket$Type(closure_1[9]).WireType.Varint).int32(start.stop);
        const tagResult1 = tag.tag(2, Bucket$Type(closure_1[9]).WireType.Varint);
      }
      if (0 !== start.type) {
        tag.tag(3, Bucket$Type(closure_1[9]).WireType.Varint).int32(start.type);
        const tagResult2 = tag.tag(3, Bucket$Type(closure_1[9]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = Bucket$Type(closure_1[9]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, start, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(Bucket$Type, items);
}(arg1(dependencyMap[9]).MessageType);
tmp8 = new tmp8();
let tmp10 = (MessageType) => {
  class DebugConfig$Type {
    constructor() {
      tmp = closure_3(this, DebugConfig$Type);
      items = [, , , , , ];
      items[0] = {};
      items[1] = {};
      items[2] = {};
      items[3] = {};
      items[4] = {};
      items[5] = {};
      items1 = ["E"];
      items1[1] = items;
      return closure_24(this, DebugConfig$Type, items1);
    }
  }
  const arg1 = DebugConfig$Type;
  callback3(DebugConfig$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { aria-hidden: true, accessibilityLabel: null, width: 14, marginTop: "#ffff", alignItems: 5, gap: "favorite_emojis" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, DebugConfig$Type(closure_1[9]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = DebugConfig$Type(closure_1[9]).reflectionMergePartial(this, obj, arr);
        const obj3 = DebugConfig$Type(closure_1[9]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.enableDecisionLogging = pos.bool();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.metricsSampleRate = pos.double();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.logContextOnFailure = pos.bool();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          obj.logRawHeaders = pos.bool();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          obj.tagFilterMetrics = pos.bool();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (6 === tmp7) {
          obj.decisionLogSampleRate = pos.double();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = DebugConfig$Type;
                let tmp13 = closure_1;
                onRead = DebugConfig$Type(closure_1[9]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(enableDecisionLogging, tag, writeUnknownFields) {
      if (false !== enableDecisionLogging.enableDecisionLogging) {
        tag.tag(1, DebugConfig$Type(closure_1[9]).WireType.Varint).bool(enableDecisionLogging.enableDecisionLogging);
        const tagResult = tag.tag(1, DebugConfig$Type(closure_1[9]).WireType.Varint);
      }
      if (0 !== enableDecisionLogging.metricsSampleRate) {
        tag.tag(2, DebugConfig$Type(closure_1[9]).WireType.Bit64).double(enableDecisionLogging.metricsSampleRate);
        const tagResult1 = tag.tag(2, DebugConfig$Type(closure_1[9]).WireType.Bit64);
      }
      if (false !== enableDecisionLogging.logContextOnFailure) {
        tag.tag(3, DebugConfig$Type(closure_1[9]).WireType.Varint).bool(enableDecisionLogging.logContextOnFailure);
        const tagResult2 = tag.tag(3, DebugConfig$Type(closure_1[9]).WireType.Varint);
      }
      if (false !== enableDecisionLogging.logRawHeaders) {
        tag.tag(4, DebugConfig$Type(closure_1[9]).WireType.Varint).bool(enableDecisionLogging.logRawHeaders);
        const tagResult3 = tag.tag(4, DebugConfig$Type(closure_1[9]).WireType.Varint);
      }
      if (false !== enableDecisionLogging.tagFilterMetrics) {
        tag.tag(5, DebugConfig$Type(closure_1[9]).WireType.Varint).bool(enableDecisionLogging.tagFilterMetrics);
        const tagResult4 = tag.tag(5, DebugConfig$Type(closure_1[9]).WireType.Varint);
      }
      if (0 !== enableDecisionLogging.decisionLogSampleRate) {
        tag.tag(6, DebugConfig$Type(closure_1[9]).WireType.Bit64).double(enableDecisionLogging.decisionLogSampleRate);
        const tagResult5 = tag.tag(6, DebugConfig$Type(closure_1[9]).WireType.Bit64);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = DebugConfig$Type(closure_1[9]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, enableDecisionLogging, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(DebugConfig$Type, items);
}(arg1(dependencyMap[9]).MessageType);
tmp10 = new tmp10();
const result = arg1(dependencyMap[10]).fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/experiment.tsx");

export const Experiment_NumberLineSettings_Mode = obj;
export const Experiment_UnitType = obj;
export const Experiment_Surface = obj;
export const Experiment_ExposureTracking = obj1;
export const Experiment_AssignmentMode = obj2;
export const Experiment_Type = obj3;
export const Experiment_CustomUnitPrefix = obj4;
export const Experiment_ExposurePointId = obj5;
export const Experiment_EligibilityPersistence = obj6;
export const Variation_Type = obj7;
export const Bucket_Type = obj8;
export const Phase = obj9;
export const Experiment = tmp2;
export const Experiment_NumberLineSettings = tmp4;
export const Variation = tmp6;
export const Bucket = tmp8;
export const DebugConfig = tmp10;
