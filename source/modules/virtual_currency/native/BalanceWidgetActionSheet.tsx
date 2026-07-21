// Module ID: 9790
// Function ID: 76054
// Name: balance
// Dependencies: []
// Exports: default

// Module 9790 (balance)
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, TouchableOpacity: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ AnalyticEvents: closure_6, Fonts: closure_7, HelpdeskArticles: closure_8 } = arg1(dependencyMap[2]));
const ContentDismissActionType = arg1(dependencyMap[3]).ContentDismissActionType;
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[4]));
const tmp4 = arg1(dependencyMap[4]);
let closure_12 = arg1(dependencyMap[26]).createStyles((color) => {
  let obj = {};
  obj = { <string:3056472402>: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007291122927982797, <string:1390371299>: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000239793813425, <string:3720490417>: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013449752576433297, <string:2968308837>: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001989371054, gap: importDefault(dependencyMap[13]).space.PX_12, paddingTop: importDefault(dependencyMap[13]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[13]).space.PX_16 };
  obj.actions = obj;
  obj = { position: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000025755445318370157, top: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000033995391321045464, left: 139264.00004577637, opacity: -1899441423638862700000000000000000000000000000000000000000000000000000000000000000000000000000000000000, borderRadius: 13343562689782770000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, gap: importDefault(dependencyMap[13]).space.PX_8 };
  obj.balanceHeader = obj;
  const obj1 = { color, fontSize: 36 };
  let obj4 = arg1(dependencyMap[27]);
  let num = 44;
  if (obj4.isAndroid()) {
    num = 36;
  }
  obj1.lineHeight = num;
  obj1.textAlignVertical = "center";
  obj.balanceText = obj1;
  const obj2 = { "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, marginBottom: importDefault(dependencyMap[13]).space.PX_16 };
  obj.content = obj2;
  obj.header = { paddingTop: importDefault(dependencyMap[13]).space.PX_12, paddingBottom: importDefault(dependencyMap[13]).space.PX_16 };
  obj4 = { backgroundColor: importDefault(dependencyMap[13]).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: importDefault(dependencyMap[13]).radii.round };
  obj.infoIconBackground = obj4;
  const obj3 = { paddingTop: importDefault(dependencyMap[13]).space.PX_12, paddingBottom: importDefault(dependencyMap[13]).space.PX_16 };
  obj.infoIconContainer = { position: "absolute", left: importDefault(dependencyMap[13]).space.PX_16, top: importDefault(dependencyMap[13]).space.PX_16, zIndex: 10 };
  const obj5 = { position: "absolute", left: importDefault(dependencyMap[13]).space.PX_16, top: importDefault(dependencyMap[13]).space.PX_16, zIndex: 10 };
  obj.promotionalBackground = { borderRadius: importDefault(dependencyMap[13]).radii.xl };
  obj.promotionalBackgroundContainer = {};
  obj.promotionalBannerAsset = {};
  const obj7 = { bhk: "_writePromises", bic: "%Reflect.getPrototypeOf%", gap: importDefault(dependencyMap[13]).space.PX_12, marginBottom: importDefault(dependencyMap[13]).space.PX_64 };
  obj.promotionalBannerContainer = obj7;
  obj.promotionalBannerText = { color, fontFamily: constants.PRIMARY_BOLD };
  return obj;
});
const obj = arg1(dependencyMap[26]);
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetActionSheet.tsx");

export default function _default(balance) {
  let primaryButtonConfig;
  let secondaryButtonConfig;
  let themeOverride;
  balance = balance.balance;
  const arg1 = balance;
  ({ themeOverride, primaryButtonConfig, secondaryButtonConfig, source: closure_1 } = balance);
  const ref = React.useRef(null);
  const dependencyMap = ref;
  const callback = React.useCallback(() => {
    const tmp = callback(ref[9]);
    tmp(callback(ref[10]).getArticleURL(constants2.ORBS_FAQ));
  }, []);
  const enabled = React.useContext(arg1(dependencyMap[11]).AccessibilityPreferencesContext).reducedMotion.enabled;
  const items = [balance];
  const memo = React.useMemo(() => {
    let num = 0;
    if (null != balance) {
      num = balance;
    }
    let tmp = null;
    if (num > 4100) {
      const obj = { backgroundVideo: balance(ref[5]).default, backgroundImage: balance(ref[6]).default, bannerImage: balance(ref[7]).default };
      const intl = balance(ref[8]).intl;
      obj.bannerText = intl.string(balance(ref[8]).t.LaMEFL);
      tmp = obj;
    }
    return tmp;
  }, items);
  if (tmp4) {
    themeOverride = "dark";
  }
  let obj = arg1(dependencyMap[12]);
  const token = obj.useToken(importDefault(dependencyMap[13]).colors.MOBILE_TEXT_HEADING_PRIMARY, themeOverride);
  const tmp6 = callback3(token);
  const effect = React.useEffect(() => {
    let obj = callback(ref[14]);
    obj = { type: "VIEW", source: callback, balance };
    obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, obj);
    if (!obj3.UNSAFE_isDismissibleContentDismissed(balance(ref[16]).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL)) {
      obj = { dismissAction: constants3.AUTO_DISMISS };
      const result = balance(ref[15]).UNSAFE_markDismissibleContentAsDismissed(balance(ref[16]).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL, obj);
      const obj4 = balance(ref[15]);
    }
  }, []);
  obj = { theme: themeOverride };
  obj = {
    ref,
    startExpanded: true,
    handleComponent() {
      return callback2(closure_4, {});
    },
    handleDisabled: false
  };
  const obj1 = {};
  const items1 = [tmp6.content, ];
  let promotionalBackgroundContainer = null != memo;
  if (promotionalBackgroundContainer) {
    promotionalBackgroundContainer = null != memo.backgroundVideo;
  }
  if (promotionalBackgroundContainer) {
    promotionalBackgroundContainer = null != memo.backgroundImage;
  }
  if (promotionalBackgroundContainer) {
    promotionalBackgroundContainer = tmp6.promotionalBackgroundContainer;
  }
  items1[1] = promotionalBackgroundContainer;
  obj1.style = items1;
  if (!(null != memo && null != memo.backgroundVideo && null != memo.backgroundImage)) {
    const items2 = [tmp11, , , , , ];
    const obj2 = {
      onPress() {
          const current = ref.current;
          if (null != current) {
            current.closeActionSheet();
          }
        }
    };
    items2[1] = callback(arg1(dependencyMap[21]).ActionSheetHeaderBar, obj2);
    const obj3 = { style: tmp6.infoIconContainer };
    const obj4 = { onPress: callback, accessibilityRole: "link" };
    const intl = arg1(dependencyMap[8]).intl;
    obj4.accessibilityLabel = intl.string(arg1(dependencyMap[8]).t.B1oJtQ);
    const obj5 = { style: tmp6.infoIconBackground };
    const obj6 = { size: "sm", color: importDefault(dependencyMap[13]).colors.INTERACTIVE_TEXT_DEFAULT };
    obj5.children = callback(arg1(dependencyMap[22]).CircleQuestionIcon, obj6);
    obj4.children = callback(closure_4, obj5);
    obj3.children = callback(closure_5, obj4);
    items2[2] = callback(closure_4, obj3);
    const obj7 = { style: tmp6.header };
    const obj8 = { style: tmp6.balanceHeader };
    const obj9 = { size: "lg", color: token };
    const items3 = [callback(arg1(dependencyMap[23]).OrbsIcon, obj9), ];
    const obj10 = { variant: "display-md", style: tmp6.balanceText };
    const intl2 = arg1(dependencyMap[8]).intl;
    const obj11 = {};
    let num8 = 0;
    if (null != balance) {
      num8 = balance;
    }
    obj11.orbAmount = num8;
    obj10.accessibilityLabel = intl2.formatToPlainString(arg1(dependencyMap[8]).t.W4DfeF, obj11);
    let num9 = 0;
    if (null != balance) {
      num9 = balance;
    }
    obj10.children = num9;
    items3[1] = callback(arg1(dependencyMap[24]).Text, obj10);
    obj8.children = items3;
    obj7.children = callback2(closure_4, obj8);
    items2[3] = callback(closure_4, obj7);
    let tmp27Result = null != memo && null != memo.bannerImage;
    if (tmp27Result) {
      const obj12 = { style: tmp6.promotionalBannerContainer };
      const obj13 = {};
      const obj14 = { uri: memo.bannerImage };
      obj13.source = obj14;
      obj13.style = tmp6.promotionalBannerAsset;
      obj13.resizeMode = "contain";
      const items4 = [callback(importDefault(dependencyMap[19]), obj13), ];
      let tmp32 = null != memo.bannerText;
      if (tmp32) {
        tmp32 = "" !== memo.bannerText;
      }
      if (tmp32) {
        const obj15 = { variant: "heading-xl/medium", style: tmp6.promotionalBannerText, children: memo.bannerText };
        tmp32 = callback(arg1(dependencyMap[24]).Text, obj15);
      }
      items4[1] = tmp32;
      obj12.children = items4;
      tmp27Result = callback2(closure_4, obj12);
      const tmp27 = callback2;
      const tmp28 = closure_4;
    }
    items2[4] = tmp27Result;
    const obj16 = { style: tmp6.actions };
    ({ buttonText: obj24.text, onButtonPress: obj24.onPress } = primaryButtonConfig);
    const items5 = [callback(arg1(dependencyMap[25]).Button, { height: "RBTree", accessibilityRole: "currentEmbeddedApplication", hasDiversityParent: "SyntaxError" }), ];
    ({ buttonText: obj25.text, onButtonPress: obj25.onPress } = secondaryButtonConfig);
    items5[1] = callback(arg1(dependencyMap[25]).Button, {});
    obj16.children = items5;
    items2[5] = callback2(closure_4, obj16);
    obj1.children = items2;
    obj.children = callback2(closure_4, obj1);
    obj.children = tmp8(arg1(dependencyMap[18]).BottomSheet, obj);
    return tmp8(arg1(dependencyMap[17]).ThemeContextProvider, obj);
  } else if (enabled) {
    const obj19 = {};
    const obj20 = { uri: memo.backgroundImage };
    obj19.source = obj20;
    obj19.style = tmp6.promotionalBackground;
    obj19.resizeMode = "cover";
    let tmp12Result = tmp12(importDefault(dependencyMap[19]), obj19);
  } else {
    const obj21 = {};
    const obj22 = { uri: memo.backgroundVideo };
    obj21.source = obj22;
    obj21.poster = memo.backgroundImage;
    obj21.style = tmp6.promotionalBackground;
    obj21.paused = enabled;
    obj21.posterResizeMode = "cover";
    obj21.resizeMode = "cover";
    obj21.preventsDisplaySleepDuringVideoPlayback = false;
    tmp12Result = tmp12(arg1(dependencyMap[20]).VideoComponent, obj21);
  }
};
