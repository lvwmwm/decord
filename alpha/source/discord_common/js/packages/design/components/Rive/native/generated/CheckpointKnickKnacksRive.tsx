// Module ID: 4873
// Function ID: 4874
// Name: CheckpointKnickKnacksRive
// Dependencies: [109, 19, 21, 558, 4805, 576, 4874, 4858, 2]

// Module 4873 (CheckpointKnickKnacksRive)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import BaseRive2 from "BaseRive" /* 4805 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import "ReactCompilerGating";
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dataBinding, importDefault, tmp3, tmp5;

let tmp;
const RiveErrorBoundary2 = tmp(4858);
let closure_3 = ["ref", "fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let closure_4 = ["ref", "fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
const jsx = Fragment.jsx;
const artboardProperties = { Preview: { reducedMotion: "boolean", iconColor: "color" }, Friends: { reducedMotion: "boolean", iconColor: "color" }, Globe: { reducedMotion: "boolean", iconColor: "color" }, "Globe Single Line": {}, Emojis: { reducedMotion: "boolean", iconColor: "color" }, "Wave Line": { reducedMotion: "boolean", iconColor: "color" }, Games: { reducedMotion: "boolean", iconColor: "color" }, Voice: { reducedMotion: "boolean", iconColor: "color" }, "Looping Checkboard": { reducedMotion: "boolean", iconColor: "color" }, CheckRow: { reducedMotion: "boolean", iconColor: "color" }, Quests: { reducedMotion: "boolean", iconColor: "color" }, Entry: { reducedMotion: "boolean", iconColor: "color" }, Messages: { reducedMotion: "boolean", iconColor: "color" }, Servers: { reducedMotion: "boolean", iconColor: "color" } };
const artboardViewModelInstances = { Preview: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], Friends: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], Globe: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], "Globe Single Line": [], Emojis: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], "Wave Line": ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], Games: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], Voice: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], "Looping Checkboard": ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], CheckRow: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], Quests: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], Entry: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], Messages: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], Servers: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"] };
let ReactCompilerGating = ReactCompilerGating_mod;
let obj = {
  Preview: ReactCompilerGating.isReactCompilerEnabled() ? (function PreviewBindings(reducedMotionEnabled) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let iconColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  }) : (function PreviewBindings(reducedMotionEnabled) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let iconColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  }),
  Friends: ReactCompilerGating.isReactCompilerEnabled() ? (function FriendsBindings(reducedMotionEnabled) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let iconColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  }) : (function FriendsBindings(reducedMotionEnabled) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let iconColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  }),
  Globe: ReactCompilerGating.isReactCompilerEnabled() ? (function GlobeBindings(reducedMotionEnabled) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let iconColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  }) : (function GlobeBindings(reducedMotionEnabled) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let iconColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  }),
  Emojis: ReactCompilerGating.isReactCompilerEnabled() ? (function EmojisBindings(reducedMotionEnabled) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let iconColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  }) : (function EmojisBindings(reducedMotionEnabled) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let iconColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  }),
  "Wave Line": ReactCompilerGating.isReactCompilerEnabled() ? (function WaveLineBindings(reducedMotionEnabled) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let iconColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  }) : (function WaveLineBindings(reducedMotionEnabled) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let iconColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  }),
  Games: ReactCompilerGating.isReactCompilerEnabled() ? (function GamesBindings(reducedMotionEnabled) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let iconColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  }) : (function GamesBindings(reducedMotionEnabled) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let iconColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  }),
  Voice: ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceBindings(reducedMotionEnabled) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let iconColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  }) : (function VoiceBindings(reducedMotionEnabled) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let iconColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  }),
  "Looping Checkboard": ReactCompilerGating.isReactCompilerEnabled() ? (function LoopingCheckboardBindings(reducedMotionEnabled) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let iconColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  }) : (function LoopingCheckboardBindings(reducedMotionEnabled) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let iconColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  }),
  CheckRow: ReactCompilerGating.isReactCompilerEnabled() ? (function CheckRowBindings(reducedMotionEnabled) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let iconColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  }) : (function CheckRowBindings(reducedMotionEnabled) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let iconColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  }),
  Quests: ReactCompilerGating.isReactCompilerEnabled() ? (function QuestsBindings(reducedMotionEnabled) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let iconColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  }) : (function QuestsBindings(reducedMotionEnabled) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let iconColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  }),
  Entry: ReactCompilerGating.isReactCompilerEnabled() ? (function EntryBindings(reducedMotionEnabled) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let iconColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  }) : (function EntryBindings(reducedMotionEnabled) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let iconColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  }),
  Messages: ReactCompilerGating.isReactCompilerEnabled() ? (function MessagesBindings(reducedMotionEnabled) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let iconColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  }) : (function MessagesBindings(reducedMotionEnabled) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let iconColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  }),
  Servers: ReactCompilerGating.isReactCompilerEnabled() ? (function ServersBindings(reducedMotionEnabled) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let iconColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  }) : (function ServersBindings(reducedMotionEnabled) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    obj = BaseRive2;
    const booleanBinding = obj.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    let iconColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  })
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointKnickKnacksRiveInner(arg0) {
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
    class N {
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
  str = "Preview";
  if (undefined !== tmp9) {
    str = tmp9;
  }
  let str2 = "Pink";
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
      class N {
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
      const tmp23 = <BaseRive ref={tmp6} src={require("module_4874")} artboard={str} artboardProperties={artboardProperties} artboardViewModelInstances={artboardViewModelInstances} defaultViewModelInstance={str2} stateMachine={null} renderDataBinding={tmp14} />;
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
  class N {
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
  cResult[11] = N;
  tmp14 = N;
}) : (function CheckpointKnickKnacksRiveInner(ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = ref);
  let str = "Preview";
  ref = ref.ref;
  if (undefined !== artboard) {
    str = artboard;
  }
  const defaultViewModelInstance = ref.defaultViewModelInstance;
  let str2 = "Pink";
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
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointKnickKnacksRiveWithBoundary(fallback) {
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
}) : (function CheckpointKnickKnacksRiveWithBoundary(fallback) {
  const RiveErrorBoundary = RiveErrorBoundary2.RiveErrorBoundary;
  const merged = Object.assign(fallback);
  return <RiveErrorBoundary fallback={arg0.fallback}>{null}</RiveErrorBoundary>;
});
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/CheckpointKnickKnacksRive.tsx");

export const CheckpointKnickKnacksRive = tmp2;
