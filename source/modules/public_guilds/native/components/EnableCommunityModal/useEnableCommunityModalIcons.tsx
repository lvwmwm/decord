// Module ID: 16244
// Function ID: 125539
// Name: EnableCommunityModalIcons
// Dependencies: []
// Exports: default

// Module 16244 (EnableCommunityModalIcons)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importAll(dependencyMap[3]);
const ThemeTypes = arg1(dependencyMap[4]).ThemeTypes;
let closure_8 = () => {
  class EnableCommunityModalIcons {
    constructor(arg0) {
      tmp = closure_4(this, EnableCommunityModalIcons);
      this.theme = closure_7.LIGHT;
      this.theme = arg0;
      return;
    }
  }
  const arg1 = EnableCommunityModalIcons;
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
      return EnableCommunityModalIcons(closure_2[8]).getChannelSetupSource(this.theme);
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
      return EnableCommunityModalIcons(closure_2[11]);
    }
  };
  return callback2(EnableCommunityModalIcons, items);
}();
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/useEnableCommunityModalIcons.tsx");

export default function useEnableCommunityModalIcons() {
  let closure_0 = importDefault(dependencyMap[12])();
  return callback(React.useState(() => new closure_8(closure_0)), 1)[0];
};
