// Module ID: 15897
// Function ID: 121737
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15897 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
const INITIAL_STATE = arg1(dependencyMap[7]).INITIAL_STATE;
({ AFTER_ROLL_DELAY_MS: closure_12, ALLOWED_DICE_SIDES_SET: closure_13, DEFAULT_DICE_SIDES: closure_14, DISMISS_DELAY_MS: closure_15, MAX_DICE_COUNT: closure_16, ROLL_DURATION_MS: closure_17 } = arg1(dependencyMap[8]));
const MessageSendLocation = arg1(dependencyMap[9]).MessageSendLocation;
let tmp3 = (arg0) => {
  class DiceRollLifecycleManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, DiceRollLifecycleManager);
      items1 = [...items];
      obj = closure_6(DiceRollLifecycleManager);
      tmp2 = closure_5;
      if (closure_19()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      DiceRollLifecycleManager = tmp2Result;
      tmp2Result.actions = {
        CHANNEL_SELECT(arg0) {
              return tmp2Result.handleChannelSelect(arg0);
            },
        DICE_ROLL_START(arg0) {
              return tmp2Result.handleStartRoll(arg0);
            }
      };
      tmp2Result.rollTimer = null;
      tmp2Result.postRollDismissTimer = null;
      tmp2Result.collapseTimer = null;
      tmp2Result.handleChannelSelect = (channelId) => {
        const state = store.getState();
        if (tmp2) {
          tmp2Result.clearTimers();
          tmp2Result.dismiss();
        }
      };
      tmp2Result.handleStartRoll = (channelId) => {
        channelId = channelId.channelId;
        let num = channelId.diceCount;
        if (num === undefined) {
          num = 1;
        }
        let diceSides = channelId.diceSides;
        if (diceSides === undefined) {
          diceSides = closure_14;
        }
        let num3;
        let tmp4;
        let items;
        if (channelId.getChannelId() === channelId) {
          if (null == store.getState().channelId) {
            num3 = 42;
            if (42 !== num) {
              const _Math = Math;
              const _Math2 = Math;
              num3 = Math.min(Math.max(num, 1), closure_16);
            }
            tmp4 = diceSides;
            if (!set.has(diceSides)) {
              tmp4 = closure_14;
            }
            const obj = { channelId, rolling: true, diceCount: num3, diceSides: tmp4, results: null };
            store.setState(obj);
            items = [];
            let num4 = 0;
            if (0 < num3) {
              do {
                let _Math3 = Math;
                let _Math4 = Math;
                let arr = items.push(Math.floor(Math.random() * tmp4) + 1);
                num4 = num4 + 1;
              } while (num4 < num3);
            }
            const _setTimeout = setTimeout;
            tmp2Result.rollTimer = setTimeout(() => {
              channelId.rollTimer = null;
              channelId.finishRoll(channelId, num3, tmp4, items);
            }, closure_17);
          }
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = DiceRollLifecycleManager;
  callback2(DiceRollLifecycleManager, arg0);
  let obj = {
    key: "finishRoll",
    value(arg0, arg1, arg2, results) {
      const DiceRollLifecycleManager = this;
      store.setState({ rolling: false, results });
      this.postRollDismissTimer = setTimeout(() => {
        self.postRollDismissTimer = null;
        self.dismiss();
      }, closure_12);
      this.sendMessage(arg0, arg1, arg2, results);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "sendMessage",
    value(channelId, count, sides, arr) {
      const channel = channel.getChannel(channelId);
      if (null != channel) {
        const guildId = channel.getGuildId();
        let str = "@me";
        if (null != guildId) {
          str = guildId;
        }
        let obj1 = globalThis;
        const _location = location;
        const _window = window;
        const _HermesInternal = HermesInternal;
        const combined = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT + "/channels/" + str + "/" + channelId + "/roll-dice/" + count + "d" + sides;
        const intl = DiceRollLifecycleManager(closure_2[10]).intl;
        let obj = { count, sides };
        const _HermesInternal2 = HermesInternal;
        let combined1 = "[`" + intl.formatToPlainString(DiceRollLifecycleManager(closure_2[10]).t.uV5JaG, obj) + "`](" + combined + ")";
        const reduced = arr.reduce((arg0, arg1) => arg0 + arg1, 0);
        const intl2 = DiceRollLifecycleManager(closure_2[10]).intl;
        obj = { total: reduced, count, sides };
        let result = intl2.formatToMarkdownString(DiceRollLifecycleManager(closure_2[10]).t.tmSbYW, obj);
        const mapped = arr.map((arg0) => ":game_die: " + arg0.toString());
        let str10 = " ";
        const _HermesInternal3 = HermesInternal;
        const combined2 = "-# " + mapped.join(" ");
        if (1 === count) {
          let combined3 = "### " + result + ` ` + combined1;
        } else {
          const _HermesInternal4 = HermesInternal;
          combined3 = "### " + result + ` ` + combined1 + "\n" + combined2;
        }
        combined1 = closure_2;
        result = callback(closure_2[11]);
        str10 = result.sendMessage;
        obj1 = { location: constants.CHAT_INPUT };
        str10(channelId, callback(closure_2[12]).parse(channel, combined3), true, obj1);
        const obj6 = callback(closure_2[12]);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "dismiss",
    value() {
      const DiceRollLifecycleManager = this;
      store.setState({ dismissing: true });
      this.collapseTimer = setTimeout(() => {
        self.collapseTimer = null;
        state.setState(closure_11);
      }, closure_15);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "clearTimers",
    value() {
      const self = this;
      if (null != this.rollTimer) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.rollTimer);
        self.rollTimer = null;
      }
      if (null != self.postRollDismissTimer) {
        const _clearTimeout2 = clearTimeout;
        clearTimeout(self.postRollDismissTimer);
        self.postRollDismissTimer = null;
      }
      if (null != self.collapseTimer) {
        const _clearTimeout3 = clearTimeout;
        clearTimeout(self.collapseTimer);
        self.collapseTimer = null;
      }
    }
  };
  return callback(DiceRollLifecycleManager, items);
}(importDefault(dependencyMap[13]));
tmp3 = new tmp3();
const tmp2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/dice_roll/DiceRollLifecycleManager.tsx");

export default tmp3;
