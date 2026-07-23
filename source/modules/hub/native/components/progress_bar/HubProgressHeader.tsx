// Module ID: 11701
// Function ID: 90769
// Name: HubProgressHeader
// Dependencies: [31, 27, 5714, 10040, 33, 4130, 689, 11698, 1282, 1212, 7495, 4098, 11702, 1934, 11787, 2]
// Exports: default

// Module 11701 (HubProgressHeader)
import "result";
import { View } from "get ActivityIndicator";
import items from "items";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ HUB_PROGRESS_ACTION_SHEET_ID: closure_4, HUB_PROGRESS_NUM_TOTAL_STEPS: closure_5 } = items);
_createForOfIteratorHelperLoose = { container: _createForOfIteratorHelperLoose, icon: { width: 48, height: 48 } };
_createForOfIteratorHelperLoose = { overflow: "hidden", height: require("GuildDirectoryCreate").GUILD_DIRECTORY_PROGRESS_BAR_HEIGHT, padding: 16 };
let obj1 = { paddingVertical: 8, paddingLeft: 8, paddingRight: 12, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.innerContainer = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("items").fileFinishedImporting("modules/hub/native/components/progress_bar/HubProgressHeader.tsx");

export default function HubProgressHeader(guild) {
  guild = guild.guild;
  let flag = guild.onDirectoryPage;
  if (flag === undefined) {
    flag = false;
  }
  let nextHubProgressStep;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = guild(nextHubProgressStep[7]);
  const hubProgressBarCompletedSteps = obj.useHubProgressBarCompletedSteps(guild);
  let obj1 = guild(nextHubProgressStep[7]);
  nextHubProgressStep = obj1.getNextHubProgressStep(hubProgressBarCompletedSteps);
  if (null == nextHubProgressStep) {
    return null;
  } else {
    const size = hubProgressBarCompletedSteps.size;
    if (flag) {
      flag = nextHubProgressStep === guild(nextHubProgressStep[8]).HubProgressStep.JOIN_GUILD;
    }
    const hubProgressTitleForStep = guild(nextHubProgressStep[7]).getHubProgressTitleForStep(nextHubProgressStep);
    if (size < closure_5) {
      const intl2 = guild(nextHubProgressStep[9]).intl;
      obj = {};
      const _HermesInternal = HermesInternal;
      obj.number = "" + size;
      obj.total = closure_5;
      let formatToPlainStringResult = intl2.formatToPlainString(guild(nextHubProgressStep[9]).t["9j7xDu"], obj);
    } else {
      const intl = guild(nextHubProgressStep[9]).intl;
      formatToPlainStringResult = intl.string(guild(nextHubProgressStep[9]).t["+Gyklt"]);
    }
    obj = { style: tmp.container };
    obj1 = {};
    ({ innerContainer: obj6.style, icon: obj6.iconStyle } = tmp);
    obj1.onPress = function onPress() {
      let tmp = flag;
      if (flag) {
        tmp = nextHubProgressStep === guild(nextHubProgressStep[8]).HubProgressStep.JOIN_GUILD;
      }
      if (!tmp) {
        let obj = flag(nextHubProgressStep[11]);
        obj = { guild, analyticsSource: "Directory Channel Header" };
        obj.openLazy(guild(nextHubProgressStep[13])(nextHubProgressStep[12], nextHubProgressStep.paths), outer1_4, obj);
      }
    };
    obj1.iconSource = flag(nextHubProgressStep[14]);
    obj1.title = hubProgressTitleForStep;
    obj1.subtitle = formatToPlainStringResult;
    let tmp22;
    if (flag) {
      tmp22 = <View />;
    }
    obj1.trailing = tmp22;
    obj.children = jsx(guild(nextHubProgressStep[10]).FormCTA, {});
    return <View style={tmp.container} />;
  }
};
