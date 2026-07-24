// Module ID: 7875
// Function ID: 62126
// Name: _callSuper
// Dependencies: [57, 6, 7, 15, 17, 18, 1312, 1313, 7876, 1284, 2]

// Module 7875 (_callSuper)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
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
  return _possibleConstructorReturn(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let obj = { EXCLUSIVE: 0, [0]: "EXCLUSIVE", SYNCED: 1, [1]: "SYNCED", PRE_ALLOCATED: 2, [2]: "PRE_ALLOCATED" };
obj = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", USER: 1, [1]: "USER", INSTALLATION: 2, [2]: "INSTALLATION", GUILD: 3, [3]: "GUILD", CUSTOM: 4, [4]: "CUSTOM" };
obj = { SURFACE_UNSPECIFIED: 0, [0]: "SURFACE_UNSPECIFIED", API: 1, [1]: "API", APP: 2, [2]: "APP", DEVELOPER_PORTAL: 3, [3]: "DEVELOPER_PORTAL", ADMIN_PANEL: 4, [4]: "ADMIN_PANEL", ADS_BUDGET_AB: 5, [5]: "ADS_BUDGET_AB", AV_WORKER: 6, [6]: "AV_WORKER", SEO: 7, [7]: "SEO", MARKETING: 8, [8]: "MARKETING" };
let obj1 = { ENABLED: 0, [0]: "ENABLED", DISABLED: 1, [1]: "DISABLED" };
let obj2 = { FULL: 0, [0]: "FULL", FORCE_CONTROL: 3, [3]: "FORCE_CONTROL", OVERRIDES_ONLY: 4, [4]: "OVERRIDES_ONLY", OFF: 5, [5]: "OFF" };
let obj3 = { DEFAULT: 0, [0]: "DEFAULT", HOLDOUT: 1, [1]: "HOLDOUT", NUMBERLINE: 2, [2]: "NUMBERLINE" };
let obj4 = { CUSTOM_UNIT_PREFIX_UNSPECIFIED: 0, [0]: "CUSTOM_UNIT_PREFIX_UNSPECIFIED", SEO_URL_SLUG: 1, [1]: "SEO_URL_SLUG" };
let obj5 = { EXPOSURE_POINT_ID_UNSPECIFIED: 0, [0]: "EXPOSURE_POINT_ID_UNSPECIFIED", SEO_INSTALLATION_PAGE_LOAD: 1, [1]: "SEO_INSTALLATION_PAGE_LOAD", MARKETING_INSTALLATION_PAGE_LOAD: 2, [2]: "MARKETING_INSTALLATION_PAGE_LOAD" };
let obj6 = { DEFAULT: 0, [0]: "DEFAULT", OFF: 1, [1]: "OFF", OVERRIDES_ONLY: 2, [2]: "OVERRIDES_ONLY" };
let obj7 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", CONTROL: 1, [1]: "CONTROL", TREATMENT: 2, [2]: "TREATMENT", OVERRIDE: 3, [3]: "OVERRIDE" };
let obj8 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", ACTIVE: 1, [1]: "ACTIVE", UNUSED: 2, [2]: "UNUSED", BURNED: 3, [3]: "BURNED", PRESERVED: 4, [4]: "PRESERVED" };
let obj9 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", DRAFT: 1, [1]: "DRAFT", MEASUREMENT: 2, [2]: "MEASUREMENT", ROLLING_OUT: 4, [4]: "ROLLING_OUT", ARCHIVED: 6, [6]: "ARCHIVED", AA_MODE: 7, [7]: "AA_MODE" };
let tmp2 = ((MessageType) => {
  class Experiment$Type {
    constructor() {
      tmp = outer1_3(this, Experiment$Type);
      items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
      items[0] = { no: 1, name: "id", kind: "scalar", T: 6 };
      items[1] = { no: 2, name: "name", kind: "scalar", T: 9 };
      obj = { no: 3, name: "created_at", kind: "message" };
      obj.T = function T() {
        return Experiment$Type(outer2_1[6]).Timestamp;
      };
      items[2] = obj;
      items[3] = { no: 4, name: "creator_id", kind: "scalar", T: 6 };
      items[4] = { no: 5, name: "version", kind: "scalar", T: 5 };
      obj = { no: 6, name: "edited_at", kind: "message" };
      obj.T = function T() {
        return Experiment$Type(outer2_1[6]).Timestamp;
      };
      items[5] = obj;
      items[6] = { no: 7, name: "editor_id", kind: "scalar", T: 6 };
      items[7] = { no: 8, name: "title", kind: "scalar", T: 9 };
      items[8] = { no: 9, name: "description", kind: "scalar", T: 9 };
      obj1 = { no: 10, name: "hypothesis", kind: "message" };
      obj1.T = function T() {
        return Experiment$Type(outer2_1[7]).StringValue;
      };
      items[9] = obj1;
      obj2 = { no: 11, name: "tech_spec_link", kind: "message" };
      obj2.T = function T() {
        return Experiment$Type(outer2_1[7]).StringValue;
      };
      items[10] = obj2;
      items[11] = { no: 12, name: "revision", kind: "scalar", T: 5 };
      items[12] = { no: 13, name: "hash_key", kind: "scalar", T: 9 };
      obj3 = { no: 14, name: "unit_type", kind: "enum" };
      obj3.T = function T() {
        const items = ["discord_protos.discord_experimentation.v1.Experiment.UnitType", outer2_9];
        return items;
      };
      items[13] = obj3;
      obj4 = { no: 15, name: "variations", kind: "message", repeat: 1 };
      obj4.T = function T() {
        return outer2_21;
      };
      items[14] = obj4;
      obj5 = { no: 16, name: "rules", kind: "message", repeat: 1 };
      obj5.T = function T() {
        return Experiment$Type(outer2_1[8]).Rule;
      };
      items[15] = obj5;
      obj6 = { no: 18, name: "phase", kind: "enum" };
      obj6.T = function T() {
        const items = ["discord_protos.discord_experimentation.v1.Phase", outer2_19];
        return items;
      };
      items[16] = obj6;
      obj7 = { no: 19, name: "surfaces", kind: "enum", repeat: 1 };
      obj7.T = function T() {
        const items = ["discord_protos.discord_experimentation.v1.Experiment.Surface", outer2_10];
        return items;
      };
      items[17] = obj7;
      items[18] = { no: 20, name: "owning_team_id", kind: "scalar", T: 9 };
      items[19] = { no: 21, name: "cached_notification_channel_id", kind: "scalar", T: 6 };
      obj8 = { no: 22, name: "exposure_tracking", kind: "enum" };
      obj8.T = function T() {
        const items = ["discord_protos.discord_experimentation.v1.Experiment.ExposureTracking", outer2_11];
        return items;
      };
      items[20] = obj8;
      obj9 = { no: 25, name: "assignment_mode", kind: "enum" };
      obj9.T = function T() {
        const items = ["discord_protos.discord_experimentation.v1.Experiment.AssignmentMode", outer2_12];
        return items;
      };
      items[21] = obj9;
      items[22] = { no: 23, name: "enable_edit_raw_json_ui", kind: "scalar", T: 8 };
      items[23] = { no: 24, name: "winning_variation_id", kind: "scalar", T: 5 };
      items[24] = { no: 34, name: "extra_outcome_context", kind: "scalar", T: 9 };
      obj10 = { no: 26, name: "type", kind: "enum" };
      obj10.T = function T() {
        const items = ["discord_protos.discord_experimentation.v1.Experiment.Type", outer2_13];
        return items;
      };
      items[25] = obj10;
      items[26] = { no: 27, name: "is_template", kind: "scalar", T: 8 };
      items[27] = { no: 28, name: "field_numbers_to_copy", kind: "scalar", repeat: 1, T: 5 };
      items[28] = { no: 29, name: "engine_feature_flags", kind: "scalar", repeat: 2, T: 9 };
      obj11 = { no: 30, name: "debug_config", kind: "message" };
      obj11.T = function T() {
        return outer2_23;
      };
      items[29] = obj11;
      obj12 = { no: 31, name: "expected_end_date", kind: "message" };
      obj12.T = function T() {
        return Experiment$Type(outer2_1[6]).Timestamp;
      };
      items[30] = obj12;
      items[31] = { no: 32, name: "is_automated_change", kind: "scalar", T: 8 };
      items[32] = { no: 44, name: "suppress_editor_mention", kind: "scalar", T: 8 };
      obj13 = { no: 33, name: "archive_at", kind: "message" };
      obj13.T = function T() {
        return Experiment$Type(outer2_1[6]).Timestamp;
      };
      items[33] = obj13;
      obj14 = { no: 35, name: "guild_experiment_version", kind: "message" };
      obj14.T = function T() {
        return Experiment$Type(outer2_1[7]).Int32Value;
      };
      items[34] = obj14;
      obj15 = { no: 36, name: "custom_unit_prefix", kind: "enum" };
      obj15.T = function T() {
        const items = ["discord_protos.discord_experimentation.v1.Experiment.CustomUnitPrefix", outer2_14];
        return items;
      };
      items[35] = obj15;
      obj16 = { no: 45, name: "exposure_points", kind: "enum", repeat: 1 };
      obj16.T = function T() {
        const items = ["discord_protos.discord_experimentation.v1.Experiment.ExposurePointId", outer2_15];
        return items;
      };
      items[36] = obj16;
      items[37] = { no: 37, name: "growthbook_tags", kind: "scalar", repeat: 2, T: 9 };
      items[38] = { no: 38, name: "allocate_right_to_left", kind: "scalar", T: 8 };
      items[39] = { no: 39, name: "is_managed", kind: "scalar", T: 8 };
      obj17 = { no: 43, name: "number_line_settings", kind: "message" };
      obj17.T = function T() {
        return outer2_20;
      };
      items[40] = obj17;
      obj18 = { no: 42, name: "eligibility_persistence", kind: "enum" };
      obj18.T = function T() {
        const items = ["discord_protos.discord_experimentation.v1.Experiment.EligibilityPersistence", outer2_16, "ELIGIBILITY_PERSISTENCE_"];
        return items;
      };
      items[41] = obj18;
      items1 = ["discord_protos.discord_experimentation.v1.Experiment"];
      items1[1] = items;
      return outer1_24(this, Experiment$Type, items1);
    }
  }
  callback3(Experiment$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { id: "0", name: "", creatorId: "0", version: 0, editorId: "0", title: "", description: "", revision: 0, hashKey: "", unitType: 0, variations: [], rules: [], phase: 0, surfaces: [], owningTeamId: "", cachedNotificationChannelId: "0", exposureTracking: 0, assignmentMode: 0, enableEditRawJsonUi: false, winningVariationId: 0, extraOutcomeContext: "", type: 0, isTemplate: false, fieldNumbersToCopy: [], engineFeatureFlags: [], isAutomatedChange: false, suppressEditorMention: false, customUnitPrefix: 0, exposurePoints: [], growthbookTags: [], allocateRightToLeft: false, isManaged: false, eligibilityPersistence: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, Experiment$Type(outer1_1[9]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = Experiment$Type(outer1_1[9]).reflectionMergePartial(this, obj, arr);
        const obj3 = Experiment$Type(outer1_1[9]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        tag.tag(1, Experiment$Type(outer1_1[9]).WireType.Bit64).fixed64(id.id);
        const tagResult = tag.tag(1, Experiment$Type(outer1_1[9]).WireType.Bit64);
      }
      if ("" !== id.name) {
        tag.tag(2, Experiment$Type(outer1_1[9]).WireType.LengthDelimited).string(id.name);
        const tagResult1 = tag.tag(2, Experiment$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if (id.createdAt) {
        const Timestamp = Experiment$Type(outer1_1[6]).Timestamp;
        const tagResult2 = tag.tag(3, Experiment$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined = Timestamp.internalBinaryWrite(id.createdAt, tag.tag(3, Experiment$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Timestamp.internalBinaryWrite(id.createdAt, tag.tag(3, Experiment$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("0" !== id.creatorId) {
        tag.tag(4, Experiment$Type(outer1_1[9]).WireType.Bit64).fixed64(id.creatorId);
        const tagResult3 = tag.tag(4, Experiment$Type(outer1_1[9]).WireType.Bit64);
      }
      if (0 !== id.version) {
        tag.tag(5, Experiment$Type(outer1_1[9]).WireType.Varint).int32(id.version);
        const tagResult4 = tag.tag(5, Experiment$Type(outer1_1[9]).WireType.Varint);
      }
      if (id.editedAt) {
        const Timestamp2 = Experiment$Type(outer1_1[6]).Timestamp;
        const tagResult5 = tag.tag(6, Experiment$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined1 = Timestamp2.internalBinaryWrite(id.editedAt, tag.tag(6, Experiment$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = Timestamp2.internalBinaryWrite(id.editedAt, tag.tag(6, Experiment$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("0" !== id.editorId) {
        tag.tag(7, Experiment$Type(outer1_1[9]).WireType.Bit64).fixed64(id.editorId);
        const tagResult6 = tag.tag(7, Experiment$Type(outer1_1[9]).WireType.Bit64);
      }
      if ("" !== id.title) {
        tag.tag(8, Experiment$Type(outer1_1[9]).WireType.LengthDelimited).string(id.title);
        const tagResult7 = tag.tag(8, Experiment$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if ("" !== id.description) {
        tag.tag(9, Experiment$Type(outer1_1[9]).WireType.LengthDelimited).string(id.description);
        const tagResult8 = tag.tag(9, Experiment$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if (id.hypothesis) {
        const StringValue = Experiment$Type(outer1_1[7]).StringValue;
        const tagResult9 = tag.tag(10, Experiment$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined2 = StringValue.internalBinaryWrite(id.hypothesis, tag.tag(10, Experiment$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = StringValue.internalBinaryWrite(id.hypothesis, tag.tag(10, Experiment$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (id.techSpecLink) {
        const StringValue2 = Experiment$Type(outer1_1[7]).StringValue;
        const tagResult10 = tag.tag(11, Experiment$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined3 = StringValue2.internalBinaryWrite(id.techSpecLink, tag.tag(11, Experiment$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = StringValue2.internalBinaryWrite(id.techSpecLink, tag.tag(11, Experiment$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== id.revision) {
        tag.tag(12, Experiment$Type(outer1_1[9]).WireType.Varint).int32(id.revision);
        const tagResult11 = tag.tag(12, Experiment$Type(outer1_1[9]).WireType.Varint);
      }
      if ("" !== id.hashKey) {
        tag.tag(13, Experiment$Type(outer1_1[9]).WireType.LengthDelimited).string(id.hashKey);
        const tagResult12 = tag.tag(13, Experiment$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if (0 !== id.unitType) {
        tag.tag(14, Experiment$Type(outer1_1[9]).WireType.Varint).int32(id.unitType);
        const tagResult13 = tag.tag(14, Experiment$Type(outer1_1[9]).WireType.Varint);
      }
      let num31 = 0;
      if (0 < id.variations.length) {
        do {
          let tmp43 = outer1_21;
          let tmp44 = Experiment$Type;
          let tmp45 = outer1_1;
          let tagResult14 = tag.tag(15, Experiment$Type(outer1_1[9]).WireType.LengthDelimited);
          let internalBinaryWriteResult4 = outer1_21.internalBinaryWrite(id.variations[num31], tagResult14.fork(), writeUnknownFields);
          let joined4 = internalBinaryWriteResult4.join();
          num31 = num31 + 1;
          length = id.variations.length;
        } while (num31 < length);
      }
      let num32 = 0;
      if (0 < id.rules.length) {
        do {
          let tmp47 = Experiment$Type;
          let tmp48 = outer1_1;
          let Rule = Experiment$Type(outer1_1[8]).Rule;
          let tagResult15 = tag.tag(16, Experiment$Type(outer1_1[9]).WireType.LengthDelimited);
          let internalBinaryWriteResult5 = Rule.internalBinaryWrite(id.rules[num32], tagResult15.fork(), writeUnknownFields);
          let joined5 = internalBinaryWriteResult5.join();
          num32 = num32 + 1;
          length2 = id.rules.length;
        } while (num32 < length2);
      }
      if (0 !== id.phase) {
        tag.tag(18, Experiment$Type(outer1_1[9]).WireType.Varint).int32(id.phase);
        const tagResult16 = tag.tag(18, Experiment$Type(outer1_1[9]).WireType.Varint);
      }
      if (id.surfaces.length) {
        tag.tag(19, Experiment$Type(outer1_1[9]).WireType.LengthDelimited).fork();
        let num35 = 0;
        if (0 < id.surfaces.length) {
          do {
            let int32Result4 = tag.int32(id.surfaces[num35]);
            num35 = num35 + 1;
            length3 = id.surfaces.length;
          } while (num35 < length3);
        }
        const joined6 = tag.join();
        const tagResult17 = tag.tag(19, Experiment$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if ("" !== id.owningTeamId) {
        tag.tag(20, Experiment$Type(outer1_1[9]).WireType.LengthDelimited).string(id.owningTeamId);
        const tagResult18 = tag.tag(20, Experiment$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if ("0" !== id.cachedNotificationChannelId) {
        tag.tag(21, Experiment$Type(outer1_1[9]).WireType.Bit64).fixed64(id.cachedNotificationChannelId);
        const tagResult19 = tag.tag(21, Experiment$Type(outer1_1[9]).WireType.Bit64);
      }
      if (0 !== id.exposureTracking) {
        tag.tag(22, Experiment$Type(outer1_1[9]).WireType.Varint).int32(id.exposureTracking);
        const tagResult20 = tag.tag(22, Experiment$Type(outer1_1[9]).WireType.Varint);
      }
      if (0 !== id.assignmentMode) {
        tag.tag(25, Experiment$Type(outer1_1[9]).WireType.Varint).int32(id.assignmentMode);
        const tagResult21 = tag.tag(25, Experiment$Type(outer1_1[9]).WireType.Varint);
      }
      if (false !== id.enableEditRawJsonUi) {
        tag.tag(23, Experiment$Type(outer1_1[9]).WireType.Varint).bool(id.enableEditRawJsonUi);
        const tagResult22 = tag.tag(23, Experiment$Type(outer1_1[9]).WireType.Varint);
      }
      if (0 !== id.winningVariationId) {
        tag.tag(24, Experiment$Type(outer1_1[9]).WireType.Varint).int32(id.winningVariationId);
        const tagResult23 = tag.tag(24, Experiment$Type(outer1_1[9]).WireType.Varint);
      }
      if ("" !== id.extraOutcomeContext) {
        tag.tag(34, Experiment$Type(outer1_1[9]).WireType.LengthDelimited).string(id.extraOutcomeContext);
        const tagResult24 = tag.tag(34, Experiment$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if (0 !== id.type) {
        tag.tag(26, Experiment$Type(outer1_1[9]).WireType.Varint).int32(id.type);
        const tagResult25 = tag.tag(26, Experiment$Type(outer1_1[9]).WireType.Varint);
      }
      if (false !== id.isTemplate) {
        tag.tag(27, Experiment$Type(outer1_1[9]).WireType.Varint).bool(id.isTemplate);
        const tagResult26 = tag.tag(27, Experiment$Type(outer1_1[9]).WireType.Varint);
      }
      if (id.fieldNumbersToCopy.length) {
        tag.tag(28, Experiment$Type(outer1_1[9]).WireType.LengthDelimited).fork();
        let num46 = 0;
        if (0 < id.fieldNumbersToCopy.length) {
          do {
            let int32Result9 = tag.int32(id.fieldNumbersToCopy[num46]);
            num46 = num46 + 1;
            length4 = id.fieldNumbersToCopy.length;
          } while (num46 < length4);
        }
        const joined7 = tag.join();
        const tagResult27 = tag.tag(28, Experiment$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      let num47 = 0;
      if (0 < id.engineFeatureFlags.length) {
        do {
          let tmp90 = Experiment$Type;
          let tmp91 = outer1_1;
          let tagResult28 = tag.tag(29, Experiment$Type(outer1_1[9]).WireType.LengthDelimited);
          let stringResult6 = tagResult28.string(id.engineFeatureFlags[num47]);
          num47 = num47 + 1;
          length5 = id.engineFeatureFlags.length;
        } while (num47 < length5);
      }
      if (id.debugConfig) {
        const tagResult29 = tag.tag(30, Experiment$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined8 = outer1_23.internalBinaryWrite(id.debugConfig, tag.tag(30, Experiment$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult6 = outer1_23.internalBinaryWrite(id.debugConfig, tag.tag(30, Experiment$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (id.expectedEndDate) {
        const Timestamp3 = Experiment$Type(outer1_1[6]).Timestamp;
        const tagResult30 = tag.tag(31, Experiment$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined9 = Timestamp3.internalBinaryWrite(id.expectedEndDate, tag.tag(31, Experiment$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult7 = Timestamp3.internalBinaryWrite(id.expectedEndDate, tag.tag(31, Experiment$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (false !== id.isAutomatedChange) {
        tag.tag(32, Experiment$Type(outer1_1[9]).WireType.Varint).bool(id.isAutomatedChange);
        const tagResult31 = tag.tag(32, Experiment$Type(outer1_1[9]).WireType.Varint);
      }
      if (false !== id.suppressEditorMention) {
        tag.tag(44, Experiment$Type(outer1_1[9]).WireType.Varint).bool(id.suppressEditorMention);
        const tagResult32 = tag.tag(44, Experiment$Type(outer1_1[9]).WireType.Varint);
      }
      if (id.archiveAt) {
        const Timestamp4 = Experiment$Type(outer1_1[6]).Timestamp;
        const tagResult33 = tag.tag(33, Experiment$Type(outer1_1[9]).WireType.LengthDelimited);
        Timestamp4.internalBinaryWrite(id.archiveAt, tag.tag(33, Experiment$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult8 = Timestamp4.internalBinaryWrite(id.archiveAt, tag.tag(33, Experiment$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (id.guildExperimentVersion) {
        const Int32Value = Experiment$Type(outer1_1[7]).Int32Value;
        const tagResult34 = tag.tag(35, Experiment$Type(outer1_1[9]).WireType.LengthDelimited);
        Int32Value.internalBinaryWrite(id.guildExperimentVersion, tag.tag(35, Experiment$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult9 = Int32Value.internalBinaryWrite(id.guildExperimentVersion, tag.tag(35, Experiment$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== id.customUnitPrefix) {
        tag.tag(36, Experiment$Type(outer1_1[9]).WireType.Varint).int32(id.customUnitPrefix);
        const tagResult35 = tag.tag(36, Experiment$Type(outer1_1[9]).WireType.Varint);
      }
      if (id.exposurePoints.length) {
        tag.tag(45, Experiment$Type(outer1_1[9]).WireType.LengthDelimited).fork();
        let num59 = 0;
        if (0 < id.exposurePoints.length) {
          do {
            let boolResult2 = tag.int32(id.exposurePoints[num59]);
            num59 = num59 + 1;
            length6 = id.exposurePoints.length;
          } while (num59 < length6);
        }
        tag.join();
        const tagResult36 = tag.tag(45, Experiment$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      let num60 = 0;
      if (0 < id.growthbookTags.length) {
        do {
          boolResult2 = Experiment$Type;
          boolResult2 = outer1_1;
          let tagResult37 = tag.tag(37, Experiment$Type(outer1_1[9]).WireType.LengthDelimited);
          boolResult2 = tagResult37.string(id.growthbookTags[num60]);
          num60 = num60 + 1;
          length7 = id.growthbookTags.length;
        } while (num60 < length7);
      }
      if (false !== id.allocateRightToLeft) {
        tag.tag(38, Experiment$Type(outer1_1[9]).WireType.Varint).bool(id.allocateRightToLeft);
        const tagResult38 = tag.tag(38, Experiment$Type(outer1_1[9]).WireType.Varint);
      }
      if (false !== id.isManaged) {
        tag.tag(39, Experiment$Type(outer1_1[9]).WireType.Varint).bool(id.isManaged);
        const tagResult39 = tag.tag(39, Experiment$Type(outer1_1[9]).WireType.Varint);
      }
      if (id.numberLineSettings) {
        const tagResult40 = tag.tag(43, Experiment$Type(outer1_1[9]).WireType.LengthDelimited);
        outer1_20.internalBinaryWrite(id.numberLineSettings, tag.tag(43, Experiment$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult10 = outer1_20.internalBinaryWrite(id.numberLineSettings, tag.tag(43, Experiment$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== id.eligibilityPersistence) {
        tag.tag(42, Experiment$Type(outer1_1[9]).WireType.Varint).int32(id.eligibilityPersistence);
        const tagResult41 = tag.tag(42, Experiment$Type(outer1_1[9]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = Experiment$Type(outer1_1[9]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, id, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(Experiment$Type, items);
})(require("module_1284").MessageType);
tmp2 = new tmp2();
let tmp4 = ((MessageType) => {
  class Experiment_NumberLineSettings$Type {
    constructor() {
      tmp = outer1_3(this, Experiment_NumberLineSettings$Type);
      obj = { no: 1, name: "mode", kind: "enum" };
      obj.T = function T() {
        const items = ["discord_protos.discord_experimentation.v1.Experiment.NumberLineSettings.Mode", outer2_8];
        return items;
      };
      items = [, , ];
      items[0] = obj;
      items[1] = { no: 2, name: "linked_id", kind: "scalar", T: 6 };
      items[2] = { no: 3, name: "shared_control", kind: "scalar", T: 8 };
      items1 = ["discord_protos.discord_experimentation.v1.Experiment.NumberLineSettings"];
      items1[1] = items;
      return outer1_24(this, Experiment_NumberLineSettings$Type, items1);
    }
  }
  callback3(Experiment_NumberLineSettings$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { mode: 0, linkedId: "0", sharedControl: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, Experiment_NumberLineSettings$Type(outer1_1[9]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = Experiment_NumberLineSettings$Type(outer1_1[9]).reflectionMergePartial(this, obj, arr);
        const obj3 = Experiment_NumberLineSettings$Type(outer1_1[9]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = Experiment_NumberLineSettings$Type(outer1_1[9]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(mode, tag, writeUnknownFields) {
      if (0 !== mode.mode) {
        tag.tag(1, Experiment_NumberLineSettings$Type(outer1_1[9]).WireType.Varint).int32(mode.mode);
        const tagResult = tag.tag(1, Experiment_NumberLineSettings$Type(outer1_1[9]).WireType.Varint);
      }
      if ("0" !== mode.linkedId) {
        tag.tag(2, Experiment_NumberLineSettings$Type(outer1_1[9]).WireType.Bit64).fixed64(mode.linkedId);
        const tagResult1 = tag.tag(2, Experiment_NumberLineSettings$Type(outer1_1[9]).WireType.Bit64);
      }
      if (false !== mode.sharedControl) {
        tag.tag(3, Experiment_NumberLineSettings$Type(outer1_1[9]).WireType.Varint).bool(mode.sharedControl);
        const tagResult2 = tag.tag(3, Experiment_NumberLineSettings$Type(outer1_1[9]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = Experiment_NumberLineSettings$Type(outer1_1[9]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, mode, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(Experiment_NumberLineSettings$Type, items);
})(require("module_1284").MessageType);
tmp4 = new tmp4();
let closure_20 = tmp4;
let tmp6 = ((MessageType) => {
  class Variation$Type {
    constructor() {
      tmp = outer1_3(this, Variation$Type);
      items = [, , , , , , ];
      items[0] = { no: 1, name: "id", kind: "scalar", T: 5 };
      items[1] = { no: 2, name: "label", kind: "scalar", T: 9 };
      items[2] = { no: 3, name: "target_allocation", kind: "scalar", T: 5 };
      obj = { no: 4, name: "buckets", kind: "message", repeat: 1 };
      obj.T = function T() {
        return outer2_22;
      };
      items[3] = obj;
      obj = { no: 5, name: "type", kind: "enum" };
      obj.T = function T() {
        const items = ["discord_protos.discord_experimentation.v1.Variation.Type", outer2_17];
        return items;
      };
      items[4] = obj;
      obj1 = { no: 6, name: "configuration", kind: "message" };
      obj1.T = function T() {
        return Variation$Type(outer2_1[7]).StringValue;
      };
      items[5] = obj1;
      items[6] = { no: 7, name: "owning_experiment_id", kind: "scalar", T: 6 };
      items1 = ["discord_protos.discord_experimentation.v1.Variation"];
      items1[1] = items;
      return outer1_24(this, Variation$Type, items1);
    }
  }
  callback3(Variation$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { id: 0, label: "", targetAllocation: 0, buckets: [], type: 0, owningExperimentId: "0" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, Variation$Type(outer1_1[9]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = Variation$Type(outer1_1[9]).reflectionMergePartial(this, obj, arr);
        const obj3 = Variation$Type(outer1_1[9]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
          let tmp31 = outer1_22;
          let arr = buckets.push(outer1_22.internalBinaryRead(pos, pos.uint32(), readUnknownField));
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          obj.type = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (6 === tmp7) {
          let tmp26 = Variation$Type;
          let tmp27 = outer1_1;
          let StringValue = Variation$Type(outer1_1[7]).StringValue;
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
                let tmp13 = outer1_1;
                onRead = Variation$Type(outer1_1[9]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
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
        tag.tag(1, Variation$Type(outer1_1[9]).WireType.Varint).int32(id.id);
        const tagResult = tag.tag(1, Variation$Type(outer1_1[9]).WireType.Varint);
      }
      if ("" !== id.label) {
        tag.tag(2, Variation$Type(outer1_1[9]).WireType.LengthDelimited).string(id.label);
        const tagResult1 = tag.tag(2, Variation$Type(outer1_1[9]).WireType.LengthDelimited);
      }
      if (0 !== id.targetAllocation) {
        tag.tag(3, Variation$Type(outer1_1[9]).WireType.Varint).int32(id.targetAllocation);
        const tagResult2 = tag.tag(3, Variation$Type(outer1_1[9]).WireType.Varint);
      }
      let num7 = 0;
      if (0 < id.buckets.length) {
        do {
          let tmp10 = outer1_22;
          let tmp11 = Variation$Type;
          let tmp12 = outer1_1;
          let tagResult3 = tag.tag(4, Variation$Type(outer1_1[9]).WireType.LengthDelimited);
          let internalBinaryWriteResult = outer1_22.internalBinaryWrite(id.buckets[num7], tagResult3.fork(), writeUnknownFields);
          let joined = internalBinaryWriteResult.join();
          num7 = num7 + 1;
          length = id.buckets.length;
        } while (num7 < length);
      }
      if (0 !== id.type) {
        tag.tag(5, Variation$Type(outer1_1[9]).WireType.Varint).int32(id.type);
        const tagResult4 = tag.tag(5, Variation$Type(outer1_1[9]).WireType.Varint);
      }
      if (id.configuration) {
        const StringValue = Variation$Type(outer1_1[7]).StringValue;
        const tagResult5 = tag.tag(6, Variation$Type(outer1_1[9]).WireType.LengthDelimited);
        const joined1 = StringValue.internalBinaryWrite(id.configuration, tag.tag(6, Variation$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = StringValue.internalBinaryWrite(id.configuration, tag.tag(6, Variation$Type(outer1_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("0" !== id.owningExperimentId) {
        tag.tag(7, Variation$Type(outer1_1[9]).WireType.Bit64).fixed64(id.owningExperimentId);
        const tagResult6 = tag.tag(7, Variation$Type(outer1_1[9]).WireType.Bit64);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = Variation$Type(outer1_1[9]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, id, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(Variation$Type, items);
})(require("module_1284").MessageType);
tmp6 = new tmp6();
let closure_21 = tmp6;
let tmp8 = ((MessageType) => {
  class Bucket$Type {
    constructor() {
      tmp = outer1_3(this, Bucket$Type);
      items = [, , ];
      items[0] = { no: 1, name: "start", kind: "scalar", T: 5 };
      items[1] = { no: 2, name: "stop", kind: "scalar", T: 5 };
      obj = { no: 3, name: "type", kind: "enum" };
      obj.T = function T() {
        const items = ["discord_protos.discord_experimentation.v1.Bucket.Type", outer2_18];
        return items;
      };
      items[2] = obj;
      items1 = ["discord_protos.discord_experimentation.v1.Bucket"];
      items1[1] = items;
      return outer1_24(this, Bucket$Type, items1);
    }
  }
  callback3(Bucket$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { start: 0, stop: 0, type: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, Bucket$Type(outer1_1[9]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = Bucket$Type(outer1_1[9]).reflectionMergePartial(this, obj, arr);
        const obj3 = Bucket$Type(outer1_1[9]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = Bucket$Type(outer1_1[9]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(start, tag, writeUnknownFields) {
      if (0 !== start.start) {
        tag.tag(1, Bucket$Type(outer1_1[9]).WireType.Varint).int32(start.start);
        const tagResult = tag.tag(1, Bucket$Type(outer1_1[9]).WireType.Varint);
      }
      if (0 !== start.stop) {
        tag.tag(2, Bucket$Type(outer1_1[9]).WireType.Varint).int32(start.stop);
        const tagResult1 = tag.tag(2, Bucket$Type(outer1_1[9]).WireType.Varint);
      }
      if (0 !== start.type) {
        tag.tag(3, Bucket$Type(outer1_1[9]).WireType.Varint).int32(start.type);
        const tagResult2 = tag.tag(3, Bucket$Type(outer1_1[9]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = Bucket$Type(outer1_1[9]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, start, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(Bucket$Type, items);
})(require("module_1284").MessageType);
tmp8 = new tmp8();
let closure_22 = tmp8;
let tmp10 = ((MessageType) => {
  class DebugConfig$Type {
    constructor() {
      tmp = outer1_3(this, DebugConfig$Type);
      items = [, , , , , ];
      items[0] = { no: 1, name: "enable_decision_logging", kind: "scalar", T: 8 };
      items[1] = { no: 2, name: "metrics_sample_rate", kind: "scalar", T: 1 };
      items[2] = { no: 3, name: "log_context_on_failure", kind: "scalar", T: 8 };
      items[3] = { no: 4, name: "log_raw_headers", kind: "scalar", T: 8 };
      items[4] = { no: 5, name: "tag_filter_metrics", kind: "scalar", T: 8 };
      items[5] = { no: 6, name: "decision_log_sample_rate", kind: "scalar", T: 1 };
      items1 = ["discord_protos.discord_experimentation.v1.DebugConfig"];
      items1[1] = items;
      return outer1_24(this, DebugConfig$Type, items1);
    }
  }
  callback3(DebugConfig$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { enableDecisionLogging: false, metricsSampleRate: 0, logContextOnFailure: false, logRawHeaders: false, tagFilterMetrics: false, decisionLogSampleRate: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, DebugConfig$Type(outer1_1[9]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = DebugConfig$Type(outer1_1[9]).reflectionMergePartial(this, obj, arr);
        const obj3 = DebugConfig$Type(outer1_1[9]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = DebugConfig$Type(outer1_1[9]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(enableDecisionLogging, tag, writeUnknownFields) {
      if (false !== enableDecisionLogging.enableDecisionLogging) {
        tag.tag(1, DebugConfig$Type(outer1_1[9]).WireType.Varint).bool(enableDecisionLogging.enableDecisionLogging);
        const tagResult = tag.tag(1, DebugConfig$Type(outer1_1[9]).WireType.Varint);
      }
      if (0 !== enableDecisionLogging.metricsSampleRate) {
        tag.tag(2, DebugConfig$Type(outer1_1[9]).WireType.Bit64).double(enableDecisionLogging.metricsSampleRate);
        const tagResult1 = tag.tag(2, DebugConfig$Type(outer1_1[9]).WireType.Bit64);
      }
      if (false !== enableDecisionLogging.logContextOnFailure) {
        tag.tag(3, DebugConfig$Type(outer1_1[9]).WireType.Varint).bool(enableDecisionLogging.logContextOnFailure);
        const tagResult2 = tag.tag(3, DebugConfig$Type(outer1_1[9]).WireType.Varint);
      }
      if (false !== enableDecisionLogging.logRawHeaders) {
        tag.tag(4, DebugConfig$Type(outer1_1[9]).WireType.Varint).bool(enableDecisionLogging.logRawHeaders);
        const tagResult3 = tag.tag(4, DebugConfig$Type(outer1_1[9]).WireType.Varint);
      }
      if (false !== enableDecisionLogging.tagFilterMetrics) {
        tag.tag(5, DebugConfig$Type(outer1_1[9]).WireType.Varint).bool(enableDecisionLogging.tagFilterMetrics);
        const tagResult4 = tag.tag(5, DebugConfig$Type(outer1_1[9]).WireType.Varint);
      }
      if (0 !== enableDecisionLogging.decisionLogSampleRate) {
        tag.tag(6, DebugConfig$Type(outer1_1[9]).WireType.Bit64).double(enableDecisionLogging.decisionLogSampleRate);
        const tagResult5 = tag.tag(6, DebugConfig$Type(outer1_1[9]).WireType.Bit64);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = DebugConfig$Type(outer1_1[9]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, enableDecisionLogging, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(DebugConfig$Type, items);
})(require("module_1284").MessageType);
tmp10 = new tmp10();
let closure_23 = tmp10;
let result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/experiment.tsx");

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
