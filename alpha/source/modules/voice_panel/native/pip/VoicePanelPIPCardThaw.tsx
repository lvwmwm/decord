// Module ID: 11994
// Function ID: 11995
// Name: VoicePanelPIPCardThaw
// Dependencies: [19, 1655, 11995, 1708, 2]
// Exports: usePIPCardThaw, usePIPCardThawRequested

// Module 11994 (VoicePanelPIPCardThaw)
import _mod1655 from "module_1655" /* 1655 */;
import _mod1708 from "module_1708" /* 1708 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, animationFrame, dependencyMap;

const f103699 = () => requested.isRequested();
let closure_3 = { code: "(function VoicePanelPIPCardThawTsx1(){let[pipCardSize,pipScale,pipWidth,pipHeight,MAX_FRAMES,scheduleOnRN,finish]=this.__closure;let frames=0;const waitForCards=function(){const{width:width,height:height}=pipCardSize.get();const scale=pipScale.get();const caughtUp=Math.abs(width-pipWidth*scale)<1&&Math.abs(height-pipHeight*scale)<1;if(caughtUp&&frames>0||frames>=MAX_FRAMES){scheduleOnRN(finish);return;}frames++;requestAnimationFrame(waitForCards);};requestAnimationFrame(waitForCards);})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPCardThaw.tsx");
class VoicePanelPIPCardThaw {
  constructor() {
    const obj3 = Object.create(new.target.prototype);
    obj3.cardsFrozen = false;
    obj3.onThawed = null;
    obj3.listeners = new Set();
    new Set();
    const obj = _mod1655;
    obj3.thawing = obj.makeMutable(false);
    const obj2 = _mod1655;
    obj3.pipCardSize = obj2.makeMutable({ width: 0, height: 0 });
    obj3.finish = function finish() {
      const onThawed = obj3.onThawed;
      obj3.cancel();
      if (onThawed != null) {
        onThawed();
      }
    };
    obj3.subscribe = function subscribe(arg0) {
      let closure_0;
      listeners = arg0;
      listeners = listeners.listeners;
      listeners.add(arg0);
      return () => {
        listeners = obj3.listeners;
        listeners.delete(closure_0);
      };
    };
    return obj3;
  }
  setCardsFrozen(cardsFrozen) {
    this.cardsFrozen = cardsFrozen;
  }
  start(onThawed) {
    const self = this;
    let flag = !(!this.cardsFrozen && null == self.onThawed);
    const tmp = !this.cardsFrozen && null == self.onThawed;
    if (flag) {
      self.onThawed = onThawed;
      const thawing = self.thawing;
      const result = thawing.set(true);
      self.notify();
      flag = true;
    }
    return flag;
  }
  cancel() {
    this.onThawed = null;
    const thawing = this.thawing;
    const result = thawing.set(false);
    this.notify();
  }
  isRequested() {
    return null != this.onThawed;
  }
  notify() {
    const listeners = this.listeners;
    for (const item10006 of listeners) {
      let item10006Result = item10006();
      continue;
    }
  }
}
const prototype = VoicePanelPIPCardThaw.prototype;

export default VoicePanelPIPCardThaw;
export function usePIPCardThawRequested(subscribe) {
  let closure_0 = subscribe;
  const items = [subscribe];
  return react.useSyncExternalStore(subscribe.subscribe, react.useCallback(f103699, items));
}
export function usePIPCardThaw(cardThaw, arg1) {
  let closure_1;
  _require = cardThaw;
  dependencyMap = arg1;
  const obj = require("VoicePanelPIPStateContext");
  size = obj.usePIPState();
  const width = size.width;
  const height = size.height;
  const scale = size.scale;
  _require = cardThaw;
  let items = [cardThaw];
  const syncExternalStore = width.useSyncExternalStore(cardThaw.subscribe, width.useCallback(f103699, items));
  const finish = cardThaw.finish;
  const pipCardSize = cardThaw.pipCardSize;
  let items1 = [cardThaw, arg1];
  const layoutEffect = width.useLayoutEffect(() => {
    let cardsFrozen;
    cardThaw.setCardsFrozen(closure_1);
    return () => cardsFrozen.setCardsFrozen(false);
  }, items1);
  const items2 = [finish, arg1, pipCardSize, height, scale, width, syncExternalStore];
  const layoutEffect1 = width.useLayoutEffect(() => {
    let tmp13;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp17;
    let tmp18;
    let tmp19;
    let tmp20;
    const tmp = syncExternalStore && !closure_1;
    if (tmp) {
      const items = [closure_3, pipCardSize, , , , , , ];
      items[2] = scale;
      items[3] = width;
      items[4] = height;
      items[5] = 10;
      const scheduleOnUI = _mod1708.scheduleOnUI;
      items[6] = _mod1708.scheduleOnRN;
      items[7] = finish;
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items;
      class VoicePanelPIPCardThawTsx1 {
        constructor() {
          closure_0 = 0;
          waitForCards = function waitForCards() { /* body not rendered: F145776 */ };
          animationFrame = requestAnimationFrame(waitForCards);
          return;
        }
      }
      const items1 = [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
      VoicePanelPIPCardThawTsx1.__closure = items1;
      VoicePanelPIPCardThawTsx1.__workletHash = 6411568076857;
      VoicePanelPIPCardThawTsx1.__initData = tmp13;
      scheduleOnUI(VoicePanelPIPCardThawTsx1);
    }
  }, items2);
  const items3 = [finish];
  const effect = width.useEffect(() => () => finish(), items3);
}
