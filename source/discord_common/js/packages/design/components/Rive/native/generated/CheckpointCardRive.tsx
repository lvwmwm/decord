// Module ID: 3917
// Function ID: 32356
// Name: CheckpointCardRive
// Dependencies: [29, 31, 33, 3859, 3918, 3910, 2]

// Module 3917 (CheckpointCardRive)
import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let closure_7 = { Main: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, Cassette: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Cassette Icon": {}, Cat: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Cat Icon": {}, Banana: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Banana Icon": {}, "Duck Icon": {}, Duck: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Snail Icon": {}, Snail: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Origami Icon": {}, Origami: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Disco Icon": {}, Disco: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, Capybara: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Capybara Icon": {}, Donut: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Donut Icon": {}, "Bonsai Icon": {}, Bonsai: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Globe Single Line": {}, "Card Back": { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, Knickknack: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, Globe: {}, Card: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" } };
let closure_8 = { Main: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], Cassette: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Cassette Icon": [], Cat: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Cat Icon": [], Banana: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Banana Icon": [], "Duck Icon": [], Duck: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Snail Icon": [], Snail: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Origami Icon": [], Origami: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Disco Icon": [], Disco: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], Capybara: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Capybara Icon": [], Donut: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Donut Icon": [], "Bonsai Icon": [], Bonsai: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Globe Single Line": [], "Card Back": ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], Knickknack: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], Globe: [], Card: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"] };
let closure_9 = {
  Main: function MainBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = require(3859) /* useObservedValue */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = require(3859) /* useObservedValue */;
    let Icon;
    if (null != dataBinding) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = require(3859) /* useObservedValue */.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    const obj2 = require(3859) /* useObservedValue */;
    let Illustration;
    if (null != dataBinding) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = require(3859) /* useObservedValue */.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const obj3 = require(3859) /* useObservedValue */;
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = require(3859) /* useObservedValue */.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj4 = require(3859) /* useObservedValue */;
    let PowerMeter;
    if (null != dataBinding) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (null != onDataBindingChange) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = require(3859) /* useObservedValue */.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const obj5 = require(3859) /* useObservedValue */;
    let LVL;
    if (null != dataBinding) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (null != onDataBindingChange) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = require(3859) /* useObservedValue */.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const obj6 = require(3859) /* useObservedValue */;
    let PersonaName;
    if (null != dataBinding) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (null != onDataBindingChange) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = require(3859) /* useObservedValue */.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const obj7 = require(3859) /* useObservedValue */;
    let prop;
    if (null != dataBinding) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = require(3859) /* useObservedValue */.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const obj8 = require(3859) /* useObservedValue */;
    let Outof;
    if (null != dataBinding) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (null != onDataBindingChange) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = require(3859) /* useObservedValue */.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const obj9 = require(3859) /* useObservedValue */;
    let FillColor;
    if (null != dataBinding) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (null != onDataBindingChange) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = require(3859) /* useObservedValue */.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Cassette: function CassetteBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = require(3859) /* useObservedValue */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = require(3859) /* useObservedValue */;
    let Icon;
    if (null != dataBinding) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = require(3859) /* useObservedValue */.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    const obj2 = require(3859) /* useObservedValue */;
    let Illustration;
    if (null != dataBinding) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = require(3859) /* useObservedValue */.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const obj3 = require(3859) /* useObservedValue */;
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = require(3859) /* useObservedValue */.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj4 = require(3859) /* useObservedValue */;
    let PowerMeter;
    if (null != dataBinding) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (null != onDataBindingChange) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = require(3859) /* useObservedValue */.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const obj5 = require(3859) /* useObservedValue */;
    let LVL;
    if (null != dataBinding) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (null != onDataBindingChange) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = require(3859) /* useObservedValue */.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const obj6 = require(3859) /* useObservedValue */;
    let PersonaName;
    if (null != dataBinding) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (null != onDataBindingChange) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = require(3859) /* useObservedValue */.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const obj7 = require(3859) /* useObservedValue */;
    let prop;
    if (null != dataBinding) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = require(3859) /* useObservedValue */.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const obj8 = require(3859) /* useObservedValue */;
    let Outof;
    if (null != dataBinding) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (null != onDataBindingChange) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = require(3859) /* useObservedValue */.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const obj9 = require(3859) /* useObservedValue */;
    let FillColor;
    if (null != dataBinding) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (null != onDataBindingChange) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = require(3859) /* useObservedValue */.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Cat: function CatBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = require(3859) /* useObservedValue */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = require(3859) /* useObservedValue */;
    let Icon;
    if (null != dataBinding) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = require(3859) /* useObservedValue */.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    const obj2 = require(3859) /* useObservedValue */;
    let Illustration;
    if (null != dataBinding) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = require(3859) /* useObservedValue */.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const obj3 = require(3859) /* useObservedValue */;
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = require(3859) /* useObservedValue */.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj4 = require(3859) /* useObservedValue */;
    let PowerMeter;
    if (null != dataBinding) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (null != onDataBindingChange) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = require(3859) /* useObservedValue */.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const obj5 = require(3859) /* useObservedValue */;
    let LVL;
    if (null != dataBinding) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (null != onDataBindingChange) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = require(3859) /* useObservedValue */.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const obj6 = require(3859) /* useObservedValue */;
    let PersonaName;
    if (null != dataBinding) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (null != onDataBindingChange) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = require(3859) /* useObservedValue */.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const obj7 = require(3859) /* useObservedValue */;
    let prop;
    if (null != dataBinding) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = require(3859) /* useObservedValue */.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const obj8 = require(3859) /* useObservedValue */;
    let Outof;
    if (null != dataBinding) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (null != onDataBindingChange) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = require(3859) /* useObservedValue */.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const obj9 = require(3859) /* useObservedValue */;
    let FillColor;
    if (null != dataBinding) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (null != onDataBindingChange) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = require(3859) /* useObservedValue */.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Banana: function BananaBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = require(3859) /* useObservedValue */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = require(3859) /* useObservedValue */;
    let Icon;
    if (null != dataBinding) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = require(3859) /* useObservedValue */.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    const obj2 = require(3859) /* useObservedValue */;
    let Illustration;
    if (null != dataBinding) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = require(3859) /* useObservedValue */.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const obj3 = require(3859) /* useObservedValue */;
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = require(3859) /* useObservedValue */.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj4 = require(3859) /* useObservedValue */;
    let PowerMeter;
    if (null != dataBinding) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (null != onDataBindingChange) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = require(3859) /* useObservedValue */.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const obj5 = require(3859) /* useObservedValue */;
    let LVL;
    if (null != dataBinding) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (null != onDataBindingChange) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = require(3859) /* useObservedValue */.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const obj6 = require(3859) /* useObservedValue */;
    let PersonaName;
    if (null != dataBinding) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (null != onDataBindingChange) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = require(3859) /* useObservedValue */.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const obj7 = require(3859) /* useObservedValue */;
    let prop;
    if (null != dataBinding) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = require(3859) /* useObservedValue */.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const obj8 = require(3859) /* useObservedValue */;
    let Outof;
    if (null != dataBinding) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (null != onDataBindingChange) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = require(3859) /* useObservedValue */.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const obj9 = require(3859) /* useObservedValue */;
    let FillColor;
    if (null != dataBinding) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (null != onDataBindingChange) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = require(3859) /* useObservedValue */.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Duck: function DuckBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = require(3859) /* useObservedValue */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = require(3859) /* useObservedValue */;
    let Icon;
    if (null != dataBinding) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = require(3859) /* useObservedValue */.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    const obj2 = require(3859) /* useObservedValue */;
    let Illustration;
    if (null != dataBinding) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = require(3859) /* useObservedValue */.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const obj3 = require(3859) /* useObservedValue */;
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = require(3859) /* useObservedValue */.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj4 = require(3859) /* useObservedValue */;
    let PowerMeter;
    if (null != dataBinding) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (null != onDataBindingChange) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = require(3859) /* useObservedValue */.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const obj5 = require(3859) /* useObservedValue */;
    let LVL;
    if (null != dataBinding) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (null != onDataBindingChange) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = require(3859) /* useObservedValue */.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const obj6 = require(3859) /* useObservedValue */;
    let PersonaName;
    if (null != dataBinding) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (null != onDataBindingChange) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = require(3859) /* useObservedValue */.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const obj7 = require(3859) /* useObservedValue */;
    let prop;
    if (null != dataBinding) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = require(3859) /* useObservedValue */.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const obj8 = require(3859) /* useObservedValue */;
    let Outof;
    if (null != dataBinding) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (null != onDataBindingChange) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = require(3859) /* useObservedValue */.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const obj9 = require(3859) /* useObservedValue */;
    let FillColor;
    if (null != dataBinding) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (null != onDataBindingChange) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = require(3859) /* useObservedValue */.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Snail: function SnailBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = require(3859) /* useObservedValue */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = require(3859) /* useObservedValue */;
    let Icon;
    if (null != dataBinding) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = require(3859) /* useObservedValue */.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    const obj2 = require(3859) /* useObservedValue */;
    let Illustration;
    if (null != dataBinding) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = require(3859) /* useObservedValue */.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const obj3 = require(3859) /* useObservedValue */;
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = require(3859) /* useObservedValue */.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj4 = require(3859) /* useObservedValue */;
    let PowerMeter;
    if (null != dataBinding) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (null != onDataBindingChange) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = require(3859) /* useObservedValue */.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const obj5 = require(3859) /* useObservedValue */;
    let LVL;
    if (null != dataBinding) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (null != onDataBindingChange) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = require(3859) /* useObservedValue */.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const obj6 = require(3859) /* useObservedValue */;
    let PersonaName;
    if (null != dataBinding) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (null != onDataBindingChange) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = require(3859) /* useObservedValue */.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const obj7 = require(3859) /* useObservedValue */;
    let prop;
    if (null != dataBinding) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = require(3859) /* useObservedValue */.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const obj8 = require(3859) /* useObservedValue */;
    let Outof;
    if (null != dataBinding) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (null != onDataBindingChange) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = require(3859) /* useObservedValue */.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const obj9 = require(3859) /* useObservedValue */;
    let FillColor;
    if (null != dataBinding) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (null != onDataBindingChange) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = require(3859) /* useObservedValue */.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Origami: function OrigamiBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = require(3859) /* useObservedValue */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = require(3859) /* useObservedValue */;
    let Icon;
    if (null != dataBinding) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = require(3859) /* useObservedValue */.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    const obj2 = require(3859) /* useObservedValue */;
    let Illustration;
    if (null != dataBinding) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = require(3859) /* useObservedValue */.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const obj3 = require(3859) /* useObservedValue */;
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = require(3859) /* useObservedValue */.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj4 = require(3859) /* useObservedValue */;
    let PowerMeter;
    if (null != dataBinding) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (null != onDataBindingChange) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = require(3859) /* useObservedValue */.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const obj5 = require(3859) /* useObservedValue */;
    let LVL;
    if (null != dataBinding) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (null != onDataBindingChange) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = require(3859) /* useObservedValue */.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const obj6 = require(3859) /* useObservedValue */;
    let PersonaName;
    if (null != dataBinding) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (null != onDataBindingChange) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = require(3859) /* useObservedValue */.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const obj7 = require(3859) /* useObservedValue */;
    let prop;
    if (null != dataBinding) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = require(3859) /* useObservedValue */.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const obj8 = require(3859) /* useObservedValue */;
    let Outof;
    if (null != dataBinding) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (null != onDataBindingChange) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = require(3859) /* useObservedValue */.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const obj9 = require(3859) /* useObservedValue */;
    let FillColor;
    if (null != dataBinding) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (null != onDataBindingChange) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = require(3859) /* useObservedValue */.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Disco: function DiscoBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = require(3859) /* useObservedValue */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = require(3859) /* useObservedValue */;
    let Icon;
    if (null != dataBinding) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = require(3859) /* useObservedValue */.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    const obj2 = require(3859) /* useObservedValue */;
    let Illustration;
    if (null != dataBinding) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = require(3859) /* useObservedValue */.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const obj3 = require(3859) /* useObservedValue */;
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = require(3859) /* useObservedValue */.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj4 = require(3859) /* useObservedValue */;
    let PowerMeter;
    if (null != dataBinding) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (null != onDataBindingChange) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = require(3859) /* useObservedValue */.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const obj5 = require(3859) /* useObservedValue */;
    let LVL;
    if (null != dataBinding) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (null != onDataBindingChange) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = require(3859) /* useObservedValue */.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const obj6 = require(3859) /* useObservedValue */;
    let PersonaName;
    if (null != dataBinding) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (null != onDataBindingChange) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = require(3859) /* useObservedValue */.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const obj7 = require(3859) /* useObservedValue */;
    let prop;
    if (null != dataBinding) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = require(3859) /* useObservedValue */.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const obj8 = require(3859) /* useObservedValue */;
    let Outof;
    if (null != dataBinding) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (null != onDataBindingChange) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = require(3859) /* useObservedValue */.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const obj9 = require(3859) /* useObservedValue */;
    let FillColor;
    if (null != dataBinding) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (null != onDataBindingChange) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = require(3859) /* useObservedValue */.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Capybara: function CapybaraBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = require(3859) /* useObservedValue */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = require(3859) /* useObservedValue */;
    let Icon;
    if (null != dataBinding) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = require(3859) /* useObservedValue */.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    const obj2 = require(3859) /* useObservedValue */;
    let Illustration;
    if (null != dataBinding) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = require(3859) /* useObservedValue */.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const obj3 = require(3859) /* useObservedValue */;
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = require(3859) /* useObservedValue */.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj4 = require(3859) /* useObservedValue */;
    let PowerMeter;
    if (null != dataBinding) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (null != onDataBindingChange) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = require(3859) /* useObservedValue */.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const obj5 = require(3859) /* useObservedValue */;
    let LVL;
    if (null != dataBinding) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (null != onDataBindingChange) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = require(3859) /* useObservedValue */.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const obj6 = require(3859) /* useObservedValue */;
    let PersonaName;
    if (null != dataBinding) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (null != onDataBindingChange) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = require(3859) /* useObservedValue */.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const obj7 = require(3859) /* useObservedValue */;
    let prop;
    if (null != dataBinding) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = require(3859) /* useObservedValue */.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const obj8 = require(3859) /* useObservedValue */;
    let Outof;
    if (null != dataBinding) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (null != onDataBindingChange) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = require(3859) /* useObservedValue */.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const obj9 = require(3859) /* useObservedValue */;
    let FillColor;
    if (null != dataBinding) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (null != onDataBindingChange) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = require(3859) /* useObservedValue */.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Donut: function DonutBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = require(3859) /* useObservedValue */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = require(3859) /* useObservedValue */;
    let Icon;
    if (null != dataBinding) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = require(3859) /* useObservedValue */.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    const obj2 = require(3859) /* useObservedValue */;
    let Illustration;
    if (null != dataBinding) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = require(3859) /* useObservedValue */.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const obj3 = require(3859) /* useObservedValue */;
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = require(3859) /* useObservedValue */.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj4 = require(3859) /* useObservedValue */;
    let PowerMeter;
    if (null != dataBinding) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (null != onDataBindingChange) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = require(3859) /* useObservedValue */.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const obj5 = require(3859) /* useObservedValue */;
    let LVL;
    if (null != dataBinding) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (null != onDataBindingChange) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = require(3859) /* useObservedValue */.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const obj6 = require(3859) /* useObservedValue */;
    let PersonaName;
    if (null != dataBinding) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (null != onDataBindingChange) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = require(3859) /* useObservedValue */.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const obj7 = require(3859) /* useObservedValue */;
    let prop;
    if (null != dataBinding) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = require(3859) /* useObservedValue */.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const obj8 = require(3859) /* useObservedValue */;
    let Outof;
    if (null != dataBinding) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (null != onDataBindingChange) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = require(3859) /* useObservedValue */.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const obj9 = require(3859) /* useObservedValue */;
    let FillColor;
    if (null != dataBinding) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (null != onDataBindingChange) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = require(3859) /* useObservedValue */.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Bonsai: function BonsaiBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = require(3859) /* useObservedValue */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = require(3859) /* useObservedValue */;
    let Icon;
    if (null != dataBinding) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = require(3859) /* useObservedValue */.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    const obj2 = require(3859) /* useObservedValue */;
    let Illustration;
    if (null != dataBinding) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = require(3859) /* useObservedValue */.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const obj3 = require(3859) /* useObservedValue */;
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = require(3859) /* useObservedValue */.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj4 = require(3859) /* useObservedValue */;
    let PowerMeter;
    if (null != dataBinding) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (null != onDataBindingChange) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = require(3859) /* useObservedValue */.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const obj5 = require(3859) /* useObservedValue */;
    let LVL;
    if (null != dataBinding) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (null != onDataBindingChange) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = require(3859) /* useObservedValue */.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const obj6 = require(3859) /* useObservedValue */;
    let PersonaName;
    if (null != dataBinding) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (null != onDataBindingChange) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = require(3859) /* useObservedValue */.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const obj7 = require(3859) /* useObservedValue */;
    let prop;
    if (null != dataBinding) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = require(3859) /* useObservedValue */.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const obj8 = require(3859) /* useObservedValue */;
    let Outof;
    if (null != dataBinding) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (null != onDataBindingChange) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = require(3859) /* useObservedValue */.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const obj9 = require(3859) /* useObservedValue */;
    let FillColor;
    if (null != dataBinding) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (null != onDataBindingChange) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = require(3859) /* useObservedValue */.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  "Card Back": function CardBackBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = require(3859) /* useObservedValue */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = require(3859) /* useObservedValue */;
    let Icon;
    if (null != dataBinding) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = require(3859) /* useObservedValue */.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    const obj2 = require(3859) /* useObservedValue */;
    let Illustration;
    if (null != dataBinding) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = require(3859) /* useObservedValue */.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const obj3 = require(3859) /* useObservedValue */;
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = require(3859) /* useObservedValue */.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj4 = require(3859) /* useObservedValue */;
    let PowerMeter;
    if (null != dataBinding) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (null != onDataBindingChange) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = require(3859) /* useObservedValue */.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const obj5 = require(3859) /* useObservedValue */;
    let LVL;
    if (null != dataBinding) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (null != onDataBindingChange) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = require(3859) /* useObservedValue */.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const obj6 = require(3859) /* useObservedValue */;
    let PersonaName;
    if (null != dataBinding) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (null != onDataBindingChange) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = require(3859) /* useObservedValue */.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const obj7 = require(3859) /* useObservedValue */;
    let prop;
    if (null != dataBinding) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = require(3859) /* useObservedValue */.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const obj8 = require(3859) /* useObservedValue */;
    let Outof;
    if (null != dataBinding) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (null != onDataBindingChange) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = require(3859) /* useObservedValue */.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const obj9 = require(3859) /* useObservedValue */;
    let FillColor;
    if (null != dataBinding) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (null != onDataBindingChange) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = require(3859) /* useObservedValue */.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Knickknack: function KnickknackBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = require(3859) /* useObservedValue */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = require(3859) /* useObservedValue */;
    let Icon;
    if (null != dataBinding) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = require(3859) /* useObservedValue */.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    const obj2 = require(3859) /* useObservedValue */;
    let Illustration;
    if (null != dataBinding) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = require(3859) /* useObservedValue */.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const obj3 = require(3859) /* useObservedValue */;
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = require(3859) /* useObservedValue */.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj4 = require(3859) /* useObservedValue */;
    let PowerMeter;
    if (null != dataBinding) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (null != onDataBindingChange) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = require(3859) /* useObservedValue */.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const obj5 = require(3859) /* useObservedValue */;
    let LVL;
    if (null != dataBinding) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (null != onDataBindingChange) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = require(3859) /* useObservedValue */.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const obj6 = require(3859) /* useObservedValue */;
    let PersonaName;
    if (null != dataBinding) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (null != onDataBindingChange) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = require(3859) /* useObservedValue */.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const obj7 = require(3859) /* useObservedValue */;
    let prop;
    if (null != dataBinding) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = require(3859) /* useObservedValue */.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const obj8 = require(3859) /* useObservedValue */;
    let Outof;
    if (null != dataBinding) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (null != onDataBindingChange) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = require(3859) /* useObservedValue */.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const obj9 = require(3859) /* useObservedValue */;
    let FillColor;
    if (null != dataBinding) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (null != onDataBindingChange) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = require(3859) /* useObservedValue */.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Card: function CardBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = require(3859) /* useObservedValue */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = require(3859) /* useObservedValue */;
    let Icon;
    if (null != dataBinding) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = require(3859) /* useObservedValue */.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    const obj2 = require(3859) /* useObservedValue */;
    let Illustration;
    if (null != dataBinding) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = require(3859) /* useObservedValue */.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const obj3 = require(3859) /* useObservedValue */;
    let AnimationState;
    if (null != dataBinding) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (null != onDataBindingChange) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = require(3859) /* useObservedValue */.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const obj4 = require(3859) /* useObservedValue */;
    let PowerMeter;
    if (null != dataBinding) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (null != onDataBindingChange) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = require(3859) /* useObservedValue */.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const obj5 = require(3859) /* useObservedValue */;
    let LVL;
    if (null != dataBinding) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (null != onDataBindingChange) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = require(3859) /* useObservedValue */.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const obj6 = require(3859) /* useObservedValue */;
    let PersonaName;
    if (null != dataBinding) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (null != onDataBindingChange) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = require(3859) /* useObservedValue */.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const obj7 = require(3859) /* useObservedValue */;
    let prop;
    if (null != dataBinding) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (null != onDataBindingChange) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = require(3859) /* useObservedValue */.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const obj8 = require(3859) /* useObservedValue */;
    let Outof;
    if (null != dataBinding) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (null != onDataBindingChange) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = require(3859) /* useObservedValue */.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const obj9 = require(3859) /* useObservedValue */;
    let FillColor;
    if (null != dataBinding) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (null != onDataBindingChange) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = require(3859) /* useObservedValue */.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
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
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "Bonsai";
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
const forwardRefResult = importAllResult.forwardRef(function CheckpointCardRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj.children = <closure_10 ref={arg1} />;
  return jsx(require(3910) /* _isNativeReflectConstruct */.RiveErrorBoundary, { ref });
});
const result = require("jsxProd").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/CheckpointCardRive.tsx");

export const CheckpointCardRive = forwardRefResult;
