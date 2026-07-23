// Module ID: 3919
// Function ID: 32375
// Name: CheckpointFriendsRive
// Dependencies: [29, 31, 33, 3859, 3920, 3910, 2]

// Module 3919 (CheckpointFriendsRive)
import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let closure_7 = { MAIN: { reducedMotion: "boolean", twoFriends: "boolean", AnimationState: "number", "Avatar01/ShadowVisibility": "number", "Avatar01/StrokeVisibility": "number", "Avatar01/UsernameVisibility": "number", "Avatar01/Stroke": "color", "Avatar01/Fill": "color", "Avatar01/Username": "string", "Avatar01/img": "image", "Avatar02/ShadowVisibility": "number", "Avatar02/StrokeVisibility": "number", "Avatar02/UsernameVisibility": "number", "Avatar02/Stroke": "color", "Avatar02/Fill": "color", "Avatar02/Username": "string", "Avatar02/img": "image", "Avatar03/ShadowVisibility": "number", "Avatar03/StrokeVisibility": "number", "Avatar03/UsernameVisibility": "number", "Avatar03/Stroke": "color", "Avatar03/Fill": "color", "Avatar03/Username": "string", "Avatar03/img": "image", "Avatar04/ShadowVisibility": "number", "Avatar04/StrokeVisibility": "number", "Avatar04/UsernameVisibility": "number", "Avatar04/Stroke": "color", "Avatar04/Fill": "color", "Avatar04/Username": "string", "Avatar04/img": "image", "Avatar05/ShadowVisibility": "number", "Avatar05/StrokeVisibility": "number", "Avatar05/UsernameVisibility": "number", "Avatar05/Stroke": "color", "Avatar05/Fill": "color", "Avatar05/Username": "string", "Avatar05/img": "image", ConnectorColor: "color" }, Sidekick: { reducedMotion: "boolean", twoFriends: "boolean", AnimationState: "number", "Avatar01/ShadowVisibility": "number", "Avatar01/StrokeVisibility": "number", "Avatar01/UsernameVisibility": "number", "Avatar01/Stroke": "color", "Avatar01/Fill": "color", "Avatar01/Username": "string", "Avatar01/img": "image", "Avatar02/ShadowVisibility": "number", "Avatar02/StrokeVisibility": "number", "Avatar02/UsernameVisibility": "number", "Avatar02/Stroke": "color", "Avatar02/Fill": "color", "Avatar02/Username": "string", "Avatar02/img": "image", "Avatar03/ShadowVisibility": "number", "Avatar03/StrokeVisibility": "number", "Avatar03/UsernameVisibility": "number", "Avatar03/Stroke": "color", "Avatar03/Fill": "color", "Avatar03/Username": "string", "Avatar03/img": "image", "Avatar04/ShadowVisibility": "number", "Avatar04/StrokeVisibility": "number", "Avatar04/UsernameVisibility": "number", "Avatar04/Stroke": "color", "Avatar04/Fill": "color", "Avatar04/Username": "string", "Avatar04/img": "image", "Avatar05/ShadowVisibility": "number", "Avatar05/StrokeVisibility": "number", "Avatar05/UsernameVisibility": "number", "Avatar05/Stroke": "color", "Avatar05/Fill": "color", "Avatar05/Username": "string", "Avatar05/img": "image", ConnectorColor: "color" }, Avatar: { ShadowVisibility: "number", StrokeVisibility: "number", UsernameVisibility: "number", Stroke: "color", Fill: "color", Username: "string", img: "image" }, Username: { ShadowVisibility: "number", StrokeVisibility: "number", UsernameVisibility: "number", Stroke: "color", Fill: "color", Username: "string", img: "image" }, "Friends 01 Rotation": { reducedMotion: "boolean", twoFriends: "boolean", AnimationState: "number", "Avatar01/ShadowVisibility": "number", "Avatar01/StrokeVisibility": "number", "Avatar01/UsernameVisibility": "number", "Avatar01/Stroke": "color", "Avatar01/Fill": "color", "Avatar01/Username": "string", "Avatar01/img": "image", "Avatar02/ShadowVisibility": "number", "Avatar02/StrokeVisibility": "number", "Avatar02/UsernameVisibility": "number", "Avatar02/Stroke": "color", "Avatar02/Fill": "color", "Avatar02/Username": "string", "Avatar02/img": "image", "Avatar03/ShadowVisibility": "number", "Avatar03/StrokeVisibility": "number", "Avatar03/UsernameVisibility": "number", "Avatar03/Stroke": "color", "Avatar03/Fill": "color", "Avatar03/Username": "string", "Avatar03/img": "image", "Avatar04/ShadowVisibility": "number", "Avatar04/StrokeVisibility": "number", "Avatar04/UsernameVisibility": "number", "Avatar04/Stroke": "color", "Avatar04/Fill": "color", "Avatar04/Username": "string", "Avatar04/img": "image", "Avatar05/ShadowVisibility": "number", "Avatar05/StrokeVisibility": "number", "Avatar05/UsernameVisibility": "number", "Avatar05/Stroke": "color", "Avatar05/Fill": "color", "Avatar05/Username": "string", "Avatar05/img": "image", ConnectorColor: "color" } };
let closure_8 = { MAIN: ["threeFriends", "twoFriends-reducedMotion", "threeFriends-reducedMotion", "twoFriends"], Sidekick: ["threeFriends", "twoFriends-reducedMotion", "threeFriends-reducedMotion", "twoFriends"], Avatar: ["Instance 03", "Instance 05", "Instance 04", "Instance 02", "Instance 01"], Username: ["Instance 03", "Instance 05", "Instance 04", "Instance 02", "Instance 01"], "Friends 01 Rotation": ["threeFriends", "twoFriends-reducedMotion", "threeFriends-reducedMotion", "twoFriends"] };
let closure_9 = {
  MAIN: function MAINBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    let booleanBinding = require(3859) /* useObservedValue */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = require(3859) /* useObservedValue */;
    let twoFriends;
    if (null != dataBinding) {
      twoFriends = dataBinding.twoFriends;
    }
    let twoFriends1;
    if (null != onDataBindingChange) {
      twoFriends1 = onDataBindingChange.twoFriends;
    }
    const booleanBinding1 = require(3859) /* useObservedValue */.useBooleanBinding("twoFriends", instance, twoFriends, twoFriends1, playIfNeeded);
    const obj2 = require(3859) /* useObservedValue */;
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = require(3859) /* useObservedValue */.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj3 = require(3859) /* useObservedValue */;
    let prop;
    if (null != dataBinding) {
      prop = dataBinding["Avatar01/ShadowVisibility"];
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange["Avatar01/ShadowVisibility"];
    }
    const numberBinding1 = require(3859) /* useObservedValue */.useNumberBinding("Avatar01/ShadowVisibility", instance, prop, prop1, playIfNeeded);
    const obj4 = require(3859) /* useObservedValue */;
    let prop2;
    if (null != dataBinding) {
      prop2 = dataBinding["Avatar01/StrokeVisibility"];
    }
    let prop3;
    if (null != onDataBindingChange) {
      prop3 = onDataBindingChange["Avatar01/StrokeVisibility"];
    }
    const numberBinding2 = require(3859) /* useObservedValue */.useNumberBinding("Avatar01/StrokeVisibility", instance, prop2, prop3, playIfNeeded);
    const obj5 = require(3859) /* useObservedValue */;
    let prop4;
    if (null != dataBinding) {
      prop4 = dataBinding["Avatar01/UsernameVisibility"];
    }
    let prop5;
    if (null != onDataBindingChange) {
      prop5 = onDataBindingChange["Avatar01/UsernameVisibility"];
    }
    const numberBinding3 = require(3859) /* useObservedValue */.useNumberBinding("Avatar01/UsernameVisibility", instance, prop4, prop5, playIfNeeded);
    const obj6 = require(3859) /* useObservedValue */;
    let prop6;
    if (null != dataBinding) {
      prop6 = dataBinding["Avatar01/Stroke"];
    }
    let prop7;
    if (null != onDataBindingChange) {
      prop7 = onDataBindingChange["Avatar01/Stroke"];
    }
    const colorBinding = require(3859) /* useObservedValue */.useColorBinding("Avatar01/Stroke", instance, prop6, prop7, playIfNeeded);
    const obj7 = require(3859) /* useObservedValue */;
    let prop8;
    if (null != dataBinding) {
      prop8 = dataBinding["Avatar01/Fill"];
    }
    let prop9;
    if (null != onDataBindingChange) {
      prop9 = onDataBindingChange["Avatar01/Fill"];
    }
    const colorBinding1 = require(3859) /* useObservedValue */.useColorBinding("Avatar01/Fill", instance, prop8, prop9, playIfNeeded);
    const obj8 = require(3859) /* useObservedValue */;
    let prop10;
    if (null != dataBinding) {
      prop10 = dataBinding["Avatar01/Username"];
    }
    let prop11;
    if (null != onDataBindingChange) {
      prop11 = onDataBindingChange["Avatar01/Username"];
    }
    const stringBinding = require(3859) /* useObservedValue */.useStringBinding("Avatar01/Username", instance, prop10, prop11, playIfNeeded);
    const obj9 = require(3859) /* useObservedValue */;
    let prop12;
    if (null != dataBinding) {
      prop12 = dataBinding["Avatar01/img"];
    }
    let prop13;
    if (null != onDataBindingChange) {
      prop13 = onDataBindingChange["Avatar01/img"];
    }
    const imageBinding = require(3859) /* useObservedValue */.useImageBinding("Avatar01/img", instance, prop12, prop13, playIfNeeded);
    const obj10 = require(3859) /* useObservedValue */;
    let prop14;
    if (null != dataBinding) {
      prop14 = dataBinding["Avatar02/ShadowVisibility"];
    }
    let prop15;
    if (null != onDataBindingChange) {
      prop15 = onDataBindingChange["Avatar02/ShadowVisibility"];
    }
    const numberBinding4 = require(3859) /* useObservedValue */.useNumberBinding("Avatar02/ShadowVisibility", instance, prop14, prop15, playIfNeeded);
    const obj11 = require(3859) /* useObservedValue */;
    let prop16;
    if (null != dataBinding) {
      prop16 = dataBinding["Avatar02/StrokeVisibility"];
    }
    let prop17;
    if (null != onDataBindingChange) {
      prop17 = onDataBindingChange["Avatar02/StrokeVisibility"];
    }
    const numberBinding5 = require(3859) /* useObservedValue */.useNumberBinding("Avatar02/StrokeVisibility", instance, prop16, prop17, playIfNeeded);
    const obj12 = require(3859) /* useObservedValue */;
    let prop18;
    if (null != dataBinding) {
      prop18 = dataBinding["Avatar02/UsernameVisibility"];
    }
    let prop19;
    if (null != onDataBindingChange) {
      prop19 = onDataBindingChange["Avatar02/UsernameVisibility"];
    }
    const numberBinding6 = require(3859) /* useObservedValue */.useNumberBinding("Avatar02/UsernameVisibility", instance, prop18, prop19, playIfNeeded);
    const obj13 = require(3859) /* useObservedValue */;
    let prop20;
    if (null != dataBinding) {
      prop20 = dataBinding["Avatar02/Stroke"];
    }
    let prop21;
    if (null != onDataBindingChange) {
      prop21 = onDataBindingChange["Avatar02/Stroke"];
    }
    const colorBinding2 = require(3859) /* useObservedValue */.useColorBinding("Avatar02/Stroke", instance, prop20, prop21, playIfNeeded);
    const obj14 = require(3859) /* useObservedValue */;
    let prop22;
    if (null != dataBinding) {
      prop22 = dataBinding["Avatar02/Fill"];
    }
    let prop23;
    if (null != onDataBindingChange) {
      prop23 = onDataBindingChange["Avatar02/Fill"];
    }
    const colorBinding3 = require(3859) /* useObservedValue */.useColorBinding("Avatar02/Fill", instance, prop22, prop23, playIfNeeded);
    const obj15 = require(3859) /* useObservedValue */;
    let prop24;
    if (null != dataBinding) {
      prop24 = dataBinding["Avatar02/Username"];
    }
    let prop25;
    if (null != onDataBindingChange) {
      prop25 = onDataBindingChange["Avatar02/Username"];
    }
    const stringBinding1 = require(3859) /* useObservedValue */.useStringBinding("Avatar02/Username", instance, prop24, prop25, playIfNeeded);
    const obj16 = require(3859) /* useObservedValue */;
    let prop26;
    if (null != dataBinding) {
      prop26 = dataBinding["Avatar02/img"];
    }
    let prop27;
    if (null != onDataBindingChange) {
      prop27 = onDataBindingChange["Avatar02/img"];
    }
    const imageBinding1 = require(3859) /* useObservedValue */.useImageBinding("Avatar02/img", instance, prop26, prop27, playIfNeeded);
    const obj17 = require(3859) /* useObservedValue */;
    let prop28;
    if (null != dataBinding) {
      prop28 = dataBinding["Avatar03/ShadowVisibility"];
    }
    let prop29;
    if (null != onDataBindingChange) {
      prop29 = onDataBindingChange["Avatar03/ShadowVisibility"];
    }
    const numberBinding7 = require(3859) /* useObservedValue */.useNumberBinding("Avatar03/ShadowVisibility", instance, prop28, prop29, playIfNeeded);
    const obj18 = require(3859) /* useObservedValue */;
    let prop30;
    if (null != dataBinding) {
      prop30 = dataBinding["Avatar03/StrokeVisibility"];
    }
    let prop31;
    if (null != onDataBindingChange) {
      prop31 = onDataBindingChange["Avatar03/StrokeVisibility"];
    }
    const numberBinding8 = require(3859) /* useObservedValue */.useNumberBinding("Avatar03/StrokeVisibility", instance, prop30, prop31, playIfNeeded);
    const obj19 = require(3859) /* useObservedValue */;
    let prop32;
    if (null != dataBinding) {
      prop32 = dataBinding["Avatar03/UsernameVisibility"];
    }
    let prop33;
    if (null != onDataBindingChange) {
      prop33 = onDataBindingChange["Avatar03/UsernameVisibility"];
    }
    const numberBinding9 = require(3859) /* useObservedValue */.useNumberBinding("Avatar03/UsernameVisibility", instance, prop32, prop33, playIfNeeded);
    const obj20 = require(3859) /* useObservedValue */;
    let prop34;
    if (null != dataBinding) {
      prop34 = dataBinding["Avatar03/Stroke"];
    }
    let prop35;
    if (null != onDataBindingChange) {
      prop35 = onDataBindingChange["Avatar03/Stroke"];
    }
    const colorBinding4 = require(3859) /* useObservedValue */.useColorBinding("Avatar03/Stroke", instance, prop34, prop35, playIfNeeded);
    const obj21 = require(3859) /* useObservedValue */;
    let prop36;
    if (null != dataBinding) {
      prop36 = dataBinding["Avatar03/Fill"];
    }
    let prop37;
    if (null != onDataBindingChange) {
      prop37 = onDataBindingChange["Avatar03/Fill"];
    }
    const colorBinding5 = require(3859) /* useObservedValue */.useColorBinding("Avatar03/Fill", instance, prop36, prop37, playIfNeeded);
    const obj22 = require(3859) /* useObservedValue */;
    let prop38;
    if (null != dataBinding) {
      prop38 = dataBinding["Avatar03/Username"];
    }
    let prop39;
    if (null != onDataBindingChange) {
      prop39 = onDataBindingChange["Avatar03/Username"];
    }
    const stringBinding2 = require(3859) /* useObservedValue */.useStringBinding("Avatar03/Username", instance, prop38, prop39, playIfNeeded);
    const obj23 = require(3859) /* useObservedValue */;
    let prop40;
    if (null != dataBinding) {
      prop40 = dataBinding["Avatar03/img"];
    }
    let prop41;
    if (null != onDataBindingChange) {
      prop41 = onDataBindingChange["Avatar03/img"];
    }
    const imageBinding2 = require(3859) /* useObservedValue */.useImageBinding("Avatar03/img", instance, prop40, prop41, playIfNeeded);
    const obj24 = require(3859) /* useObservedValue */;
    let prop42;
    if (null != dataBinding) {
      prop42 = dataBinding["Avatar04/ShadowVisibility"];
    }
    let prop43;
    if (null != onDataBindingChange) {
      prop43 = onDataBindingChange["Avatar04/ShadowVisibility"];
    }
    const numberBinding10 = require(3859) /* useObservedValue */.useNumberBinding("Avatar04/ShadowVisibility", instance, prop42, prop43, playIfNeeded);
    const obj25 = require(3859) /* useObservedValue */;
    let prop44;
    if (null != dataBinding) {
      prop44 = dataBinding["Avatar04/StrokeVisibility"];
    }
    let prop45;
    if (null != onDataBindingChange) {
      prop45 = onDataBindingChange["Avatar04/StrokeVisibility"];
    }
    const numberBinding11 = require(3859) /* useObservedValue */.useNumberBinding("Avatar04/StrokeVisibility", instance, prop44, prop45, playIfNeeded);
    const obj26 = require(3859) /* useObservedValue */;
    let prop46;
    if (null != dataBinding) {
      prop46 = dataBinding["Avatar04/UsernameVisibility"];
    }
    let prop47;
    if (null != onDataBindingChange) {
      prop47 = onDataBindingChange["Avatar04/UsernameVisibility"];
    }
    const numberBinding12 = require(3859) /* useObservedValue */.useNumberBinding("Avatar04/UsernameVisibility", instance, prop46, prop47, playIfNeeded);
    const obj27 = require(3859) /* useObservedValue */;
    let prop48;
    if (null != dataBinding) {
      prop48 = dataBinding["Avatar04/Stroke"];
    }
    let prop49;
    if (null != onDataBindingChange) {
      prop49 = onDataBindingChange["Avatar04/Stroke"];
    }
    const colorBinding6 = require(3859) /* useObservedValue */.useColorBinding("Avatar04/Stroke", instance, prop48, prop49, playIfNeeded);
    const obj28 = require(3859) /* useObservedValue */;
    let prop50;
    if (null != dataBinding) {
      prop50 = dataBinding["Avatar04/Fill"];
    }
    let prop51;
    if (null != onDataBindingChange) {
      prop51 = onDataBindingChange["Avatar04/Fill"];
    }
    const colorBinding7 = require(3859) /* useObservedValue */.useColorBinding("Avatar04/Fill", instance, prop50, prop51, playIfNeeded);
    const obj29 = require(3859) /* useObservedValue */;
    let prop52;
    if (null != dataBinding) {
      prop52 = dataBinding["Avatar04/Username"];
    }
    let prop53;
    if (null != onDataBindingChange) {
      prop53 = onDataBindingChange["Avatar04/Username"];
    }
    const stringBinding3 = require(3859) /* useObservedValue */.useStringBinding("Avatar04/Username", instance, prop52, prop53, playIfNeeded);
    const obj30 = require(3859) /* useObservedValue */;
    let prop54;
    if (null != dataBinding) {
      prop54 = dataBinding["Avatar04/img"];
    }
    let prop55;
    if (null != onDataBindingChange) {
      prop55 = onDataBindingChange["Avatar04/img"];
    }
    const imageBinding3 = require(3859) /* useObservedValue */.useImageBinding("Avatar04/img", instance, prop54, prop55, playIfNeeded);
    const obj31 = require(3859) /* useObservedValue */;
    let prop56;
    if (null != dataBinding) {
      prop56 = dataBinding["Avatar05/ShadowVisibility"];
    }
    let prop57;
    if (null != onDataBindingChange) {
      prop57 = onDataBindingChange["Avatar05/ShadowVisibility"];
    }
    const numberBinding13 = require(3859) /* useObservedValue */.useNumberBinding("Avatar05/ShadowVisibility", instance, prop56, prop57, playIfNeeded);
    const obj32 = require(3859) /* useObservedValue */;
    let prop58;
    if (null != dataBinding) {
      prop58 = dataBinding["Avatar05/StrokeVisibility"];
    }
    let prop59;
    if (null != onDataBindingChange) {
      prop59 = onDataBindingChange["Avatar05/StrokeVisibility"];
    }
    const numberBinding14 = require(3859) /* useObservedValue */.useNumberBinding("Avatar05/StrokeVisibility", instance, prop58, prop59, playIfNeeded);
    const obj33 = require(3859) /* useObservedValue */;
    let prop60;
    if (null != dataBinding) {
      prop60 = dataBinding["Avatar05/UsernameVisibility"];
    }
    let prop61;
    if (null != onDataBindingChange) {
      prop61 = onDataBindingChange["Avatar05/UsernameVisibility"];
    }
    booleanBinding = require(3859) /* useObservedValue */.useNumberBinding("Avatar05/UsernameVisibility", instance, prop60, prop61, playIfNeeded);
    const obj34 = require(3859) /* useObservedValue */;
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding["Avatar05/Stroke"];
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange["Avatar05/Stroke"];
    }
    booleanBinding = require(3859) /* useObservedValue */.useColorBinding("Avatar05/Stroke", instance, booleanBinding, booleanBinding, playIfNeeded);
    const obj35 = require(3859) /* useObservedValue */;
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding["Avatar05/Fill"];
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange["Avatar05/Fill"];
    }
    booleanBinding = require(3859) /* useObservedValue */.useColorBinding("Avatar05/Fill", instance, booleanBinding, booleanBinding, playIfNeeded);
    const obj36 = require(3859) /* useObservedValue */;
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding["Avatar05/Username"];
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange["Avatar05/Username"];
    }
    booleanBinding = require(3859) /* useObservedValue */.useStringBinding("Avatar05/Username", instance, booleanBinding, booleanBinding, playIfNeeded);
    const obj37 = require(3859) /* useObservedValue */;
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding["Avatar05/img"];
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange["Avatar05/img"];
    }
    booleanBinding = require(3859) /* useObservedValue */.useImageBinding("Avatar05/img", instance, booleanBinding, booleanBinding, playIfNeeded);
    const obj38 = require(3859) /* useObservedValue */;
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding.ConnectorColor;
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange.ConnectorColor;
    }
    booleanBinding = require(3859) /* useObservedValue */.useColorBinding("ConnectorColor", instance, booleanBinding, booleanBinding, playIfNeeded);
    return null;
  },
  Sidekick: function SidekickBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    let booleanBinding = require(3859) /* useObservedValue */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = require(3859) /* useObservedValue */;
    let twoFriends;
    if (null != dataBinding) {
      twoFriends = dataBinding.twoFriends;
    }
    let twoFriends1;
    if (null != onDataBindingChange) {
      twoFriends1 = onDataBindingChange.twoFriends;
    }
    const booleanBinding1 = require(3859) /* useObservedValue */.useBooleanBinding("twoFriends", instance, twoFriends, twoFriends1, playIfNeeded);
    const obj2 = require(3859) /* useObservedValue */;
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = require(3859) /* useObservedValue */.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj3 = require(3859) /* useObservedValue */;
    let prop;
    if (null != dataBinding) {
      prop = dataBinding["Avatar01/ShadowVisibility"];
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange["Avatar01/ShadowVisibility"];
    }
    const numberBinding1 = require(3859) /* useObservedValue */.useNumberBinding("Avatar01/ShadowVisibility", instance, prop, prop1, playIfNeeded);
    const obj4 = require(3859) /* useObservedValue */;
    let prop2;
    if (null != dataBinding) {
      prop2 = dataBinding["Avatar01/StrokeVisibility"];
    }
    let prop3;
    if (null != onDataBindingChange) {
      prop3 = onDataBindingChange["Avatar01/StrokeVisibility"];
    }
    const numberBinding2 = require(3859) /* useObservedValue */.useNumberBinding("Avatar01/StrokeVisibility", instance, prop2, prop3, playIfNeeded);
    const obj5 = require(3859) /* useObservedValue */;
    let prop4;
    if (null != dataBinding) {
      prop4 = dataBinding["Avatar01/UsernameVisibility"];
    }
    let prop5;
    if (null != onDataBindingChange) {
      prop5 = onDataBindingChange["Avatar01/UsernameVisibility"];
    }
    const numberBinding3 = require(3859) /* useObservedValue */.useNumberBinding("Avatar01/UsernameVisibility", instance, prop4, prop5, playIfNeeded);
    const obj6 = require(3859) /* useObservedValue */;
    let prop6;
    if (null != dataBinding) {
      prop6 = dataBinding["Avatar01/Stroke"];
    }
    let prop7;
    if (null != onDataBindingChange) {
      prop7 = onDataBindingChange["Avatar01/Stroke"];
    }
    const colorBinding = require(3859) /* useObservedValue */.useColorBinding("Avatar01/Stroke", instance, prop6, prop7, playIfNeeded);
    const obj7 = require(3859) /* useObservedValue */;
    let prop8;
    if (null != dataBinding) {
      prop8 = dataBinding["Avatar01/Fill"];
    }
    let prop9;
    if (null != onDataBindingChange) {
      prop9 = onDataBindingChange["Avatar01/Fill"];
    }
    const colorBinding1 = require(3859) /* useObservedValue */.useColorBinding("Avatar01/Fill", instance, prop8, prop9, playIfNeeded);
    const obj8 = require(3859) /* useObservedValue */;
    let prop10;
    if (null != dataBinding) {
      prop10 = dataBinding["Avatar01/Username"];
    }
    let prop11;
    if (null != onDataBindingChange) {
      prop11 = onDataBindingChange["Avatar01/Username"];
    }
    const stringBinding = require(3859) /* useObservedValue */.useStringBinding("Avatar01/Username", instance, prop10, prop11, playIfNeeded);
    const obj9 = require(3859) /* useObservedValue */;
    let prop12;
    if (null != dataBinding) {
      prop12 = dataBinding["Avatar01/img"];
    }
    let prop13;
    if (null != onDataBindingChange) {
      prop13 = onDataBindingChange["Avatar01/img"];
    }
    const imageBinding = require(3859) /* useObservedValue */.useImageBinding("Avatar01/img", instance, prop12, prop13, playIfNeeded);
    const obj10 = require(3859) /* useObservedValue */;
    let prop14;
    if (null != dataBinding) {
      prop14 = dataBinding["Avatar02/ShadowVisibility"];
    }
    let prop15;
    if (null != onDataBindingChange) {
      prop15 = onDataBindingChange["Avatar02/ShadowVisibility"];
    }
    const numberBinding4 = require(3859) /* useObservedValue */.useNumberBinding("Avatar02/ShadowVisibility", instance, prop14, prop15, playIfNeeded);
    const obj11 = require(3859) /* useObservedValue */;
    let prop16;
    if (null != dataBinding) {
      prop16 = dataBinding["Avatar02/StrokeVisibility"];
    }
    let prop17;
    if (null != onDataBindingChange) {
      prop17 = onDataBindingChange["Avatar02/StrokeVisibility"];
    }
    const numberBinding5 = require(3859) /* useObservedValue */.useNumberBinding("Avatar02/StrokeVisibility", instance, prop16, prop17, playIfNeeded);
    const obj12 = require(3859) /* useObservedValue */;
    let prop18;
    if (null != dataBinding) {
      prop18 = dataBinding["Avatar02/UsernameVisibility"];
    }
    let prop19;
    if (null != onDataBindingChange) {
      prop19 = onDataBindingChange["Avatar02/UsernameVisibility"];
    }
    const numberBinding6 = require(3859) /* useObservedValue */.useNumberBinding("Avatar02/UsernameVisibility", instance, prop18, prop19, playIfNeeded);
    const obj13 = require(3859) /* useObservedValue */;
    let prop20;
    if (null != dataBinding) {
      prop20 = dataBinding["Avatar02/Stroke"];
    }
    let prop21;
    if (null != onDataBindingChange) {
      prop21 = onDataBindingChange["Avatar02/Stroke"];
    }
    const colorBinding2 = require(3859) /* useObservedValue */.useColorBinding("Avatar02/Stroke", instance, prop20, prop21, playIfNeeded);
    const obj14 = require(3859) /* useObservedValue */;
    let prop22;
    if (null != dataBinding) {
      prop22 = dataBinding["Avatar02/Fill"];
    }
    let prop23;
    if (null != onDataBindingChange) {
      prop23 = onDataBindingChange["Avatar02/Fill"];
    }
    const colorBinding3 = require(3859) /* useObservedValue */.useColorBinding("Avatar02/Fill", instance, prop22, prop23, playIfNeeded);
    const obj15 = require(3859) /* useObservedValue */;
    let prop24;
    if (null != dataBinding) {
      prop24 = dataBinding["Avatar02/Username"];
    }
    let prop25;
    if (null != onDataBindingChange) {
      prop25 = onDataBindingChange["Avatar02/Username"];
    }
    const stringBinding1 = require(3859) /* useObservedValue */.useStringBinding("Avatar02/Username", instance, prop24, prop25, playIfNeeded);
    const obj16 = require(3859) /* useObservedValue */;
    let prop26;
    if (null != dataBinding) {
      prop26 = dataBinding["Avatar02/img"];
    }
    let prop27;
    if (null != onDataBindingChange) {
      prop27 = onDataBindingChange["Avatar02/img"];
    }
    const imageBinding1 = require(3859) /* useObservedValue */.useImageBinding("Avatar02/img", instance, prop26, prop27, playIfNeeded);
    const obj17 = require(3859) /* useObservedValue */;
    let prop28;
    if (null != dataBinding) {
      prop28 = dataBinding["Avatar03/ShadowVisibility"];
    }
    let prop29;
    if (null != onDataBindingChange) {
      prop29 = onDataBindingChange["Avatar03/ShadowVisibility"];
    }
    const numberBinding7 = require(3859) /* useObservedValue */.useNumberBinding("Avatar03/ShadowVisibility", instance, prop28, prop29, playIfNeeded);
    const obj18 = require(3859) /* useObservedValue */;
    let prop30;
    if (null != dataBinding) {
      prop30 = dataBinding["Avatar03/StrokeVisibility"];
    }
    let prop31;
    if (null != onDataBindingChange) {
      prop31 = onDataBindingChange["Avatar03/StrokeVisibility"];
    }
    const numberBinding8 = require(3859) /* useObservedValue */.useNumberBinding("Avatar03/StrokeVisibility", instance, prop30, prop31, playIfNeeded);
    const obj19 = require(3859) /* useObservedValue */;
    let prop32;
    if (null != dataBinding) {
      prop32 = dataBinding["Avatar03/UsernameVisibility"];
    }
    let prop33;
    if (null != onDataBindingChange) {
      prop33 = onDataBindingChange["Avatar03/UsernameVisibility"];
    }
    const numberBinding9 = require(3859) /* useObservedValue */.useNumberBinding("Avatar03/UsernameVisibility", instance, prop32, prop33, playIfNeeded);
    const obj20 = require(3859) /* useObservedValue */;
    let prop34;
    if (null != dataBinding) {
      prop34 = dataBinding["Avatar03/Stroke"];
    }
    let prop35;
    if (null != onDataBindingChange) {
      prop35 = onDataBindingChange["Avatar03/Stroke"];
    }
    const colorBinding4 = require(3859) /* useObservedValue */.useColorBinding("Avatar03/Stroke", instance, prop34, prop35, playIfNeeded);
    const obj21 = require(3859) /* useObservedValue */;
    let prop36;
    if (null != dataBinding) {
      prop36 = dataBinding["Avatar03/Fill"];
    }
    let prop37;
    if (null != onDataBindingChange) {
      prop37 = onDataBindingChange["Avatar03/Fill"];
    }
    const colorBinding5 = require(3859) /* useObservedValue */.useColorBinding("Avatar03/Fill", instance, prop36, prop37, playIfNeeded);
    const obj22 = require(3859) /* useObservedValue */;
    let prop38;
    if (null != dataBinding) {
      prop38 = dataBinding["Avatar03/Username"];
    }
    let prop39;
    if (null != onDataBindingChange) {
      prop39 = onDataBindingChange["Avatar03/Username"];
    }
    const stringBinding2 = require(3859) /* useObservedValue */.useStringBinding("Avatar03/Username", instance, prop38, prop39, playIfNeeded);
    const obj23 = require(3859) /* useObservedValue */;
    let prop40;
    if (null != dataBinding) {
      prop40 = dataBinding["Avatar03/img"];
    }
    let prop41;
    if (null != onDataBindingChange) {
      prop41 = onDataBindingChange["Avatar03/img"];
    }
    const imageBinding2 = require(3859) /* useObservedValue */.useImageBinding("Avatar03/img", instance, prop40, prop41, playIfNeeded);
    const obj24 = require(3859) /* useObservedValue */;
    let prop42;
    if (null != dataBinding) {
      prop42 = dataBinding["Avatar04/ShadowVisibility"];
    }
    let prop43;
    if (null != onDataBindingChange) {
      prop43 = onDataBindingChange["Avatar04/ShadowVisibility"];
    }
    const numberBinding10 = require(3859) /* useObservedValue */.useNumberBinding("Avatar04/ShadowVisibility", instance, prop42, prop43, playIfNeeded);
    const obj25 = require(3859) /* useObservedValue */;
    let prop44;
    if (null != dataBinding) {
      prop44 = dataBinding["Avatar04/StrokeVisibility"];
    }
    let prop45;
    if (null != onDataBindingChange) {
      prop45 = onDataBindingChange["Avatar04/StrokeVisibility"];
    }
    const numberBinding11 = require(3859) /* useObservedValue */.useNumberBinding("Avatar04/StrokeVisibility", instance, prop44, prop45, playIfNeeded);
    const obj26 = require(3859) /* useObservedValue */;
    let prop46;
    if (null != dataBinding) {
      prop46 = dataBinding["Avatar04/UsernameVisibility"];
    }
    let prop47;
    if (null != onDataBindingChange) {
      prop47 = onDataBindingChange["Avatar04/UsernameVisibility"];
    }
    const numberBinding12 = require(3859) /* useObservedValue */.useNumberBinding("Avatar04/UsernameVisibility", instance, prop46, prop47, playIfNeeded);
    const obj27 = require(3859) /* useObservedValue */;
    let prop48;
    if (null != dataBinding) {
      prop48 = dataBinding["Avatar04/Stroke"];
    }
    let prop49;
    if (null != onDataBindingChange) {
      prop49 = onDataBindingChange["Avatar04/Stroke"];
    }
    const colorBinding6 = require(3859) /* useObservedValue */.useColorBinding("Avatar04/Stroke", instance, prop48, prop49, playIfNeeded);
    const obj28 = require(3859) /* useObservedValue */;
    let prop50;
    if (null != dataBinding) {
      prop50 = dataBinding["Avatar04/Fill"];
    }
    let prop51;
    if (null != onDataBindingChange) {
      prop51 = onDataBindingChange["Avatar04/Fill"];
    }
    const colorBinding7 = require(3859) /* useObservedValue */.useColorBinding("Avatar04/Fill", instance, prop50, prop51, playIfNeeded);
    const obj29 = require(3859) /* useObservedValue */;
    let prop52;
    if (null != dataBinding) {
      prop52 = dataBinding["Avatar04/Username"];
    }
    let prop53;
    if (null != onDataBindingChange) {
      prop53 = onDataBindingChange["Avatar04/Username"];
    }
    const stringBinding3 = require(3859) /* useObservedValue */.useStringBinding("Avatar04/Username", instance, prop52, prop53, playIfNeeded);
    const obj30 = require(3859) /* useObservedValue */;
    let prop54;
    if (null != dataBinding) {
      prop54 = dataBinding["Avatar04/img"];
    }
    let prop55;
    if (null != onDataBindingChange) {
      prop55 = onDataBindingChange["Avatar04/img"];
    }
    const imageBinding3 = require(3859) /* useObservedValue */.useImageBinding("Avatar04/img", instance, prop54, prop55, playIfNeeded);
    const obj31 = require(3859) /* useObservedValue */;
    let prop56;
    if (null != dataBinding) {
      prop56 = dataBinding["Avatar05/ShadowVisibility"];
    }
    let prop57;
    if (null != onDataBindingChange) {
      prop57 = onDataBindingChange["Avatar05/ShadowVisibility"];
    }
    const numberBinding13 = require(3859) /* useObservedValue */.useNumberBinding("Avatar05/ShadowVisibility", instance, prop56, prop57, playIfNeeded);
    const obj32 = require(3859) /* useObservedValue */;
    let prop58;
    if (null != dataBinding) {
      prop58 = dataBinding["Avatar05/StrokeVisibility"];
    }
    let prop59;
    if (null != onDataBindingChange) {
      prop59 = onDataBindingChange["Avatar05/StrokeVisibility"];
    }
    const numberBinding14 = require(3859) /* useObservedValue */.useNumberBinding("Avatar05/StrokeVisibility", instance, prop58, prop59, playIfNeeded);
    const obj33 = require(3859) /* useObservedValue */;
    let prop60;
    if (null != dataBinding) {
      prop60 = dataBinding["Avatar05/UsernameVisibility"];
    }
    let prop61;
    if (null != onDataBindingChange) {
      prop61 = onDataBindingChange["Avatar05/UsernameVisibility"];
    }
    booleanBinding = require(3859) /* useObservedValue */.useNumberBinding("Avatar05/UsernameVisibility", instance, prop60, prop61, playIfNeeded);
    const obj34 = require(3859) /* useObservedValue */;
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding["Avatar05/Stroke"];
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange["Avatar05/Stroke"];
    }
    booleanBinding = require(3859) /* useObservedValue */.useColorBinding("Avatar05/Stroke", instance, booleanBinding, booleanBinding, playIfNeeded);
    const obj35 = require(3859) /* useObservedValue */;
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding["Avatar05/Fill"];
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange["Avatar05/Fill"];
    }
    booleanBinding = require(3859) /* useObservedValue */.useColorBinding("Avatar05/Fill", instance, booleanBinding, booleanBinding, playIfNeeded);
    const obj36 = require(3859) /* useObservedValue */;
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding["Avatar05/Username"];
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange["Avatar05/Username"];
    }
    booleanBinding = require(3859) /* useObservedValue */.useStringBinding("Avatar05/Username", instance, booleanBinding, booleanBinding, playIfNeeded);
    const obj37 = require(3859) /* useObservedValue */;
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding["Avatar05/img"];
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange["Avatar05/img"];
    }
    booleanBinding = require(3859) /* useObservedValue */.useImageBinding("Avatar05/img", instance, booleanBinding, booleanBinding, playIfNeeded);
    const obj38 = require(3859) /* useObservedValue */;
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding.ConnectorColor;
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange.ConnectorColor;
    }
    booleanBinding = require(3859) /* useObservedValue */.useColorBinding("ConnectorColor", instance, booleanBinding, booleanBinding, playIfNeeded);
    return null;
  },
  Avatar: function AvatarBindings(arg0) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let ShadowVisibility;
    if (null != dataBinding) {
      ShadowVisibility = dataBinding.ShadowVisibility;
    }
    let ShadowVisibility1;
    if (null != onDataBindingChange) {
      ShadowVisibility1 = onDataBindingChange.ShadowVisibility;
    }
    const numberBinding = require(3859) /* useObservedValue */.useNumberBinding("ShadowVisibility", instance, ShadowVisibility, ShadowVisibility1, playIfNeeded);
    const obj = require(3859) /* useObservedValue */;
    let StrokeVisibility;
    if (null != dataBinding) {
      StrokeVisibility = dataBinding.StrokeVisibility;
    }
    let StrokeVisibility1;
    if (null != onDataBindingChange) {
      StrokeVisibility1 = onDataBindingChange.StrokeVisibility;
    }
    const numberBinding1 = require(3859) /* useObservedValue */.useNumberBinding("StrokeVisibility", instance, StrokeVisibility, StrokeVisibility1, playIfNeeded);
    const obj2 = require(3859) /* useObservedValue */;
    let UsernameVisibility;
    if (null != dataBinding) {
      UsernameVisibility = dataBinding.UsernameVisibility;
    }
    let UsernameVisibility1;
    if (null != onDataBindingChange) {
      UsernameVisibility1 = onDataBindingChange.UsernameVisibility;
    }
    const numberBinding2 = require(3859) /* useObservedValue */.useNumberBinding("UsernameVisibility", instance, UsernameVisibility, UsernameVisibility1, playIfNeeded);
    const obj3 = require(3859) /* useObservedValue */;
    let Stroke;
    if (null != dataBinding) {
      Stroke = dataBinding.Stroke;
    }
    let Stroke1;
    if (null != onDataBindingChange) {
      Stroke1 = onDataBindingChange.Stroke;
    }
    const colorBinding = require(3859) /* useObservedValue */.useColorBinding("Stroke", instance, Stroke, Stroke1, playIfNeeded);
    const obj4 = require(3859) /* useObservedValue */;
    let Fill;
    if (null != dataBinding) {
      Fill = dataBinding.Fill;
    }
    let Fill1;
    if (null != onDataBindingChange) {
      Fill1 = onDataBindingChange.Fill;
    }
    const colorBinding1 = require(3859) /* useObservedValue */.useColorBinding("Fill", instance, Fill, Fill1, playIfNeeded);
    const obj5 = require(3859) /* useObservedValue */;
    let Username;
    if (null != dataBinding) {
      Username = dataBinding.Username;
    }
    let Username1;
    if (null != onDataBindingChange) {
      Username1 = onDataBindingChange.Username;
    }
    const stringBinding = require(3859) /* useObservedValue */.useStringBinding("Username", instance, Username, Username1, playIfNeeded);
    const obj6 = require(3859) /* useObservedValue */;
    let img;
    if (null != dataBinding) {
      img = dataBinding.img;
    }
    let img1;
    if (null != onDataBindingChange) {
      img1 = onDataBindingChange.img;
    }
    const imageBinding = require(3859) /* useObservedValue */.useImageBinding("img", instance, img, img1, playIfNeeded);
    return null;
  },
  Username: function UsernameBindings(arg0) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let ShadowVisibility;
    if (null != dataBinding) {
      ShadowVisibility = dataBinding.ShadowVisibility;
    }
    let ShadowVisibility1;
    if (null != onDataBindingChange) {
      ShadowVisibility1 = onDataBindingChange.ShadowVisibility;
    }
    const numberBinding = require(3859) /* useObservedValue */.useNumberBinding("ShadowVisibility", instance, ShadowVisibility, ShadowVisibility1, playIfNeeded);
    const obj = require(3859) /* useObservedValue */;
    let StrokeVisibility;
    if (null != dataBinding) {
      StrokeVisibility = dataBinding.StrokeVisibility;
    }
    let StrokeVisibility1;
    if (null != onDataBindingChange) {
      StrokeVisibility1 = onDataBindingChange.StrokeVisibility;
    }
    const numberBinding1 = require(3859) /* useObservedValue */.useNumberBinding("StrokeVisibility", instance, StrokeVisibility, StrokeVisibility1, playIfNeeded);
    const obj2 = require(3859) /* useObservedValue */;
    let UsernameVisibility;
    if (null != dataBinding) {
      UsernameVisibility = dataBinding.UsernameVisibility;
    }
    let UsernameVisibility1;
    if (null != onDataBindingChange) {
      UsernameVisibility1 = onDataBindingChange.UsernameVisibility;
    }
    const numberBinding2 = require(3859) /* useObservedValue */.useNumberBinding("UsernameVisibility", instance, UsernameVisibility, UsernameVisibility1, playIfNeeded);
    const obj3 = require(3859) /* useObservedValue */;
    let Stroke;
    if (null != dataBinding) {
      Stroke = dataBinding.Stroke;
    }
    let Stroke1;
    if (null != onDataBindingChange) {
      Stroke1 = onDataBindingChange.Stroke;
    }
    const colorBinding = require(3859) /* useObservedValue */.useColorBinding("Stroke", instance, Stroke, Stroke1, playIfNeeded);
    const obj4 = require(3859) /* useObservedValue */;
    let Fill;
    if (null != dataBinding) {
      Fill = dataBinding.Fill;
    }
    let Fill1;
    if (null != onDataBindingChange) {
      Fill1 = onDataBindingChange.Fill;
    }
    const colorBinding1 = require(3859) /* useObservedValue */.useColorBinding("Fill", instance, Fill, Fill1, playIfNeeded);
    const obj5 = require(3859) /* useObservedValue */;
    let Username;
    if (null != dataBinding) {
      Username = dataBinding.Username;
    }
    let Username1;
    if (null != onDataBindingChange) {
      Username1 = onDataBindingChange.Username;
    }
    const stringBinding = require(3859) /* useObservedValue */.useStringBinding("Username", instance, Username, Username1, playIfNeeded);
    const obj6 = require(3859) /* useObservedValue */;
    let img;
    if (null != dataBinding) {
      img = dataBinding.img;
    }
    let img1;
    if (null != onDataBindingChange) {
      img1 = onDataBindingChange.img;
    }
    const imageBinding = require(3859) /* useObservedValue */.useImageBinding("img", instance, img, img1, playIfNeeded);
    return null;
  },
  "Friends 01 Rotation": function Friends01RotationBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    let booleanBinding = require(3859) /* useObservedValue */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = require(3859) /* useObservedValue */;
    let twoFriends;
    if (null != dataBinding) {
      twoFriends = dataBinding.twoFriends;
    }
    let twoFriends1;
    if (null != onDataBindingChange) {
      twoFriends1 = onDataBindingChange.twoFriends;
    }
    const booleanBinding1 = require(3859) /* useObservedValue */.useBooleanBinding("twoFriends", instance, twoFriends, twoFriends1, playIfNeeded);
    const obj2 = require(3859) /* useObservedValue */;
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = require(3859) /* useObservedValue */.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj3 = require(3859) /* useObservedValue */;
    let prop;
    if (null != dataBinding) {
      prop = dataBinding["Avatar01/ShadowVisibility"];
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange["Avatar01/ShadowVisibility"];
    }
    const numberBinding1 = require(3859) /* useObservedValue */.useNumberBinding("Avatar01/ShadowVisibility", instance, prop, prop1, playIfNeeded);
    const obj4 = require(3859) /* useObservedValue */;
    let prop2;
    if (null != dataBinding) {
      prop2 = dataBinding["Avatar01/StrokeVisibility"];
    }
    let prop3;
    if (null != onDataBindingChange) {
      prop3 = onDataBindingChange["Avatar01/StrokeVisibility"];
    }
    const numberBinding2 = require(3859) /* useObservedValue */.useNumberBinding("Avatar01/StrokeVisibility", instance, prop2, prop3, playIfNeeded);
    const obj5 = require(3859) /* useObservedValue */;
    let prop4;
    if (null != dataBinding) {
      prop4 = dataBinding["Avatar01/UsernameVisibility"];
    }
    let prop5;
    if (null != onDataBindingChange) {
      prop5 = onDataBindingChange["Avatar01/UsernameVisibility"];
    }
    const numberBinding3 = require(3859) /* useObservedValue */.useNumberBinding("Avatar01/UsernameVisibility", instance, prop4, prop5, playIfNeeded);
    const obj6 = require(3859) /* useObservedValue */;
    let prop6;
    if (null != dataBinding) {
      prop6 = dataBinding["Avatar01/Stroke"];
    }
    let prop7;
    if (null != onDataBindingChange) {
      prop7 = onDataBindingChange["Avatar01/Stroke"];
    }
    const colorBinding = require(3859) /* useObservedValue */.useColorBinding("Avatar01/Stroke", instance, prop6, prop7, playIfNeeded);
    const obj7 = require(3859) /* useObservedValue */;
    let prop8;
    if (null != dataBinding) {
      prop8 = dataBinding["Avatar01/Fill"];
    }
    let prop9;
    if (null != onDataBindingChange) {
      prop9 = onDataBindingChange["Avatar01/Fill"];
    }
    const colorBinding1 = require(3859) /* useObservedValue */.useColorBinding("Avatar01/Fill", instance, prop8, prop9, playIfNeeded);
    const obj8 = require(3859) /* useObservedValue */;
    let prop10;
    if (null != dataBinding) {
      prop10 = dataBinding["Avatar01/Username"];
    }
    let prop11;
    if (null != onDataBindingChange) {
      prop11 = onDataBindingChange["Avatar01/Username"];
    }
    const stringBinding = require(3859) /* useObservedValue */.useStringBinding("Avatar01/Username", instance, prop10, prop11, playIfNeeded);
    const obj9 = require(3859) /* useObservedValue */;
    let prop12;
    if (null != dataBinding) {
      prop12 = dataBinding["Avatar01/img"];
    }
    let prop13;
    if (null != onDataBindingChange) {
      prop13 = onDataBindingChange["Avatar01/img"];
    }
    const imageBinding = require(3859) /* useObservedValue */.useImageBinding("Avatar01/img", instance, prop12, prop13, playIfNeeded);
    const obj10 = require(3859) /* useObservedValue */;
    let prop14;
    if (null != dataBinding) {
      prop14 = dataBinding["Avatar02/ShadowVisibility"];
    }
    let prop15;
    if (null != onDataBindingChange) {
      prop15 = onDataBindingChange["Avatar02/ShadowVisibility"];
    }
    const numberBinding4 = require(3859) /* useObservedValue */.useNumberBinding("Avatar02/ShadowVisibility", instance, prop14, prop15, playIfNeeded);
    const obj11 = require(3859) /* useObservedValue */;
    let prop16;
    if (null != dataBinding) {
      prop16 = dataBinding["Avatar02/StrokeVisibility"];
    }
    let prop17;
    if (null != onDataBindingChange) {
      prop17 = onDataBindingChange["Avatar02/StrokeVisibility"];
    }
    const numberBinding5 = require(3859) /* useObservedValue */.useNumberBinding("Avatar02/StrokeVisibility", instance, prop16, prop17, playIfNeeded);
    const obj12 = require(3859) /* useObservedValue */;
    let prop18;
    if (null != dataBinding) {
      prop18 = dataBinding["Avatar02/UsernameVisibility"];
    }
    let prop19;
    if (null != onDataBindingChange) {
      prop19 = onDataBindingChange["Avatar02/UsernameVisibility"];
    }
    const numberBinding6 = require(3859) /* useObservedValue */.useNumberBinding("Avatar02/UsernameVisibility", instance, prop18, prop19, playIfNeeded);
    const obj13 = require(3859) /* useObservedValue */;
    let prop20;
    if (null != dataBinding) {
      prop20 = dataBinding["Avatar02/Stroke"];
    }
    let prop21;
    if (null != onDataBindingChange) {
      prop21 = onDataBindingChange["Avatar02/Stroke"];
    }
    const colorBinding2 = require(3859) /* useObservedValue */.useColorBinding("Avatar02/Stroke", instance, prop20, prop21, playIfNeeded);
    const obj14 = require(3859) /* useObservedValue */;
    let prop22;
    if (null != dataBinding) {
      prop22 = dataBinding["Avatar02/Fill"];
    }
    let prop23;
    if (null != onDataBindingChange) {
      prop23 = onDataBindingChange["Avatar02/Fill"];
    }
    const colorBinding3 = require(3859) /* useObservedValue */.useColorBinding("Avatar02/Fill", instance, prop22, prop23, playIfNeeded);
    const obj15 = require(3859) /* useObservedValue */;
    let prop24;
    if (null != dataBinding) {
      prop24 = dataBinding["Avatar02/Username"];
    }
    let prop25;
    if (null != onDataBindingChange) {
      prop25 = onDataBindingChange["Avatar02/Username"];
    }
    const stringBinding1 = require(3859) /* useObservedValue */.useStringBinding("Avatar02/Username", instance, prop24, prop25, playIfNeeded);
    const obj16 = require(3859) /* useObservedValue */;
    let prop26;
    if (null != dataBinding) {
      prop26 = dataBinding["Avatar02/img"];
    }
    let prop27;
    if (null != onDataBindingChange) {
      prop27 = onDataBindingChange["Avatar02/img"];
    }
    const imageBinding1 = require(3859) /* useObservedValue */.useImageBinding("Avatar02/img", instance, prop26, prop27, playIfNeeded);
    const obj17 = require(3859) /* useObservedValue */;
    let prop28;
    if (null != dataBinding) {
      prop28 = dataBinding["Avatar03/ShadowVisibility"];
    }
    let prop29;
    if (null != onDataBindingChange) {
      prop29 = onDataBindingChange["Avatar03/ShadowVisibility"];
    }
    const numberBinding7 = require(3859) /* useObservedValue */.useNumberBinding("Avatar03/ShadowVisibility", instance, prop28, prop29, playIfNeeded);
    const obj18 = require(3859) /* useObservedValue */;
    let prop30;
    if (null != dataBinding) {
      prop30 = dataBinding["Avatar03/StrokeVisibility"];
    }
    let prop31;
    if (null != onDataBindingChange) {
      prop31 = onDataBindingChange["Avatar03/StrokeVisibility"];
    }
    const numberBinding8 = require(3859) /* useObservedValue */.useNumberBinding("Avatar03/StrokeVisibility", instance, prop30, prop31, playIfNeeded);
    const obj19 = require(3859) /* useObservedValue */;
    let prop32;
    if (null != dataBinding) {
      prop32 = dataBinding["Avatar03/UsernameVisibility"];
    }
    let prop33;
    if (null != onDataBindingChange) {
      prop33 = onDataBindingChange["Avatar03/UsernameVisibility"];
    }
    const numberBinding9 = require(3859) /* useObservedValue */.useNumberBinding("Avatar03/UsernameVisibility", instance, prop32, prop33, playIfNeeded);
    const obj20 = require(3859) /* useObservedValue */;
    let prop34;
    if (null != dataBinding) {
      prop34 = dataBinding["Avatar03/Stroke"];
    }
    let prop35;
    if (null != onDataBindingChange) {
      prop35 = onDataBindingChange["Avatar03/Stroke"];
    }
    const colorBinding4 = require(3859) /* useObservedValue */.useColorBinding("Avatar03/Stroke", instance, prop34, prop35, playIfNeeded);
    const obj21 = require(3859) /* useObservedValue */;
    let prop36;
    if (null != dataBinding) {
      prop36 = dataBinding["Avatar03/Fill"];
    }
    let prop37;
    if (null != onDataBindingChange) {
      prop37 = onDataBindingChange["Avatar03/Fill"];
    }
    const colorBinding5 = require(3859) /* useObservedValue */.useColorBinding("Avatar03/Fill", instance, prop36, prop37, playIfNeeded);
    const obj22 = require(3859) /* useObservedValue */;
    let prop38;
    if (null != dataBinding) {
      prop38 = dataBinding["Avatar03/Username"];
    }
    let prop39;
    if (null != onDataBindingChange) {
      prop39 = onDataBindingChange["Avatar03/Username"];
    }
    const stringBinding2 = require(3859) /* useObservedValue */.useStringBinding("Avatar03/Username", instance, prop38, prop39, playIfNeeded);
    const obj23 = require(3859) /* useObservedValue */;
    let prop40;
    if (null != dataBinding) {
      prop40 = dataBinding["Avatar03/img"];
    }
    let prop41;
    if (null != onDataBindingChange) {
      prop41 = onDataBindingChange["Avatar03/img"];
    }
    const imageBinding2 = require(3859) /* useObservedValue */.useImageBinding("Avatar03/img", instance, prop40, prop41, playIfNeeded);
    const obj24 = require(3859) /* useObservedValue */;
    let prop42;
    if (null != dataBinding) {
      prop42 = dataBinding["Avatar04/ShadowVisibility"];
    }
    let prop43;
    if (null != onDataBindingChange) {
      prop43 = onDataBindingChange["Avatar04/ShadowVisibility"];
    }
    const numberBinding10 = require(3859) /* useObservedValue */.useNumberBinding("Avatar04/ShadowVisibility", instance, prop42, prop43, playIfNeeded);
    const obj25 = require(3859) /* useObservedValue */;
    let prop44;
    if (null != dataBinding) {
      prop44 = dataBinding["Avatar04/StrokeVisibility"];
    }
    let prop45;
    if (null != onDataBindingChange) {
      prop45 = onDataBindingChange["Avatar04/StrokeVisibility"];
    }
    const numberBinding11 = require(3859) /* useObservedValue */.useNumberBinding("Avatar04/StrokeVisibility", instance, prop44, prop45, playIfNeeded);
    const obj26 = require(3859) /* useObservedValue */;
    let prop46;
    if (null != dataBinding) {
      prop46 = dataBinding["Avatar04/UsernameVisibility"];
    }
    let prop47;
    if (null != onDataBindingChange) {
      prop47 = onDataBindingChange["Avatar04/UsernameVisibility"];
    }
    const numberBinding12 = require(3859) /* useObservedValue */.useNumberBinding("Avatar04/UsernameVisibility", instance, prop46, prop47, playIfNeeded);
    const obj27 = require(3859) /* useObservedValue */;
    let prop48;
    if (null != dataBinding) {
      prop48 = dataBinding["Avatar04/Stroke"];
    }
    let prop49;
    if (null != onDataBindingChange) {
      prop49 = onDataBindingChange["Avatar04/Stroke"];
    }
    const colorBinding6 = require(3859) /* useObservedValue */.useColorBinding("Avatar04/Stroke", instance, prop48, prop49, playIfNeeded);
    const obj28 = require(3859) /* useObservedValue */;
    let prop50;
    if (null != dataBinding) {
      prop50 = dataBinding["Avatar04/Fill"];
    }
    let prop51;
    if (null != onDataBindingChange) {
      prop51 = onDataBindingChange["Avatar04/Fill"];
    }
    const colorBinding7 = require(3859) /* useObservedValue */.useColorBinding("Avatar04/Fill", instance, prop50, prop51, playIfNeeded);
    const obj29 = require(3859) /* useObservedValue */;
    let prop52;
    if (null != dataBinding) {
      prop52 = dataBinding["Avatar04/Username"];
    }
    let prop53;
    if (null != onDataBindingChange) {
      prop53 = onDataBindingChange["Avatar04/Username"];
    }
    const stringBinding3 = require(3859) /* useObservedValue */.useStringBinding("Avatar04/Username", instance, prop52, prop53, playIfNeeded);
    const obj30 = require(3859) /* useObservedValue */;
    let prop54;
    if (null != dataBinding) {
      prop54 = dataBinding["Avatar04/img"];
    }
    let prop55;
    if (null != onDataBindingChange) {
      prop55 = onDataBindingChange["Avatar04/img"];
    }
    const imageBinding3 = require(3859) /* useObservedValue */.useImageBinding("Avatar04/img", instance, prop54, prop55, playIfNeeded);
    const obj31 = require(3859) /* useObservedValue */;
    let prop56;
    if (null != dataBinding) {
      prop56 = dataBinding["Avatar05/ShadowVisibility"];
    }
    let prop57;
    if (null != onDataBindingChange) {
      prop57 = onDataBindingChange["Avatar05/ShadowVisibility"];
    }
    const numberBinding13 = require(3859) /* useObservedValue */.useNumberBinding("Avatar05/ShadowVisibility", instance, prop56, prop57, playIfNeeded);
    const obj32 = require(3859) /* useObservedValue */;
    let prop58;
    if (null != dataBinding) {
      prop58 = dataBinding["Avatar05/StrokeVisibility"];
    }
    let prop59;
    if (null != onDataBindingChange) {
      prop59 = onDataBindingChange["Avatar05/StrokeVisibility"];
    }
    const numberBinding14 = require(3859) /* useObservedValue */.useNumberBinding("Avatar05/StrokeVisibility", instance, prop58, prop59, playIfNeeded);
    const obj33 = require(3859) /* useObservedValue */;
    let prop60;
    if (null != dataBinding) {
      prop60 = dataBinding["Avatar05/UsernameVisibility"];
    }
    let prop61;
    if (null != onDataBindingChange) {
      prop61 = onDataBindingChange["Avatar05/UsernameVisibility"];
    }
    booleanBinding = require(3859) /* useObservedValue */.useNumberBinding("Avatar05/UsernameVisibility", instance, prop60, prop61, playIfNeeded);
    const obj34 = require(3859) /* useObservedValue */;
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding["Avatar05/Stroke"];
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange["Avatar05/Stroke"];
    }
    booleanBinding = require(3859) /* useObservedValue */.useColorBinding("Avatar05/Stroke", instance, booleanBinding, booleanBinding, playIfNeeded);
    const obj35 = require(3859) /* useObservedValue */;
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding["Avatar05/Fill"];
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange["Avatar05/Fill"];
    }
    booleanBinding = require(3859) /* useObservedValue */.useColorBinding("Avatar05/Fill", instance, booleanBinding, booleanBinding, playIfNeeded);
    const obj36 = require(3859) /* useObservedValue */;
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding["Avatar05/Username"];
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange["Avatar05/Username"];
    }
    booleanBinding = require(3859) /* useObservedValue */.useStringBinding("Avatar05/Username", instance, booleanBinding, booleanBinding, playIfNeeded);
    const obj37 = require(3859) /* useObservedValue */;
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding["Avatar05/img"];
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange["Avatar05/img"];
    }
    booleanBinding = require(3859) /* useObservedValue */.useImageBinding("Avatar05/img", instance, booleanBinding, booleanBinding, playIfNeeded);
    const obj38 = require(3859) /* useObservedValue */;
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding.ConnectorColor;
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange.ConnectorColor;
    }
    booleanBinding = require(3859) /* useObservedValue */.useColorBinding("ConnectorColor", instance, booleanBinding, booleanBinding, playIfNeeded);
    return null;
  }
};
let closure_10 = importAllResult.forwardRef(function CheckpointFriendsRiveInner(defaultViewModelInstance, ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "MAIN";
  if (undefined !== artboard) {
    str = artboard;
  }
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "threeFriends";
  if (undefined !== defaultViewModelInstance) {
    str2 = defaultViewModelInstance;
  }
  const dataBinding = defaultViewModelInstance.dataBinding;
  const onDataBindingChange = defaultViewModelInstance.onDataBindingChange;
  const items = [str, dataBinding, onDataBindingChange];
  const callback = importAllResult.useCallback((arg0) => {
    let tmp2 = null;
    if (null != outer1_9[str]) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["dataBinding"] = dataBinding;
      obj["onDataBindingChange"] = onDataBindingChange;
      tmp2 = outer1_6(tmp, obj);
    }
    return tmp2;
  }, items);
  let obj = { ref, src: dataBinding(onDataBindingChange[4]), artboard: str, artboardProperties: closure_7, artboardViewModelInstances: closure_8, defaultViewModelInstance: str2, stateMachine: defaultViewModelInstance.stateMachine, renderDataBinding: callback };
  let merged = Object.assign(callback(defaultViewModelInstance, closure_3));
  return jsx(str(onDataBindingChange[3]).BaseRive, { ref, src: dataBinding(onDataBindingChange[4]), artboard: str, artboardProperties: closure_7, artboardViewModelInstances: closure_8, defaultViewModelInstance: str2, stateMachine: defaultViewModelInstance.stateMachine, renderDataBinding: callback });
});
const forwardRefResult = importAllResult.forwardRef(function CheckpointFriendsRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj.children = <closure_10 ref={arg1} />;
  return jsx(require(3910) /* _isNativeReflectConstruct */.RiveErrorBoundary, { ref });
});
const result = require("jsxProd").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/CheckpointFriendsRive.tsx");

export const CheckpointFriendsRive = forwardRefResult;
