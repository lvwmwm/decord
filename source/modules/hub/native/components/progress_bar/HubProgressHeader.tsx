// Module ID: 11683
// Function ID: 90672
// Name: HubProgressHeader
// Dependencies: []
// Exports: default

// Module 11683 (HubProgressHeader)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ HUB_PROGRESS_ACTION_SHEET_ID: closure_4, HUB_PROGRESS_NUM_TOTAL_STEPS: closure_5 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[4]).jsx;
let obj = arg1(dependencyMap[5]);
obj = { container: obj, icon: {} };
obj = { "Bool(true)": "%Float64Array%", "Bool(true)": "communicationRank", "Bool(true)": "%Float64Array%", height: arg1(dependencyMap[3]).GUILD_DIRECTORY_PROGRESS_BAR_HEIGHT };
const tmp3 = arg1(dependencyMap[2]);
obj.innerContainer = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
let closure_7 = obj.createStyles(obj);
const obj1 = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/hub/native/components/progress_bar/HubProgressHeader.tsx");

export default function HubProgressHeader(guild) {
  guild = guild.guild;
  const arg1 = guild;
  let flag = guild.onDirectoryPage;
  if (flag === undefined) {
    flag = false;
  }
  const importDefault = flag;
  let dependencyMap;
  const tmp = callback();
  let obj = arg1(dependencyMap[7]);
  const hubProgressBarCompletedSteps = obj.useHubProgressBarCompletedSteps(guild);
  let obj1 = arg1(dependencyMap[7]);
  const nextHubProgressStep = obj1.getNextHubProgressStep(hubProgressBarCompletedSteps);
  dependencyMap = nextHubProgressStep;
  if (null == nextHubProgressStep) {
    return null;
  } else {
    const size = hubProgressBarCompletedSteps.size;
    if (flag) {
      flag = nextHubProgressStep === arg1(dependencyMap[8]).HubProgressStep.JOIN_GUILD;
    }
    const hubProgressTitleForStep = arg1(dependencyMap[7]).getHubProgressTitleForStep(nextHubProgressStep);
    if (size < closure_5) {
      const intl2 = arg1(dependencyMap[9]).intl;
      obj = {};
      const _HermesInternal = HermesInternal;
      obj.number = "" + size;
      obj.total = closure_5;
      let formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[9]).t.9j7xDu, obj);
    } else {
      const intl = arg1(dependencyMap[9]).intl;
      formatToPlainStringResult = intl.string(arg1(dependencyMap[9]).t.+Gyklt);
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
        obj.openLazy(guild(nextHubProgressStep[13])(nextHubProgressStep[12], nextHubProgressStep.paths), closure_4, obj);
      }
    };
    obj1.iconSource = importDefault(dependencyMap[14]);
    obj1.title = hubProgressTitleForStep;
    obj1.subtitle = formatToPlainStringResult;
    let tmp22;
    if (flag) {
      tmp22 = <View />;
    }
    obj1.trailing = tmp22;
    obj.children = jsx(arg1(dependencyMap[10]).FormCTA, obj1);
    return <View {...obj} />;
  }
};
