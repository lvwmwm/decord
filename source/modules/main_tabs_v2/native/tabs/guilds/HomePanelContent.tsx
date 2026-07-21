// Module ID: 14683
// Function ID: 110717
// Name: HomePanelContent
// Dependencies: []

// Module 14683 (HomePanelContent)
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const DM_WIDTH = arg1(dependencyMap[3]).DM_WIDTH;
const jsx = arg1(dependencyMap[4]).jsx;
let closure_8 = arg1(dependencyMap[5]).createStyles({ container: { flex: 1 }, guildsListContainerGestured: { flex: 1 }, guildLisetContainerDefault: { flex: 1 } });
let closure_9 = { code: "function HomePanelContentTsx1(){const{enableHome,isGradientTheme,maxX,interpolateColor,panelSpringTranslateX,baseLowest,panelBg}=this.__closure;if(!enableHome||isGradientTheme||maxX<=0){return{backgroundColor:'transparent'};}return{backgroundColor:interpolateColor(panelSpringTranslateX.get(),[0,maxX],[baseLowest,panelBg])};}" };
const obj2 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo(() => {
  const tmp = callback2();
  const MobileHomeDrawerExperiment = arg1(dependencyMap[6]).MobileHomeDrawerExperiment;
  const enableHome = MobileHomeDrawerExperiment.useConfig({ location: "guilds" }).enableHome;
  const arg1 = enableHome;
  let obj = arg1(dependencyMap[7]);
  const drawerOpen = obj.useDrawerOpen(enableHome);
  const panelSpringTranslateX = isClientThemeOrCustomThemeActive.useContext(arg1(dependencyMap[8]).HomeDrawerStateContext).panelSpringTranslateX;
  const importDefault = panelSpringTranslateX;
  const tmp3 = callback((maxX) => maxX.maxX);
  const dependencyMap = tmp3;
  let obj1 = arg1(dependencyMap[9]);
  const isClientThemeOrCustomThemeActive = obj1.useIsClientThemeOrCustomThemeActive();
  let obj2 = arg1(dependencyMap[10]);
  const token = obj2.useToken(importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOWEST);
  const View = token;
  let obj3 = arg1(dependencyMap[10]);
  const token1 = obj3.useToken(importDefault(dependencyMap[11]).colors.PANEL_BG);
  const callback = token1;
  const fn = function p() {
    if (enableHome) {
      if (!isClientThemeOrCustomThemeActive) {
        if (tmp3 > 0) {
          let obj = {};
          const items = [0.229, enableHome];
          const items1 = [token, token1];
          obj.backgroundColor = enableHome(enableHome[12]).interpolateColor(panelSpringTranslateX.get(), items, items1);
          const obj2 = enableHome(enableHome[12]);
        }
        return obj;
      }
    }
    obj = { backgroundColor: "transparent" };
  };
  obj = { enableHome, isGradientTheme: isClientThemeOrCustomThemeActive, maxX: tmp3, interpolateColor: arg1(dependencyMap[12]).interpolateColor, panelSpringTranslateX, baseLowest: token, panelBg: token1 };
  fn.__closure = obj;
  fn.__workletHash = 4210709178426;
  fn.__initData = closure_9;
  const animatedStyle = arg1(dependencyMap[12]).useAnimatedStyle(fn);
  obj = { style: items };
  const items = [tmp.container, animatedStyle];
  obj1 = {};
  if (enableHome) {
    if (drawerOpen) {
      let guildLisetContainerDefault = tmp.guildsListContainerGestured;
    }
    const items1 = [guildLisetContainerDefault, ];
    let tmp11 = null;
    if (!enableHome) {
      obj2 = { width: DM_WIDTH };
      tmp11 = obj2;
    }
    items1[1] = tmp11;
    obj1.style = items1;
    obj3 = { enableHome };
    obj1.children = jsx(importDefault(dependencyMap[13]), obj3);
    obj.children = tmp8(tmp10, obj1);
    return tmp8(tmp9, obj);
  }
  guildLisetContainerDefault = tmp.guildLisetContainerDefault;
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx");

export const HomePanelContent = memoResult;
