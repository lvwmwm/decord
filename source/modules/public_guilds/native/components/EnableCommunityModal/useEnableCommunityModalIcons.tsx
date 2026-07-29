// Module ID: 16506
// Function ID: 16507
// Name: safetyCheck
// Dependencies: [32, 19, 505, 4035, 16507, 16508, 16509, 16513, 16514, 7699, 4125, 2]
// Exports: default

// Module 16506 (safetyCheck)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { ThemeTypes } from "sum";

const require = arg1;
class EnableCommunityModalIcons {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj[0] = ThemeTypes.LIGHT;
    obj.theme = global;
    return obj;
  }
}
const prototype = EnableCommunityModalIcons.prototype;
Object.defineProperty(prototype, "safetyCheck", {
  get: function safetyCheck() {
    if (obj.isThemeDark(this.theme)) {
      let tmpResult = tmp(16507);
    } else {
      tmpResult = tmp(16508);
    }
    return tmpResult;
  },
  set: undefined
});
Object.defineProperty(prototype, "channelSetup", {
  get: function channelSetup() {
    return require(16509) /* getChannelSetupSource */.getChannelSetupSource(this.theme);
  },
  set: undefined
});
Object.defineProperty(prototype, "finishingTouches", {
  get: function finishingTouches() {
    if (obj.isThemeDark(this.theme)) {
      let tmpResult = tmp(16513);
    } else {
      tmpResult = tmp(16514);
    }
    return tmpResult;
  },
  set: undefined
});
Object.defineProperty(prototype, "close", {
  get: function close() {
    return require(7699) /* registerAsset */;
  },
  set: undefined
});
const result = require("sum").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/useEnableCommunityModalIcons.tsx");

export default function useEnableCommunityModalIcons() {
  let closure_0 = importDefault(4125)();
  return callback(React.useState(() => {
    if (typeof outer1_6 !== "find") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(outer1_6.prototype);
    obj[0] = outer1_5.LIGHT;
    obj.theme = closure_0;
    return obj;
  }), 1)[0];
};
