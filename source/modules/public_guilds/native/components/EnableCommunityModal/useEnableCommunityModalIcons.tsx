// Module ID: 16361
// Function ID: 127713
// Name: EnableCommunityModalIcons
// Dependencies: [57, 6, 7, 31, 482, 3976, 16362, 16363, 16364, 16368, 16369, 7607, 4066, 2]
// Exports: default

// Module 16361 (EnableCommunityModalIcons)
import _slicedToArray from "_slicedToArray";
import registerAsset from "registerAsset";
import closure_5 from "registerAsset";
import result from "result";
import { ThemeTypes } from "sum";

const require = arg1;
let closure_8 = (() => {
  class EnableCommunityModalIcons {
    constructor(arg0) {
      tmp = outer1_4(this, EnableCommunityModalIcons);
      this.theme = outer1_7.LIGHT;
      this.theme = arg0;
      return;
    }
  }
  let obj = {
    key: "safetyCheck",
    get() {
      if (obj.isThemeDark(this.theme)) {
        let tmpResult = tmp(tmp2[6]);
      } else {
        tmpResult = tmp(tmp2[7]);
      }
      return tmpResult;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "channelSetup",
    get() {
      return EnableCommunityModalIcons(outer1_2[8]).getChannelSetupSource(this.theme);
    }
  };
  items[1] = obj;
  obj = {
    key: "finishingTouches",
    get() {
      if (obj.isThemeDark(this.theme)) {
        let tmpResult = tmp(tmp2[9]);
      } else {
        tmpResult = tmp(tmp2[10]);
      }
      return tmpResult;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "close",
    get() {
      return EnableCommunityModalIcons(outer1_2[11]);
    }
  };
  return callback2(EnableCommunityModalIcons, items);
})();
const result = require("_defineProperties").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/useEnableCommunityModalIcons.tsx");

export default function useEnableCommunityModalIcons() {
  let closure_0 = importDefault(4066)();
  return callback(React.useState(() => new outer1_8(closure_0)), 1)[0];
};
