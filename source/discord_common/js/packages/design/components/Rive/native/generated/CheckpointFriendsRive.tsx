// Module ID: 3917
// Function ID: 32370
// Name: CheckpointFriendsRive
// Dependencies: []

// Module 3917 (CheckpointFriendsRive)
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_7 = { MAIN: {}, Sidekick: {}, Avatar: {}, Username: {}, Friends 01 Rotation: {} };
let closure_8 = { MAIN: ["friends", "sidebar", "message-requests", "modal"], Sidekick: ["friends", "sidebar", "message-requests", "modal"], Avatar: [null, null, null, null, null], Username: [null, null, null, null, null], Friends 01 Rotation: ["friends", "sidebar", "message-requests", "modal"] };
let closure_9 = {
  MAIN: function MAINBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    let booleanBinding = arg1(dependencyMap[3]).useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = arg1(dependencyMap[3]);
    let twoFriends;
    if (null != dataBinding) {
      twoFriends = dataBinding.twoFriends;
    }
    let twoFriends1;
    if (null != onDataBindingChange) {
      twoFriends1 = onDataBindingChange.twoFriends;
    }
    const booleanBinding1 = arg1(dependencyMap[3]).useBooleanBinding("twoFriends", instance, twoFriends, twoFriends1, playIfNeeded);
    const obj2 = arg1(dependencyMap[3]);
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = arg1(dependencyMap[3]).useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj3 = arg1(dependencyMap[3]);
    let prop;
    if (null != dataBinding) {
      prop = dataBinding.Avatar01/ShadowVisibility;
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange.Avatar01/ShadowVisibility;
    }
    const numberBinding1 = arg1(dependencyMap[3]).useNumberBinding("Avatar01/ShadowVisibility", instance, prop, prop1, playIfNeeded);
    const obj4 = arg1(dependencyMap[3]);
    let prop2;
    if (null != dataBinding) {
      prop2 = dataBinding.Avatar01/StrokeVisibility;
    }
    let prop3;
    if (null != onDataBindingChange) {
      prop3 = onDataBindingChange.Avatar01/StrokeVisibility;
    }
    const numberBinding2 = arg1(dependencyMap[3]).useNumberBinding("Avatar01/StrokeVisibility", instance, prop2, prop3, playIfNeeded);
    const obj5 = arg1(dependencyMap[3]);
    let prop4;
    if (null != dataBinding) {
      prop4 = dataBinding.Avatar01/UsernameVisibility;
    }
    let prop5;
    if (null != onDataBindingChange) {
      prop5 = onDataBindingChange.Avatar01/UsernameVisibility;
    }
    const numberBinding3 = arg1(dependencyMap[3]).useNumberBinding("Avatar01/UsernameVisibility", instance, prop4, prop5, playIfNeeded);
    const obj6 = arg1(dependencyMap[3]);
    let prop6;
    if (null != dataBinding) {
      prop6 = dataBinding.Avatar01/Stroke;
    }
    let prop7;
    if (null != onDataBindingChange) {
      prop7 = onDataBindingChange.Avatar01/Stroke;
    }
    const colorBinding = arg1(dependencyMap[3]).useColorBinding("Avatar01/Stroke", instance, prop6, prop7, playIfNeeded);
    const obj7 = arg1(dependencyMap[3]);
    let prop8;
    if (null != dataBinding) {
      prop8 = dataBinding.Avatar01/Fill;
    }
    let prop9;
    if (null != onDataBindingChange) {
      prop9 = onDataBindingChange.Avatar01/Fill;
    }
    const colorBinding1 = arg1(dependencyMap[3]).useColorBinding("Avatar01/Fill", instance, prop8, prop9, playIfNeeded);
    const obj8 = arg1(dependencyMap[3]);
    let prop10;
    if (null != dataBinding) {
      prop10 = dataBinding.Avatar01/Username;
    }
    let prop11;
    if (null != onDataBindingChange) {
      prop11 = onDataBindingChange.Avatar01/Username;
    }
    const stringBinding = arg1(dependencyMap[3]).useStringBinding("Avatar01/Username", instance, prop10, prop11, playIfNeeded);
    const obj9 = arg1(dependencyMap[3]);
    let prop12;
    if (null != dataBinding) {
      prop12 = dataBinding.Avatar01/img;
    }
    let prop13;
    if (null != onDataBindingChange) {
      prop13 = onDataBindingChange.Avatar01/img;
    }
    const imageBinding = arg1(dependencyMap[3]).useImageBinding("Avatar01/img", instance, prop12, prop13, playIfNeeded);
    const obj10 = arg1(dependencyMap[3]);
    let prop14;
    if (null != dataBinding) {
      prop14 = dataBinding.Avatar02/ShadowVisibility;
    }
    let prop15;
    if (null != onDataBindingChange) {
      prop15 = onDataBindingChange.Avatar02/ShadowVisibility;
    }
    const numberBinding4 = arg1(dependencyMap[3]).useNumberBinding("Avatar02/ShadowVisibility", instance, prop14, prop15, playIfNeeded);
    const obj11 = arg1(dependencyMap[3]);
    let prop16;
    if (null != dataBinding) {
      prop16 = dataBinding.Avatar02/StrokeVisibility;
    }
    let prop17;
    if (null != onDataBindingChange) {
      prop17 = onDataBindingChange.Avatar02/StrokeVisibility;
    }
    const numberBinding5 = arg1(dependencyMap[3]).useNumberBinding("Avatar02/StrokeVisibility", instance, prop16, prop17, playIfNeeded);
    const obj12 = arg1(dependencyMap[3]);
    let prop18;
    if (null != dataBinding) {
      prop18 = dataBinding.Avatar02/UsernameVisibility;
    }
    let prop19;
    if (null != onDataBindingChange) {
      prop19 = onDataBindingChange.Avatar02/UsernameVisibility;
    }
    const numberBinding6 = arg1(dependencyMap[3]).useNumberBinding("Avatar02/UsernameVisibility", instance, prop18, prop19, playIfNeeded);
    const obj13 = arg1(dependencyMap[3]);
    let prop20;
    if (null != dataBinding) {
      prop20 = dataBinding.Avatar02/Stroke;
    }
    let prop21;
    if (null != onDataBindingChange) {
      prop21 = onDataBindingChange.Avatar02/Stroke;
    }
    const colorBinding2 = arg1(dependencyMap[3]).useColorBinding("Avatar02/Stroke", instance, prop20, prop21, playIfNeeded);
    const obj14 = arg1(dependencyMap[3]);
    let prop22;
    if (null != dataBinding) {
      prop22 = dataBinding.Avatar02/Fill;
    }
    let prop23;
    if (null != onDataBindingChange) {
      prop23 = onDataBindingChange.Avatar02/Fill;
    }
    const colorBinding3 = arg1(dependencyMap[3]).useColorBinding("Avatar02/Fill", instance, prop22, prop23, playIfNeeded);
    const obj15 = arg1(dependencyMap[3]);
    let prop24;
    if (null != dataBinding) {
      prop24 = dataBinding.Avatar02/Username;
    }
    let prop25;
    if (null != onDataBindingChange) {
      prop25 = onDataBindingChange.Avatar02/Username;
    }
    const stringBinding1 = arg1(dependencyMap[3]).useStringBinding("Avatar02/Username", instance, prop24, prop25, playIfNeeded);
    const obj16 = arg1(dependencyMap[3]);
    let prop26;
    if (null != dataBinding) {
      prop26 = dataBinding.Avatar02/img;
    }
    let prop27;
    if (null != onDataBindingChange) {
      prop27 = onDataBindingChange.Avatar02/img;
    }
    const imageBinding1 = arg1(dependencyMap[3]).useImageBinding("Avatar02/img", instance, prop26, prop27, playIfNeeded);
    const obj17 = arg1(dependencyMap[3]);
    let prop28;
    if (null != dataBinding) {
      prop28 = dataBinding.Avatar03/ShadowVisibility;
    }
    let prop29;
    if (null != onDataBindingChange) {
      prop29 = onDataBindingChange.Avatar03/ShadowVisibility;
    }
    const numberBinding7 = arg1(dependencyMap[3]).useNumberBinding("Avatar03/ShadowVisibility", instance, prop28, prop29, playIfNeeded);
    const obj18 = arg1(dependencyMap[3]);
    let prop30;
    if (null != dataBinding) {
      prop30 = dataBinding.Avatar03/StrokeVisibility;
    }
    let prop31;
    if (null != onDataBindingChange) {
      prop31 = onDataBindingChange.Avatar03/StrokeVisibility;
    }
    const numberBinding8 = arg1(dependencyMap[3]).useNumberBinding("Avatar03/StrokeVisibility", instance, prop30, prop31, playIfNeeded);
    const obj19 = arg1(dependencyMap[3]);
    let prop32;
    if (null != dataBinding) {
      prop32 = dataBinding.Avatar03/UsernameVisibility;
    }
    let prop33;
    if (null != onDataBindingChange) {
      prop33 = onDataBindingChange.Avatar03/UsernameVisibility;
    }
    const numberBinding9 = arg1(dependencyMap[3]).useNumberBinding("Avatar03/UsernameVisibility", instance, prop32, prop33, playIfNeeded);
    const obj20 = arg1(dependencyMap[3]);
    let prop34;
    if (null != dataBinding) {
      prop34 = dataBinding.Avatar03/Stroke;
    }
    let prop35;
    if (null != onDataBindingChange) {
      prop35 = onDataBindingChange.Avatar03/Stroke;
    }
    const colorBinding4 = arg1(dependencyMap[3]).useColorBinding("Avatar03/Stroke", instance, prop34, prop35, playIfNeeded);
    const obj21 = arg1(dependencyMap[3]);
    let prop36;
    if (null != dataBinding) {
      prop36 = dataBinding.Avatar03/Fill;
    }
    let prop37;
    if (null != onDataBindingChange) {
      prop37 = onDataBindingChange.Avatar03/Fill;
    }
    const colorBinding5 = arg1(dependencyMap[3]).useColorBinding("Avatar03/Fill", instance, prop36, prop37, playIfNeeded);
    const obj22 = arg1(dependencyMap[3]);
    let prop38;
    if (null != dataBinding) {
      prop38 = dataBinding.Avatar03/Username;
    }
    let prop39;
    if (null != onDataBindingChange) {
      prop39 = onDataBindingChange.Avatar03/Username;
    }
    const stringBinding2 = arg1(dependencyMap[3]).useStringBinding("Avatar03/Username", instance, prop38, prop39, playIfNeeded);
    const obj23 = arg1(dependencyMap[3]);
    let prop40;
    if (null != dataBinding) {
      prop40 = dataBinding.Avatar03/img;
    }
    let prop41;
    if (null != onDataBindingChange) {
      prop41 = onDataBindingChange.Avatar03/img;
    }
    const imageBinding2 = arg1(dependencyMap[3]).useImageBinding("Avatar03/img", instance, prop40, prop41, playIfNeeded);
    const obj24 = arg1(dependencyMap[3]);
    let prop42;
    if (null != dataBinding) {
      prop42 = dataBinding.Avatar04/ShadowVisibility;
    }
    let prop43;
    if (null != onDataBindingChange) {
      prop43 = onDataBindingChange.Avatar04/ShadowVisibility;
    }
    const numberBinding10 = arg1(dependencyMap[3]).useNumberBinding("Avatar04/ShadowVisibility", instance, prop42, prop43, playIfNeeded);
    const obj25 = arg1(dependencyMap[3]);
    let prop44;
    if (null != dataBinding) {
      prop44 = dataBinding.Avatar04/StrokeVisibility;
    }
    let prop45;
    if (null != onDataBindingChange) {
      prop45 = onDataBindingChange.Avatar04/StrokeVisibility;
    }
    const numberBinding11 = arg1(dependencyMap[3]).useNumberBinding("Avatar04/StrokeVisibility", instance, prop44, prop45, playIfNeeded);
    const obj26 = arg1(dependencyMap[3]);
    let prop46;
    if (null != dataBinding) {
      prop46 = dataBinding.Avatar04/UsernameVisibility;
    }
    let prop47;
    if (null != onDataBindingChange) {
      prop47 = onDataBindingChange.Avatar04/UsernameVisibility;
    }
    const numberBinding12 = arg1(dependencyMap[3]).useNumberBinding("Avatar04/UsernameVisibility", instance, prop46, prop47, playIfNeeded);
    const obj27 = arg1(dependencyMap[3]);
    let prop48;
    if (null != dataBinding) {
      prop48 = dataBinding.Avatar04/Stroke;
    }
    let prop49;
    if (null != onDataBindingChange) {
      prop49 = onDataBindingChange.Avatar04/Stroke;
    }
    const colorBinding6 = arg1(dependencyMap[3]).useColorBinding("Avatar04/Stroke", instance, prop48, prop49, playIfNeeded);
    const obj28 = arg1(dependencyMap[3]);
    let prop50;
    if (null != dataBinding) {
      prop50 = dataBinding.Avatar04/Fill;
    }
    let prop51;
    if (null != onDataBindingChange) {
      prop51 = onDataBindingChange.Avatar04/Fill;
    }
    const colorBinding7 = arg1(dependencyMap[3]).useColorBinding("Avatar04/Fill", instance, prop50, prop51, playIfNeeded);
    const obj29 = arg1(dependencyMap[3]);
    let prop52;
    if (null != dataBinding) {
      prop52 = dataBinding.Avatar04/Username;
    }
    let prop53;
    if (null != onDataBindingChange) {
      prop53 = onDataBindingChange.Avatar04/Username;
    }
    const stringBinding3 = arg1(dependencyMap[3]).useStringBinding("Avatar04/Username", instance, prop52, prop53, playIfNeeded);
    const obj30 = arg1(dependencyMap[3]);
    let prop54;
    if (null != dataBinding) {
      prop54 = dataBinding.Avatar04/img;
    }
    let prop55;
    if (null != onDataBindingChange) {
      prop55 = onDataBindingChange.Avatar04/img;
    }
    const imageBinding3 = arg1(dependencyMap[3]).useImageBinding("Avatar04/img", instance, prop54, prop55, playIfNeeded);
    const obj31 = arg1(dependencyMap[3]);
    let prop56;
    if (null != dataBinding) {
      prop56 = dataBinding.Avatar05/ShadowVisibility;
    }
    let prop57;
    if (null != onDataBindingChange) {
      prop57 = onDataBindingChange.Avatar05/ShadowVisibility;
    }
    const numberBinding13 = arg1(dependencyMap[3]).useNumberBinding("Avatar05/ShadowVisibility", instance, prop56, prop57, playIfNeeded);
    const obj32 = arg1(dependencyMap[3]);
    let prop58;
    if (null != dataBinding) {
      prop58 = dataBinding.Avatar05/StrokeVisibility;
    }
    let prop59;
    if (null != onDataBindingChange) {
      prop59 = onDataBindingChange.Avatar05/StrokeVisibility;
    }
    const numberBinding14 = arg1(dependencyMap[3]).useNumberBinding("Avatar05/StrokeVisibility", instance, prop58, prop59, playIfNeeded);
    const obj33 = arg1(dependencyMap[3]);
    let prop60;
    if (null != dataBinding) {
      prop60 = dataBinding.Avatar05/UsernameVisibility;
    }
    let prop61;
    if (null != onDataBindingChange) {
      prop61 = onDataBindingChange.Avatar05/UsernameVisibility;
    }
    booleanBinding = arg1(dependencyMap[3]).useNumberBinding("Avatar05/UsernameVisibility", instance, prop60, prop61, playIfNeeded);
    const obj34 = arg1(dependencyMap[3]);
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding.Avatar05/Stroke;
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange.Avatar05/Stroke;
    }
    booleanBinding = arg1(dependencyMap[3]).useColorBinding("Avatar05/Stroke", instance, booleanBinding, booleanBinding, playIfNeeded);
    const obj35 = arg1(dependencyMap[3]);
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding.Avatar05/Fill;
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange.Avatar05/Fill;
    }
    booleanBinding = arg1(dependencyMap[3]).useColorBinding("Avatar05/Fill", instance, booleanBinding, booleanBinding, playIfNeeded);
    const obj36 = arg1(dependencyMap[3]);
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding.Avatar05/Username;
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange.Avatar05/Username;
    }
    booleanBinding = arg1(dependencyMap[3]).useStringBinding("Avatar05/Username", instance, booleanBinding, booleanBinding, playIfNeeded);
    const obj37 = arg1(dependencyMap[3]);
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding.Avatar05/img;
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange.Avatar05/img;
    }
    booleanBinding = arg1(dependencyMap[3]).useImageBinding("Avatar05/img", instance, booleanBinding, booleanBinding, playIfNeeded);
    const obj38 = arg1(dependencyMap[3]);
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding.ConnectorColor;
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange.ConnectorColor;
    }
    booleanBinding = arg1(dependencyMap[3]).useColorBinding("ConnectorColor", instance, booleanBinding, booleanBinding, playIfNeeded);
    return null;
  },
  Sidekick: function SidekickBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    let booleanBinding = arg1(dependencyMap[3]).useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = arg1(dependencyMap[3]);
    let twoFriends;
    if (null != dataBinding) {
      twoFriends = dataBinding.twoFriends;
    }
    let twoFriends1;
    if (null != onDataBindingChange) {
      twoFriends1 = onDataBindingChange.twoFriends;
    }
    const booleanBinding1 = arg1(dependencyMap[3]).useBooleanBinding("twoFriends", instance, twoFriends, twoFriends1, playIfNeeded);
    const obj2 = arg1(dependencyMap[3]);
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = arg1(dependencyMap[3]).useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj3 = arg1(dependencyMap[3]);
    let prop;
    if (null != dataBinding) {
      prop = dataBinding.Avatar01/ShadowVisibility;
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange.Avatar01/ShadowVisibility;
    }
    const numberBinding1 = arg1(dependencyMap[3]).useNumberBinding("Avatar01/ShadowVisibility", instance, prop, prop1, playIfNeeded);
    const obj4 = arg1(dependencyMap[3]);
    let prop2;
    if (null != dataBinding) {
      prop2 = dataBinding.Avatar01/StrokeVisibility;
    }
    let prop3;
    if (null != onDataBindingChange) {
      prop3 = onDataBindingChange.Avatar01/StrokeVisibility;
    }
    const numberBinding2 = arg1(dependencyMap[3]).useNumberBinding("Avatar01/StrokeVisibility", instance, prop2, prop3, playIfNeeded);
    const obj5 = arg1(dependencyMap[3]);
    let prop4;
    if (null != dataBinding) {
      prop4 = dataBinding.Avatar01/UsernameVisibility;
    }
    let prop5;
    if (null != onDataBindingChange) {
      prop5 = onDataBindingChange.Avatar01/UsernameVisibility;
    }
    const numberBinding3 = arg1(dependencyMap[3]).useNumberBinding("Avatar01/UsernameVisibility", instance, prop4, prop5, playIfNeeded);
    const obj6 = arg1(dependencyMap[3]);
    let prop6;
    if (null != dataBinding) {
      prop6 = dataBinding.Avatar01/Stroke;
    }
    let prop7;
    if (null != onDataBindingChange) {
      prop7 = onDataBindingChange.Avatar01/Stroke;
    }
    const colorBinding = arg1(dependencyMap[3]).useColorBinding("Avatar01/Stroke", instance, prop6, prop7, playIfNeeded);
    const obj7 = arg1(dependencyMap[3]);
    let prop8;
    if (null != dataBinding) {
      prop8 = dataBinding.Avatar01/Fill;
    }
    let prop9;
    if (null != onDataBindingChange) {
      prop9 = onDataBindingChange.Avatar01/Fill;
    }
    const colorBinding1 = arg1(dependencyMap[3]).useColorBinding("Avatar01/Fill", instance, prop8, prop9, playIfNeeded);
    const obj8 = arg1(dependencyMap[3]);
    let prop10;
    if (null != dataBinding) {
      prop10 = dataBinding.Avatar01/Username;
    }
    let prop11;
    if (null != onDataBindingChange) {
      prop11 = onDataBindingChange.Avatar01/Username;
    }
    const stringBinding = arg1(dependencyMap[3]).useStringBinding("Avatar01/Username", instance, prop10, prop11, playIfNeeded);
    const obj9 = arg1(dependencyMap[3]);
    let prop12;
    if (null != dataBinding) {
      prop12 = dataBinding.Avatar01/img;
    }
    let prop13;
    if (null != onDataBindingChange) {
      prop13 = onDataBindingChange.Avatar01/img;
    }
    const imageBinding = arg1(dependencyMap[3]).useImageBinding("Avatar01/img", instance, prop12, prop13, playIfNeeded);
    const obj10 = arg1(dependencyMap[3]);
    let prop14;
    if (null != dataBinding) {
      prop14 = dataBinding.Avatar02/ShadowVisibility;
    }
    let prop15;
    if (null != onDataBindingChange) {
      prop15 = onDataBindingChange.Avatar02/ShadowVisibility;
    }
    const numberBinding4 = arg1(dependencyMap[3]).useNumberBinding("Avatar02/ShadowVisibility", instance, prop14, prop15, playIfNeeded);
    const obj11 = arg1(dependencyMap[3]);
    let prop16;
    if (null != dataBinding) {
      prop16 = dataBinding.Avatar02/StrokeVisibility;
    }
    let prop17;
    if (null != onDataBindingChange) {
      prop17 = onDataBindingChange.Avatar02/StrokeVisibility;
    }
    const numberBinding5 = arg1(dependencyMap[3]).useNumberBinding("Avatar02/StrokeVisibility", instance, prop16, prop17, playIfNeeded);
    const obj12 = arg1(dependencyMap[3]);
    let prop18;
    if (null != dataBinding) {
      prop18 = dataBinding.Avatar02/UsernameVisibility;
    }
    let prop19;
    if (null != onDataBindingChange) {
      prop19 = onDataBindingChange.Avatar02/UsernameVisibility;
    }
    const numberBinding6 = arg1(dependencyMap[3]).useNumberBinding("Avatar02/UsernameVisibility", instance, prop18, prop19, playIfNeeded);
    const obj13 = arg1(dependencyMap[3]);
    let prop20;
    if (null != dataBinding) {
      prop20 = dataBinding.Avatar02/Stroke;
    }
    let prop21;
    if (null != onDataBindingChange) {
      prop21 = onDataBindingChange.Avatar02/Stroke;
    }
    const colorBinding2 = arg1(dependencyMap[3]).useColorBinding("Avatar02/Stroke", instance, prop20, prop21, playIfNeeded);
    const obj14 = arg1(dependencyMap[3]);
    let prop22;
    if (null != dataBinding) {
      prop22 = dataBinding.Avatar02/Fill;
    }
    let prop23;
    if (null != onDataBindingChange) {
      prop23 = onDataBindingChange.Avatar02/Fill;
    }
    const colorBinding3 = arg1(dependencyMap[3]).useColorBinding("Avatar02/Fill", instance, prop22, prop23, playIfNeeded);
    const obj15 = arg1(dependencyMap[3]);
    let prop24;
    if (null != dataBinding) {
      prop24 = dataBinding.Avatar02/Username;
    }
    let prop25;
    if (null != onDataBindingChange) {
      prop25 = onDataBindingChange.Avatar02/Username;
    }
    const stringBinding1 = arg1(dependencyMap[3]).useStringBinding("Avatar02/Username", instance, prop24, prop25, playIfNeeded);
    const obj16 = arg1(dependencyMap[3]);
    let prop26;
    if (null != dataBinding) {
      prop26 = dataBinding.Avatar02/img;
    }
    let prop27;
    if (null != onDataBindingChange) {
      prop27 = onDataBindingChange.Avatar02/img;
    }
    const imageBinding1 = arg1(dependencyMap[3]).useImageBinding("Avatar02/img", instance, prop26, prop27, playIfNeeded);
    const obj17 = arg1(dependencyMap[3]);
    let prop28;
    if (null != dataBinding) {
      prop28 = dataBinding.Avatar03/ShadowVisibility;
    }
    let prop29;
    if (null != onDataBindingChange) {
      prop29 = onDataBindingChange.Avatar03/ShadowVisibility;
    }
    const numberBinding7 = arg1(dependencyMap[3]).useNumberBinding("Avatar03/ShadowVisibility", instance, prop28, prop29, playIfNeeded);
    const obj18 = arg1(dependencyMap[3]);
    let prop30;
    if (null != dataBinding) {
      prop30 = dataBinding.Avatar03/StrokeVisibility;
    }
    let prop31;
    if (null != onDataBindingChange) {
      prop31 = onDataBindingChange.Avatar03/StrokeVisibility;
    }
    const numberBinding8 = arg1(dependencyMap[3]).useNumberBinding("Avatar03/StrokeVisibility", instance, prop30, prop31, playIfNeeded);
    const obj19 = arg1(dependencyMap[3]);
    let prop32;
    if (null != dataBinding) {
      prop32 = dataBinding.Avatar03/UsernameVisibility;
    }
    let prop33;
    if (null != onDataBindingChange) {
      prop33 = onDataBindingChange.Avatar03/UsernameVisibility;
    }
    const numberBinding9 = arg1(dependencyMap[3]).useNumberBinding("Avatar03/UsernameVisibility", instance, prop32, prop33, playIfNeeded);
    const obj20 = arg1(dependencyMap[3]);
    let prop34;
    if (null != dataBinding) {
      prop34 = dataBinding.Avatar03/Stroke;
    }
    let prop35;
    if (null != onDataBindingChange) {
      prop35 = onDataBindingChange.Avatar03/Stroke;
    }
    const colorBinding4 = arg1(dependencyMap[3]).useColorBinding("Avatar03/Stroke", instance, prop34, prop35, playIfNeeded);
    const obj21 = arg1(dependencyMap[3]);
    let prop36;
    if (null != dataBinding) {
      prop36 = dataBinding.Avatar03/Fill;
    }
    let prop37;
    if (null != onDataBindingChange) {
      prop37 = onDataBindingChange.Avatar03/Fill;
    }
    const colorBinding5 = arg1(dependencyMap[3]).useColorBinding("Avatar03/Fill", instance, prop36, prop37, playIfNeeded);
    const obj22 = arg1(dependencyMap[3]);
    let prop38;
    if (null != dataBinding) {
      prop38 = dataBinding.Avatar03/Username;
    }
    let prop39;
    if (null != onDataBindingChange) {
      prop39 = onDataBindingChange.Avatar03/Username;
    }
    const stringBinding2 = arg1(dependencyMap[3]).useStringBinding("Avatar03/Username", instance, prop38, prop39, playIfNeeded);
    const obj23 = arg1(dependencyMap[3]);
    let prop40;
    if (null != dataBinding) {
      prop40 = dataBinding.Avatar03/img;
    }
    let prop41;
    if (null != onDataBindingChange) {
      prop41 = onDataBindingChange.Avatar03/img;
    }
    const imageBinding2 = arg1(dependencyMap[3]).useImageBinding("Avatar03/img", instance, prop40, prop41, playIfNeeded);
    const obj24 = arg1(dependencyMap[3]);
    let prop42;
    if (null != dataBinding) {
      prop42 = dataBinding.Avatar04/ShadowVisibility;
    }
    let prop43;
    if (null != onDataBindingChange) {
      prop43 = onDataBindingChange.Avatar04/ShadowVisibility;
    }
    const numberBinding10 = arg1(dependencyMap[3]).useNumberBinding("Avatar04/ShadowVisibility", instance, prop42, prop43, playIfNeeded);
    const obj25 = arg1(dependencyMap[3]);
    let prop44;
    if (null != dataBinding) {
      prop44 = dataBinding.Avatar04/StrokeVisibility;
    }
    let prop45;
    if (null != onDataBindingChange) {
      prop45 = onDataBindingChange.Avatar04/StrokeVisibility;
    }
    const numberBinding11 = arg1(dependencyMap[3]).useNumberBinding("Avatar04/StrokeVisibility", instance, prop44, prop45, playIfNeeded);
    const obj26 = arg1(dependencyMap[3]);
    let prop46;
    if (null != dataBinding) {
      prop46 = dataBinding.Avatar04/UsernameVisibility;
    }
    let prop47;
    if (null != onDataBindingChange) {
      prop47 = onDataBindingChange.Avatar04/UsernameVisibility;
    }
    const numberBinding12 = arg1(dependencyMap[3]).useNumberBinding("Avatar04/UsernameVisibility", instance, prop46, prop47, playIfNeeded);
    const obj27 = arg1(dependencyMap[3]);
    let prop48;
    if (null != dataBinding) {
      prop48 = dataBinding.Avatar04/Stroke;
    }
    let prop49;
    if (null != onDataBindingChange) {
      prop49 = onDataBindingChange.Avatar04/Stroke;
    }
    const colorBinding6 = arg1(dependencyMap[3]).useColorBinding("Avatar04/Stroke", instance, prop48, prop49, playIfNeeded);
    const obj28 = arg1(dependencyMap[3]);
    let prop50;
    if (null != dataBinding) {
      prop50 = dataBinding.Avatar04/Fill;
    }
    let prop51;
    if (null != onDataBindingChange) {
      prop51 = onDataBindingChange.Avatar04/Fill;
    }
    const colorBinding7 = arg1(dependencyMap[3]).useColorBinding("Avatar04/Fill", instance, prop50, prop51, playIfNeeded);
    const obj29 = arg1(dependencyMap[3]);
    let prop52;
    if (null != dataBinding) {
      prop52 = dataBinding.Avatar04/Username;
    }
    let prop53;
    if (null != onDataBindingChange) {
      prop53 = onDataBindingChange.Avatar04/Username;
    }
    const stringBinding3 = arg1(dependencyMap[3]).useStringBinding("Avatar04/Username", instance, prop52, prop53, playIfNeeded);
    const obj30 = arg1(dependencyMap[3]);
    let prop54;
    if (null != dataBinding) {
      prop54 = dataBinding.Avatar04/img;
    }
    let prop55;
    if (null != onDataBindingChange) {
      prop55 = onDataBindingChange.Avatar04/img;
    }
    const imageBinding3 = arg1(dependencyMap[3]).useImageBinding("Avatar04/img", instance, prop54, prop55, playIfNeeded);
    const obj31 = arg1(dependencyMap[3]);
    let prop56;
    if (null != dataBinding) {
      prop56 = dataBinding.Avatar05/ShadowVisibility;
    }
    let prop57;
    if (null != onDataBindingChange) {
      prop57 = onDataBindingChange.Avatar05/ShadowVisibility;
    }
    const numberBinding13 = arg1(dependencyMap[3]).useNumberBinding("Avatar05/ShadowVisibility", instance, prop56, prop57, playIfNeeded);
    const obj32 = arg1(dependencyMap[3]);
    let prop58;
    if (null != dataBinding) {
      prop58 = dataBinding.Avatar05/StrokeVisibility;
    }
    let prop59;
    if (null != onDataBindingChange) {
      prop59 = onDataBindingChange.Avatar05/StrokeVisibility;
    }
    const numberBinding14 = arg1(dependencyMap[3]).useNumberBinding("Avatar05/StrokeVisibility", instance, prop58, prop59, playIfNeeded);
    const obj33 = arg1(dependencyMap[3]);
    let prop60;
    if (null != dataBinding) {
      prop60 = dataBinding.Avatar05/UsernameVisibility;
    }
    let prop61;
    if (null != onDataBindingChange) {
      prop61 = onDataBindingChange.Avatar05/UsernameVisibility;
    }
    booleanBinding = arg1(dependencyMap[3]).useNumberBinding("Avatar05/UsernameVisibility", instance, prop60, prop61, playIfNeeded);
    const obj34 = arg1(dependencyMap[3]);
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding.Avatar05/Stroke;
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange.Avatar05/Stroke;
    }
    booleanBinding = arg1(dependencyMap[3]).useColorBinding("Avatar05/Stroke", instance, booleanBinding, booleanBinding, playIfNeeded);
    const obj35 = arg1(dependencyMap[3]);
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding.Avatar05/Fill;
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange.Avatar05/Fill;
    }
    booleanBinding = arg1(dependencyMap[3]).useColorBinding("Avatar05/Fill", instance, booleanBinding, booleanBinding, playIfNeeded);
    const obj36 = arg1(dependencyMap[3]);
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding.Avatar05/Username;
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange.Avatar05/Username;
    }
    booleanBinding = arg1(dependencyMap[3]).useStringBinding("Avatar05/Username", instance, booleanBinding, booleanBinding, playIfNeeded);
    const obj37 = arg1(dependencyMap[3]);
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding.Avatar05/img;
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange.Avatar05/img;
    }
    booleanBinding = arg1(dependencyMap[3]).useImageBinding("Avatar05/img", instance, booleanBinding, booleanBinding, playIfNeeded);
    const obj38 = arg1(dependencyMap[3]);
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding.ConnectorColor;
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange.ConnectorColor;
    }
    booleanBinding = arg1(dependencyMap[3]).useColorBinding("ConnectorColor", instance, booleanBinding, booleanBinding, playIfNeeded);
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
    const numberBinding = arg1(dependencyMap[3]).useNumberBinding("ShadowVisibility", instance, ShadowVisibility, ShadowVisibility1, playIfNeeded);
    const obj = arg1(dependencyMap[3]);
    let StrokeVisibility;
    if (null != dataBinding) {
      StrokeVisibility = dataBinding.StrokeVisibility;
    }
    let StrokeVisibility1;
    if (null != onDataBindingChange) {
      StrokeVisibility1 = onDataBindingChange.StrokeVisibility;
    }
    const numberBinding1 = arg1(dependencyMap[3]).useNumberBinding("StrokeVisibility", instance, StrokeVisibility, StrokeVisibility1, playIfNeeded);
    const obj2 = arg1(dependencyMap[3]);
    let UsernameVisibility;
    if (null != dataBinding) {
      UsernameVisibility = dataBinding.UsernameVisibility;
    }
    let UsernameVisibility1;
    if (null != onDataBindingChange) {
      UsernameVisibility1 = onDataBindingChange.UsernameVisibility;
    }
    const numberBinding2 = arg1(dependencyMap[3]).useNumberBinding("UsernameVisibility", instance, UsernameVisibility, UsernameVisibility1, playIfNeeded);
    const obj3 = arg1(dependencyMap[3]);
    let Stroke;
    if (null != dataBinding) {
      Stroke = dataBinding.Stroke;
    }
    let Stroke1;
    if (null != onDataBindingChange) {
      Stroke1 = onDataBindingChange.Stroke;
    }
    const colorBinding = arg1(dependencyMap[3]).useColorBinding("Stroke", instance, Stroke, Stroke1, playIfNeeded);
    const obj4 = arg1(dependencyMap[3]);
    let Fill;
    if (null != dataBinding) {
      Fill = dataBinding.Fill;
    }
    let Fill1;
    if (null != onDataBindingChange) {
      Fill1 = onDataBindingChange.Fill;
    }
    const colorBinding1 = arg1(dependencyMap[3]).useColorBinding("Fill", instance, Fill, Fill1, playIfNeeded);
    const obj5 = arg1(dependencyMap[3]);
    let Username;
    if (null != dataBinding) {
      Username = dataBinding.Username;
    }
    let Username1;
    if (null != onDataBindingChange) {
      Username1 = onDataBindingChange.Username;
    }
    const stringBinding = arg1(dependencyMap[3]).useStringBinding("Username", instance, Username, Username1, playIfNeeded);
    const obj6 = arg1(dependencyMap[3]);
    let img;
    if (null != dataBinding) {
      img = dataBinding.img;
    }
    let img1;
    if (null != onDataBindingChange) {
      img1 = onDataBindingChange.img;
    }
    const imageBinding = arg1(dependencyMap[3]).useImageBinding("img", instance, img, img1, playIfNeeded);
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
    const numberBinding = arg1(dependencyMap[3]).useNumberBinding("ShadowVisibility", instance, ShadowVisibility, ShadowVisibility1, playIfNeeded);
    const obj = arg1(dependencyMap[3]);
    let StrokeVisibility;
    if (null != dataBinding) {
      StrokeVisibility = dataBinding.StrokeVisibility;
    }
    let StrokeVisibility1;
    if (null != onDataBindingChange) {
      StrokeVisibility1 = onDataBindingChange.StrokeVisibility;
    }
    const numberBinding1 = arg1(dependencyMap[3]).useNumberBinding("StrokeVisibility", instance, StrokeVisibility, StrokeVisibility1, playIfNeeded);
    const obj2 = arg1(dependencyMap[3]);
    let UsernameVisibility;
    if (null != dataBinding) {
      UsernameVisibility = dataBinding.UsernameVisibility;
    }
    let UsernameVisibility1;
    if (null != onDataBindingChange) {
      UsernameVisibility1 = onDataBindingChange.UsernameVisibility;
    }
    const numberBinding2 = arg1(dependencyMap[3]).useNumberBinding("UsernameVisibility", instance, UsernameVisibility, UsernameVisibility1, playIfNeeded);
    const obj3 = arg1(dependencyMap[3]);
    let Stroke;
    if (null != dataBinding) {
      Stroke = dataBinding.Stroke;
    }
    let Stroke1;
    if (null != onDataBindingChange) {
      Stroke1 = onDataBindingChange.Stroke;
    }
    const colorBinding = arg1(dependencyMap[3]).useColorBinding("Stroke", instance, Stroke, Stroke1, playIfNeeded);
    const obj4 = arg1(dependencyMap[3]);
    let Fill;
    if (null != dataBinding) {
      Fill = dataBinding.Fill;
    }
    let Fill1;
    if (null != onDataBindingChange) {
      Fill1 = onDataBindingChange.Fill;
    }
    const colorBinding1 = arg1(dependencyMap[3]).useColorBinding("Fill", instance, Fill, Fill1, playIfNeeded);
    const obj5 = arg1(dependencyMap[3]);
    let Username;
    if (null != dataBinding) {
      Username = dataBinding.Username;
    }
    let Username1;
    if (null != onDataBindingChange) {
      Username1 = onDataBindingChange.Username;
    }
    const stringBinding = arg1(dependencyMap[3]).useStringBinding("Username", instance, Username, Username1, playIfNeeded);
    const obj6 = arg1(dependencyMap[3]);
    let img;
    if (null != dataBinding) {
      img = dataBinding.img;
    }
    let img1;
    if (null != onDataBindingChange) {
      img1 = onDataBindingChange.img;
    }
    const imageBinding = arg1(dependencyMap[3]).useImageBinding("img", instance, img, img1, playIfNeeded);
    return null;
  },
  Friends 01 Rotation: function Friends01RotationBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    let booleanBinding = arg1(dependencyMap[3]).useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = arg1(dependencyMap[3]);
    let twoFriends;
    if (null != dataBinding) {
      twoFriends = dataBinding.twoFriends;
    }
    let twoFriends1;
    if (null != onDataBindingChange) {
      twoFriends1 = onDataBindingChange.twoFriends;
    }
    const booleanBinding1 = arg1(dependencyMap[3]).useBooleanBinding("twoFriends", instance, twoFriends, twoFriends1, playIfNeeded);
    const obj2 = arg1(dependencyMap[3]);
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = arg1(dependencyMap[3]).useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj3 = arg1(dependencyMap[3]);
    let prop;
    if (null != dataBinding) {
      prop = dataBinding.Avatar01/ShadowVisibility;
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange.Avatar01/ShadowVisibility;
    }
    const numberBinding1 = arg1(dependencyMap[3]).useNumberBinding("Avatar01/ShadowVisibility", instance, prop, prop1, playIfNeeded);
    const obj4 = arg1(dependencyMap[3]);
    let prop2;
    if (null != dataBinding) {
      prop2 = dataBinding.Avatar01/StrokeVisibility;
    }
    let prop3;
    if (null != onDataBindingChange) {
      prop3 = onDataBindingChange.Avatar01/StrokeVisibility;
    }
    const numberBinding2 = arg1(dependencyMap[3]).useNumberBinding("Avatar01/StrokeVisibility", instance, prop2, prop3, playIfNeeded);
    const obj5 = arg1(dependencyMap[3]);
    let prop4;
    if (null != dataBinding) {
      prop4 = dataBinding.Avatar01/UsernameVisibility;
    }
    let prop5;
    if (null != onDataBindingChange) {
      prop5 = onDataBindingChange.Avatar01/UsernameVisibility;
    }
    const numberBinding3 = arg1(dependencyMap[3]).useNumberBinding("Avatar01/UsernameVisibility", instance, prop4, prop5, playIfNeeded);
    const obj6 = arg1(dependencyMap[3]);
    let prop6;
    if (null != dataBinding) {
      prop6 = dataBinding.Avatar01/Stroke;
    }
    let prop7;
    if (null != onDataBindingChange) {
      prop7 = onDataBindingChange.Avatar01/Stroke;
    }
    const colorBinding = arg1(dependencyMap[3]).useColorBinding("Avatar01/Stroke", instance, prop6, prop7, playIfNeeded);
    const obj7 = arg1(dependencyMap[3]);
    let prop8;
    if (null != dataBinding) {
      prop8 = dataBinding.Avatar01/Fill;
    }
    let prop9;
    if (null != onDataBindingChange) {
      prop9 = onDataBindingChange.Avatar01/Fill;
    }
    const colorBinding1 = arg1(dependencyMap[3]).useColorBinding("Avatar01/Fill", instance, prop8, prop9, playIfNeeded);
    const obj8 = arg1(dependencyMap[3]);
    let prop10;
    if (null != dataBinding) {
      prop10 = dataBinding.Avatar01/Username;
    }
    let prop11;
    if (null != onDataBindingChange) {
      prop11 = onDataBindingChange.Avatar01/Username;
    }
    const stringBinding = arg1(dependencyMap[3]).useStringBinding("Avatar01/Username", instance, prop10, prop11, playIfNeeded);
    const obj9 = arg1(dependencyMap[3]);
    let prop12;
    if (null != dataBinding) {
      prop12 = dataBinding.Avatar01/img;
    }
    let prop13;
    if (null != onDataBindingChange) {
      prop13 = onDataBindingChange.Avatar01/img;
    }
    const imageBinding = arg1(dependencyMap[3]).useImageBinding("Avatar01/img", instance, prop12, prop13, playIfNeeded);
    const obj10 = arg1(dependencyMap[3]);
    let prop14;
    if (null != dataBinding) {
      prop14 = dataBinding.Avatar02/ShadowVisibility;
    }
    let prop15;
    if (null != onDataBindingChange) {
      prop15 = onDataBindingChange.Avatar02/ShadowVisibility;
    }
    const numberBinding4 = arg1(dependencyMap[3]).useNumberBinding("Avatar02/ShadowVisibility", instance, prop14, prop15, playIfNeeded);
    const obj11 = arg1(dependencyMap[3]);
    let prop16;
    if (null != dataBinding) {
      prop16 = dataBinding.Avatar02/StrokeVisibility;
    }
    let prop17;
    if (null != onDataBindingChange) {
      prop17 = onDataBindingChange.Avatar02/StrokeVisibility;
    }
    const numberBinding5 = arg1(dependencyMap[3]).useNumberBinding("Avatar02/StrokeVisibility", instance, prop16, prop17, playIfNeeded);
    const obj12 = arg1(dependencyMap[3]);
    let prop18;
    if (null != dataBinding) {
      prop18 = dataBinding.Avatar02/UsernameVisibility;
    }
    let prop19;
    if (null != onDataBindingChange) {
      prop19 = onDataBindingChange.Avatar02/UsernameVisibility;
    }
    const numberBinding6 = arg1(dependencyMap[3]).useNumberBinding("Avatar02/UsernameVisibility", instance, prop18, prop19, playIfNeeded);
    const obj13 = arg1(dependencyMap[3]);
    let prop20;
    if (null != dataBinding) {
      prop20 = dataBinding.Avatar02/Stroke;
    }
    let prop21;
    if (null != onDataBindingChange) {
      prop21 = onDataBindingChange.Avatar02/Stroke;
    }
    const colorBinding2 = arg1(dependencyMap[3]).useColorBinding("Avatar02/Stroke", instance, prop20, prop21, playIfNeeded);
    const obj14 = arg1(dependencyMap[3]);
    let prop22;
    if (null != dataBinding) {
      prop22 = dataBinding.Avatar02/Fill;
    }
    let prop23;
    if (null != onDataBindingChange) {
      prop23 = onDataBindingChange.Avatar02/Fill;
    }
    const colorBinding3 = arg1(dependencyMap[3]).useColorBinding("Avatar02/Fill", instance, prop22, prop23, playIfNeeded);
    const obj15 = arg1(dependencyMap[3]);
    let prop24;
    if (null != dataBinding) {
      prop24 = dataBinding.Avatar02/Username;
    }
    let prop25;
    if (null != onDataBindingChange) {
      prop25 = onDataBindingChange.Avatar02/Username;
    }
    const stringBinding1 = arg1(dependencyMap[3]).useStringBinding("Avatar02/Username", instance, prop24, prop25, playIfNeeded);
    const obj16 = arg1(dependencyMap[3]);
    let prop26;
    if (null != dataBinding) {
      prop26 = dataBinding.Avatar02/img;
    }
    let prop27;
    if (null != onDataBindingChange) {
      prop27 = onDataBindingChange.Avatar02/img;
    }
    const imageBinding1 = arg1(dependencyMap[3]).useImageBinding("Avatar02/img", instance, prop26, prop27, playIfNeeded);
    const obj17 = arg1(dependencyMap[3]);
    let prop28;
    if (null != dataBinding) {
      prop28 = dataBinding.Avatar03/ShadowVisibility;
    }
    let prop29;
    if (null != onDataBindingChange) {
      prop29 = onDataBindingChange.Avatar03/ShadowVisibility;
    }
    const numberBinding7 = arg1(dependencyMap[3]).useNumberBinding("Avatar03/ShadowVisibility", instance, prop28, prop29, playIfNeeded);
    const obj18 = arg1(dependencyMap[3]);
    let prop30;
    if (null != dataBinding) {
      prop30 = dataBinding.Avatar03/StrokeVisibility;
    }
    let prop31;
    if (null != onDataBindingChange) {
      prop31 = onDataBindingChange.Avatar03/StrokeVisibility;
    }
    const numberBinding8 = arg1(dependencyMap[3]).useNumberBinding("Avatar03/StrokeVisibility", instance, prop30, prop31, playIfNeeded);
    const obj19 = arg1(dependencyMap[3]);
    let prop32;
    if (null != dataBinding) {
      prop32 = dataBinding.Avatar03/UsernameVisibility;
    }
    let prop33;
    if (null != onDataBindingChange) {
      prop33 = onDataBindingChange.Avatar03/UsernameVisibility;
    }
    const numberBinding9 = arg1(dependencyMap[3]).useNumberBinding("Avatar03/UsernameVisibility", instance, prop32, prop33, playIfNeeded);
    const obj20 = arg1(dependencyMap[3]);
    let prop34;
    if (null != dataBinding) {
      prop34 = dataBinding.Avatar03/Stroke;
    }
    let prop35;
    if (null != onDataBindingChange) {
      prop35 = onDataBindingChange.Avatar03/Stroke;
    }
    const colorBinding4 = arg1(dependencyMap[3]).useColorBinding("Avatar03/Stroke", instance, prop34, prop35, playIfNeeded);
    const obj21 = arg1(dependencyMap[3]);
    let prop36;
    if (null != dataBinding) {
      prop36 = dataBinding.Avatar03/Fill;
    }
    let prop37;
    if (null != onDataBindingChange) {
      prop37 = onDataBindingChange.Avatar03/Fill;
    }
    const colorBinding5 = arg1(dependencyMap[3]).useColorBinding("Avatar03/Fill", instance, prop36, prop37, playIfNeeded);
    const obj22 = arg1(dependencyMap[3]);
    let prop38;
    if (null != dataBinding) {
      prop38 = dataBinding.Avatar03/Username;
    }
    let prop39;
    if (null != onDataBindingChange) {
      prop39 = onDataBindingChange.Avatar03/Username;
    }
    const stringBinding2 = arg1(dependencyMap[3]).useStringBinding("Avatar03/Username", instance, prop38, prop39, playIfNeeded);
    const obj23 = arg1(dependencyMap[3]);
    let prop40;
    if (null != dataBinding) {
      prop40 = dataBinding.Avatar03/img;
    }
    let prop41;
    if (null != onDataBindingChange) {
      prop41 = onDataBindingChange.Avatar03/img;
    }
    const imageBinding2 = arg1(dependencyMap[3]).useImageBinding("Avatar03/img", instance, prop40, prop41, playIfNeeded);
    const obj24 = arg1(dependencyMap[3]);
    let prop42;
    if (null != dataBinding) {
      prop42 = dataBinding.Avatar04/ShadowVisibility;
    }
    let prop43;
    if (null != onDataBindingChange) {
      prop43 = onDataBindingChange.Avatar04/ShadowVisibility;
    }
    const numberBinding10 = arg1(dependencyMap[3]).useNumberBinding("Avatar04/ShadowVisibility", instance, prop42, prop43, playIfNeeded);
    const obj25 = arg1(dependencyMap[3]);
    let prop44;
    if (null != dataBinding) {
      prop44 = dataBinding.Avatar04/StrokeVisibility;
    }
    let prop45;
    if (null != onDataBindingChange) {
      prop45 = onDataBindingChange.Avatar04/StrokeVisibility;
    }
    const numberBinding11 = arg1(dependencyMap[3]).useNumberBinding("Avatar04/StrokeVisibility", instance, prop44, prop45, playIfNeeded);
    const obj26 = arg1(dependencyMap[3]);
    let prop46;
    if (null != dataBinding) {
      prop46 = dataBinding.Avatar04/UsernameVisibility;
    }
    let prop47;
    if (null != onDataBindingChange) {
      prop47 = onDataBindingChange.Avatar04/UsernameVisibility;
    }
    const numberBinding12 = arg1(dependencyMap[3]).useNumberBinding("Avatar04/UsernameVisibility", instance, prop46, prop47, playIfNeeded);
    const obj27 = arg1(dependencyMap[3]);
    let prop48;
    if (null != dataBinding) {
      prop48 = dataBinding.Avatar04/Stroke;
    }
    let prop49;
    if (null != onDataBindingChange) {
      prop49 = onDataBindingChange.Avatar04/Stroke;
    }
    const colorBinding6 = arg1(dependencyMap[3]).useColorBinding("Avatar04/Stroke", instance, prop48, prop49, playIfNeeded);
    const obj28 = arg1(dependencyMap[3]);
    let prop50;
    if (null != dataBinding) {
      prop50 = dataBinding.Avatar04/Fill;
    }
    let prop51;
    if (null != onDataBindingChange) {
      prop51 = onDataBindingChange.Avatar04/Fill;
    }
    const colorBinding7 = arg1(dependencyMap[3]).useColorBinding("Avatar04/Fill", instance, prop50, prop51, playIfNeeded);
    const obj29 = arg1(dependencyMap[3]);
    let prop52;
    if (null != dataBinding) {
      prop52 = dataBinding.Avatar04/Username;
    }
    let prop53;
    if (null != onDataBindingChange) {
      prop53 = onDataBindingChange.Avatar04/Username;
    }
    const stringBinding3 = arg1(dependencyMap[3]).useStringBinding("Avatar04/Username", instance, prop52, prop53, playIfNeeded);
    const obj30 = arg1(dependencyMap[3]);
    let prop54;
    if (null != dataBinding) {
      prop54 = dataBinding.Avatar04/img;
    }
    let prop55;
    if (null != onDataBindingChange) {
      prop55 = onDataBindingChange.Avatar04/img;
    }
    const imageBinding3 = arg1(dependencyMap[3]).useImageBinding("Avatar04/img", instance, prop54, prop55, playIfNeeded);
    const obj31 = arg1(dependencyMap[3]);
    let prop56;
    if (null != dataBinding) {
      prop56 = dataBinding.Avatar05/ShadowVisibility;
    }
    let prop57;
    if (null != onDataBindingChange) {
      prop57 = onDataBindingChange.Avatar05/ShadowVisibility;
    }
    const numberBinding13 = arg1(dependencyMap[3]).useNumberBinding("Avatar05/ShadowVisibility", instance, prop56, prop57, playIfNeeded);
    const obj32 = arg1(dependencyMap[3]);
    let prop58;
    if (null != dataBinding) {
      prop58 = dataBinding.Avatar05/StrokeVisibility;
    }
    let prop59;
    if (null != onDataBindingChange) {
      prop59 = onDataBindingChange.Avatar05/StrokeVisibility;
    }
    const numberBinding14 = arg1(dependencyMap[3]).useNumberBinding("Avatar05/StrokeVisibility", instance, prop58, prop59, playIfNeeded);
    const obj33 = arg1(dependencyMap[3]);
    let prop60;
    if (null != dataBinding) {
      prop60 = dataBinding.Avatar05/UsernameVisibility;
    }
    let prop61;
    if (null != onDataBindingChange) {
      prop61 = onDataBindingChange.Avatar05/UsernameVisibility;
    }
    booleanBinding = arg1(dependencyMap[3]).useNumberBinding("Avatar05/UsernameVisibility", instance, prop60, prop61, playIfNeeded);
    const obj34 = arg1(dependencyMap[3]);
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding.Avatar05/Stroke;
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange.Avatar05/Stroke;
    }
    booleanBinding = arg1(dependencyMap[3]).useColorBinding("Avatar05/Stroke", instance, booleanBinding, booleanBinding, playIfNeeded);
    const obj35 = arg1(dependencyMap[3]);
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding.Avatar05/Fill;
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange.Avatar05/Fill;
    }
    booleanBinding = arg1(dependencyMap[3]).useColorBinding("Avatar05/Fill", instance, booleanBinding, booleanBinding, playIfNeeded);
    const obj36 = arg1(dependencyMap[3]);
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding.Avatar05/Username;
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange.Avatar05/Username;
    }
    booleanBinding = arg1(dependencyMap[3]).useStringBinding("Avatar05/Username", instance, booleanBinding, booleanBinding, playIfNeeded);
    const obj37 = arg1(dependencyMap[3]);
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding.Avatar05/img;
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange.Avatar05/img;
    }
    booleanBinding = arg1(dependencyMap[3]).useImageBinding("Avatar05/img", instance, booleanBinding, booleanBinding, playIfNeeded);
    const obj38 = arg1(dependencyMap[3]);
    booleanBinding = undefined;
    if (null != dataBinding) {
      booleanBinding = dataBinding.ConnectorColor;
    }
    booleanBinding = undefined;
    if (null != onDataBindingChange) {
      booleanBinding = onDataBindingChange.ConnectorColor;
    }
    booleanBinding = arg1(dependencyMap[3]).useColorBinding("ConnectorColor", instance, booleanBinding, booleanBinding, playIfNeeded);
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
  ref = str;
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "threeFriends";
  if (undefined !== defaultViewModelInstance) {
    str2 = defaultViewModelInstance;
  }
  const dataBinding = defaultViewModelInstance.dataBinding;
  const importDefault = dataBinding;
  const onDataBindingChange = defaultViewModelInstance.onDataBindingChange;
  const dependencyMap = onDataBindingChange;
  const items = [str, dataBinding, onDataBindingChange];
  const callback = importAllResult.useCallback((arg0) => {
    let tmp2 = null;
    if (null != closure_9[closure_0]) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["dataBinding"] = dataBinding;
      obj["onDataBindingChange"] = onDataBindingChange;
      tmp2 = callback(tmp, obj);
    }
    return tmp2;
  }, items);
  const obj = { ref, src: importDefault(dependencyMap[4]), artboard: str, artboardProperties: closure_7, artboardViewModelInstances: closure_8, defaultViewModelInstance: str2, stateMachine: defaultViewModelInstance.stateMachine, renderDataBinding: callback };
  const merged = Object.assign(callback(defaultViewModelInstance, closure_3));
  return jsx(ref(dependencyMap[3]).BaseRive, obj);
});
const forwardRefResult = importAllResult.forwardRef(function CheckpointFriendsRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj.children = <closure_10 {...obj} />;
  return jsx(ref(dependencyMap[5]).RiveErrorBoundary, obj);
});
const result = arg1(dependencyMap[6]).fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/CheckpointFriendsRive.tsx");

export const CheckpointFriendsRive = forwardRefResult;
