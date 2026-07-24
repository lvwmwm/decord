// Module ID: 5294
// Function ID: 45730
// Name: PressableStateMachine
// Dependencies: [6, 7]

// Module 5294 (PressableStateMachine)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";


export const PressableStateMachine = (() => {
  class PressableStateMachine {
    constructor() {
      tmp = PressableStateMachine(this, PressableStateMachine);
      this.states = null;
      this.currentStepIndex = 0;
      this.eventPayload = null;
      return;
    }
  }
  let obj = {
    key: "setStates",
    value: function setStates(statesConfig) {
      this.states = statesConfig;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "reset",
    value: function reset() {
      this.currentStepIndex = 0;
      this.eventPayload = null;
    }
  };
  items[1] = obj;
  obj = {
    key: "handleEvent",
    value: function handleEvent(arg0, arg1) {
      const self = this;
      if (this.states) {
        let eventPayload = arg1;
        if (!arg1) {
          eventPayload = self.eventPayload;
        }
        self.eventPayload = eventPayload;
        if (self.states[self.currentStepIndex].eventName === arg0) {
          if (tmp3) {
            obj.callback(self.eventPayload);
          }
          self.currentStepIndex = self.currentStepIndex + 1;
          if (self.currentStepIndex === self.states.length) {
            self.reset();
          }
          tmp3 = self.eventPayload && obj.callback;
        } else if (self.currentStepIndex > 0) {
          self.reset();
          self.handleEvent(arg0, arg1);
        }
      }
    }
  };
  items[2] = obj;
  return callback(PressableStateMachine, items);
})();
