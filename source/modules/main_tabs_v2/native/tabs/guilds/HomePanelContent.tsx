// Module ID: 14938
// Function ID: 14939
// Name: HomePanelContent
// Dependencies: [19, 17, 14932, 676, 21, 4189, 4046, 14935, 14931, 8826, 3893, 712, 4050, 14939, 2]

// Module 14938 (HomePanelContent)
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import withEqualityFn from "withEqualityFn";
import { DM_WIDTH } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let c3 = importAllResult;
let closure_8 = createCacheKey.createStyles({ container: { flex: 1 }, guildsListContainerGestured: { flex: 1 }, guildLisetContainerDefault: { flex: 1 } });
let closure_9 = { code: "function HomePanelContentTsx1(){const{enableHome,isGradientTheme,maxX,interpolateColor,panelSpringTranslateX,baseLowest,panelBg}=this.__closure;if(!enableHome||isGradientTheme||maxX<=0){return{backgroundColor:'transparent'};}return{backgroundColor:interpolateColor(panelSpringTranslateX.get(),[0,maxX],[baseLowest,panelBg])};}" };
const memoResult = importAllResult.memo(() => {
  const tmp = callback();
  const MobileHomeDrawerExperiment = enableHome(4046).MobileHomeDrawerExperiment;
  enableHome = MobileHomeDrawerExperiment.useConfig({ location: "guilds" }).enableHome;
  let obj = enableHome(14935);
  const drawerOpen = obj.useDrawerOpen(enableHome);
  const panelSpringTranslateX = isClientThemeOrCustomThemeActive.useContext(enableHome(14931).HomeDrawerStateContext).panelSpringTranslateX;
  const tmp4 = token1((maxX) => maxX.maxX);
  const dependencyMap = tmp4;
  let obj1 = enableHome(8826);
  isClientThemeOrCustomThemeActive = obj1.useIsClientThemeOrCustomThemeActive();
  let obj2 = enableHome(3893);
  const token = obj2.useToken(panelSpringTranslateX(712).colors.BACKGROUND_BASE_LOWEST);
  let obj3 = enableHome(3893);
  token1 = obj3.useToken(panelSpringTranslateX(712).colors.PANEL_BG);
  const fn = function p() {
    if (enableHome) {
      if (!isClientThemeOrCustomThemeActive) {
        if (tmp4 > 0) {
          let obj = { backgroundColor: null };
          const items = [0, tmp2];
          const items1 = [token, token1];
          obj[0] = enableHome(tmp4[12]).interpolateColor(panelSpringTranslateX.get(), items, items1);
          const obj2 = enableHome(tmp4[12]);
        }
        return obj;
      }
    }
    obj = { backgroundColor: "transparent" };
  };
  obj = { enableHome, isGradientTheme: isClientThemeOrCustomThemeActive, maxX: tmp4, interpolateColor: enableHome(4050).interpolateColor, panelSpringTranslateX, baseLowest: token, panelBg: token1 };
  fn.__closure = obj;
  fn.__workletHash = 4210709178426;
  fn.__initData = closure_9;
  const animatedStyle = enableHome(4050).useAnimatedStyle(fn);
  obj = { style: items, children: null };
  items = [tmp.container, animatedStyle];
  if (enableHome) {
    if (drawerOpen) {
      let guildLisetContainerDefault = tmp.guildsListContainerGestured;
    }
    let items1 = [guildLisetContainerDefault, ];
    let tmp13 = null;
    if (!enableHome) {
      obj1 = { width: null };
      obj1[0] = DM_WIDTH;
      tmp13 = obj1;
    }
    obj2 = { style: null, children: null };
    items1[1] = tmp13;
    obj2[0] = items1;
    obj3 = { enableHome: null };
    obj3[0] = enableHome;
    obj2[1] = tmp10(panelSpringTranslateX(14939), obj3);
    obj[1] = tmp10(tmp12, obj2);
    return tmp10(tmp11, obj);
  }
  guildLisetContainerDefault = tmp.guildLisetContainerDefault;
});
const result = require("withEqualityFn").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx");

export const HomePanelContent = memoResult;
