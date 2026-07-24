// Module ID: 14856
// Function ID: 113279
// Name: HomePanelContent
// Dependencies: [31, 27, 14850, 653, 33, 4130, 3987, 14853, 14849, 8870, 3834, 689, 3991, 14857, 2]

// Module 14856 (HomePanelContent)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import computeMaxX from "computeMaxX";
import { DM_WIDTH } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1 }, guildsListContainerGestured: { flex: 1 }, guildLisetContainerDefault: { flex: 1 } });
let closure_9 = { code: "function HomePanelContentTsx1(){const{enableHome,isGradientTheme,maxX,interpolateColor,panelSpringTranslateX,baseLowest,panelBg}=this.__closure;if(!enableHome||isGradientTheme||maxX<=0){return{backgroundColor:'transparent'};}return{backgroundColor:interpolateColor(panelSpringTranslateX.get(),[0,maxX],[baseLowest,panelBg])};}" };
const memoResult = importAllResult.memo(() => {
  const tmp = callback();
  const MobileHomeDrawerExperiment = enableHome(3987).MobileHomeDrawerExperiment;
  enableHome = MobileHomeDrawerExperiment.useConfig({ location: "guilds" }).enableHome;
  let obj = enableHome(14853);
  const drawerOpen = obj.useDrawerOpen(enableHome);
  const panelSpringTranslateX = isClientThemeOrCustomThemeActive.useContext(enableHome(14849).HomeDrawerStateContext).panelSpringTranslateX;
  const tmp3 = token1((maxX) => maxX.maxX);
  const dependencyMap = tmp3;
  let obj1 = enableHome(8870);
  isClientThemeOrCustomThemeActive = obj1.useIsClientThemeOrCustomThemeActive();
  let obj2 = enableHome(3834);
  const token = obj2.useToken(panelSpringTranslateX(689).colors.BACKGROUND_BASE_LOWEST);
  let obj3 = enableHome(3834);
  token1 = obj3.useToken(panelSpringTranslateX(689).colors.PANEL_BG);
  const fn = function p() {
    if (enableHome) {
      if (!isClientThemeOrCustomThemeActive) {
        if (tmp3 > 0) {
          let obj = {};
          const items = [0, enableHome];
          const items1 = [token, token1];
          obj.backgroundColor = enableHome(enableHome[12]).interpolateColor(panelSpringTranslateX.get(), items, items1);
          const obj2 = enableHome(enableHome[12]);
        }
        return obj;
      }
    }
    obj = { backgroundColor: "transparent" };
  };
  obj = { enableHome, isGradientTheme: isClientThemeOrCustomThemeActive, maxX: tmp3, interpolateColor: enableHome(3991).interpolateColor, panelSpringTranslateX, baseLowest: token, panelBg: token1 };
  fn.__closure = obj;
  fn.__workletHash = 4210709178426;
  fn.__initData = closure_9;
  const animatedStyle = enableHome(3991).useAnimatedStyle(fn);
  obj = { style: items };
  items = [tmp.container, animatedStyle];
  obj1 = {};
  if (enableHome) {
    if (drawerOpen) {
      let guildLisetContainerDefault = tmp.guildsListContainerGestured;
    }
    let items1 = [guildLisetContainerDefault, ];
    let tmp11 = null;
    if (!enableHome) {
      obj2 = { width: DM_WIDTH };
      tmp11 = obj2;
    }
    items1[1] = tmp11;
    obj1.style = items1;
    obj3 = { enableHome };
    obj1.children = jsx(panelSpringTranslateX(14857), { enableHome });
    obj.children = tmp8(tmp10, obj1);
    return tmp8(tmp9, obj);
  }
  guildLisetContainerDefault = tmp.guildLisetContainerDefault;
});
const result = require("computeMaxX").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx");

export const HomePanelContent = memoResult;
