// Module ID: 11761
// Function ID: 11762
// Name: VoicePanelPIPHandoff
// Dependencies: [19, 2]
// Exports: usePIPCardsSettled, usePIPPanelLayoutCommitted

// Module 11761 (VoicePanelPIPHandoff)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set;

let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPHandoff.tsx");
class VoicePanelPIPHandoff {
  constructor() {
    const obj = Object.create(new.target.prototype);
    obj.cards = new Map();
    new Map();
    obj.listeners = new Set();
    obj.inPIPLayout = 0;
    obj.inFlight = 0;
    obj.subscribe = function subscribe(arg0) {
      let closure_0;
      listeners = arg0;
      listeners = listeners.listeners;
      listeners.add(arg0);
      return () => {
        listeners = obj.listeners;
        listeners.delete(closure_0);
      };
    };
    new Set();
    return obj;
  }
  syncCardPIPLayout(id, inPIPLayout) {
    const self = this;
    const cards = this.cards;
    const value = cards.get(id);
    if (null == value) {
      const cards3 = self.cards;
      const obj2 = { inPIPLayout, arrived: true };
      const result = cards3.set(id, obj2);
      self.recount();
    } else if (value.inPIPLayout !== inPIPLayout) {
      const cards2 = self.cards;
      const obj = { inPIPLayout, arrived: !inPIPLayout };
      const result1 = cards2.set(id, obj);
      self.recount();
    }
  }
  setCardArrivedInPIP(id) {
    const self = this;
    const cards = this.cards;
    const value = cards.get(id);
    const tmp2 = null == value || value.arrived;
    if (!tmp2) {
      const cards2 = self.cards;
      const obj = { arrived: true };
      set = cards2.set;
      const merged = Object.assign(value);
      const result = set(id, obj);
      self.recount();
    }
  }
  removeCard(arg0) {
    const self = this;
    const cards = this.cards;
    if (cards.delete(arg0)) {
      self.recount();
    }
  }
  arePIPCardsSettled() {
    return 0 === this.inFlight;
  }
  isPanelLayoutCommitted() {
    return 0 === this.inPIPLayout;
  }
  recount() {
    const self = this;
    let num = 0;
    let num2 = 0;
    const cards = this.cards;
    const values = cards.values();
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (nextResult.inPIPLayout) {
        num = num + 1;
        if (!tmp3.arrived) {
          num2 = num2 + 1;
        }
      }
      continue;
    }
    if (num !== self.inPIPLayout) {
      self.inPIPLayout = num;
      self.inFlight = num2;
      const listeners = self.listeners;
      for (const item10029 of listeners) {
        let item10029Result = item10029();
        continue;
      }
    }
  }
}
const prototype = VoicePanelPIPHandoff.prototype;

export default VoicePanelPIPHandoff;
export const usePIPCardsSettled = function usePIPCardsSettled(pipHandoff) {
  let closure_0 = pipHandoff;
  const items = [pipHandoff];
  return react.useSyncExternalStore(pipHandoff.subscribe, react.useCallback(() => closure_0.arePIPCardsSettled(), items));
};
export const usePIPPanelLayoutCommitted = function usePIPPanelLayoutCommitted(pipHandoff) {
  let closure_0 = pipHandoff;
  const items = [pipHandoff];
  return react.useSyncExternalStore(pipHandoff.subscribe, react.useCallback(() => panelLayoutCommitted.isPanelLayoutCommitted(), items));
};
