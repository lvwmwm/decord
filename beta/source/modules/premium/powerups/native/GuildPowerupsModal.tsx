// Module ID: 11976
// Function ID: 11977
// Name: GuildPowerupsModal
// Dependencies: [19, 17, 4724, 21, 4836, 576, 4747, 11977, 11987, 12007, 1613, 6583, 12012, 12013, 12042, 5039, 4743, 5943, 1115, 2519, 7288, 5936, 12049, 12051, 12059, 12065, 12075, 12083, 2]
// Exports: default

// Module 11976 (GuildPowerupsModal)
import nativeDefault from "native" /* 576 */;
import openGuildPowerupsBottomSheetDefault from "openGuildPowerupsBottomSheet" /* 12013 */;
import openGuildPowerupsMultiPerkBottomSheetDefault from "openGuildPowerupsMultiPerkBottomSheet" /* 12042 */;
import GuildPowerupsLevelsSectionDefault from "GuildPowerupsLevelsSection" /* 12059 */;
import GuildPowerupsPerksSectionDefault from "GuildPowerupsPerksSection" /* 12065 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4724 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let type;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let rect;
let size;
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
({ BoostInfoType: metroRequire, GuildPowerupType: metroImportDefault } = GuildPowerupsConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, headerLeftContainer: obj3, headerRightContainer: obj4, boostInfoContainer: obj5, boostInfoSeparator: size, scrollView: obj6, boostButtonContainer: rect };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingLeft: nativeDefault.space.PX_16 };
obj4 = { paddingRight: nativeDefault.space.PX_16 };
obj5 = { flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: nativeDefault.space.PX_16 };
size = { width: 1, height: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj6 = { paddingBottom: nativeDefault.space.PX_96 };
rect = { paddingHorizontal: nativeDefault.space.PX_16, position: "absolute", bottom: 0, left: 0, right: 0 };
let closure_10 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsModal.tsx");

export default function GuildPowerupsModal(guildId) {
  let analyticsLocation;
  let autoOpenPerkId;
  let available;
  let bottom;
  let intl;
  let items1;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj4;
  let spent;
  let tmpResult2;
  let top;
  let total;
  guildId = guildId.guildId;
  ({ analyticsLocation, autoOpenPerkId } = guildId);
  const autoOpenRequestId = guildId.autoOpenRequestId;
  let buildGuildPowerupsSections;
  let ref;
  const tmp = guildId;
  let obj = guildId(autoOpenRequestId[6]);
  let tmp4 = autoOpenPerkId;
  const gameServerEnabled = obj.useGameServerEnabled(guildId, "GuildPowerupsModal");
  let tmp5 = autoOpenPerkId(autoOpenRequestId[7])(guildId);
  let obj2 = guildId(autoOpenRequestId[8]);
  const autoDismissGuildPowerupsNotifications = obj2.useAutoDismissGuildPowerupsNotifications(guildId);
  let tmp7 = autoOpenPerkId(autoOpenRequestId[9])(guildId, "GuildPowerupsModal", null != autoOpenPerkId);
  let tmp8 = autoOpenPerkId(autoOpenRequestId[10])();
  ({ bottom, top } = tmp8);
  let tmp9 = closure_10();
  let tmp10 = autoOpenPerkId(autoOpenRequestId[11]);
  if (null != analyticsLocation) {
    const items = [analyticsLocation];
    items1 = items;
  } else {
    items1 = [];
  }
  const analyticsLocations = tmp10(...items1).analyticsLocations;
  const tmpResult = tmp(autoOpenRequestId[12]);
  buildGuildPowerupsSections = tmpResult.useBuildGuildPowerupsSections(guildId, gameServerEnabled);
  ref = buildGuildPowerupsSections.useRef(undefined);
  const items2 = [autoOpenPerkId, autoOpenRequestId, guildId, buildGuildPowerupsSections];
  const effect = buildGuildPowerupsSections.useEffect(() => {
    if (null != autoOpenPerkId) {
      if (null != autoOpenRequestId) {
        if (ref.current !== tmp33) {
          const iter = buildGuildPowerupsSections[Symbol.iterator]();
          while (iter !== undefined) {
            let listings = iter.next().listings;
            for (const item10011 of listings) {
              let tmp5 = item10011;
              if ("singlePerk" === item10011.type) {
                if (tmp5.powerup.skuId === autoOpenPerkId) {
                  ref.current = autoOpenRequestId;
                  let obj2 = { guildId, powerup: tmp5.powerup };
                  let tmp29 = openGuildPowerupsBottomSheetDefault(obj2);
                  obj.return();
                  iter.return();
                }
              }
              if ("multiPerk" === tmp5.type) {
                if (tmp5.group !== autoOpenPerkId) {
                  let powerups = tmp5.powerups;
                }
                ref.current = autoOpenRequestId;
                let obj3 = {
                  guildId,
                  listing: tmp5,
                  onDismiss() {
                                const arr = autoOpenPerkId(autoOpenRequestId[15]);
                                return arr.pop();
                              }
                };
                let tmp19 = openGuildPowerupsMultiPerkBottomSheetDefault(obj3);
                obj.return();
                iter.return();
              }
              continue;
            }
            continue;
          }
        }
      }
    }
  }, items2);
  const callback = buildGuildPowerupsSections.useCallback(() => {
    const arr = autoOpenPerkId(autoOpenRequestId[15]);
    arr.pop();
  }, []);
  let tmp13 = tmp4(tmp2[16])(guildId);
  ({ available, spent, total } = tmp13);
  let obj3 = { value: analyticsLocations, children: closure_9(closure_5, obj4) };
  obj4 = { style: tmp9.container, children: items3 };
  const AnalyticsLocationProvider = tmp(tmp2[11]).AnalyticsLocationProvider;
  const obj5 = {
    title: intl.string(tmp4(autoOpenRequestId[19]).hjvcLO),
    headerTitle() {
      let intl;
      const obj = { title: intl.string(autoOpenPerkId(autoOpenRequestId[19]).hjvcLO) };
      const GenericHeaderTitle = guildId(autoOpenRequestId[20]).GenericHeaderTitle;
      intl = guildId(autoOpenRequestId[18]).intl;
      return closure_1_8(GenericHeaderTitle, obj);
    },
    headerTitleAlign: "center",
    headerStatusBarHeight: top + tmp4(autoOpenRequestId[5]).space.PX_8,
    headerLeft: tmpResult2.getHeaderCloseButton(callback),
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null
  };
  const Header = tmp(tmp2[17]).Header;
  intl = tmp(tmp2[18]).intl;
  ({ headerLeftContainer: obj6.headerLeftContainerStyle, headerRightContainer: obj6.headerRightContainerStyle } = tmp9);
  tmpResult2 = tmp(autoOpenRequestId[21]);
  items3 = [closure_8(Header, obj5), , ];
  const obj8 = { style: tmp9.boostInfoContainer, children: items4 };
  items4 = [, , , , ];
  const obj7 = { contentContainerStyle: tmp9.scrollView, children: items5 };
  const obj9 = { count: available, type: constants.AVAILABLE };
  items4[0] = closure_8(tmp4(autoOpenRequestId[22]), obj9);
  const obj10 = { style: tmp9.boostInfoSeparator };
  items4[1] = closure_8(closure_5, obj10);
  const obj11 = { count: spent, type: constants.SPENT };
  items4[2] = closure_8(tmp4(autoOpenRequestId[22]), obj11);
  const obj12 = { style: tmp9.boostInfoSeparator };
  items4[3] = closure_8(closure_5, obj12);
  const obj13 = { count: total, type: constants.TOTAL };
  items4[4] = closure_8(tmp4(autoOpenRequestId[22]), obj13);
  items5 = [
    closure_9(closure_5, obj8),
    closure_8(tmp4(tmp2[23]), { guildId }),
    buildGuildPowerupsSections.map((type) => {
      type = type.type;
      if (metroImportDefault.LEVEL === type) {
        const obj2 = { guildId, listings: type.listings };
        return metroImportAll(GuildPowerupsLevelsSectionDefault, obj2, type.type);
      } else if (tmp.PERK === type) {
        const obj = { guildId, listings: type.listings };
        return metroImportAll(GuildPowerupsPerksSectionDefault, obj, type.type);
      } else {
        return null;
      }
    }),
    closure_8(tmp4(tmp2[26]), { guildId })
  ];
  items3[1] = closure_9(ref, obj7);
  const obj14 = { style: items6, children: closure_8(tmp(autoOpenRequestId[27]).GuildPowerupsBoostButton, { guildId }) };
  items6 = [tmp9.boostButtonContainer, { paddingBottom: bottom }];
  items3[2] = closure_8(closure_5, obj14);
  return closure_8(AnalyticsLocationProvider, obj3);
};
