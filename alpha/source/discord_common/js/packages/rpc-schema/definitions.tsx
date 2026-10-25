// Module ID: 15726
// Function ID: 15727
// Name: definitions
// Dependencies: [1098, 2027, 11472, 1108, 5626, 8827, 15727, 15728, 10649, 15729, 2]

// Module 15726 (definitions)
import ChannelTypes from "ChannelTypes" /* 1108 */;
import Constants2 from "Constants" /* 2027 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5626 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8827 */;
import StatusDisplayTypes from "StatusDisplayTypes" /* 10649 */;
import ActivityPlatform from "ActivityPlatform" /* 11472 */;
import SKUTypes from "SKUTypes" /* 15727 */;
import helpers from "helpers" /* 15728 */;
import contextMenuIcons from "contextMenuIcons" /* 15729 */;
import Constants from "Constants" /* 1098 */;
import size_mod from "module_2" /* 2 */;

let ActivityGamePlatforms;
let EntitlementTypes;
let InviteTargetTypes;
let OrientationLockState;
let c2;
let c3;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function joiEnum(number, OrientationLockState, arg2) {
  let applyResult;
  let metaResult;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let flag = obj.nullable;
  if (flag === undefined) {
    flag = false;
  }
  const values = Object.values(obj[OrientationLockState].values);
  const found = values.filter((item) => typeof item === "number");
  if (found.length > 0) {
    const numberResult = number.number();
    const valid2 = numberResult.valid;
    const items = [];
    HermesBuiltin.arraySpread(items, found, 0);
    applyResult = HermesBuiltin.apply(valid2, items, numberResult);
  } else {
    const stringResult = number.string();
    const valid = stringResult.valid;
    const items1 = [];
    HermesBuiltin.arraySpread(items1, values, 0);
    applyResult = HermesBuiltin.apply(valid, items1, stringResult);
  }
  if (flag) {
    const _HermesInternal = HermesInternal;
    const obj2 = { className: "" + OrientationLockState + " | null" };
    const meta = applyResult.allow(null).meta;
    applyResult.allow(null);
    metaResult = meta(obj2);
  } else {
    const obj3 = { className: OrientationLockState };
    metaResult = applyResult.meta(obj3);
  }
  return metaResult;
}
function Channel(object) {
  let allowResult1;
  let allowResult2;
  let allowResult3;
  let allowResult4;
  let allowResult5;
  let booleanResult;
  let booleanResult1;
  let booleanResult2;
  let booleanResult3;
  let booleanResult4;
  let booleanResult5;
  let itemsResult;
  let itemsResult1;
  let numberResult3;
  let obj21;
  let obj4;
  let object4Result;
  let optionalResult;
  let requiredResult;
  let stringResult4;
  object = object.object;
  const obj = { id: requiredResult.meta({ className: "ChannelId" }), type: obj4.required(), guild_id: optionalResult.meta({ className: "GuildId" }), name: allowResult1.optional(), topic: allowResult2.optional(), bitrate: allowResult3.optional(), user_limit: allowResult4.optional(), position: allowResult5.optional(), voice_states: itemsResult.required(), messages: itemsResult1.required() };
  const stringResult = object.string();
  requiredResult = stringResult.required();
  obj4 = joiEnum(object, "ChannelTypes");
  const stringResult1 = object.string();
  const allowResult = stringResult1.allow(null);
  optionalResult = allowResult.optional();
  const stringResult2 = object.string();
  allowResult1 = stringResult2.allow(null);
  const stringResult3 = object.string();
  allowResult2 = stringResult3.allow(null);
  const numberResult = object.number();
  allowResult3 = numberResult.allow(null);
  const numberResult1 = object.number();
  allowResult4 = numberResult1.allow(null);
  const numberResult2 = object.number();
  allowResult5 = numberResult2.allow(null);
  const obj2 = { mute: booleanResult.required(), nick: stringResult4.required(), user: obj21.required(), voice_state: object4Result.required(), volume: numberResult3.required() };
  const items = object.array().items;
  const object2 = object.object;
  object.array();
  booleanResult = object.boolean();
  stringResult4 = object.string();
  obj21 = User(object);
  const object3 = object.object;
  const obj3 = { mute: booleanResult1.required(), deaf: booleanResult2.required(), self_mute: booleanResult3.required(), self_deaf: booleanResult4.required(), suppress: booleanResult5.required() };
  booleanResult1 = object.boolean();
  booleanResult2 = object.boolean();
  booleanResult3 = object.boolean();
  booleanResult4 = object.boolean();
  booleanResult5 = object.boolean();
  object4Result = object3(obj3);
  numberResult3 = object.number();
  itemsResult = items(object2(obj2));
  const arrayResult2 = object.array();
  itemsResult1 = arrayResult2.items(Message(object));
  return object(obj);
}
function InteractionMetadata(object) {
  let numberResult;
  let obj12;
  let obj4;
  let object1Result;
  let stringResult;
  let stringResult3;
  let stringResult4;
  let stringResult5;
  object = object.object;
  const obj = { id: stringResult.required(), type: numberResult.required(), user: obj4.optional(), authorizing_integration_owners: object1Result.required(), original_response_message_id: stringResult3.optional(), target_user: obj12.optional(), target_message_id: stringResult4.optional(), interacted_message_id: stringResult5.optional() };
  stringResult = object.string();
  numberResult = object.number();
  const obj2 = { 0: null, 1: null };
  const object2 = object.object;
  obj4 = User(object);
  const stringResult1 = object.string();
  const optionalResult = stringResult1.optional();
  obj2[0] = optionalResult.description("ID of the guild the app is installed to");
  const stringResult2 = object.string();
  const optionalResult1 = stringResult2.optional();
  obj2[1] = optionalResult1.description("ID of the user the app is installed to");
  object1Result = object2(obj2);
  stringResult3 = object.string();
  obj12 = User(object);
  stringResult4 = object.string();
  stringResult5 = object.string();
  return object(obj);
}
class Message {
  constructor(object) {
    let _tryResult;
    let allowResult;
    let allowResult1;
    let allowResult10;
    let allowResult11;
    let allowResult12;
    let allowResult13;
    let allowResult14;
    let allowResult15;
    let allowResult16;
    let allowResult17;
    let allowResult18;
    let allowResult19;
    let allowResult2;
    let allowResult20;
    let allowResult21;
    let allowResult22;
    let allowResult23;
    let allowResult24;
    let allowResult25;
    let allowResult26;
    let allowResult27;
    let allowResult28;
    let allowResult29;
    let allowResult3;
    let allowResult30;
    let allowResult31;
    let allowResult32;
    let allowResult33;
    let allowResult34;
    let allowResult35;
    let allowResult36;
    let allowResult37;
    let allowResult38;
    let allowResult39;
    let allowResult4;
    let allowResult40;
    let allowResult41;
    let allowResult42;
    let allowResult43;
    let allowResult44;
    let allowResult45;
    let allowResult46;
    let allowResult47;
    let allowResult48;
    let allowResult49;
    let allowResult5;
    let allowResult50;
    let allowResult51;
    let allowResult52;
    let allowResult53;
    let allowResult54;
    let allowResult55;
    let allowResult56;
    let allowResult57;
    let allowResult58;
    let allowResult59;
    let allowResult6;
    let allowResult60;
    let allowResult61;
    let allowResult62;
    let allowResult63;
    let allowResult64;
    let allowResult7;
    let allowResult8;
    let allowResult9;
    let booleanResult;
    let booleanResult1;
    let booleanResult10;
    let booleanResult11;
    let booleanResult12;
    let booleanResult13;
    let booleanResult14;
    let booleanResult2;
    let booleanResult3;
    let booleanResult5;
    let booleanResult7;
    let items2Result;
    let items3Result;
    let items5Result;
    let items7Result;
    let items8Result;
    let items9Result;
    let itemsResult;
    let itemsResult1;
    let itemsResult2;
    let itemsResult3;
    let keys1;
    let numberResult;
    let numberResult1;
    let numberResult11;
    let numberResult12;
    let numberResult14;
    let numberResult15;
    let numberResult17;
    let numberResult18;
    let numberResult19;
    let numberResult20;
    let numberResult21;
    let numberResult22;
    let obj220;
    let object20;
    let object20Result;
    let object21;
    let object21Result;
    let object41Result;
    let object46Result;
    let object48Result;
    let object49Result;
    let object50Result;
    let object52Result;
    let stringResult;
    let stringResult1;
    let stringResult10;
    let stringResult11;
    let stringResult12;
    let stringResult13;
    let stringResult14;
    let stringResult20;
    let stringResult35;
    let stringResult36;
    let stringResult4;
    let stringResult42;
    let stringResult44;
    let stringResult46;
    let stringResult50;
    let stringResult51;
    let stringResult52;
    let stringResult53;
    let stringResult56;
    let stringResult59;
    let stringResult6;
    let stringResult60;
    let stringResult61;
    let stringResult8;
    let stringResult9;
    object = object.object;
    const obj = { id: stringResult.required(), channel_id: stringResult1.required(), guild_id: allowResult.optional(), author: allowResult1.optional(), member: allowResult3.optional(), content: allowResult4.required(), timestamp: stringResult6.required(), edited_timestamp: allowResult5.optional(), tts: booleanResult2.required(), mention_everyone: booleanResult3.required(), mentions: itemsResult1.required(), mention_roles: itemsResult2.required(), mention_channels: itemsResult3.optional(), attachments: items2Result.required(), embeds: items3Result.required(), components: items5Result.optional(), reactions: allowResult45.optional(), nonce: _tryResult.optional(), pinned: booleanResult7.required(), webhook_id: allowResult46.optional(), type: numberResult14.required(), activity: allowResult48.optional(), application: allowResult51.optional(), message_reference: allowResult55.optional(), flags: allowResult56.optional(), application_id: stringResult50.optional(), sticker_items: items7Result.optional(), poll: object20Result.optional(), interaction_metadata: keys1.optional(), role_subscription_data: object52Result.optional(), blocked: booleanResult14.optional(), nick: allowResult63.optional(), author_color: allowResult64.optional() };
    stringResult = object.string();
    stringResult1 = object.string();
    const stringResult2 = object.string();
    allowResult = stringResult2.allow(null);
    const obj6 = User(object);
    allowResult1 = obj6.allow(null);
    const object2 = object.object;
    const obj2 = { nick: allowResult2.optional(), roles: itemsResult.required(), joined_at: stringResult4.required(), deaf: booleanResult.required(), mute: booleanResult1.required() };
    const stringResult3 = object.string();
    allowResult2 = stringResult3.allow(null);
    const arrayResult = object.array();
    itemsResult = arrayResult.items(object.string());
    stringResult4 = object.string();
    booleanResult = object.boolean();
    booleanResult1 = object.boolean();
    const object1Result = object2(obj2);
    allowResult3 = object1Result.allow(null);
    const stringResult5 = object.string();
    allowResult4 = stringResult5.allow("");
    stringResult6 = object.string();
    const stringResult7 = object.string();
    allowResult5 = stringResult7.allow(null);
    booleanResult2 = object.boolean();
    booleanResult3 = object.boolean();
    const arrayResult12 = object.array();
    itemsResult1 = arrayResult12.items(User(object));
    const arrayResult13 = object.array();
    itemsResult2 = arrayResult13.items(object.string());
    const obj3 = { id: stringResult8.required(), guild_id: stringResult9.required(), type: numberResult.required(), name: stringResult10.required() };
    const items = object.array().items;
    const object3 = object.object;
    object.array();
    stringResult8 = object.string();
    stringResult9 = object.string();
    numberResult = object.number();
    stringResult10 = object.string();
    itemsResult3 = items(object3(obj3));
    size = { id: stringResult11.required(), filename: stringResult12.required(), size: numberResult1.required(), url: stringResult13.required(), proxy_url: stringResult14.required(), height: allowResult6.optional(), width: allowResult7.optional() };
    const items2 = object.array().items;
    const object4 = object.object;
    object.array();
    stringResult11 = object.string();
    stringResult12 = object.string();
    numberResult1 = object.number();
    stringResult13 = object.string();
    stringResult14 = object.string();
    const numberResult2 = object.number();
    allowResult6 = numberResult2.allow(null);
    const numberResult3 = object.number();
    allowResult7 = numberResult3.allow(null);
    items2Result = items2(object4(size));
    const obj4 = { title: allowResult8.optional(), type: allowResult9.optional(), description: allowResult10.optional(), url: allowResult11.optional(), timestamp: allowResult12.optional(), color: allowResult13.optional(), footer: allowResult16.optional(), image: allowResult21.optional(), thumbnail: allowResult26.optional(), video: allowResult31.optional(), provider: allowResult34.optional(), author: allowResult39.optional(), fields: allowResult41.optional() };
    const items3 = object.array().items;
    const object5 = object.object;
    object.array();
    const stringResult15 = object.string();
    allowResult8 = stringResult15.allow(null);
    const stringResult16 = object.string();
    allowResult9 = stringResult16.allow(null);
    const stringResult17 = object.string();
    allowResult10 = stringResult17.allow(null);
    const stringResult18 = object.string();
    allowResult11 = stringResult18.allow(null);
    const stringResult19 = object.string();
    allowResult12 = stringResult19.allow(null);
    const numberResult4 = object.number();
    allowResult13 = numberResult4.allow(null);
    const object6 = object.object;
    const obj5 = { text: stringResult20.required(), icon_url: allowResult14.optional(), proxy_icon_url: allowResult15.optional() };
    stringResult20 = object.string();
    const stringResult21 = object.string();
    allowResult14 = stringResult21.allow(null);
    const stringResult22 = object.string();
    allowResult15 = stringResult22.allow(null);
    const object32Result = object6(obj5);
    allowResult16 = object32Result.allow(null);
    const size1 = { url: allowResult17.optional(), proxy_url: allowResult18.optional(), height: allowResult19.optional(), width: allowResult20.optional() };
    const object7 = object.object;
    const stringResult23 = object.string();
    allowResult17 = stringResult23.allow(null);
    const stringResult24 = object.string();
    allowResult18 = stringResult24.allow(null);
    const numberResult5 = object.number();
    allowResult19 = numberResult5.allow(null);
    const numberResult6 = object.number();
    allowResult20 = numberResult6.allow(null);
    const object33Result = object7(size1);
    allowResult21 = object33Result.allow(null);
    const size2 = { url: allowResult22.optional(), proxy_url: allowResult23.optional(), height: allowResult24.optional(), width: allowResult25.optional() };
    const object8 = object.object;
    const stringResult25 = object.string();
    allowResult22 = stringResult25.allow(null);
    const stringResult26 = object.string();
    allowResult23 = stringResult26.allow(null);
    const numberResult7 = object.number();
    allowResult24 = numberResult7.allow(null);
    const numberResult8 = object.number();
    allowResult25 = numberResult8.allow(null);
    const object34Result = object8(size2);
    allowResult26 = object34Result.allow(null);
    const size3 = { url: allowResult27.optional(), proxy_url: allowResult28.optional(), height: allowResult29.optional(), width: allowResult30.optional() };
    const object9 = object.object;
    const stringResult27 = object.string();
    allowResult27 = stringResult27.allow(null);
    const stringResult28 = object.string();
    allowResult28 = stringResult28.allow(null);
    const numberResult9 = object.number();
    allowResult29 = numberResult9.allow(null);
    const numberResult10 = object.number();
    allowResult30 = numberResult10.allow(null);
    const object35Result = object9(size3);
    allowResult31 = object35Result.allow(null);
    const object10 = object.object;
    const obj7 = { name: allowResult32.optional(), url: allowResult33.optional() };
    const stringResult29 = object.string();
    allowResult32 = stringResult29.allow(null);
    const stringResult30 = object.string();
    allowResult33 = stringResult30.allow(null);
    const object36Result = object10(obj7);
    allowResult34 = object36Result.allow(null);
    const object11 = object.object;
    const obj8 = { name: allowResult35.optional(), url: allowResult36.optional(), icon_url: allowResult37.optional(), proxy_icon_url: allowResult38.optional() };
    const stringResult31 = object.string();
    allowResult35 = stringResult31.allow(null);
    const stringResult32 = object.string();
    allowResult36 = stringResult32.allow(null);
    const stringResult33 = object.string();
    allowResult37 = stringResult33.allow(null);
    const stringResult34 = object.string();
    allowResult38 = stringResult34.allow(null);
    const object37Result = object11(obj8);
    allowResult39 = object37Result.allow(null);
    const obj9 = { name: stringResult35.required(), value: stringResult36.required(), inline: allowResult40.optional() };
    const items4 = object.array().items;
    const object12 = object.object;
    object.array();
    stringResult35 = object.string();
    stringResult36 = object.string();
    const booleanResult4 = object.boolean();
    allowResult40 = booleanResult4.allow(null);
    const items4Result = items4(object12(obj9));
    allowResult41 = items4Result.allow(null);
    items3Result = items3(object5(obj4));
    const obj10 = { type: numberResult11.required() };
    const items5 = object.array().items;
    const object13 = object.object;
    object.array();
    numberResult11 = object.number();
    const object39Result = object13(obj10);
    items5Result = items5(object39Result.unknown(true));
    const obj11 = { count: numberResult12.required(), me: booleanResult5.required(), emoji: object41Result.required() };
    const items6 = object.array().items;
    const object14 = object.object;
    object.array();
    numberResult12 = object.number();
    booleanResult5 = object.boolean();
    const object15 = object.object;
    const obj12 = { id: allowResult42.required(), name: allowResult43.required(), animated: allowResult44.optional() };
    const stringResult37 = object.string();
    allowResult42 = stringResult37.allow(null);
    const stringResult38 = object.string();
    allowResult43 = stringResult38.allow(null);
    const booleanResult6 = object.boolean();
    allowResult44 = booleanResult6.allow(null);
    object41Result = object15(obj12);
    const items6Result = items6(object14(obj11));
    allowResult45 = items6Result.allow(null);
    const _try = object.alternatives().try;
    object.alternatives();
    const stringResult39 = object.string();
    const numberResult13 = object.number();
    _tryResult = _try(stringResult39, numberResult13, object.valid(null));
    booleanResult7 = object.boolean();
    const stringResult40 = object.string();
    allowResult46 = stringResult40.allow(null);
    numberResult14 = object.number();
    const object16 = object.object;
    const obj13 = { type: numberResult15.required(), party_id: allowResult47.optional() };
    numberResult15 = object.number();
    const stringResult41 = object.string();
    allowResult47 = stringResult41.allow(null);
    const object42Result = object16(obj13);
    allowResult48 = object42Result.allow(null);
    const object17 = object.object;
    const obj14 = { id: stringResult42.required(), cover_image: allowResult49.optional(), description: stringResult44.required(), icon: allowResult50.optional(), name: stringResult46.required() };
    stringResult42 = object.string();
    const stringResult43 = object.string();
    allowResult49 = stringResult43.allow(null);
    stringResult44 = object.string();
    const stringResult45 = object.string();
    allowResult50 = stringResult45.allow(null);
    stringResult46 = object.string();
    const object43Result = object17(obj14);
    allowResult51 = object43Result.allow(null);
    const object18 = object.object;
    const obj15 = { message_id: allowResult52.optional(), channel_id: allowResult53.optional(), guild_id: allowResult54.optional() };
    const stringResult47 = object.string();
    allowResult52 = stringResult47.allow(null);
    const stringResult48 = object.string();
    allowResult53 = stringResult48.allow(null);
    const stringResult49 = object.string();
    allowResult54 = stringResult49.allow(null);
    const object44Result = object18(obj15);
    allowResult55 = object44Result.allow(null);
    const numberResult16 = object.number();
    allowResult56 = numberResult16.allow(null);
    stringResult50 = object.string();
    const obj16 = { id: stringResult51.required(), name: stringResult52.required(), format_type: numberResult17.required() };
    const items7 = object.array().items;
    const object19 = object.object;
    object.array();
    stringResult51 = object.string();
    stringResult52 = object.string();
    numberResult17 = object.number();
    items7Result = items7(object19(obj16));
    const obj17 = { question: object21Result.required(), answers: items8Result.required(), expiry: stringResult59.required(), allow_multiselect: booleanResult10.required(), layout_type: numberResult19.required(), results: object50Result.optional() };
    ({ object: object20, object: object21 } = object);
    const obj18 = { text: stringResult53.optional(), emoji: object46Result.optional() };
    stringResult53 = object.string();
    const object22 = object.object;
    const obj19 = { id: allowResult57.optional(), name: allowResult58.optional(), animated: allowResult59.optional() };
    const stringResult54 = object.string();
    allowResult57 = stringResult54.allow(null);
    const stringResult55 = object.string();
    allowResult58 = stringResult55.allow(null);
    const booleanResult8 = object.boolean();
    allowResult59 = booleanResult8.allow(null);
    object46Result = object22(obj19);
    object21Result = object21(obj18);
    const obj20 = { answer_id: numberResult18.required(), poll_media: object48Result.required() };
    const items8 = object.array().items;
    const object23 = object.object;
    object.array();
    numberResult18 = object.number();
    const object24 = object.object;
    const obj21 = { text: stringResult56.optional(), emoji: object49Result.optional() };
    stringResult56 = object.string();
    const object25 = object.object;
    const obj22 = { id: allowResult60.optional(), name: allowResult61.optional(), animated: allowResult62.optional() };
    const stringResult57 = object.string();
    allowResult60 = stringResult57.allow(null);
    const stringResult58 = object.string();
    allowResult61 = stringResult58.allow(null);
    const booleanResult9 = object.boolean();
    allowResult62 = booleanResult9.allow(null);
    object49Result = object25(obj22);
    object48Result = object24(obj21);
    items8Result = items8(object23(obj20));
    stringResult59 = object.string();
    booleanResult10 = object.boolean();
    numberResult19 = object.number();
    const object26 = object.object;
    const obj23 = { is_finalized: booleanResult11.required(), answer_counts: items9Result.required() };
    booleanResult11 = object.boolean();
    const obj24 = { id: numberResult20.required(), count: numberResult21.required(), me_voted: booleanResult12.required() };
    const items9 = object.array().items;
    const object27 = object.object;
    object.array();
    numberResult20 = object.number();
    numberResult21 = object.number();
    booleanResult12 = object.boolean();
    items9Result = items9(object27(obj24));
    object50Result = object26(obj23);
    object20Result = object20(obj17);
    const obj25 = { triggering_interaction_metadata: obj220.optional() };
    const keys = InteractionMetadata(object).keys;
    InteractionMetadata(object);
    obj220 = InteractionMetadata(object);
    keys1 = keys(obj25);
    const object28 = object.object;
    const obj26 = { role_subscription_listing_id: stringResult60.required(), tier_name: stringResult61.required(), total_months_subscribed: numberResult22.required(), is_renewal: booleanResult13.required() };
    stringResult60 = object.string();
    stringResult61 = object.string();
    numberResult22 = object.number();
    booleanResult13 = object.boolean();
    object52Result = object28(obj26);
    booleanResult14 = object.boolean();
    const stringResult62 = object.string();
    allowResult63 = stringResult62.allow(null);
    const stringResult63 = object.string();
    allowResult64 = stringResult63.allow(null);
    const objectResult = object(obj);
    return objectResult.meta({ className: "Message" });
  }
}
class GuildMember {
  constructor(object) {
    let allowResult;
    let allowResult1;
    let allowResult2;
    let allowResult3;
    let allowResult4;
    let allowResult5;
    let allowResult6;
    let booleanResult;
    let itemsResult;
    let numberResult;
    let numberResult1;
    let optionalResult;
    let requiredResult;
    let requiredResult1;
    let stringResult4;
    object = object.object;
    const obj = { user_id: requiredResult.meta({ className: "UserId" }), guild_id: requiredResult1.meta({ className: "GuildId" }), nick: allowResult.required(), avatar: allowResult1.required(), avatar_decoration_data: allowResult2.required(), banner: allowResult3.required(), roles: itemsResult.required(), joined_at: allowResult4.required(), premium_since: allowResult5.required(), communication_disabled_until: allowResult6.required(), pending: booleanResult.required(), flags: numberResult1.required() };
    const stringResult = object.string();
    requiredResult = stringResult.required();
    const stringResult1 = object.string();
    requiredResult1 = stringResult1.required();
    const stringResult2 = object.string();
    allowResult = stringResult2.allow(null);
    const stringResult3 = object.string();
    allowResult1 = stringResult3.allow(null);
    const object2 = object.object;
    const obj2 = { asset: stringResult4.required(), sku_id: optionalResult.meta({ className: "SkuId" }), expires_at: numberResult.allow(null) };
    stringResult4 = object.string();
    const stringResult5 = object.string();
    optionalResult = stringResult5.optional();
    numberResult = object.number();
    const object1Result = object2(obj2);
    const descriptionResult = object1Result.description("Details about avatar decoration");
    const metaResult = descriptionResult.meta({ className: "AvatarDecoration" });
    allowResult2 = metaResult.allow(null);
    const stringResult6 = object.string();
    allowResult3 = stringResult6.allow(null);
    const items = object.array().items;
    object.array();
    const stringResult7 = object.string();
    itemsResult = items(stringResult7.meta({ className: "GuildRoleId" }));
    const stringResult8 = object.string();
    allowResult4 = stringResult8.allow(null);
    const stringResult9 = object.string();
    allowResult5 = stringResult9.allow(null);
    const stringResult10 = object.string();
    allowResult6 = stringResult10.allow(null);
    booleanResult = object.boolean();
    numberResult1 = object.number();
    const objectResult = object(obj);
    return objectResult.meta({ className: "GuildMember" });
  }
}
class Role {
  constructor(object) {
    let allowResult2;
    let allowResult3;
    let booleanResult;
    let booleanResult1;
    let booleanResult2;
    let metaResult;
    let numberResult;
    let numberResult1;
    let numberResult4;
    let numberResult5;
    let object1Result;
    let object4Result;
    let optionalResult;
    let optionalResult1;
    let requiredResult;
    let stringResult1;
    let stringResult5;
    let stringResult6;
    let stringResult7;
    let validResult;
    let validResult3;
    let validResult4;
    object = object.object;
    const obj = { id: requiredResult.meta({ className: "GuildRoleId" }), name: stringResult1.required(), color: numberResult.required(), colors: object1Result.required(), hoist: booleanResult.required(), position: numberResult4.required(), permissions: metaResult.required(), managed: booleanResult1.required(), mentionable: booleanResult2.required(), icon: allowResult2.required(), unicode_emoji: allowResult3.required(), tags: object4Result.required(), flags: numberResult5.required() };
    const stringResult = object.string();
    requiredResult = stringResult.required();
    stringResult1 = object.string();
    numberResult = object.number();
    const object2 = object.object;
    const obj2 = { primary_color: numberResult1.required(), secondary_color: optionalResult.required(), tertiary_color: optionalResult1.required() };
    numberResult1 = object.number();
    const numberResult2 = object.number();
    const allowResult = numberResult2.allow(null);
    optionalResult = allowResult.optional();
    const numberResult3 = object.number();
    const allowResult1 = numberResult3.allow(null);
    optionalResult1 = allowResult1.optional();
    object1Result = object2(obj2);
    booleanResult = object.boolean();
    numberResult4 = object.number();
    const stringResult2 = object.string();
    const regexResult = stringResult2.regex(/^\d+$/);
    metaResult = regexResult.meta({ format: "bigint", className: "SerializedBigFlag" });
    booleanResult1 = object.boolean();
    booleanResult2 = object.boolean();
    const stringResult3 = object.string();
    allowResult2 = stringResult3.allow(null);
    const stringResult4 = object.string();
    allowResult3 = stringResult4.allow(null);
    const object3 = object.object;
    const obj3 = { bot_id: stringResult5.optional(), integration_id: stringResult6.optional(), premium_subscriber: validResult.optional(), subscription_listing_id: stringResult7.optional(), available_for_purchase: validResult3.optional(), guild_connections: validResult4.optional() };
    stringResult5 = object.string();
    stringResult6 = object.string();
    validResult = object.valid(null);
    stringResult7 = object.string();
    validResult3 = object.valid(null);
    validResult4 = object.valid(null);
    object4Result = object3(obj3);
    numberResult5 = object.number();
    const objectResult = object(obj);
    return objectResult.meta({ className: "Role" });
  }
}
class Sku {
  constructor(object) {
    let allowResult;
    let numberResult;
    let numberResult1;
    let obj4;
    let object1Result;
    let stringResult;
    let stringResult1;
    let stringResult2;
    let stringResult3;
    object = object.object;
    const obj = { id: stringResult.required(), name: stringResult1.required(), type: obj4.required(), price: object1Result.required(), application_id: stringResult3.required(), flags: numberResult1.required(), release_date: allowResult.required() };
    stringResult = object.string();
    stringResult1 = object.string();
    obj4 = joiEnum(object, "SKUTypes");
    const object2 = object.object;
    const obj2 = { amount: numberResult.required(), currency: stringResult2.required() };
    numberResult = object.number();
    stringResult2 = object.string();
    object1Result = object2(obj2);
    stringResult3 = object.string();
    numberResult1 = object.number();
    const stringResult4 = object.string();
    allowResult = stringResult4.allow(null);
    const objectResult = object(obj);
    return objectResult.meta({ className: "Sku" });
  }
}
function RPCEntitlement(object) {
  let allowResult;
  let allowResult1;
  let allowResult2;
  let allowResult3;
  let allowResult4;
  let allowResult5;
  let allowResult6;
  let allowResult7;
  let numberResult;
  let obj7;
  let stringResult;
  let stringResult1;
  let stringResult2;
  let stringResult3;
  object = object.object;
  const obj = { id: stringResult.required(), sku_id: stringResult1.required(), application_id: stringResult2.required(), user_id: stringResult3.required(), gift_code_flags: numberResult.required(), type: obj7.required(), gifter_user_id: allowResult.optional(), branches: allowResult1.optional(), starts_at: allowResult2.optional(), ends_at: allowResult3.optional(), parent_id: allowResult4.optional(), consumed: allowResult5.optional(), deleted: allowResult6.optional(), gift_code_batch_id: allowResult7.optional() };
  stringResult = object.string();
  stringResult1 = object.string();
  stringResult2 = object.string();
  stringResult3 = object.string();
  numberResult = object.number();
  obj7 = joiEnum(object, "EntitlementTypes");
  const stringResult4 = object.string();
  allowResult = stringResult4.allow(null);
  const arrayResult = object.array();
  const itemsResult = arrayResult.items(object.string());
  allowResult1 = itemsResult.allow(null);
  const stringResult5 = object.string();
  allowResult2 = stringResult5.allow(null);
  const stringResult6 = object.string();
  allowResult3 = stringResult6.allow(null);
  const stringResult7 = object.string();
  allowResult4 = stringResult7.allow(null);
  const booleanResult = object.boolean();
  allowResult5 = booleanResult.allow(null);
  const booleanResult1 = object.boolean();
  allowResult6 = booleanResult1.allow(null);
  const stringResult8 = object.string();
  allowResult7 = stringResult8.allow(null);
  return object(obj);
}
function VoiceCapabilities(object) {
  let booleanResult;
  let booleanResult1;
  let booleanResult10;
  let booleanResult11;
  let booleanResult2;
  let booleanResult3;
  let booleanResult4;
  let booleanResult5;
  let booleanResult6;
  let booleanResult7;
  let booleanResult8;
  let booleanResult9;
  let integerResult;
  let integerResult1;
  let object1Result;
  object = object.object;
  const obj = { available: booleanResult.required(), connected: booleanResult1.required(), participant_updates: booleanResult2.required(), binary_speaking: booleanResult3.required(), spatial: object1Result.required() };
  booleanResult = object.boolean();
  booleanResult1 = object.boolean();
  booleanResult2 = object.boolean();
  booleanResult3 = object.boolean();
  const object2 = object.object;
  const obj2 = { available: booleanResult4.required(), source_positioning: booleanResult5.required(), source_gain: booleanResult6.required(), source_spatial_blend: booleanResult7.required(), listener_pose: booleanResult8.required(), room_size: booleanResult9.required(), reflections: booleanResult10.required(), acoustics: booleanResult11.required(), max_sources: integerResult.required(), max_updates_per_second: integerResult1.required() };
  booleanResult4 = object.boolean();
  booleanResult5 = object.boolean();
  booleanResult6 = object.boolean();
  booleanResult7 = object.boolean();
  booleanResult8 = object.boolean();
  booleanResult9 = object.boolean();
  booleanResult10 = object.boolean();
  booleanResult11 = object.boolean();
  const numberResult = object.number();
  integerResult = numberResult.integer();
  const numberResult1 = object.number();
  integerResult1 = numberResult1.integer();
  object1Result = object2(obj2);
  return object(obj);
}
function Activity(object) {
  let allowResult;
  let allowResult1;
  let allowResult2;
  let arrayResult4;
  let boolResult1;
  let itemsResult1;
  let itemsResult2;
  let lengthResult;
  let numberResult;
  let numberResult1;
  let numberResult2;
  let numberResult3;
  let numberResult4;
  let numberResult5;
  let numberResult6;
  let object10Result;
  let object11Result;
  let object12Result;
  let object8Result;
  let object9Result;
  let optionalResult;
  let stringResult;
  let stringResult1;
  let stringResult10;
  let stringResult11;
  let stringResult12;
  let stringResult13;
  let stringResult14;
  let stringResult15;
  let stringResult16;
  let stringResult17;
  let stringResult18;
  let stringResult19;
  let stringResult20;
  let stringResult3;
  let stringResult4;
  let stringResult5;
  let stringResult6;
  let stringResult7;
  let stringResult8;
  object = object.object;
  const obj = { session_id: stringResult.optional(), type: numberResult.optional(), name: stringResult1.required(), url: allowResult.optional(), application_id: stringResult3.optional(), status_display_type: numberResult1.optional(), state: stringResult4.optional(), state_url: stringResult5.optional(), details: stringResult6.optional(), details_url: stringResult7.optional(), emoji: allowResult2.optional(), assets: object8Result.optional(), timestamps: object9Result.optional(), party: object10Result.optional(), secrets: object11Result.optional(), sync_id: stringResult19.optional(), created_at: numberResult5.optional(), instance: boolResult1.optional(), flags: numberResult6.optional(), metadata: object12Result.optional(), platform: stringResult20.optional(), supported_platforms: itemsResult1.optional(), buttons: itemsResult2.optional() };
  stringResult = object.string();
  numberResult = object.number();
  stringResult1 = object.string();
  const stringResult2 = object.string();
  allowResult = stringResult2.allow(null);
  stringResult3 = object.string();
  numberResult1 = object.number();
  stringResult4 = object.string();
  stringResult5 = object.string();
  stringResult6 = object.string();
  stringResult7 = object.string();
  const object2 = object.object;
  const obj2 = { name: stringResult8.required(), id: allowResult1.optional(), animated: optionalResult.allow(null) };
  stringResult8 = object.string();
  const stringResult9 = object.string();
  allowResult1 = stringResult9.allow(null);
  const boolResult = object.bool();
  optionalResult = boolResult.optional();
  const object1Result = object2(obj2);
  allowResult2 = object1Result.allow(null);
  const object3 = object.object;
  const obj3 = { large_image: stringResult10.optional(), large_text: stringResult11.optional(), large_url: stringResult12.optional(), small_image: stringResult13.optional(), small_text: stringResult14.optional(), small_url: stringResult15.optional() };
  stringResult10 = object.string();
  stringResult11 = object.string();
  stringResult12 = object.string();
  stringResult13 = object.string();
  stringResult14 = object.string();
  stringResult15 = object.string();
  object8Result = object3(obj3);
  const object4 = object.object;
  const obj4 = { start: numberResult2.optional(), end: numberResult3.optional() };
  numberResult2 = object.number();
  numberResult3 = object.number();
  object9Result = object4(obj4);
  const object5 = object.object;
  const obj5 = { id: stringResult16.optional(), size: lengthResult.optional(), privacy: numberResult4.optional() };
  stringResult16 = object.string();
  const arrayResult = object.array();
  const itemsResult = arrayResult.items(object.number());
  lengthResult = itemsResult.length(2);
  numberResult4 = object.number();
  object10Result = object5(obj5);
  const object6 = object.object;
  const obj6 = { match: stringResult17.optional(), join: stringResult18.optional() };
  stringResult17 = object.string();
  stringResult18 = object.string();
  object11Result = object6(obj6);
  stringResult19 = object.string();
  numberResult5 = object.number();
  boolResult1 = object.bool();
  numberResult6 = object.number();
  const object7 = object.object;
  const obj7 = { button_urls: arrayResult4.items(object.string()) };
  arrayResult4 = object.array();
  object12Result = object7(obj7);
  stringResult20 = object.string();
  const arrayResult5 = object.array();
  itemsResult1 = arrayResult5.items(object.string());
  const arrayResult6 = object.array();
  itemsResult2 = arrayResult6.items(object.string());
  return object(obj);
}
class User {
  constructor(object) {
    let allowResult;
    let allowResult1;
    let descriptionResult;
    let metaResult;
    let numberResult1;
    let numberResult2;
    let optionalResult;
    let requiredResult1;
    let requiredResult2;
    let requiredResult3;
    let stringResult1;
    let stringResult5;
    object = object.object;
    const obj = { id: descriptionResult.meta({ className: "UserId" }), username: stringResult1.required(), global_name: allowResult.description("Global Discord name. Not unique."), discriminator: requiredResult1.description("Global name discriminator. Will be 0 if a unique username"), avatar: allowResult1.description("User Avatar ID"), flags: requiredResult2.description("Public user flags. Deprecated: use public_flags."), public_flags: numberResult1.description("Public user flags"), bot: requiredResult3.description("If a bot user."), avatar_decoration_data: metaResult.allow(null) };
    const stringResult = object.string();
    const requiredResult = stringResult.required();
    descriptionResult = requiredResult.description("User ID");
    stringResult1 = object.string();
    const stringResult2 = object.string();
    allowResult = stringResult2.allow(null);
    const stringResult3 = object.string();
    requiredResult1 = stringResult3.required();
    const stringResult4 = object.string();
    allowResult1 = stringResult4.allow(null);
    const numberResult = object.number();
    requiredResult2 = numberResult.required();
    numberResult1 = object.number();
    const boolResult = object.bool();
    requiredResult3 = boolResult.required();
    const object2 = object.object;
    const obj2 = { asset: stringResult5.required(), sku_id: optionalResult.meta({ className: "SkuId" }), expires_at: numberResult2.allow(null) };
    stringResult5 = object.string();
    const stringResult6 = object.string();
    optionalResult = stringResult6.optional();
    numberResult2 = object.number();
    const object1Result = object2(obj2);
    const descriptionResult1 = object1Result.description("Details about avatar decoration");
    metaResult = descriptionResult1.meta({ className: "AvatarDecoration" });
    const objectResult = object(obj);
    const descriptionResult2 = objectResult.description("Discord User");
    return descriptionResult2.meta({ className: "User" });
  }
}
function ContextMenuItem(string, arg1) {
  let applyResult;
  let maxResult;
  let maxResult1;
  let maxResult2;
  let stringResult1;
  let stringResult3;
  let stringResult5;
  let stringResult6;
  let validResult;
  const obj = { id: maxResult.required(), type: stringResult1.valid("item", "checkbox", "radio"), label: maxResult1.required(), subtext: stringResult3.max(100), icon: applyResult.meta({ className: "ContextMenuIconName" }), color: stringResult5.valid("default", "brand", "danger", "premium", "success"), disabled: string.boolean(), checked: string.boolean(), group: stringResult6.max(64) };
  const stringResult = string.string();
  maxResult = stringResult.max(64);
  stringResult1 = string.string();
  const stringResult2 = string.string();
  maxResult1 = stringResult2.max(100);
  const items = [...contextMenuIcons.CONTEXT_MENU_ICON_NAMES];
  stringResult3 = string.string();
  const stringResult4 = string.string();
  applyResult = stringResult4.valid.apply(items);
  stringResult5 = string.string();
  stringResult6 = string.string();
  const obj2 = { type: validResult.required() };
  const _try = string.alternatives().try;
  const object = string.object;
  string.alternatives();
  const stringResult7 = string.string();
  let tmp4 = obj;
  const object2 = string.object;
  validResult = stringResult7.valid("separator");
  const objectResult = object(obj2);
  if (arg1) {
    const obj3 = { items: maxResult2.items(ContextMenuItem(string, false)) };
    const merged = Object.assign(obj);
    const arrayResult = string.array();
    tmp4 = obj3;
    maxResult2 = arrayResult.max(30);
  }
  return _try(objectResult, object2(tmp4));
}
class EmbeddedSurface {
  constructor(alternatives) {
    let optionalResult;
    let optionalResult1;
    let optionalResult2;
    let optionalResult3;
    let optionalResult4;
    let requiredResult;
    let requiredResult1;
    let requiredResult2;
    let requiredResult3;
    let requiredResult4;
    let requiredResult5;
    let requiredResult6;
    let requiredResult7;
    const obj = { type: requiredResult.meta({ className: "EmbeddedSurfaceType.MAIN" }), channel_id: optionalResult.meta({ className: "ChannelId" }), guild_id: optionalResult1.meta({ className: "GuildId" }) };
    const _try = alternatives.alternatives().try;
    const object = alternatives.object;
    alternatives.alternatives();
    const numberResult = alternatives.number();
    const validResult = numberResult.valid(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
    requiredResult = validResult.required();
    const stringResult = alternatives.string();
    optionalResult = stringResult.optional();
    const stringResult1 = alternatives.string();
    optionalResult1 = stringResult1.optional();
    const object2 = alternatives.object;
    const obj2 = { type: requiredResult1.meta({ className: "EmbeddedSurfaceType.APP_CHANNEL" }), channel_id: requiredResult2.meta({ className: "ChannelId" }), guild_id: optionalResult2.meta({ className: "GuildId" }) };
    const objectResult = object(obj);
    const numberResult1 = alternatives.number();
    const validResult5 = numberResult1.valid(EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL);
    requiredResult1 = validResult5.required();
    const stringResult2 = alternatives.string();
    requiredResult2 = stringResult2.required();
    const stringResult3 = alternatives.string();
    optionalResult2 = stringResult3.optional();
    const object3 = alternatives.object;
    const obj3 = { type: requiredResult3.meta({ className: "EmbeddedSurfaceType.VOICE_CHANNEL" }), channel_id: requiredResult4.meta({ className: "ChannelId" }), guild_id: optionalResult3.meta({ className: "GuildId" }) };
    const object1Result = object2(obj2);
    const numberResult2 = alternatives.number();
    const validResult6 = numberResult2.valid(EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL);
    requiredResult3 = validResult6.required();
    const stringResult4 = alternatives.string();
    requiredResult4 = stringResult4.required();
    const stringResult5 = alternatives.string();
    optionalResult3 = stringResult5.optional();
    const object4 = alternatives.object;
    const obj4 = { type: requiredResult5.meta({ className: "EmbeddedSurfaceType.INTERACTION_MODAL" }), channel_id: requiredResult6.meta({ className: "ChannelId" }), guild_id: optionalResult4.meta({ className: "GuildId" }) };
    const object6Result = object3(obj3);
    const numberResult3 = alternatives.number();
    const validResult7 = numberResult3.valid(EmbeddedSurfaceType.EmbeddedSurfaceType.INTERACTION_MODAL);
    requiredResult5 = validResult7.required();
    const stringResult6 = alternatives.string();
    requiredResult6 = stringResult6.required();
    const stringResult7 = alternatives.string();
    optionalResult4 = stringResult7.optional();
    const object5 = alternatives.object;
    const obj5 = { type: requiredResult7.meta({ className: "EmbeddedSurfaceType.OVERLAY" }) };
    const object7Result = object4(obj4);
    const numberResult4 = alternatives.number();
    const validResult8 = numberResult4.valid(EmbeddedSurfaceType.EmbeddedSurfaceType.OVERLAY);
    requiredResult7 = validResult8.required();
    const _tryResult = _try(objectResult, object1Result, object6Result, object7Result, object5(obj5));
    return _tryResult.meta({ className: "EmbeddedSurface" });
  }
}
({ ActivityPartyPrivacy: c2, ActivityTypes: c3, ActivityGamePlatforms, EntitlementTypes, InviteTargetTypes } = Constants);
const RPCEnums = { ActivityGamePlatforms: { values: ActivityGamePlatforms, from: "@discordapp/common/Constants" }, ActivityPlatform: obj2, ChannelTypes: obj3, EmbeddedSurfaceType: obj4, EntitlementTypes: { values: EntitlementTypes, from: "@discordapp/common/Constants" }, InviteTargetTypes: { values: InviteTargetTypes, from: "@discordapp/common/Constants" }, OAuth2Scopes: obj5, OrientationLockState: { values: OrientationLockState, from: "@discordapp/common/activities/Constants" }, SKUTypes: obj6 };
obj2 = { values: ActivityPlatform.ActivityPlatform, from: "@discordapp/common/constants/ActivityPlatform" };
OrientationLockState = Constants2.OrientationLockState;
obj3 = { values: ChannelTypes.ChannelTypes, from: "@discordapp/common/shared-constants/ChannelTypes" };
obj4 = { values: EmbeddedSurfaceType.EmbeddedSurfaceType, from: "@discordapp/common/shared-constants/EmbeddedSurfaceType" };
obj5 = { values: OAuth2Scopes.OAuth2Scopes, from: "@discordapp/common/shared-constants/OAuth2Scopes" };
obj6 = { values: SKUTypes.SKUTypes, from: "@discordapp/common/shared-constants/SKUTypes" };
let obj7 = {
  request(string) {
    let stringResult;
    const obj = { session_id: stringResult.required() };
    stringResult = string.string();
    return obj;
  },
  response(boolean) {
    let booleanResult;
    const obj = { success: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  }
};
let obj8 = {
  request(string) {
    let stringResult;
    let validResult;
    const obj = { session_id: stringResult.required(), fit: validResult.required() };
    stringResult = string.string();
    const stringResult1 = string.string();
    validResult = stringResult1.valid("contain", "cover");
    return obj;
  },
  response(boolean) {
    let booleanResult;
    const obj = { success: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  }
};
let obj9 = {
  request(string) {
    let maxResult;
    let stringResult;
    let validResult;
    const obj = { owner_user_id: stringResult.required(), transport_nonce: maxResult.required(), fit: validResult.optional() };
    stringResult = string.string();
    const stringResult1 = string.string();
    maxResult = stringResult1.max(128);
    const stringResult2 = string.string();
    validResult = stringResult2.valid("contain", "cover");
    return obj;
  },
  response(string) {
    let maxResult;
    let stringResult;
    let stringResult1;
    let stringResult2;
    let validResult;
    const obj = { session_id: stringResult.required(), owner_user_id: stringResult1.required(), channel_id: stringResult2.required(), transport: validResult.required(), viewer_url: maxResult.required() };
    stringResult = string.string();
    stringResult1 = string.string();
    stringResult2 = string.string();
    const stringResult3 = string.string();
    validResult = stringResult3.valid("iframe");
    const stringResult4 = string.string();
    maxResult = stringResult4.max(1024);
    return obj;
  }
};
let obj10 = {
  embeddedAppSDK: true,
  request: "Array",
  response(string) {
    let stringResult;
    const obj = { image_url: stringResult.required() };
    stringResult = string.string();
    return obj;
  }
};
let obj11 = {
  embeddedAppSDK: true,
  response: "Array",
  request(string) {
    let requiredResult;
    const obj = { mediaUrl: requiredResult.max(1024) };
    const stringResult = string.string();
    requiredResult = stringResult.required();
    return obj;
  }
};
let obj12 = {
  embeddedAppSDK: true,
  request(string) {
    let allowResult;
    const obj = { access_token: allowResult.optional() };
    const stringResult = string.string();
    allowResult = stringResult.allow(null);
    return obj;
  },
  response(string) {
    let itemsResult;
    let itemsResult1;
    let numberResult;
    let object1Result;
    let objectResult;
    let stringResult;
    let stringResult1;
    let stringResult10;
    let stringResult2;
    let stringResult3;
    let stringResult4;
    let stringResult5;
    let stringResult6;
    let stringResult7;
    let stringResult8;
    let stringResult9;
    const obj = { access_token: stringResult.required(), user: objectResult.required(), scopes: itemsResult.required(), expires: stringResult6.required(), application: object1Result.required() };
    stringResult = string.string();
    const object = string.object;
    const obj2 = { username: stringResult1.required(), discriminator: stringResult2.required(), id: stringResult3.required(), avatar: stringResult4.allow(null), public_flags: numberResult.required(), global_name: stringResult5.allow(null) };
    stringResult1 = string.string();
    stringResult2 = string.string();
    stringResult3 = string.string();
    stringResult4 = string.string();
    numberResult = string.number();
    stringResult5 = string.string();
    objectResult = object(obj2);
    const arrayResult = string.array();
    itemsResult = arrayResult.items(joiEnum(string, "OAuth2Scopes"));
    stringResult6 = string.string();
    const object2 = string.object;
    const obj3 = { description: stringResult7.required(), icon: stringResult8.allow(null), id: stringResult9.required(), rpc_origins: itemsResult1.optional(), name: stringResult10.required() };
    stringResult7 = string.string();
    stringResult8 = string.string();
    stringResult9 = string.string();
    const arrayResult2 = string.array();
    itemsResult1 = arrayResult2.items(string.string());
    stringResult10 = string.string();
    object1Result = object2(obj3);
    return obj;
  }
};
let obj13 = {
  embeddedAppSDK: true,
  request: "Array",
  response(array) {
    let itemsResult;
    let stringResult;
    const obj = { participants: itemsResult.required() };
    const items = array.array().items;
    array.array();
    const obj2 = { nickname: stringResult.description("Server nickname. Not unique.") };
    const keys = User(array).keys;
    User(array);
    stringResult = array.string();
    const keys1 = keys(obj2);
    const metaResult = keys1.meta({ className: "ActivityParticipant" });
    itemsResult = items(metaResult.required());
    return obj;
  }
};
let obj14 = {
  request(string) {
    let maxResult;
    const obj = { build: maxResult.required() };
    const stringResult = string.string();
    maxResult = stringResult.max(64);
    return obj;
  },
  response(boolean) {
    let booleanResult;
    const obj = { relaunched: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  }
};
let obj15 = {
  request: "Array",
  response(object) {
    return VoiceCapabilities(object);
  }
};
let obj16 = {
  request(string) {
    let stringResult;
    const obj = { session_id: stringResult.required() };
    stringResult = string.string();
    return obj;
  },
  response(array) {
    let allowResult;
    let allowResult1;
    let booleanResult;
    let booleanResult1;
    let booleanResult2;
    let booleanResult3;
    let itemsResult;
    let stringResult;
    let stringResult1;
    const obj = { participants: itemsResult.required() };
    const obj2 = { user_id: stringResult.required(), username: stringResult1.required(), global_name: allowResult.required(), avatar: allowResult1.required(), mute: booleanResult.required(), deaf: booleanResult1.required(), self_mute: booleanResult2.required(), self_deaf: booleanResult3.required() };
    const items = array.array().items;
    const object = array.object;
    array.array();
    stringResult = array.string();
    stringResult1 = array.string();
    const stringResult2 = array.string();
    allowResult = stringResult2.allow(null);
    const stringResult3 = array.string();
    allowResult1 = stringResult3.allow(null);
    booleanResult = array.boolean();
    booleanResult1 = array.boolean();
    booleanResult2 = array.boolean();
    booleanResult3 = array.boolean();
    const objectResult = object(obj2);
    itemsResult = items(objectResult.required());
    return obj;
  }
};
let obj17 = {
  request: "Array",
  response(string) {
    let allowResult;
    let allowResult1;
    let booleanResult;
    let booleanResult1;
    let booleanResult2;
    let booleanResult3;
    let itemsResult;
    let obj4;
    let stringResult;
    let stringResult1;
    let stringResult2;
    let stringResult3;
    const obj = { session_id: stringResult.required(), channel_id: stringResult1.required(), capabilities: obj4.required(), participants: itemsResult.required() };
    stringResult = string.string();
    stringResult1 = string.string();
    obj4 = VoiceCapabilities(string);
    const obj2 = { user_id: stringResult2.required(), username: stringResult3.required(), global_name: allowResult.required(), avatar: allowResult1.required(), mute: booleanResult.required(), deaf: booleanResult1.required(), self_mute: booleanResult2.required(), self_deaf: booleanResult3.required() };
    const items = string.array().items;
    const object = string.object;
    string.array();
    stringResult2 = string.string();
    stringResult3 = string.string();
    const stringResult4 = string.string();
    allowResult = stringResult4.allow(null);
    const stringResult5 = string.string();
    allowResult1 = stringResult5.allow(null);
    booleanResult = string.boolean();
    booleanResult1 = string.boolean();
    booleanResult2 = string.boolean();
    booleanResult3 = string.boolean();
    const objectResult = object(obj2);
    itemsResult = items(objectResult.required());
    return obj;
  }
};
let obj18 = {
  request(string) {
    let itemsResult;
    let maxResult;
    let maxResult1;
    let maxResult10;
    let maxResult2;
    let maxResult3;
    let maxResult4;
    let maxResult5;
    let maxResult7;
    let maxResult8;
    let maxResult9;
    let object;
    let object1Result;
    let object2;
    let object2Result;
    let object7Result;
    let objectResult;
    let stringResult;
    let stringResult1;
    const obj = { session_id: stringResult.required(), listener: objectResult.required(), sources: itemsResult.required() };
    stringResult = string.string();
    const obj2 = { position: object2Result.required(), forward: object1Result.required() };
    const point = { x: maxResult.required(), y: maxResult1.required(), z: maxResult2.required() };
    ({ object, object: object2 } = string);
    const numberResult = string.number();
    const minResult = numberResult.min(-100000);
    maxResult = minResult.max(100000);
    const numberResult1 = string.number();
    const minResult1 = numberResult1.min(-100000);
    maxResult1 = minResult1.max(100000);
    const numberResult2 = string.number();
    const minResult2 = numberResult2.min(-100000);
    maxResult2 = minResult2.max(100000);
    object2Result = object2(point);
    const point1 = { x: maxResult3.required(), y: maxResult4.required(), z: maxResult5.required() };
    const object3 = string.object;
    const numberResult3 = string.number();
    const minResult3 = numberResult3.min(-100000);
    maxResult3 = minResult3.max(100000);
    const numberResult4 = string.number();
    const minResult4 = numberResult4.min(-100000);
    maxResult4 = minResult4.max(100000);
    const numberResult5 = string.number();
    const minResult5 = numberResult5.min(-100000);
    maxResult5 = minResult5.max(100000);
    object1Result = object3(point1);
    objectResult = object(obj2);
    const arrayResult = string.array();
    const obj3 = { user_id: stringResult1.required(), position: object7Result.required(), gain: maxResult10.optional() };
    const items = arrayResult.max(50).items;
    const object4 = string.object;
    arrayResult.max(50);
    stringResult1 = string.string();
    const point2 = { x: maxResult7.required(), y: maxResult8.required(), z: maxResult9.required() };
    const object5 = string.object;
    const numberResult6 = string.number();
    const minResult6 = numberResult6.min(-100000);
    maxResult7 = minResult6.max(100000);
    const numberResult7 = string.number();
    const minResult7 = numberResult7.min(-100000);
    maxResult8 = minResult7.max(100000);
    const numberResult8 = string.number();
    const minResult8 = numberResult8.min(-100000);
    maxResult9 = minResult8.max(100000);
    object7Result = object5(point2);
    const numberResult9 = string.number();
    const minResult9 = numberResult9.min(0);
    maxResult10 = minResult9.max(1);
    const object6Result = object4(obj3);
    itemsResult = items(object6Result.required());
    return obj;
  },
  response(boolean) {
    let booleanResult;
    const obj = { success: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  }
};
let obj19 = {
  request(string) {
    let booleanResult;
    let booleanResult1;
    let booleanResult2;
    let booleanResult3;
    let booleanResult4;
    let booleanResult5;
    let maxResult;
    let maxResult1;
    let maxResult10;
    let maxResult11;
    let maxResult12;
    let maxResult13;
    let maxResult14;
    let maxResult15;
    let maxResult16;
    let maxResult17;
    let maxResult18;
    let maxResult19;
    let maxResult2;
    let maxResult20;
    let maxResult21;
    let maxResult22;
    let maxResult23;
    let maxResult24;
    let maxResult25;
    let maxResult26;
    let maxResult27;
    let maxResult28;
    let maxResult3;
    let maxResult4;
    let maxResult5;
    let maxResult6;
    let maxResult7;
    let maxResult8;
    let maxResult9;
    let object;
    let object10;
    let object10Result;
    let object11;
    let object11Result;
    let object12;
    let object12Result;
    let object13;
    let object13Result;
    let object14;
    let object14Result;
    let object15;
    let object15Result;
    let object16Result;
    let object17Result;
    let object18Result;
    let object19Result;
    let object1Result;
    let object2;
    let object2Result;
    let object7;
    let object7Result;
    let object8;
    let object8Result;
    let objectResult;
    let stringResult;
    const obj = { session_id: stringResult.required(), acoustics: objectResult.required() };
    stringResult = string.string();
    const obj2 = { binaural: object2Result.optional(), distance_attenuation: object1Result.optional(), air_absorption: object16Result.optional(), reflections: object18Result.optional() };
    ({ object, object: object2 } = string);
    const obj3 = { spatial_blend: maxResult.optional(), bilinear_interpolation: booleanResult.optional(), hrtf_volume: maxResult1.optional(), hrtf_normalization: booleanResult1.optional() };
    const numberResult = string.number();
    const minResult = numberResult.min(0);
    maxResult = minResult.max(1);
    booleanResult = string.boolean();
    const numberResult1 = string.number();
    const minResult1 = numberResult1.min(0);
    maxResult1 = minResult1.max(2);
    booleanResult1 = string.boolean();
    object2Result = object2(obj3);
    const object3 = string.object;
    const obj4 = { enabled: booleanResult2.optional(), min_distance: maxResult2.optional() };
    booleanResult2 = string.boolean();
    const numberResult2 = string.number();
    const minResult2 = numberResult2.min(0.1);
    maxResult2 = minResult2.max(100);
    object1Result = object3(obj4);
    const object4 = string.object;
    const obj5 = { enabled: booleanResult3.optional(), coefficients: object17Result.optional() };
    booleanResult3 = string.boolean();
    const object5 = string.object;
    const obj6 = { low: maxResult3.required(), mid: maxResult4.required(), high: maxResult5.required() };
    const numberResult3 = string.number();
    const minResult3 = numberResult3.min(0);
    maxResult3 = minResult3.max(1);
    const numberResult4 = string.number();
    const minResult4 = numberResult4.min(0);
    maxResult4 = minResult4.max(1);
    const numberResult5 = string.number();
    const minResult5 = numberResult5.min(0);
    maxResult5 = minResult5.max(1);
    object17Result = object5(obj6);
    object16Result = object4(obj5);
    const object6 = string.object;
    const obj7 = { enabled: booleanResult4.optional(), duration_seconds: maxResult6.optional(), num_rays: maxResult7.optional(), num_bounces: maxResult8.optional(), irradiance_min_distance: maxResult9.optional(), binaural_decode: booleanResult5.optional(), mix_level: maxResult10.optional(), room: object7Result.optional() };
    booleanResult4 = string.boolean();
    const numberResult6 = string.number();
    const minResult6 = numberResult6.min(0.1);
    maxResult6 = minResult6.max(2);
    const numberResult7 = string.number();
    const integerResult = numberResult7.integer();
    const minResult7 = integerResult.min(64);
    maxResult7 = minResult7.max(4096);
    const numberResult8 = string.number();
    const integerResult1 = numberResult8.integer();
    const minResult8 = integerResult1.min(1);
    maxResult8 = minResult8.max(64);
    const numberResult9 = string.number();
    const minResult9 = numberResult9.min(0.1);
    maxResult9 = minResult9.max(10);
    booleanResult5 = string.boolean();
    const numberResult10 = string.number();
    const minResult10 = numberResult10.min(0);
    maxResult10 = minResult10.max(2);
    const obj8 = { min_corner: object8Result.optional(), max_corner: object19Result.optional(), floor: object10Result.optional(), ceiling: object12Result.optional(), walls: object14Result.optional() };
    const point = { x: maxResult11.required(), y: maxResult12.required(), z: maxResult13.required() };
    ({ object: object7, object: object8 } = string);
    const numberResult11 = string.number();
    const minResult11 = numberResult11.min(-1000);
    maxResult11 = minResult11.max(1000);
    const numberResult12 = string.number();
    const minResult12 = numberResult12.min(-1000);
    maxResult12 = minResult12.max(1000);
    const numberResult13 = string.number();
    const minResult13 = numberResult13.min(-1000);
    maxResult13 = minResult13.max(1000);
    object8Result = object8(point);
    const point1 = { x: maxResult14.required(), y: maxResult15.required(), z: maxResult16.required() };
    const object9 = string.object;
    const numberResult14 = string.number();
    const minResult14 = numberResult14.min(-1000);
    maxResult14 = minResult14.max(1000);
    const numberResult15 = string.number();
    const minResult15 = numberResult15.min(-1000);
    maxResult15 = minResult15.max(1000);
    const numberResult16 = string.number();
    const minResult16 = numberResult16.min(-1000);
    maxResult16 = minResult16.max(1000);
    object19Result = object9(point1);
    const obj9 = { absorption: object11Result.required(), scattering: maxResult20.required() };
    ({ object: object10, object: object11 } = string);
    const obj10 = { low: maxResult17.required(), mid: maxResult18.required(), high: maxResult19.required() };
    const numberResult17 = string.number();
    const minResult17 = numberResult17.min(0);
    maxResult17 = minResult17.max(1);
    const numberResult18 = string.number();
    const minResult18 = numberResult18.min(0);
    maxResult18 = minResult18.max(1);
    const numberResult19 = string.number();
    const minResult19 = numberResult19.min(0);
    maxResult19 = minResult19.max(1);
    object11Result = object11(obj10);
    const numberResult20 = string.number();
    const minResult20 = numberResult20.min(0);
    maxResult20 = minResult20.max(1);
    object10Result = object10(obj9);
    const obj11 = { absorption: object13Result.required(), scattering: maxResult24.required() };
    ({ object: object12, object: object13 } = string);
    const obj12 = { low: maxResult21.required(), mid: maxResult22.required(), high: maxResult23.required() };
    const numberResult21 = string.number();
    const minResult21 = numberResult21.min(0);
    maxResult21 = minResult21.max(1);
    const numberResult22 = string.number();
    const minResult22 = numberResult22.min(0);
    maxResult22 = minResult22.max(1);
    const numberResult23 = string.number();
    const minResult23 = numberResult23.min(0);
    maxResult23 = minResult23.max(1);
    object13Result = object13(obj12);
    const numberResult24 = string.number();
    const minResult24 = numberResult24.min(0);
    maxResult24 = minResult24.max(1);
    object12Result = object12(obj11);
    const obj13 = { absorption: object15Result.required(), scattering: maxResult28.required() };
    ({ object: object14, object: object15 } = string);
    const obj14 = { low: maxResult25.required(), mid: maxResult26.required(), high: maxResult27.required() };
    const numberResult25 = string.number();
    const minResult25 = numberResult25.min(0);
    maxResult25 = minResult25.max(1);
    const numberResult26 = string.number();
    const minResult26 = numberResult26.min(0);
    maxResult26 = minResult26.max(1);
    const numberResult27 = string.number();
    const minResult27 = numberResult27.min(0);
    maxResult27 = minResult27.max(1);
    object15Result = object15(obj14);
    const numberResult28 = string.number();
    const minResult28 = numberResult28.min(0);
    maxResult28 = minResult28.max(1);
    object14Result = object14(obj13);
    object7Result = object7(obj8);
    object18Result = object6(obj7);
    objectResult = object(obj2);
    return obj;
  },
  response(boolean) {
    let booleanResult;
    const obj = { success: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  }
};
let obj20 = {
  request: "Array",
  response(boolean) {
    let booleanResult;
    let booleanResult1;
    let validResult;
    const obj = { available: booleanResult.required(), transport: validResult.required(), requires_existing_watch: booleanResult1.required() };
    booleanResult = boolean.boolean();
    const stringResult = boolean.string();
    validResult = stringResult.valid("iframe");
    booleanResult1 = boolean.boolean();
    return obj;
  }
};
let obj21 = {
  request: "Array",
  response(boolean) {
    let booleanResult;
    let validResult;
    const obj = { available: booleanResult.required(), transport: validResult.required() };
    booleanResult = boolean.boolean();
    const stringResult = boolean.string();
    validResult = stringResult.valid("iframe");
    return obj;
  }
};
let obj22 = {
  request(string) {
    let items;
    let items2;
    let items3;
    let maxResult1;
    let maxResult2;
    let maxResult3;
    let numberResult;
    let numberResult1;
    let obj2;
    let obj3;
    let obj4;
    let object;
    let object2;
    let object3;
    let object4;
    let stringResult;
    let stringResult1;
    let stringResult2;
    let stringResult3;
    let stringResult4;
    let validResult;
    let validResult2;
    const obj = { command: stringResult.required(), options: items(object(obj2)), content: stringResult3.max(2000), require_launch_channel: string.boolean(), preview_image: object2(size), components: items2(object3(obj3)), pid: string.number() };
    stringResult = string.string();
    obj2 = { name: stringResult1.required(), value: stringResult2.required() };
    items = string.array().items;
    object = string.object;
    string.array();
    stringResult1 = string.string();
    stringResult2 = string.string();
    stringResult3 = string.string();
    size = { height: numberResult.required(), url: stringResult4.required(), width: numberResult1.required() };
    object2 = string.object;
    numberResult = string.number();
    stringResult4 = string.string();
    numberResult1 = string.number();
    obj3 = { type: validResult.required(), components: items3(object4(obj4)) };
    items2 = string.array().items;
    object3 = string.object;
    string.array();
    const numberResult2 = string.number();
    validResult = numberResult2.valid(1);
    const arrayResult4 = string.array();
    obj4 = { type: validResult2.required(), style: maxResult1.required(), label: maxResult2.description("Text that appears on the button"), custom_id: maxResult3.description("Developer-defined identifier for the button; max 100 characters") };
    items3 = arrayResult4.max(5).items;
    object4 = string.object;
    arrayResult4.max(5);
    const numberResult3 = string.number();
    validResult2 = numberResult3.valid(2);
    const numberResult4 = string.number();
    const minResult = numberResult4.min(1);
    maxResult1 = minResult.max(5);
    const stringResult5 = string.string();
    maxResult2 = stringResult5.max(80);
    const stringResult6 = string.string();
    maxResult3 = stringResult6.max(100);
    return obj;
  },
  response(boolean) {
    let booleanResult;
    const obj = { success: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  }
};
let obj23 = {
  embeddedAppSDK: true,
  request(string) {
    let maxResult;
    let stringResult;
    let stringResult2;
    const obj = { custom_id: stringResult.max(64), message: maxResult.required(), link_id: stringResult2.max(64) };
    stringResult = string.string();
    const stringResult1 = string.string();
    maxResult = stringResult1.max(1000);
    stringResult2 = string.string();
    return obj;
  },
  response(boolean) {
    let booleanResult;
    let booleanResult1;
    let booleanResult2;
    const obj = { success: booleanResult.required(), didCopyLink: booleanResult1.required(), didSendMessage: booleanResult2.required() };
    booleanResult = boolean.boolean();
    booleanResult1 = boolean.boolean();
    booleanResult2 = boolean.boolean();
    return obj;
  }
};
let obj24 = {
  request(string) {
    let items;
    let maxResult;
    let maxResult2;
    let maxResult3;
    let obj2;
    let object;
    let stringResult1;
    let stringResult2;
    let stringResult3;
    let stringResult4;
    let stringResult8;
    let stringResult9;
    let validResult;
    const obj = { content: maxResult.required(), link: stringResult1.max(1024), custom_id: stringResult2.max(64), link_id: stringResult3.max(64), image_url: stringResult4.max(1024), attachments: items(object(obj2)), preview_title: stringResult8.max(100), preview_subtitle: stringResult9.max(100) };
    const stringResult = string.string();
    maxResult = stringResult.max(1000);
    stringResult1 = string.string();
    stringResult2 = string.string();
    stringResult3 = string.string();
    stringResult4 = string.string();
    const arrayResult = string.array();
    obj2 = { data: maxResult2.required(), filename: maxResult3.required(), content_type: validResult.required() };
    items = arrayResult.max(10).items;
    object = string.object;
    arrayResult.max(10);
    const stringResult5 = string.string();
    maxResult2 = stringResult5.max(14000000);
    const stringResult6 = string.string();
    maxResult3 = stringResult6.max(64);
    const stringResult7 = string.string();
    validResult = stringResult7.valid("image/png", "image/jpeg", "image/gif", "image/webp", "video/mp4", "video/webm");
    stringResult8 = string.string();
    stringResult9 = string.string();
    return obj;
  },
  response(boolean) {
    let booleanResult;
    let booleanResult1;
    let booleanResult2;
    const obj = { success: booleanResult.required(), didCopyLink: booleanResult1.required(), didSendMessage: booleanResult2.required() };
    booleanResult = boolean.boolean();
    booleanResult1 = boolean.boolean();
    booleanResult2 = boolean.boolean();
    return obj;
  }
};
let obj25 = {
  request(string) {
    let maxResult;
    let maxResult1;
    let maxResult2;
    let stringResult1;
    let stringResult2;
    let stringResult3;
    let validResult;
    const point = { type: validResult.required(), id: stringResult1.max(64), channel_id: stringResult2.max(64), url: stringResult3.max(1024), items: maxResult.items(ContextMenuItem(string, true)), x: maxResult1.required(), y: maxResult2.required() };
    const stringResult = string.string();
    validResult = stringResult.valid("user", "channel", "message", "image", "custom");
    stringResult1 = string.string();
    stringResult2 = string.string();
    stringResult3 = string.string();
    const arrayResult = string.array();
    const minResult = arrayResult.min(1);
    maxResult = minResult.max(30);
    const numberResult = string.number();
    const minResult1 = numberResult.min(0);
    maxResult1 = minResult1.max(65535);
    const numberResult1 = string.number();
    const minResult2 = numberResult1.min(0);
    maxResult2 = minResult2.max(65535);
    return point;
  },
  response(boolean) {
    let booleanResult;
    let stringResult;
    const obj = { opened: booleanResult.required(), selected_id: stringResult.allow(null) };
    booleanResult = boolean.boolean();
    stringResult = boolean.string();
    return obj;
  }
};
let obj26 = {
  request(string) {
    let maxResult;
    let maxResult1;
    let maxResult2;
    const point = { user_id: maxResult.required(), x: maxResult1.required(), y: maxResult2.required() };
    const stringResult = string.string();
    maxResult = stringResult.max(64);
    const numberResult = string.number();
    const minResult = numberResult.min(0);
    maxResult1 = minResult.max(65535);
    const numberResult1 = string.number();
    const minResult1 = numberResult1.min(0);
    maxResult2 = minResult1.max(65535);
    return point;
  },
  response(boolean) {
    let booleanResult;
    const obj = { opened: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  }
};
let items = [, , , , , , , ];
const obj27 = {
  request(array) {
    let maxResult;
    let maxResult1;
    let minResult;
    let minResult1;
    let minResult3;
    let stringResult1;
    let stringResult2;
    const obj = { items: maxResult1.required(), starting_index: minResult3.max(49) };
    size = { url: maxResult.required(), type: stringResult1.valid("image", "video"), width: minResult.max(16384), height: minResult1.max(16384), alt: stringResult2.max(1024) };
    const items = array.array().items;
    const object = array.object;
    array.array();
    const stringResult = array.string();
    maxResult = stringResult.max(1024);
    stringResult1 = array.string();
    const numberResult = array.number();
    minResult = numberResult.min(1);
    const numberResult1 = array.number();
    minResult1 = numberResult1.min(1);
    stringResult2 = array.string();
    const itemsResult = items(object(size));
    const minResult2 = itemsResult.min(1);
    maxResult1 = minResult2.max(50);
    const numberResult2 = array.number();
    minResult3 = numberResult2.min(0);
    return obj;
  },
  response(boolean) {
    let booleanResult;
    const obj = { opened: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  }
};
const obj28 = {
  request(string) {
    let maxResult;
    const obj = { user_id: maxResult.required() };
    const stringResult = string.string();
    maxResult = stringResult.max(64);
    return obj;
  },
  response(boolean) {
    let booleanResult;
    const obj = { opened: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  }
};
const obj29 = {
  request(string) {
    let stringResult;
    let stringResult1;
    const obj = { game_id: stringResult.max(64), application_id: stringResult1.max(64) };
    stringResult = string.string();
    stringResult1 = string.string();
    return obj;
  },
  response(boolean) {
    let booleanResult;
    const obj = { opened: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  }
};
const obj30 = {
  request(string) {
    let maxResult;
    let maxResult1;
    let maxResult2;
    let stringResult1;
    let stringResult2;
    let stringResult3;
    const point = { text: maxResult.required(), shortcut: stringResult1.max(32), x: maxResult1.required(), y: maxResult2.required(), position: stringResult2.valid("top", "bottom", "left", "right"), align: stringResult3.valid("top", "center", "bottom", "left", "right") };
    const stringResult = string.string();
    maxResult = stringResult.max(200);
    stringResult1 = string.string();
    const numberResult = string.number();
    const minResult = numberResult.min(0);
    maxResult1 = minResult.max(65535);
    const numberResult1 = string.number();
    const minResult1 = numberResult1.min(0);
    maxResult2 = minResult1.max(65535);
    stringResult2 = string.string();
    stringResult3 = string.string();
    return point;
  },
  response(boolean) {
    let booleanResult;
    const obj = { shown: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  }
};
const obj31 = {
  request: "Array",
  response(boolean) {
    let booleanResult;
    const obj = { hidden: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  }
};
const obj32 = {
  request(string) {
    let maxResult;
    let validResult;
    const obj = { message: maxResult.required(), type: validResult.required() };
    const stringResult = string.string();
    maxResult = stringResult.max(200);
    const stringResult1 = string.string();
    validResult = stringResult1.valid("message", "success", "failure");
    return obj;
  },
  response(boolean) {
    let booleanResult;
    const obj = { shown: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  }
};
const obj33 = {
  request(string) {
    let maxResult;
    let maxResult1;
    let stringResult2;
    let stringResult4;
    let validResult;
    const obj = { type: validResult.required(), title: maxResult.required(), body: stringResult2.max(1000), confirm_text: maxResult1.required(), cancel_text: stringResult4.max(32) };
    const stringResult = string.string();
    validResult = stringResult.valid("alert", "confirm");
    const stringResult1 = string.string();
    maxResult = stringResult1.max(100);
    stringResult2 = string.string();
    const stringResult3 = string.string();
    maxResult1 = stringResult3.max(32);
    stringResult4 = string.string();
    return obj;
  },
  response(boolean) {
    const obj = { confirmed: boolean.boolean(), acknowledged: boolean.boolean() };
    return obj;
  }
};
const obj34 = {
  request: "Array",
  response(array) {
    let items;
    let obj2;
    let object;
    let validResult;
    let validResult2;
    const obj = { permissions: items(object(obj2)) };
    const arrayResult = array.array();
    obj2 = { permission: validResult.required(), state: validResult2.required() };
    items = arrayResult.required().items;
    object = array.object;
    arrayResult.required();
    const stringResult = array.string();
    validResult = stringResult.valid("screen_capture", "connect_user_to_voice");
    const stringResult1 = array.string();
    validResult2 = stringResult1.valid("granted", "denied", "prompt", "unsupported");
    return obj;
  }
};
const obj35 = {
  request(array) {
    let items;
    let validResult;
    const obj = { permissions: items(validResult.required()) };
    const arrayResult = array.array();
    const minResult = arrayResult.min(1);
    const uniqueResult = minResult.unique();
    items = uniqueResult.required().items;
    uniqueResult.required();
    const stringResult = array.string();
    validResult = stringResult.valid("screen_capture", "connect_user_to_voice");
    return obj;
  },
  response(array) {
    let items;
    let obj2;
    let object;
    let validResult;
    let validResult2;
    const obj = { permissions: items(object(obj2)) };
    const arrayResult = array.array();
    obj2 = { permission: validResult.required(), state: validResult2.required() };
    items = arrayResult.required().items;
    object = array.object;
    arrayResult.required();
    const stringResult = array.string();
    validResult = stringResult.valid("screen_capture", "connect_user_to_voice");
    const stringResult1 = array.string();
    validResult2 = stringResult1.valid("granted", "denied", "prompt", "unsupported");
    return obj;
  }
};
const obj36 = {
  request(number) {
    let maxResult;
    let maxResult1;
    const obj = { max_width: maxResult.optional(), max_height: maxResult1.optional() };
    const numberResult = number.number();
    const integerResult = numberResult.integer();
    const minResult = integerResult.min(1);
    maxResult = minResult.max(1920);
    const numberResult1 = number.number();
    const integerResult1 = numberResult1.integer();
    const minResult1 = integerResult1.min(1);
    maxResult1 = minResult1.max(1920);
    return obj;
  },
  response(string) {
    let integerResult;
    let integerResult1;
    let stringResult1;
    let validResult;
    size = { status: validResult.required(), image: stringResult1.optional(), width: integerResult.optional(), height: integerResult1.optional() };
    const stringResult = string.string();
    validResult = stringResult.valid("ok", "permission_required", "permission_denied", "unsupported", "no_game", "game_not_focused", "timeout", "capture_failed", "busy");
    stringResult1 = string.string();
    const numberResult = string.number();
    integerResult = numberResult.integer();
    const numberResult1 = string.number();
    integerResult1 = numberResult1.integer();
    return size;
  }
};
const obj37 = {
  embeddedAppSDK: true,
  request: "Array",
  response(array) {
    let items;
    let numberResult;
    let obj2;
    let obj3;
    let obj5;
    let obj8;
    let object;
    let object2;
    let stringResult;
    const obj = { relationships: items(object(obj2)) };
    const arrayResult = array.array();
    obj2 = { type: numberResult.required(), user: obj5.required(), presence: object2(obj3) };
    items = arrayResult.required().items;
    object = array.object;
    arrayResult.required();
    numberResult = array.number();
    obj5 = User(array);
    object2 = array.object;
    obj3 = { status: stringResult.required(), activity: obj8.allow(null) };
    stringResult = array.string();
    obj8 = Activity(array);
    return obj;
  }
};
const obj38 = {
  embeddedAppSDK: true,
  request(string) {
    let minResult;
    let stringResult;
    const obj = { user_id: stringResult.required(), content: minResult.max(1024) };
    stringResult = string.string();
    const stringResult1 = string.string();
    minResult = stringResult1.min(0);
    return obj;
  },
  response: "Reflect"
};
const obj39 = {
  embeddedAppSDK: true,
  request: "Array",
  response(object) {
    let obj2;
    let obj8;
    let objectResult;
    let stringResult;
    let stringResult1;
    let stringResult2;
    const obj = { surface: obj2.required(), launch: objectResult.required(), platform: obj8.required() };
    obj2 = EmbeddedSurface(object);
    object = object.object;
    const obj3 = { custom_id: stringResult.optional(), referrer_id: stringResult1.optional(), interaction_id: stringResult2.optional() };
    stringResult = object.string();
    stringResult1 = object.string();
    stringResult2 = object.string();
    objectResult = object(obj3);
    obj8 = joiEnum(object, "ActivityPlatform");
    return obj;
  }
};
const obj40 = {
  embeddedAppSDK: true,
  request(string) {
    let maxResult;
    const obj = { id: maxResult.required() };
    const stringResult = string.string();
    maxResult = stringResult.max(64);
    return obj;
  },
  response(arg0) {
    const obj = User(arg0);
    return obj.allow(null);
  }
};
const obj41 = {
  embeddedAppSDK: true,
  request: "Array",
  response(arg0) {
    const obj = User(arg0);
    return obj.allow(null);
  }
};
const obj42 = {
  embeddedAppSDK: true,
  request(string) {
    let requiredResult;
    const obj = { quest_id: requiredResult.meta({ className: "QuestId" }) };
    const stringResult = string.string();
    requiredResult = stringResult.required();
    return obj;
  },
  response(string) {
    let allowResult;
    let booleanResult;
    let stringResult;
    const obj = { quest_id: stringResult.required(), is_enrolled: booleanResult.required(), enrolled_at: allowResult.optional() };
    stringResult = string.string();
    booleanResult = string.boolean();
    const stringResult1 = string.string();
    allowResult = stringResult1.allow(null);
    return obj;
  }
};
const obj43 = {
  embeddedAppSDK: true,
  request(string) {
    let requiredResult;
    const obj = { quest_id: requiredResult.meta({ className: "QuestId" }) };
    const stringResult = string.string();
    requiredResult = stringResult.required();
    return obj;
  },
  response(boolean) {
    let booleanResult;
    const obj = { success: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  }
};
const obj44 = {
  embeddedAppSDK: true,
  request: "Array",
  response(string) {
    let allowResult;
    let allowResult1;
    let stringResult;
    let stringResult3;
    const obj = { quest_id: stringResult.required(), enrolled_at: allowResult.optional(), completed_at: allowResult1.optional(), external_cta_url: stringResult3.required() };
    stringResult = string.string();
    const stringResult1 = string.string();
    allowResult = stringResult1.allow(null);
    const stringResult2 = string.string();
    allowResult1 = stringResult2.allow(null);
    stringResult3 = string.string();
    return obj;
  }
};
const obj45 = {
  embeddedAppSDK: true,
  request: "Array",
  response(string) {
    let stringResult;
    const obj = { ticket: stringResult.required() };
    stringResult = string.string();
    return obj;
  }
};
const obj46 = {
  request(boolean) {
    let booleanResult;
    const obj = { enabled: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  },
  response(boolean) {
    let booleanResult;
    const obj = { enabled: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  }
};
const obj47 = {
  request(string) {
    let allowResult;
    const obj = { hash: allowResult.required() };
    const stringResult = string.string();
    const maxResult = stringResult.max(512);
    allowResult = maxResult.allow("");
    return obj;
  },
  response(string) {
    let allowResult;
    const obj = { hash: allowResult.required() };
    const stringResult = string.string();
    allowResult = stringResult.allow("");
    return obj;
  }
};
const obj48 = {
  request(string) {
    let validResult;
    const obj = { type: validResult.required() };
    const stringResult = string.string();
    validResult = stringResult.valid("auto", "playback", "transient", "transient-solo", "ambient", "play-and-record");
    return obj;
  },
  response(boolean) {
    let booleanResult;
    const obj = { success: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  }
};
const obj49 = {
  embeddedAppSDK: true,
  request(string) {
    let maxResult;
    let maxResult1;
    const obj = { level: maxResult.required(), message: maxResult1.required() };
    const stringResult = string.string();
    maxResult = stringResult.max(10);
    const stringResult1 = string.string();
    maxResult1 = stringResult1.max(1000);
    return obj;
  },
  response: "Reflect"
};
const obj50 = {
  embeddedAppSDK: true,
  request: "Array",
  response(boolean) {
    let booleanResult;
    const obj = { enabled: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  }
};
const obj51 = {
  embeddedAppSDK: true,
  request: "Array",
  response(boolean) {
    let booleanResult;
    const obj = { iosKeyboardResizesView: booleanResult.optional() };
    booleanResult = boolean.boolean();
    return obj;
  }
};
const obj52 = {
  embeddedAppSDK: true,
  request: "Array",
  response(string) {
    let stringResult;
    const obj = { locale: stringResult.required() };
    stringResult = string.string();
    return obj;
  }
};
const obj53 = {
  embeddedAppSDK: true,
  request(number) {
    let obj2;
    let obj3;
    let obj4;
    const obj = { lock_state: obj2.required(), picture_in_picture_lock_state: obj3.optional(), grid_lock_state: obj4.optional() };
    obj2 = joiEnum(number, "OrientationLockState");
    obj3 = joiEnum(number, "OrientationLockState", { nullable: true });
    obj4 = joiEnum(number, "OrientationLockState", { nullable: true });
    return obj;
  },
  response: "Reflect"
};
const obj54 = {
  embeddedAppSDK: true,
  request(boolean) {
    let booleanResult;
    const obj = { use_interactive_pip: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  },
  response(boolean) {
    let booleanResult;
    const obj = { use_interactive_pip: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  }
};
const obj55 = {
  embeddedAppSDK: true,
  request(string) {
    let maxResult;
    const obj = { url: maxResult.required() };
    const stringResult = string.string();
    maxResult = stringResult.max(8000);
    return obj;
  },
  response(object) {
    let allowResult;
    object = object.object;
    const obj = { opened: allowResult.required() };
    const booleanResult = object.boolean();
    allowResult = booleanResult.allow(null);
    const objectResult = object(obj);
    return objectResult.default({ opened: null });
  }
};
const obj56 = {
  embeddedAppSDK: true,
  request: "Array",
  response(string) {
    let metaResult;
    const obj = { permissions: metaResult.required() };
    const stringResult = string.string();
    const regexResult = stringResult.regex(/^\d+$/);
    metaResult = regexResult.meta({ format: "bigint", className: "SerializedBigFlag" });
    return obj;
  }
};
const obj57 = {
  embeddedAppSDK: true,
  request: "Array",
  response(array) {
    let itemsResult;
    const obj = { skus: itemsResult.required() };
    const arrayResult = array.array();
    itemsResult = arrayResult.items(Sku(array));
    return obj;
  }
};
const obj58 = {
  embeddedAppSDK: true,
  request: "Array",
  response(array) {
    let itemsResult;
    const obj = { entitlements: itemsResult.required() };
    const arrayResult = array.array();
    itemsResult = arrayResult.items(RPCEntitlement(array));
    return obj;
  }
};
const obj59 = {
  embeddedAppSDK: true,
  request(string) {
    let numberResult;
    let requiredResult;
    const obj = { sku_id: requiredResult.meta({ className: "SkuId" }), pid: numberResult.min(0) };
    const stringResult = string.string();
    requiredResult = stringResult.required();
    numberResult = string.number();
    return obj;
  },
  response(array) {
    const arrayResult = array.array();
    const itemsResult = arrayResult.items(RPCEntitlement(array));
    return itemsResult.allow(null);
  }
};
const obj60 = {
  embeddedAppSDK: true,
  request(string) {
    let requiredResult;
    const obj = { channel_id: requiredResult.meta({ className: "ChannelId" }) };
    const stringResult = string.string();
    requiredResult = stringResult.required();
    return obj;
  },
  response(arg0) {
    return Channel(arg0);
  }
};
const obj61 = {
  embeddedAppSDK: true,
  request(string) {
    let optionalResult;
    const obj = { guild_id: optionalResult.meta({ className: "GuildId" }) };
    const stringResult = string.string();
    const allowResult = stringResult.allow("", null);
    optionalResult = allowResult.optional();
    return obj;
  },
  response(array) {
    let allowResult;
    let itemsResult;
    let obj7;
    let requiredResult;
    const obj = { channels: itemsResult.required() };
    const obj2 = { id: requiredResult.meta({ className: "ChannelId" }), name: allowResult.required(), type: obj7.required() };
    const items = array.array().items;
    const object = array.object;
    array.array();
    const stringResult = array.string();
    requiredResult = stringResult.required();
    const stringResult1 = array.string();
    allowResult = stringResult1.allow("");
    obj7 = joiEnum(array, "ChannelTypes");
    itemsResult = items(object(obj2));
    return obj;
  }
};
const obj62 = {
  request: "Array",
  response(arg0) {
    const obj = Channel(arg0);
    return obj.allow(null);
  }
};
const obj63 = {
  request(string) {
    let booleanResult;
    let booleanResult1;
    let maxResult;
    let optionalResult;
    const obj = { channel_id: optionalResult.meta({ className: "ChannelId" }), timeout: maxResult.optional(), force: booleanResult.optional(), navigate: booleanResult1.optional() };
    const stringResult = string.string();
    const allowResult = stringResult.allow(null);
    optionalResult = allowResult.optional();
    const numberResult = string.number();
    const minResult = numberResult.min(0);
    maxResult = minResult.max(60);
    booleanResult = string.boolean();
    booleanResult1 = string.boolean();
    return obj;
  },
  response(arg0) {
    const obj = Channel(arg0);
    return obj.allow(null);
  }
};
const obj64 = {
  request(string) {
    let maxResult;
    let optionalResult;
    const obj = { channel_id: optionalResult.meta({ className: "ChannelId" }), timeout: maxResult.optional() };
    const stringResult = string.string();
    const allowResult = stringResult.allow(null);
    optionalResult = allowResult.optional();
    const numberResult = string.number();
    const minResult = numberResult.min(0);
    maxResult = minResult.max(60);
    return obj;
  },
  response(arg0) {
    const obj = Channel(arg0);
    return obj.allow(null);
  }
};
const obj65 = {
  request(string) {
    let allowResult1;
    let booleanResult;
    let booleanResult1;
    let numberResult;
    let numberResult1;
    let obj8;
    let optionalResult;
    let requiredResult;
    const obj = { channel_id: requiredResult.meta({ className: "ChannelId" }), max_age: numberResult.optional(), max_uses: numberResult1.optional(), temporary: booleanResult.optional(), unique: booleanResult1.optional(), target_type: obj8.optional(), target_user_id: optionalResult.meta({ className: "UserId" }), target_application_id: allowResult1.optional() };
    const stringResult = string.string();
    requiredResult = stringResult.required();
    numberResult = string.number();
    numberResult1 = string.number();
    booleanResult = string.boolean();
    booleanResult1 = string.boolean();
    obj8 = joiEnum(string, "InviteTargetTypes", { nullable: true });
    const stringResult1 = string.string();
    const allowResult = stringResult1.allow(null);
    optionalResult = allowResult.optional();
    const stringResult2 = string.string();
    allowResult1 = stringResult2.allow(null);
    return obj;
  },
  response(string) {
    let allowResult;
    let allowResult1;
    let booleanResult;
    let numberResult;
    let numberResult1;
    let numberResult2;
    let numberResult3;
    let numberResult4;
    let object1Result;
    let objectResult;
    let requiredResult;
    let requiredResult1;
    let stringResult;
    let stringResult2;
    let stringResult4;
    const obj = { code: stringResult.required(), type: numberResult.optional(), channel: objectResult.optional(), guild: object1Result.optional(), expires_at: allowResult1.optional(), max_age: numberResult2.optional(), max_uses: numberResult3.optional(), uses: numberResult4.optional(), temporary: booleanResult.optional() };
    stringResult = string.string();
    numberResult = string.number();
    const object = string.object;
    const obj2 = { id: requiredResult.meta({ className: "ChannelId" }), name: stringResult2.required(), type: numberResult1.required() };
    const stringResult1 = string.string();
    requiredResult = stringResult1.required();
    stringResult2 = string.string();
    numberResult1 = string.number();
    objectResult = object(obj2);
    const object2 = string.object;
    const obj3 = { id: requiredResult1.meta({ className: "GuildId" }), name: stringResult4.required(), icon: allowResult.required() };
    const stringResult3 = string.string();
    requiredResult1 = stringResult3.required();
    stringResult4 = string.string();
    const stringResult5 = string.string();
    allowResult = stringResult5.allow(null);
    object1Result = object2(obj3);
    const stringResult6 = string.string();
    allowResult1 = stringResult6.allow(null);
    numberResult2 = string.number();
    numberResult3 = string.number();
    numberResult4 = string.number();
    booleanResult = string.boolean();
    return obj;
  }
};
const obj66 = {
  embeddedAppSDK: true,
  request(string) {
    let maxResult;
    let requiredResult;
    const obj = { guild_id: requiredResult.meta({ className: "GuildId" }), timeout: maxResult.optional() };
    const stringResult = string.string();
    requiredResult = stringResult.required();
    const numberResult = string.number();
    const minResult = numberResult.min(0);
    maxResult = minResult.max(60);
    return obj;
  },
  response(string) {
    let allowResult;
    let allowResult1;
    let requiredResult;
    let stringResult1;
    const obj = { id: requiredResult.meta({ className: "GuildId" }), name: stringResult1.required(), icon_url: allowResult.required(), vanity_url_code: allowResult1.optional() };
    const stringResult = string.string();
    requiredResult = stringResult.required();
    stringResult1 = string.string();
    const stringResult2 = string.string();
    allowResult = stringResult2.allow(null);
    const stringResult3 = string.string();
    allowResult1 = stringResult3.allow(null);
    return obj;
  }
};
const obj67 = {
  request: "Array",
  response(array) {
    let allowResult;
    let itemsResult;
    let requiredResult;
    let stringResult1;
    const obj = { guilds: itemsResult.required() };
    const obj2 = { id: requiredResult.meta({ className: "GuildId" }), name: stringResult1.required(), icon_url: allowResult.required() };
    const items = array.array().items;
    const object = array.object;
    array.array();
    const stringResult = array.string();
    requiredResult = stringResult.required();
    stringResult1 = array.string();
    const stringResult2 = array.string();
    allowResult = stringResult2.allow(null);
    itemsResult = items(object(obj2));
    return obj;
  }
};
const obj68 = {
  embeddedAppSDK: true,
  request(string) {
    let requiredResult;
    const obj = { guild_id: requiredResult.meta({ className: "GuildId" }) };
    const stringResult = string.string();
    requiredResult = stringResult.required();
    return obj;
  },
  response(array) {
    let itemsResult;
    const obj = { roles: itemsResult.required() };
    const arrayResult = array.array();
    itemsResult = arrayResult.items(Role(array));
    return obj;
  }
};
const obj69 = {
  embeddedAppSDK: true,
  request(string) {
    let requiredResult;
    const obj = { guild_id: requiredResult.meta({ className: "GuildId" }) };
    const stringResult = string.string();
    requiredResult = stringResult.required();
    return obj;
  },
  response(object) {
    const obj = GuildMember(object);
    return obj.allow(null);
  }
};
const obj70 = {
  embeddedAppSDK: true,
  request(string) {
    let requiredResult;
    let requiredResult1;
    const obj = { guild_id: requiredResult.meta({ className: "GuildId" }), user_id: requiredResult1.meta({ className: "UserId" }) };
    const stringResult = string.string();
    requiredResult = stringResult.required();
    const stringResult1 = string.string();
    requiredResult1 = stringResult1.required();
    return obj;
  },
  response(object) {
    const obj = GuildMember(object);
    return obj.allow(null);
  }
};
const obj71 = {
  embeddedAppSDK: true,
  request(string) {
    let _try2Result;
    let _tryResult;
    let allowResult;
    let allowResult3;
    let allowResult4;
    let allowResult5;
    let allowResult6;
    let allowResult7;
    let allowResult8;
    const obj = { client_id: allowResult.optional(), scope: _tryResult.optional(), scopes: _try2Result.optional(), response_type: allowResult3.optional(), code_challenge: allowResult4.optional(), code_challenge_method: allowResult5.optional(), state: allowResult6.optional(), prompt: allowResult7.optional(), nonce: allowResult8.optional() };
    const stringResult = string.string();
    allowResult = stringResult.allow("");
    const _try = string.alternatives().try;
    string.alternatives();
    const stringResult1 = string.string();
    const allowResult1 = stringResult1.allow("");
    const items = string.array().items;
    string.array();
    const stringResult2 = string.string();
    _tryResult = _try(allowResult1, items(stringResult2.allow("")));
    const _try2 = string.alternatives().try;
    string.alternatives();
    const stringResult3 = string.string();
    const allowResult2 = stringResult3.allow("");
    const items2 = string.array().items;
    string.array();
    const stringResult4 = string.string();
    _try2Result = _try2(allowResult2, items2(stringResult4.allow("")));
    const stringResult5 = string.string();
    allowResult3 = stringResult5.allow("");
    const stringResult6 = string.string();
    allowResult4 = stringResult6.allow("");
    const stringResult7 = string.string();
    allowResult5 = stringResult7.allow("");
    const stringResult8 = string.string();
    allowResult6 = stringResult8.allow("");
    const stringResult9 = string.string();
    allowResult7 = stringResult9.allow("");
    const stringResult10 = string.string();
    allowResult8 = stringResult10.allow("");
    return obj;
  },
  response(string) {
    let stringResult;
    const obj = { code: stringResult.required() };
    stringResult = string.string();
    return obj;
  }
};
const obj72 = {
  embeddedAppSDK: true,
  request(number) {
    let NAME;
    let defaultResult;
    let defaultResult1;
    let itemsResult;
    let maxResult;
    let maxResult1;
    let minResult;
    let minResult1;
    let minResult10;
    let minResult11;
    let minResult12;
    let minResult13;
    let minResult14;
    let minResult15;
    let minResult18;
    let minResult19;
    let minResult2;
    let minResult3;
    let minResult4;
    let minResult5;
    let minResult6;
    let minResult7;
    let minResult8;
    let minResult9;
    let numberResult;
    let numberResult1;
    let numberResult2;
    let object1Result;
    let object7Result;
    let object8Result;
    let object9Result;
    let unknownResult;
    let valid;
    const obj = { pid: numberResult.min(0), activity: unknownResult.allow(null) };
    numberResult = number.number();
    const object = number.object;
    const obj2 = { name: minResult.max(128), state: minResult1.max(128), state_url: minResult2.max(256), details: minResult3.max(128), details_url: minResult4.max(256), timestamps: object1Result.unknown(true), assets: object7Result.unknown(true), party: object8Result.unknown(true), secrets: object9Result.unknown(true), buttons: minResult18.max(2), instance: number.boolean(), supported_platforms: minResult19.max(10), type: defaultResult1.valid(constants2.PLAYING, constants2.LISTENING, constants2.WATCHING, constants2.COMPETING), status_display_type: valid(NAME, StatusDisplayTypes.StatusDisplayTypes.STATE, StatusDisplayTypes.StatusDisplayTypes.DETAILS) };
    const stringResult = number.string();
    minResult = stringResult.min(1);
    const stringResult1 = number.string();
    minResult1 = stringResult1.min(2);
    const stringResult2 = number.string();
    const uriResult = stringResult2.uri();
    minResult2 = uriResult.min(1);
    const stringResult3 = number.string();
    minResult3 = stringResult3.min(2);
    const stringResult4 = number.string();
    const uriResult1 = stringResult4.uri();
    minResult4 = uriResult1.min(1);
    const object2 = number.object;
    const obj3 = { start: numberResult1.min(1), end: numberResult2.min(1) };
    numberResult1 = number.number();
    numberResult2 = number.number();
    object1Result = object2(obj3);
    const object3 = number.object;
    const obj4 = { large_image: minResult5.max(300), large_text: minResult6.max(128), large_url: minResult7.max(256), small_image: minResult8.max(300), small_text: minResult9.max(128), small_url: minResult10.max(256), invite_cover_image: minResult11.max(300) };
    const stringResult5 = number.string();
    minResult5 = stringResult5.min(1);
    const stringResult6 = number.string();
    minResult6 = stringResult6.min(2);
    const stringResult7 = number.string();
    const uriResult2 = stringResult7.uri();
    minResult7 = uriResult2.min(1);
    const stringResult8 = number.string();
    minResult8 = stringResult8.min(1);
    const stringResult9 = number.string();
    minResult9 = stringResult9.min(2);
    const stringResult10 = number.string();
    const uriResult3 = stringResult10.uri();
    minResult10 = uriResult3.min(1);
    const stringResult11 = number.string();
    minResult11 = stringResult11.min(1);
    object7Result = object3(obj4);
    const object4 = number.object;
    const obj5 = { id: minResult12.max(128), size: itemsResult.length(2), privacy: defaultResult.valid(constants.PRIVATE, constants.PUBLIC) };
    const stringResult12 = number.string();
    minResult12 = stringResult12.min(2);
    const items = number.array().items;
    number.array();
    const numberResult3 = number.number();
    itemsResult = items(numberResult3.min(0));
    const numberResult4 = number.number();
    defaultResult = numberResult4.default(constants.PRIVATE);
    object8Result = object4(obj5);
    const object5 = number.object;
    const obj6 = { match: minResult13.max(128), join: minResult14.max(128), spectate: minResult15.max(128) };
    const stringResult13 = number.string();
    minResult13 = stringResult13.min(2);
    const stringResult14 = number.string();
    minResult14 = stringResult14.min(2);
    const stringResult15 = number.string();
    minResult15 = stringResult15.min(2);
    object9Result = object5(obj6);
    const obj7 = { label: maxResult.required(), url: maxResult1.required() };
    const items2 = number.array().items;
    const object6 = number.object;
    number.array();
    const stringResult16 = number.string();
    const minResult16 = stringResult16.min(1);
    maxResult = minResult16.max(32);
    const stringResult17 = number.string();
    const uriResult4 = stringResult17.uri();
    const minResult17 = uriResult4.min(1);
    maxResult1 = minResult17.max(512);
    const object10Result = object6(obj7);
    const items2Result = items2(object10Result.unknown(true));
    minResult18 = items2Result.min(1);
    const arrayResult4 = number.array();
    const itemsResult1 = arrayResult4.items(joiEnum(number, "ActivityGamePlatforms"));
    minResult19 = itemsResult1.min(1);
    const numberResult5 = number.number();
    defaultResult1 = numberResult5.default(constants2.PLAYING);
    const numberResult6 = number.number();
    valid = numberResult6.optional().valid;
    numberResult6.optional();
    NAME = StatusDisplayTypes.StatusDisplayTypes.NAME;
    const objectResult = object(obj2);
    unknownResult = objectResult.unknown(true);
    return obj;
  },
  response(number) {
    let numberResult;
    const obj = { type: numberResult.required() };
    const keys = Activity(number).keys;
    Activity(number);
    numberResult = number.number();
    const keys1 = keys(obj);
    return keys1.allow(null);
  }
};
items[0] = EmbeddedSurface;
items[1] = function AvatarDecoration(object) {
  let numberResult;
  let optionalResult;
  let stringResult;
  object = object.object;
  const obj = { asset: stringResult.required(), sku_id: optionalResult.meta({ className: "SkuId" }), expires_at: numberResult.allow(null) };
  stringResult = object.string();
  const stringResult1 = object.string();
  optionalResult = stringResult1.optional();
  numberResult = object.number();
  const objectResult = object(obj);
  const descriptionResult = objectResult.description("Details about avatar decoration");
  return descriptionResult.meta({ className: "AvatarDecoration" });
};
items[2] = User;
items[3] = function ActivityParticipant(string) {
  let stringResult;
  const obj = { nickname: stringResult.description("Server nickname. Not unique.") };
  const keys = User(string).keys;
  User(string);
  stringResult = string.string();
  const keys1 = keys(obj);
  return keys1.meta({ className: "ActivityParticipant" });
};
items[4] = Message;
items[5] = GuildMember;
items[6] = Role;
items[7] = Sku;
let size = size_mod;
const result = size.fileFinishedImporting("../discord_common/js/packages/rpc-schema/definitions.tsx");

export { RPCEnums };
export const RPCCommandSchemas = { [helpers.RPCCommand.INITIATE_IMAGE_UPLOAD]: obj10, [helpers.RPCCommand.OPEN_SHARE_MOMENT_DIALOG]: obj11, [helpers.RPCCommand.AUTHENTICATE]: obj12, [helpers.RPCCommand.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: obj13, [helpers.RPCCommand.RELAUNCH_FRAME]: obj14, [helpers.RPCCommand.GET_VOICE_CAPABILITIES]: obj15, [helpers.RPCCommand.GET_VOICE_SESSION_PARTICIPANTS]: obj16, [helpers.RPCCommand.START_VOICE_SESSION]: obj17, [helpers.RPCCommand.UPDATE_VOICE_SPATIAL]: obj18, [helpers.RPCCommand.SET_VOICE_SPATIAL_ACOUSTICS]: obj19, [helpers.RPCCommand.ENABLE_VOICE_SPATIAL]: obj7, [helpers.RPCCommand.DISABLE_VOICE_SPATIAL]: obj7, [helpers.RPCCommand.STOP_VOICE_SESSION]: obj7, [helpers.RPCCommand.GET_APPLICATION_STREAMING_VIEW_CAPABILITIES]: obj20, [helpers.RPCCommand.START_APPLICATION_STREAMING_VIEW]: obj9, [helpers.RPCCommand.SUSPEND_APPLICATION_STREAMING_VIEW]: obj7, [helpers.RPCCommand.RESUME_APPLICATION_STREAMING_VIEW]: obj7, [helpers.RPCCommand.SET_APPLICATION_STREAMING_VIEW_FIT]: obj8, [helpers.RPCCommand.WATCH_APPLICATION_STREAMING_VIEW_ON_DISCORD]: obj7, [helpers.RPCCommand.STOP_APPLICATION_STREAMING_VIEW]: obj7, [helpers.RPCCommand.GET_CAMERA_VIEW_CAPABILITIES]: obj21, [helpers.RPCCommand.START_CAMERA_VIEW]: obj9, [helpers.RPCCommand.SUSPEND_CAMERA_VIEW]: obj7, [helpers.RPCCommand.RESUME_CAMERA_VIEW]: obj7, [helpers.RPCCommand.SET_CAMERA_VIEW_FIT]: obj8, [helpers.RPCCommand.STOP_CAMERA_VIEW]: obj7, [helpers.RPCCommand.SHARE_INTERACTION]: obj22, [helpers.RPCCommand.SHARE_LINK]: obj23, [helpers.RPCCommand.SHARE_CONTENT]: obj24, [helpers.RPCCommand.OPEN_CONTEXT_MENU]: obj25, [helpers.RPCCommand.OPEN_USER_POPOUT]: obj26, [helpers.RPCCommand.OPEN_MEDIA_VIEWER]: obj27, [helpers.RPCCommand.OPEN_USER_PROFILE]: obj28, [helpers.RPCCommand.OPEN_GAME_PROFILE]: obj29, [helpers.RPCCommand.SHOW_TOOLTIP]: obj30, [helpers.RPCCommand.HIDE_TOOLTIP]: obj31, [helpers.RPCCommand.SHOW_TOAST]: obj32, [helpers.RPCCommand.SHOW_CONFIRM_MODAL]: obj33, [helpers.RPCCommand.GET_DEVICE_PERMISSIONS]: obj34, [helpers.RPCCommand.REQUEST_DEVICE_PERMISSIONS]: obj35, [helpers.RPCCommand.CAPTURE_SCREEN]: obj36, [helpers.RPCCommand.GET_RELATIONSHIPS]: obj37, [helpers.RPCCommand.INVITE_USER_EMBEDDED]: obj38, [helpers.RPCCommand.GET_CONTEXT]: obj39, [helpers.RPCCommand.GET_USER]: obj40, [helpers.RPCCommand.GET_CURRENT_USER]: obj41, [helpers.RPCCommand.GET_QUEST_ENROLLMENT_STATUS]: obj42, [helpers.RPCCommand.QUEST_START_TIMER]: obj43, [helpers.RPCCommand.GET_QUEST]: obj44, [helpers.RPCCommand.REQUEST_PROXY_TICKET_REFRESH]: obj45, [helpers.RPCCommand.SET_RUNS_IN_BACKGROUND]: obj46, [helpers.RPCCommand.SET_FRAME_RELAUNCH_DEEP_LINK]: obj47, [helpers.RPCCommand.SET_AUDIO_SESSION_TYPE]: obj48, [helpers.RPCCommand.CAPTURE_LOG]: obj49, [helpers.RPCCommand.ENCOURAGE_HW_ACCELERATION]: obj50, [helpers.RPCCommand.GET_PLATFORM_BEHAVIORS]: obj51, [helpers.RPCCommand.USER_SETTINGS_GET_LOCALE]: obj52, [helpers.RPCCommand.SET_ORIENTATION_LOCK_STATE]: obj53, [helpers.RPCCommand.SET_CONFIG]: obj54, [helpers.RPCCommand.OPEN_INVITE_DIALOG]: { embeddedAppSDK: true, request: "code", response: "get" }, [helpers.RPCCommand.OPEN_EXTERNAL_LINK]: obj55, [helpers.RPCCommand.GET_CHANNEL_PERMISSIONS]: obj56, [helpers.RPCCommand.GET_SKUS_EMBEDDED]: obj57, [helpers.RPCCommand.GET_ENTITLEMENTS_EMBEDDED]: obj58, [helpers.RPCCommand.START_PURCHASE]: obj59, [helpers.RPCCommand.GET_CHANNEL]: obj60, [helpers.RPCCommand.GET_CHANNELS]: obj61, [helpers.RPCCommand.GET_SELECTED_VOICE_CHANNEL]: obj62, [helpers.RPCCommand.SELECT_VOICE_CHANNEL]: obj63, [helpers.RPCCommand.SELECT_TEXT_CHANNEL]: obj64, [helpers.RPCCommand.CREATE_CHANNEL_INVITE]: obj65, [helpers.RPCCommand.GET_GUILD]: obj66, [helpers.RPCCommand.GET_GUILDS]: obj67, [helpers.RPCCommand.GET_ROLES]: obj68, [helpers.RPCCommand.GET_CURRENT_USER_GUILD_MEMBER]: obj69, [helpers.RPCCommand.GET_GUILD_MEMBER]: obj70, [helpers.RPCCommand.AUTHORIZE]: obj71, [helpers.RPCCommand.SET_ACTIVITY]: obj72 };
export const RPCNamedSchemas = items;
