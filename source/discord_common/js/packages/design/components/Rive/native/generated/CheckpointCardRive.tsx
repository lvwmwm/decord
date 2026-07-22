// Module ID: 3915
// Function ID: 32351
// Name: CheckpointCardRive
// Dependencies: []

// Module 3915 (CheckpointCardRive)
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_7 = { Main: { USER_SAFETY_TOOLS_REPORT: false, lastUpdateByTag: false, y: false, for: false, join: false, surrogates: false, items: false, surrogates: false, body: false, id: false }, Cassette: { USER_SAFETY_TOOLS_REPORT: false, lastUpdateByTag: false, y: false, for: false, join: false, surrogates: false, items: false, surrogates: false, body: false, id: false }, Cassette Icon: {}, Cat: { USER_SAFETY_TOOLS_REPORT: false, lastUpdateByTag: false, y: false, for: false, join: false, surrogates: false, items: false, surrogates: false, body: false, id: false }, Cat Icon: {}, Banana: { USER_SAFETY_TOOLS_REPORT: false, lastUpdateByTag: false, y: false, for: false, join: false, surrogates: false, items: false, surrogates: false, body: false, id: false }, Banana Icon: {}, Duck Icon: {}, Duck: { USER_SAFETY_TOOLS_REPORT: false, lastUpdateByTag: false, y: false, for: false, join: false, surrogates: false, items: false, surrogates: false, body: false, id: false }, Snail Icon: {}, Snail: { USER_SAFETY_TOOLS_REPORT: false, lastUpdateByTag: false, y: false, for: false, join: false, surrogates: false, items: false, surrogates: false, body: false, id: false }, Origami Icon: {}, Origami: { USER_SAFETY_TOOLS_REPORT: false, lastUpdateByTag: false, y: false, for: false, join: false, surrogates: false, items: false, surrogates: false, body: false, id: false }, Disco Icon: {}, Disco: { USER_SAFETY_TOOLS_REPORT: false, lastUpdateByTag: false, y: false, for: false, join: false, surrogates: false, items: false, surrogates: false, body: false, id: false }, Capybara: { USER_SAFETY_TOOLS_REPORT: false, lastUpdateByTag: false, y: false, for: false, join: false, surrogates: false, items: false, surrogates: false, body: false, id: false }, Capybara Icon: {}, Donut: { USER_SAFETY_TOOLS_REPORT: false, lastUpdateByTag: false, y: false, for: false, join: false, surrogates: false, items: false, surrogates: false, body: false, id: false }, Donut Icon: {}, Bonsai Icon: {}, Bonsai: { USER_SAFETY_TOOLS_REPORT: false, lastUpdateByTag: false, y: false, for: false, join: false, surrogates: false, items: false, surrogates: false, body: false, id: false }, Globe Single Line: {}, Card Back: { USER_SAFETY_TOOLS_REPORT: false, lastUpdateByTag: false, y: false, for: false, join: false, surrogates: false, items: false, surrogates: false, body: false, id: false }, Knickknack: { USER_SAFETY_TOOLS_REPORT: false, lastUpdateByTag: false, y: false, for: false, join: false, surrogates: false, items: false, surrogates: false, body: false, id: false }, Globe: {}, Card: { USER_SAFETY_TOOLS_REPORT: false, lastUpdateByTag: false, y: false, for: false, join: false, surrogates: false, items: false, surrogates: false, body: false, id: false } };
let closure_8 = { Main: [], Cassette: [], Cassette Icon: [], Cat: [], Cat Icon: [], Banana: [], Banana Icon: [], Duck Icon: [], Duck: [], Snail Icon: [], Snail: [], Origami Icon: [], Origami: [], Disco Icon: [], Disco: [], Capybara: [], Capybara Icon: [], Donut: [], Donut Icon: [], Bonsai Icon: [], Bonsai: [], Globe Single Line: [], Card Back: [], Knickknack: [], Globe: [], Card: [] };
let closure_9 = {
  Main: function MainBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = arg1(dependencyMap[3]).useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = arg1(dependencyMap[3]);
    let Icon;
    if (null != dataBinding) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = arg1(dependencyMap[3]).useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    const obj2 = arg1(dependencyMap[3]);
    let Illustration;
    if (null != dataBinding) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = arg1(dependencyMap[3]).useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const obj3 = arg1(dependencyMap[3]);
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = arg1(dependencyMap[3]).useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj4 = arg1(dependencyMap[3]);
    let PowerMeter;
    if (null != dataBinding) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (null != onDataBindingChange) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = arg1(dependencyMap[3]).useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const obj5 = arg1(dependencyMap[3]);
    let LVL;
    if (null != dataBinding) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (null != onDataBindingChange) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = arg1(dependencyMap[3]).useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const obj6 = arg1(dependencyMap[3]);
    let PersonaName;
    if (null != dataBinding) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (null != onDataBindingChange) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = arg1(dependencyMap[3]).useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const obj7 = arg1(dependencyMap[3]);
    let prop;
    if (null != dataBinding) {
      prop = dataBinding.id#;
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange.id#;
    }
    const stringBinding2 = arg1(dependencyMap[3]).useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const obj8 = arg1(dependencyMap[3]);
    let Outof;
    if (null != dataBinding) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (null != onDataBindingChange) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = arg1(dependencyMap[3]).useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const obj9 = arg1(dependencyMap[3]);
    let FillColor;
    if (null != dataBinding) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (null != onDataBindingChange) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = arg1(dependencyMap[3]).useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Cassette: function CassetteBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = arg1(dependencyMap[3]).useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = arg1(dependencyMap[3]);
    let Icon;
    if (null != dataBinding) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = arg1(dependencyMap[3]).useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    const obj2 = arg1(dependencyMap[3]);
    let Illustration;
    if (null != dataBinding) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = arg1(dependencyMap[3]).useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const obj3 = arg1(dependencyMap[3]);
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = arg1(dependencyMap[3]).useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj4 = arg1(dependencyMap[3]);
    let PowerMeter;
    if (null != dataBinding) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (null != onDataBindingChange) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = arg1(dependencyMap[3]).useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const obj5 = arg1(dependencyMap[3]);
    let LVL;
    if (null != dataBinding) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (null != onDataBindingChange) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = arg1(dependencyMap[3]).useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const obj6 = arg1(dependencyMap[3]);
    let PersonaName;
    if (null != dataBinding) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (null != onDataBindingChange) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = arg1(dependencyMap[3]).useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const obj7 = arg1(dependencyMap[3]);
    let prop;
    if (null != dataBinding) {
      prop = dataBinding.id#;
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange.id#;
    }
    const stringBinding2 = arg1(dependencyMap[3]).useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const obj8 = arg1(dependencyMap[3]);
    let Outof;
    if (null != dataBinding) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (null != onDataBindingChange) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = arg1(dependencyMap[3]).useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const obj9 = arg1(dependencyMap[3]);
    let FillColor;
    if (null != dataBinding) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (null != onDataBindingChange) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = arg1(dependencyMap[3]).useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Cat: function CatBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = arg1(dependencyMap[3]).useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = arg1(dependencyMap[3]);
    let Icon;
    if (null != dataBinding) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = arg1(dependencyMap[3]).useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    const obj2 = arg1(dependencyMap[3]);
    let Illustration;
    if (null != dataBinding) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = arg1(dependencyMap[3]).useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const obj3 = arg1(dependencyMap[3]);
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = arg1(dependencyMap[3]).useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj4 = arg1(dependencyMap[3]);
    let PowerMeter;
    if (null != dataBinding) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (null != onDataBindingChange) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = arg1(dependencyMap[3]).useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const obj5 = arg1(dependencyMap[3]);
    let LVL;
    if (null != dataBinding) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (null != onDataBindingChange) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = arg1(dependencyMap[3]).useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const obj6 = arg1(dependencyMap[3]);
    let PersonaName;
    if (null != dataBinding) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (null != onDataBindingChange) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = arg1(dependencyMap[3]).useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const obj7 = arg1(dependencyMap[3]);
    let prop;
    if (null != dataBinding) {
      prop = dataBinding.id#;
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange.id#;
    }
    const stringBinding2 = arg1(dependencyMap[3]).useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const obj8 = arg1(dependencyMap[3]);
    let Outof;
    if (null != dataBinding) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (null != onDataBindingChange) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = arg1(dependencyMap[3]).useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const obj9 = arg1(dependencyMap[3]);
    let FillColor;
    if (null != dataBinding) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (null != onDataBindingChange) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = arg1(dependencyMap[3]).useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Banana: function BananaBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = arg1(dependencyMap[3]).useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = arg1(dependencyMap[3]);
    let Icon;
    if (null != dataBinding) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = arg1(dependencyMap[3]).useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    const obj2 = arg1(dependencyMap[3]);
    let Illustration;
    if (null != dataBinding) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = arg1(dependencyMap[3]).useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const obj3 = arg1(dependencyMap[3]);
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = arg1(dependencyMap[3]).useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj4 = arg1(dependencyMap[3]);
    let PowerMeter;
    if (null != dataBinding) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (null != onDataBindingChange) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = arg1(dependencyMap[3]).useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const obj5 = arg1(dependencyMap[3]);
    let LVL;
    if (null != dataBinding) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (null != onDataBindingChange) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = arg1(dependencyMap[3]).useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const obj6 = arg1(dependencyMap[3]);
    let PersonaName;
    if (null != dataBinding) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (null != onDataBindingChange) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = arg1(dependencyMap[3]).useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const obj7 = arg1(dependencyMap[3]);
    let prop;
    if (null != dataBinding) {
      prop = dataBinding.id#;
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange.id#;
    }
    const stringBinding2 = arg1(dependencyMap[3]).useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const obj8 = arg1(dependencyMap[3]);
    let Outof;
    if (null != dataBinding) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (null != onDataBindingChange) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = arg1(dependencyMap[3]).useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const obj9 = arg1(dependencyMap[3]);
    let FillColor;
    if (null != dataBinding) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (null != onDataBindingChange) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = arg1(dependencyMap[3]).useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Duck: function DuckBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = arg1(dependencyMap[3]).useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = arg1(dependencyMap[3]);
    let Icon;
    if (null != dataBinding) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = arg1(dependencyMap[3]).useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    const obj2 = arg1(dependencyMap[3]);
    let Illustration;
    if (null != dataBinding) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = arg1(dependencyMap[3]).useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const obj3 = arg1(dependencyMap[3]);
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = arg1(dependencyMap[3]).useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj4 = arg1(dependencyMap[3]);
    let PowerMeter;
    if (null != dataBinding) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (null != onDataBindingChange) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = arg1(dependencyMap[3]).useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const obj5 = arg1(dependencyMap[3]);
    let LVL;
    if (null != dataBinding) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (null != onDataBindingChange) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = arg1(dependencyMap[3]).useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const obj6 = arg1(dependencyMap[3]);
    let PersonaName;
    if (null != dataBinding) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (null != onDataBindingChange) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = arg1(dependencyMap[3]).useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const obj7 = arg1(dependencyMap[3]);
    let prop;
    if (null != dataBinding) {
      prop = dataBinding.id#;
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange.id#;
    }
    const stringBinding2 = arg1(dependencyMap[3]).useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const obj8 = arg1(dependencyMap[3]);
    let Outof;
    if (null != dataBinding) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (null != onDataBindingChange) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = arg1(dependencyMap[3]).useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const obj9 = arg1(dependencyMap[3]);
    let FillColor;
    if (null != dataBinding) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (null != onDataBindingChange) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = arg1(dependencyMap[3]).useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Snail: function SnailBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = arg1(dependencyMap[3]).useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = arg1(dependencyMap[3]);
    let Icon;
    if (null != dataBinding) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = arg1(dependencyMap[3]).useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    const obj2 = arg1(dependencyMap[3]);
    let Illustration;
    if (null != dataBinding) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = arg1(dependencyMap[3]).useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const obj3 = arg1(dependencyMap[3]);
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = arg1(dependencyMap[3]).useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj4 = arg1(dependencyMap[3]);
    let PowerMeter;
    if (null != dataBinding) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (null != onDataBindingChange) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = arg1(dependencyMap[3]).useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const obj5 = arg1(dependencyMap[3]);
    let LVL;
    if (null != dataBinding) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (null != onDataBindingChange) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = arg1(dependencyMap[3]).useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const obj6 = arg1(dependencyMap[3]);
    let PersonaName;
    if (null != dataBinding) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (null != onDataBindingChange) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = arg1(dependencyMap[3]).useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const obj7 = arg1(dependencyMap[3]);
    let prop;
    if (null != dataBinding) {
      prop = dataBinding.id#;
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange.id#;
    }
    const stringBinding2 = arg1(dependencyMap[3]).useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const obj8 = arg1(dependencyMap[3]);
    let Outof;
    if (null != dataBinding) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (null != onDataBindingChange) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = arg1(dependencyMap[3]).useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const obj9 = arg1(dependencyMap[3]);
    let FillColor;
    if (null != dataBinding) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (null != onDataBindingChange) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = arg1(dependencyMap[3]).useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Origami: function OrigamiBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = arg1(dependencyMap[3]).useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = arg1(dependencyMap[3]);
    let Icon;
    if (null != dataBinding) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = arg1(dependencyMap[3]).useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    const obj2 = arg1(dependencyMap[3]);
    let Illustration;
    if (null != dataBinding) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = arg1(dependencyMap[3]).useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const obj3 = arg1(dependencyMap[3]);
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = arg1(dependencyMap[3]).useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj4 = arg1(dependencyMap[3]);
    let PowerMeter;
    if (null != dataBinding) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (null != onDataBindingChange) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = arg1(dependencyMap[3]).useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const obj5 = arg1(dependencyMap[3]);
    let LVL;
    if (null != dataBinding) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (null != onDataBindingChange) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = arg1(dependencyMap[3]).useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const obj6 = arg1(dependencyMap[3]);
    let PersonaName;
    if (null != dataBinding) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (null != onDataBindingChange) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = arg1(dependencyMap[3]).useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const obj7 = arg1(dependencyMap[3]);
    let prop;
    if (null != dataBinding) {
      prop = dataBinding.id#;
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange.id#;
    }
    const stringBinding2 = arg1(dependencyMap[3]).useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const obj8 = arg1(dependencyMap[3]);
    let Outof;
    if (null != dataBinding) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (null != onDataBindingChange) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = arg1(dependencyMap[3]).useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const obj9 = arg1(dependencyMap[3]);
    let FillColor;
    if (null != dataBinding) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (null != onDataBindingChange) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = arg1(dependencyMap[3]).useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Disco: function DiscoBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = arg1(dependencyMap[3]).useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = arg1(dependencyMap[3]);
    let Icon;
    if (null != dataBinding) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = arg1(dependencyMap[3]).useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    const obj2 = arg1(dependencyMap[3]);
    let Illustration;
    if (null != dataBinding) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = arg1(dependencyMap[3]).useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const obj3 = arg1(dependencyMap[3]);
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = arg1(dependencyMap[3]).useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj4 = arg1(dependencyMap[3]);
    let PowerMeter;
    if (null != dataBinding) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (null != onDataBindingChange) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = arg1(dependencyMap[3]).useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const obj5 = arg1(dependencyMap[3]);
    let LVL;
    if (null != dataBinding) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (null != onDataBindingChange) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = arg1(dependencyMap[3]).useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const obj6 = arg1(dependencyMap[3]);
    let PersonaName;
    if (null != dataBinding) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (null != onDataBindingChange) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = arg1(dependencyMap[3]).useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const obj7 = arg1(dependencyMap[3]);
    let prop;
    if (null != dataBinding) {
      prop = dataBinding.id#;
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange.id#;
    }
    const stringBinding2 = arg1(dependencyMap[3]).useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const obj8 = arg1(dependencyMap[3]);
    let Outof;
    if (null != dataBinding) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (null != onDataBindingChange) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = arg1(dependencyMap[3]).useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const obj9 = arg1(dependencyMap[3]);
    let FillColor;
    if (null != dataBinding) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (null != onDataBindingChange) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = arg1(dependencyMap[3]).useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Capybara: function CapybaraBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = arg1(dependencyMap[3]).useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = arg1(dependencyMap[3]);
    let Icon;
    if (null != dataBinding) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = arg1(dependencyMap[3]).useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    const obj2 = arg1(dependencyMap[3]);
    let Illustration;
    if (null != dataBinding) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = arg1(dependencyMap[3]).useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const obj3 = arg1(dependencyMap[3]);
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = arg1(dependencyMap[3]).useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj4 = arg1(dependencyMap[3]);
    let PowerMeter;
    if (null != dataBinding) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (null != onDataBindingChange) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = arg1(dependencyMap[3]).useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const obj5 = arg1(dependencyMap[3]);
    let LVL;
    if (null != dataBinding) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (null != onDataBindingChange) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = arg1(dependencyMap[3]).useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const obj6 = arg1(dependencyMap[3]);
    let PersonaName;
    if (null != dataBinding) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (null != onDataBindingChange) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = arg1(dependencyMap[3]).useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const obj7 = arg1(dependencyMap[3]);
    let prop;
    if (null != dataBinding) {
      prop = dataBinding.id#;
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange.id#;
    }
    const stringBinding2 = arg1(dependencyMap[3]).useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const obj8 = arg1(dependencyMap[3]);
    let Outof;
    if (null != dataBinding) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (null != onDataBindingChange) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = arg1(dependencyMap[3]).useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const obj9 = arg1(dependencyMap[3]);
    let FillColor;
    if (null != dataBinding) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (null != onDataBindingChange) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = arg1(dependencyMap[3]).useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Donut: function DonutBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = arg1(dependencyMap[3]).useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = arg1(dependencyMap[3]);
    let Icon;
    if (null != dataBinding) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = arg1(dependencyMap[3]).useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    const obj2 = arg1(dependencyMap[3]);
    let Illustration;
    if (null != dataBinding) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = arg1(dependencyMap[3]).useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const obj3 = arg1(dependencyMap[3]);
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = arg1(dependencyMap[3]).useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj4 = arg1(dependencyMap[3]);
    let PowerMeter;
    if (null != dataBinding) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (null != onDataBindingChange) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = arg1(dependencyMap[3]).useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const obj5 = arg1(dependencyMap[3]);
    let LVL;
    if (null != dataBinding) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (null != onDataBindingChange) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = arg1(dependencyMap[3]).useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const obj6 = arg1(dependencyMap[3]);
    let PersonaName;
    if (null != dataBinding) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (null != onDataBindingChange) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = arg1(dependencyMap[3]).useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const obj7 = arg1(dependencyMap[3]);
    let prop;
    if (null != dataBinding) {
      prop = dataBinding.id#;
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange.id#;
    }
    const stringBinding2 = arg1(dependencyMap[3]).useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const obj8 = arg1(dependencyMap[3]);
    let Outof;
    if (null != dataBinding) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (null != onDataBindingChange) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = arg1(dependencyMap[3]).useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const obj9 = arg1(dependencyMap[3]);
    let FillColor;
    if (null != dataBinding) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (null != onDataBindingChange) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = arg1(dependencyMap[3]).useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Bonsai: function BonsaiBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = arg1(dependencyMap[3]).useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = arg1(dependencyMap[3]);
    let Icon;
    if (null != dataBinding) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = arg1(dependencyMap[3]).useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    const obj2 = arg1(dependencyMap[3]);
    let Illustration;
    if (null != dataBinding) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = arg1(dependencyMap[3]).useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const obj3 = arg1(dependencyMap[3]);
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = arg1(dependencyMap[3]).useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj4 = arg1(dependencyMap[3]);
    let PowerMeter;
    if (null != dataBinding) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (null != onDataBindingChange) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = arg1(dependencyMap[3]).useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const obj5 = arg1(dependencyMap[3]);
    let LVL;
    if (null != dataBinding) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (null != onDataBindingChange) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = arg1(dependencyMap[3]).useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const obj6 = arg1(dependencyMap[3]);
    let PersonaName;
    if (null != dataBinding) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (null != onDataBindingChange) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = arg1(dependencyMap[3]).useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const obj7 = arg1(dependencyMap[3]);
    let prop;
    if (null != dataBinding) {
      prop = dataBinding.id#;
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange.id#;
    }
    const stringBinding2 = arg1(dependencyMap[3]).useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const obj8 = arg1(dependencyMap[3]);
    let Outof;
    if (null != dataBinding) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (null != onDataBindingChange) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = arg1(dependencyMap[3]).useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const obj9 = arg1(dependencyMap[3]);
    let FillColor;
    if (null != dataBinding) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (null != onDataBindingChange) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = arg1(dependencyMap[3]).useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Card Back: function CardBackBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = arg1(dependencyMap[3]).useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = arg1(dependencyMap[3]);
    let Icon;
    if (null != dataBinding) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = arg1(dependencyMap[3]).useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    const obj2 = arg1(dependencyMap[3]);
    let Illustration;
    if (null != dataBinding) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = arg1(dependencyMap[3]).useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const obj3 = arg1(dependencyMap[3]);
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = arg1(dependencyMap[3]).useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj4 = arg1(dependencyMap[3]);
    let PowerMeter;
    if (null != dataBinding) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (null != onDataBindingChange) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = arg1(dependencyMap[3]).useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const obj5 = arg1(dependencyMap[3]);
    let LVL;
    if (null != dataBinding) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (null != onDataBindingChange) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = arg1(dependencyMap[3]).useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const obj6 = arg1(dependencyMap[3]);
    let PersonaName;
    if (null != dataBinding) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (null != onDataBindingChange) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = arg1(dependencyMap[3]).useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const obj7 = arg1(dependencyMap[3]);
    let prop;
    if (null != dataBinding) {
      prop = dataBinding.id#;
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange.id#;
    }
    const stringBinding2 = arg1(dependencyMap[3]).useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const obj8 = arg1(dependencyMap[3]);
    let Outof;
    if (null != dataBinding) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (null != onDataBindingChange) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = arg1(dependencyMap[3]).useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const obj9 = arg1(dependencyMap[3]);
    let FillColor;
    if (null != dataBinding) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (null != onDataBindingChange) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = arg1(dependencyMap[3]).useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Knickknack: function KnickknackBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = arg1(dependencyMap[3]).useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = arg1(dependencyMap[3]);
    let Icon;
    if (null != dataBinding) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = arg1(dependencyMap[3]).useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    const obj2 = arg1(dependencyMap[3]);
    let Illustration;
    if (null != dataBinding) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = arg1(dependencyMap[3]).useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const obj3 = arg1(dependencyMap[3]);
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = arg1(dependencyMap[3]).useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj4 = arg1(dependencyMap[3]);
    let PowerMeter;
    if (null != dataBinding) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (null != onDataBindingChange) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = arg1(dependencyMap[3]).useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const obj5 = arg1(dependencyMap[3]);
    let LVL;
    if (null != dataBinding) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (null != onDataBindingChange) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = arg1(dependencyMap[3]).useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const obj6 = arg1(dependencyMap[3]);
    let PersonaName;
    if (null != dataBinding) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (null != onDataBindingChange) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = arg1(dependencyMap[3]).useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const obj7 = arg1(dependencyMap[3]);
    let prop;
    if (null != dataBinding) {
      prop = dataBinding.id#;
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange.id#;
    }
    const stringBinding2 = arg1(dependencyMap[3]).useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const obj8 = arg1(dependencyMap[3]);
    let Outof;
    if (null != dataBinding) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (null != onDataBindingChange) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = arg1(dependencyMap[3]).useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const obj9 = arg1(dependencyMap[3]);
    let FillColor;
    if (null != dataBinding) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (null != onDataBindingChange) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = arg1(dependencyMap[3]).useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Card: function CardBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = arg1(dependencyMap[3]).useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = arg1(dependencyMap[3]);
    let Icon;
    if (null != dataBinding) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = arg1(dependencyMap[3]).useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    const obj2 = arg1(dependencyMap[3]);
    let Illustration;
    if (null != dataBinding) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = arg1(dependencyMap[3]).useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const obj3 = arg1(dependencyMap[3]);
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = arg1(dependencyMap[3]).useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj4 = arg1(dependencyMap[3]);
    let PowerMeter;
    if (null != dataBinding) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (null != onDataBindingChange) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = arg1(dependencyMap[3]).useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const obj5 = arg1(dependencyMap[3]);
    let LVL;
    if (null != dataBinding) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (null != onDataBindingChange) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = arg1(dependencyMap[3]).useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const obj6 = arg1(dependencyMap[3]);
    let PersonaName;
    if (null != dataBinding) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (null != onDataBindingChange) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = arg1(dependencyMap[3]).useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const obj7 = arg1(dependencyMap[3]);
    let prop;
    if (null != dataBinding) {
      prop = dataBinding.id#;
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange.id#;
    }
    const stringBinding2 = arg1(dependencyMap[3]).useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const obj8 = arg1(dependencyMap[3]);
    let Outof;
    if (null != dataBinding) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (null != onDataBindingChange) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = arg1(dependencyMap[3]).useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const obj9 = arg1(dependencyMap[3]);
    let FillColor;
    if (null != dataBinding) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (null != onDataBindingChange) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = arg1(dependencyMap[3]).useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }
};
let closure_10 = importAllResult.forwardRef(function CheckpointCardRiveInner(defaultViewModelInstance, ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Main";
  if (undefined !== artboard) {
    str = artboard;
  }
  ref = str;
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "Bonsai";
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
const forwardRefResult = importAllResult.forwardRef(function CheckpointCardRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj.children = <closure_10 {...obj} />;
  return jsx(ref(dependencyMap[5]).RiveErrorBoundary, obj);
});
const result = arg1(dependencyMap[6]).fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/CheckpointCardRive.tsx");

export const CheckpointCardRive = forwardRefResult;
