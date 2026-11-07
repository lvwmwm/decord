// Module ID: 17290
// Function ID: 17291
// Name: BountiesNuxPromoSheet
// Dependencies: [19, 17, 21, 5140, 575, 5374, 17289, 10956, 1113, 17291, 5758, 2]
// Exports: default

// Module 17290 (BountiesNuxPromoSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import components_Button_Button from "components/Button/Button" /* 5758 */;
import PromoSheet2 from "PromoSheet" /* 10956 */;
import openBountiesNuxPromoSheet from "openBountiesNuxPromoSheet" /* 17289 */;
import BountiesPosterSpotIllustration from "BountiesPosterSpotIllustration" /* 17291 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { illustrationContainer: obj2 };
obj2 = { paddingTop: nativeDefault.space.PX_12 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/quests/native/BountiesNuxPromoSheet.tsx");

export default function BountiesNuxPromoSheet() {
  let intl3;
  let intl4;
  const tmp = closure_6();
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(openBountiesNuxPromoSheet.PROMO_SHEET_KEY);
  }, []);
  const PromoSheet = PromoSheet2.PromoSheet;
  const intl = intl5.intl;
  const intl2 = intl5.intl;
  const format = intl2.format;
  const obj2 = { productNamePlural: intl3.string(intl5.t["JDvNF+"]) };
  const uLPcSI = intl5.t.uLPcSI;
  intl3 = intl5.intl;
  ({ style: tmp.illustrationContainer, children: jsx(BountiesPosterSpotIllustration.BountiesPosterSpotIllustration, { width: 273, height: 205 }) });
  ({ grow: true, size: "lg", variant: "primary", text: intl4.string(intl5.t.cpT0Cq), onPress: callback });
  const Button = components_Button_Button.Button;
  intl4 = intl5.intl;
  return <PromoSheet gradientColor="purple" title={intl.string(intl5.t.DDpHZG)} description={format(uLPcSI, obj2)} illustration={null} actions={null} />;
};
