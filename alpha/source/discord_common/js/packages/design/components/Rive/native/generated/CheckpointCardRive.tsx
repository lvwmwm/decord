// Module ID: 4866
// Function ID: 4867
// Name: CheckpointCardRive
// Dependencies: [109, 19, 21, 558, 4804, 576, 4867, 4857, 2]

// Module 4866 (CheckpointCardRive)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import BaseRive2 from "BaseRive" /* 4804 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import "ReactCompilerGating";
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dataBinding, importDefault, tmp3, tmp5;

let tmp;
const RiveErrorBoundary2 = tmp(4857);
let closure_3 = ["ref", "fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let closure_4 = ["ref", "fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
const jsx = Fragment.jsx;
const artboardProperties = { Main: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, Cassette: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Cassette Icon": {}, Cat: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Cat Icon": {}, Banana: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Banana Icon": {}, "Duck Icon": {}, Duck: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Snail Icon": {}, Snail: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Origami Icon": {}, Origami: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Disco Icon": {}, Disco: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, Capybara: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Capybara Icon": {}, Donut: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Donut Icon": {}, "Bonsai Icon": {}, Bonsai: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Globe Single Line": {}, "Card Back": { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, Knickknack: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, Globe: {}, Card: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" } };
const artboardViewModelInstances = { Main: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], Cassette: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Cassette Icon": [], Cat: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Cat Icon": [], Banana: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Banana Icon": [], "Duck Icon": [], Duck: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Snail Icon": [], Snail: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Origami Icon": [], Origami: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Disco Icon": [], Disco: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], Capybara: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Capybara Icon": [], Donut: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Donut Icon": [], "Bonsai Icon": [], Bonsai: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Globe Single Line": [], "Card Back": ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], Knickknack: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], Globe: [], Card: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"] };
let ReactCompilerGating = ReactCompilerGating_mod;
let obj = {
  Main: ReactCompilerGating.isReactCompilerEnabled() ? (function MainBindings(reducedMotionEnabled) {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
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
  }) : (function MainBindings(reducedMotionEnabled) {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
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
  }),
  Cassette: ReactCompilerGating.isReactCompilerEnabled() ? (function CassetteBindings(reducedMotionEnabled) {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
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
  }) : (function CassetteBindings(reducedMotionEnabled) {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
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
  }),
  Cat: ReactCompilerGating.isReactCompilerEnabled() ? (function CatBindings(reducedMotionEnabled) {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
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
  }) : (function CatBindings(reducedMotionEnabled) {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
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
  }),
  Banana: ReactCompilerGating.isReactCompilerEnabled() ? (function BananaBindings(reducedMotionEnabled) {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
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
  }) : (function BananaBindings(reducedMotionEnabled) {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
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
  }),
  Duck: ReactCompilerGating.isReactCompilerEnabled() ? (function DuckBindings(reducedMotionEnabled) {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
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
  }) : (function DuckBindings(reducedMotionEnabled) {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
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
  }),
  Snail: ReactCompilerGating.isReactCompilerEnabled() ? (function SnailBindings(reducedMotionEnabled) {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
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
  }) : (function SnailBindings(reducedMotionEnabled) {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
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
  }),
  Origami: ReactCompilerGating.isReactCompilerEnabled() ? (function OrigamiBindings(reducedMotionEnabled) {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
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
  }) : (function OrigamiBindings(reducedMotionEnabled) {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
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
  }),
  Disco: ReactCompilerGating.isReactCompilerEnabled() ? (function DiscoBindings(reducedMotionEnabled) {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
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
  }) : (function DiscoBindings(reducedMotionEnabled) {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
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
  }),
  Capybara: ReactCompilerGating.isReactCompilerEnabled() ? (function CapybaraBindings(reducedMotionEnabled) {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
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
  }) : (function CapybaraBindings(reducedMotionEnabled) {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
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
  }),
  Donut: ReactCompilerGating.isReactCompilerEnabled() ? (function DonutBindings(reducedMotionEnabled) {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
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
  }) : (function DonutBindings(reducedMotionEnabled) {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
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
  }),
  Bonsai: ReactCompilerGating.isReactCompilerEnabled() ? (function BonsaiBindings(reducedMotionEnabled) {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
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
  }) : (function BonsaiBindings(reducedMotionEnabled) {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
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
  }),
  "Card Back": ReactCompilerGating.isReactCompilerEnabled() ? (function CardBackBindings(reducedMotionEnabled) {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
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
  }) : (function CardBackBindings(reducedMotionEnabled) {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
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
  }),
  Knickknack: ReactCompilerGating.isReactCompilerEnabled() ? (function KnickknackBindings(reducedMotionEnabled) {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
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
  }) : (function KnickknackBindings(reducedMotionEnabled) {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
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
  }),
  Card: ReactCompilerGating.isReactCompilerEnabled() ? (function CardBindings(reducedMotionEnabled) {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
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
  }) : (function CardBindings(reducedMotionEnabled) {
    let file;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
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
  })
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointCardRiveInner(arg0) {
  let _require;
  let artboard;
  let defaultViewModelInstance;
  let fallback;
  let onDataBindingChange;
  let ref;
  let stateMachine;
  let str;
  let tmp10;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let tmp2 = str;
  obj = require("react");
  const cResult = obj.c(19);
  const tmp = _require;
  if (cResult[0] !== arg0) {
    ({ ref, fallback, artboard, stateMachine, defaultViewModelInstance, dataBinding, onDataBindingChange } = arg0);
    const tmp13 = _objectWithoutProperties(arg0, closure_3);
    _require = dataBinding;
    importDefault = onDataBindingChange;
    cResult[0] = arg0;
    class F {
      constructor(arg0) {
        tmp = closure_10[closure_2];
        tmp2 = null;
        if (null != tmp) {
          tmp3 = arg0;
          tmp4 = jsx;
          obj = {};
          tmp5 = obj;
          merged = Object.assign(arg0);
          tmp7 = closure_0;
          obj.dataBinding = closure_0;
          tmp8 = closure_1;
          obj.onDataBindingChange = closure_1;
          tmp2 = jsx(tmp, obj);
        }
        return tmp2;
      }
    }
    cResult[1] = dataBinding;
    cResult[2] = onDataBindingChange;
    cResult[3] = ref;
    cResult[4] = tmp13;
    cResult[5] = stateMachine;
    cResult[6] = artboard;
    cResult[7] = defaultViewModelInstance;
    tmp10 = defaultViewModelInstance;
    tmp9 = artboard;
    tmp8 = stateMachine;
    tmp7 = tmp13;
    tmp6 = ref;
  } else {
    _require = cResult[1];
    importDefault = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
  }
  str = "Main";
  if (undefined !== tmp9) {
    str = tmp9;
  }
  let str2 = "Bonsai";
  if (undefined !== tmp10) {
    str2 = tmp10;
  }
  if (cResult[8] === str) {
    if (cResult[9] === tmp4) {
      let tmp14;
      if (cResult[10] === tmp5) {
        tmp14 = cResult[11];
      }
      if (cResult[12] === str) {
        if (cResult[13] === str2) {
          if (cResult[14] === tmp6) {
            if (cResult[15] === tmp14) {
              if (cResult[16] === tmp7) {
                let tmp15;
                if (cResult[17] === tmp8) {
                  tmp15 = cResult[18];
                }
                return tmp15;
              }
            }
          }
        }
      }
      const BaseRive = tmp(tmp2[4]).BaseRive;
      class F {
        constructor(arg0) {
          tmp = closure_10[closure_2];
          tmp2 = null;
          if (null != tmp) {
            tmp3 = arg0;
            tmp4 = jsx;
            obj = {};
            tmp5 = obj;
            merged = Object.assign(arg0);
            tmp7 = closure_0;
            obj.dataBinding = closure_0;
            tmp8 = closure_1;
            obj.onDataBindingChange = closure_1;
            tmp2 = jsx(tmp, obj);
          }
          return tmp2;
        }
      }
      let merged = Object.assign(tmp7);
      const tmp23 = <BaseRive ref={tmp6} src={require("module_4867")} artboard={str} artboardProperties={artboardProperties} artboardViewModelInstances={artboardViewModelInstances} defaultViewModelInstance={str2} stateMachine={null} renderDataBinding={tmp14} />;
      cResult[12] = str;
      cResult[13] = str2;
      cResult[14] = tmp6;
      cResult[15] = tmp14;
      cResult[16] = tmp7;
      cResult[17] = tmp8;
      cResult[18] = tmp23;
      tmp15 = tmp23;
    }
  }
  class F {
    constructor(arg0) {
      tmp = closure_10[closure_2];
      tmp2 = null;
      if (null != tmp) {
        tmp3 = arg0;
        tmp4 = jsx;
        obj = {};
        tmp5 = obj;
        merged = Object.assign(arg0);
        tmp7 = closure_0;
        obj.dataBinding = closure_0;
        tmp8 = closure_1;
        obj.onDataBindingChange = closure_1;
        tmp2 = jsx(tmp, obj);
      }
      return tmp2;
    }
  }
  cResult[8] = str;
  cResult[9] = tmp4;
  cResult[10] = tmp5;
  cResult[11] = F;
  tmp14 = F;
}) : (function CheckpointCardRiveInner(ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = ref);
  let str = "Main";
  ref = ref.ref;
  if (undefined !== artboard) {
    str = artboard;
  }
  const defaultViewModelInstance = ref.defaultViewModelInstance;
  let str2 = "Bonsai";
  const stateMachine = ref.stateMachine;
  if (undefined !== defaultViewModelInstance) {
    str2 = defaultViewModelInstance;
  }
  dataBinding = ref.dataBinding;
  const onDataBindingChange = ref.onDataBindingChange;
  const items = [str, dataBinding, onDataBindingChange];
  const tmp = _objectWithoutProperties(ref, closure_4);
  const callback = react.useCallback((arg0) => {
    let tmp2 = null;
    if (null != obj[str]) {
      const merged = Object.assign(arg0);
      tmp2 = <tmp dataBinding={dataBinding} onDataBindingChange={onDataBindingChange} />;
    }
    return tmp2;
  }, items);
  const BaseRive = str(onDataBindingChange[4]).BaseRive;
  let merged = Object.assign(tmp);
  return <BaseRive ref={ref} src={dataBinding(onDataBindingChange[6])} artboard={str} artboardProperties={artboardProperties} artboardViewModelInstances={artboardViewModelInstances} defaultViewModelInstance={str2} stateMachine={stateMachine} renderDataBinding={callback} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointCardRiveWithBoundary(fallback) {
  let tmp4;
  obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] !== fallback) {
    const merged = Object.assign(fallback);
    const tmp10 = <closure_11 />;
    cResult[0] = fallback;
    cResult[1] = tmp10;
    tmp4 = tmp10;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === fallback.fallback) {
    let tmp11;
    if (cResult[3] === tmp4) {
      tmp11 = cResult[4];
    }
    return tmp11;
  }
  const tmp12 = jsx(RiveErrorBoundary2.RiveErrorBoundary, { fallback: fallback.fallback, children: tmp4 });
  cResult[2] = fallback.fallback;
  cResult[3] = tmp4;
  cResult[4] = tmp12;
  tmp11 = tmp12;
}) : (function CheckpointCardRiveWithBoundary(fallback) {
  const RiveErrorBoundary = RiveErrorBoundary2.RiveErrorBoundary;
  const merged = Object.assign(fallback);
  return <RiveErrorBoundary fallback={arg0.fallback}>{null}</RiveErrorBoundary>;
});
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/CheckpointCardRive.tsx");

export const CheckpointCardRive = tmp2;
