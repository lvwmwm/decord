// Module ID: 14891
// Function ID: 112193
// Name: PX_8
// Dependencies: []
// Exports: getScaledGameClaimNoticeHeight

// Module 14891 (PX_8)
let closure_3 = importDefault(dependencyMap[0]);
const View = arg1(dependencyMap[2]).View;
const importAllResult = importAll(dependencyMap[1]);
({ GuildFeatures: closure_5, RelativeMarketingURLs: closure_6 } = arg1(dependencyMap[3]));
const ContentDismissActionType = arg1(dependencyMap[4]).ContentDismissActionType;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
const PX_8 = importDefault(dependencyMap[6]).space.PX_8;
const PX_82 = importDefault(dependencyMap[6]).space.PX_8;
let closure_12 = 2 * importDefault(dependencyMap[6]).space.PX_12;
let obj1 = arg1(dependencyMap[10]);
let obj = {};
obj = { padding: importDefault(dependencyMap[6]).space.PX_12 };
obj.card = obj;
obj1 = { backgroundColor: null, flexDirection: null, justifyContent: null, alignItems: null, overflow: null, zIndex: null, minHeight: null, flex: null, top: importDefault(dependencyMap[6]).space.PX_12, right: importDefault(dependencyMap[6]).space.PX_12 };
obj.closeButton = obj1;
obj.centeredText = { textAlign: "center" };
const tmp3 = arg1(dependencyMap[5]);
obj.body = { marginTop: importDefault(dependencyMap[6]).space.PX_4 };
const obj2 = { marginTop: importDefault(dependencyMap[6]).space.PX_4 };
obj.cta = { marginTop: importDefault(dependencyMap[6]).space.PX_8 };
let closure_13 = obj1.createStyles(obj);
const obj3 = { marginTop: importDefault(dependencyMap[6]).space.PX_8 };
const memoResult = importAllResult.memo((arg0) => {
  let guild;
  ({ guild, markAsDismissed: closure_0 } = arg0);
  const tmp2 = callback4();
  let obj = arg1(dependencyMap[11]);
  const first = obj.useUnclaimedGameIdsForGuild(guild.id)[0];
  let tmp4 = null;
  if (null != first) {
    tmp4 = first;
  }
  const intl = arg1(dependencyMap[13]).intl;
  const tmp5 = importDefault(dependencyMap[12]);
  const coverImageUrl = importDefault(dependencyMap[12])(tmp4, intl.string(arg1(dependencyMap[13]).t.VQq92a)).coverImageUrl;
  if (null == coverImageUrl) {
    return null;
  } else {
    const features = guild.features;
    const hasItem = features.has(constants.VERIFIED);
    const intl4 = arg1(dependencyMap[13]).intl;
    const string = intl4.string;
    const t = arg1(dependencyMap[13]).t;
    if (hasItem) {
      let stringResult = string(t.uUARXe);
    } else {
      stringResult = string(t.0Dx29f);
    }
    obj = { variant: "secondary", style: tmp2.card };
    obj = {
      accessibilityRole: "button",
      onPress() {
          return callback(constants.USER_DISMISS);
        },
      style: tmp2.closeButton,
      children: callback2(arg1(dependencyMap[16]).XSmallIcon, {})
    };
    const items = [callback2(arg1(dependencyMap[15]).PressableOpacity, obj), , , , ];
    const obj1 = { imageSrc: coverImageUrl };
    items[1] = callback2(importDefault(dependencyMap[7]), obj1);
    const obj2 = { style: tmp2.centeredText };
    const intl2 = arg1(dependencyMap[13]).intl;
    const obj3 = { gameName: tmp7 };
    obj2.children = intl2.format(arg1(dependencyMap[13]).t.Q11WTQ, obj3);
    items[2] = callback2(arg1(dependencyMap[17]).Text, obj2);
    const obj4 = {};
    const items1 = [, ];
    ({ body: arr2[0], centeredText: arr2[1] } = tmp2);
    obj4.style = items1;
    obj4.children = stringResult;
    items[3] = callback2(arg1(dependencyMap[17]).Text, obj4);
    const obj5 = { style: tmp2.cta };
    const obj6 = { height: null, width: "020c495593a12ad5f00af9becbc3507d", paddingTop: "premium_role_unavailable", marginRight: "png", position: true };
    const intl3 = arg1(dependencyMap[13]).intl;
    obj6.text = intl3.string(arg1(dependencyMap[13]).t.2u6ZlY);
    obj6.icon = callback2(arg1(dependencyMap[19]).LinkExternalSmallIcon, { flex: false, flexGrow: null });
    // CreateGeneratorClosureLongIndex (0x67)
    obj6.onPress = callback(tmp);
    obj5.children = callback2(arg1(dependencyMap[18]).Button, obj6);
    items[4] = callback2(View, obj5);
    obj.children = items;
    return callback3(arg1(dependencyMap[14]).Card, obj);
  }
  const tmp5Result = importDefault(dependencyMap[12])(tmp4, intl.string(arg1(dependencyMap[13]).t.VQq92a));
});
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/game_claim/native/GameClaimCoachmark.tsx");

export default memoResult;
export const GAME_CLAIM_NOTICE_MARGIN_TOP = PX_8;
export const GAME_CLAIM_NOTICE_MARGIN_BOTTOM = PX_82;
export const getScaledGameClaimNoticeHeight = function getScaledGameClaimNoticeHeight(fontScale) {
  const sum = PX_8 + closure_12;
  const sum1 = sum + arg1(dependencyMap[7]).CARD_STACK_HEIGHT;
  const sum2 = sum1 + arg1(dependencyMap[8]).scaleTextLineHeight("text-md/medium", fontScale);
  const sum3 = sum2 + importDefault(dependencyMap[6]).space.PX_4;
  const obj = arg1(dependencyMap[8]);
  const result = 2 * arg1(dependencyMap[8]).scaleTextLineHeight("text-sm/normal", fontScale);
  const sum4 = sum3 + result + importDefault(dependencyMap[6]).space.PX_8;
  return sum4 + arg1(dependencyMap[9]).SMALL_BUTTON_HEIGHT + PX_82;
};
