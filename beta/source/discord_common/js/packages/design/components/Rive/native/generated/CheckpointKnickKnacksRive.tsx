// Module ID: 4630
// Function ID: 4631
// Name: CheckpointKnickKnacksRive
// Dependencies: [109, 19, 21, 4560, 4631, 4615, 2]

// Module 4630 (CheckpointKnickKnacksRive)
import Fragment from "Fragment" /* 21 */;
import BaseRive2 from "BaseRive" /* 4560 */;
import RiveErrorBoundary2 from "RiveErrorBoundary" /* 4615 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
const jsx = Fragment.jsx;
const artboardProperties = { Preview: { reducedMotion: "boolean", iconColor: "color" }, Friends: { reducedMotion: "boolean", iconColor: "color" }, Globe: { reducedMotion: "boolean", iconColor: "color" }, "Globe Single Line": {}, Emojis: { reducedMotion: "boolean", iconColor: "color" }, "Wave Line": { reducedMotion: "boolean", iconColor: "color" }, Games: { reducedMotion: "boolean", iconColor: "color" }, Voice: { reducedMotion: "boolean", iconColor: "color" }, "Looping Checkboard": { reducedMotion: "boolean", iconColor: "color" }, CheckRow: { reducedMotion: "boolean", iconColor: "color" }, Quests: { reducedMotion: "boolean", iconColor: "color" }, Entry: { reducedMotion: "boolean", iconColor: "color" }, Messages: { reducedMotion: "boolean", iconColor: "color" }, Servers: { reducedMotion: "boolean", iconColor: "color" } };
const artboardViewModelInstances = { Preview: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], Friends: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], Globe: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], "Globe Single Line": [], Emojis: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], "Wave Line": ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], Games: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], Voice: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], "Looping Checkboard": ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], CheckRow: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], Quests: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], Entry: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], Messages: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], Servers: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"] };
let closure_9 = {
  Preview: function PreviewBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
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
  },
  Friends: function FriendsBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
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
  },
  Globe: function GlobeBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
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
  },
  Emojis: function EmojisBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
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
  },
  "Wave Line": function WaveLineBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
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
  },
  Games: function GamesBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
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
  },
  Voice: function VoiceBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
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
  },
  "Looping Checkboard": function LoopingCheckboardBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
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
  },
  CheckRow: function CheckRowBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
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
  },
  Quests: function QuestsBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
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
  },
  Entry: function EntryBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
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
  },
  Messages: function MessagesBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
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
  },
  Servers: function ServersBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    reducedMotionEnabled = reducedMotionEnabled.reducedMotionEnabled;
    const obj = BaseRive2;
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
  }
};
let closure_10 = react.forwardRef(function CheckpointKnickKnacksRiveInner(defaultViewModelInstance, ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Preview";
  if (undefined !== artboard) {
    str = artboard;
  }
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "Pink";
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
const forwardRefResult = react.forwardRef(function CheckpointKnickKnacksRiveWithBoundary(fallback, ref) {
  const RiveErrorBoundary = RiveErrorBoundary2.RiveErrorBoundary;
  const merged = Object.assign(fallback);
  return <RiveErrorBoundary fallback={arg0.fallback}>{null}</RiveErrorBoundary>;
});
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/CheckpointKnickKnacksRive.tsx");

export const CheckpointKnickKnacksRive = forwardRefResult;
