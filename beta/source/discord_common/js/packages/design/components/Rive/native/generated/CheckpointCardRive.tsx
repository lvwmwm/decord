// Module ID: 4624
// Function ID: 4625
// Name: CheckpointCardRive
// Dependencies: [109, 19, 21, 4560, 4625, 4615, 2]

// Module 4624 (CheckpointCardRive)
import Fragment from "Fragment" /* 21 */;
import BaseRive2 from "BaseRive" /* 4560 */;
import RiveErrorBoundary2 from "RiveErrorBoundary" /* 4615 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
const jsx = Fragment.jsx;
const artboardProperties = { Main: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, Cassette: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Cassette Icon": {}, Cat: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Cat Icon": {}, Banana: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Banana Icon": {}, "Duck Icon": {}, Duck: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Snail Icon": {}, Snail: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Origami Icon": {}, Origami: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Disco Icon": {}, Disco: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, Capybara: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Capybara Icon": {}, Donut: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Donut Icon": {}, "Bonsai Icon": {}, Bonsai: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Globe Single Line": {}, "Card Back": { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, Knickknack: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, Globe: {}, Card: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" } };
const artboardViewModelInstances = { Main: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], Cassette: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Cassette Icon": [], Cat: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Cat Icon": [], Banana: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Banana Icon": [], "Duck Icon": [], Duck: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Snail Icon": [], Snail: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Origami Icon": [], Origami: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Disco Icon": [], Disco: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], Capybara: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Capybara Icon": [], Donut: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Donut Icon": [], "Bonsai Icon": [], Bonsai: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Globe Single Line": [], "Card Back": ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], Knickknack: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], Globe: [], Card: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"] };
let closure_9 = {
  Main: function MainBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
    let AnimationState;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Cassette: function CassetteBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
    let AnimationState;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Cat: function CatBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
    let AnimationState;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Banana: function BananaBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
    let AnimationState;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Duck: function DuckBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
    let AnimationState;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Snail: function SnailBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
    let AnimationState;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Origami: function OrigamiBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
    let AnimationState;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Disco: function DiscoBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
    let AnimationState;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Capybara: function CapybaraBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
    let AnimationState;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Donut: function DonutBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
    let AnimationState;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Bonsai: function BonsaiBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
    let AnimationState;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  "Card Back": function CardBackBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
    let AnimationState;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Knickknack: function KnickknackBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
    let AnimationState;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  },
  Card: function CardBindings(reducedMotionEnabled) {
    let dataBinding;
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    const useArtboardBinding = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    const useArtboardBinding2 = BaseRive2.useArtboardBinding;
    BaseRive2;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding2 = useArtboardBinding2("Illustration", instance, file, Illustration, playIfNeeded);
    let AnimationState;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    let PowerMeter;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding2 = useNumberBinding2("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    let LVL;
    const useStringBinding = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    let PersonaName;
    const useStringBinding2 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding2 = useStringBinding2("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    let prop;
    const useStringBinding3 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding3 = useStringBinding3("id#", instance, prop, prop1, playIfNeeded);
    let Outof;
    const useStringBinding4 = BaseRive2.useStringBinding;
    BaseRive2;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding4 = useStringBinding4("Outof", instance, Outof, Outof1, playIfNeeded);
    let FillColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }
};
let closure_10 = react.forwardRef(function CheckpointCardRiveInner(defaultViewModelInstance, ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Main";
  if (undefined !== artboard) {
    str = artboard;
  }
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "Bonsai";
  const stateMachine = defaultViewModelInstance.stateMachine;
  if (undefined !== defaultViewModelInstance) {
    str2 = defaultViewModelInstance;
  }
  const dataBinding = defaultViewModelInstance.dataBinding;
  const onDataBindingChange = defaultViewModelInstance.onDataBindingChange;
  const items = [str, dataBinding, onDataBindingChange];
  const tmp = _objectWithoutProperties(defaultViewModelInstance, closure_3);
  const callback = react.useCallback((arg0) => {
    let tmp2 = null;
    if (null != closure_9[str]) {
      const merged = Object.assign(arg0);
      tmp2 = <tmp dataBinding={dataBinding} onDataBindingChange={onDataBindingChange} />;
    }
    return tmp2;
  }, items);
  const BaseRive = str(onDataBindingChange[3]).BaseRive;
  let merged = Object.assign(tmp);
  return <BaseRive ref={arg1} src={dataBinding(onDataBindingChange[4])} artboard={str} artboardProperties={artboardProperties} artboardViewModelInstances={artboardViewModelInstances} defaultViewModelInstance={str2} stateMachine={stateMachine} renderDataBinding={callback} />;
});
const forwardRefResult = react.forwardRef(function CheckpointCardRiveWithBoundary(fallback, ref) {
  const RiveErrorBoundary = RiveErrorBoundary2.RiveErrorBoundary;
  const merged = Object.assign(fallback);
  return <RiveErrorBoundary fallback={arg0.fallback}>{null}</RiveErrorBoundary>;
});
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/CheckpointCardRive.tsx");

export const CheckpointCardRive = forwardRefResult;
