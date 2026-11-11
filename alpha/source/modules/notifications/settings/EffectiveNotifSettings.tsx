// Module ID: 16050
// Function ID: 16051
// Name: EffectiveNotifSettings
// Dependencies: [32, 16051, 2]
// Exports: legacySourceFingerprint, parseEffectiveNotifSettings

// Module 16050 (EffectiveNotifSettings)
import _mod16051 from "module_16051" /* 16051 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let extendResult;
let intResult;
let intResult2;
let intResult3;
let minResult;
let object4Result;
let positiveResult;
let stringResult;
let z10;
let z11;
let z12;
let z2;
let z3;
let z4;
let z5;
const z = _mod16051.z;
const object = z.object;
const obj = { value: z2.boolean(), source: z3.enum(["legacy_proto", "legacy_default", "declarative", "declarative_sibling", "declarative_retired", "declarative_predecessor"]), explicit: z4.boolean(), inherited: z5.boolean(), setting_id: intResult.positive(), source_setting_id: positiveResult.nullable(), legacy_path: stringResult.regex(/^[a-z][a-z_]*\.[a-z][a-z_]*$/) };
z2 = _mod16051.z;
z3 = _mod16051.z;
z4 = _mod16051.z;
z5 = _mod16051.z;
const z6 = _mod16051.z;
const numberResult = z6.number();
intResult = numberResult.int();
const z7 = _mod16051.z;
const numberResult1 = z7.number();
const intResult1 = numberResult1.int();
positiveResult = intResult1.positive();
const z8 = _mod16051.z;
stringResult = z8.string();
const objectResult = object(obj);
const z9 = _mod16051.z;
const object2 = z9.object;
const obj2 = { contract_version: z10.literal(1), account_id: z11.string(), arm: z12.literal("treatment"), legacy_data_version: intResult2.nonnegative(), declarative_data_version: intResult3.nonnegative(), preferences: object4Result.strip() };
z10 = _mod16051.z;
z11 = _mod16051.z;
z12 = _mod16051.z;
const z13 = _mod16051.z;
const numberResult2 = z13.number();
intResult2 = numberResult2.int();
const z14 = _mod16051.z;
const numberResult3 = z14.number();
intResult3 = numberResult3.int();
const z15 = _mod16051.z;
const obj3 = { go_live: objectResult, voice_channel_activity: objectResult, friends_gaming: objectResult, custom_status_update: objectResult, friend_online: objectResult, profile_updates: objectResult, server_trending: objectResult, reactions: extendResult.optional() };
const object3 = z15.object;
const extend = objectResult.extend;
const obj4 = { value: minResult.max(2) };
const z16 = _mod16051.z;
const numberResult4 = z16.number();
const intResult4 = numberResult4.int();
minResult = intResult4.min(0);
extendResult = extend(obj4);
object4Result = object3(obj3);
let closure_1 = object2(obj2);
const result = size.fileFinishedImporting("modules/notifications/settings/EffectiveNotifSettings.tsx");

export function parseEffectiveNotifSettings(body) {
  const safeParseResult = closure_1.safeParse(body);
  let data;
  if (safeParseResult.success) {
    const _Object = Object;
    if (Object.keys(safeParseResult.data.preferences).length > 0) {
      data = safeParseResult.data;
    }
  }
  return data;
}
export function legacySourceFingerprint(c2, settings) {
  const values = Object.values(c2.preferences);
  return stringify(values.map((legacy_path) => {
    let str2;
    let str3;
    [str2, str3] = legacy_path.legacy_path.split(".");
    _slicedToArray(legacy_path.legacy_path.split("."), 2);
    const replaced = str3.replace(/_([a-z])/g, (arg0, str) => str.toUpperCase());
    const tmp3 = settings[str2.replace(str2, /_([a-z])/g, (arg0, str) => str.toUpperCase())];
    let tmp4;
    if (tmp3 != null) {
      tmp4 = tmp3[replaced];
    }
    return tmp4;
  }));
}
